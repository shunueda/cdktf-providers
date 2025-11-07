// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RateLimiterPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#annotations RateLimiterPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#description RateLimiterPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#disable RateLimiterPolicy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#id RateLimiterPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#labels RateLimiterPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#name RateLimiterPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#namespace RateLimiterPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#rules RateLimiterPolicy#rules}
  */
  readonly rules?: RateLimiterPolicyRules[] | cdktf.IResolvable;
}
export interface RateLimiterPolicyRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#description RateLimiterPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#name RateLimiterPolicy#name}
  */
  readonly name: string;
}

export function rateLimiterPolicyRulesMetadataToTerraform(struct?: RateLimiterPolicyRulesMetadataOutputReference | RateLimiterPolicyRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function rateLimiterPolicyRulesMetadataToHclTerraform(struct?: RateLimiterPolicyRulesMetadataOutputReference | RateLimiterPolicyRulesMetadata): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterPolicyRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimiterPolicyRulesMetadata | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterPolicyRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
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
}
export interface RateLimiterPolicyRulesSpecAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#as_numbers RateLimiterPolicy#as_numbers}
  */
  readonly asNumbers: number[];
}

export function rateLimiterPolicyRulesSpecAsnListStructToTerraform(struct?: RateLimiterPolicyRulesSpecAsnListStructOutputReference | RateLimiterPolicyRulesSpecAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function rateLimiterPolicyRulesSpecAsnListStructToHclTerraform(struct?: RateLimiterPolicyRulesSpecAsnListStructOutputReference | RateLimiterPolicyRulesSpecAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterPolicyRulesSpecAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimiterPolicyRulesSpecAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterPolicyRulesSpecAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface RateLimiterPolicyRulesSpecAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#name RateLimiterPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#namespace RateLimiterPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#tenant RateLimiterPolicy#tenant}
  */
  readonly tenant?: string;
}

export function rateLimiterPolicyRulesSpecAsnMatcherAsnSetsToTerraform(struct?: RateLimiterPolicyRulesSpecAsnMatcherAsnSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function rateLimiterPolicyRulesSpecAsnMatcherAsnSetsToHclTerraform(struct?: RateLimiterPolicyRulesSpecAsnMatcherAsnSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterPolicyRulesSpecAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RateLimiterPolicyRulesSpecAsnMatcherAsnSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterPolicyRulesSpecAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class RateLimiterPolicyRulesSpecAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : RateLimiterPolicyRulesSpecAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): RateLimiterPolicyRulesSpecAsnMatcherAsnSetsOutputReference {
    return new RateLimiterPolicyRulesSpecAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RateLimiterPolicyRulesSpecAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#asn_sets RateLimiterPolicy#asn_sets}
  */
  readonly asnSets: RateLimiterPolicyRulesSpecAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function rateLimiterPolicyRulesSpecAsnMatcherToTerraform(struct?: RateLimiterPolicyRulesSpecAsnMatcherOutputReference | RateLimiterPolicyRulesSpecAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(rateLimiterPolicyRulesSpecAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function rateLimiterPolicyRulesSpecAsnMatcherToHclTerraform(struct?: RateLimiterPolicyRulesSpecAsnMatcherOutputReference | RateLimiterPolicyRulesSpecAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(rateLimiterPolicyRulesSpecAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterPolicyRulesSpecAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterPolicyRulesSpecAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimiterPolicyRulesSpecAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterPolicyRulesSpecAsnMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asnSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new RateLimiterPolicyRulesSpecAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: RateLimiterPolicyRulesSpecAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface RateLimiterPolicyRulesSpecCountryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#country_codes RateLimiterPolicy#country_codes}
  */
  readonly countryCodes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#invert_match RateLimiterPolicy#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
}

export function rateLimiterPolicyRulesSpecCountryListStructToTerraform(struct?: RateLimiterPolicyRulesSpecCountryListStructOutputReference | RateLimiterPolicyRulesSpecCountryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countryCodes),
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
  }
}


export function rateLimiterPolicyRulesSpecCountryListStructToHclTerraform(struct?: RateLimiterPolicyRulesSpecCountryListStructOutputReference | RateLimiterPolicyRulesSpecCountryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countryCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterPolicyRulesSpecCountryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimiterPolicyRulesSpecCountryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCodes = this._countryCodes;
    }
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterPolicyRulesSpecCountryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._countryCodes = undefined;
      this._invertMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._countryCodes = value.countryCodes;
      this._invertMatch = value.invertMatch;
    }
  }

  // country_codes - computed: false, optional: false, required: true
  private _countryCodes?: string[]; 
  public get countryCodes() {
    return this.getListAttribute('country_codes');
  }
  public set countryCodes(value: string[]) {
    this._countryCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodesInput() {
    return this._countryCodes;
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }
}
export interface RateLimiterPolicyRulesSpecCustomRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#name RateLimiterPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#namespace RateLimiterPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#tenant RateLimiterPolicy#tenant}
  */
  readonly tenant?: string;
}

export function rateLimiterPolicyRulesSpecCustomRateLimiterToTerraform(struct?: RateLimiterPolicyRulesSpecCustomRateLimiterOutputReference | RateLimiterPolicyRulesSpecCustomRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function rateLimiterPolicyRulesSpecCustomRateLimiterToHclTerraform(struct?: RateLimiterPolicyRulesSpecCustomRateLimiterOutputReference | RateLimiterPolicyRulesSpecCustomRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterPolicyRulesSpecCustomRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimiterPolicyRulesSpecCustomRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterPolicyRulesSpecCustomRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface RateLimiterPolicyRulesSpecDomainMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#exact_values RateLimiterPolicy#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#regex_values RateLimiterPolicy#regex_values}
  */
  readonly regexValues?: string[];
}

export function rateLimiterPolicyRulesSpecDomainMatcherToTerraform(struct?: RateLimiterPolicyRulesSpecDomainMatcherOutputReference | RateLimiterPolicyRulesSpecDomainMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
  }
}


export function rateLimiterPolicyRulesSpecDomainMatcherToHclTerraform(struct?: RateLimiterPolicyRulesSpecDomainMatcherOutputReference | RateLimiterPolicyRulesSpecDomainMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterPolicyRulesSpecDomainMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimiterPolicyRulesSpecDomainMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterPolicyRulesSpecDomainMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }
}
export interface RateLimiterPolicyRulesSpecHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#exact_values RateLimiterPolicy#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#regex_values RateLimiterPolicy#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#transformers RateLimiterPolicy#transformers}
  */
  readonly transformers?: string[];
}

export function rateLimiterPolicyRulesSpecHeadersItemToTerraform(struct?: RateLimiterPolicyRulesSpecHeadersItemOutputReference | RateLimiterPolicyRulesSpecHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function rateLimiterPolicyRulesSpecHeadersItemToHclTerraform(struct?: RateLimiterPolicyRulesSpecHeadersItemOutputReference | RateLimiterPolicyRulesSpecHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterPolicyRulesSpecHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimiterPolicyRulesSpecHeadersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterPolicyRulesSpecHeadersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface RateLimiterPolicyRulesSpecHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#check_not_present RateLimiterPolicy#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#check_present RateLimiterPolicy#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#invert_matcher RateLimiterPolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#name RateLimiterPolicy#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#item RateLimiterPolicy#item}
  */
  readonly item?: RateLimiterPolicyRulesSpecHeadersItem;
}

export function rateLimiterPolicyRulesSpecHeadersToTerraform(struct?: RateLimiterPolicyRulesSpecHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: rateLimiterPolicyRulesSpecHeadersItemToTerraform(struct!.item),
  }
}


export function rateLimiterPolicyRulesSpecHeadersToHclTerraform(struct?: RateLimiterPolicyRulesSpecHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item: {
      value: rateLimiterPolicyRulesSpecHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterPolicyRulesSpecHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterPolicyRulesSpecHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RateLimiterPolicyRulesSpecHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterPolicyRulesSpecHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // item - computed: false, optional: true, required: false
  private _item = new RateLimiterPolicyRulesSpecHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: RateLimiterPolicyRulesSpecHeadersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class RateLimiterPolicyRulesSpecHeadersList extends cdktf.ComplexList {
  public internalValue? : RateLimiterPolicyRulesSpecHeaders[] | cdktf.IResolvable

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
  public get(index: number): RateLimiterPolicyRulesSpecHeadersOutputReference {
    return new RateLimiterPolicyRulesSpecHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RateLimiterPolicyRulesSpecHttpMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#invert_matcher RateLimiterPolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#methods RateLimiterPolicy#methods}
  */
  readonly methods?: string[];
}

export function rateLimiterPolicyRulesSpecHttpMethodToTerraform(struct?: RateLimiterPolicyRulesSpecHttpMethodOutputReference | RateLimiterPolicyRulesSpecHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function rateLimiterPolicyRulesSpecHttpMethodToHclTerraform(struct?: RateLimiterPolicyRulesSpecHttpMethodOutputReference | RateLimiterPolicyRulesSpecHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterPolicyRulesSpecHttpMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimiterPolicyRulesSpecHttpMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterPolicyRulesSpecHttpMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._methods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._methods = value.methods;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}
export interface RateLimiterPolicyRulesSpecIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#name RateLimiterPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#namespace RateLimiterPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#tenant RateLimiterPolicy#tenant}
  */
  readonly tenant?: string;
}

export function rateLimiterPolicyRulesSpecIpMatcherPrefixSetsToTerraform(struct?: RateLimiterPolicyRulesSpecIpMatcherPrefixSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function rateLimiterPolicyRulesSpecIpMatcherPrefixSetsToHclTerraform(struct?: RateLimiterPolicyRulesSpecIpMatcherPrefixSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterPolicyRulesSpecIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RateLimiterPolicyRulesSpecIpMatcherPrefixSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterPolicyRulesSpecIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class RateLimiterPolicyRulesSpecIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : RateLimiterPolicyRulesSpecIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): RateLimiterPolicyRulesSpecIpMatcherPrefixSetsOutputReference {
    return new RateLimiterPolicyRulesSpecIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RateLimiterPolicyRulesSpecIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#invert_matcher RateLimiterPolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#prefix_sets RateLimiterPolicy#prefix_sets}
  */
  readonly prefixSets: RateLimiterPolicyRulesSpecIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function rateLimiterPolicyRulesSpecIpMatcherToTerraform(struct?: RateLimiterPolicyRulesSpecIpMatcherOutputReference | RateLimiterPolicyRulesSpecIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(rateLimiterPolicyRulesSpecIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function rateLimiterPolicyRulesSpecIpMatcherToHclTerraform(struct?: RateLimiterPolicyRulesSpecIpMatcherOutputReference | RateLimiterPolicyRulesSpecIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_sets: {
      value: cdktf.listMapperHcl(rateLimiterPolicyRulesSpecIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterPolicyRulesSpecIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterPolicyRulesSpecIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimiterPolicyRulesSpecIpMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixSets = this._prefixSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterPolicyRulesSpecIpMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._prefixSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._prefixSets.internalValue = value.prefixSets;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_sets - computed: false, optional: false, required: true
  private _prefixSets = new RateLimiterPolicyRulesSpecIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: RateLimiterPolicyRulesSpecIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface RateLimiterPolicyRulesSpecIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#invert_match RateLimiterPolicy#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#ip_prefixes RateLimiterPolicy#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#ipv6_prefixes RateLimiterPolicy#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function rateLimiterPolicyRulesSpecIpPrefixListStructToTerraform(struct?: RateLimiterPolicyRulesSpecIpPrefixListStructOutputReference | RateLimiterPolicyRulesSpecIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function rateLimiterPolicyRulesSpecIpPrefixListStructToHclTerraform(struct?: RateLimiterPolicyRulesSpecIpPrefixListStructOutputReference | RateLimiterPolicyRulesSpecIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterPolicyRulesSpecIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimiterPolicyRulesSpecIpPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterPolicyRulesSpecIpPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatch = value.invertMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface RateLimiterPolicyRulesSpecPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#exact_values RateLimiterPolicy#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#invert_matcher RateLimiterPolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#prefix_values RateLimiterPolicy#prefix_values}
  */
  readonly prefixValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#regex_values RateLimiterPolicy#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#suffix_values RateLimiterPolicy#suffix_values}
  */
  readonly suffixValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#transformers RateLimiterPolicy#transformers}
  */
  readonly transformers?: string[];
}

export function rateLimiterPolicyRulesSpecPathToTerraform(struct?: RateLimiterPolicyRulesSpecPathOutputReference | RateLimiterPolicyRulesSpecPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    suffix_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.suffixValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function rateLimiterPolicyRulesSpecPathToHclTerraform(struct?: RateLimiterPolicyRulesSpecPathOutputReference | RateLimiterPolicyRulesSpecPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    suffix_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.suffixValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterPolicyRulesSpecPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimiterPolicyRulesSpecPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixValues = this._prefixValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._suffixValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValues = this._suffixValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterPolicyRulesSpecPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._invertMatcher = undefined;
      this._prefixValues = undefined;
      this._regexValues = undefined;
      this._suffixValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._invertMatcher = value.invertMatcher;
      this._prefixValues = value.prefixValues;
      this._regexValues = value.regexValues;
      this._suffixValues = value.suffixValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_values - computed: false, optional: true, required: false
  private _prefixValues?: string[]; 
  public get prefixValues() {
    return this.getListAttribute('prefix_values');
  }
  public set prefixValues(value: string[]) {
    this._prefixValues = value;
  }
  public resetPrefixValues() {
    this._prefixValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixValuesInput() {
    return this._prefixValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // suffix_values - computed: false, optional: true, required: false
  private _suffixValues?: string[]; 
  public get suffixValues() {
    return this.getListAttribute('suffix_values');
  }
  public set suffixValues(value: string[]) {
    this._suffixValues = value;
  }
  public resetSuffixValues() {
    this._suffixValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValuesInput() {
    return this._suffixValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface RateLimiterPolicyRulesSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#any_asn RateLimiterPolicy#any_asn}
  */
  readonly anyAsn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#any_country RateLimiterPolicy#any_country}
  */
  readonly anyCountry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#any_ip RateLimiterPolicy#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#apply_rate_limiter RateLimiterPolicy#apply_rate_limiter}
  */
  readonly applyRateLimiter?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#bypass_rate_limiter RateLimiterPolicy#bypass_rate_limiter}
  */
  readonly bypassRateLimiter?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#asn_list RateLimiterPolicy#asn_list}
  */
  readonly asnList?: RateLimiterPolicyRulesSpecAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#asn_matcher RateLimiterPolicy#asn_matcher}
  */
  readonly asnMatcher?: RateLimiterPolicyRulesSpecAsnMatcher;
  /**
  * country_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#country_list RateLimiterPolicy#country_list}
  */
  readonly countryList?: RateLimiterPolicyRulesSpecCountryListStruct;
  /**
  * custom_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#custom_rate_limiter RateLimiterPolicy#custom_rate_limiter}
  */
  readonly customRateLimiter?: RateLimiterPolicyRulesSpecCustomRateLimiter;
  /**
  * domain_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#domain_matcher RateLimiterPolicy#domain_matcher}
  */
  readonly domainMatcher?: RateLimiterPolicyRulesSpecDomainMatcher;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#headers RateLimiterPolicy#headers}
  */
  readonly headers?: RateLimiterPolicyRulesSpecHeaders[] | cdktf.IResolvable;
  /**
  * http_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#http_method RateLimiterPolicy#http_method}
  */
  readonly httpMethod?: RateLimiterPolicyRulesSpecHttpMethod;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#ip_matcher RateLimiterPolicy#ip_matcher}
  */
  readonly ipMatcher?: RateLimiterPolicyRulesSpecIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#ip_prefix_list RateLimiterPolicy#ip_prefix_list}
  */
  readonly ipPrefixList?: RateLimiterPolicyRulesSpecIpPrefixListStruct;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#path RateLimiterPolicy#path}
  */
  readonly path?: RateLimiterPolicyRulesSpecPath;
}

export function rateLimiterPolicyRulesSpecToTerraform(struct?: RateLimiterPolicyRulesSpecOutputReference | RateLimiterPolicyRulesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_asn: cdktf.booleanToTerraform(struct!.anyAsn),
    any_country: cdktf.booleanToTerraform(struct!.anyCountry),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    apply_rate_limiter: cdktf.booleanToTerraform(struct!.applyRateLimiter),
    bypass_rate_limiter: cdktf.booleanToTerraform(struct!.bypassRateLimiter),
    asn_list: rateLimiterPolicyRulesSpecAsnListStructToTerraform(struct!.asnList),
    asn_matcher: rateLimiterPolicyRulesSpecAsnMatcherToTerraform(struct!.asnMatcher),
    country_list: rateLimiterPolicyRulesSpecCountryListStructToTerraform(struct!.countryList),
    custom_rate_limiter: rateLimiterPolicyRulesSpecCustomRateLimiterToTerraform(struct!.customRateLimiter),
    domain_matcher: rateLimiterPolicyRulesSpecDomainMatcherToTerraform(struct!.domainMatcher),
    headers: cdktf.listMapper(rateLimiterPolicyRulesSpecHeadersToTerraform, true)(struct!.headers),
    http_method: rateLimiterPolicyRulesSpecHttpMethodToTerraform(struct!.httpMethod),
    ip_matcher: rateLimiterPolicyRulesSpecIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: rateLimiterPolicyRulesSpecIpPrefixListStructToTerraform(struct!.ipPrefixList),
    path: rateLimiterPolicyRulesSpecPathToTerraform(struct!.path),
  }
}


export function rateLimiterPolicyRulesSpecToHclTerraform(struct?: RateLimiterPolicyRulesSpecOutputReference | RateLimiterPolicyRulesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_asn: {
      value: cdktf.booleanToHclTerraform(struct!.anyAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_country: {
      value: cdktf.booleanToHclTerraform(struct!.anyCountry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    apply_rate_limiter: {
      value: cdktf.booleanToHclTerraform(struct!.applyRateLimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bypass_rate_limiter: {
      value: cdktf.booleanToHclTerraform(struct!.bypassRateLimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asn_list: {
      value: rateLimiterPolicyRulesSpecAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterPolicyRulesSpecAsnListStructList",
    },
    asn_matcher: {
      value: rateLimiterPolicyRulesSpecAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterPolicyRulesSpecAsnMatcherList",
    },
    country_list: {
      value: rateLimiterPolicyRulesSpecCountryListStructToHclTerraform(struct!.countryList),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterPolicyRulesSpecCountryListStructList",
    },
    custom_rate_limiter: {
      value: rateLimiterPolicyRulesSpecCustomRateLimiterToHclTerraform(struct!.customRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterPolicyRulesSpecCustomRateLimiterList",
    },
    domain_matcher: {
      value: rateLimiterPolicyRulesSpecDomainMatcherToHclTerraform(struct!.domainMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterPolicyRulesSpecDomainMatcherList",
    },
    headers: {
      value: cdktf.listMapperHcl(rateLimiterPolicyRulesSpecHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterPolicyRulesSpecHeadersList",
    },
    http_method: {
      value: rateLimiterPolicyRulesSpecHttpMethodToHclTerraform(struct!.httpMethod),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterPolicyRulesSpecHttpMethodList",
    },
    ip_matcher: {
      value: rateLimiterPolicyRulesSpecIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterPolicyRulesSpecIpMatcherList",
    },
    ip_prefix_list: {
      value: rateLimiterPolicyRulesSpecIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterPolicyRulesSpecIpPrefixListStructList",
    },
    path: {
      value: rateLimiterPolicyRulesSpecPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterPolicyRulesSpecPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterPolicyRulesSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RateLimiterPolicyRulesSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyAsn = this._anyAsn;
    }
    if (this._anyCountry !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyCountry = this._anyCountry;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._applyRateLimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyRateLimiter = this._applyRateLimiter;
    }
    if (this._bypassRateLimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassRateLimiter = this._bypassRateLimiter;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._countryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryList = this._countryList?.internalValue;
    }
    if (this._customRateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRateLimiter = this._customRateLimiter?.internalValue;
    }
    if (this._domainMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainMatcher = this._domainMatcher?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._httpMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterPolicyRulesSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyAsn = undefined;
      this._anyCountry = undefined;
      this._anyIp = undefined;
      this._applyRateLimiter = undefined;
      this._bypassRateLimiter = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._countryList.internalValue = undefined;
      this._customRateLimiter.internalValue = undefined;
      this._domainMatcher.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._httpMethod.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyAsn = value.anyAsn;
      this._anyCountry = value.anyCountry;
      this._anyIp = value.anyIp;
      this._applyRateLimiter = value.applyRateLimiter;
      this._bypassRateLimiter = value.bypassRateLimiter;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._countryList.internalValue = value.countryList;
      this._customRateLimiter.internalValue = value.customRateLimiter;
      this._domainMatcher.internalValue = value.domainMatcher;
      this._headers.internalValue = value.headers;
      this._httpMethod.internalValue = value.httpMethod;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._path.internalValue = value.path;
    }
  }

  // any_asn - computed: false, optional: true, required: false
  private _anyAsn?: boolean | cdktf.IResolvable; 
  public get anyAsn() {
    return this.getBooleanAttribute('any_asn');
  }
  public set anyAsn(value: boolean | cdktf.IResolvable) {
    this._anyAsn = value;
  }
  public resetAnyAsn() {
    this._anyAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyAsnInput() {
    return this._anyAsn;
  }

  // any_country - computed: false, optional: true, required: false
  private _anyCountry?: boolean | cdktf.IResolvable; 
  public get anyCountry() {
    return this.getBooleanAttribute('any_country');
  }
  public set anyCountry(value: boolean | cdktf.IResolvable) {
    this._anyCountry = value;
  }
  public resetAnyCountry() {
    this._anyCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyCountryInput() {
    return this._anyCountry;
  }

  // any_ip - computed: false, optional: true, required: false
  private _anyIp?: boolean | cdktf.IResolvable; 
  public get anyIp() {
    return this.getBooleanAttribute('any_ip');
  }
  public set anyIp(value: boolean | cdktf.IResolvable) {
    this._anyIp = value;
  }
  public resetAnyIp() {
    this._anyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIpInput() {
    return this._anyIp;
  }

  // apply_rate_limiter - computed: false, optional: true, required: false
  private _applyRateLimiter?: boolean | cdktf.IResolvable; 
  public get applyRateLimiter() {
    return this.getBooleanAttribute('apply_rate_limiter');
  }
  public set applyRateLimiter(value: boolean | cdktf.IResolvable) {
    this._applyRateLimiter = value;
  }
  public resetApplyRateLimiter() {
    this._applyRateLimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyRateLimiterInput() {
    return this._applyRateLimiter;
  }

  // bypass_rate_limiter - computed: false, optional: true, required: false
  private _bypassRateLimiter?: boolean | cdktf.IResolvable; 
  public get bypassRateLimiter() {
    return this.getBooleanAttribute('bypass_rate_limiter');
  }
  public set bypassRateLimiter(value: boolean | cdktf.IResolvable) {
    this._bypassRateLimiter = value;
  }
  public resetBypassRateLimiter() {
    this._bypassRateLimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassRateLimiterInput() {
    return this._bypassRateLimiter;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new RateLimiterPolicyRulesSpecAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: RateLimiterPolicyRulesSpecAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // asn_matcher - computed: false, optional: true, required: false
  private _asnMatcher = new RateLimiterPolicyRulesSpecAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: RateLimiterPolicyRulesSpecAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // country_list - computed: false, optional: true, required: false
  private _countryList = new RateLimiterPolicyRulesSpecCountryListStructOutputReference(this, "country_list");
  public get countryList() {
    return this._countryList;
  }
  public putCountryList(value: RateLimiterPolicyRulesSpecCountryListStruct) {
    this._countryList.internalValue = value;
  }
  public resetCountryList() {
    this._countryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryListInput() {
    return this._countryList.internalValue;
  }

  // custom_rate_limiter - computed: false, optional: true, required: false
  private _customRateLimiter = new RateLimiterPolicyRulesSpecCustomRateLimiterOutputReference(this, "custom_rate_limiter");
  public get customRateLimiter() {
    return this._customRateLimiter;
  }
  public putCustomRateLimiter(value: RateLimiterPolicyRulesSpecCustomRateLimiter) {
    this._customRateLimiter.internalValue = value;
  }
  public resetCustomRateLimiter() {
    this._customRateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRateLimiterInput() {
    return this._customRateLimiter.internalValue;
  }

  // domain_matcher - computed: false, optional: true, required: false
  private _domainMatcher = new RateLimiterPolicyRulesSpecDomainMatcherOutputReference(this, "domain_matcher");
  public get domainMatcher() {
    return this._domainMatcher;
  }
  public putDomainMatcher(value: RateLimiterPolicyRulesSpecDomainMatcher) {
    this._domainMatcher.internalValue = value;
  }
  public resetDomainMatcher() {
    this._domainMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMatcherInput() {
    return this._domainMatcher.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new RateLimiterPolicyRulesSpecHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: RateLimiterPolicyRulesSpecHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod = new RateLimiterPolicyRulesSpecHttpMethodOutputReference(this, "http_method");
  public get httpMethod() {
    return this._httpMethod;
  }
  public putHttpMethod(value: RateLimiterPolicyRulesSpecHttpMethod) {
    this._httpMethod.internalValue = value;
  }
  public resetHttpMethod() {
    this._httpMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new RateLimiterPolicyRulesSpecIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: RateLimiterPolicyRulesSpecIpMatcher) {
    this._ipMatcher.internalValue = value;
  }
  public resetIpMatcher() {
    this._ipMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMatcherInput() {
    return this._ipMatcher.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new RateLimiterPolicyRulesSpecIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: RateLimiterPolicyRulesSpecIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new RateLimiterPolicyRulesSpecPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: RateLimiterPolicyRulesSpecPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}
export interface RateLimiterPolicyRules {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#metadata RateLimiterPolicy#metadata}
  */
  readonly metadata: RateLimiterPolicyRulesMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#spec RateLimiterPolicy#spec}
  */
  readonly spec: RateLimiterPolicyRulesSpec;
}

export function rateLimiterPolicyRulesToTerraform(struct?: RateLimiterPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: rateLimiterPolicyRulesMetadataToTerraform(struct!.metadata),
    spec: rateLimiterPolicyRulesSpecToTerraform(struct!.spec),
  }
}


export function rateLimiterPolicyRulesToHclTerraform(struct?: RateLimiterPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: rateLimiterPolicyRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterPolicyRulesMetadataList",
    },
    spec: {
      value: rateLimiterPolicyRulesSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "RateLimiterPolicyRulesSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RateLimiterPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RateLimiterPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RateLimiterPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new RateLimiterPolicyRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: RateLimiterPolicyRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new RateLimiterPolicyRulesSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: RateLimiterPolicyRulesSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class RateLimiterPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : RateLimiterPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): RateLimiterPolicyRulesOutputReference {
    return new RateLimiterPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy volterra_rate_limiter_policy}
*/
export class RateLimiterPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_rate_limiter_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RateLimiterPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RateLimiterPolicy to import
  * @param importFromId The id of the existing RateLimiterPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RateLimiterPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_rate_limiter_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/rate_limiter_policy volterra_rate_limiter_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RateLimiterPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: RateLimiterPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_rate_limiter_policy',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new RateLimiterPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: RateLimiterPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      rules: cdktf.listMapper(rateLimiterPolicyRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(rateLimiterPolicyRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RateLimiterPolicyRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
