// https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ItemSshKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the collections the item belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#collection_ids ItemSshKey#collection_ids}
  */
  readonly collectionIds?: string[];
  /**
  * Identifier of the folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#folder_id ItemSshKey#folder_id}
  */
  readonly folderId?: string;
  /**
  * Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#id ItemSshKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key fingerprint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#key_fingerprint ItemSshKey#key_fingerprint}
  */
  readonly keyFingerprint?: string;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#name ItemSshKey#name}
  */
  readonly name: string;
  /**
  * Notes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#notes ItemSshKey#notes}
  */
  readonly notes?: string;
  /**
  * Identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#organization_id ItemSshKey#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#private_key ItemSshKey#private_key}
  */
  readonly privateKey?: string;
  /**
  * Public key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#public_key ItemSshKey#public_key}
  */
  readonly publicKey?: string;
  /**
  * Require master password 're-prompt' when displaying secret in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#reprompt ItemSshKey#reprompt}
  */
  readonly reprompt?: boolean | cdktf.IResolvable;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#field ItemSshKey#field}
  */
  readonly field?: ItemSshKeyField[] | cdktf.IResolvable;
}
export interface ItemSshKeyField {
  /**
  * Value of a boolean field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#boolean ItemSshKey#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * Value of a hidden text field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#hidden ItemSshKey#hidden}
  */
  readonly hidden?: string;
  /**
  * Value of a linked field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#linked ItemSshKey#linked}
  */
  readonly linked?: string;
  /**
  * Name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#name ItemSshKey#name}
  */
  readonly name: string;
  /**
  * Value of a text field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#text ItemSshKey#text}
  */
  readonly text?: string;
}

export function itemSshKeyFieldToTerraform(struct?: ItemSshKeyField | cdktf.IResolvable): any {
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


export function itemSshKeyFieldToHclTerraform(struct?: ItemSshKeyField | cdktf.IResolvable): any {
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

export class ItemSshKeyFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItemSshKeyField | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ItemSshKeyField | cdktf.IResolvable | undefined) {
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

export class ItemSshKeyFieldList extends cdktf.ComplexList {
  public internalValue? : ItemSshKeyField[] | cdktf.IResolvable

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
  public get(index: number): ItemSshKeyFieldOutputReference {
    return new ItemSshKeyFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key bitwarden_item_ssh_key}
*/
export class ItemSshKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bitwarden_item_ssh_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ItemSshKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ItemSshKey to import
  * @param importFromId The id of the existing ItemSshKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ItemSshKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bitwarden_item_ssh_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/maxlaverse/bitwarden/0.16.0/docs/resources/item_ssh_key bitwarden_item_ssh_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ItemSshKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ItemSshKeyConfig) {
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
    this._collectionIds = config.collectionIds;
    this._folderId = config.folderId;
    this._id = config.id;
    this._keyFingerprint = config.keyFingerprint;
    this._name = config.name;
    this._notes = config.notes;
    this._organizationId = config.organizationId;
    this._privateKey = config.privateKey;
    this._publicKey = config.publicKey;
    this._reprompt = config.reprompt;
    this._field.internalValue = config.field;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // key_fingerprint - computed: false, optional: true, required: false
  private _keyFingerprint?: string; 
  public get keyFingerprint() {
    return this.getStringAttribute('key_fingerprint');
  }
  public set keyFingerprint(value: string) {
    this._keyFingerprint = value;
  }
  public resetKeyFingerprint() {
    this._keyFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFingerprintInput() {
    return this._keyFingerprint;
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

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
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
  private _field = new ItemSshKeyFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: ItemSshKeyField[] | cdktf.IResolvable) {
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
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      key_fingerprint: cdktf.stringToTerraform(this._keyFingerprint),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      private_key: cdktf.stringToTerraform(this._privateKey),
      public_key: cdktf.stringToTerraform(this._publicKey),
      reprompt: cdktf.booleanToTerraform(this._reprompt),
      field: cdktf.listMapper(itemSshKeyFieldToTerraform, true)(this._field.internalValue),
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
      key_fingerprint: {
        value: cdktf.stringToHclTerraform(this._keyFingerprint),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
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
        value: cdktf.listMapperHcl(itemSshKeyFieldToHclTerraform, true)(this._field.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ItemSshKeyFieldList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
