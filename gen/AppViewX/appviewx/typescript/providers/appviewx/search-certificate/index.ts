// https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/search_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SearchCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Category of certificate (e.g., Server)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/search_certificate#category SearchCertificate#category}
  */
  readonly category: string;
  /**
  * Certificate common name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/search_certificate#cert_cn SearchCertificate#cert_cn}
  */
  readonly certCn?: string;
  /**
  * Certificate issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/search_certificate#cert_issuer SearchCertificate#cert_issuer}
  */
  readonly certIssuer?: string;
  /**
  * Certificate SAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/search_certificate#cert_san SearchCertificate#cert_san}
  */
  readonly certSan?: string;
  /**
  * Certificate serial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/search_certificate#cert_serial_no SearchCertificate#cert_serial_no}
  */
  readonly certSerialNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/search_certificate#id SearchCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum number of results to return
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/search_certificate#max_results SearchCertificate#max_results}
  */
  readonly maxResults?: number;
  /**
  * Column to sort results by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/search_certificate#sort_column SearchCertificate#sort_column}
  */
  readonly sortColumn?: string;
  /**
  * Sort order (asc or desc)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/search_certificate#sort_order SearchCertificate#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * Start index for pagination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/search_certificate#start_index SearchCertificate#start_index}
  */
  readonly startIndex?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/search_certificate appviewx_search_certificate}
*/
export class SearchCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "appviewx_search_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SearchCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SearchCertificate to import
  * @param importFromId The id of the existing SearchCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/search_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SearchCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "appviewx_search_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/appviewx/appviewx/1.0.8/docs/resources/search_certificate appviewx_search_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SearchCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: SearchCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'appviewx_search_certificate',
      terraformGeneratorMetadata: {
        providerName: 'appviewx',
        providerVersion: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._certCn = config.certCn;
    this._certIssuer = config.certIssuer;
    this._certSan = config.certSan;
    this._certSerialNo = config.certSerialNo;
    this._id = config.id;
    this._maxResults = config.maxResults;
    this._sortColumn = config.sortColumn;
    this._sortOrder = config.sortOrder;
    this._startIndex = config.startIndex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // cert_cn - computed: false, optional: true, required: false
  private _certCn?: string; 
  public get certCn() {
    return this.getStringAttribute('cert_cn');
  }
  public set certCn(value: string) {
    this._certCn = value;
  }
  public resetCertCn() {
    this._certCn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certCnInput() {
    return this._certCn;
  }

  // cert_issuer - computed: false, optional: true, required: false
  private _certIssuer?: string; 
  public get certIssuer() {
    return this.getStringAttribute('cert_issuer');
  }
  public set certIssuer(value: string) {
    this._certIssuer = value;
  }
  public resetCertIssuer() {
    this._certIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certIssuerInput() {
    return this._certIssuer;
  }

  // cert_san - computed: false, optional: true, required: false
  private _certSan?: string; 
  public get certSan() {
    return this.getStringAttribute('cert_san');
  }
  public set certSan(value: string) {
    this._certSan = value;
  }
  public resetCertSan() {
    this._certSan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSanInput() {
    return this._certSan;
  }

  // cert_serial_no - computed: false, optional: true, required: false
  private _certSerialNo?: string; 
  public get certSerialNo() {
    return this.getStringAttribute('cert_serial_no');
  }
  public set certSerialNo(value: string) {
    this._certSerialNo = value;
  }
  public resetCertSerialNo() {
    this._certSerialNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSerialNoInput() {
    return this._certSerialNo;
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

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // sort_column - computed: false, optional: true, required: false
  private _sortColumn?: string; 
  public get sortColumn() {
    return this.getStringAttribute('sort_column');
  }
  public set sortColumn(value: string) {
    this._sortColumn = value;
  }
  public resetSortColumn() {
    this._sortColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortColumnInput() {
    return this._sortColumn;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // start_index - computed: false, optional: true, required: false
  private _startIndex?: number; 
  public get startIndex() {
    return this.getNumberAttribute('start_index');
  }
  public set startIndex(value: number) {
    this._startIndex = value;
  }
  public resetStartIndex() {
    this._startIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIndexInput() {
    return this._startIndex;
  }

  // total_records - computed: true, optional: false, required: false
  public get totalRecords() {
    return this.getNumberAttribute('total_records');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      cert_cn: cdktf.stringToTerraform(this._certCn),
      cert_issuer: cdktf.stringToTerraform(this._certIssuer),
      cert_san: cdktf.stringToTerraform(this._certSan),
      cert_serial_no: cdktf.stringToTerraform(this._certSerialNo),
      id: cdktf.stringToTerraform(this._id),
      max_results: cdktf.numberToTerraform(this._maxResults),
      sort_column: cdktf.stringToTerraform(this._sortColumn),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
      start_index: cdktf.numberToTerraform(this._startIndex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_cn: {
        value: cdktf.stringToHclTerraform(this._certCn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_issuer: {
        value: cdktf.stringToHclTerraform(this._certIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_san: {
        value: cdktf.stringToHclTerraform(this._certSan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_serial_no: {
        value: cdktf.stringToHclTerraform(this._certSerialNo),
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
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort_column: {
        value: cdktf.stringToHclTerraform(this._sortColumn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_index: {
        value: cdktf.numberToHclTerraform(this._startIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
