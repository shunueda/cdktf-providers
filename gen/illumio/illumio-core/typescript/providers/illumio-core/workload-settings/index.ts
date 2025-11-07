// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/workload_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkloadSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/workload_settings#id WorkloadSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * workload_disconnected_timeout_seconds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/workload_settings#workload_disconnected_timeout_seconds WorkloadSettings#workload_disconnected_timeout_seconds}
  */
  readonly workloadDisconnectedTimeoutSeconds?: WorkloadSettingsWorkloadDisconnectedTimeoutSeconds[] | cdktf.IResolvable;
  /**
  * workload_goodbye_timeout_seconds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/workload_settings#workload_goodbye_timeout_seconds WorkloadSettings#workload_goodbye_timeout_seconds}
  */
  readonly workloadGoodbyeTimeoutSeconds?: WorkloadSettingsWorkloadGoodbyeTimeoutSeconds[] | cdktf.IResolvable;
}
export interface WorkloadSettingsWorkloadDisconnectedTimeoutSecondsScope {
  /**
  * Label URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/workload_settings#href WorkloadSettings#href}
  */
  readonly href?: string;
}

export function workloadSettingsWorkloadDisconnectedTimeoutSecondsScopeToTerraform(struct?: WorkloadSettingsWorkloadDisconnectedTimeoutSecondsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function workloadSettingsWorkloadDisconnectedTimeoutSecondsScopeToHclTerraform(struct?: WorkloadSettingsWorkloadDisconnectedTimeoutSecondsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadSettingsWorkloadDisconnectedTimeoutSecondsScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadSettingsWorkloadDisconnectedTimeoutSecondsScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadSettingsWorkloadDisconnectedTimeoutSecondsScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: true, required: false
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  public resetHref() {
    this._href = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}

export class WorkloadSettingsWorkloadDisconnectedTimeoutSecondsScopeList extends cdktf.ComplexList {
  public internalValue? : WorkloadSettingsWorkloadDisconnectedTimeoutSecondsScope[] | cdktf.IResolvable

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
  public get(index: number): WorkloadSettingsWorkloadDisconnectedTimeoutSecondsScopeOutputReference {
    return new WorkloadSettingsWorkloadDisconnectedTimeoutSecondsScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadSettingsWorkloadDisconnectedTimeoutSeconds {
  /**
  * Property value associated with the scope. Allowed range is 300 - 2147483647 or -1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/workload_settings#value WorkloadSettings#value}
  */
  readonly value?: number;
  /**
  * The VEN type that this property is applicable to. Must be "server" or "endpoint". An empty or missing value will default to "server" on the PCE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/workload_settings#ven_type WorkloadSettings#ven_type}
  */
  readonly venType?: string;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/workload_settings#scope WorkloadSettings#scope}
  */
  readonly scope?: WorkloadSettingsWorkloadDisconnectedTimeoutSecondsScope[] | cdktf.IResolvable;
}

export function workloadSettingsWorkloadDisconnectedTimeoutSecondsToTerraform(struct?: WorkloadSettingsWorkloadDisconnectedTimeoutSeconds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
    ven_type: cdktf.stringToTerraform(struct!.venType),
    scope: cdktf.listMapper(workloadSettingsWorkloadDisconnectedTimeoutSecondsScopeToTerraform, true)(struct!.scope),
  }
}


export function workloadSettingsWorkloadDisconnectedTimeoutSecondsToHclTerraform(struct?: WorkloadSettingsWorkloadDisconnectedTimeoutSeconds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ven_type: {
      value: cdktf.stringToHclTerraform(struct!.venType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.listMapperHcl(workloadSettingsWorkloadDisconnectedTimeoutSecondsScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadSettingsWorkloadDisconnectedTimeoutSecondsScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadSettingsWorkloadDisconnectedTimeoutSecondsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadSettingsWorkloadDisconnectedTimeoutSeconds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._venType !== undefined) {
      hasAnyValues = true;
      internalValueResult.venType = this._venType;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadSettingsWorkloadDisconnectedTimeoutSeconds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._venType = undefined;
      this._scope.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._venType = value.venType;
      this._scope.internalValue = value.scope;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // ven_type - computed: true, optional: true, required: false
  private _venType?: string; 
  public get venType() {
    return this.getStringAttribute('ven_type');
  }
  public set venType(value: string) {
    this._venType = value;
  }
  public resetVenType() {
    this._venType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get venTypeInput() {
    return this._venType;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new WorkloadSettingsWorkloadDisconnectedTimeoutSecondsScopeList(this, "scope", true);
  public get scope() {
    return this._scope;
  }
  public putScope(value: WorkloadSettingsWorkloadDisconnectedTimeoutSecondsScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}

export class WorkloadSettingsWorkloadDisconnectedTimeoutSecondsList extends cdktf.ComplexList {
  public internalValue? : WorkloadSettingsWorkloadDisconnectedTimeoutSeconds[] | cdktf.IResolvable

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
  public get(index: number): WorkloadSettingsWorkloadDisconnectedTimeoutSecondsOutputReference {
    return new WorkloadSettingsWorkloadDisconnectedTimeoutSecondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadSettingsWorkloadGoodbyeTimeoutSecondsScope {
  /**
  * Label URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/workload_settings#href WorkloadSettings#href}
  */
  readonly href?: string;
}

export function workloadSettingsWorkloadGoodbyeTimeoutSecondsScopeToTerraform(struct?: WorkloadSettingsWorkloadGoodbyeTimeoutSecondsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function workloadSettingsWorkloadGoodbyeTimeoutSecondsScopeToHclTerraform(struct?: WorkloadSettingsWorkloadGoodbyeTimeoutSecondsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadSettingsWorkloadGoodbyeTimeoutSecondsScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadSettingsWorkloadGoodbyeTimeoutSecondsScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadSettingsWorkloadGoodbyeTimeoutSecondsScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: true, required: false
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  public resetHref() {
    this._href = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}

export class WorkloadSettingsWorkloadGoodbyeTimeoutSecondsScopeList extends cdktf.ComplexList {
  public internalValue? : WorkloadSettingsWorkloadGoodbyeTimeoutSecondsScope[] | cdktf.IResolvable

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
  public get(index: number): WorkloadSettingsWorkloadGoodbyeTimeoutSecondsScopeOutputReference {
    return new WorkloadSettingsWorkloadGoodbyeTimeoutSecondsScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadSettingsWorkloadGoodbyeTimeoutSeconds {
  /**
  * Property value associated with the scope. Allowed range is 300 - 2147483647 or -1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/workload_settings#value WorkloadSettings#value}
  */
  readonly value?: number;
  /**
  * The VEN type that this property is applicable to. Must be "server" or "endpoint". An empty or missing value will default to "server" on the PCE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/workload_settings#ven_type WorkloadSettings#ven_type}
  */
  readonly venType?: string;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/workload_settings#scope WorkloadSettings#scope}
  */
  readonly scope?: WorkloadSettingsWorkloadGoodbyeTimeoutSecondsScope[] | cdktf.IResolvable;
}

export function workloadSettingsWorkloadGoodbyeTimeoutSecondsToTerraform(struct?: WorkloadSettingsWorkloadGoodbyeTimeoutSeconds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
    ven_type: cdktf.stringToTerraform(struct!.venType),
    scope: cdktf.listMapper(workloadSettingsWorkloadGoodbyeTimeoutSecondsScopeToTerraform, true)(struct!.scope),
  }
}


export function workloadSettingsWorkloadGoodbyeTimeoutSecondsToHclTerraform(struct?: WorkloadSettingsWorkloadGoodbyeTimeoutSeconds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ven_type: {
      value: cdktf.stringToHclTerraform(struct!.venType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.listMapperHcl(workloadSettingsWorkloadGoodbyeTimeoutSecondsScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "set",
      storageClassType: "WorkloadSettingsWorkloadGoodbyeTimeoutSecondsScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadSettingsWorkloadGoodbyeTimeoutSecondsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadSettingsWorkloadGoodbyeTimeoutSeconds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._venType !== undefined) {
      hasAnyValues = true;
      internalValueResult.venType = this._venType;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadSettingsWorkloadGoodbyeTimeoutSeconds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._venType = undefined;
      this._scope.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._venType = value.venType;
      this._scope.internalValue = value.scope;
    }
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // ven_type - computed: true, optional: true, required: false
  private _venType?: string; 
  public get venType() {
    return this.getStringAttribute('ven_type');
  }
  public set venType(value: string) {
    this._venType = value;
  }
  public resetVenType() {
    this._venType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get venTypeInput() {
    return this._venType;
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new WorkloadSettingsWorkloadGoodbyeTimeoutSecondsScopeList(this, "scope", true);
  public get scope() {
    return this._scope;
  }
  public putScope(value: WorkloadSettingsWorkloadGoodbyeTimeoutSecondsScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}

export class WorkloadSettingsWorkloadGoodbyeTimeoutSecondsList extends cdktf.ComplexList {
  public internalValue? : WorkloadSettingsWorkloadGoodbyeTimeoutSeconds[] | cdktf.IResolvable

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
  public get(index: number): WorkloadSettingsWorkloadGoodbyeTimeoutSecondsOutputReference {
    return new WorkloadSettingsWorkloadGoodbyeTimeoutSecondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/workload_settings illumio-core_workload_settings}
*/
export class WorkloadSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_workload_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkloadSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkloadSettings to import
  * @param importFromId The id of the existing WorkloadSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/workload_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkloadSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_workload_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/workload_settings illumio-core_workload_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkloadSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WorkloadSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_workload_settings',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._workloadDisconnectedTimeoutSeconds.internalValue = config.workloadDisconnectedTimeoutSeconds;
    this._workloadGoodbyeTimeoutSeconds.internalValue = config.workloadGoodbyeTimeoutSeconds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // workload_disconnected_timeout_seconds - computed: false, optional: true, required: false
  private _workloadDisconnectedTimeoutSeconds = new WorkloadSettingsWorkloadDisconnectedTimeoutSecondsList(this, "workload_disconnected_timeout_seconds", true);
  public get workloadDisconnectedTimeoutSeconds() {
    return this._workloadDisconnectedTimeoutSeconds;
  }
  public putWorkloadDisconnectedTimeoutSeconds(value: WorkloadSettingsWorkloadDisconnectedTimeoutSeconds[] | cdktf.IResolvable) {
    this._workloadDisconnectedTimeoutSeconds.internalValue = value;
  }
  public resetWorkloadDisconnectedTimeoutSeconds() {
    this._workloadDisconnectedTimeoutSeconds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadDisconnectedTimeoutSecondsInput() {
    return this._workloadDisconnectedTimeoutSeconds.internalValue;
  }

  // workload_goodbye_timeout_seconds - computed: false, optional: true, required: false
  private _workloadGoodbyeTimeoutSeconds = new WorkloadSettingsWorkloadGoodbyeTimeoutSecondsList(this, "workload_goodbye_timeout_seconds", true);
  public get workloadGoodbyeTimeoutSeconds() {
    return this._workloadGoodbyeTimeoutSeconds;
  }
  public putWorkloadGoodbyeTimeoutSeconds(value: WorkloadSettingsWorkloadGoodbyeTimeoutSeconds[] | cdktf.IResolvable) {
    this._workloadGoodbyeTimeoutSeconds.internalValue = value;
  }
  public resetWorkloadGoodbyeTimeoutSeconds() {
    this._workloadGoodbyeTimeoutSeconds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadGoodbyeTimeoutSecondsInput() {
    return this._workloadGoodbyeTimeoutSeconds.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      workload_disconnected_timeout_seconds: cdktf.listMapper(workloadSettingsWorkloadDisconnectedTimeoutSecondsToTerraform, true)(this._workloadDisconnectedTimeoutSeconds.internalValue),
      workload_goodbye_timeout_seconds: cdktf.listMapper(workloadSettingsWorkloadGoodbyeTimeoutSecondsToTerraform, true)(this._workloadGoodbyeTimeoutSeconds.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_disconnected_timeout_seconds: {
        value: cdktf.listMapperHcl(workloadSettingsWorkloadDisconnectedTimeoutSecondsToHclTerraform, true)(this._workloadDisconnectedTimeoutSeconds.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkloadSettingsWorkloadDisconnectedTimeoutSecondsList",
      },
      workload_goodbye_timeout_seconds: {
        value: cdktf.listMapperHcl(workloadSettingsWorkloadGoodbyeTimeoutSecondsToHclTerraform, true)(this._workloadGoodbyeTimeoutSeconds.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorkloadSettingsWorkloadGoodbyeTimeoutSecondsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
