// https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#name Test#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#status Test#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#type Test#type}
  */
  readonly type: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#settings Test#settings}
  */
  readonly settings: TestSettings[] | cdktf.IResolvable;
}
export interface TestCreatedBy {
}

export function testCreatedByToTerraform(struct?: TestCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function testCreatedByToHclTerraform(struct?: TestCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TestCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class TestCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): TestCreatedByOutputReference {
    return new TestCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestLastUpdatedBy {
}

export function testLastUpdatedByToTerraform(struct?: TestLastUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function testLastUpdatedByToHclTerraform(struct?: TestLastUpdatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TestLastUpdatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestLastUpdatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestLastUpdatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class TestLastUpdatedByList extends cdktf.ComplexList {

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
  public get(index: number): TestLastUpdatedByOutputReference {
    return new TestLastUpdatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettingsAgent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#target Test#target}
  */
  readonly target: string;
}

export function testSettingsAgentToTerraform(struct?: TestSettingsAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function testSettingsAgentToHclTerraform(struct?: TestSettingsAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestSettingsAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettingsAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettingsAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class TestSettingsAgentList extends cdktf.ComplexList {
  public internalValue? : TestSettingsAgent[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsAgentOutputReference {
    return new TestSettingsAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettingsDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#target Test#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#type Test#type}
  */
  readonly type?: string;
}

export function testSettingsDnsToTerraform(struct?: TestSettingsDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function testSettingsDnsToHclTerraform(struct?: TestSettingsDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
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

export class TestSettingsDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettingsDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettingsDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
      this._type = value.type;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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

export class TestSettingsDnsList extends cdktf.ComplexList {
  public internalValue? : TestSettingsDns[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsDnsOutputReference {
    return new TestSettingsDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettingsDnsGrid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#targets Test#targets}
  */
  readonly targets: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#type Test#type}
  */
  readonly type: string;
}

export function testSettingsDnsGridToTerraform(struct?: TestSettingsDnsGrid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targets),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function testSettingsDnsGridToHclTerraform(struct?: TestSettingsDnsGrid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class TestSettingsDnsGridOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettingsDnsGrid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettingsDnsGrid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targets = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targets = value.targets;
      this._type = value.type;
    }
  }

  // targets - computed: false, optional: false, required: true
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
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

export class TestSettingsDnsGridList extends cdktf.ComplexList {
  public internalValue? : TestSettingsDnsGrid[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsDnsGridOutputReference {
    return new TestSettingsDnsGridOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettingsFlow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#direction Test#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#inet_direction Test#inet_direction}
  */
  readonly inetDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#max_tasks Test#max_tasks}
  */
  readonly maxTasks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#target Test#target}
  */
  readonly target: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#target_refresh_interval_millis Test#target_refresh_interval_millis}
  */
  readonly targetRefreshIntervalMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#type Test#type}
  */
  readonly type: string;
}

export function testSettingsFlowToTerraform(struct?: TestSettingsFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    inet_direction: cdktf.stringToTerraform(struct!.inetDirection),
    max_tasks: cdktf.numberToTerraform(struct!.maxTasks),
    target: cdktf.stringToTerraform(struct!.target),
    target_refresh_interval_millis: cdktf.numberToTerraform(struct!.targetRefreshIntervalMillis),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function testSettingsFlowToHclTerraform(struct?: TestSettingsFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inet_direction: {
      value: cdktf.stringToHclTerraform(struct!.inetDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_tasks: {
      value: cdktf.numberToHclTerraform(struct!.maxTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_refresh_interval_millis: {
      value: cdktf.numberToHclTerraform(struct!.targetRefreshIntervalMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class TestSettingsFlowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettingsFlow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._inetDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.inetDirection = this._inetDirection;
    }
    if (this._maxTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTasks = this._maxTasks;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._targetRefreshIntervalMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRefreshIntervalMillis = this._targetRefreshIntervalMillis;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettingsFlow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._inetDirection = undefined;
      this._maxTasks = undefined;
      this._target = undefined;
      this._targetRefreshIntervalMillis = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._inetDirection = value.inetDirection;
      this._maxTasks = value.maxTasks;
      this._target = value.target;
      this._targetRefreshIntervalMillis = value.targetRefreshIntervalMillis;
      this._type = value.type;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // inet_direction - computed: false, optional: true, required: false
  private _inetDirection?: string; 
  public get inetDirection() {
    return this.getStringAttribute('inet_direction');
  }
  public set inetDirection(value: string) {
    this._inetDirection = value;
  }
  public resetInetDirection() {
    this._inetDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inetDirectionInput() {
    return this._inetDirection;
  }

  // max_tasks - computed: false, optional: true, required: false
  private _maxTasks?: number; 
  public get maxTasks() {
    return this.getNumberAttribute('max_tasks');
  }
  public set maxTasks(value: number) {
    this._maxTasks = value;
  }
  public resetMaxTasks() {
    this._maxTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTasksInput() {
    return this._maxTasks;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_refresh_interval_millis - computed: false, optional: true, required: false
  private _targetRefreshIntervalMillis?: number; 
  public get targetRefreshIntervalMillis() {
    return this.getNumberAttribute('target_refresh_interval_millis');
  }
  public set targetRefreshIntervalMillis(value: number) {
    this._targetRefreshIntervalMillis = value;
  }
  public resetTargetRefreshIntervalMillis() {
    this._targetRefreshIntervalMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefreshIntervalMillisInput() {
    return this._targetRefreshIntervalMillis;
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

export class TestSettingsFlowList extends cdktf.ComplexList {
  public internalValue? : TestSettingsFlow[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsFlowOutputReference {
    return new TestSettingsFlowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettingsHealthSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#dns_valid_codes Test#dns_valid_codes}
  */
  readonly dnsValidCodes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#http_latency_critical Test#http_latency_critical}
  */
  readonly httpLatencyCritical?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#http_latency_critical_stddev Test#http_latency_critical_stddev}
  */
  readonly httpLatencyCriticalStddev?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#http_latency_warning Test#http_latency_warning}
  */
  readonly httpLatencyWarning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#http_latency_warning_stddev Test#http_latency_warning_stddev}
  */
  readonly httpLatencyWarningStddev?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#http_valid_codes Test#http_valid_codes}
  */
  readonly httpValidCodes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#jitter_critical Test#jitter_critical}
  */
  readonly jitterCritical?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#jitter_critical_stddev Test#jitter_critical_stddev}
  */
  readonly jitterCriticalStddev?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#jitter_warning Test#jitter_warning}
  */
  readonly jitterWarning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#jitter_warning_stddev Test#jitter_warning_stddev}
  */
  readonly jitterWarningStddev?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#latency_critical Test#latency_critical}
  */
  readonly latencyCritical?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#latency_critical_stddev Test#latency_critical_stddev}
  */
  readonly latencyCriticalStddev?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#latency_warning Test#latency_warning}
  */
  readonly latencyWarning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#latency_warning_stddev Test#latency_warning_stddev}
  */
  readonly latencyWarningStddev?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#packet_loss_critical Test#packet_loss_critical}
  */
  readonly packetLossCritical?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#packet_loss_warning Test#packet_loss_warning}
  */
  readonly packetLossWarning?: number;
}

export function testSettingsHealthSettingsToTerraform(struct?: TestSettingsHealthSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_valid_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dnsValidCodes),
    http_latency_critical: cdktf.numberToTerraform(struct!.httpLatencyCritical),
    http_latency_critical_stddev: cdktf.numberToTerraform(struct!.httpLatencyCriticalStddev),
    http_latency_warning: cdktf.numberToTerraform(struct!.httpLatencyWarning),
    http_latency_warning_stddev: cdktf.numberToTerraform(struct!.httpLatencyWarningStddev),
    http_valid_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.httpValidCodes),
    jitter_critical: cdktf.numberToTerraform(struct!.jitterCritical),
    jitter_critical_stddev: cdktf.numberToTerraform(struct!.jitterCriticalStddev),
    jitter_warning: cdktf.numberToTerraform(struct!.jitterWarning),
    jitter_warning_stddev: cdktf.numberToTerraform(struct!.jitterWarningStddev),
    latency_critical: cdktf.numberToTerraform(struct!.latencyCritical),
    latency_critical_stddev: cdktf.numberToTerraform(struct!.latencyCriticalStddev),
    latency_warning: cdktf.numberToTerraform(struct!.latencyWarning),
    latency_warning_stddev: cdktf.numberToTerraform(struct!.latencyWarningStddev),
    packet_loss_critical: cdktf.numberToTerraform(struct!.packetLossCritical),
    packet_loss_warning: cdktf.numberToTerraform(struct!.packetLossWarning),
  }
}


export function testSettingsHealthSettingsToHclTerraform(struct?: TestSettingsHealthSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_valid_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dnsValidCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    http_latency_critical: {
      value: cdktf.numberToHclTerraform(struct!.httpLatencyCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_latency_critical_stddev: {
      value: cdktf.numberToHclTerraform(struct!.httpLatencyCriticalStddev),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_latency_warning: {
      value: cdktf.numberToHclTerraform(struct!.httpLatencyWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_latency_warning_stddev: {
      value: cdktf.numberToHclTerraform(struct!.httpLatencyWarningStddev),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_valid_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.httpValidCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    jitter_critical: {
      value: cdktf.numberToHclTerraform(struct!.jitterCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jitter_critical_stddev: {
      value: cdktf.numberToHclTerraform(struct!.jitterCriticalStddev),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jitter_warning: {
      value: cdktf.numberToHclTerraform(struct!.jitterWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jitter_warning_stddev: {
      value: cdktf.numberToHclTerraform(struct!.jitterWarningStddev),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency_critical: {
      value: cdktf.numberToHclTerraform(struct!.latencyCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency_critical_stddev: {
      value: cdktf.numberToHclTerraform(struct!.latencyCriticalStddev),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency_warning: {
      value: cdktf.numberToHclTerraform(struct!.latencyWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency_warning_stddev: {
      value: cdktf.numberToHclTerraform(struct!.latencyWarningStddev),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_loss_critical: {
      value: cdktf.numberToHclTerraform(struct!.packetLossCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_loss_warning: {
      value: cdktf.numberToHclTerraform(struct!.packetLossWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestSettingsHealthSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettingsHealthSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsValidCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsValidCodes = this._dnsValidCodes;
    }
    if (this._httpLatencyCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpLatencyCritical = this._httpLatencyCritical;
    }
    if (this._httpLatencyCriticalStddev !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpLatencyCriticalStddev = this._httpLatencyCriticalStddev;
    }
    if (this._httpLatencyWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpLatencyWarning = this._httpLatencyWarning;
    }
    if (this._httpLatencyWarningStddev !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpLatencyWarningStddev = this._httpLatencyWarningStddev;
    }
    if (this._httpValidCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpValidCodes = this._httpValidCodes;
    }
    if (this._jitterCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterCritical = this._jitterCritical;
    }
    if (this._jitterCriticalStddev !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterCriticalStddev = this._jitterCriticalStddev;
    }
    if (this._jitterWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterWarning = this._jitterWarning;
    }
    if (this._jitterWarningStddev !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterWarningStddev = this._jitterWarningStddev;
    }
    if (this._latencyCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyCritical = this._latencyCritical;
    }
    if (this._latencyCriticalStddev !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyCriticalStddev = this._latencyCriticalStddev;
    }
    if (this._latencyWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyWarning = this._latencyWarning;
    }
    if (this._latencyWarningStddev !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyWarningStddev = this._latencyWarningStddev;
    }
    if (this._packetLossCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLossCritical = this._packetLossCritical;
    }
    if (this._packetLossWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLossWarning = this._packetLossWarning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettingsHealthSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsValidCodes = undefined;
      this._httpLatencyCritical = undefined;
      this._httpLatencyCriticalStddev = undefined;
      this._httpLatencyWarning = undefined;
      this._httpLatencyWarningStddev = undefined;
      this._httpValidCodes = undefined;
      this._jitterCritical = undefined;
      this._jitterCriticalStddev = undefined;
      this._jitterWarning = undefined;
      this._jitterWarningStddev = undefined;
      this._latencyCritical = undefined;
      this._latencyCriticalStddev = undefined;
      this._latencyWarning = undefined;
      this._latencyWarningStddev = undefined;
      this._packetLossCritical = undefined;
      this._packetLossWarning = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsValidCodes = value.dnsValidCodes;
      this._httpLatencyCritical = value.httpLatencyCritical;
      this._httpLatencyCriticalStddev = value.httpLatencyCriticalStddev;
      this._httpLatencyWarning = value.httpLatencyWarning;
      this._httpLatencyWarningStddev = value.httpLatencyWarningStddev;
      this._httpValidCodes = value.httpValidCodes;
      this._jitterCritical = value.jitterCritical;
      this._jitterCriticalStddev = value.jitterCriticalStddev;
      this._jitterWarning = value.jitterWarning;
      this._jitterWarningStddev = value.jitterWarningStddev;
      this._latencyCritical = value.latencyCritical;
      this._latencyCriticalStddev = value.latencyCriticalStddev;
      this._latencyWarning = value.latencyWarning;
      this._latencyWarningStddev = value.latencyWarningStddev;
      this._packetLossCritical = value.packetLossCritical;
      this._packetLossWarning = value.packetLossWarning;
    }
  }

  // dns_valid_codes - computed: false, optional: true, required: false
  private _dnsValidCodes?: number[]; 
  public get dnsValidCodes() {
    return this.getNumberListAttribute('dns_valid_codes');
  }
  public set dnsValidCodes(value: number[]) {
    this._dnsValidCodes = value;
  }
  public resetDnsValidCodes() {
    this._dnsValidCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsValidCodesInput() {
    return this._dnsValidCodes;
  }

  // http_latency_critical - computed: false, optional: true, required: false
  private _httpLatencyCritical?: number; 
  public get httpLatencyCritical() {
    return this.getNumberAttribute('http_latency_critical');
  }
  public set httpLatencyCritical(value: number) {
    this._httpLatencyCritical = value;
  }
  public resetHttpLatencyCritical() {
    this._httpLatencyCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpLatencyCriticalInput() {
    return this._httpLatencyCritical;
  }

  // http_latency_critical_stddev - computed: false, optional: true, required: false
  private _httpLatencyCriticalStddev?: number; 
  public get httpLatencyCriticalStddev() {
    return this.getNumberAttribute('http_latency_critical_stddev');
  }
  public set httpLatencyCriticalStddev(value: number) {
    this._httpLatencyCriticalStddev = value;
  }
  public resetHttpLatencyCriticalStddev() {
    this._httpLatencyCriticalStddev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpLatencyCriticalStddevInput() {
    return this._httpLatencyCriticalStddev;
  }

  // http_latency_warning - computed: false, optional: true, required: false
  private _httpLatencyWarning?: number; 
  public get httpLatencyWarning() {
    return this.getNumberAttribute('http_latency_warning');
  }
  public set httpLatencyWarning(value: number) {
    this._httpLatencyWarning = value;
  }
  public resetHttpLatencyWarning() {
    this._httpLatencyWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpLatencyWarningInput() {
    return this._httpLatencyWarning;
  }

  // http_latency_warning_stddev - computed: false, optional: true, required: false
  private _httpLatencyWarningStddev?: number; 
  public get httpLatencyWarningStddev() {
    return this.getNumberAttribute('http_latency_warning_stddev');
  }
  public set httpLatencyWarningStddev(value: number) {
    this._httpLatencyWarningStddev = value;
  }
  public resetHttpLatencyWarningStddev() {
    this._httpLatencyWarningStddev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpLatencyWarningStddevInput() {
    return this._httpLatencyWarningStddev;
  }

  // http_valid_codes - computed: false, optional: true, required: false
  private _httpValidCodes?: number[]; 
  public get httpValidCodes() {
    return this.getNumberListAttribute('http_valid_codes');
  }
  public set httpValidCodes(value: number[]) {
    this._httpValidCodes = value;
  }
  public resetHttpValidCodes() {
    this._httpValidCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpValidCodesInput() {
    return this._httpValidCodes;
  }

  // jitter_critical - computed: false, optional: true, required: false
  private _jitterCritical?: number; 
  public get jitterCritical() {
    return this.getNumberAttribute('jitter_critical');
  }
  public set jitterCritical(value: number) {
    this._jitterCritical = value;
  }
  public resetJitterCritical() {
    this._jitterCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterCriticalInput() {
    return this._jitterCritical;
  }

  // jitter_critical_stddev - computed: false, optional: true, required: false
  private _jitterCriticalStddev?: number; 
  public get jitterCriticalStddev() {
    return this.getNumberAttribute('jitter_critical_stddev');
  }
  public set jitterCriticalStddev(value: number) {
    this._jitterCriticalStddev = value;
  }
  public resetJitterCriticalStddev() {
    this._jitterCriticalStddev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterCriticalStddevInput() {
    return this._jitterCriticalStddev;
  }

  // jitter_warning - computed: false, optional: true, required: false
  private _jitterWarning?: number; 
  public get jitterWarning() {
    return this.getNumberAttribute('jitter_warning');
  }
  public set jitterWarning(value: number) {
    this._jitterWarning = value;
  }
  public resetJitterWarning() {
    this._jitterWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterWarningInput() {
    return this._jitterWarning;
  }

  // jitter_warning_stddev - computed: false, optional: true, required: false
  private _jitterWarningStddev?: number; 
  public get jitterWarningStddev() {
    return this.getNumberAttribute('jitter_warning_stddev');
  }
  public set jitterWarningStddev(value: number) {
    this._jitterWarningStddev = value;
  }
  public resetJitterWarningStddev() {
    this._jitterWarningStddev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterWarningStddevInput() {
    return this._jitterWarningStddev;
  }

  // latency_critical - computed: false, optional: true, required: false
  private _latencyCritical?: number; 
  public get latencyCritical() {
    return this.getNumberAttribute('latency_critical');
  }
  public set latencyCritical(value: number) {
    this._latencyCritical = value;
  }
  public resetLatencyCritical() {
    this._latencyCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyCriticalInput() {
    return this._latencyCritical;
  }

  // latency_critical_stddev - computed: false, optional: true, required: false
  private _latencyCriticalStddev?: number; 
  public get latencyCriticalStddev() {
    return this.getNumberAttribute('latency_critical_stddev');
  }
  public set latencyCriticalStddev(value: number) {
    this._latencyCriticalStddev = value;
  }
  public resetLatencyCriticalStddev() {
    this._latencyCriticalStddev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyCriticalStddevInput() {
    return this._latencyCriticalStddev;
  }

  // latency_warning - computed: false, optional: true, required: false
  private _latencyWarning?: number; 
  public get latencyWarning() {
    return this.getNumberAttribute('latency_warning');
  }
  public set latencyWarning(value: number) {
    this._latencyWarning = value;
  }
  public resetLatencyWarning() {
    this._latencyWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyWarningInput() {
    return this._latencyWarning;
  }

  // latency_warning_stddev - computed: false, optional: true, required: false
  private _latencyWarningStddev?: number; 
  public get latencyWarningStddev() {
    return this.getNumberAttribute('latency_warning_stddev');
  }
  public set latencyWarningStddev(value: number) {
    this._latencyWarningStddev = value;
  }
  public resetLatencyWarningStddev() {
    this._latencyWarningStddev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyWarningStddevInput() {
    return this._latencyWarningStddev;
  }

  // packet_loss_critical - computed: false, optional: true, required: false
  private _packetLossCritical?: number; 
  public get packetLossCritical() {
    return this.getNumberAttribute('packet_loss_critical');
  }
  public set packetLossCritical(value: number) {
    this._packetLossCritical = value;
  }
  public resetPacketLossCritical() {
    this._packetLossCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLossCriticalInput() {
    return this._packetLossCritical;
  }

  // packet_loss_warning - computed: false, optional: true, required: false
  private _packetLossWarning?: number; 
  public get packetLossWarning() {
    return this.getNumberAttribute('packet_loss_warning');
  }
  public set packetLossWarning(value: number) {
    this._packetLossWarning = value;
  }
  public resetPacketLossWarning() {
    this._packetLossWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLossWarningInput() {
    return this._packetLossWarning;
  }
}

export class TestSettingsHealthSettingsList extends cdktf.ComplexList {
  public internalValue? : TestSettingsHealthSettings[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsHealthSettingsOutputReference {
    return new TestSettingsHealthSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettingsHostname {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#target Test#target}
  */
  readonly target: string;
}

export function testSettingsHostnameToTerraform(struct?: TestSettingsHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function testSettingsHostnameToHclTerraform(struct?: TestSettingsHostname | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestSettingsHostnameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettingsHostname | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettingsHostname | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class TestSettingsHostnameList extends cdktf.ComplexList {
  public internalValue? : TestSettingsHostname[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsHostnameOutputReference {
    return new TestSettingsHostnameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettingsHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#body Test#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#css_selectors Test#css_selectors}
  */
  readonly cssSelectors?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#expiry Test#expiry}
  */
  readonly expiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#headers Test#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#ignore_tls_errors Test#ignore_tls_errors}
  */
  readonly ignoreTlsErrors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#method Test#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#period Test#period}
  */
  readonly period?: number;
}

export function testSettingsHttpToTerraform(struct?: TestSettingsHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    css_selectors: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.cssSelectors),
    expiry: cdktf.numberToTerraform(struct!.expiry),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    ignore_tls_errors: cdktf.booleanToTerraform(struct!.ignoreTlsErrors),
    method: cdktf.stringToTerraform(struct!.method),
    period: cdktf.numberToTerraform(struct!.period),
  }
}


export function testSettingsHttpToHclTerraform(struct?: TestSettingsHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    css_selectors: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.cssSelectors),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    expiry: {
      value: cdktf.numberToHclTerraform(struct!.expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ignore_tls_errors: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreTlsErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestSettingsHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettingsHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._cssSelectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.cssSelectors = this._cssSelectors;
    }
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._ignoreTlsErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTlsErrors = this._ignoreTlsErrors;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettingsHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._cssSelectors = undefined;
      this._expiry = undefined;
      this._headers = undefined;
      this._ignoreTlsErrors = undefined;
      this._method = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._cssSelectors = value.cssSelectors;
      this._expiry = value.expiry;
      this._headers = value.headers;
      this._ignoreTlsErrors = value.ignoreTlsErrors;
      this._method = value.method;
      this._period = value.period;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // css_selectors - computed: false, optional: true, required: false
  private _cssSelectors?: { [key: string]: string }; 
  public get cssSelectors() {
    return this.getStringMapAttribute('css_selectors');
  }
  public set cssSelectors(value: { [key: string]: string }) {
    this._cssSelectors = value;
  }
  public resetCssSelectors() {
    this._cssSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cssSelectorsInput() {
    return this._cssSelectors;
  }

  // expiry - computed: false, optional: true, required: false
  private _expiry?: number; 
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }
  public set expiry(value: number) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // ignore_tls_errors - computed: false, optional: true, required: false
  private _ignoreTlsErrors?: boolean | cdktf.IResolvable; 
  public get ignoreTlsErrors() {
    return this.getBooleanAttribute('ignore_tls_errors');
  }
  public set ignoreTlsErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreTlsErrors = value;
  }
  public resetIgnoreTlsErrors() {
    this._ignoreTlsErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTlsErrorsInput() {
    return this._ignoreTlsErrors;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }
}

export class TestSettingsHttpList extends cdktf.ComplexList {
  public internalValue? : TestSettingsHttp[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsHttpOutputReference {
    return new TestSettingsHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettingsIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#targets Test#targets}
  */
  readonly targets: string[];
}

export function testSettingsIpToTerraform(struct?: TestSettingsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targets),
  }
}


export function testSettingsIpToHclTerraform(struct?: TestSettingsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestSettingsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettingsIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettingsIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targets = value.targets;
    }
  }

  // targets - computed: false, optional: false, required: true
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }
}

export class TestSettingsIpList extends cdktf.ComplexList {
  public internalValue? : TestSettingsIp[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsIpOutputReference {
    return new TestSettingsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettingsMonitoringSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#notification_channels Test#notification_channels}
  */
  readonly notificationChannels?: string[];
}

export function testSettingsMonitoringSettingsToTerraform(struct?: TestSettingsMonitoringSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationChannels),
  }
}


export function testSettingsMonitoringSettingsToHclTerraform(struct?: TestSettingsMonitoringSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notificationChannels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestSettingsMonitoringSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettingsMonitoringSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationChannels = this._notificationChannels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettingsMonitoringSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationChannels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationChannels = value.notificationChannels;
    }
  }

  // notification_channels - computed: false, optional: true, required: false
  private _notificationChannels?: string[]; 
  public get notificationChannels() {
    return this.getListAttribute('notification_channels');
  }
  public set notificationChannels(value: string[]) {
    this._notificationChannels = value;
  }
  public resetNotificationChannels() {
    this._notificationChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationChannelsInput() {
    return this._notificationChannels;
  }
}

export class TestSettingsMonitoringSettingsList extends cdktf.ComplexList {
  public internalValue? : TestSettingsMonitoringSettings[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsMonitoringSettingsOutputReference {
    return new TestSettingsMonitoringSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettingsNetworkGrid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#targets Test#targets}
  */
  readonly targets: string[];
}

export function testSettingsNetworkGridToTerraform(struct?: TestSettingsNetworkGrid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    targets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targets),
  }
}


export function testSettingsNetworkGridToHclTerraform(struct?: TestSettingsNetworkGrid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    targets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestSettingsNetworkGridOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettingsNetworkGrid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targets !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettingsNetworkGrid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targets = value.targets;
    }
  }

  // targets - computed: false, optional: false, required: true
  private _targets?: string[]; 
  public get targets() {
    return this.getListAttribute('targets');
  }
  public set targets(value: string[]) {
    this._targets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets;
  }
}

export class TestSettingsNetworkGridList extends cdktf.ComplexList {
  public internalValue? : TestSettingsNetworkGrid[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsNetworkGridOutputReference {
    return new TestSettingsNetworkGridOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettingsPageLoad {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#target Test#target}
  */
  readonly target: string;
}

export function testSettingsPageLoadToTerraform(struct?: TestSettingsPageLoad | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function testSettingsPageLoadToHclTerraform(struct?: TestSettingsPageLoad | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestSettingsPageLoadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettingsPageLoad | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettingsPageLoad | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class TestSettingsPageLoadList extends cdktf.ComplexList {
  public internalValue? : TestSettingsPageLoad[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsPageLoadOutputReference {
    return new TestSettingsPageLoadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettingsPing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#count Test#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#delay Test#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#expiry Test#expiry}
  */
  readonly expiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#period Test#period}
  */
  readonly period: number;
}

export function testSettingsPingToTerraform(struct?: TestSettingsPing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    delay: cdktf.numberToTerraform(struct!.delay),
    expiry: cdktf.numberToTerraform(struct!.expiry),
    period: cdktf.numberToTerraform(struct!.period),
  }
}


export function testSettingsPingToHclTerraform(struct?: TestSettingsPing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expiry: {
      value: cdktf.numberToHclTerraform(struct!.expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestSettingsPingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettingsPing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettingsPing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._delay = undefined;
      this._expiry = undefined;
      this._period = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._delay = value.delay;
      this._expiry = value.expiry;
      this._period = value.period;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // expiry - computed: false, optional: true, required: false
  private _expiry?: number; 
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }
  public set expiry(value: number) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }
}

export class TestSettingsPingList extends cdktf.ComplexList {
  public internalValue? : TestSettingsPing[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsPingOutputReference {
    return new TestSettingsPingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettingsSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#target Test#target}
  */
  readonly target: string;
}

export function testSettingsSiteToTerraform(struct?: TestSettingsSite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function testSettingsSiteToHclTerraform(struct?: TestSettingsSite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestSettingsSiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettingsSite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettingsSite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class TestSettingsSiteList extends cdktf.ComplexList {
  public internalValue? : TestSettingsSite[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsSiteOutputReference {
    return new TestSettingsSiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettingsTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#target Test#target}
  */
  readonly target: string;
}

export function testSettingsTagToTerraform(struct?: TestSettingsTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function testSettingsTagToHclTerraform(struct?: TestSettingsTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestSettingsTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettingsTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettingsTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class TestSettingsTagList extends cdktf.ComplexList {
  public internalValue? : TestSettingsTag[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsTagOutputReference {
    return new TestSettingsTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettingsTrace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#count Test#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#delay Test#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#expiry Test#expiry}
  */
  readonly expiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#limit Test#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#period Test#period}
  */
  readonly period: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#port Test#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#protocol Test#protocol}
  */
  readonly protocol: string;
}

export function testSettingsTraceToTerraform(struct?: TestSettingsTrace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    delay: cdktf.numberToTerraform(struct!.delay),
    expiry: cdktf.numberToTerraform(struct!.expiry),
    limit: cdktf.numberToTerraform(struct!.limit),
    period: cdktf.numberToTerraform(struct!.period),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function testSettingsTraceToHclTerraform(struct?: TestSettingsTrace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expiry: {
      value: cdktf.numberToHclTerraform(struct!.expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestSettingsTraceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettingsTrace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettingsTrace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._delay = undefined;
      this._expiry = undefined;
      this._limit = undefined;
      this._period = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._delay = value.delay;
      this._expiry = value.expiry;
      this._limit = value.limit;
      this._period = value.period;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // expiry - computed: false, optional: true, required: false
  private _expiry?: number; 
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }
  public set expiry(value: number) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class TestSettingsTraceList extends cdktf.ComplexList {
  public internalValue? : TestSettingsTrace[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsTraceOutputReference {
    return new TestSettingsTraceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettingsUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#target Test#target}
  */
  readonly target: string;
}

export function testSettingsUrlToTerraform(struct?: TestSettingsUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function testSettingsUrlToHclTerraform(struct?: TestSettingsUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestSettingsUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettingsUrl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettingsUrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class TestSettingsUrlList extends cdktf.ComplexList {
  public internalValue? : TestSettingsUrl[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsUrlOutputReference {
    return new TestSettingsUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TestSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#agent_ids Test#agent_ids}
  */
  readonly agentIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#count Test#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#expiry Test#expiry}
  */
  readonly expiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#family Test#family}
  */
  readonly family: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#limit Test#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#period Test#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#port Test#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#protocol Test#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#rollup_level Test#rollup_level}
  */
  readonly rollupLevel: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#servers Test#servers}
  */
  readonly servers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#tasks Test#tasks}
  */
  readonly tasks: string[];
  /**
  * agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#agent Test#agent}
  */
  readonly agent?: TestSettingsAgent[] | cdktf.IResolvable;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#dns Test#dns}
  */
  readonly dns?: TestSettingsDns[] | cdktf.IResolvable;
  /**
  * dns_grid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#dns_grid Test#dns_grid}
  */
  readonly dnsGrid?: TestSettingsDnsGrid[] | cdktf.IResolvable;
  /**
  * flow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#flow Test#flow}
  */
  readonly flow?: TestSettingsFlow[] | cdktf.IResolvable;
  /**
  * health_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#health_settings Test#health_settings}
  */
  readonly healthSettings?: TestSettingsHealthSettings[] | cdktf.IResolvable;
  /**
  * hostname block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#hostname Test#hostname}
  */
  readonly hostname?: TestSettingsHostname[] | cdktf.IResolvable;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#http Test#http}
  */
  readonly http?: TestSettingsHttp[] | cdktf.IResolvable;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#ip Test#ip}
  */
  readonly ip?: TestSettingsIp[] | cdktf.IResolvable;
  /**
  * monitoring_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#monitoring_settings Test#monitoring_settings}
  */
  readonly monitoringSettings?: TestSettingsMonitoringSettings[] | cdktf.IResolvable;
  /**
  * network_grid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#network_grid Test#network_grid}
  */
  readonly networkGrid?: TestSettingsNetworkGrid[] | cdktf.IResolvable;
  /**
  * page_load block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#page_load Test#page_load}
  */
  readonly pageLoad?: TestSettingsPageLoad[] | cdktf.IResolvable;
  /**
  * ping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#ping Test#ping}
  */
  readonly ping?: TestSettingsPing[] | cdktf.IResolvable;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#site Test#site}
  */
  readonly site?: TestSettingsSite[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#tag Test#tag}
  */
  readonly tag?: TestSettingsTag[] | cdktf.IResolvable;
  /**
  * trace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#trace Test#trace}
  */
  readonly trace: TestSettingsTrace[] | cdktf.IResolvable;
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#url Test#url}
  */
  readonly url?: TestSettingsUrl[] | cdktf.IResolvable;
}

export function testSettingsToTerraform(struct?: TestSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.agentIds),
    count: cdktf.numberToTerraform(struct!.count),
    expiry: cdktf.numberToTerraform(struct!.expiry),
    family: cdktf.stringToTerraform(struct!.family),
    limit: cdktf.numberToTerraform(struct!.limit),
    period: cdktf.numberToTerraform(struct!.period),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    rollup_level: cdktf.numberToTerraform(struct!.rollupLevel),
    servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servers),
    tasks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tasks),
    agent: cdktf.listMapper(testSettingsAgentToTerraform, true)(struct!.agent),
    dns: cdktf.listMapper(testSettingsDnsToTerraform, true)(struct!.dns),
    dns_grid: cdktf.listMapper(testSettingsDnsGridToTerraform, true)(struct!.dnsGrid),
    flow: cdktf.listMapper(testSettingsFlowToTerraform, true)(struct!.flow),
    health_settings: cdktf.listMapper(testSettingsHealthSettingsToTerraform, true)(struct!.healthSettings),
    hostname: cdktf.listMapper(testSettingsHostnameToTerraform, true)(struct!.hostname),
    http: cdktf.listMapper(testSettingsHttpToTerraform, true)(struct!.http),
    ip: cdktf.listMapper(testSettingsIpToTerraform, true)(struct!.ip),
    monitoring_settings: cdktf.listMapper(testSettingsMonitoringSettingsToTerraform, true)(struct!.monitoringSettings),
    network_grid: cdktf.listMapper(testSettingsNetworkGridToTerraform, true)(struct!.networkGrid),
    page_load: cdktf.listMapper(testSettingsPageLoadToTerraform, true)(struct!.pageLoad),
    ping: cdktf.listMapper(testSettingsPingToTerraform, true)(struct!.ping),
    site: cdktf.listMapper(testSettingsSiteToTerraform, true)(struct!.site),
    tag: cdktf.listMapper(testSettingsTagToTerraform, true)(struct!.tag),
    trace: cdktf.listMapper(testSettingsTraceToTerraform, true)(struct!.trace),
    url: cdktf.listMapper(testSettingsUrlToTerraform, true)(struct!.url),
  }
}


export function testSettingsToHclTerraform(struct?: TestSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.agentIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expiry: {
      value: cdktf.numberToHclTerraform(struct!.expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollup_level: {
      value: cdktf.numberToHclTerraform(struct!.rollupLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tasks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tasks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    agent: {
      value: cdktf.listMapperHcl(testSettingsAgentToHclTerraform, true)(struct!.agent),
      isBlock: true,
      type: "list",
      storageClassType: "TestSettingsAgentList",
    },
    dns: {
      value: cdktf.listMapperHcl(testSettingsDnsToHclTerraform, true)(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "TestSettingsDnsList",
    },
    dns_grid: {
      value: cdktf.listMapperHcl(testSettingsDnsGridToHclTerraform, true)(struct!.dnsGrid),
      isBlock: true,
      type: "list",
      storageClassType: "TestSettingsDnsGridList",
    },
    flow: {
      value: cdktf.listMapperHcl(testSettingsFlowToHclTerraform, true)(struct!.flow),
      isBlock: true,
      type: "list",
      storageClassType: "TestSettingsFlowList",
    },
    health_settings: {
      value: cdktf.listMapperHcl(testSettingsHealthSettingsToHclTerraform, true)(struct!.healthSettings),
      isBlock: true,
      type: "list",
      storageClassType: "TestSettingsHealthSettingsList",
    },
    hostname: {
      value: cdktf.listMapperHcl(testSettingsHostnameToHclTerraform, true)(struct!.hostname),
      isBlock: true,
      type: "list",
      storageClassType: "TestSettingsHostnameList",
    },
    http: {
      value: cdktf.listMapperHcl(testSettingsHttpToHclTerraform, true)(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "TestSettingsHttpList",
    },
    ip: {
      value: cdktf.listMapperHcl(testSettingsIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "TestSettingsIpList",
    },
    monitoring_settings: {
      value: cdktf.listMapperHcl(testSettingsMonitoringSettingsToHclTerraform, true)(struct!.monitoringSettings),
      isBlock: true,
      type: "list",
      storageClassType: "TestSettingsMonitoringSettingsList",
    },
    network_grid: {
      value: cdktf.listMapperHcl(testSettingsNetworkGridToHclTerraform, true)(struct!.networkGrid),
      isBlock: true,
      type: "list",
      storageClassType: "TestSettingsNetworkGridList",
    },
    page_load: {
      value: cdktf.listMapperHcl(testSettingsPageLoadToHclTerraform, true)(struct!.pageLoad),
      isBlock: true,
      type: "list",
      storageClassType: "TestSettingsPageLoadList",
    },
    ping: {
      value: cdktf.listMapperHcl(testSettingsPingToHclTerraform, true)(struct!.ping),
      isBlock: true,
      type: "list",
      storageClassType: "TestSettingsPingList",
    },
    site: {
      value: cdktf.listMapperHcl(testSettingsSiteToHclTerraform, true)(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "TestSettingsSiteList",
    },
    tag: {
      value: cdktf.listMapperHcl(testSettingsTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "TestSettingsTagList",
    },
    trace: {
      value: cdktf.listMapperHcl(testSettingsTraceToHclTerraform, true)(struct!.trace),
      isBlock: true,
      type: "list",
      storageClassType: "TestSettingsTraceList",
    },
    url: {
      value: cdktf.listMapperHcl(testSettingsUrlToHclTerraform, true)(struct!.url),
      isBlock: true,
      type: "list",
      storageClassType: "TestSettingsUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TestSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TestSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentIds = this._agentIds;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._rollupLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollupLevel = this._rollupLevel;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    if (this._tasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.tasks = this._tasks;
    }
    if (this._agent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent?.internalValue;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._dnsGrid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsGrid = this._dnsGrid?.internalValue;
    }
    if (this._flow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flow = this._flow?.internalValue;
    }
    if (this._healthSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthSettings = this._healthSettings?.internalValue;
    }
    if (this._hostname?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._monitoringSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringSettings = this._monitoringSettings?.internalValue;
    }
    if (this._networkGrid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkGrid = this._networkGrid?.internalValue;
    }
    if (this._pageLoad?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageLoad = this._pageLoad?.internalValue;
    }
    if (this._ping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ping = this._ping?.internalValue;
    }
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    if (this._trace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trace = this._trace?.internalValue;
    }
    if (this._url?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TestSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentIds = undefined;
      this._count = undefined;
      this._expiry = undefined;
      this._family = undefined;
      this._limit = undefined;
      this._period = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._rollupLevel = undefined;
      this._servers = undefined;
      this._tasks = undefined;
      this._agent.internalValue = undefined;
      this._dns.internalValue = undefined;
      this._dnsGrid.internalValue = undefined;
      this._flow.internalValue = undefined;
      this._healthSettings.internalValue = undefined;
      this._hostname.internalValue = undefined;
      this._http.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._monitoringSettings.internalValue = undefined;
      this._networkGrid.internalValue = undefined;
      this._pageLoad.internalValue = undefined;
      this._ping.internalValue = undefined;
      this._site.internalValue = undefined;
      this._tag.internalValue = undefined;
      this._trace.internalValue = undefined;
      this._url.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentIds = value.agentIds;
      this._count = value.count;
      this._expiry = value.expiry;
      this._family = value.family;
      this._limit = value.limit;
      this._period = value.period;
      this._port = value.port;
      this._protocol = value.protocol;
      this._rollupLevel = value.rollupLevel;
      this._servers = value.servers;
      this._tasks = value.tasks;
      this._agent.internalValue = value.agent;
      this._dns.internalValue = value.dns;
      this._dnsGrid.internalValue = value.dnsGrid;
      this._flow.internalValue = value.flow;
      this._healthSettings.internalValue = value.healthSettings;
      this._hostname.internalValue = value.hostname;
      this._http.internalValue = value.http;
      this._ip.internalValue = value.ip;
      this._monitoringSettings.internalValue = value.monitoringSettings;
      this._networkGrid.internalValue = value.networkGrid;
      this._pageLoad.internalValue = value.pageLoad;
      this._ping.internalValue = value.ping;
      this._site.internalValue = value.site;
      this._tag.internalValue = value.tag;
      this._trace.internalValue = value.trace;
      this._url.internalValue = value.url;
    }
  }

  // agent_ids - computed: false, optional: false, required: true
  private _agentIds?: string[]; 
  public get agentIds() {
    return this.getListAttribute('agent_ids');
  }
  public set agentIds(value: string[]) {
    this._agentIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdsInput() {
    return this._agentIds;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // expiry - computed: false, optional: true, required: false
  private _expiry?: number; 
  public get expiry() {
    return this.getNumberAttribute('expiry');
  }
  public set expiry(value: number) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // family - computed: false, optional: false, required: true
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // rollup_level - computed: false, optional: false, required: true
  private _rollupLevel?: number; 
  public get rollupLevel() {
    return this.getNumberAttribute('rollup_level');
  }
  public set rollupLevel(value: number) {
    this._rollupLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupLevelInput() {
    return this._rollupLevel;
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // tasks - computed: false, optional: false, required: true
  private _tasks?: string[]; 
  public get tasks() {
    return this.getListAttribute('tasks');
  }
  public set tasks(value: string[]) {
    this._tasks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksInput() {
    return this._tasks;
  }

  // agent - computed: false, optional: true, required: false
  private _agent = new TestSettingsAgentList(this, "agent", false);
  public get agent() {
    return this._agent;
  }
  public putAgent(value: TestSettingsAgent[] | cdktf.IResolvable) {
    this._agent.internalValue = value;
  }
  public resetAgent() {
    this._agent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new TestSettingsDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }
  public putDns(value: TestSettingsDns[] | cdktf.IResolvable) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // dns_grid - computed: false, optional: true, required: false
  private _dnsGrid = new TestSettingsDnsGridList(this, "dns_grid", false);
  public get dnsGrid() {
    return this._dnsGrid;
  }
  public putDnsGrid(value: TestSettingsDnsGrid[] | cdktf.IResolvable) {
    this._dnsGrid.internalValue = value;
  }
  public resetDnsGrid() {
    this._dnsGrid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsGridInput() {
    return this._dnsGrid.internalValue;
  }

  // flow - computed: false, optional: true, required: false
  private _flow = new TestSettingsFlowList(this, "flow", false);
  public get flow() {
    return this._flow;
  }
  public putFlow(value: TestSettingsFlow[] | cdktf.IResolvable) {
    this._flow.internalValue = value;
  }
  public resetFlow() {
    this._flow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowInput() {
    return this._flow.internalValue;
  }

  // health_settings - computed: false, optional: true, required: false
  private _healthSettings = new TestSettingsHealthSettingsList(this, "health_settings", false);
  public get healthSettings() {
    return this._healthSettings;
  }
  public putHealthSettings(value: TestSettingsHealthSettings[] | cdktf.IResolvable) {
    this._healthSettings.internalValue = value;
  }
  public resetHealthSettings() {
    this._healthSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthSettingsInput() {
    return this._healthSettings.internalValue;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname = new TestSettingsHostnameList(this, "hostname", false);
  public get hostname() {
    return this._hostname;
  }
  public putHostname(value: TestSettingsHostname[] | cdktf.IResolvable) {
    this._hostname.internalValue = value;
  }
  public resetHostname() {
    this._hostname.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new TestSettingsHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: TestSettingsHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new TestSettingsIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: TestSettingsIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // monitoring_settings - computed: false, optional: true, required: false
  private _monitoringSettings = new TestSettingsMonitoringSettingsList(this, "monitoring_settings", false);
  public get monitoringSettings() {
    return this._monitoringSettings;
  }
  public putMonitoringSettings(value: TestSettingsMonitoringSettings[] | cdktf.IResolvable) {
    this._monitoringSettings.internalValue = value;
  }
  public resetMonitoringSettings() {
    this._monitoringSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringSettingsInput() {
    return this._monitoringSettings.internalValue;
  }

  // network_grid - computed: false, optional: true, required: false
  private _networkGrid = new TestSettingsNetworkGridList(this, "network_grid", false);
  public get networkGrid() {
    return this._networkGrid;
  }
  public putNetworkGrid(value: TestSettingsNetworkGrid[] | cdktf.IResolvable) {
    this._networkGrid.internalValue = value;
  }
  public resetNetworkGrid() {
    this._networkGrid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkGridInput() {
    return this._networkGrid.internalValue;
  }

  // page_load - computed: false, optional: true, required: false
  private _pageLoad = new TestSettingsPageLoadList(this, "page_load", false);
  public get pageLoad() {
    return this._pageLoad;
  }
  public putPageLoad(value: TestSettingsPageLoad[] | cdktf.IResolvable) {
    this._pageLoad.internalValue = value;
  }
  public resetPageLoad() {
    this._pageLoad.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageLoadInput() {
    return this._pageLoad.internalValue;
  }

  // ping - computed: false, optional: true, required: false
  private _ping = new TestSettingsPingList(this, "ping", false);
  public get ping() {
    return this._ping;
  }
  public putPing(value: TestSettingsPing[] | cdktf.IResolvable) {
    this._ping.internalValue = value;
  }
  public resetPing() {
    this._ping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingInput() {
    return this._ping.internalValue;
  }

  // site - computed: false, optional: true, required: false
  private _site = new TestSettingsSiteList(this, "site", false);
  public get site() {
    return this._site;
  }
  public putSite(value: TestSettingsSite[] | cdktf.IResolvable) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new TestSettingsTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: TestSettingsTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // trace - computed: false, optional: false, required: true
  private _trace = new TestSettingsTraceList(this, "trace", false);
  public get trace() {
    return this._trace;
  }
  public putTrace(value: TestSettingsTrace[] | cdktf.IResolvable) {
    this._trace.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url = new TestSettingsUrlList(this, "url", false);
  public get url() {
    return this._url;
  }
  public putUrl(value: TestSettingsUrl[] | cdktf.IResolvable) {
    this._url.internalValue = value;
  }
  public resetUrl() {
    this._url.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }
}

export class TestSettingsList extends cdktf.ComplexList {
  public internalValue? : TestSettings[] | cdktf.IResolvable

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
  public get(index: number): TestSettingsOutputReference {
    return new TestSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test kentik-synthetics_test}
*/
export class Test extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kentik-synthetics_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Test resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Test to import
  * @param importFromId The id of the existing Test that should be imported. Refer to the {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Test to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kentik-synthetics_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kentik/kentik-synthetics/0.2.1/docs/resources/test kentik-synthetics_test} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TestConfig
  */
  public constructor(scope: Construct, id: string, config: TestConfig) {
    super(scope, id, {
      terraformResourceType: 'kentik-synthetics_test',
      terraformGeneratorMetadata: {
        providerName: 'kentik-synthetics',
        providerVersion: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._status = config.status;
    this._type = config.type;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdate - computed: true, optional: false, required: false
  public get cdate() {
    return this.getStringAttribute('cdate');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new TestCreatedByList(this, "created_by", false);
  public get createdBy() {
    return this._createdBy;
  }

  // edate - computed: true, optional: false, required: false
  public get edate() {
    return this.getStringAttribute('edate');
  }

  // expires_on - computed: true, optional: false, required: false
  public get expiresOn() {
    return this.getStringAttribute('expires_on');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_by - computed: true, optional: false, required: false
  private _lastUpdatedBy = new TestLastUpdatedByList(this, "last_updated_by", false);
  public get lastUpdatedBy() {
    return this._lastUpdatedBy;
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

  // settings - computed: false, optional: false, required: true
  private _settings = new TestSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: TestSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      settings: cdktf.listMapper(testSettingsToTerraform, true)(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: cdktf.listMapperHcl(testSettingsToHclTerraform, true)(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TestSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
