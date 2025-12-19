// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/data-sources/billing_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVantageBillingProfilesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataVantageBillingProfilesBillingProfilesBankingInformationAttributesSecureData {
}

export function dataVantageBillingProfilesBillingProfilesBankingInformationAttributesSecureDataToTerraform(struct?: DataVantageBillingProfilesBillingProfilesBankingInformationAttributesSecureData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageBillingProfilesBillingProfilesBankingInformationAttributesSecureDataToHclTerraform(struct?: DataVantageBillingProfilesBillingProfilesBankingInformationAttributesSecureData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageBillingProfilesBillingProfilesBankingInformationAttributesSecureDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVantageBillingProfilesBillingProfilesBankingInformationAttributesSecureData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageBillingProfilesBillingProfilesBankingInformationAttributesSecureData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_number - computed: true, optional: false, required: false
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }

  // iban - computed: true, optional: false, required: false
  public get iban() {
    return this.getStringAttribute('iban');
  }

  // routing_number - computed: true, optional: false, required: false
  public get routingNumber() {
    return this.getStringAttribute('routing_number');
  }

  // swift_bic - computed: true, optional: false, required: false
  public get swiftBic() {
    return this.getStringAttribute('swift_bic');
  }
}
export interface DataVantageBillingProfilesBillingProfilesBankingInformationAttributes {
}

export function dataVantageBillingProfilesBillingProfilesBankingInformationAttributesToTerraform(struct?: DataVantageBillingProfilesBillingProfilesBankingInformationAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageBillingProfilesBillingProfilesBankingInformationAttributesToHclTerraform(struct?: DataVantageBillingProfilesBillingProfilesBankingInformationAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageBillingProfilesBillingProfilesBankingInformationAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVantageBillingProfilesBillingProfilesBankingInformationAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageBillingProfilesBillingProfilesBankingInformationAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bank_name - computed: true, optional: false, required: false
  public get bankName() {
    return this.getStringAttribute('bank_name');
  }

  // beneficiary_name - computed: true, optional: false, required: false
  public get beneficiaryName() {
    return this.getStringAttribute('beneficiary_name');
  }

  // secure_data - computed: true, optional: false, required: false
  private _secureData = new DataVantageBillingProfilesBillingProfilesBankingInformationAttributesSecureDataOutputReference(this, "secure_data");
  public get secureData() {
    return this._secureData;
  }

  // tax_id - computed: true, optional: false, required: false
  public get taxId() {
    return this.getStringAttribute('tax_id');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}
export interface DataVantageBillingProfilesBillingProfilesBillingInformationAttributes {
}

export function dataVantageBillingProfilesBillingProfilesBillingInformationAttributesToTerraform(struct?: DataVantageBillingProfilesBillingProfilesBillingInformationAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageBillingProfilesBillingProfilesBillingInformationAttributesToHclTerraform(struct?: DataVantageBillingProfilesBillingProfilesBillingInformationAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageBillingProfilesBillingProfilesBillingInformationAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVantageBillingProfilesBillingProfilesBillingInformationAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageBillingProfilesBillingProfilesBillingInformationAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_line_1 - computed: true, optional: false, required: false
  public get addressLine1() {
    return this.getStringAttribute('address_line_1');
  }

  // address_line_2 - computed: true, optional: false, required: false
  public get addressLine2() {
    return this.getStringAttribute('address_line_2');
  }

  // billing_email - computed: true, optional: false, required: false
  public get billingEmail() {
    return this.getListAttribute('billing_email');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // company_name - computed: true, optional: false, required: false
  public get companyName() {
    return this.getStringAttribute('company_name');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}
export interface DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadataCustomFields {
}

export function dataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadataCustomFieldsToTerraform(struct?: DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadataCustomFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadataCustomFieldsToHclTerraform(struct?: DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadataCustomFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadataCustomFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadataCustomFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadataCustomFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadataCustomFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadataCustomFieldsOutputReference {
    return new DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadataCustomFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadata {
}

export function dataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadataToTerraform(struct?: DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadataToHclTerraform(struct?: DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_fields - computed: true, optional: false, required: false
  private _customFields = new DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadataCustomFieldsList(this, "custom_fields", false);
  public get customFields() {
    return this._customFields;
  }
}
export interface DataVantageBillingProfilesBillingProfilesBusinessInformationAttributes {
}

export function dataVantageBillingProfilesBillingProfilesBusinessInformationAttributesToTerraform(struct?: DataVantageBillingProfilesBillingProfilesBusinessInformationAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageBillingProfilesBillingProfilesBusinessInformationAttributesToHclTerraform(struct?: DataVantageBillingProfilesBillingProfilesBusinessInformationAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVantageBillingProfilesBillingProfilesBusinessInformationAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageBillingProfilesBillingProfilesBusinessInformationAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}
export interface DataVantageBillingProfilesBillingProfiles {
}

export function dataVantageBillingProfilesBillingProfilesToTerraform(struct?: DataVantageBillingProfilesBillingProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageBillingProfilesBillingProfilesToHclTerraform(struct?: DataVantageBillingProfilesBillingProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageBillingProfilesBillingProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataVantageBillingProfilesBillingProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageBillingProfilesBillingProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // banking_information_attributes - computed: true, optional: false, required: false
  private _bankingInformationAttributes = new DataVantageBillingProfilesBillingProfilesBankingInformationAttributesOutputReference(this, "banking_information_attributes");
  public get bankingInformationAttributes() {
    return this._bankingInformationAttributes;
  }

  // billing_information_attributes - computed: true, optional: false, required: false
  private _billingInformationAttributes = new DataVantageBillingProfilesBillingProfilesBillingInformationAttributesOutputReference(this, "billing_information_attributes");
  public get billingInformationAttributes() {
    return this._billingInformationAttributes;
  }

  // business_information_attributes - computed: true, optional: false, required: false
  private _businessInformationAttributes = new DataVantageBillingProfilesBillingProfilesBusinessInformationAttributesOutputReference(this, "business_information_attributes");
  public get businessInformationAttributes() {
    return this._businessInformationAttributes;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_accounts_count - computed: true, optional: false, required: false
  public get managedAccountsCount() {
    return this.getStringAttribute('managed_accounts_count');
  }

  // nickname - computed: true, optional: false, required: false
  public get nickname() {
    return this.getStringAttribute('nickname');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataVantageBillingProfilesBillingProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageBillingProfilesBillingProfilesOutputReference {
    return new DataVantageBillingProfilesBillingProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/data-sources/billing_profiles vantage_billing_profiles}
*/
export class DataVantageBillingProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_billing_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVantageBillingProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVantageBillingProfiles to import
  * @param importFromId The id of the existing DataVantageBillingProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/data-sources/billing_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVantageBillingProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_billing_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.71/docs/data-sources/billing_profiles vantage_billing_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVantageBillingProfilesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVantageBillingProfilesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vantage_billing_profiles',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.71',
        providerVersionConstraint: '0.1.71'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_profiles - computed: true, optional: false, required: false
  private _billingProfiles = new DataVantageBillingProfilesBillingProfilesList(this, "billing_profiles", false);
  public get billingProfiles() {
    return this._billingProfiles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
