// https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/invoices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPnapInvoicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/invoices#id DataPnapInvoices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/invoices#limit DataPnapInvoices#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/invoices#number DataPnapInvoices#number}
  */
  readonly number?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/invoices#offset DataPnapInvoices#offset}
  */
  readonly offset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/invoices#pdf_folder_path DataPnapInvoices#pdf_folder_path}
  */
  readonly pdfFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/invoices#sent_on_from DataPnapInvoices#sent_on_from}
  */
  readonly sentOnFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/invoices#sent_on_to DataPnapInvoices#sent_on_to}
  */
  readonly sentOnTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/invoices#sort_direction DataPnapInvoices#sort_direction}
  */
  readonly sortDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/invoices#sort_field DataPnapInvoices#sort_field}
  */
  readonly sortField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/invoices#status DataPnapInvoices#status}
  */
  readonly status?: string;
}
export interface DataPnapInvoicesPaginatedInvoicesResults {
}

export function dataPnapInvoicesPaginatedInvoicesResultsToTerraform(struct?: DataPnapInvoicesPaginatedInvoicesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPnapInvoicesPaginatedInvoicesResultsToHclTerraform(struct?: DataPnapInvoicesPaginatedInvoicesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPnapInvoicesPaginatedInvoicesResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPnapInvoicesPaginatedInvoicesResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPnapInvoicesPaginatedInvoicesResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // amount - computed: true, optional: false, required: false
  public get amount() {
    return this.getNumberAttribute('amount');
  }

  // currency - computed: true, optional: false, required: false
  public get currency() {
    return this.getStringAttribute('currency');
  }

  // due_date - computed: true, optional: false, required: false
  public get dueDate() {
    return this.getStringAttribute('due_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getStringAttribute('number');
  }

  // outstanding_amount - computed: true, optional: false, required: false
  public get outstandingAmount() {
    return this.getNumberAttribute('outstanding_amount');
  }

  // sent_on - computed: true, optional: false, required: false
  public get sentOn() {
    return this.getStringAttribute('sent_on');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataPnapInvoicesPaginatedInvoicesResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataPnapInvoicesPaginatedInvoicesResultsOutputReference {
    return new DataPnapInvoicesPaginatedInvoicesResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPnapInvoicesPaginatedInvoices {
}

export function dataPnapInvoicesPaginatedInvoicesToTerraform(struct?: DataPnapInvoicesPaginatedInvoices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPnapInvoicesPaginatedInvoicesToHclTerraform(struct?: DataPnapInvoicesPaginatedInvoices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPnapInvoicesPaginatedInvoicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPnapInvoicesPaginatedInvoices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPnapInvoicesPaginatedInvoices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getNumberAttribute('offset');
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataPnapInvoicesPaginatedInvoicesResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

export class DataPnapInvoicesPaginatedInvoicesList extends cdktf.ComplexList {

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
  public get(index: number): DataPnapInvoicesPaginatedInvoicesOutputReference {
    return new DataPnapInvoicesPaginatedInvoicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/invoices pnap_invoices}
*/
export class DataPnapInvoices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pnap_invoices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPnapInvoices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPnapInvoices to import
  * @param importFromId The id of the existing DataPnapInvoices that should be imported. Refer to the {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/invoices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPnapInvoices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pnap_invoices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/invoices pnap_invoices} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPnapInvoicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPnapInvoicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pnap_invoices',
      terraformGeneratorMetadata: {
        providerName: 'pnap',
        providerVersion: '0.30.0'
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
    this._limit = config.limit;
    this._number = config.number;
    this._offset = config.offset;
    this._pdfFolderPath = config.pdfFolderPath;
    this._sentOnFrom = config.sentOnFrom;
    this._sentOnTo = config.sentOnTo;
    this._sortDirection = config.sortDirection;
    this._sortField = config.sortField;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // number - computed: false, optional: true, required: false
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // paginated_invoices - computed: true, optional: false, required: false
  private _paginatedInvoices = new DataPnapInvoicesPaginatedInvoicesList(this, "paginated_invoices", false);
  public get paginatedInvoices() {
    return this._paginatedInvoices;
  }

  // pdf_folder_path - computed: false, optional: true, required: false
  private _pdfFolderPath?: string; 
  public get pdfFolderPath() {
    return this.getStringAttribute('pdf_folder_path');
  }
  public set pdfFolderPath(value: string) {
    this._pdfFolderPath = value;
  }
  public resetPdfFolderPath() {
    this._pdfFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdfFolderPathInput() {
    return this._pdfFolderPath;
  }

  // sent_on_from - computed: false, optional: true, required: false
  private _sentOnFrom?: string; 
  public get sentOnFrom() {
    return this.getStringAttribute('sent_on_from');
  }
  public set sentOnFrom(value: string) {
    this._sentOnFrom = value;
  }
  public resetSentOnFrom() {
    this._sentOnFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentOnFromInput() {
    return this._sentOnFrom;
  }

  // sent_on_to - computed: false, optional: true, required: false
  private _sentOnTo?: string; 
  public get sentOnTo() {
    return this.getStringAttribute('sent_on_to');
  }
  public set sentOnTo(value: string) {
    this._sentOnTo = value;
  }
  public resetSentOnTo() {
    this._sentOnTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentOnToInput() {
    return this._sentOnTo;
  }

  // sort_direction - computed: false, optional: true, required: false
  private _sortDirection?: string; 
  public get sortDirection() {
    return this.getStringAttribute('sort_direction');
  }
  public set sortDirection(value: string) {
    this._sortDirection = value;
  }
  public resetSortDirection() {
    this._sortDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortDirectionInput() {
    return this._sortDirection;
  }

  // sort_field - computed: false, optional: true, required: false
  private _sortField?: string; 
  public get sortField() {
    return this.getStringAttribute('sort_field');
  }
  public set sortField(value: string) {
    this._sortField = value;
  }
  public resetSortField() {
    this._sortField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortFieldInput() {
    return this._sortField;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      number: cdktf.stringToTerraform(this._number),
      offset: cdktf.numberToTerraform(this._offset),
      pdf_folder_path: cdktf.stringToTerraform(this._pdfFolderPath),
      sent_on_from: cdktf.stringToTerraform(this._sentOnFrom),
      sent_on_to: cdktf.stringToTerraform(this._sentOnTo),
      sort_direction: cdktf.stringToTerraform(this._sortDirection),
      sort_field: cdktf.stringToTerraform(this._sortField),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number: {
        value: cdktf.stringToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pdf_folder_path: {
        value: cdktf.stringToHclTerraform(this._pdfFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sent_on_from: {
        value: cdktf.stringToHclTerraform(this._sentOnFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sent_on_to: {
        value: cdktf.stringToHclTerraform(this._sentOnTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_direction: {
        value: cdktf.stringToHclTerraform(this._sortDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_field: {
        value: cdktf.stringToHclTerraform(this._sortField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
