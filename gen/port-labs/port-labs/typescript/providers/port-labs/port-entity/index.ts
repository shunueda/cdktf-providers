// https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortEntityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The blueprint identifier the entity relates to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#blueprint PortEntity#blueprint}
  */
  readonly blueprint: string;
  /**
  * Whether to create missing related entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#create_missing_related_entities PortEntity#create_missing_related_entities}
  */
  readonly createMissingRelatedEntities?: boolean | cdktf.IResolvable;
  /**
  * The icon of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#icon PortEntity#icon}
  */
  readonly icon?: string;
  /**
  * The identifier of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#identifier PortEntity#identifier}
  */
  readonly identifier?: string;
  /**
  * The properties of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#properties PortEntity#properties}
  */
  readonly properties?: PortEntityProperties;
  /**
  * The relations of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#relations PortEntity#relations}
  */
  readonly relations?: PortEntityRelations;
  /**
  * The runID of the action run that created the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#run_id PortEntity#run_id}
  */
  readonly runId?: string;
  /**
  * The teams the entity belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#teams PortEntity#teams}
  */
  readonly teams?: string[];
  /**
  * The title of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#title PortEntity#title}
  */
  readonly title: string;
}
export interface PortEntityPropertiesArrayProps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#boolean_items PortEntity#boolean_items}
  */
  readonly booleanItems?: { [key: string]: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#number_items PortEntity#number_items}
  */
  readonly numberItems?: { [key: string]: number[] } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#object_items PortEntity#object_items}
  */
  readonly objectItems?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#string_items PortEntity#string_items}
  */
  readonly stringItems?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function portEntityPropertiesArrayPropsToTerraform(struct?: PortEntityPropertiesArrayProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_items: cdktf.hashMapper(cdktf.listMapper(cdktf.booleanToTerraform, false))(struct!.booleanItems),
    number_items: cdktf.hashMapper(cdktf.listMapper(cdktf.numberToTerraform, false))(struct!.numberItems),
    object_items: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.objectItems),
    string_items: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.stringItems),
  }
}


export function portEntityPropertiesArrayPropsToHclTerraform(struct?: PortEntityPropertiesArrayProps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_items: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.booleanToHclTerraform, false))(struct!.booleanItems),
      isBlock: false,
      type: "map",
      storageClassType: "booleanListMap",
    },
    number_items: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.numberToHclTerraform, false))(struct!.numberItems),
      isBlock: false,
      type: "map",
      storageClassType: "numberListMap",
    },
    object_items: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.objectItems),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    string_items: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.stringItems),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortEntityPropertiesArrayPropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortEntityPropertiesArrayProps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanItems = this._booleanItems;
    }
    if (this._numberItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberItems = this._numberItems;
    }
    if (this._objectItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectItems = this._objectItems;
    }
    if (this._stringItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringItems = this._stringItems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortEntityPropertiesArrayProps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanItems = undefined;
      this._numberItems = undefined;
      this._objectItems = undefined;
      this._stringItems = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanItems = value.booleanItems;
      this._numberItems = value.numberItems;
      this._objectItems = value.objectItems;
      this._stringItems = value.stringItems;
    }
  }

  // boolean_items - computed: false, optional: true, required: false
  private _booleanItems?: { [key: string]: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable } | cdktf.IResolvable; 
  public get booleanItems() {
    return this.interpolationForAttribute('boolean_items');
  }
  public set booleanItems(value: { [key: string]: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable } | cdktf.IResolvable) {
    this._booleanItems = value;
  }
  public resetBooleanItems() {
    this._booleanItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanItemsInput() {
    return this._booleanItems;
  }

  // number_items - computed: false, optional: true, required: false
  private _numberItems?: { [key: string]: number[] } | cdktf.IResolvable; 
  public get numberItems() {
    return this.interpolationForAttribute('number_items');
  }
  public set numberItems(value: { [key: string]: number[] } | cdktf.IResolvable) {
    this._numberItems = value;
  }
  public resetNumberItems() {
    this._numberItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberItemsInput() {
    return this._numberItems;
  }

  // object_items - computed: false, optional: true, required: false
  private _objectItems?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get objectItems() {
    return this.interpolationForAttribute('object_items');
  }
  public set objectItems(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._objectItems = value;
  }
  public resetObjectItems() {
    this._objectItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectItemsInput() {
    return this._objectItems;
  }

  // string_items - computed: false, optional: true, required: false
  private _stringItems?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get stringItems() {
    return this.interpolationForAttribute('string_items');
  }
  public set stringItems(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._stringItems = value;
  }
  public resetStringItems() {
    this._stringItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringItemsInput() {
    return this._stringItems;
  }
}
export interface PortEntityProperties {
  /**
  * The array properties of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#array_props PortEntity#array_props}
  */
  readonly arrayProps?: PortEntityPropertiesArrayProps;
  /**
  * The bool properties of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#boolean_props PortEntity#boolean_props}
  */
  readonly booleanProps?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * The number properties of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#number_props PortEntity#number_props}
  */
  readonly numberProps?: { [key: string]: number };
  /**
  * The object properties of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#object_props PortEntity#object_props}
  */
  readonly objectProps?: { [key: string]: string };
  /**
  * The string properties of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#string_props PortEntity#string_props}
  */
  readonly stringProps?: { [key: string]: string };
}

export function portEntityPropertiesToTerraform(struct?: PortEntityProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_props: portEntityPropertiesArrayPropsToTerraform(struct!.arrayProps),
    boolean_props: cdktf.hashMapper(cdktf.booleanToTerraform)(struct!.booleanProps),
    number_props: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.numberProps),
    object_props: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.objectProps),
    string_props: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.stringProps),
  }
}


export function portEntityPropertiesToHclTerraform(struct?: PortEntityProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_props: {
      value: portEntityPropertiesArrayPropsToHclTerraform(struct!.arrayProps),
      isBlock: true,
      type: "struct",
      storageClassType: "PortEntityPropertiesArrayProps",
    },
    boolean_props: {
      value: cdktf.hashMapperHcl(cdktf.booleanToHclTerraform)(struct!.booleanProps),
      isBlock: false,
      type: "map",
      storageClassType: "booleanMap",
    },
    number_props: {
      value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct!.numberProps),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
    object_props: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.objectProps),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    string_props: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.stringProps),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortEntityPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortEntityProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayProps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayProps = this._arrayProps?.internalValue;
    }
    if (this._booleanProps !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanProps = this._booleanProps;
    }
    if (this._numberProps !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberProps = this._numberProps;
    }
    if (this._objectProps !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectProps = this._objectProps;
    }
    if (this._stringProps !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringProps = this._stringProps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortEntityProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayProps.internalValue = undefined;
      this._booleanProps = undefined;
      this._numberProps = undefined;
      this._objectProps = undefined;
      this._stringProps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayProps.internalValue = value.arrayProps;
      this._booleanProps = value.booleanProps;
      this._numberProps = value.numberProps;
      this._objectProps = value.objectProps;
      this._stringProps = value.stringProps;
    }
  }

  // array_props - computed: false, optional: true, required: false
  private _arrayProps = new PortEntityPropertiesArrayPropsOutputReference(this, "array_props");
  public get arrayProps() {
    return this._arrayProps;
  }
  public putArrayProps(value: PortEntityPropertiesArrayProps) {
    this._arrayProps.internalValue = value;
  }
  public resetArrayProps() {
    this._arrayProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayPropsInput() {
    return this._arrayProps.internalValue;
  }

  // boolean_props - computed: false, optional: true, required: false
  private _booleanProps?: { [key: string]: (boolean | cdktf.IResolvable) }; 
  public get booleanProps() {
    return this.getBooleanMapAttribute('boolean_props');
  }
  public set booleanProps(value: { [key: string]: (boolean | cdktf.IResolvable) }) {
    this._booleanProps = value;
  }
  public resetBooleanProps() {
    this._booleanProps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanPropsInput() {
    return this._booleanProps;
  }

  // number_props - computed: false, optional: true, required: false
  private _numberProps?: { [key: string]: number }; 
  public get numberProps() {
    return this.getNumberMapAttribute('number_props');
  }
  public set numberProps(value: { [key: string]: number }) {
    this._numberProps = value;
  }
  public resetNumberProps() {
    this._numberProps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberPropsInput() {
    return this._numberProps;
  }

  // object_props - computed: false, optional: true, required: false
  private _objectProps?: { [key: string]: string }; 
  public get objectProps() {
    return this.getStringMapAttribute('object_props');
  }
  public set objectProps(value: { [key: string]: string }) {
    this._objectProps = value;
  }
  public resetObjectProps() {
    this._objectProps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectPropsInput() {
    return this._objectProps;
  }

  // string_props - computed: false, optional: true, required: false
  private _stringProps?: { [key: string]: string }; 
  public get stringProps() {
    return this.getStringMapAttribute('string_props');
  }
  public set stringProps(value: { [key: string]: string }) {
    this._stringProps = value;
  }
  public resetStringProps() {
    this._stringProps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringPropsInput() {
    return this._stringProps;
  }
}
export interface PortEntityRelations {
  /**
  * The many relation of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#many_relations PortEntity#many_relations}
  */
  readonly manyRelations?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The single relation of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#single_relations PortEntity#single_relations}
  */
  readonly singleRelations?: { [key: string]: string };
}

export function portEntityRelationsToTerraform(struct?: PortEntityRelations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    many_relations: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.manyRelations),
    single_relations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.singleRelations),
  }
}


export function portEntityRelationsToHclTerraform(struct?: PortEntityRelations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    many_relations: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.manyRelations),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    single_relations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.singleRelations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortEntityRelationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortEntityRelations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manyRelations !== undefined) {
      hasAnyValues = true;
      internalValueResult.manyRelations = this._manyRelations;
    }
    if (this._singleRelations !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleRelations = this._singleRelations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortEntityRelations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._manyRelations = undefined;
      this._singleRelations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._manyRelations = value.manyRelations;
      this._singleRelations = value.singleRelations;
    }
  }

  // many_relations - computed: false, optional: true, required: false
  private _manyRelations?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get manyRelations() {
    return this.interpolationForAttribute('many_relations');
  }
  public set manyRelations(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._manyRelations = value;
  }
  public resetManyRelations() {
    this._manyRelations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manyRelationsInput() {
    return this._manyRelations;
  }

  // single_relations - computed: false, optional: true, required: false
  private _singleRelations?: { [key: string]: string }; 
  public get singleRelations() {
    return this.getStringMapAttribute('single_relations');
  }
  public set singleRelations(value: { [key: string]: string }) {
    this._singleRelations = value;
  }
  public resetSingleRelations() {
    this._singleRelations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleRelationsInput() {
    return this._singleRelations;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity port_entity}
*/
export class PortEntity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port_entity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortEntity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortEntity to import
  * @param importFromId The id of the existing PortEntity that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortEntity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port_entity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.16.0/docs/resources/port_entity port_entity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortEntityConfig
  */
  public constructor(scope: Construct, id: string, config: PortEntityConfig) {
    super(scope, id, {
      terraformResourceType: 'port_entity',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprint = config.blueprint;
    this._createMissingRelatedEntities = config.createMissingRelatedEntities;
    this._icon = config.icon;
    this._identifier = config.identifier;
    this._properties.internalValue = config.properties;
    this._relations.internalValue = config.relations;
    this._runId = config.runId;
    this._teams = config.teams;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint - computed: false, optional: false, required: true
  private _blueprint?: string; 
  public get blueprint() {
    return this.getStringAttribute('blueprint');
  }
  public set blueprint(value: string) {
    this._blueprint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint;
  }

  // create_missing_related_entities - computed: true, optional: true, required: false
  private _createMissingRelatedEntities?: boolean | cdktf.IResolvable; 
  public get createMissingRelatedEntities() {
    return this.getBooleanAttribute('create_missing_related_entities');
  }
  public set createMissingRelatedEntities(value: boolean | cdktf.IResolvable) {
    this._createMissingRelatedEntities = value;
  }
  public resetCreateMissingRelatedEntities() {
    this._createMissingRelatedEntities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createMissingRelatedEntitiesInput() {
    return this._createMissingRelatedEntities;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new PortEntityPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: PortEntityProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // relations - computed: false, optional: true, required: false
  private _relations = new PortEntityRelationsOutputReference(this, "relations");
  public get relations() {
    return this._relations;
  }
  public putRelations(value: PortEntityRelations) {
    this._relations.internalValue = value;
  }
  public resetRelations() {
    this._relations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationsInput() {
    return this._relations.internalValue;
  }

  // run_id - computed: false, optional: true, required: false
  private _runId?: string; 
  public get runId() {
    return this.getStringAttribute('run_id');
  }
  public set runId(value: string) {
    this._runId = value;
  }
  public resetRunId() {
    this._runId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runIdInput() {
    return this._runId;
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return cdktf.Fn.tolist(this.getListAttribute('teams'));
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint: cdktf.stringToTerraform(this._blueprint),
      create_missing_related_entities: cdktf.booleanToTerraform(this._createMissingRelatedEntities),
      icon: cdktf.stringToTerraform(this._icon),
      identifier: cdktf.stringToTerraform(this._identifier),
      properties: portEntityPropertiesToTerraform(this._properties.internalValue),
      relations: portEntityRelationsToTerraform(this._relations.internalValue),
      run_id: cdktf.stringToTerraform(this._runId),
      teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._teams),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint: {
        value: cdktf.stringToHclTerraform(this._blueprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_missing_related_entities: {
        value: cdktf.booleanToHclTerraform(this._createMissingRelatedEntities),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: portEntityPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortEntityProperties",
      },
      relations: {
        value: portEntityRelationsToHclTerraform(this._relations.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortEntityRelations",
      },
      run_id: {
        value: cdktf.stringToHclTerraform(this._runId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._teams),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
