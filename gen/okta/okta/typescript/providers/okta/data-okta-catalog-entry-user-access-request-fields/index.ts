// https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/catalog_entry_user_access_request_fields
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaCatalogEntryUserAccessRequestFieldsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the catalog entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/catalog_entry_user_access_request_fields#entry_id DataOktaCatalogEntryUserAccessRequestFields#entry_id}
  */
  readonly entryId: string;
  /**
  * The ID of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/catalog_entry_user_access_request_fields#user_id DataOktaCatalogEntryUserAccessRequestFields#user_id}
  */
  readonly userId: string;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/catalog_entry_user_access_request_fields#data DataOktaCatalogEntryUserAccessRequestFields#data}
  */
  readonly data?: DataOktaCatalogEntryUserAccessRequestFieldsData[] | cdktf.IResolvable;
}
export interface DataOktaCatalogEntryUserAccessRequestFieldsDataChoices {
}

export function dataOktaCatalogEntryUserAccessRequestFieldsDataChoicesToTerraform(struct?: DataOktaCatalogEntryUserAccessRequestFieldsDataChoices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaCatalogEntryUserAccessRequestFieldsDataChoicesToHclTerraform(struct?: DataOktaCatalogEntryUserAccessRequestFieldsDataChoices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaCatalogEntryUserAccessRequestFieldsDataChoicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOktaCatalogEntryUserAccessRequestFieldsDataChoices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaCatalogEntryUserAccessRequestFieldsDataChoices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // choice - computed: true, optional: false, required: false
  public get choice() {
    return this.getStringAttribute('choice');
  }
}

export class DataOktaCatalogEntryUserAccessRequestFieldsDataChoicesList extends cdktf.ComplexList {
  public internalValue? : DataOktaCatalogEntryUserAccessRequestFieldsDataChoices[] | cdktf.IResolvable

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
  public get(index: number): DataOktaCatalogEntryUserAccessRequestFieldsDataChoicesOutputReference {
    return new DataOktaCatalogEntryUserAccessRequestFieldsDataChoicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOktaCatalogEntryUserAccessRequestFieldsData {
  /**
  * choices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/catalog_entry_user_access_request_fields#choices DataOktaCatalogEntryUserAccessRequestFields#choices}
  */
  readonly choices?: DataOktaCatalogEntryUserAccessRequestFieldsDataChoices[] | cdktf.IResolvable;
}

export function dataOktaCatalogEntryUserAccessRequestFieldsDataToTerraform(struct?: DataOktaCatalogEntryUserAccessRequestFieldsData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    choices: cdktf.listMapper(dataOktaCatalogEntryUserAccessRequestFieldsDataChoicesToTerraform, true)(struct!.choices),
  }
}


export function dataOktaCatalogEntryUserAccessRequestFieldsDataToHclTerraform(struct?: DataOktaCatalogEntryUserAccessRequestFieldsData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    choices: {
      value: cdktf.listMapperHcl(dataOktaCatalogEntryUserAccessRequestFieldsDataChoicesToHclTerraform, true)(struct!.choices),
      isBlock: true,
      type: "list",
      storageClassType: "DataOktaCatalogEntryUserAccessRequestFieldsDataChoicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaCatalogEntryUserAccessRequestFieldsDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOktaCatalogEntryUserAccessRequestFieldsData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._choices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.choices = this._choices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaCatalogEntryUserAccessRequestFieldsData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._choices.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._choices.internalValue = value.choices;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // maximum_value - computed: true, optional: false, required: false
  public get maximumValue() {
    return this.getStringAttribute('maximum_value');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // choices - computed: false, optional: true, required: false
  private _choices = new DataOktaCatalogEntryUserAccessRequestFieldsDataChoicesList(this, "choices", false);
  public get choices() {
    return this._choices;
  }
  public putChoices(value: DataOktaCatalogEntryUserAccessRequestFieldsDataChoices[] | cdktf.IResolvable) {
    this._choices.internalValue = value;
  }
  public resetChoices() {
    this._choices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get choicesInput() {
    return this._choices.internalValue;
  }
}

export class DataOktaCatalogEntryUserAccessRequestFieldsDataList extends cdktf.ComplexList {
  public internalValue? : DataOktaCatalogEntryUserAccessRequestFieldsData[] | cdktf.IResolvable

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
  public get(index: number): DataOktaCatalogEntryUserAccessRequestFieldsDataOutputReference {
    return new DataOktaCatalogEntryUserAccessRequestFieldsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/catalog_entry_user_access_request_fields okta_catalog_entry_user_access_request_fields}
*/
export class DataOktaCatalogEntryUserAccessRequestFields extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_catalog_entry_user_access_request_fields";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaCatalogEntryUserAccessRequestFields resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaCatalogEntryUserAccessRequestFields to import
  * @param importFromId The id of the existing DataOktaCatalogEntryUserAccessRequestFields that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/catalog_entry_user_access_request_fields#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaCatalogEntryUserAccessRequestFields to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_catalog_entry_user_access_request_fields", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.0/docs/data-sources/catalog_entry_user_access_request_fields okta_catalog_entry_user_access_request_fields} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaCatalogEntryUserAccessRequestFieldsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaCatalogEntryUserAccessRequestFieldsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_catalog_entry_user_access_request_fields',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.0',
        providerVersionConstraint: '6.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._entryId = config.entryId;
    this._userId = config.userId;
    this._data.internalValue = config.data;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entry_id - computed: false, optional: false, required: true
  private _entryId?: string; 
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }
  public set entryId(value: string) {
    this._entryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryIdInput() {
    return this._entryId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // data - computed: false, optional: true, required: false
  private _data = new DataOktaCatalogEntryUserAccessRequestFieldsDataList(this, "data", false);
  public get data() {
    return this._data;
  }
  public putData(value: DataOktaCatalogEntryUserAccessRequestFieldsData[] | cdktf.IResolvable) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entry_id: cdktf.stringToTerraform(this._entryId),
      user_id: cdktf.stringToTerraform(this._userId),
      data: cdktf.listMapper(dataOktaCatalogEntryUserAccessRequestFieldsDataToTerraform, true)(this._data.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entry_id: {
        value: cdktf.stringToHclTerraform(this._entryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data: {
        value: cdktf.listMapperHcl(dataOktaCatalogEntryUserAccessRequestFieldsDataToHclTerraform, true)(this._data.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataOktaCatalogEntryUserAccessRequestFieldsDataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
