// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/invoices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVantageInvoicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter invoices by managed account token (MSP accounts only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/invoices#managed_account_token DataVantageInvoices#managed_account_token}
  */
  readonly managedAccountToken?: string;
}
export interface DataVantageInvoicesInvoices {
}

export function dataVantageInvoicesInvoicesToTerraform(struct?: DataVantageInvoicesInvoices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVantageInvoicesInvoicesToHclTerraform(struct?: DataVantageInvoicesInvoices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVantageInvoicesInvoicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVantageInvoicesInvoices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVantageInvoicesInvoices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // account_token - computed: true, optional: false, required: false
  public get accountToken() {
    return this.getStringAttribute('account_token');
  }

  // billing_period_end - computed: true, optional: false, required: false
  public get billingPeriodEnd() {
    return this.getStringAttribute('billing_period_end');
  }

  // billing_period_start - computed: true, optional: false, required: false
  public get billingPeriodStart() {
    return this.getStringAttribute('billing_period_start');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invoice_number - computed: true, optional: false, required: false
  public get invoiceNumber() {
    return this.getStringAttribute('invoice_number');
  }

  // msp_account_token - computed: true, optional: false, required: false
  public get mspAccountToken() {
    return this.getStringAttribute('msp_account_token');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getStringAttribute('total');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataVantageInvoicesInvoicesList extends cdktf.ComplexList {

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
  public get(index: number): DataVantageInvoicesInvoicesOutputReference {
    return new DataVantageInvoicesInvoicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/invoices vantage_invoices}
*/
export class DataVantageInvoices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_invoices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVantageInvoices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVantageInvoices to import
  * @param importFromId The id of the existing DataVantageInvoices that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/invoices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVantageInvoices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_invoices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/data-sources/invoices vantage_invoices} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVantageInvoicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataVantageInvoicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vantage_invoices',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.68'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._managedAccountToken = config.managedAccountToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // invoices - computed: true, optional: false, required: false
  private _invoices = new DataVantageInvoicesInvoicesList(this, "invoices", false);
  public get invoices() {
    return this._invoices;
  }

  // managed_account_token - computed: true, optional: true, required: false
  private _managedAccountToken?: string; 
  public get managedAccountToken() {
    return this.getStringAttribute('managed_account_token');
  }
  public set managedAccountToken(value: string) {
    this._managedAccountToken = value;
  }
  public resetManagedAccountToken() {
    this._managedAccountToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedAccountTokenInput() {
    return this._managedAccountToken;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      managed_account_token: cdktf.stringToTerraform(this._managedAccountToken),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      managed_account_token: {
        value: cdktf.stringToHclTerraform(this._managedAccountToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
