// https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment on an object in the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type#comment Type#comment}
  */
  readonly comment?: string;
  /**
  * The identifier for the type database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type#database_name Type#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type#id Type#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier for the type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type#name Type#name}
  */
  readonly name: string;
  /**
  * The owernship role of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type#ownership_role Type#ownership_role}
  */
  readonly ownershipRole?: string;
  /**
  * The region to use for the resource connection. If not set, the default region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type#region Type#region}
  */
  readonly region?: string;
  /**
  * The identifier for the type schema in Materialize. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type#schema_name Type#schema_name}
  */
  readonly schemaName?: string;
  /**
  * list_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type#list_properties Type#list_properties}
  */
  readonly listProperties?: TypeListProperties;
  /**
  * map_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type#map_properties Type#map_properties}
  */
  readonly mapProperties?: TypeMapProperties;
  /**
  * row_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type#row_properties Type#row_properties}
  */
  readonly rowProperties?: TypeRowProperties[] | cdktf.IResolvable;
}
export interface TypeListProperties {
  /**
  * Creates a custom list whose elements are of `ELEMENT TYPE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type#element_type Type#element_type}
  */
  readonly elementType: string;
}

export function typeListPropertiesToTerraform(struct?: TypeListPropertiesOutputReference | TypeListProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element_type: cdktf.stringToTerraform(struct!.elementType),
  }
}


export function typeListPropertiesToHclTerraform(struct?: TypeListPropertiesOutputReference | TypeListProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    element_type: {
      value: cdktf.stringToHclTerraform(struct!.elementType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TypeListPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TypeListProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementType !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementType = this._elementType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TypeListProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._elementType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._elementType = value.elementType;
    }
  }

  // element_type - computed: false, optional: false, required: true
  private _elementType?: string; 
  public get elementType() {
    return this.getStringAttribute('element_type');
  }
  public set elementType(value: string) {
    this._elementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementTypeInput() {
    return this._elementType;
  }
}
export interface TypeMapProperties {
  /**
  * Creates a custom map whose keys are of `KEY TYPE`. `KEY TYPE` must resolve to text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type#key_type Type#key_type}
  */
  readonly keyType: string;
  /**
  * Creates a custom map whose values are of `VALUE TYPE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type#value_type Type#value_type}
  */
  readonly valueType: string;
}

export function typeMapPropertiesToTerraform(struct?: TypeMapPropertiesOutputReference | TypeMapProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_type: cdktf.stringToTerraform(struct!.keyType),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function typeMapPropertiesToHclTerraform(struct?: TypeMapPropertiesOutputReference | TypeMapProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TypeMapPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TypeMapProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TypeMapProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyType = undefined;
      this._valueType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyType = value.keyType;
      this._valueType = value.valueType;
    }
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}
export interface TypeRowProperties {
  /**
  * The name of a field in a row type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type#field_name Type#field_name}
  */
  readonly fieldName: string;
  /**
  * The data type of a field indicated by `FIELD NAME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type#field_type Type#field_type}
  */
  readonly fieldType: string;
}

export function typeRowPropertiesToTerraform(struct?: TypeRowProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    field_type: cdktf.stringToTerraform(struct!.fieldType),
  }
}


export function typeRowPropertiesToHclTerraform(struct?: TypeRowProperties | cdktf.IResolvable): any {
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

export class TypeRowPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TypeRowProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TypeRowProperties | cdktf.IResolvable | undefined) {
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

export class TypeRowPropertiesList extends cdktf.ComplexList {
  public internalValue? : TypeRowProperties[] | cdktf.IResolvable

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
  public get(index: number): TypeRowPropertiesOutputReference {
    return new TypeRowPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type materialize_type}
*/
export class Type extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Type resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Type to import
  * @param importFromId The id of the existing Type that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Type to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.3/docs/resources/type materialize_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TypeConfig
  */
  public constructor(scope: Construct, id: string, config: TypeConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_type',
      terraformGeneratorMetadata: {
        providerName: 'materialize',
        providerVersion: '0.9.3',
        providerVersionConstraint: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._databaseName = config.databaseName;
    this._id = config.id;
    this._name = config.name;
    this._ownershipRole = config.ownershipRole;
    this._region = config.region;
    this._schemaName = config.schemaName;
    this._listProperties.internalValue = config.listProperties;
    this._mapProperties.internalValue = config.mapProperties;
    this._rowProperties.internalValue = config.rowProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // ownership_role - computed: true, optional: true, required: false
  private _ownershipRole?: string; 
  public get ownershipRole() {
    return this.getStringAttribute('ownership_role');
  }
  public set ownershipRole(value: string) {
    this._ownershipRole = value;
  }
  public resetOwnershipRole() {
    this._ownershipRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipRoleInput() {
    return this._ownershipRole;
  }

  // qualified_sql_name - computed: true, optional: false, required: false
  public get qualifiedSqlName() {
    return this.getStringAttribute('qualified_sql_name');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // list_properties - computed: false, optional: true, required: false
  private _listProperties = new TypeListPropertiesOutputReference(this, "list_properties");
  public get listProperties() {
    return this._listProperties;
  }
  public putListProperties(value: TypeListProperties) {
    this._listProperties.internalValue = value;
  }
  public resetListProperties() {
    this._listProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listPropertiesInput() {
    return this._listProperties.internalValue;
  }

  // map_properties - computed: false, optional: true, required: false
  private _mapProperties = new TypeMapPropertiesOutputReference(this, "map_properties");
  public get mapProperties() {
    return this._mapProperties;
  }
  public putMapProperties(value: TypeMapProperties) {
    this._mapProperties.internalValue = value;
  }
  public resetMapProperties() {
    this._mapProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapPropertiesInput() {
    return this._mapProperties.internalValue;
  }

  // row_properties - computed: false, optional: true, required: false
  private _rowProperties = new TypeRowPropertiesList(this, "row_properties", false);
  public get rowProperties() {
    return this._rowProperties;
  }
  public putRowProperties(value: TypeRowProperties[] | cdktf.IResolvable) {
    this._rowProperties.internalValue = value;
  }
  public resetRowProperties() {
    this._rowProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowPropertiesInput() {
    return this._rowProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      database_name: cdktf.stringToTerraform(this._databaseName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ownership_role: cdktf.stringToTerraform(this._ownershipRole),
      region: cdktf.stringToTerraform(this._region),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      list_properties: typeListPropertiesToTerraform(this._listProperties.internalValue),
      map_properties: typeMapPropertiesToTerraform(this._mapProperties.internalValue),
      row_properties: cdktf.listMapper(typeRowPropertiesToTerraform, true)(this._rowProperties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
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
      ownership_role: {
        value: cdktf.stringToHclTerraform(this._ownershipRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list_properties: {
        value: typeListPropertiesToHclTerraform(this._listProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TypeListPropertiesList",
      },
      map_properties: {
        value: typeMapPropertiesToHclTerraform(this._mapProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TypeMapPropertiesList",
      },
      row_properties: {
        value: cdktf.listMapperHcl(typeRowPropertiesToHclTerraform, true)(this._rowProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TypeRowPropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
