// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationPublisherConfig extends cdktf.TerraformMetaArguments {
  /**
  * Plugin instance configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#configuration NotificationPublisher#configuration}
  */
  readonly configuration: NotificationPublisherConfiguration;
  /**
  * The plugin instance name. The name can be modified once the instance is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#name NotificationPublisher#name}
  */
  readonly name: string;
  /**
  * The reference to this plugin's parent instance. The parent reference is only accepted if the plugin type supports parent instances. Note: This parent reference is required if this plugin instance is used as an overriding plugin (e.g. connection adapter overrides)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#parent_ref NotificationPublisher#parent_ref}
  */
  readonly parentRef?: NotificationPublisherParentRef;
  /**
  * Reference to the plugin descriptor for this instance. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#plugin_descriptor_ref NotificationPublisher#plugin_descriptor_ref}
  */
  readonly pluginDescriptorRef: NotificationPublisherPluginDescriptorRef;
  /**
  * The ID of the plugin instance. The ID cannot be modified once the instance is created. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#publisher_id NotificationPublisher#publisher_id}
  */
  readonly publisherId: string;
}
export interface NotificationPublisherConfigurationFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#name NotificationPublisher#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#value NotificationPublisher#value}
  */
  readonly value: string;
}

export function notificationPublisherConfigurationFieldsToTerraform(struct?: NotificationPublisherConfigurationFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function notificationPublisherConfigurationFieldsToHclTerraform(struct?: NotificationPublisherConfigurationFields | cdktf.IResolvable): any {
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

export class NotificationPublisherConfigurationFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPublisherConfigurationFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationPublisherConfigurationFields | cdktf.IResolvable | undefined) {
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

export class NotificationPublisherConfigurationFieldsList extends cdktf.ComplexList {
  public internalValue? : NotificationPublisherConfigurationFields[] | cdktf.IResolvable

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
  public get(index: number): NotificationPublisherConfigurationFieldsOutputReference {
    return new NotificationPublisherConfigurationFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPublisherConfigurationFieldsAll {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#name NotificationPublisher#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#value NotificationPublisher#value}
  */
  readonly value: string;
}

export function notificationPublisherConfigurationFieldsAllToTerraform(struct?: NotificationPublisherConfigurationFieldsAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function notificationPublisherConfigurationFieldsAllToHclTerraform(struct?: NotificationPublisherConfigurationFieldsAll): any {
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

export class NotificationPublisherConfigurationFieldsAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPublisherConfigurationFieldsAll | undefined {
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

  public set internalValue(value: NotificationPublisherConfigurationFieldsAll | undefined) {
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

export class NotificationPublisherConfigurationFieldsAllList extends cdktf.ComplexList {
  public internalValue? : NotificationPublisherConfigurationFieldsAll[] | cdktf.IResolvable

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
  public get(index: number): NotificationPublisherConfigurationFieldsAllOutputReference {
    return new NotificationPublisherConfigurationFieldsAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPublisherConfigurationSensitiveFields {
  /**
  * For encrypted or hashed fields, this attribute contains the encrypted representation of the field's value, if a value is defined. Either this attribute or `value` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#encrypted_value NotificationPublisher#encrypted_value}
  */
  readonly encryptedValue?: string;
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#name NotificationPublisher#name}
  */
  readonly name: string;
  /**
  * The sensitive value for the configuration field. Either this attribute or `encrypted_value` must be specified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#value NotificationPublisher#value}
  */
  readonly value?: string;
}

export function notificationPublisherConfigurationSensitiveFieldsToTerraform(struct?: NotificationPublisherConfigurationSensitiveFields | cdktf.IResolvable): any {
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


export function notificationPublisherConfigurationSensitiveFieldsToHclTerraform(struct?: NotificationPublisherConfigurationSensitiveFields | cdktf.IResolvable): any {
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

export class NotificationPublisherConfigurationSensitiveFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPublisherConfigurationSensitiveFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationPublisherConfigurationSensitiveFields | cdktf.IResolvable | undefined) {
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

export class NotificationPublisherConfigurationSensitiveFieldsList extends cdktf.ComplexList {
  public internalValue? : NotificationPublisherConfigurationSensitiveFields[] | cdktf.IResolvable

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
  public get(index: number): NotificationPublisherConfigurationSensitiveFieldsOutputReference {
    return new NotificationPublisherConfigurationSensitiveFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPublisherConfigurationTablesRowsFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#name NotificationPublisher#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#value NotificationPublisher#value}
  */
  readonly value: string;
}

export function notificationPublisherConfigurationTablesRowsFieldsToTerraform(struct?: NotificationPublisherConfigurationTablesRowsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function notificationPublisherConfigurationTablesRowsFieldsToHclTerraform(struct?: NotificationPublisherConfigurationTablesRowsFields | cdktf.IResolvable): any {
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

export class NotificationPublisherConfigurationTablesRowsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPublisherConfigurationTablesRowsFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationPublisherConfigurationTablesRowsFields | cdktf.IResolvable | undefined) {
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

export class NotificationPublisherConfigurationTablesRowsFieldsList extends cdktf.ComplexList {
  public internalValue? : NotificationPublisherConfigurationTablesRowsFields[] | cdktf.IResolvable

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
  public get(index: number): NotificationPublisherConfigurationTablesRowsFieldsOutputReference {
    return new NotificationPublisherConfigurationTablesRowsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPublisherConfigurationTablesRowsSensitiveFields {
  /**
  * For encrypted or hashed fields, this attribute contains the encrypted representation of the field's value, if a value is defined. Either this attribute or `value` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#encrypted_value NotificationPublisher#encrypted_value}
  */
  readonly encryptedValue?: string;
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#name NotificationPublisher#name}
  */
  readonly name: string;
  /**
  * The sensitive value for the configuration field. Either this attribute or `encrypted_value` must be specified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#value NotificationPublisher#value}
  */
  readonly value?: string;
}

export function notificationPublisherConfigurationTablesRowsSensitiveFieldsToTerraform(struct?: NotificationPublisherConfigurationTablesRowsSensitiveFields | cdktf.IResolvable): any {
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


export function notificationPublisherConfigurationTablesRowsSensitiveFieldsToHclTerraform(struct?: NotificationPublisherConfigurationTablesRowsSensitiveFields | cdktf.IResolvable): any {
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

export class NotificationPublisherConfigurationTablesRowsSensitiveFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPublisherConfigurationTablesRowsSensitiveFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationPublisherConfigurationTablesRowsSensitiveFields | cdktf.IResolvable | undefined) {
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

export class NotificationPublisherConfigurationTablesRowsSensitiveFieldsList extends cdktf.ComplexList {
  public internalValue? : NotificationPublisherConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable

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
  public get(index: number): NotificationPublisherConfigurationTablesRowsSensitiveFieldsOutputReference {
    return new NotificationPublisherConfigurationTablesRowsSensitiveFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPublisherConfigurationTablesRows {
  /**
  * Whether this row is the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#default_row NotificationPublisher#default_row}
  */
  readonly defaultRow?: boolean | cdktf.IResolvable;
  /**
  * The configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#fields NotificationPublisher#fields}
  */
  readonly fields?: NotificationPublisherConfigurationTablesRowsFields[] | cdktf.IResolvable;
  /**
  * The sensitive configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#sensitive_fields NotificationPublisher#sensitive_fields}
  */
  readonly sensitiveFields?: NotificationPublisherConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable;
}

export function notificationPublisherConfigurationTablesRowsToTerraform(struct?: NotificationPublisherConfigurationTablesRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_row: cdktf.booleanToTerraform(struct!.defaultRow),
    fields: cdktf.listMapper(notificationPublisherConfigurationTablesRowsFieldsToTerraform, false)(struct!.fields),
    sensitive_fields: cdktf.listMapper(notificationPublisherConfigurationTablesRowsSensitiveFieldsToTerraform, false)(struct!.sensitiveFields),
  }
}


export function notificationPublisherConfigurationTablesRowsToHclTerraform(struct?: NotificationPublisherConfigurationTablesRows | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(notificationPublisherConfigurationTablesRowsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "NotificationPublisherConfigurationTablesRowsFieldsList",
    },
    sensitive_fields: {
      value: cdktf.listMapperHcl(notificationPublisherConfigurationTablesRowsSensitiveFieldsToHclTerraform, false)(struct!.sensitiveFields),
      isBlock: true,
      type: "set",
      storageClassType: "NotificationPublisherConfigurationTablesRowsSensitiveFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPublisherConfigurationTablesRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPublisherConfigurationTablesRows | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationPublisherConfigurationTablesRows | cdktf.IResolvable | undefined) {
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
  private _fields = new NotificationPublisherConfigurationTablesRowsFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: NotificationPublisherConfigurationTablesRowsFields[] | cdktf.IResolvable) {
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
  private _sensitiveFields = new NotificationPublisherConfigurationTablesRowsSensitiveFieldsList(this, "sensitive_fields", true);
  public get sensitiveFields() {
    return this._sensitiveFields;
  }
  public putSensitiveFields(value: NotificationPublisherConfigurationTablesRowsSensitiveFields[] | cdktf.IResolvable) {
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

export class NotificationPublisherConfigurationTablesRowsList extends cdktf.ComplexList {
  public internalValue? : NotificationPublisherConfigurationTablesRows[] | cdktf.IResolvable

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
  public get(index: number): NotificationPublisherConfigurationTablesRowsOutputReference {
    return new NotificationPublisherConfigurationTablesRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPublisherConfigurationTables {
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#name NotificationPublisher#name}
  */
  readonly name: string;
  /**
  * List of table rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#rows NotificationPublisher#rows}
  */
  readonly rows?: NotificationPublisherConfigurationTablesRows[] | cdktf.IResolvable;
}

export function notificationPublisherConfigurationTablesToTerraform(struct?: NotificationPublisherConfigurationTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rows: cdktf.listMapper(notificationPublisherConfigurationTablesRowsToTerraform, false)(struct!.rows),
  }
}


export function notificationPublisherConfigurationTablesToHclTerraform(struct?: NotificationPublisherConfigurationTables | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(notificationPublisherConfigurationTablesRowsToHclTerraform, false)(struct!.rows),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPublisherConfigurationTablesRowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPublisherConfigurationTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPublisherConfigurationTables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationPublisherConfigurationTables | cdktf.IResolvable | undefined) {
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
  private _rows = new NotificationPublisherConfigurationTablesRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: NotificationPublisherConfigurationTablesRows[] | cdktf.IResolvable) {
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

export class NotificationPublisherConfigurationTablesList extends cdktf.ComplexList {
  public internalValue? : NotificationPublisherConfigurationTables[] | cdktf.IResolvable

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
  public get(index: number): NotificationPublisherConfigurationTablesOutputReference {
    return new NotificationPublisherConfigurationTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPublisherConfigurationTablesAllRowsFields {
  /**
  * The name of the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#name NotificationPublisher#name}
  */
  readonly name: string;
  /**
  * The value for the configuration field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#value NotificationPublisher#value}
  */
  readonly value: string;
}

export function notificationPublisherConfigurationTablesAllRowsFieldsToTerraform(struct?: NotificationPublisherConfigurationTablesAllRowsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function notificationPublisherConfigurationTablesAllRowsFieldsToHclTerraform(struct?: NotificationPublisherConfigurationTablesAllRowsFields | cdktf.IResolvable): any {
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

export class NotificationPublisherConfigurationTablesAllRowsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPublisherConfigurationTablesAllRowsFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationPublisherConfigurationTablesAllRowsFields | cdktf.IResolvable | undefined) {
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

export class NotificationPublisherConfigurationTablesAllRowsFieldsList extends cdktf.ComplexList {
  public internalValue? : NotificationPublisherConfigurationTablesAllRowsFields[] | cdktf.IResolvable

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
  public get(index: number): NotificationPublisherConfigurationTablesAllRowsFieldsOutputReference {
    return new NotificationPublisherConfigurationTablesAllRowsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPublisherConfigurationTablesAllRows {
  /**
  * Whether this row is the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#default_row NotificationPublisher#default_row}
  */
  readonly defaultRow?: boolean | cdktf.IResolvable;
  /**
  * The configuration fields in the row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#fields NotificationPublisher#fields}
  */
  readonly fields?: NotificationPublisherConfigurationTablesAllRowsFields[] | cdktf.IResolvable;
}

export function notificationPublisherConfigurationTablesAllRowsToTerraform(struct?: NotificationPublisherConfigurationTablesAllRows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_row: cdktf.booleanToTerraform(struct!.defaultRow),
    fields: cdktf.listMapper(notificationPublisherConfigurationTablesAllRowsFieldsToTerraform, false)(struct!.fields),
  }
}


export function notificationPublisherConfigurationTablesAllRowsToHclTerraform(struct?: NotificationPublisherConfigurationTablesAllRows | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(notificationPublisherConfigurationTablesAllRowsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "NotificationPublisherConfigurationTablesAllRowsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPublisherConfigurationTablesAllRowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPublisherConfigurationTablesAllRows | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationPublisherConfigurationTablesAllRows | cdktf.IResolvable | undefined) {
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
  private _fields = new NotificationPublisherConfigurationTablesAllRowsFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: NotificationPublisherConfigurationTablesAllRowsFields[] | cdktf.IResolvable) {
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

export class NotificationPublisherConfigurationTablesAllRowsList extends cdktf.ComplexList {
  public internalValue? : NotificationPublisherConfigurationTablesAllRows[] | cdktf.IResolvable

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
  public get(index: number): NotificationPublisherConfigurationTablesAllRowsOutputReference {
    return new NotificationPublisherConfigurationTablesAllRowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPublisherConfigurationTablesAll {
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#name NotificationPublisher#name}
  */
  readonly name: string;
  /**
  * List of table rows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#rows NotificationPublisher#rows}
  */
  readonly rows?: NotificationPublisherConfigurationTablesAllRows[] | cdktf.IResolvable;
}

export function notificationPublisherConfigurationTablesAllToTerraform(struct?: NotificationPublisherConfigurationTablesAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    rows: cdktf.listMapper(notificationPublisherConfigurationTablesAllRowsToTerraform, false)(struct!.rows),
  }
}


export function notificationPublisherConfigurationTablesAllToHclTerraform(struct?: NotificationPublisherConfigurationTablesAll): any {
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
      value: cdktf.listMapperHcl(notificationPublisherConfigurationTablesAllRowsToHclTerraform, false)(struct!.rows),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPublisherConfigurationTablesAllRowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPublisherConfigurationTablesAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationPublisherConfigurationTablesAll | undefined {
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

  public set internalValue(value: NotificationPublisherConfigurationTablesAll | undefined) {
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
  private _rows = new NotificationPublisherConfigurationTablesAllRowsList(this, "rows", false);
  public get rows() {
    return this._rows;
  }
  public putRows(value: NotificationPublisherConfigurationTablesAllRows[] | cdktf.IResolvable) {
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

export class NotificationPublisherConfigurationTablesAllList extends cdktf.ComplexList {
  public internalValue? : NotificationPublisherConfigurationTablesAll[] | cdktf.IResolvable

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
  public get(index: number): NotificationPublisherConfigurationTablesAllOutputReference {
    return new NotificationPublisherConfigurationTablesAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationPublisherConfiguration {
  /**
  * List of configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#fields NotificationPublisher#fields}
  */
  readonly fields?: NotificationPublisherConfigurationFields[] | cdktf.IResolvable;
  /**
  * List of sensitive configuration fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#sensitive_fields NotificationPublisher#sensitive_fields}
  */
  readonly sensitiveFields?: NotificationPublisherConfigurationSensitiveFields[] | cdktf.IResolvable;
  /**
  * List of configuration tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#tables NotificationPublisher#tables}
  */
  readonly tables?: NotificationPublisherConfigurationTables[] | cdktf.IResolvable;
}

export function notificationPublisherConfigurationToTerraform(struct?: NotificationPublisherConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(notificationPublisherConfigurationFieldsToTerraform, false)(struct!.fields),
    sensitive_fields: cdktf.listMapper(notificationPublisherConfigurationSensitiveFieldsToTerraform, false)(struct!.sensitiveFields),
    tables: cdktf.listMapper(notificationPublisherConfigurationTablesToTerraform, false)(struct!.tables),
  }
}


export function notificationPublisherConfigurationToHclTerraform(struct?: NotificationPublisherConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(notificationPublisherConfigurationFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "NotificationPublisherConfigurationFieldsList",
    },
    sensitive_fields: {
      value: cdktf.listMapperHcl(notificationPublisherConfigurationSensitiveFieldsToHclTerraform, false)(struct!.sensitiveFields),
      isBlock: true,
      type: "set",
      storageClassType: "NotificationPublisherConfigurationSensitiveFieldsList",
    },
    tables: {
      value: cdktf.listMapperHcl(notificationPublisherConfigurationTablesToHclTerraform, false)(struct!.tables),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationPublisherConfigurationTablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationPublisherConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationPublisherConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationPublisherConfiguration | cdktf.IResolvable | undefined) {
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
  private _fields = new NotificationPublisherConfigurationFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: NotificationPublisherConfigurationFields[] | cdktf.IResolvable) {
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
  private _fieldsAll = new NotificationPublisherConfigurationFieldsAllList(this, "fields_all", true);
  public get fieldsAll() {
    return this._fieldsAll;
  }

  // sensitive_fields - computed: true, optional: true, required: false
  private _sensitiveFields = new NotificationPublisherConfigurationSensitiveFieldsList(this, "sensitive_fields", true);
  public get sensitiveFields() {
    return this._sensitiveFields;
  }
  public putSensitiveFields(value: NotificationPublisherConfigurationSensitiveFields[] | cdktf.IResolvable) {
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
  private _tables = new NotificationPublisherConfigurationTablesList(this, "tables", false);
  public get tables() {
    return this._tables;
  }
  public putTables(value: NotificationPublisherConfigurationTables[] | cdktf.IResolvable) {
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
  private _tablesAll = new NotificationPublisherConfigurationTablesAllList(this, "tables_all", false);
  public get tablesAll() {
    return this._tablesAll;
  }
}
export interface NotificationPublisherParentRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#id NotificationPublisher#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function notificationPublisherParentRefToTerraform(struct?: NotificationPublisherParentRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function notificationPublisherParentRefToHclTerraform(struct?: NotificationPublisherParentRef | cdktf.IResolvable): any {
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

export class NotificationPublisherParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationPublisherParentRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationPublisherParentRef | cdktf.IResolvable | undefined) {
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
export interface NotificationPublisherPluginDescriptorRef {
  /**
  * The ID of the resource. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#id NotificationPublisher#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function notificationPublisherPluginDescriptorRefToTerraform(struct?: NotificationPublisherPluginDescriptorRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function notificationPublisherPluginDescriptorRefToHclTerraform(struct?: NotificationPublisherPluginDescriptorRef | cdktf.IResolvable): any {
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

export class NotificationPublisherPluginDescriptorRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationPublisherPluginDescriptorRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotificationPublisherPluginDescriptorRef | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher pingfederate_notification_publisher}
*/
export class NotificationPublisher extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_notification_publisher";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationPublisher resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationPublisher to import
  * @param importFromId The id of the existing NotificationPublisher that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationPublisher to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_notification_publisher", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/notification_publisher pingfederate_notification_publisher} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationPublisherConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationPublisherConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_notification_publisher',
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
    this._publisherId = config.publisherId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new NotificationPublisherConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: NotificationPublisherConfiguration) {
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
  private _parentRef = new NotificationPublisherParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: NotificationPublisherParentRef) {
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
  private _pluginDescriptorRef = new NotificationPublisherPluginDescriptorRefOutputReference(this, "plugin_descriptor_ref");
  public get pluginDescriptorRef() {
    return this._pluginDescriptorRef;
  }
  public putPluginDescriptorRef(value: NotificationPublisherPluginDescriptorRef) {
    this._pluginDescriptorRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginDescriptorRefInput() {
    return this._pluginDescriptorRef.internalValue;
  }

  // publisher_id - computed: false, optional: false, required: true
  private _publisherId?: string; 
  public get publisherId() {
    return this.getStringAttribute('publisher_id');
  }
  public set publisherId(value: string) {
    this._publisherId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherIdInput() {
    return this._publisherId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: notificationPublisherConfigurationToTerraform(this._configuration.internalValue),
      name: cdktf.stringToTerraform(this._name),
      parent_ref: notificationPublisherParentRefToTerraform(this._parentRef.internalValue),
      plugin_descriptor_ref: notificationPublisherPluginDescriptorRefToTerraform(this._pluginDescriptorRef.internalValue),
      publisher_id: cdktf.stringToTerraform(this._publisherId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: notificationPublisherConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationPublisherConfiguration",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_ref: {
        value: notificationPublisherParentRefToHclTerraform(this._parentRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationPublisherParentRef",
      },
      plugin_descriptor_ref: {
        value: notificationPublisherPluginDescriptorRefToHclTerraform(this._pluginDescriptorRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationPublisherPluginDescriptorRef",
      },
      publisher_id: {
        value: cdktf.stringToHclTerraform(this._publisherId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
