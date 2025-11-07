// https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of actions to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#actions Rule#actions}
  */
  readonly actions: RuleActions[] | cdktf.IResolvable;
  /**
  * Defines the conditions that trigger the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#conditions Rule#conditions}
  */
  readonly conditions?: RuleConditions;
  /**
  * Optional description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#description Rule#description}
  */
  readonly description?: string;
  /**
  * Unique name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#name Rule#name}
  */
  readonly name: string;
  /**
  * 1 enabled, 0 disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#status Rule#status}
  */
  readonly status: number;
  /**
  * Event trigger. 1 = Filesystem event, 2 = Provider event, 3 = Schedule, 4 = IP Blocked, 5 = Certificate renewal, 6 = On demand, 7 = Identity Provider login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#trigger Rule#trigger}
  */
  readonly trigger: number;
}
export interface RuleActions {
  /**
  * Supported for upload events and required for pre-* events and Identity provider login events if the action checks the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#execute_sync Rule#execute_sync}
  */
  readonly executeSync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#is_failure_action Rule#is_failure_action}
  */
  readonly isFailureAction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#name Rule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#stop_on_failure Rule#stop_on_failure}
  */
  readonly stopOnFailure?: boolean | cdktf.IResolvable;
}

export function ruleActionsToTerraform(struct?: RuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_sync: cdktf.booleanToTerraform(struct!.executeSync),
    is_failure_action: cdktf.booleanToTerraform(struct!.isFailureAction),
    name: cdktf.stringToTerraform(struct!.name),
    stop_on_failure: cdktf.booleanToTerraform(struct!.stopOnFailure),
  }
}


export function ruleActionsToHclTerraform(struct?: RuleActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execute_sync: {
      value: cdktf.booleanToHclTerraform(struct!.executeSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_failure_action: {
      value: cdktf.booleanToHclTerraform(struct!.isFailureAction),
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
    stop_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.stopOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeSync = this._executeSync;
    }
    if (this._isFailureAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFailureAction = this._isFailureAction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stopOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnFailure = this._stopOnFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executeSync = undefined;
      this._isFailureAction = undefined;
      this._name = undefined;
      this._stopOnFailure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executeSync = value.executeSync;
      this._isFailureAction = value.isFailureAction;
      this._name = value.name;
      this._stopOnFailure = value.stopOnFailure;
    }
  }

  // execute_sync - computed: false, optional: true, required: false
  private _executeSync?: boolean | cdktf.IResolvable; 
  public get executeSync() {
    return this.getBooleanAttribute('execute_sync');
  }
  public set executeSync(value: boolean | cdktf.IResolvable) {
    this._executeSync = value;
  }
  public resetExecuteSync() {
    this._executeSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeSyncInput() {
    return this._executeSync;
  }

  // is_failure_action - computed: false, optional: true, required: false
  private _isFailureAction?: boolean | cdktf.IResolvable; 
  public get isFailureAction() {
    return this.getBooleanAttribute('is_failure_action');
  }
  public set isFailureAction(value: boolean | cdktf.IResolvable) {
    this._isFailureAction = value;
  }
  public resetIsFailureAction() {
    this._isFailureAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFailureActionInput() {
    return this._isFailureAction;
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

  // stop_on_failure - computed: false, optional: true, required: false
  private _stopOnFailure?: boolean | cdktf.IResolvable; 
  public get stopOnFailure() {
    return this.getBooleanAttribute('stop_on_failure');
  }
  public set stopOnFailure(value: boolean | cdktf.IResolvable) {
    this._stopOnFailure = value;
  }
  public resetStopOnFailure() {
    this._stopOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnFailureInput() {
    return this._stopOnFailure;
  }
}

export class RuleActionsList extends cdktf.ComplexList {
  public internalValue? : RuleActions[] | cdktf.IResolvable

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
  public get(index: number): RuleActionsOutputReference {
    return new RuleActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionsOptionsFsPaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#inverse_match Rule#inverse_match}
  */
  readonly inverseMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#pattern Rule#pattern}
  */
  readonly pattern: string;
}

export function ruleConditionsOptionsFsPathsToTerraform(struct?: RuleConditionsOptionsFsPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse_match: cdktf.booleanToTerraform(struct!.inverseMatch),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function ruleConditionsOptionsFsPathsToHclTerraform(struct?: RuleConditionsOptionsFsPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse_match: {
      value: cdktf.booleanToHclTerraform(struct!.inverseMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleConditionsOptionsFsPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleConditionsOptionsFsPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverseMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverseMatch = this._inverseMatch;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionsOptionsFsPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverseMatch = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverseMatch = value.inverseMatch;
      this._pattern = value.pattern;
    }
  }

  // inverse_match - computed: true, optional: true, required: false
  private _inverseMatch?: boolean | cdktf.IResolvable; 
  public get inverseMatch() {
    return this.getBooleanAttribute('inverse_match');
  }
  public set inverseMatch(value: boolean | cdktf.IResolvable) {
    this._inverseMatch = value;
  }
  public resetInverseMatch() {
    this._inverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseMatchInput() {
    return this._inverseMatch;
  }

  // pattern - computed: true, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class RuleConditionsOptionsFsPathsList extends cdktf.ComplexList {
  public internalValue? : RuleConditionsOptionsFsPaths[] | cdktf.IResolvable

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
  public get(index: number): RuleConditionsOptionsFsPathsOutputReference {
    return new RuleConditionsOptionsFsPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionsOptionsGroupNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#inverse_match Rule#inverse_match}
  */
  readonly inverseMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#pattern Rule#pattern}
  */
  readonly pattern: string;
}

export function ruleConditionsOptionsGroupNamesToTerraform(struct?: RuleConditionsOptionsGroupNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse_match: cdktf.booleanToTerraform(struct!.inverseMatch),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function ruleConditionsOptionsGroupNamesToHclTerraform(struct?: RuleConditionsOptionsGroupNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse_match: {
      value: cdktf.booleanToHclTerraform(struct!.inverseMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleConditionsOptionsGroupNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleConditionsOptionsGroupNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverseMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverseMatch = this._inverseMatch;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionsOptionsGroupNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverseMatch = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverseMatch = value.inverseMatch;
      this._pattern = value.pattern;
    }
  }

  // inverse_match - computed: true, optional: true, required: false
  private _inverseMatch?: boolean | cdktf.IResolvable; 
  public get inverseMatch() {
    return this.getBooleanAttribute('inverse_match');
  }
  public set inverseMatch(value: boolean | cdktf.IResolvable) {
    this._inverseMatch = value;
  }
  public resetInverseMatch() {
    this._inverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseMatchInput() {
    return this._inverseMatch;
  }

  // pattern - computed: true, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class RuleConditionsOptionsGroupNamesList extends cdktf.ComplexList {
  public internalValue? : RuleConditionsOptionsGroupNames[] | cdktf.IResolvable

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
  public get(index: number): RuleConditionsOptionsGroupNamesOutputReference {
    return new RuleConditionsOptionsGroupNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionsOptionsNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#inverse_match Rule#inverse_match}
  */
  readonly inverseMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#pattern Rule#pattern}
  */
  readonly pattern: string;
}

export function ruleConditionsOptionsNamesToTerraform(struct?: RuleConditionsOptionsNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse_match: cdktf.booleanToTerraform(struct!.inverseMatch),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function ruleConditionsOptionsNamesToHclTerraform(struct?: RuleConditionsOptionsNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse_match: {
      value: cdktf.booleanToHclTerraform(struct!.inverseMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleConditionsOptionsNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleConditionsOptionsNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverseMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverseMatch = this._inverseMatch;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionsOptionsNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverseMatch = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverseMatch = value.inverseMatch;
      this._pattern = value.pattern;
    }
  }

  // inverse_match - computed: true, optional: true, required: false
  private _inverseMatch?: boolean | cdktf.IResolvable; 
  public get inverseMatch() {
    return this.getBooleanAttribute('inverse_match');
  }
  public set inverseMatch(value: boolean | cdktf.IResolvable) {
    this._inverseMatch = value;
  }
  public resetInverseMatch() {
    this._inverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseMatchInput() {
    return this._inverseMatch;
  }

  // pattern - computed: true, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class RuleConditionsOptionsNamesList extends cdktf.ComplexList {
  public internalValue? : RuleConditionsOptionsNames[] | cdktf.IResolvable

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
  public get(index: number): RuleConditionsOptionsNamesOutputReference {
    return new RuleConditionsOptionsNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionsOptionsRoleNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#inverse_match Rule#inverse_match}
  */
  readonly inverseMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#pattern Rule#pattern}
  */
  readonly pattern: string;
}

export function ruleConditionsOptionsRoleNamesToTerraform(struct?: RuleConditionsOptionsRoleNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inverse_match: cdktf.booleanToTerraform(struct!.inverseMatch),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function ruleConditionsOptionsRoleNamesToHclTerraform(struct?: RuleConditionsOptionsRoleNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inverse_match: {
      value: cdktf.booleanToHclTerraform(struct!.inverseMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleConditionsOptionsRoleNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleConditionsOptionsRoleNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inverseMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverseMatch = this._inverseMatch;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionsOptionsRoleNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inverseMatch = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inverseMatch = value.inverseMatch;
      this._pattern = value.pattern;
    }
  }

  // inverse_match - computed: true, optional: true, required: false
  private _inverseMatch?: boolean | cdktf.IResolvable; 
  public get inverseMatch() {
    return this.getBooleanAttribute('inverse_match');
  }
  public set inverseMatch(value: boolean | cdktf.IResolvable) {
    this._inverseMatch = value;
  }
  public resetInverseMatch() {
    this._inverseMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseMatchInput() {
    return this._inverseMatch;
  }

  // pattern - computed: true, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class RuleConditionsOptionsRoleNamesList extends cdktf.ComplexList {
  public internalValue? : RuleConditionsOptionsRoleNames[] | cdktf.IResolvable

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
  public get(index: number): RuleConditionsOptionsRoleNamesOutputReference {
    return new RuleConditionsOptionsRoleNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditionsOptions {
  /**
  * If enabled, allow to execute scheduled tasks concurrently from multiple SFTPGo instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#concurrent_execution Rule#concurrent_execution}
  */
  readonly concurrentExecution?: boolean | cdktf.IResolvable;
  /**
  * The filesystem event rules will be triggered only for actions with the specified status. Empty means any status. Suported values: 1 (OK), 2 (Failed), 3 (Failed for a quota exceeded error).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#event_statuses Rule#event_statuses}
  */
  readonly eventStatuses?: number[];
  /**
  * Shell-like pattern filters for filesystem events. For example "/adir/*.txt"" will match paths in the "/adir" directory ending with ".txt". Double asterisk is supported, for example "/** /*.txt" will match any file ending with ".txt". "/mydir/**" will match any entry in "/mydir".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#fs_paths Rule#fs_paths}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly fsPaths?: RuleConditionsOptionsFsPaths[] | cdktf.IResolvable;
  /**
  * Shell-like pattern filters for group names. For example "group*"" will match group names starting with "group".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#group_names Rule#group_names}
  */
  readonly groupNames?: RuleConditionsOptionsGroupNames[] | cdktf.IResolvable;
  /**
  * Maximum file size as bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#max_size Rule#max_size}
  */
  readonly maxSize?: number;
  /**
  * Minimum file size as bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#min_size Rule#min_size}
  */
  readonly minSize?: number;
  /**
  * Shell-like pattern filters for usernames, folder names. For example "user*"" will match names starting with "user". For provider events, this filter is applied to the username of the admin executing the event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#names Rule#names}
  */
  readonly names?: RuleConditionsOptionsNames[] | cdktf.IResolvable;
  /**
  * The filesystem event rule will be triggered only for the specified protocols. Empty means any protocol. Supported values: "SFTP", "SCP", "SSH", "FTP", "DAV", "HTTP", "HTTPShare","OIDC"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#protocols Rule#protocols}
  */
  readonly protocols?: string[];
  /**
  * The provider event rule will be triggered only for the specified provider objects. Empty means any provider object. Supported values: "user", "folder", "group", "admin", "api_key", "share", "event_rule", "event_action".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#provider_objects Rule#provider_objects}
  */
  readonly providerObjects?: string[];
  /**
  * Shell-like pattern filters for role names. For example "role*"" will match role names starting with "role".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#role_names Rule#role_names}
  */
  readonly roleNames?: RuleConditionsOptionsRoleNames[] | cdktf.IResolvable;
}

export function ruleConditionsOptionsToTerraform(struct?: RuleConditionsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrent_execution: cdktf.booleanToTerraform(struct!.concurrentExecution),
    event_statuses: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.eventStatuses),
    fs_paths: cdktf.listMapper(ruleConditionsOptionsFsPathsToTerraform, false)(struct!.fsPaths),
    group_names: cdktf.listMapper(ruleConditionsOptionsGroupNamesToTerraform, false)(struct!.groupNames),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    names: cdktf.listMapper(ruleConditionsOptionsNamesToTerraform, false)(struct!.names),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
    provider_objects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.providerObjects),
    role_names: cdktf.listMapper(ruleConditionsOptionsRoleNamesToTerraform, false)(struct!.roleNames),
  }
}


export function ruleConditionsOptionsToHclTerraform(struct?: RuleConditionsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrent_execution: {
      value: cdktf.booleanToHclTerraform(struct!.concurrentExecution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    event_statuses: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.eventStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    fs_paths: {
      value: cdktf.listMapperHcl(ruleConditionsOptionsFsPathsToHclTerraform, false)(struct!.fsPaths),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionsOptionsFsPathsList",
    },
    group_names: {
      value: cdktf.listMapperHcl(ruleConditionsOptionsGroupNamesToHclTerraform, false)(struct!.groupNames),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionsOptionsGroupNamesList",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    names: {
      value: cdktf.listMapperHcl(ruleConditionsOptionsNamesToHclTerraform, false)(struct!.names),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionsOptionsNamesList",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    provider_objects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.providerObjects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    role_names: {
      value: cdktf.listMapperHcl(ruleConditionsOptionsRoleNamesToHclTerraform, false)(struct!.roleNames),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionsOptionsRoleNamesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleConditionsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleConditionsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrentExecution !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentExecution = this._concurrentExecution;
    }
    if (this._eventStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventStatuses = this._eventStatuses;
    }
    if (this._fsPaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsPaths = this._fsPaths?.internalValue;
    }
    if (this._groupNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNames = this._groupNames?.internalValue;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._names?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names?.internalValue;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._providerObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerObjects = this._providerObjects;
    }
    if (this._roleNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleNames = this._roleNames?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrentExecution = undefined;
      this._eventStatuses = undefined;
      this._fsPaths.internalValue = undefined;
      this._groupNames.internalValue = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._names.internalValue = undefined;
      this._protocols = undefined;
      this._providerObjects = undefined;
      this._roleNames.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrentExecution = value.concurrentExecution;
      this._eventStatuses = value.eventStatuses;
      this._fsPaths.internalValue = value.fsPaths;
      this._groupNames.internalValue = value.groupNames;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._names.internalValue = value.names;
      this._protocols = value.protocols;
      this._providerObjects = value.providerObjects;
      this._roleNames.internalValue = value.roleNames;
    }
  }

  // concurrent_execution - computed: true, optional: true, required: false
  private _concurrentExecution?: boolean | cdktf.IResolvable; 
  public get concurrentExecution() {
    return this.getBooleanAttribute('concurrent_execution');
  }
  public set concurrentExecution(value: boolean | cdktf.IResolvable) {
    this._concurrentExecution = value;
  }
  public resetConcurrentExecution() {
    this._concurrentExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentExecutionInput() {
    return this._concurrentExecution;
  }

  // event_statuses - computed: true, optional: true, required: false
  private _eventStatuses?: number[]; 
  public get eventStatuses() {
    return this.getNumberListAttribute('event_statuses');
  }
  public set eventStatuses(value: number[]) {
    this._eventStatuses = value;
  }
  public resetEventStatuses() {
    this._eventStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStatusesInput() {
    return this._eventStatuses;
  }

  // fs_paths - computed: true, optional: true, required: false
  private _fsPaths = new RuleConditionsOptionsFsPathsList(this, "fs_paths", false);
  public get fsPaths() {
    return this._fsPaths;
  }
  public putFsPaths(value: RuleConditionsOptionsFsPaths[] | cdktf.IResolvable) {
    this._fsPaths.internalValue = value;
  }
  public resetFsPaths() {
    this._fsPaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsPathsInput() {
    return this._fsPaths.internalValue;
  }

  // group_names - computed: true, optional: true, required: false
  private _groupNames = new RuleConditionsOptionsGroupNamesList(this, "group_names", false);
  public get groupNames() {
    return this._groupNames;
  }
  public putGroupNames(value: RuleConditionsOptionsGroupNames[] | cdktf.IResolvable) {
    this._groupNames.internalValue = value;
  }
  public resetGroupNames() {
    this._groupNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNamesInput() {
    return this._groupNames.internalValue;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // names - computed: true, optional: true, required: false
  private _names = new RuleConditionsOptionsNamesList(this, "names", false);
  public get names() {
    return this._names;
  }
  public putNames(value: RuleConditionsOptionsNames[] | cdktf.IResolvable) {
    this._names.internalValue = value;
  }
  public resetNames() {
    this._names.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names.internalValue;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // provider_objects - computed: true, optional: true, required: false
  private _providerObjects?: string[]; 
  public get providerObjects() {
    return this.getListAttribute('provider_objects');
  }
  public set providerObjects(value: string[]) {
    this._providerObjects = value;
  }
  public resetProviderObjects() {
    this._providerObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerObjectsInput() {
    return this._providerObjects;
  }

  // role_names - computed: true, optional: true, required: false
  private _roleNames = new RuleConditionsOptionsRoleNamesList(this, "role_names", false);
  public get roleNames() {
    return this._roleNames;
  }
  public putRoleNames(value: RuleConditionsOptionsRoleNames[] | cdktf.IResolvable) {
    this._roleNames.internalValue = value;
  }
  public resetRoleNames() {
    this._roleNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNamesInput() {
    return this._roleNames.internalValue;
  }
}
export interface RuleConditionsSchedules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#day_of_month Rule#day_of_month}
  */
  readonly dayOfMonth: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#day_of_week Rule#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#hour Rule#hour}
  */
  readonly hour: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#month Rule#month}
  */
  readonly month: string;
}

export function ruleConditionsSchedulesToTerraform(struct?: RuleConditionsSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.stringToTerraform(struct!.dayOfMonth),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    hour: cdktf.stringToTerraform(struct!.hour),
    month: cdktf.stringToTerraform(struct!.month),
  }
}


export function ruleConditionsSchedulesToHclTerraform(struct?: RuleConditionsSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.stringToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.stringToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    month: {
      value: cdktf.stringToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleConditionsSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RuleConditionsSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditionsSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._dayOfWeek = undefined;
      this._hour = undefined;
      this._month = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._dayOfWeek = value.dayOfWeek;
      this._hour = value.hour;
      this._month = value.month;
    }
  }

  // day_of_month - computed: true, optional: false, required: true
  private _dayOfMonth?: string; 
  public get dayOfMonth() {
    return this.getStringAttribute('day_of_month');
  }
  public set dayOfMonth(value: string) {
    this._dayOfMonth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // day_of_week - computed: true, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // hour - computed: true, optional: false, required: true
  private _hour?: string; 
  public get hour() {
    return this.getStringAttribute('hour');
  }
  public set hour(value: string) {
    this._hour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // month - computed: true, optional: false, required: true
  private _month?: string; 
  public get month() {
    return this.getStringAttribute('month');
  }
  public set month(value: string) {
    this._month = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }
}

export class RuleConditionsSchedulesList extends cdktf.ComplexList {
  public internalValue? : RuleConditionsSchedules[] | cdktf.IResolvable

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
  public get(index: number): RuleConditionsSchedulesOutputReference {
    return new RuleConditionsSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RuleConditions {
  /**
  * Filesystem events that trigger the rule. Supported values: "upload", "pre-upload", "first-upload", "download", "pre-download", "first-download", "delete", "pre-delete", "rename", "mkdir", "rmdir", "copy", "ssh_cmd"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#fs_events Rule#fs_events}
  */
  readonly fsEvents?: string[];
  /**
  * Identity Provider login event that trigger the rule. 0 any, 1 user, 2 admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#idp_login_event Rule#idp_login_event}
  */
  readonly idpLoginEvent?: number;
  /**
  * Options for event conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#options Rule#options}
  */
  readonly options?: RuleConditionsOptions;
  /**
  * Provider events that trigger the rule. Supported values: "add", "update", "delete".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#provider_events Rule#provider_events}
  */
  readonly providerEvents?: string[];
  /**
  * List of schedules that trigger the rule. Hours: 0-23. Day of week: 0-6 (Sun-Sat). Day of month: 1-31. Month: 1-12. Asterisk (*) indicates a match for all the values of the field. e.g. every day of week, every day of month and so on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#schedules Rule#schedules}
  */
  readonly schedules?: RuleConditionsSchedules[] | cdktf.IResolvable;
}

export function ruleConditionsToTerraform(struct?: RuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fsEvents),
    idp_login_event: cdktf.numberToTerraform(struct!.idpLoginEvent),
    options: ruleConditionsOptionsToTerraform(struct!.options),
    provider_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.providerEvents),
    schedules: cdktf.listMapper(ruleConditionsSchedulesToTerraform, false)(struct!.schedules),
  }
}


export function ruleConditionsToHclTerraform(struct?: RuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fsEvents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    idp_login_event: {
      value: cdktf.numberToHclTerraform(struct!.idpLoginEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    options: {
      value: ruleConditionsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "struct",
      storageClassType: "RuleConditionsOptions",
    },
    provider_events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.providerEvents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schedules: {
      value: cdktf.listMapperHcl(ruleConditionsSchedulesToHclTerraform, false)(struct!.schedules),
      isBlock: true,
      type: "list",
      storageClassType: "RuleConditionsSchedulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RuleConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RuleConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsEvents = this._fsEvents;
    }
    if (this._idpLoginEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpLoginEvent = this._idpLoginEvent;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._providerEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerEvents = this._providerEvents;
    }
    if (this._schedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedules = this._schedules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RuleConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsEvents = undefined;
      this._idpLoginEvent = undefined;
      this._options.internalValue = undefined;
      this._providerEvents = undefined;
      this._schedules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsEvents = value.fsEvents;
      this._idpLoginEvent = value.idpLoginEvent;
      this._options.internalValue = value.options;
      this._providerEvents = value.providerEvents;
      this._schedules.internalValue = value.schedules;
    }
  }

  // fs_events - computed: true, optional: true, required: false
  private _fsEvents?: string[]; 
  public get fsEvents() {
    return this.getListAttribute('fs_events');
  }
  public set fsEvents(value: string[]) {
    this._fsEvents = value;
  }
  public resetFsEvents() {
    this._fsEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsEventsInput() {
    return this._fsEvents;
  }

  // idp_login_event - computed: true, optional: true, required: false
  private _idpLoginEvent?: number; 
  public get idpLoginEvent() {
    return this.getNumberAttribute('idp_login_event');
  }
  public set idpLoginEvent(value: number) {
    this._idpLoginEvent = value;
  }
  public resetIdpLoginEvent() {
    this._idpLoginEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpLoginEventInput() {
    return this._idpLoginEvent;
  }

  // options - computed: true, optional: true, required: false
  private _options = new RuleConditionsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: RuleConditionsOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // provider_events - computed: true, optional: true, required: false
  private _providerEvents?: string[]; 
  public get providerEvents() {
    return this.getListAttribute('provider_events');
  }
  public set providerEvents(value: string[]) {
    this._providerEvents = value;
  }
  public resetProviderEvents() {
    this._providerEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerEventsInput() {
    return this._providerEvents;
  }

  // schedules - computed: true, optional: true, required: false
  private _schedules = new RuleConditionsSchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: RuleConditionsSchedules[] | cdktf.IResolvable) {
    this._schedules.internalValue = value;
  }
  public resetSchedules() {
    this._schedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule sftpgo_rule}
*/
export class Rule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sftpgo_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rule to import
  * @param importFromId The id of the existing Rule that should be imported. Refer to the {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sftpgo_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/drakkan/sftpgo/0.0.18/docs/resources/rule sftpgo_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuleConfig
  */
  public constructor(scope: Construct, id: string, config: RuleConfig) {
    super(scope, id, {
      terraformResourceType: 'sftpgo_rule',
      terraformGeneratorMetadata: {
        providerName: 'sftpgo',
        providerVersion: '0.0.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions.internalValue = config.actions;
    this._conditions.internalValue = config.conditions;
    this._description = config.description;
    this._name = config.name;
    this._status = config.status;
    this._trigger = config.trigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: false, required: true
  private _actions = new RuleActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: RuleActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // conditions - computed: true, optional: true, required: false
  private _conditions = new RuleConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: RuleConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
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

  // status - computed: false, optional: false, required: true
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger?: number; 
  public get trigger() {
    return this.getNumberAttribute('trigger');
  }
  public set trigger(value: number) {
    this._trigger = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.listMapper(ruleActionsToTerraform, false)(this._actions.internalValue),
      conditions: ruleConditionsToTerraform(this._conditions.internalValue),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.numberToTerraform(this._status),
      trigger: cdktf.numberToTerraform(this._trigger),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.listMapperHcl(ruleActionsToHclTerraform, false)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RuleActionsList",
      },
      conditions: {
        value: ruleConditionsToHclTerraform(this._conditions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RuleConditions",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trigger: {
        value: cdktf.numberToHclTerraform(this._trigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
