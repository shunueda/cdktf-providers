// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/invoice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InvoiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Token of the managed account to invoice
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/invoice#account_token Invoice#account_token}
  */
  readonly accountToken: string;
  /**
  * End date of billing period (YYYY-MM-DD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/invoice#billing_period_end Invoice#billing_period_end}
  */
  readonly billingPeriodEnd: string;
  /**
  * Start date of billing period (YYYY-MM-DD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/invoice#billing_period_start Invoice#billing_period_start}
  */
  readonly billingPeriodStart: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/invoice vantage_invoice}
*/
export class Invoice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_invoice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Invoice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Invoice to import
  * @param importFromId The id of the existing Invoice that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/invoice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Invoice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_invoice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.70/docs/resources/invoice vantage_invoice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InvoiceConfig
  */
  public constructor(scope: Construct, id: string, config: InvoiceConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_invoice',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.70',
        providerVersionConstraint: '0.1.70'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountToken = config.accountToken;
    this._billingPeriodEnd = config.billingPeriodEnd;
    this._billingPeriodStart = config.billingPeriodStart;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // account_token - computed: false, optional: false, required: true
  private _accountToken?: string; 
  public get accountToken() {
    return this.getStringAttribute('account_token');
  }
  public set accountToken(value: string) {
    this._accountToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTokenInput() {
    return this._accountToken;
  }

  // billing_period_end - computed: false, optional: false, required: true
  private _billingPeriodEnd?: string; 
  public get billingPeriodEnd() {
    return this.getStringAttribute('billing_period_end');
  }
  public set billingPeriodEnd(value: string) {
    this._billingPeriodEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingPeriodEndInput() {
    return this._billingPeriodEnd;
  }

  // billing_period_start - computed: false, optional: false, required: true
  private _billingPeriodStart?: string; 
  public get billingPeriodStart() {
    return this.getStringAttribute('billing_period_start');
  }
  public set billingPeriodStart(value: string) {
    this._billingPeriodStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingPeriodStartInput() {
    return this._billingPeriodStart;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_token: cdktf.stringToTerraform(this._accountToken),
      billing_period_end: cdktf.stringToTerraform(this._billingPeriodEnd),
      billing_period_start: cdktf.stringToTerraform(this._billingPeriodStart),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_token: {
        value: cdktf.stringToHclTerraform(this._accountToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_period_end: {
        value: cdktf.stringToHclTerraform(this._billingPeriodEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_period_start: {
        value: cdktf.stringToHclTerraform(this._billingPeriodStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
