// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaaAccountingConfig extends cdktf.TerraformMetaArguments {
  /**
  * For exec (shell) commands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#commands AaaAccounting#commands}
  */
  readonly commands?: AaaAccountingCommands[] | cdktf.IResolvable;
  /**
  * For outbound connections. (telnet, rlogin)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#connections AaaAccounting#connections}
  */
  readonly connections?: AaaAccountingConnections[] | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#delete_mode AaaAccounting#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#device AaaAccounting#device}
  */
  readonly device?: string;
  /**
  * Named Accounting list (max 31 characters, longer will be rejected).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#dot1x AaaAccounting#dot1x}
  */
  readonly dot1X?: AaaAccountingDot1X[] | cdktf.IResolvable;
  /**
  * Use Broadcast for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#dot1x_default_start_stop_broadcast AaaAccounting#dot1x_default_start_stop_broadcast}
  */
  readonly dot1XDefaultStartStopBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#dot1x_default_start_stop_group1 AaaAccounting#dot1x_default_start_stop_group1}
  */
  readonly dot1XDefaultStartStopGroup1?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#dot1x_default_start_stop_group2 AaaAccounting#dot1x_default_start_stop_group2}
  */
  readonly dot1XDefaultStartStopGroup2?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#dot1x_default_start_stop_group3 AaaAccounting#dot1x_default_start_stop_group3}
  */
  readonly dot1XDefaultStartStopGroup3?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#dot1x_default_start_stop_group4 AaaAccounting#dot1x_default_start_stop_group4}
  */
  readonly dot1XDefaultStartStopGroup4?: string;
  /**
  * Use Broadcast for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#dot1x_default_start_stop_group_broadcast AaaAccounting#dot1x_default_start_stop_group_broadcast}
  */
  readonly dot1XDefaultStartStopGroupBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Use system logger for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#dot1x_default_start_stop_group_logger AaaAccounting#dot1x_default_start_stop_group_logger}
  */
  readonly dot1XDefaultStartStopGroupLogger?: boolean | cdktf.IResolvable;
  /**
  * For starting an exec (shell).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#execs AaaAccounting#execs}
  */
  readonly execs?: AaaAccountingExecs[] | cdktf.IResolvable;
  /**
  * Named Accounting list (max 31 characters, longer will be rejected).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#identities AaaAccounting#identities}
  */
  readonly identities?: AaaAccountingIdentities[] | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#identity_default_start_stop_group1 AaaAccounting#identity_default_start_stop_group1}
  */
  readonly identityDefaultStartStopGroup1?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#identity_default_start_stop_group2 AaaAccounting#identity_default_start_stop_group2}
  */
  readonly identityDefaultStartStopGroup2?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#identity_default_start_stop_group3 AaaAccounting#identity_default_start_stop_group3}
  */
  readonly identityDefaultStartStopGroup3?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#identity_default_start_stop_group4 AaaAccounting#identity_default_start_stop_group4}
  */
  readonly identityDefaultStartStopGroup4?: string;
  /**
  * For network services. (PPP, SLIP, ARAP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#networks AaaAccounting#networks}
  */
  readonly networks?: AaaAccountingNetworks[] | cdktf.IResolvable;
  /**
  * Guarantee system accounting as first record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#system_guarantee_first AaaAccounting#system_guarantee_first}
  */
  readonly systemGuaranteeFirst?: boolean | cdktf.IResolvable;
  /**
  * Periodic intervals to send accounting update records(in minutes)
  *   - Range: `1`-`71582`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#update_newinfo_periodic AaaAccounting#update_newinfo_periodic}
  */
  readonly updateNewinfoPeriodic?: number;
}
export interface AaaAccountingCommands {
  /**
  * 
  *   - Choices: `start-stop`, `stop-only`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#action_type AaaAccounting#action_type}
  */
  readonly actionType?: string;
  /**
  * Use Broadcast for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#broadcast AaaAccounting#broadcast}
  */
  readonly broadcast?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#group1_group AaaAccounting#group1_group}
  */
  readonly group1Group?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#group2_group AaaAccounting#group2_group}
  */
  readonly group2Group?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#group3_group AaaAccounting#group3_group}
  */
  readonly group3Group?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#group4_group AaaAccounting#group4_group}
  */
  readonly group4Group?: string;
  /**
  * Use Broadcast for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#group_broadcast AaaAccounting#group_broadcast}
  */
  readonly groupBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Use system logger for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#group_logger AaaAccounting#group_logger}
  */
  readonly groupLogger?: boolean | cdktf.IResolvable;
  /**
  * Enable level
  *   - Range: `0`-`15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#level AaaAccounting#level}
  */
  readonly level: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#list_name AaaAccounting#list_name}
  */
  readonly listName: string;
}

export function aaaAccountingCommandsToTerraform(struct?: AaaAccountingCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    broadcast: cdktf.booleanToTerraform(struct!.broadcast),
    group1_group: cdktf.stringToTerraform(struct!.group1Group),
    group2_group: cdktf.stringToTerraform(struct!.group2Group),
    group3_group: cdktf.stringToTerraform(struct!.group3Group),
    group4_group: cdktf.stringToTerraform(struct!.group4Group),
    group_broadcast: cdktf.booleanToTerraform(struct!.groupBroadcast),
    group_logger: cdktf.booleanToTerraform(struct!.groupLogger),
    level: cdktf.numberToTerraform(struct!.level),
    list_name: cdktf.stringToTerraform(struct!.listName),
  }
}


export function aaaAccountingCommandsToHclTerraform(struct?: AaaAccountingCommands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broadcast: {
      value: cdktf.booleanToHclTerraform(struct!.broadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group1_group: {
      value: cdktf.stringToHclTerraform(struct!.group1Group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group2_group: {
      value: cdktf.stringToHclTerraform(struct!.group2Group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group3_group: {
      value: cdktf.stringToHclTerraform(struct!.group3Group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group4_group: {
      value: cdktf.stringToHclTerraform(struct!.group4Group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_broadcast: {
      value: cdktf.booleanToHclTerraform(struct!.groupBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_logger: {
      value: cdktf.booleanToHclTerraform(struct!.groupLogger),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level: {
      value: cdktf.numberToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    list_name: {
      value: cdktf.stringToHclTerraform(struct!.listName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AaaAccountingCommandsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaAccountingCommands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._broadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcast = this._broadcast;
    }
    if (this._group1Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group1Group = this._group1Group;
    }
    if (this._group2Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group2Group = this._group2Group;
    }
    if (this._group3Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group3Group = this._group3Group;
    }
    if (this._group4Group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group4Group = this._group4Group;
    }
    if (this._groupBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBroadcast = this._groupBroadcast;
    }
    if (this._groupLogger !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupLogger = this._groupLogger;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._listName !== undefined) {
      hasAnyValues = true;
      internalValueResult.listName = this._listName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AaaAccountingCommands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionType = undefined;
      this._broadcast = undefined;
      this._group1Group = undefined;
      this._group2Group = undefined;
      this._group3Group = undefined;
      this._group4Group = undefined;
      this._groupBroadcast = undefined;
      this._groupLogger = undefined;
      this._level = undefined;
      this._listName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionType = value.actionType;
      this._broadcast = value.broadcast;
      this._group1Group = value.group1Group;
      this._group2Group = value.group2Group;
      this._group3Group = value.group3Group;
      this._group4Group = value.group4Group;
      this._groupBroadcast = value.groupBroadcast;
      this._groupLogger = value.groupLogger;
      this._level = value.level;
      this._listName = value.listName;
    }
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // broadcast - computed: false, optional: true, required: false
  private _broadcast?: boolean | cdktf.IResolvable; 
  public get broadcast() {
    return this.getBooleanAttribute('broadcast');
  }
  public set broadcast(value: boolean | cdktf.IResolvable) {
    this._broadcast = value;
  }
  public resetBroadcast() {
    this._broadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast;
  }

  // group1_group - computed: false, optional: true, required: false
  private _group1Group?: string; 
  public get group1Group() {
    return this.getStringAttribute('group1_group');
  }
  public set group1Group(value: string) {
    this._group1Group = value;
  }
  public resetGroup1Group() {
    this._group1Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get group1GroupInput() {
    return this._group1Group;
  }

  // group2_group - computed: false, optional: true, required: false
  private _group2Group?: string; 
  public get group2Group() {
    return this.getStringAttribute('group2_group');
  }
  public set group2Group(value: string) {
    this._group2Group = value;
  }
  public resetGroup2Group() {
    this._group2Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get group2GroupInput() {
    return this._group2Group;
  }

  // group3_group - computed: false, optional: true, required: false
  private _group3Group?: string; 
  public get group3Group() {
    return this.getStringAttribute('group3_group');
  }
  public set group3Group(value: string) {
    this._group3Group = value;
  }
  public resetGroup3Group() {
    this._group3Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get group3GroupInput() {
    return this._group3Group;
  }

  // group4_group - computed: false, optional: true, required: false
  private _group4Group?: string; 
  public get group4Group() {
    return this.getStringAttribute('group4_group');
  }
  public set group4Group(value: string) {
    this._group4Group = value;
  }
  public resetGroup4Group() {
    this._group4Group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get group4GroupInput() {
    return this._group4Group;
  }

  // group_broadcast - computed: false, optional: true, required: false
  private _groupBroadcast?: boolean | cdktf.IResolvable; 
  public get groupBroadcast() {
    return this.getBooleanAttribute('group_broadcast');
  }
  public set groupBroadcast(value: boolean | cdktf.IResolvable) {
    this._groupBroadcast = value;
  }
  public resetGroupBroadcast() {
    this._groupBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupBroadcastInput() {
    return this._groupBroadcast;
  }

  // group_logger - computed: false, optional: true, required: false
  private _groupLogger?: boolean | cdktf.IResolvable; 
  public get groupLogger() {
    return this.getBooleanAttribute('group_logger');
  }
  public set groupLogger(value: boolean | cdktf.IResolvable) {
    this._groupLogger = value;
  }
  public resetGroupLogger() {
    this._groupLogger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupLoggerInput() {
    return this._groupLogger;
  }

  // level - computed: false, optional: false, required: true
  private _level?: number; 
  public get level() {
    return this.getNumberAttribute('level');
  }
  public set level(value: number) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // list_name - computed: false, optional: false, required: true
  private _listName?: string; 
  public get listName() {
    return this.getStringAttribute('list_name');
  }
  public set listName(value: string) {
    this._listName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listNameInput() {
    return this._listName;
  }
}

export class AaaAccountingCommandsList extends cdktf.ComplexList {
  public internalValue? : AaaAccountingCommands[] | cdktf.IResolvable

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
  public get(index: number): AaaAccountingCommandsOutputReference {
    return new AaaAccountingCommandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AaaAccountingConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#default AaaAccounting#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#name AaaAccounting#name}
  */
  readonly name: string;
  /**
  * No accounting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#none AaaAccounting#none}
  */
  readonly none?: boolean | cdktf.IResolvable;
  /**
  * Use Broadcast for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_broadcast AaaAccounting#start_stop_broadcast}
  */
  readonly startStopBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group1 AaaAccounting#start_stop_group1}
  */
  readonly startStopGroup1?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group2 AaaAccounting#start_stop_group2}
  */
  readonly startStopGroup2?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group3 AaaAccounting#start_stop_group3}
  */
  readonly startStopGroup3?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group4 AaaAccounting#start_stop_group4}
  */
  readonly startStopGroup4?: string;
  /**
  * Use system logger for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_logger AaaAccounting#start_stop_logger}
  */
  readonly startStopLogger?: boolean | cdktf.IResolvable;
  /**
  * Use Broadcast for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#stop_only_broadcast AaaAccounting#stop_only_broadcast}
  */
  readonly stopOnlyBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#stop_only_group1 AaaAccounting#stop_only_group1}
  */
  readonly stopOnlyGroup1?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#stop_only_group2 AaaAccounting#stop_only_group2}
  */
  readonly stopOnlyGroup2?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#stop_only_group3 AaaAccounting#stop_only_group3}
  */
  readonly stopOnlyGroup3?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#stop_only_group4 AaaAccounting#stop_only_group4}
  */
  readonly stopOnlyGroup4?: string;
  /**
  * Use system logger for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#stop_only_logger AaaAccounting#stop_only_logger}
  */
  readonly stopOnlyLogger?: boolean | cdktf.IResolvable;
  /**
  * Use Broadcast for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#wait_start_broadcast AaaAccounting#wait_start_broadcast}
  */
  readonly waitStartBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#wait_start_group1 AaaAccounting#wait_start_group1}
  */
  readonly waitStartGroup1?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#wait_start_group2 AaaAccounting#wait_start_group2}
  */
  readonly waitStartGroup2?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#wait_start_group3 AaaAccounting#wait_start_group3}
  */
  readonly waitStartGroup3?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#wait_start_group4 AaaAccounting#wait_start_group4}
  */
  readonly waitStartGroup4?: string;
  /**
  * Use system logger for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#wait_start_logger AaaAccounting#wait_start_logger}
  */
  readonly waitStartLogger?: boolean | cdktf.IResolvable;
}

export function aaaAccountingConnectionsToTerraform(struct?: AaaAccountingConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
    name: cdktf.stringToTerraform(struct!.name),
    none: cdktf.booleanToTerraform(struct!.none),
    start_stop_broadcast: cdktf.booleanToTerraform(struct!.startStopBroadcast),
    start_stop_group1: cdktf.stringToTerraform(struct!.startStopGroup1),
    start_stop_group2: cdktf.stringToTerraform(struct!.startStopGroup2),
    start_stop_group3: cdktf.stringToTerraform(struct!.startStopGroup3),
    start_stop_group4: cdktf.stringToTerraform(struct!.startStopGroup4),
    start_stop_logger: cdktf.booleanToTerraform(struct!.startStopLogger),
    stop_only_broadcast: cdktf.booleanToTerraform(struct!.stopOnlyBroadcast),
    stop_only_group1: cdktf.stringToTerraform(struct!.stopOnlyGroup1),
    stop_only_group2: cdktf.stringToTerraform(struct!.stopOnlyGroup2),
    stop_only_group3: cdktf.stringToTerraform(struct!.stopOnlyGroup3),
    stop_only_group4: cdktf.stringToTerraform(struct!.stopOnlyGroup4),
    stop_only_logger: cdktf.booleanToTerraform(struct!.stopOnlyLogger),
    wait_start_broadcast: cdktf.booleanToTerraform(struct!.waitStartBroadcast),
    wait_start_group1: cdktf.stringToTerraform(struct!.waitStartGroup1),
    wait_start_group2: cdktf.stringToTerraform(struct!.waitStartGroup2),
    wait_start_group3: cdktf.stringToTerraform(struct!.waitStartGroup3),
    wait_start_group4: cdktf.stringToTerraform(struct!.waitStartGroup4),
    wait_start_logger: cdktf.booleanToTerraform(struct!.waitStartLogger),
  }
}


export function aaaAccountingConnectionsToHclTerraform(struct?: AaaAccountingConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
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
    none: {
      value: cdktf.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_stop_broadcast: {
      value: cdktf.booleanToHclTerraform(struct!.startStopBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_stop_group1: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_group2: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_group3: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_group4: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_logger: {
      value: cdktf.booleanToHclTerraform(struct!.startStopLogger),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stop_only_broadcast: {
      value: cdktf.booleanToHclTerraform(struct!.stopOnlyBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stop_only_group1: {
      value: cdktf.stringToHclTerraform(struct!.stopOnlyGroup1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_only_group2: {
      value: cdktf.stringToHclTerraform(struct!.stopOnlyGroup2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_only_group3: {
      value: cdktf.stringToHclTerraform(struct!.stopOnlyGroup3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_only_group4: {
      value: cdktf.stringToHclTerraform(struct!.stopOnlyGroup4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_only_logger: {
      value: cdktf.booleanToHclTerraform(struct!.stopOnlyLogger),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_start_broadcast: {
      value: cdktf.booleanToHclTerraform(struct!.waitStartBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_start_group1: {
      value: cdktf.stringToHclTerraform(struct!.waitStartGroup1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_start_group2: {
      value: cdktf.stringToHclTerraform(struct!.waitStartGroup2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_start_group3: {
      value: cdktf.stringToHclTerraform(struct!.waitStartGroup3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_start_group4: {
      value: cdktf.stringToHclTerraform(struct!.waitStartGroup4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_start_logger: {
      value: cdktf.booleanToHclTerraform(struct!.waitStartLogger),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AaaAccountingConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaAccountingConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._startStopBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopBroadcast = this._startStopBroadcast;
    }
    if (this._startStopGroup1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup1 = this._startStopGroup1;
    }
    if (this._startStopGroup2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup2 = this._startStopGroup2;
    }
    if (this._startStopGroup3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup3 = this._startStopGroup3;
    }
    if (this._startStopGroup4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup4 = this._startStopGroup4;
    }
    if (this._startStopLogger !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopLogger = this._startStopLogger;
    }
    if (this._stopOnlyBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnlyBroadcast = this._stopOnlyBroadcast;
    }
    if (this._stopOnlyGroup1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnlyGroup1 = this._stopOnlyGroup1;
    }
    if (this._stopOnlyGroup2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnlyGroup2 = this._stopOnlyGroup2;
    }
    if (this._stopOnlyGroup3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnlyGroup3 = this._stopOnlyGroup3;
    }
    if (this._stopOnlyGroup4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnlyGroup4 = this._stopOnlyGroup4;
    }
    if (this._stopOnlyLogger !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnlyLogger = this._stopOnlyLogger;
    }
    if (this._waitStartBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitStartBroadcast = this._waitStartBroadcast;
    }
    if (this._waitStartGroup1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitStartGroup1 = this._waitStartGroup1;
    }
    if (this._waitStartGroup2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitStartGroup2 = this._waitStartGroup2;
    }
    if (this._waitStartGroup3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitStartGroup3 = this._waitStartGroup3;
    }
    if (this._waitStartGroup4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitStartGroup4 = this._waitStartGroup4;
    }
    if (this._waitStartLogger !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitStartLogger = this._waitStartLogger;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AaaAccountingConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._name = undefined;
      this._none = undefined;
      this._startStopBroadcast = undefined;
      this._startStopGroup1 = undefined;
      this._startStopGroup2 = undefined;
      this._startStopGroup3 = undefined;
      this._startStopGroup4 = undefined;
      this._startStopLogger = undefined;
      this._stopOnlyBroadcast = undefined;
      this._stopOnlyGroup1 = undefined;
      this._stopOnlyGroup2 = undefined;
      this._stopOnlyGroup3 = undefined;
      this._stopOnlyGroup4 = undefined;
      this._stopOnlyLogger = undefined;
      this._waitStartBroadcast = undefined;
      this._waitStartGroup1 = undefined;
      this._waitStartGroup2 = undefined;
      this._waitStartGroup3 = undefined;
      this._waitStartGroup4 = undefined;
      this._waitStartLogger = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._name = value.name;
      this._none = value.none;
      this._startStopBroadcast = value.startStopBroadcast;
      this._startStopGroup1 = value.startStopGroup1;
      this._startStopGroup2 = value.startStopGroup2;
      this._startStopGroup3 = value.startStopGroup3;
      this._startStopGroup4 = value.startStopGroup4;
      this._startStopLogger = value.startStopLogger;
      this._stopOnlyBroadcast = value.stopOnlyBroadcast;
      this._stopOnlyGroup1 = value.stopOnlyGroup1;
      this._stopOnlyGroup2 = value.stopOnlyGroup2;
      this._stopOnlyGroup3 = value.stopOnlyGroup3;
      this._stopOnlyGroup4 = value.stopOnlyGroup4;
      this._stopOnlyLogger = value.stopOnlyLogger;
      this._waitStartBroadcast = value.waitStartBroadcast;
      this._waitStartGroup1 = value.waitStartGroup1;
      this._waitStartGroup2 = value.waitStartGroup2;
      this._waitStartGroup3 = value.waitStartGroup3;
      this._waitStartGroup4 = value.waitStartGroup4;
      this._waitStartLogger = value.waitStartLogger;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // none - computed: false, optional: true, required: false
  private _none?: boolean | cdktf.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktf.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // start_stop_broadcast - computed: false, optional: true, required: false
  private _startStopBroadcast?: boolean | cdktf.IResolvable; 
  public get startStopBroadcast() {
    return this.getBooleanAttribute('start_stop_broadcast');
  }
  public set startStopBroadcast(value: boolean | cdktf.IResolvable) {
    this._startStopBroadcast = value;
  }
  public resetStartStopBroadcast() {
    this._startStopBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopBroadcastInput() {
    return this._startStopBroadcast;
  }

  // start_stop_group1 - computed: false, optional: true, required: false
  private _startStopGroup1?: string; 
  public get startStopGroup1() {
    return this.getStringAttribute('start_stop_group1');
  }
  public set startStopGroup1(value: string) {
    this._startStopGroup1 = value;
  }
  public resetStartStopGroup1() {
    this._startStopGroup1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup1Input() {
    return this._startStopGroup1;
  }

  // start_stop_group2 - computed: false, optional: true, required: false
  private _startStopGroup2?: string; 
  public get startStopGroup2() {
    return this.getStringAttribute('start_stop_group2');
  }
  public set startStopGroup2(value: string) {
    this._startStopGroup2 = value;
  }
  public resetStartStopGroup2() {
    this._startStopGroup2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup2Input() {
    return this._startStopGroup2;
  }

  // start_stop_group3 - computed: false, optional: true, required: false
  private _startStopGroup3?: string; 
  public get startStopGroup3() {
    return this.getStringAttribute('start_stop_group3');
  }
  public set startStopGroup3(value: string) {
    this._startStopGroup3 = value;
  }
  public resetStartStopGroup3() {
    this._startStopGroup3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup3Input() {
    return this._startStopGroup3;
  }

  // start_stop_group4 - computed: false, optional: true, required: false
  private _startStopGroup4?: string; 
  public get startStopGroup4() {
    return this.getStringAttribute('start_stop_group4');
  }
  public set startStopGroup4(value: string) {
    this._startStopGroup4 = value;
  }
  public resetStartStopGroup4() {
    this._startStopGroup4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup4Input() {
    return this._startStopGroup4;
  }

  // start_stop_logger - computed: false, optional: true, required: false
  private _startStopLogger?: boolean | cdktf.IResolvable; 
  public get startStopLogger() {
    return this.getBooleanAttribute('start_stop_logger');
  }
  public set startStopLogger(value: boolean | cdktf.IResolvable) {
    this._startStopLogger = value;
  }
  public resetStartStopLogger() {
    this._startStopLogger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopLoggerInput() {
    return this._startStopLogger;
  }

  // stop_only_broadcast - computed: false, optional: true, required: false
  private _stopOnlyBroadcast?: boolean | cdktf.IResolvable; 
  public get stopOnlyBroadcast() {
    return this.getBooleanAttribute('stop_only_broadcast');
  }
  public set stopOnlyBroadcast(value: boolean | cdktf.IResolvable) {
    this._stopOnlyBroadcast = value;
  }
  public resetStopOnlyBroadcast() {
    this._stopOnlyBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnlyBroadcastInput() {
    return this._stopOnlyBroadcast;
  }

  // stop_only_group1 - computed: false, optional: true, required: false
  private _stopOnlyGroup1?: string; 
  public get stopOnlyGroup1() {
    return this.getStringAttribute('stop_only_group1');
  }
  public set stopOnlyGroup1(value: string) {
    this._stopOnlyGroup1 = value;
  }
  public resetStopOnlyGroup1() {
    this._stopOnlyGroup1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnlyGroup1Input() {
    return this._stopOnlyGroup1;
  }

  // stop_only_group2 - computed: false, optional: true, required: false
  private _stopOnlyGroup2?: string; 
  public get stopOnlyGroup2() {
    return this.getStringAttribute('stop_only_group2');
  }
  public set stopOnlyGroup2(value: string) {
    this._stopOnlyGroup2 = value;
  }
  public resetStopOnlyGroup2() {
    this._stopOnlyGroup2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnlyGroup2Input() {
    return this._stopOnlyGroup2;
  }

  // stop_only_group3 - computed: false, optional: true, required: false
  private _stopOnlyGroup3?: string; 
  public get stopOnlyGroup3() {
    return this.getStringAttribute('stop_only_group3');
  }
  public set stopOnlyGroup3(value: string) {
    this._stopOnlyGroup3 = value;
  }
  public resetStopOnlyGroup3() {
    this._stopOnlyGroup3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnlyGroup3Input() {
    return this._stopOnlyGroup3;
  }

  // stop_only_group4 - computed: false, optional: true, required: false
  private _stopOnlyGroup4?: string; 
  public get stopOnlyGroup4() {
    return this.getStringAttribute('stop_only_group4');
  }
  public set stopOnlyGroup4(value: string) {
    this._stopOnlyGroup4 = value;
  }
  public resetStopOnlyGroup4() {
    this._stopOnlyGroup4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnlyGroup4Input() {
    return this._stopOnlyGroup4;
  }

  // stop_only_logger - computed: false, optional: true, required: false
  private _stopOnlyLogger?: boolean | cdktf.IResolvable; 
  public get stopOnlyLogger() {
    return this.getBooleanAttribute('stop_only_logger');
  }
  public set stopOnlyLogger(value: boolean | cdktf.IResolvable) {
    this._stopOnlyLogger = value;
  }
  public resetStopOnlyLogger() {
    this._stopOnlyLogger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnlyLoggerInput() {
    return this._stopOnlyLogger;
  }

  // wait_start_broadcast - computed: false, optional: true, required: false
  private _waitStartBroadcast?: boolean | cdktf.IResolvable; 
  public get waitStartBroadcast() {
    return this.getBooleanAttribute('wait_start_broadcast');
  }
  public set waitStartBroadcast(value: boolean | cdktf.IResolvable) {
    this._waitStartBroadcast = value;
  }
  public resetWaitStartBroadcast() {
    this._waitStartBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitStartBroadcastInput() {
    return this._waitStartBroadcast;
  }

  // wait_start_group1 - computed: false, optional: true, required: false
  private _waitStartGroup1?: string; 
  public get waitStartGroup1() {
    return this.getStringAttribute('wait_start_group1');
  }
  public set waitStartGroup1(value: string) {
    this._waitStartGroup1 = value;
  }
  public resetWaitStartGroup1() {
    this._waitStartGroup1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitStartGroup1Input() {
    return this._waitStartGroup1;
  }

  // wait_start_group2 - computed: false, optional: true, required: false
  private _waitStartGroup2?: string; 
  public get waitStartGroup2() {
    return this.getStringAttribute('wait_start_group2');
  }
  public set waitStartGroup2(value: string) {
    this._waitStartGroup2 = value;
  }
  public resetWaitStartGroup2() {
    this._waitStartGroup2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitStartGroup2Input() {
    return this._waitStartGroup2;
  }

  // wait_start_group3 - computed: false, optional: true, required: false
  private _waitStartGroup3?: string; 
  public get waitStartGroup3() {
    return this.getStringAttribute('wait_start_group3');
  }
  public set waitStartGroup3(value: string) {
    this._waitStartGroup3 = value;
  }
  public resetWaitStartGroup3() {
    this._waitStartGroup3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitStartGroup3Input() {
    return this._waitStartGroup3;
  }

  // wait_start_group4 - computed: false, optional: true, required: false
  private _waitStartGroup4?: string; 
  public get waitStartGroup4() {
    return this.getStringAttribute('wait_start_group4');
  }
  public set waitStartGroup4(value: string) {
    this._waitStartGroup4 = value;
  }
  public resetWaitStartGroup4() {
    this._waitStartGroup4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitStartGroup4Input() {
    return this._waitStartGroup4;
  }

  // wait_start_logger - computed: false, optional: true, required: false
  private _waitStartLogger?: boolean | cdktf.IResolvable; 
  public get waitStartLogger() {
    return this.getBooleanAttribute('wait_start_logger');
  }
  public set waitStartLogger(value: boolean | cdktf.IResolvable) {
    this._waitStartLogger = value;
  }
  public resetWaitStartLogger() {
    this._waitStartLogger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitStartLoggerInput() {
    return this._waitStartLogger;
  }
}

export class AaaAccountingConnectionsList extends cdktf.ComplexList {
  public internalValue? : AaaAccountingConnections[] | cdktf.IResolvable

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
  public get(index: number): AaaAccountingConnectionsOutputReference {
    return new AaaAccountingConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AaaAccountingDot1X {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#name AaaAccounting#name}
  */
  readonly name: string;
  /**
  * Use Broadcast for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_broadcast AaaAccounting#start_stop_broadcast}
  */
  readonly startStopBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group1 AaaAccounting#start_stop_group1}
  */
  readonly startStopGroup1?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group2 AaaAccounting#start_stop_group2}
  */
  readonly startStopGroup2?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group3 AaaAccounting#start_stop_group3}
  */
  readonly startStopGroup3?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group4 AaaAccounting#start_stop_group4}
  */
  readonly startStopGroup4?: string;
  /**
  * Use Broadcast for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group_broadcast AaaAccounting#start_stop_group_broadcast}
  */
  readonly startStopGroupBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Use system logger for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group_logger AaaAccounting#start_stop_group_logger}
  */
  readonly startStopGroupLogger?: boolean | cdktf.IResolvable;
}

export function aaaAccountingDot1XToTerraform(struct?: AaaAccountingDot1X | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    start_stop_broadcast: cdktf.booleanToTerraform(struct!.startStopBroadcast),
    start_stop_group1: cdktf.stringToTerraform(struct!.startStopGroup1),
    start_stop_group2: cdktf.stringToTerraform(struct!.startStopGroup2),
    start_stop_group3: cdktf.stringToTerraform(struct!.startStopGroup3),
    start_stop_group4: cdktf.stringToTerraform(struct!.startStopGroup4),
    start_stop_group_broadcast: cdktf.booleanToTerraform(struct!.startStopGroupBroadcast),
    start_stop_group_logger: cdktf.booleanToTerraform(struct!.startStopGroupLogger),
  }
}


export function aaaAccountingDot1XToHclTerraform(struct?: AaaAccountingDot1X | cdktf.IResolvable): any {
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
    start_stop_broadcast: {
      value: cdktf.booleanToHclTerraform(struct!.startStopBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_stop_group1: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_group2: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_group3: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_group4: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_group_broadcast: {
      value: cdktf.booleanToHclTerraform(struct!.startStopGroupBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_stop_group_logger: {
      value: cdktf.booleanToHclTerraform(struct!.startStopGroupLogger),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AaaAccountingDot1XOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaAccountingDot1X | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startStopBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopBroadcast = this._startStopBroadcast;
    }
    if (this._startStopGroup1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup1 = this._startStopGroup1;
    }
    if (this._startStopGroup2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup2 = this._startStopGroup2;
    }
    if (this._startStopGroup3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup3 = this._startStopGroup3;
    }
    if (this._startStopGroup4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup4 = this._startStopGroup4;
    }
    if (this._startStopGroupBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroupBroadcast = this._startStopGroupBroadcast;
    }
    if (this._startStopGroupLogger !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroupLogger = this._startStopGroupLogger;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AaaAccountingDot1X | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._startStopBroadcast = undefined;
      this._startStopGroup1 = undefined;
      this._startStopGroup2 = undefined;
      this._startStopGroup3 = undefined;
      this._startStopGroup4 = undefined;
      this._startStopGroupBroadcast = undefined;
      this._startStopGroupLogger = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._startStopBroadcast = value.startStopBroadcast;
      this._startStopGroup1 = value.startStopGroup1;
      this._startStopGroup2 = value.startStopGroup2;
      this._startStopGroup3 = value.startStopGroup3;
      this._startStopGroup4 = value.startStopGroup4;
      this._startStopGroupBroadcast = value.startStopGroupBroadcast;
      this._startStopGroupLogger = value.startStopGroupLogger;
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

  // start_stop_broadcast - computed: false, optional: true, required: false
  private _startStopBroadcast?: boolean | cdktf.IResolvable; 
  public get startStopBroadcast() {
    return this.getBooleanAttribute('start_stop_broadcast');
  }
  public set startStopBroadcast(value: boolean | cdktf.IResolvable) {
    this._startStopBroadcast = value;
  }
  public resetStartStopBroadcast() {
    this._startStopBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopBroadcastInput() {
    return this._startStopBroadcast;
  }

  // start_stop_group1 - computed: false, optional: true, required: false
  private _startStopGroup1?: string; 
  public get startStopGroup1() {
    return this.getStringAttribute('start_stop_group1');
  }
  public set startStopGroup1(value: string) {
    this._startStopGroup1 = value;
  }
  public resetStartStopGroup1() {
    this._startStopGroup1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup1Input() {
    return this._startStopGroup1;
  }

  // start_stop_group2 - computed: false, optional: true, required: false
  private _startStopGroup2?: string; 
  public get startStopGroup2() {
    return this.getStringAttribute('start_stop_group2');
  }
  public set startStopGroup2(value: string) {
    this._startStopGroup2 = value;
  }
  public resetStartStopGroup2() {
    this._startStopGroup2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup2Input() {
    return this._startStopGroup2;
  }

  // start_stop_group3 - computed: false, optional: true, required: false
  private _startStopGroup3?: string; 
  public get startStopGroup3() {
    return this.getStringAttribute('start_stop_group3');
  }
  public set startStopGroup3(value: string) {
    this._startStopGroup3 = value;
  }
  public resetStartStopGroup3() {
    this._startStopGroup3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup3Input() {
    return this._startStopGroup3;
  }

  // start_stop_group4 - computed: false, optional: true, required: false
  private _startStopGroup4?: string; 
  public get startStopGroup4() {
    return this.getStringAttribute('start_stop_group4');
  }
  public set startStopGroup4(value: string) {
    this._startStopGroup4 = value;
  }
  public resetStartStopGroup4() {
    this._startStopGroup4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup4Input() {
    return this._startStopGroup4;
  }

  // start_stop_group_broadcast - computed: false, optional: true, required: false
  private _startStopGroupBroadcast?: boolean | cdktf.IResolvable; 
  public get startStopGroupBroadcast() {
    return this.getBooleanAttribute('start_stop_group_broadcast');
  }
  public set startStopGroupBroadcast(value: boolean | cdktf.IResolvable) {
    this._startStopGroupBroadcast = value;
  }
  public resetStartStopGroupBroadcast() {
    this._startStopGroupBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroupBroadcastInput() {
    return this._startStopGroupBroadcast;
  }

  // start_stop_group_logger - computed: false, optional: true, required: false
  private _startStopGroupLogger?: boolean | cdktf.IResolvable; 
  public get startStopGroupLogger() {
    return this.getBooleanAttribute('start_stop_group_logger');
  }
  public set startStopGroupLogger(value: boolean | cdktf.IResolvable) {
    this._startStopGroupLogger = value;
  }
  public resetStartStopGroupLogger() {
    this._startStopGroupLogger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroupLoggerInput() {
    return this._startStopGroupLogger;
  }
}

export class AaaAccountingDot1XList extends cdktf.ComplexList {
  public internalValue? : AaaAccountingDot1X[] | cdktf.IResolvable

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
  public get(index: number): AaaAccountingDot1XOutputReference {
    return new AaaAccountingDot1XOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AaaAccountingExecs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#name AaaAccounting#name}
  */
  readonly name: string;
  /**
  * No accounting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#none AaaAccounting#none}
  */
  readonly none?: boolean | cdktf.IResolvable;
  /**
  * Use Broadcast for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_broadcast AaaAccounting#start_stop_broadcast}
  */
  readonly startStopBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group1 AaaAccounting#start_stop_group1}
  */
  readonly startStopGroup1?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group2 AaaAccounting#start_stop_group2}
  */
  readonly startStopGroup2?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group3 AaaAccounting#start_stop_group3}
  */
  readonly startStopGroup3?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group4 AaaAccounting#start_stop_group4}
  */
  readonly startStopGroup4?: string;
  /**
  * Use system logger for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_logger AaaAccounting#start_stop_logger}
  */
  readonly startStopLogger?: boolean | cdktf.IResolvable;
  /**
  * Use Broadcast for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#stop_only_broadcast AaaAccounting#stop_only_broadcast}
  */
  readonly stopOnlyBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#stop_only_group1 AaaAccounting#stop_only_group1}
  */
  readonly stopOnlyGroup1?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#stop_only_group2 AaaAccounting#stop_only_group2}
  */
  readonly stopOnlyGroup2?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#stop_only_group3 AaaAccounting#stop_only_group3}
  */
  readonly stopOnlyGroup3?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#stop_only_group4 AaaAccounting#stop_only_group4}
  */
  readonly stopOnlyGroup4?: string;
  /**
  * Use system logger for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#stop_only_logger AaaAccounting#stop_only_logger}
  */
  readonly stopOnlyLogger?: boolean | cdktf.IResolvable;
  /**
  * Use Broadcast for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#wait_start_broadcast AaaAccounting#wait_start_broadcast}
  */
  readonly waitStartBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#wait_start_group1 AaaAccounting#wait_start_group1}
  */
  readonly waitStartGroup1?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#wait_start_group2 AaaAccounting#wait_start_group2}
  */
  readonly waitStartGroup2?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#wait_start_group3 AaaAccounting#wait_start_group3}
  */
  readonly waitStartGroup3?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#wait_start_group4 AaaAccounting#wait_start_group4}
  */
  readonly waitStartGroup4?: string;
  /**
  * Use system logger for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#wait_start_logger AaaAccounting#wait_start_logger}
  */
  readonly waitStartLogger?: boolean | cdktf.IResolvable;
}

export function aaaAccountingExecsToTerraform(struct?: AaaAccountingExecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    none: cdktf.booleanToTerraform(struct!.none),
    start_stop_broadcast: cdktf.booleanToTerraform(struct!.startStopBroadcast),
    start_stop_group1: cdktf.stringToTerraform(struct!.startStopGroup1),
    start_stop_group2: cdktf.stringToTerraform(struct!.startStopGroup2),
    start_stop_group3: cdktf.stringToTerraform(struct!.startStopGroup3),
    start_stop_group4: cdktf.stringToTerraform(struct!.startStopGroup4),
    start_stop_logger: cdktf.booleanToTerraform(struct!.startStopLogger),
    stop_only_broadcast: cdktf.booleanToTerraform(struct!.stopOnlyBroadcast),
    stop_only_group1: cdktf.stringToTerraform(struct!.stopOnlyGroup1),
    stop_only_group2: cdktf.stringToTerraform(struct!.stopOnlyGroup2),
    stop_only_group3: cdktf.stringToTerraform(struct!.stopOnlyGroup3),
    stop_only_group4: cdktf.stringToTerraform(struct!.stopOnlyGroup4),
    stop_only_logger: cdktf.booleanToTerraform(struct!.stopOnlyLogger),
    wait_start_broadcast: cdktf.booleanToTerraform(struct!.waitStartBroadcast),
    wait_start_group1: cdktf.stringToTerraform(struct!.waitStartGroup1),
    wait_start_group2: cdktf.stringToTerraform(struct!.waitStartGroup2),
    wait_start_group3: cdktf.stringToTerraform(struct!.waitStartGroup3),
    wait_start_group4: cdktf.stringToTerraform(struct!.waitStartGroup4),
    wait_start_logger: cdktf.booleanToTerraform(struct!.waitStartLogger),
  }
}


export function aaaAccountingExecsToHclTerraform(struct?: AaaAccountingExecs | cdktf.IResolvable): any {
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
    none: {
      value: cdktf.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_stop_broadcast: {
      value: cdktf.booleanToHclTerraform(struct!.startStopBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_stop_group1: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_group2: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_group3: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_group4: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_logger: {
      value: cdktf.booleanToHclTerraform(struct!.startStopLogger),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stop_only_broadcast: {
      value: cdktf.booleanToHclTerraform(struct!.stopOnlyBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stop_only_group1: {
      value: cdktf.stringToHclTerraform(struct!.stopOnlyGroup1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_only_group2: {
      value: cdktf.stringToHclTerraform(struct!.stopOnlyGroup2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_only_group3: {
      value: cdktf.stringToHclTerraform(struct!.stopOnlyGroup3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_only_group4: {
      value: cdktf.stringToHclTerraform(struct!.stopOnlyGroup4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_only_logger: {
      value: cdktf.booleanToHclTerraform(struct!.stopOnlyLogger),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_start_broadcast: {
      value: cdktf.booleanToHclTerraform(struct!.waitStartBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_start_group1: {
      value: cdktf.stringToHclTerraform(struct!.waitStartGroup1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_start_group2: {
      value: cdktf.stringToHclTerraform(struct!.waitStartGroup2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_start_group3: {
      value: cdktf.stringToHclTerraform(struct!.waitStartGroup3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_start_group4: {
      value: cdktf.stringToHclTerraform(struct!.waitStartGroup4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_start_logger: {
      value: cdktf.booleanToHclTerraform(struct!.waitStartLogger),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AaaAccountingExecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaAccountingExecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._startStopBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopBroadcast = this._startStopBroadcast;
    }
    if (this._startStopGroup1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup1 = this._startStopGroup1;
    }
    if (this._startStopGroup2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup2 = this._startStopGroup2;
    }
    if (this._startStopGroup3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup3 = this._startStopGroup3;
    }
    if (this._startStopGroup4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup4 = this._startStopGroup4;
    }
    if (this._startStopLogger !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopLogger = this._startStopLogger;
    }
    if (this._stopOnlyBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnlyBroadcast = this._stopOnlyBroadcast;
    }
    if (this._stopOnlyGroup1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnlyGroup1 = this._stopOnlyGroup1;
    }
    if (this._stopOnlyGroup2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnlyGroup2 = this._stopOnlyGroup2;
    }
    if (this._stopOnlyGroup3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnlyGroup3 = this._stopOnlyGroup3;
    }
    if (this._stopOnlyGroup4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnlyGroup4 = this._stopOnlyGroup4;
    }
    if (this._stopOnlyLogger !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnlyLogger = this._stopOnlyLogger;
    }
    if (this._waitStartBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitStartBroadcast = this._waitStartBroadcast;
    }
    if (this._waitStartGroup1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitStartGroup1 = this._waitStartGroup1;
    }
    if (this._waitStartGroup2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitStartGroup2 = this._waitStartGroup2;
    }
    if (this._waitStartGroup3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitStartGroup3 = this._waitStartGroup3;
    }
    if (this._waitStartGroup4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitStartGroup4 = this._waitStartGroup4;
    }
    if (this._waitStartLogger !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitStartLogger = this._waitStartLogger;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AaaAccountingExecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._none = undefined;
      this._startStopBroadcast = undefined;
      this._startStopGroup1 = undefined;
      this._startStopGroup2 = undefined;
      this._startStopGroup3 = undefined;
      this._startStopGroup4 = undefined;
      this._startStopLogger = undefined;
      this._stopOnlyBroadcast = undefined;
      this._stopOnlyGroup1 = undefined;
      this._stopOnlyGroup2 = undefined;
      this._stopOnlyGroup3 = undefined;
      this._stopOnlyGroup4 = undefined;
      this._stopOnlyLogger = undefined;
      this._waitStartBroadcast = undefined;
      this._waitStartGroup1 = undefined;
      this._waitStartGroup2 = undefined;
      this._waitStartGroup3 = undefined;
      this._waitStartGroup4 = undefined;
      this._waitStartLogger = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._none = value.none;
      this._startStopBroadcast = value.startStopBroadcast;
      this._startStopGroup1 = value.startStopGroup1;
      this._startStopGroup2 = value.startStopGroup2;
      this._startStopGroup3 = value.startStopGroup3;
      this._startStopGroup4 = value.startStopGroup4;
      this._startStopLogger = value.startStopLogger;
      this._stopOnlyBroadcast = value.stopOnlyBroadcast;
      this._stopOnlyGroup1 = value.stopOnlyGroup1;
      this._stopOnlyGroup2 = value.stopOnlyGroup2;
      this._stopOnlyGroup3 = value.stopOnlyGroup3;
      this._stopOnlyGroup4 = value.stopOnlyGroup4;
      this._stopOnlyLogger = value.stopOnlyLogger;
      this._waitStartBroadcast = value.waitStartBroadcast;
      this._waitStartGroup1 = value.waitStartGroup1;
      this._waitStartGroup2 = value.waitStartGroup2;
      this._waitStartGroup3 = value.waitStartGroup3;
      this._waitStartGroup4 = value.waitStartGroup4;
      this._waitStartLogger = value.waitStartLogger;
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

  // none - computed: false, optional: true, required: false
  private _none?: boolean | cdktf.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktf.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // start_stop_broadcast - computed: false, optional: true, required: false
  private _startStopBroadcast?: boolean | cdktf.IResolvable; 
  public get startStopBroadcast() {
    return this.getBooleanAttribute('start_stop_broadcast');
  }
  public set startStopBroadcast(value: boolean | cdktf.IResolvable) {
    this._startStopBroadcast = value;
  }
  public resetStartStopBroadcast() {
    this._startStopBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopBroadcastInput() {
    return this._startStopBroadcast;
  }

  // start_stop_group1 - computed: false, optional: true, required: false
  private _startStopGroup1?: string; 
  public get startStopGroup1() {
    return this.getStringAttribute('start_stop_group1');
  }
  public set startStopGroup1(value: string) {
    this._startStopGroup1 = value;
  }
  public resetStartStopGroup1() {
    this._startStopGroup1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup1Input() {
    return this._startStopGroup1;
  }

  // start_stop_group2 - computed: false, optional: true, required: false
  private _startStopGroup2?: string; 
  public get startStopGroup2() {
    return this.getStringAttribute('start_stop_group2');
  }
  public set startStopGroup2(value: string) {
    this._startStopGroup2 = value;
  }
  public resetStartStopGroup2() {
    this._startStopGroup2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup2Input() {
    return this._startStopGroup2;
  }

  // start_stop_group3 - computed: false, optional: true, required: false
  private _startStopGroup3?: string; 
  public get startStopGroup3() {
    return this.getStringAttribute('start_stop_group3');
  }
  public set startStopGroup3(value: string) {
    this._startStopGroup3 = value;
  }
  public resetStartStopGroup3() {
    this._startStopGroup3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup3Input() {
    return this._startStopGroup3;
  }

  // start_stop_group4 - computed: false, optional: true, required: false
  private _startStopGroup4?: string; 
  public get startStopGroup4() {
    return this.getStringAttribute('start_stop_group4');
  }
  public set startStopGroup4(value: string) {
    this._startStopGroup4 = value;
  }
  public resetStartStopGroup4() {
    this._startStopGroup4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup4Input() {
    return this._startStopGroup4;
  }

  // start_stop_logger - computed: false, optional: true, required: false
  private _startStopLogger?: boolean | cdktf.IResolvable; 
  public get startStopLogger() {
    return this.getBooleanAttribute('start_stop_logger');
  }
  public set startStopLogger(value: boolean | cdktf.IResolvable) {
    this._startStopLogger = value;
  }
  public resetStartStopLogger() {
    this._startStopLogger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopLoggerInput() {
    return this._startStopLogger;
  }

  // stop_only_broadcast - computed: false, optional: true, required: false
  private _stopOnlyBroadcast?: boolean | cdktf.IResolvable; 
  public get stopOnlyBroadcast() {
    return this.getBooleanAttribute('stop_only_broadcast');
  }
  public set stopOnlyBroadcast(value: boolean | cdktf.IResolvable) {
    this._stopOnlyBroadcast = value;
  }
  public resetStopOnlyBroadcast() {
    this._stopOnlyBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnlyBroadcastInput() {
    return this._stopOnlyBroadcast;
  }

  // stop_only_group1 - computed: false, optional: true, required: false
  private _stopOnlyGroup1?: string; 
  public get stopOnlyGroup1() {
    return this.getStringAttribute('stop_only_group1');
  }
  public set stopOnlyGroup1(value: string) {
    this._stopOnlyGroup1 = value;
  }
  public resetStopOnlyGroup1() {
    this._stopOnlyGroup1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnlyGroup1Input() {
    return this._stopOnlyGroup1;
  }

  // stop_only_group2 - computed: false, optional: true, required: false
  private _stopOnlyGroup2?: string; 
  public get stopOnlyGroup2() {
    return this.getStringAttribute('stop_only_group2');
  }
  public set stopOnlyGroup2(value: string) {
    this._stopOnlyGroup2 = value;
  }
  public resetStopOnlyGroup2() {
    this._stopOnlyGroup2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnlyGroup2Input() {
    return this._stopOnlyGroup2;
  }

  // stop_only_group3 - computed: false, optional: true, required: false
  private _stopOnlyGroup3?: string; 
  public get stopOnlyGroup3() {
    return this.getStringAttribute('stop_only_group3');
  }
  public set stopOnlyGroup3(value: string) {
    this._stopOnlyGroup3 = value;
  }
  public resetStopOnlyGroup3() {
    this._stopOnlyGroup3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnlyGroup3Input() {
    return this._stopOnlyGroup3;
  }

  // stop_only_group4 - computed: false, optional: true, required: false
  private _stopOnlyGroup4?: string; 
  public get stopOnlyGroup4() {
    return this.getStringAttribute('stop_only_group4');
  }
  public set stopOnlyGroup4(value: string) {
    this._stopOnlyGroup4 = value;
  }
  public resetStopOnlyGroup4() {
    this._stopOnlyGroup4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnlyGroup4Input() {
    return this._stopOnlyGroup4;
  }

  // stop_only_logger - computed: false, optional: true, required: false
  private _stopOnlyLogger?: boolean | cdktf.IResolvable; 
  public get stopOnlyLogger() {
    return this.getBooleanAttribute('stop_only_logger');
  }
  public set stopOnlyLogger(value: boolean | cdktf.IResolvable) {
    this._stopOnlyLogger = value;
  }
  public resetStopOnlyLogger() {
    this._stopOnlyLogger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnlyLoggerInput() {
    return this._stopOnlyLogger;
  }

  // wait_start_broadcast - computed: false, optional: true, required: false
  private _waitStartBroadcast?: boolean | cdktf.IResolvable; 
  public get waitStartBroadcast() {
    return this.getBooleanAttribute('wait_start_broadcast');
  }
  public set waitStartBroadcast(value: boolean | cdktf.IResolvable) {
    this._waitStartBroadcast = value;
  }
  public resetWaitStartBroadcast() {
    this._waitStartBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitStartBroadcastInput() {
    return this._waitStartBroadcast;
  }

  // wait_start_group1 - computed: false, optional: true, required: false
  private _waitStartGroup1?: string; 
  public get waitStartGroup1() {
    return this.getStringAttribute('wait_start_group1');
  }
  public set waitStartGroup1(value: string) {
    this._waitStartGroup1 = value;
  }
  public resetWaitStartGroup1() {
    this._waitStartGroup1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitStartGroup1Input() {
    return this._waitStartGroup1;
  }

  // wait_start_group2 - computed: false, optional: true, required: false
  private _waitStartGroup2?: string; 
  public get waitStartGroup2() {
    return this.getStringAttribute('wait_start_group2');
  }
  public set waitStartGroup2(value: string) {
    this._waitStartGroup2 = value;
  }
  public resetWaitStartGroup2() {
    this._waitStartGroup2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitStartGroup2Input() {
    return this._waitStartGroup2;
  }

  // wait_start_group3 - computed: false, optional: true, required: false
  private _waitStartGroup3?: string; 
  public get waitStartGroup3() {
    return this.getStringAttribute('wait_start_group3');
  }
  public set waitStartGroup3(value: string) {
    this._waitStartGroup3 = value;
  }
  public resetWaitStartGroup3() {
    this._waitStartGroup3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitStartGroup3Input() {
    return this._waitStartGroup3;
  }

  // wait_start_group4 - computed: false, optional: true, required: false
  private _waitStartGroup4?: string; 
  public get waitStartGroup4() {
    return this.getStringAttribute('wait_start_group4');
  }
  public set waitStartGroup4(value: string) {
    this._waitStartGroup4 = value;
  }
  public resetWaitStartGroup4() {
    this._waitStartGroup4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitStartGroup4Input() {
    return this._waitStartGroup4;
  }

  // wait_start_logger - computed: false, optional: true, required: false
  private _waitStartLogger?: boolean | cdktf.IResolvable; 
  public get waitStartLogger() {
    return this.getBooleanAttribute('wait_start_logger');
  }
  public set waitStartLogger(value: boolean | cdktf.IResolvable) {
    this._waitStartLogger = value;
  }
  public resetWaitStartLogger() {
    this._waitStartLogger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitStartLoggerInput() {
    return this._waitStartLogger;
  }
}

export class AaaAccountingExecsList extends cdktf.ComplexList {
  public internalValue? : AaaAccountingExecs[] | cdktf.IResolvable

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
  public get(index: number): AaaAccountingExecsOutputReference {
    return new AaaAccountingExecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AaaAccountingIdentities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#name AaaAccounting#name}
  */
  readonly name: string;
  /**
  * Use Broadcast for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_broadcast AaaAccounting#start_stop_broadcast}
  */
  readonly startStopBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group1 AaaAccounting#start_stop_group1}
  */
  readonly startStopGroup1?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group2 AaaAccounting#start_stop_group2}
  */
  readonly startStopGroup2?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group3 AaaAccounting#start_stop_group3}
  */
  readonly startStopGroup3?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group4 AaaAccounting#start_stop_group4}
  */
  readonly startStopGroup4?: string;
  /**
  * Use Broadcast for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group_broadcast AaaAccounting#start_stop_group_broadcast}
  */
  readonly startStopGroupBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Use system logger for Accounting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group_logger AaaAccounting#start_stop_group_logger}
  */
  readonly startStopGroupLogger?: boolean | cdktf.IResolvable;
}

export function aaaAccountingIdentitiesToTerraform(struct?: AaaAccountingIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    start_stop_broadcast: cdktf.booleanToTerraform(struct!.startStopBroadcast),
    start_stop_group1: cdktf.stringToTerraform(struct!.startStopGroup1),
    start_stop_group2: cdktf.stringToTerraform(struct!.startStopGroup2),
    start_stop_group3: cdktf.stringToTerraform(struct!.startStopGroup3),
    start_stop_group4: cdktf.stringToTerraform(struct!.startStopGroup4),
    start_stop_group_broadcast: cdktf.booleanToTerraform(struct!.startStopGroupBroadcast),
    start_stop_group_logger: cdktf.booleanToTerraform(struct!.startStopGroupLogger),
  }
}


export function aaaAccountingIdentitiesToHclTerraform(struct?: AaaAccountingIdentities | cdktf.IResolvable): any {
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
    start_stop_broadcast: {
      value: cdktf.booleanToHclTerraform(struct!.startStopBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_stop_group1: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_group2: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_group3: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_group4: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_group_broadcast: {
      value: cdktf.booleanToHclTerraform(struct!.startStopGroupBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_stop_group_logger: {
      value: cdktf.booleanToHclTerraform(struct!.startStopGroupLogger),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AaaAccountingIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaAccountingIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._startStopBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopBroadcast = this._startStopBroadcast;
    }
    if (this._startStopGroup1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup1 = this._startStopGroup1;
    }
    if (this._startStopGroup2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup2 = this._startStopGroup2;
    }
    if (this._startStopGroup3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup3 = this._startStopGroup3;
    }
    if (this._startStopGroup4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup4 = this._startStopGroup4;
    }
    if (this._startStopGroupBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroupBroadcast = this._startStopGroupBroadcast;
    }
    if (this._startStopGroupLogger !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroupLogger = this._startStopGroupLogger;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AaaAccountingIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._startStopBroadcast = undefined;
      this._startStopGroup1 = undefined;
      this._startStopGroup2 = undefined;
      this._startStopGroup3 = undefined;
      this._startStopGroup4 = undefined;
      this._startStopGroupBroadcast = undefined;
      this._startStopGroupLogger = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._startStopBroadcast = value.startStopBroadcast;
      this._startStopGroup1 = value.startStopGroup1;
      this._startStopGroup2 = value.startStopGroup2;
      this._startStopGroup3 = value.startStopGroup3;
      this._startStopGroup4 = value.startStopGroup4;
      this._startStopGroupBroadcast = value.startStopGroupBroadcast;
      this._startStopGroupLogger = value.startStopGroupLogger;
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

  // start_stop_broadcast - computed: false, optional: true, required: false
  private _startStopBroadcast?: boolean | cdktf.IResolvable; 
  public get startStopBroadcast() {
    return this.getBooleanAttribute('start_stop_broadcast');
  }
  public set startStopBroadcast(value: boolean | cdktf.IResolvable) {
    this._startStopBroadcast = value;
  }
  public resetStartStopBroadcast() {
    this._startStopBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopBroadcastInput() {
    return this._startStopBroadcast;
  }

  // start_stop_group1 - computed: false, optional: true, required: false
  private _startStopGroup1?: string; 
  public get startStopGroup1() {
    return this.getStringAttribute('start_stop_group1');
  }
  public set startStopGroup1(value: string) {
    this._startStopGroup1 = value;
  }
  public resetStartStopGroup1() {
    this._startStopGroup1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup1Input() {
    return this._startStopGroup1;
  }

  // start_stop_group2 - computed: false, optional: true, required: false
  private _startStopGroup2?: string; 
  public get startStopGroup2() {
    return this.getStringAttribute('start_stop_group2');
  }
  public set startStopGroup2(value: string) {
    this._startStopGroup2 = value;
  }
  public resetStartStopGroup2() {
    this._startStopGroup2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup2Input() {
    return this._startStopGroup2;
  }

  // start_stop_group3 - computed: false, optional: true, required: false
  private _startStopGroup3?: string; 
  public get startStopGroup3() {
    return this.getStringAttribute('start_stop_group3');
  }
  public set startStopGroup3(value: string) {
    this._startStopGroup3 = value;
  }
  public resetStartStopGroup3() {
    this._startStopGroup3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup3Input() {
    return this._startStopGroup3;
  }

  // start_stop_group4 - computed: false, optional: true, required: false
  private _startStopGroup4?: string; 
  public get startStopGroup4() {
    return this.getStringAttribute('start_stop_group4');
  }
  public set startStopGroup4(value: string) {
    this._startStopGroup4 = value;
  }
  public resetStartStopGroup4() {
    this._startStopGroup4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup4Input() {
    return this._startStopGroup4;
  }

  // start_stop_group_broadcast - computed: false, optional: true, required: false
  private _startStopGroupBroadcast?: boolean | cdktf.IResolvable; 
  public get startStopGroupBroadcast() {
    return this.getBooleanAttribute('start_stop_group_broadcast');
  }
  public set startStopGroupBroadcast(value: boolean | cdktf.IResolvable) {
    this._startStopGroupBroadcast = value;
  }
  public resetStartStopGroupBroadcast() {
    this._startStopGroupBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroupBroadcastInput() {
    return this._startStopGroupBroadcast;
  }

  // start_stop_group_logger - computed: false, optional: true, required: false
  private _startStopGroupLogger?: boolean | cdktf.IResolvable; 
  public get startStopGroupLogger() {
    return this.getBooleanAttribute('start_stop_group_logger');
  }
  public set startStopGroupLogger(value: boolean | cdktf.IResolvable) {
    this._startStopGroupLogger = value;
  }
  public resetStartStopGroupLogger() {
    this._startStopGroupLogger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroupLoggerInput() {
    return this._startStopGroupLogger;
  }
}

export class AaaAccountingIdentitiesList extends cdktf.ComplexList {
  public internalValue? : AaaAccountingIdentities[] | cdktf.IResolvable

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
  public get(index: number): AaaAccountingIdentitiesOutputReference {
    return new AaaAccountingIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AaaAccountingNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#id AaaAccounting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group1 AaaAccounting#start_stop_group1}
  */
  readonly startStopGroup1?: string;
  /**
  * Use Server-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#start_stop_group2 AaaAccounting#start_stop_group2}
  */
  readonly startStopGroup2?: string;
}

export function aaaAccountingNetworksToTerraform(struct?: AaaAccountingNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    start_stop_group1: cdktf.stringToTerraform(struct!.startStopGroup1),
    start_stop_group2: cdktf.stringToTerraform(struct!.startStopGroup2),
  }
}


export function aaaAccountingNetworksToHclTerraform(struct?: AaaAccountingNetworks | cdktf.IResolvable): any {
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
    start_stop_group1: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_stop_group2: {
      value: cdktf.stringToHclTerraform(struct!.startStopGroup2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AaaAccountingNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AaaAccountingNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._startStopGroup1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup1 = this._startStopGroup1;
    }
    if (this._startStopGroup2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.startStopGroup2 = this._startStopGroup2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AaaAccountingNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._startStopGroup1 = undefined;
      this._startStopGroup2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._startStopGroup1 = value.startStopGroup1;
      this._startStopGroup2 = value.startStopGroup2;
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

  // start_stop_group1 - computed: false, optional: true, required: false
  private _startStopGroup1?: string; 
  public get startStopGroup1() {
    return this.getStringAttribute('start_stop_group1');
  }
  public set startStopGroup1(value: string) {
    this._startStopGroup1 = value;
  }
  public resetStartStopGroup1() {
    this._startStopGroup1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup1Input() {
    return this._startStopGroup1;
  }

  // start_stop_group2 - computed: false, optional: true, required: false
  private _startStopGroup2?: string; 
  public get startStopGroup2() {
    return this.getStringAttribute('start_stop_group2');
  }
  public set startStopGroup2(value: string) {
    this._startStopGroup2 = value;
  }
  public resetStartStopGroup2() {
    this._startStopGroup2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startStopGroup2Input() {
    return this._startStopGroup2;
  }
}

export class AaaAccountingNetworksList extends cdktf.ComplexList {
  public internalValue? : AaaAccountingNetworks[] | cdktf.IResolvable

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
  public get(index: number): AaaAccountingNetworksOutputReference {
    return new AaaAccountingNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting iosxe_aaa_accounting}
*/
export class AaaAccounting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_aaa_accounting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AaaAccounting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AaaAccounting to import
  * @param importFromId The id of the existing AaaAccounting that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AaaAccounting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_aaa_accounting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/aaa_accounting iosxe_aaa_accounting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaaAccountingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AaaAccountingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_aaa_accounting',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commands.internalValue = config.commands;
    this._connections.internalValue = config.connections;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._dot1X.internalValue = config.dot1X;
    this._dot1XDefaultStartStopBroadcast = config.dot1XDefaultStartStopBroadcast;
    this._dot1XDefaultStartStopGroup1 = config.dot1XDefaultStartStopGroup1;
    this._dot1XDefaultStartStopGroup2 = config.dot1XDefaultStartStopGroup2;
    this._dot1XDefaultStartStopGroup3 = config.dot1XDefaultStartStopGroup3;
    this._dot1XDefaultStartStopGroup4 = config.dot1XDefaultStartStopGroup4;
    this._dot1XDefaultStartStopGroupBroadcast = config.dot1XDefaultStartStopGroupBroadcast;
    this._dot1XDefaultStartStopGroupLogger = config.dot1XDefaultStartStopGroupLogger;
    this._execs.internalValue = config.execs;
    this._identities.internalValue = config.identities;
    this._identityDefaultStartStopGroup1 = config.identityDefaultStartStopGroup1;
    this._identityDefaultStartStopGroup2 = config.identityDefaultStartStopGroup2;
    this._identityDefaultStartStopGroup3 = config.identityDefaultStartStopGroup3;
    this._identityDefaultStartStopGroup4 = config.identityDefaultStartStopGroup4;
    this._networks.internalValue = config.networks;
    this._systemGuaranteeFirst = config.systemGuaranteeFirst;
    this._updateNewinfoPeriodic = config.updateNewinfoPeriodic;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commands - computed: false, optional: true, required: false
  private _commands = new AaaAccountingCommandsList(this, "commands", false);
  public get commands() {
    return this._commands;
  }
  public putCommands(value: AaaAccountingCommands[] | cdktf.IResolvable) {
    this._commands.internalValue = value;
  }
  public resetCommands() {
    this._commands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands.internalValue;
  }

  // connections - computed: false, optional: true, required: false
  private _connections = new AaaAccountingConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }
  public putConnections(value: AaaAccountingConnections[] | cdktf.IResolvable) {
    this._connections.internalValue = value;
  }
  public resetConnections() {
    this._connections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // dot1x - computed: false, optional: true, required: false
  private _dot1X = new AaaAccountingDot1XList(this, "dot1x", false);
  public get dot1X() {
    return this._dot1X;
  }
  public putDot1X(value: AaaAccountingDot1X[] | cdktf.IResolvable) {
    this._dot1X.internalValue = value;
  }
  public resetDot1X() {
    this._dot1X.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XInput() {
    return this._dot1X.internalValue;
  }

  // dot1x_default_start_stop_broadcast - computed: false, optional: true, required: false
  private _dot1XDefaultStartStopBroadcast?: boolean | cdktf.IResolvable; 
  public get dot1XDefaultStartStopBroadcast() {
    return this.getBooleanAttribute('dot1x_default_start_stop_broadcast');
  }
  public set dot1XDefaultStartStopBroadcast(value: boolean | cdktf.IResolvable) {
    this._dot1XDefaultStartStopBroadcast = value;
  }
  public resetDot1XDefaultStartStopBroadcast() {
    this._dot1XDefaultStartStopBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XDefaultStartStopBroadcastInput() {
    return this._dot1XDefaultStartStopBroadcast;
  }

  // dot1x_default_start_stop_group1 - computed: false, optional: true, required: false
  private _dot1XDefaultStartStopGroup1?: string; 
  public get dot1XDefaultStartStopGroup1() {
    return this.getStringAttribute('dot1x_default_start_stop_group1');
  }
  public set dot1XDefaultStartStopGroup1(value: string) {
    this._dot1XDefaultStartStopGroup1 = value;
  }
  public resetDot1XDefaultStartStopGroup1() {
    this._dot1XDefaultStartStopGroup1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XDefaultStartStopGroup1Input() {
    return this._dot1XDefaultStartStopGroup1;
  }

  // dot1x_default_start_stop_group2 - computed: false, optional: true, required: false
  private _dot1XDefaultStartStopGroup2?: string; 
  public get dot1XDefaultStartStopGroup2() {
    return this.getStringAttribute('dot1x_default_start_stop_group2');
  }
  public set dot1XDefaultStartStopGroup2(value: string) {
    this._dot1XDefaultStartStopGroup2 = value;
  }
  public resetDot1XDefaultStartStopGroup2() {
    this._dot1XDefaultStartStopGroup2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XDefaultStartStopGroup2Input() {
    return this._dot1XDefaultStartStopGroup2;
  }

  // dot1x_default_start_stop_group3 - computed: false, optional: true, required: false
  private _dot1XDefaultStartStopGroup3?: string; 
  public get dot1XDefaultStartStopGroup3() {
    return this.getStringAttribute('dot1x_default_start_stop_group3');
  }
  public set dot1XDefaultStartStopGroup3(value: string) {
    this._dot1XDefaultStartStopGroup3 = value;
  }
  public resetDot1XDefaultStartStopGroup3() {
    this._dot1XDefaultStartStopGroup3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XDefaultStartStopGroup3Input() {
    return this._dot1XDefaultStartStopGroup3;
  }

  // dot1x_default_start_stop_group4 - computed: false, optional: true, required: false
  private _dot1XDefaultStartStopGroup4?: string; 
  public get dot1XDefaultStartStopGroup4() {
    return this.getStringAttribute('dot1x_default_start_stop_group4');
  }
  public set dot1XDefaultStartStopGroup4(value: string) {
    this._dot1XDefaultStartStopGroup4 = value;
  }
  public resetDot1XDefaultStartStopGroup4() {
    this._dot1XDefaultStartStopGroup4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XDefaultStartStopGroup4Input() {
    return this._dot1XDefaultStartStopGroup4;
  }

  // dot1x_default_start_stop_group_broadcast - computed: false, optional: true, required: false
  private _dot1XDefaultStartStopGroupBroadcast?: boolean | cdktf.IResolvable; 
  public get dot1XDefaultStartStopGroupBroadcast() {
    return this.getBooleanAttribute('dot1x_default_start_stop_group_broadcast');
  }
  public set dot1XDefaultStartStopGroupBroadcast(value: boolean | cdktf.IResolvable) {
    this._dot1XDefaultStartStopGroupBroadcast = value;
  }
  public resetDot1XDefaultStartStopGroupBroadcast() {
    this._dot1XDefaultStartStopGroupBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XDefaultStartStopGroupBroadcastInput() {
    return this._dot1XDefaultStartStopGroupBroadcast;
  }

  // dot1x_default_start_stop_group_logger - computed: false, optional: true, required: false
  private _dot1XDefaultStartStopGroupLogger?: boolean | cdktf.IResolvable; 
  public get dot1XDefaultStartStopGroupLogger() {
    return this.getBooleanAttribute('dot1x_default_start_stop_group_logger');
  }
  public set dot1XDefaultStartStopGroupLogger(value: boolean | cdktf.IResolvable) {
    this._dot1XDefaultStartStopGroupLogger = value;
  }
  public resetDot1XDefaultStartStopGroupLogger() {
    this._dot1XDefaultStartStopGroupLogger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1XDefaultStartStopGroupLoggerInput() {
    return this._dot1XDefaultStartStopGroupLogger;
  }

  // execs - computed: false, optional: true, required: false
  private _execs = new AaaAccountingExecsList(this, "execs", false);
  public get execs() {
    return this._execs;
  }
  public putExecs(value: AaaAccountingExecs[] | cdktf.IResolvable) {
    this._execs.internalValue = value;
  }
  public resetExecs() {
    this._execs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execsInput() {
    return this._execs.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identities - computed: false, optional: true, required: false
  private _identities = new AaaAccountingIdentitiesList(this, "identities", false);
  public get identities() {
    return this._identities;
  }
  public putIdentities(value: AaaAccountingIdentities[] | cdktf.IResolvable) {
    this._identities.internalValue = value;
  }
  public resetIdentities() {
    this._identities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities.internalValue;
  }

  // identity_default_start_stop_group1 - computed: false, optional: true, required: false
  private _identityDefaultStartStopGroup1?: string; 
  public get identityDefaultStartStopGroup1() {
    return this.getStringAttribute('identity_default_start_stop_group1');
  }
  public set identityDefaultStartStopGroup1(value: string) {
    this._identityDefaultStartStopGroup1 = value;
  }
  public resetIdentityDefaultStartStopGroup1() {
    this._identityDefaultStartStopGroup1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityDefaultStartStopGroup1Input() {
    return this._identityDefaultStartStopGroup1;
  }

  // identity_default_start_stop_group2 - computed: false, optional: true, required: false
  private _identityDefaultStartStopGroup2?: string; 
  public get identityDefaultStartStopGroup2() {
    return this.getStringAttribute('identity_default_start_stop_group2');
  }
  public set identityDefaultStartStopGroup2(value: string) {
    this._identityDefaultStartStopGroup2 = value;
  }
  public resetIdentityDefaultStartStopGroup2() {
    this._identityDefaultStartStopGroup2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityDefaultStartStopGroup2Input() {
    return this._identityDefaultStartStopGroup2;
  }

  // identity_default_start_stop_group3 - computed: false, optional: true, required: false
  private _identityDefaultStartStopGroup3?: string; 
  public get identityDefaultStartStopGroup3() {
    return this.getStringAttribute('identity_default_start_stop_group3');
  }
  public set identityDefaultStartStopGroup3(value: string) {
    this._identityDefaultStartStopGroup3 = value;
  }
  public resetIdentityDefaultStartStopGroup3() {
    this._identityDefaultStartStopGroup3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityDefaultStartStopGroup3Input() {
    return this._identityDefaultStartStopGroup3;
  }

  // identity_default_start_stop_group4 - computed: false, optional: true, required: false
  private _identityDefaultStartStopGroup4?: string; 
  public get identityDefaultStartStopGroup4() {
    return this.getStringAttribute('identity_default_start_stop_group4');
  }
  public set identityDefaultStartStopGroup4(value: string) {
    this._identityDefaultStartStopGroup4 = value;
  }
  public resetIdentityDefaultStartStopGroup4() {
    this._identityDefaultStartStopGroup4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityDefaultStartStopGroup4Input() {
    return this._identityDefaultStartStopGroup4;
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new AaaAccountingNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: AaaAccountingNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // system_guarantee_first - computed: false, optional: true, required: false
  private _systemGuaranteeFirst?: boolean | cdktf.IResolvable; 
  public get systemGuaranteeFirst() {
    return this.getBooleanAttribute('system_guarantee_first');
  }
  public set systemGuaranteeFirst(value: boolean | cdktf.IResolvable) {
    this._systemGuaranteeFirst = value;
  }
  public resetSystemGuaranteeFirst() {
    this._systemGuaranteeFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemGuaranteeFirstInput() {
    return this._systemGuaranteeFirst;
  }

  // update_newinfo_periodic - computed: false, optional: true, required: false
  private _updateNewinfoPeriodic?: number; 
  public get updateNewinfoPeriodic() {
    return this.getNumberAttribute('update_newinfo_periodic');
  }
  public set updateNewinfoPeriodic(value: number) {
    this._updateNewinfoPeriodic = value;
  }
  public resetUpdateNewinfoPeriodic() {
    this._updateNewinfoPeriodic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateNewinfoPeriodicInput() {
    return this._updateNewinfoPeriodic;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      commands: cdktf.listMapper(aaaAccountingCommandsToTerraform, false)(this._commands.internalValue),
      connections: cdktf.listMapper(aaaAccountingConnectionsToTerraform, false)(this._connections.internalValue),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      dot1x: cdktf.listMapper(aaaAccountingDot1XToTerraform, false)(this._dot1X.internalValue),
      dot1x_default_start_stop_broadcast: cdktf.booleanToTerraform(this._dot1XDefaultStartStopBroadcast),
      dot1x_default_start_stop_group1: cdktf.stringToTerraform(this._dot1XDefaultStartStopGroup1),
      dot1x_default_start_stop_group2: cdktf.stringToTerraform(this._dot1XDefaultStartStopGroup2),
      dot1x_default_start_stop_group3: cdktf.stringToTerraform(this._dot1XDefaultStartStopGroup3),
      dot1x_default_start_stop_group4: cdktf.stringToTerraform(this._dot1XDefaultStartStopGroup4),
      dot1x_default_start_stop_group_broadcast: cdktf.booleanToTerraform(this._dot1XDefaultStartStopGroupBroadcast),
      dot1x_default_start_stop_group_logger: cdktf.booleanToTerraform(this._dot1XDefaultStartStopGroupLogger),
      execs: cdktf.listMapper(aaaAccountingExecsToTerraform, false)(this._execs.internalValue),
      identities: cdktf.listMapper(aaaAccountingIdentitiesToTerraform, false)(this._identities.internalValue),
      identity_default_start_stop_group1: cdktf.stringToTerraform(this._identityDefaultStartStopGroup1),
      identity_default_start_stop_group2: cdktf.stringToTerraform(this._identityDefaultStartStopGroup2),
      identity_default_start_stop_group3: cdktf.stringToTerraform(this._identityDefaultStartStopGroup3),
      identity_default_start_stop_group4: cdktf.stringToTerraform(this._identityDefaultStartStopGroup4),
      networks: cdktf.listMapper(aaaAccountingNetworksToTerraform, false)(this._networks.internalValue),
      system_guarantee_first: cdktf.booleanToTerraform(this._systemGuaranteeFirst),
      update_newinfo_periodic: cdktf.numberToTerraform(this._updateNewinfoPeriodic),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      commands: {
        value: cdktf.listMapperHcl(aaaAccountingCommandsToHclTerraform, false)(this._commands.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AaaAccountingCommandsList",
      },
      connections: {
        value: cdktf.listMapperHcl(aaaAccountingConnectionsToHclTerraform, false)(this._connections.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AaaAccountingConnectionsList",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot1x: {
        value: cdktf.listMapperHcl(aaaAccountingDot1XToHclTerraform, false)(this._dot1X.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AaaAccountingDot1XList",
      },
      dot1x_default_start_stop_broadcast: {
        value: cdktf.booleanToHclTerraform(this._dot1XDefaultStartStopBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot1x_default_start_stop_group1: {
        value: cdktf.stringToHclTerraform(this._dot1XDefaultStartStopGroup1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot1x_default_start_stop_group2: {
        value: cdktf.stringToHclTerraform(this._dot1XDefaultStartStopGroup2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot1x_default_start_stop_group3: {
        value: cdktf.stringToHclTerraform(this._dot1XDefaultStartStopGroup3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot1x_default_start_stop_group4: {
        value: cdktf.stringToHclTerraform(this._dot1XDefaultStartStopGroup4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot1x_default_start_stop_group_broadcast: {
        value: cdktf.booleanToHclTerraform(this._dot1XDefaultStartStopGroupBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dot1x_default_start_stop_group_logger: {
        value: cdktf.booleanToHclTerraform(this._dot1XDefaultStartStopGroupLogger),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      execs: {
        value: cdktf.listMapperHcl(aaaAccountingExecsToHclTerraform, false)(this._execs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AaaAccountingExecsList",
      },
      identities: {
        value: cdktf.listMapperHcl(aaaAccountingIdentitiesToHclTerraform, false)(this._identities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AaaAccountingIdentitiesList",
      },
      identity_default_start_stop_group1: {
        value: cdktf.stringToHclTerraform(this._identityDefaultStartStopGroup1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_default_start_stop_group2: {
        value: cdktf.stringToHclTerraform(this._identityDefaultStartStopGroup2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_default_start_stop_group3: {
        value: cdktf.stringToHclTerraform(this._identityDefaultStartStopGroup3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_default_start_stop_group4: {
        value: cdktf.stringToHclTerraform(this._identityDefaultStartStopGroup4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networks: {
        value: cdktf.listMapperHcl(aaaAccountingNetworksToHclTerraform, false)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AaaAccountingNetworksList",
      },
      system_guarantee_first: {
        value: cdktf.booleanToHclTerraform(this._systemGuaranteeFirst),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_newinfo_periodic: {
        value: cdktf.numberToHclTerraform(this._updateNewinfoPeriodic),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
