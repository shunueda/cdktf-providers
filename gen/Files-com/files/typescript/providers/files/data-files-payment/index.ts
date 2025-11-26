// https://registry.terraform.io/providers/files-com/files/0.1.397/docs/data-sources/payment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesPaymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Line item Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/data-sources/payment#id DataFilesPayment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/data-sources/payment files_payment}
*/
export class DataFilesPayment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_payment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesPayment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesPayment to import
  * @param importFromId The id of the existing DataFilesPayment that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/data-sources/payment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesPayment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_payment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.397/docs/data-sources/payment files_payment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesPaymentConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesPaymentConfig) {
    super(scope, id, {
      terraformResourceType: 'files_payment',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.397',
        providerVersionConstraint: '0.1.397'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amount - computed: true, optional: false, required: false
  public get amount() {
    return this.getStringAttribute('amount');
  }

  // balance - computed: true, optional: false, required: false
  public get balance() {
    return this.getStringAttribute('balance');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }

  // download_uri - computed: true, optional: false, required: false
  public get downloadUri() {
    return this.getStringAttribute('download_uri');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // invoice_line_items - computed: true, optional: false, required: false
  private _invoiceLineItems = new cdktf.AnyMap(this, "invoice_line_items");
  public get invoiceLineItems() {
    return this._invoiceLineItems;
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // payment_line_items - computed: true, optional: false, required: false
  private _paymentLineItems = new cdktf.AnyMap(this, "payment_line_items");
  public get paymentLineItems() {
    return this._paymentLineItems;
  }

  // payment_reversed_at - computed: true, optional: false, required: false
  public get paymentReversedAt() {
    return this.getStringAttribute('payment_reversed_at');
  }

  // payment_type - computed: true, optional: false, required: false
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }

  // site_name - computed: true, optional: false, required: false
  public get siteName() {
    return this.getStringAttribute('site_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
