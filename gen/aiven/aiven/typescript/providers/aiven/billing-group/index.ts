// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BillingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#account_id BillingGroup#account_id}
  */
  readonly accountId?: string;
  /**
  * Address lines 1 and 2. For example, street, PO box, or building.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#address_lines BillingGroup#address_lines}
  */
  readonly addressLines?: string[];
  /**
  * Billing currency for the billing group. Supported currencies are: AUD, CAD, CHF, DKK, EUR, GBP, JPY, NOK, NZD, SEK, SGD, and USD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#billing_currency BillingGroup#billing_currency}
  */
  readonly billingCurrency?: string;
  /**
  * Email address of billing contacts. Invoices and other payment notifications are emailed to all billing contacts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#billing_emails BillingGroup#billing_emails}
  */
  readonly billingEmails?: string[];
  /**
  * Additional information to include on your invoice (for example, a reference number).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#billing_extra_text BillingGroup#billing_extra_text}
  */
  readonly billingExtraText?: string;
  /**
  * Credit card ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#card_id BillingGroup#card_id}
  */
  readonly cardId?: string;
  /**
  * City, district, suburb, town, or village.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#city BillingGroup#city}
  */
  readonly city?: string;
  /**
  * Your company name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#company BillingGroup#company}
  */
  readonly company?: string;
  /**
  * ID of the billing group to copy the company name, address, currency, billing contacts, and extra text from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#copy_from_billing_group BillingGroup#copy_from_billing_group}
  */
  readonly copyFromBillingGroup?: string;
  /**
  * Two-letter country code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#country_code BillingGroup#country_code}
  */
  readonly countryCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#id BillingGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the billing group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#name BillingGroup#name}
  */
  readonly name: string;
  /**
  * Link a billing group to an existing organization by using its ID. To set up proper dependencies please refer to this variable as a reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#parent_id BillingGroup#parent_id}
  */
  readonly parentId?: string;
  /**
  * Address state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#state BillingGroup#state}
  */
  readonly state?: string;
  /**
  * The VAT identification number for your company.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#vat_id BillingGroup#vat_id}
  */
  readonly vatId?: string;
  /**
  * Zip or postal code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#zip_code BillingGroup#zip_code}
  */
  readonly zipCode?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#timeouts BillingGroup#timeouts}
  */
  readonly timeouts?: BillingGroupTimeouts;
}
export interface BillingGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#create BillingGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#default BillingGroup#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#delete BillingGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#read BillingGroup#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#update BillingGroup#update}
  */
  readonly update?: string;
}

export function billingGroupTimeoutsToTerraform(struct?: BillingGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function billingGroupTimeoutsToHclTerraform(struct?: BillingGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BillingGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BillingGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BillingGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group aiven_billing_group}
*/
export class BillingGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_billing_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BillingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BillingGroup to import
  * @param importFromId The id of the existing BillingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BillingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_billing_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/billing_group aiven_billing_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BillingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: BillingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_billing_group',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._addressLines = config.addressLines;
    this._billingCurrency = config.billingCurrency;
    this._billingEmails = config.billingEmails;
    this._billingExtraText = config.billingExtraText;
    this._cardId = config.cardId;
    this._city = config.city;
    this._company = config.company;
    this._copyFromBillingGroup = config.copyFromBillingGroup;
    this._countryCode = config.countryCode;
    this._id = config.id;
    this._name = config.name;
    this._parentId = config.parentId;
    this._state = config.state;
    this._vatId = config.vatId;
    this._zipCode = config.zipCode;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // address_lines - computed: false, optional: true, required: false
  private _addressLines?: string[]; 
  public get addressLines() {
    return cdktf.Fn.tolist(this.getListAttribute('address_lines'));
  }
  public set addressLines(value: string[]) {
    this._addressLines = value;
  }
  public resetAddressLines() {
    this._addressLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLinesInput() {
    return this._addressLines;
  }

  // billing_currency - computed: false, optional: true, required: false
  private _billingCurrency?: string; 
  public get billingCurrency() {
    return this.getStringAttribute('billing_currency');
  }
  public set billingCurrency(value: string) {
    this._billingCurrency = value;
  }
  public resetBillingCurrency() {
    this._billingCurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingCurrencyInput() {
    return this._billingCurrency;
  }

  // billing_emails - computed: false, optional: true, required: false
  private _billingEmails?: string[]; 
  public get billingEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('billing_emails'));
  }
  public set billingEmails(value: string[]) {
    this._billingEmails = value;
  }
  public resetBillingEmails() {
    this._billingEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingEmailsInput() {
    return this._billingEmails;
  }

  // billing_extra_text - computed: false, optional: true, required: false
  private _billingExtraText?: string; 
  public get billingExtraText() {
    return this.getStringAttribute('billing_extra_text');
  }
  public set billingExtraText(value: string) {
    this._billingExtraText = value;
  }
  public resetBillingExtraText() {
    this._billingExtraText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingExtraTextInput() {
    return this._billingExtraText;
  }

  // card_id - computed: false, optional: true, required: false
  private _cardId?: string; 
  public get cardId() {
    return this.getStringAttribute('card_id');
  }
  public set cardId(value: string) {
    this._cardId = value;
  }
  public resetCardId() {
    this._cardId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cardIdInput() {
    return this._cardId;
  }

  // city - computed: false, optional: true, required: false
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

  // company - computed: false, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // copy_from_billing_group - computed: false, optional: true, required: false
  private _copyFromBillingGroup?: string; 
  public get copyFromBillingGroup() {
    return this.getStringAttribute('copy_from_billing_group');
  }
  public set copyFromBillingGroup(value: string) {
    this._copyFromBillingGroup = value;
  }
  public resetCopyFromBillingGroup() {
    this._copyFromBillingGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyFromBillingGroupInput() {
    return this._copyFromBillingGroup;
  }

  // country_code - computed: false, optional: true, required: false
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

  // parent_id - computed: false, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // state - computed: false, optional: true, required: false
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

  // vat_id - computed: false, optional: true, required: false
  private _vatId?: string; 
  public get vatId() {
    return this.getStringAttribute('vat_id');
  }
  public set vatId(value: string) {
    this._vatId = value;
  }
  public resetVatId() {
    this._vatId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vatIdInput() {
    return this._vatId;
  }

  // zip_code - computed: false, optional: true, required: false
  private _zipCode?: string; 
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }
  public resetZipCode() {
    this._zipCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipCodeInput() {
    return this._zipCode;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BillingGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BillingGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      address_lines: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addressLines),
      billing_currency: cdktf.stringToTerraform(this._billingCurrency),
      billing_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._billingEmails),
      billing_extra_text: cdktf.stringToTerraform(this._billingExtraText),
      card_id: cdktf.stringToTerraform(this._cardId),
      city: cdktf.stringToTerraform(this._city),
      company: cdktf.stringToTerraform(this._company),
      copy_from_billing_group: cdktf.stringToTerraform(this._copyFromBillingGroup),
      country_code: cdktf.stringToTerraform(this._countryCode),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      state: cdktf.stringToTerraform(this._state),
      vat_id: cdktf.stringToTerraform(this._vatId),
      zip_code: cdktf.stringToTerraform(this._zipCode),
      timeouts: billingGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_lines: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addressLines),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      billing_currency: {
        value: cdktf.stringToHclTerraform(this._billingCurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._billingEmails),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      billing_extra_text: {
        value: cdktf.stringToHclTerraform(this._billingExtraText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      card_id: {
        value: cdktf.stringToHclTerraform(this._cardId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      city: {
        value: cdktf.stringToHclTerraform(this._city),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company: {
        value: cdktf.stringToHclTerraform(this._company),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copy_from_billing_group: {
        value: cdktf.stringToHclTerraform(this._copyFromBillingGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country_code: {
        value: cdktf.stringToHclTerraform(this._countryCode),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vat_id: {
        value: cdktf.stringToHclTerraform(this._vatId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zip_code: {
        value: cdktf.stringToHclTerraform(this._zipCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: billingGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BillingGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
