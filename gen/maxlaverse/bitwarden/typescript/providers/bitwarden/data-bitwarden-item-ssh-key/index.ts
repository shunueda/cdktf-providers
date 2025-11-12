// https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/item_ssh_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBitwardenItemSshKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter search results by collection ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/item_ssh_key#filter_collection_id DataBitwardenItemSshKey#filter_collection_id}
  */
  readonly filterCollectionId?: string;
  /**
  * Filter search results by folder ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/item_ssh_key#filter_folder_id DataBitwardenItemSshKey#filter_folder_id}
  */
  readonly filterFolderId?: string;
  /**
  * Filter search results by organization ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/item_ssh_key#filter_organization_id DataBitwardenItemSshKey#filter_organization_id}
  */
  readonly filterOrganizationId?: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/item_ssh_key#id DataBitwardenItemSshKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Search items matching the search string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/item_ssh_key#search DataBitwardenItemSshKey#search}
  */
  readonly search?: string;
}
export interface DataBitwardenItemSshKeyField {
}

export function dataBitwardenItemSshKeyFieldToTerraform(struct?: DataBitwardenItemSshKeyField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBitwardenItemSshKeyFieldToHclTerraform(struct?: DataBitwardenItemSshKeyField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBitwardenItemSshKeyFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBitwardenItemSshKeyField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBitwardenItemSshKeyField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean - computed: true, optional: false, required: false
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }

  // hidden - computed: true, optional: false, required: false
  public get hidden() {
    return this.getStringAttribute('hidden');
  }

  // linked - computed: true, optional: false, required: false
  public get linked() {
    return this.getStringAttribute('linked');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }
}

export class DataBitwardenItemSshKeyFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataBitwardenItemSshKeyFieldOutputReference {
    return new DataBitwardenItemSshKeyFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/item_ssh_key bitwarden_item_ssh_key}
*/
export class DataBitwardenItemSshKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bitwarden_item_ssh_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBitwardenItemSshKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBitwardenItemSshKey to import
  * @param importFromId The id of the existing DataBitwardenItemSshKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/item_ssh_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBitwardenItemSshKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bitwarden_item_ssh_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/data-sources/item_ssh_key bitwarden_item_ssh_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBitwardenItemSshKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBitwardenItemSshKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bitwarden_item_ssh_key',
      terraformGeneratorMetadata: {
        providerName: 'bitwarden',
        providerVersion: '0.16.0',
        providerVersionConstraint: '0.16.0'
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
    this._filterFolderId = config.filterFolderId;
    this._filterOrganizationId = config.filterOrganizationId;
    this._id = config.id;
    this._search = config.search;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_ids - computed: true, optional: false, required: false
  public get collectionIds() {
    return this.getListAttribute('collection_ids');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // deleted_date - computed: true, optional: false, required: false
  public get deletedDate() {
    return this.getStringAttribute('deleted_date');
  }

  // field - computed: true, optional: false, required: false
  private _field = new DataBitwardenItemSshKeyFieldList(this, "field", false);
  public get field() {
    return this._field;
  }

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

  // filter_folder_id - computed: false, optional: true, required: false
  private _filterFolderId?: string; 
  public get filterFolderId() {
    return this.getStringAttribute('filter_folder_id');
  }
  public set filterFolderId(value: string) {
    this._filterFolderId = value;
  }
  public resetFilterFolderId() {
    this._filterFolderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterFolderIdInput() {
    return this._filterFolderId;
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

  // folder_id - computed: true, optional: false, required: false
  public get folderId() {
    return this.getStringAttribute('folder_id');
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

  // key_fingerprint - computed: true, optional: false, required: false
  public get keyFingerprint() {
    return this.getStringAttribute('key_fingerprint');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // reprompt - computed: true, optional: false, required: false
  public get reprompt() {
    return this.getBooleanAttribute('reprompt');
  }

  // revision_date - computed: true, optional: false, required: false
  public get revisionDate() {
    return this.getStringAttribute('revision_date');
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
      filter_folder_id: cdktf.stringToTerraform(this._filterFolderId),
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
      filter_folder_id: {
        value: cdktf.stringToHclTerraform(this._filterFolderId),
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
