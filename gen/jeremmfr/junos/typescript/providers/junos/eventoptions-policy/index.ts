// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventoptionsPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of events that trigger this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#events EventoptionsPolicy#events}
  */
  readonly events: string[];
  /**
  * Name of policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#name EventoptionsPolicy#name}
  */
  readonly name: string;
  /**
  * attributes_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#attributes_match EventoptionsPolicy#attributes_match}
  */
  readonly attributesMatch?: EventoptionsPolicyAttributesMatch[] | cdktf.IResolvable;
  /**
  * then block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#then EventoptionsPolicy#then}
  */
  readonly then?: EventoptionsPolicyThen;
  /**
  * within block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#within EventoptionsPolicy#within}
  */
  readonly within?: EventoptionsPolicyWithin[] | cdktf.IResolvable;
}
export interface EventoptionsPolicyAttributesMatch {
  /**
  * Type to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#compare EventoptionsPolicy#compare}
  */
  readonly compare: string;
  /**
  * First attribute to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#from EventoptionsPolicy#from}
  */
  readonly from: string;
  /**
  * Second attribute or value to compare.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#to EventoptionsPolicy#to}
  */
  readonly to: string;
}

export function eventoptionsPolicyAttributesMatchToTerraform(struct?: EventoptionsPolicyAttributesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compare: cdktf.stringToTerraform(struct!.compare),
    from: cdktf.stringToTerraform(struct!.from),
    to: cdktf.stringToTerraform(struct!.to),
  }
}


export function eventoptionsPolicyAttributesMatchToHclTerraform(struct?: EventoptionsPolicyAttributesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compare: {
      value: cdktf.stringToHclTerraform(struct!.compare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventoptionsPolicyAttributesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventoptionsPolicyAttributesMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compare !== undefined) {
      hasAnyValues = true;
      internalValueResult.compare = this._compare;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventoptionsPolicyAttributesMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compare = undefined;
      this._from = undefined;
      this._to = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compare = value.compare;
      this._from = value.from;
      this._to = value.to;
    }
  }

  // compare - computed: false, optional: false, required: true
  private _compare?: string; 
  public get compare() {
    return this.getStringAttribute('compare');
  }
  public set compare(value: string) {
    this._compare = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compareInput() {
    return this._compare;
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }
}

export class EventoptionsPolicyAttributesMatchList extends cdktf.ComplexList {
  public internalValue? : EventoptionsPolicyAttributesMatch[] | cdktf.IResolvable

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
  public get(index: number): EventoptionsPolicyAttributesMatchOutputReference {
    return new EventoptionsPolicyAttributesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventoptionsPolicyThenChangeConfiguration {
  /**
  * List of configuration commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#commands EventoptionsPolicy#commands}
  */
  readonly commands?: string[];
  /**
  * Check correctness of syntax; do not apply changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#commit_options_check EventoptionsPolicy#commit_options_check}
  */
  readonly commitOptionsCheck?: boolean | cdktf.IResolvable;
  /**
  * Synchronize commit check on both Routing Engines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#commit_options_check_synchronize EventoptionsPolicy#commit_options_check_synchronize}
  */
  readonly commitOptionsCheckSynchronize?: boolean | cdktf.IResolvable;
  /**
  * Force commit on other Routing Engine (ignore warnings).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#commit_options_force EventoptionsPolicy#commit_options_force}
  */
  readonly commitOptionsForce?: boolean | cdktf.IResolvable;
  /**
  * Message to write to commit log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#commit_options_log EventoptionsPolicy#commit_options_log}
  */
  readonly commitOptionsLog?: string;
  /**
  * Synchronize commit on both Routing Engines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#commit_options_synchronize EventoptionsPolicy#commit_options_synchronize}
  */
  readonly commitOptionsSynchronize?: boolean | cdktf.IResolvable;
  /**
  * Change configuration retry attempt count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#retry_count EventoptionsPolicy#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Time interval between each retry (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#retry_interval EventoptionsPolicy#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * User under whose privileges configuration should be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#user_name EventoptionsPolicy#user_name}
  */
  readonly userName?: string;
}

export function eventoptionsPolicyThenChangeConfigurationToTerraform(struct?: EventoptionsPolicyThenChangeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    commit_options_check: cdktf.booleanToTerraform(struct!.commitOptionsCheck),
    commit_options_check_synchronize: cdktf.booleanToTerraform(struct!.commitOptionsCheckSynchronize),
    commit_options_force: cdktf.booleanToTerraform(struct!.commitOptionsForce),
    commit_options_log: cdktf.stringToTerraform(struct!.commitOptionsLog),
    commit_options_synchronize: cdktf.booleanToTerraform(struct!.commitOptionsSynchronize),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
    retry_interval: cdktf.numberToTerraform(struct!.retryInterval),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function eventoptionsPolicyThenChangeConfigurationToHclTerraform(struct?: EventoptionsPolicyThenChangeConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    commit_options_check: {
      value: cdktf.booleanToHclTerraform(struct!.commitOptionsCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    commit_options_check_synchronize: {
      value: cdktf.booleanToHclTerraform(struct!.commitOptionsCheckSynchronize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    commit_options_force: {
      value: cdktf.booleanToHclTerraform(struct!.commitOptionsForce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    commit_options_log: {
      value: cdktf.stringToHclTerraform(struct!.commitOptionsLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit_options_synchronize: {
      value: cdktf.booleanToHclTerraform(struct!.commitOptionsSynchronize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_count: {
      value: cdktf.numberToHclTerraform(struct!.retryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_interval: {
      value: cdktf.numberToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventoptionsPolicyThenChangeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventoptionsPolicyThenChangeConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._commitOptionsCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitOptionsCheck = this._commitOptionsCheck;
    }
    if (this._commitOptionsCheckSynchronize !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitOptionsCheckSynchronize = this._commitOptionsCheckSynchronize;
    }
    if (this._commitOptionsForce !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitOptionsForce = this._commitOptionsForce;
    }
    if (this._commitOptionsLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitOptionsLog = this._commitOptionsLog;
    }
    if (this._commitOptionsSynchronize !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitOptionsSynchronize = this._commitOptionsSynchronize;
    }
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventoptionsPolicyThenChangeConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commands = undefined;
      this._commitOptionsCheck = undefined;
      this._commitOptionsCheckSynchronize = undefined;
      this._commitOptionsForce = undefined;
      this._commitOptionsLog = undefined;
      this._commitOptionsSynchronize = undefined;
      this._retryCount = undefined;
      this._retryInterval = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commands = value.commands;
      this._commitOptionsCheck = value.commitOptionsCheck;
      this._commitOptionsCheckSynchronize = value.commitOptionsCheckSynchronize;
      this._commitOptionsForce = value.commitOptionsForce;
      this._commitOptionsLog = value.commitOptionsLog;
      this._commitOptionsSynchronize = value.commitOptionsSynchronize;
      this._retryCount = value.retryCount;
      this._retryInterval = value.retryInterval;
      this._userName = value.userName;
    }
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // commit_options_check - computed: false, optional: true, required: false
  private _commitOptionsCheck?: boolean | cdktf.IResolvable; 
  public get commitOptionsCheck() {
    return this.getBooleanAttribute('commit_options_check');
  }
  public set commitOptionsCheck(value: boolean | cdktf.IResolvable) {
    this._commitOptionsCheck = value;
  }
  public resetCommitOptionsCheck() {
    this._commitOptionsCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitOptionsCheckInput() {
    return this._commitOptionsCheck;
  }

  // commit_options_check_synchronize - computed: false, optional: true, required: false
  private _commitOptionsCheckSynchronize?: boolean | cdktf.IResolvable; 
  public get commitOptionsCheckSynchronize() {
    return this.getBooleanAttribute('commit_options_check_synchronize');
  }
  public set commitOptionsCheckSynchronize(value: boolean | cdktf.IResolvable) {
    this._commitOptionsCheckSynchronize = value;
  }
  public resetCommitOptionsCheckSynchronize() {
    this._commitOptionsCheckSynchronize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitOptionsCheckSynchronizeInput() {
    return this._commitOptionsCheckSynchronize;
  }

  // commit_options_force - computed: false, optional: true, required: false
  private _commitOptionsForce?: boolean | cdktf.IResolvable; 
  public get commitOptionsForce() {
    return this.getBooleanAttribute('commit_options_force');
  }
  public set commitOptionsForce(value: boolean | cdktf.IResolvable) {
    this._commitOptionsForce = value;
  }
  public resetCommitOptionsForce() {
    this._commitOptionsForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitOptionsForceInput() {
    return this._commitOptionsForce;
  }

  // commit_options_log - computed: false, optional: true, required: false
  private _commitOptionsLog?: string; 
  public get commitOptionsLog() {
    return this.getStringAttribute('commit_options_log');
  }
  public set commitOptionsLog(value: string) {
    this._commitOptionsLog = value;
  }
  public resetCommitOptionsLog() {
    this._commitOptionsLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitOptionsLogInput() {
    return this._commitOptionsLog;
  }

  // commit_options_synchronize - computed: false, optional: true, required: false
  private _commitOptionsSynchronize?: boolean | cdktf.IResolvable; 
  public get commitOptionsSynchronize() {
    return this.getBooleanAttribute('commit_options_synchronize');
  }
  public set commitOptionsSynchronize(value: boolean | cdktf.IResolvable) {
    this._commitOptionsSynchronize = value;
  }
  public resetCommitOptionsSynchronize() {
    this._commitOptionsSynchronize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitOptionsSynchronizeInput() {
    return this._commitOptionsSynchronize;
  }

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface EventoptionsPolicyThenEventScriptArguments {
  /**
  * Name of the argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#name EventoptionsPolicy#name}
  */
  readonly name: string;
  /**
  * Value of the argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#value EventoptionsPolicy#value}
  */
  readonly value: string;
}

export function eventoptionsPolicyThenEventScriptArgumentsToTerraform(struct?: EventoptionsPolicyThenEventScriptArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function eventoptionsPolicyThenEventScriptArgumentsToHclTerraform(struct?: EventoptionsPolicyThenEventScriptArguments | cdktf.IResolvable): any {
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

export class EventoptionsPolicyThenEventScriptArgumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventoptionsPolicyThenEventScriptArguments | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventoptionsPolicyThenEventScriptArguments | cdktf.IResolvable | undefined) {
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

export class EventoptionsPolicyThenEventScriptArgumentsList extends cdktf.ComplexList {
  public internalValue? : EventoptionsPolicyThenEventScriptArguments[] | cdktf.IResolvable

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
  public get(index: number): EventoptionsPolicyThenEventScriptArgumentsOutputReference {
    return new EventoptionsPolicyThenEventScriptArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventoptionsPolicyThenEventScriptDestination {
  /**
  * Destination name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#name EventoptionsPolicy#name}
  */
  readonly name?: string;
  /**
  * Upload output-filename retry attempt count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#retry_count EventoptionsPolicy#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Time interval between each retry (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#retry_interval EventoptionsPolicy#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * Delay before uploading files (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#transfer_delay EventoptionsPolicy#transfer_delay}
  */
  readonly transferDelay?: number;
}

export function eventoptionsPolicyThenEventScriptDestinationToTerraform(struct?: EventoptionsPolicyThenEventScriptDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
    retry_interval: cdktf.numberToTerraform(struct!.retryInterval),
    transfer_delay: cdktf.numberToTerraform(struct!.transferDelay),
  }
}


export function eventoptionsPolicyThenEventScriptDestinationToHclTerraform(struct?: EventoptionsPolicyThenEventScriptDestination | cdktf.IResolvable): any {
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
    retry_count: {
      value: cdktf.numberToHclTerraform(struct!.retryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_interval: {
      value: cdktf.numberToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transfer_delay: {
      value: cdktf.numberToHclTerraform(struct!.transferDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventoptionsPolicyThenEventScriptDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventoptionsPolicyThenEventScriptDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._transferDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferDelay = this._transferDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventoptionsPolicyThenEventScriptDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._retryCount = undefined;
      this._retryInterval = undefined;
      this._transferDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._retryCount = value.retryCount;
      this._retryInterval = value.retryInterval;
      this._transferDelay = value.transferDelay;
    }
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

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // transfer_delay - computed: false, optional: true, required: false
  private _transferDelay?: number; 
  public get transferDelay() {
    return this.getNumberAttribute('transfer_delay');
  }
  public set transferDelay(value: number) {
    this._transferDelay = value;
  }
  public resetTransferDelay() {
    this._transferDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferDelayInput() {
    return this._transferDelay;
  }
}
export interface EventoptionsPolicyThenEventScript {
  /**
  * Local filename of the script file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#filename EventoptionsPolicy#filename}
  */
  readonly filename: string;
  /**
  * Name of file in which to write event script output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#output_filename EventoptionsPolicy#output_filename}
  */
  readonly outputFilename?: string;
  /**
  * Format of output from event-script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#output_format EventoptionsPolicy#output_format}
  */
  readonly outputFormat?: string;
  /**
  * User under whose privileges event script will execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#user_name EventoptionsPolicy#user_name}
  */
  readonly userName?: string;
  /**
  * arguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#arguments EventoptionsPolicy#arguments}
  */
  readonly arguments?: EventoptionsPolicyThenEventScriptArguments[] | cdktf.IResolvable;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#destination EventoptionsPolicy#destination}
  */
  readonly destination?: EventoptionsPolicyThenEventScriptDestination;
}

export function eventoptionsPolicyThenEventScriptToTerraform(struct?: EventoptionsPolicyThenEventScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filename: cdktf.stringToTerraform(struct!.filename),
    output_filename: cdktf.stringToTerraform(struct!.outputFilename),
    output_format: cdktf.stringToTerraform(struct!.outputFormat),
    user_name: cdktf.stringToTerraform(struct!.userName),
    arguments: cdktf.listMapper(eventoptionsPolicyThenEventScriptArgumentsToTerraform, true)(struct!.arguments),
    destination: eventoptionsPolicyThenEventScriptDestinationToTerraform(struct!.destination),
  }
}


export function eventoptionsPolicyThenEventScriptToHclTerraform(struct?: EventoptionsPolicyThenEventScript | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_filename: {
      value: cdktf.stringToHclTerraform(struct!.outputFilename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_format: {
      value: cdktf.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arguments: {
      value: cdktf.listMapperHcl(eventoptionsPolicyThenEventScriptArgumentsToHclTerraform, true)(struct!.arguments),
      isBlock: true,
      type: "list",
      storageClassType: "EventoptionsPolicyThenEventScriptArgumentsList",
    },
    destination: {
      value: eventoptionsPolicyThenEventScriptDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "EventoptionsPolicyThenEventScriptDestination",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventoptionsPolicyThenEventScriptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventoptionsPolicyThenEventScript | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._outputFilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFilename = this._outputFilename;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._arguments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventoptionsPolicyThenEventScript | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filename = undefined;
      this._outputFilename = undefined;
      this._outputFormat = undefined;
      this._userName = undefined;
      this._arguments.internalValue = undefined;
      this._destination.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filename = value.filename;
      this._outputFilename = value.outputFilename;
      this._outputFormat = value.outputFormat;
      this._userName = value.userName;
      this._arguments.internalValue = value.arguments;
      this._destination.internalValue = value.destination;
    }
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // output_filename - computed: false, optional: true, required: false
  private _outputFilename?: string; 
  public get outputFilename() {
    return this.getStringAttribute('output_filename');
  }
  public set outputFilename(value: string) {
    this._outputFilename = value;
  }
  public resetOutputFilename() {
    this._outputFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFilenameInput() {
    return this._outputFilename;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments = new EventoptionsPolicyThenEventScriptArgumentsList(this, "arguments", false);
  public get arguments() {
    return this._arguments;
  }
  public putArguments(value: EventoptionsPolicyThenEventScriptArguments[] | cdktf.IResolvable) {
    this._arguments.internalValue = value;
  }
  public resetArguments() {
    this._arguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new EventoptionsPolicyThenEventScriptDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: EventoptionsPolicyThenEventScriptDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }
}

export class EventoptionsPolicyThenEventScriptList extends cdktf.ComplexList {
  public internalValue? : EventoptionsPolicyThenEventScript[] | cdktf.IResolvable

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
  public get(index: number): EventoptionsPolicyThenEventScriptOutputReference {
    return new EventoptionsPolicyThenEventScriptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventoptionsPolicyThenExecuteCommandsDestination {
  /**
  * Destination name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#name EventoptionsPolicy#name}
  */
  readonly name?: string;
  /**
  * Upload output-filename retry attempt count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#retry_count EventoptionsPolicy#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Time interval between each retry (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#retry_interval EventoptionsPolicy#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * Delay before uploading file to the destination (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#transfer_delay EventoptionsPolicy#transfer_delay}
  */
  readonly transferDelay?: number;
}

export function eventoptionsPolicyThenExecuteCommandsDestinationToTerraform(struct?: EventoptionsPolicyThenExecuteCommandsDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
    retry_interval: cdktf.numberToTerraform(struct!.retryInterval),
    transfer_delay: cdktf.numberToTerraform(struct!.transferDelay),
  }
}


export function eventoptionsPolicyThenExecuteCommandsDestinationToHclTerraform(struct?: EventoptionsPolicyThenExecuteCommandsDestination | cdktf.IResolvable): any {
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
    retry_count: {
      value: cdktf.numberToHclTerraform(struct!.retryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_interval: {
      value: cdktf.numberToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transfer_delay: {
      value: cdktf.numberToHclTerraform(struct!.transferDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventoptionsPolicyThenExecuteCommandsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventoptionsPolicyThenExecuteCommandsDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._transferDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferDelay = this._transferDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventoptionsPolicyThenExecuteCommandsDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._retryCount = undefined;
      this._retryInterval = undefined;
      this._transferDelay = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._retryCount = value.retryCount;
      this._retryInterval = value.retryInterval;
      this._transferDelay = value.transferDelay;
    }
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

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // transfer_delay - computed: false, optional: true, required: false
  private _transferDelay?: number; 
  public get transferDelay() {
    return this.getNumberAttribute('transfer_delay');
  }
  public set transferDelay(value: number) {
    this._transferDelay = value;
  }
  public resetTransferDelay() {
    this._transferDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferDelayInput() {
    return this._transferDelay;
  }
}
export interface EventoptionsPolicyThenExecuteCommands {
  /**
  * List of CLI commands to issue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#commands EventoptionsPolicy#commands}
  */
  readonly commands?: string[];
  /**
  * Name of file in which to write command output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#output_filename EventoptionsPolicy#output_filename}
  */
  readonly outputFilename?: string;
  /**
  * Format of output from CLI commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#output_format EventoptionsPolicy#output_format}
  */
  readonly outputFormat?: string;
  /**
  * User under whose privileges command will execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#user_name EventoptionsPolicy#user_name}
  */
  readonly userName?: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#destination EventoptionsPolicy#destination}
  */
  readonly destination?: EventoptionsPolicyThenExecuteCommandsDestination;
}

export function eventoptionsPolicyThenExecuteCommandsToTerraform(struct?: EventoptionsPolicyThenExecuteCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    output_filename: cdktf.stringToTerraform(struct!.outputFilename),
    output_format: cdktf.stringToTerraform(struct!.outputFormat),
    user_name: cdktf.stringToTerraform(struct!.userName),
    destination: eventoptionsPolicyThenExecuteCommandsDestinationToTerraform(struct!.destination),
  }
}


export function eventoptionsPolicyThenExecuteCommandsToHclTerraform(struct?: EventoptionsPolicyThenExecuteCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    output_filename: {
      value: cdktf.stringToHclTerraform(struct!.outputFilename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_format: {
      value: cdktf.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: eventoptionsPolicyThenExecuteCommandsDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "EventoptionsPolicyThenExecuteCommandsDestination",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventoptionsPolicyThenExecuteCommandsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventoptionsPolicyThenExecuteCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._outputFilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFilename = this._outputFilename;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventoptionsPolicyThenExecuteCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commands = undefined;
      this._outputFilename = undefined;
      this._outputFormat = undefined;
      this._userName = undefined;
      this._destination.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commands = value.commands;
      this._outputFilename = value.outputFilename;
      this._outputFormat = value.outputFormat;
      this._userName = value.userName;
      this._destination.internalValue = value.destination;
    }
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // output_filename - computed: false, optional: true, required: false
  private _outputFilename?: string; 
  public get outputFilename() {
    return this.getStringAttribute('output_filename');
  }
  public set outputFilename(value: string) {
    this._outputFilename = value;
  }
  public resetOutputFilename() {
    this._outputFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFilenameInput() {
    return this._outputFilename;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new EventoptionsPolicyThenExecuteCommandsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: EventoptionsPolicyThenExecuteCommandsDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }
}
export interface EventoptionsPolicyThenUpload {
  /**
  * Location to which to output file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#destination EventoptionsPolicy#destination}
  */
  readonly destination: string;
  /**
  * Name of file to upload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#filename EventoptionsPolicy#filename}
  */
  readonly filename: string;
  /**
  * Upload output-filename retry attempt count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#retry_count EventoptionsPolicy#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Time interval between each retry (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#retry_interval EventoptionsPolicy#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * Delay before uploading file to the destination (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#transfer_delay EventoptionsPolicy#transfer_delay}
  */
  readonly transferDelay?: number;
  /**
  * User under whose privileges upload action will execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#user_name EventoptionsPolicy#user_name}
  */
  readonly userName?: string;
}

export function eventoptionsPolicyThenUploadToTerraform(struct?: EventoptionsPolicyThenUpload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    filename: cdktf.stringToTerraform(struct!.filename),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
    retry_interval: cdktf.numberToTerraform(struct!.retryInterval),
    transfer_delay: cdktf.numberToTerraform(struct!.transferDelay),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function eventoptionsPolicyThenUploadToHclTerraform(struct?: EventoptionsPolicyThenUpload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_count: {
      value: cdktf.numberToHclTerraform(struct!.retryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_interval: {
      value: cdktf.numberToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transfer_delay: {
      value: cdktf.numberToHclTerraform(struct!.transferDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventoptionsPolicyThenUploadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventoptionsPolicyThenUpload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._transferDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferDelay = this._transferDelay;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventoptionsPolicyThenUpload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._filename = undefined;
      this._retryCount = undefined;
      this._retryInterval = undefined;
      this._transferDelay = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._filename = value.filename;
      this._retryCount = value.retryCount;
      this._retryInterval = value.retryInterval;
      this._transferDelay = value.transferDelay;
      this._userName = value.userName;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // transfer_delay - computed: false, optional: true, required: false
  private _transferDelay?: number; 
  public get transferDelay() {
    return this.getNumberAttribute('transfer_delay');
  }
  public set transferDelay(value: number) {
    this._transferDelay = value;
  }
  public resetTransferDelay() {
    this._transferDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferDelayInput() {
    return this._transferDelay;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class EventoptionsPolicyThenUploadList extends cdktf.ComplexList {
  public internalValue? : EventoptionsPolicyThenUpload[] | cdktf.IResolvable

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
  public get(index: number): EventoptionsPolicyThenUploadOutputReference {
    return new EventoptionsPolicyThenUploadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventoptionsPolicyThen {
  /**
  * Do not log event or perform any other action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#ignore EventoptionsPolicy#ignore}
  */
  readonly ignore?: boolean | cdktf.IResolvable;
  /**
  * Change syslog priority facility value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#priority_override_facility EventoptionsPolicy#priority_override_facility}
  */
  readonly priorityOverrideFacility?: string;
  /**
  * Change syslog priority severity value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#priority_override_severity EventoptionsPolicy#priority_override_severity}
  */
  readonly priorityOverrideSeverity?: string;
  /**
  * Raise SNMP trap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#raise_trap EventoptionsPolicy#raise_trap}
  */
  readonly raiseTrap?: boolean | cdktf.IResolvable;
  /**
  * change_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#change_configuration EventoptionsPolicy#change_configuration}
  */
  readonly changeConfiguration?: EventoptionsPolicyThenChangeConfiguration;
  /**
  * event_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#event_script EventoptionsPolicy#event_script}
  */
  readonly eventScript?: EventoptionsPolicyThenEventScript[] | cdktf.IResolvable;
  /**
  * execute_commands block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#execute_commands EventoptionsPolicy#execute_commands}
  */
  readonly executeCommands?: EventoptionsPolicyThenExecuteCommands;
  /**
  * upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#upload EventoptionsPolicy#upload}
  */
  readonly upload?: EventoptionsPolicyThenUpload[] | cdktf.IResolvable;
}

export function eventoptionsPolicyThenToTerraform(struct?: EventoptionsPolicyThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore: cdktf.booleanToTerraform(struct!.ignore),
    priority_override_facility: cdktf.stringToTerraform(struct!.priorityOverrideFacility),
    priority_override_severity: cdktf.stringToTerraform(struct!.priorityOverrideSeverity),
    raise_trap: cdktf.booleanToTerraform(struct!.raiseTrap),
    change_configuration: eventoptionsPolicyThenChangeConfigurationToTerraform(struct!.changeConfiguration),
    event_script: cdktf.listMapper(eventoptionsPolicyThenEventScriptToTerraform, true)(struct!.eventScript),
    execute_commands: eventoptionsPolicyThenExecuteCommandsToTerraform(struct!.executeCommands),
    upload: cdktf.listMapper(eventoptionsPolicyThenUploadToTerraform, true)(struct!.upload),
  }
}


export function eventoptionsPolicyThenToHclTerraform(struct?: EventoptionsPolicyThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore: {
      value: cdktf.booleanToHclTerraform(struct!.ignore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority_override_facility: {
      value: cdktf.stringToHclTerraform(struct!.priorityOverrideFacility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_override_severity: {
      value: cdktf.stringToHclTerraform(struct!.priorityOverrideSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    raise_trap: {
      value: cdktf.booleanToHclTerraform(struct!.raiseTrap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    change_configuration: {
      value: eventoptionsPolicyThenChangeConfigurationToHclTerraform(struct!.changeConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "EventoptionsPolicyThenChangeConfiguration",
    },
    event_script: {
      value: cdktf.listMapperHcl(eventoptionsPolicyThenEventScriptToHclTerraform, true)(struct!.eventScript),
      isBlock: true,
      type: "list",
      storageClassType: "EventoptionsPolicyThenEventScriptList",
    },
    execute_commands: {
      value: eventoptionsPolicyThenExecuteCommandsToHclTerraform(struct!.executeCommands),
      isBlock: true,
      type: "struct",
      storageClassType: "EventoptionsPolicyThenExecuteCommands",
    },
    upload: {
      value: cdktf.listMapperHcl(eventoptionsPolicyThenUploadToHclTerraform, true)(struct!.upload),
      isBlock: true,
      type: "list",
      storageClassType: "EventoptionsPolicyThenUploadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventoptionsPolicyThenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventoptionsPolicyThen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignore !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore;
    }
    if (this._priorityOverrideFacility !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityOverrideFacility = this._priorityOverrideFacility;
    }
    if (this._priorityOverrideSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityOverrideSeverity = this._priorityOverrideSeverity;
    }
    if (this._raiseTrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.raiseTrap = this._raiseTrap;
    }
    if (this._changeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeConfiguration = this._changeConfiguration?.internalValue;
    }
    if (this._eventScript?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventScript = this._eventScript?.internalValue;
    }
    if (this._executeCommands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeCommands = this._executeCommands?.internalValue;
    }
    if (this._upload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upload = this._upload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventoptionsPolicyThen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignore = undefined;
      this._priorityOverrideFacility = undefined;
      this._priorityOverrideSeverity = undefined;
      this._raiseTrap = undefined;
      this._changeConfiguration.internalValue = undefined;
      this._eventScript.internalValue = undefined;
      this._executeCommands.internalValue = undefined;
      this._upload.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignore = value.ignore;
      this._priorityOverrideFacility = value.priorityOverrideFacility;
      this._priorityOverrideSeverity = value.priorityOverrideSeverity;
      this._raiseTrap = value.raiseTrap;
      this._changeConfiguration.internalValue = value.changeConfiguration;
      this._eventScript.internalValue = value.eventScript;
      this._executeCommands.internalValue = value.executeCommands;
      this._upload.internalValue = value.upload;
    }
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore?: boolean | cdktf.IResolvable; 
  public get ignore() {
    return this.getBooleanAttribute('ignore');
  }
  public set ignore(value: boolean | cdktf.IResolvable) {
    this._ignore = value;
  }
  public resetIgnore() {
    this._ignore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore;
  }

  // priority_override_facility - computed: false, optional: true, required: false
  private _priorityOverrideFacility?: string; 
  public get priorityOverrideFacility() {
    return this.getStringAttribute('priority_override_facility');
  }
  public set priorityOverrideFacility(value: string) {
    this._priorityOverrideFacility = value;
  }
  public resetPriorityOverrideFacility() {
    this._priorityOverrideFacility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityOverrideFacilityInput() {
    return this._priorityOverrideFacility;
  }

  // priority_override_severity - computed: false, optional: true, required: false
  private _priorityOverrideSeverity?: string; 
  public get priorityOverrideSeverity() {
    return this.getStringAttribute('priority_override_severity');
  }
  public set priorityOverrideSeverity(value: string) {
    this._priorityOverrideSeverity = value;
  }
  public resetPriorityOverrideSeverity() {
    this._priorityOverrideSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityOverrideSeverityInput() {
    return this._priorityOverrideSeverity;
  }

  // raise_trap - computed: false, optional: true, required: false
  private _raiseTrap?: boolean | cdktf.IResolvable; 
  public get raiseTrap() {
    return this.getBooleanAttribute('raise_trap');
  }
  public set raiseTrap(value: boolean | cdktf.IResolvable) {
    this._raiseTrap = value;
  }
  public resetRaiseTrap() {
    this._raiseTrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raiseTrapInput() {
    return this._raiseTrap;
  }

  // change_configuration - computed: false, optional: true, required: false
  private _changeConfiguration = new EventoptionsPolicyThenChangeConfigurationOutputReference(this, "change_configuration");
  public get changeConfiguration() {
    return this._changeConfiguration;
  }
  public putChangeConfiguration(value: EventoptionsPolicyThenChangeConfiguration) {
    this._changeConfiguration.internalValue = value;
  }
  public resetChangeConfiguration() {
    this._changeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeConfigurationInput() {
    return this._changeConfiguration.internalValue;
  }

  // event_script - computed: false, optional: true, required: false
  private _eventScript = new EventoptionsPolicyThenEventScriptList(this, "event_script", false);
  public get eventScript() {
    return this._eventScript;
  }
  public putEventScript(value: EventoptionsPolicyThenEventScript[] | cdktf.IResolvable) {
    this._eventScript.internalValue = value;
  }
  public resetEventScript() {
    this._eventScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventScriptInput() {
    return this._eventScript.internalValue;
  }

  // execute_commands - computed: false, optional: true, required: false
  private _executeCommands = new EventoptionsPolicyThenExecuteCommandsOutputReference(this, "execute_commands");
  public get executeCommands() {
    return this._executeCommands;
  }
  public putExecuteCommands(value: EventoptionsPolicyThenExecuteCommands) {
    this._executeCommands.internalValue = value;
  }
  public resetExecuteCommands() {
    this._executeCommands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeCommandsInput() {
    return this._executeCommands.internalValue;
  }

  // upload - computed: false, optional: true, required: false
  private _upload = new EventoptionsPolicyThenUploadList(this, "upload", false);
  public get upload() {
    return this._upload;
  }
  public putUpload(value: EventoptionsPolicyThenUpload[] | cdktf.IResolvable) {
    this._upload.internalValue = value;
  }
  public resetUpload() {
    this._upload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadInput() {
    return this._upload.internalValue;
  }
}
export interface EventoptionsPolicyWithin {
  /**
  * List of events that must occur within time interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#events EventoptionsPolicy#events}
  */
  readonly events?: string[];
  /**
  * List of events must not occur within time interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#not_events EventoptionsPolicy#not_events}
  */
  readonly notEvents?: string[];
  /**
  * Time within which correlated events must occur (or not) (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#time_interval EventoptionsPolicy#time_interval}
  */
  readonly timeInterval: number;
  /**
  *  Number of occurrences of triggering event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#trigger_count EventoptionsPolicy#trigger_count}
  */
  readonly triggerCount?: number;
  /**
  * To compare with `trigger_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#trigger_when EventoptionsPolicy#trigger_when}
  */
  readonly triggerWhen?: string;
}

export function eventoptionsPolicyWithinToTerraform(struct?: EventoptionsPolicyWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.events),
    not_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notEvents),
    time_interval: cdktf.numberToTerraform(struct!.timeInterval),
    trigger_count: cdktf.numberToTerraform(struct!.triggerCount),
    trigger_when: cdktf.stringToTerraform(struct!.triggerWhen),
  }
}


export function eventoptionsPolicyWithinToHclTerraform(struct?: EventoptionsPolicyWithin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.events),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    not_events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notEvents),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    time_interval: {
      value: cdktf.numberToHclTerraform(struct!.timeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger_count: {
      value: cdktf.numberToHclTerraform(struct!.triggerCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger_when: {
      value: cdktf.stringToHclTerraform(struct!.triggerWhen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventoptionsPolicyWithinOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventoptionsPolicyWithin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._notEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.notEvents = this._notEvents;
    }
    if (this._timeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInterval = this._timeInterval;
    }
    if (this._triggerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerCount = this._triggerCount;
    }
    if (this._triggerWhen !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerWhen = this._triggerWhen;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventoptionsPolicyWithin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._events = undefined;
      this._notEvents = undefined;
      this._timeInterval = undefined;
      this._triggerCount = undefined;
      this._triggerWhen = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._events = value.events;
      this._notEvents = value.notEvents;
      this._timeInterval = value.timeInterval;
      this._triggerCount = value.triggerCount;
      this._triggerWhen = value.triggerWhen;
    }
  }

  // events - computed: false, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // not_events - computed: false, optional: true, required: false
  private _notEvents?: string[]; 
  public get notEvents() {
    return cdktf.Fn.tolist(this.getListAttribute('not_events'));
  }
  public set notEvents(value: string[]) {
    this._notEvents = value;
  }
  public resetNotEvents() {
    this._notEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notEventsInput() {
    return this._notEvents;
  }

  // time_interval - computed: false, optional: false, required: true
  private _timeInterval?: number; 
  public get timeInterval() {
    return this.getNumberAttribute('time_interval');
  }
  public set timeInterval(value: number) {
    this._timeInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval;
  }

  // trigger_count - computed: false, optional: true, required: false
  private _triggerCount?: number; 
  public get triggerCount() {
    return this.getNumberAttribute('trigger_count');
  }
  public set triggerCount(value: number) {
    this._triggerCount = value;
  }
  public resetTriggerCount() {
    this._triggerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerCountInput() {
    return this._triggerCount;
  }

  // trigger_when - computed: false, optional: true, required: false
  private _triggerWhen?: string; 
  public get triggerWhen() {
    return this.getStringAttribute('trigger_when');
  }
  public set triggerWhen(value: string) {
    this._triggerWhen = value;
  }
  public resetTriggerWhen() {
    this._triggerWhen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerWhenInput() {
    return this._triggerWhen;
  }
}

export class EventoptionsPolicyWithinList extends cdktf.ComplexList {
  public internalValue? : EventoptionsPolicyWithin[] | cdktf.IResolvable

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
  public get(index: number): EventoptionsPolicyWithinOutputReference {
    return new EventoptionsPolicyWithinOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy junos_eventoptions_policy}
*/
export class EventoptionsPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_eventoptions_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventoptionsPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventoptionsPolicy to import
  * @param importFromId The id of the existing EventoptionsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventoptionsPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_eventoptions_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/eventoptions_policy junos_eventoptions_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventoptionsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: EventoptionsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_eventoptions_policy',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._events = config.events;
    this._name = config.name;
    this._attributesMatch.internalValue = config.attributesMatch;
    this._then.internalValue = config.then;
    this._within.internalValue = config.within;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // events - computed: false, optional: false, required: true
  private _events?: string[]; 
  public get events() {
    return cdktf.Fn.tolist(this.getListAttribute('events'));
  }
  public set events(value: string[]) {
    this._events = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
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

  // attributes_match - computed: false, optional: true, required: false
  private _attributesMatch = new EventoptionsPolicyAttributesMatchList(this, "attributes_match", false);
  public get attributesMatch() {
    return this._attributesMatch;
  }
  public putAttributesMatch(value: EventoptionsPolicyAttributesMatch[] | cdktf.IResolvable) {
    this._attributesMatch.internalValue = value;
  }
  public resetAttributesMatch() {
    this._attributesMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesMatchInput() {
    return this._attributesMatch.internalValue;
  }

  // then - computed: false, optional: true, required: false
  private _then = new EventoptionsPolicyThenOutputReference(this, "then");
  public get then() {
    return this._then;
  }
  public putThen(value: EventoptionsPolicyThen) {
    this._then.internalValue = value;
  }
  public resetThen() {
    this._then.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenInput() {
    return this._then.internalValue;
  }

  // within - computed: false, optional: true, required: false
  private _within = new EventoptionsPolicyWithinList(this, "within", false);
  public get within() {
    return this._within;
  }
  public putWithin(value: EventoptionsPolicyWithin[] | cdktf.IResolvable) {
    this._within.internalValue = value;
  }
  public resetWithin() {
    this._within.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withinInput() {
    return this._within.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      events: cdktf.listMapper(cdktf.stringToTerraform, false)(this._events),
      name: cdktf.stringToTerraform(this._name),
      attributes_match: cdktf.listMapper(eventoptionsPolicyAttributesMatchToTerraform, true)(this._attributesMatch.internalValue),
      then: eventoptionsPolicyThenToTerraform(this._then.internalValue),
      within: cdktf.listMapper(eventoptionsPolicyWithinToTerraform, true)(this._within.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      events: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._events),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes_match: {
        value: cdktf.listMapperHcl(eventoptionsPolicyAttributesMatchToHclTerraform, true)(this._attributesMatch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventoptionsPolicyAttributesMatchList",
      },
      then: {
        value: eventoptionsPolicyThenToHclTerraform(this._then.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EventoptionsPolicyThen",
      },
      within: {
        value: cdktf.listMapperHcl(eventoptionsPolicyWithinToHclTerraform, true)(this._within.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventoptionsPolicyWithinList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
