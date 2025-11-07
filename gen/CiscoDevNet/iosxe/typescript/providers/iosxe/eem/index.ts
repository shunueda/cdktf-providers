// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Register an Event Manager applet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#applets Eem#applets}
  */
  readonly applets?: EemApplets[] | cdktf.IResolvable;
  /**
  * bootup delay in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#detector_routing_bootup_delay Eem#detector_routing_bootup_delay}
  */
  readonly detectorRoutingBootupDelay?: number;
  /**
  * Maximum number of RPC sessions
  *   - Range: `4`-`16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#detector_rpc_max_sessions Eem#detector_rpc_max_sessions}
  */
  readonly detectorRpcMaxSessions?: number;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#device Eem#device}
  */
  readonly device?: string;
  /**
  * Embedded Event Manager user policy directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#directory_user_policy Eem#directory_user_policy}
  */
  readonly directoryUserPolicy?: string;
  /**
  * Set an Embedded Event Manager global environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#environment_variables Eem#environment_variables}
  */
  readonly environmentVariables?: EemEnvironmentVariables[] | cdktf.IResolvable;
  /**
  * Embedded Event Manager event history table size
  *   - Range: `0`-`50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#history_size_events Eem#history_size_events}
  */
  readonly historySizeEvents?: number;
  /**
  * Embedded Event Manager trap history table size
  *   - Range: `0`-`50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#history_size_traps Eem#history_size_traps}
  */
  readonly historySizeTraps?: number;
  /**
  * default scheduler thread class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#scheduler_applet_thread_class_default Eem#scheduler_applet_thread_class_default}
  */
  readonly schedulerAppletThreadClassDefault?: boolean | cdktf.IResolvable;
  /**
  * Number of concurrent execution threads
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#scheduler_applet_thread_class_number Eem#scheduler_applet_thread_class_number}
  */
  readonly schedulerAppletThreadClassNumber?: number;
  /**
  * username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#session_cli_username Eem#session_cli_username}
  */
  readonly sessionCliUsername?: string;
  /**
  * Set user privilege level
  *   - Range: `0`-`15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#session_cli_username_privilege Eem#session_cli_username_privilege}
  */
  readonly sessionCliUsernamePrivilege?: number;
}
export interface EemAppletsActions {
  /**
  * Value of the variable of append conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#append_value Eem#append_value}
  */
  readonly appendValue?: string;
  /**
  * Name of the variable of append conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#append_varname Eem#append_varname}
  */
  readonly appendVarname?: string;
  /**
  * break conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#break Eem#break}
  */
  readonly break?: boolean | cdktf.IResolvable;
  /**
  * CLI command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#cli_command Eem#cli_command}
  */
  readonly cliCommand?: string;
  /**
  * key name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#context_retrieve_key Eem#context_retrieve_key}
  */
  readonly contextRetrieveKey?: string;
  /**
  * variable name pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#context_retrieve_variable Eem#context_retrieve_variable}
  */
  readonly contextRetrieveVariable?: string;
  /**
  * key name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#context_save_key Eem#context_save_key}
  */
  readonly contextSaveKey?: string;
  /**
  * variable name pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#context_save_variable Eem#context_save_variable}
  */
  readonly contextSaveVariable?: string;
  /**
  * continue conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#continue Eem#continue}
  */
  readonly continue?: boolean | cdktf.IResolvable;
  /**
  * Name of the counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#counter_name Eem#counter_name}
  */
  readonly counterName?: string;
  /**
  * Decrement the value of the counter by the given value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#counter_op_dec Eem#counter_op_dec}
  */
  readonly counterOpDec?: boolean | cdktf.IResolvable;
  /**
  * Increment the value of the counter by the given value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#counter_op_inc Eem#counter_op_inc}
  */
  readonly counterOpInc?: boolean | cdktf.IResolvable;
  /**
  * Read the value of the counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#counter_op_nop Eem#counter_op_nop}
  */
  readonly counterOpNop?: boolean | cdktf.IResolvable;
  /**
  * Set the value of the counter by the given value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#counter_op_set Eem#counter_op_set}
  */
  readonly counterOpSet?: boolean | cdktf.IResolvable;
  /**
  * Value used to modify the counter
  *   - Range: `-2147483648`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#counter_value Eem#counter_value}
  */
  readonly counterValue?: number;
  /**
  * Value of the variable of decrement conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#decrement_value Eem#decrement_value}
  */
  readonly decrementValue?: string;
  /**
  * Name of the variable of decrement conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#decrement_varname Eem#decrement_varname}
  */
  readonly decrementVarname?: string;
  /**
  * First operand of divide conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#divide_operand1 Eem#divide_operand1}
  */
  readonly divideOperand1?: string;
  /**
  * Second operand of divide conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#divide_operand2 Eem#divide_operand2}
  */
  readonly divideOperand2?: string;
  /**
  * else conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#else Eem#else}
  */
  readonly else?: boolean | cdktf.IResolvable;
  /**
  * First operand of else if conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#elseif_operand1 Eem#elseif_operand1}
  */
  readonly elseifOperand1?: string;
  /**
  * Second operand of else if conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#elseif_operand2 Eem#elseif_operand2}
  */
  readonly elseifOperand2?: string;
  /**
  * Operation of else if conditional
  *   - Choices: `eq`, `ge`, `gt`, `le`, `lt`, `ne`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#elseif_operation Eem#elseif_operation}
  */
  readonly elseifOperation?: string;
  /**
  * end conditional block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#end Eem#end}
  */
  readonly end?: boolean | cdktf.IResolvable;
  /**
  * Exit from applet run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#exit Eem#exit}
  */
  readonly exit?: boolean | cdktf.IResolvable;
  /**
  * Delimiter string of for each conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#foreach_delimiter Eem#foreach_delimiter}
  */
  readonly foreachDelimiter?: string;
  /**
  * String to iterate over
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#foreach_iterator Eem#foreach_iterator}
  */
  readonly foreachIterator?: string;
  /**
  * Loop variable name of for each conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#foreach_loopvar Eem#foreach_loopvar}
  */
  readonly foreachLoopvar?: string;
  /**
  * gets conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#gets Eem#gets}
  */
  readonly fetchs?: string;
  /**
  * Error handle type of handle-error conditional
  *   - Choices: `exit`, `ignore`, `warn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#handle_error_type Eem#handle_error_type}
  */
  readonly handleErrorType?: string;
  /**
  * goto label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#if_goto Eem#if_goto}
  */
  readonly ifGoto?: string;
  /**
  * 
  *   - Choices: `eq`, `ge`, `gt`, `le`, `lt`, `ne`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#if_keyword Eem#if_keyword}
  */
  readonly ifKeyword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#if_string_op_1 Eem#if_string_op_1}
  */
  readonly ifStringOp1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#if_string_op_2 Eem#if_string_op_2}
  */
  readonly ifStringOp2?: string;
  /**
  * value of the variable of increment conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#increment_value Eem#increment_value}
  */
  readonly incrementValue?: string;
  /**
  * Name of the variable of increment conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#increment_varname Eem#increment_varname}
  */
  readonly incrementVarname?: string;
  /**
  * Enterprise oid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#info_type_snmp_trap_enterprise_oid Eem#info_type_snmp_trap_enterprise_oid}
  */
  readonly infoTypeSnmpTrapEnterpriseOid?: string;
  /**
  * Generic trap number
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#info_type_snmp_trap_generic_trapnum Eem#info_type_snmp_trap_generic_trapnum}
  */
  readonly infoTypeSnmpTrapGenericTrapnum?: number;
  /**
  * Specific trap number
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#info_type_snmp_trap_specific_trapnum Eem#info_type_snmp_trap_specific_trapnum}
  */
  readonly infoTypeSnmpTrapSpecificTrapnum?: number;
  /**
  * Trap oid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#info_type_snmp_trap_trap_oid Eem#info_type_snmp_trap_trap_oid}
  */
  readonly infoTypeSnmpTrapTrapOid?: string;
  /**
  * Trap variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#info_type_snmp_trap_trap_var Eem#info_type_snmp_trap_trap_var}
  */
  readonly infoTypeSnmpTrapTrapVar?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#info_type_snmp_var Eem#info_type_snmp_var}
  */
  readonly infoTypeSnmpVar?: string;
  /**
  * SNMP object id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#info_type_snmp_var_oid Eem#info_type_snmp_var_oid}
  */
  readonly infoTypeSnmpVarOid?: string;
  /**
  * 
  *   - Choices: `counter`, `gauge`, `int`, `ipv4`, `octet`, `string`, `uint`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#info_type_snmp_var_oid_type Eem#info_type_snmp_var_oid_type}
  */
  readonly infoTypeSnmpVarOidType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#info_type_snmp_var_oid_type_value Eem#info_type_snmp_var_oid_type_value}
  */
  readonly infoTypeSnmpVarOidTypeValue?: string;
  /**
  * Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#name Eem#name}
  */
  readonly name: string;
  /**
  * displays data to active tty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#puts Eem#puts}
  */
  readonly puts?: string;
  /**
  * input string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#regexp_string_input Eem#regexp_string_input}
  */
  readonly regexpStringInput?: string;
  /**
  * match variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#regexp_string_match Eem#regexp_string_match}
  */
  readonly regexpStringMatch?: string;
  /**
  * subsequent match variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#regexp_string_match1 Eem#regexp_string_match1}
  */
  readonly regexpStringMatch1?: string;
  /**
  * subsequent match variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#regexp_string_match2 Eem#regexp_string_match2}
  */
  readonly regexpStringMatch2?: string;
  /**
  * subsequent match variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#regexp_string_match3 Eem#regexp_string_match3}
  */
  readonly regexpStringMatch3?: string;
  /**
  * regular expression pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#regexp_string_pattern Eem#regexp_string_pattern}
  */
  readonly regexpStringPattern?: string;
  /**
  * Reload system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#reload Eem#reload}
  */
  readonly reload?: boolean | cdktf.IResolvable;
  /**
  * Value of the variable of set conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#set_value Eem#set_value}
  */
  readonly setValue?: string;
  /**
  * Name of the variable of set conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#set_varname Eem#set_varname}
  */
  readonly setVarname?: string;
  /**
  * SNMP integer data1
  *   - Range: `-2147483648`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#snmp_trap_intdata1 Eem#snmp_trap_intdata1}
  */
  readonly snmpTrapIntdata1?: number;
  /**
  * SNMP integer data2
  *   - Range: `-2147483648`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#snmp_trap_intdata2 Eem#snmp_trap_intdata2}
  */
  readonly snmpTrapIntdata2?: number;
  /**
  * SNMP trap string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#snmp_trap_strdata Eem#snmp_trap_strdata}
  */
  readonly snmpTrapStrdata?: string;
  /**
  * trim characters from both ends of string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#string_trim Eem#string_trim}
  */
  readonly stringTrim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#string_trim_first_string_op_1 Eem#string_trim_first_string_op_1}
  */
  readonly stringTrimFirstStringOp1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#string_trim_first_string_op_2 Eem#string_trim_first_string_op_2}
  */
  readonly stringTrimFirstStringOp2?: string;
  /**
  * Facility string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#syslog_facility Eem#syslog_facility}
  */
  readonly syslogFacility?: string;
  /**
  * Syslog message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#syslog_msg Eem#syslog_msg}
  */
  readonly syslogMsg?: string;
  /**
  * Priority of syslog message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#syslog_priority Eem#syslog_priority}
  */
  readonly syslogPriority?: string;
  /**
  * Wait for a specified amount of time
  *   - Range: `1`-`31536000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#wait Eem#wait}
  */
  readonly wait?: number;
  /**
  * First operand of while conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#while_operand1 Eem#while_operand1}
  */
  readonly whileOperand1?: string;
  /**
  * Second operand of while conditional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#while_operand2 Eem#while_operand2}
  */
  readonly whileOperand2?: string;
  /**
  * Operation of while conditional
  *   - Choices: `eq`, `ge`, `gt`, `le`, `lt`, `ne`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#while_operation Eem#while_operation}
  */
  readonly whileOperation?: string;
}

export function eemAppletsActionsToTerraform(struct?: EemAppletsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append_value: cdktf.stringToTerraform(struct!.appendValue),
    append_varname: cdktf.stringToTerraform(struct!.appendVarname),
    break: cdktf.booleanToTerraform(struct!.break),
    cli_command: cdktf.stringToTerraform(struct!.cliCommand),
    context_retrieve_key: cdktf.stringToTerraform(struct!.contextRetrieveKey),
    context_retrieve_variable: cdktf.stringToTerraform(struct!.contextRetrieveVariable),
    context_save_key: cdktf.stringToTerraform(struct!.contextSaveKey),
    context_save_variable: cdktf.stringToTerraform(struct!.contextSaveVariable),
    continue: cdktf.booleanToTerraform(struct!.continue),
    counter_name: cdktf.stringToTerraform(struct!.counterName),
    counter_op_dec: cdktf.booleanToTerraform(struct!.counterOpDec),
    counter_op_inc: cdktf.booleanToTerraform(struct!.counterOpInc),
    counter_op_nop: cdktf.booleanToTerraform(struct!.counterOpNop),
    counter_op_set: cdktf.booleanToTerraform(struct!.counterOpSet),
    counter_value: cdktf.numberToTerraform(struct!.counterValue),
    decrement_value: cdktf.stringToTerraform(struct!.decrementValue),
    decrement_varname: cdktf.stringToTerraform(struct!.decrementVarname),
    divide_operand1: cdktf.stringToTerraform(struct!.divideOperand1),
    divide_operand2: cdktf.stringToTerraform(struct!.divideOperand2),
    else: cdktf.booleanToTerraform(struct!.else),
    elseif_operand1: cdktf.stringToTerraform(struct!.elseifOperand1),
    elseif_operand2: cdktf.stringToTerraform(struct!.elseifOperand2),
    elseif_operation: cdktf.stringToTerraform(struct!.elseifOperation),
    end: cdktf.booleanToTerraform(struct!.end),
    exit: cdktf.booleanToTerraform(struct!.exit),
    foreach_delimiter: cdktf.stringToTerraform(struct!.foreachDelimiter),
    foreach_iterator: cdktf.stringToTerraform(struct!.foreachIterator),
    foreach_loopvar: cdktf.stringToTerraform(struct!.foreachLoopvar),
    gets: cdktf.stringToTerraform(struct!.fetchs),
    handle_error_type: cdktf.stringToTerraform(struct!.handleErrorType),
    if_goto: cdktf.stringToTerraform(struct!.ifGoto),
    if_keyword: cdktf.stringToTerraform(struct!.ifKeyword),
    if_string_op_1: cdktf.stringToTerraform(struct!.ifStringOp1),
    if_string_op_2: cdktf.stringToTerraform(struct!.ifStringOp2),
    increment_value: cdktf.stringToTerraform(struct!.incrementValue),
    increment_varname: cdktf.stringToTerraform(struct!.incrementVarname),
    info_type_snmp_trap_enterprise_oid: cdktf.stringToTerraform(struct!.infoTypeSnmpTrapEnterpriseOid),
    info_type_snmp_trap_generic_trapnum: cdktf.numberToTerraform(struct!.infoTypeSnmpTrapGenericTrapnum),
    info_type_snmp_trap_specific_trapnum: cdktf.numberToTerraform(struct!.infoTypeSnmpTrapSpecificTrapnum),
    info_type_snmp_trap_trap_oid: cdktf.stringToTerraform(struct!.infoTypeSnmpTrapTrapOid),
    info_type_snmp_trap_trap_var: cdktf.stringToTerraform(struct!.infoTypeSnmpTrapTrapVar),
    info_type_snmp_var: cdktf.stringToTerraform(struct!.infoTypeSnmpVar),
    info_type_snmp_var_oid: cdktf.stringToTerraform(struct!.infoTypeSnmpVarOid),
    info_type_snmp_var_oid_type: cdktf.stringToTerraform(struct!.infoTypeSnmpVarOidType),
    info_type_snmp_var_oid_type_value: cdktf.stringToTerraform(struct!.infoTypeSnmpVarOidTypeValue),
    name: cdktf.stringToTerraform(struct!.name),
    puts: cdktf.stringToTerraform(struct!.puts),
    regexp_string_input: cdktf.stringToTerraform(struct!.regexpStringInput),
    regexp_string_match: cdktf.stringToTerraform(struct!.regexpStringMatch),
    regexp_string_match1: cdktf.stringToTerraform(struct!.regexpStringMatch1),
    regexp_string_match2: cdktf.stringToTerraform(struct!.regexpStringMatch2),
    regexp_string_match3: cdktf.stringToTerraform(struct!.regexpStringMatch3),
    regexp_string_pattern: cdktf.stringToTerraform(struct!.regexpStringPattern),
    reload: cdktf.booleanToTerraform(struct!.reload),
    set_value: cdktf.stringToTerraform(struct!.setValue),
    set_varname: cdktf.stringToTerraform(struct!.setVarname),
    snmp_trap_intdata1: cdktf.numberToTerraform(struct!.snmpTrapIntdata1),
    snmp_trap_intdata2: cdktf.numberToTerraform(struct!.snmpTrapIntdata2),
    snmp_trap_strdata: cdktf.stringToTerraform(struct!.snmpTrapStrdata),
    string_trim: cdktf.stringToTerraform(struct!.stringTrim),
    string_trim_first_string_op_1: cdktf.stringToTerraform(struct!.stringTrimFirstStringOp1),
    string_trim_first_string_op_2: cdktf.stringToTerraform(struct!.stringTrimFirstStringOp2),
    syslog_facility: cdktf.stringToTerraform(struct!.syslogFacility),
    syslog_msg: cdktf.stringToTerraform(struct!.syslogMsg),
    syslog_priority: cdktf.stringToTerraform(struct!.syslogPriority),
    wait: cdktf.numberToTerraform(struct!.wait),
    while_operand1: cdktf.stringToTerraform(struct!.whileOperand1),
    while_operand2: cdktf.stringToTerraform(struct!.whileOperand2),
    while_operation: cdktf.stringToTerraform(struct!.whileOperation),
  }
}


export function eemAppletsActionsToHclTerraform(struct?: EemAppletsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append_value: {
      value: cdktf.stringToHclTerraform(struct!.appendValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    append_varname: {
      value: cdktf.stringToHclTerraform(struct!.appendVarname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    break: {
      value: cdktf.booleanToHclTerraform(struct!.break),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cli_command: {
      value: cdktf.stringToHclTerraform(struct!.cliCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_retrieve_key: {
      value: cdktf.stringToHclTerraform(struct!.contextRetrieveKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_retrieve_variable: {
      value: cdktf.stringToHclTerraform(struct!.contextRetrieveVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_save_key: {
      value: cdktf.stringToHclTerraform(struct!.contextSaveKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_save_variable: {
      value: cdktf.stringToHclTerraform(struct!.contextSaveVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    continue: {
      value: cdktf.booleanToHclTerraform(struct!.continue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    counter_name: {
      value: cdktf.stringToHclTerraform(struct!.counterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counter_op_dec: {
      value: cdktf.booleanToHclTerraform(struct!.counterOpDec),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    counter_op_inc: {
      value: cdktf.booleanToHclTerraform(struct!.counterOpInc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    counter_op_nop: {
      value: cdktf.booleanToHclTerraform(struct!.counterOpNop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    counter_op_set: {
      value: cdktf.booleanToHclTerraform(struct!.counterOpSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    counter_value: {
      value: cdktf.numberToHclTerraform(struct!.counterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decrement_value: {
      value: cdktf.stringToHclTerraform(struct!.decrementValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    decrement_varname: {
      value: cdktf.stringToHclTerraform(struct!.decrementVarname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divide_operand1: {
      value: cdktf.stringToHclTerraform(struct!.divideOperand1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divide_operand2: {
      value: cdktf.stringToHclTerraform(struct!.divideOperand2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    else: {
      value: cdktf.booleanToHclTerraform(struct!.else),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    elseif_operand1: {
      value: cdktf.stringToHclTerraform(struct!.elseifOperand1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elseif_operand2: {
      value: cdktf.stringToHclTerraform(struct!.elseifOperand2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    elseif_operation: {
      value: cdktf.stringToHclTerraform(struct!.elseifOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end: {
      value: cdktf.booleanToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exit: {
      value: cdktf.booleanToHclTerraform(struct!.exit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    foreach_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.foreachDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreach_iterator: {
      value: cdktf.stringToHclTerraform(struct!.foreachIterator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    foreach_loopvar: {
      value: cdktf.stringToHclTerraform(struct!.foreachLoopvar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gets: {
      value: cdktf.stringToHclTerraform(struct!.fetchs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    handle_error_type: {
      value: cdktf.stringToHclTerraform(struct!.handleErrorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_goto: {
      value: cdktf.stringToHclTerraform(struct!.ifGoto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_keyword: {
      value: cdktf.stringToHclTerraform(struct!.ifKeyword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_string_op_1: {
      value: cdktf.stringToHclTerraform(struct!.ifStringOp1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_string_op_2: {
      value: cdktf.stringToHclTerraform(struct!.ifStringOp2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    increment_value: {
      value: cdktf.stringToHclTerraform(struct!.incrementValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    increment_varname: {
      value: cdktf.stringToHclTerraform(struct!.incrementVarname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info_type_snmp_trap_enterprise_oid: {
      value: cdktf.stringToHclTerraform(struct!.infoTypeSnmpTrapEnterpriseOid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info_type_snmp_trap_generic_trapnum: {
      value: cdktf.numberToHclTerraform(struct!.infoTypeSnmpTrapGenericTrapnum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    info_type_snmp_trap_specific_trapnum: {
      value: cdktf.numberToHclTerraform(struct!.infoTypeSnmpTrapSpecificTrapnum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    info_type_snmp_trap_trap_oid: {
      value: cdktf.stringToHclTerraform(struct!.infoTypeSnmpTrapTrapOid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info_type_snmp_trap_trap_var: {
      value: cdktf.stringToHclTerraform(struct!.infoTypeSnmpTrapTrapVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info_type_snmp_var: {
      value: cdktf.stringToHclTerraform(struct!.infoTypeSnmpVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info_type_snmp_var_oid: {
      value: cdktf.stringToHclTerraform(struct!.infoTypeSnmpVarOid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info_type_snmp_var_oid_type: {
      value: cdktf.stringToHclTerraform(struct!.infoTypeSnmpVarOidType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info_type_snmp_var_oid_type_value: {
      value: cdktf.stringToHclTerraform(struct!.infoTypeSnmpVarOidTypeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    puts: {
      value: cdktf.stringToHclTerraform(struct!.puts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp_string_input: {
      value: cdktf.stringToHclTerraform(struct!.regexpStringInput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp_string_match: {
      value: cdktf.stringToHclTerraform(struct!.regexpStringMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp_string_match1: {
      value: cdktf.stringToHclTerraform(struct!.regexpStringMatch1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp_string_match2: {
      value: cdktf.stringToHclTerraform(struct!.regexpStringMatch2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp_string_match3: {
      value: cdktf.stringToHclTerraform(struct!.regexpStringMatch3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp_string_pattern: {
      value: cdktf.stringToHclTerraform(struct!.regexpStringPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reload: {
      value: cdktf.booleanToHclTerraform(struct!.reload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    set_value: {
      value: cdktf.stringToHclTerraform(struct!.setValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_varname: {
      value: cdktf.stringToHclTerraform(struct!.setVarname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_trap_intdata1: {
      value: cdktf.numberToHclTerraform(struct!.snmpTrapIntdata1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snmp_trap_intdata2: {
      value: cdktf.numberToHclTerraform(struct!.snmpTrapIntdata2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snmp_trap_strdata: {
      value: cdktf.stringToHclTerraform(struct!.snmpTrapStrdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_trim: {
      value: cdktf.stringToHclTerraform(struct!.stringTrim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_trim_first_string_op_1: {
      value: cdktf.stringToHclTerraform(struct!.stringTrimFirstStringOp1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_trim_first_string_op_2: {
      value: cdktf.stringToHclTerraform(struct!.stringTrimFirstStringOp2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog_facility: {
      value: cdktf.stringToHclTerraform(struct!.syslogFacility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog_msg: {
      value: cdktf.stringToHclTerraform(struct!.syslogMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog_priority: {
      value: cdktf.stringToHclTerraform(struct!.syslogPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait: {
      value: cdktf.numberToHclTerraform(struct!.wait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    while_operand1: {
      value: cdktf.stringToHclTerraform(struct!.whileOperand1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    while_operand2: {
      value: cdktf.stringToHclTerraform(struct!.whileOperand2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    while_operation: {
      value: cdktf.stringToHclTerraform(struct!.whileOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EemAppletsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EemAppletsActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appendValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendValue = this._appendValue;
    }
    if (this._appendVarname !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendVarname = this._appendVarname;
    }
    if (this._break !== undefined) {
      hasAnyValues = true;
      internalValueResult.break = this._break;
    }
    if (this._cliCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliCommand = this._cliCommand;
    }
    if (this._contextRetrieveKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextRetrieveKey = this._contextRetrieveKey;
    }
    if (this._contextRetrieveVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextRetrieveVariable = this._contextRetrieveVariable;
    }
    if (this._contextSaveKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextSaveKey = this._contextSaveKey;
    }
    if (this._contextSaveVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextSaveVariable = this._contextSaveVariable;
    }
    if (this._continue !== undefined) {
      hasAnyValues = true;
      internalValueResult.continue = this._continue;
    }
    if (this._counterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterName = this._counterName;
    }
    if (this._counterOpDec !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterOpDec = this._counterOpDec;
    }
    if (this._counterOpInc !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterOpInc = this._counterOpInc;
    }
    if (this._counterOpNop !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterOpNop = this._counterOpNop;
    }
    if (this._counterOpSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterOpSet = this._counterOpSet;
    }
    if (this._counterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterValue = this._counterValue;
    }
    if (this._decrementValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decrementValue = this._decrementValue;
    }
    if (this._decrementVarname !== undefined) {
      hasAnyValues = true;
      internalValueResult.decrementVarname = this._decrementVarname;
    }
    if (this._divideOperand1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.divideOperand1 = this._divideOperand1;
    }
    if (this._divideOperand2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.divideOperand2 = this._divideOperand2;
    }
    if (this._else !== undefined) {
      hasAnyValues = true;
      internalValueResult.else = this._else;
    }
    if (this._elseifOperand1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.elseifOperand1 = this._elseifOperand1;
    }
    if (this._elseifOperand2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.elseifOperand2 = this._elseifOperand2;
    }
    if (this._elseifOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.elseifOperation = this._elseifOperation;
    }
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._exit !== undefined) {
      hasAnyValues = true;
      internalValueResult.exit = this._exit;
    }
    if (this._foreachDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreachDelimiter = this._foreachDelimiter;
    }
    if (this._foreachIterator !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreachIterator = this._foreachIterator;
    }
    if (this._foreachLoopvar !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreachLoopvar = this._foreachLoopvar;
    }
    if (this._gets !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchs = this._gets;
    }
    if (this._handleErrorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.handleErrorType = this._handleErrorType;
    }
    if (this._ifGoto !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifGoto = this._ifGoto;
    }
    if (this._ifKeyword !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifKeyword = this._ifKeyword;
    }
    if (this._ifStringOp1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifStringOp1 = this._ifStringOp1;
    }
    if (this._ifStringOp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifStringOp2 = this._ifStringOp2;
    }
    if (this._incrementValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incrementValue = this._incrementValue;
    }
    if (this._incrementVarname !== undefined) {
      hasAnyValues = true;
      internalValueResult.incrementVarname = this._incrementVarname;
    }
    if (this._infoTypeSnmpTrapEnterpriseOid !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypeSnmpTrapEnterpriseOid = this._infoTypeSnmpTrapEnterpriseOid;
    }
    if (this._infoTypeSnmpTrapGenericTrapnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypeSnmpTrapGenericTrapnum = this._infoTypeSnmpTrapGenericTrapnum;
    }
    if (this._infoTypeSnmpTrapSpecificTrapnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypeSnmpTrapSpecificTrapnum = this._infoTypeSnmpTrapSpecificTrapnum;
    }
    if (this._infoTypeSnmpTrapTrapOid !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypeSnmpTrapTrapOid = this._infoTypeSnmpTrapTrapOid;
    }
    if (this._infoTypeSnmpTrapTrapVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypeSnmpTrapTrapVar = this._infoTypeSnmpTrapTrapVar;
    }
    if (this._infoTypeSnmpVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypeSnmpVar = this._infoTypeSnmpVar;
    }
    if (this._infoTypeSnmpVarOid !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypeSnmpVarOid = this._infoTypeSnmpVarOid;
    }
    if (this._infoTypeSnmpVarOidType !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypeSnmpVarOidType = this._infoTypeSnmpVarOidType;
    }
    if (this._infoTypeSnmpVarOidTypeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypeSnmpVarOidTypeValue = this._infoTypeSnmpVarOidTypeValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._puts !== undefined) {
      hasAnyValues = true;
      internalValueResult.puts = this._puts;
    }
    if (this._regexpStringInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexpStringInput = this._regexpStringInput;
    }
    if (this._regexpStringMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexpStringMatch = this._regexpStringMatch;
    }
    if (this._regexpStringMatch1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexpStringMatch1 = this._regexpStringMatch1;
    }
    if (this._regexpStringMatch2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexpStringMatch2 = this._regexpStringMatch2;
    }
    if (this._regexpStringMatch3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexpStringMatch3 = this._regexpStringMatch3;
    }
    if (this._regexpStringPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexpStringPattern = this._regexpStringPattern;
    }
    if (this._reload !== undefined) {
      hasAnyValues = true;
      internalValueResult.reload = this._reload;
    }
    if (this._setValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValue = this._setValue;
    }
    if (this._setVarname !== undefined) {
      hasAnyValues = true;
      internalValueResult.setVarname = this._setVarname;
    }
    if (this._snmpTrapIntdata1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpTrapIntdata1 = this._snmpTrapIntdata1;
    }
    if (this._snmpTrapIntdata2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpTrapIntdata2 = this._snmpTrapIntdata2;
    }
    if (this._snmpTrapStrdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpTrapStrdata = this._snmpTrapStrdata;
    }
    if (this._stringTrim !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringTrim = this._stringTrim;
    }
    if (this._stringTrimFirstStringOp1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringTrimFirstStringOp1 = this._stringTrimFirstStringOp1;
    }
    if (this._stringTrimFirstStringOp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringTrimFirstStringOp2 = this._stringTrimFirstStringOp2;
    }
    if (this._syslogFacility !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogFacility = this._syslogFacility;
    }
    if (this._syslogMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogMsg = this._syslogMsg;
    }
    if (this._syslogPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogPriority = this._syslogPriority;
    }
    if (this._wait !== undefined) {
      hasAnyValues = true;
      internalValueResult.wait = this._wait;
    }
    if (this._whileOperand1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.whileOperand1 = this._whileOperand1;
    }
    if (this._whileOperand2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.whileOperand2 = this._whileOperand2;
    }
    if (this._whileOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.whileOperation = this._whileOperation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EemAppletsActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appendValue = undefined;
      this._appendVarname = undefined;
      this._break = undefined;
      this._cliCommand = undefined;
      this._contextRetrieveKey = undefined;
      this._contextRetrieveVariable = undefined;
      this._contextSaveKey = undefined;
      this._contextSaveVariable = undefined;
      this._continue = undefined;
      this._counterName = undefined;
      this._counterOpDec = undefined;
      this._counterOpInc = undefined;
      this._counterOpNop = undefined;
      this._counterOpSet = undefined;
      this._counterValue = undefined;
      this._decrementValue = undefined;
      this._decrementVarname = undefined;
      this._divideOperand1 = undefined;
      this._divideOperand2 = undefined;
      this._else = undefined;
      this._elseifOperand1 = undefined;
      this._elseifOperand2 = undefined;
      this._elseifOperation = undefined;
      this._end = undefined;
      this._exit = undefined;
      this._foreachDelimiter = undefined;
      this._foreachIterator = undefined;
      this._foreachLoopvar = undefined;
      this._gets = undefined;
      this._handleErrorType = undefined;
      this._ifGoto = undefined;
      this._ifKeyword = undefined;
      this._ifStringOp1 = undefined;
      this._ifStringOp2 = undefined;
      this._incrementValue = undefined;
      this._incrementVarname = undefined;
      this._infoTypeSnmpTrapEnterpriseOid = undefined;
      this._infoTypeSnmpTrapGenericTrapnum = undefined;
      this._infoTypeSnmpTrapSpecificTrapnum = undefined;
      this._infoTypeSnmpTrapTrapOid = undefined;
      this._infoTypeSnmpTrapTrapVar = undefined;
      this._infoTypeSnmpVar = undefined;
      this._infoTypeSnmpVarOid = undefined;
      this._infoTypeSnmpVarOidType = undefined;
      this._infoTypeSnmpVarOidTypeValue = undefined;
      this._name = undefined;
      this._puts = undefined;
      this._regexpStringInput = undefined;
      this._regexpStringMatch = undefined;
      this._regexpStringMatch1 = undefined;
      this._regexpStringMatch2 = undefined;
      this._regexpStringMatch3 = undefined;
      this._regexpStringPattern = undefined;
      this._reload = undefined;
      this._setValue = undefined;
      this._setVarname = undefined;
      this._snmpTrapIntdata1 = undefined;
      this._snmpTrapIntdata2 = undefined;
      this._snmpTrapStrdata = undefined;
      this._stringTrim = undefined;
      this._stringTrimFirstStringOp1 = undefined;
      this._stringTrimFirstStringOp2 = undefined;
      this._syslogFacility = undefined;
      this._syslogMsg = undefined;
      this._syslogPriority = undefined;
      this._wait = undefined;
      this._whileOperand1 = undefined;
      this._whileOperand2 = undefined;
      this._whileOperation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appendValue = value.appendValue;
      this._appendVarname = value.appendVarname;
      this._break = value.break;
      this._cliCommand = value.cliCommand;
      this._contextRetrieveKey = value.contextRetrieveKey;
      this._contextRetrieveVariable = value.contextRetrieveVariable;
      this._contextSaveKey = value.contextSaveKey;
      this._contextSaveVariable = value.contextSaveVariable;
      this._continue = value.continue;
      this._counterName = value.counterName;
      this._counterOpDec = value.counterOpDec;
      this._counterOpInc = value.counterOpInc;
      this._counterOpNop = value.counterOpNop;
      this._counterOpSet = value.counterOpSet;
      this._counterValue = value.counterValue;
      this._decrementValue = value.decrementValue;
      this._decrementVarname = value.decrementVarname;
      this._divideOperand1 = value.divideOperand1;
      this._divideOperand2 = value.divideOperand2;
      this._else = value.else;
      this._elseifOperand1 = value.elseifOperand1;
      this._elseifOperand2 = value.elseifOperand2;
      this._elseifOperation = value.elseifOperation;
      this._end = value.end;
      this._exit = value.exit;
      this._foreachDelimiter = value.foreachDelimiter;
      this._foreachIterator = value.foreachIterator;
      this._foreachLoopvar = value.foreachLoopvar;
      this._gets = value.fetchs;
      this._handleErrorType = value.handleErrorType;
      this._ifGoto = value.ifGoto;
      this._ifKeyword = value.ifKeyword;
      this._ifStringOp1 = value.ifStringOp1;
      this._ifStringOp2 = value.ifStringOp2;
      this._incrementValue = value.incrementValue;
      this._incrementVarname = value.incrementVarname;
      this._infoTypeSnmpTrapEnterpriseOid = value.infoTypeSnmpTrapEnterpriseOid;
      this._infoTypeSnmpTrapGenericTrapnum = value.infoTypeSnmpTrapGenericTrapnum;
      this._infoTypeSnmpTrapSpecificTrapnum = value.infoTypeSnmpTrapSpecificTrapnum;
      this._infoTypeSnmpTrapTrapOid = value.infoTypeSnmpTrapTrapOid;
      this._infoTypeSnmpTrapTrapVar = value.infoTypeSnmpTrapTrapVar;
      this._infoTypeSnmpVar = value.infoTypeSnmpVar;
      this._infoTypeSnmpVarOid = value.infoTypeSnmpVarOid;
      this._infoTypeSnmpVarOidType = value.infoTypeSnmpVarOidType;
      this._infoTypeSnmpVarOidTypeValue = value.infoTypeSnmpVarOidTypeValue;
      this._name = value.name;
      this._puts = value.puts;
      this._regexpStringInput = value.regexpStringInput;
      this._regexpStringMatch = value.regexpStringMatch;
      this._regexpStringMatch1 = value.regexpStringMatch1;
      this._regexpStringMatch2 = value.regexpStringMatch2;
      this._regexpStringMatch3 = value.regexpStringMatch3;
      this._regexpStringPattern = value.regexpStringPattern;
      this._reload = value.reload;
      this._setValue = value.setValue;
      this._setVarname = value.setVarname;
      this._snmpTrapIntdata1 = value.snmpTrapIntdata1;
      this._snmpTrapIntdata2 = value.snmpTrapIntdata2;
      this._snmpTrapStrdata = value.snmpTrapStrdata;
      this._stringTrim = value.stringTrim;
      this._stringTrimFirstStringOp1 = value.stringTrimFirstStringOp1;
      this._stringTrimFirstStringOp2 = value.stringTrimFirstStringOp2;
      this._syslogFacility = value.syslogFacility;
      this._syslogMsg = value.syslogMsg;
      this._syslogPriority = value.syslogPriority;
      this._wait = value.wait;
      this._whileOperand1 = value.whileOperand1;
      this._whileOperand2 = value.whileOperand2;
      this._whileOperation = value.whileOperation;
    }
  }

  // append_value - computed: false, optional: true, required: false
  private _appendValue?: string; 
  public get appendValue() {
    return this.getStringAttribute('append_value');
  }
  public set appendValue(value: string) {
    this._appendValue = value;
  }
  public resetAppendValue() {
    this._appendValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendValueInput() {
    return this._appendValue;
  }

  // append_varname - computed: false, optional: true, required: false
  private _appendVarname?: string; 
  public get appendVarname() {
    return this.getStringAttribute('append_varname');
  }
  public set appendVarname(value: string) {
    this._appendVarname = value;
  }
  public resetAppendVarname() {
    this._appendVarname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendVarnameInput() {
    return this._appendVarname;
  }

  // break - computed: false, optional: true, required: false
  private _break?: boolean | cdktf.IResolvable; 
  public get break() {
    return this.getBooleanAttribute('break');
  }
  public set break(value: boolean | cdktf.IResolvable) {
    this._break = value;
  }
  public resetBreak() {
    this._break = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakInput() {
    return this._break;
  }

  // cli_command - computed: false, optional: true, required: false
  private _cliCommand?: string; 
  public get cliCommand() {
    return this.getStringAttribute('cli_command');
  }
  public set cliCommand(value: string) {
    this._cliCommand = value;
  }
  public resetCliCommand() {
    this._cliCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliCommandInput() {
    return this._cliCommand;
  }

  // context_retrieve_key - computed: false, optional: true, required: false
  private _contextRetrieveKey?: string; 
  public get contextRetrieveKey() {
    return this.getStringAttribute('context_retrieve_key');
  }
  public set contextRetrieveKey(value: string) {
    this._contextRetrieveKey = value;
  }
  public resetContextRetrieveKey() {
    this._contextRetrieveKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextRetrieveKeyInput() {
    return this._contextRetrieveKey;
  }

  // context_retrieve_variable - computed: false, optional: true, required: false
  private _contextRetrieveVariable?: string; 
  public get contextRetrieveVariable() {
    return this.getStringAttribute('context_retrieve_variable');
  }
  public set contextRetrieveVariable(value: string) {
    this._contextRetrieveVariable = value;
  }
  public resetContextRetrieveVariable() {
    this._contextRetrieveVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextRetrieveVariableInput() {
    return this._contextRetrieveVariable;
  }

  // context_save_key - computed: false, optional: true, required: false
  private _contextSaveKey?: string; 
  public get contextSaveKey() {
    return this.getStringAttribute('context_save_key');
  }
  public set contextSaveKey(value: string) {
    this._contextSaveKey = value;
  }
  public resetContextSaveKey() {
    this._contextSaveKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextSaveKeyInput() {
    return this._contextSaveKey;
  }

  // context_save_variable - computed: false, optional: true, required: false
  private _contextSaveVariable?: string; 
  public get contextSaveVariable() {
    return this.getStringAttribute('context_save_variable');
  }
  public set contextSaveVariable(value: string) {
    this._contextSaveVariable = value;
  }
  public resetContextSaveVariable() {
    this._contextSaveVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextSaveVariableInput() {
    return this._contextSaveVariable;
  }

  // continue - computed: false, optional: true, required: false
  private _continue?: boolean | cdktf.IResolvable; 
  public get continue() {
    return this.getBooleanAttribute('continue');
  }
  public set continue(value: boolean | cdktf.IResolvable) {
    this._continue = value;
  }
  public resetContinue() {
    this._continue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueInput() {
    return this._continue;
  }

  // counter_name - computed: false, optional: true, required: false
  private _counterName?: string; 
  public get counterName() {
    return this.getStringAttribute('counter_name');
  }
  public set counterName(value: string) {
    this._counterName = value;
  }
  public resetCounterName() {
    this._counterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterNameInput() {
    return this._counterName;
  }

  // counter_op_dec - computed: false, optional: true, required: false
  private _counterOpDec?: boolean | cdktf.IResolvable; 
  public get counterOpDec() {
    return this.getBooleanAttribute('counter_op_dec');
  }
  public set counterOpDec(value: boolean | cdktf.IResolvable) {
    this._counterOpDec = value;
  }
  public resetCounterOpDec() {
    this._counterOpDec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterOpDecInput() {
    return this._counterOpDec;
  }

  // counter_op_inc - computed: false, optional: true, required: false
  private _counterOpInc?: boolean | cdktf.IResolvable; 
  public get counterOpInc() {
    return this.getBooleanAttribute('counter_op_inc');
  }
  public set counterOpInc(value: boolean | cdktf.IResolvable) {
    this._counterOpInc = value;
  }
  public resetCounterOpInc() {
    this._counterOpInc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterOpIncInput() {
    return this._counterOpInc;
  }

  // counter_op_nop - computed: false, optional: true, required: false
  private _counterOpNop?: boolean | cdktf.IResolvable; 
  public get counterOpNop() {
    return this.getBooleanAttribute('counter_op_nop');
  }
  public set counterOpNop(value: boolean | cdktf.IResolvable) {
    this._counterOpNop = value;
  }
  public resetCounterOpNop() {
    this._counterOpNop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterOpNopInput() {
    return this._counterOpNop;
  }

  // counter_op_set - computed: false, optional: true, required: false
  private _counterOpSet?: boolean | cdktf.IResolvable; 
  public get counterOpSet() {
    return this.getBooleanAttribute('counter_op_set');
  }
  public set counterOpSet(value: boolean | cdktf.IResolvable) {
    this._counterOpSet = value;
  }
  public resetCounterOpSet() {
    this._counterOpSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterOpSetInput() {
    return this._counterOpSet;
  }

  // counter_value - computed: false, optional: true, required: false
  private _counterValue?: number; 
  public get counterValue() {
    return this.getNumberAttribute('counter_value');
  }
  public set counterValue(value: number) {
    this._counterValue = value;
  }
  public resetCounterValue() {
    this._counterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterValueInput() {
    return this._counterValue;
  }

  // decrement_value - computed: false, optional: true, required: false
  private _decrementValue?: string; 
  public get decrementValue() {
    return this.getStringAttribute('decrement_value');
  }
  public set decrementValue(value: string) {
    this._decrementValue = value;
  }
  public resetDecrementValue() {
    this._decrementValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decrementValueInput() {
    return this._decrementValue;
  }

  // decrement_varname - computed: false, optional: true, required: false
  private _decrementVarname?: string; 
  public get decrementVarname() {
    return this.getStringAttribute('decrement_varname');
  }
  public set decrementVarname(value: string) {
    this._decrementVarname = value;
  }
  public resetDecrementVarname() {
    this._decrementVarname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decrementVarnameInput() {
    return this._decrementVarname;
  }

  // divide_operand1 - computed: false, optional: true, required: false
  private _divideOperand1?: string; 
  public get divideOperand1() {
    return this.getStringAttribute('divide_operand1');
  }
  public set divideOperand1(value: string) {
    this._divideOperand1 = value;
  }
  public resetDivideOperand1() {
    this._divideOperand1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divideOperand1Input() {
    return this._divideOperand1;
  }

  // divide_operand2 - computed: false, optional: true, required: false
  private _divideOperand2?: string; 
  public get divideOperand2() {
    return this.getStringAttribute('divide_operand2');
  }
  public set divideOperand2(value: string) {
    this._divideOperand2 = value;
  }
  public resetDivideOperand2() {
    this._divideOperand2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divideOperand2Input() {
    return this._divideOperand2;
  }

  // else - computed: false, optional: true, required: false
  private _else?: boolean | cdktf.IResolvable; 
  public get else() {
    return this.getBooleanAttribute('else');
  }
  public set else(value: boolean | cdktf.IResolvable) {
    this._else = value;
  }
  public resetElse() {
    this._else = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elseInput() {
    return this._else;
  }

  // elseif_operand1 - computed: false, optional: true, required: false
  private _elseifOperand1?: string; 
  public get elseifOperand1() {
    return this.getStringAttribute('elseif_operand1');
  }
  public set elseifOperand1(value: string) {
    this._elseifOperand1 = value;
  }
  public resetElseifOperand1() {
    this._elseifOperand1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elseifOperand1Input() {
    return this._elseifOperand1;
  }

  // elseif_operand2 - computed: false, optional: true, required: false
  private _elseifOperand2?: string; 
  public get elseifOperand2() {
    return this.getStringAttribute('elseif_operand2');
  }
  public set elseifOperand2(value: string) {
    this._elseifOperand2 = value;
  }
  public resetElseifOperand2() {
    this._elseifOperand2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elseifOperand2Input() {
    return this._elseifOperand2;
  }

  // elseif_operation - computed: false, optional: true, required: false
  private _elseifOperation?: string; 
  public get elseifOperation() {
    return this.getStringAttribute('elseif_operation');
  }
  public set elseifOperation(value: string) {
    this._elseifOperation = value;
  }
  public resetElseifOperation() {
    this._elseifOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elseifOperationInput() {
    return this._elseifOperation;
  }

  // end - computed: false, optional: true, required: false
  private _end?: boolean | cdktf.IResolvable; 
  public get end() {
    return this.getBooleanAttribute('end');
  }
  public set end(value: boolean | cdktf.IResolvable) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // exit - computed: false, optional: true, required: false
  private _exit?: boolean | cdktf.IResolvable; 
  public get exit() {
    return this.getBooleanAttribute('exit');
  }
  public set exit(value: boolean | cdktf.IResolvable) {
    this._exit = value;
  }
  public resetExit() {
    this._exit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exitInput() {
    return this._exit;
  }

  // foreach_delimiter - computed: false, optional: true, required: false
  private _foreachDelimiter?: string; 
  public get foreachDelimiter() {
    return this.getStringAttribute('foreach_delimiter');
  }
  public set foreachDelimiter(value: string) {
    this._foreachDelimiter = value;
  }
  public resetForeachDelimiter() {
    this._foreachDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreachDelimiterInput() {
    return this._foreachDelimiter;
  }

  // foreach_iterator - computed: false, optional: true, required: false
  private _foreachIterator?: string; 
  public get foreachIterator() {
    return this.getStringAttribute('foreach_iterator');
  }
  public set foreachIterator(value: string) {
    this._foreachIterator = value;
  }
  public resetForeachIterator() {
    this._foreachIterator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreachIteratorInput() {
    return this._foreachIterator;
  }

  // foreach_loopvar - computed: false, optional: true, required: false
  private _foreachLoopvar?: string; 
  public get foreachLoopvar() {
    return this.getStringAttribute('foreach_loopvar');
  }
  public set foreachLoopvar(value: string) {
    this._foreachLoopvar = value;
  }
  public resetForeachLoopvar() {
    this._foreachLoopvar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreachLoopvarInput() {
    return this._foreachLoopvar;
  }

  // gets - computed: false, optional: true, required: false
  private _gets?: string; 
  public get fetchs() {
    return this.getStringAttribute('gets');
  }
  public set fetchs(value: string) {
    this._gets = value;
  }
  public resetFetchs() {
    this._gets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchsInput() {
    return this._gets;
  }

  // handle_error_type - computed: false, optional: true, required: false
  private _handleErrorType?: string; 
  public get handleErrorType() {
    return this.getStringAttribute('handle_error_type');
  }
  public set handleErrorType(value: string) {
    this._handleErrorType = value;
  }
  public resetHandleErrorType() {
    this._handleErrorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handleErrorTypeInput() {
    return this._handleErrorType;
  }

  // if_goto - computed: false, optional: true, required: false
  private _ifGoto?: string; 
  public get ifGoto() {
    return this.getStringAttribute('if_goto');
  }
  public set ifGoto(value: string) {
    this._ifGoto = value;
  }
  public resetIfGoto() {
    this._ifGoto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifGotoInput() {
    return this._ifGoto;
  }

  // if_keyword - computed: false, optional: true, required: false
  private _ifKeyword?: string; 
  public get ifKeyword() {
    return this.getStringAttribute('if_keyword');
  }
  public set ifKeyword(value: string) {
    this._ifKeyword = value;
  }
  public resetIfKeyword() {
    this._ifKeyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifKeywordInput() {
    return this._ifKeyword;
  }

  // if_string_op_1 - computed: false, optional: true, required: false
  private _ifStringOp1?: string; 
  public get ifStringOp1() {
    return this.getStringAttribute('if_string_op_1');
  }
  public set ifStringOp1(value: string) {
    this._ifStringOp1 = value;
  }
  public resetIfStringOp1() {
    this._ifStringOp1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifStringOp1Input() {
    return this._ifStringOp1;
  }

  // if_string_op_2 - computed: false, optional: true, required: false
  private _ifStringOp2?: string; 
  public get ifStringOp2() {
    return this.getStringAttribute('if_string_op_2');
  }
  public set ifStringOp2(value: string) {
    this._ifStringOp2 = value;
  }
  public resetIfStringOp2() {
    this._ifStringOp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifStringOp2Input() {
    return this._ifStringOp2;
  }

  // increment_value - computed: false, optional: true, required: false
  private _incrementValue?: string; 
  public get incrementValue() {
    return this.getStringAttribute('increment_value');
  }
  public set incrementValue(value: string) {
    this._incrementValue = value;
  }
  public resetIncrementValue() {
    this._incrementValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementValueInput() {
    return this._incrementValue;
  }

  // increment_varname - computed: false, optional: true, required: false
  private _incrementVarname?: string; 
  public get incrementVarname() {
    return this.getStringAttribute('increment_varname');
  }
  public set incrementVarname(value: string) {
    this._incrementVarname = value;
  }
  public resetIncrementVarname() {
    this._incrementVarname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementVarnameInput() {
    return this._incrementVarname;
  }

  // info_type_snmp_trap_enterprise_oid - computed: false, optional: true, required: false
  private _infoTypeSnmpTrapEnterpriseOid?: string; 
  public get infoTypeSnmpTrapEnterpriseOid() {
    return this.getStringAttribute('info_type_snmp_trap_enterprise_oid');
  }
  public set infoTypeSnmpTrapEnterpriseOid(value: string) {
    this._infoTypeSnmpTrapEnterpriseOid = value;
  }
  public resetInfoTypeSnmpTrapEnterpriseOid() {
    this._infoTypeSnmpTrapEnterpriseOid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeSnmpTrapEnterpriseOidInput() {
    return this._infoTypeSnmpTrapEnterpriseOid;
  }

  // info_type_snmp_trap_generic_trapnum - computed: false, optional: true, required: false
  private _infoTypeSnmpTrapGenericTrapnum?: number; 
  public get infoTypeSnmpTrapGenericTrapnum() {
    return this.getNumberAttribute('info_type_snmp_trap_generic_trapnum');
  }
  public set infoTypeSnmpTrapGenericTrapnum(value: number) {
    this._infoTypeSnmpTrapGenericTrapnum = value;
  }
  public resetInfoTypeSnmpTrapGenericTrapnum() {
    this._infoTypeSnmpTrapGenericTrapnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeSnmpTrapGenericTrapnumInput() {
    return this._infoTypeSnmpTrapGenericTrapnum;
  }

  // info_type_snmp_trap_specific_trapnum - computed: false, optional: true, required: false
  private _infoTypeSnmpTrapSpecificTrapnum?: number; 
  public get infoTypeSnmpTrapSpecificTrapnum() {
    return this.getNumberAttribute('info_type_snmp_trap_specific_trapnum');
  }
  public set infoTypeSnmpTrapSpecificTrapnum(value: number) {
    this._infoTypeSnmpTrapSpecificTrapnum = value;
  }
  public resetInfoTypeSnmpTrapSpecificTrapnum() {
    this._infoTypeSnmpTrapSpecificTrapnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeSnmpTrapSpecificTrapnumInput() {
    return this._infoTypeSnmpTrapSpecificTrapnum;
  }

  // info_type_snmp_trap_trap_oid - computed: false, optional: true, required: false
  private _infoTypeSnmpTrapTrapOid?: string; 
  public get infoTypeSnmpTrapTrapOid() {
    return this.getStringAttribute('info_type_snmp_trap_trap_oid');
  }
  public set infoTypeSnmpTrapTrapOid(value: string) {
    this._infoTypeSnmpTrapTrapOid = value;
  }
  public resetInfoTypeSnmpTrapTrapOid() {
    this._infoTypeSnmpTrapTrapOid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeSnmpTrapTrapOidInput() {
    return this._infoTypeSnmpTrapTrapOid;
  }

  // info_type_snmp_trap_trap_var - computed: false, optional: true, required: false
  private _infoTypeSnmpTrapTrapVar?: string; 
  public get infoTypeSnmpTrapTrapVar() {
    return this.getStringAttribute('info_type_snmp_trap_trap_var');
  }
  public set infoTypeSnmpTrapTrapVar(value: string) {
    this._infoTypeSnmpTrapTrapVar = value;
  }
  public resetInfoTypeSnmpTrapTrapVar() {
    this._infoTypeSnmpTrapTrapVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeSnmpTrapTrapVarInput() {
    return this._infoTypeSnmpTrapTrapVar;
  }

  // info_type_snmp_var - computed: false, optional: true, required: false
  private _infoTypeSnmpVar?: string; 
  public get infoTypeSnmpVar() {
    return this.getStringAttribute('info_type_snmp_var');
  }
  public set infoTypeSnmpVar(value: string) {
    this._infoTypeSnmpVar = value;
  }
  public resetInfoTypeSnmpVar() {
    this._infoTypeSnmpVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeSnmpVarInput() {
    return this._infoTypeSnmpVar;
  }

  // info_type_snmp_var_oid - computed: false, optional: true, required: false
  private _infoTypeSnmpVarOid?: string; 
  public get infoTypeSnmpVarOid() {
    return this.getStringAttribute('info_type_snmp_var_oid');
  }
  public set infoTypeSnmpVarOid(value: string) {
    this._infoTypeSnmpVarOid = value;
  }
  public resetInfoTypeSnmpVarOid() {
    this._infoTypeSnmpVarOid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeSnmpVarOidInput() {
    return this._infoTypeSnmpVarOid;
  }

  // info_type_snmp_var_oid_type - computed: false, optional: true, required: false
  private _infoTypeSnmpVarOidType?: string; 
  public get infoTypeSnmpVarOidType() {
    return this.getStringAttribute('info_type_snmp_var_oid_type');
  }
  public set infoTypeSnmpVarOidType(value: string) {
    this._infoTypeSnmpVarOidType = value;
  }
  public resetInfoTypeSnmpVarOidType() {
    this._infoTypeSnmpVarOidType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeSnmpVarOidTypeInput() {
    return this._infoTypeSnmpVarOidType;
  }

  // info_type_snmp_var_oid_type_value - computed: false, optional: true, required: false
  private _infoTypeSnmpVarOidTypeValue?: string; 
  public get infoTypeSnmpVarOidTypeValue() {
    return this.getStringAttribute('info_type_snmp_var_oid_type_value');
  }
  public set infoTypeSnmpVarOidTypeValue(value: string) {
    this._infoTypeSnmpVarOidTypeValue = value;
  }
  public resetInfoTypeSnmpVarOidTypeValue() {
    this._infoTypeSnmpVarOidTypeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeSnmpVarOidTypeValueInput() {
    return this._infoTypeSnmpVarOidTypeValue;
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

  // puts - computed: false, optional: true, required: false
  private _puts?: string; 
  public get puts() {
    return this.getStringAttribute('puts');
  }
  public set puts(value: string) {
    this._puts = value;
  }
  public resetPuts() {
    this._puts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putsInput() {
    return this._puts;
  }

  // regexp_string_input - computed: false, optional: true, required: false
  private _regexpStringInput?: string; 
  public get regexpStringInput() {
    return this.getStringAttribute('regexp_string_input');
  }
  public set regexpStringInput(value: string) {
    this._regexpStringInput = value;
  }
  public resetRegexpStringInput() {
    this._regexpStringInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpStringInputInput() {
    return this._regexpStringInput;
  }

  // regexp_string_match - computed: false, optional: true, required: false
  private _regexpStringMatch?: string; 
  public get regexpStringMatch() {
    return this.getStringAttribute('regexp_string_match');
  }
  public set regexpStringMatch(value: string) {
    this._regexpStringMatch = value;
  }
  public resetRegexpStringMatch() {
    this._regexpStringMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpStringMatchInput() {
    return this._regexpStringMatch;
  }

  // regexp_string_match1 - computed: false, optional: true, required: false
  private _regexpStringMatch1?: string; 
  public get regexpStringMatch1() {
    return this.getStringAttribute('regexp_string_match1');
  }
  public set regexpStringMatch1(value: string) {
    this._regexpStringMatch1 = value;
  }
  public resetRegexpStringMatch1() {
    this._regexpStringMatch1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpStringMatch1Input() {
    return this._regexpStringMatch1;
  }

  // regexp_string_match2 - computed: false, optional: true, required: false
  private _regexpStringMatch2?: string; 
  public get regexpStringMatch2() {
    return this.getStringAttribute('regexp_string_match2');
  }
  public set regexpStringMatch2(value: string) {
    this._regexpStringMatch2 = value;
  }
  public resetRegexpStringMatch2() {
    this._regexpStringMatch2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpStringMatch2Input() {
    return this._regexpStringMatch2;
  }

  // regexp_string_match3 - computed: false, optional: true, required: false
  private _regexpStringMatch3?: string; 
  public get regexpStringMatch3() {
    return this.getStringAttribute('regexp_string_match3');
  }
  public set regexpStringMatch3(value: string) {
    this._regexpStringMatch3 = value;
  }
  public resetRegexpStringMatch3() {
    this._regexpStringMatch3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpStringMatch3Input() {
    return this._regexpStringMatch3;
  }

  // regexp_string_pattern - computed: false, optional: true, required: false
  private _regexpStringPattern?: string; 
  public get regexpStringPattern() {
    return this.getStringAttribute('regexp_string_pattern');
  }
  public set regexpStringPattern(value: string) {
    this._regexpStringPattern = value;
  }
  public resetRegexpStringPattern() {
    this._regexpStringPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpStringPatternInput() {
    return this._regexpStringPattern;
  }

  // reload - computed: false, optional: true, required: false
  private _reload?: boolean | cdktf.IResolvable; 
  public get reload() {
    return this.getBooleanAttribute('reload');
  }
  public set reload(value: boolean | cdktf.IResolvable) {
    this._reload = value;
  }
  public resetReload() {
    this._reload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reloadInput() {
    return this._reload;
  }

  // set_value - computed: false, optional: true, required: false
  private _setValue?: string; 
  public get setValue() {
    return this.getStringAttribute('set_value');
  }
  public set setValue(value: string) {
    this._setValue = value;
  }
  public resetSetValue() {
    this._setValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValueInput() {
    return this._setValue;
  }

  // set_varname - computed: false, optional: true, required: false
  private _setVarname?: string; 
  public get setVarname() {
    return this.getStringAttribute('set_varname');
  }
  public set setVarname(value: string) {
    this._setVarname = value;
  }
  public resetSetVarname() {
    this._setVarname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setVarnameInput() {
    return this._setVarname;
  }

  // snmp_trap_intdata1 - computed: false, optional: true, required: false
  private _snmpTrapIntdata1?: number; 
  public get snmpTrapIntdata1() {
    return this.getNumberAttribute('snmp_trap_intdata1');
  }
  public set snmpTrapIntdata1(value: number) {
    this._snmpTrapIntdata1 = value;
  }
  public resetSnmpTrapIntdata1() {
    this._snmpTrapIntdata1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpTrapIntdata1Input() {
    return this._snmpTrapIntdata1;
  }

  // snmp_trap_intdata2 - computed: false, optional: true, required: false
  private _snmpTrapIntdata2?: number; 
  public get snmpTrapIntdata2() {
    return this.getNumberAttribute('snmp_trap_intdata2');
  }
  public set snmpTrapIntdata2(value: number) {
    this._snmpTrapIntdata2 = value;
  }
  public resetSnmpTrapIntdata2() {
    this._snmpTrapIntdata2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpTrapIntdata2Input() {
    return this._snmpTrapIntdata2;
  }

  // snmp_trap_strdata - computed: false, optional: true, required: false
  private _snmpTrapStrdata?: string; 
  public get snmpTrapStrdata() {
    return this.getStringAttribute('snmp_trap_strdata');
  }
  public set snmpTrapStrdata(value: string) {
    this._snmpTrapStrdata = value;
  }
  public resetSnmpTrapStrdata() {
    this._snmpTrapStrdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpTrapStrdataInput() {
    return this._snmpTrapStrdata;
  }

  // string_trim - computed: false, optional: true, required: false
  private _stringTrim?: string; 
  public get stringTrim() {
    return this.getStringAttribute('string_trim');
  }
  public set stringTrim(value: string) {
    this._stringTrim = value;
  }
  public resetStringTrim() {
    this._stringTrim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringTrimInput() {
    return this._stringTrim;
  }

  // string_trim_first_string_op_1 - computed: false, optional: true, required: false
  private _stringTrimFirstStringOp1?: string; 
  public get stringTrimFirstStringOp1() {
    return this.getStringAttribute('string_trim_first_string_op_1');
  }
  public set stringTrimFirstStringOp1(value: string) {
    this._stringTrimFirstStringOp1 = value;
  }
  public resetStringTrimFirstStringOp1() {
    this._stringTrimFirstStringOp1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringTrimFirstStringOp1Input() {
    return this._stringTrimFirstStringOp1;
  }

  // string_trim_first_string_op_2 - computed: false, optional: true, required: false
  private _stringTrimFirstStringOp2?: string; 
  public get stringTrimFirstStringOp2() {
    return this.getStringAttribute('string_trim_first_string_op_2');
  }
  public set stringTrimFirstStringOp2(value: string) {
    this._stringTrimFirstStringOp2 = value;
  }
  public resetStringTrimFirstStringOp2() {
    this._stringTrimFirstStringOp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringTrimFirstStringOp2Input() {
    return this._stringTrimFirstStringOp2;
  }

  // syslog_facility - computed: false, optional: true, required: false
  private _syslogFacility?: string; 
  public get syslogFacility() {
    return this.getStringAttribute('syslog_facility');
  }
  public set syslogFacility(value: string) {
    this._syslogFacility = value;
  }
  public resetSyslogFacility() {
    this._syslogFacility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogFacilityInput() {
    return this._syslogFacility;
  }

  // syslog_msg - computed: false, optional: true, required: false
  private _syslogMsg?: string; 
  public get syslogMsg() {
    return this.getStringAttribute('syslog_msg');
  }
  public set syslogMsg(value: string) {
    this._syslogMsg = value;
  }
  public resetSyslogMsg() {
    this._syslogMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogMsgInput() {
    return this._syslogMsg;
  }

  // syslog_priority - computed: false, optional: true, required: false
  private _syslogPriority?: string; 
  public get syslogPriority() {
    return this.getStringAttribute('syslog_priority');
  }
  public set syslogPriority(value: string) {
    this._syslogPriority = value;
  }
  public resetSyslogPriority() {
    this._syslogPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogPriorityInput() {
    return this._syslogPriority;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: number; 
  public get wait() {
    return this.getNumberAttribute('wait');
  }
  public set wait(value: number) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // while_operand1 - computed: false, optional: true, required: false
  private _whileOperand1?: string; 
  public get whileOperand1() {
    return this.getStringAttribute('while_operand1');
  }
  public set whileOperand1(value: string) {
    this._whileOperand1 = value;
  }
  public resetWhileOperand1() {
    this._whileOperand1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whileOperand1Input() {
    return this._whileOperand1;
  }

  // while_operand2 - computed: false, optional: true, required: false
  private _whileOperand2?: string; 
  public get whileOperand2() {
    return this.getStringAttribute('while_operand2');
  }
  public set whileOperand2(value: string) {
    this._whileOperand2 = value;
  }
  public resetWhileOperand2() {
    this._whileOperand2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whileOperand2Input() {
    return this._whileOperand2;
  }

  // while_operation - computed: false, optional: true, required: false
  private _whileOperation?: string; 
  public get whileOperation() {
    return this.getStringAttribute('while_operation');
  }
  public set whileOperation(value: string) {
    this._whileOperation = value;
  }
  public resetWhileOperation() {
    this._whileOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whileOperationInput() {
    return this._whileOperation;
  }
}

export class EemAppletsActionsList extends cdktf.ComplexList {
  public internalValue? : EemAppletsActions[] | cdktf.IResolvable

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
  public get(index: number): EemAppletsActionsOutputReference {
    return new EemAppletsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EemApplets {
  /**
  * Add or modify an action statement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#actions Eem#actions}
  */
  readonly actions?: EemAppletsActions[] | cdktf.IResolvable;
  /**
  * Specify an authorization type for the applet
  *   - Choices: `bypass`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#authorization Eem#authorization}
  */
  readonly authorization?: string;
  /**
  * Specify a class for the applet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#class Eem#class}
  */
  readonly class?: string;
  /**
  * Add or modify an applet description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#description Eem#description}
  */
  readonly description?: string;
  /**
  * CLI command pattern match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#event_cli_pattern Eem#event_cli_pattern}
  */
  readonly eventCliPattern?: string;
  /**
  * describes whether to skip CLI command execution
  *   - Choices: `no`, `yes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#event_cli_skip Eem#event_cli_skip}
  */
  readonly eventCliSkip?: string;
  /**
  * CLI and EEM policy execution sync or async
  *   - Choices: `no`, `yes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#event_cli_sync Eem#event_cli_sync}
  */
  readonly eventCliSync?: string;
  /**
  * Cron entry for cron timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#event_timer_cron_entry Eem#event_timer_cron_entry}
  */
  readonly eventTimerCronEntry?: string;
  /**
  * Maximum runtime of applet
  *   - Range: `0`-`3.1536000999e+10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#event_timer_cron_maxrun Eem#event_timer_cron_maxrun}
  */
  readonly eventTimerCronMaxrun?: number;
  /**
  * Timer name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#event_timer_cron_name Eem#event_timer_cron_name}
  */
  readonly eventTimerCronName?: string;
  /**
  * seconds[.milliseconds] value
  *   - Range: `0`-`3.1536000999e+10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#event_timer_cron_ratelimit Eem#event_timer_cron_ratelimit}
  */
  readonly eventTimerCronRatelimit?: number;
  /**
  * Maximum runtime of applet
  *   - Range: `0`-`3.1536000999e+10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#event_timer_watchdog_maxrun Eem#event_timer_watchdog_maxrun}
  */
  readonly eventTimerWatchdogMaxrun?: number;
  /**
  * Timer name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#event_timer_watchdog_name Eem#event_timer_watchdog_name}
  */
  readonly eventTimerWatchdogName?: string;
  /**
  * seconds[.milliseconds] value
  *   - Range: `0`-`3.1536000999e+10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#event_timer_watchdog_ratelimit Eem#event_timer_watchdog_ratelimit}
  */
  readonly eventTimerWatchdogRatelimit?: number;
  /**
  * Time period for watchdog / countdown / absolute timer
  *   - Range: `1000`-`2.085978494999e+12`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#event_timer_watchdog_time Eem#event_timer_watchdog_time}
  */
  readonly eventTimerWatchdogTime?: number;
  /**
  * Name of the Event Manager applet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#name Eem#name}
  */
  readonly name: string;
}

export function eemAppletsToTerraform(struct?: EemApplets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(eemAppletsActionsToTerraform, false)(struct!.actions),
    authorization: cdktf.stringToTerraform(struct!.authorization),
    class: cdktf.stringToTerraform(struct!.class),
    description: cdktf.stringToTerraform(struct!.description),
    event_cli_pattern: cdktf.stringToTerraform(struct!.eventCliPattern),
    event_cli_skip: cdktf.stringToTerraform(struct!.eventCliSkip),
    event_cli_sync: cdktf.stringToTerraform(struct!.eventCliSync),
    event_timer_cron_entry: cdktf.stringToTerraform(struct!.eventTimerCronEntry),
    event_timer_cron_maxrun: cdktf.numberToTerraform(struct!.eventTimerCronMaxrun),
    event_timer_cron_name: cdktf.stringToTerraform(struct!.eventTimerCronName),
    event_timer_cron_ratelimit: cdktf.numberToTerraform(struct!.eventTimerCronRatelimit),
    event_timer_watchdog_maxrun: cdktf.numberToTerraform(struct!.eventTimerWatchdogMaxrun),
    event_timer_watchdog_name: cdktf.stringToTerraform(struct!.eventTimerWatchdogName),
    event_timer_watchdog_ratelimit: cdktf.numberToTerraform(struct!.eventTimerWatchdogRatelimit),
    event_timer_watchdog_time: cdktf.numberToTerraform(struct!.eventTimerWatchdogTime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function eemAppletsToHclTerraform(struct?: EemApplets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(eemAppletsActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "EemAppletsActionsList",
    },
    authorization: {
      value: cdktf.stringToHclTerraform(struct!.authorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_cli_pattern: {
      value: cdktf.stringToHclTerraform(struct!.eventCliPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_cli_skip: {
      value: cdktf.stringToHclTerraform(struct!.eventCliSkip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_cli_sync: {
      value: cdktf.stringToHclTerraform(struct!.eventCliSync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_timer_cron_entry: {
      value: cdktf.stringToHclTerraform(struct!.eventTimerCronEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_timer_cron_maxrun: {
      value: cdktf.numberToHclTerraform(struct!.eventTimerCronMaxrun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_timer_cron_name: {
      value: cdktf.stringToHclTerraform(struct!.eventTimerCronName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_timer_cron_ratelimit: {
      value: cdktf.numberToHclTerraform(struct!.eventTimerCronRatelimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_timer_watchdog_maxrun: {
      value: cdktf.numberToHclTerraform(struct!.eventTimerWatchdogMaxrun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_timer_watchdog_name: {
      value: cdktf.stringToHclTerraform(struct!.eventTimerWatchdogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_timer_watchdog_ratelimit: {
      value: cdktf.numberToHclTerraform(struct!.eventTimerWatchdogRatelimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    event_timer_watchdog_time: {
      value: cdktf.numberToHclTerraform(struct!.eventTimerWatchdogTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EemAppletsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EemApplets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._authorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization;
    }
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._eventCliPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventCliPattern = this._eventCliPattern;
    }
    if (this._eventCliSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventCliSkip = this._eventCliSkip;
    }
    if (this._eventCliSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventCliSync = this._eventCliSync;
    }
    if (this._eventTimerCronEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTimerCronEntry = this._eventTimerCronEntry;
    }
    if (this._eventTimerCronMaxrun !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTimerCronMaxrun = this._eventTimerCronMaxrun;
    }
    if (this._eventTimerCronName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTimerCronName = this._eventTimerCronName;
    }
    if (this._eventTimerCronRatelimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTimerCronRatelimit = this._eventTimerCronRatelimit;
    }
    if (this._eventTimerWatchdogMaxrun !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTimerWatchdogMaxrun = this._eventTimerWatchdogMaxrun;
    }
    if (this._eventTimerWatchdogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTimerWatchdogName = this._eventTimerWatchdogName;
    }
    if (this._eventTimerWatchdogRatelimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTimerWatchdogRatelimit = this._eventTimerWatchdogRatelimit;
    }
    if (this._eventTimerWatchdogTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTimerWatchdogTime = this._eventTimerWatchdogTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EemApplets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions.internalValue = undefined;
      this._authorization = undefined;
      this._class = undefined;
      this._description = undefined;
      this._eventCliPattern = undefined;
      this._eventCliSkip = undefined;
      this._eventCliSync = undefined;
      this._eventTimerCronEntry = undefined;
      this._eventTimerCronMaxrun = undefined;
      this._eventTimerCronName = undefined;
      this._eventTimerCronRatelimit = undefined;
      this._eventTimerWatchdogMaxrun = undefined;
      this._eventTimerWatchdogName = undefined;
      this._eventTimerWatchdogRatelimit = undefined;
      this._eventTimerWatchdogTime = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions.internalValue = value.actions;
      this._authorization = value.authorization;
      this._class = value.class;
      this._description = value.description;
      this._eventCliPattern = value.eventCliPattern;
      this._eventCliSkip = value.eventCliSkip;
      this._eventCliSync = value.eventCliSync;
      this._eventTimerCronEntry = value.eventTimerCronEntry;
      this._eventTimerCronMaxrun = value.eventTimerCronMaxrun;
      this._eventTimerCronName = value.eventTimerCronName;
      this._eventTimerCronRatelimit = value.eventTimerCronRatelimit;
      this._eventTimerWatchdogMaxrun = value.eventTimerWatchdogMaxrun;
      this._eventTimerWatchdogName = value.eventTimerWatchdogName;
      this._eventTimerWatchdogRatelimit = value.eventTimerWatchdogRatelimit;
      this._eventTimerWatchdogTime = value.eventTimerWatchdogTime;
      this._name = value.name;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new EemAppletsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: EemAppletsActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
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

  // event_cli_pattern - computed: false, optional: true, required: false
  private _eventCliPattern?: string; 
  public get eventCliPattern() {
    return this.getStringAttribute('event_cli_pattern');
  }
  public set eventCliPattern(value: string) {
    this._eventCliPattern = value;
  }
  public resetEventCliPattern() {
    this._eventCliPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCliPatternInput() {
    return this._eventCliPattern;
  }

  // event_cli_skip - computed: false, optional: true, required: false
  private _eventCliSkip?: string; 
  public get eventCliSkip() {
    return this.getStringAttribute('event_cli_skip');
  }
  public set eventCliSkip(value: string) {
    this._eventCliSkip = value;
  }
  public resetEventCliSkip() {
    this._eventCliSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCliSkipInput() {
    return this._eventCliSkip;
  }

  // event_cli_sync - computed: false, optional: true, required: false
  private _eventCliSync?: string; 
  public get eventCliSync() {
    return this.getStringAttribute('event_cli_sync');
  }
  public set eventCliSync(value: string) {
    this._eventCliSync = value;
  }
  public resetEventCliSync() {
    this._eventCliSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventCliSyncInput() {
    return this._eventCliSync;
  }

  // event_timer_cron_entry - computed: false, optional: true, required: false
  private _eventTimerCronEntry?: string; 
  public get eventTimerCronEntry() {
    return this.getStringAttribute('event_timer_cron_entry');
  }
  public set eventTimerCronEntry(value: string) {
    this._eventTimerCronEntry = value;
  }
  public resetEventTimerCronEntry() {
    this._eventTimerCronEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimerCronEntryInput() {
    return this._eventTimerCronEntry;
  }

  // event_timer_cron_maxrun - computed: false, optional: true, required: false
  private _eventTimerCronMaxrun?: number; 
  public get eventTimerCronMaxrun() {
    return this.getNumberAttribute('event_timer_cron_maxrun');
  }
  public set eventTimerCronMaxrun(value: number) {
    this._eventTimerCronMaxrun = value;
  }
  public resetEventTimerCronMaxrun() {
    this._eventTimerCronMaxrun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimerCronMaxrunInput() {
    return this._eventTimerCronMaxrun;
  }

  // event_timer_cron_name - computed: false, optional: true, required: false
  private _eventTimerCronName?: string; 
  public get eventTimerCronName() {
    return this.getStringAttribute('event_timer_cron_name');
  }
  public set eventTimerCronName(value: string) {
    this._eventTimerCronName = value;
  }
  public resetEventTimerCronName() {
    this._eventTimerCronName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimerCronNameInput() {
    return this._eventTimerCronName;
  }

  // event_timer_cron_ratelimit - computed: false, optional: true, required: false
  private _eventTimerCronRatelimit?: number; 
  public get eventTimerCronRatelimit() {
    return this.getNumberAttribute('event_timer_cron_ratelimit');
  }
  public set eventTimerCronRatelimit(value: number) {
    this._eventTimerCronRatelimit = value;
  }
  public resetEventTimerCronRatelimit() {
    this._eventTimerCronRatelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimerCronRatelimitInput() {
    return this._eventTimerCronRatelimit;
  }

  // event_timer_watchdog_maxrun - computed: false, optional: true, required: false
  private _eventTimerWatchdogMaxrun?: number; 
  public get eventTimerWatchdogMaxrun() {
    return this.getNumberAttribute('event_timer_watchdog_maxrun');
  }
  public set eventTimerWatchdogMaxrun(value: number) {
    this._eventTimerWatchdogMaxrun = value;
  }
  public resetEventTimerWatchdogMaxrun() {
    this._eventTimerWatchdogMaxrun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimerWatchdogMaxrunInput() {
    return this._eventTimerWatchdogMaxrun;
  }

  // event_timer_watchdog_name - computed: false, optional: true, required: false
  private _eventTimerWatchdogName?: string; 
  public get eventTimerWatchdogName() {
    return this.getStringAttribute('event_timer_watchdog_name');
  }
  public set eventTimerWatchdogName(value: string) {
    this._eventTimerWatchdogName = value;
  }
  public resetEventTimerWatchdogName() {
    this._eventTimerWatchdogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimerWatchdogNameInput() {
    return this._eventTimerWatchdogName;
  }

  // event_timer_watchdog_ratelimit - computed: false, optional: true, required: false
  private _eventTimerWatchdogRatelimit?: number; 
  public get eventTimerWatchdogRatelimit() {
    return this.getNumberAttribute('event_timer_watchdog_ratelimit');
  }
  public set eventTimerWatchdogRatelimit(value: number) {
    this._eventTimerWatchdogRatelimit = value;
  }
  public resetEventTimerWatchdogRatelimit() {
    this._eventTimerWatchdogRatelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimerWatchdogRatelimitInput() {
    return this._eventTimerWatchdogRatelimit;
  }

  // event_timer_watchdog_time - computed: false, optional: true, required: false
  private _eventTimerWatchdogTime?: number; 
  public get eventTimerWatchdogTime() {
    return this.getNumberAttribute('event_timer_watchdog_time');
  }
  public set eventTimerWatchdogTime(value: number) {
    this._eventTimerWatchdogTime = value;
  }
  public resetEventTimerWatchdogTime() {
    this._eventTimerWatchdogTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTimerWatchdogTimeInput() {
    return this._eventTimerWatchdogTime;
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
}

export class EemAppletsList extends cdktf.ComplexList {
  public internalValue? : EemApplets[] | cdktf.IResolvable

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
  public get(index: number): EemAppletsOutputReference {
    return new EemAppletsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EemEnvironmentVariables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#name Eem#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#value Eem#value}
  */
  readonly value?: string;
}

export function eemEnvironmentVariablesToTerraform(struct?: EemEnvironmentVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function eemEnvironmentVariablesToHclTerraform(struct?: EemEnvironmentVariables | cdktf.IResolvable): any {
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

export class EemEnvironmentVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EemEnvironmentVariables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EemEnvironmentVariables | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EemEnvironmentVariablesList extends cdktf.ComplexList {
  public internalValue? : EemEnvironmentVariables[] | cdktf.IResolvable

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
  public get(index: number): EemEnvironmentVariablesOutputReference {
    return new EemEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem iosxe_eem}
*/
export class Eem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_eem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Eem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Eem to import
  * @param importFromId The id of the existing Eem that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Eem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_eem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/eem iosxe_eem} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_eem',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applets.internalValue = config.applets;
    this._detectorRoutingBootupDelay = config.detectorRoutingBootupDelay;
    this._detectorRpcMaxSessions = config.detectorRpcMaxSessions;
    this._device = config.device;
    this._directoryUserPolicy = config.directoryUserPolicy;
    this._environmentVariables.internalValue = config.environmentVariables;
    this._historySizeEvents = config.historySizeEvents;
    this._historySizeTraps = config.historySizeTraps;
    this._schedulerAppletThreadClassDefault = config.schedulerAppletThreadClassDefault;
    this._schedulerAppletThreadClassNumber = config.schedulerAppletThreadClassNumber;
    this._sessionCliUsername = config.sessionCliUsername;
    this._sessionCliUsernamePrivilege = config.sessionCliUsernamePrivilege;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applets - computed: false, optional: true, required: false
  private _applets = new EemAppletsList(this, "applets", false);
  public get applets() {
    return this._applets;
  }
  public putApplets(value: EemApplets[] | cdktf.IResolvable) {
    this._applets.internalValue = value;
  }
  public resetApplets() {
    this._applets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appletsInput() {
    return this._applets.internalValue;
  }

  // detector_routing_bootup_delay - computed: false, optional: true, required: false
  private _detectorRoutingBootupDelay?: number; 
  public get detectorRoutingBootupDelay() {
    return this.getNumberAttribute('detector_routing_bootup_delay');
  }
  public set detectorRoutingBootupDelay(value: number) {
    this._detectorRoutingBootupDelay = value;
  }
  public resetDetectorRoutingBootupDelay() {
    this._detectorRoutingBootupDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorRoutingBootupDelayInput() {
    return this._detectorRoutingBootupDelay;
  }

  // detector_rpc_max_sessions - computed: false, optional: true, required: false
  private _detectorRpcMaxSessions?: number; 
  public get detectorRpcMaxSessions() {
    return this.getNumberAttribute('detector_rpc_max_sessions');
  }
  public set detectorRpcMaxSessions(value: number) {
    this._detectorRpcMaxSessions = value;
  }
  public resetDetectorRpcMaxSessions() {
    this._detectorRpcMaxSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorRpcMaxSessionsInput() {
    return this._detectorRpcMaxSessions;
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

  // directory_user_policy - computed: false, optional: true, required: false
  private _directoryUserPolicy?: string; 
  public get directoryUserPolicy() {
    return this.getStringAttribute('directory_user_policy');
  }
  public set directoryUserPolicy(value: string) {
    this._directoryUserPolicy = value;
  }
  public resetDirectoryUserPolicy() {
    this._directoryUserPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryUserPolicyInput() {
    return this._directoryUserPolicy;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables = new EemEnvironmentVariablesList(this, "environment_variables", false);
  public get environmentVariables() {
    return this._environmentVariables;
  }
  public putEnvironmentVariables(value: EemEnvironmentVariables[] | cdktf.IResolvable) {
    this._environmentVariables.internalValue = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables.internalValue;
  }

  // history_size_events - computed: false, optional: true, required: false
  private _historySizeEvents?: number; 
  public get historySizeEvents() {
    return this.getNumberAttribute('history_size_events');
  }
  public set historySizeEvents(value: number) {
    this._historySizeEvents = value;
  }
  public resetHistorySizeEvents() {
    this._historySizeEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historySizeEventsInput() {
    return this._historySizeEvents;
  }

  // history_size_traps - computed: false, optional: true, required: false
  private _historySizeTraps?: number; 
  public get historySizeTraps() {
    return this.getNumberAttribute('history_size_traps');
  }
  public set historySizeTraps(value: number) {
    this._historySizeTraps = value;
  }
  public resetHistorySizeTraps() {
    this._historySizeTraps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historySizeTrapsInput() {
    return this._historySizeTraps;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // scheduler_applet_thread_class_default - computed: false, optional: true, required: false
  private _schedulerAppletThreadClassDefault?: boolean | cdktf.IResolvable; 
  public get schedulerAppletThreadClassDefault() {
    return this.getBooleanAttribute('scheduler_applet_thread_class_default');
  }
  public set schedulerAppletThreadClassDefault(value: boolean | cdktf.IResolvable) {
    this._schedulerAppletThreadClassDefault = value;
  }
  public resetSchedulerAppletThreadClassDefault() {
    this._schedulerAppletThreadClassDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerAppletThreadClassDefaultInput() {
    return this._schedulerAppletThreadClassDefault;
  }

  // scheduler_applet_thread_class_number - computed: false, optional: true, required: false
  private _schedulerAppletThreadClassNumber?: number; 
  public get schedulerAppletThreadClassNumber() {
    return this.getNumberAttribute('scheduler_applet_thread_class_number');
  }
  public set schedulerAppletThreadClassNumber(value: number) {
    this._schedulerAppletThreadClassNumber = value;
  }
  public resetSchedulerAppletThreadClassNumber() {
    this._schedulerAppletThreadClassNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerAppletThreadClassNumberInput() {
    return this._schedulerAppletThreadClassNumber;
  }

  // session_cli_username - computed: false, optional: true, required: false
  private _sessionCliUsername?: string; 
  public get sessionCliUsername() {
    return this.getStringAttribute('session_cli_username');
  }
  public set sessionCliUsername(value: string) {
    this._sessionCliUsername = value;
  }
  public resetSessionCliUsername() {
    this._sessionCliUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCliUsernameInput() {
    return this._sessionCliUsername;
  }

  // session_cli_username_privilege - computed: false, optional: true, required: false
  private _sessionCliUsernamePrivilege?: number; 
  public get sessionCliUsernamePrivilege() {
    return this.getNumberAttribute('session_cli_username_privilege');
  }
  public set sessionCliUsernamePrivilege(value: number) {
    this._sessionCliUsernamePrivilege = value;
  }
  public resetSessionCliUsernamePrivilege() {
    this._sessionCliUsernamePrivilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCliUsernamePrivilegeInput() {
    return this._sessionCliUsernamePrivilege;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      applets: cdktf.listMapper(eemAppletsToTerraform, false)(this._applets.internalValue),
      detector_routing_bootup_delay: cdktf.numberToTerraform(this._detectorRoutingBootupDelay),
      detector_rpc_max_sessions: cdktf.numberToTerraform(this._detectorRpcMaxSessions),
      device: cdktf.stringToTerraform(this._device),
      directory_user_policy: cdktf.stringToTerraform(this._directoryUserPolicy),
      environment_variables: cdktf.listMapper(eemEnvironmentVariablesToTerraform, false)(this._environmentVariables.internalValue),
      history_size_events: cdktf.numberToTerraform(this._historySizeEvents),
      history_size_traps: cdktf.numberToTerraform(this._historySizeTraps),
      scheduler_applet_thread_class_default: cdktf.booleanToTerraform(this._schedulerAppletThreadClassDefault),
      scheduler_applet_thread_class_number: cdktf.numberToTerraform(this._schedulerAppletThreadClassNumber),
      session_cli_username: cdktf.stringToTerraform(this._sessionCliUsername),
      session_cli_username_privilege: cdktf.numberToTerraform(this._sessionCliUsernamePrivilege),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      applets: {
        value: cdktf.listMapperHcl(eemAppletsToHclTerraform, false)(this._applets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EemAppletsList",
      },
      detector_routing_bootup_delay: {
        value: cdktf.numberToHclTerraform(this._detectorRoutingBootupDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detector_rpc_max_sessions: {
        value: cdktf.numberToHclTerraform(this._detectorRpcMaxSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_user_policy: {
        value: cdktf.stringToHclTerraform(this._directoryUserPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_variables: {
        value: cdktf.listMapperHcl(eemEnvironmentVariablesToHclTerraform, false)(this._environmentVariables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EemEnvironmentVariablesList",
      },
      history_size_events: {
        value: cdktf.numberToHclTerraform(this._historySizeEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      history_size_traps: {
        value: cdktf.numberToHclTerraform(this._historySizeTraps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scheduler_applet_thread_class_default: {
        value: cdktf.booleanToHclTerraform(this._schedulerAppletThreadClassDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scheduler_applet_thread_class_number: {
        value: cdktf.numberToHclTerraform(this._schedulerAppletThreadClassNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_cli_username: {
        value: cdktf.stringToHclTerraform(this._sessionCliUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_cli_username_privilege: {
        value: cdktf.numberToHclTerraform(this._sessionCliUsernamePrivilege),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
