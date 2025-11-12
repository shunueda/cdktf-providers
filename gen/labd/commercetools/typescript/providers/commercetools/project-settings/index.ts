// https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#countries ProjectSettings#countries}
  */
  readonly countries?: string[];
  /**
  * A three-digit currency code as per [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#currencies ProjectSettings#currencies}
  */
  readonly currencies?: string[];
  /**
  * Enable the Search Indexing of business  units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#enable_search_index_business_units ProjectSettings#enable_search_index_business_units}
  */
  readonly enableSearchIndexBusinessUnits?: boolean | cdktf.IResolvable;
  /**
  * Enable the Search Indexing of customers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#enable_search_index_customers ProjectSettings#enable_search_index_customers}
  */
  readonly enableSearchIndexCustomers?: boolean | cdktf.IResolvable;
  /**
  * Enable the Search Indexing of orders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#enable_search_index_orders ProjectSettings#enable_search_index_orders}
  */
  readonly enableSearchIndexOrders?: boolean | cdktf.IResolvable;
  /**
  * Enable the Search Indexing of products
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#enable_search_index_product_search ProjectSettings#enable_search_index_product_search}
  */
  readonly enableSearchIndexProductSearch?: boolean | cdktf.IResolvable;
  /**
  * Enable the Search Indexing of product projections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#enable_search_index_products ProjectSettings#enable_search_index_products}
  */
  readonly enableSearchIndexProducts?: boolean | cdktf.IResolvable;
  /**
  * [IETF Language Tag](https://en.wikipedia.org/wiki/IETF_language_tag)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#languages ProjectSettings#languages}
  */
  readonly languages?: string[];
  /**
  * The name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#name ProjectSettings#name}
  */
  readonly name?: string;
  /**
  * Three ways to dynamically select a ShippingRatePriceTier exist. The CartValue type uses the sum of all line item prices, whereas CartClassification and CartScore use the shippingRateInput field on the cart to select a tier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#shipping_rate_input_type ProjectSettings#shipping_rate_input_type}
  */
  readonly shippingRateInputType?: string;
  /**
  * business_units block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#business_units ProjectSettings#business_units}
  */
  readonly businessUnits?: ProjectSettingsBusinessUnits[] | cdktf.IResolvable;
  /**
  * carts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#carts ProjectSettings#carts}
  */
  readonly carts?: ProjectSettingsCarts[] | cdktf.IResolvable;
  /**
  * external_oauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#external_oauth ProjectSettings#external_oauth}
  */
  readonly externalOauth?: ProjectSettingsExternalOauth[] | cdktf.IResolvable;
  /**
  * messages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#messages ProjectSettings#messages}
  */
  readonly messages?: ProjectSettingsMessages[] | cdktf.IResolvable;
  /**
  * shipping_rate_cart_classification_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#shipping_rate_cart_classification_value ProjectSettings#shipping_rate_cart_classification_value}
  */
  readonly shippingRateCartClassificationValue?: ProjectSettingsShippingRateCartClassificationValue[] | cdktf.IResolvable;
  /**
  * shopping_lists block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#shopping_lists ProjectSettings#shopping_lists}
  */
  readonly shoppingLists?: ProjectSettingsShoppingLists[] | cdktf.IResolvable;
}
export interface ProjectSettingsBusinessUnits {
  /**
  * Default Associate Role assigned to the Associate creating a Business Unit using the My Business Unit endpoint. Note that this field cannot be unset once assigned!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#my_business_unit_associate_role_key_on_creation ProjectSettings#my_business_unit_associate_role_key_on_creation}
  */
  readonly myBusinessUnitAssociateRoleKeyOnCreation?: string;
  /**
  * Status of Business Units created using the My Business Unit endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#my_business_unit_status_on_creation ProjectSettings#my_business_unit_status_on_creation}
  */
  readonly myBusinessUnitStatusOnCreation?: string;
}

export function projectSettingsBusinessUnitsToTerraform(struct?: ProjectSettingsBusinessUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    my_business_unit_associate_role_key_on_creation: cdktf.stringToTerraform(struct!.myBusinessUnitAssociateRoleKeyOnCreation),
    my_business_unit_status_on_creation: cdktf.stringToTerraform(struct!.myBusinessUnitStatusOnCreation),
  }
}


export function projectSettingsBusinessUnitsToHclTerraform(struct?: ProjectSettingsBusinessUnits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    my_business_unit_associate_role_key_on_creation: {
      value: cdktf.stringToHclTerraform(struct!.myBusinessUnitAssociateRoleKeyOnCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    my_business_unit_status_on_creation: {
      value: cdktf.stringToHclTerraform(struct!.myBusinessUnitStatusOnCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSettingsBusinessUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSettingsBusinessUnits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._myBusinessUnitAssociateRoleKeyOnCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.myBusinessUnitAssociateRoleKeyOnCreation = this._myBusinessUnitAssociateRoleKeyOnCreation;
    }
    if (this._myBusinessUnitStatusOnCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.myBusinessUnitStatusOnCreation = this._myBusinessUnitStatusOnCreation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSettingsBusinessUnits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._myBusinessUnitAssociateRoleKeyOnCreation = undefined;
      this._myBusinessUnitStatusOnCreation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._myBusinessUnitAssociateRoleKeyOnCreation = value.myBusinessUnitAssociateRoleKeyOnCreation;
      this._myBusinessUnitStatusOnCreation = value.myBusinessUnitStatusOnCreation;
    }
  }

  // my_business_unit_associate_role_key_on_creation - computed: false, optional: true, required: false
  private _myBusinessUnitAssociateRoleKeyOnCreation?: string; 
  public get myBusinessUnitAssociateRoleKeyOnCreation() {
    return this.getStringAttribute('my_business_unit_associate_role_key_on_creation');
  }
  public set myBusinessUnitAssociateRoleKeyOnCreation(value: string) {
    this._myBusinessUnitAssociateRoleKeyOnCreation = value;
  }
  public resetMyBusinessUnitAssociateRoleKeyOnCreation() {
    this._myBusinessUnitAssociateRoleKeyOnCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get myBusinessUnitAssociateRoleKeyOnCreationInput() {
    return this._myBusinessUnitAssociateRoleKeyOnCreation;
  }

  // my_business_unit_status_on_creation - computed: true, optional: true, required: false
  private _myBusinessUnitStatusOnCreation?: string; 
  public get myBusinessUnitStatusOnCreation() {
    return this.getStringAttribute('my_business_unit_status_on_creation');
  }
  public set myBusinessUnitStatusOnCreation(value: string) {
    this._myBusinessUnitStatusOnCreation = value;
  }
  public resetMyBusinessUnitStatusOnCreation() {
    this._myBusinessUnitStatusOnCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get myBusinessUnitStatusOnCreationInput() {
    return this._myBusinessUnitStatusOnCreation;
  }
}

export class ProjectSettingsBusinessUnitsList extends cdktf.ComplexList {
  public internalValue? : ProjectSettingsBusinessUnits[] | cdktf.IResolvable

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
  public get(index: number): ProjectSettingsBusinessUnitsOutputReference {
    return new ProjectSettingsBusinessUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSettingsCarts {
  /**
  * Indicates if country - no state tax rate fallback should be used when a shipping address state is not explicitly covered in the rates lists of all tax categories of a cart line items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#country_tax_rate_fallback_enabled ProjectSettings#country_tax_rate_fallback_enabled}
  */
  readonly countryTaxRateFallbackEnabled?: boolean | cdktf.IResolvable;
  /**
  * Number - Optional The default value for the deleteDaysAfterLastModification parameter of the CartDraft. Initially set to 90 for projects created after December 2019.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#delete_days_after_last_modification ProjectSettings#delete_days_after_last_modification}
  */
  readonly deleteDaysAfterLastModification?: number;
  /**
  * Default value for the priceRoundingMode parameter of the CartDraft. Indicates how the total prices on LineItems and CustomLineItems are rounded when calculated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#price_rounding_mode ProjectSettings#price_rounding_mode}
  */
  readonly priceRoundingMode?: string;
  /**
  * Default value for the taxRoundingMode parameter of the CartDraft. Indicates how monetary values are rounded when calculating taxes for taxedPrice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#tax_rounding_mode ProjectSettings#tax_rounding_mode}
  */
  readonly taxRoundingMode?: string;
}

export function projectSettingsCartsToTerraform(struct?: ProjectSettingsCarts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_tax_rate_fallback_enabled: cdktf.booleanToTerraform(struct!.countryTaxRateFallbackEnabled),
    delete_days_after_last_modification: cdktf.numberToTerraform(struct!.deleteDaysAfterLastModification),
    price_rounding_mode: cdktf.stringToTerraform(struct!.priceRoundingMode),
    tax_rounding_mode: cdktf.stringToTerraform(struct!.taxRoundingMode),
  }
}


export function projectSettingsCartsToHclTerraform(struct?: ProjectSettingsCarts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_tax_rate_fallback_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.countryTaxRateFallbackEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_days_after_last_modification: {
      value: cdktf.numberToHclTerraform(struct!.deleteDaysAfterLastModification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    price_rounding_mode: {
      value: cdktf.stringToHclTerraform(struct!.priceRoundingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tax_rounding_mode: {
      value: cdktf.stringToHclTerraform(struct!.taxRoundingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSettingsCartsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSettingsCarts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryTaxRateFallbackEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryTaxRateFallbackEnabled = this._countryTaxRateFallbackEnabled;
    }
    if (this._deleteDaysAfterLastModification !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteDaysAfterLastModification = this._deleteDaysAfterLastModification;
    }
    if (this._priceRoundingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.priceRoundingMode = this._priceRoundingMode;
    }
    if (this._taxRoundingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.taxRoundingMode = this._taxRoundingMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSettingsCarts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryTaxRateFallbackEnabled = undefined;
      this._deleteDaysAfterLastModification = undefined;
      this._priceRoundingMode = undefined;
      this._taxRoundingMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryTaxRateFallbackEnabled = value.countryTaxRateFallbackEnabled;
      this._deleteDaysAfterLastModification = value.deleteDaysAfterLastModification;
      this._priceRoundingMode = value.priceRoundingMode;
      this._taxRoundingMode = value.taxRoundingMode;
    }
  }

  // country_tax_rate_fallback_enabled - computed: true, optional: true, required: false
  private _countryTaxRateFallbackEnabled?: boolean | cdktf.IResolvable; 
  public get countryTaxRateFallbackEnabled() {
    return this.getBooleanAttribute('country_tax_rate_fallback_enabled');
  }
  public set countryTaxRateFallbackEnabled(value: boolean | cdktf.IResolvable) {
    this._countryTaxRateFallbackEnabled = value;
  }
  public resetCountryTaxRateFallbackEnabled() {
    this._countryTaxRateFallbackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryTaxRateFallbackEnabledInput() {
    return this._countryTaxRateFallbackEnabled;
  }

  // delete_days_after_last_modification - computed: true, optional: true, required: false
  private _deleteDaysAfterLastModification?: number; 
  public get deleteDaysAfterLastModification() {
    return this.getNumberAttribute('delete_days_after_last_modification');
  }
  public set deleteDaysAfterLastModification(value: number) {
    this._deleteDaysAfterLastModification = value;
  }
  public resetDeleteDaysAfterLastModification() {
    this._deleteDaysAfterLastModification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDaysAfterLastModificationInput() {
    return this._deleteDaysAfterLastModification;
  }

  // price_rounding_mode - computed: true, optional: true, required: false
  private _priceRoundingMode?: string; 
  public get priceRoundingMode() {
    return this.getStringAttribute('price_rounding_mode');
  }
  public set priceRoundingMode(value: string) {
    this._priceRoundingMode = value;
  }
  public resetPriceRoundingMode() {
    this._priceRoundingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priceRoundingModeInput() {
    return this._priceRoundingMode;
  }

  // tax_rounding_mode - computed: true, optional: true, required: false
  private _taxRoundingMode?: string; 
  public get taxRoundingMode() {
    return this.getStringAttribute('tax_rounding_mode');
  }
  public set taxRoundingMode(value: string) {
    this._taxRoundingMode = value;
  }
  public resetTaxRoundingMode() {
    this._taxRoundingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taxRoundingModeInput() {
    return this._taxRoundingMode;
  }
}

export class ProjectSettingsCartsList extends cdktf.ComplexList {
  public internalValue? : ProjectSettingsCarts[] | cdktf.IResolvable

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
  public get(index: number): ProjectSettingsCartsOutputReference {
    return new ProjectSettingsCartsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSettingsExternalOauth {
  /**
  * Partially hidden on retrieval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#authorization_header ProjectSettings#authorization_header}
  */
  readonly authorizationHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#url ProjectSettings#url}
  */
  readonly url?: string;
}

export function projectSettingsExternalOauthToTerraform(struct?: ProjectSettingsExternalOauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_header: cdktf.stringToTerraform(struct!.authorizationHeader),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function projectSettingsExternalOauthToHclTerraform(struct?: ProjectSettingsExternalOauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_header: {
      value: cdktf.stringToHclTerraform(struct!.authorizationHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSettingsExternalOauthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSettingsExternalOauth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationHeader = this._authorizationHeader;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSettingsExternalOauth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizationHeader = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizationHeader = value.authorizationHeader;
      this._url = value.url;
    }
  }

  // authorization_header - computed: false, optional: true, required: false
  private _authorizationHeader?: string; 
  public get authorizationHeader() {
    return this.getStringAttribute('authorization_header');
  }
  public set authorizationHeader(value: string) {
    this._authorizationHeader = value;
  }
  public resetAuthorizationHeader() {
    this._authorizationHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationHeaderInput() {
    return this._authorizationHeader;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ProjectSettingsExternalOauthList extends cdktf.ComplexList {
  public internalValue? : ProjectSettingsExternalOauth[] | cdktf.IResolvable

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
  public get(index: number): ProjectSettingsExternalOauthOutputReference {
    return new ProjectSettingsExternalOauthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSettingsMessages {
  /**
  * Specifies the number of days each Message should be available via the Messages Query API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#delete_days_after_creation ProjectSettings#delete_days_after_creation}
  */
  readonly deleteDaysAfterCreation?: number;
  /**
  * When true the creation of messages on the Messages Query HTTP API is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#enabled ProjectSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function projectSettingsMessagesToTerraform(struct?: ProjectSettingsMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_days_after_creation: cdktf.numberToTerraform(struct!.deleteDaysAfterCreation),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function projectSettingsMessagesToHclTerraform(struct?: ProjectSettingsMessages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_days_after_creation: {
      value: cdktf.numberToHclTerraform(struct!.deleteDaysAfterCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSettingsMessagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSettingsMessages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteDaysAfterCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteDaysAfterCreation = this._deleteDaysAfterCreation;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSettingsMessages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteDaysAfterCreation = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteDaysAfterCreation = value.deleteDaysAfterCreation;
      this._enabled = value.enabled;
    }
  }

  // delete_days_after_creation - computed: false, optional: true, required: false
  private _deleteDaysAfterCreation?: number; 
  public get deleteDaysAfterCreation() {
    return this.getNumberAttribute('delete_days_after_creation');
  }
  public set deleteDaysAfterCreation(value: number) {
    this._deleteDaysAfterCreation = value;
  }
  public resetDeleteDaysAfterCreation() {
    this._deleteDaysAfterCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDaysAfterCreationInput() {
    return this._deleteDaysAfterCreation;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class ProjectSettingsMessagesList extends cdktf.ComplexList {
  public internalValue? : ProjectSettingsMessages[] | cdktf.IResolvable

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
  public get(index: number): ProjectSettingsMessagesOutputReference {
    return new ProjectSettingsMessagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSettingsShippingRateCartClassificationValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#key ProjectSettings#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#label ProjectSettings#label}
  */
  readonly label?: { [key: string]: string };
}

export function projectSettingsShippingRateCartClassificationValueToTerraform(struct?: ProjectSettingsShippingRateCartClassificationValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.label),
  }
}


export function projectSettingsShippingRateCartClassificationValueToHclTerraform(struct?: ProjectSettingsShippingRateCartClassificationValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.label),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSettingsShippingRateCartClassificationValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSettingsShippingRateCartClassificationValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSettingsShippingRateCartClassificationValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._label = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._label = value.label;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // label - computed: false, optional: true, required: false
  private _label?: { [key: string]: string }; 
  public get label() {
    return this.getStringMapAttribute('label');
  }
  public set label(value: { [key: string]: string }) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}

export class ProjectSettingsShippingRateCartClassificationValueList extends cdktf.ComplexList {
  public internalValue? : ProjectSettingsShippingRateCartClassificationValue[] | cdktf.IResolvable

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
  public get(index: number): ProjectSettingsShippingRateCartClassificationValueOutputReference {
    return new ProjectSettingsShippingRateCartClassificationValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProjectSettingsShoppingLists {
  /**
  * Number - Optional The default value for the deleteDaysAfterLastModification parameter of the CartDraft. Initially set to 90 for projects created after December 2019.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#delete_days_after_last_modification ProjectSettings#delete_days_after_last_modification}
  */
  readonly deleteDaysAfterLastModification?: number;
}

export function projectSettingsShoppingListsToTerraform(struct?: ProjectSettingsShoppingLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_days_after_last_modification: cdktf.numberToTerraform(struct!.deleteDaysAfterLastModification),
  }
}


export function projectSettingsShoppingListsToHclTerraform(struct?: ProjectSettingsShoppingLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_days_after_last_modification: {
      value: cdktf.numberToHclTerraform(struct!.deleteDaysAfterLastModification),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProjectSettingsShoppingListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProjectSettingsShoppingLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteDaysAfterLastModification !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteDaysAfterLastModification = this._deleteDaysAfterLastModification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProjectSettingsShoppingLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteDaysAfterLastModification = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteDaysAfterLastModification = value.deleteDaysAfterLastModification;
    }
  }

  // delete_days_after_last_modification - computed: true, optional: true, required: false
  private _deleteDaysAfterLastModification?: number; 
  public get deleteDaysAfterLastModification() {
    return this.getNumberAttribute('delete_days_after_last_modification');
  }
  public set deleteDaysAfterLastModification(value: number) {
    this._deleteDaysAfterLastModification = value;
  }
  public resetDeleteDaysAfterLastModification() {
    this._deleteDaysAfterLastModification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDaysAfterLastModificationInput() {
    return this._deleteDaysAfterLastModification;
  }
}

export class ProjectSettingsShoppingListsList extends cdktf.ComplexList {
  public internalValue? : ProjectSettingsShoppingLists[] | cdktf.IResolvable

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
  public get(index: number): ProjectSettingsShoppingListsOutputReference {
    return new ProjectSettingsShoppingListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings commercetools_project_settings}
*/
export class ProjectSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commercetools_project_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectSettings to import
  * @param importFromId The id of the existing ProjectSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commercetools_project_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/project_settings commercetools_project_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ProjectSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'commercetools_project_settings',
      terraformGeneratorMetadata: {
        providerName: 'commercetools',
        providerVersion: '1.21.1',
        providerVersionConstraint: '1.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._countries = config.countries;
    this._currencies = config.currencies;
    this._enableSearchIndexBusinessUnits = config.enableSearchIndexBusinessUnits;
    this._enableSearchIndexCustomers = config.enableSearchIndexCustomers;
    this._enableSearchIndexOrders = config.enableSearchIndexOrders;
    this._enableSearchIndexProductSearch = config.enableSearchIndexProductSearch;
    this._enableSearchIndexProducts = config.enableSearchIndexProducts;
    this._languages = config.languages;
    this._name = config.name;
    this._shippingRateInputType = config.shippingRateInputType;
    this._businessUnits.internalValue = config.businessUnits;
    this._carts.internalValue = config.carts;
    this._externalOauth.internalValue = config.externalOauth;
    this._messages.internalValue = config.messages;
    this._shippingRateCartClassificationValue.internalValue = config.shippingRateCartClassificationValue;
    this._shoppingLists.internalValue = config.shoppingLists;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // countries - computed: true, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return this.getListAttribute('countries');
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // currencies - computed: true, optional: true, required: false
  private _currencies?: string[]; 
  public get currencies() {
    return this.getListAttribute('currencies');
  }
  public set currencies(value: string[]) {
    this._currencies = value;
  }
  public resetCurrencies() {
    this._currencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currenciesInput() {
    return this._currencies;
  }

  // enable_search_index_business_units - computed: true, optional: true, required: false
  private _enableSearchIndexBusinessUnits?: boolean | cdktf.IResolvable; 
  public get enableSearchIndexBusinessUnits() {
    return this.getBooleanAttribute('enable_search_index_business_units');
  }
  public set enableSearchIndexBusinessUnits(value: boolean | cdktf.IResolvable) {
    this._enableSearchIndexBusinessUnits = value;
  }
  public resetEnableSearchIndexBusinessUnits() {
    this._enableSearchIndexBusinessUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSearchIndexBusinessUnitsInput() {
    return this._enableSearchIndexBusinessUnits;
  }

  // enable_search_index_customers - computed: true, optional: true, required: false
  private _enableSearchIndexCustomers?: boolean | cdktf.IResolvable; 
  public get enableSearchIndexCustomers() {
    return this.getBooleanAttribute('enable_search_index_customers');
  }
  public set enableSearchIndexCustomers(value: boolean | cdktf.IResolvable) {
    this._enableSearchIndexCustomers = value;
  }
  public resetEnableSearchIndexCustomers() {
    this._enableSearchIndexCustomers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSearchIndexCustomersInput() {
    return this._enableSearchIndexCustomers;
  }

  // enable_search_index_orders - computed: true, optional: true, required: false
  private _enableSearchIndexOrders?: boolean | cdktf.IResolvable; 
  public get enableSearchIndexOrders() {
    return this.getBooleanAttribute('enable_search_index_orders');
  }
  public set enableSearchIndexOrders(value: boolean | cdktf.IResolvable) {
    this._enableSearchIndexOrders = value;
  }
  public resetEnableSearchIndexOrders() {
    this._enableSearchIndexOrders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSearchIndexOrdersInput() {
    return this._enableSearchIndexOrders;
  }

  // enable_search_index_product_search - computed: true, optional: true, required: false
  private _enableSearchIndexProductSearch?: boolean | cdktf.IResolvable; 
  public get enableSearchIndexProductSearch() {
    return this.getBooleanAttribute('enable_search_index_product_search');
  }
  public set enableSearchIndexProductSearch(value: boolean | cdktf.IResolvable) {
    this._enableSearchIndexProductSearch = value;
  }
  public resetEnableSearchIndexProductSearch() {
    this._enableSearchIndexProductSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSearchIndexProductSearchInput() {
    return this._enableSearchIndexProductSearch;
  }

  // enable_search_index_products - computed: true, optional: true, required: false
  private _enableSearchIndexProducts?: boolean | cdktf.IResolvable; 
  public get enableSearchIndexProducts() {
    return this.getBooleanAttribute('enable_search_index_products');
  }
  public set enableSearchIndexProducts(value: boolean | cdktf.IResolvable) {
    this._enableSearchIndexProducts = value;
  }
  public resetEnableSearchIndexProducts() {
    this._enableSearchIndexProducts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSearchIndexProductsInput() {
    return this._enableSearchIndexProducts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // languages - computed: true, optional: true, required: false
  private _languages?: string[]; 
  public get languages() {
    return this.getListAttribute('languages');
  }
  public set languages(value: string[]) {
    this._languages = value;
  }
  public resetLanguages() {
    this._languages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languagesInput() {
    return this._languages;
  }

  // name - computed: true, optional: true, required: false
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

  // shipping_rate_input_type - computed: false, optional: true, required: false
  private _shippingRateInputType?: string; 
  public get shippingRateInputType() {
    return this.getStringAttribute('shipping_rate_input_type');
  }
  public set shippingRateInputType(value: string) {
    this._shippingRateInputType = value;
  }
  public resetShippingRateInputType() {
    this._shippingRateInputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shippingRateInputTypeInput() {
    return this._shippingRateInputType;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // business_units - computed: false, optional: true, required: false
  private _businessUnits = new ProjectSettingsBusinessUnitsList(this, "business_units", false);
  public get businessUnits() {
    return this._businessUnits;
  }
  public putBusinessUnits(value: ProjectSettingsBusinessUnits[] | cdktf.IResolvable) {
    this._businessUnits.internalValue = value;
  }
  public resetBusinessUnits() {
    this._businessUnits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessUnitsInput() {
    return this._businessUnits.internalValue;
  }

  // carts - computed: false, optional: true, required: false
  private _carts = new ProjectSettingsCartsList(this, "carts", false);
  public get carts() {
    return this._carts;
  }
  public putCarts(value: ProjectSettingsCarts[] | cdktf.IResolvable) {
    this._carts.internalValue = value;
  }
  public resetCarts() {
    this._carts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cartsInput() {
    return this._carts.internalValue;
  }

  // external_oauth - computed: false, optional: true, required: false
  private _externalOauth = new ProjectSettingsExternalOauthList(this, "external_oauth", false);
  public get externalOauth() {
    return this._externalOauth;
  }
  public putExternalOauth(value: ProjectSettingsExternalOauth[] | cdktf.IResolvable) {
    this._externalOauth.internalValue = value;
  }
  public resetExternalOauth() {
    this._externalOauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOauthInput() {
    return this._externalOauth.internalValue;
  }

  // messages - computed: false, optional: true, required: false
  private _messages = new ProjectSettingsMessagesList(this, "messages", false);
  public get messages() {
    return this._messages;
  }
  public putMessages(value: ProjectSettingsMessages[] | cdktf.IResolvable) {
    this._messages.internalValue = value;
  }
  public resetMessages() {
    this._messages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagesInput() {
    return this._messages.internalValue;
  }

  // shipping_rate_cart_classification_value - computed: false, optional: true, required: false
  private _shippingRateCartClassificationValue = new ProjectSettingsShippingRateCartClassificationValueList(this, "shipping_rate_cart_classification_value", false);
  public get shippingRateCartClassificationValue() {
    return this._shippingRateCartClassificationValue;
  }
  public putShippingRateCartClassificationValue(value: ProjectSettingsShippingRateCartClassificationValue[] | cdktf.IResolvable) {
    this._shippingRateCartClassificationValue.internalValue = value;
  }
  public resetShippingRateCartClassificationValue() {
    this._shippingRateCartClassificationValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shippingRateCartClassificationValueInput() {
    return this._shippingRateCartClassificationValue.internalValue;
  }

  // shopping_lists - computed: false, optional: true, required: false
  private _shoppingLists = new ProjectSettingsShoppingListsList(this, "shopping_lists", false);
  public get shoppingLists() {
    return this._shoppingLists;
  }
  public putShoppingLists(value: ProjectSettingsShoppingLists[] | cdktf.IResolvable) {
    this._shoppingLists.internalValue = value;
  }
  public resetShoppingLists() {
    this._shoppingLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shoppingListsInput() {
    return this._shoppingLists.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      countries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._countries),
      currencies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._currencies),
      enable_search_index_business_units: cdktf.booleanToTerraform(this._enableSearchIndexBusinessUnits),
      enable_search_index_customers: cdktf.booleanToTerraform(this._enableSearchIndexCustomers),
      enable_search_index_orders: cdktf.booleanToTerraform(this._enableSearchIndexOrders),
      enable_search_index_product_search: cdktf.booleanToTerraform(this._enableSearchIndexProductSearch),
      enable_search_index_products: cdktf.booleanToTerraform(this._enableSearchIndexProducts),
      languages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._languages),
      name: cdktf.stringToTerraform(this._name),
      shipping_rate_input_type: cdktf.stringToTerraform(this._shippingRateInputType),
      business_units: cdktf.listMapper(projectSettingsBusinessUnitsToTerraform, true)(this._businessUnits.internalValue),
      carts: cdktf.listMapper(projectSettingsCartsToTerraform, true)(this._carts.internalValue),
      external_oauth: cdktf.listMapper(projectSettingsExternalOauthToTerraform, true)(this._externalOauth.internalValue),
      messages: cdktf.listMapper(projectSettingsMessagesToTerraform, true)(this._messages.internalValue),
      shipping_rate_cart_classification_value: cdktf.listMapper(projectSettingsShippingRateCartClassificationValueToTerraform, true)(this._shippingRateCartClassificationValue.internalValue),
      shopping_lists: cdktf.listMapper(projectSettingsShoppingListsToTerraform, true)(this._shoppingLists.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      countries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._countries),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      currencies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._currencies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enable_search_index_business_units: {
        value: cdktf.booleanToHclTerraform(this._enableSearchIndexBusinessUnits),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_search_index_customers: {
        value: cdktf.booleanToHclTerraform(this._enableSearchIndexCustomers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_search_index_orders: {
        value: cdktf.booleanToHclTerraform(this._enableSearchIndexOrders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_search_index_product_search: {
        value: cdktf.booleanToHclTerraform(this._enableSearchIndexProductSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_search_index_products: {
        value: cdktf.booleanToHclTerraform(this._enableSearchIndexProducts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      languages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._languages),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shipping_rate_input_type: {
        value: cdktf.stringToHclTerraform(this._shippingRateInputType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      business_units: {
        value: cdktf.listMapperHcl(projectSettingsBusinessUnitsToHclTerraform, true)(this._businessUnits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectSettingsBusinessUnitsList",
      },
      carts: {
        value: cdktf.listMapperHcl(projectSettingsCartsToHclTerraform, true)(this._carts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectSettingsCartsList",
      },
      external_oauth: {
        value: cdktf.listMapperHcl(projectSettingsExternalOauthToHclTerraform, true)(this._externalOauth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectSettingsExternalOauthList",
      },
      messages: {
        value: cdktf.listMapperHcl(projectSettingsMessagesToHclTerraform, true)(this._messages.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectSettingsMessagesList",
      },
      shipping_rate_cart_classification_value: {
        value: cdktf.listMapperHcl(projectSettingsShippingRateCartClassificationValueToHclTerraform, true)(this._shippingRateCartClassificationValue.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectSettingsShippingRateCartClassificationValueList",
      },
      shopping_lists: {
        value: cdktf.listMapperHcl(projectSettingsShoppingListsToHclTerraform, true)(this._shoppingLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProjectSettingsShoppingListsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
