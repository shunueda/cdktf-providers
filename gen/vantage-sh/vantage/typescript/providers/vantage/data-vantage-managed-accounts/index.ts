// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/managed_accounts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVantageManagedAccountsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataVantageManagedAccountsManagedAccountsBillingInformationAttributes {
}

export function dataVantageManagedAccountsManagedAccountsBillingInformationAttributesToTerraform(struct?: DataVantageManagedAccountsManagedAccountsBillingInformationAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageManagedAccountsManagedAccountsBillingInformationAttributesToHclTerraform(struct?: DataVantageManagedAccountsManagedAccountsBillingInformationAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageManagedAccountsManagedAccountsBillingInformationAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVantageManagedAccountsManagedAccountsBillingInformationAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageManagedAccountsManagedAccountsBillingInformationAttributes | undefined) {
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
export interface DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadataCustomFields {
}

export function dataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadataCustomFieldsToTerraform(struct?: DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadataCustomFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadataCustomFieldsToHclTerraform(struct?: DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadataCustomFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadataCustomFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadataCustomFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadataCustomFields | undefined) {
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

export class DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadataCustomFieldsList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadataCustomFieldsOutputReference {
    return new DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadataCustomFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadata {
}

export function dataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadataToTerraform(struct?: DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadataToHclTerraform(struct?: DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_fields - computed: true, optional: false, required: false
  private _customFields = new DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadataCustomFieldsList(this, "custom_fields", false);
  public get customFields() {
    return this._customFields;
  }
}
export interface DataVantageManagedAccountsManagedAccountsBusinessInformationAttributes {
}

export function dataVantageManagedAccountsManagedAccountsBusinessInformationAttributesToTerraform(struct?: DataVantageManagedAccountsManagedAccountsBusinessInformationAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageManagedAccountsManagedAccountsBusinessInformationAttributesToHclTerraform(struct?: DataVantageManagedAccountsManagedAccountsBusinessInformationAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVantageManagedAccountsManagedAccountsBusinessInformationAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageManagedAccountsManagedAccountsBusinessInformationAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}
export interface DataVantageManagedAccountsManagedAccounts {
}

export function dataVantageManagedAccountsManagedAccountsToTerraform(struct?: DataVantageManagedAccountsManagedAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageManagedAccountsManagedAccountsToHclTerraform(struct?: DataVantageManagedAccountsManagedAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageManagedAccountsManagedAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageManagedAccountsManagedAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageManagedAccountsManagedAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_credential_tokens - computed: true, optional: false, required: false
  public get accessCredentialTokens() {
    return this.getListAttribute('access_credential_tokens');
  }

  // billing_information_attributes - computed: true, optional: false, required: false
  private _billingInformationAttributes = new DataVantageManagedAccountsManagedAccountsBillingInformationAttributesOutputReference(this, "billing_information_attributes");
  public get billingInformationAttributes() {
    return this._billingInformationAttributes;
  }

  // billing_rule_tokens - computed: true, optional: false, required: false
  public get billingRuleTokens() {
    return this.getListAttribute('billing_rule_tokens');
  }

  // business_information_attributes - computed: true, optional: false, required: false
  private _businessInformationAttributes = new DataVantageManagedAccountsManagedAccountsBusinessInformationAttributesOutputReference(this, "business_information_attributes");
  public get businessInformationAttributes() {
    return this._businessInformationAttributes;
  }

  // contact_email - computed: true, optional: false, required: false
  public get contactEmail() {
    return this.getStringAttribute('contact_email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // msp_billing_profile_token - computed: true, optional: false, required: false
  public get mspBillingProfileToken() {
    return this.getStringAttribute('msp_billing_profile_token');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_account_token - computed: true, optional: false, required: false
  public get parentAccountToken() {
    return this.getStringAttribute('parent_account_token');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }
}

export class DataVantageManagedAccountsManagedAccountsList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageManagedAccountsManagedAccountsOutputReference {
    return new DataVantageManagedAccountsManagedAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/managed_accounts vantage_managed_accounts}
*/
export class DataVantageManagedAccounts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_managed_accounts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVantageManagedAccounts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVantageManagedAccounts to import
  * @param importFromId The id of the existing DataVantageManagedAccounts that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/managed_accounts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVantageManagedAccounts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_managed_accounts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/managed_accounts vantage_managed_accounts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVantageManagedAccountsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVantageManagedAccountsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vantage_managed_accounts',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.68',
        providerVersionConstraint: '0.1.68'
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

  // managed_accounts - computed: true, optional: false, required: false
  private _managedAccounts = new DataVantageManagedAccountsManagedAccountsList(this, "managed_accounts", false);
  public get managedAccounts() {
    return this._managedAccounts;
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
