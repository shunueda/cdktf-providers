// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BillingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Banking details (MSP accounts only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#banking_information_attributes BillingProfile#banking_information_attributes}
  */
  readonly bankingInformationAttributes?: BillingProfileBankingInformationAttributes;
  /**
  * Billing address and contact information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#billing_information_attributes BillingProfile#billing_information_attributes}
  */
  readonly billingInformationAttributes?: BillingProfileBillingInformationAttributes;
  /**
  * Business information and custom fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#business_information_attributes BillingProfile#business_information_attributes}
  */
  readonly businessInformationAttributes?: BillingProfileBusinessInformationAttributes;
  /**
  * Display name for the billing profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#nickname BillingProfile#nickname}
  */
  readonly nickname: string;
}
export interface BillingProfileBankingInformationAttributesSecureData {
  /**
  * Bank account number (US)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#account_number BillingProfile#account_number}
  */
  readonly accountNumber?: string;
  /**
  * International Bank Account Number (EU)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#iban BillingProfile#iban}
  */
  readonly iban?: string;
  /**
  * Bank routing number (US)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#routing_number BillingProfile#routing_number}
  */
  readonly routingNumber?: string;
  /**
  * SWIFT/BIC code (EU)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#swift_bic BillingProfile#swift_bic}
  */
  readonly swiftBic?: string;
}

export function billingProfileBankingInformationAttributesSecureDataToTerraform(struct?: BillingProfileBankingInformationAttributesSecureData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_number: cdktf.stringToTerraform(struct!.accountNumber),
    iban: cdktf.stringToTerraform(struct!.iban),
    routing_number: cdktf.stringToTerraform(struct!.routingNumber),
    swift_bic: cdktf.stringToTerraform(struct!.swiftBic),
  }
}


export function billingProfileBankingInformationAttributesSecureDataToHclTerraform(struct?: BillingProfileBankingInformationAttributesSecureData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_number: {
      value: cdktf.stringToHclTerraform(struct!.accountNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iban: {
      value: cdktf.stringToHclTerraform(struct!.iban),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_number: {
      value: cdktf.stringToHclTerraform(struct!.routingNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    swift_bic: {
      value: cdktf.stringToHclTerraform(struct!.swiftBic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingProfileBankingInformationAttributesSecureDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BillingProfileBankingInformationAttributesSecureData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountNumber = this._accountNumber;
    }
    if (this._iban !== undefined) {
      hasAnyValues = true;
      internalValueResult.iban = this._iban;
    }
    if (this._routingNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingNumber = this._routingNumber;
    }
    if (this._swiftBic !== undefined) {
      hasAnyValues = true;
      internalValueResult.swiftBic = this._swiftBic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingProfileBankingInformationAttributesSecureData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountNumber = undefined;
      this._iban = undefined;
      this._routingNumber = undefined;
      this._swiftBic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountNumber = value.accountNumber;
      this._iban = value.iban;
      this._routingNumber = value.routingNumber;
      this._swiftBic = value.swiftBic;
    }
  }

  // account_number - computed: true, optional: true, required: false
  private _accountNumber?: string; 
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }
  public set accountNumber(value: string) {
    this._accountNumber = value;
  }
  public resetAccountNumber() {
    this._accountNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }

  // iban - computed: true, optional: true, required: false
  private _iban?: string; 
  public get iban() {
    return this.getStringAttribute('iban');
  }
  public set iban(value: string) {
    this._iban = value;
  }
  public resetIban() {
    this._iban = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibanInput() {
    return this._iban;
  }

  // routing_number - computed: true, optional: true, required: false
  private _routingNumber?: string; 
  public get routingNumber() {
    return this.getStringAttribute('routing_number');
  }
  public set routingNumber(value: string) {
    this._routingNumber = value;
  }
  public resetRoutingNumber() {
    this._routingNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingNumberInput() {
    return this._routingNumber;
  }

  // swift_bic - computed: true, optional: true, required: false
  private _swiftBic?: string; 
  public get swiftBic() {
    return this.getStringAttribute('swift_bic');
  }
  public set swiftBic(value: string) {
    this._swiftBic = value;
  }
  public resetSwiftBic() {
    this._swiftBic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swiftBicInput() {
    return this._swiftBic;
  }
}
export interface BillingProfileBankingInformationAttributes {
  /**
  * Name of the bank
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#bank_name BillingProfile#bank_name}
  */
  readonly bankName?: string;
  /**
  * Name of the account beneficiary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#beneficiary_name BillingProfile#beneficiary_name}
  */
  readonly beneficiaryName?: string;
  /**
  * Encrypted banking details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#secure_data BillingProfile#secure_data}
  */
  readonly secureData?: BillingProfileBankingInformationAttributesSecureData;
  /**
  * Tax identification number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#tax_id BillingProfile#tax_id}
  */
  readonly taxId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#token BillingProfile#token}
  */
  readonly token?: string;
}

export function billingProfileBankingInformationAttributesToTerraform(struct?: BillingProfileBankingInformationAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bank_name: cdktf.stringToTerraform(struct!.bankName),
    beneficiary_name: cdktf.stringToTerraform(struct!.beneficiaryName),
    secure_data: billingProfileBankingInformationAttributesSecureDataToTerraform(struct!.secureData),
    tax_id: cdktf.stringToTerraform(struct!.taxId),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function billingProfileBankingInformationAttributesToHclTerraform(struct?: BillingProfileBankingInformationAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bank_name: {
      value: cdktf.stringToHclTerraform(struct!.bankName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    beneficiary_name: {
      value: cdktf.stringToHclTerraform(struct!.beneficiaryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secure_data: {
      value: billingProfileBankingInformationAttributesSecureDataToHclTerraform(struct!.secureData),
      isBlock: true,
      type: "struct",
      storageClassType: "BillingProfileBankingInformationAttributesSecureData",
    },
    tax_id: {
      value: cdktf.stringToHclTerraform(struct!.taxId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingProfileBankingInformationAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BillingProfileBankingInformationAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bankName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bankName = this._bankName;
    }
    if (this._beneficiaryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.beneficiaryName = this._beneficiaryName;
    }
    if (this._secureData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureData = this._secureData?.internalValue;
    }
    if (this._taxId !== undefined) {
      hasAnyValues = true;
      internalValueResult.taxId = this._taxId;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingProfileBankingInformationAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bankName = undefined;
      this._beneficiaryName = undefined;
      this._secureData.internalValue = undefined;
      this._taxId = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bankName = value.bankName;
      this._beneficiaryName = value.beneficiaryName;
      this._secureData.internalValue = value.secureData;
      this._taxId = value.taxId;
      this._token = value.token;
    }
  }

  // bank_name - computed: true, optional: true, required: false
  private _bankName?: string; 
  public get bankName() {
    return this.getStringAttribute('bank_name');
  }
  public set bankName(value: string) {
    this._bankName = value;
  }
  public resetBankName() {
    this._bankName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bankNameInput() {
    return this._bankName;
  }

  // beneficiary_name - computed: true, optional: true, required: false
  private _beneficiaryName?: string; 
  public get beneficiaryName() {
    return this.getStringAttribute('beneficiary_name');
  }
  public set beneficiaryName(value: string) {
    this._beneficiaryName = value;
  }
  public resetBeneficiaryName() {
    this._beneficiaryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beneficiaryNameInput() {
    return this._beneficiaryName;
  }

  // secure_data - computed: true, optional: true, required: false
  private _secureData = new BillingProfileBankingInformationAttributesSecureDataOutputReference(this, "secure_data");
  public get secureData() {
    return this._secureData;
  }
  public putSecureData(value: BillingProfileBankingInformationAttributesSecureData) {
    this._secureData.internalValue = value;
  }
  public resetSecureData() {
    this._secureData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureDataInput() {
    return this._secureData.internalValue;
  }

  // tax_id - computed: true, optional: true, required: false
  private _taxId?: string; 
  public get taxId() {
    return this.getStringAttribute('tax_id');
  }
  public set taxId(value: string) {
    this._taxId = value;
  }
  public resetTaxId() {
    this._taxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taxIdInput() {
    return this._taxId;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface BillingProfileBillingInformationAttributes {
  /**
  * First line of billing address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#address_line_1 BillingProfile#address_line_1}
  */
  readonly addressLine1?: string;
  /**
  * Second line of billing address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#address_line_2 BillingProfile#address_line_2}
  */
  readonly addressLine2?: string;
  /**
  * Array of billing email addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#billing_email BillingProfile#billing_email}
  */
  readonly billingEmail?: string[];
  /**
  * City for billing address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#city BillingProfile#city}
  */
  readonly city?: string;
  /**
  * Company name for billing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#company_name BillingProfile#company_name}
  */
  readonly companyName?: string;
  /**
  * ISO country code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#country_code BillingProfile#country_code}
  */
  readonly countryCode?: string;
  /**
  * Postal or ZIP code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#postal_code BillingProfile#postal_code}
  */
  readonly postalCode?: string;
  /**
  * State or province for billing address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#state BillingProfile#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#token BillingProfile#token}
  */
  readonly token?: string;
}

export function billingProfileBillingInformationAttributesToTerraform(struct?: BillingProfileBillingInformationAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_line_1: cdktf.stringToTerraform(struct!.addressLine1),
    address_line_2: cdktf.stringToTerraform(struct!.addressLine2),
    billing_email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.billingEmail),
    city: cdktf.stringToTerraform(struct!.city),
    company_name: cdktf.stringToTerraform(struct!.companyName),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    state: cdktf.stringToTerraform(struct!.state),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function billingProfileBillingInformationAttributesToHclTerraform(struct?: BillingProfileBillingInformationAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_line_1: {
      value: cdktf.stringToHclTerraform(struct!.addressLine1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_line_2: {
      value: cdktf.stringToHclTerraform(struct!.addressLine2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    billing_email: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.billingEmail),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    company_name: {
      value: cdktf.stringToHclTerraform(struct!.companyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_code: {
      value: cdktf.stringToHclTerraform(struct!.postalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingProfileBillingInformationAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BillingProfileBillingInformationAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressLine1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine1 = this._addressLine1;
    }
    if (this._addressLine2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressLine2 = this._addressLine2;
    }
    if (this._billingEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.billingEmail = this._billingEmail;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._companyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyName = this._companyName;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingProfileBillingInformationAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressLine1 = undefined;
      this._addressLine2 = undefined;
      this._billingEmail = undefined;
      this._city = undefined;
      this._companyName = undefined;
      this._countryCode = undefined;
      this._postalCode = undefined;
      this._state = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressLine1 = value.addressLine1;
      this._addressLine2 = value.addressLine2;
      this._billingEmail = value.billingEmail;
      this._city = value.city;
      this._companyName = value.companyName;
      this._countryCode = value.countryCode;
      this._postalCode = value.postalCode;
      this._state = value.state;
      this._token = value.token;
    }
  }

  // address_line_1 - computed: true, optional: true, required: false
  private _addressLine1?: string; 
  public get addressLine1() {
    return this.getStringAttribute('address_line_1');
  }
  public set addressLine1(value: string) {
    this._addressLine1 = value;
  }
  public resetAddressLine1() {
    this._addressLine1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine1Input() {
    return this._addressLine1;
  }

  // address_line_2 - computed: true, optional: true, required: false
  private _addressLine2?: string; 
  public get addressLine2() {
    return this.getStringAttribute('address_line_2');
  }
  public set addressLine2(value: string) {
    this._addressLine2 = value;
  }
  public resetAddressLine2() {
    this._addressLine2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine2Input() {
    return this._addressLine2;
  }

  // billing_email - computed: true, optional: true, required: false
  private _billingEmail?: string[]; 
  public get billingEmail() {
    return this.getListAttribute('billing_email');
  }
  public set billingEmail(value: string[]) {
    this._billingEmail = value;
  }
  public resetBillingEmail() {
    this._billingEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingEmailInput() {
    return this._billingEmail;
  }

  // city - computed: true, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // company_name - computed: true, optional: true, required: false
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  public resetCompanyName() {
    this._companyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // postal_code - computed: true, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface BillingProfileBusinessInformationAttributesMetadataCustomFields {
  /**
  * Custom field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#name BillingProfile#name}
  */
  readonly name?: string;
  /**
  * Custom field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#value BillingProfile#value}
  */
  readonly value?: string;
}

export function billingProfileBusinessInformationAttributesMetadataCustomFieldsToTerraform(struct?: BillingProfileBusinessInformationAttributesMetadataCustomFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function billingProfileBusinessInformationAttributesMetadataCustomFieldsToHclTerraform(struct?: BillingProfileBusinessInformationAttributesMetadataCustomFields | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingProfileBusinessInformationAttributesMetadataCustomFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BillingProfileBusinessInformationAttributesMetadataCustomFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingProfileBusinessInformationAttributesMetadataCustomFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BillingProfileBusinessInformationAttributesMetadataCustomFieldsList extends cdktf.ComplexList {
  public internalValue? : BillingProfileBusinessInformationAttributesMetadataCustomFields[] | cdktf.IResolvable

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
  public get(index: number): BillingProfileBusinessInformationAttributesMetadataCustomFieldsOutputReference {
    return new BillingProfileBusinessInformationAttributesMetadataCustomFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BillingProfileBusinessInformationAttributesMetadata {
  /**
  * Array of custom field objects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#custom_fields BillingProfile#custom_fields}
  */
  readonly customFields?: BillingProfileBusinessInformationAttributesMetadataCustomFields[] | cdktf.IResolvable;
}

export function billingProfileBusinessInformationAttributesMetadataToTerraform(struct?: BillingProfileBusinessInformationAttributesMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_fields: cdktf.listMapper(billingProfileBusinessInformationAttributesMetadataCustomFieldsToTerraform, false)(struct!.customFields),
  }
}


export function billingProfileBusinessInformationAttributesMetadataToHclTerraform(struct?: BillingProfileBusinessInformationAttributesMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_fields: {
      value: cdktf.listMapperHcl(billingProfileBusinessInformationAttributesMetadataCustomFieldsToHclTerraform, false)(struct!.customFields),
      isBlock: true,
      type: "list",
      storageClassType: "BillingProfileBusinessInformationAttributesMetadataCustomFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingProfileBusinessInformationAttributesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BillingProfileBusinessInformationAttributesMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFields = this._customFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingProfileBusinessInformationAttributesMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customFields.internalValue = value.customFields;
    }
  }

  // custom_fields - computed: true, optional: true, required: false
  private _customFields = new BillingProfileBusinessInformationAttributesMetadataCustomFieldsList(this, "custom_fields", false);
  public get customFields() {
    return this._customFields;
  }
  public putCustomFields(value: BillingProfileBusinessInformationAttributesMetadataCustomFields[] | cdktf.IResolvable) {
    this._customFields.internalValue = value;
  }
  public resetCustomFields() {
    this._customFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields.internalValue;
  }
}
export interface BillingProfileBusinessInformationAttributes {
  /**
  * Business metadata including custom fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#metadata BillingProfile#metadata}
  */
  readonly metadata?: BillingProfileBusinessInformationAttributesMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#token BillingProfile#token}
  */
  readonly token?: string;
}

export function billingProfileBusinessInformationAttributesToTerraform(struct?: BillingProfileBusinessInformationAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: billingProfileBusinessInformationAttributesMetadataToTerraform(struct!.metadata),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function billingProfileBusinessInformationAttributesToHclTerraform(struct?: BillingProfileBusinessInformationAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: billingProfileBusinessInformationAttributesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "BillingProfileBusinessInformationAttributesMetadata",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingProfileBusinessInformationAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BillingProfileBusinessInformationAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingProfileBusinessInformationAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._token = value.token;
    }
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata = new BillingProfileBusinessInformationAttributesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: BillingProfileBusinessInformationAttributesMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile vantage_billing_profile}
*/
export class BillingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_billing_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BillingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BillingProfile to import
  * @param importFromId The id of the existing BillingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BillingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_billing_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/billing_profile vantage_billing_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BillingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: BillingProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_billing_profile',
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
    this._bankingInformationAttributes.internalValue = config.bankingInformationAttributes;
    this._billingInformationAttributes.internalValue = config.billingInformationAttributes;
    this._businessInformationAttributes.internalValue = config.businessInformationAttributes;
    this._nickname = config.nickname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // banking_information_attributes - computed: true, optional: true, required: false
  private _bankingInformationAttributes = new BillingProfileBankingInformationAttributesOutputReference(this, "banking_information_attributes");
  public get bankingInformationAttributes() {
    return this._bankingInformationAttributes;
  }
  public putBankingInformationAttributes(value: BillingProfileBankingInformationAttributes) {
    this._bankingInformationAttributes.internalValue = value;
  }
  public resetBankingInformationAttributes() {
    this._bankingInformationAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bankingInformationAttributesInput() {
    return this._bankingInformationAttributes.internalValue;
  }

  // billing_information_attributes - computed: true, optional: true, required: false
  private _billingInformationAttributes = new BillingProfileBillingInformationAttributesOutputReference(this, "billing_information_attributes");
  public get billingInformationAttributes() {
    return this._billingInformationAttributes;
  }
  public putBillingInformationAttributes(value: BillingProfileBillingInformationAttributes) {
    this._billingInformationAttributes.internalValue = value;
  }
  public resetBillingInformationAttributes() {
    this._billingInformationAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingInformationAttributesInput() {
    return this._billingInformationAttributes.internalValue;
  }

  // business_information_attributes - computed: true, optional: true, required: false
  private _businessInformationAttributes = new BillingProfileBusinessInformationAttributesOutputReference(this, "business_information_attributes");
  public get businessInformationAttributes() {
    return this._businessInformationAttributes;
  }
  public putBusinessInformationAttributes(value: BillingProfileBusinessInformationAttributes) {
    this._businessInformationAttributes.internalValue = value;
  }
  public resetBusinessInformationAttributes() {
    this._businessInformationAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessInformationAttributesInput() {
    return this._businessInformationAttributes.internalValue;
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

  // nickname - computed: false, optional: false, required: true
  private _nickname?: string; 
  public get nickname() {
    return this.getStringAttribute('nickname');
  }
  public set nickname(value: string) {
    this._nickname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nicknameInput() {
    return this._nickname;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      banking_information_attributes: billingProfileBankingInformationAttributesToTerraform(this._bankingInformationAttributes.internalValue),
      billing_information_attributes: billingProfileBillingInformationAttributesToTerraform(this._billingInformationAttributes.internalValue),
      business_information_attributes: billingProfileBusinessInformationAttributesToTerraform(this._businessInformationAttributes.internalValue),
      nickname: cdktf.stringToTerraform(this._nickname),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      banking_information_attributes: {
        value: billingProfileBankingInformationAttributesToHclTerraform(this._bankingInformationAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BillingProfileBankingInformationAttributes",
      },
      billing_information_attributes: {
        value: billingProfileBillingInformationAttributesToHclTerraform(this._billingInformationAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BillingProfileBillingInformationAttributes",
      },
      business_information_attributes: {
        value: billingProfileBusinessInformationAttributesToHclTerraform(this._businessInformationAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BillingProfileBusinessInformationAttributes",
      },
      nickname: {
        value: cdktf.stringToHclTerraform(this._nickname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
