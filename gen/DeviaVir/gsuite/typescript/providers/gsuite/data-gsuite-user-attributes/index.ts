// https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGsuiteUserAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#id DataGsuiteUserAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * bool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#bool DataGsuiteUserAttributes#bool}
  */
  readonly bool?: DataGsuiteUserAttributesBool[] | cdktf.IResolvable;
  /**
  * bools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#bools DataGsuiteUserAttributes#bools}
  */
  readonly bools?: DataGsuiteUserAttributesBools[] | cdktf.IResolvable;
  /**
  * date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#date DataGsuiteUserAttributes#date}
  */
  readonly date?: DataGsuiteUserAttributesDate[] | cdktf.IResolvable;
  /**
  * dates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#dates DataGsuiteUserAttributes#dates}
  */
  readonly dates?: DataGsuiteUserAttributesDates[] | cdktf.IResolvable;
  /**
  * double block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#double DataGsuiteUserAttributes#double}
  */
  readonly double?: DataGsuiteUserAttributesDouble[] | cdktf.IResolvable;
  /**
  * doubles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#doubles DataGsuiteUserAttributes#doubles}
  */
  readonly doubles?: DataGsuiteUserAttributesDoubles[] | cdktf.IResolvable;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#email DataGsuiteUserAttributes#email}
  */
  readonly email?: DataGsuiteUserAttributesEmail[] | cdktf.IResolvable;
  /**
  * emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#emails DataGsuiteUserAttributes#emails}
  */
  readonly emails?: DataGsuiteUserAttributesEmails[] | cdktf.IResolvable;
  /**
  * integer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#integer DataGsuiteUserAttributes#integer}
  */
  readonly integer?: DataGsuiteUserAttributesInteger[] | cdktf.IResolvable;
  /**
  * integers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#integers DataGsuiteUserAttributes#integers}
  */
  readonly integers?: DataGsuiteUserAttributesIntegers[] | cdktf.IResolvable;
  /**
  * phone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#phone DataGsuiteUserAttributes#phone}
  */
  readonly phone?: DataGsuiteUserAttributesPhone[] | cdktf.IResolvable;
  /**
  * phones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#phones DataGsuiteUserAttributes#phones}
  */
  readonly phones?: DataGsuiteUserAttributesPhones[] | cdktf.IResolvable;
  /**
  * string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#string DataGsuiteUserAttributes#string}
  */
  readonly string?: DataGsuiteUserAttributesString[] | cdktf.IResolvable;
  /**
  * strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#strings DataGsuiteUserAttributes#strings}
  */
  readonly strings?: DataGsuiteUserAttributesStrings[] | cdktf.IResolvable;
}
export interface DataGsuiteUserAttributesBool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#name DataGsuiteUserAttributes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#value DataGsuiteUserAttributes#value}
  */
  readonly value: boolean | cdktf.IResolvable;
}

export function dataGsuiteUserAttributesBoolToTerraform(struct?: DataGsuiteUserAttributesBool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function dataGsuiteUserAttributesBoolToHclTerraform(struct?: DataGsuiteUserAttributesBool | cdktf.IResolvable): any {
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
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGsuiteUserAttributesBoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGsuiteUserAttributesBool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGsuiteUserAttributesBool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataGsuiteUserAttributesBoolList extends cdktf.ComplexList {
  public internalValue? : DataGsuiteUserAttributesBool[] | cdktf.IResolvable

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
  public get(index: number): DataGsuiteUserAttributesBoolOutputReference {
    return new DataGsuiteUserAttributesBoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGsuiteUserAttributesBools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#name DataGsuiteUserAttributes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#value DataGsuiteUserAttributes#value}
  */
  readonly value: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable;
}

export function dataGsuiteUserAttributesBoolsToTerraform(struct?: DataGsuiteUserAttributesBools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.booleanToTerraform, false)(struct!.value),
  }
}


export function dataGsuiteUserAttributesBoolsToHclTerraform(struct?: DataGsuiteUserAttributesBools | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.booleanToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "booleanList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGsuiteUserAttributesBoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGsuiteUserAttributesBools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGsuiteUserAttributesBools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable; 
  public get value() {
    return this.interpolationForAttribute('value');
  }
  public set value(value: Array<boolean | cdktf.IResolvable> | cdktf.IResolvable) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataGsuiteUserAttributesBoolsList extends cdktf.ComplexList {
  public internalValue? : DataGsuiteUserAttributesBools[] | cdktf.IResolvable

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
  public get(index: number): DataGsuiteUserAttributesBoolsOutputReference {
    return new DataGsuiteUserAttributesBoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGsuiteUserAttributesDate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#name DataGsuiteUserAttributes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#value DataGsuiteUserAttributes#value}
  */
  readonly value: string;
}

export function dataGsuiteUserAttributesDateToTerraform(struct?: DataGsuiteUserAttributesDate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataGsuiteUserAttributesDateToHclTerraform(struct?: DataGsuiteUserAttributesDate | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGsuiteUserAttributesDateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGsuiteUserAttributesDate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGsuiteUserAttributesDate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class DataGsuiteUserAttributesDateList extends cdktf.ComplexList {
  public internalValue? : DataGsuiteUserAttributesDate[] | cdktf.IResolvable

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
  public get(index: number): DataGsuiteUserAttributesDateOutputReference {
    return new DataGsuiteUserAttributesDateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGsuiteUserAttributesDates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#name DataGsuiteUserAttributes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#value DataGsuiteUserAttributes#value}
  */
  readonly value: string[];
}

export function dataGsuiteUserAttributesDatesToTerraform(struct?: DataGsuiteUserAttributesDates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function dataGsuiteUserAttributesDatesToHclTerraform(struct?: DataGsuiteUserAttributesDates | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGsuiteUserAttributesDatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGsuiteUserAttributesDates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGsuiteUserAttributesDates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataGsuiteUserAttributesDatesList extends cdktf.ComplexList {
  public internalValue? : DataGsuiteUserAttributesDates[] | cdktf.IResolvable

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
  public get(index: number): DataGsuiteUserAttributesDatesOutputReference {
    return new DataGsuiteUserAttributesDatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGsuiteUserAttributesDouble {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#name DataGsuiteUserAttributes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#value DataGsuiteUserAttributes#value}
  */
  readonly value: number;
}

export function dataGsuiteUserAttributesDoubleToTerraform(struct?: DataGsuiteUserAttributesDouble | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataGsuiteUserAttributesDoubleToHclTerraform(struct?: DataGsuiteUserAttributesDouble | cdktf.IResolvable): any {
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
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGsuiteUserAttributesDoubleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGsuiteUserAttributesDouble | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGsuiteUserAttributesDouble | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataGsuiteUserAttributesDoubleList extends cdktf.ComplexList {
  public internalValue? : DataGsuiteUserAttributesDouble[] | cdktf.IResolvable

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
  public get(index: number): DataGsuiteUserAttributesDoubleOutputReference {
    return new DataGsuiteUserAttributesDoubleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGsuiteUserAttributesDoubles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#name DataGsuiteUserAttributes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#value DataGsuiteUserAttributes#value}
  */
  readonly value: number[];
}

export function dataGsuiteUserAttributesDoublesToTerraform(struct?: DataGsuiteUserAttributesDoubles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.value),
  }
}


export function dataGsuiteUserAttributesDoublesToHclTerraform(struct?: DataGsuiteUserAttributesDoubles | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGsuiteUserAttributesDoublesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGsuiteUserAttributesDoubles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGsuiteUserAttributesDoubles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: number[]; 
  public get value() {
    return this.getNumberListAttribute('value');
  }
  public set value(value: number[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataGsuiteUserAttributesDoublesList extends cdktf.ComplexList {
  public internalValue? : DataGsuiteUserAttributesDoubles[] | cdktf.IResolvable

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
  public get(index: number): DataGsuiteUserAttributesDoublesOutputReference {
    return new DataGsuiteUserAttributesDoublesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGsuiteUserAttributesEmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#name DataGsuiteUserAttributes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#value DataGsuiteUserAttributes#value}
  */
  readonly value: string;
}

export function dataGsuiteUserAttributesEmailToTerraform(struct?: DataGsuiteUserAttributesEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataGsuiteUserAttributesEmailToHclTerraform(struct?: DataGsuiteUserAttributesEmail | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGsuiteUserAttributesEmailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGsuiteUserAttributesEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGsuiteUserAttributesEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class DataGsuiteUserAttributesEmailList extends cdktf.ComplexList {
  public internalValue? : DataGsuiteUserAttributesEmail[] | cdktf.IResolvable

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
  public get(index: number): DataGsuiteUserAttributesEmailOutputReference {
    return new DataGsuiteUserAttributesEmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGsuiteUserAttributesEmails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#name DataGsuiteUserAttributes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#value DataGsuiteUserAttributes#value}
  */
  readonly value: string[];
}

export function dataGsuiteUserAttributesEmailsToTerraform(struct?: DataGsuiteUserAttributesEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function dataGsuiteUserAttributesEmailsToHclTerraform(struct?: DataGsuiteUserAttributesEmails | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGsuiteUserAttributesEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGsuiteUserAttributesEmails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGsuiteUserAttributesEmails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataGsuiteUserAttributesEmailsList extends cdktf.ComplexList {
  public internalValue? : DataGsuiteUserAttributesEmails[] | cdktf.IResolvable

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
  public get(index: number): DataGsuiteUserAttributesEmailsOutputReference {
    return new DataGsuiteUserAttributesEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGsuiteUserAttributesInteger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#name DataGsuiteUserAttributes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#value DataGsuiteUserAttributes#value}
  */
  readonly value: number;
}

export function dataGsuiteUserAttributesIntegerToTerraform(struct?: DataGsuiteUserAttributesInteger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataGsuiteUserAttributesIntegerToHclTerraform(struct?: DataGsuiteUserAttributesInteger | cdktf.IResolvable): any {
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
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGsuiteUserAttributesIntegerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGsuiteUserAttributesInteger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGsuiteUserAttributesInteger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataGsuiteUserAttributesIntegerList extends cdktf.ComplexList {
  public internalValue? : DataGsuiteUserAttributesInteger[] | cdktf.IResolvable

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
  public get(index: number): DataGsuiteUserAttributesIntegerOutputReference {
    return new DataGsuiteUserAttributesIntegerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGsuiteUserAttributesIntegers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#name DataGsuiteUserAttributes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#value DataGsuiteUserAttributes#value}
  */
  readonly value: number[];
}

export function dataGsuiteUserAttributesIntegersToTerraform(struct?: DataGsuiteUserAttributesIntegers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.value),
  }
}


export function dataGsuiteUserAttributesIntegersToHclTerraform(struct?: DataGsuiteUserAttributesIntegers | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGsuiteUserAttributesIntegersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGsuiteUserAttributesIntegers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGsuiteUserAttributesIntegers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: number[]; 
  public get value() {
    return this.getNumberListAttribute('value');
  }
  public set value(value: number[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataGsuiteUserAttributesIntegersList extends cdktf.ComplexList {
  public internalValue? : DataGsuiteUserAttributesIntegers[] | cdktf.IResolvable

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
  public get(index: number): DataGsuiteUserAttributesIntegersOutputReference {
    return new DataGsuiteUserAttributesIntegersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGsuiteUserAttributesPhone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#name DataGsuiteUserAttributes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#value DataGsuiteUserAttributes#value}
  */
  readonly value: string;
}

export function dataGsuiteUserAttributesPhoneToTerraform(struct?: DataGsuiteUserAttributesPhone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataGsuiteUserAttributesPhoneToHclTerraform(struct?: DataGsuiteUserAttributesPhone | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGsuiteUserAttributesPhoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGsuiteUserAttributesPhone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGsuiteUserAttributesPhone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class DataGsuiteUserAttributesPhoneList extends cdktf.ComplexList {
  public internalValue? : DataGsuiteUserAttributesPhone[] | cdktf.IResolvable

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
  public get(index: number): DataGsuiteUserAttributesPhoneOutputReference {
    return new DataGsuiteUserAttributesPhoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGsuiteUserAttributesPhones {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#name DataGsuiteUserAttributes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#value DataGsuiteUserAttributes#value}
  */
  readonly value: string[];
}

export function dataGsuiteUserAttributesPhonesToTerraform(struct?: DataGsuiteUserAttributesPhones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function dataGsuiteUserAttributesPhonesToHclTerraform(struct?: DataGsuiteUserAttributesPhones | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGsuiteUserAttributesPhonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGsuiteUserAttributesPhones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGsuiteUserAttributesPhones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataGsuiteUserAttributesPhonesList extends cdktf.ComplexList {
  public internalValue? : DataGsuiteUserAttributesPhones[] | cdktf.IResolvable

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
  public get(index: number): DataGsuiteUserAttributesPhonesOutputReference {
    return new DataGsuiteUserAttributesPhonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGsuiteUserAttributesString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#name DataGsuiteUserAttributes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#value DataGsuiteUserAttributes#value}
  */
  readonly value: string;
}

export function dataGsuiteUserAttributesStringToTerraform(struct?: DataGsuiteUserAttributesString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataGsuiteUserAttributesStringToHclTerraform(struct?: DataGsuiteUserAttributesString | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGsuiteUserAttributesStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGsuiteUserAttributesString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGsuiteUserAttributesString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class DataGsuiteUserAttributesStringList extends cdktf.ComplexList {
  public internalValue? : DataGsuiteUserAttributesString[] | cdktf.IResolvable

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
  public get(index: number): DataGsuiteUserAttributesStringOutputReference {
    return new DataGsuiteUserAttributesStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGsuiteUserAttributesStrings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#name DataGsuiteUserAttributes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#value DataGsuiteUserAttributes#value}
  */
  readonly value: string[];
}

export function dataGsuiteUserAttributesStringsToTerraform(struct?: DataGsuiteUserAttributesStrings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function dataGsuiteUserAttributesStringsToHclTerraform(struct?: DataGsuiteUserAttributesStrings | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataGsuiteUserAttributesStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGsuiteUserAttributesStrings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGsuiteUserAttributesStrings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataGsuiteUserAttributesStringsList extends cdktf.ComplexList {
  public internalValue? : DataGsuiteUserAttributesStrings[] | cdktf.IResolvable

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
  public get(index: number): DataGsuiteUserAttributesStringsOutputReference {
    return new DataGsuiteUserAttributesStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes gsuite_user_attributes}
*/
export class DataGsuiteUserAttributes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gsuite_user_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGsuiteUserAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGsuiteUserAttributes to import
  * @param importFromId The id of the existing DataGsuiteUserAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGsuiteUserAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gsuite_user_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/data-sources/user_attributes gsuite_user_attributes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGsuiteUserAttributesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGsuiteUserAttributesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gsuite_user_attributes',
      terraformGeneratorMetadata: {
        providerName: 'gsuite',
        providerVersion: '0.1.62'
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
    this._bool.internalValue = config.bool;
    this._bools.internalValue = config.bools;
    this._date.internalValue = config.date;
    this._dates.internalValue = config.dates;
    this._double.internalValue = config.double;
    this._doubles.internalValue = config.doubles;
    this._email.internalValue = config.email;
    this._emails.internalValue = config.emails;
    this._integer.internalValue = config.integer;
    this._integers.internalValue = config.integers;
    this._phone.internalValue = config.phone;
    this._phones.internalValue = config.phones;
    this._string.internalValue = config.string;
    this._strings.internalValue = config.strings;
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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // bool - computed: false, optional: true, required: false
  private _bool = new DataGsuiteUserAttributesBoolList(this, "bool", true);
  public get bool() {
    return this._bool;
  }
  public putBool(value: DataGsuiteUserAttributesBool[] | cdktf.IResolvable) {
    this._bool.internalValue = value;
  }
  public resetBool() {
    this._bool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolInput() {
    return this._bool.internalValue;
  }

  // bools - computed: false, optional: true, required: false
  private _bools = new DataGsuiteUserAttributesBoolsList(this, "bools", true);
  public get bools() {
    return this._bools;
  }
  public putBools(value: DataGsuiteUserAttributesBools[] | cdktf.IResolvable) {
    this._bools.internalValue = value;
  }
  public resetBools() {
    this._bools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolsInput() {
    return this._bools.internalValue;
  }

  // date - computed: false, optional: true, required: false
  private _date = new DataGsuiteUserAttributesDateList(this, "date", true);
  public get date() {
    return this._date;
  }
  public putDate(value: DataGsuiteUserAttributesDate[] | cdktf.IResolvable) {
    this._date.internalValue = value;
  }
  public resetDate() {
    this._date.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date.internalValue;
  }

  // dates - computed: false, optional: true, required: false
  private _dates = new DataGsuiteUserAttributesDatesList(this, "dates", true);
  public get dates() {
    return this._dates;
  }
  public putDates(value: DataGsuiteUserAttributesDates[] | cdktf.IResolvable) {
    this._dates.internalValue = value;
  }
  public resetDates() {
    this._dates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datesInput() {
    return this._dates.internalValue;
  }

  // double - computed: false, optional: true, required: false
  private _double = new DataGsuiteUserAttributesDoubleList(this, "double", true);
  public get double() {
    return this._double;
  }
  public putDouble(value: DataGsuiteUserAttributesDouble[] | cdktf.IResolvable) {
    this._double.internalValue = value;
  }
  public resetDouble() {
    this._double.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doubleInput() {
    return this._double.internalValue;
  }

  // doubles - computed: false, optional: true, required: false
  private _doubles = new DataGsuiteUserAttributesDoublesList(this, "doubles", true);
  public get doubles() {
    return this._doubles;
  }
  public putDoubles(value: DataGsuiteUserAttributesDoubles[] | cdktf.IResolvable) {
    this._doubles.internalValue = value;
  }
  public resetDoubles() {
    this._doubles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doublesInput() {
    return this._doubles.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new DataGsuiteUserAttributesEmailList(this, "email", true);
  public get email() {
    return this._email;
  }
  public putEmail(value: DataGsuiteUserAttributesEmail[] | cdktf.IResolvable) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // emails - computed: false, optional: true, required: false
  private _emails = new DataGsuiteUserAttributesEmailsList(this, "emails", true);
  public get emails() {
    return this._emails;
  }
  public putEmails(value: DataGsuiteUserAttributesEmails[] | cdktf.IResolvable) {
    this._emails.internalValue = value;
  }
  public resetEmails() {
    this._emails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails.internalValue;
  }

  // integer - computed: false, optional: true, required: false
  private _integer = new DataGsuiteUserAttributesIntegerList(this, "integer", true);
  public get integer() {
    return this._integer;
  }
  public putInteger(value: DataGsuiteUserAttributesInteger[] | cdktf.IResolvable) {
    this._integer.internalValue = value;
  }
  public resetInteger() {
    this._integer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer.internalValue;
  }

  // integers - computed: false, optional: true, required: false
  private _integers = new DataGsuiteUserAttributesIntegersList(this, "integers", true);
  public get integers() {
    return this._integers;
  }
  public putIntegers(value: DataGsuiteUserAttributesIntegers[] | cdktf.IResolvable) {
    this._integers.internalValue = value;
  }
  public resetIntegers() {
    this._integers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integersInput() {
    return this._integers.internalValue;
  }

  // phone - computed: false, optional: true, required: false
  private _phone = new DataGsuiteUserAttributesPhoneList(this, "phone", true);
  public get phone() {
    return this._phone;
  }
  public putPhone(value: DataGsuiteUserAttributesPhone[] | cdktf.IResolvable) {
    this._phone.internalValue = value;
  }
  public resetPhone() {
    this._phone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone.internalValue;
  }

  // phones - computed: false, optional: true, required: false
  private _phones = new DataGsuiteUserAttributesPhonesList(this, "phones", true);
  public get phones() {
    return this._phones;
  }
  public putPhones(value: DataGsuiteUserAttributesPhones[] | cdktf.IResolvable) {
    this._phones.internalValue = value;
  }
  public resetPhones() {
    this._phones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phonesInput() {
    return this._phones.internalValue;
  }

  // string - computed: false, optional: true, required: false
  private _string = new DataGsuiteUserAttributesStringList(this, "string", true);
  public get string() {
    return this._string;
  }
  public putString(value: DataGsuiteUserAttributesString[] | cdktf.IResolvable) {
    this._string.internalValue = value;
  }
  public resetString() {
    this._string.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string.internalValue;
  }

  // strings - computed: false, optional: true, required: false
  private _strings = new DataGsuiteUserAttributesStringsList(this, "strings", true);
  public get strings() {
    return this._strings;
  }
  public putStrings(value: DataGsuiteUserAttributesStrings[] | cdktf.IResolvable) {
    this._strings.internalValue = value;
  }
  public resetStrings() {
    this._strings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringsInput() {
    return this._strings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      bool: cdktf.listMapper(dataGsuiteUserAttributesBoolToTerraform, true)(this._bool.internalValue),
      bools: cdktf.listMapper(dataGsuiteUserAttributesBoolsToTerraform, true)(this._bools.internalValue),
      date: cdktf.listMapper(dataGsuiteUserAttributesDateToTerraform, true)(this._date.internalValue),
      dates: cdktf.listMapper(dataGsuiteUserAttributesDatesToTerraform, true)(this._dates.internalValue),
      double: cdktf.listMapper(dataGsuiteUserAttributesDoubleToTerraform, true)(this._double.internalValue),
      doubles: cdktf.listMapper(dataGsuiteUserAttributesDoublesToTerraform, true)(this._doubles.internalValue),
      email: cdktf.listMapper(dataGsuiteUserAttributesEmailToTerraform, true)(this._email.internalValue),
      emails: cdktf.listMapper(dataGsuiteUserAttributesEmailsToTerraform, true)(this._emails.internalValue),
      integer: cdktf.listMapper(dataGsuiteUserAttributesIntegerToTerraform, true)(this._integer.internalValue),
      integers: cdktf.listMapper(dataGsuiteUserAttributesIntegersToTerraform, true)(this._integers.internalValue),
      phone: cdktf.listMapper(dataGsuiteUserAttributesPhoneToTerraform, true)(this._phone.internalValue),
      phones: cdktf.listMapper(dataGsuiteUserAttributesPhonesToTerraform, true)(this._phones.internalValue),
      string: cdktf.listMapper(dataGsuiteUserAttributesStringToTerraform, true)(this._string.internalValue),
      strings: cdktf.listMapper(dataGsuiteUserAttributesStringsToTerraform, true)(this._strings.internalValue),
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
      bool: {
        value: cdktf.listMapperHcl(dataGsuiteUserAttributesBoolToHclTerraform, true)(this._bool.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataGsuiteUserAttributesBoolList",
      },
      bools: {
        value: cdktf.listMapperHcl(dataGsuiteUserAttributesBoolsToHclTerraform, true)(this._bools.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataGsuiteUserAttributesBoolsList",
      },
      date: {
        value: cdktf.listMapperHcl(dataGsuiteUserAttributesDateToHclTerraform, true)(this._date.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataGsuiteUserAttributesDateList",
      },
      dates: {
        value: cdktf.listMapperHcl(dataGsuiteUserAttributesDatesToHclTerraform, true)(this._dates.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataGsuiteUserAttributesDatesList",
      },
      double: {
        value: cdktf.listMapperHcl(dataGsuiteUserAttributesDoubleToHclTerraform, true)(this._double.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataGsuiteUserAttributesDoubleList",
      },
      doubles: {
        value: cdktf.listMapperHcl(dataGsuiteUserAttributesDoublesToHclTerraform, true)(this._doubles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataGsuiteUserAttributesDoublesList",
      },
      email: {
        value: cdktf.listMapperHcl(dataGsuiteUserAttributesEmailToHclTerraform, true)(this._email.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataGsuiteUserAttributesEmailList",
      },
      emails: {
        value: cdktf.listMapperHcl(dataGsuiteUserAttributesEmailsToHclTerraform, true)(this._emails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataGsuiteUserAttributesEmailsList",
      },
      integer: {
        value: cdktf.listMapperHcl(dataGsuiteUserAttributesIntegerToHclTerraform, true)(this._integer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataGsuiteUserAttributesIntegerList",
      },
      integers: {
        value: cdktf.listMapperHcl(dataGsuiteUserAttributesIntegersToHclTerraform, true)(this._integers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataGsuiteUserAttributesIntegersList",
      },
      phone: {
        value: cdktf.listMapperHcl(dataGsuiteUserAttributesPhoneToHclTerraform, true)(this._phone.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataGsuiteUserAttributesPhoneList",
      },
      phones: {
        value: cdktf.listMapperHcl(dataGsuiteUserAttributesPhonesToHclTerraform, true)(this._phones.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataGsuiteUserAttributesPhonesList",
      },
      string: {
        value: cdktf.listMapperHcl(dataGsuiteUserAttributesStringToHclTerraform, true)(this._string.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataGsuiteUserAttributesStringList",
      },
      strings: {
        value: cdktf.listMapperHcl(dataGsuiteUserAttributesStringsToHclTerraform, true)(this._strings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataGsuiteUserAttributesStringsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
