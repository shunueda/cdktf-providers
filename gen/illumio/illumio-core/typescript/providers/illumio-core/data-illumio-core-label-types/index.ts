// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/label_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIllumioCoreLabelTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name on which to filter. Supports partial matches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/label_types#display_name DataIllumioCoreLabelTypes#display_name}
  */
  readonly displayName?: string;
  /**
  * A unique identifier within the external data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/label_types#external_data_reference DataIllumioCoreLabelTypes#external_data_reference}
  */
  readonly externalDataReference?: string;
  /**
  * The data source from which a resource originates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/label_types#external_data_set DataIllumioCoreLabelTypes#external_data_set}
  */
  readonly externalDataSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/label_types#id DataIllumioCoreLabelTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Include deleted labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/label_types#include_deleted DataIllumioCoreLabelTypes#include_deleted}
  */
  readonly includeDeleted?: string;
  /**
  * Label type key to filter by. The value must be a string between 1 and 64 characters long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/label_types#key DataIllumioCoreLabelTypes#key}
  */
  readonly key?: string;
  /**
  * Indicates whether to return all partially-matching display names or only exact matches. Allowed values are "partial" and "exact". Default value: "partial"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/label_types#match_type DataIllumioCoreLabelTypes#match_type}
  */
  readonly matchType?: string;
  /**
  * Maximum number of Labels to return. The integer should be a non-zero positive integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/label_types#max_results DataIllumioCoreLabelTypes#max_results}
  */
  readonly maxResults?: string;
}
export interface DataIllumioCoreLabelTypesItemsDisplayInfo {
}

export function dataIllumioCoreLabelTypesItemsDisplayInfoToTerraform(struct?: DataIllumioCoreLabelTypesItemsDisplayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreLabelTypesItemsDisplayInfoToHclTerraform(struct?: DataIllumioCoreLabelTypesItemsDisplayInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreLabelTypesItemsDisplayInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreLabelTypesItemsDisplayInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreLabelTypesItemsDisplayInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // background_color - computed: true, optional: false, required: false
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }

  // display_name_plural - computed: true, optional: false, required: false
  public get displayNamePlural() {
    return this.getStringAttribute('display_name_plural');
  }

  // foreground_color - computed: true, optional: false, required: false
  public get foregroundColor() {
    return this.getStringAttribute('foreground_color');
  }

  // icon - computed: true, optional: false, required: false
  public get icon() {
    return this.getStringAttribute('icon');
  }

  // initial - computed: true, optional: false, required: false
  public get initial() {
    return this.getStringAttribute('initial');
  }

  // sort_ordinal - computed: true, optional: false, required: false
  public get sortOrdinal() {
    return this.getStringAttribute('sort_ordinal');
  }
}

export class DataIllumioCoreLabelTypesItemsDisplayInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreLabelTypesItemsDisplayInfoOutputReference {
    return new DataIllumioCoreLabelTypesItemsDisplayInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIllumioCoreLabelTypesItems {
}

export function dataIllumioCoreLabelTypesItemsToTerraform(struct?: DataIllumioCoreLabelTypesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIllumioCoreLabelTypesItemsToHclTerraform(struct?: DataIllumioCoreLabelTypesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIllumioCoreLabelTypesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIllumioCoreLabelTypesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIllumioCoreLabelTypesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // caps - computed: true, optional: false, required: false
  public get caps() {
    return this.getListAttribute('caps');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
  }

  // display_info - computed: true, optional: false, required: false
  private _displayInfo = new DataIllumioCoreLabelTypesItemsDisplayInfoList(this, "display_info", false);
  public get displayInfo() {
    return this._displayInfo;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // external_data_reference - computed: true, optional: false, required: false
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }

  // external_data_set - computed: true, optional: false, required: false
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // usage - computed: true, optional: false, required: false
  private _usage = new cdktf.BooleanMap(this, "usage");
  public get usage() {
    return this._usage;
  }
}

export class DataIllumioCoreLabelTypesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataIllumioCoreLabelTypesItemsOutputReference {
    return new DataIllumioCoreLabelTypesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/label_types illumio-core_label_types}
*/
export class DataIllumioCoreLabelTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_label_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIllumioCoreLabelTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIllumioCoreLabelTypes to import
  * @param importFromId The id of the existing DataIllumioCoreLabelTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/label_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIllumioCoreLabelTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_label_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/data-sources/label_types illumio-core_label_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIllumioCoreLabelTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIllumioCoreLabelTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_label_types',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._externalDataReference = config.externalDataReference;
    this._externalDataSet = config.externalDataSet;
    this._id = config.id;
    this._includeDeleted = config.includeDeleted;
    this._key = config.key;
    this._matchType = config.matchType;
    this._maxResults = config.maxResults;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // external_data_reference - computed: false, optional: true, required: false
  private _externalDataReference?: string; 
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }
  public set externalDataReference(value: string) {
    this._externalDataReference = value;
  }
  public resetExternalDataReference() {
    this._externalDataReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataReferenceInput() {
    return this._externalDataReference;
  }

  // external_data_set - computed: false, optional: true, required: false
  private _externalDataSet?: string; 
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }
  public set externalDataSet(value: string) {
    this._externalDataSet = value;
  }
  public resetExternalDataSet() {
    this._externalDataSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataSetInput() {
    return this._externalDataSet;
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

  // include_deleted - computed: false, optional: true, required: false
  private _includeDeleted?: string; 
  public get includeDeleted() {
    return this.getStringAttribute('include_deleted');
  }
  public set includeDeleted(value: string) {
    this._includeDeleted = value;
  }
  public resetIncludeDeleted() {
    this._includeDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDeletedInput() {
    return this._includeDeleted;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataIllumioCoreLabelTypesItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: string; 
  public get maxResults() {
    return this.getStringAttribute('max_results');
  }
  public set maxResults(value: string) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      external_data_reference: cdktf.stringToTerraform(this._externalDataReference),
      external_data_set: cdktf.stringToTerraform(this._externalDataSet),
      id: cdktf.stringToTerraform(this._id),
      include_deleted: cdktf.stringToTerraform(this._includeDeleted),
      key: cdktf.stringToTerraform(this._key),
      match_type: cdktf.stringToTerraform(this._matchType),
      max_results: cdktf.stringToTerraform(this._maxResults),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_reference: {
        value: cdktf.stringToHclTerraform(this._externalDataReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_set: {
        value: cdktf.stringToHclTerraform(this._externalDataSet),
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
      include_deleted: {
        value: cdktf.stringToHclTerraform(this._includeDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_type: {
        value: cdktf.stringToHclTerraform(this._matchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_results: {
        value: cdktf.stringToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
