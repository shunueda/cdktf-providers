// https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.7.0/docs/resources/schemaregistry_schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaregistrySchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.7.0/docs/resources/schemaregistry_schema#id SchemaregistrySchema#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The schema string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.7.0/docs/resources/schemaregistry_schema#schema SchemaregistrySchema#schema}
  */
  readonly schema: string;
  /**
  * The subject related to the schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.7.0/docs/resources/schemaregistry_schema#subject SchemaregistrySchema#subject}
  */
  readonly subject: string;
  /**
  * reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.7.0/docs/resources/schemaregistry_schema#reference SchemaregistrySchema#reference}
  */
  readonly reference?: SchemaregistrySchemaReference[] | cdktf.IResolvable;
}
export interface SchemaregistrySchemaReference {
  /**
  * The referenced schema name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.7.0/docs/resources/schemaregistry_schema#name SchemaregistrySchema#name}
  */
  readonly name: string;
  /**
  * The referenced schema subject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.7.0/docs/resources/schemaregistry_schema#subject SchemaregistrySchema#subject}
  */
  readonly subject: string;
  /**
  * The referenced schema version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.7.0/docs/resources/schemaregistry_schema#version SchemaregistrySchema#version}
  */
  readonly version: number;
}

export function schemaregistrySchemaReferenceToTerraform(struct?: SchemaregistrySchemaReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    subject: cdktf.stringToTerraform(struct!.subject),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function schemaregistrySchemaReferenceToHclTerraform(struct?: SchemaregistrySchemaReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaregistrySchemaReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchemaregistrySchemaReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaregistrySchemaReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._subject = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._subject = value.subject;
      this._version = value.version;
    }
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

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class SchemaregistrySchemaReferenceList extends cdktf.ComplexList {
  public internalValue? : SchemaregistrySchemaReference[] | cdktf.IResolvable

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
  public get(index: number): SchemaregistrySchemaReferenceOutputReference {
    return new SchemaregistrySchemaReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.7.0/docs/resources/schemaregistry_schema schemaregistry_schema}
*/
export class SchemaregistrySchema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "schemaregistry_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaregistrySchema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaregistrySchema to import
  * @param importFromId The id of the existing SchemaregistrySchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.7.0/docs/resources/schemaregistry_schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaregistrySchema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "schemaregistry_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drfaust92/confluent-schema-registry/0.7.0/docs/resources/schemaregistry_schema schemaregistry_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaregistrySchemaConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaregistrySchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'schemaregistry_schema',
      terraformGeneratorMetadata: {
        providerName: 'confluent-schema-registry',
        providerVersion: '0.7.0',
        providerVersionConstraint: '0.7.0'
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
    this._schema = config.schema;
    this._subject = config.subject;
    this._reference.internalValue = config.reference;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // schema_id - computed: true, optional: false, required: false
  public get schemaId() {
    return this.getNumberAttribute('schema_id');
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // reference - computed: false, optional: true, required: false
  private _reference = new SchemaregistrySchemaReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
  public putReference(value: SchemaregistrySchemaReference[] | cdktf.IResolvable) {
    this._reference.internalValue = value;
  }
  public resetReference() {
    this._reference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      schema: cdktf.stringToTerraform(this._schema),
      subject: cdktf.stringToTerraform(this._subject),
      reference: cdktf.listMapper(schemaregistrySchemaReferenceToTerraform, true)(this._reference.internalValue),
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
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject: {
        value: cdktf.stringToHclTerraform(this._subject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reference: {
        value: cdktf.listMapperHcl(schemaregistrySchemaReferenceToHclTerraform, true)(this._reference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchemaregistrySchemaReferenceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
