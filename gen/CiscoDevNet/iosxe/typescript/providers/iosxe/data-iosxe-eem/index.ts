// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/eem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeEemConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/eem#device DataIosxeEem#device}
  */
  readonly device?: string;
}
export interface DataIosxeEemAppletsActions {
}

export function dataIosxeEemAppletsActionsToTerraform(struct?: DataIosxeEemAppletsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeEemAppletsActionsToHclTerraform(struct?: DataIosxeEemAppletsActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeEemAppletsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeEemAppletsActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeEemAppletsActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // append_value - computed: true, optional: false, required: false
  public get appendValue() {
    return this.getStringAttribute('append_value');
  }

  // append_varname - computed: true, optional: false, required: false
  public get appendVarname() {
    return this.getStringAttribute('append_varname');
  }

  // break - computed: true, optional: false, required: false
  public get break() {
    return this.getBooleanAttribute('break');
  }

  // cli_command - computed: true, optional: false, required: false
  public get cliCommand() {
    return this.getStringAttribute('cli_command');
  }

  // context_retrieve_key - computed: true, optional: false, required: false
  public get contextRetrieveKey() {
    return this.getStringAttribute('context_retrieve_key');
  }

  // context_retrieve_variable - computed: true, optional: false, required: false
  public get contextRetrieveVariable() {
    return this.getStringAttribute('context_retrieve_variable');
  }

  // context_save_key - computed: true, optional: false, required: false
  public get contextSaveKey() {
    return this.getStringAttribute('context_save_key');
  }

  // context_save_variable - computed: true, optional: false, required: false
  public get contextSaveVariable() {
    return this.getStringAttribute('context_save_variable');
  }

  // continue - computed: true, optional: false, required: false
  public get continue() {
    return this.getBooleanAttribute('continue');
  }

  // counter_name - computed: true, optional: false, required: false
  public get counterName() {
    return this.getStringAttribute('counter_name');
  }

  // counter_op_dec - computed: true, optional: false, required: false
  public get counterOpDec() {
    return this.getBooleanAttribute('counter_op_dec');
  }

  // counter_op_inc - computed: true, optional: false, required: false
  public get counterOpInc() {
    return this.getBooleanAttribute('counter_op_inc');
  }

  // counter_op_nop - computed: true, optional: false, required: false
  public get counterOpNop() {
    return this.getBooleanAttribute('counter_op_nop');
  }

  // counter_op_set - computed: true, optional: false, required: false
  public get counterOpSet() {
    return this.getBooleanAttribute('counter_op_set');
  }

  // counter_value - computed: true, optional: false, required: false
  public get counterValue() {
    return this.getNumberAttribute('counter_value');
  }

  // decrement_value - computed: true, optional: false, required: false
  public get decrementValue() {
    return this.getStringAttribute('decrement_value');
  }

  // decrement_varname - computed: true, optional: false, required: false
  public get decrementVarname() {
    return this.getStringAttribute('decrement_varname');
  }

  // divide_operand1 - computed: true, optional: false, required: false
  public get divideOperand1() {
    return this.getStringAttribute('divide_operand1');
  }

  // divide_operand2 - computed: true, optional: false, required: false
  public get divideOperand2() {
    return this.getStringAttribute('divide_operand2');
  }

  // else - computed: true, optional: false, required: false
  public get else() {
    return this.getBooleanAttribute('else');
  }

  // elseif_operand1 - computed: true, optional: false, required: false
  public get elseifOperand1() {
    return this.getStringAttribute('elseif_operand1');
  }

  // elseif_operand2 - computed: true, optional: false, required: false
  public get elseifOperand2() {
    return this.getStringAttribute('elseif_operand2');
  }

  // elseif_operation - computed: true, optional: false, required: false
  public get elseifOperation() {
    return this.getStringAttribute('elseif_operation');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getBooleanAttribute('end');
  }

  // exit - computed: true, optional: false, required: false
  public get exit() {
    return this.getBooleanAttribute('exit');
  }

  // foreach_delimiter - computed: true, optional: false, required: false
  public get foreachDelimiter() {
    return this.getStringAttribute('foreach_delimiter');
  }

  // foreach_iterator - computed: true, optional: false, required: false
  public get foreachIterator() {
    return this.getStringAttribute('foreach_iterator');
  }

  // foreach_loopvar - computed: true, optional: false, required: false
  public get foreachLoopvar() {
    return this.getStringAttribute('foreach_loopvar');
  }

  // gets - computed: true, optional: false, required: false
  public get fetchs() {
    return this.getStringAttribute('gets');
  }

  // handle_error_type - computed: true, optional: false, required: false
  public get handleErrorType() {
    return this.getStringAttribute('handle_error_type');
  }

  // if_goto - computed: true, optional: false, required: false
  public get ifGoto() {
    return this.getStringAttribute('if_goto');
  }

  // if_keyword - computed: true, optional: false, required: false
  public get ifKeyword() {
    return this.getStringAttribute('if_keyword');
  }

  // if_string_op_1 - computed: true, optional: false, required: false
  public get ifStringOp1() {
    return this.getStringAttribute('if_string_op_1');
  }

  // if_string_op_2 - computed: true, optional: false, required: false
  public get ifStringOp2() {
    return this.getStringAttribute('if_string_op_2');
  }

  // increment_value - computed: true, optional: false, required: false
  public get incrementValue() {
    return this.getStringAttribute('increment_value');
  }

  // increment_varname - computed: true, optional: false, required: false
  public get incrementVarname() {
    return this.getStringAttribute('increment_varname');
  }

  // info_type_snmp_trap_enterprise_oid - computed: true, optional: false, required: false
  public get infoTypeSnmpTrapEnterpriseOid() {
    return this.getStringAttribute('info_type_snmp_trap_enterprise_oid');
  }

  // info_type_snmp_trap_generic_trapnum - computed: true, optional: false, required: false
  public get infoTypeSnmpTrapGenericTrapnum() {
    return this.getNumberAttribute('info_type_snmp_trap_generic_trapnum');
  }

  // info_type_snmp_trap_specific_trapnum - computed: true, optional: false, required: false
  public get infoTypeSnmpTrapSpecificTrapnum() {
    return this.getNumberAttribute('info_type_snmp_trap_specific_trapnum');
  }

  // info_type_snmp_trap_trap_oid - computed: true, optional: false, required: false
  public get infoTypeSnmpTrapTrapOid() {
    return this.getStringAttribute('info_type_snmp_trap_trap_oid');
  }

  // info_type_snmp_trap_trap_var - computed: true, optional: false, required: false
  public get infoTypeSnmpTrapTrapVar() {
    return this.getStringAttribute('info_type_snmp_trap_trap_var');
  }

  // info_type_snmp_var - computed: true, optional: false, required: false
  public get infoTypeSnmpVar() {
    return this.getStringAttribute('info_type_snmp_var');
  }

  // info_type_snmp_var_oid - computed: true, optional: false, required: false
  public get infoTypeSnmpVarOid() {
    return this.getStringAttribute('info_type_snmp_var_oid');
  }

  // info_type_snmp_var_oid_type - computed: true, optional: false, required: false
  public get infoTypeSnmpVarOidType() {
    return this.getStringAttribute('info_type_snmp_var_oid_type');
  }

  // info_type_snmp_var_oid_type_value - computed: true, optional: false, required: false
  public get infoTypeSnmpVarOidTypeValue() {
    return this.getStringAttribute('info_type_snmp_var_oid_type_value');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // puts - computed: true, optional: false, required: false
  public get puts() {
    return this.getStringAttribute('puts');
  }

  // regexp_string_input - computed: true, optional: false, required: false
  public get regexpStringInput() {
    return this.getStringAttribute('regexp_string_input');
  }

  // regexp_string_match - computed: true, optional: false, required: false
  public get regexpStringMatch() {
    return this.getStringAttribute('regexp_string_match');
  }

  // regexp_string_match1 - computed: true, optional: false, required: false
  public get regexpStringMatch1() {
    return this.getStringAttribute('regexp_string_match1');
  }

  // regexp_string_match2 - computed: true, optional: false, required: false
  public get regexpStringMatch2() {
    return this.getStringAttribute('regexp_string_match2');
  }

  // regexp_string_match3 - computed: true, optional: false, required: false
  public get regexpStringMatch3() {
    return this.getStringAttribute('regexp_string_match3');
  }

  // regexp_string_pattern - computed: true, optional: false, required: false
  public get regexpStringPattern() {
    return this.getStringAttribute('regexp_string_pattern');
  }

  // reload - computed: true, optional: false, required: false
  public get reload() {
    return this.getBooleanAttribute('reload');
  }

  // set_value - computed: true, optional: false, required: false
  public get setValue() {
    return this.getStringAttribute('set_value');
  }

  // set_varname - computed: true, optional: false, required: false
  public get setVarname() {
    return this.getStringAttribute('set_varname');
  }

  // snmp_trap_intdata1 - computed: true, optional: false, required: false
  public get snmpTrapIntdata1() {
    return this.getNumberAttribute('snmp_trap_intdata1');
  }

  // snmp_trap_intdata2 - computed: true, optional: false, required: false
  public get snmpTrapIntdata2() {
    return this.getNumberAttribute('snmp_trap_intdata2');
  }

  // snmp_trap_strdata - computed: true, optional: false, required: false
  public get snmpTrapStrdata() {
    return this.getStringAttribute('snmp_trap_strdata');
  }

  // string_first_string_op_1 - computed: true, optional: false, required: false
  public get stringFirstStringOp1() {
    return this.getStringAttribute('string_first_string_op_1');
  }

  // string_first_string_op_2 - computed: true, optional: false, required: false
  public get stringFirstStringOp2() {
    return this.getStringAttribute('string_first_string_op_2');
  }

  // string_trim - computed: true, optional: false, required: false
  public get stringTrim() {
    return this.getStringAttribute('string_trim');
  }

  // syslog_facility - computed: true, optional: false, required: false
  public get syslogFacility() {
    return this.getStringAttribute('syslog_facility');
  }

  // syslog_msg - computed: true, optional: false, required: false
  public get syslogMsg() {
    return this.getStringAttribute('syslog_msg');
  }

  // syslog_priority - computed: true, optional: false, required: false
  public get syslogPriority() {
    return this.getStringAttribute('syslog_priority');
  }

  // wait - computed: true, optional: false, required: false
  public get wait() {
    return this.getNumberAttribute('wait');
  }

  // while_operand1 - computed: true, optional: false, required: false
  public get whileOperand1() {
    return this.getStringAttribute('while_operand1');
  }

  // while_operand2 - computed: true, optional: false, required: false
  public get whileOperand2() {
    return this.getStringAttribute('while_operand2');
  }

  // while_operation - computed: true, optional: false, required: false
  public get whileOperation() {
    return this.getStringAttribute('while_operation');
  }
}

export class DataIosxeEemAppletsActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeEemAppletsActionsOutputReference {
    return new DataIosxeEemAppletsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeEemApplets {
}

export function dataIosxeEemAppletsToTerraform(struct?: DataIosxeEemApplets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeEemAppletsToHclTerraform(struct?: DataIosxeEemApplets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeEemAppletsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeEemApplets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeEemApplets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataIosxeEemAppletsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // authorization - computed: true, optional: false, required: false
  public get authorization() {
    return this.getStringAttribute('authorization');
  }

  // class - computed: true, optional: false, required: false
  public get class() {
    return this.getStringAttribute('class');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // event_cli_pattern - computed: true, optional: false, required: false
  public get eventCliPattern() {
    return this.getStringAttribute('event_cli_pattern');
  }

  // event_cli_skip - computed: true, optional: false, required: false
  public get eventCliSkip() {
    return this.getStringAttribute('event_cli_skip');
  }

  // event_cli_sync - computed: true, optional: false, required: false
  public get eventCliSync() {
    return this.getStringAttribute('event_cli_sync');
  }

  // event_syslog_maxrun - computed: true, optional: false, required: false
  public get eventSyslogMaxrun() {
    return this.getNumberAttribute('event_syslog_maxrun');
  }

  // event_syslog_occurs - computed: true, optional: false, required: false
  public get eventSyslogOccurs() {
    return this.getNumberAttribute('event_syslog_occurs');
  }

  // event_syslog_pattern - computed: true, optional: false, required: false
  public get eventSyslogPattern() {
    return this.getStringAttribute('event_syslog_pattern');
  }

  // event_syslog_period - computed: true, optional: false, required: false
  public get eventSyslogPeriod() {
    return this.getNumberAttribute('event_syslog_period');
  }

  // event_syslog_ratelimit - computed: true, optional: false, required: false
  public get eventSyslogRatelimit() {
    return this.getNumberAttribute('event_syslog_ratelimit');
  }

  // event_timer_cron_entry - computed: true, optional: false, required: false
  public get eventTimerCronEntry() {
    return this.getStringAttribute('event_timer_cron_entry');
  }

  // event_timer_cron_maxrun - computed: true, optional: false, required: false
  public get eventTimerCronMaxrun() {
    return this.getNumberAttribute('event_timer_cron_maxrun');
  }

  // event_timer_cron_name - computed: true, optional: false, required: false
  public get eventTimerCronName() {
    return this.getStringAttribute('event_timer_cron_name');
  }

  // event_timer_cron_ratelimit - computed: true, optional: false, required: false
  public get eventTimerCronRatelimit() {
    return this.getNumberAttribute('event_timer_cron_ratelimit');
  }

  // event_timer_watchdog_maxrun - computed: true, optional: false, required: false
  public get eventTimerWatchdogMaxrun() {
    return this.getNumberAttribute('event_timer_watchdog_maxrun');
  }

  // event_timer_watchdog_name - computed: true, optional: false, required: false
  public get eventTimerWatchdogName() {
    return this.getStringAttribute('event_timer_watchdog_name');
  }

  // event_timer_watchdog_ratelimit - computed: true, optional: false, required: false
  public get eventTimerWatchdogRatelimit() {
    return this.getNumberAttribute('event_timer_watchdog_ratelimit');
  }

  // event_timer_watchdog_time - computed: true, optional: false, required: false
  public get eventTimerWatchdogTime() {
    return this.getNumberAttribute('event_timer_watchdog_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxeEemAppletsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeEemAppletsOutputReference {
    return new DataIosxeEemAppletsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeEemEnvironmentVariables {
}

export function dataIosxeEemEnvironmentVariablesToTerraform(struct?: DataIosxeEemEnvironmentVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeEemEnvironmentVariablesToHclTerraform(struct?: DataIosxeEemEnvironmentVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeEemEnvironmentVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeEemEnvironmentVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeEemEnvironmentVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIosxeEemEnvironmentVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeEemEnvironmentVariablesOutputReference {
    return new DataIosxeEemEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/eem iosxe_eem}
*/
export class DataIosxeEem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_eem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeEem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeEem to import
  * @param importFromId The id of the existing DataIosxeEem that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/eem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeEem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_eem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/eem iosxe_eem} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeEemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeEemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_eem',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applets - computed: true, optional: false, required: false
  private _applets = new DataIosxeEemAppletsList(this, "applets", false);
  public get applets() {
    return this._applets;
  }

  // detector_routing_bootup_delay - computed: true, optional: false, required: false
  public get detectorRoutingBootupDelay() {
    return this.getNumberAttribute('detector_routing_bootup_delay');
  }

  // detector_rpc_max_sessions - computed: true, optional: false, required: false
  public get detectorRpcMaxSessions() {
    return this.getNumberAttribute('detector_rpc_max_sessions');
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

  // directory_user_policy - computed: true, optional: false, required: false
  public get directoryUserPolicy() {
    return this.getStringAttribute('directory_user_policy');
  }

  // environment_variables - computed: true, optional: false, required: false
  private _environmentVariables = new DataIosxeEemEnvironmentVariablesList(this, "environment_variables", false);
  public get environmentVariables() {
    return this._environmentVariables;
  }

  // history_size_events - computed: true, optional: false, required: false
  public get historySizeEvents() {
    return this.getNumberAttribute('history_size_events');
  }

  // history_size_traps - computed: true, optional: false, required: false
  public get historySizeTraps() {
    return this.getNumberAttribute('history_size_traps');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // scheduler_applet_thread_class_default - computed: true, optional: false, required: false
  public get schedulerAppletThreadClassDefault() {
    return this.getBooleanAttribute('scheduler_applet_thread_class_default');
  }

  // scheduler_applet_thread_class_number - computed: true, optional: false, required: false
  public get schedulerAppletThreadClassNumber() {
    return this.getNumberAttribute('scheduler_applet_thread_class_number');
  }

  // session_cli_username - computed: true, optional: false, required: false
  public get sessionCliUsername() {
    return this.getStringAttribute('session_cli_username');
  }

  // session_cli_username_privilege - computed: true, optional: false, required: false
  public get sessionCliUsernamePrivilege() {
    return this.getNumberAttribute('session_cli_username_privilege');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
