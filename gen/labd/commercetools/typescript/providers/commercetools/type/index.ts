// https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * [LocalizedString](https://docs.commercetools.com/api/types#localizedstring)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#description Type#description}
  */
  readonly description?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#id Type#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier for the type (max. 256 characters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#key Type#key}
  */
  readonly key: string;
  /**
  * [LocalizedString](https://docs.commercetools.com/api/types#localizedstring)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#name Type#name}
  */
  readonly name: { [key: string]: string };
  /**
  * Defines for which [resources](https://docs.commercetools.com/api/projects/custom-fields#customizable-resources) the type is valid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#resource_type_ids Type#resource_type_ids}
  */
  readonly resourceTypeIds: string[];
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#field Type#field}
  */
  readonly field?: TypeField[] | cdktf.IResolvable;
}
export interface TypeFieldTypeElementTypeLocalizedValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#key Type#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#label Type#label}
  */
  readonly label: { [key: string]: string };
}

export function typeFieldTypeElementTypeLocalizedValueToTerraform(struct?: TypeFieldTypeElementTypeLocalizedValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.label),
  }
}


export function typeFieldTypeElementTypeLocalizedValueToHclTerraform(struct?: TypeFieldTypeElementTypeLocalizedValue | cdktf.IResolvable): any {
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

export class TypeFieldTypeElementTypeLocalizedValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TypeFieldTypeElementTypeLocalizedValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TypeFieldTypeElementTypeLocalizedValue | cdktf.IResolvable | undefined) {
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

export class TypeFieldTypeElementTypeLocalizedValueList extends cdktf.ComplexList {
  public internalValue? : TypeFieldTypeElementTypeLocalizedValue[] | cdktf.IResolvable

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
  public get(index: number): TypeFieldTypeElementTypeLocalizedValueOutputReference {
    return new TypeFieldTypeElementTypeLocalizedValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TypeFieldTypeElementTypeValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#key Type#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#label Type#label}
  */
  readonly label: string;
}

export function typeFieldTypeElementTypeValueToTerraform(struct?: TypeFieldTypeElementTypeValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    label: cdktf.stringToTerraform(struct!.label),
  }
}


export function typeFieldTypeElementTypeValueToHclTerraform(struct?: TypeFieldTypeElementTypeValue | cdktf.IResolvable): any {
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

export class TypeFieldTypeElementTypeValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TypeFieldTypeElementTypeValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TypeFieldTypeElementTypeValue | cdktf.IResolvable | undefined) {
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

export class TypeFieldTypeElementTypeValueList extends cdktf.ComplexList {
  public internalValue? : TypeFieldTypeElementTypeValue[] | cdktf.IResolvable

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
  public get(index: number): TypeFieldTypeElementTypeValueOutputReference {
    return new TypeFieldTypeElementTypeValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TypeFieldTypeElementType {
  /**
  * Name of the field type. Some types require extra fields to be set. Note that changing the type after creating is not supported. You need to delete the attribute and re-add it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#name Type#name}
  */
  readonly name: string;
  /**
  * Resource type the Custom Field can reference. Required when type is `Reference`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#reference_type_id Type#reference_type_id}
  */
  readonly referenceTypeId?: string;
  /**
  * localized_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#localized_value Type#localized_value}
  */
  readonly localizedValue?: TypeFieldTypeElementTypeLocalizedValue[] | cdktf.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#value Type#value}
  */
  readonly value?: TypeFieldTypeElementTypeValue[] | cdktf.IResolvable;
}

export function typeFieldTypeElementTypeToTerraform(struct?: TypeFieldTypeElementTypeOutputReference | TypeFieldTypeElementType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    reference_type_id: cdktf.stringToTerraform(struct!.referenceTypeId),
    localized_value: cdktf.listMapper(typeFieldTypeElementTypeLocalizedValueToTerraform, true)(struct!.localizedValue),
    value: cdktf.listMapper(typeFieldTypeElementTypeValueToTerraform, true)(struct!.value),
  }
}


export function typeFieldTypeElementTypeToHclTerraform(struct?: TypeFieldTypeElementTypeOutputReference | TypeFieldTypeElementType): any {
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
    localized_value: {
      value: cdktf.listMapperHcl(typeFieldTypeElementTypeLocalizedValueToHclTerraform, true)(struct!.localizedValue),
      isBlock: true,
      type: "list",
      storageClassType: "TypeFieldTypeElementTypeLocalizedValueList",
    },
    value: {
      value: cdktf.listMapperHcl(typeFieldTypeElementTypeValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "TypeFieldTypeElementTypeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TypeFieldTypeElementTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TypeFieldTypeElementType | undefined {
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

  public set internalValue(value: TypeFieldTypeElementType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._referenceTypeId = undefined;
      this._localizedValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._referenceTypeId = value.referenceTypeId;
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

  // localized_value - computed: false, optional: true, required: false
  private _localizedValue = new TypeFieldTypeElementTypeLocalizedValueList(this, "localized_value", false);
  public get localizedValue() {
    return this._localizedValue;
  }
  public putLocalizedValue(value: TypeFieldTypeElementTypeLocalizedValue[] | cdktf.IResolvable) {
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
  private _value = new TypeFieldTypeElementTypeValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: TypeFieldTypeElementTypeValue[] | cdktf.IResolvable) {
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
export interface TypeFieldTypeLocalizedValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#key Type#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#label Type#label}
  */
  readonly label: { [key: string]: string };
}

export function typeFieldTypeLocalizedValueToTerraform(struct?: TypeFieldTypeLocalizedValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.label),
  }
}


export function typeFieldTypeLocalizedValueToHclTerraform(struct?: TypeFieldTypeLocalizedValue | cdktf.IResolvable): any {
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

export class TypeFieldTypeLocalizedValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TypeFieldTypeLocalizedValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TypeFieldTypeLocalizedValue | cdktf.IResolvable | undefined) {
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

export class TypeFieldTypeLocalizedValueList extends cdktf.ComplexList {
  public internalValue? : TypeFieldTypeLocalizedValue[] | cdktf.IResolvable

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
  public get(index: number): TypeFieldTypeLocalizedValueOutputReference {
    return new TypeFieldTypeLocalizedValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TypeFieldTypeValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#key Type#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#label Type#label}
  */
  readonly label: string;
}

export function typeFieldTypeValueToTerraform(struct?: TypeFieldTypeValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    label: cdktf.stringToTerraform(struct!.label),
  }
}


export function typeFieldTypeValueToHclTerraform(struct?: TypeFieldTypeValue | cdktf.IResolvable): any {
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

export class TypeFieldTypeValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TypeFieldTypeValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TypeFieldTypeValue | cdktf.IResolvable | undefined) {
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

export class TypeFieldTypeValueList extends cdktf.ComplexList {
  public internalValue? : TypeFieldTypeValue[] | cdktf.IResolvable

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
  public get(index: number): TypeFieldTypeValueOutputReference {
    return new TypeFieldTypeValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TypeFieldType {
  /**
  * Name of the field type. Some types require extra fields to be set. Note that changing the type after creating is not supported. You need to delete the attribute and re-add it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#name Type#name}
  */
  readonly name: string;
  /**
  * Resource type the Custom Field can reference. Required when type is `Reference`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#reference_type_id Type#reference_type_id}
  */
  readonly referenceTypeId?: string;
  /**
  * element_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#element_type Type#element_type}
  */
  readonly elementType?: TypeFieldTypeElementType;
  /**
  * localized_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#localized_value Type#localized_value}
  */
  readonly localizedValue?: TypeFieldTypeLocalizedValue[] | cdktf.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#value Type#value}
  */
  readonly value?: TypeFieldTypeValue[] | cdktf.IResolvable;
}

export function typeFieldTypeToTerraform(struct?: TypeFieldTypeOutputReference | TypeFieldType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    reference_type_id: cdktf.stringToTerraform(struct!.referenceTypeId),
    element_type: typeFieldTypeElementTypeToTerraform(struct!.elementType),
    localized_value: cdktf.listMapper(typeFieldTypeLocalizedValueToTerraform, true)(struct!.localizedValue),
    value: cdktf.listMapper(typeFieldTypeValueToTerraform, true)(struct!.value),
  }
}


export function typeFieldTypeToHclTerraform(struct?: TypeFieldTypeOutputReference | TypeFieldType): any {
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
    element_type: {
      value: typeFieldTypeElementTypeToHclTerraform(struct!.elementType),
      isBlock: true,
      type: "list",
      storageClassType: "TypeFieldTypeElementTypeList",
    },
    localized_value: {
      value: cdktf.listMapperHcl(typeFieldTypeLocalizedValueToHclTerraform, true)(struct!.localizedValue),
      isBlock: true,
      type: "list",
      storageClassType: "TypeFieldTypeLocalizedValueList",
    },
    value: {
      value: cdktf.listMapperHcl(typeFieldTypeValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "TypeFieldTypeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TypeFieldTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TypeFieldType | undefined {
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

  public set internalValue(value: TypeFieldType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._referenceTypeId = undefined;
      this._elementType.internalValue = undefined;
      this._localizedValue.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._referenceTypeId = value.referenceTypeId;
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

  // element_type - computed: false, optional: true, required: false
  private _elementType = new TypeFieldTypeElementTypeOutputReference(this, "element_type");
  public get elementType() {
    return this._elementType;
  }
  public putElementType(value: TypeFieldTypeElementType) {
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
  private _localizedValue = new TypeFieldTypeLocalizedValueList(this, "localized_value", false);
  public get localizedValue() {
    return this._localizedValue;
  }
  public putLocalizedValue(value: TypeFieldTypeLocalizedValue[] | cdktf.IResolvable) {
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
  private _value = new TypeFieldTypeValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: TypeFieldTypeValue[] | cdktf.IResolvable) {
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
export interface TypeField {
  /**
  * [TextInputHint](https://docs.commercetools.com/api/projects/types#textinputhint) Provides a visual representation type for this field. It is only relevant for string-based field types like StringType and LocalizedStringType
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#input_hint Type#input_hint}
  */
  readonly inputHint?: string;
  /**
  * A human-readable label for the field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#label Type#label}
  */
  readonly label: { [key: string]: string };
  /**
  * The name of the field.
  * The name must be between two and 36 characters long and can contain the ASCII letters A to Z in lowercase or uppercase, digits, underscores (_) and the hyphen-minus (-).
  * The name must be unique for a given resource type ID. In case there is a field with the same name in another type it has to have the same FieldType also
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#name Type#name}
  */
  readonly name: string;
  /**
  * Whether the field is required to have a value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#required Type#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#type Type#type}
  */
  readonly type: TypeFieldType;
}

export function typeFieldToTerraform(struct?: TypeField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_hint: cdktf.stringToTerraform(struct!.inputHint),
    label: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.label),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    type: typeFieldTypeToTerraform(struct!.type),
  }
}


export function typeFieldToHclTerraform(struct?: TypeField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_hint: {
      value: cdktf.stringToHclTerraform(struct!.inputHint),
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
    type: {
      value: typeFieldTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "list",
      storageClassType: "TypeFieldTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TypeFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TypeField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputHint = this._inputHint;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TypeField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inputHint = undefined;
      this._label = undefined;
      this._name = undefined;
      this._required = undefined;
      this._type.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inputHint = value.inputHint;
      this._label = value.label;
      this._name = value.name;
      this._required = value.required;
      this._type.internalValue = value.type;
    }
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

  // type - computed: false, optional: false, required: true
  private _type = new TypeFieldTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: TypeFieldType) {
    this._type.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}

export class TypeFieldList extends cdktf.ComplexList {
  public internalValue? : TypeField[] | cdktf.IResolvable

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
  public get(index: number): TypeFieldOutputReference {
    return new TypeFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type commercetools_type}
*/
export class Type extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commercetools_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Type resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Type to import
  * @param importFromId The id of the existing Type that should be imported. Refer to the {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Type to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commercetools_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/type commercetools_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TypeConfig
  */
  public constructor(scope: Construct, id: string, config: TypeConfig) {
    super(scope, id, {
      terraformResourceType: 'commercetools_type',
      terraformGeneratorMetadata: {
        providerName: 'commercetools',
        providerVersion: '1.21.1'
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
    this._resourceTypeIds = config.resourceTypeIds;
    this._field.internalValue = config.field;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: { [key: string]: string }; 
  public get description() {
    return this.getStringMapAttribute('description');
  }
  public set description(value: { [key: string]: string }) {
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

  // name - computed: false, optional: false, required: true
  private _name?: { [key: string]: string }; 
  public get name() {
    return this.getStringMapAttribute('name');
  }
  public set name(value: { [key: string]: string }) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_type_ids - computed: false, optional: false, required: true
  private _resourceTypeIds?: string[]; 
  public get resourceTypeIds() {
    return this.getListAttribute('resource_type_ids');
  }
  public set resourceTypeIds(value: string[]) {
    this._resourceTypeIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeIdsInput() {
    return this._resourceTypeIds;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // field - computed: false, optional: true, required: false
  private _field = new TypeFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: TypeField[] | cdktf.IResolvable) {
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
      description: cdktf.hashMapper(cdktf.stringToTerraform)(this._description),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.hashMapper(cdktf.stringToTerraform)(this._name),
      resource_type_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceTypeIds),
      field: cdktf.listMapper(typeFieldToTerraform, true)(this._field.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._description),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._name),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      resource_type_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceTypeIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      field: {
        value: cdktf.listMapperHcl(typeFieldToHclTerraform, true)(this._field.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TypeFieldList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
