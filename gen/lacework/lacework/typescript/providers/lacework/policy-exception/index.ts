// https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/policy_exception
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyExceptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the policy exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/policy_exception#description PolicyException#description}
  */
  readonly description: string;
  /**
  * The id of the policy the exception is associated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/policy_exception#policy_id PolicyException#policy_id}
  */
  readonly policyId: string;
  /**
  * constraint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/policy_exception#constraint PolicyException#constraint}
  */
  readonly constraint: PolicyExceptionConstraint[] | cdktf.IResolvable;
}
export interface PolicyExceptionConstraintFieldValueMap {
  /**
  * The values map key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/policy_exception#key PolicyException#key}
  */
  readonly key: string;
  /**
  * The values map value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/policy_exception#value PolicyException#value}
  */
  readonly value: string;
}

export function policyExceptionConstraintFieldValueMapToTerraform(struct?: PolicyExceptionConstraintFieldValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyExceptionConstraintFieldValueMapToHclTerraform(struct?: PolicyExceptionConstraintFieldValueMap | cdktf.IResolvable): any {
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

export class PolicyExceptionConstraintFieldValueMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyExceptionConstraintFieldValueMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyExceptionConstraintFieldValueMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

export class PolicyExceptionConstraintFieldValueMapList extends cdktf.ComplexList {
  public internalValue? : PolicyExceptionConstraintFieldValueMap[] | cdktf.IResolvable

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
  public get(index: number): PolicyExceptionConstraintFieldValueMapOutputReference {
    return new PolicyExceptionConstraintFieldValueMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyExceptionConstraintFieldValuesMap {
  /**
  * The values map key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/policy_exception#key PolicyException#key}
  */
  readonly key: string;
  /**
  * The values map value list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/policy_exception#value PolicyException#value}
  */
  readonly value: string[];
}

export function policyExceptionConstraintFieldValuesMapToTerraform(struct?: PolicyExceptionConstraintFieldValuesMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function policyExceptionConstraintFieldValuesMapToHclTerraform(struct?: PolicyExceptionConstraintFieldValuesMap | cdktf.IResolvable): any {
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

export class PolicyExceptionConstraintFieldValuesMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyExceptionConstraintFieldValuesMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyExceptionConstraintFieldValuesMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

export class PolicyExceptionConstraintFieldValuesMapList extends cdktf.ComplexList {
  public internalValue? : PolicyExceptionConstraintFieldValuesMap[] | cdktf.IResolvable

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
  public get(index: number): PolicyExceptionConstraintFieldValuesMapOutputReference {
    return new PolicyExceptionConstraintFieldValuesMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyExceptionConstraint {
  /**
  * The field key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/policy_exception#field_key PolicyException#field_key}
  */
  readonly fieldKey: string;
  /**
  * The field values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/policy_exception#field_values PolicyException#field_values}
  */
  readonly fieldValues?: string[];
  /**
  * field_value_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/policy_exception#field_value_map PolicyException#field_value_map}
  */
  readonly fieldValueMap?: PolicyExceptionConstraintFieldValueMap[] | cdktf.IResolvable;
  /**
  * field_values_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/policy_exception#field_values_map PolicyException#field_values_map}
  */
  readonly fieldValuesMap?: PolicyExceptionConstraintFieldValuesMap[] | cdktf.IResolvable;
}

export function policyExceptionConstraintToTerraform(struct?: PolicyExceptionConstraint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_key: cdktf.stringToTerraform(struct!.fieldKey),
    field_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fieldValues),
    field_value_map: cdktf.listMapper(policyExceptionConstraintFieldValueMapToTerraform, true)(struct!.fieldValueMap),
    field_values_map: cdktf.listMapper(policyExceptionConstraintFieldValuesMapToTerraform, true)(struct!.fieldValuesMap),
  }
}


export function policyExceptionConstraintToHclTerraform(struct?: PolicyExceptionConstraint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_key: {
      value: cdktf.stringToHclTerraform(struct!.fieldKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fieldValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    field_value_map: {
      value: cdktf.listMapperHcl(policyExceptionConstraintFieldValueMapToHclTerraform, true)(struct!.fieldValueMap),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyExceptionConstraintFieldValueMapList",
    },
    field_values_map: {
      value: cdktf.listMapperHcl(policyExceptionConstraintFieldValuesMapToHclTerraform, true)(struct!.fieldValuesMap),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyExceptionConstraintFieldValuesMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyExceptionConstraintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyExceptionConstraint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldKey = this._fieldKey;
    }
    if (this._fieldValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValues = this._fieldValues;
    }
    if (this._fieldValueMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValueMap = this._fieldValueMap?.internalValue;
    }
    if (this._fieldValuesMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldValuesMap = this._fieldValuesMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyExceptionConstraint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldKey = undefined;
      this._fieldValues = undefined;
      this._fieldValueMap.internalValue = undefined;
      this._fieldValuesMap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldKey = value.fieldKey;
      this._fieldValues = value.fieldValues;
      this._fieldValueMap.internalValue = value.fieldValueMap;
      this._fieldValuesMap.internalValue = value.fieldValuesMap;
    }
  }

  // field_key - computed: false, optional: false, required: true
  private _fieldKey?: string; 
  public get fieldKey() {
    return this.getStringAttribute('field_key');
  }
  public set fieldKey(value: string) {
    this._fieldKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldKeyInput() {
    return this._fieldKey;
  }

  // field_values - computed: false, optional: true, required: false
  private _fieldValues?: string[]; 
  public get fieldValues() {
    return this.getListAttribute('field_values');
  }
  public set fieldValues(value: string[]) {
    this._fieldValues = value;
  }
  public resetFieldValues() {
    this._fieldValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValuesInput() {
    return this._fieldValues;
  }

  // field_value_map - computed: false, optional: true, required: false
  private _fieldValueMap = new PolicyExceptionConstraintFieldValueMapList(this, "field_value_map", true);
  public get fieldValueMap() {
    return this._fieldValueMap;
  }
  public putFieldValueMap(value: PolicyExceptionConstraintFieldValueMap[] | cdktf.IResolvable) {
    this._fieldValueMap.internalValue = value;
  }
  public resetFieldValueMap() {
    this._fieldValueMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValueMapInput() {
    return this._fieldValueMap.internalValue;
  }

  // field_values_map - computed: false, optional: true, required: false
  private _fieldValuesMap = new PolicyExceptionConstraintFieldValuesMapList(this, "field_values_map", true);
  public get fieldValuesMap() {
    return this._fieldValuesMap;
  }
  public putFieldValuesMap(value: PolicyExceptionConstraintFieldValuesMap[] | cdktf.IResolvable) {
    this._fieldValuesMap.internalValue = value;
  }
  public resetFieldValuesMap() {
    this._fieldValuesMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldValuesMapInput() {
    return this._fieldValuesMap.internalValue;
  }
}

export class PolicyExceptionConstraintList extends cdktf.ComplexList {
  public internalValue? : PolicyExceptionConstraint[] | cdktf.IResolvable

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
  public get(index: number): PolicyExceptionConstraintOutputReference {
    return new PolicyExceptionConstraintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/policy_exception lacework_policy_exception}
*/
export class PolicyException extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_policy_exception";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyException resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyException to import
  * @param importFromId The id of the existing PolicyException that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/policy_exception#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyException to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_policy_exception", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.10/docs/resources/policy_exception lacework_policy_exception} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyExceptionConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyExceptionConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_policy_exception',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.10',
        providerVersionConstraint: '2.0.10'
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
    this._policyId = config.policyId;
    this._constraint.internalValue = config.constraint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }

  // constraint - computed: false, optional: false, required: true
  private _constraint = new PolicyExceptionConstraintList(this, "constraint", true);
  public get constraint() {
    return this._constraint;
  }
  public putConstraint(value: PolicyExceptionConstraint[] | cdktf.IResolvable) {
    this._constraint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      policy_id: cdktf.stringToTerraform(this._policyId),
      constraint: cdktf.listMapper(policyExceptionConstraintToTerraform, true)(this._constraint.internalValue),
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
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      constraint: {
        value: cdktf.listMapperHcl(policyExceptionConstraintToHclTerraform, true)(this._constraint.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyExceptionConstraintList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
