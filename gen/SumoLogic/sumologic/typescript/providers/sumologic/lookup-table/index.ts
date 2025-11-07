// https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/lookup_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LookupTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/lookup_table#description LookupTable#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/lookup_table#id LookupTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/lookup_table#name LookupTable#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/lookup_table#parent_folder_id LookupTable#parent_folder_id}
  */
  readonly parentFolderId?: string;
  /**
  * The primary key field names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/lookup_table#primary_keys LookupTable#primary_keys}
  */
  readonly primaryKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/lookup_table#size_limit_action LookupTable#size_limit_action}
  */
  readonly sizeLimitAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/lookup_table#ttl LookupTable#ttl}
  */
  readonly ttl?: number;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/lookup_table#fields LookupTable#fields}
  */
  readonly fields?: LookupTableFields[] | cdktf.IResolvable;
}
export interface LookupTableFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/lookup_table#field_name LookupTable#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/lookup_table#field_type LookupTable#field_type}
  */
  readonly fieldType: string;
}

export function lookupTableFieldsToTerraform(struct?: LookupTableFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    field_type: cdktf.stringToTerraform(struct!.fieldType),
  }
}


export function lookupTableFieldsToHclTerraform(struct?: LookupTableFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LookupTableFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LookupTableFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._fieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldType = this._fieldType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LookupTableFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._fieldType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._fieldType = value.fieldType;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // field_type - computed: false, optional: false, required: true
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
  }
}

export class LookupTableFieldsList extends cdktf.ComplexList {
  public internalValue? : LookupTableFields[] | cdktf.IResolvable

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
  public get(index: number): LookupTableFieldsOutputReference {
    return new LookupTableFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/lookup_table sumologic_lookup_table}
*/
export class LookupTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_lookup_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LookupTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LookupTable to import
  * @param importFromId The id of the existing LookupTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/lookup_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LookupTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_lookup_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/lookup_table sumologic_lookup_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LookupTableConfig
  */
  public constructor(scope: Construct, id: string, config: LookupTableConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_lookup_table',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._parentFolderId = config.parentFolderId;
    this._primaryKeys = config.primaryKeys;
    this._sizeLimitAction = config.sizeLimitAction;
    this._ttl = config.ttl;
    this._fields.internalValue = config.fields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_folder_id - computed: false, optional: true, required: false
  private _parentFolderId?: string; 
  public get parentFolderId() {
    return this.getStringAttribute('parent_folder_id');
  }
  public set parentFolderId(value: string) {
    this._parentFolderId = value;
  }
  public resetParentFolderId() {
    this._parentFolderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentFolderIdInput() {
    return this._parentFolderId;
  }

  // primary_keys - computed: false, optional: true, required: false
  private _primaryKeys?: string[]; 
  public get primaryKeys() {
    return this.getListAttribute('primary_keys');
  }
  public set primaryKeys(value: string[]) {
    this._primaryKeys = value;
  }
  public resetPrimaryKeys() {
    this._primaryKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeysInput() {
    return this._primaryKeys;
  }

  // size_limit_action - computed: false, optional: true, required: false
  private _sizeLimitAction?: string; 
  public get sizeLimitAction() {
    return this.getStringAttribute('size_limit_action');
  }
  public set sizeLimitAction(value: string) {
    this._sizeLimitAction = value;
  }
  public resetSizeLimitAction() {
    this._sizeLimitAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitActionInput() {
    return this._sizeLimitAction;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new LookupTableFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: LookupTableFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_folder_id: cdktf.stringToTerraform(this._parentFolderId),
      primary_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._primaryKeys),
      size_limit_action: cdktf.stringToTerraform(this._sizeLimitAction),
      ttl: cdktf.numberToTerraform(this._ttl),
      fields: cdktf.listMapper(lookupTableFieldsToTerraform, true)(this._fields.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      parent_folder_id: {
        value: cdktf.stringToHclTerraform(this._parentFolderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._primaryKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      size_limit_action: {
        value: cdktf.stringToHclTerraform(this._sizeLimitAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fields: {
        value: cdktf.listMapperHcl(lookupTableFieldsToHclTerraform, true)(this._fields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LookupTableFieldsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
