// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/billing_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenBillingGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The [ID of the billing group](https://aiven.io/docs/platform/reference/get-resource-IDs#get-a-billing-group-id). To set up proper dependencies please refer to this variable as a reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/billing_group#billing_group_id DataAivenBillingGroup#billing_group_id}
  */
  readonly billingGroupId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/billing_group#timeouts DataAivenBillingGroup#timeouts}
  */
  readonly timeouts?: DataAivenBillingGroupTimeouts;
}
export interface DataAivenBillingGroupTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/billing_group#read DataAivenBillingGroup#read}
  */
  readonly read?: string;
}

export function dataAivenBillingGroupTimeoutsToTerraform(struct?: DataAivenBillingGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAivenBillingGroupTimeoutsToHclTerraform(struct?: DataAivenBillingGroupTimeouts | cdktf.IResolvable): any {
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

export class DataAivenBillingGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAivenBillingGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAivenBillingGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/billing_group aiven_billing_group}
*/
export class DataAivenBillingGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_billing_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenBillingGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenBillingGroup to import
  * @param importFromId The id of the existing DataAivenBillingGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/billing_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenBillingGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_billing_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/billing_group aiven_billing_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenBillingGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenBillingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_billing_group',
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // address_lines - computed: true, optional: false, required: false
  public get addressLines() {
    return cdktf.Fn.tolist(this.getListAttribute('address_lines'));
  }

  // billing_contact_emails - computed: true, optional: false, required: false
  public get billingContactEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('billing_contact_emails'));
  }

  // billing_currency - computed: true, optional: false, required: false
  public get billingCurrency() {
    return this.getStringAttribute('billing_currency');
  }

  // billing_emails - computed: true, optional: false, required: false
  public get billingEmails() {
    return cdktf.Fn.tolist(this.getListAttribute('billing_emails'));
  }

  // billing_extra_text - computed: true, optional: false, required: false
  public get billingExtraText() {
    return this.getStringAttribute('billing_extra_text');
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

  // card_id - computed: true, optional: false, required: false
  public get cardId() {
    return this.getStringAttribute('card_id');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // company - computed: true, optional: false, required: false
  public get company() {
    return this.getStringAttribute('company');
  }

  // copy_from_billing_group - computed: true, optional: false, required: false
  public get copyFromBillingGroup() {
    return this.getStringAttribute('copy_from_billing_group');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vat_id - computed: true, optional: false, required: false
  public get vatId() {
    return this.getStringAttribute('vat_id');
  }

  // zip_code - computed: true, optional: false, required: false
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAivenBillingGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAivenBillingGroupTimeouts) {
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
      timeouts: dataAivenBillingGroupTimeoutsToTerraform(this._timeouts.internalValue),
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
      timeouts: {
        value: dataAivenBillingGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAivenBillingGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
