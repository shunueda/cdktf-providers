// https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ItemConfig extends cdktf.TerraformMetaArguments {
  /**
  * The category of the item. One of ["login" "password" "database" "secure_note"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#category Item#category}
  */
  readonly category?: string;
  /**
  * (Only applies to the database category) The name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#database Item#database}
  */
  readonly database?: string;
  /**
  * (Only applies to the database category) The address where the database can be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#hostname Item#hostname}
  */
  readonly hostname?: string;
  /**
  * Secure Note value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#note_value Item#note_value}
  */
  readonly noteValue?: string;
  /**
  * Password for this item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#password Item#password}
  */
  readonly password?: string;
  /**
  * (Only applies to the database category) The port the database is listening on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#port Item#port}
  */
  readonly port?: string;
  /**
  * An array of strings of the tags assigned to the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#tags Item#tags}
  */
  readonly tags?: string[];
  /**
  * The title of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#title Item#title}
  */
  readonly title?: string;
  /**
  * (Only applies to the database category) The type of database. One of ["db2" "filemaker" "msaccess" "mssql" "mysql" "oracle" "postgresql" "sqlite" "other"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#type Item#type}
  */
  readonly type?: string;
  /**
  * The primary URL for the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#url Item#url}
  */
  readonly url?: string;
  /**
  * Username for this item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#username Item#username}
  */
  readonly username?: string;
  /**
  * The UUID of the vault the item is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#vault Item#vault}
  */
  readonly vault: string;
  /**
  * password_recipe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#password_recipe Item#password_recipe}
  */
  readonly passwordRecipe?: ItemPasswordRecipe[] | cdktf.IResolvable;
  /**
  * section block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#section Item#section}
  */
  readonly section?: ItemSection[] | cdktf.IResolvable;
}
export interface ItemPasswordRecipe {
  /**
  * Use digits [0-9] when generating the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#digits Item#digits}
  */
  readonly digits?: boolean | cdktf.IResolvable;
  /**
  * The length of the password to be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#length Item#length}
  */
  readonly length?: number;
  /**
  * Use letters [a-zA-Z] when generating the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#letters Item#letters}
  */
  readonly letters?: boolean | cdktf.IResolvable;
  /**
  * Use symbols [!@.-_*] when generating the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#symbols Item#symbols}
  */
  readonly symbols?: boolean | cdktf.IResolvable;
}

export function itemPasswordRecipeToTerraform(struct?: ItemPasswordRecipe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digits: cdktf.booleanToTerraform(struct!.digits),
    length: cdktf.numberToTerraform(struct!.length),
    letters: cdktf.booleanToTerraform(struct!.letters),
    symbols: cdktf.booleanToTerraform(struct!.symbols),
  }
}


export function itemPasswordRecipeToHclTerraform(struct?: ItemPasswordRecipe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digits: {
      value: cdktf.booleanToHclTerraform(struct!.digits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    letters: {
      value: cdktf.booleanToHclTerraform(struct!.letters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    symbols: {
      value: cdktf.booleanToHclTerraform(struct!.symbols),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItemPasswordRecipeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItemPasswordRecipe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digits !== undefined) {
      hasAnyValues = true;
      internalValueResult.digits = this._digits;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._letters !== undefined) {
      hasAnyValues = true;
      internalValueResult.letters = this._letters;
    }
    if (this._symbols !== undefined) {
      hasAnyValues = true;
      internalValueResult.symbols = this._symbols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItemPasswordRecipe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digits = undefined;
      this._length = undefined;
      this._letters = undefined;
      this._symbols = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digits = value.digits;
      this._length = value.length;
      this._letters = value.letters;
      this._symbols = value.symbols;
    }
  }

  // digits - computed: true, optional: true, required: false
  private _digits?: boolean | cdktf.IResolvable; 
  public get digits() {
    return this.getBooleanAttribute('digits');
  }
  public set digits(value: boolean | cdktf.IResolvable) {
    this._digits = value;
  }
  public resetDigits() {
    this._digits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitsInput() {
    return this._digits;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // letters - computed: true, optional: true, required: false
  private _letters?: boolean | cdktf.IResolvable; 
  public get letters() {
    return this.getBooleanAttribute('letters');
  }
  public set letters(value: boolean | cdktf.IResolvable) {
    this._letters = value;
  }
  public resetLetters() {
    this._letters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lettersInput() {
    return this._letters;
  }

  // symbols - computed: true, optional: true, required: false
  private _symbols?: boolean | cdktf.IResolvable; 
  public get symbols() {
    return this.getBooleanAttribute('symbols');
  }
  public set symbols(value: boolean | cdktf.IResolvable) {
    this._symbols = value;
  }
  public resetSymbols() {
    this._symbols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolsInput() {
    return this._symbols;
  }
}

export class ItemPasswordRecipeList extends cdktf.ComplexList {
  public internalValue? : ItemPasswordRecipe[] | cdktf.IResolvable

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
  public get(index: number): ItemPasswordRecipeOutputReference {
    return new ItemPasswordRecipeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItemSectionFieldPasswordRecipe {
  /**
  * Use digits [0-9] when generating the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#digits Item#digits}
  */
  readonly digits?: boolean | cdktf.IResolvable;
  /**
  * The length of the password to be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#length Item#length}
  */
  readonly length?: number;
  /**
  * Use letters [a-zA-Z] when generating the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#letters Item#letters}
  */
  readonly letters?: boolean | cdktf.IResolvable;
  /**
  * Use symbols [!@.-_*] when generating the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#symbols Item#symbols}
  */
  readonly symbols?: boolean | cdktf.IResolvable;
}

export function itemSectionFieldPasswordRecipeToTerraform(struct?: ItemSectionFieldPasswordRecipe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digits: cdktf.booleanToTerraform(struct!.digits),
    length: cdktf.numberToTerraform(struct!.length),
    letters: cdktf.booleanToTerraform(struct!.letters),
    symbols: cdktf.booleanToTerraform(struct!.symbols),
  }
}


export function itemSectionFieldPasswordRecipeToHclTerraform(struct?: ItemSectionFieldPasswordRecipe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digits: {
      value: cdktf.booleanToHclTerraform(struct!.digits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    letters: {
      value: cdktf.booleanToHclTerraform(struct!.letters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    symbols: {
      value: cdktf.booleanToHclTerraform(struct!.symbols),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItemSectionFieldPasswordRecipeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItemSectionFieldPasswordRecipe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digits !== undefined) {
      hasAnyValues = true;
      internalValueResult.digits = this._digits;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._letters !== undefined) {
      hasAnyValues = true;
      internalValueResult.letters = this._letters;
    }
    if (this._symbols !== undefined) {
      hasAnyValues = true;
      internalValueResult.symbols = this._symbols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItemSectionFieldPasswordRecipe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digits = undefined;
      this._length = undefined;
      this._letters = undefined;
      this._symbols = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digits = value.digits;
      this._length = value.length;
      this._letters = value.letters;
      this._symbols = value.symbols;
    }
  }

  // digits - computed: true, optional: true, required: false
  private _digits?: boolean | cdktf.IResolvable; 
  public get digits() {
    return this.getBooleanAttribute('digits');
  }
  public set digits(value: boolean | cdktf.IResolvable) {
    this._digits = value;
  }
  public resetDigits() {
    this._digits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitsInput() {
    return this._digits;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // letters - computed: true, optional: true, required: false
  private _letters?: boolean | cdktf.IResolvable; 
  public get letters() {
    return this.getBooleanAttribute('letters');
  }
  public set letters(value: boolean | cdktf.IResolvable) {
    this._letters = value;
  }
  public resetLetters() {
    this._letters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lettersInput() {
    return this._letters;
  }

  // symbols - computed: true, optional: true, required: false
  private _symbols?: boolean | cdktf.IResolvable; 
  public get symbols() {
    return this.getBooleanAttribute('symbols');
  }
  public set symbols(value: boolean | cdktf.IResolvable) {
    this._symbols = value;
  }
  public resetSymbols() {
    this._symbols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolsInput() {
    return this._symbols;
  }
}

export class ItemSectionFieldPasswordRecipeList extends cdktf.ComplexList {
  public internalValue? : ItemSectionFieldPasswordRecipe[] | cdktf.IResolvable

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
  public get(index: number): ItemSectionFieldPasswordRecipeOutputReference {
    return new ItemSectionFieldPasswordRecipeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItemSectionField {
  /**
  * A unique identifier for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#id Item#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The label for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#label Item#label}
  */
  readonly label: string;
  /**
  * Purpose indicates this is a special field: a username, password, or notes field. One of ["USERNAME" "PASSWORD" "NOTES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#purpose Item#purpose}
  */
  readonly purpose?: string;
  /**
  * The type of value stored in the field. One of ["STRING" "CONCEALED" "EMAIL" "URL" "OTP" "DATE" "MONTH_YEAR" "MENU"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#type Item#type}
  */
  readonly type?: string;
  /**
  * The value of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#value Item#value}
  */
  readonly value?: string;
  /**
  * password_recipe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#password_recipe Item#password_recipe}
  */
  readonly passwordRecipe?: ItemSectionFieldPasswordRecipe[] | cdktf.IResolvable;
}

export function itemSectionFieldToTerraform(struct?: ItemSectionField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    purpose: cdktf.stringToTerraform(struct!.purpose),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    password_recipe: cdktf.listMapper(itemSectionFieldPasswordRecipeToTerraform, true)(struct!.passwordRecipe),
  }
}


export function itemSectionFieldToHclTerraform(struct?: ItemSectionField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    purpose: {
      value: cdktf.stringToHclTerraform(struct!.purpose),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_recipe: {
      value: cdktf.listMapperHcl(itemSectionFieldPasswordRecipeToHclTerraform, true)(struct!.passwordRecipe),
      isBlock: true,
      type: "list",
      storageClassType: "ItemSectionFieldPasswordRecipeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItemSectionFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItemSectionField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._purpose !== undefined) {
      hasAnyValues = true;
      internalValueResult.purpose = this._purpose;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._passwordRecipe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRecipe = this._passwordRecipe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItemSectionField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._label = undefined;
      this._purpose = undefined;
      this._type = undefined;
      this._value = undefined;
      this._passwordRecipe.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._label = value.label;
      this._purpose = value.purpose;
      this._type = value.type;
      this._value = value.value;
      this._passwordRecipe.internalValue = value.passwordRecipe;
    }
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

  // purpose - computed: false, optional: true, required: false
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // password_recipe - computed: false, optional: true, required: false
  private _passwordRecipe = new ItemSectionFieldPasswordRecipeList(this, "password_recipe", false);
  public get passwordRecipe() {
    return this._passwordRecipe;
  }
  public putPasswordRecipe(value: ItemSectionFieldPasswordRecipe[] | cdktf.IResolvable) {
    this._passwordRecipe.internalValue = value;
  }
  public resetPasswordRecipe() {
    this._passwordRecipe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRecipeInput() {
    return this._passwordRecipe.internalValue;
  }
}

export class ItemSectionFieldList extends cdktf.ComplexList {
  public internalValue? : ItemSectionField[] | cdktf.IResolvable

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
  public get(index: number): ItemSectionFieldOutputReference {
    return new ItemSectionFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ItemSection {
  /**
  * The label for the section.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#label Item#label}
  */
  readonly label: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#field Item#field}
  */
  readonly field?: ItemSectionField[] | cdktf.IResolvable;
}

export function itemSectionToTerraform(struct?: ItemSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    field: cdktf.listMapper(itemSectionFieldToTerraform, true)(struct!.field),
  }
}


export function itemSectionToHclTerraform(struct?: ItemSection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: cdktf.listMapperHcl(itemSectionFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "ItemSectionFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ItemSectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ItemSection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ItemSection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._field.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._field.internalValue = value.field;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // field - computed: false, optional: true, required: false
  private _field = new ItemSectionFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: ItemSectionField[] | cdktf.IResolvable) {
    this._field.internalValue = value;
  }
  public resetField() {
    this._field.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }
}

export class ItemSectionList extends cdktf.ComplexList {
  public internalValue? : ItemSection[] | cdktf.IResolvable

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
  public get(index: number): ItemSectionOutputReference {
    return new ItemSectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item onepassword_item}
*/
export class Item extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "onepassword_item";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Item resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Item to import
  * @param importFromId The id of the existing Item that should be imported. Refer to the {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Item to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "onepassword_item", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/1password/onepassword/2.2.0/docs/resources/item onepassword_item} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ItemConfig
  */
  public constructor(scope: Construct, id: string, config: ItemConfig) {
    super(scope, id, {
      terraformResourceType: 'onepassword_item',
      terraformGeneratorMetadata: {
        providerName: 'onepassword',
        providerVersion: '2.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._database = config.database;
    this._hostname = config.hostname;
    this._noteValue = config.noteValue;
    this._password = config.password;
    this._port = config.port;
    this._tags = config.tags;
    this._title = config.title;
    this._type = config.type;
    this._url = config.url;
    this._username = config.username;
    this._vault = config.vault;
    this._passwordRecipe.internalValue = config.passwordRecipe;
    this._section.internalValue = config.section;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // note_value - computed: false, optional: true, required: false
  private _noteValue?: string; 
  public get noteValue() {
    return this.getStringAttribute('note_value');
  }
  public set noteValue(value: string) {
    this._noteValue = value;
  }
  public resetNoteValue() {
    this._noteValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteValueInput() {
    return this._noteValue;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // vault - computed: false, optional: false, required: true
  private _vault?: string; 
  public get vault() {
    return this.getStringAttribute('vault');
  }
  public set vault(value: string) {
    this._vault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault;
  }

  // password_recipe - computed: false, optional: true, required: false
  private _passwordRecipe = new ItemPasswordRecipeList(this, "password_recipe", false);
  public get passwordRecipe() {
    return this._passwordRecipe;
  }
  public putPasswordRecipe(value: ItemPasswordRecipe[] | cdktf.IResolvable) {
    this._passwordRecipe.internalValue = value;
  }
  public resetPasswordRecipe() {
    this._passwordRecipe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRecipeInput() {
    return this._passwordRecipe.internalValue;
  }

  // section - computed: false, optional: true, required: false
  private _section = new ItemSectionList(this, "section", false);
  public get section() {
    return this._section;
  }
  public putSection(value: ItemSection[] | cdktf.IResolvable) {
    this._section.internalValue = value;
  }
  public resetSection() {
    this._section.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionInput() {
    return this._section.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      database: cdktf.stringToTerraform(this._database),
      hostname: cdktf.stringToTerraform(this._hostname),
      note_value: cdktf.stringToTerraform(this._noteValue),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.stringToTerraform(this._port),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
      vault: cdktf.stringToTerraform(this._vault),
      password_recipe: cdktf.listMapper(itemPasswordRecipeToTerraform, true)(this._passwordRecipe.internalValue),
      section: cdktf.listMapper(itemSectionToTerraform, true)(this._section.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      note_value: {
        value: cdktf.stringToHclTerraform(this._noteValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault: {
        value: cdktf.stringToHclTerraform(this._vault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_recipe: {
        value: cdktf.listMapperHcl(itemPasswordRecipeToHclTerraform, true)(this._passwordRecipe.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ItemPasswordRecipeList",
      },
      section: {
        value: cdktf.listMapperHcl(itemSectionToHclTerraform, true)(this._section.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ItemSectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
