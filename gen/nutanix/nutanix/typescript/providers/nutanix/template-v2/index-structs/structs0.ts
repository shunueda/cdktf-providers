import * as cdktf from 'cdktf';
export interface TemplateV2Links {
}

export function templateV2LinksToTerraform(struct?: TemplateV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateV2LinksToHclTerraform(struct?: TemplateV2Links): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateV2LinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2Links | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2Links | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class TemplateV2LinksList extends cdktf.ComplexList {

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
  public get(index: number): TemplateV2LinksOutputReference {
    return new TemplateV2LinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2CreatedByAdditionalAttributesValueMapOfStrings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#map TemplateV2#map}
  */
  readonly map?: { [key: string]: string };
}

export function templateV2CreatedByAdditionalAttributesValueMapOfStringsToTerraform(struct?: TemplateV2CreatedByAdditionalAttributesValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
  }
}


export function templateV2CreatedByAdditionalAttributesValueMapOfStringsToHclTerraform(struct?: TemplateV2CreatedByAdditionalAttributesValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2CreatedByAdditionalAttributesValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2CreatedByAdditionalAttributesValueMapOfStrings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2CreatedByAdditionalAttributesValueMapOfStrings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._map = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._map = value.map;
    }
  }

  // map - computed: true, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }
}

export class TemplateV2CreatedByAdditionalAttributesValueMapOfStringsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2CreatedByAdditionalAttributesValueMapOfStrings[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2CreatedByAdditionalAttributesValueMapOfStringsOutputReference {
    return new TemplateV2CreatedByAdditionalAttributesValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2CreatedByAdditionalAttributesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#boolean TemplateV2#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#integer TemplateV2#integer}
  */
  readonly integer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#integer_list TemplateV2#integer_list}
  */
  readonly integerList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#object TemplateV2#object}
  */
  readonly object?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#string TemplateV2#string}
  */
  readonly string?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#string_list TemplateV2#string_list}
  */
  readonly stringList?: string[];
  /**
  * map_of_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#map_of_strings TemplateV2#map_of_strings}
  */
  readonly mapOfStrings?: TemplateV2CreatedByAdditionalAttributesValueMapOfStrings[] | cdktf.IResolvable;
}

export function templateV2CreatedByAdditionalAttributesValueToTerraform(struct?: TemplateV2CreatedByAdditionalAttributesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: cdktf.booleanToTerraform(struct!.boolean),
    integer: cdktf.numberToTerraform(struct!.integer),
    integer_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.integerList),
    object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.object),
    string: cdktf.stringToTerraform(struct!.string),
    string_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringList),
    map_of_strings: cdktf.listMapper(templateV2CreatedByAdditionalAttributesValueMapOfStringsToTerraform, true)(struct!.mapOfStrings),
  }
}


export function templateV2CreatedByAdditionalAttributesValueToHclTerraform(struct?: TemplateV2CreatedByAdditionalAttributesValue | cdktf.IResolvable): any {
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
    integer: {
      value: cdktf.numberToHclTerraform(struct!.integer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.integerList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.object),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map_of_strings: {
      value: cdktf.listMapperHcl(templateV2CreatedByAdditionalAttributesValueMapOfStringsToHclTerraform, true)(struct!.mapOfStrings),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2CreatedByAdditionalAttributesValueMapOfStringsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2CreatedByAdditionalAttributesValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2CreatedByAdditionalAttributesValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._integer !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer;
    }
    if (this._integerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerList = this._integerList;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    if (this._stringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringList = this._stringList;
    }
    if (this._mapOfStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapOfStrings = this._mapOfStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2CreatedByAdditionalAttributesValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._integer = undefined;
      this._integerList = undefined;
      this._object = undefined;
      this._string = undefined;
      this._stringList = undefined;
      this._mapOfStrings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._integer = value.integer;
      this._integerList = value.integerList;
      this._object = value.object;
      this._string = value.string;
      this._stringList = value.stringList;
      this._mapOfStrings.internalValue = value.mapOfStrings;
    }
  }

  // boolean - computed: true, optional: true, required: false
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

  // integer - computed: true, optional: true, required: false
  private _integer?: number; 
  public get integer() {
    return this.getNumberAttribute('integer');
  }
  public set integer(value: number) {
    this._integer = value;
  }
  public resetInteger() {
    this._integer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer;
  }

  // integer_list - computed: true, optional: true, required: false
  private _integerList?: number[]; 
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }
  public set integerList(value: number[]) {
    this._integerList = value;
  }
  public resetIntegerList() {
    this._integerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerListInput() {
    return this._integerList;
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: string }; 
  public get object() {
    return this.getStringMapAttribute('object');
  }
  public set object(value: { [key: string]: string }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // string - computed: true, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }

  // string_list - computed: true, optional: true, required: false
  private _stringList?: string[]; 
  public get stringList() {
    return this.getListAttribute('string_list');
  }
  public set stringList(value: string[]) {
    this._stringList = value;
  }
  public resetStringList() {
    this._stringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListInput() {
    return this._stringList;
  }

  // map_of_strings - computed: false, optional: true, required: false
  private _mapOfStrings = new TemplateV2CreatedByAdditionalAttributesValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }
  public putMapOfStrings(value: TemplateV2CreatedByAdditionalAttributesValueMapOfStrings[] | cdktf.IResolvable) {
    this._mapOfStrings.internalValue = value;
  }
  public resetMapOfStrings() {
    this._mapOfStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapOfStringsInput() {
    return this._mapOfStrings.internalValue;
  }
}

export class TemplateV2CreatedByAdditionalAttributesValueList extends cdktf.ComplexList {
  public internalValue? : TemplateV2CreatedByAdditionalAttributesValue[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2CreatedByAdditionalAttributesValueOutputReference {
    return new TemplateV2CreatedByAdditionalAttributesValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2CreatedByAdditionalAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#name TemplateV2#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value?: TemplateV2CreatedByAdditionalAttributesValue[] | cdktf.IResolvable;
}

export function templateV2CreatedByAdditionalAttributesToTerraform(struct?: TemplateV2CreatedByAdditionalAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(templateV2CreatedByAdditionalAttributesValueToTerraform, true)(struct!.value),
  }
}


export function templateV2CreatedByAdditionalAttributesToHclTerraform(struct?: TemplateV2CreatedByAdditionalAttributes | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.listMapperHcl(templateV2CreatedByAdditionalAttributesValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2CreatedByAdditionalAttributesValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2CreatedByAdditionalAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2CreatedByAdditionalAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2CreatedByAdditionalAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value = new TemplateV2CreatedByAdditionalAttributesValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: TemplateV2CreatedByAdditionalAttributesValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class TemplateV2CreatedByAdditionalAttributesList extends cdktf.ComplexList {
  public internalValue? : TemplateV2CreatedByAdditionalAttributes[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2CreatedByAdditionalAttributesOutputReference {
    return new TemplateV2CreatedByAdditionalAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2CreatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#creation_type TemplateV2#creation_type}
  */
  readonly creationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#description TemplateV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#display_name TemplateV2#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#email_id TemplateV2#email_id}
  */
  readonly emailId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#first_name TemplateV2#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#idp_id TemplateV2#idp_id}
  */
  readonly idpId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#is_force_reset_password_enabled TemplateV2#is_force_reset_password_enabled}
  */
  readonly isForceResetPasswordEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#last_name TemplateV2#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#locale TemplateV2#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#middle_initial TemplateV2#middle_initial}
  */
  readonly middleInitial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#password TemplateV2#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#region TemplateV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#status TemplateV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#user_type TemplateV2#user_type}
  */
  readonly userType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#username TemplateV2#username}
  */
  readonly username: string;
  /**
  * additional_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#additional_attributes TemplateV2#additional_attributes}
  */
  readonly additionalAttributes?: TemplateV2CreatedByAdditionalAttributes[] | cdktf.IResolvable;
}

export function templateV2CreatedByToTerraform(struct?: TemplateV2CreatedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation_type: cdktf.stringToTerraform(struct!.creationType),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    email_id: cdktf.stringToTerraform(struct!.emailId),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    idp_id: cdktf.stringToTerraform(struct!.idpId),
    is_force_reset_password_enabled: cdktf.booleanToTerraform(struct!.isForceResetPasswordEnabled),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    locale: cdktf.stringToTerraform(struct!.locale),
    middle_initial: cdktf.stringToTerraform(struct!.middleInitial),
    password: cdktf.stringToTerraform(struct!.password),
    region: cdktf.stringToTerraform(struct!.region),
    status: cdktf.stringToTerraform(struct!.status),
    user_type: cdktf.stringToTerraform(struct!.userType),
    username: cdktf.stringToTerraform(struct!.username),
    additional_attributes: cdktf.listMapper(templateV2CreatedByAdditionalAttributesToTerraform, true)(struct!.additionalAttributes),
  }
}


export function templateV2CreatedByToHclTerraform(struct?: TemplateV2CreatedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creation_type: {
      value: cdktf.stringToHclTerraform(struct!.creationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_id: {
      value: cdktf.stringToHclTerraform(struct!.emailId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_id: {
      value: cdktf.stringToHclTerraform(struct!.idpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_force_reset_password_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isForceResetPasswordEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locale: {
      value: cdktf.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    middle_initial: {
      value: cdktf.stringToHclTerraform(struct!.middleInitial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_type: {
      value: cdktf.stringToHclTerraform(struct!.userType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_attributes: {
      value: cdktf.listMapperHcl(templateV2CreatedByAdditionalAttributesToHclTerraform, true)(struct!.additionalAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2CreatedByAdditionalAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2CreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2CreatedBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationType = this._creationType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._emailId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailId = this._emailId;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._idpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpId = this._idpId;
    }
    if (this._isForceResetPasswordEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isForceResetPasswordEnabled = this._isForceResetPasswordEnabled;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    if (this._middleInitial !== undefined) {
      hasAnyValues = true;
      internalValueResult.middleInitial = this._middleInitial;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._userType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userType = this._userType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._additionalAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAttributes = this._additionalAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2CreatedBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationType = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._emailId = undefined;
      this._firstName = undefined;
      this._idpId = undefined;
      this._isForceResetPasswordEnabled = undefined;
      this._lastName = undefined;
      this._locale = undefined;
      this._middleInitial = undefined;
      this._password = undefined;
      this._region = undefined;
      this._status = undefined;
      this._userType = undefined;
      this._username = undefined;
      this._additionalAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creationType = value.creationType;
      this._description = value.description;
      this._displayName = value.displayName;
      this._emailId = value.emailId;
      this._firstName = value.firstName;
      this._idpId = value.idpId;
      this._isForceResetPasswordEnabled = value.isForceResetPasswordEnabled;
      this._lastName = value.lastName;
      this._locale = value.locale;
      this._middleInitial = value.middleInitial;
      this._password = value.password;
      this._region = value.region;
      this._status = value.status;
      this._userType = value.userType;
      this._username = value.username;
      this._additionalAttributes.internalValue = value.additionalAttributes;
    }
  }

  // creation_type - computed: true, optional: true, required: false
  private _creationType?: string; 
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }
  public set creationType(value: string) {
    this._creationType = value;
  }
  public resetCreationType() {
    this._creationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTypeInput() {
    return this._creationType;
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
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

  // email_id - computed: true, optional: true, required: false
  private _emailId?: string; 
  public get emailId() {
    return this.getStringAttribute('email_id');
  }
  public set emailId(value: string) {
    this._emailId = value;
  }
  public resetEmailId() {
    this._emailId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIdInput() {
    return this._emailId;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // idp_id - computed: true, optional: true, required: false
  private _idpId?: string; 
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }
  public set idpId(value: string) {
    this._idpId = value;
  }
  public resetIdpId() {
    this._idpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId;
  }

  // is_force_reset_password_enabled - computed: true, optional: true, required: false
  private _isForceResetPasswordEnabled?: boolean | cdktf.IResolvable; 
  public get isForceResetPasswordEnabled() {
    return this.getBooleanAttribute('is_force_reset_password_enabled');
  }
  public set isForceResetPasswordEnabled(value: boolean | cdktf.IResolvable) {
    this._isForceResetPasswordEnabled = value;
  }
  public resetIsForceResetPasswordEnabled() {
    this._isForceResetPasswordEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isForceResetPasswordEnabledInput() {
    return this._isForceResetPasswordEnabled;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // locale - computed: true, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // middle_initial - computed: true, optional: true, required: false
  private _middleInitial?: string; 
  public get middleInitial() {
    return this.getStringAttribute('middle_initial');
  }
  public set middleInitial(value: string) {
    this._middleInitial = value;
  }
  public resetMiddleInitial() {
    this._middleInitial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleInitialInput() {
    return this._middleInitial;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // user_type - computed: false, optional: false, required: true
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // additional_attributes - computed: false, optional: true, required: false
  private _additionalAttributes = new TemplateV2CreatedByAdditionalAttributesList(this, "additional_attributes", false);
  public get additionalAttributes() {
    return this._additionalAttributes;
  }
  public putAdditionalAttributes(value: TemplateV2CreatedByAdditionalAttributes[] | cdktf.IResolvable) {
    this._additionalAttributes.internalValue = value;
  }
  public resetAdditionalAttributes() {
    this._additionalAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAttributesInput() {
    return this._additionalAttributes.internalValue;
  }
}

export class TemplateV2CreatedByList extends cdktf.ComplexList {
  public internalValue? : TemplateV2CreatedBy[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2CreatedByOutputReference {
    return new TemplateV2CreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2GuestUpdateStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#deployed_vm_reference TemplateV2#deployed_vm_reference}
  */
  readonly deployedVmReference?: string;
}

export function templateV2GuestUpdateStatusToTerraform(struct?: TemplateV2GuestUpdateStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployed_vm_reference: cdktf.stringToTerraform(struct!.deployedVmReference),
  }
}


export function templateV2GuestUpdateStatusToHclTerraform(struct?: TemplateV2GuestUpdateStatus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployed_vm_reference: {
      value: cdktf.stringToHclTerraform(struct!.deployedVmReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2GuestUpdateStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2GuestUpdateStatus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployedVmReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployedVmReference = this._deployedVmReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2GuestUpdateStatus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deployedVmReference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deployedVmReference = value.deployedVmReference;
    }
  }

  // deployed_vm_reference - computed: true, optional: true, required: false
  private _deployedVmReference?: string; 
  public get deployedVmReference() {
    return this.getStringAttribute('deployed_vm_reference');
  }
  public set deployedVmReference(value: string) {
    this._deployedVmReference = value;
  }
  public resetDeployedVmReference() {
    this._deployedVmReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployedVmReferenceInput() {
    return this._deployedVmReference;
  }
}

export class TemplateV2GuestUpdateStatusList extends cdktf.ComplexList {
  public internalValue? : TemplateV2GuestUpdateStatus[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2GuestUpdateStatusOutputReference {
    return new TemplateV2GuestUpdateStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecLinks {
}

export function templateV2TemplateVersionSpecLinksToTerraform(struct?: TemplateV2TemplateVersionSpecLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateV2TemplateVersionSpecLinksToHclTerraform(struct?: TemplateV2TemplateVersionSpecLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateV2TemplateVersionSpecLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class TemplateV2TemplateVersionSpecLinksList extends cdktf.ComplexList {

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
  public get(index: number): TemplateV2TemplateVersionSpecLinksOutputReference {
    return new TemplateV2TemplateVersionSpecLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStrings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#map TemplateV2#map}
  */
  readonly map?: { [key: string]: string };
}

export function templateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStringsToTerraform(struct?: TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
  }
}


export function templateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStringsToHclTerraform(struct?: TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStrings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStrings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._map = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._map = value.map;
    }
  }

  // map - computed: true, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }
}

export class TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStringsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStrings[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStringsOutputReference {
    return new TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#boolean TemplateV2#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#integer TemplateV2#integer}
  */
  readonly integer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#integer_list TemplateV2#integer_list}
  */
  readonly integerList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#object TemplateV2#object}
  */
  readonly object?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#string TemplateV2#string}
  */
  readonly string?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#string_list TemplateV2#string_list}
  */
  readonly stringList?: string[];
  /**
  * map_of_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#map_of_strings TemplateV2#map_of_strings}
  */
  readonly mapOfStrings?: TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStrings[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecCreatedByAdditionalAttributesValueToTerraform(struct?: TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: cdktf.booleanToTerraform(struct!.boolean),
    integer: cdktf.numberToTerraform(struct!.integer),
    integer_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.integerList),
    object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.object),
    string: cdktf.stringToTerraform(struct!.string),
    string_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringList),
    map_of_strings: cdktf.listMapper(templateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStringsToTerraform, true)(struct!.mapOfStrings),
  }
}


export function templateV2TemplateVersionSpecCreatedByAdditionalAttributesValueToHclTerraform(struct?: TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValue | cdktf.IResolvable): any {
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
    integer: {
      value: cdktf.numberToHclTerraform(struct!.integer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.integerList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.object),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map_of_strings: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStringsToHclTerraform, true)(struct!.mapOfStrings),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStringsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._integer !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer;
    }
    if (this._integerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerList = this._integerList;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    if (this._stringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringList = this._stringList;
    }
    if (this._mapOfStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapOfStrings = this._mapOfStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._integer = undefined;
      this._integerList = undefined;
      this._object = undefined;
      this._string = undefined;
      this._stringList = undefined;
      this._mapOfStrings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._integer = value.integer;
      this._integerList = value.integerList;
      this._object = value.object;
      this._string = value.string;
      this._stringList = value.stringList;
      this._mapOfStrings.internalValue = value.mapOfStrings;
    }
  }

  // boolean - computed: true, optional: true, required: false
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

  // integer - computed: true, optional: true, required: false
  private _integer?: number; 
  public get integer() {
    return this.getNumberAttribute('integer');
  }
  public set integer(value: number) {
    this._integer = value;
  }
  public resetInteger() {
    this._integer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer;
  }

  // integer_list - computed: true, optional: true, required: false
  private _integerList?: number[]; 
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }
  public set integerList(value: number[]) {
    this._integerList = value;
  }
  public resetIntegerList() {
    this._integerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerListInput() {
    return this._integerList;
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: string }; 
  public get object() {
    return this.getStringMapAttribute('object');
  }
  public set object(value: { [key: string]: string }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // string - computed: true, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }

  // string_list - computed: true, optional: true, required: false
  private _stringList?: string[]; 
  public get stringList() {
    return this.getListAttribute('string_list');
  }
  public set stringList(value: string[]) {
    this._stringList = value;
  }
  public resetStringList() {
    this._stringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListInput() {
    return this._stringList;
  }

  // map_of_strings - computed: false, optional: true, required: false
  private _mapOfStrings = new TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }
  public putMapOfStrings(value: TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueMapOfStrings[] | cdktf.IResolvable) {
    this._mapOfStrings.internalValue = value;
  }
  public resetMapOfStrings() {
    this._mapOfStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapOfStringsInput() {
    return this._mapOfStrings.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValue[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueOutputReference {
    return new TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecCreatedByAdditionalAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#name TemplateV2#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value?: TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValue[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecCreatedByAdditionalAttributesToTerraform(struct?: TemplateV2TemplateVersionSpecCreatedByAdditionalAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(templateV2TemplateVersionSpecCreatedByAdditionalAttributesValueToTerraform, true)(struct!.value),
  }
}


export function templateV2TemplateVersionSpecCreatedByAdditionalAttributesToHclTerraform(struct?: TemplateV2TemplateVersionSpecCreatedByAdditionalAttributes | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecCreatedByAdditionalAttributesValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecCreatedByAdditionalAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecCreatedByAdditionalAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value = new TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecCreatedByAdditionalAttributes[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesOutputReference {
    return new TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecCreatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#creation_type TemplateV2#creation_type}
  */
  readonly creationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#description TemplateV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#display_name TemplateV2#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#email_id TemplateV2#email_id}
  */
  readonly emailId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#first_name TemplateV2#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#idp_id TemplateV2#idp_id}
  */
  readonly idpId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#is_force_reset_password_enabled TemplateV2#is_force_reset_password_enabled}
  */
  readonly isForceResetPasswordEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#last_name TemplateV2#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#locale TemplateV2#locale}
  */
  readonly locale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#middle_initial TemplateV2#middle_initial}
  */
  readonly middleInitial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#password TemplateV2#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#region TemplateV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#status TemplateV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#user_type TemplateV2#user_type}
  */
  readonly userType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#username TemplateV2#username}
  */
  readonly username: string;
  /**
  * additional_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#additional_attributes TemplateV2#additional_attributes}
  */
  readonly additionalAttributes?: TemplateV2TemplateVersionSpecCreatedByAdditionalAttributes[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecCreatedByToTerraform(struct?: TemplateV2TemplateVersionSpecCreatedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    creation_type: cdktf.stringToTerraform(struct!.creationType),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    email_id: cdktf.stringToTerraform(struct!.emailId),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    idp_id: cdktf.stringToTerraform(struct!.idpId),
    is_force_reset_password_enabled: cdktf.booleanToTerraform(struct!.isForceResetPasswordEnabled),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    locale: cdktf.stringToTerraform(struct!.locale),
    middle_initial: cdktf.stringToTerraform(struct!.middleInitial),
    password: cdktf.stringToTerraform(struct!.password),
    region: cdktf.stringToTerraform(struct!.region),
    status: cdktf.stringToTerraform(struct!.status),
    user_type: cdktf.stringToTerraform(struct!.userType),
    username: cdktf.stringToTerraform(struct!.username),
    additional_attributes: cdktf.listMapper(templateV2TemplateVersionSpecCreatedByAdditionalAttributesToTerraform, true)(struct!.additionalAttributes),
  }
}


export function templateV2TemplateVersionSpecCreatedByToHclTerraform(struct?: TemplateV2TemplateVersionSpecCreatedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    creation_type: {
      value: cdktf.stringToHclTerraform(struct!.creationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_id: {
      value: cdktf.stringToHclTerraform(struct!.emailId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_id: {
      value: cdktf.stringToHclTerraform(struct!.idpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_force_reset_password_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isForceResetPasswordEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locale: {
      value: cdktf.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    middle_initial: {
      value: cdktf.stringToHclTerraform(struct!.middleInitial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_type: {
      value: cdktf.stringToHclTerraform(struct!.userType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_attributes: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecCreatedByAdditionalAttributesToHclTerraform, true)(struct!.additionalAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecCreatedBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._creationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationType = this._creationType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._emailId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailId = this._emailId;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._idpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpId = this._idpId;
    }
    if (this._isForceResetPasswordEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isForceResetPasswordEnabled = this._isForceResetPasswordEnabled;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    if (this._middleInitial !== undefined) {
      hasAnyValues = true;
      internalValueResult.middleInitial = this._middleInitial;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._userType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userType = this._userType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._additionalAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalAttributes = this._additionalAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecCreatedBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._creationType = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._emailId = undefined;
      this._firstName = undefined;
      this._idpId = undefined;
      this._isForceResetPasswordEnabled = undefined;
      this._lastName = undefined;
      this._locale = undefined;
      this._middleInitial = undefined;
      this._password = undefined;
      this._region = undefined;
      this._status = undefined;
      this._userType = undefined;
      this._username = undefined;
      this._additionalAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._creationType = value.creationType;
      this._description = value.description;
      this._displayName = value.displayName;
      this._emailId = value.emailId;
      this._firstName = value.firstName;
      this._idpId = value.idpId;
      this._isForceResetPasswordEnabled = value.isForceResetPasswordEnabled;
      this._lastName = value.lastName;
      this._locale = value.locale;
      this._middleInitial = value.middleInitial;
      this._password = value.password;
      this._region = value.region;
      this._status = value.status;
      this._userType = value.userType;
      this._username = value.username;
      this._additionalAttributes.internalValue = value.additionalAttributes;
    }
  }

  // creation_type - computed: true, optional: true, required: false
  private _creationType?: string; 
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }
  public set creationType(value: string) {
    this._creationType = value;
  }
  public resetCreationType() {
    this._creationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTypeInput() {
    return this._creationType;
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: true, required: false
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

  // email_id - computed: true, optional: true, required: false
  private _emailId?: string; 
  public get emailId() {
    return this.getStringAttribute('email_id');
  }
  public set emailId(value: string) {
    this._emailId = value;
  }
  public resetEmailId() {
    this._emailId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIdInput() {
    return this._emailId;
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // idp_id - computed: true, optional: true, required: false
  private _idpId?: string; 
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }
  public set idpId(value: string) {
    this._idpId = value;
  }
  public resetIdpId() {
    this._idpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId;
  }

  // is_force_reset_password_enabled - computed: true, optional: true, required: false
  private _isForceResetPasswordEnabled?: boolean | cdktf.IResolvable; 
  public get isForceResetPasswordEnabled() {
    return this.getBooleanAttribute('is_force_reset_password_enabled');
  }
  public set isForceResetPasswordEnabled(value: boolean | cdktf.IResolvable) {
    this._isForceResetPasswordEnabled = value;
  }
  public resetIsForceResetPasswordEnabled() {
    this._isForceResetPasswordEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isForceResetPasswordEnabledInput() {
    return this._isForceResetPasswordEnabled;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // locale - computed: true, optional: true, required: false
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  public resetLocale() {
    this._locale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // middle_initial - computed: true, optional: true, required: false
  private _middleInitial?: string; 
  public get middleInitial() {
    return this.getStringAttribute('middle_initial');
  }
  public set middleInitial(value: string) {
    this._middleInitial = value;
  }
  public resetMiddleInitial() {
    this._middleInitial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleInitialInput() {
    return this._middleInitial;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // user_type - computed: false, optional: false, required: true
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // additional_attributes - computed: false, optional: true, required: false
  private _additionalAttributes = new TemplateV2TemplateVersionSpecCreatedByAdditionalAttributesList(this, "additional_attributes", false);
  public get additionalAttributes() {
    return this._additionalAttributes;
  }
  public putAdditionalAttributes(value: TemplateV2TemplateVersionSpecCreatedByAdditionalAttributes[] | cdktf.IResolvable) {
    this._additionalAttributes.internalValue = value;
  }
  public resetAdditionalAttributes() {
    this._additionalAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAttributesInput() {
    return this._additionalAttributes.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecCreatedByList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecCreatedBy[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecCreatedByOutputReference {
    return new TemplateV2TemplateVersionSpecCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#map TemplateV2#map}
  */
  readonly map?: { [key: string]: string };
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._map = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._map = value.map;
    }
  }

  // map - computed: true, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#boolean TemplateV2#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#integer TemplateV2#integer}
  */
  readonly integer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#integer_list TemplateV2#integer_list}
  */
  readonly integerList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#object TemplateV2#object}
  */
  readonly object?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#string TemplateV2#string}
  */
  readonly string?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#string_list TemplateV2#string_list}
  */
  readonly stringList?: string[];
  /**
  * map_of_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#map_of_strings TemplateV2#map_of_strings}
  */
  readonly mapOfStrings?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: cdktf.booleanToTerraform(struct!.boolean),
    integer: cdktf.numberToTerraform(struct!.integer),
    integer_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.integerList),
    object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.object),
    string: cdktf.stringToTerraform(struct!.string),
    string_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringList),
    map_of_strings: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform, true)(struct!.mapOfStrings),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
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
    integer: {
      value: cdktf.numberToHclTerraform(struct!.integer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.integerList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.object),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map_of_strings: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform, true)(struct!.mapOfStrings),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._integer !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer;
    }
    if (this._integerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerList = this._integerList;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    if (this._stringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringList = this._stringList;
    }
    if (this._mapOfStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapOfStrings = this._mapOfStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._integer = undefined;
      this._integerList = undefined;
      this._object = undefined;
      this._string = undefined;
      this._stringList = undefined;
      this._mapOfStrings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._integer = value.integer;
      this._integerList = value.integerList;
      this._object = value.object;
      this._string = value.string;
      this._stringList = value.stringList;
      this._mapOfStrings.internalValue = value.mapOfStrings;
    }
  }

  // boolean - computed: true, optional: true, required: false
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

  // integer - computed: true, optional: true, required: false
  private _integer?: number; 
  public get integer() {
    return this.getNumberAttribute('integer');
  }
  public set integer(value: number) {
    this._integer = value;
  }
  public resetInteger() {
    this._integer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer;
  }

  // integer_list - computed: true, optional: true, required: false
  private _integerList?: number[]; 
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }
  public set integerList(value: number[]) {
    this._integerList = value;
  }
  public resetIntegerList() {
    this._integerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerListInput() {
    return this._integerList;
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: string }; 
  public get object() {
    return this.getStringMapAttribute('object');
  }
  public set object(value: { [key: string]: string }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // string - computed: true, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }

  // string_list - computed: true, optional: true, required: false
  private _stringList?: string[]; 
  public get stringList() {
    return this.getListAttribute('string_list');
  }
  public set stringList(value: string[]) {
    this._stringList = value;
  }
  public resetStringList() {
    this._stringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListInput() {
    return this._stringList;
  }

  // map_of_strings - computed: false, optional: true, required: false
  private _mapOfStrings = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }
  public putMapOfStrings(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable) {
    this._mapOfStrings.internalValue = value;
  }
  public resetMapOfStrings() {
    this._mapOfStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapOfStringsInput() {
    return this._mapOfStrings.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#name TemplateV2#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToTerraform, true)(struct!.value),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues {
  /**
  * key_value_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#key_value_pairs TemplateV2#key_value_pairs}
  */
  readonly keyValuePairs?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_value_pairs: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToTerraform, true)(struct!.keyValuePairs),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_value_pairs: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToHclTerraform, true)(struct!.keyValuePairs),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyValuePairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValuePairs = this._keyValuePairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = value.keyValuePairs;
    }
  }

  // key_value_pairs - computed: false, optional: true, required: false
  private _keyValuePairs = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
  public putKeyValuePairs(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable) {
    this._keyValuePairs.internalValue = value;
  }
  public resetKeyValuePairs() {
    this._keyValuePairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuePairsInput() {
    return this._keyValuePairs.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value?: string;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScript {
  /**
  * custom_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#custom_key_values TemplateV2#custom_key_values}
  */
  readonly customKeyValues?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues[] | cdktf.IResolvable;
  /**
  * user_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#user_data TemplateV2#user_data}
  */
  readonly userData?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_key_values: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToTerraform, true)(struct!.customKeyValues),
    user_data: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataToTerraform, true)(struct!.userData),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_key_values: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToHclTerraform, true)(struct!.customKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList",
    },
    user_data: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataToHclTerraform, true)(struct!.userData),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKeyValues = this._customKeyValues?.internalValue;
    }
    if (this._userData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = undefined;
      this._userData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = value.customKeyValues;
      this._userData.internalValue = value.userData;
    }
  }

  // custom_key_values - computed: false, optional: true, required: false
  private _customKeyValues = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList(this, "custom_key_values", false);
  public get customKeyValues() {
    return this._customKeyValues;
  }
  public putCustomKeyValues(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues[] | cdktf.IResolvable) {
    this._customKeyValues.internalValue = value;
  }
  public resetCustomKeyValues() {
    this._customKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyValuesInput() {
    return this._customKeyValues.internalValue;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserDataList(this, "user_data", false);
  public get userData() {
    return this._userData;
  }
  public putUserData(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable) {
    this._userData.internalValue = value;
  }
  public resetUserData() {
    this._userData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#datasource_type TemplateV2#datasource_type}
  */
  readonly datasourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#metadata TemplateV2#metadata}
  */
  readonly metadata?: string;
  /**
  * cloud_init_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#cloud_init_script TemplateV2#cloud_init_script}
  */
  readonly cloudInitScript?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource_type: cdktf.stringToTerraform(struct!.datasourceType),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    cloud_init_script: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptToTerraform, true)(struct!.cloudInitScript),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource_type: {
      value: cdktf.stringToHclTerraform(struct!.datasourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_init_script: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptToHclTerraform, true)(struct!.cloudInitScript),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceType = this._datasourceType;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._cloudInitScript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudInitScript = this._cloudInitScript?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasourceType = undefined;
      this._metadata = undefined;
      this._cloudInitScript.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasourceType = value.datasourceType;
      this._metadata = value.metadata;
      this._cloudInitScript.internalValue = value.cloudInitScript;
    }
  }

  // datasource_type - computed: true, optional: true, required: false
  private _datasourceType?: string; 
  public get datasourceType() {
    return this.getStringAttribute('datasource_type');
  }
  public set datasourceType(value: string) {
    this._datasourceType = value;
  }
  public resetDatasourceType() {
    this._datasourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceTypeInput() {
    return this._datasourceType;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // cloud_init_script - computed: false, optional: true, required: false
  private _cloudInitScript = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScriptList(this, "cloud_init_script", false);
  public get cloudInitScript() {
    return this._cloudInitScript;
  }
  public putCloudInitScript(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable) {
    this._cloudInitScript.internalValue = value;
  }
  public resetCloudInitScript() {
    this._cloudInitScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitScriptInput() {
    return this._cloudInitScript.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInit[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#map TemplateV2#map}
  */
  readonly map?: { [key: string]: string };
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._map = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._map = value.map;
    }
  }

  // map - computed: true, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#boolean TemplateV2#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#integer TemplateV2#integer}
  */
  readonly integer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#integer_list TemplateV2#integer_list}
  */
  readonly integerList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#object TemplateV2#object}
  */
  readonly object?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#string TemplateV2#string}
  */
  readonly string?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#string_list TemplateV2#string_list}
  */
  readonly stringList?: string[];
  /**
  * map_of_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#map_of_strings TemplateV2#map_of_strings}
  */
  readonly mapOfStrings?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: cdktf.booleanToTerraform(struct!.boolean),
    integer: cdktf.numberToTerraform(struct!.integer),
    integer_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.integerList),
    object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.object),
    string: cdktf.stringToTerraform(struct!.string),
    string_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringList),
    map_of_strings: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform, true)(struct!.mapOfStrings),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
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
    integer: {
      value: cdktf.numberToHclTerraform(struct!.integer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.integerList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.object),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map_of_strings: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform, true)(struct!.mapOfStrings),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._integer !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer;
    }
    if (this._integerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerList = this._integerList;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    if (this._stringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringList = this._stringList;
    }
    if (this._mapOfStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapOfStrings = this._mapOfStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._integer = undefined;
      this._integerList = undefined;
      this._object = undefined;
      this._string = undefined;
      this._stringList = undefined;
      this._mapOfStrings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._integer = value.integer;
      this._integerList = value.integerList;
      this._object = value.object;
      this._string = value.string;
      this._stringList = value.stringList;
      this._mapOfStrings.internalValue = value.mapOfStrings;
    }
  }

  // boolean - computed: true, optional: true, required: false
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

  // integer - computed: true, optional: true, required: false
  private _integer?: number; 
  public get integer() {
    return this.getNumberAttribute('integer');
  }
  public set integer(value: number) {
    this._integer = value;
  }
  public resetInteger() {
    this._integer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer;
  }

  // integer_list - computed: true, optional: true, required: false
  private _integerList?: number[]; 
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }
  public set integerList(value: number[]) {
    this._integerList = value;
  }
  public resetIntegerList() {
    this._integerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerListInput() {
    return this._integerList;
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: string }; 
  public get object() {
    return this.getStringMapAttribute('object');
  }
  public set object(value: { [key: string]: string }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // string - computed: true, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }

  // string_list - computed: true, optional: true, required: false
  private _stringList?: string[]; 
  public get stringList() {
    return this.getListAttribute('string_list');
  }
  public set stringList(value: string[]) {
    this._stringList = value;
  }
  public resetStringList() {
    this._stringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListInput() {
    return this._stringList;
  }

  // map_of_strings - computed: false, optional: true, required: false
  private _mapOfStrings = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }
  public putMapOfStrings(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable) {
    this._mapOfStrings.internalValue = value;
  }
  public resetMapOfStrings() {
    this._mapOfStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapOfStringsInput() {
    return this._mapOfStrings.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#name TemplateV2#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToTerraform, true)(struct!.value),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues {
  /**
  * key_value_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#key_value_pairs TemplateV2#key_value_pairs}
  */
  readonly keyValuePairs?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_value_pairs: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToTerraform, true)(struct!.keyValuePairs),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_value_pairs: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToHclTerraform, true)(struct!.keyValuePairs),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyValuePairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValuePairs = this._keyValuePairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = value.keyValuePairs;
    }
  }

  // key_value_pairs - computed: false, optional: true, required: false
  private _keyValuePairs = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
  public putKeyValuePairs(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable) {
    this._keyValuePairs.internalValue = value;
  }
  public resetKeyValuePairs() {
    this._keyValuePairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuePairsInput() {
    return this._keyValuePairs.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value?: string;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScript {
  /**
  * custom_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#custom_key_values TemplateV2#custom_key_values}
  */
  readonly customKeyValues?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable;
  /**
  * unattend_xml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#unattend_xml TemplateV2#unattend_xml}
  */
  readonly unattendXml?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_key_values: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToTerraform, true)(struct!.customKeyValues),
    unattend_xml: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToTerraform, true)(struct!.unattendXml),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_key_values: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToHclTerraform, true)(struct!.customKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList",
    },
    unattend_xml: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToHclTerraform, true)(struct!.unattendXml),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKeyValues = this._customKeyValues?.internalValue;
    }
    if (this._unattendXml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unattendXml = this._unattendXml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = undefined;
      this._unattendXml.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = value.customKeyValues;
      this._unattendXml.internalValue = value.unattendXml;
    }
  }

  // custom_key_values - computed: false, optional: true, required: false
  private _customKeyValues = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList(this, "custom_key_values", false);
  public get customKeyValues() {
    return this._customKeyValues;
  }
  public putCustomKeyValues(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable) {
    this._customKeyValues.internalValue = value;
  }
  public resetCustomKeyValues() {
    this._customKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyValuesInput() {
    return this._customKeyValues.internalValue;
  }

  // unattend_xml - computed: false, optional: true, required: false
  private _unattendXml = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXmlList(this, "unattend_xml", false);
  public get unattendXml() {
    return this._unattendXml;
  }
  public putUnattendXml(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable) {
    this._unattendXml.internalValue = value;
  }
  public resetUnattendXml() {
    this._unattendXml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unattendXmlInput() {
    return this._unattendXml.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#install_type TemplateV2#install_type}
  */
  readonly installType?: string;
  /**
  * sysprep_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#sysprep_script TemplateV2#sysprep_script}
  */
  readonly sysprepScript?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    install_type: cdktf.stringToTerraform(struct!.installType),
    sysprep_script: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptToTerraform, true)(struct!.sysprepScript),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    install_type: {
      value: cdktf.stringToHclTerraform(struct!.installType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysprep_script: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptToHclTerraform, true)(struct!.sysprepScript),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._installType !== undefined) {
      hasAnyValues = true;
      internalValueResult.installType = this._installType;
    }
    if (this._sysprepScript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysprepScript = this._sysprepScript?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._installType = undefined;
      this._sysprepScript.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._installType = value.installType;
      this._sysprepScript.internalValue = value.sysprepScript;
    }
  }

  // install_type - computed: true, optional: true, required: false
  private _installType?: string; 
  public get installType() {
    return this.getStringAttribute('install_type');
  }
  public set installType(value: string) {
    this._installType = value;
  }
  public resetInstallType() {
    this._installType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installTypeInput() {
    return this._installType;
  }

  // sysprep_script - computed: false, optional: true, required: false
  private _sysprepScript = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScriptList(this, "sysprep_script", false);
  public get sysprepScript() {
    return this._sysprepScript;
  }
  public putSysprepScript(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable) {
    this._sysprepScript.internalValue = value;
  }
  public resetSysprepScript() {
    this._sysprepScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysprepScriptInput() {
    return this._sysprepScript.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprep[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfig {
  /**
  * cloud_init block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#cloud_init TemplateV2#cloud_init}
  */
  readonly cloudInit?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInit[] | cdktf.IResolvable;
  /**
  * sysprep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#sysprep TemplateV2#sysprep}
  */
  readonly sysprep?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprep[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_init: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitToTerraform, true)(struct!.cloudInit),
    sysprep: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepToTerraform, true)(struct!.sysprep),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_init: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitToHclTerraform, true)(struct!.cloudInit),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitList",
    },
    sysprep: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepToHclTerraform, true)(struct!.sysprep),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudInit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudInit = this._cloudInit?.internalValue;
    }
    if (this._sysprep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysprep = this._sysprep?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudInit.internalValue = undefined;
      this._sysprep.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudInit.internalValue = value.cloudInit;
      this._sysprep.internalValue = value.sysprep;
    }
  }

  // cloud_init - computed: false, optional: true, required: false
  private _cloudInit = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInitList(this, "cloud_init", false);
  public get cloudInit() {
    return this._cloudInit;
  }
  public putCloudInit(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigCloudInit[] | cdktf.IResolvable) {
    this._cloudInit.internalValue = value;
  }
  public resetCloudInit() {
    this._cloudInit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitInput() {
    return this._cloudInit.internalValue;
  }

  // sysprep - computed: false, optional: true, required: false
  private _sysprep = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprepList(this, "sysprep", false);
  public get sysprep() {
    return this._sysprep;
  }
  public putSysprep(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigSysprep[] | cdktf.IResolvable) {
    this._sysprep.internalValue = value;
  }
  public resetSysprep() {
    this._sysprep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysprepInput() {
    return this._sysprep.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfig[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomization {
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#config TemplateV2#config}
  */
  readonly config?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfig[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigToTerraform, true)(struct!.config),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomization[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsLinks {
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsLinksToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsLinksToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsLinksList extends cdktf.ComplexList {

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsLinksOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#is_connected TemplateV2#is_connected}
  */
  readonly isConnected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#mac_address TemplateV2#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#model TemplateV2#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#num_queues TemplateV2#num_queues}
  */
  readonly numQueues?: number;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfoToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_connected: cdktf.booleanToTerraform(struct!.isConnected),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    model: cdktf.stringToTerraform(struct!.model),
    num_queues: cdktf.numberToTerraform(struct!.numQueues),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfoToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_connected: {
      value: cdktf.booleanToHclTerraform(struct!.isConnected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_queues: {
      value: cdktf.numberToHclTerraform(struct!.numQueues),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isConnected !== undefined) {
      hasAnyValues = true;
      internalValueResult.isConnected = this._isConnected;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._numQueues !== undefined) {
      hasAnyValues = true;
      internalValueResult.numQueues = this._numQueues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isConnected = undefined;
      this._macAddress = undefined;
      this._model = undefined;
      this._numQueues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isConnected = value.isConnected;
      this._macAddress = value.macAddress;
      this._model = value.model;
      this._numQueues = value.numQueues;
    }
  }

  // is_connected - computed: false, optional: true, required: false
  private _isConnected?: boolean | cdktf.IResolvable; 
  public get isConnected() {
    return this.getBooleanAttribute('is_connected');
  }
  public set isConnected(value: boolean | cdktf.IResolvable) {
    this._isConnected = value;
  }
  public resetIsConnected() {
    this._isConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isConnectedInput() {
    return this._isConnected;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // model - computed: true, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // num_queues - computed: false, optional: true, required: false
  private _numQueues?: number; 
  public get numQueues() {
    return this.getNumberAttribute('num_queues');
  }
  public set numQueues(value: number) {
    this._numQueues = value;
  }
  public resetNumQueues() {
    this._numQueues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numQueuesInput() {
    return this._numQueues;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfoList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfo[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfoOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigIpAddress {
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigIpAddressToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigIpAddressToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigIpAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigIpAddressList extends cdktf.ComplexList {

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigIpAddressOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct {
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList extends cdktf.ComplexList {

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#should_assign_ip TemplateV2#should_assign_ip}
  */
  readonly shouldAssignIp?: boolean | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_assign_ip: cdktf.booleanToTerraform(struct!.shouldAssignIp),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4Config | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_assign_ip: {
      value: cdktf.booleanToHclTerraform(struct!.shouldAssignIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4Config | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldAssignIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldAssignIp = this._shouldAssignIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4Config | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shouldAssignIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shouldAssignIp = value.shouldAssignIp;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  private _ipAddress = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
  }

  // secondary_ip_address_list - computed: true, optional: false, required: false
  private _secondaryIpAddressList = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigSecondaryIpAddressListStructList(this, "secondary_ip_address_list", false);
  public get secondaryIpAddressList() {
    return this._secondaryIpAddressList;
  }

  // should_assign_ip - computed: true, optional: true, required: false
  private _shouldAssignIp?: boolean | cdktf.IResolvable; 
  public get shouldAssignIp() {
    return this.getBooleanAttribute('should_assign_ip');
  }
  public set shouldAssignIp(value: boolean | cdktf.IResolvable) {
    this._shouldAssignIp = value;
  }
  public resetShouldAssignIp() {
    this._shouldAssignIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldAssignIpInput() {
    return this._shouldAssignIp;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4Config[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#prefix_length TemplateV2#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value: string;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixLength = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixLength = value.prefixLength;
      this._value = value.value;
    }
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4Info {
  /**
  * learned_ip_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#learned_ip_addresses TemplateV2#learned_ip_addresses}
  */
  readonly learnedIpAddresses?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    learned_ip_addresses: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesToTerraform, true)(struct!.learnedIpAddresses),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4Info | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    learned_ip_addresses: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesToHclTerraform, true)(struct!.learnedIpAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4Info | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._learnedIpAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.learnedIpAddresses = this._learnedIpAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4Info | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._learnedIpAddresses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._learnedIpAddresses.internalValue = value.learnedIpAddresses;
    }
  }

  // learned_ip_addresses - computed: false, optional: true, required: false
  private _learnedIpAddresses = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddressesList(this, "learned_ip_addresses", false);
  public get learnedIpAddresses() {
    return this._learnedIpAddresses;
  }
  public putLearnedIpAddresses(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoLearnedIpAddresses[] | cdktf.IResolvable) {
    this._learnedIpAddresses.internalValue = value;
  }
  public resetLearnedIpAddresses() {
    this._learnedIpAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnedIpAddressesInput() {
    return this._learnedIpAddresses.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4Info[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChainToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChainToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChainList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChain[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChainOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnetToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnetToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnetList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnet[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnetOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#network_function_nic_type TemplateV2#network_function_nic_type}
  */
  readonly networkFunctionNicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#nic_type TemplateV2#nic_type}
  */
  readonly nicType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#should_allow_unknown_macs TemplateV2#should_allow_unknown_macs}
  */
  readonly shouldAllowUnknownMacs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#trunked_vlans TemplateV2#trunked_vlans}
  */
  readonly trunkedVlans?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#vlan_mode TemplateV2#vlan_mode}
  */
  readonly vlanMode?: string;
  /**
  * ipv4_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#ipv4_config TemplateV2#ipv4_config}
  */
  readonly ipv4Config?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4Config[] | cdktf.IResolvable;
  /**
  * ipv4_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#ipv4_info TemplateV2#ipv4_info}
  */
  readonly ipv4Info?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4Info[] | cdktf.IResolvable;
  /**
  * network_function_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#network_function_chain TemplateV2#network_function_chain}
  */
  readonly networkFunctionChain?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChain[] | cdktf.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#subnet TemplateV2#subnet}
  */
  readonly subnet?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnet[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_function_nic_type: cdktf.stringToTerraform(struct!.networkFunctionNicType),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    should_allow_unknown_macs: cdktf.booleanToTerraform(struct!.shouldAllowUnknownMacs),
    trunked_vlans: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.trunkedVlans),
    vlan_mode: cdktf.stringToTerraform(struct!.vlanMode),
    ipv4_config: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigToTerraform, true)(struct!.ipv4Config),
    ipv4_info: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoToTerraform, true)(struct!.ipv4Info),
    network_function_chain: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChainToTerraform, true)(struct!.networkFunctionChain),
    subnet: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnetToTerraform, true)(struct!.subnet),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_function_nic_type: {
      value: cdktf.stringToHclTerraform(struct!.networkFunctionNicType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nic_type: {
      value: cdktf.stringToHclTerraform(struct!.nicType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_allow_unknown_macs: {
      value: cdktf.booleanToHclTerraform(struct!.shouldAllowUnknownMacs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trunked_vlans: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.trunkedVlans),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    vlan_mode: {
      value: cdktf.stringToHclTerraform(struct!.vlanMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_config: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigToHclTerraform, true)(struct!.ipv4Config),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigList",
    },
    ipv4_info: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoToHclTerraform, true)(struct!.ipv4Info),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoList",
    },
    network_function_chain: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChainToHclTerraform, true)(struct!.networkFunctionChain),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChainList",
    },
    subnet: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnetToHclTerraform, true)(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkFunctionNicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionNicType = this._networkFunctionNicType;
    }
    if (this._nicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicType = this._nicType;
    }
    if (this._shouldAllowUnknownMacs !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldAllowUnknownMacs = this._shouldAllowUnknownMacs;
    }
    if (this._trunkedVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkedVlans = this._trunkedVlans;
    }
    if (this._vlanMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanMode = this._vlanMode;
    }
    if (this._ipv4Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Config = this._ipv4Config?.internalValue;
    }
    if (this._ipv4Info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Info = this._ipv4Info?.internalValue;
    }
    if (this._networkFunctionChain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFunctionChain = this._networkFunctionChain?.internalValue;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkFunctionNicType = undefined;
      this._nicType = undefined;
      this._shouldAllowUnknownMacs = undefined;
      this._trunkedVlans = undefined;
      this._vlanMode = undefined;
      this._ipv4Config.internalValue = undefined;
      this._ipv4Info.internalValue = undefined;
      this._networkFunctionChain.internalValue = undefined;
      this._subnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkFunctionNicType = value.networkFunctionNicType;
      this._nicType = value.nicType;
      this._shouldAllowUnknownMacs = value.shouldAllowUnknownMacs;
      this._trunkedVlans = value.trunkedVlans;
      this._vlanMode = value.vlanMode;
      this._ipv4Config.internalValue = value.ipv4Config;
      this._ipv4Info.internalValue = value.ipv4Info;
      this._networkFunctionChain.internalValue = value.networkFunctionChain;
      this._subnet.internalValue = value.subnet;
    }
  }

  // network_function_nic_type - computed: true, optional: true, required: false
  private _networkFunctionNicType?: string; 
  public get networkFunctionNicType() {
    return this.getStringAttribute('network_function_nic_type');
  }
  public set networkFunctionNicType(value: string) {
    this._networkFunctionNicType = value;
  }
  public resetNetworkFunctionNicType() {
    this._networkFunctionNicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionNicTypeInput() {
    return this._networkFunctionNicType;
  }

  // nic_type - computed: true, optional: true, required: false
  private _nicType?: string; 
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }
  public set nicType(value: string) {
    this._nicType = value;
  }
  public resetNicType() {
    this._nicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicTypeInput() {
    return this._nicType;
  }

  // should_allow_unknown_macs - computed: true, optional: true, required: false
  private _shouldAllowUnknownMacs?: boolean | cdktf.IResolvable; 
  public get shouldAllowUnknownMacs() {
    return this.getBooleanAttribute('should_allow_unknown_macs');
  }
  public set shouldAllowUnknownMacs(value: boolean | cdktf.IResolvable) {
    this._shouldAllowUnknownMacs = value;
  }
  public resetShouldAllowUnknownMacs() {
    this._shouldAllowUnknownMacs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldAllowUnknownMacsInput() {
    return this._shouldAllowUnknownMacs;
  }

  // trunked_vlans - computed: true, optional: true, required: false
  private _trunkedVlans?: number[]; 
  public get trunkedVlans() {
    return this.getNumberListAttribute('trunked_vlans');
  }
  public set trunkedVlans(value: number[]) {
    this._trunkedVlans = value;
  }
  public resetTrunkedVlans() {
    this._trunkedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkedVlansInput() {
    return this._trunkedVlans;
  }

  // vlan_mode - computed: true, optional: true, required: false
  private _vlanMode?: string; 
  public get vlanMode() {
    return this.getStringAttribute('vlan_mode');
  }
  public set vlanMode(value: string) {
    this._vlanMode = value;
  }
  public resetVlanMode() {
    this._vlanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanModeInput() {
    return this._vlanMode;
  }

  // ipv4_config - computed: false, optional: true, required: false
  private _ipv4Config = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4ConfigList(this, "ipv4_config", false);
  public get ipv4Config() {
    return this._ipv4Config;
  }
  public putIpv4Config(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4Config[] | cdktf.IResolvable) {
    this._ipv4Config.internalValue = value;
  }
  public resetIpv4Config() {
    this._ipv4Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ConfigInput() {
    return this._ipv4Config.internalValue;
  }

  // ipv4_info - computed: false, optional: true, required: false
  private _ipv4Info = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4InfoList(this, "ipv4_info", false);
  public get ipv4Info() {
    return this._ipv4Info;
  }
  public putIpv4Info(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoIpv4Info[] | cdktf.IResolvable) {
    this._ipv4Info.internalValue = value;
  }
  public resetIpv4Info() {
    this._ipv4Info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4InfoInput() {
    return this._ipv4Info.internalValue;
  }

  // network_function_chain - computed: false, optional: true, required: false
  private _networkFunctionChain = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChainList(this, "network_function_chain", false);
  public get networkFunctionChain() {
    return this._networkFunctionChain;
  }
  public putNetworkFunctionChain(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoNetworkFunctionChain[] | cdktf.IResolvable) {
    this._networkFunctionChain.internalValue = value;
  }
  public resetNetworkFunctionChain() {
    this._networkFunctionChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFunctionChainInput() {
    return this._networkFunctionChain.internalValue;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfo[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNics {
  /**
  * backing_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#backing_info TemplateV2#backing_info}
  */
  readonly backingInfo?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfo[] | cdktf.IResolvable;
  /**
  * network_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#network_info TemplateV2#network_info}
  */
  readonly networkInfo?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfo[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backing_info: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfoToTerraform, true)(struct!.backingInfo),
    network_info: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoToTerraform, true)(struct!.networkInfo),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backing_info: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfoToHclTerraform, true)(struct!.backingInfo),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfoList",
    },
    network_info: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoToHclTerraform, true)(struct!.networkInfo),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backingInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingInfo = this._backingInfo?.internalValue;
    }
    if (this._networkInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInfo = this._networkInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backingInfo.internalValue = undefined;
      this._networkInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backingInfo.internalValue = value.backingInfo;
      this._networkInfo.internalValue = value.networkInfo;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // links - computed: true, optional: false, required: false
  private _links = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // backing_info - computed: false, optional: true, required: false
  private _backingInfo = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }
  public putBackingInfo(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsBackingInfo[] | cdktf.IResolvable) {
    this._backingInfo.internalValue = value;
  }
  public resetBackingInfo() {
    this._backingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingInfoInput() {
    return this._backingInfo.internalValue;
  }

  // network_info - computed: false, optional: true, required: false
  private _networkInfo = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfoList(this, "network_info", false);
  public get networkInfo() {
    return this._networkInfo;
  }
  public putNetworkInfo(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsNetworkInfo[] | cdktf.IResolvable) {
    this._networkInfo.internalValue = value;
  }
  public resetNetworkInfo() {
    this._networkInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInfoInput() {
    return this._networkInfo.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNics[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#memory_size_bytes TemplateV2#memory_size_bytes}
  */
  readonly memorySizeBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#name TemplateV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#num_cores_per_socket TemplateV2#num_cores_per_socket}
  */
  readonly numCoresPerSocket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#num_sockets TemplateV2#num_sockets}
  */
  readonly numSockets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#num_threads_per_core TemplateV2#num_threads_per_core}
  */
  readonly numThreadsPerCore?: number;
  /**
  * guest_customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#guest_customization TemplateV2#guest_customization}
  */
  readonly guestCustomization?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomization[] | cdktf.IResolvable;
  /**
  * nics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#nics TemplateV2#nics}
  */
  readonly nics?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNics[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_size_bytes: cdktf.numberToTerraform(struct!.memorySizeBytes),
    name: cdktf.stringToTerraform(struct!.name),
    num_cores_per_socket: cdktf.numberToTerraform(struct!.numCoresPerSocket),
    num_sockets: cdktf.numberToTerraform(struct!.numSockets),
    num_threads_per_core: cdktf.numberToTerraform(struct!.numThreadsPerCore),
    guest_customization: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationToTerraform, true)(struct!.guestCustomization),
    nics: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsToTerraform, true)(struct!.nics),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.memorySizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_cores_per_socket: {
      value: cdktf.numberToHclTerraform(struct!.numCoresPerSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_sockets: {
      value: cdktf.numberToHclTerraform(struct!.numSockets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_threads_per_core: {
      value: cdktf.numberToHclTerraform(struct!.numThreadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    guest_customization: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationToHclTerraform, true)(struct!.guestCustomization),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationList",
    },
    nics: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsToHclTerraform, true)(struct!.nics),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memorySizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySizeBytes = this._memorySizeBytes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numCoresPerSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCoresPerSocket = this._numCoresPerSocket;
    }
    if (this._numSockets !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSockets = this._numSockets;
    }
    if (this._numThreadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.numThreadsPerCore = this._numThreadsPerCore;
    }
    if (this._guestCustomization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestCustomization = this._guestCustomization?.internalValue;
    }
    if (this._nics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nics = this._nics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memorySizeBytes = undefined;
      this._name = undefined;
      this._numCoresPerSocket = undefined;
      this._numSockets = undefined;
      this._numThreadsPerCore = undefined;
      this._guestCustomization.internalValue = undefined;
      this._nics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memorySizeBytes = value.memorySizeBytes;
      this._name = value.name;
      this._numCoresPerSocket = value.numCoresPerSocket;
      this._numSockets = value.numSockets;
      this._numThreadsPerCore = value.numThreadsPerCore;
      this._guestCustomization.internalValue = value.guestCustomization;
      this._nics.internalValue = value.nics;
    }
  }

  // memory_size_bytes - computed: false, optional: true, required: false
  private _memorySizeBytes?: number; 
  public get memorySizeBytes() {
    return this.getNumberAttribute('memory_size_bytes');
  }
  public set memorySizeBytes(value: number) {
    this._memorySizeBytes = value;
  }
  public resetMemorySizeBytes() {
    this._memorySizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeBytesInput() {
    return this._memorySizeBytes;
  }

  // name - computed: true, optional: true, required: false
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

  // num_cores_per_socket - computed: true, optional: true, required: false
  private _numCoresPerSocket?: number; 
  public get numCoresPerSocket() {
    return this.getNumberAttribute('num_cores_per_socket');
  }
  public set numCoresPerSocket(value: number) {
    this._numCoresPerSocket = value;
  }
  public resetNumCoresPerSocket() {
    this._numCoresPerSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCoresPerSocketInput() {
    return this._numCoresPerSocket;
  }

  // num_sockets - computed: true, optional: true, required: false
  private _numSockets?: number; 
  public get numSockets() {
    return this.getNumberAttribute('num_sockets');
  }
  public set numSockets(value: number) {
    this._numSockets = value;
  }
  public resetNumSockets() {
    this._numSockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSocketsInput() {
    return this._numSockets;
  }

  // num_threads_per_core - computed: true, optional: true, required: false
  private _numThreadsPerCore?: number; 
  public get numThreadsPerCore() {
    return this.getNumberAttribute('num_threads_per_core');
  }
  public set numThreadsPerCore(value: number) {
    this._numThreadsPerCore = value;
  }
  public resetNumThreadsPerCore() {
    this._numThreadsPerCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numThreadsPerCoreInput() {
    return this._numThreadsPerCore;
  }

  // guest_customization - computed: false, optional: true, required: false
  private _guestCustomization = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomizationList(this, "guest_customization", false);
  public get guestCustomization() {
    return this._guestCustomization;
  }
  public putGuestCustomization(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigGuestCustomization[] | cdktf.IResolvable) {
    this._guestCustomization.internalValue = value;
  }
  public resetGuestCustomization() {
    this._guestCustomization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestCustomizationInput() {
    return this._guestCustomization.internalValue;
  }

  // nics - computed: false, optional: true, required: false
  private _nics = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNicsList(this, "nics", false);
  public get nics() {
    return this._nics;
  }
  public putNics(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigNics[] | cdktf.IResolvable) {
    this._nics.internalValue = value;
  }
  public resetNics() {
    this._nics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsInput() {
    return this._nics.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfig[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#version_id TemplateV2#version_id}
  */
  readonly versionId?: string;
  /**
  * override_vm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#override_vm_config TemplateV2#override_vm_config}
  */
  readonly overrideVmConfig: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfig[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOutputReference | TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version_id: cdktf.stringToTerraform(struct!.versionId),
    override_vm_config: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigToTerraform, true)(struct!.overrideVmConfig),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOutputReference | TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version_id: {
      value: cdktf.stringToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_vm_config: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigToHclTerraform, true)(struct!.overrideVmConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._overrideVmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideVmConfig = this._overrideVmConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._versionId = undefined;
      this._overrideVmConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._versionId = value.versionId;
      this._overrideVmConfig.internalValue = value.overrideVmConfig;
    }
  }

  // version_id - computed: true, optional: true, required: false
  private _versionId?: string; 
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // override_vm_config - computed: false, optional: false, required: true
  private _overrideVmConfig = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfigList(this, "override_vm_config", false);
  public get overrideVmConfig() {
    return this._overrideVmConfig;
  }
  public putOverrideVmConfig(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOverrideVmConfig[] | cdktf.IResolvable) {
    this._overrideVmConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVmConfigInput() {
    return this._overrideVmConfig.internalValue;
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#map TemplateV2#map}
  */
  readonly map?: { [key: string]: string };
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._map = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._map = value.map;
    }
  }

  // map - computed: true, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#boolean TemplateV2#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#integer TemplateV2#integer}
  */
  readonly integer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#integer_list TemplateV2#integer_list}
  */
  readonly integerList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#object TemplateV2#object}
  */
  readonly object?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#string TemplateV2#string}
  */
  readonly string?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#string_list TemplateV2#string_list}
  */
  readonly stringList?: string[];
  /**
  * map_of_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#map_of_strings TemplateV2#map_of_strings}
  */
  readonly mapOfStrings?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: cdktf.booleanToTerraform(struct!.boolean),
    integer: cdktf.numberToTerraform(struct!.integer),
    integer_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.integerList),
    object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.object),
    string: cdktf.stringToTerraform(struct!.string),
    string_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringList),
    map_of_strings: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform, true)(struct!.mapOfStrings),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
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
    integer: {
      value: cdktf.numberToHclTerraform(struct!.integer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.integerList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.object),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map_of_strings: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform, true)(struct!.mapOfStrings),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._integer !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer;
    }
    if (this._integerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerList = this._integerList;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    if (this._stringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringList = this._stringList;
    }
    if (this._mapOfStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapOfStrings = this._mapOfStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._integer = undefined;
      this._integerList = undefined;
      this._object = undefined;
      this._string = undefined;
      this._stringList = undefined;
      this._mapOfStrings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._integer = value.integer;
      this._integerList = value.integerList;
      this._object = value.object;
      this._string = value.string;
      this._stringList = value.stringList;
      this._mapOfStrings.internalValue = value.mapOfStrings;
    }
  }

  // boolean - computed: true, optional: true, required: false
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

  // integer - computed: true, optional: true, required: false
  private _integer?: number; 
  public get integer() {
    return this.getNumberAttribute('integer');
  }
  public set integer(value: number) {
    this._integer = value;
  }
  public resetInteger() {
    this._integer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer;
  }

  // integer_list - computed: true, optional: true, required: false
  private _integerList?: number[]; 
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }
  public set integerList(value: number[]) {
    this._integerList = value;
  }
  public resetIntegerList() {
    this._integerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerListInput() {
    return this._integerList;
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: string }; 
  public get object() {
    return this.getStringMapAttribute('object');
  }
  public set object(value: { [key: string]: string }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // string - computed: true, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }

  // string_list - computed: true, optional: true, required: false
  private _stringList?: string[]; 
  public get stringList() {
    return this.getListAttribute('string_list');
  }
  public set stringList(value: string[]) {
    this._stringList = value;
  }
  public resetStringList() {
    this._stringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListInput() {
    return this._stringList;
  }

  // map_of_strings - computed: false, optional: true, required: false
  private _mapOfStrings = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }
  public putMapOfStrings(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable) {
    this._mapOfStrings.internalValue = value;
  }
  public resetMapOfStrings() {
    this._mapOfStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapOfStringsInput() {
    return this._mapOfStrings.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#name TemplateV2#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToTerraform, true)(struct!.value),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues {
  /**
  * key_value_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#key_value_pairs TemplateV2#key_value_pairs}
  */
  readonly keyValuePairs?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_value_pairs: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToTerraform, true)(struct!.keyValuePairs),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_value_pairs: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsToHclTerraform, true)(struct!.keyValuePairs),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyValuePairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValuePairs = this._keyValuePairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = value.keyValuePairs;
    }
  }

  // key_value_pairs - computed: false, optional: true, required: false
  private _keyValuePairs = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
  public putKeyValuePairs(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable) {
    this._keyValuePairs.internalValue = value;
  }
  public resetKeyValuePairs() {
    this._keyValuePairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuePairsInput() {
    return this._keyValuePairs.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value?: string;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserDataToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserDataToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserDataList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScript {
  /**
  * custom_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#custom_key_values TemplateV2#custom_key_values}
  */
  readonly customKeyValues?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues[] | cdktf.IResolvable;
  /**
  * user_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#user_data TemplateV2#user_data}
  */
  readonly userData?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_key_values: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToTerraform, true)(struct!.customKeyValues),
    user_data: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserDataToTerraform, true)(struct!.userData),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_key_values: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesToHclTerraform, true)(struct!.customKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList",
    },
    user_data: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserDataToHclTerraform, true)(struct!.userData),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKeyValues = this._customKeyValues?.internalValue;
    }
    if (this._userData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = undefined;
      this._userData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = value.customKeyValues;
      this._userData.internalValue = value.userData;
    }
  }

  // custom_key_values - computed: false, optional: true, required: false
  private _customKeyValues = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValuesList(this, "custom_key_values", false);
  public get customKeyValues() {
    return this._customKeyValues;
  }
  public putCustomKeyValues(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptCustomKeyValues[] | cdktf.IResolvable) {
    this._customKeyValues.internalValue = value;
  }
  public resetCustomKeyValues() {
    this._customKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyValuesInput() {
    return this._customKeyValues.internalValue;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserDataList(this, "user_data", false);
  public get userData() {
    return this._userData;
  }
  public putUserData(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptUserData[] | cdktf.IResolvable) {
    this._userData.internalValue = value;
  }
  public resetUserData() {
    this._userData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#datasource_type TemplateV2#datasource_type}
  */
  readonly datasourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#metadata TemplateV2#metadata}
  */
  readonly metadata?: string;
  /**
  * cloud_init_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#cloud_init_script TemplateV2#cloud_init_script}
  */
  readonly cloudInitScript?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource_type: cdktf.stringToTerraform(struct!.datasourceType),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    cloud_init_script: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptToTerraform, true)(struct!.cloudInitScript),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource_type: {
      value: cdktf.stringToHclTerraform(struct!.datasourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_init_script: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptToHclTerraform, true)(struct!.cloudInitScript),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceType = this._datasourceType;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._cloudInitScript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudInitScript = this._cloudInitScript?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasourceType = undefined;
      this._metadata = undefined;
      this._cloudInitScript.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasourceType = value.datasourceType;
      this._metadata = value.metadata;
      this._cloudInitScript.internalValue = value.cloudInitScript;
    }
  }

  // datasource_type - computed: true, optional: true, required: false
  private _datasourceType?: string; 
  public get datasourceType() {
    return this.getStringAttribute('datasource_type');
  }
  public set datasourceType(value: string) {
    this._datasourceType = value;
  }
  public resetDatasourceType() {
    this._datasourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceTypeInput() {
    return this._datasourceType;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // cloud_init_script - computed: false, optional: true, required: false
  private _cloudInitScript = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScriptList(this, "cloud_init_script", false);
  public get cloudInitScript() {
    return this._cloudInitScript;
  }
  public putCloudInitScript(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitCloudInitScript[] | cdktf.IResolvable) {
    this._cloudInitScript.internalValue = value;
  }
  public resetCloudInitScript() {
    this._cloudInitScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitScriptInput() {
    return this._cloudInitScript.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInit[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#map TemplateV2#map}
  */
  readonly map?: { [key: string]: string };
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._map = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._map = value.map;
    }
  }

  // map - computed: true, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#boolean TemplateV2#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#integer TemplateV2#integer}
  */
  readonly integer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#integer_list TemplateV2#integer_list}
  */
  readonly integerList?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#object TemplateV2#object}
  */
  readonly object?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#string TemplateV2#string}
  */
  readonly string?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#string_list TemplateV2#string_list}
  */
  readonly stringList?: string[];
  /**
  * map_of_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#map_of_strings TemplateV2#map_of_strings}
  */
  readonly mapOfStrings?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean: cdktf.booleanToTerraform(struct!.boolean),
    integer: cdktf.numberToTerraform(struct!.integer),
    integer_list: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.integerList),
    object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.object),
    string: cdktf.stringToTerraform(struct!.string),
    string_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stringList),
    map_of_strings: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToTerraform, true)(struct!.mapOfStrings),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable): any {
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
    integer: {
      value: cdktf.numberToHclTerraform(struct!.integer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_list: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.integerList),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.object),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stringList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map_of_strings: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsToHclTerraform, true)(struct!.mapOfStrings),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolean !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolean = this._boolean;
    }
    if (this._integer !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer;
    }
    if (this._integerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerList = this._integerList;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    if (this._stringList !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringList = this._stringList;
    }
    if (this._mapOfStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapOfStrings = this._mapOfStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolean = undefined;
      this._integer = undefined;
      this._integerList = undefined;
      this._object = undefined;
      this._string = undefined;
      this._stringList = undefined;
      this._mapOfStrings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolean = value.boolean;
      this._integer = value.integer;
      this._integerList = value.integerList;
      this._object = value.object;
      this._string = value.string;
      this._stringList = value.stringList;
      this._mapOfStrings.internalValue = value.mapOfStrings;
    }
  }

  // boolean - computed: true, optional: true, required: false
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

  // integer - computed: true, optional: true, required: false
  private _integer?: number; 
  public get integer() {
    return this.getNumberAttribute('integer');
  }
  public set integer(value: number) {
    this._integer = value;
  }
  public resetInteger() {
    this._integer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer;
  }

  // integer_list - computed: true, optional: true, required: false
  private _integerList?: number[]; 
  public get integerList() {
    return this.getNumberListAttribute('integer_list');
  }
  public set integerList(value: number[]) {
    this._integerList = value;
  }
  public resetIntegerList() {
    this._integerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerListInput() {
    return this._integerList;
  }

  // object - computed: true, optional: true, required: false
  private _object?: { [key: string]: string }; 
  public get object() {
    return this.getStringMapAttribute('object');
  }
  public set object(value: { [key: string]: string }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // string - computed: true, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }

  // string_list - computed: true, optional: true, required: false
  private _stringList?: string[]; 
  public get stringList() {
    return this.getListAttribute('string_list');
  }
  public set stringList(value: string[]) {
    this._stringList = value;
  }
  public resetStringList() {
    this._stringList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringListInput() {
    return this._stringList;
  }

  // map_of_strings - computed: false, optional: true, required: false
  private _mapOfStrings = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStringsList(this, "map_of_strings", false);
  public get mapOfStrings() {
    return this._mapOfStrings;
  }
  public putMapOfStrings(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueMapOfStrings[] | cdktf.IResolvable) {
    this._mapOfStrings.internalValue = value;
  }
  public resetMapOfStrings() {
    this._mapOfStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapOfStringsInput() {
    return this._mapOfStrings.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#name TemplateV2#name}
  */
  readonly name?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToTerraform, true)(struct!.value),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value.internalValue = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues {
  /**
  * key_value_pairs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#key_value_pairs TemplateV2#key_value_pairs}
  */
  readonly keyValuePairs?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_value_pairs: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToTerraform, true)(struct!.keyValuePairs),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_value_pairs: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsToHclTerraform, true)(struct!.keyValuePairs),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyValuePairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValuePairs = this._keyValuePairs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyValuePairs.internalValue = value.keyValuePairs;
    }
  }

  // key_value_pairs - computed: false, optional: true, required: false
  private _keyValuePairs = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairsList(this, "key_value_pairs", false);
  public get keyValuePairs() {
    return this._keyValuePairs;
  }
  public putKeyValuePairs(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesKeyValuePairs[] | cdktf.IResolvable) {
    this._keyValuePairs.internalValue = value;
  }
  public resetKeyValuePairs() {
    this._keyValuePairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuePairsInput() {
    return this._keyValuePairs.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXml {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#value TemplateV2#value}
  */
  readonly value?: string;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXml | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXmlList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXmlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScript {
  /**
  * custom_key_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#custom_key_values TemplateV2#custom_key_values}
  */
  readonly customKeyValues?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable;
  /**
  * unattend_xml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#unattend_xml TemplateV2#unattend_xml}
  */
  readonly unattendXml?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_key_values: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToTerraform, true)(struct!.customKeyValues),
    unattend_xml: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToTerraform, true)(struct!.unattendXml),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_key_values: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesToHclTerraform, true)(struct!.customKeyValues),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList",
    },
    unattend_xml: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXmlToHclTerraform, true)(struct!.unattendXml),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXmlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customKeyValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customKeyValues = this._customKeyValues?.internalValue;
    }
    if (this._unattendXml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unattendXml = this._unattendXml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = undefined;
      this._unattendXml.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customKeyValues.internalValue = value.customKeyValues;
      this._unattendXml.internalValue = value.unattendXml;
    }
  }

  // custom_key_values - computed: false, optional: true, required: false
  private _customKeyValues = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValuesList(this, "custom_key_values", false);
  public get customKeyValues() {
    return this._customKeyValues;
  }
  public putCustomKeyValues(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptCustomKeyValues[] | cdktf.IResolvable) {
    this._customKeyValues.internalValue = value;
  }
  public resetCustomKeyValues() {
    this._customKeyValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyValuesInput() {
    return this._customKeyValues.internalValue;
  }

  // unattend_xml - computed: false, optional: true, required: false
  private _unattendXml = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXmlList(this, "unattend_xml", false);
  public get unattendXml() {
    return this._unattendXml;
  }
  public putUnattendXml(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptUnattendXml[] | cdktf.IResolvable) {
    this._unattendXml.internalValue = value;
  }
  public resetUnattendXml() {
    this._unattendXml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unattendXmlInput() {
    return this._unattendXml.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#install_type TemplateV2#install_type}
  */
  readonly installType?: string;
  /**
  * sysprep_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#sysprep_script TemplateV2#sysprep_script}
  */
  readonly sysprepScript?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    install_type: cdktf.stringToTerraform(struct!.installType),
    sysprep_script: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptToTerraform, true)(struct!.sysprepScript),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    install_type: {
      value: cdktf.stringToHclTerraform(struct!.installType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysprep_script: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptToHclTerraform, true)(struct!.sysprepScript),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._installType !== undefined) {
      hasAnyValues = true;
      internalValueResult.installType = this._installType;
    }
    if (this._sysprepScript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysprepScript = this._sysprepScript?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._installType = undefined;
      this._sysprepScript.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._installType = value.installType;
      this._sysprepScript.internalValue = value.sysprepScript;
    }
  }

  // install_type - computed: true, optional: true, required: false
  private _installType?: string; 
  public get installType() {
    return this.getStringAttribute('install_type');
  }
  public set installType(value: string) {
    this._installType = value;
  }
  public resetInstallType() {
    this._installType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installTypeInput() {
    return this._installType;
  }

  // sysprep_script - computed: false, optional: true, required: false
  private _sysprepScript = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScriptList(this, "sysprep_script", false);
  public get sysprepScript() {
    return this._sysprepScript;
  }
  public putSysprepScript(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepSysprepScript[] | cdktf.IResolvable) {
    this._sysprepScript.internalValue = value;
  }
  public resetSysprepScript() {
    this._sysprepScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysprepScriptInput() {
    return this._sysprepScript.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprep[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfig {
  /**
  * cloud_init block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#cloud_init TemplateV2#cloud_init}
  */
  readonly cloudInit?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInit[] | cdktf.IResolvable;
  /**
  * sysprep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#sysprep TemplateV2#sysprep}
  */
  readonly sysprep?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprep[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_init: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitToTerraform, true)(struct!.cloudInit),
    sysprep: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepToTerraform, true)(struct!.sysprep),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_init: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitToHclTerraform, true)(struct!.cloudInit),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitList",
    },
    sysprep: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepToHclTerraform, true)(struct!.sysprep),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudInit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudInit = this._cloudInit?.internalValue;
    }
    if (this._sysprep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysprep = this._sysprep?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudInit.internalValue = undefined;
      this._sysprep.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudInit.internalValue = value.cloudInit;
      this._sysprep.internalValue = value.sysprep;
    }
  }

  // cloud_init - computed: false, optional: true, required: false
  private _cloudInit = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInitList(this, "cloud_init", false);
  public get cloudInit() {
    return this._cloudInit;
  }
  public putCloudInit(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigCloudInit[] | cdktf.IResolvable) {
    this._cloudInit.internalValue = value;
  }
  public resetCloudInit() {
    this._cloudInit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitInput() {
    return this._cloudInit.internalValue;
  }

  // sysprep - computed: false, optional: true, required: false
  private _sysprep = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprepList(this, "sysprep", false);
  public get sysprep() {
    return this._sysprep;
  }
  public putSysprep(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigSysprep[] | cdktf.IResolvable) {
    this._sysprep.internalValue = value;
  }
  public resetSysprep() {
    this._sysprep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysprepInput() {
    return this._sysprep.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfig[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomization {
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#config TemplateV2#config}
  */
  readonly config?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfig[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigToTerraform, true)(struct!.config),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomization[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationOutputReference {
    return new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVersionSourceTemplateVmReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId: string;
  /**
  * guest_customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#guest_customization TemplateV2#guest_customization}
  */
  readonly guestCustomization?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomization[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceOutputReference | TemplateV2TemplateVersionSpecVersionSourceTemplateVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
    guest_customization: cdktf.listMapper(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationToTerraform, true)(struct!.guestCustomization),
  }
}


export function templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceOutputReference | TemplateV2TemplateVersionSpecVersionSourceTemplateVmReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_customization: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationToHclTerraform, true)(struct!.guestCustomization),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSourceTemplateVmReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    if (this._guestCustomization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestCustomization = this._guestCustomization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extId = undefined;
      this._guestCustomization.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extId = value.extId;
      this._guestCustomization.internalValue = value.guestCustomization;
    }
  }

  // ext_id - computed: false, optional: false, required: true
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // guest_customization - computed: false, optional: true, required: false
  private _guestCustomization = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomizationList(this, "guest_customization", false);
  public get guestCustomization() {
    return this._guestCustomization;
  }
  public putGuestCustomization(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceGuestCustomization[] | cdktf.IResolvable) {
    this._guestCustomization.internalValue = value;
  }
  public resetGuestCustomization() {
    this._guestCustomization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestCustomizationInput() {
    return this._guestCustomization.internalValue;
  }
}
export interface TemplateV2TemplateVersionSpecVersionSource {
  /**
  * template_version_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#template_version_reference TemplateV2#template_version_reference}
  */
  readonly templateVersionReference?: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReference;
  /**
  * template_vm_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#template_vm_reference TemplateV2#template_vm_reference}
  */
  readonly templateVmReference?: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReference;
}

export function templateV2TemplateVersionSpecVersionSourceToTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceOutputReference | TemplateV2TemplateVersionSpecVersionSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_version_reference: templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceToTerraform(struct!.templateVersionReference),
    template_vm_reference: templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceToTerraform(struct!.templateVmReference),
  }
}


export function templateV2TemplateVersionSpecVersionSourceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVersionSourceOutputReference | TemplateV2TemplateVersionSpecVersionSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_version_reference: {
      value: templateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceToHclTerraform(struct!.templateVersionReference),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceList",
    },
    template_vm_reference: {
      value: templateV2TemplateVersionSpecVersionSourceTemplateVmReferenceToHclTerraform(struct!.templateVmReference),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVersionSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateV2TemplateVersionSpecVersionSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateVersionReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVersionReference = this._templateVersionReference?.internalValue;
    }
    if (this._templateVmReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVmReference = this._templateVmReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVersionSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateVersionReference.internalValue = undefined;
      this._templateVmReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateVersionReference.internalValue = value.templateVersionReference;
      this._templateVmReference.internalValue = value.templateVmReference;
    }
  }

  // template_version_reference - computed: false, optional: true, required: false
  private _templateVersionReference = new TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReferenceOutputReference(this, "template_version_reference");
  public get templateVersionReference() {
    return this._templateVersionReference;
  }
  public putTemplateVersionReference(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVersionReference) {
    this._templateVersionReference.internalValue = value;
  }
  public resetTemplateVersionReference() {
    this._templateVersionReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVersionReferenceInput() {
    return this._templateVersionReference.internalValue;
  }

  // template_vm_reference - computed: false, optional: true, required: false
  private _templateVmReference = new TemplateV2TemplateVersionSpecVersionSourceTemplateVmReferenceOutputReference(this, "template_vm_reference");
  public get templateVmReference() {
    return this._templateVmReference;
  }
  public putTemplateVmReference(value: TemplateV2TemplateVersionSpecVersionSourceTemplateVmReference) {
    this._templateVmReference.internalValue = value;
  }
  public resetTemplateVmReference() {
    this._templateVmReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVmReferenceInput() {
    return this._templateVmReference.internalValue;
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecLinks {
}

export function templateV2TemplateVersionSpecVmSpecLinksToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateV2TemplateVersionSpecVmSpecLinksToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateV2TemplateVersionSpecVmSpecLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class TemplateV2TemplateVersionSpecVmSpecLinksList extends cdktf.ComplexList {

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecLinksOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecApcConfigCpuModel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#name TemplateV2#name}
  */
  readonly name?: string;
}

export function templateV2TemplateVersionSpecVmSpecApcConfigCpuModelToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecApcConfigCpuModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function templateV2TemplateVersionSpecVmSpecApcConfigCpuModelToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecApcConfigCpuModel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecApcConfigCpuModelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecApcConfigCpuModel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecApcConfigCpuModel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
      this._name = value.name;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // name - computed: true, optional: true, required: false
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
}

export class TemplateV2TemplateVersionSpecVmSpecApcConfigCpuModelList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecApcConfigCpuModel[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecApcConfigCpuModelOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecApcConfigCpuModelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecApcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#is_apc_enabled TemplateV2#is_apc_enabled}
  */
  readonly isApcEnabled?: boolean | cdktf.IResolvable;
  /**
  * cpu_model block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#cpu_model TemplateV2#cpu_model}
  */
  readonly cpuModel?: TemplateV2TemplateVersionSpecVmSpecApcConfigCpuModel[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecApcConfigToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecApcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_apc_enabled: cdktf.booleanToTerraform(struct!.isApcEnabled),
    cpu_model: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecApcConfigCpuModelToTerraform, true)(struct!.cpuModel),
  }
}


export function templateV2TemplateVersionSpecVmSpecApcConfigToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecApcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_apc_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isApcEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_model: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecApcConfigCpuModelToHclTerraform, true)(struct!.cpuModel),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecApcConfigCpuModelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecApcConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecApcConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isApcEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isApcEnabled = this._isApcEnabled;
    }
    if (this._cpuModel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuModel = this._cpuModel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecApcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isApcEnabled = undefined;
      this._cpuModel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isApcEnabled = value.isApcEnabled;
      this._cpuModel.internalValue = value.cpuModel;
    }
  }

  // is_apc_enabled - computed: true, optional: true, required: false
  private _isApcEnabled?: boolean | cdktf.IResolvable; 
  public get isApcEnabled() {
    return this.getBooleanAttribute('is_apc_enabled');
  }
  public set isApcEnabled(value: boolean | cdktf.IResolvable) {
    this._isApcEnabled = value;
  }
  public resetIsApcEnabled() {
    this._isApcEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isApcEnabledInput() {
    return this._isApcEnabled;
  }

  // cpu_model - computed: false, optional: true, required: false
  private _cpuModel = new TemplateV2TemplateVersionSpecVmSpecApcConfigCpuModelList(this, "cpu_model", false);
  public get cpuModel() {
    return this._cpuModel;
  }
  public putCpuModel(value: TemplateV2TemplateVersionSpecVmSpecApcConfigCpuModel[] | cdktf.IResolvable) {
    this._cpuModel.internalValue = value;
  }
  public resetCpuModel() {
    this._cpuModel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuModelInput() {
    return this._cpuModel.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecApcConfigList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecApcConfig[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecApcConfigOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecApcConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecAvailabilityZone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
}

export function templateV2TemplateVersionSpecVmSpecAvailabilityZoneToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecAvailabilityZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function templateV2TemplateVersionSpecVmSpecAvailabilityZoneToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecAvailabilityZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecAvailabilityZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecAvailabilityZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecAvailabilityZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecAvailabilityZoneList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecAvailabilityZone[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecAvailabilityZoneOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecAvailabilityZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#bus_type TemplateV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#index TemplateV2#index}
  */
  readonly index?: number;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busType = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busType = value.busType;
      this._index = value.index;
    }
  }

  // bus_type - computed: true, optional: true, required: false
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  public resetBusType() {
    this._busType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDisk {
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#disk_address TemplateV2#disk_address}
  */
  readonly diskAddress?: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_address: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressToTerraform, true)(struct!.diskAddress),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_address: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskAddress.internalValue = value.diskAddress;
    }
  }

  // disk_address - computed: false, optional: true, required: false
  private _diskAddress = new TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable) {
    this._diskAddress.internalValue = value;
  }
  public resetDiskAddress() {
    this._diskAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAddressInput() {
    return this._diskAddress.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#mac_address TemplateV2#mac_address}
  */
  readonly macAddress?: string;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNicToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNicToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macAddress = value.macAddress;
    }
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNicList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNic[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNicOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDevice {
  /**
  * boot_device_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#boot_device_disk TemplateV2#boot_device_disk}
  */
  readonly bootDeviceDisk?: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable;
  /**
  * boot_device_nic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#boot_device_nic TemplateV2#boot_device_nic}
  */
  readonly bootDeviceNic?: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNic[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_device_disk: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskToTerraform, true)(struct!.bootDeviceDisk),
    boot_device_nic: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNicToTerraform, true)(struct!.bootDeviceNic),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_device_disk: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskToHclTerraform, true)(struct!.bootDeviceDisk),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskList",
    },
    boot_device_nic: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNicToHclTerraform, true)(struct!.bootDeviceNic),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDeviceDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDeviceDisk = this._bootDeviceDisk?.internalValue;
    }
    if (this._bootDeviceNic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDeviceNic = this._bootDeviceNic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootDeviceDisk.internalValue = undefined;
      this._bootDeviceNic.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootDeviceDisk.internalValue = value.bootDeviceDisk;
      this._bootDeviceNic.internalValue = value.bootDeviceNic;
    }
  }

  // boot_device_disk - computed: false, optional: true, required: false
  private _bootDeviceDisk = new TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDiskList(this, "boot_device_disk", false);
  public get bootDeviceDisk() {
    return this._bootDeviceDisk;
  }
  public putBootDeviceDisk(value: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable) {
    this._bootDeviceDisk.internalValue = value;
  }
  public resetBootDeviceDisk() {
    this._bootDeviceDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceDiskInput() {
    return this._bootDeviceDisk.internalValue;
  }

  // boot_device_nic - computed: false, optional: true, required: false
  private _bootDeviceNic = new TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNicList(this, "boot_device_nic", false);
  public get bootDeviceNic() {
    return this._bootDeviceNic;
  }
  public putBootDeviceNic(value: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceBootDeviceNic[] | cdktf.IResolvable) {
    this._bootDeviceNic.internalValue = value;
  }
  public resetBootDeviceNic() {
    this._bootDeviceNic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceNicInput() {
    return this._bootDeviceNic.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDevice[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBoot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#boot_order TemplateV2#boot_order}
  */
  readonly bootOrder?: string[];
  /**
  * boot_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#boot_device TemplateV2#boot_device}
  */
  readonly bootDevice?: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDevice[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bootOrder),
    boot_device: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceToTerraform, true)(struct!.bootDevice),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bootOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    boot_device: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceToHclTerraform, true)(struct!.bootDevice),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBoot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootOrder = this._bootOrder;
    }
    if (this._bootDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDevice = this._bootDevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBoot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootOrder = undefined;
      this._bootDevice.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootOrder = value.bootOrder;
      this._bootDevice.internalValue = value.bootDevice;
    }
  }

  // boot_order - computed: true, optional: true, required: false
  private _bootOrder?: string[]; 
  public get bootOrder() {
    return this.getListAttribute('boot_order');
  }
  public set bootOrder(value: string[]) {
    this._bootOrder = value;
  }
  public resetBootOrder() {
    this._bootOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOrderInput() {
    return this._bootOrder;
  }

  // boot_device - computed: false, optional: true, required: false
  private _bootDevice = new TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDeviceList(this, "boot_device", false);
  public get bootDevice() {
    return this._bootDevice;
  }
  public putBootDevice(value: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootBootDevice[] | cdktf.IResolvable) {
    this._bootDevice.internalValue = value;
  }
  public resetBootDevice() {
    this._bootDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceInput() {
    return this._bootDevice.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBoot[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#bus_type TemplateV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#index TemplateV2#index}
  */
  readonly index?: number;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busType = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busType = value.busType;
      this._index = value.index;
    }
  }

  // bus_type - computed: true, optional: true, required: false
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  public resetBusType() {
    this._busType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDisk {
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#disk_address TemplateV2#disk_address}
  */
  readonly diskAddress?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_address: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressToTerraform, true)(struct!.diskAddress),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_address: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskAddress.internalValue = value.diskAddress;
    }
  }

  // disk_address - computed: false, optional: true, required: false
  private _diskAddress = new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskDiskAddress[] | cdktf.IResolvable) {
    this._diskAddress.internalValue = value;
  }
  public resetDiskAddress() {
    this._diskAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAddressInput() {
    return this._diskAddress.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#mac_address TemplateV2#mac_address}
  */
  readonly macAddress?: string;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNicToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNicToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._macAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._macAddress = value.macAddress;
    }
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNicList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNic[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNicOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDevice {
  /**
  * boot_device_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#boot_device_disk TemplateV2#boot_device_disk}
  */
  readonly bootDeviceDisk?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable;
  /**
  * boot_device_nic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#boot_device_nic TemplateV2#boot_device_nic}
  */
  readonly bootDeviceNic?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNic[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_device_disk: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskToTerraform, true)(struct!.bootDeviceDisk),
    boot_device_nic: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNicToTerraform, true)(struct!.bootDeviceNic),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_device_disk: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskToHclTerraform, true)(struct!.bootDeviceDisk),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskList",
    },
    boot_device_nic: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNicToHclTerraform, true)(struct!.bootDeviceNic),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDeviceDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDeviceDisk = this._bootDeviceDisk?.internalValue;
    }
    if (this._bootDeviceNic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDeviceNic = this._bootDeviceNic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootDeviceDisk.internalValue = undefined;
      this._bootDeviceNic.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootDeviceDisk.internalValue = value.bootDeviceDisk;
      this._bootDeviceNic.internalValue = value.bootDeviceNic;
    }
  }

  // boot_device_disk - computed: false, optional: true, required: false
  private _bootDeviceDisk = new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDiskList(this, "boot_device_disk", false);
  public get bootDeviceDisk() {
    return this._bootDeviceDisk;
  }
  public putBootDeviceDisk(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceDisk[] | cdktf.IResolvable) {
    this._bootDeviceDisk.internalValue = value;
  }
  public resetBootDeviceDisk() {
    this._bootDeviceDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceDiskInput() {
    return this._bootDeviceDisk.internalValue;
  }

  // boot_device_nic - computed: false, optional: true, required: false
  private _bootDeviceNic = new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNicList(this, "boot_device_nic", false);
  public get bootDeviceNic() {
    return this._bootDeviceNic;
  }
  public putBootDeviceNic(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceBootDeviceNic[] | cdktf.IResolvable) {
    this._bootDeviceNic.internalValue = value;
  }
  public resetBootDeviceNic() {
    this._bootDeviceNic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceNicInput() {
    return this._bootDeviceNic.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDevice[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#image_ext_id TemplateV2#image_ext_id}
  */
  readonly imageExtId?: string;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_ext_id: cdktf.stringToTerraform(struct!.imageExtId),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.imageExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageExtId = this._imageExtId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageExtId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageExtId = value.imageExtId;
    }
  }

  // image_ext_id - computed: true, optional: true, required: false
  private _imageExtId?: string; 
  public get imageExtId() {
    return this.getStringAttribute('image_ext_id');
  }
  public set imageExtId(value: string) {
    this._imageExtId = value;
  }
  public resetImageExtId() {
    this._imageExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageExtIdInput() {
    return this._imageExtId;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#bus_type TemplateV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#index TemplateV2#index}
  */
  readonly index?: number;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busType = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busType = value.busType;
      this._index = value.index;
    }
  }

  // bus_type - computed: true, optional: true, required: false
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  public resetBusType() {
    this._busType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#disk_ext_id TemplateV2#disk_ext_id}
  */
  readonly diskExtId?: string;
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#disk_address TemplateV2#disk_address}
  */
  readonly diskAddress?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable;
  /**
  * vm_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#vm_reference TemplateV2#vm_reference}
  */
  readonly vmReference?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_ext_id: cdktf.stringToTerraform(struct!.diskExtId),
    disk_address: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform, true)(struct!.diskAddress),
    vm_reference: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform, true)(struct!.vmReference),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.diskExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_address: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressList",
    },
    vm_reference: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform, true)(struct!.vmReference),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskExtId = this._diskExtId;
    }
    if (this._diskAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress?.internalValue;
    }
    if (this._vmReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmReference = this._vmReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskExtId = undefined;
      this._diskAddress.internalValue = undefined;
      this._vmReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskExtId = value.diskExtId;
      this._diskAddress.internalValue = value.diskAddress;
      this._vmReference.internalValue = value.vmReference;
    }
  }

  // disk_ext_id - computed: true, optional: true, required: false
  private _diskExtId?: string; 
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }
  public set diskExtId(value: string) {
    this._diskExtId = value;
  }
  public resetDiskExtId() {
    this._diskExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskExtIdInput() {
    return this._diskExtId;
  }

  // disk_address - computed: false, optional: true, required: false
  private _diskAddress = new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable) {
    this._diskAddress.internalValue = value;
  }
  public resetDiskAddress() {
    this._diskAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAddressInput() {
    return this._diskAddress.internalValue;
  }

  // vm_reference - computed: false, optional: true, required: false
  private _vmReference = new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
  public putVmReference(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable) {
    this._vmReference.internalValue = value;
  }
  public resetVmReference() {
    this._vmReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmReferenceInput() {
    return this._vmReference.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference {
  /**
  * image_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#image_reference TemplateV2#image_reference}
  */
  readonly imageReference?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference[] | cdktf.IResolvable;
  /**
  * vm_disk_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#vm_disk_reference TemplateV2#vm_disk_reference}
  */
  readonly vmDiskReference?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_reference: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceToTerraform, true)(struct!.imageReference),
    vm_disk_reference: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceToTerraform, true)(struct!.vmDiskReference),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_reference: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceToHclTerraform, true)(struct!.imageReference),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceList",
    },
    vm_disk_reference: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceToHclTerraform, true)(struct!.vmDiskReference),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageReference = this._imageReference?.internalValue;
    }
    if (this._vmDiskReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmDiskReference = this._vmDiskReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageReference.internalValue = undefined;
      this._vmDiskReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageReference.internalValue = value.imageReference;
      this._vmDiskReference.internalValue = value.vmDiskReference;
    }
  }

  // image_reference - computed: false, optional: true, required: false
  private _imageReference = new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReferenceList(this, "image_reference", false);
  public get imageReference() {
    return this._imageReference;
  }
  public putImageReference(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceImageReference[] | cdktf.IResolvable) {
    this._imageReference.internalValue = value;
  }
  public resetImageReference() {
    this._imageReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageReferenceInput() {
    return this._imageReference.internalValue;
  }

  // vm_disk_reference - computed: false, optional: true, required: false
  private _vmDiskReference = new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReferenceList(this, "vm_disk_reference", false);
  public get vmDiskReference() {
    return this._vmDiskReference;
  }
  public putVmDiskReference(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable) {
    this._vmDiskReference.internalValue = value;
  }
  public resetVmDiskReference() {
    this._vmDiskReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmDiskReferenceInput() {
    return this._vmDiskReference.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource {
  /**
  * reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#reference TemplateV2#reference}
  */
  readonly reference?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceToTerraform, true)(struct!.reference),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceToHclTerraform, true)(struct!.reference),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reference.internalValue = value.reference;
    }
  }

  // reference - computed: false, optional: true, required: false
  private _reference = new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
  public putReference(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceReference[] | cdktf.IResolvable) {
    this._reference.internalValue = value;
  }
  public resetReference() {
    this._reference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#is_flash_mode_enabled TemplateV2#is_flash_mode_enabled}
  */
  readonly isFlashModeEnabled?: boolean | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_flash_mode_enabled: cdktf.booleanToTerraform(struct!.isFlashModeEnabled),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_flash_mode_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isFlashModeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isFlashModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFlashModeEnabled = this._isFlashModeEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isFlashModeEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isFlashModeEnabled = value.isFlashModeEnabled;
    }
  }

  // is_flash_mode_enabled - computed: true, optional: true, required: false
  private _isFlashModeEnabled?: boolean | cdktf.IResolvable; 
  public get isFlashModeEnabled() {
    return this.getBooleanAttribute('is_flash_mode_enabled');
  }
  public set isFlashModeEnabled(value: boolean | cdktf.IResolvable) {
    this._isFlashModeEnabled = value;
  }
  public resetIsFlashModeEnabled() {
    this._isFlashModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFlashModeEnabledInput() {
    return this._isFlashModeEnabled;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#disk_size_bytes TemplateV2#disk_size_bytes}
  */
  readonly diskSizeBytes?: number;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#data_source TemplateV2#data_source}
  */
  readonly dataSource?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource[] | cdktf.IResolvable;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#storage_config TemplateV2#storage_config}
  */
  readonly storageConfig?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig[] | cdktf.IResolvable;
  /**
  * storage_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#storage_container TemplateV2#storage_container}
  */
  readonly storageContainer?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_bytes: cdktf.numberToTerraform(struct!.diskSizeBytes),
    data_source: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceToTerraform, true)(struct!.dataSource),
    storage_config: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigToTerraform, true)(struct!.storageConfig),
    storage_container: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerToTerraform, true)(struct!.storageContainer),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_source: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceList",
    },
    storage_config: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigToHclTerraform, true)(struct!.storageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigList",
    },
    storage_container: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerToHclTerraform, true)(struct!.storageContainer),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeBytes = this._diskSizeBytes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._storageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfig = this._storageConfig?.internalValue;
    }
    if (this._storageContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageContainer = this._storageContainer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSizeBytes = undefined;
      this._dataSource.internalValue = undefined;
      this._storageConfig.internalValue = undefined;
      this._storageContainer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSizeBytes = value.diskSizeBytes;
      this._dataSource.internalValue = value.dataSource;
      this._storageConfig.internalValue = value.storageConfig;
      this._storageContainer.internalValue = value.storageContainer;
    }
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // disk_size_bytes - computed: true, optional: true, required: false
  private _diskSizeBytes?: number; 
  public get diskSizeBytes() {
    return this.getNumberAttribute('disk_size_bytes');
  }
  public set diskSizeBytes(value: number) {
    this._diskSizeBytes = value;
  }
  public resetDiskSizeBytes() {
    this._diskSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeBytesInput() {
    return this._diskSizeBytes;
  }

  // is_migration_in_progress - computed: true, optional: false, required: false
  public get isMigrationInProgress() {
    return this.getBooleanAttribute('is_migration_in_progress');
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoDataSource[] | cdktf.IResolvable) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // storage_config - computed: false, optional: true, required: false
  private _storageConfig = new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageConfig[] | cdktf.IResolvable) {
    this._storageConfig.internalValue = value;
  }
  public resetStorageConfig() {
    this._storageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }

  // storage_container - computed: false, optional: true, required: false
  private _storageContainer = new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainerList(this, "storage_container", false);
  public get storageContainer() {
    return this._storageContainer;
  }
  public putStorageContainer(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoStorageContainer[] | cdktf.IResolvable) {
    this._storageContainer.internalValue = value;
  }
  public resetStorageContainer() {
    this._storageContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerInput() {
    return this._storageContainer.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfo[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDevice {
  /**
  * backing_storage_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#backing_storage_info TemplateV2#backing_storage_info}
  */
  readonly backingStorageInfo?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfo[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backing_storage_info: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoToTerraform, true)(struct!.backingStorageInfo),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backing_storage_info: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoToHclTerraform, true)(struct!.backingStorageInfo),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backingStorageInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingStorageInfo = this._backingStorageInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backingStorageInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backingStorageInfo.internalValue = value.backingStorageInfo;
    }
  }

  // backing_storage_info - computed: false, optional: true, required: false
  private _backingStorageInfo = new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfoList(this, "backing_storage_info", false);
  public get backingStorageInfo() {
    return this._backingStorageInfo;
  }
  public putBackingStorageInfo(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceBackingStorageInfo[] | cdktf.IResolvable) {
    this._backingStorageInfo.internalValue = value;
  }
  public resetBackingStorageInfo() {
    this._backingStorageInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingStorageInfoInput() {
    return this._backingStorageInfo.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDevice[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBoot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#boot_order TemplateV2#boot_order}
  */
  readonly bootOrder?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#is_secure_boot_enabled TemplateV2#is_secure_boot_enabled}
  */
  readonly isSecureBootEnabled?: boolean | cdktf.IResolvable;
  /**
  * boot_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#boot_device TemplateV2#boot_device}
  */
  readonly bootDevice?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDevice[] | cdktf.IResolvable;
  /**
  * nvram_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#nvram_device TemplateV2#nvram_device}
  */
  readonly nvramDevice?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDevice[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bootOrder),
    is_secure_boot_enabled: cdktf.booleanToTerraform(struct!.isSecureBootEnabled),
    boot_device: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceToTerraform, true)(struct!.bootDevice),
    nvram_device: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceToTerraform, true)(struct!.nvramDevice),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigUefiBootToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBoot | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bootOrder),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_secure_boot_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isSecureBootEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    boot_device: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceToHclTerraform, true)(struct!.bootDevice),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceList",
    },
    nvram_device: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceToHclTerraform, true)(struct!.nvramDevice),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBoot | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootOrder = this._bootOrder;
    }
    if (this._isSecureBootEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSecureBootEnabled = this._isSecureBootEnabled;
    }
    if (this._bootDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDevice = this._bootDevice?.internalValue;
    }
    if (this._nvramDevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvramDevice = this._nvramDevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBoot | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootOrder = undefined;
      this._isSecureBootEnabled = undefined;
      this._bootDevice.internalValue = undefined;
      this._nvramDevice.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootOrder = value.bootOrder;
      this._isSecureBootEnabled = value.isSecureBootEnabled;
      this._bootDevice.internalValue = value.bootDevice;
      this._nvramDevice.internalValue = value.nvramDevice;
    }
  }

  // boot_order - computed: true, optional: true, required: false
  private _bootOrder?: string[]; 
  public get bootOrder() {
    return this.getListAttribute('boot_order');
  }
  public set bootOrder(value: string[]) {
    this._bootOrder = value;
  }
  public resetBootOrder() {
    this._bootOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOrderInput() {
    return this._bootOrder;
  }

  // is_secure_boot_enabled - computed: true, optional: true, required: false
  private _isSecureBootEnabled?: boolean | cdktf.IResolvable; 
  public get isSecureBootEnabled() {
    return this.getBooleanAttribute('is_secure_boot_enabled');
  }
  public set isSecureBootEnabled(value: boolean | cdktf.IResolvable) {
    this._isSecureBootEnabled = value;
  }
  public resetIsSecureBootEnabled() {
    this._isSecureBootEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecureBootEnabledInput() {
    return this._isSecureBootEnabled;
  }

  // boot_device - computed: false, optional: true, required: false
  private _bootDevice = new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDeviceList(this, "boot_device", false);
  public get bootDevice() {
    return this._bootDevice;
  }
  public putBootDevice(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootBootDevice[] | cdktf.IResolvable) {
    this._bootDevice.internalValue = value;
  }
  public resetBootDevice() {
    this._bootDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDeviceInput() {
    return this._bootDevice.internalValue;
  }

  // nvram_device - computed: false, optional: true, required: false
  private _nvramDevice = new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDeviceList(this, "nvram_device", false);
  public get nvramDevice() {
    return this._nvramDevice;
  }
  public putNvramDevice(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootNvramDevice[] | cdktf.IResolvable) {
    this._nvramDevice.internalValue = value;
  }
  public resetNvramDevice() {
    this._nvramDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvramDeviceInput() {
    return this._nvramDevice.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBoot[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecBootConfig {
  /**
  * legacy_boot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#legacy_boot TemplateV2#legacy_boot}
  */
  readonly legacyBoot?: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBoot[] | cdktf.IResolvable;
  /**
  * uefi_boot block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#uefi_boot TemplateV2#uefi_boot}
  */
  readonly uefiBoot?: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBoot[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecBootConfigToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    legacy_boot: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootToTerraform, true)(struct!.legacyBoot),
    uefi_boot: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootToTerraform, true)(struct!.uefiBoot),
  }
}


export function templateV2TemplateVersionSpecVmSpecBootConfigToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecBootConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    legacy_boot: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigLegacyBootToHclTerraform, true)(struct!.legacyBoot),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootList",
    },
    uefi_boot: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecBootConfigUefiBootToHclTerraform, true)(struct!.uefiBoot),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecBootConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._legacyBoot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacyBoot = this._legacyBoot?.internalValue;
    }
    if (this._uefiBoot?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uefiBoot = this._uefiBoot?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecBootConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._legacyBoot.internalValue = undefined;
      this._uefiBoot.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._legacyBoot.internalValue = value.legacyBoot;
      this._uefiBoot.internalValue = value.uefiBoot;
    }
  }

  // legacy_boot - computed: false, optional: true, required: false
  private _legacyBoot = new TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBootList(this, "legacy_boot", false);
  public get legacyBoot() {
    return this._legacyBoot;
  }
  public putLegacyBoot(value: TemplateV2TemplateVersionSpecVmSpecBootConfigLegacyBoot[] | cdktf.IResolvable) {
    this._legacyBoot.internalValue = value;
  }
  public resetLegacyBoot() {
    this._legacyBoot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyBootInput() {
    return this._legacyBoot.internalValue;
  }

  // uefi_boot - computed: false, optional: true, required: false
  private _uefiBoot = new TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBootList(this, "uefi_boot", false);
  public get uefiBoot() {
    return this._uefiBoot;
  }
  public putUefiBoot(value: TemplateV2TemplateVersionSpecVmSpecBootConfigUefiBoot[] | cdktf.IResolvable) {
    this._uefiBoot.internalValue = value;
  }
  public resetUefiBoot() {
    this._uefiBoot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uefiBootInput() {
    return this._uefiBoot.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecBootConfigList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecBootConfig[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecBootConfigOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecBootConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
}

export function templateV2TemplateVersionSpecVmSpecCategoriesToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function templateV2TemplateVersionSpecVmSpecCategoriesToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecCategoriesList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecCategories[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecCategoriesOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecCdRomsLinks {
}

export function templateV2TemplateVersionSpecVmSpecCdRomsLinksToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateV2TemplateVersionSpecVmSpecCdRomsLinksToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecCdRomsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecCdRomsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsLinksList extends cdktf.ComplexList {

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecCdRomsLinksOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecCdRomsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#image_ext_id TemplateV2#image_ext_id}
  */
  readonly imageExtId?: string;
}

export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReferenceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_ext_id: cdktf.stringToTerraform(struct!.imageExtId),
  }
}


export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReferenceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.imageExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageExtId = this._imageExtId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageExtId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageExtId = value.imageExtId;
    }
  }

  // image_ext_id - computed: true, optional: true, required: false
  private _imageExtId?: string; 
  public get imageExtId() {
    return this.getStringAttribute('image_ext_id');
  }
  public set imageExtId(value: string) {
    this._imageExtId = value;
  }
  public resetImageExtId() {
    this._imageExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageExtIdInput() {
    return this._imageExtId;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReferenceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReference[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReferenceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#bus_type TemplateV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#index TemplateV2#index}
  */
  readonly index?: number;
}

export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busType = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busType = value.busType;
      this._index = value.index;
    }
  }

  // bus_type - computed: true, optional: true, required: false
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  public resetBusType() {
    this._busType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
}

export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#disk_ext_id TemplateV2#disk_ext_id}
  */
  readonly diskExtId?: string;
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#disk_address TemplateV2#disk_address}
  */
  readonly diskAddress?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable;
  /**
  * vm_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#vm_reference TemplateV2#vm_reference}
  */
  readonly vmReference?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_ext_id: cdktf.stringToTerraform(struct!.diskExtId),
    disk_address: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToTerraform, true)(struct!.diskAddress),
    vm_reference: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToTerraform, true)(struct!.vmReference),
  }
}


export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.diskExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_address: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressList",
    },
    vm_reference: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceToHclTerraform, true)(struct!.vmReference),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskExtId = this._diskExtId;
    }
    if (this._diskAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress?.internalValue;
    }
    if (this._vmReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmReference = this._vmReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskExtId = undefined;
      this._diskAddress.internalValue = undefined;
      this._vmReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskExtId = value.diskExtId;
      this._diskAddress.internalValue = value.diskAddress;
      this._vmReference.internalValue = value.vmReference;
    }
  }

  // disk_ext_id - computed: true, optional: true, required: false
  private _diskExtId?: string; 
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }
  public set diskExtId(value: string) {
    this._diskExtId = value;
  }
  public resetDiskExtId() {
    this._diskExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskExtIdInput() {
    return this._diskExtId;
  }

  // disk_address - computed: false, optional: true, required: false
  private _diskAddress = new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceDiskAddress[] | cdktf.IResolvable) {
    this._diskAddress.internalValue = value;
  }
  public resetDiskAddress() {
    this._diskAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAddressInput() {
    return this._diskAddress.internalValue;
  }

  // vm_reference - computed: false, optional: true, required: false
  private _vmReference = new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReferenceList(this, "vm_reference", false);
  public get vmReference() {
    return this._vmReference;
  }
  public putVmReference(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceVmReference[] | cdktf.IResolvable) {
    this._vmReference.internalValue = value;
  }
  public resetVmReference() {
    this._vmReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmReferenceInput() {
    return this._vmReference.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReference {
  /**
  * image_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#image_reference TemplateV2#image_reference}
  */
  readonly imageReference?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReference[] | cdktf.IResolvable;
  /**
  * vm_disk_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#vm_disk_reference TemplateV2#vm_disk_reference}
  */
  readonly vmDiskReference?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_reference: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReferenceToTerraform, true)(struct!.imageReference),
    vm_disk_reference: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceToTerraform, true)(struct!.vmDiskReference),
  }
}


export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_reference: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReferenceToHclTerraform, true)(struct!.imageReference),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReferenceList",
    },
    vm_disk_reference: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceToHclTerraform, true)(struct!.vmDiskReference),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageReference = this._imageReference?.internalValue;
    }
    if (this._vmDiskReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmDiskReference = this._vmDiskReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageReference.internalValue = undefined;
      this._vmDiskReference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageReference.internalValue = value.imageReference;
      this._vmDiskReference.internalValue = value.vmDiskReference;
    }
  }

  // image_reference - computed: false, optional: true, required: false
  private _imageReference = new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReferenceList(this, "image_reference", false);
  public get imageReference() {
    return this._imageReference;
  }
  public putImageReference(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceImageReference[] | cdktf.IResolvable) {
    this._imageReference.internalValue = value;
  }
  public resetImageReference() {
    this._imageReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageReferenceInput() {
    return this._imageReference.internalValue;
  }

  // vm_disk_reference - computed: false, optional: true, required: false
  private _vmDiskReference = new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReferenceList(this, "vm_disk_reference", false);
  public get vmDiskReference() {
    return this._vmDiskReference;
  }
  public putVmDiskReference(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceVmDiskReference[] | cdktf.IResolvable) {
    this._vmDiskReference.internalValue = value;
  }
  public resetVmDiskReference() {
    this._vmDiskReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmDiskReferenceInput() {
    return this._vmDiskReference.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReference[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSource {
  /**
  * reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#reference TemplateV2#reference}
  */
  readonly reference?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReference[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceToTerraform, true)(struct!.reference),
  }
}


export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceToHclTerraform, true)(struct!.reference),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reference.internalValue = value.reference;
    }
  }

  // reference - computed: false, optional: true, required: false
  private _reference = new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
  public putReference(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceReference[] | cdktf.IResolvable) {
    this._reference.internalValue = value;
  }
  public resetReference() {
    this._reference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSource[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#is_flash_mode_enabled TemplateV2#is_flash_mode_enabled}
  */
  readonly isFlashModeEnabled?: boolean | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfigToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_flash_mode_enabled: cdktf.booleanToTerraform(struct!.isFlashModeEnabled),
  }
}


export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfigToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_flash_mode_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isFlashModeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isFlashModeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFlashModeEnabled = this._isFlashModeEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isFlashModeEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isFlashModeEnabled = value.isFlashModeEnabled;
    }
  }

  // is_flash_mode_enabled - computed: true, optional: true, required: false
  private _isFlashModeEnabled?: boolean | cdktf.IResolvable; 
  public get isFlashModeEnabled() {
    return this.getBooleanAttribute('is_flash_mode_enabled');
  }
  public set isFlashModeEnabled(value: boolean | cdktf.IResolvable) {
    this._isFlashModeEnabled = value;
  }
  public resetIsFlashModeEnabled() {
    this._isFlashModeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFlashModeEnabledInput() {
    return this._isFlashModeEnabled;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfigList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfig[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfigOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
}

export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainerToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainerToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainerList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainer[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainerOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#disk_size_bytes TemplateV2#disk_size_bytes}
  */
  readonly diskSizeBytes?: number;
  /**
  * data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#data_source TemplateV2#data_source}
  */
  readonly dataSource?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSource[] | cdktf.IResolvable;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#storage_config TemplateV2#storage_config}
  */
  readonly storageConfig?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfig[] | cdktf.IResolvable;
  /**
  * storage_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#storage_container TemplateV2#storage_container}
  */
  readonly storageContainer?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainer[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_bytes: cdktf.numberToTerraform(struct!.diskSizeBytes),
    data_source: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceToTerraform, true)(struct!.dataSource),
    storage_config: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfigToTerraform, true)(struct!.storageConfig),
    storage_container: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainerToTerraform, true)(struct!.storageContainer),
  }
}


export function templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_bytes: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_source: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceToHclTerraform, true)(struct!.dataSource),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceList",
    },
    storage_config: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfigToHclTerraform, true)(struct!.storageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfigList",
    },
    storage_container: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainerToHclTerraform, true)(struct!.storageContainer),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeBytes = this._diskSizeBytes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._storageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfig = this._storageConfig?.internalValue;
    }
    if (this._storageContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageContainer = this._storageContainer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskSizeBytes = undefined;
      this._dataSource.internalValue = undefined;
      this._storageConfig.internalValue = undefined;
      this._storageContainer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskSizeBytes = value.diskSizeBytes;
      this._dataSource.internalValue = value.dataSource;
      this._storageConfig.internalValue = value.storageConfig;
      this._storageContainer.internalValue = value.storageContainer;
    }
  }

  // disk_ext_id - computed: true, optional: false, required: false
  public get diskExtId() {
    return this.getStringAttribute('disk_ext_id');
  }

  // disk_size_bytes - computed: true, optional: true, required: false
  private _diskSizeBytes?: number; 
  public get diskSizeBytes() {
    return this.getNumberAttribute('disk_size_bytes');
  }
  public set diskSizeBytes(value: number) {
    this._diskSizeBytes = value;
  }
  public resetDiskSizeBytes() {
    this._diskSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeBytesInput() {
    return this._diskSizeBytes;
  }

  // is_migration_in_progress - computed: true, optional: false, required: false
  public get isMigrationInProgress() {
    return this.getBooleanAttribute('is_migration_in_progress');
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSourceList(this, "data_source", false);
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoDataSource[] | cdktf.IResolvable) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // storage_config - computed: false, optional: true, required: false
  private _storageConfig = new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfigList(this, "storage_config", false);
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageConfig[] | cdktf.IResolvable) {
    this._storageConfig.internalValue = value;
  }
  public resetStorageConfig() {
    this._storageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }

  // storage_container - computed: false, optional: true, required: false
  private _storageContainer = new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainerList(this, "storage_container", false);
  public get storageContainer() {
    return this._storageContainer;
  }
  public putStorageContainer(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoStorageContainer[] | cdktf.IResolvable) {
    this._storageContainer.internalValue = value;
  }
  public resetStorageContainer() {
    this._storageContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerInput() {
    return this._storageContainer.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfo[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecCdRomsDiskAddress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#bus_type TemplateV2#bus_type}
  */
  readonly busType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#index TemplateV2#index}
  */
  readonly index?: number;
}

export function templateV2TemplateVersionSpecVmSpecCdRomsDiskAddressToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus_type: cdktf.stringToTerraform(struct!.busType),
    index: cdktf.numberToTerraform(struct!.index),
  }
}


export function templateV2TemplateVersionSpecVmSpecCdRomsDiskAddressToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRomsDiskAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus_type: {
      value: cdktf.stringToHclTerraform(struct!.busType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsDiskAddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecCdRomsDiskAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._busType !== undefined) {
      hasAnyValues = true;
      internalValueResult.busType = this._busType;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecCdRomsDiskAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._busType = undefined;
      this._index = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._busType = value.busType;
      this._index = value.index;
    }
  }

  // bus_type - computed: true, optional: true, required: false
  private _busType?: string; 
  public get busType() {
    return this.getStringAttribute('bus_type');
  }
  public set busType(value: string) {
    this._busType = value;
  }
  public resetBusType() {
    this._busType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busTypeInput() {
    return this._busType;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsDiskAddressList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecCdRomsDiskAddress[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecCdRomsDiskAddressOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecCdRomsDiskAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecCdRoms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#iso_type TemplateV2#iso_type}
  */
  readonly isoType?: string;
  /**
  * backing_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#backing_info TemplateV2#backing_info}
  */
  readonly backingInfo?: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfo[] | cdktf.IResolvable;
  /**
  * disk_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#disk_address TemplateV2#disk_address}
  */
  readonly diskAddress?: TemplateV2TemplateVersionSpecVmSpecCdRomsDiskAddress[] | cdktf.IResolvable;
}

export function templateV2TemplateVersionSpecVmSpecCdRomsToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRoms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iso_type: cdktf.stringToTerraform(struct!.isoType),
    backing_info: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoToTerraform, true)(struct!.backingInfo),
    disk_address: cdktf.listMapper(templateV2TemplateVersionSpecVmSpecCdRomsDiskAddressToTerraform, true)(struct!.diskAddress),
  }
}


export function templateV2TemplateVersionSpecVmSpecCdRomsToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCdRoms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iso_type: {
      value: cdktf.stringToHclTerraform(struct!.isoType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backing_info: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecCdRomsBackingInfoToHclTerraform, true)(struct!.backingInfo),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoList",
    },
    disk_address: {
      value: cdktf.listMapperHcl(templateV2TemplateVersionSpecVmSpecCdRomsDiskAddressToHclTerraform, true)(struct!.diskAddress),
      isBlock: true,
      type: "list",
      storageClassType: "TemplateV2TemplateVersionSpecVmSpecCdRomsDiskAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecCdRoms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isoType !== undefined) {
      hasAnyValues = true;
      internalValueResult.isoType = this._isoType;
    }
    if (this._backingInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backingInfo = this._backingInfo?.internalValue;
    }
    if (this._diskAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAddress = this._diskAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecCdRoms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isoType = undefined;
      this._backingInfo.internalValue = undefined;
      this._diskAddress.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isoType = value.isoType;
      this._backingInfo.internalValue = value.backingInfo;
      this._diskAddress.internalValue = value.diskAddress;
    }
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // iso_type - computed: true, optional: true, required: false
  private _isoType?: string; 
  public get isoType() {
    return this.getStringAttribute('iso_type');
  }
  public set isoType(value: string) {
    this._isoType = value;
  }
  public resetIsoType() {
    this._isoType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isoTypeInput() {
    return this._isoType;
  }

  // links - computed: true, optional: false, required: false
  private _links = new TemplateV2TemplateVersionSpecVmSpecCdRomsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // backing_info - computed: false, optional: true, required: false
  private _backingInfo = new TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfoList(this, "backing_info", false);
  public get backingInfo() {
    return this._backingInfo;
  }
  public putBackingInfo(value: TemplateV2TemplateVersionSpecVmSpecCdRomsBackingInfo[] | cdktf.IResolvable) {
    this._backingInfo.internalValue = value;
  }
  public resetBackingInfo() {
    this._backingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backingInfoInput() {
    return this._backingInfo.internalValue;
  }

  // disk_address - computed: false, optional: true, required: false
  private _diskAddress = new TemplateV2TemplateVersionSpecVmSpecCdRomsDiskAddressList(this, "disk_address", false);
  public get diskAddress() {
    return this._diskAddress;
  }
  public putDiskAddress(value: TemplateV2TemplateVersionSpecVmSpecCdRomsDiskAddress[] | cdktf.IResolvable) {
    this._diskAddress.internalValue = value;
  }
  public resetDiskAddress() {
    this._diskAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAddressInput() {
    return this._diskAddress.internalValue;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecCdRomsList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecCdRoms[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecCdRomsOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecCdRomsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#ext_id TemplateV2#ext_id}
  */
  readonly extId?: string;
}

export function templateV2TemplateVersionSpecVmSpecClusterToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_id: cdktf.stringToTerraform(struct!.extId),
  }
}


export function templateV2TemplateVersionSpecVmSpecClusterToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extId = value.extId;
    }
  }

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecClusterList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecCluster[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecClusterOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecDisksLinks {
}

export function templateV2TemplateVersionSpecVmSpecDisksLinksToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function templateV2TemplateVersionSpecVmSpecDisksLinksToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TemplateV2TemplateVersionSpecVmSpecDisksLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecDisksLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecDisksLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class TemplateV2TemplateVersionSpecVmSpecDisksLinksList extends cdktf.ComplexList {

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecDisksLinksOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecDisksLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#volume_group_ext_id TemplateV2#volume_group_ext_id}
  */
  readonly volumeGroupExtId?: string;
}

export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReferenceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    volume_group_ext_id: cdktf.stringToTerraform(struct!.volumeGroupExtId),
  }
}


export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReferenceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    volume_group_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeGroupExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._volumeGroupExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroupExtId = this._volumeGroupExtId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._volumeGroupExtId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._volumeGroupExtId = value.volumeGroupExtId;
    }
  }

  // volume_group_ext_id - computed: true, optional: true, required: false
  private _volumeGroupExtId?: string; 
  public get volumeGroupExtId() {
    return this.getStringAttribute('volume_group_ext_id');
  }
  public set volumeGroupExtId(value: string) {
    this._volumeGroupExtId = value;
  }
  public resetVolumeGroupExtId() {
    this._volumeGroupExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupExtIdInput() {
    return this._volumeGroupExtId;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReferenceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReference[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReferenceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoAdfsVolumeGroupReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/template_v2#image_ext_id TemplateV2#image_ext_id}
  */
  readonly imageExtId?: string;
}

export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReferenceToTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_ext_id: cdktf.stringToTerraform(struct!.imageExtId),
  }
}


export function templateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReferenceToHclTerraform(struct?: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_ext_id: {
      value: cdktf.stringToHclTerraform(struct!.imageExtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageExtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageExtId = this._imageExtId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageExtId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageExtId = value.imageExtId;
    }
  }

  // image_ext_id - computed: true, optional: true, required: false
  private _imageExtId?: string; 
  public get imageExtId() {
    return this.getStringAttribute('image_ext_id');
  }
  public set imageExtId(value: string) {
    this._imageExtId = value;
  }
  public resetImageExtId() {
    this._imageExtId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageExtIdInput() {
    return this._imageExtId;
  }
}

export class TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReferenceList extends cdktf.ComplexList {
  public internalValue? : TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReference[] | cdktf.IResolvable

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
  public get(index: number): TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReferenceOutputReference {
    return new TemplateV2TemplateVersionSpecVmSpecDisksBackingInfoVmDiskDataSourceReferenceImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
