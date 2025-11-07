// https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PresetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#config_overrides Preset#config_overrides}
  */
  readonly configOverrides?: PresetConfigOverrides[] | cdktf.IResolvable;
  /**
  * The type of connector for the preset. Valid values are: generic_https, pagerduty, slack, unspecified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#connector_type Preset#connector_type}
  */
  readonly connectorType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#description Preset#description}
  */
  readonly description?: string;
  /**
  * The type of entity for the preset. Valid values are: alerts, unspecified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#entity_type Preset#entity_type}
  */
  readonly entityType: string;
  /**
  * The ID of the Preset. Can be set to a custom value, or left empty to auto-generate. Requires recreation in case of change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#id Preset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#name Preset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#parent_id Preset#parent_id}
  */
  readonly parentId: string;
}
export interface PresetConfigOverridesConditionTypeMatchEntityType {
}

export function presetConfigOverridesConditionTypeMatchEntityTypeToTerraform(struct?: PresetConfigOverridesConditionTypeMatchEntityType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function presetConfigOverridesConditionTypeMatchEntityTypeToHclTerraform(struct?: PresetConfigOverridesConditionTypeMatchEntityType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PresetConfigOverridesConditionTypeMatchEntityTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PresetConfigOverridesConditionTypeMatchEntityType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PresetConfigOverridesConditionTypeMatchEntityType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface PresetConfigOverridesConditionTypeMatchEntityTypeAndSubType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#entity_sub_type Preset#entity_sub_type}
  */
  readonly entitySubType: string;
}

export function presetConfigOverridesConditionTypeMatchEntityTypeAndSubTypeToTerraform(struct?: PresetConfigOverridesConditionTypeMatchEntityTypeAndSubType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_sub_type: cdktf.stringToTerraform(struct!.entitySubType),
  }
}


export function presetConfigOverridesConditionTypeMatchEntityTypeAndSubTypeToHclTerraform(struct?: PresetConfigOverridesConditionTypeMatchEntityTypeAndSubType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_sub_type: {
      value: cdktf.stringToHclTerraform(struct!.entitySubType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PresetConfigOverridesConditionTypeMatchEntityTypeAndSubTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PresetConfigOverridesConditionTypeMatchEntityTypeAndSubType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entitySubType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitySubType = this._entitySubType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PresetConfigOverridesConditionTypeMatchEntityTypeAndSubType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entitySubType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entitySubType = value.entitySubType;
    }
  }

  // entity_sub_type - computed: false, optional: false, required: true
  private _entitySubType?: string; 
  public get entitySubType() {
    return this.getStringAttribute('entity_sub_type');
  }
  public set entitySubType(value: string) {
    this._entitySubType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitySubTypeInput() {
    return this._entitySubType;
  }
}
export interface PresetConfigOverridesConditionType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#match_entity_type Preset#match_entity_type}
  */
  readonly matchEntityType?: PresetConfigOverridesConditionTypeMatchEntityType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#match_entity_type_and_sub_type Preset#match_entity_type_and_sub_type}
  */
  readonly matchEntityTypeAndSubType?: PresetConfigOverridesConditionTypeMatchEntityTypeAndSubType;
}

export function presetConfigOverridesConditionTypeToTerraform(struct?: PresetConfigOverridesConditionType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_entity_type: presetConfigOverridesConditionTypeMatchEntityTypeToTerraform(struct!.matchEntityType),
    match_entity_type_and_sub_type: presetConfigOverridesConditionTypeMatchEntityTypeAndSubTypeToTerraform(struct!.matchEntityTypeAndSubType),
  }
}


export function presetConfigOverridesConditionTypeToHclTerraform(struct?: PresetConfigOverridesConditionType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_entity_type: {
      value: presetConfigOverridesConditionTypeMatchEntityTypeToHclTerraform(struct!.matchEntityType),
      isBlock: true,
      type: "struct",
      storageClassType: "PresetConfigOverridesConditionTypeMatchEntityType",
    },
    match_entity_type_and_sub_type: {
      value: presetConfigOverridesConditionTypeMatchEntityTypeAndSubTypeToHclTerraform(struct!.matchEntityTypeAndSubType),
      isBlock: true,
      type: "struct",
      storageClassType: "PresetConfigOverridesConditionTypeMatchEntityTypeAndSubType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PresetConfigOverridesConditionTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PresetConfigOverridesConditionType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchEntityType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchEntityType = this._matchEntityType?.internalValue;
    }
    if (this._matchEntityTypeAndSubType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchEntityTypeAndSubType = this._matchEntityTypeAndSubType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PresetConfigOverridesConditionType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchEntityType.internalValue = undefined;
      this._matchEntityTypeAndSubType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchEntityType.internalValue = value.matchEntityType;
      this._matchEntityTypeAndSubType.internalValue = value.matchEntityTypeAndSubType;
    }
  }

  // match_entity_type - computed: false, optional: true, required: false
  private _matchEntityType = new PresetConfigOverridesConditionTypeMatchEntityTypeOutputReference(this, "match_entity_type");
  public get matchEntityType() {
    return this._matchEntityType;
  }
  public putMatchEntityType(value: PresetConfigOverridesConditionTypeMatchEntityType) {
    this._matchEntityType.internalValue = value;
  }
  public resetMatchEntityType() {
    this._matchEntityType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEntityTypeInput() {
    return this._matchEntityType.internalValue;
  }

  // match_entity_type_and_sub_type - computed: false, optional: true, required: false
  private _matchEntityTypeAndSubType = new PresetConfigOverridesConditionTypeMatchEntityTypeAndSubTypeOutputReference(this, "match_entity_type_and_sub_type");
  public get matchEntityTypeAndSubType() {
    return this._matchEntityTypeAndSubType;
  }
  public putMatchEntityTypeAndSubType(value: PresetConfigOverridesConditionTypeMatchEntityTypeAndSubType) {
    this._matchEntityTypeAndSubType.internalValue = value;
  }
  public resetMatchEntityTypeAndSubType() {
    this._matchEntityTypeAndSubType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEntityTypeAndSubTypeInput() {
    return this._matchEntityTypeAndSubType.internalValue;
  }
}
export interface PresetConfigOverridesMessageConfigFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#field_name Preset#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#template Preset#template}
  */
  readonly template: string;
}

export function presetConfigOverridesMessageConfigFieldsToTerraform(struct?: PresetConfigOverridesMessageConfigFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function presetConfigOverridesMessageConfigFieldsToHclTerraform(struct?: PresetConfigOverridesMessageConfigFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PresetConfigOverridesMessageConfigFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PresetConfigOverridesMessageConfigFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PresetConfigOverridesMessageConfigFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._template = value.template;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

export class PresetConfigOverridesMessageConfigFieldsList extends cdktf.ComplexList {
  public internalValue? : PresetConfigOverridesMessageConfigFields[] | cdktf.IResolvable

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
  public get(index: number): PresetConfigOverridesMessageConfigFieldsOutputReference {
    return new PresetConfigOverridesMessageConfigFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PresetConfigOverridesMessageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#fields Preset#fields}
  */
  readonly fields: PresetConfigOverridesMessageConfigFields[] | cdktf.IResolvable;
}

export function presetConfigOverridesMessageConfigToTerraform(struct?: PresetConfigOverridesMessageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(presetConfigOverridesMessageConfigFieldsToTerraform, false)(struct!.fields),
  }
}


export function presetConfigOverridesMessageConfigToHclTerraform(struct?: PresetConfigOverridesMessageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(presetConfigOverridesMessageConfigFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "set",
      storageClassType: "PresetConfigOverridesMessageConfigFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PresetConfigOverridesMessageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PresetConfigOverridesMessageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PresetConfigOverridesMessageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new PresetConfigOverridesMessageConfigFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: PresetConfigOverridesMessageConfigFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface PresetConfigOverrides {
  /**
  * Condition type for the preset. Must be either match_entity_type or match_entity_type_and_sub_type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#condition_type Preset#condition_type}
  */
  readonly conditionType: PresetConfigOverridesConditionType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#message_config Preset#message_config}
  */
  readonly messageConfig: PresetConfigOverridesMessageConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#payload_type Preset#payload_type}
  */
  readonly payloadType?: string;
}

export function presetConfigOverridesToTerraform(struct?: PresetConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: presetConfigOverridesConditionTypeToTerraform(struct!.conditionType),
    message_config: presetConfigOverridesMessageConfigToTerraform(struct!.messageConfig),
    payload_type: cdktf.stringToTerraform(struct!.payloadType),
  }
}


export function presetConfigOverridesToHclTerraform(struct?: PresetConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_type: {
      value: presetConfigOverridesConditionTypeToHclTerraform(struct!.conditionType),
      isBlock: true,
      type: "struct",
      storageClassType: "PresetConfigOverridesConditionType",
    },
    message_config: {
      value: presetConfigOverridesMessageConfigToHclTerraform(struct!.messageConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "PresetConfigOverridesMessageConfig",
    },
    payload_type: {
      value: cdktf.stringToHclTerraform(struct!.payloadType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PresetConfigOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PresetConfigOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType?.internalValue;
    }
    if (this._messageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageConfig = this._messageConfig?.internalValue;
    }
    if (this._payloadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadType = this._payloadType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PresetConfigOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionType.internalValue = undefined;
      this._messageConfig.internalValue = undefined;
      this._payloadType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionType.internalValue = value.conditionType;
      this._messageConfig.internalValue = value.messageConfig;
      this._payloadType = value.payloadType;
    }
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType = new PresetConfigOverridesConditionTypeOutputReference(this, "condition_type");
  public get conditionType() {
    return this._conditionType;
  }
  public putConditionType(value: PresetConfigOverridesConditionType) {
    this._conditionType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType.internalValue;
  }

  // message_config - computed: false, optional: false, required: true
  private _messageConfig = new PresetConfigOverridesMessageConfigOutputReference(this, "message_config");
  public get messageConfig() {
    return this._messageConfig;
  }
  public putMessageConfig(value: PresetConfigOverridesMessageConfig) {
    this._messageConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageConfigInput() {
    return this._messageConfig.internalValue;
  }

  // payload_type - computed: true, optional: true, required: false
  private _payloadType?: string; 
  public get payloadType() {
    return this.getStringAttribute('payload_type');
  }
  public set payloadType(value: string) {
    this._payloadType = value;
  }
  public resetPayloadType() {
    this._payloadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTypeInput() {
    return this._payloadType;
  }
}

export class PresetConfigOverridesList extends cdktf.ComplexList {
  public internalValue? : PresetConfigOverrides[] | cdktf.IResolvable

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
  public get(index: number): PresetConfigOverridesOutputReference {
    return new PresetConfigOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset coralogix_preset}
*/
export class Preset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_preset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Preset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Preset to import
  * @param importFromId The id of the existing Preset that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Preset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_preset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/preset coralogix_preset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PresetConfig
  */
  public constructor(scope: Construct, id: string, config: PresetConfig) {
    super(scope, id, {
      terraformResourceType: 'coralogix_preset',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '2.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configOverrides.internalValue = config.configOverrides;
    this._connectorType = config.connectorType;
    this._description = config.description;
    this._entityType = config.entityType;
    this._id = config.id;
    this._name = config.name;
    this._parentId = config.parentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides = new PresetConfigOverridesList(this, "config_overrides", false);
  public get configOverrides() {
    return this._configOverrides;
  }
  public putConfigOverrides(value: PresetConfigOverrides[] | cdktf.IResolvable) {
    this._configOverrides.internalValue = value;
  }
  public resetConfigOverrides() {
    this._configOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides.internalValue;
  }

  // connector_type - computed: false, optional: false, required: true
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
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

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
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

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_overrides: cdktf.listMapper(presetConfigOverridesToTerraform, false)(this._configOverrides.internalValue),
      connector_type: cdktf.stringToTerraform(this._connectorType),
      description: cdktf.stringToTerraform(this._description),
      entity_type: cdktf.stringToTerraform(this._entityType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_overrides: {
        value: cdktf.listMapperHcl(presetConfigOverridesToHclTerraform, false)(this._configOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PresetConfigOverridesList",
      },
      connector_type: {
        value: cdktf.stringToHclTerraform(this._connectorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
