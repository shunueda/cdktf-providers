// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationBillingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Billing address ID. Maximum length: `36`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group#billing_address_id OrganizationBillingGroup#billing_address_id}
  */
  readonly billingAddressId: string;
  /**
  * Aiven contacts these email addresses when there are billing issues or questions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group#billing_contact_emails OrganizationBillingGroup#billing_contact_emails}
  */
  readonly billingContactEmails: string[];
  /**
  * PDF invoices are sent to these email addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group#billing_emails OrganizationBillingGroup#billing_emails}
  */
  readonly billingEmails: string[];
  /**
  * Billing Group Name. Maximum length: `128`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group#billing_group_name OrganizationBillingGroup#billing_group_name}
  */
  readonly billingGroupName: string;
  /**
  * Acceptable currencies for a billing group. The possible values are `AUD`, `CAD`, `CHF`, `DKK`, `EUR`, `GBP`, `JPY`, `NOK`, `NZD`, `SEK`, `SGD` and `USD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group#currency OrganizationBillingGroup#currency}
  */
  readonly currency?: string;
  /**
  * Extra billing text. Maximum length: `256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group#custom_invoice_text OrganizationBillingGroup#custom_invoice_text}
  */
  readonly customInvoiceText?: string;
  /**
  * ID of an organization. Maximum length: `36`. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group#organization_id OrganizationBillingGroup#organization_id}
  */
  readonly organizationId: string;
  /**
  * Payment method ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group#payment_method_id OrganizationBillingGroup#payment_method_id}
  */
  readonly paymentMethodId: string;
  /**
  * Shipping address ID. Maximum length: `36`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group#shipping_address_id OrganizationBillingGroup#shipping_address_id}
  */
  readonly shippingAddressId: string;
  /**
  * VAT ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group#vat_id OrganizationBillingGroup#vat_id}
  */
  readonly vatId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group#timeouts OrganizationBillingGroup#timeouts}
  */
  readonly timeouts?: OrganizationBillingGroupTimeouts;
}
export interface OrganizationBillingGroupTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group#create OrganizationBillingGroup#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group#delete OrganizationBillingGroup#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group#read OrganizationBillingGroup#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group#update OrganizationBillingGroup#update}
  */
  readonly update?: string;
}

export function organizationBillingGroupTimeoutsToTerraform(struct?: OrganizationBillingGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function organizationBillingGroupTimeoutsToHclTerraform(struct?: OrganizationBillingGroupTimeouts | cdktf.IResolvable): any {
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

export class OrganizationBillingGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationBillingGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
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

  public set internalValue(value: OrganizationBillingGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group aiven_organization_billing_group}
*/
export class OrganizationBillingGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_organization_billing_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationBillingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationBillingGroup to import
  * @param importFromId The id of the existing OrganizationBillingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationBillingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_organization_billing_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/organization_billing_group aiven_organization_billing_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationBillingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationBillingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_organization_billing_group',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.48.0',
        providerVersionConstraint: '4.48.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billingAddressId = config.billingAddressId;
    this._billingContactEmails = config.billingContactEmails;
    this._billingEmails = config.billingEmails;
    this._billingGroupName = config.billingGroupName;
    this._currency = config.currency;
    this._customInvoiceText = config.customInvoiceText;
    this._organizationId = config.organizationId;
    this._paymentMethodId = config.paymentMethodId;
    this._shippingAddressId = config.shippingAddressId;
    this._vatId = config.vatId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_address_id - computed: false, optional: false, required: true
  private _billingAddressId?: string; 
  public get billingAddressId() {
    return this.getStringAttribute('billing_address_id');
  }
  public set billingAddressId(value: string) {
    this._billingAddressId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAddressIdInput() {
    return this._billingAddressId;
  }

  // billing_contact_emails - computed: false, optional: false, required: true
  private _billingContactEmails?: string[]; 
  public get billingContactEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('billing_contact_emails'));
  }
  public set billingContactEmails(value: string[]) {
    this._billingContactEmails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingContactEmailsInput() {
    return this._billingContactEmails;
  }

  // billing_emails - computed: false, optional: false, required: true
  private _billingEmails?: string[]; 
  public get billingEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('billing_emails'));
  }
  public set billingEmails(value: string[]) {
    this._billingEmails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingEmailsInput() {
    return this._billingEmails;
  }

  // billing_group_id - computed: true, optional: false, required: false
  public get billingGroupId() {
    return this.getStringAttribute('billing_group_id');
  }

  // billing_group_name - computed: false, optional: false, required: true
  private _billingGroupName?: string; 
  public get billingGroupName() {
    return this.getStringAttribute('billing_group_name');
  }
  public set billingGroupName(value: string) {
    this._billingGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingGroupNameInput() {
    return this._billingGroupName;
  }

  // currency - computed: false, optional: true, required: false
  private _currency?: string; 
  public get currency() {
    return this.getStringAttribute('currency');
  }
  public set currency(value: string) {
    this._currency = value;
  }
  public resetCurrency() {
    this._currency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currencyInput() {
    return this._currency;
  }

  // custom_invoice_text - computed: false, optional: true, required: false
  private _customInvoiceText?: string; 
  public get customInvoiceText() {
    return this.getStringAttribute('custom_invoice_text');
  }
  public set customInvoiceText(value: string) {
    this._customInvoiceText = value;
  }
  public resetCustomInvoiceText() {
    this._customInvoiceText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInvoiceTextInput() {
    return this._customInvoiceText;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // payment_method_id - computed: false, optional: false, required: true
  private _paymentMethodId?: string; 
  public get paymentMethodId() {
    return this.getStringAttribute('payment_method_id');
  }
  public set paymentMethodId(value: string) {
    this._paymentMethodId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentMethodIdInput() {
    return this._paymentMethodId;
  }

  // shipping_address_id - computed: false, optional: false, required: true
  private _shippingAddressId?: string; 
  public get shippingAddressId() {
    return this.getStringAttribute('shipping_address_id');
  }
  public set shippingAddressId(value: string) {
    this._shippingAddressId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shippingAddressIdInput() {
    return this._shippingAddressId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrganizationBillingGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrganizationBillingGroupTimeouts) {
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
      billing_address_id: cdktf.stringToTerraform(this._billingAddressId),
      billing_contact_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._billingContactEmails),
      billing_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._billingEmails),
      billing_group_name: cdktf.stringToTerraform(this._billingGroupName),
      currency: cdktf.stringToTerraform(this._currency),
      custom_invoice_text: cdktf.stringToTerraform(this._customInvoiceText),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      payment_method_id: cdktf.stringToTerraform(this._paymentMethodId),
      shipping_address_id: cdktf.stringToTerraform(this._shippingAddressId),
      vat_id: cdktf.stringToTerraform(this._vatId),
      timeouts: organizationBillingGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_address_id: {
        value: cdktf.stringToHclTerraform(this._billingAddressId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_contact_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._billingContactEmails),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      billing_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._billingEmails),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      billing_group_name: {
        value: cdktf.stringToHclTerraform(this._billingGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      currency: {
        value: cdktf.stringToHclTerraform(this._currency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_invoice_text: {
        value: cdktf.stringToHclTerraform(this._customInvoiceText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_method_id: {
        value: cdktf.stringToHclTerraform(this._paymentMethodId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shipping_address_id: {
        value: cdktf.stringToHclTerraform(this._shippingAddressId),
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
      timeouts: {
        value: organizationBillingGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationBillingGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
