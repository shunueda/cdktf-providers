// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_billing_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenOrganizationBillingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Billing group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_billing_group#billing_group_id DataAivenOrganizationBillingGroup#billing_group_id}
  */
  readonly billingGroupId: string;
  /**
  * ID of an organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_billing_group#organization_id DataAivenOrganizationBillingGroup#organization_id}
  */
  readonly organizationId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_billing_group#timeouts DataAivenOrganizationBillingGroup#timeouts}
  */
  readonly timeouts?: DataAivenOrganizationBillingGroupTimeouts;
}
export interface DataAivenOrganizationBillingGroupTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_billing_group#read DataAivenOrganizationBillingGroup#read}
  */
  readonly read?: string;
}

export function dataAivenOrganizationBillingGroupTimeoutsToTerraform(struct?: DataAivenOrganizationBillingGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAivenOrganizationBillingGroupTimeoutsToHclTerraform(struct?: DataAivenOrganizationBillingGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAivenOrganizationBillingGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAivenOrganizationBillingGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenOrganizationBillingGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_billing_group aiven_organization_billing_group}
*/
export class DataAivenOrganizationBillingGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_organization_billing_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenOrganizationBillingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenOrganizationBillingGroup to import
  * @param importFromId The id of the existing DataAivenOrganizationBillingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_billing_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenOrganizationBillingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_organization_billing_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/organization_billing_group aiven_organization_billing_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenOrganizationBillingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenOrganizationBillingGroupConfig) {
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
    this._billingGroupId = config.billingGroupId;
    this._organizationId = config.organizationId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_address_id - computed: true, optional: false, required: false
  public get billingAddressId() {
    return this.getStringAttribute('billing_address_id');
  }

  // billing_contact_emails - computed: true, optional: false, required: false
  public get billingContactEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('billing_contact_emails'));
  }

  // billing_emails - computed: true, optional: false, required: false
  public get billingEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('billing_emails'));
  }

  // billing_group_id - computed: false, optional: false, required: true
  private _billingGroupId?: string; 
  public get billingGroupId() {
    return this.getStringAttribute('billing_group_id');
  }
  public set billingGroupId(value: string) {
    this._billingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingGroupIdInput() {
    return this._billingGroupId;
  }

  // billing_group_name - computed: true, optional: false, required: false
  public get billingGroupName() {
    return this.getStringAttribute('billing_group_name');
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }

  // custom_invoice_text - computed: true, optional: false, required: false
  public get customInvoiceText() {
    return this.getStringAttribute('custom_invoice_text');
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

  // payment_method_id - computed: true, optional: false, required: false
  public get paymentMethodId() {
    return this.getStringAttribute('payment_method_id');
  }

  // shipping_address_id - computed: true, optional: false, required: false
  public get shippingAddressId() {
    return this.getStringAttribute('shipping_address_id');
  }

  // vat_id - computed: true, optional: false, required: false
  public get vatId() {
    return this.getStringAttribute('vat_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAivenOrganizationBillingGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAivenOrganizationBillingGroupTimeouts) {
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
      billing_group_id: cdktf.stringToTerraform(this._billingGroupId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      timeouts: dataAivenOrganizationBillingGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_group_id: {
        value: cdktf.stringToHclTerraform(this._billingGroupId),
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
      timeouts: {
        value: dataAivenOrganizationBillingGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAivenOrganizationBillingGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
