// https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProductTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#description ProductType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#id ProductType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-specific unique identifier for the product type (max. 256 characters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#key ProductType#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#name ProductType#name}
  */
  readonly name: string;
  /**
  * attribute block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#attribute ProductType#attribute}
  */
  readonly attribute?: ProductTypeAttribute[] | cdktf.IResolvable;
}
export interface ProductTypeAttributeTypeElementTypeLocalizedValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#key ProductType#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#label ProductType#label}
  */
  readonly label: { [key: string]: string };
}

export function productTypeAttributeTypeElementTypeLocalizedValueToTerraform(struct?: ProductTypeAttributeTypeElementTypeLocalizedValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.label),
  }
}


export function productTypeAttributeTypeElementTypeLocalizedValueToHclTerraform(struct?: ProductTypeAttributeTypeElementTypeLocalizedValue | cdktf.IResolvable): any {
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
    label: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.label),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProductTypeAttributeTypeElementTypeLocalizedValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProductTypeAttributeTypeElementTypeLocalizedValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductTypeAttributeTypeElementTypeLocalizedValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._label = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._label = value.label;
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

  // label - computed: false, optional: false, required: true
  private _label?: { [key: string]: string }; 
  public get label() {
    return this.getStringMapAttribute('label');
  }
  public set label(value: { [key: string]: string }) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}

export class ProductTypeAttributeTypeElementTypeLocalizedValueList extends cdktf.ComplexList {
  public internalValue? : ProductTypeAttributeTypeElementTypeLocalizedValue[] | cdktf.IResolvable

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
  public get(index: number): ProductTypeAttributeTypeElementTypeLocalizedValueOutputReference {
    return new ProductTypeAttributeTypeElementTypeLocalizedValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProductTypeAttributeTypeElementTypeValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#key ProductType#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#label ProductType#label}
  */
  readonly label: string;
}

export function productTypeAttributeTypeElementTypeValueToTerraform(struct?: ProductTypeAttributeTypeElementTypeValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    label: cdktf.stringToTerraform(struct!.label),
  }
}


export function productTypeAttributeTypeElementTypeValueToHclTerraform(struct?: ProductTypeAttributeTypeElementTypeValue | cdktf.IResolvable): any {
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
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProductTypeAttributeTypeElementTypeValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProductTypeAttributeTypeElementTypeValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductTypeAttributeTypeElementTypeValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._label = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._label = value.label;
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}

export class ProductTypeAttributeTypeElementTypeValueList extends cdktf.ComplexList {
  public internalValue? : ProductTypeAttributeTypeElementTypeValue[] | cdktf.IResolvable

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
  public get(index: number): ProductTypeAttributeTypeElementTypeValueOutputReference {
    return new ProductTypeAttributeTypeElementTypeValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProductTypeAttributeTypeElementType {
  /**
  * Name of the field type. Some types require extra fields to be set. Note that changing the type after creating is not supported. You need to delete the attribute and re-add it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#name ProductType#name}
  */
  readonly name: string;
  /**
  * Resource type the Custom Field can reference. Required when type is `reference`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#reference_type_id ProductType#reference_type_id}
  */
  readonly referenceTypeId?: string;
  /**
  * Reference to another product type. Required when type is `nested`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#type_reference ProductType#type_reference}
  */
  readonly typeReference?: string;
  /**
  * localized_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#localized_value ProductType#localized_value}
  */
  readonly localizedValue?: ProductTypeAttributeTypeElementTypeLocalizedValue[] | cdktf.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#value ProductType#value}
  */
  readonly value?: ProductTypeAttributeTypeElementTypeValue[] | cdktf.IResolvable;
}

export function productTypeAttributeTypeElementTypeToTerraform(struct?: ProductTypeAttributeTypeElementTypeOutputReference | ProductTypeAttributeTypeElementType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    reference_type_id: cdktf.stringToTerraform(struct!.referenceTypeId),
    type_reference: cdktf.stringToTerraform(struct!.typeReference),
    localized_value: cdktf.listMapper(productTypeAttributeTypeElementTypeLocalizedValueToTerraform, true)(struct!.localizedValue),
    value: cdktf.listMapper(productTypeAttributeTypeElementTypeValueToTerraform, true)(struct!.value),
  }
}


export function productTypeAttributeTypeElementTypeToHclTerraform(struct?: ProductTypeAttributeTypeElementTypeOutputReference | ProductTypeAttributeTypeElementType): any {
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
    reference_type_id: {
      value: cdktf.stringToHclTerraform(struct!.referenceTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_reference: {
      value: cdktf.stringToHclTerraform(struct!.typeReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    localized_value: {
      value: cdktf.listMapperHcl(productTypeAttributeTypeElementTypeLocalizedValueToHclTerraform, true)(struct!.localizedValue),
      isBlock: true,
      type: "list",
      storageClassType: "ProductTypeAttributeTypeElementTypeLocalizedValueList",
    },
    value: {
      value: cdktf.listMapperHcl(productTypeAttributeTypeElementTypeValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ProductTypeAttributeTypeElementTypeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProductTypeAttributeTypeElementTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProductTypeAttributeTypeElementType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._referenceTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceTypeId = this._referenceTypeId;
    }
    if (this._typeReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeReference = this._typeReference;
    }
    if (this._localizedValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localizedValue = this._localizedValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductTypeAttributeTypeElementType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._referenceTypeId = undefined;
      this._typeReference = undefined;
      this._localizedValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._referenceTypeId = value.referenceTypeId;
      this._typeReference = value.typeReference;
      this._localizedValue.internalValue = value.localizedValue;
      this._value.internalValue = value.value;
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

  // reference_type_id - computed: false, optional: true, required: false
  private _referenceTypeId?: string; 
  public get referenceTypeId() {
    return this.getStringAttribute('reference_type_id');
  }
  public set referenceTypeId(value: string) {
    this._referenceTypeId = value;
  }
  public resetReferenceTypeId() {
    this._referenceTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceTypeIdInput() {
    return this._referenceTypeId;
  }

  // type_reference - computed: false, optional: true, required: false
  private _typeReference?: string; 
  public get typeReference() {
    return this.getStringAttribute('type_reference');
  }
  public set typeReference(value: string) {
    this._typeReference = value;
  }
  public resetTypeReference() {
    this._typeReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeReferenceInput() {
    return this._typeReference;
  }

  // localized_value - computed: false, optional: true, required: false
  private _localizedValue = new ProductTypeAttributeTypeElementTypeLocalizedValueList(this, "localized_value", false);
  public get localizedValue() {
    return this._localizedValue;
  }
  public putLocalizedValue(value: ProductTypeAttributeTypeElementTypeLocalizedValue[] | cdktf.IResolvable) {
    this._localizedValue.internalValue = value;
  }
  public resetLocalizedValue() {
    this._localizedValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localizedValueInput() {
    return this._localizedValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ProductTypeAttributeTypeElementTypeValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: ProductTypeAttributeTypeElementTypeValue[] | cdktf.IResolvable) {
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
export interface ProductTypeAttributeTypeLocalizedValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#key ProductType#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#label ProductType#label}
  */
  readonly label: { [key: string]: string };
}

export function productTypeAttributeTypeLocalizedValueToTerraform(struct?: ProductTypeAttributeTypeLocalizedValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.label),
  }
}


export function productTypeAttributeTypeLocalizedValueToHclTerraform(struct?: ProductTypeAttributeTypeLocalizedValue | cdktf.IResolvable): any {
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
    label: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.label),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProductTypeAttributeTypeLocalizedValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProductTypeAttributeTypeLocalizedValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductTypeAttributeTypeLocalizedValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._label = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._label = value.label;
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

  // label - computed: false, optional: false, required: true
  private _label?: { [key: string]: string }; 
  public get label() {
    return this.getStringMapAttribute('label');
  }
  public set label(value: { [key: string]: string }) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}

export class ProductTypeAttributeTypeLocalizedValueList extends cdktf.ComplexList {
  public internalValue? : ProductTypeAttributeTypeLocalizedValue[] | cdktf.IResolvable

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
  public get(index: number): ProductTypeAttributeTypeLocalizedValueOutputReference {
    return new ProductTypeAttributeTypeLocalizedValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProductTypeAttributeTypeValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#key ProductType#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#label ProductType#label}
  */
  readonly label: string;
}

export function productTypeAttributeTypeValueToTerraform(struct?: ProductTypeAttributeTypeValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    label: cdktf.stringToTerraform(struct!.label),
  }
}


export function productTypeAttributeTypeValueToHclTerraform(struct?: ProductTypeAttributeTypeValue | cdktf.IResolvable): any {
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
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProductTypeAttributeTypeValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProductTypeAttributeTypeValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductTypeAttributeTypeValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._label = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._label = value.label;
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }
}

export class ProductTypeAttributeTypeValueList extends cdktf.ComplexList {
  public internalValue? : ProductTypeAttributeTypeValue[] | cdktf.IResolvable

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
  public get(index: number): ProductTypeAttributeTypeValueOutputReference {
    return new ProductTypeAttributeTypeValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProductTypeAttributeType {
  /**
  * Name of the field type. Some types require extra fields to be set. Note that changing the type after creating is not supported. You need to delete the attribute and re-add it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#name ProductType#name}
  */
  readonly name: string;
  /**
  * Resource type the Custom Field can reference. Required when type is `reference`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#reference_type_id ProductType#reference_type_id}
  */
  readonly referenceTypeId?: string;
  /**
  * Reference to another product type. Required when type is `nested`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#type_reference ProductType#type_reference}
  */
  readonly typeReference?: string;
  /**
  * element_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#element_type ProductType#element_type}
  */
  readonly elementType?: ProductTypeAttributeTypeElementType;
  /**
  * localized_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#localized_value ProductType#localized_value}
  */
  readonly localizedValue?: ProductTypeAttributeTypeLocalizedValue[] | cdktf.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#value ProductType#value}
  */
  readonly value?: ProductTypeAttributeTypeValue[] | cdktf.IResolvable;
}

export function productTypeAttributeTypeToTerraform(struct?: ProductTypeAttributeTypeOutputReference | ProductTypeAttributeType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    reference_type_id: cdktf.stringToTerraform(struct!.referenceTypeId),
    type_reference: cdktf.stringToTerraform(struct!.typeReference),
    element_type: productTypeAttributeTypeElementTypeToTerraform(struct!.elementType),
    localized_value: cdktf.listMapper(productTypeAttributeTypeLocalizedValueToTerraform, true)(struct!.localizedValue),
    value: cdktf.listMapper(productTypeAttributeTypeValueToTerraform, true)(struct!.value),
  }
}


export function productTypeAttributeTypeToHclTerraform(struct?: ProductTypeAttributeTypeOutputReference | ProductTypeAttributeType): any {
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
    reference_type_id: {
      value: cdktf.stringToHclTerraform(struct!.referenceTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_reference: {
      value: cdktf.stringToHclTerraform(struct!.typeReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element_type: {
      value: productTypeAttributeTypeElementTypeToHclTerraform(struct!.elementType),
      isBlock: true,
      type: "list",
      storageClassType: "ProductTypeAttributeTypeElementTypeList",
    },
    localized_value: {
      value: cdktf.listMapperHcl(productTypeAttributeTypeLocalizedValueToHclTerraform, true)(struct!.localizedValue),
      isBlock: true,
      type: "list",
      storageClassType: "ProductTypeAttributeTypeLocalizedValueList",
    },
    value: {
      value: cdktf.listMapperHcl(productTypeAttributeTypeValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ProductTypeAttributeTypeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProductTypeAttributeTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProductTypeAttributeType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._referenceTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceTypeId = this._referenceTypeId;
    }
    if (this._typeReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeReference = this._typeReference;
    }
    if (this._elementType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementType = this._elementType?.internalValue;
    }
    if (this._localizedValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localizedValue = this._localizedValue?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductTypeAttributeType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._referenceTypeId = undefined;
      this._typeReference = undefined;
      this._elementType.internalValue = undefined;
      this._localizedValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._referenceTypeId = value.referenceTypeId;
      this._typeReference = value.typeReference;
      this._elementType.internalValue = value.elementType;
      this._localizedValue.internalValue = value.localizedValue;
      this._value.internalValue = value.value;
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

  // reference_type_id - computed: false, optional: true, required: false
  private _referenceTypeId?: string; 
  public get referenceTypeId() {
    return this.getStringAttribute('reference_type_id');
  }
  public set referenceTypeId(value: string) {
    this._referenceTypeId = value;
  }
  public resetReferenceTypeId() {
    this._referenceTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceTypeIdInput() {
    return this._referenceTypeId;
  }

  // type_reference - computed: false, optional: true, required: false
  private _typeReference?: string; 
  public get typeReference() {
    return this.getStringAttribute('type_reference');
  }
  public set typeReference(value: string) {
    this._typeReference = value;
  }
  public resetTypeReference() {
    this._typeReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeReferenceInput() {
    return this._typeReference;
  }

  // element_type - computed: false, optional: true, required: false
  private _elementType = new ProductTypeAttributeTypeElementTypeOutputReference(this, "element_type");
  public get elementType() {
    return this._elementType;
  }
  public putElementType(value: ProductTypeAttributeTypeElementType) {
    this._elementType.internalValue = value;
  }
  public resetElementType() {
    this._elementType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementTypeInput() {
    return this._elementType.internalValue;
  }

  // localized_value - computed: false, optional: true, required: false
  private _localizedValue = new ProductTypeAttributeTypeLocalizedValueList(this, "localized_value", false);
  public get localizedValue() {
    return this._localizedValue;
  }
  public putLocalizedValue(value: ProductTypeAttributeTypeLocalizedValue[] | cdktf.IResolvable) {
    this._localizedValue.internalValue = value;
  }
  public resetLocalizedValue() {
    this._localizedValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localizedValueInput() {
    return this._localizedValue.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ProductTypeAttributeTypeValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: ProductTypeAttributeTypeValue[] | cdktf.IResolvable) {
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
export interface ProductTypeAttribute {
  /**
  * Describes how an attribute or a set of attributes should be validated across all variants of a product. See also [Attribute Constraint](https://docs.commercetools.com/api/projects/productTypes#attributeconstraint-enum)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#constraint ProductType#constraint}
  */
  readonly constraint?: string;
  /**
  * Provides a visual representation type for this attribute. only relevant for text-based attribute types like TextType and LocalizableTextType
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#input_hint ProductType#input_hint}
  */
  readonly inputHint?: string;
  /**
  * Additional information about the attribute that aids content managers when setting product details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#input_tip ProductType#input_tip}
  */
  readonly inputTip?: { [key: string]: string };
  /**
  * A human-readable label for the attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#label ProductType#label}
  */
  readonly label: { [key: string]: string };
  /**
  * Specifies whether the Attribute is defined at the Product or Variant level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#level ProductType#level}
  */
  readonly level?: string;
  /**
  * The unique name of the attribute used in the API. The name must be between two and 256 characters long and can contain the ASCII letters A to Z in lowercase or uppercase, digits, underscores (_) and the hyphen-minus (-).
  * When using the same name for an attribute in two or more product types all fields of the AttributeDefinition of this attribute need to be the same across the product types, otherwise an AttributeDefinitionAlreadyExists error code will be returned. An exception to this are the values of an enum or lenum type and sets thereof
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#name ProductType#name}
  */
  readonly name: string;
  /**
  * Whether the attribute is required to have a value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#required ProductType#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Whether the attribute's values should generally be activated in product search
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#searchable ProductType#searchable}
  */
  readonly searchable?: boolean | cdktf.IResolvable;
  /**
  * type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#type ProductType#type}
  */
  readonly type: ProductTypeAttributeType;
}

export function productTypeAttributeToTerraform(struct?: ProductTypeAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constraint: cdktf.stringToTerraform(struct!.constraint),
    input_hint: cdktf.stringToTerraform(struct!.inputHint),
    input_tip: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.inputTip),
    label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.label),
    level: cdktf.stringToTerraform(struct!.level),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    searchable: cdktf.booleanToTerraform(struct!.searchable),
    type: productTypeAttributeTypeToTerraform(struct!.type),
  }
}


export function productTypeAttributeToHclTerraform(struct?: ProductTypeAttribute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constraint: {
      value: cdktf.stringToHclTerraform(struct!.constraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_hint: {
      value: cdktf.stringToHclTerraform(struct!.inputHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_tip: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.inputTip),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    label: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.label),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    searchable: {
      value: cdktf.booleanToHclTerraform(struct!.searchable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: productTypeAttributeTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "list",
      storageClassType: "ProductTypeAttributeTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProductTypeAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProductTypeAttribute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraint = this._constraint;
    }
    if (this._inputHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputHint = this._inputHint;
    }
    if (this._inputTip !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputTip = this._inputTip;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._searchable !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchable = this._searchable;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProductTypeAttribute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._constraint = undefined;
      this._inputHint = undefined;
      this._inputTip = undefined;
      this._label = undefined;
      this._level = undefined;
      this._name = undefined;
      this._required = undefined;
      this._searchable = undefined;
      this._type.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._constraint = value.constraint;
      this._inputHint = value.inputHint;
      this._inputTip = value.inputTip;
      this._label = value.label;
      this._level = value.level;
      this._name = value.name;
      this._required = value.required;
      this._searchable = value.searchable;
      this._type.internalValue = value.type;
    }
  }

  // constraint - computed: false, optional: true, required: false
  private _constraint?: string; 
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  public resetConstraint() {
    this._constraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint;
  }

  // input_hint - computed: false, optional: true, required: false
  private _inputHint?: string; 
  public get inputHint() {
    return this.getStringAttribute('input_hint');
  }
  public set inputHint(value: string) {
    this._inputHint = value;
  }
  public resetInputHint() {
    this._inputHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputHintInput() {
    return this._inputHint;
  }

  // input_tip - computed: false, optional: true, required: false
  private _inputTip?: { [key: string]: string }; 
  public get inputTip() {
    return this.getStringMapAttribute('input_tip');
  }
  public set inputTip(value: { [key: string]: string }) {
    this._inputTip = value;
  }
  public resetInputTip() {
    this._inputTip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTipInput() {
    return this._inputTip;
  }

  // label - computed: false, optional: false, required: true
  private _label?: { [key: string]: string }; 
  public get label() {
    return this.getStringMapAttribute('label');
  }
  public set label(value: { [key: string]: string }) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // searchable - computed: false, optional: true, required: false
  private _searchable?: boolean | cdktf.IResolvable; 
  public get searchable() {
    return this.getBooleanAttribute('searchable');
  }
  public set searchable(value: boolean | cdktf.IResolvable) {
    this._searchable = value;
  }
  public resetSearchable() {
    this._searchable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchableInput() {
    return this._searchable;
  }

  // type - computed: false, optional: false, required: true
  private _type = new ProductTypeAttributeTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: ProductTypeAttributeType) {
    this._type.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}

export class ProductTypeAttributeList extends cdktf.ComplexList {
  public internalValue? : ProductTypeAttribute[] | cdktf.IResolvable

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
  public get(index: number): ProductTypeAttributeOutputReference {
    return new ProductTypeAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type commercetools_product_type}
*/
export class ProductType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commercetools_product_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProductType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProductType to import
  * @param importFromId The id of the existing ProductType that should be imported. Refer to the {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProductType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commercetools_product_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/product_type commercetools_product_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProductTypeConfig
  */
  public constructor(scope: Construct, id: string, config: ProductTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'commercetools_product_type',
      terraformGeneratorMetadata: {
        providerName: 'commercetools',
        providerVersion: '1.21.1',
        providerVersionConstraint: '1.21.1'
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
    this._key = config.key;
    this._name = config.name;
    this._attribute.internalValue = config.attribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute = new ProductTypeAttributeList(this, "attribute", false);
  public get attribute() {
    return this._attribute;
  }
  public putAttribute(value: ProductTypeAttribute[] | cdktf.IResolvable) {
    this._attribute.internalValue = value;
  }
  public resetAttribute() {
    this._attribute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      attribute: cdktf.listMapper(productTypeAttributeToTerraform, true)(this._attribute.internalValue),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      attribute: {
        value: cdktf.listMapperHcl(productTypeAttributeToHclTerraform, true)(this._attribute.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProductTypeAttributeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
