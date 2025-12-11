// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectstorageObjectLifecyclePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#bucket ObjectstorageObjectLifecyclePolicy#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#id ObjectstorageObjectLifecyclePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#namespace ObjectstorageObjectLifecyclePolicy#namespace}
  */
  readonly namespace: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#rules ObjectstorageObjectLifecyclePolicy#rules}
  */
  readonly rules?: ObjectstorageObjectLifecyclePolicyRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#timeouts ObjectstorageObjectLifecyclePolicy#timeouts}
  */
  readonly timeouts?: ObjectstorageObjectLifecyclePolicyTimeouts;
}
export interface ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#exclusion_patterns ObjectstorageObjectLifecyclePolicy#exclusion_patterns}
  */
  readonly exclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_patterns ObjectstorageObjectLifecyclePolicy#inclusion_patterns}
  */
  readonly inclusionPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#inclusion_prefixes ObjectstorageObjectLifecyclePolicy#inclusion_prefixes}
  */
  readonly inclusionPrefixes?: string[];
}

export function objectstorageObjectLifecyclePolicyRulesObjectNameFilterToTerraform(struct?: ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference | ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusionPatterns),
    inclusion_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inclusionPatterns),
    inclusion_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inclusionPrefixes),
  }
}


export function objectstorageObjectLifecyclePolicyRulesObjectNameFilterToHclTerraform(struct?: ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference | ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusionPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    inclusion_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inclusionPatterns),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    inclusion_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inclusionPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionPatterns = this._exclusionPatterns;
    }
    if (this._inclusionPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPatterns = this._inclusionPatterns;
    }
    if (this._inclusionPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPrefixes = this._inclusionPrefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclusionPatterns = undefined;
      this._inclusionPatterns = undefined;
      this._inclusionPrefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclusionPatterns = value.exclusionPatterns;
      this._inclusionPatterns = value.inclusionPatterns;
      this._inclusionPrefixes = value.inclusionPrefixes;
    }
  }

  // exclusion_patterns - computed: true, optional: true, required: false
  private _exclusionPatterns?: string[]; 
  public get exclusionPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('exclusion_patterns'));
  }
  public set exclusionPatterns(value: string[]) {
    this._exclusionPatterns = value;
  }
  public resetExclusionPatterns() {
    this._exclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionPatternsInput() {
    return this._exclusionPatterns;
  }

  // inclusion_patterns - computed: true, optional: true, required: false
  private _inclusionPatterns?: string[]; 
  public get inclusionPatterns() {
    return cdktf.Fn.tolist(this.getListAttribute('inclusion_patterns'));
  }
  public set inclusionPatterns(value: string[]) {
    this._inclusionPatterns = value;
  }
  public resetInclusionPatterns() {
    this._inclusionPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionPatternsInput() {
    return this._inclusionPatterns;
  }

  // inclusion_prefixes - computed: true, optional: true, required: false
  private _inclusionPrefixes?: string[]; 
  public get inclusionPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('inclusion_prefixes'));
  }
  public set inclusionPrefixes(value: string[]) {
    this._inclusionPrefixes = value;
  }
  public resetInclusionPrefixes() {
    this._inclusionPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionPrefixesInput() {
    return this._inclusionPrefixes;
  }
}
export interface ObjectstorageObjectLifecyclePolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#action ObjectstorageObjectLifecyclePolicy#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#is_enabled ObjectstorageObjectLifecyclePolicy#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#name ObjectstorageObjectLifecyclePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#target ObjectstorageObjectLifecyclePolicy#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#time_amount ObjectstorageObjectLifecyclePolicy#time_amount}
  */
  readonly timeAmount: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#time_unit ObjectstorageObjectLifecyclePolicy#time_unit}
  */
  readonly timeUnit: string;
  /**
  * object_name_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#object_name_filter ObjectstorageObjectLifecyclePolicy#object_name_filter}
  */
  readonly objectNameFilter?: ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter;
}

export function objectstorageObjectLifecyclePolicyRulesToTerraform(struct?: ObjectstorageObjectLifecyclePolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    name: cdktf.stringToTerraform(struct!.name),
    target: cdktf.stringToTerraform(struct!.target),
    time_amount: cdktf.stringToTerraform(struct!.timeAmount),
    time_unit: cdktf.stringToTerraform(struct!.timeUnit),
    object_name_filter: objectstorageObjectLifecyclePolicyRulesObjectNameFilterToTerraform(struct!.objectNameFilter),
  }
}


export function objectstorageObjectLifecyclePolicyRulesToHclTerraform(struct?: ObjectstorageObjectLifecyclePolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_amount: {
      value: cdktf.stringToHclTerraform(struct!.timeAmount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_unit: {
      value: cdktf.stringToHclTerraform(struct!.timeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_name_filter: {
      value: objectstorageObjectLifecyclePolicyRulesObjectNameFilterToHclTerraform(struct!.objectNameFilter),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectstorageObjectLifecyclePolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectstorageObjectLifecyclePolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeAmount !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAmount = this._timeAmount;
    }
    if (this._timeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeUnit = this._timeUnit;
    }
    if (this._objectNameFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectNameFilter = this._objectNameFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectstorageObjectLifecyclePolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._isEnabled = undefined;
      this._name = undefined;
      this._target = undefined;
      this._timeAmount = undefined;
      this._timeUnit = undefined;
      this._objectNameFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._isEnabled = value.isEnabled;
      this._name = value.name;
      this._target = value.target;
      this._timeAmount = value.timeAmount;
      this._timeUnit = value.timeUnit;
      this._objectNameFilter.internalValue = value.objectNameFilter;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // time_amount - computed: false, optional: false, required: true
  private _timeAmount?: string; 
  public get timeAmount() {
    return this.getStringAttribute('time_amount');
  }
  public set timeAmount(value: string) {
    this._timeAmount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAmountInput() {
    return this._timeAmount;
  }

  // time_unit - computed: false, optional: false, required: true
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }

  // object_name_filter - computed: false, optional: true, required: false
  private _objectNameFilter = new ObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference(this, "object_name_filter");
  public get objectNameFilter() {
    return this._objectNameFilter;
  }
  public putObjectNameFilter(value: ObjectstorageObjectLifecyclePolicyRulesObjectNameFilter) {
    this._objectNameFilter.internalValue = value;
  }
  public resetObjectNameFilter() {
    this._objectNameFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameFilterInput() {
    return this._objectNameFilter.internalValue;
  }
}

export class ObjectstorageObjectLifecyclePolicyRulesList extends cdktf.ComplexList {
  public internalValue? : ObjectstorageObjectLifecyclePolicyRules[] | cdktf.IResolvable

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
  public get(index: number): ObjectstorageObjectLifecyclePolicyRulesOutputReference {
    return new ObjectstorageObjectLifecyclePolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectstorageObjectLifecyclePolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#create ObjectstorageObjectLifecyclePolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#delete ObjectstorageObjectLifecyclePolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#update ObjectstorageObjectLifecyclePolicy#update}
  */
  readonly update?: string;
}

export function objectstorageObjectLifecyclePolicyTimeoutsToTerraform(struct?: ObjectstorageObjectLifecyclePolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function objectstorageObjectLifecyclePolicyTimeoutsToHclTerraform(struct?: ObjectstorageObjectLifecyclePolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ObjectstorageObjectLifecyclePolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectstorageObjectLifecyclePolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy oci_objectstorage_object_lifecycle_policy}
*/
export class ObjectstorageObjectLifecyclePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_objectstorage_object_lifecycle_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectstorageObjectLifecyclePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectstorageObjectLifecyclePolicy to import
  * @param importFromId The id of the existing ObjectstorageObjectLifecyclePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectstorageObjectLifecyclePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_objectstorage_object_lifecycle_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/objectstorage_object_lifecycle_policy oci_objectstorage_object_lifecycle_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectstorageObjectLifecyclePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectstorageObjectLifecyclePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_objectstorage_object_lifecycle_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._id = config.id;
    this._namespace = config.namespace;
    this._rules.internalValue = config.rules;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new ObjectstorageObjectLifecyclePolicyRulesList(this, "rules", true);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ObjectstorageObjectLifecyclePolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ObjectstorageObjectLifecyclePolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ObjectstorageObjectLifecyclePolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      rules: cdktf.listMapper(objectstorageObjectLifecyclePolicyRulesToTerraform, true)(this._rules.internalValue),
      timeouts: objectstorageObjectLifecyclePolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(objectstorageObjectLifecyclePolicyRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ObjectstorageObjectLifecyclePolicyRulesList",
      },
      timeouts: {
        value: objectstorageObjectLifecyclePolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ObjectstorageObjectLifecyclePolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
