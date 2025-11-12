// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#enabled NotificationTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * integrationId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#integration_id NotificationTemplate#integration_id}
  */
  readonly integrationId?: string;
  /**
  * integrationType
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#integration_type NotificationTemplate#integration_type}
  */
  readonly integrationType: string;
  /**
  * name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#name NotificationTemplate#name}
  */
  readonly name: string;
  /**
  * templateType
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#template_type NotificationTemplate#template_type}
  */
  readonly templateType?: string;
  /**
  * template_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#template_config NotificationTemplate#template_config}
  */
  readonly templateConfig: NotificationTemplateTemplateConfig[] | cdktf.IResolvable;
}
export interface NotificationTemplateTemplateConfigBasicConfigOptions {
  /**
  * id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#id NotificationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#key NotificationTemplate#key}
  */
  readonly key?: string;
  /**
  * name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#name NotificationTemplate#name}
  */
  readonly name?: string;
}

export function notificationTemplateTemplateConfigBasicConfigOptionsToTerraform(struct?: NotificationTemplateTemplateConfigBasicConfigOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function notificationTemplateTemplateConfigBasicConfigOptionsToHclTerraform(struct?: NotificationTemplateTemplateConfigBasicConfigOptions | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class NotificationTemplateTemplateConfigBasicConfigOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationTemplateTemplateConfigBasicConfigOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateTemplateConfigBasicConfigOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class NotificationTemplateTemplateConfigBasicConfigOptionsList extends cdktf.ComplexList {
  public internalValue? : NotificationTemplateTemplateConfigBasicConfigOptions[] | cdktf.IResolvable

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
  public get(index: number): NotificationTemplateTemplateConfigBasicConfigOptionsOutputReference {
    return new NotificationTemplateTemplateConfigBasicConfigOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationTemplateTemplateConfigBasicConfig {
  /**
  * AliasField
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#alias_field NotificationTemplate#alias_field}
  */
  readonly aliasField?: string;
  /**
  * displayName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#display_name NotificationTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * fieldName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#field_name NotificationTemplate#field_name}
  */
  readonly fieldName?: string;
  /**
  * MaxLength
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#max_length NotificationTemplate#max_length}
  */
  readonly maxLength?: number;
  /**
  * redlockMapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#redlock_mapping NotificationTemplate#redlock_mapping}
  */
  readonly redlockMapping?: boolean | cdktf.IResolvable;
  /**
  * required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#required NotificationTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#type NotificationTemplate#type}
  */
  readonly type?: string;
  /**
  * type Ahead URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#type_ahead_uri NotificationTemplate#type_ahead_uri}
  */
  readonly typeAheadUri?: string;
  /**
  * value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#value NotificationTemplate#value}
  */
  readonly value?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#options NotificationTemplate#options}
  */
  readonly options?: NotificationTemplateTemplateConfigBasicConfigOptions[] | cdktf.IResolvable;
}

export function notificationTemplateTemplateConfigBasicConfigToTerraform(struct?: NotificationTemplateTemplateConfigBasicConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias_field: cdktf.stringToTerraform(struct!.aliasField),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    redlock_mapping: cdktf.booleanToTerraform(struct!.redlockMapping),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    type_ahead_uri: cdktf.stringToTerraform(struct!.typeAheadUri),
    value: cdktf.stringToTerraform(struct!.value),
    options: cdktf.listMapper(notificationTemplateTemplateConfigBasicConfigOptionsToTerraform, true)(struct!.options),
  }
}


export function notificationTemplateTemplateConfigBasicConfigToHclTerraform(struct?: NotificationTemplateTemplateConfigBasicConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias_field: {
      value: cdktf.stringToHclTerraform(struct!.aliasField),
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
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redlock_mapping: {
      value: cdktf.booleanToHclTerraform(struct!.redlockMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_ahead_uri: {
      value: cdktf.stringToHclTerraform(struct!.typeAheadUri),
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
    options: {
      value: cdktf.listMapperHcl(notificationTemplateTemplateConfigBasicConfigOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationTemplateTemplateConfigBasicConfigOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationTemplateTemplateConfigBasicConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationTemplateTemplateConfigBasicConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliasField !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasField = this._aliasField;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._redlockMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.redlockMapping = this._redlockMapping;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeAheadUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeAheadUri = this._typeAheadUri;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateTemplateConfigBasicConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliasField = undefined;
      this._displayName = undefined;
      this._fieldName = undefined;
      this._maxLength = undefined;
      this._redlockMapping = undefined;
      this._required = undefined;
      this._type = undefined;
      this._typeAheadUri = undefined;
      this._value = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliasField = value.aliasField;
      this._displayName = value.displayName;
      this._fieldName = value.fieldName;
      this._maxLength = value.maxLength;
      this._redlockMapping = value.redlockMapping;
      this._required = value.required;
      this._type = value.type;
      this._typeAheadUri = value.typeAheadUri;
      this._value = value.value;
      this._options.internalValue = value.options;
    }
  }

  // alias_field - computed: false, optional: true, required: false
  private _aliasField?: string; 
  public get aliasField() {
    return this.getStringAttribute('alias_field');
  }
  public set aliasField(value: string) {
    this._aliasField = value;
  }
  public resetAliasField() {
    this._aliasField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasFieldInput() {
    return this._aliasField;
  }

  // display_name - computed: false, optional: true, required: false
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

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // redlock_mapping - computed: false, optional: true, required: false
  private _redlockMapping?: boolean | cdktf.IResolvable; 
  public get redlockMapping() {
    return this.getBooleanAttribute('redlock_mapping');
  }
  public set redlockMapping(value: boolean | cdktf.IResolvable) {
    this._redlockMapping = value;
  }
  public resetRedlockMapping() {
    this._redlockMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redlockMappingInput() {
    return this._redlockMapping;
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

  // type_ahead_uri - computed: false, optional: true, required: false
  private _typeAheadUri?: string; 
  public get typeAheadUri() {
    return this.getStringAttribute('type_ahead_uri');
  }
  public set typeAheadUri(value: string) {
    this._typeAheadUri = value;
  }
  public resetTypeAheadUri() {
    this._typeAheadUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeAheadUriInput() {
    return this._typeAheadUri;
  }

  // value - computed: false, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options = new NotificationTemplateTemplateConfigBasicConfigOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: NotificationTemplateTemplateConfigBasicConfigOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class NotificationTemplateTemplateConfigBasicConfigList extends cdktf.ComplexList {
  public internalValue? : NotificationTemplateTemplateConfigBasicConfig[] | cdktf.IResolvable

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
  public get(index: number): NotificationTemplateTemplateConfigBasicConfigOutputReference {
    return new NotificationTemplateTemplateConfigBasicConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationTemplateTemplateConfigDismissedOptions {
  /**
  * id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#id NotificationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#key NotificationTemplate#key}
  */
  readonly key?: string;
  /**
  * name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#name NotificationTemplate#name}
  */
  readonly name?: string;
}

export function notificationTemplateTemplateConfigDismissedOptionsToTerraform(struct?: NotificationTemplateTemplateConfigDismissedOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function notificationTemplateTemplateConfigDismissedOptionsToHclTerraform(struct?: NotificationTemplateTemplateConfigDismissedOptions | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class NotificationTemplateTemplateConfigDismissedOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationTemplateTemplateConfigDismissedOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateTemplateConfigDismissedOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class NotificationTemplateTemplateConfigDismissedOptionsList extends cdktf.ComplexList {
  public internalValue? : NotificationTemplateTemplateConfigDismissedOptions[] | cdktf.IResolvable

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
  public get(index: number): NotificationTemplateTemplateConfigDismissedOptionsOutputReference {
    return new NotificationTemplateTemplateConfigDismissedOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationTemplateTemplateConfigDismissed {
  /**
  * AliasField
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#alias_field NotificationTemplate#alias_field}
  */
  readonly aliasField?: string;
  /**
  * displayName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#display_name NotificationTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * fieldName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#field_name NotificationTemplate#field_name}
  */
  readonly fieldName?: string;
  /**
  * MaxLength
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#max_length NotificationTemplate#max_length}
  */
  readonly maxLength?: number;
  /**
  * redlockMapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#redlock_mapping NotificationTemplate#redlock_mapping}
  */
  readonly redlockMapping?: boolean | cdktf.IResolvable;
  /**
  * required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#required NotificationTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#type NotificationTemplate#type}
  */
  readonly type?: string;
  /**
  * type Ahead URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#type_ahead_uri NotificationTemplate#type_ahead_uri}
  */
  readonly typeAheadUri?: string;
  /**
  * value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#value NotificationTemplate#value}
  */
  readonly value?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#options NotificationTemplate#options}
  */
  readonly options?: NotificationTemplateTemplateConfigDismissedOptions[] | cdktf.IResolvable;
}

export function notificationTemplateTemplateConfigDismissedToTerraform(struct?: NotificationTemplateTemplateConfigDismissed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias_field: cdktf.stringToTerraform(struct!.aliasField),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    redlock_mapping: cdktf.booleanToTerraform(struct!.redlockMapping),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    type_ahead_uri: cdktf.stringToTerraform(struct!.typeAheadUri),
    value: cdktf.stringToTerraform(struct!.value),
    options: cdktf.listMapper(notificationTemplateTemplateConfigDismissedOptionsToTerraform, true)(struct!.options),
  }
}


export function notificationTemplateTemplateConfigDismissedToHclTerraform(struct?: NotificationTemplateTemplateConfigDismissed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias_field: {
      value: cdktf.stringToHclTerraform(struct!.aliasField),
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
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redlock_mapping: {
      value: cdktf.booleanToHclTerraform(struct!.redlockMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_ahead_uri: {
      value: cdktf.stringToHclTerraform(struct!.typeAheadUri),
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
    options: {
      value: cdktf.listMapperHcl(notificationTemplateTemplateConfigDismissedOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationTemplateTemplateConfigDismissedOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationTemplateTemplateConfigDismissedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationTemplateTemplateConfigDismissed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliasField !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasField = this._aliasField;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._redlockMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.redlockMapping = this._redlockMapping;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeAheadUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeAheadUri = this._typeAheadUri;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateTemplateConfigDismissed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliasField = undefined;
      this._displayName = undefined;
      this._fieldName = undefined;
      this._maxLength = undefined;
      this._redlockMapping = undefined;
      this._required = undefined;
      this._type = undefined;
      this._typeAheadUri = undefined;
      this._value = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliasField = value.aliasField;
      this._displayName = value.displayName;
      this._fieldName = value.fieldName;
      this._maxLength = value.maxLength;
      this._redlockMapping = value.redlockMapping;
      this._required = value.required;
      this._type = value.type;
      this._typeAheadUri = value.typeAheadUri;
      this._value = value.value;
      this._options.internalValue = value.options;
    }
  }

  // alias_field - computed: false, optional: true, required: false
  private _aliasField?: string; 
  public get aliasField() {
    return this.getStringAttribute('alias_field');
  }
  public set aliasField(value: string) {
    this._aliasField = value;
  }
  public resetAliasField() {
    this._aliasField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasFieldInput() {
    return this._aliasField;
  }

  // display_name - computed: false, optional: true, required: false
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

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // redlock_mapping - computed: false, optional: true, required: false
  private _redlockMapping?: boolean | cdktf.IResolvable; 
  public get redlockMapping() {
    return this.getBooleanAttribute('redlock_mapping');
  }
  public set redlockMapping(value: boolean | cdktf.IResolvable) {
    this._redlockMapping = value;
  }
  public resetRedlockMapping() {
    this._redlockMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redlockMappingInput() {
    return this._redlockMapping;
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

  // type_ahead_uri - computed: false, optional: true, required: false
  private _typeAheadUri?: string; 
  public get typeAheadUri() {
    return this.getStringAttribute('type_ahead_uri');
  }
  public set typeAheadUri(value: string) {
    this._typeAheadUri = value;
  }
  public resetTypeAheadUri() {
    this._typeAheadUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeAheadUriInput() {
    return this._typeAheadUri;
  }

  // value - computed: false, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options = new NotificationTemplateTemplateConfigDismissedOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: NotificationTemplateTemplateConfigDismissedOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class NotificationTemplateTemplateConfigDismissedList extends cdktf.ComplexList {
  public internalValue? : NotificationTemplateTemplateConfigDismissed[] | cdktf.IResolvable

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
  public get(index: number): NotificationTemplateTemplateConfigDismissedOutputReference {
    return new NotificationTemplateTemplateConfigDismissedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationTemplateTemplateConfigOpenOptions {
  /**
  * id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#id NotificationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#key NotificationTemplate#key}
  */
  readonly key?: string;
  /**
  * name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#name NotificationTemplate#name}
  */
  readonly name?: string;
}

export function notificationTemplateTemplateConfigOpenOptionsToTerraform(struct?: NotificationTemplateTemplateConfigOpenOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function notificationTemplateTemplateConfigOpenOptionsToHclTerraform(struct?: NotificationTemplateTemplateConfigOpenOptions | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class NotificationTemplateTemplateConfigOpenOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationTemplateTemplateConfigOpenOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateTemplateConfigOpenOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class NotificationTemplateTemplateConfigOpenOptionsList extends cdktf.ComplexList {
  public internalValue? : NotificationTemplateTemplateConfigOpenOptions[] | cdktf.IResolvable

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
  public get(index: number): NotificationTemplateTemplateConfigOpenOptionsOutputReference {
    return new NotificationTemplateTemplateConfigOpenOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationTemplateTemplateConfigOpen {
  /**
  * AliasField
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#alias_field NotificationTemplate#alias_field}
  */
  readonly aliasField?: string;
  /**
  * displayName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#display_name NotificationTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * fieldName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#field_name NotificationTemplate#field_name}
  */
  readonly fieldName?: string;
  /**
  * MaxLength
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#max_length NotificationTemplate#max_length}
  */
  readonly maxLength?: number;
  /**
  * redlockMapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#redlock_mapping NotificationTemplate#redlock_mapping}
  */
  readonly redlockMapping?: boolean | cdktf.IResolvable;
  /**
  * required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#required NotificationTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#type NotificationTemplate#type}
  */
  readonly type?: string;
  /**
  * type Ahead URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#type_ahead_uri NotificationTemplate#type_ahead_uri}
  */
  readonly typeAheadUri?: string;
  /**
  * value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#value NotificationTemplate#value}
  */
  readonly value?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#options NotificationTemplate#options}
  */
  readonly options?: NotificationTemplateTemplateConfigOpenOptions[] | cdktf.IResolvable;
}

export function notificationTemplateTemplateConfigOpenToTerraform(struct?: NotificationTemplateTemplateConfigOpen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias_field: cdktf.stringToTerraform(struct!.aliasField),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    redlock_mapping: cdktf.booleanToTerraform(struct!.redlockMapping),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    type_ahead_uri: cdktf.stringToTerraform(struct!.typeAheadUri),
    value: cdktf.stringToTerraform(struct!.value),
    options: cdktf.listMapper(notificationTemplateTemplateConfigOpenOptionsToTerraform, true)(struct!.options),
  }
}


export function notificationTemplateTemplateConfigOpenToHclTerraform(struct?: NotificationTemplateTemplateConfigOpen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias_field: {
      value: cdktf.stringToHclTerraform(struct!.aliasField),
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
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redlock_mapping: {
      value: cdktf.booleanToHclTerraform(struct!.redlockMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_ahead_uri: {
      value: cdktf.stringToHclTerraform(struct!.typeAheadUri),
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
    options: {
      value: cdktf.listMapperHcl(notificationTemplateTemplateConfigOpenOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationTemplateTemplateConfigOpenOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationTemplateTemplateConfigOpenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationTemplateTemplateConfigOpen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliasField !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasField = this._aliasField;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._redlockMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.redlockMapping = this._redlockMapping;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeAheadUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeAheadUri = this._typeAheadUri;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateTemplateConfigOpen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliasField = undefined;
      this._displayName = undefined;
      this._fieldName = undefined;
      this._maxLength = undefined;
      this._redlockMapping = undefined;
      this._required = undefined;
      this._type = undefined;
      this._typeAheadUri = undefined;
      this._value = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliasField = value.aliasField;
      this._displayName = value.displayName;
      this._fieldName = value.fieldName;
      this._maxLength = value.maxLength;
      this._redlockMapping = value.redlockMapping;
      this._required = value.required;
      this._type = value.type;
      this._typeAheadUri = value.typeAheadUri;
      this._value = value.value;
      this._options.internalValue = value.options;
    }
  }

  // alias_field - computed: false, optional: true, required: false
  private _aliasField?: string; 
  public get aliasField() {
    return this.getStringAttribute('alias_field');
  }
  public set aliasField(value: string) {
    this._aliasField = value;
  }
  public resetAliasField() {
    this._aliasField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasFieldInput() {
    return this._aliasField;
  }

  // display_name - computed: false, optional: true, required: false
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

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // redlock_mapping - computed: false, optional: true, required: false
  private _redlockMapping?: boolean | cdktf.IResolvable; 
  public get redlockMapping() {
    return this.getBooleanAttribute('redlock_mapping');
  }
  public set redlockMapping(value: boolean | cdktf.IResolvable) {
    this._redlockMapping = value;
  }
  public resetRedlockMapping() {
    this._redlockMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redlockMappingInput() {
    return this._redlockMapping;
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

  // type_ahead_uri - computed: false, optional: true, required: false
  private _typeAheadUri?: string; 
  public get typeAheadUri() {
    return this.getStringAttribute('type_ahead_uri');
  }
  public set typeAheadUri(value: string) {
    this._typeAheadUri = value;
  }
  public resetTypeAheadUri() {
    this._typeAheadUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeAheadUriInput() {
    return this._typeAheadUri;
  }

  // value - computed: false, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options = new NotificationTemplateTemplateConfigOpenOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: NotificationTemplateTemplateConfigOpenOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class NotificationTemplateTemplateConfigOpenList extends cdktf.ComplexList {
  public internalValue? : NotificationTemplateTemplateConfigOpen[] | cdktf.IResolvable

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
  public get(index: number): NotificationTemplateTemplateConfigOpenOutputReference {
    return new NotificationTemplateTemplateConfigOpenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationTemplateTemplateConfigResolvedOptions {
  /**
  * id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#id NotificationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#key NotificationTemplate#key}
  */
  readonly key?: string;
  /**
  * name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#name NotificationTemplate#name}
  */
  readonly name?: string;
}

export function notificationTemplateTemplateConfigResolvedOptionsToTerraform(struct?: NotificationTemplateTemplateConfigResolvedOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function notificationTemplateTemplateConfigResolvedOptionsToHclTerraform(struct?: NotificationTemplateTemplateConfigResolvedOptions | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class NotificationTemplateTemplateConfigResolvedOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationTemplateTemplateConfigResolvedOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateTemplateConfigResolvedOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class NotificationTemplateTemplateConfigResolvedOptionsList extends cdktf.ComplexList {
  public internalValue? : NotificationTemplateTemplateConfigResolvedOptions[] | cdktf.IResolvable

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
  public get(index: number): NotificationTemplateTemplateConfigResolvedOptionsOutputReference {
    return new NotificationTemplateTemplateConfigResolvedOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationTemplateTemplateConfigResolved {
  /**
  * AliasField
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#alias_field NotificationTemplate#alias_field}
  */
  readonly aliasField?: string;
  /**
  * displayName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#display_name NotificationTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * fieldName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#field_name NotificationTemplate#field_name}
  */
  readonly fieldName?: string;
  /**
  * MaxLength
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#max_length NotificationTemplate#max_length}
  */
  readonly maxLength?: number;
  /**
  * redlockMapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#redlock_mapping NotificationTemplate#redlock_mapping}
  */
  readonly redlockMapping?: boolean | cdktf.IResolvable;
  /**
  * required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#required NotificationTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#type NotificationTemplate#type}
  */
  readonly type?: string;
  /**
  * type Ahead URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#type_ahead_uri NotificationTemplate#type_ahead_uri}
  */
  readonly typeAheadUri?: string;
  /**
  * value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#value NotificationTemplate#value}
  */
  readonly value?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#options NotificationTemplate#options}
  */
  readonly options?: NotificationTemplateTemplateConfigResolvedOptions[] | cdktf.IResolvable;
}

export function notificationTemplateTemplateConfigResolvedToTerraform(struct?: NotificationTemplateTemplateConfigResolved | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias_field: cdktf.stringToTerraform(struct!.aliasField),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    redlock_mapping: cdktf.booleanToTerraform(struct!.redlockMapping),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    type_ahead_uri: cdktf.stringToTerraform(struct!.typeAheadUri),
    value: cdktf.stringToTerraform(struct!.value),
    options: cdktf.listMapper(notificationTemplateTemplateConfigResolvedOptionsToTerraform, true)(struct!.options),
  }
}


export function notificationTemplateTemplateConfigResolvedToHclTerraform(struct?: NotificationTemplateTemplateConfigResolved | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias_field: {
      value: cdktf.stringToHclTerraform(struct!.aliasField),
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
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redlock_mapping: {
      value: cdktf.booleanToHclTerraform(struct!.redlockMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_ahead_uri: {
      value: cdktf.stringToHclTerraform(struct!.typeAheadUri),
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
    options: {
      value: cdktf.listMapperHcl(notificationTemplateTemplateConfigResolvedOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationTemplateTemplateConfigResolvedOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationTemplateTemplateConfigResolvedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationTemplateTemplateConfigResolved | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliasField !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasField = this._aliasField;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._redlockMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.redlockMapping = this._redlockMapping;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeAheadUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeAheadUri = this._typeAheadUri;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateTemplateConfigResolved | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliasField = undefined;
      this._displayName = undefined;
      this._fieldName = undefined;
      this._maxLength = undefined;
      this._redlockMapping = undefined;
      this._required = undefined;
      this._type = undefined;
      this._typeAheadUri = undefined;
      this._value = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliasField = value.aliasField;
      this._displayName = value.displayName;
      this._fieldName = value.fieldName;
      this._maxLength = value.maxLength;
      this._redlockMapping = value.redlockMapping;
      this._required = value.required;
      this._type = value.type;
      this._typeAheadUri = value.typeAheadUri;
      this._value = value.value;
      this._options.internalValue = value.options;
    }
  }

  // alias_field - computed: false, optional: true, required: false
  private _aliasField?: string; 
  public get aliasField() {
    return this.getStringAttribute('alias_field');
  }
  public set aliasField(value: string) {
    this._aliasField = value;
  }
  public resetAliasField() {
    this._aliasField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasFieldInput() {
    return this._aliasField;
  }

  // display_name - computed: false, optional: true, required: false
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

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // redlock_mapping - computed: false, optional: true, required: false
  private _redlockMapping?: boolean | cdktf.IResolvable; 
  public get redlockMapping() {
    return this.getBooleanAttribute('redlock_mapping');
  }
  public set redlockMapping(value: boolean | cdktf.IResolvable) {
    this._redlockMapping = value;
  }
  public resetRedlockMapping() {
    this._redlockMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redlockMappingInput() {
    return this._redlockMapping;
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

  // type_ahead_uri - computed: false, optional: true, required: false
  private _typeAheadUri?: string; 
  public get typeAheadUri() {
    return this.getStringAttribute('type_ahead_uri');
  }
  public set typeAheadUri(value: string) {
    this._typeAheadUri = value;
  }
  public resetTypeAheadUri() {
    this._typeAheadUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeAheadUriInput() {
    return this._typeAheadUri;
  }

  // value - computed: false, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options = new NotificationTemplateTemplateConfigResolvedOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: NotificationTemplateTemplateConfigResolvedOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class NotificationTemplateTemplateConfigResolvedList extends cdktf.ComplexList {
  public internalValue? : NotificationTemplateTemplateConfigResolved[] | cdktf.IResolvable

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
  public get(index: number): NotificationTemplateTemplateConfigResolvedOutputReference {
    return new NotificationTemplateTemplateConfigResolvedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationTemplateTemplateConfigSnoozedOptions {
  /**
  * id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#id NotificationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#key NotificationTemplate#key}
  */
  readonly key?: string;
  /**
  * name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#name NotificationTemplate#name}
  */
  readonly name?: string;
}

export function notificationTemplateTemplateConfigSnoozedOptionsToTerraform(struct?: NotificationTemplateTemplateConfigSnoozedOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function notificationTemplateTemplateConfigSnoozedOptionsToHclTerraform(struct?: NotificationTemplateTemplateConfigSnoozedOptions | cdktf.IResolvable): any {
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
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class NotificationTemplateTemplateConfigSnoozedOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationTemplateTemplateConfigSnoozedOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateTemplateConfigSnoozedOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._key = value.key;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
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
}

export class NotificationTemplateTemplateConfigSnoozedOptionsList extends cdktf.ComplexList {
  public internalValue? : NotificationTemplateTemplateConfigSnoozedOptions[] | cdktf.IResolvable

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
  public get(index: number): NotificationTemplateTemplateConfigSnoozedOptionsOutputReference {
    return new NotificationTemplateTemplateConfigSnoozedOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationTemplateTemplateConfigSnoozed {
  /**
  * AliasField
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#alias_field NotificationTemplate#alias_field}
  */
  readonly aliasField?: string;
  /**
  * displayName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#display_name NotificationTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * fieldName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#field_name NotificationTemplate#field_name}
  */
  readonly fieldName?: string;
  /**
  * MaxLength
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#max_length NotificationTemplate#max_length}
  */
  readonly maxLength?: number;
  /**
  * redlockMapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#redlock_mapping NotificationTemplate#redlock_mapping}
  */
  readonly redlockMapping?: boolean | cdktf.IResolvable;
  /**
  * required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#required NotificationTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#type NotificationTemplate#type}
  */
  readonly type?: string;
  /**
  * type Ahead URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#type_ahead_uri NotificationTemplate#type_ahead_uri}
  */
  readonly typeAheadUri?: string;
  /**
  * value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#value NotificationTemplate#value}
  */
  readonly value?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#options NotificationTemplate#options}
  */
  readonly options?: NotificationTemplateTemplateConfigSnoozedOptions[] | cdktf.IResolvable;
}

export function notificationTemplateTemplateConfigSnoozedToTerraform(struct?: NotificationTemplateTemplateConfigSnoozed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias_field: cdktf.stringToTerraform(struct!.aliasField),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    redlock_mapping: cdktf.booleanToTerraform(struct!.redlockMapping),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    type_ahead_uri: cdktf.stringToTerraform(struct!.typeAheadUri),
    value: cdktf.stringToTerraform(struct!.value),
    options: cdktf.listMapper(notificationTemplateTemplateConfigSnoozedOptionsToTerraform, true)(struct!.options),
  }
}


export function notificationTemplateTemplateConfigSnoozedToHclTerraform(struct?: NotificationTemplateTemplateConfigSnoozed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias_field: {
      value: cdktf.stringToHclTerraform(struct!.aliasField),
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
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redlock_mapping: {
      value: cdktf.booleanToHclTerraform(struct!.redlockMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_ahead_uri: {
      value: cdktf.stringToHclTerraform(struct!.typeAheadUri),
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
    options: {
      value: cdktf.listMapperHcl(notificationTemplateTemplateConfigSnoozedOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationTemplateTemplateConfigSnoozedOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationTemplateTemplateConfigSnoozedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationTemplateTemplateConfigSnoozed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliasField !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliasField = this._aliasField;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._redlockMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.redlockMapping = this._redlockMapping;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeAheadUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeAheadUri = this._typeAheadUri;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateTemplateConfigSnoozed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aliasField = undefined;
      this._displayName = undefined;
      this._fieldName = undefined;
      this._maxLength = undefined;
      this._redlockMapping = undefined;
      this._required = undefined;
      this._type = undefined;
      this._typeAheadUri = undefined;
      this._value = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aliasField = value.aliasField;
      this._displayName = value.displayName;
      this._fieldName = value.fieldName;
      this._maxLength = value.maxLength;
      this._redlockMapping = value.redlockMapping;
      this._required = value.required;
      this._type = value.type;
      this._typeAheadUri = value.typeAheadUri;
      this._value = value.value;
      this._options.internalValue = value.options;
    }
  }

  // alias_field - computed: false, optional: true, required: false
  private _aliasField?: string; 
  public get aliasField() {
    return this.getStringAttribute('alias_field');
  }
  public set aliasField(value: string) {
    this._aliasField = value;
  }
  public resetAliasField() {
    this._aliasField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasFieldInput() {
    return this._aliasField;
  }

  // display_name - computed: false, optional: true, required: false
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

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // redlock_mapping - computed: false, optional: true, required: false
  private _redlockMapping?: boolean | cdktf.IResolvable; 
  public get redlockMapping() {
    return this.getBooleanAttribute('redlock_mapping');
  }
  public set redlockMapping(value: boolean | cdktf.IResolvable) {
    this._redlockMapping = value;
  }
  public resetRedlockMapping() {
    this._redlockMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redlockMappingInput() {
    return this._redlockMapping;
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

  // type_ahead_uri - computed: false, optional: true, required: false
  private _typeAheadUri?: string; 
  public get typeAheadUri() {
    return this.getStringAttribute('type_ahead_uri');
  }
  public set typeAheadUri(value: string) {
    this._typeAheadUri = value;
  }
  public resetTypeAheadUri() {
    this._typeAheadUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeAheadUriInput() {
    return this._typeAheadUri;
  }

  // value - computed: false, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options = new NotificationTemplateTemplateConfigSnoozedOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: NotificationTemplateTemplateConfigSnoozedOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class NotificationTemplateTemplateConfigSnoozedList extends cdktf.ComplexList {
  public internalValue? : NotificationTemplateTemplateConfigSnoozed[] | cdktf.IResolvable

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
  public get(index: number): NotificationTemplateTemplateConfigSnoozedOutputReference {
    return new NotificationTemplateTemplateConfigSnoozedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationTemplateTemplateConfig {
  /**
  * basic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#basic_config NotificationTemplate#basic_config}
  */
  readonly basicConfig?: NotificationTemplateTemplateConfigBasicConfig[] | cdktf.IResolvable;
  /**
  * dismissed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#dismissed NotificationTemplate#dismissed}
  */
  readonly dismissed?: NotificationTemplateTemplateConfigDismissed[] | cdktf.IResolvable;
  /**
  * open block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#open NotificationTemplate#open}
  */
  readonly open?: NotificationTemplateTemplateConfigOpen[] | cdktf.IResolvable;
  /**
  * resolved block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#resolved NotificationTemplate#resolved}
  */
  readonly resolved?: NotificationTemplateTemplateConfigResolved[] | cdktf.IResolvable;
  /**
  * snoozed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#snoozed NotificationTemplate#snoozed}
  */
  readonly snoozed?: NotificationTemplateTemplateConfigSnoozed[] | cdktf.IResolvable;
}

export function notificationTemplateTemplateConfigToTerraform(struct?: NotificationTemplateTemplateConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_config: cdktf.listMapper(notificationTemplateTemplateConfigBasicConfigToTerraform, true)(struct!.basicConfig),
    dismissed: cdktf.listMapper(notificationTemplateTemplateConfigDismissedToTerraform, true)(struct!.dismissed),
    open: cdktf.listMapper(notificationTemplateTemplateConfigOpenToTerraform, true)(struct!.open),
    resolved: cdktf.listMapper(notificationTemplateTemplateConfigResolvedToTerraform, true)(struct!.resolved),
    snoozed: cdktf.listMapper(notificationTemplateTemplateConfigSnoozedToTerraform, true)(struct!.snoozed),
  }
}


export function notificationTemplateTemplateConfigToHclTerraform(struct?: NotificationTemplateTemplateConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_config: {
      value: cdktf.listMapperHcl(notificationTemplateTemplateConfigBasicConfigToHclTerraform, true)(struct!.basicConfig),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationTemplateTemplateConfigBasicConfigList",
    },
    dismissed: {
      value: cdktf.listMapperHcl(notificationTemplateTemplateConfigDismissedToHclTerraform, true)(struct!.dismissed),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationTemplateTemplateConfigDismissedList",
    },
    open: {
      value: cdktf.listMapperHcl(notificationTemplateTemplateConfigOpenToHclTerraform, true)(struct!.open),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationTemplateTemplateConfigOpenList",
    },
    resolved: {
      value: cdktf.listMapperHcl(notificationTemplateTemplateConfigResolvedToHclTerraform, true)(struct!.resolved),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationTemplateTemplateConfigResolvedList",
    },
    snoozed: {
      value: cdktf.listMapperHcl(notificationTemplateTemplateConfigSnoozedToHclTerraform, true)(struct!.snoozed),
      isBlock: true,
      type: "list",
      storageClassType: "NotificationTemplateTemplateConfigSnoozedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationTemplateTemplateConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationTemplateTemplateConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicConfig = this._basicConfig?.internalValue;
    }
    if (this._dismissed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dismissed = this._dismissed?.internalValue;
    }
    if (this._open?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.open = this._open?.internalValue;
    }
    if (this._resolved?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolved = this._resolved?.internalValue;
    }
    if (this._snoozed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snoozed = this._snoozed?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationTemplateTemplateConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicConfig.internalValue = undefined;
      this._dismissed.internalValue = undefined;
      this._open.internalValue = undefined;
      this._resolved.internalValue = undefined;
      this._snoozed.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicConfig.internalValue = value.basicConfig;
      this._dismissed.internalValue = value.dismissed;
      this._open.internalValue = value.open;
      this._resolved.internalValue = value.resolved;
      this._snoozed.internalValue = value.snoozed;
    }
  }

  // basic_config - computed: false, optional: true, required: false
  private _basicConfig = new NotificationTemplateTemplateConfigBasicConfigList(this, "basic_config", false);
  public get basicConfig() {
    return this._basicConfig;
  }
  public putBasicConfig(value: NotificationTemplateTemplateConfigBasicConfig[] | cdktf.IResolvable) {
    this._basicConfig.internalValue = value;
  }
  public resetBasicConfig() {
    this._basicConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicConfigInput() {
    return this._basicConfig.internalValue;
  }

  // dismissed - computed: false, optional: true, required: false
  private _dismissed = new NotificationTemplateTemplateConfigDismissedList(this, "dismissed", false);
  public get dismissed() {
    return this._dismissed;
  }
  public putDismissed(value: NotificationTemplateTemplateConfigDismissed[] | cdktf.IResolvable) {
    this._dismissed.internalValue = value;
  }
  public resetDismissed() {
    this._dismissed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dismissedInput() {
    return this._dismissed.internalValue;
  }

  // open - computed: false, optional: true, required: false
  private _open = new NotificationTemplateTemplateConfigOpenList(this, "open", false);
  public get open() {
    return this._open;
  }
  public putOpen(value: NotificationTemplateTemplateConfigOpen[] | cdktf.IResolvable) {
    this._open.internalValue = value;
  }
  public resetOpen() {
    this._open.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openInput() {
    return this._open.internalValue;
  }

  // resolved - computed: false, optional: true, required: false
  private _resolved = new NotificationTemplateTemplateConfigResolvedList(this, "resolved", false);
  public get resolved() {
    return this._resolved;
  }
  public putResolved(value: NotificationTemplateTemplateConfigResolved[] | cdktf.IResolvable) {
    this._resolved.internalValue = value;
  }
  public resetResolved() {
    this._resolved.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedInput() {
    return this._resolved.internalValue;
  }

  // snoozed - computed: false, optional: true, required: false
  private _snoozed = new NotificationTemplateTemplateConfigSnoozedList(this, "snoozed", false);
  public get snoozed() {
    return this._snoozed;
  }
  public putSnoozed(value: NotificationTemplateTemplateConfigSnoozed[] | cdktf.IResolvable) {
    this._snoozed.internalValue = value;
  }
  public resetSnoozed() {
    this._snoozed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snoozedInput() {
    return this._snoozed.internalValue;
  }
}

export class NotificationTemplateTemplateConfigList extends cdktf.ComplexList {
  public internalValue? : NotificationTemplateTemplateConfig[] | cdktf.IResolvable

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
  public get(index: number): NotificationTemplateTemplateConfigOutputReference {
    return new NotificationTemplateTemplateConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template prismacloud_notification_template}
*/
export class NotificationTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_notification_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationTemplate to import
  * @param importFromId The id of the existing NotificationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_notification_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/notification_template prismacloud_notification_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_notification_template',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._integrationId = config.integrationId;
    this._integrationType = config.integrationType;
    this._name = config.name;
    this._templateType = config.templateType;
    this._templateConfig.internalValue = config.templateConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_ts - computed: true, optional: false, required: false
  public get createdTs() {
    return this.getNumberAttribute('created_ts');
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getNumberAttribute('customer_id');
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_id - computed: true, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // integration_name - computed: true, optional: false, required: false
  public get integrationName() {
    return this.getStringAttribute('integration_name');
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_ts - computed: true, optional: false, required: false
  public get lastModifiedTs() {
    return this.getNumberAttribute('last_modified_ts');
  }

  // module - computed: true, optional: false, required: false
  public get module() {
    return this.getStringAttribute('module');
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

  // template_type - computed: true, optional: true, required: false
  private _templateType?: string; 
  public get templateType() {
    return this.getStringAttribute('template_type');
  }
  public set templateType(value: string) {
    this._templateType = value;
  }
  public resetTemplateType() {
    this._templateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTypeInput() {
    return this._templateType;
  }

  // template_config - computed: false, optional: false, required: true
  private _templateConfig = new NotificationTemplateTemplateConfigList(this, "template_config", false);
  public get templateConfig() {
    return this._templateConfig;
  }
  public putTemplateConfig(value: NotificationTemplateTemplateConfig[] | cdktf.IResolvable) {
    this._templateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateConfigInput() {
    return this._templateConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      integration_type: cdktf.stringToTerraform(this._integrationType),
      name: cdktf.stringToTerraform(this._name),
      template_type: cdktf.stringToTerraform(this._templateType),
      template_config: cdktf.listMapper(notificationTemplateTemplateConfigToTerraform, true)(this._templateConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_type: {
        value: cdktf.stringToHclTerraform(this._integrationType),
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
      template_type: {
        value: cdktf.stringToHclTerraform(this._templateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_config: {
        value: cdktf.listMapperHcl(notificationTemplateTemplateConfigToHclTerraform, true)(this._templateConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationTemplateTemplateConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
