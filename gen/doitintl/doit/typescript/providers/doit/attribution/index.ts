// https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AttributionConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of Attributions filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution#components Attribution#components}
  */
  readonly components: AttributionComponents[] | cdktf.IResolvable;
  /**
  * Description of the attribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution#description Attribution#description}
  */
  readonly description?: string;
  /**
  * Attribution formula (A is first component, B is second component, C is third component, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution#formula Attribution#formula}
  */
  readonly formula?: string;
  /**
  * Name of the attribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution#name Attribution#name}
  */
  readonly name: string;
}
export interface AttributionComponents {
  /**
  * Key of the type to validate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution#key Attribution#key}
  */
  readonly key: string;
  /**
  * Type of the component (Standard, Labels, Google Kubernetes Engin, Tags etc. )
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution#type Attribution#type}
  */
  readonly type: string;
  /**
  * Value of the key to validate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution#values Attribution#values}
  */
  readonly values: string[];
}

export function attributionComponentsToTerraform(struct?: AttributionComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function attributionComponentsToHclTerraform(struct?: AttributionComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AttributionComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AttributionComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AttributionComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._type = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._type = value.type;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AttributionComponentsList extends cdktf.ComplexList {
  public internalValue? : AttributionComponents[] | cdktf.IResolvable

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
  public get(index: number): AttributionComponentsOutputReference {
    return new AttributionComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution doit_attribution}
*/
export class Attribution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doit_attribution";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Attribution resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Attribution to import
  * @param importFromId The id of the existing Attribution that should be imported. Refer to the {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Attribution to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doit_attribution", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/attribution doit_attribution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AttributionConfig
  */
  public constructor(scope: Construct, id: string, config: AttributionConfig) {
    super(scope, id, {
      terraformResourceType: 'doit_attribution',
      terraformGeneratorMetadata: {
        providerName: 'doit',
        providerVersion: '0.25.0',
        providerVersionConstraint: '0.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._components.internalValue = config.components;
    this._description = config.description;
    this._formula = config.formula;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // components - computed: false, optional: false, required: true
  private _components = new AttributionComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }
  public putComponents(value: AttributionComponents[] | cdktf.IResolvable) {
    this._components.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // formula - computed: false, optional: true, required: false
  private _formula?: string; 
  public get formula() {
    return this.getStringAttribute('formula');
  }
  public set formula(value: string) {
    this._formula = value;
  }
  public resetFormula() {
    this._formula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      components: cdktf.listMapper(attributionComponentsToTerraform, false)(this._components.internalValue),
      description: cdktf.stringToTerraform(this._description),
      formula: cdktf.stringToTerraform(this._formula),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      components: {
        value: cdktf.listMapperHcl(attributionComponentsToHclTerraform, false)(this._components.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AttributionComponentsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      formula: {
        value: cdktf.stringToHclTerraform(this._formula),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
