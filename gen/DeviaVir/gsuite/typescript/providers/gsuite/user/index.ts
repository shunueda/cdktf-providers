// https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#aliases User#aliases}
  */
  readonly aliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#deletion_time User#deletion_time}
  */
  readonly deletionTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#hash_function User#hash_function}
  */
  readonly hashFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#include_in_global_list User#include_in_global_list}
  */
  readonly includeInGlobalList?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#is_ip_whitelisted User#is_ip_whitelisted}
  */
  readonly isIpWhitelisted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#is_suspended User#is_suspended}
  */
  readonly isSuspended?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#name User#name}
  */
  readonly name: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#org_unit_path User#org_unit_path}
  */
  readonly orgUnitPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#primary_email User#primary_email}
  */
  readonly primaryEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#recovery_email User#recovery_email}
  */
  readonly recoveryEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#recovery_phone User#recovery_phone}
  */
  readonly recoveryPhone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#suspension_reason User#suspension_reason}
  */
  readonly suspensionReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#update_existing User#update_existing}
  */
  readonly updateExisting?: boolean | cdktf.IResolvable;
  /**
  * custom_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#custom_schema User#custom_schema}
  */
  readonly customSchema?: UserCustomSchema[] | cdktf.IResolvable;
  /**
  * external_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#external_ids User#external_ids}
  */
  readonly externalIds?: UserExternalIds[] | cdktf.IResolvable;
  /**
  * organizations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#organizations User#organizations}
  */
  readonly organizations?: UserOrganizations[] | cdktf.IResolvable;
  /**
  * posix_accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#posix_accounts User#posix_accounts}
  */
  readonly posixAccounts?: UserPosixAccounts[] | cdktf.IResolvable;
  /**
  * ssh_public_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#ssh_public_keys User#ssh_public_keys}
  */
  readonly sshPublicKeys?: UserSshPublicKeys[] | cdktf.IResolvable;
}
export interface UserCustomSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#value User#value}
  */
  readonly value: string;
}

export function userCustomSchemaToTerraform(struct?: UserCustomSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function userCustomSchemaToHclTerraform(struct?: UserCustomSchema | cdktf.IResolvable): any {
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

export class UserCustomSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserCustomSchema | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserCustomSchema | cdktf.IResolvable | undefined) {
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

export class UserCustomSchemaList extends cdktf.ComplexList {
  public internalValue? : UserCustomSchema[] | cdktf.IResolvable

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
  public get(index: number): UserCustomSchemaOutputReference {
    return new UserCustomSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserExternalIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#custom_type User#custom_type}
  */
  readonly customType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#type User#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#value User#value}
  */
  readonly value: string;
}

export function userExternalIdsToTerraform(struct?: UserExternalIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_type: cdktf.stringToTerraform(struct!.customType),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function userExternalIdsToHclTerraform(struct?: UserExternalIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_type: {
      value: cdktf.stringToHclTerraform(struct!.customType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserExternalIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserExternalIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customType = this._customType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserExternalIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customType = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customType = value.customType;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // custom_type - computed: false, optional: true, required: false
  private _customType?: string; 
  public get customType() {
    return this.getStringAttribute('custom_type');
  }
  public set customType(value: string) {
    this._customType = value;
  }
  public resetCustomType() {
    this._customType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTypeInput() {
    return this._customType;
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

export class UserExternalIdsList extends cdktf.ComplexList {
  public internalValue? : UserExternalIds[] | cdktf.IResolvable

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
  public get(index: number): UserExternalIdsOutputReference {
    return new UserExternalIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserOrganizations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#cost_center User#cost_center}
  */
  readonly costCenter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#custom_type User#custom_type}
  */
  readonly customType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#department User#department}
  */
  readonly department?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#description User#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#domain User#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#full_time_equivalent User#full_time_equivalent}
  */
  readonly fullTimeEquivalent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#location User#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#name User#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#primary User#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#symbol User#symbol}
  */
  readonly symbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#title User#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#type User#type}
  */
  readonly type?: string;
}

export function userOrganizationsToTerraform(struct?: UserOrganizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_center: cdktf.stringToTerraform(struct!.costCenter),
    custom_type: cdktf.stringToTerraform(struct!.customType),
    department: cdktf.stringToTerraform(struct!.department),
    description: cdktf.stringToTerraform(struct!.description),
    domain: cdktf.stringToTerraform(struct!.domain),
    full_time_equivalent: cdktf.numberToTerraform(struct!.fullTimeEquivalent),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    primary: cdktf.booleanToTerraform(struct!.primary),
    symbol: cdktf.stringToTerraform(struct!.symbol),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function userOrganizationsToHclTerraform(struct?: UserOrganizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_center: {
      value: cdktf.stringToHclTerraform(struct!.costCenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_type: {
      value: cdktf.stringToHclTerraform(struct!.customType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    department: {
      value: cdktf.stringToHclTerraform(struct!.department),
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
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_time_equivalent: {
      value: cdktf.numberToHclTerraform(struct!.fullTimeEquivalent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
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
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    symbol: {
      value: cdktf.stringToHclTerraform(struct!.symbol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserOrganizationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserOrganizations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costCenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.costCenter = this._costCenter;
    }
    if (this._customType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customType = this._customType;
    }
    if (this._department !== undefined) {
      hasAnyValues = true;
      internalValueResult.department = this._department;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._fullTimeEquivalent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullTimeEquivalent = this._fullTimeEquivalent;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._symbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.symbol = this._symbol;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserOrganizations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._costCenter = undefined;
      this._customType = undefined;
      this._department = undefined;
      this._description = undefined;
      this._domain = undefined;
      this._fullTimeEquivalent = undefined;
      this._location = undefined;
      this._name = undefined;
      this._primary = undefined;
      this._symbol = undefined;
      this._title = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._costCenter = value.costCenter;
      this._customType = value.customType;
      this._department = value.department;
      this._description = value.description;
      this._domain = value.domain;
      this._fullTimeEquivalent = value.fullTimeEquivalent;
      this._location = value.location;
      this._name = value.name;
      this._primary = value.primary;
      this._symbol = value.symbol;
      this._title = value.title;
      this._type = value.type;
    }
  }

  // cost_center - computed: false, optional: true, required: false
  private _costCenter?: string; 
  public get costCenter() {
    return this.getStringAttribute('cost_center');
  }
  public set costCenter(value: string) {
    this._costCenter = value;
  }
  public resetCostCenter() {
    this._costCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costCenterInput() {
    return this._costCenter;
  }

  // custom_type - computed: false, optional: true, required: false
  private _customType?: string; 
  public get customType() {
    return this.getStringAttribute('custom_type');
  }
  public set customType(value: string) {
    this._customType = value;
  }
  public resetCustomType() {
    this._customType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTypeInput() {
    return this._customType;
  }

  // department - computed: false, optional: true, required: false
  private _department?: string; 
  public get department() {
    return this.getStringAttribute('department');
  }
  public set department(value: string) {
    this._department = value;
  }
  public resetDepartment() {
    this._department = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get departmentInput() {
    return this._department;
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

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // full_time_equivalent - computed: false, optional: true, required: false
  private _fullTimeEquivalent?: number; 
  public get fullTimeEquivalent() {
    return this.getNumberAttribute('full_time_equivalent');
  }
  public set fullTimeEquivalent(value: number) {
    this._fullTimeEquivalent = value;
  }
  public resetFullTimeEquivalent() {
    this._fullTimeEquivalent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullTimeEquivalentInput() {
    return this._fullTimeEquivalent;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: true, required: false
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

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // symbol - computed: false, optional: true, required: false
  private _symbol?: string; 
  public get symbol() {
    return this.getStringAttribute('symbol');
  }
  public set symbol(value: string) {
    this._symbol = value;
  }
  public resetSymbol() {
    this._symbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symbolInput() {
    return this._symbol;
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
}

export class UserOrganizationsList extends cdktf.ComplexList {
  public internalValue? : UserOrganizations[] | cdktf.IResolvable

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
  public get(index: number): UserOrganizationsOutputReference {
    return new UserOrganizationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserPosixAccounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#gecos User#gecos}
  */
  readonly gecos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#gid User#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#home_directory User#home_directory}
  */
  readonly homeDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#primary User#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#shell User#shell}
  */
  readonly shell?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#system_id User#system_id}
  */
  readonly systemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#uid User#uid}
  */
  readonly uid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#username User#username}
  */
  readonly username?: string;
}

export function userPosixAccountsToTerraform(struct?: UserPosixAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gecos: cdktf.stringToTerraform(struct!.gecos),
    gid: cdktf.numberToTerraform(struct!.gid),
    home_directory: cdktf.stringToTerraform(struct!.homeDirectory),
    primary: cdktf.booleanToTerraform(struct!.primary),
    shell: cdktf.stringToTerraform(struct!.shell),
    system_id: cdktf.stringToTerraform(struct!.systemId),
    uid: cdktf.numberToTerraform(struct!.uid),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function userPosixAccountsToHclTerraform(struct?: UserPosixAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gecos: {
      value: cdktf.stringToHclTerraform(struct!.gecos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    home_directory: {
      value: cdktf.stringToHclTerraform(struct!.homeDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shell: {
      value: cdktf.stringToHclTerraform(struct!.shell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_id: {
      value: cdktf.stringToHclTerraform(struct!.systemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserPosixAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserPosixAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gecos !== undefined) {
      hasAnyValues = true;
      internalValueResult.gecos = this._gecos;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._homeDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.homeDirectory = this._homeDirectory;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._shell !== undefined) {
      hasAnyValues = true;
      internalValueResult.shell = this._shell;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserPosixAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gecos = undefined;
      this._gid = undefined;
      this._homeDirectory = undefined;
      this._primary = undefined;
      this._shell = undefined;
      this._systemId = undefined;
      this._uid = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gecos = value.gecos;
      this._gid = value.gid;
      this._homeDirectory = value.homeDirectory;
      this._primary = value.primary;
      this._shell = value.shell;
      this._systemId = value.systemId;
      this._uid = value.uid;
      this._username = value.username;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // gecos - computed: false, optional: true, required: false
  private _gecos?: string; 
  public get gecos() {
    return this.getStringAttribute('gecos');
  }
  public set gecos(value: string) {
    this._gecos = value;
  }
  public resetGecos() {
    this._gecos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gecosInput() {
    return this._gecos;
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // home_directory - computed: false, optional: true, required: false
  private _homeDirectory?: string; 
  public get homeDirectory() {
    return this.getStringAttribute('home_directory');
  }
  public set homeDirectory(value: string) {
    this._homeDirectory = value;
  }
  public resetHomeDirectory() {
    this._homeDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryInput() {
    return this._homeDirectory;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // shell - computed: false, optional: true, required: false
  private _shell?: string; 
  public get shell() {
    return this.getStringAttribute('shell');
  }
  public set shell(value: string) {
    this._shell = value;
  }
  public resetShell() {
    this._shell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellInput() {
    return this._shell;
  }

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
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
}

export class UserPosixAccountsList extends cdktf.ComplexList {
  public internalValue? : UserPosixAccounts[] | cdktf.IResolvable

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
  public get(index: number): UserPosixAccountsOutputReference {
    return new UserPosixAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserSshPublicKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#expiration_time_usec User#expiration_time_usec}
  */
  readonly expirationTimeUsec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#key User#key}
  */
  readonly key: string;
}

export function userSshPublicKeysToTerraform(struct?: UserSshPublicKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_time_usec: cdktf.numberToTerraform(struct!.expirationTimeUsec),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function userSshPublicKeysToHclTerraform(struct?: UserSshPublicKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_time_usec: {
      value: cdktf.numberToHclTerraform(struct!.expirationTimeUsec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserSshPublicKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserSshPublicKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationTimeUsec !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimeUsec = this._expirationTimeUsec;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserSshPublicKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationTimeUsec = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationTimeUsec = value.expirationTimeUsec;
      this._key = value.key;
    }
  }

  // expiration_time_usec - computed: false, optional: true, required: false
  private _expirationTimeUsec?: number; 
  public get expirationTimeUsec() {
    return this.getNumberAttribute('expiration_time_usec');
  }
  public set expirationTimeUsec(value: number) {
    this._expirationTimeUsec = value;
  }
  public resetExpirationTimeUsec() {
    this._expirationTimeUsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeUsecInput() {
    return this._expirationTimeUsec;
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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
}

export class UserSshPublicKeysList extends cdktf.ComplexList {
  public internalValue? : UserSshPublicKeys[] | cdktf.IResolvable

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
  public get(index: number): UserSshPublicKeysOutputReference {
    return new UserSshPublicKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user gsuite_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gsuite_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gsuite_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/deviavir/gsuite/0.1.62/docs/resources/user gsuite_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'gsuite_user',
      terraformGeneratorMetadata: {
        providerName: 'gsuite',
        providerVersion: '0.1.62',
        providerVersionConstraint: '0.1.62'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliases = config.aliases;
    this._deletionTime = config.deletionTime;
    this._hashFunction = config.hashFunction;
    this._id = config.id;
    this._includeInGlobalList = config.includeInGlobalList;
    this._isIpWhitelisted = config.isIpWhitelisted;
    this._isSuspended = config.isSuspended;
    this._name = config.name;
    this._orgUnitPath = config.orgUnitPath;
    this._password = config.password;
    this._primaryEmail = config.primaryEmail;
    this._recoveryEmail = config.recoveryEmail;
    this._recoveryPhone = config.recoveryPhone;
    this._suspensionReason = config.suspensionReason;
    this._updateExisting = config.updateExisting;
    this._customSchema.internalValue = config.customSchema;
    this._externalIds.internalValue = config.externalIds;
    this._organizations.internalValue = config.organizations;
    this._posixAccounts.internalValue = config.posixAccounts;
    this._sshPublicKeys.internalValue = config.sshPublicKeys;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // 2s_enforced - computed: true, optional: false, required: false
  public get 2SEnforced() {
    return this.getBooleanAttribute('2s_enforced');
  }

  // 2s_enrolled - computed: true, optional: false, required: false
  public get 2SEnrolled() {
    return this.getBooleanAttribute('2s_enrolled');
  }

  // agreed_to_terms - computed: true, optional: false, required: false
  public get agreedToTerms() {
    return this.getStringAttribute('agreed_to_terms');
  }

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return cdktf.Fn.tolist(this.getListAttribute('aliases'));
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }

  // deletion_time - computed: false, optional: true, required: false
  private _deletionTime?: string; 
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }
  public set deletionTime(value: string) {
    this._deletionTime = value;
  }
  public resetDeletionTime() {
    this._deletionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionTimeInput() {
    return this._deletionTime;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // hash_function - computed: false, optional: true, required: false
  private _hashFunction?: string; 
  public get hashFunction() {
    return this.getStringAttribute('hash_function');
  }
  public set hashFunction(value: string) {
    this._hashFunction = value;
  }
  public resetHashFunction() {
    this._hashFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashFunctionInput() {
    return this._hashFunction;
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

  // include_in_global_list - computed: false, optional: true, required: false
  private _includeInGlobalList?: boolean | cdktf.IResolvable; 
  public get includeInGlobalList() {
    return this.getBooleanAttribute('include_in_global_list');
  }
  public set includeInGlobalList(value: boolean | cdktf.IResolvable) {
    this._includeInGlobalList = value;
  }
  public resetIncludeInGlobalList() {
    this._includeInGlobalList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInGlobalListInput() {
    return this._includeInGlobalList;
  }

  // is_admin - computed: true, optional: false, required: false
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }

  // is_delegated_admin - computed: true, optional: false, required: false
  public get isDelegatedAdmin() {
    return this.getBooleanAttribute('is_delegated_admin');
  }

  // is_ip_whitelisted - computed: false, optional: true, required: false
  private _isIpWhitelisted?: boolean | cdktf.IResolvable; 
  public get isIpWhitelisted() {
    return this.getBooleanAttribute('is_ip_whitelisted');
  }
  public set isIpWhitelisted(value: boolean | cdktf.IResolvable) {
    this._isIpWhitelisted = value;
  }
  public resetIsIpWhitelisted() {
    this._isIpWhitelisted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIpWhitelistedInput() {
    return this._isIpWhitelisted;
  }

  // is_mailbox_setup - computed: true, optional: false, required: false
  public get isMailboxSetup() {
    return this.getBooleanAttribute('is_mailbox_setup');
  }

  // is_suspended - computed: false, optional: true, required: false
  private _isSuspended?: boolean | cdktf.IResolvable; 
  public get isSuspended() {
    return this.getBooleanAttribute('is_suspended');
  }
  public set isSuspended(value: boolean | cdktf.IResolvable) {
    this._isSuspended = value;
  }
  public resetIsSuspended() {
    this._isSuspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSuspendedInput() {
    return this._isSuspended;
  }

  // last_login_time - computed: true, optional: false, required: false
  public get lastLoginTime() {
    return this.getStringAttribute('last_login_time');
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

  // org_unit_path - computed: false, optional: true, required: false
  private _orgUnitPath?: string; 
  public get orgUnitPath() {
    return this.getStringAttribute('org_unit_path');
  }
  public set orgUnitPath(value: string) {
    this._orgUnitPath = value;
  }
  public resetOrgUnitPath() {
    this._orgUnitPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgUnitPathInput() {
    return this._orgUnitPath;
  }

  // password - computed: false, optional: true, required: false
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

  // primary_email - computed: false, optional: false, required: true
  private _primaryEmail?: string; 
  public get primaryEmail() {
    return this.getStringAttribute('primary_email');
  }
  public set primaryEmail(value: string) {
    this._primaryEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryEmailInput() {
    return this._primaryEmail;
  }

  // recovery_email - computed: false, optional: true, required: false
  private _recoveryEmail?: string; 
  public get recoveryEmail() {
    return this.getStringAttribute('recovery_email');
  }
  public set recoveryEmail(value: string) {
    this._recoveryEmail = value;
  }
  public resetRecoveryEmail() {
    this._recoveryEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryEmailInput() {
    return this._recoveryEmail;
  }

  // recovery_phone - computed: false, optional: true, required: false
  private _recoveryPhone?: string; 
  public get recoveryPhone() {
    return this.getStringAttribute('recovery_phone');
  }
  public set recoveryPhone(value: string) {
    this._recoveryPhone = value;
  }
  public resetRecoveryPhone() {
    this._recoveryPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryPhoneInput() {
    return this._recoveryPhone;
  }

  // suspension_reason - computed: false, optional: true, required: false
  private _suspensionReason?: string; 
  public get suspensionReason() {
    return this.getStringAttribute('suspension_reason');
  }
  public set suspensionReason(value: string) {
    this._suspensionReason = value;
  }
  public resetSuspensionReason() {
    this._suspensionReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspensionReasonInput() {
    return this._suspensionReason;
  }

  // update_existing - computed: false, optional: true, required: false
  private _updateExisting?: boolean | cdktf.IResolvable; 
  public get updateExisting() {
    return this.getBooleanAttribute('update_existing');
  }
  public set updateExisting(value: boolean | cdktf.IResolvable) {
    this._updateExisting = value;
  }
  public resetUpdateExisting() {
    this._updateExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateExistingInput() {
    return this._updateExisting;
  }

  // custom_schema - computed: false, optional: true, required: false
  private _customSchema = new UserCustomSchemaList(this, "custom_schema", false);
  public get customSchema() {
    return this._customSchema;
  }
  public putCustomSchema(value: UserCustomSchema[] | cdktf.IResolvable) {
    this._customSchema.internalValue = value;
  }
  public resetCustomSchema() {
    this._customSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSchemaInput() {
    return this._customSchema.internalValue;
  }

  // external_ids - computed: false, optional: true, required: false
  private _externalIds = new UserExternalIdsList(this, "external_ids", false);
  public get externalIds() {
    return this._externalIds;
  }
  public putExternalIds(value: UserExternalIds[] | cdktf.IResolvable) {
    this._externalIds.internalValue = value;
  }
  public resetExternalIds() {
    this._externalIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdsInput() {
    return this._externalIds.internalValue;
  }

  // organizations - computed: false, optional: true, required: false
  private _organizations = new UserOrganizationsList(this, "organizations", false);
  public get organizations() {
    return this._organizations;
  }
  public putOrganizations(value: UserOrganizations[] | cdktf.IResolvable) {
    this._organizations.internalValue = value;
  }
  public resetOrganizations() {
    this._organizations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationsInput() {
    return this._organizations.internalValue;
  }

  // posix_accounts - computed: false, optional: true, required: false
  private _posixAccounts = new UserPosixAccountsList(this, "posix_accounts", false);
  public get posixAccounts() {
    return this._posixAccounts;
  }
  public putPosixAccounts(value: UserPosixAccounts[] | cdktf.IResolvable) {
    this._posixAccounts.internalValue = value;
  }
  public resetPosixAccounts() {
    this._posixAccounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixAccountsInput() {
    return this._posixAccounts.internalValue;
  }

  // ssh_public_keys - computed: false, optional: true, required: false
  private _sshPublicKeys = new UserSshPublicKeysList(this, "ssh_public_keys", false);
  public get sshPublicKeys() {
    return this._sshPublicKeys;
  }
  public putSshPublicKeys(value: UserSshPublicKeys[] | cdktf.IResolvable) {
    this._sshPublicKeys.internalValue = value;
  }
  public resetSshPublicKeys() {
    this._sshPublicKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aliases),
      deletion_time: cdktf.stringToTerraform(this._deletionTime),
      hash_function: cdktf.stringToTerraform(this._hashFunction),
      id: cdktf.stringToTerraform(this._id),
      include_in_global_list: cdktf.booleanToTerraform(this._includeInGlobalList),
      is_ip_whitelisted: cdktf.booleanToTerraform(this._isIpWhitelisted),
      is_suspended: cdktf.booleanToTerraform(this._isSuspended),
      name: cdktf.hashMapper(cdktf.stringToTerraform)(this._name),
      org_unit_path: cdktf.stringToTerraform(this._orgUnitPath),
      password: cdktf.stringToTerraform(this._password),
      primary_email: cdktf.stringToTerraform(this._primaryEmail),
      recovery_email: cdktf.stringToTerraform(this._recoveryEmail),
      recovery_phone: cdktf.stringToTerraform(this._recoveryPhone),
      suspension_reason: cdktf.stringToTerraform(this._suspensionReason),
      update_existing: cdktf.booleanToTerraform(this._updateExisting),
      custom_schema: cdktf.listMapper(userCustomSchemaToTerraform, true)(this._customSchema.internalValue),
      external_ids: cdktf.listMapper(userExternalIdsToTerraform, true)(this._externalIds.internalValue),
      organizations: cdktf.listMapper(userOrganizationsToTerraform, true)(this._organizations.internalValue),
      posix_accounts: cdktf.listMapper(userPosixAccountsToTerraform, true)(this._posixAccounts.internalValue),
      ssh_public_keys: cdktf.listMapper(userSshPublicKeysToTerraform, true)(this._sshPublicKeys.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aliases),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      deletion_time: {
        value: cdktf.stringToHclTerraform(this._deletionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_function: {
        value: cdktf.stringToHclTerraform(this._hashFunction),
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
      include_in_global_list: {
        value: cdktf.booleanToHclTerraform(this._includeInGlobalList),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_ip_whitelisted: {
        value: cdktf.booleanToHclTerraform(this._isIpWhitelisted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_suspended: {
        value: cdktf.booleanToHclTerraform(this._isSuspended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._name),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      org_unit_path: {
        value: cdktf.stringToHclTerraform(this._orgUnitPath),
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
      primary_email: {
        value: cdktf.stringToHclTerraform(this._primaryEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_email: {
        value: cdktf.stringToHclTerraform(this._recoveryEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recovery_phone: {
        value: cdktf.stringToHclTerraform(this._recoveryPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suspension_reason: {
        value: cdktf.stringToHclTerraform(this._suspensionReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_existing: {
        value: cdktf.booleanToHclTerraform(this._updateExisting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_schema: {
        value: cdktf.listMapperHcl(userCustomSchemaToHclTerraform, true)(this._customSchema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserCustomSchemaList",
      },
      external_ids: {
        value: cdktf.listMapperHcl(userExternalIdsToHclTerraform, true)(this._externalIds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserExternalIdsList",
      },
      organizations: {
        value: cdktf.listMapperHcl(userOrganizationsToHclTerraform, true)(this._organizations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserOrganizationsList",
      },
      posix_accounts: {
        value: cdktf.listMapperHcl(userPosixAccountsToHclTerraform, true)(this._posixAccounts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserPosixAccountsList",
      },
      ssh_public_keys: {
        value: cdktf.listMapperHcl(userSshPublicKeysToHclTerraform, true)(this._sshPublicKeys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserSshPublicKeysList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
