// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * A custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#custom_data_store DataStore#custom_data_store}
  */
  readonly customDataStore?: DataStoreCustomDataStore;
  /**
  * The persistent, unique ID for the data store. It can be any combination of `[a-zA-Z0-9._-]`. This property is system-assigned if not specified. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#data_store_id DataStore#data_store_id}
  */
  readonly dataStoreId?: string;
  /**
  * A JDBC data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#jdbc_data_store DataStore#jdbc_data_store}
  */
  readonly jdbcDataStore?: DataStoreJdbcDataStore;
  /**
  * An LDAP Data Store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#ldap_data_store DataStore#ldap_data_store}
  */
  readonly ldapDataStore?: DataStoreLdapDataStore;
  /**
  * Whether attribute values should be masked in the log. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#mask_attribute_values DataStore#mask_attribute_values}
  */
  readonly maskAttributeValues?: boolean | cdktf.IResolvable;
  /**
  * A PingOne LDAP Gateway data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#ping_one_ldap_gateway_data_store DataStore#ping_one_ldap_gateway_data_store}
  */
  readonly pingOneLdapGatewayDataStore?: DataStorePingOneLdapGatewayDataStore;
}
export interface DataStoreCustomDataStoreConfigurationFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#name DataStore#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#value DataStore#value}
  */
  readonly value: string;
}

export function dataStoreCustomDataStoreConfigurationFieldsToTerraform(struct?: DataStoreCustomDataStoreConfigurationFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataStoreCustomDataStoreConfigurationFieldsToHclTerraform(struct?: DataStoreCustomDataStoreConfigurationFields | cdktf.IResolvable): any {
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

export class DataStoreCustomDataStoreConfigurationFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStoreCustomDataStoreConfigurationFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataStoreCustomDataStoreConfigurationFields | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
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

export class DataStoreCustomDataStoreConfigurationFieldsList extends cdktf.ComplexList {
  public internalValue? : DataStoreCustomDataStoreConfigurationFields[] | cdktf.IResolvable

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
  public get(index: number): DataStoreCustomDataStoreConfigurationFieldsOutputReference {
    return new DataStoreCustomDataStoreConfigurationFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStoreCustomDataStoreConfigurationFieldsAll {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#name DataStore#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#value DataStore#value}
  */
  readonly value: string;
}

export function dataStoreCustomDataStoreConfigurationFieldsAllToTerraform(struct?: DataStoreCustomDataStoreConfigurationFieldsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataStoreCustomDataStoreConfigurationFieldsAllToHclTerraform(struct?: DataStoreCustomDataStoreConfigurationFieldsAll): any {
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

export class DataStoreCustomDataStoreConfigurationFieldsAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStoreCustomDataStoreConfigurationFieldsAll | undefined {
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

  public set internalValue(value: DataStoreCustomDataStoreConfigurationFieldsAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
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

export class DataStoreCustomDataStoreConfigurationFieldsAllList extends cdktf.ComplexList {
  public internalValue? : DataStoreCustomDataStoreConfigurationFieldsAll[] | cdktf.IResolvable

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
  public get(index: number): DataStoreCustomDataStoreConfigurationFieldsAllOutputReference {
    return new DataStoreCustomDataStoreConfigurationFieldsAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStoreCustomDataStoreConfigurationSensitiveFields {
  /**
  * For encrypted or hashed fields, this attribute contains the encrypted representation of the field's value, if a value is defined. Either this attribute or `value` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#encrypted_value DataStore#encrypted_value}
  */
  readonly encryptedValue?: string;
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#name DataStore#name}
  */
  readonly name: string;
  /**
  * The sensitive value for the configuration field. Either this attribute or `encrypted_value` must be specified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#value DataStore#value}
  */
  readonly value?: string;
}

export function dataStoreCustomDataStoreConfigurationSensitiveFieldsToTerraform(struct?: DataStoreCustomDataStoreConfigurationSensitiveFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_value: cdktf.stringToTerraform(struct!.encryptedValue),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataStoreCustomDataStoreConfigurationSensitiveFieldsToHclTerraform(struct?: DataStoreCustomDataStoreConfigurationSensitiveFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_value: {
      value: cdktf.stringToHclTerraform(struct!.encryptedValue),
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

export class DataStoreCustomDataStoreConfigurationSensitiveFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStoreCustomDataStoreConfigurationSensitiveFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedValue = this._encryptedValue;
    }
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

  public set internalValue(value: DataStoreCustomDataStoreConfigurationSensitiveFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptedValue = undefined;
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
      this._encryptedValue = value.encryptedValue;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // encrypted_value - computed: true, optional: true, required: false
  private _encryptedValue?: string; 
  public get encryptedValue() {
    return this.getStringAttribute('encrypted_value');
  }
  public set encryptedValue(value: string) {
    this._encryptedValue = value;
  }
  public resetEncryptedValue() {
    this._encryptedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedValueInput() {
    return this._encryptedValue;
  }

  // name - computed: true, optional: false, required: true
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

export class DataStoreCustomDataStoreConfigurationSensitiveFieldsList extends cdktf.ComplexList {
  public internalValue? : DataStoreCustomDataStoreConfigurationSensitiveFields[] | cdktf.IResolvable

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
  public get(index: number): DataStoreCustomDataStoreConfigurationSensitiveFieldsOutputReference {
    return new DataStoreCustomDataStoreConfigurationSensitiveFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStoreCustomDataStoreConfigurationTablesRowsFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#name DataStore#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#value DataStore#value}
  */
  readonly value: string;
}

export function dataStoreCustomDataStoreConfigurationTablesRowsFieldsToTerraform(struct?: DataStoreCustomDataStoreConfigurationTablesRowsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataStoreCustomDataStoreConfigurationTablesRowsFieldsToHclTerraform(struct?: DataStoreCustomDataStoreConfigurationTablesRowsFields | cdktf.IResolvable): any {
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

export class DataStoreCustomDataStoreConfigurationTablesRowsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStoreCustomDataStoreConfigurationTablesRowsFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataStoreCustomDataStoreConfigurationTablesRowsFields | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
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

export class DataStoreCustomDataStoreConfigurationTablesRowsFieldsList extends cdktf.ComplexList {
  public internalValue? : DataStoreCustomDataStoreConfigurationTablesRowsFields[] | cdktf.IResolvable

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
  public get(index: number): DataStoreCustomDataStoreConfigurationTablesRowsFieldsOutputReference {
    return new DataStoreCustomDataStoreConfigurationTablesRowsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStoreCustomDataStoreConfigurationTablesRowsSensitiveFields {
  /**
  * For encrypted or hashed fields, this attribute contains the encrypted representation of the field's value, if a value is defined. Either this attribute or `value` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#encrypted_value DataStore#encrypted_value}
  */
  readonly encryptedValue?: string;
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#name DataStore#name}
  */
  readonly name: string;
  /**
  * The sensitive value for the configuration field. Either this attribute or `encrypted_value` must be specified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#value DataStore#value}
  */
  readonly value?: string;
}

export function dataStoreCustomDataStoreConfigurationTablesRowsSensitiveFieldsToTerraform(struct?: DataStoreCustomDataStoreConfigurationTablesRowsSensitiveFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_value: cdktf.stringToTerraform(struct!.encryptedValue),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataStoreCustomDataStoreConfigurationTablesRowsSensitiveFieldsToHclTerraform(struct?: DataStoreCustomDataStoreConfigurationTablesRowsSensitiveFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_value: {
      value: cdktf.stringToHclTerraform(struct!.encryptedValue),
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

export class DataStoreCustomDataStoreConfigurationTablesRowsSensitiveFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStoreCustomDataStoreConfigurationTablesRowsSensitiveFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedValue = this._encryptedValue;
    }
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

  public set internalValue(value: DataStoreCustomDataStoreConfigurationTablesRowsSensitiveFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptedValue = undefined;
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
      this._encryptedValue = value.encryptedValue;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // encrypted_value - computed: true, optional: true, required: false
  private _encryptedValue?: string; 
  public get encryptedValue() {
    return this.getStringAttribute('encrypted_value');
  }
  public set encryptedValue(value: string) {
    this._encryptedValue = value;
  }
  public resetEncryptedValue() {
    this._encryptedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedValueInput() {
    return this._encryptedValue;
  }

  // name - computed: true, optional: false, required: true
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

export class DataStoreCustomDataStoreConfigurationTablesRowsSensitiveFieldsList extends cdktf.ComplexList {
  public internalValue? : DataStoreCustomDataStoreConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable

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
  public get(index: number): DataStoreCustomDataStoreConfigurationTablesRowsSensitiveFieldsOutputReference {
    return new DataStoreCustomDataStoreConfigurationTablesRowsSensitiveFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStoreCustomDataStoreConfigurationTablesRows {
  /**
  * Whether this row is the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#default_row DataStore#default_row}
  */
  readonly defaultRow?: boolean | cdktf.IResolvable;
  /**
  * The configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#fields DataStore#fields}
  */
  readonly fields?: DataStoreCustomDataStoreConfigurationTablesRowsFields[] | cdktf.IResolvable;
  /**
  * The sensitive configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#sensitive_fields DataStore#sensitive_fields}
  */
  readonly sensitiveFields?: DataStoreCustomDataStoreConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable;
}

export function dataStoreCustomDataStoreConfigurationTablesRowsToTerraform(struct?: DataStoreCustomDataStoreConfigurationTablesRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_row: cdktf.booleanToTerraform(struct!.defaultRow),
    fields: cdktf.listMapper(dataStoreCustomDataStoreConfigurationTablesRowsFieldsToTerraform, false)(struct!.fields),
    sensitive_fields: cdktf.listMapper(dataStoreCustomDataStoreConfigurationTablesRowsSensitiveFieldsToTerraform, false)(struct!.sensitiveFields),
  }
}


export function dataStoreCustomDataStoreConfigurationTablesRowsToHclTerraform(struct?: DataStoreCustomDataStoreConfigurationTablesRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_row: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fields: {
      value: cdktf.listMapperHcl(dataStoreCustomDataStoreConfigurationTablesRowsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "DataStoreCustomDataStoreConfigurationTablesRowsFieldsList",
    },
    sensitive_fields: {
      value: cdktf.listMapperHcl(dataStoreCustomDataStoreConfigurationTablesRowsSensitiveFieldsToHclTerraform, false)(struct!.sensitiveFields),
      isBlock: true,
      type: "set",
      storageClassType: "DataStoreCustomDataStoreConfigurationTablesRowsSensitiveFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStoreCustomDataStoreConfigurationTablesRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStoreCustomDataStoreConfigurationTablesRows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRow !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRow = this._defaultRow;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._sensitiveFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveFields = this._sensitiveFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStoreCustomDataStoreConfigurationTablesRows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultRow = undefined;
      this._fields.internalValue = undefined;
      this._sensitiveFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultRow = value.defaultRow;
      this._fields.internalValue = value.fields;
      this._sensitiveFields.internalValue = value.sensitiveFields;
    }
  }

  // default_row - computed: true, optional: true, required: false
  private _defaultRow?: boolean | cdktf.IResolvable; 
  public get defaultRow() {
    return this.getBooleanAttribute('default_row');
  }
  public set defaultRow(value: boolean | cdktf.IResolvable) {
    this._defaultRow = value;
  }
  public resetDefaultRow() {
    this._defaultRow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRowInput() {
    return this._defaultRow;
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new DataStoreCustomDataStoreConfigurationTablesRowsFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataStoreCustomDataStoreConfigurationTablesRowsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // sensitive_fields - computed: true, optional: true, required: false
  private _sensitiveFields = new DataStoreCustomDataStoreConfigurationTablesRowsSensitiveFieldsList(this, "sensitive_fields", true);
  public get sensitiveFields() {
    return this._sensitiveFields;
  }
  public putSensitiveFields(value: DataStoreCustomDataStoreConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable) {
    this._sensitiveFields.internalValue = value;
  }
  public resetSensitiveFields() {
    this._sensitiveFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveFieldsInput() {
    return this._sensitiveFields.internalValue;
  }
}

export class DataStoreCustomDataStoreConfigurationTablesRowsList extends cdktf.ComplexList {
  public internalValue? : DataStoreCustomDataStoreConfigurationTablesRows[] | cdktf.IResolvable

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
  public get(index: number): DataStoreCustomDataStoreConfigurationTablesRowsOutputReference {
    return new DataStoreCustomDataStoreConfigurationTablesRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStoreCustomDataStoreConfigurationTables {
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#name DataStore#name}
  */
  readonly name: string;
  /**
  * List of table rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#rows DataStore#rows}
  */
  readonly rows?: DataStoreCustomDataStoreConfigurationTablesRows[] | cdktf.IResolvable;
}

export function dataStoreCustomDataStoreConfigurationTablesToTerraform(struct?: DataStoreCustomDataStoreConfigurationTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rows: cdktf.listMapper(dataStoreCustomDataStoreConfigurationTablesRowsToTerraform, false)(struct!.rows),
  }
}


export function dataStoreCustomDataStoreConfigurationTablesToHclTerraform(struct?: DataStoreCustomDataStoreConfigurationTables | cdktf.IResolvable): any {
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
    rows: {
      value: cdktf.listMapperHcl(dataStoreCustomDataStoreConfigurationTablesRowsToHclTerraform, false)(struct!.rows),
      isBlock: true,
      type: "list",
      storageClassType: "DataStoreCustomDataStoreConfigurationTablesRowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStoreCustomDataStoreConfigurationTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStoreCustomDataStoreConfigurationTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStoreCustomDataStoreConfigurationTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._rows.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._rows.internalValue = value.rows;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // rows - computed: true, optional: true, required: false
  private _rows = new DataStoreCustomDataStoreConfigurationTablesRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: DataStoreCustomDataStoreConfigurationTablesRows[] | cdktf.IResolvable) {
    this._rows.internalValue = value;
  }
  public resetRows() {
    this._rows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows.internalValue;
  }
}

export class DataStoreCustomDataStoreConfigurationTablesList extends cdktf.ComplexList {
  public internalValue? : DataStoreCustomDataStoreConfigurationTables[] | cdktf.IResolvable

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
  public get(index: number): DataStoreCustomDataStoreConfigurationTablesOutputReference {
    return new DataStoreCustomDataStoreConfigurationTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStoreCustomDataStoreConfigurationTablesAllRowsFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#name DataStore#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#value DataStore#value}
  */
  readonly value: string;
}

export function dataStoreCustomDataStoreConfigurationTablesAllRowsFieldsToTerraform(struct?: DataStoreCustomDataStoreConfigurationTablesAllRowsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataStoreCustomDataStoreConfigurationTablesAllRowsFieldsToHclTerraform(struct?: DataStoreCustomDataStoreConfigurationTablesAllRowsFields | cdktf.IResolvable): any {
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

export class DataStoreCustomDataStoreConfigurationTablesAllRowsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStoreCustomDataStoreConfigurationTablesAllRowsFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataStoreCustomDataStoreConfigurationTablesAllRowsFields | cdktf.IResolvable | undefined) {
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

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: false, required: true
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

export class DataStoreCustomDataStoreConfigurationTablesAllRowsFieldsList extends cdktf.ComplexList {
  public internalValue? : DataStoreCustomDataStoreConfigurationTablesAllRowsFields[] | cdktf.IResolvable

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
  public get(index: number): DataStoreCustomDataStoreConfigurationTablesAllRowsFieldsOutputReference {
    return new DataStoreCustomDataStoreConfigurationTablesAllRowsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStoreCustomDataStoreConfigurationTablesAllRows {
  /**
  * Whether this row is the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#default_row DataStore#default_row}
  */
  readonly defaultRow?: boolean | cdktf.IResolvable;
  /**
  * The configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#fields DataStore#fields}
  */
  readonly fields?: DataStoreCustomDataStoreConfigurationTablesAllRowsFields[] | cdktf.IResolvable;
}

export function dataStoreCustomDataStoreConfigurationTablesAllRowsToTerraform(struct?: DataStoreCustomDataStoreConfigurationTablesAllRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_row: cdktf.booleanToTerraform(struct!.defaultRow),
    fields: cdktf.listMapper(dataStoreCustomDataStoreConfigurationTablesAllRowsFieldsToTerraform, false)(struct!.fields),
  }
}


export function dataStoreCustomDataStoreConfigurationTablesAllRowsToHclTerraform(struct?: DataStoreCustomDataStoreConfigurationTablesAllRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_row: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fields: {
      value: cdktf.listMapperHcl(dataStoreCustomDataStoreConfigurationTablesAllRowsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "DataStoreCustomDataStoreConfigurationTablesAllRowsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStoreCustomDataStoreConfigurationTablesAllRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStoreCustomDataStoreConfigurationTablesAllRows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRow !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRow = this._defaultRow;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStoreCustomDataStoreConfigurationTablesAllRows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultRow = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultRow = value.defaultRow;
      this._fields.internalValue = value.fields;
    }
  }

  // default_row - computed: true, optional: true, required: false
  private _defaultRow?: boolean | cdktf.IResolvable; 
  public get defaultRow() {
    return this.getBooleanAttribute('default_row');
  }
  public set defaultRow(value: boolean | cdktf.IResolvable) {
    this._defaultRow = value;
  }
  public resetDefaultRow() {
    this._defaultRow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRowInput() {
    return this._defaultRow;
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new DataStoreCustomDataStoreConfigurationTablesAllRowsFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataStoreCustomDataStoreConfigurationTablesAllRowsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

export class DataStoreCustomDataStoreConfigurationTablesAllRowsList extends cdktf.ComplexList {
  public internalValue? : DataStoreCustomDataStoreConfigurationTablesAllRows[] | cdktf.IResolvable

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
  public get(index: number): DataStoreCustomDataStoreConfigurationTablesAllRowsOutputReference {
    return new DataStoreCustomDataStoreConfigurationTablesAllRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStoreCustomDataStoreConfigurationTablesAll {
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#name DataStore#name}
  */
  readonly name: string;
  /**
  * List of table rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#rows DataStore#rows}
  */
  readonly rows?: DataStoreCustomDataStoreConfigurationTablesAllRows[] | cdktf.IResolvable;
}

export function dataStoreCustomDataStoreConfigurationTablesAllToTerraform(struct?: DataStoreCustomDataStoreConfigurationTablesAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rows: cdktf.listMapper(dataStoreCustomDataStoreConfigurationTablesAllRowsToTerraform, false)(struct!.rows),
  }
}


export function dataStoreCustomDataStoreConfigurationTablesAllToHclTerraform(struct?: DataStoreCustomDataStoreConfigurationTablesAll): any {
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
    rows: {
      value: cdktf.listMapperHcl(dataStoreCustomDataStoreConfigurationTablesAllRowsToHclTerraform, false)(struct!.rows),
      isBlock: true,
      type: "list",
      storageClassType: "DataStoreCustomDataStoreConfigurationTablesAllRowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStoreCustomDataStoreConfigurationTablesAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStoreCustomDataStoreConfigurationTablesAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rows = this._rows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStoreCustomDataStoreConfigurationTablesAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._rows.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._rows.internalValue = value.rows;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // rows - computed: true, optional: true, required: false
  private _rows = new DataStoreCustomDataStoreConfigurationTablesAllRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: DataStoreCustomDataStoreConfigurationTablesAllRows[] | cdktf.IResolvable) {
    this._rows.internalValue = value;
  }
  public resetRows() {
    this._rows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsInput() {
    return this._rows.internalValue;
  }
}

export class DataStoreCustomDataStoreConfigurationTablesAllList extends cdktf.ComplexList {
  public internalValue? : DataStoreCustomDataStoreConfigurationTablesAll[] | cdktf.IResolvable

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
  public get(index: number): DataStoreCustomDataStoreConfigurationTablesAllOutputReference {
    return new DataStoreCustomDataStoreConfigurationTablesAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStoreCustomDataStoreConfiguration {
  /**
  * List of configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#fields DataStore#fields}
  */
  readonly fields?: DataStoreCustomDataStoreConfigurationFields[] | cdktf.IResolvable;
  /**
  * List of sensitive configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#sensitive_fields DataStore#sensitive_fields}
  */
  readonly sensitiveFields?: DataStoreCustomDataStoreConfigurationSensitiveFields[] | cdktf.IResolvable;
  /**
  * List of configuration tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#tables DataStore#tables}
  */
  readonly tables?: DataStoreCustomDataStoreConfigurationTables[] | cdktf.IResolvable;
}

export function dataStoreCustomDataStoreConfigurationToTerraform(struct?: DataStoreCustomDataStoreConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(dataStoreCustomDataStoreConfigurationFieldsToTerraform, false)(struct!.fields),
    sensitive_fields: cdktf.listMapper(dataStoreCustomDataStoreConfigurationSensitiveFieldsToTerraform, false)(struct!.sensitiveFields),
    tables: cdktf.listMapper(dataStoreCustomDataStoreConfigurationTablesToTerraform, false)(struct!.tables),
  }
}


export function dataStoreCustomDataStoreConfigurationToHclTerraform(struct?: DataStoreCustomDataStoreConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(dataStoreCustomDataStoreConfigurationFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "DataStoreCustomDataStoreConfigurationFieldsList",
    },
    sensitive_fields: {
      value: cdktf.listMapperHcl(dataStoreCustomDataStoreConfigurationSensitiveFieldsToHclTerraform, false)(struct!.sensitiveFields),
      isBlock: true,
      type: "set",
      storageClassType: "DataStoreCustomDataStoreConfigurationSensitiveFieldsList",
    },
    tables: {
      value: cdktf.listMapperHcl(dataStoreCustomDataStoreConfigurationTablesToHclTerraform, false)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "DataStoreCustomDataStoreConfigurationTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStoreCustomDataStoreConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStoreCustomDataStoreConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._sensitiveFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveFields = this._sensitiveFields?.internalValue;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStoreCustomDataStoreConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
      this._sensitiveFields.internalValue = undefined;
      this._tables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
      this._sensitiveFields.internalValue = value.sensitiveFields;
      this._tables.internalValue = value.tables;
    }
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new DataStoreCustomDataStoreConfigurationFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataStoreCustomDataStoreConfigurationFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // fields_all - computed: true, optional: false, required: false
  private _fieldsAll = new DataStoreCustomDataStoreConfigurationFieldsAllList(this, "fields_all", true);
  public get fieldsAll() {
    return this._fieldsAll;
  }

  // sensitive_fields - computed: true, optional: true, required: false
  private _sensitiveFields = new DataStoreCustomDataStoreConfigurationSensitiveFieldsList(this, "sensitive_fields", true);
  public get sensitiveFields() {
    return this._sensitiveFields;
  }
  public putSensitiveFields(value: DataStoreCustomDataStoreConfigurationSensitiveFields[] | cdktf.IResolvable) {
    this._sensitiveFields.internalValue = value;
  }
  public resetSensitiveFields() {
    this._sensitiveFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveFieldsInput() {
    return this._sensitiveFields.internalValue;
  }

  // tables - computed: true, optional: true, required: false
  private _tables = new DataStoreCustomDataStoreConfigurationTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: DataStoreCustomDataStoreConfigurationTables[] | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }

  // tables_all - computed: true, optional: false, required: false
  private _tablesAll = new DataStoreCustomDataStoreConfigurationTablesAllList(this, "tables_all", false);
  public get tablesAll() {
    return this._tablesAll;
  }
}
export interface DataStoreCustomDataStoreParentRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#id DataStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataStoreCustomDataStoreParentRefToTerraform(struct?: DataStoreCustomDataStoreParentRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataStoreCustomDataStoreParentRefToHclTerraform(struct?: DataStoreCustomDataStoreParentRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStoreCustomDataStoreParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStoreCustomDataStoreParentRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStoreCustomDataStoreParentRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataStoreCustomDataStorePluginDescriptorRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#id DataStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataStoreCustomDataStorePluginDescriptorRefToTerraform(struct?: DataStoreCustomDataStorePluginDescriptorRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataStoreCustomDataStorePluginDescriptorRefToHclTerraform(struct?: DataStoreCustomDataStorePluginDescriptorRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStoreCustomDataStorePluginDescriptorRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStoreCustomDataStorePluginDescriptorRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStoreCustomDataStorePluginDescriptorRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataStoreCustomDataStore {
  /**
  * Plugin instance configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#configuration DataStore#configuration}
  */
  readonly configuration: DataStoreCustomDataStoreConfiguration;
  /**
  * The plugin instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#name DataStore#name}
  */
  readonly name: string;
  /**
  * The reference to this plugin's parent instance. The parent reference is only accepted if the plugin type supports parent instances. Note: This parent reference is required if this plugin instance is used as an overriding plugin (e.g. connection adapter overrides). Supported prior to PingFederate `12.0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#parent_ref DataStore#parent_ref}
  */
  readonly parentRef?: DataStoreCustomDataStoreParentRef;
  /**
  * Reference to the plugin descriptor for this instance. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#plugin_descriptor_ref DataStore#plugin_descriptor_ref}
  */
  readonly pluginDescriptorRef: DataStoreCustomDataStorePluginDescriptorRef;
}

export function dataStoreCustomDataStoreToTerraform(struct?: DataStoreCustomDataStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: dataStoreCustomDataStoreConfigurationToTerraform(struct!.configuration),
    name: cdktf.stringToTerraform(struct!.name),
    parent_ref: dataStoreCustomDataStoreParentRefToTerraform(struct!.parentRef),
    plugin_descriptor_ref: dataStoreCustomDataStorePluginDescriptorRefToTerraform(struct!.pluginDescriptorRef),
  }
}


export function dataStoreCustomDataStoreToHclTerraform(struct?: DataStoreCustomDataStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: dataStoreCustomDataStoreConfigurationToHclTerraform(struct!.configuration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataStoreCustomDataStoreConfiguration",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_ref: {
      value: dataStoreCustomDataStoreParentRefToHclTerraform(struct!.parentRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataStoreCustomDataStoreParentRef",
    },
    plugin_descriptor_ref: {
      value: dataStoreCustomDataStorePluginDescriptorRefToHclTerraform(struct!.pluginDescriptorRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataStoreCustomDataStorePluginDescriptorRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStoreCustomDataStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStoreCustomDataStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRef = this._parentRef?.internalValue;
    }
    if (this._pluginDescriptorRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginDescriptorRef = this._pluginDescriptorRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStoreCustomDataStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration.internalValue = undefined;
      this._name = undefined;
      this._parentRef.internalValue = undefined;
      this._pluginDescriptorRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration.internalValue = value.configuration;
      this._name = value.name;
      this._parentRef.internalValue = value.parentRef;
      this._pluginDescriptorRef.internalValue = value.pluginDescriptorRef;
    }
  }

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DataStoreCustomDataStoreConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DataStoreCustomDataStoreConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
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

  // parent_ref - computed: true, optional: true, required: false
  private _parentRef = new DataStoreCustomDataStoreParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataStoreCustomDataStoreParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }

  // plugin_descriptor_ref - computed: false, optional: false, required: true
  private _pluginDescriptorRef = new DataStoreCustomDataStorePluginDescriptorRefOutputReference(this, "plugin_descriptor_ref");
  public get pluginDescriptorRef() {
    return this._pluginDescriptorRef;
  }
  public putPluginDescriptorRef(value: DataStoreCustomDataStorePluginDescriptorRef) {
    this._pluginDescriptorRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginDescriptorRefInput() {
    return this._pluginDescriptorRef.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataStoreJdbcDataStoreConnectionUrlTags {
  /**
  * The location of the JDBC database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#connection_url DataStore#connection_url}
  */
  readonly connectionUrl: string;
  /**
  * Whether this is the default connection. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#default_source DataStore#default_source}
  */
  readonly defaultSource?: boolean | cdktf.IResolvable;
  /**
  * Tags associated with the `connection_url`. At runtime, nodes will use the first `connection_url_tags` element that has a tag that matches with `node.tags` in the run.properties file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#tags DataStore#tags}
  */
  readonly tags?: string;
}

export function dataStoreJdbcDataStoreConnectionUrlTagsToTerraform(struct?: DataStoreJdbcDataStoreConnectionUrlTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    default_source: cdktf.booleanToTerraform(struct!.defaultSource),
    tags: cdktf.stringToTerraform(struct!.tags),
  }
}


export function dataStoreJdbcDataStoreConnectionUrlTagsToHclTerraform(struct?: DataStoreJdbcDataStoreConnectionUrlTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_source: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStoreJdbcDataStoreConnectionUrlTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStoreJdbcDataStoreConnectionUrlTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._defaultSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSource = this._defaultSource;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStoreJdbcDataStoreConnectionUrlTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionUrl = undefined;
      this._defaultSource = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionUrl = value.connectionUrl;
      this._defaultSource = value.defaultSource;
      this._tags = value.tags;
    }
  }

  // connection_url - computed: true, optional: false, required: true
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // default_source - computed: true, optional: true, required: false
  private _defaultSource?: boolean | cdktf.IResolvable; 
  public get defaultSource() {
    return this.getBooleanAttribute('default_source');
  }
  public set defaultSource(value: boolean | cdktf.IResolvable) {
    this._defaultSource = value;
  }
  public resetDefaultSource() {
    this._defaultSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSourceInput() {
    return this._defaultSource;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class DataStoreJdbcDataStoreConnectionUrlTagsList extends cdktf.ComplexList {
  public internalValue? : DataStoreJdbcDataStoreConnectionUrlTags[] | cdktf.IResolvable

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
  public get(index: number): DataStoreJdbcDataStoreConnectionUrlTagsOutputReference {
    return new DataStoreJdbcDataStoreConnectionUrlTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStoreJdbcDataStore {
  /**
  * Indicates that this data store can select more than one record from a column and return the results as a multi-value attribute. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#allow_multi_value_attributes DataStore#allow_multi_value_attributes}
  */
  readonly allowMultiValueAttributes?: boolean | cdktf.IResolvable;
  /**
  * The amount of time in milliseconds a request waits to get a connection from the connection pool before it fails. The default value is `5000` milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#blocking_timeout DataStore#blocking_timeout}
  */
  readonly blockingTimeout?: number;
  /**
  * The default location of the JDBC database. This field is required if `connection_url_tags` is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#connection_url DataStore#connection_url}
  */
  readonly connectionUrl?: string;
  /**
  * The set of connection URLs and associated tags for this JDBC data store. This is required if 'connection_url' is not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#connection_url_tags DataStore#connection_url_tags}
  */
  readonly connectionUrlTags?: DataStoreJdbcDataStoreConnectionUrlTags[] | cdktf.IResolvable;
  /**
  * The name of the driver class used to communicate with the source database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#driver_class DataStore#driver_class}
  */
  readonly driverClass: string;
  /**
  * The encrypted password needed to access the database. Either this attribute or `password` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#encrypted_password DataStore#encrypted_password}
  */
  readonly encryptedPassword?: string;
  /**
  * The length of time in minutes the connection can be idle in the pool before it is closed. The default value is `5` minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#idle_timeout DataStore#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * The largest number of database connections in the connection pool for the given data store. The default value is `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#max_pool_size DataStore#max_pool_size}
  */
  readonly maxPoolSize?: number;
  /**
  * The smallest number of database connections in the connection pool for the given data store. The default value is `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#min_pool_size DataStore#min_pool_size}
  */
  readonly minPoolSize?: number;
  /**
  * The data store name with a unique value across all data sources. Defaults to a combination of the `connection_url` and `username`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#name DataStore#name}
  */
  readonly name?: string;
  /**
  * The password needed to access the database. Either this attribute or `encrypted_password` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#password DataStore#password}
  */
  readonly password?: string;
  /**
  * The name that identifies the user when connecting to the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#user_name DataStore#user_name}
  */
  readonly userName?: string;
  /**
  * A simple SQL statement used by PingFederate at runtime to verify that the database connection is still active and to reconnect if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#validate_connection_sql DataStore#validate_connection_sql}
  */
  readonly validateConnectionSql?: string;
}

export function dataStoreJdbcDataStoreToTerraform(struct?: DataStoreJdbcDataStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_multi_value_attributes: cdktf.booleanToTerraform(struct!.allowMultiValueAttributes),
    blocking_timeout: cdktf.numberToTerraform(struct!.blockingTimeout),
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    connection_url_tags: cdktf.listMapper(dataStoreJdbcDataStoreConnectionUrlTagsToTerraform, false)(struct!.connectionUrlTags),
    driver_class: cdktf.stringToTerraform(struct!.driverClass),
    encrypted_password: cdktf.stringToTerraform(struct!.encryptedPassword),
    idle_timeout: cdktf.numberToTerraform(struct!.idleTimeout),
    max_pool_size: cdktf.numberToTerraform(struct!.maxPoolSize),
    min_pool_size: cdktf.numberToTerraform(struct!.minPoolSize),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    user_name: cdktf.stringToTerraform(struct!.userName),
    validate_connection_sql: cdktf.stringToTerraform(struct!.validateConnectionSql),
  }
}


export function dataStoreJdbcDataStoreToHclTerraform(struct?: DataStoreJdbcDataStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_multi_value_attributes: {
      value: cdktf.booleanToHclTerraform(struct!.allowMultiValueAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    blocking_timeout: {
      value: cdktf.numberToHclTerraform(struct!.blockingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_url_tags: {
      value: cdktf.listMapperHcl(dataStoreJdbcDataStoreConnectionUrlTagsToHclTerraform, false)(struct!.connectionUrlTags),
      isBlock: true,
      type: "set",
      storageClassType: "DataStoreJdbcDataStoreConnectionUrlTagsList",
    },
    driver_class: {
      value: cdktf.stringToHclTerraform(struct!.driverClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted_password: {
      value: cdktf.stringToHclTerraform(struct!.encryptedPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.maxPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.minPoolSize),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate_connection_sql: {
      value: cdktf.stringToHclTerraform(struct!.validateConnectionSql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStoreJdbcDataStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStoreJdbcDataStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowMultiValueAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMultiValueAttributes = this._allowMultiValueAttributes;
    }
    if (this._blockingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockingTimeout = this._blockingTimeout;
    }
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._connectionUrlTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrlTags = this._connectionUrlTags?.internalValue;
    }
    if (this._driverClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverClass = this._driverClass;
    }
    if (this._encryptedPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedPassword = this._encryptedPassword;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._maxPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPoolSize = this._maxPoolSize;
    }
    if (this._minPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPoolSize = this._minPoolSize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._validateConnectionSql !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateConnectionSql = this._validateConnectionSql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStoreJdbcDataStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowMultiValueAttributes = undefined;
      this._blockingTimeout = undefined;
      this._connectionUrl = undefined;
      this._connectionUrlTags.internalValue = undefined;
      this._driverClass = undefined;
      this._encryptedPassword = undefined;
      this._idleTimeout = undefined;
      this._maxPoolSize = undefined;
      this._minPoolSize = undefined;
      this._name = undefined;
      this._password = undefined;
      this._userName = undefined;
      this._validateConnectionSql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowMultiValueAttributes = value.allowMultiValueAttributes;
      this._blockingTimeout = value.blockingTimeout;
      this._connectionUrl = value.connectionUrl;
      this._connectionUrlTags.internalValue = value.connectionUrlTags;
      this._driverClass = value.driverClass;
      this._encryptedPassword = value.encryptedPassword;
      this._idleTimeout = value.idleTimeout;
      this._maxPoolSize = value.maxPoolSize;
      this._minPoolSize = value.minPoolSize;
      this._name = value.name;
      this._password = value.password;
      this._userName = value.userName;
      this._validateConnectionSql = value.validateConnectionSql;
    }
  }

  // allow_multi_value_attributes - computed: true, optional: true, required: false
  private _allowMultiValueAttributes?: boolean | cdktf.IResolvable; 
  public get allowMultiValueAttributes() {
    return this.getBooleanAttribute('allow_multi_value_attributes');
  }
  public set allowMultiValueAttributes(value: boolean | cdktf.IResolvable) {
    this._allowMultiValueAttributes = value;
  }
  public resetAllowMultiValueAttributes() {
    this._allowMultiValueAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMultiValueAttributesInput() {
    return this._allowMultiValueAttributes;
  }

  // blocking_timeout - computed: true, optional: true, required: false
  private _blockingTimeout?: number; 
  public get blockingTimeout() {
    return this.getNumberAttribute('blocking_timeout');
  }
  public set blockingTimeout(value: number) {
    this._blockingTimeout = value;
  }
  public resetBlockingTimeout() {
    this._blockingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingTimeoutInput() {
    return this._blockingTimeout;
  }

  // connection_url - computed: true, optional: true, required: false
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  public resetConnectionUrl() {
    this._connectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // connection_url_tags - computed: true, optional: true, required: false
  private _connectionUrlTags = new DataStoreJdbcDataStoreConnectionUrlTagsList(this, "connection_url_tags", true);
  public get connectionUrlTags() {
    return this._connectionUrlTags;
  }
  public putConnectionUrlTags(value: DataStoreJdbcDataStoreConnectionUrlTags[] | cdktf.IResolvable) {
    this._connectionUrlTags.internalValue = value;
  }
  public resetConnectionUrlTags() {
    this._connectionUrlTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlTagsInput() {
    return this._connectionUrlTags.internalValue;
  }

  // driver_class - computed: false, optional: false, required: true
  private _driverClass?: string; 
  public get driverClass() {
    return this.getStringAttribute('driver_class');
  }
  public set driverClass(value: string) {
    this._driverClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverClassInput() {
    return this._driverClass;
  }

  // encrypted_password - computed: true, optional: true, required: false
  private _encryptedPassword?: string; 
  public get encryptedPassword() {
    return this.getStringAttribute('encrypted_password');
  }
  public set encryptedPassword(value: string) {
    this._encryptedPassword = value;
  }
  public resetEncryptedPassword() {
    this._encryptedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedPasswordInput() {
    return this._encryptedPassword;
  }

  // idle_timeout - computed: true, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // max_pool_size - computed: true, optional: true, required: false
  private _maxPoolSize?: number; 
  public get maxPoolSize() {
    return this.getNumberAttribute('max_pool_size');
  }
  public set maxPoolSize(value: number) {
    this._maxPoolSize = value;
  }
  public resetMaxPoolSize() {
    this._maxPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPoolSizeInput() {
    return this._maxPoolSize;
  }

  // min_pool_size - computed: true, optional: true, required: false
  private _minPoolSize?: number; 
  public get minPoolSize() {
    return this.getNumberAttribute('min_pool_size');
  }
  public set minPoolSize(value: number) {
    this._minPoolSize = value;
  }
  public resetMinPoolSize() {
    this._minPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPoolSizeInput() {
    return this._minPoolSize;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // validate_connection_sql - computed: false, optional: true, required: false
  private _validateConnectionSql?: string; 
  public get validateConnectionSql() {
    return this.getStringAttribute('validate_connection_sql');
  }
  public set validateConnectionSql(value: string) {
    this._validateConnectionSql = value;
  }
  public resetValidateConnectionSql() {
    this._validateConnectionSql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateConnectionSqlInput() {
    return this._validateConnectionSql;
  }
}
export interface DataStoreLdapDataStoreClientTlsCertificateRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#id DataStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataStoreLdapDataStoreClientTlsCertificateRefToTerraform(struct?: DataStoreLdapDataStoreClientTlsCertificateRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataStoreLdapDataStoreClientTlsCertificateRefToHclTerraform(struct?: DataStoreLdapDataStoreClientTlsCertificateRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStoreLdapDataStoreClientTlsCertificateRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStoreLdapDataStoreClientTlsCertificateRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStoreLdapDataStoreClientTlsCertificateRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataStoreLdapDataStoreHostnamesTags {
  /**
  * Whether this is the default connection. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#default_source DataStore#default_source}
  */
  readonly defaultSource?: boolean | cdktf.IResolvable;
  /**
  * The LDAP host names. Failover can be configured by providing multiple host names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#hostnames DataStore#hostnames}
  */
  readonly hostnames: string[];
  /**
  * Tags associated with the host names. At runtime, nodes will use the first `hostnames_tags` element that has a tag that matches with node.tags in the run.properties file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#tags DataStore#tags}
  */
  readonly tags?: string;
}

export function dataStoreLdapDataStoreHostnamesTagsToTerraform(struct?: DataStoreLdapDataStoreHostnamesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_source: cdktf.booleanToTerraform(struct!.defaultSource),
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    tags: cdktf.stringToTerraform(struct!.tags),
  }
}


export function dataStoreLdapDataStoreHostnamesTagsToHclTerraform(struct?: DataStoreLdapDataStoreHostnamesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_source: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStoreLdapDataStoreHostnamesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStoreLdapDataStoreHostnamesTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSource = this._defaultSource;
    }
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStoreLdapDataStoreHostnamesTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultSource = undefined;
      this._hostnames = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultSource = value.defaultSource;
      this._hostnames = value.hostnames;
      this._tags = value.tags;
    }
  }

  // default_source - computed: true, optional: true, required: false
  private _defaultSource?: boolean | cdktf.IResolvable; 
  public get defaultSource() {
    return this.getBooleanAttribute('default_source');
  }
  public set defaultSource(value: boolean | cdktf.IResolvable) {
    this._defaultSource = value;
  }
  public resetDefaultSource() {
    this._defaultSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSourceInput() {
    return this._defaultSource;
  }

  // hostnames - computed: true, optional: false, required: true
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class DataStoreLdapDataStoreHostnamesTagsList extends cdktf.ComplexList {
  public internalValue? : DataStoreLdapDataStoreHostnamesTags[] | cdktf.IResolvable

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
  public get(index: number): DataStoreLdapDataStoreHostnamesTagsOutputReference {
    return new DataStoreLdapDataStoreHostnamesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStoreLdapDataStore {
  /**
  * A list of LDAP attributes to be handled as binary data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#binary_attributes DataStore#binary_attributes}
  */
  readonly binaryAttributes?: string[];
  /**
  * Whether username and password are required. If `true`, then `user_dn` and `client_tls_certificate_ref` cannot be set. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#bind_anonymously DataStore#bind_anonymously}
  */
  readonly bindAnonymously?: boolean | cdktf.IResolvable;
  /**
  * The client TLS certificate used to access the data store. If specified, authentication to the data store will be done using mutual TLS. See '/keyPairs/sslClient' to manage certificates. In order to use this authentication method, you must set either `use_start_tls` or `use_ssl` to `true`. Mutually exclusive with `bind_anonymously` and `user_dn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#client_tls_certificate_ref DataStore#client_tls_certificate_ref}
  */
  readonly clientTlsCertificateRef?: DataStoreLdapDataStoreClientTlsCertificateRef;
  /**
  * The maximum number of milliseconds that a connection attempt should be allowed to continue before returning an error. A value of `-1` causes the pool to wait indefinitely. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#connection_timeout DataStore#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Indicates whether temporary connections can be created when the Maximum Connections threshold is reached. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#create_if_necessary DataStore#create_if_necessary}
  */
  readonly createIfNecessary?: boolean | cdktf.IResolvable;
  /**
  * The maximum time in milliseconds that DNS information are cached. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#dns_ttl DataStore#dns_ttl}
  */
  readonly dnsTtl?: number;
  /**
  * The encrypted password credential required to access the data store. Requires `user_dn` to be set. Only one of this attribute and `password` can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#encrypted_password DataStore#encrypted_password}
  */
  readonly encryptedPassword?: string;
  /**
  * Follow LDAP Referrals in the domain tree. The default value is `false`. This property does not apply to PingDirectory as this functionality is configured in PingDirectory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#follow_ldap_referrals DataStore#follow_ldap_referrals}
  */
  readonly followLdapReferrals?: boolean | cdktf.IResolvable;
  /**
  * The default LDAP host names. This field is required if `hostnames_tags` is not specified. Failover can be configured by providing multiple host names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#hostnames DataStore#hostnames}
  */
  readonly hostnames?: string[];
  /**
  * The set of host names and associated tags for this LDAP data store. This is required if 'hostnames' is not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#hostnames_tags DataStore#hostnames_tags}
  */
  readonly hostnamesTags?: DataStoreLdapDataStoreHostnamesTags[] | cdktf.IResolvable;
  /**
  * The prefix value used to discover LDAP DNS SRV record. Defaults to `_ldap._tcp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#ldap_dns_srv_prefix DataStore#ldap_dns_srv_prefix}
  */
  readonly ldapDnsSrvPrefix?: string;
  /**
  * A type that allows PingFederate to configure many provisioning settings automatically. The `UNBOUNDID_DS` type has been deprecated, please use the `PING_DIRECTORY` type instead. Supported values are `ACTIVE_DIRECTORY`, `ORACLE_DIRECTORY_SERVER`, `ORACLE_UNIFIED_DIRECTORY`, `PING_DIRECTORY`, `GENERIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#ldap_type DataStore#ldap_type}
  */
  readonly ldapType: string;
  /**
  * The prefix value used to discover LDAPS DNS SRV record. Defaults to `_ldaps._tcp`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#ldaps_dns_srv_prefix DataStore#ldaps_dns_srv_prefix}
  */
  readonly ldapsDnsSrvPrefix?: string;
  /**
  * The largest number of active connections that can remain in each pool without releasing extra ones. Defaults to `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#max_connections DataStore#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * The maximum number of milliseconds the pool waits for a connection to become available when trying to obtain a connection from the pool. Setting a value of `-1` causes the pool not to wait at all and to either create a new connection or produce an error (when no connections are available). Defaults to `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#max_wait DataStore#max_wait}
  */
  readonly maxWait?: number;
  /**
  * The smallest number of connections that can remain in each pool, without creating extra ones. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#min_connections DataStore#min_connections}
  */
  readonly minConnections?: number;
  /**
  * The data store name with a unique value across all data sources. Defaults to a combination of the values of `hostnames` and `user_dn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#name DataStore#name}
  */
  readonly name?: string;
  /**
  * The password credential required to access the data store. Requires `user_dn` to be set. Only one of this attribute and `encrypted_password` can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#password DataStore#password}
  */
  readonly password?: string;
  /**
  * The maximum number of milliseconds a connection waits for a response to be returned before producing an error. A value of `-1` causes the connection to wait indefinitely. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#read_timeout DataStore#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * Indicates whether failed operations should be retried. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#retry_failed_operations DataStore#retry_failed_operations}
  */
  readonly retryFailedOperations?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether objects are validated before being borrowed from the pool. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#test_on_borrow DataStore#test_on_borrow}
  */
  readonly testOnBorrow?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether objects are validated before being returned to the pool. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#test_on_return DataStore#test_on_return}
  */
  readonly testOnReturn?: boolean | cdktf.IResolvable;
  /**
  * The frequency, in milliseconds, that the evictor cleans up the connections in the pool. A value of `-1` disables the evictor. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#time_between_evictions DataStore#time_between_evictions}
  */
  readonly timeBetweenEvictions?: number;
  /**
  * Use DNS SRV Records to discover LDAP server information. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#use_dns_srv_records DataStore#use_dns_srv_records}
  */
  readonly useDnsSrvRecords?: boolean | cdktf.IResolvable;
  /**
  * Connects to the LDAP data store using secure SSL/TLS encryption (LDAPS). The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#use_ssl DataStore#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * Connects to the LDAP data store using secure StartTLS encryption. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#use_start_tls DataStore#use_start_tls}
  */
  readonly useStartTls?: boolean | cdktf.IResolvable;
  /**
  * The username credential required to access the data store. Mutually exclusive with `bind_anonymously` and `client_tls_certificate_ref`. `password` or `encrypted_password` must also be set to use this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#user_dn DataStore#user_dn}
  */
  readonly userDn?: string;
  /**
  * Verifies that the presented server certificate includes the address to which the client intended to establish a connection. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#verify_host DataStore#verify_host}
  */
  readonly verifyHost?: boolean | cdktf.IResolvable;
}

export function dataStoreLdapDataStoreToTerraform(struct?: DataStoreLdapDataStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.binaryAttributes),
    bind_anonymously: cdktf.booleanToTerraform(struct!.bindAnonymously),
    client_tls_certificate_ref: dataStoreLdapDataStoreClientTlsCertificateRefToTerraform(struct!.clientTlsCertificateRef),
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    create_if_necessary: cdktf.booleanToTerraform(struct!.createIfNecessary),
    dns_ttl: cdktf.numberToTerraform(struct!.dnsTtl),
    encrypted_password: cdktf.stringToTerraform(struct!.encryptedPassword),
    follow_ldap_referrals: cdktf.booleanToTerraform(struct!.followLdapReferrals),
    hostnames: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostnames),
    hostnames_tags: cdktf.listMapper(dataStoreLdapDataStoreHostnamesTagsToTerraform, false)(struct!.hostnamesTags),
    ldap_dns_srv_prefix: cdktf.stringToTerraform(struct!.ldapDnsSrvPrefix),
    ldap_type: cdktf.stringToTerraform(struct!.ldapType),
    ldaps_dns_srv_prefix: cdktf.stringToTerraform(struct!.ldapsDnsSrvPrefix),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_wait: cdktf.numberToTerraform(struct!.maxWait),
    min_connections: cdktf.numberToTerraform(struct!.minConnections),
    name: cdktf.stringToTerraform(struct!.name),
    password: cdktf.stringToTerraform(struct!.password),
    read_timeout: cdktf.numberToTerraform(struct!.readTimeout),
    retry_failed_operations: cdktf.booleanToTerraform(struct!.retryFailedOperations),
    test_on_borrow: cdktf.booleanToTerraform(struct!.testOnBorrow),
    test_on_return: cdktf.booleanToTerraform(struct!.testOnReturn),
    time_between_evictions: cdktf.numberToTerraform(struct!.timeBetweenEvictions),
    use_dns_srv_records: cdktf.booleanToTerraform(struct!.useDnsSrvRecords),
    use_ssl: cdktf.booleanToTerraform(struct!.useSsl),
    use_start_tls: cdktf.booleanToTerraform(struct!.useStartTls),
    user_dn: cdktf.stringToTerraform(struct!.userDn),
    verify_host: cdktf.booleanToTerraform(struct!.verifyHost),
  }
}


export function dataStoreLdapDataStoreToHclTerraform(struct?: DataStoreLdapDataStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.binaryAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    bind_anonymously: {
      value: cdktf.booleanToHclTerraform(struct!.bindAnonymously),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_tls_certificate_ref: {
      value: dataStoreLdapDataStoreClientTlsCertificateRefToHclTerraform(struct!.clientTlsCertificateRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataStoreLdapDataStoreClientTlsCertificateRef",
    },
    connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_if_necessary: {
      value: cdktf.booleanToHclTerraform(struct!.createIfNecessary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_ttl: {
      value: cdktf.numberToHclTerraform(struct!.dnsTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encrypted_password: {
      value: cdktf.stringToHclTerraform(struct!.encryptedPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    follow_ldap_referrals: {
      value: cdktf.booleanToHclTerraform(struct!.followLdapReferrals),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hostnames: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostnames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostnames_tags: {
      value: cdktf.listMapperHcl(dataStoreLdapDataStoreHostnamesTagsToHclTerraform, false)(struct!.hostnamesTags),
      isBlock: true,
      type: "set",
      storageClassType: "DataStoreLdapDataStoreHostnamesTagsList",
    },
    ldap_dns_srv_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ldapDnsSrvPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_type: {
      value: cdktf.stringToHclTerraform(struct!.ldapType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldaps_dns_srv_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ldapsDnsSrvPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_wait: {
      value: cdktf.numberToHclTerraform(struct!.maxWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_connections: {
      value: cdktf.numberToHclTerraform(struct!.minConnections),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_failed_operations: {
      value: cdktf.booleanToHclTerraform(struct!.retryFailedOperations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    test_on_borrow: {
      value: cdktf.booleanToHclTerraform(struct!.testOnBorrow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    test_on_return: {
      value: cdktf.booleanToHclTerraform(struct!.testOnReturn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_between_evictions: {
      value: cdktf.numberToHclTerraform(struct!.timeBetweenEvictions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_dns_srv_records: {
      value: cdktf.booleanToHclTerraform(struct!.useDnsSrvRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.useSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_start_tls: {
      value: cdktf.booleanToHclTerraform(struct!.useStartTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_dn: {
      value: cdktf.stringToHclTerraform(struct!.userDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_host: {
      value: cdktf.booleanToHclTerraform(struct!.verifyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStoreLdapDataStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStoreLdapDataStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryAttributes = this._binaryAttributes;
    }
    if (this._bindAnonymously !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindAnonymously = this._bindAnonymously;
    }
    if (this._clientTlsCertificateRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTlsCertificateRef = this._clientTlsCertificateRef?.internalValue;
    }
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._createIfNecessary !== undefined) {
      hasAnyValues = true;
      internalValueResult.createIfNecessary = this._createIfNecessary;
    }
    if (this._dnsTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTtl = this._dnsTtl;
    }
    if (this._encryptedPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedPassword = this._encryptedPassword;
    }
    if (this._followLdapReferrals !== undefined) {
      hasAnyValues = true;
      internalValueResult.followLdapReferrals = this._followLdapReferrals;
    }
    if (this._hostnames !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnames = this._hostnames;
    }
    if (this._hostnamesTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnamesTags = this._hostnamesTags?.internalValue;
    }
    if (this._ldapDnsSrvPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapDnsSrvPrefix = this._ldapDnsSrvPrefix;
    }
    if (this._ldapType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapType = this._ldapType;
    }
    if (this._ldapsDnsSrvPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapsDnsSrvPrefix = this._ldapsDnsSrvPrefix;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWait = this._maxWait;
    }
    if (this._minConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.minConnections = this._minConnections;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._retryFailedOperations !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryFailedOperations = this._retryFailedOperations;
    }
    if (this._testOnBorrow !== undefined) {
      hasAnyValues = true;
      internalValueResult.testOnBorrow = this._testOnBorrow;
    }
    if (this._testOnReturn !== undefined) {
      hasAnyValues = true;
      internalValueResult.testOnReturn = this._testOnReturn;
    }
    if (this._timeBetweenEvictions !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeBetweenEvictions = this._timeBetweenEvictions;
    }
    if (this._useDnsSrvRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDnsSrvRecords = this._useDnsSrvRecords;
    }
    if (this._useSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSsl = this._useSsl;
    }
    if (this._useStartTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.useStartTls = this._useStartTls;
    }
    if (this._userDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDn = this._userDn;
    }
    if (this._verifyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyHost = this._verifyHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStoreLdapDataStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binaryAttributes = undefined;
      this._bindAnonymously = undefined;
      this._clientTlsCertificateRef.internalValue = undefined;
      this._connectionTimeout = undefined;
      this._createIfNecessary = undefined;
      this._dnsTtl = undefined;
      this._encryptedPassword = undefined;
      this._followLdapReferrals = undefined;
      this._hostnames = undefined;
      this._hostnamesTags.internalValue = undefined;
      this._ldapDnsSrvPrefix = undefined;
      this._ldapType = undefined;
      this._ldapsDnsSrvPrefix = undefined;
      this._maxConnections = undefined;
      this._maxWait = undefined;
      this._minConnections = undefined;
      this._name = undefined;
      this._password = undefined;
      this._readTimeout = undefined;
      this._retryFailedOperations = undefined;
      this._testOnBorrow = undefined;
      this._testOnReturn = undefined;
      this._timeBetweenEvictions = undefined;
      this._useDnsSrvRecords = undefined;
      this._useSsl = undefined;
      this._useStartTls = undefined;
      this._userDn = undefined;
      this._verifyHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binaryAttributes = value.binaryAttributes;
      this._bindAnonymously = value.bindAnonymously;
      this._clientTlsCertificateRef.internalValue = value.clientTlsCertificateRef;
      this._connectionTimeout = value.connectionTimeout;
      this._createIfNecessary = value.createIfNecessary;
      this._dnsTtl = value.dnsTtl;
      this._encryptedPassword = value.encryptedPassword;
      this._followLdapReferrals = value.followLdapReferrals;
      this._hostnames = value.hostnames;
      this._hostnamesTags.internalValue = value.hostnamesTags;
      this._ldapDnsSrvPrefix = value.ldapDnsSrvPrefix;
      this._ldapType = value.ldapType;
      this._ldapsDnsSrvPrefix = value.ldapsDnsSrvPrefix;
      this._maxConnections = value.maxConnections;
      this._maxWait = value.maxWait;
      this._minConnections = value.minConnections;
      this._name = value.name;
      this._password = value.password;
      this._readTimeout = value.readTimeout;
      this._retryFailedOperations = value.retryFailedOperations;
      this._testOnBorrow = value.testOnBorrow;
      this._testOnReturn = value.testOnReturn;
      this._timeBetweenEvictions = value.timeBetweenEvictions;
      this._useDnsSrvRecords = value.useDnsSrvRecords;
      this._useSsl = value.useSsl;
      this._useStartTls = value.useStartTls;
      this._userDn = value.userDn;
      this._verifyHost = value.verifyHost;
    }
  }

  // binary_attributes - computed: true, optional: true, required: false
  private _binaryAttributes?: string[]; 
  public get binaryAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('binary_attributes'));
  }
  public set binaryAttributes(value: string[]) {
    this._binaryAttributes = value;
  }
  public resetBinaryAttributes() {
    this._binaryAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAttributesInput() {
    return this._binaryAttributes;
  }

  // bind_anonymously - computed: true, optional: true, required: false
  private _bindAnonymously?: boolean | cdktf.IResolvable; 
  public get bindAnonymously() {
    return this.getBooleanAttribute('bind_anonymously');
  }
  public set bindAnonymously(value: boolean | cdktf.IResolvable) {
    this._bindAnonymously = value;
  }
  public resetBindAnonymously() {
    this._bindAnonymously = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindAnonymouslyInput() {
    return this._bindAnonymously;
  }

  // client_tls_certificate_ref - computed: false, optional: true, required: false
  private _clientTlsCertificateRef = new DataStoreLdapDataStoreClientTlsCertificateRefOutputReference(this, "client_tls_certificate_ref");
  public get clientTlsCertificateRef() {
    return this._clientTlsCertificateRef;
  }
  public putClientTlsCertificateRef(value: DataStoreLdapDataStoreClientTlsCertificateRef) {
    this._clientTlsCertificateRef.internalValue = value;
  }
  public resetClientTlsCertificateRef() {
    this._clientTlsCertificateRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsCertificateRefInput() {
    return this._clientTlsCertificateRef.internalValue;
  }

  // connection_timeout - computed: true, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // create_if_necessary - computed: true, optional: true, required: false
  private _createIfNecessary?: boolean | cdktf.IResolvable; 
  public get createIfNecessary() {
    return this.getBooleanAttribute('create_if_necessary');
  }
  public set createIfNecessary(value: boolean | cdktf.IResolvable) {
    this._createIfNecessary = value;
  }
  public resetCreateIfNecessary() {
    this._createIfNecessary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createIfNecessaryInput() {
    return this._createIfNecessary;
  }

  // dns_ttl - computed: true, optional: true, required: false
  private _dnsTtl?: number; 
  public get dnsTtl() {
    return this.getNumberAttribute('dns_ttl');
  }
  public set dnsTtl(value: number) {
    this._dnsTtl = value;
  }
  public resetDnsTtl() {
    this._dnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTtlInput() {
    return this._dnsTtl;
  }

  // encrypted_password - computed: true, optional: true, required: false
  private _encryptedPassword?: string; 
  public get encryptedPassword() {
    return this.getStringAttribute('encrypted_password');
  }
  public set encryptedPassword(value: string) {
    this._encryptedPassword = value;
  }
  public resetEncryptedPassword() {
    this._encryptedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedPasswordInput() {
    return this._encryptedPassword;
  }

  // follow_ldap_referrals - computed: true, optional: true, required: false
  private _followLdapReferrals?: boolean | cdktf.IResolvable; 
  public get followLdapReferrals() {
    return this.getBooleanAttribute('follow_ldap_referrals');
  }
  public set followLdapReferrals(value: boolean | cdktf.IResolvable) {
    this._followLdapReferrals = value;
  }
  public resetFollowLdapReferrals() {
    this._followLdapReferrals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followLdapReferralsInput() {
    return this._followLdapReferrals;
  }

  // hostnames - computed: true, optional: true, required: false
  private _hostnames?: string[]; 
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }
  public set hostnames(value: string[]) {
    this._hostnames = value;
  }
  public resetHostnames() {
    this._hostnames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesInput() {
    return this._hostnames;
  }

  // hostnames_tags - computed: true, optional: true, required: false
  private _hostnamesTags = new DataStoreLdapDataStoreHostnamesTagsList(this, "hostnames_tags", true);
  public get hostnamesTags() {
    return this._hostnamesTags;
  }
  public putHostnamesTags(value: DataStoreLdapDataStoreHostnamesTags[] | cdktf.IResolvable) {
    this._hostnamesTags.internalValue = value;
  }
  public resetHostnamesTags() {
    this._hostnamesTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamesTagsInput() {
    return this._hostnamesTags.internalValue;
  }

  // ldap_dns_srv_prefix - computed: true, optional: true, required: false
  private _ldapDnsSrvPrefix?: string; 
  public get ldapDnsSrvPrefix() {
    return this.getStringAttribute('ldap_dns_srv_prefix');
  }
  public set ldapDnsSrvPrefix(value: string) {
    this._ldapDnsSrvPrefix = value;
  }
  public resetLdapDnsSrvPrefix() {
    this._ldapDnsSrvPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapDnsSrvPrefixInput() {
    return this._ldapDnsSrvPrefix;
  }

  // ldap_type - computed: false, optional: false, required: true
  private _ldapType?: string; 
  public get ldapType() {
    return this.getStringAttribute('ldap_type');
  }
  public set ldapType(value: string) {
    this._ldapType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapTypeInput() {
    return this._ldapType;
  }

  // ldaps_dns_srv_prefix - computed: true, optional: true, required: false
  private _ldapsDnsSrvPrefix?: string; 
  public get ldapsDnsSrvPrefix() {
    return this.getStringAttribute('ldaps_dns_srv_prefix');
  }
  public set ldapsDnsSrvPrefix(value: string) {
    this._ldapsDnsSrvPrefix = value;
  }
  public resetLdapsDnsSrvPrefix() {
    this._ldapsDnsSrvPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapsDnsSrvPrefixInput() {
    return this._ldapsDnsSrvPrefix;
  }

  // max_connections - computed: true, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_wait - computed: true, optional: true, required: false
  private _maxWait?: number; 
  public get maxWait() {
    return this.getNumberAttribute('max_wait');
  }
  public set maxWait(value: number) {
    this._maxWait = value;
  }
  public resetMaxWait() {
    this._maxWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitInput() {
    return this._maxWait;
  }

  // min_connections - computed: true, optional: true, required: false
  private _minConnections?: number; 
  public get minConnections() {
    return this.getNumberAttribute('min_connections');
  }
  public set minConnections(value: number) {
    this._minConnections = value;
  }
  public resetMinConnections() {
    this._minConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minConnectionsInput() {
    return this._minConnections;
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

  // read_timeout - computed: true, optional: true, required: false
  private _readTimeout?: number; 
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }
  public set readTimeout(value: number) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // retry_failed_operations - computed: true, optional: true, required: false
  private _retryFailedOperations?: boolean | cdktf.IResolvable; 
  public get retryFailedOperations() {
    return this.getBooleanAttribute('retry_failed_operations');
  }
  public set retryFailedOperations(value: boolean | cdktf.IResolvable) {
    this._retryFailedOperations = value;
  }
  public resetRetryFailedOperations() {
    this._retryFailedOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryFailedOperationsInput() {
    return this._retryFailedOperations;
  }

  // test_on_borrow - computed: true, optional: true, required: false
  private _testOnBorrow?: boolean | cdktf.IResolvable; 
  public get testOnBorrow() {
    return this.getBooleanAttribute('test_on_borrow');
  }
  public set testOnBorrow(value: boolean | cdktf.IResolvable) {
    this._testOnBorrow = value;
  }
  public resetTestOnBorrow() {
    this._testOnBorrow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testOnBorrowInput() {
    return this._testOnBorrow;
  }

  // test_on_return - computed: true, optional: true, required: false
  private _testOnReturn?: boolean | cdktf.IResolvable; 
  public get testOnReturn() {
    return this.getBooleanAttribute('test_on_return');
  }
  public set testOnReturn(value: boolean | cdktf.IResolvable) {
    this._testOnReturn = value;
  }
  public resetTestOnReturn() {
    this._testOnReturn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testOnReturnInput() {
    return this._testOnReturn;
  }

  // time_between_evictions - computed: true, optional: true, required: false
  private _timeBetweenEvictions?: number; 
  public get timeBetweenEvictions() {
    return this.getNumberAttribute('time_between_evictions');
  }
  public set timeBetweenEvictions(value: number) {
    this._timeBetweenEvictions = value;
  }
  public resetTimeBetweenEvictions() {
    this._timeBetweenEvictions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeBetweenEvictionsInput() {
    return this._timeBetweenEvictions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_dns_srv_records - computed: true, optional: true, required: false
  private _useDnsSrvRecords?: boolean | cdktf.IResolvable; 
  public get useDnsSrvRecords() {
    return this.getBooleanAttribute('use_dns_srv_records');
  }
  public set useDnsSrvRecords(value: boolean | cdktf.IResolvable) {
    this._useDnsSrvRecords = value;
  }
  public resetUseDnsSrvRecords() {
    this._useDnsSrvRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDnsSrvRecordsInput() {
    return this._useDnsSrvRecords;
  }

  // use_ssl - computed: true, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }

  // use_start_tls - computed: true, optional: true, required: false
  private _useStartTls?: boolean | cdktf.IResolvable; 
  public get useStartTls() {
    return this.getBooleanAttribute('use_start_tls');
  }
  public set useStartTls(value: boolean | cdktf.IResolvable) {
    this._useStartTls = value;
  }
  public resetUseStartTls() {
    this._useStartTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStartTlsInput() {
    return this._useStartTls;
  }

  // user_dn - computed: false, optional: true, required: false
  private _userDn?: string; 
  public get userDn() {
    return this.getStringAttribute('user_dn');
  }
  public set userDn(value: string) {
    this._userDn = value;
  }
  public resetUserDn() {
    this._userDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDnInput() {
    return this._userDn;
  }

  // verify_host - computed: true, optional: true, required: false
  private _verifyHost?: boolean | cdktf.IResolvable; 
  public get verifyHost() {
    return this.getBooleanAttribute('verify_host');
  }
  public set verifyHost(value: boolean | cdktf.IResolvable) {
    this._verifyHost = value;
  }
  public resetVerifyHost() {
    this._verifyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyHostInput() {
    return this._verifyHost;
  }
}
export interface DataStorePingOneLdapGatewayDataStorePingOneConnectionRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#id DataStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function dataStorePingOneLdapGatewayDataStorePingOneConnectionRefToTerraform(struct?: DataStorePingOneLdapGatewayDataStorePingOneConnectionRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function dataStorePingOneLdapGatewayDataStorePingOneConnectionRefToHclTerraform(struct?: DataStorePingOneLdapGatewayDataStorePingOneConnectionRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStorePingOneLdapGatewayDataStorePingOneConnectionRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStorePingOneLdapGatewayDataStorePingOneConnectionRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStorePingOneLdapGatewayDataStorePingOneConnectionRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface DataStorePingOneLdapGatewayDataStore {
  /**
  * A list of LDAP attributes to be handled as binary data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#binary_attributes DataStore#binary_attributes}
  */
  readonly binaryAttributes?: string[];
  /**
  * A type that allows PingFederate to configure many provisioning settings automatically. The value is validated against the LDAP gateway configuration in PingOne unless the provider setting 'x_bypass_external_validation_header' is set to `true`. Supported values are `ACTIVE_DIRECTORY`, `ORACLE_DIRECTORY_SERVER`, `ORACLE_UNIFIED_DIRECTORY`, `UNBOUNDID_DS`, `PING_DIRECTORY`, and `GENERIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#ldap_type DataStore#ldap_type}
  */
  readonly ldapType: string;
  /**
  * The data store name with a unique value across all data sources. Defaults to `ping_one_connection_ref.id` plus `ping_one_environment_id` plus `ping_one_ldap_gateway_id`, each separated by `:`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#name DataStore#name}
  */
  readonly name?: string;
  /**
  * Reference to the PingOne connection this gateway uses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#ping_one_connection_ref DataStore#ping_one_connection_ref}
  */
  readonly pingOneConnectionRef: DataStorePingOneLdapGatewayDataStorePingOneConnectionRef;
  /**
  * The environment ID to which the gateway belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#ping_one_environment_id DataStore#ping_one_environment_id}
  */
  readonly pingOneEnvironmentId: string;
  /**
  * The ID of the PingOne LDAP Gateway this data store uses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#ping_one_ldap_gateway_id DataStore#ping_one_ldap_gateway_id}
  */
  readonly pingOneLdapGatewayId: string;
  /**
  * Connects to the LDAP data store using secure SSL/TLS encryption (LDAPS). The default value is `false`. The value is validated against the LDAP gateway configuration in PingOne unless the provider setting 'x_bypass_external_validation_header' is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#use_ssl DataStore#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * Connects to the LDAP data store using StartTLS. The default value is `false`. The value is validated against the LDAP gateway configuration in PingOne unless the provider setting 'x_bypass_external_validation_header' is set to `true`. Supported in PingFederate `12.1` and later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#use_start_tls DataStore#use_start_tls}
  */
  readonly useStartTls?: boolean | cdktf.IResolvable;
}

export function dataStorePingOneLdapGatewayDataStoreToTerraform(struct?: DataStorePingOneLdapGatewayDataStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.binaryAttributes),
    ldap_type: cdktf.stringToTerraform(struct!.ldapType),
    name: cdktf.stringToTerraform(struct!.name),
    ping_one_connection_ref: dataStorePingOneLdapGatewayDataStorePingOneConnectionRefToTerraform(struct!.pingOneConnectionRef),
    ping_one_environment_id: cdktf.stringToTerraform(struct!.pingOneEnvironmentId),
    ping_one_ldap_gateway_id: cdktf.stringToTerraform(struct!.pingOneLdapGatewayId),
    use_ssl: cdktf.booleanToTerraform(struct!.useSsl),
    use_start_tls: cdktf.booleanToTerraform(struct!.useStartTls),
  }
}


export function dataStorePingOneLdapGatewayDataStoreToHclTerraform(struct?: DataStorePingOneLdapGatewayDataStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.binaryAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ldap_type: {
      value: cdktf.stringToHclTerraform(struct!.ldapType),
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
    ping_one_connection_ref: {
      value: dataStorePingOneLdapGatewayDataStorePingOneConnectionRefToHclTerraform(struct!.pingOneConnectionRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataStorePingOneLdapGatewayDataStorePingOneConnectionRef",
    },
    ping_one_environment_id: {
      value: cdktf.stringToHclTerraform(struct!.pingOneEnvironmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ping_one_ldap_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.pingOneLdapGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.useSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_start_tls: {
      value: cdktf.booleanToHclTerraform(struct!.useStartTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataStorePingOneLdapGatewayDataStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStorePingOneLdapGatewayDataStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryAttributes = this._binaryAttributes;
    }
    if (this._ldapType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapType = this._ldapType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pingOneConnectionRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingOneConnectionRef = this._pingOneConnectionRef?.internalValue;
    }
    if (this._pingOneEnvironmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingOneEnvironmentId = this._pingOneEnvironmentId;
    }
    if (this._pingOneLdapGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingOneLdapGatewayId = this._pingOneLdapGatewayId;
    }
    if (this._useSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSsl = this._useSsl;
    }
    if (this._useStartTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.useStartTls = this._useStartTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStorePingOneLdapGatewayDataStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binaryAttributes = undefined;
      this._ldapType = undefined;
      this._name = undefined;
      this._pingOneConnectionRef.internalValue = undefined;
      this._pingOneEnvironmentId = undefined;
      this._pingOneLdapGatewayId = undefined;
      this._useSsl = undefined;
      this._useStartTls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binaryAttributes = value.binaryAttributes;
      this._ldapType = value.ldapType;
      this._name = value.name;
      this._pingOneConnectionRef.internalValue = value.pingOneConnectionRef;
      this._pingOneEnvironmentId = value.pingOneEnvironmentId;
      this._pingOneLdapGatewayId = value.pingOneLdapGatewayId;
      this._useSsl = value.useSsl;
      this._useStartTls = value.useStartTls;
    }
  }

  // binary_attributes - computed: true, optional: true, required: false
  private _binaryAttributes?: string[]; 
  public get binaryAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('binary_attributes'));
  }
  public set binaryAttributes(value: string[]) {
    this._binaryAttributes = value;
  }
  public resetBinaryAttributes() {
    this._binaryAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAttributesInput() {
    return this._binaryAttributes;
  }

  // ldap_type - computed: false, optional: false, required: true
  private _ldapType?: string; 
  public get ldapType() {
    return this.getStringAttribute('ldap_type');
  }
  public set ldapType(value: string) {
    this._ldapType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapTypeInput() {
    return this._ldapType;
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

  // ping_one_connection_ref - computed: false, optional: false, required: true
  private _pingOneConnectionRef = new DataStorePingOneLdapGatewayDataStorePingOneConnectionRefOutputReference(this, "ping_one_connection_ref");
  public get pingOneConnectionRef() {
    return this._pingOneConnectionRef;
  }
  public putPingOneConnectionRef(value: DataStorePingOneLdapGatewayDataStorePingOneConnectionRef) {
    this._pingOneConnectionRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pingOneConnectionRefInput() {
    return this._pingOneConnectionRef.internalValue;
  }

  // ping_one_environment_id - computed: false, optional: false, required: true
  private _pingOneEnvironmentId?: string; 
  public get pingOneEnvironmentId() {
    return this.getStringAttribute('ping_one_environment_id');
  }
  public set pingOneEnvironmentId(value: string) {
    this._pingOneEnvironmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pingOneEnvironmentIdInput() {
    return this._pingOneEnvironmentId;
  }

  // ping_one_ldap_gateway_id - computed: false, optional: false, required: true
  private _pingOneLdapGatewayId?: string; 
  public get pingOneLdapGatewayId() {
    return this.getStringAttribute('ping_one_ldap_gateway_id');
  }
  public set pingOneLdapGatewayId(value: string) {
    this._pingOneLdapGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pingOneLdapGatewayIdInput() {
    return this._pingOneLdapGatewayId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_ssl - computed: true, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }

  // use_start_tls - computed: true, optional: true, required: false
  private _useStartTls?: boolean | cdktf.IResolvable; 
  public get useStartTls() {
    return this.getBooleanAttribute('use_start_tls');
  }
  public set useStartTls(value: boolean | cdktf.IResolvable) {
    this._useStartTls = value;
  }
  public resetUseStartTls() {
    this._useStartTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useStartTlsInput() {
    return this._useStartTls;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store pingfederate_data_store}
*/
export class DataStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_data_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStore to import
  * @param importFromId The id of the existing DataStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_data_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/data_store pingfederate_data_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStoreConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataStoreConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_data_store',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customDataStore.internalValue = config.customDataStore;
    this._dataStoreId = config.dataStoreId;
    this._jdbcDataStore.internalValue = config.jdbcDataStore;
    this._ldapDataStore.internalValue = config.ldapDataStore;
    this._maskAttributeValues = config.maskAttributeValues;
    this._pingOneLdapGatewayDataStore.internalValue = config.pingOneLdapGatewayDataStore;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_data_store - computed: false, optional: true, required: false
  private _customDataStore = new DataStoreCustomDataStoreOutputReference(this, "custom_data_store");
  public get customDataStore() {
    return this._customDataStore;
  }
  public putCustomDataStore(value: DataStoreCustomDataStore) {
    this._customDataStore.internalValue = value;
  }
  public resetCustomDataStore() {
    this._customDataStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataStoreInput() {
    return this._customDataStore.internalValue;
  }

  // data_store_id - computed: true, optional: true, required: false
  private _dataStoreId?: string; 
  public get dataStoreId() {
    return this.getStringAttribute('data_store_id');
  }
  public set dataStoreId(value: string) {
    this._dataStoreId = value;
  }
  public resetDataStoreId() {
    this._dataStoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreIdInput() {
    return this._dataStoreId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jdbc_data_store - computed: false, optional: true, required: false
  private _jdbcDataStore = new DataStoreJdbcDataStoreOutputReference(this, "jdbc_data_store");
  public get jdbcDataStore() {
    return this._jdbcDataStore;
  }
  public putJdbcDataStore(value: DataStoreJdbcDataStore) {
    this._jdbcDataStore.internalValue = value;
  }
  public resetJdbcDataStore() {
    this._jdbcDataStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcDataStoreInput() {
    return this._jdbcDataStore.internalValue;
  }

  // ldap_data_store - computed: false, optional: true, required: false
  private _ldapDataStore = new DataStoreLdapDataStoreOutputReference(this, "ldap_data_store");
  public get ldapDataStore() {
    return this._ldapDataStore;
  }
  public putLdapDataStore(value: DataStoreLdapDataStore) {
    this._ldapDataStore.internalValue = value;
  }
  public resetLdapDataStore() {
    this._ldapDataStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapDataStoreInput() {
    return this._ldapDataStore.internalValue;
  }

  // mask_attribute_values - computed: true, optional: true, required: false
  private _maskAttributeValues?: boolean | cdktf.IResolvable; 
  public get maskAttributeValues() {
    return this.getBooleanAttribute('mask_attribute_values');
  }
  public set maskAttributeValues(value: boolean | cdktf.IResolvable) {
    this._maskAttributeValues = value;
  }
  public resetMaskAttributeValues() {
    this._maskAttributeValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskAttributeValuesInput() {
    return this._maskAttributeValues;
  }

  // ping_one_ldap_gateway_data_store - computed: false, optional: true, required: false
  private _pingOneLdapGatewayDataStore = new DataStorePingOneLdapGatewayDataStoreOutputReference(this, "ping_one_ldap_gateway_data_store");
  public get pingOneLdapGatewayDataStore() {
    return this._pingOneLdapGatewayDataStore;
  }
  public putPingOneLdapGatewayDataStore(value: DataStorePingOneLdapGatewayDataStore) {
    this._pingOneLdapGatewayDataStore.internalValue = value;
  }
  public resetPingOneLdapGatewayDataStore() {
    this._pingOneLdapGatewayDataStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingOneLdapGatewayDataStoreInput() {
    return this._pingOneLdapGatewayDataStore.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_data_store: dataStoreCustomDataStoreToTerraform(this._customDataStore.internalValue),
      data_store_id: cdktf.stringToTerraform(this._dataStoreId),
      jdbc_data_store: dataStoreJdbcDataStoreToTerraform(this._jdbcDataStore.internalValue),
      ldap_data_store: dataStoreLdapDataStoreToTerraform(this._ldapDataStore.internalValue),
      mask_attribute_values: cdktf.booleanToTerraform(this._maskAttributeValues),
      ping_one_ldap_gateway_data_store: dataStorePingOneLdapGatewayDataStoreToTerraform(this._pingOneLdapGatewayDataStore.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_data_store: {
        value: dataStoreCustomDataStoreToHclTerraform(this._customDataStore.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataStoreCustomDataStore",
      },
      data_store_id: {
        value: cdktf.stringToHclTerraform(this._dataStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jdbc_data_store: {
        value: dataStoreJdbcDataStoreToHclTerraform(this._jdbcDataStore.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataStoreJdbcDataStore",
      },
      ldap_data_store: {
        value: dataStoreLdapDataStoreToHclTerraform(this._ldapDataStore.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataStoreLdapDataStore",
      },
      mask_attribute_values: {
        value: cdktf.booleanToHclTerraform(this._maskAttributeValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ping_one_ldap_gateway_data_store: {
        value: dataStorePingOneLdapGatewayDataStoreToHclTerraform(this._pingOneLdapGatewayDataStore.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataStorePingOneLdapGatewayDataStore",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
