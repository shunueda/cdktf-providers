// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthClientRegistrationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Plugin instance configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#configuration OauthClientRegistrationPolicy#configuration}
  */
  readonly configuration: OauthClientRegistrationPolicyConfiguration;
  /**
  * The plugin instance name. The name can be modified once the instance is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#name OauthClientRegistrationPolicy#name}
  */
  readonly name: string;
  /**
  * The reference to this plugin's parent instance. The parent reference is only accepted if the plugin type supports parent instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#parent_ref OauthClientRegistrationPolicy#parent_ref}
  */
  readonly parentRef?: OauthClientRegistrationPolicyParentRef;
  /**
  * Reference to the plugin descriptor for this instance. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#plugin_descriptor_ref OauthClientRegistrationPolicy#plugin_descriptor_ref}
  */
  readonly pluginDescriptorRef: OauthClientRegistrationPolicyPluginDescriptorRef;
  /**
  * The ID of the plugin instance. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#policy_id OauthClientRegistrationPolicy#policy_id}
  */
  readonly policyId: string;
}
export interface OauthClientRegistrationPolicyConfigurationFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#name OauthClientRegistrationPolicy#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#value OauthClientRegistrationPolicy#value}
  */
  readonly value: string;
}

export function oauthClientRegistrationPolicyConfigurationFieldsToTerraform(struct?: OauthClientRegistrationPolicyConfigurationFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oauthClientRegistrationPolicyConfigurationFieldsToHclTerraform(struct?: OauthClientRegistrationPolicyConfigurationFields | cdktf.IResolvable): any {
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

export class OauthClientRegistrationPolicyConfigurationFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthClientRegistrationPolicyConfigurationFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthClientRegistrationPolicyConfigurationFields | cdktf.IResolvable | undefined) {
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

export class OauthClientRegistrationPolicyConfigurationFieldsList extends cdktf.ComplexList {
  public internalValue? : OauthClientRegistrationPolicyConfigurationFields[] | cdktf.IResolvable

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
  public get(index: number): OauthClientRegistrationPolicyConfigurationFieldsOutputReference {
    return new OauthClientRegistrationPolicyConfigurationFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthClientRegistrationPolicyConfigurationFieldsAll {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#name OauthClientRegistrationPolicy#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#value OauthClientRegistrationPolicy#value}
  */
  readonly value: string;
}

export function oauthClientRegistrationPolicyConfigurationFieldsAllToTerraform(struct?: OauthClientRegistrationPolicyConfigurationFieldsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oauthClientRegistrationPolicyConfigurationFieldsAllToHclTerraform(struct?: OauthClientRegistrationPolicyConfigurationFieldsAll): any {
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

export class OauthClientRegistrationPolicyConfigurationFieldsAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthClientRegistrationPolicyConfigurationFieldsAll | undefined {
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

  public set internalValue(value: OauthClientRegistrationPolicyConfigurationFieldsAll | undefined) {
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

export class OauthClientRegistrationPolicyConfigurationFieldsAllList extends cdktf.ComplexList {
  public internalValue? : OauthClientRegistrationPolicyConfigurationFieldsAll[] | cdktf.IResolvable

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
  public get(index: number): OauthClientRegistrationPolicyConfigurationFieldsAllOutputReference {
    return new OauthClientRegistrationPolicyConfigurationFieldsAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthClientRegistrationPolicyConfigurationSensitiveFields {
  /**
  * For encrypted or hashed fields, this attribute contains the encrypted representation of the field's value, if a value is defined. Either this attribute or `value` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#encrypted_value OauthClientRegistrationPolicy#encrypted_value}
  */
  readonly encryptedValue?: string;
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#name OauthClientRegistrationPolicy#name}
  */
  readonly name: string;
  /**
  * The sensitive value for the configuration field. Either this attribute or `encrypted_value` must be specified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#value OauthClientRegistrationPolicy#value}
  */
  readonly value?: string;
}

export function oauthClientRegistrationPolicyConfigurationSensitiveFieldsToTerraform(struct?: OauthClientRegistrationPolicyConfigurationSensitiveFields | cdktf.IResolvable): any {
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


export function oauthClientRegistrationPolicyConfigurationSensitiveFieldsToHclTerraform(struct?: OauthClientRegistrationPolicyConfigurationSensitiveFields | cdktf.IResolvable): any {
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

export class OauthClientRegistrationPolicyConfigurationSensitiveFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthClientRegistrationPolicyConfigurationSensitiveFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthClientRegistrationPolicyConfigurationSensitiveFields | cdktf.IResolvable | undefined) {
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

export class OauthClientRegistrationPolicyConfigurationSensitiveFieldsList extends cdktf.ComplexList {
  public internalValue? : OauthClientRegistrationPolicyConfigurationSensitiveFields[] | cdktf.IResolvable

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
  public get(index: number): OauthClientRegistrationPolicyConfigurationSensitiveFieldsOutputReference {
    return new OauthClientRegistrationPolicyConfigurationSensitiveFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthClientRegistrationPolicyConfigurationTablesRowsFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#name OauthClientRegistrationPolicy#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#value OauthClientRegistrationPolicy#value}
  */
  readonly value: string;
}

export function oauthClientRegistrationPolicyConfigurationTablesRowsFieldsToTerraform(struct?: OauthClientRegistrationPolicyConfigurationTablesRowsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oauthClientRegistrationPolicyConfigurationTablesRowsFieldsToHclTerraform(struct?: OauthClientRegistrationPolicyConfigurationTablesRowsFields | cdktf.IResolvable): any {
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

export class OauthClientRegistrationPolicyConfigurationTablesRowsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthClientRegistrationPolicyConfigurationTablesRowsFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthClientRegistrationPolicyConfigurationTablesRowsFields | cdktf.IResolvable | undefined) {
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

export class OauthClientRegistrationPolicyConfigurationTablesRowsFieldsList extends cdktf.ComplexList {
  public internalValue? : OauthClientRegistrationPolicyConfigurationTablesRowsFields[] | cdktf.IResolvable

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
  public get(index: number): OauthClientRegistrationPolicyConfigurationTablesRowsFieldsOutputReference {
    return new OauthClientRegistrationPolicyConfigurationTablesRowsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFields {
  /**
  * For encrypted or hashed fields, this attribute contains the encrypted representation of the field's value, if a value is defined. Either this attribute or `value` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#encrypted_value OauthClientRegistrationPolicy#encrypted_value}
  */
  readonly encryptedValue?: string;
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#name OauthClientRegistrationPolicy#name}
  */
  readonly name: string;
  /**
  * The sensitive value for the configuration field. Either this attribute or `encrypted_value` must be specified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#value OauthClientRegistrationPolicy#value}
  */
  readonly value?: string;
}

export function oauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFieldsToTerraform(struct?: OauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFields | cdktf.IResolvable): any {
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


export function oauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFieldsToHclTerraform(struct?: OauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFields | cdktf.IResolvable): any {
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

export class OauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFields | cdktf.IResolvable | undefined) {
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

export class OauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFieldsList extends cdktf.ComplexList {
  public internalValue? : OauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable

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
  public get(index: number): OauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFieldsOutputReference {
    return new OauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthClientRegistrationPolicyConfigurationTablesRows {
  /**
  * Whether this row is the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#default_row OauthClientRegistrationPolicy#default_row}
  */
  readonly defaultRow?: boolean | cdktf.IResolvable;
  /**
  * The configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#fields OauthClientRegistrationPolicy#fields}
  */
  readonly fields?: OauthClientRegistrationPolicyConfigurationTablesRowsFields[] | cdktf.IResolvable;
  /**
  * The sensitive configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#sensitive_fields OauthClientRegistrationPolicy#sensitive_fields}
  */
  readonly sensitiveFields?: OauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable;
}

export function oauthClientRegistrationPolicyConfigurationTablesRowsToTerraform(struct?: OauthClientRegistrationPolicyConfigurationTablesRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_row: cdktf.booleanToTerraform(struct!.defaultRow),
    fields: cdktf.listMapper(oauthClientRegistrationPolicyConfigurationTablesRowsFieldsToTerraform, false)(struct!.fields),
    sensitive_fields: cdktf.listMapper(oauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFieldsToTerraform, false)(struct!.sensitiveFields),
  }
}


export function oauthClientRegistrationPolicyConfigurationTablesRowsToHclTerraform(struct?: OauthClientRegistrationPolicyConfigurationTablesRows | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oauthClientRegistrationPolicyConfigurationTablesRowsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "OauthClientRegistrationPolicyConfigurationTablesRowsFieldsList",
    },
    sensitive_fields: {
      value: cdktf.listMapperHcl(oauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFieldsToHclTerraform, false)(struct!.sensitiveFields),
      isBlock: true,
      type: "set",
      storageClassType: "OauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientRegistrationPolicyConfigurationTablesRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthClientRegistrationPolicyConfigurationTablesRows | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthClientRegistrationPolicyConfigurationTablesRows | cdktf.IResolvable | undefined) {
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
  private _fields = new OauthClientRegistrationPolicyConfigurationTablesRowsFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: OauthClientRegistrationPolicyConfigurationTablesRowsFields[] | cdktf.IResolvable) {
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
  private _sensitiveFields = new OauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFieldsList(this, "sensitive_fields", true);
  public get sensitiveFields() {
    return this._sensitiveFields;
  }
  public putSensitiveFields(value: OauthClientRegistrationPolicyConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable) {
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

export class OauthClientRegistrationPolicyConfigurationTablesRowsList extends cdktf.ComplexList {
  public internalValue? : OauthClientRegistrationPolicyConfigurationTablesRows[] | cdktf.IResolvable

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
  public get(index: number): OauthClientRegistrationPolicyConfigurationTablesRowsOutputReference {
    return new OauthClientRegistrationPolicyConfigurationTablesRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthClientRegistrationPolicyConfigurationTables {
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#name OauthClientRegistrationPolicy#name}
  */
  readonly name: string;
  /**
  * List of table rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#rows OauthClientRegistrationPolicy#rows}
  */
  readonly rows?: OauthClientRegistrationPolicyConfigurationTablesRows[] | cdktf.IResolvable;
}

export function oauthClientRegistrationPolicyConfigurationTablesToTerraform(struct?: OauthClientRegistrationPolicyConfigurationTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rows: cdktf.listMapper(oauthClientRegistrationPolicyConfigurationTablesRowsToTerraform, false)(struct!.rows),
  }
}


export function oauthClientRegistrationPolicyConfigurationTablesToHclTerraform(struct?: OauthClientRegistrationPolicyConfigurationTables | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oauthClientRegistrationPolicyConfigurationTablesRowsToHclTerraform, false)(struct!.rows),
      isBlock: true,
      type: "list",
      storageClassType: "OauthClientRegistrationPolicyConfigurationTablesRowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientRegistrationPolicyConfigurationTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthClientRegistrationPolicyConfigurationTables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthClientRegistrationPolicyConfigurationTables | cdktf.IResolvable | undefined) {
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
  private _rows = new OauthClientRegistrationPolicyConfigurationTablesRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: OauthClientRegistrationPolicyConfigurationTablesRows[] | cdktf.IResolvable) {
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

export class OauthClientRegistrationPolicyConfigurationTablesList extends cdktf.ComplexList {
  public internalValue? : OauthClientRegistrationPolicyConfigurationTables[] | cdktf.IResolvable

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
  public get(index: number): OauthClientRegistrationPolicyConfigurationTablesOutputReference {
    return new OauthClientRegistrationPolicyConfigurationTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthClientRegistrationPolicyConfigurationTablesAllRowsFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#name OauthClientRegistrationPolicy#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#value OauthClientRegistrationPolicy#value}
  */
  readonly value: string;
}

export function oauthClientRegistrationPolicyConfigurationTablesAllRowsFieldsToTerraform(struct?: OauthClientRegistrationPolicyConfigurationTablesAllRowsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function oauthClientRegistrationPolicyConfigurationTablesAllRowsFieldsToHclTerraform(struct?: OauthClientRegistrationPolicyConfigurationTablesAllRowsFields | cdktf.IResolvable): any {
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

export class OauthClientRegistrationPolicyConfigurationTablesAllRowsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthClientRegistrationPolicyConfigurationTablesAllRowsFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthClientRegistrationPolicyConfigurationTablesAllRowsFields | cdktf.IResolvable | undefined) {
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

export class OauthClientRegistrationPolicyConfigurationTablesAllRowsFieldsList extends cdktf.ComplexList {
  public internalValue? : OauthClientRegistrationPolicyConfigurationTablesAllRowsFields[] | cdktf.IResolvable

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
  public get(index: number): OauthClientRegistrationPolicyConfigurationTablesAllRowsFieldsOutputReference {
    return new OauthClientRegistrationPolicyConfigurationTablesAllRowsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthClientRegistrationPolicyConfigurationTablesAllRows {
  /**
  * Whether this row is the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#default_row OauthClientRegistrationPolicy#default_row}
  */
  readonly defaultRow?: boolean | cdktf.IResolvable;
  /**
  * The configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#fields OauthClientRegistrationPolicy#fields}
  */
  readonly fields?: OauthClientRegistrationPolicyConfigurationTablesAllRowsFields[] | cdktf.IResolvable;
}

export function oauthClientRegistrationPolicyConfigurationTablesAllRowsToTerraform(struct?: OauthClientRegistrationPolicyConfigurationTablesAllRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_row: cdktf.booleanToTerraform(struct!.defaultRow),
    fields: cdktf.listMapper(oauthClientRegistrationPolicyConfigurationTablesAllRowsFieldsToTerraform, false)(struct!.fields),
  }
}


export function oauthClientRegistrationPolicyConfigurationTablesAllRowsToHclTerraform(struct?: OauthClientRegistrationPolicyConfigurationTablesAllRows | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(oauthClientRegistrationPolicyConfigurationTablesAllRowsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "OauthClientRegistrationPolicyConfigurationTablesAllRowsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientRegistrationPolicyConfigurationTablesAllRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthClientRegistrationPolicyConfigurationTablesAllRows | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthClientRegistrationPolicyConfigurationTablesAllRows | cdktf.IResolvable | undefined) {
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
  private _fields = new OauthClientRegistrationPolicyConfigurationTablesAllRowsFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: OauthClientRegistrationPolicyConfigurationTablesAllRowsFields[] | cdktf.IResolvable) {
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

export class OauthClientRegistrationPolicyConfigurationTablesAllRowsList extends cdktf.ComplexList {
  public internalValue? : OauthClientRegistrationPolicyConfigurationTablesAllRows[] | cdktf.IResolvable

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
  public get(index: number): OauthClientRegistrationPolicyConfigurationTablesAllRowsOutputReference {
    return new OauthClientRegistrationPolicyConfigurationTablesAllRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthClientRegistrationPolicyConfigurationTablesAll {
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#name OauthClientRegistrationPolicy#name}
  */
  readonly name: string;
  /**
  * List of table rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#rows OauthClientRegistrationPolicy#rows}
  */
  readonly rows?: OauthClientRegistrationPolicyConfigurationTablesAllRows[] | cdktf.IResolvable;
}

export function oauthClientRegistrationPolicyConfigurationTablesAllToTerraform(struct?: OauthClientRegistrationPolicyConfigurationTablesAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rows: cdktf.listMapper(oauthClientRegistrationPolicyConfigurationTablesAllRowsToTerraform, false)(struct!.rows),
  }
}


export function oauthClientRegistrationPolicyConfigurationTablesAllToHclTerraform(struct?: OauthClientRegistrationPolicyConfigurationTablesAll): any {
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
      value: cdktf.listMapperHcl(oauthClientRegistrationPolicyConfigurationTablesAllRowsToHclTerraform, false)(struct!.rows),
      isBlock: true,
      type: "list",
      storageClassType: "OauthClientRegistrationPolicyConfigurationTablesAllRowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientRegistrationPolicyConfigurationTablesAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthClientRegistrationPolicyConfigurationTablesAll | undefined {
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

  public set internalValue(value: OauthClientRegistrationPolicyConfigurationTablesAll | undefined) {
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
  private _rows = new OauthClientRegistrationPolicyConfigurationTablesAllRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: OauthClientRegistrationPolicyConfigurationTablesAllRows[] | cdktf.IResolvable) {
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

export class OauthClientRegistrationPolicyConfigurationTablesAllList extends cdktf.ComplexList {
  public internalValue? : OauthClientRegistrationPolicyConfigurationTablesAll[] | cdktf.IResolvable

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
  public get(index: number): OauthClientRegistrationPolicyConfigurationTablesAllOutputReference {
    return new OauthClientRegistrationPolicyConfigurationTablesAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthClientRegistrationPolicyConfiguration {
  /**
  * List of configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#fields OauthClientRegistrationPolicy#fields}
  */
  readonly fields?: OauthClientRegistrationPolicyConfigurationFields[] | cdktf.IResolvable;
  /**
  * List of sensitive configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#sensitive_fields OauthClientRegistrationPolicy#sensitive_fields}
  */
  readonly sensitiveFields?: OauthClientRegistrationPolicyConfigurationSensitiveFields[] | cdktf.IResolvable;
  /**
  * List of configuration tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#tables OauthClientRegistrationPolicy#tables}
  */
  readonly tables?: OauthClientRegistrationPolicyConfigurationTables[] | cdktf.IResolvable;
}

export function oauthClientRegistrationPolicyConfigurationToTerraform(struct?: OauthClientRegistrationPolicyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(oauthClientRegistrationPolicyConfigurationFieldsToTerraform, false)(struct!.fields),
    sensitive_fields: cdktf.listMapper(oauthClientRegistrationPolicyConfigurationSensitiveFieldsToTerraform, false)(struct!.sensitiveFields),
    tables: cdktf.listMapper(oauthClientRegistrationPolicyConfigurationTablesToTerraform, false)(struct!.tables),
  }
}


export function oauthClientRegistrationPolicyConfigurationToHclTerraform(struct?: OauthClientRegistrationPolicyConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(oauthClientRegistrationPolicyConfigurationFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "OauthClientRegistrationPolicyConfigurationFieldsList",
    },
    sensitive_fields: {
      value: cdktf.listMapperHcl(oauthClientRegistrationPolicyConfigurationSensitiveFieldsToHclTerraform, false)(struct!.sensitiveFields),
      isBlock: true,
      type: "set",
      storageClassType: "OauthClientRegistrationPolicyConfigurationSensitiveFieldsList",
    },
    tables: {
      value: cdktf.listMapperHcl(oauthClientRegistrationPolicyConfigurationTablesToHclTerraform, false)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "OauthClientRegistrationPolicyConfigurationTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientRegistrationPolicyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientRegistrationPolicyConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthClientRegistrationPolicyConfiguration | cdktf.IResolvable | undefined) {
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
  private _fields = new OauthClientRegistrationPolicyConfigurationFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: OauthClientRegistrationPolicyConfigurationFields[] | cdktf.IResolvable) {
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
  private _fieldsAll = new OauthClientRegistrationPolicyConfigurationFieldsAllList(this, "fields_all", true);
  public get fieldsAll() {
    return this._fieldsAll;
  }

  // sensitive_fields - computed: true, optional: true, required: false
  private _sensitiveFields = new OauthClientRegistrationPolicyConfigurationSensitiveFieldsList(this, "sensitive_fields", true);
  public get sensitiveFields() {
    return this._sensitiveFields;
  }
  public putSensitiveFields(value: OauthClientRegistrationPolicyConfigurationSensitiveFields[] | cdktf.IResolvable) {
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
  private _tables = new OauthClientRegistrationPolicyConfigurationTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: OauthClientRegistrationPolicyConfigurationTables[] | cdktf.IResolvable) {
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
  private _tablesAll = new OauthClientRegistrationPolicyConfigurationTablesAllList(this, "tables_all", false);
  public get tablesAll() {
    return this._tablesAll;
  }
}
export interface OauthClientRegistrationPolicyParentRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#id OauthClientRegistrationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthClientRegistrationPolicyParentRefToTerraform(struct?: OauthClientRegistrationPolicyParentRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthClientRegistrationPolicyParentRefToHclTerraform(struct?: OauthClientRegistrationPolicyParentRef | cdktf.IResolvable): any {
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

export class OauthClientRegistrationPolicyParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientRegistrationPolicyParentRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthClientRegistrationPolicyParentRef | cdktf.IResolvable | undefined) {
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
export interface OauthClientRegistrationPolicyPluginDescriptorRef {
  /**
  * The ID of the resource. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#id OauthClientRegistrationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthClientRegistrationPolicyPluginDescriptorRefToTerraform(struct?: OauthClientRegistrationPolicyPluginDescriptorRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthClientRegistrationPolicyPluginDescriptorRefToHclTerraform(struct?: OauthClientRegistrationPolicyPluginDescriptorRef | cdktf.IResolvable): any {
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

export class OauthClientRegistrationPolicyPluginDescriptorRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientRegistrationPolicyPluginDescriptorRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthClientRegistrationPolicyPluginDescriptorRef | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy pingfederate_oauth_client_registration_policy}
*/
export class OauthClientRegistrationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_oauth_client_registration_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthClientRegistrationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthClientRegistrationPolicy to import
  * @param importFromId The id of the existing OauthClientRegistrationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthClientRegistrationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_oauth_client_registration_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client_registration_policy pingfederate_oauth_client_registration_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthClientRegistrationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: OauthClientRegistrationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_oauth_client_registration_policy',
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
    this._configuration.internalValue = config.configuration;
    this._name = config.name;
    this._parentRef.internalValue = config.parentRef;
    this._pluginDescriptorRef.internalValue = config.pluginDescriptorRef;
    this._policyId = config.policyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new OauthClientRegistrationPolicyConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: OauthClientRegistrationPolicyConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new OauthClientRegistrationPolicyParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: OauthClientRegistrationPolicyParentRef) {
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
  private _pluginDescriptorRef = new OauthClientRegistrationPolicyPluginDescriptorRefOutputReference(this, "plugin_descriptor_ref");
  public get pluginDescriptorRef() {
    return this._pluginDescriptorRef;
  }
  public putPluginDescriptorRef(value: OauthClientRegistrationPolicyPluginDescriptorRef) {
    this._pluginDescriptorRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginDescriptorRefInput() {
    return this._pluginDescriptorRef.internalValue;
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: oauthClientRegistrationPolicyConfigurationToTerraform(this._configuration.internalValue),
      name: cdktf.stringToTerraform(this._name),
      parent_ref: oauthClientRegistrationPolicyParentRefToTerraform(this._parentRef.internalValue),
      plugin_descriptor_ref: oauthClientRegistrationPolicyPluginDescriptorRefToTerraform(this._pluginDescriptorRef.internalValue),
      policy_id: cdktf.stringToTerraform(this._policyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: oauthClientRegistrationPolicyConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthClientRegistrationPolicyConfiguration",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_ref: {
        value: oauthClientRegistrationPolicyParentRefToHclTerraform(this._parentRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthClientRegistrationPolicyParentRef",
      },
      plugin_descriptor_ref: {
        value: oauthClientRegistrationPolicyPluginDescriptorRefToHclTerraform(this._pluginDescriptorRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthClientRegistrationPolicyPluginDescriptorRef",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
