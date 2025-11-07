// https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBitwardenFolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter search results by collection ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/folder#filter_collection_id DataBitwardenFolder#filter_collection_id}
  */
  readonly filterCollectionId?: string;
  /**
  * Filter search results by organization ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/folder#filter_organization_id DataBitwardenFolder#filter_organization_id}
  */
  readonly filterOrganizationId?: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/folder#id DataBitwardenFolder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Search items matching the search string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/folder#search DataBitwardenFolder#search}
  */
  readonly search?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/folder bitwarden_folder}
*/
export class DataBitwardenFolder extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bitwarden_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBitwardenFolder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBitwardenFolder to import
  * @param importFromId The id of the existing DataBitwardenFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBitwardenFolder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bitwarden_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/folder bitwarden_folder} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBitwardenFolderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBitwardenFolderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bitwarden_folder',
      terraformGeneratorMetadata: {
        providerName: 'bitwarden',
        providerVersion: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterCollectionId = config.filterCollectionId;
    this._filterOrganizationId = config.filterOrganizationId;
    this._id = config.id;
    this._search = config.search;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_collection_id - computed: false, optional: true, required: false
  private _filterCollectionId?: string; 
  public get filterCollectionId() {
    return this.getStringAttribute('filter_collection_id');
  }
  public set filterCollectionId(value: string) {
    this._filterCollectionId = value;
  }
  public resetFilterCollectionId() {
    this._filterCollectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterCollectionIdInput() {
    return this._filterCollectionId;
  }

  // filter_organization_id - computed: false, optional: true, required: false
  private _filterOrganizationId?: string; 
  public get filterOrganizationId() {
    return this.getStringAttribute('filter_organization_id');
  }
  public set filterOrganizationId(value: string) {
    this._filterOrganizationId = value;
  }
  public resetFilterOrganizationId() {
    this._filterOrganizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterOrganizationIdInput() {
    return this._filterOrganizationId;
  }

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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_collection_id: cdktf.stringToTerraform(this._filterCollectionId),
      filter_organization_id: cdktf.stringToTerraform(this._filterOrganizationId),
      id: cdktf.stringToTerraform(this._id),
      search: cdktf.stringToTerraform(this._search),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_collection_id: {
        value: cdktf.stringToHclTerraform(this._filterCollectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_organization_id: {
        value: cdktf.stringToHclTerraform(this._filterOrganizationId),
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
      search: {
        value: cdktf.stringToHclTerraform(this._search),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
