// https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ItemSecureNoteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the collections the item belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note#collection_ids ItemSecureNote#collection_ids}
  */
  readonly collectionIds?: string[];
  /**
  * Mark as a Favorite to have item appear at the top of your Vault in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note#favorite ItemSecureNote#favorite}
  */
  readonly favorite?: boolean | cdktf.IResolvable;
  /**
  * Identifier of the folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note#folder_id ItemSecureNote#folder_id}
  */
  readonly folderId?: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note#id ItemSecureNote#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note#name ItemSecureNote#name}
  */
  readonly name: string;
  /**
  * Notes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note#notes ItemSecureNote#notes}
  */
  readonly notes?: string;
  /**
  * Identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note#organization_id ItemSecureNote#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Require master password 're-prompt' when displaying secret in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note#reprompt ItemSecureNote#reprompt}
  */
  readonly reprompt?: boolean | cdktf.IResolvable;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note#field ItemSecureNote#field}
  */
  readonly field?: ItemSecureNoteField[] | cdktf.IResolvable;
}
export interface ItemSecureNoteAttachments {
}

export function itemSecureNoteAttachmentsToTerraform(struct?: ItemSecureNoteAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function itemSecureNoteAttachmentsToHclTerraform(struct?: ItemSecureNoteAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ItemSecureNoteAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItemSecureNoteAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItemSecureNoteAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_name - computed: true, optional: false, required: false
  public get fileName() {
    return this.getStringAttribute('file_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // size_name - computed: true, optional: false, required: false
  public get sizeName() {
    return this.getStringAttribute('size_name');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class ItemSecureNoteAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): ItemSecureNoteAttachmentsOutputReference {
    return new ItemSecureNoteAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItemSecureNoteField {
  /**
  * Value of a boolean field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note#boolean ItemSecureNote#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * Value of a hidden text field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note#hidden ItemSecureNote#hidden}
  */
  readonly hidden?: string;
  /**
  * Value of a linked field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note#linked ItemSecureNote#linked}
  */
  readonly linked?: string;
  /**
  * Name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note#name ItemSecureNote#name}
  */
  readonly name: string;
  /**
  * Value of a text field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note#text ItemSecureNote#text}
  */
  readonly text?: string;
}

export function itemSecureNoteFieldToTerraform(struct?: ItemSecureNoteField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: cdktf.booleanToTerraform(struct!.boolean),
    hidden: cdktf.stringToTerraform(struct!.hidden),
    linked: cdktf.stringToTerraform(struct!.linked),
    name: cdktf.stringToTerraform(struct!.name),
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function itemSecureNoteFieldToHclTerraform(struct?: ItemSecureNoteField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean: {
      value: cdktf.booleanToHclTerraform(struct!.boolean),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hidden: {
      value: cdktf.stringToHclTerraform(struct!.hidden),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linked: {
      value: cdktf.stringToHclTerraform(struct!.linked),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItemSecureNoteFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItemSecureNoteField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._hidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.hidden = this._hidden;
    }
    if (this._linked !== undefined) {
      hasAnyValues = true;
      internalValueResult.linked = this._linked;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItemSecureNoteField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._hidden = undefined;
      this._linked = undefined;
      this._name = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._hidden = value.hidden;
      this._linked = value.linked;
      this._name = value.name;
      this._text = value.text;
    }
  }

  // boolean - computed: false, optional: true, required: false
  private _boolean?: boolean | cdktf.IResolvable; 
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }
  public set boolean(value: boolean | cdktf.IResolvable) {
    this._boolean = value;
  }
  public resetBoolean() {
    this._boolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanInput() {
    return this._boolean;
  }

  // hidden - computed: false, optional: true, required: false
  private _hidden?: string; 
  public get hidden() {
    return this.getStringAttribute('hidden');
  }
  public set hidden(value: string) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
  }

  // linked - computed: false, optional: true, required: false
  private _linked?: string; 
  public get linked() {
    return this.getStringAttribute('linked');
  }
  public set linked(value: string) {
    this._linked = value;
  }
  public resetLinked() {
    this._linked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedInput() {
    return this._linked;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}

export class ItemSecureNoteFieldList extends cdktf.ComplexList {
  public internalValue? : ItemSecureNoteField[] | cdktf.IResolvable

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
  public get(index: number): ItemSecureNoteFieldOutputReference {
    return new ItemSecureNoteFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note bitwarden_item_secure_note}
*/
export class ItemSecureNote extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bitwarden_item_secure_note";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ItemSecureNote resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ItemSecureNote to import
  * @param importFromId The id of the existing ItemSecureNote that should be imported. Refer to the {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ItemSecureNote to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bitwarden_item_secure_note", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_secure_note bitwarden_item_secure_note} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ItemSecureNoteConfig
  */
  public constructor(scope: Construct, id: string, config: ItemSecureNoteConfig) {
    super(scope, id, {
      terraformResourceType: 'bitwarden_item_secure_note',
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
    this._collectionIds = config.collectionIds;
    this._favorite = config.favorite;
    this._folderId = config.folderId;
    this._id = config.id;
    this._name = config.name;
    this._notes = config.notes;
    this._organizationId = config.organizationId;
    this._reprompt = config.reprompt;
    this._field.internalValue = config.field;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachments - computed: true, optional: false, required: false
  private _attachments = new ItemSecureNoteAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
  }

  // collection_ids - computed: false, optional: true, required: false
  private _collectionIds?: string[]; 
  public get collectionIds() {
    return this.getListAttribute('collection_ids');
  }
  public set collectionIds(value: string[]) {
    this._collectionIds = value;
  }
  public resetCollectionIds() {
    this._collectionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdsInput() {
    return this._collectionIds;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // deleted_date - computed: true, optional: false, required: false
  public get deletedDate() {
    return this.getStringAttribute('deleted_date');
  }

  // favorite - computed: false, optional: true, required: false
  private _favorite?: boolean | cdktf.IResolvable; 
  public get favorite() {
    return this.getBooleanAttribute('favorite');
  }
  public set favorite(value: boolean | cdktf.IResolvable) {
    this._favorite = value;
  }
  public resetFavorite() {
    this._favorite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get favoriteInput() {
    return this._favorite;
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // reprompt - computed: false, optional: true, required: false
  private _reprompt?: boolean | cdktf.IResolvable; 
  public get reprompt() {
    return this.getBooleanAttribute('reprompt');
  }
  public set reprompt(value: boolean | cdktf.IResolvable) {
    this._reprompt = value;
  }
  public resetReprompt() {
    this._reprompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repromptInput() {
    return this._reprompt;
  }

  // revision_date - computed: true, optional: false, required: false
  public get revisionDate() {
    return this.getStringAttribute('revision_date');
  }

  // field - computed: false, optional: true, required: false
  private _field = new ItemSecureNoteFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: ItemSecureNoteField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collection_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._collectionIds),
      favorite: cdktf.booleanToTerraform(this._favorite),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      reprompt: cdktf.booleanToTerraform(this._reprompt),
      field: cdktf.listMapper(itemSecureNoteFieldToTerraform, true)(this._field.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collection_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._collectionIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      favorite: {
        value: cdktf.booleanToHclTerraform(this._favorite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reprompt: {
        value: cdktf.booleanToHclTerraform(this._reprompt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      field: {
        value: cdktf.listMapperHcl(itemSecureNoteFieldToHclTerraform, true)(this._field.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ItemSecureNoteFieldList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
