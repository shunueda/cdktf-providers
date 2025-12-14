// https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPortSearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Attach title to relation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#attach_title_to_relation DataPortSearch#attach_title_to_relation}
  */
  readonly attachTitleToRelation?: boolean | cdktf.IResolvable;
  /**
  * Properties to exclude from the results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#exclude DataPortSearch#exclude}
  */
  readonly exclude?: string[];
  /**
  * Exclude calculated properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#exclude_calculated_properties DataPortSearch#exclude_calculated_properties}
  */
  readonly excludeCalculatedProperties?: boolean | cdktf.IResolvable;
  /**
  * Properties to include in the results
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#include DataPortSearch#include}
  */
  readonly include?: string[];
  /**
  * The search query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#query DataPortSearch#query}
  */
  readonly query: string;
}
export interface DataPortSearchEntitiesPropertiesArrayProps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#boolean_items DataPortSearch#boolean_items}
  */
  readonly booleanItems?: { [key: string]: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#number_items DataPortSearch#number_items}
  */
  readonly numberItems?: { [key: string]: number[] } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#object_items DataPortSearch#object_items}
  */
  readonly objectItems?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#string_items DataPortSearch#string_items}
  */
  readonly stringItems?: { [key: string]: string[] } | cdktf.IResolvable;
}

export function dataPortSearchEntitiesPropertiesArrayPropsToTerraform(struct?: DataPortSearchEntitiesPropertiesArrayProps | cdktf.IResolvable): any {
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


export function dataPortSearchEntitiesPropertiesArrayPropsToHclTerraform(struct?: DataPortSearchEntitiesPropertiesArrayProps | cdktf.IResolvable): any {
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

export class DataPortSearchEntitiesPropertiesArrayPropsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPortSearchEntitiesPropertiesArrayProps | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPortSearchEntitiesPropertiesArrayProps | cdktf.IResolvable | undefined) {
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

  // boolean_items - computed: true, optional: true, required: false
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

  // number_items - computed: true, optional: true, required: false
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

  // object_items - computed: true, optional: true, required: false
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

  // string_items - computed: true, optional: true, required: false
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
export interface DataPortSearchEntitiesProperties {
  /**
  * The array properties of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#array_props DataPortSearch#array_props}
  */
  readonly arrayProps?: DataPortSearchEntitiesPropertiesArrayProps;
  /**
  * The bool properties of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#boolean_props DataPortSearch#boolean_props}
  */
  readonly booleanProps?: { [key: string]: (boolean | cdktf.IResolvable) };
  /**
  * The number properties of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#number_props DataPortSearch#number_props}
  */
  readonly numberProps?: { [key: string]: number };
  /**
  * The object properties of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#object_props DataPortSearch#object_props}
  */
  readonly objectProps?: { [key: string]: string };
  /**
  * The string properties of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#string_props DataPortSearch#string_props}
  */
  readonly stringProps?: { [key: string]: string };
}

export function dataPortSearchEntitiesPropertiesToTerraform(struct?: DataPortSearchEntitiesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_props: dataPortSearchEntitiesPropertiesArrayPropsToTerraform(struct!.arrayProps),
    boolean_props: cdktf.hashMapper(cdktf.booleanToTerraform)(struct!.booleanProps),
    number_props: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.numberProps),
    object_props: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.objectProps),
    string_props: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.stringProps),
  }
}


export function dataPortSearchEntitiesPropertiesToHclTerraform(struct?: DataPortSearchEntitiesProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_props: {
      value: dataPortSearchEntitiesPropertiesArrayPropsToHclTerraform(struct!.arrayProps),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPortSearchEntitiesPropertiesArrayProps",
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

export class DataPortSearchEntitiesPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPortSearchEntitiesProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPortSearchEntitiesProperties | cdktf.IResolvable | undefined) {
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

  // array_props - computed: true, optional: true, required: false
  private _arrayProps = new DataPortSearchEntitiesPropertiesArrayPropsOutputReference(this, "array_props");
  public get arrayProps() {
    return this._arrayProps;
  }
  public putArrayProps(value: DataPortSearchEntitiesPropertiesArrayProps) {
    this._arrayProps.internalValue = value;
  }
  public resetArrayProps() {
    this._arrayProps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayPropsInput() {
    return this._arrayProps.internalValue;
  }

  // boolean_props - computed: true, optional: true, required: false
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

  // number_props - computed: true, optional: true, required: false
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

  // object_props - computed: true, optional: true, required: false
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

  // string_props - computed: true, optional: true, required: false
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
export interface DataPortSearchEntitiesRelations {
  /**
  * The many relation of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#many_relations DataPortSearch#many_relations}
  */
  readonly manyRelations?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The single relation of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#single_relations DataPortSearch#single_relations}
  */
  readonly singleRelations?: { [key: string]: string };
}

export function dataPortSearchEntitiesRelationsToTerraform(struct?: DataPortSearchEntitiesRelations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    many_relations: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.manyRelations),
    single_relations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.singleRelations),
  }
}


export function dataPortSearchEntitiesRelationsToHclTerraform(struct?: DataPortSearchEntitiesRelations | cdktf.IResolvable): any {
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

export class DataPortSearchEntitiesRelationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPortSearchEntitiesRelations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPortSearchEntitiesRelations | cdktf.IResolvable | undefined) {
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

  // many_relations - computed: true, optional: true, required: false
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

  // single_relations - computed: true, optional: true, required: false
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
export interface DataPortSearchEntitiesScorecardsRules {
}

export function dataPortSearchEntitiesScorecardsRulesToTerraform(struct?: DataPortSearchEntitiesScorecardsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPortSearchEntitiesScorecardsRulesToHclTerraform(struct?: DataPortSearchEntitiesScorecardsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPortSearchEntitiesScorecardsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPortSearchEntitiesScorecardsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPortSearchEntitiesScorecardsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataPortSearchEntitiesScorecardsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataPortSearchEntitiesScorecardsRulesOutputReference {
    return new DataPortSearchEntitiesScorecardsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPortSearchEntitiesScorecards {
}

export function dataPortSearchEntitiesScorecardsToTerraform(struct?: DataPortSearchEntitiesScorecards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPortSearchEntitiesScorecardsToHclTerraform(struct?: DataPortSearchEntitiesScorecards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPortSearchEntitiesScorecardsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataPortSearchEntitiesScorecards | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPortSearchEntitiesScorecards | cdktf.IResolvable | undefined) {
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

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataPortSearchEntitiesScorecardsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataPortSearchEntitiesScorecardsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: DataPortSearchEntitiesScorecards } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataPortSearchEntitiesScorecardsOutputReference {
    return new DataPortSearchEntitiesScorecardsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataPortSearchEntities {
  /**
  * The icon of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#icon DataPortSearch#icon}
  */
  readonly icon?: string;
  /**
  * The properties of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#properties DataPortSearch#properties}
  */
  readonly properties?: DataPortSearchEntitiesProperties;
  /**
  * The relations of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#relations DataPortSearch#relations}
  */
  readonly relations?: DataPortSearchEntitiesRelations;
  /**
  * The runID of the action run that created the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#run_id DataPortSearch#run_id}
  */
  readonly runId?: string;
  /**
  * The scorecards of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#scorecards DataPortSearch#scorecards}
  */
  readonly scorecards?: { [key: string]: DataPortSearchEntitiesScorecards } | cdktf.IResolvable;
  /**
  * The teams the entity belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#teams DataPortSearch#teams}
  */
  readonly teams?: string[];
  /**
  * The title of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#title DataPortSearch#title}
  */
  readonly title?: string;
}

export function dataPortSearchEntitiesToTerraform(struct?: DataPortSearchEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icon: cdktf.stringToTerraform(struct!.icon),
    properties: dataPortSearchEntitiesPropertiesToTerraform(struct!.properties),
    relations: dataPortSearchEntitiesRelationsToTerraform(struct!.relations),
    run_id: cdktf.stringToTerraform(struct!.runId),
    scorecards: cdktf.hashMapper(dataPortSearchEntitiesScorecardsToTerraform)(struct!.scorecards),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function dataPortSearchEntitiesToHclTerraform(struct?: DataPortSearchEntities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icon: {
      value: cdktf.stringToHclTerraform(struct!.icon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: dataPortSearchEntitiesPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPortSearchEntitiesProperties",
    },
    relations: {
      value: dataPortSearchEntitiesRelationsToHclTerraform(struct!.relations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPortSearchEntitiesRelations",
    },
    run_id: {
      value: cdktf.stringToHclTerraform(struct!.runId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scorecards: {
      value: cdktf.hashMapperHcl(dataPortSearchEntitiesScorecardsToHclTerraform)(struct!.scorecards),
      isBlock: true,
      type: "map",
      storageClassType: "DataPortSearchEntitiesScorecardsMap",
    },
    teams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.teams),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPortSearchEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPortSearchEntities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icon !== undefined) {
      hasAnyValues = true;
      internalValueResult.icon = this._icon;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._relations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relations = this._relations?.internalValue;
    }
    if (this._runId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runId = this._runId;
    }
    if (this._scorecards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scorecards = this._scorecards?.internalValue;
    }
    if (this._teams !== undefined) {
      hasAnyValues = true;
      internalValueResult.teams = this._teams;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPortSearchEntities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icon = undefined;
      this._properties.internalValue = undefined;
      this._relations.internalValue = undefined;
      this._runId = undefined;
      this._scorecards.internalValue = undefined;
      this._teams = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icon = value.icon;
      this._properties.internalValue = value.properties;
      this._relations.internalValue = value.relations;
      this._runId = value.runId;
      this._scorecards.internalValue = value.scorecards;
      this._teams = value.teams;
      this._title = value.title;
    }
  }

  // blueprint - computed: true, optional: false, required: false
  public get blueprint() {
    return this.getStringAttribute('blueprint');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // icon - computed: true, optional: true, required: false
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // properties - computed: true, optional: true, required: false
  private _properties = new DataPortSearchEntitiesPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataPortSearchEntitiesProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // relations - computed: true, optional: true, required: false
  private _relations = new DataPortSearchEntitiesRelationsOutputReference(this, "relations");
  public get relations() {
    return this._relations;
  }
  public putRelations(value: DataPortSearchEntitiesRelations) {
    this._relations.internalValue = value;
  }
  public resetRelations() {
    this._relations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationsInput() {
    return this._relations.internalValue;
  }

  // run_id - computed: true, optional: true, required: false
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

  // scorecards - computed: true, optional: true, required: false
  private _scorecards = new DataPortSearchEntitiesScorecardsMap(this, "scorecards");
  public get scorecards() {
    return this._scorecards;
  }
  public putScorecards(value: { [key: string]: DataPortSearchEntitiesScorecards } | cdktf.IResolvable) {
    this._scorecards.internalValue = value;
  }
  public resetScorecards() {
    this._scorecards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scorecardsInput() {
    return this._scorecards.internalValue;
  }

  // teams - computed: true, optional: true, required: false
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

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
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
}

export class DataPortSearchEntitiesList extends cdktf.ComplexList {
  public internalValue? : DataPortSearchEntities[] | cdktf.IResolvable

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
  public get(index: number): DataPortSearchEntitiesOutputReference {
    return new DataPortSearchEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search port_search}
*/
export class DataPortSearch extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port_search";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPortSearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPortSearch to import
  * @param importFromId The id of the existing DataPortSearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPortSearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port_search", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.3/docs/data-sources/port_search port_search} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPortSearchConfig
  */
  public constructor(scope: Construct, id: string, config: DataPortSearchConfig) {
    super(scope, id, {
      terraformResourceType: 'port_search',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.17.3',
        providerVersionConstraint: '2.17.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachTitleToRelation = config.attachTitleToRelation;
    this._exclude = config.exclude;
    this._excludeCalculatedProperties = config.excludeCalculatedProperties;
    this._include = config.include;
    this._query = config.query;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attach_title_to_relation - computed: false, optional: true, required: false
  private _attachTitleToRelation?: boolean | cdktf.IResolvable; 
  public get attachTitleToRelation() {
    return this.getBooleanAttribute('attach_title_to_relation');
  }
  public set attachTitleToRelation(value: boolean | cdktf.IResolvable) {
    this._attachTitleToRelation = value;
  }
  public resetAttachTitleToRelation() {
    this._attachTitleToRelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachTitleToRelationInput() {
    return this._attachTitleToRelation;
  }

  // entities - computed: true, optional: false, required: false
  private _entities = new DataPortSearchEntitiesList(this, "entities", false);
  public get entities() {
    return this._entities;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // exclude_calculated_properties - computed: false, optional: true, required: false
  private _excludeCalculatedProperties?: boolean | cdktf.IResolvable; 
  public get excludeCalculatedProperties() {
    return this.getBooleanAttribute('exclude_calculated_properties');
  }
  public set excludeCalculatedProperties(value: boolean | cdktf.IResolvable) {
    this._excludeCalculatedProperties = value;
  }
  public resetExcludeCalculatedProperties() {
    this._excludeCalculatedProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCalculatedPropertiesInput() {
    return this._excludeCalculatedProperties;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // matching_blueprints - computed: true, optional: false, required: false
  public get matchingBlueprints() {
    return this.getListAttribute('matching_blueprints');
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attach_title_to_relation: cdktf.booleanToTerraform(this._attachTitleToRelation),
      exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exclude),
      exclude_calculated_properties: cdktf.booleanToTerraform(this._excludeCalculatedProperties),
      include: cdktf.listMapper(cdktf.stringToTerraform, false)(this._include),
      query: cdktf.stringToTerraform(this._query),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attach_title_to_relation: {
        value: cdktf.booleanToHclTerraform(this._attachTitleToRelation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exclude),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      exclude_calculated_properties: {
        value: cdktf.booleanToHclTerraform(this._excludeCalculatedProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._include),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
