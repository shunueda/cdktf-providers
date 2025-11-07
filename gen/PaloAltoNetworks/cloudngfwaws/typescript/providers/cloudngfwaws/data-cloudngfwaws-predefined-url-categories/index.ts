// https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/predefined_url_categories
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCloudngfwawsPredefinedUrlCategoriesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/predefined_url_categories#id DataCloudngfwawsPredefinedUrlCategories#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max results. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/predefined_url_categories#max_results DataCloudngfwawsPredefinedUrlCategories#max_results}
  */
  readonly maxResults?: number;
  /**
  * Pagination token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/predefined_url_categories#token DataCloudngfwawsPredefinedUrlCategories#token}
  */
  readonly token?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/predefined_url_categories cloudngfwaws_predefined_url_categories}
*/
export class DataCloudngfwawsPredefinedUrlCategories extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudngfwaws_predefined_url_categories";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCloudngfwawsPredefinedUrlCategories resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCloudngfwawsPredefinedUrlCategories to import
  * @param importFromId The id of the existing DataCloudngfwawsPredefinedUrlCategories that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/predefined_url_categories#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCloudngfwawsPredefinedUrlCategories to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudngfwaws_predefined_url_categories", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/data-sources/predefined_url_categories cloudngfwaws_predefined_url_categories} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCloudngfwawsPredefinedUrlCategoriesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCloudngfwawsPredefinedUrlCategoriesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudngfwaws_predefined_url_categories',
      terraformGeneratorMetadata: {
        providerName: 'cloudngfwaws',
        providerVersion: '3.0.4'
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
    this._maxResults = config.maxResults;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: true, optional: false, required: false
  public get categories() {
    return this.getListAttribute('categories');
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

  // next_token - computed: true, optional: false, required: false
  public get nextToken() {
    return this.getStringAttribute('next_token');
  }

  // token - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      max_results: cdktf.numberToTerraform(this._maxResults),
      token: cdktf.stringToTerraform(this._token),
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
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
