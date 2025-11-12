// https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply only. In other words, it does not delete resource in any case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#apply_only Manifest#apply_only}
  */
  readonly applyOnly?: boolean | cdktf.IResolvable;
  /**
  * Cascade mode for delete operations, explicitly setting this to Background to match kubectl is recommended. Default is Background unless wait has been set when it will be Foreground.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#delete_cascade Manifest#delete_cascade}
  */
  readonly deleteCascade?: string;
  /**
  * Override the default field manager name. This is only relevant when using server-side apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#field_manager Manifest#field_manager}
  */
  readonly fieldManager?: string;
  /**
  * Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#force_conflicts Manifest#force_conflicts}
  */
  readonly forceConflicts?: boolean | cdktf.IResolvable;
  /**
  * Default to update in-place. Setting to true will delete and create the kubernetes instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#force_new Manifest#force_new}
  */
  readonly forceNew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#id Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of yaml keys to ignore changes to. Set these for fields set by Operators or other processes in kubernetes and as such you don't want to update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#ignore_fields Manifest#ignore_fields}
  */
  readonly ignoreFields?: string[];
  /**
  * Override the namespace to apply the kubernetes resource to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#override_namespace Manifest#override_namespace}
  */
  readonly overrideNamespace?: string;
  /**
  * List of yaml keys with sensitive values. Set these for fields which you want obfuscated in the yaml_body output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#sensitive_fields Manifest#sensitive_fields}
  */
  readonly sensitiveFields?: string[];
  /**
  * Default to client-side-apply. Setting to true will use server-side apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#server_side_apply Manifest#server_side_apply}
  */
  readonly serverSideApply?: boolean | cdktf.IResolvable;
  /**
  * Default to true (validate). Set this flag to not validate the yaml schema before applying.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#validate_schema Manifest#validate_schema}
  */
  readonly validateSchema?: boolean | cdktf.IResolvable;
  /**
  * Default to false (not waiting). Set this flag to wait or not for any deleted resources to be gone. This waits for finalizers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#wait Manifest#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
  /**
  * Default to true (waiting). Set this flag to wait or not for Deployments and APIService to complete rollout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#wait_for_rollout Manifest#wait_for_rollout}
  */
  readonly waitForRollout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#yaml_body Manifest#yaml_body}
  */
  readonly yamlBody: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#timeouts Manifest#timeouts}
  */
  readonly timeouts?: ManifestTimeouts;
  /**
  * wait_for block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#wait_for Manifest#wait_for}
  */
  readonly waitFor?: ManifestWaitFor;
}
export interface ManifestTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#create Manifest#create}
  */
  readonly create?: string;
}

export function manifestTimeoutsToTerraform(struct?: ManifestTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function manifestTimeoutsToHclTerraform(struct?: ManifestTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManifestTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ManifestTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManifestTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}
export interface ManifestWaitForCondition {
  /**
  * Status to wait for in the resulting Condition object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#status Manifest#status}
  */
  readonly status: string;
  /**
  * Type as expected from the resulting Condition object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#type Manifest#type}
  */
  readonly type: string;
}

export function manifestWaitForConditionToTerraform(struct?: ManifestWaitForCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function manifestWaitForConditionToHclTerraform(struct?: ManifestWaitForCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
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

export class ManifestWaitForConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManifestWaitForCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManifestWaitForCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._type = value.type;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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
}

export class ManifestWaitForConditionList extends cdktf.ComplexList {
  public internalValue? : ManifestWaitForCondition[] | cdktf.IResolvable

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
  public get(index: number): ManifestWaitForConditionOutputReference {
    return new ManifestWaitForConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManifestWaitForField {
  /**
  * Key which should be matched from resulting object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#key Manifest#key}
  */
  readonly key: string;
  /**
  * Value to wait for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#value Manifest#value}
  */
  readonly value: string;
  /**
  * Value type. Can be either a `eq` (equivalent) or `regex`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#value_type Manifest#value_type}
  */
  readonly valueType?: string;
}

export function manifestWaitForFieldToTerraform(struct?: ManifestWaitForField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function manifestWaitForFieldToHclTerraform(struct?: ManifestWaitForField | cdktf.IResolvable): any {
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
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManifestWaitForFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManifestWaitForField | cdktf.IResolvable | undefined {
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
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManifestWaitForField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
      this._valueType = undefined;
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
      this._valueType = value.valueType;
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

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class ManifestWaitForFieldList extends cdktf.ComplexList {
  public internalValue? : ManifestWaitForField[] | cdktf.IResolvable

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
  public get(index: number): ManifestWaitForFieldOutputReference {
    return new ManifestWaitForFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManifestWaitFor {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#condition Manifest#condition}
  */
  readonly condition?: ManifestWaitForCondition[] | cdktf.IResolvable;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#field Manifest#field}
  */
  readonly field?: ManifestWaitForField[] | cdktf.IResolvable;
}

export function manifestWaitForToTerraform(struct?: ManifestWaitForOutputReference | ManifestWaitFor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(manifestWaitForConditionToTerraform, true)(struct!.condition),
    field: cdktf.listMapper(manifestWaitForFieldToTerraform, true)(struct!.field),
  }
}


export function manifestWaitForToHclTerraform(struct?: ManifestWaitForOutputReference | ManifestWaitFor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(manifestWaitForConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "ManifestWaitForConditionList",
    },
    field: {
      value: cdktf.listMapperHcl(manifestWaitForFieldToHclTerraform, true)(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "ManifestWaitForFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManifestWaitForOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManifestWaitFor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManifestWaitFor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition.internalValue = undefined;
      this._field.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition.internalValue = value.condition;
      this._field.internalValue = value.field;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new ManifestWaitForConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ManifestWaitForCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // field - computed: false, optional: true, required: false
  private _field = new ManifestWaitForFieldList(this, "field", false);
  public get field() {
    return this._field;
  }
  public putField(value: ManifestWaitForField[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest kubectl_manifest}
*/
export class Manifest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubectl_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Manifest to import
  * @param importFromId The id of the existing Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kubectl_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alekc/kubectl/2.1.3/docs/resources/manifest kubectl_manifest} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'kubectl_manifest',
      terraformGeneratorMetadata: {
        providerName: 'kubectl',
        providerVersion: '2.1.3',
        providerVersionConstraint: '2.1.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyOnly = config.applyOnly;
    this._deleteCascade = config.deleteCascade;
    this._fieldManager = config.fieldManager;
    this._forceConflicts = config.forceConflicts;
    this._forceNew = config.forceNew;
    this._id = config.id;
    this._ignoreFields = config.ignoreFields;
    this._overrideNamespace = config.overrideNamespace;
    this._sensitiveFields = config.sensitiveFields;
    this._serverSideApply = config.serverSideApply;
    this._validateSchema = config.validateSchema;
    this._wait = config.wait;
    this._waitForRollout = config.waitForRollout;
    this._yamlBody = config.yamlBody;
    this._timeouts.internalValue = config.timeouts;
    this._waitFor.internalValue = config.waitFor;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // apply_only - computed: false, optional: true, required: false
  private _applyOnly?: boolean | cdktf.IResolvable; 
  public get applyOnly() {
    return this.getBooleanAttribute('apply_only');
  }
  public set applyOnly(value: boolean | cdktf.IResolvable) {
    this._applyOnly = value;
  }
  public resetApplyOnly() {
    this._applyOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyOnlyInput() {
    return this._applyOnly;
  }

  // delete_cascade - computed: false, optional: true, required: false
  private _deleteCascade?: string; 
  public get deleteCascade() {
    return this.getStringAttribute('delete_cascade');
  }
  public set deleteCascade(value: string) {
    this._deleteCascade = value;
  }
  public resetDeleteCascade() {
    this._deleteCascade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteCascadeInput() {
    return this._deleteCascade;
  }

  // field_manager - computed: false, optional: true, required: false
  private _fieldManager?: string; 
  public get fieldManager() {
    return this.getStringAttribute('field_manager');
  }
  public set fieldManager(value: string) {
    this._fieldManager = value;
  }
  public resetFieldManager() {
    this._fieldManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldManagerInput() {
    return this._fieldManager;
  }

  // force_conflicts - computed: false, optional: true, required: false
  private _forceConflicts?: boolean | cdktf.IResolvable; 
  public get forceConflicts() {
    return this.getBooleanAttribute('force_conflicts');
  }
  public set forceConflicts(value: boolean | cdktf.IResolvable) {
    this._forceConflicts = value;
  }
  public resetForceConflicts() {
    this._forceConflicts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceConflictsInput() {
    return this._forceConflicts;
  }

  // force_new - computed: false, optional: true, required: false
  private _forceNew?: boolean | cdktf.IResolvable; 
  public get forceNew() {
    return this.getBooleanAttribute('force_new');
  }
  public set forceNew(value: boolean | cdktf.IResolvable) {
    this._forceNew = value;
  }
  public resetForceNew() {
    this._forceNew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceNewInput() {
    return this._forceNew;
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

  // ignore_fields - computed: false, optional: true, required: false
  private _ignoreFields?: string[]; 
  public get ignoreFields() {
    return this.getListAttribute('ignore_fields');
  }
  public set ignoreFields(value: string[]) {
    this._ignoreFields = value;
  }
  public resetIgnoreFields() {
    this._ignoreFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreFieldsInput() {
    return this._ignoreFields;
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // live_manifest_incluster - computed: true, optional: false, required: false
  public get liveManifestIncluster() {
    return this.getStringAttribute('live_manifest_incluster');
  }

  // live_uid - computed: true, optional: false, required: false
  public get liveUid() {
    return this.getStringAttribute('live_uid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // override_namespace - computed: false, optional: true, required: false
  private _overrideNamespace?: string; 
  public get overrideNamespace() {
    return this.getStringAttribute('override_namespace');
  }
  public set overrideNamespace(value: string) {
    this._overrideNamespace = value;
  }
  public resetOverrideNamespace() {
    this._overrideNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideNamespaceInput() {
    return this._overrideNamespace;
  }

  // sensitive_fields - computed: false, optional: true, required: false
  private _sensitiveFields?: string[]; 
  public get sensitiveFields() {
    return this.getListAttribute('sensitive_fields');
  }
  public set sensitiveFields(value: string[]) {
    this._sensitiveFields = value;
  }
  public resetSensitiveFields() {
    this._sensitiveFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveFieldsInput() {
    return this._sensitiveFields;
  }

  // server_side_apply - computed: false, optional: true, required: false
  private _serverSideApply?: boolean | cdktf.IResolvable; 
  public get serverSideApply() {
    return this.getBooleanAttribute('server_side_apply');
  }
  public set serverSideApply(value: boolean | cdktf.IResolvable) {
    this._serverSideApply = value;
  }
  public resetServerSideApply() {
    this._serverSideApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideApplyInput() {
    return this._serverSideApply;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // validate_schema - computed: false, optional: true, required: false
  private _validateSchema?: boolean | cdktf.IResolvable; 
  public get validateSchema() {
    return this.getBooleanAttribute('validate_schema');
  }
  public set validateSchema(value: boolean | cdktf.IResolvable) {
    this._validateSchema = value;
  }
  public resetValidateSchema() {
    this._validateSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateSchemaInput() {
    return this._validateSchema;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: boolean | cdktf.IResolvable; 
  public get wait() {
    return this.getBooleanAttribute('wait');
  }
  public set wait(value: boolean | cdktf.IResolvable) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // wait_for_rollout - computed: false, optional: true, required: false
  private _waitForRollout?: boolean | cdktf.IResolvable; 
  public get waitForRollout() {
    return this.getBooleanAttribute('wait_for_rollout');
  }
  public set waitForRollout(value: boolean | cdktf.IResolvable) {
    this._waitForRollout = value;
  }
  public resetWaitForRollout() {
    this._waitForRollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRolloutInput() {
    return this._waitForRollout;
  }

  // yaml_body - computed: false, optional: false, required: true
  private _yamlBody?: string; 
  public get yamlBody() {
    return this.getStringAttribute('yaml_body');
  }
  public set yamlBody(value: string) {
    this._yamlBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yamlBodyInput() {
    return this._yamlBody;
  }

  // yaml_body_parsed - computed: true, optional: false, required: false
  public get yamlBodyParsed() {
    return this.getStringAttribute('yaml_body_parsed');
  }

  // yaml_incluster - computed: true, optional: false, required: false
  public get yamlIncluster() {
    return this.getStringAttribute('yaml_incluster');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ManifestTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ManifestTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // wait_for - computed: false, optional: true, required: false
  private _waitFor = new ManifestWaitForOutputReference(this, "wait_for");
  public get waitFor() {
    return this._waitFor;
  }
  public putWaitFor(value: ManifestWaitFor) {
    this._waitFor.internalValue = value;
  }
  public resetWaitFor() {
    this._waitFor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInput() {
    return this._waitFor.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_only: cdktf.booleanToTerraform(this._applyOnly),
      delete_cascade: cdktf.stringToTerraform(this._deleteCascade),
      field_manager: cdktf.stringToTerraform(this._fieldManager),
      force_conflicts: cdktf.booleanToTerraform(this._forceConflicts),
      force_new: cdktf.booleanToTerraform(this._forceNew),
      id: cdktf.stringToTerraform(this._id),
      ignore_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoreFields),
      override_namespace: cdktf.stringToTerraform(this._overrideNamespace),
      sensitive_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sensitiveFields),
      server_side_apply: cdktf.booleanToTerraform(this._serverSideApply),
      validate_schema: cdktf.booleanToTerraform(this._validateSchema),
      wait: cdktf.booleanToTerraform(this._wait),
      wait_for_rollout: cdktf.booleanToTerraform(this._waitForRollout),
      yaml_body: cdktf.stringToTerraform(this._yamlBody),
      timeouts: manifestTimeoutsToTerraform(this._timeouts.internalValue),
      wait_for: manifestWaitForToTerraform(this._waitFor.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_only: {
        value: cdktf.booleanToHclTerraform(this._applyOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_cascade: {
        value: cdktf.stringToHclTerraform(this._deleteCascade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field_manager: {
        value: cdktf.stringToHclTerraform(this._fieldManager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_conflicts: {
        value: cdktf.booleanToHclTerraform(this._forceConflicts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_new: {
        value: cdktf.booleanToHclTerraform(this._forceNew),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoreFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      override_namespace: {
        value: cdktf.stringToHclTerraform(this._overrideNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sensitiveFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      server_side_apply: {
        value: cdktf.booleanToHclTerraform(this._serverSideApply),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      validate_schema: {
        value: cdktf.booleanToHclTerraform(this._validateSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait: {
        value: cdktf.booleanToHclTerraform(this._wait),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_rollout: {
        value: cdktf.booleanToHclTerraform(this._waitForRollout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      yaml_body: {
        value: cdktf.stringToHclTerraform(this._yamlBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: manifestTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ManifestTimeouts",
      },
      wait_for: {
        value: manifestWaitForToHclTerraform(this._waitFor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManifestWaitForList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
