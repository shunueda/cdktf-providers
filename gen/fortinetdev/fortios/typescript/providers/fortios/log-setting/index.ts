// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#anonymization_hash LogSetting#anonymization_hash}
  */
  readonly anonymizationHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#brief_traffic_format LogSetting#brief_traffic_format}
  */
  readonly briefTrafficFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#daemon_log LogSetting#daemon_log}
  */
  readonly daemonLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#dynamic_sort_subtable LogSetting#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#expolicy_implicit_log LogSetting#expolicy_implicit_log}
  */
  readonly expolicyImplicitLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#extended_log LogSetting#extended_log}
  */
  readonly extendedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#extended_utm_log LogSetting#extended_utm_log}
  */
  readonly extendedUtmLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#faz_override LogSetting#faz_override}
  */
  readonly fazOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#fwpolicy6_implicit_log LogSetting#fwpolicy6_implicit_log}
  */
  readonly fwpolicy6ImplicitLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#fwpolicy_implicit_log LogSetting#fwpolicy_implicit_log}
  */
  readonly fwpolicyImplicitLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#get_all_tables LogSetting#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#id LogSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#local_in_allow LogSetting#local_in_allow}
  */
  readonly localInAllow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#local_in_deny_broadcast LogSetting#local_in_deny_broadcast}
  */
  readonly localInDenyBroadcast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#local_in_deny_unicast LogSetting#local_in_deny_unicast}
  */
  readonly localInDenyUnicast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#local_in_policy_log LogSetting#local_in_policy_log}
  */
  readonly localInPolicyLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#local_out LogSetting#local_out}
  */
  readonly localOut?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#local_out_ioc_detection LogSetting#local_out_ioc_detection}
  */
  readonly localOutIocDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#log_invalid_packet LogSetting#log_invalid_packet}
  */
  readonly logInvalidPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#log_policy_comment LogSetting#log_policy_comment}
  */
  readonly logPolicyComment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#log_policy_name LogSetting#log_policy_name}
  */
  readonly logPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#log_user_in_upper LogSetting#log_user_in_upper}
  */
  readonly logUserInUpper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#long_live_session_stat LogSetting#long_live_session_stat}
  */
  readonly longLiveSessionStat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#neighbor_event LogSetting#neighbor_event}
  */
  readonly neighborEvent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#resolve_ip LogSetting#resolve_ip}
  */
  readonly resolveIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#resolve_port LogSetting#resolve_port}
  */
  readonly resolvePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#rest_api_get LogSetting#rest_api_get}
  */
  readonly restApiGet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#rest_api_set LogSetting#rest_api_set}
  */
  readonly restApiSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#syslog_override LogSetting#syslog_override}
  */
  readonly syslogOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#user_anonymize LogSetting#user_anonymize}
  */
  readonly userAnonymize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#vdomparam LogSetting#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#zone_name LogSetting#zone_name}
  */
  readonly zoneName?: string;
  /**
  * custom_log_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#custom_log_fields LogSetting#custom_log_fields}
  */
  readonly customLogFields?: LogSettingCustomLogFields[] | cdktf.IResolvable;
}
export interface LogSettingCustomLogFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#field_id LogSetting#field_id}
  */
  readonly fieldId?: string;
}

export function logSettingCustomLogFieldsToTerraform(struct?: LogSettingCustomLogFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_id: cdktf.stringToTerraform(struct!.fieldId),
  }
}


export function logSettingCustomLogFieldsToHclTerraform(struct?: LogSettingCustomLogFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_id: {
      value: cdktf.stringToHclTerraform(struct!.fieldId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogSettingCustomLogFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogSettingCustomLogFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogSettingCustomLogFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldId = value.fieldId;
    }
  }

  // field_id - computed: false, optional: true, required: false
  private _fieldId?: string; 
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
  public set fieldId(value: string) {
    this._fieldId = value;
  }
  public resetFieldId() {
    this._fieldId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
  }
}

export class LogSettingCustomLogFieldsList extends cdktf.ComplexList {
  public internalValue? : LogSettingCustomLogFields[] | cdktf.IResolvable

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
  public get(index: number): LogSettingCustomLogFieldsOutputReference {
    return new LogSettingCustomLogFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting fortios_log_setting}
*/
export class LogSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_log_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogSetting to import
  * @param importFromId The id of the existing LogSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_log_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/log_setting fortios_log_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LogSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_log_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._anonymizationHash = config.anonymizationHash;
    this._briefTrafficFormat = config.briefTrafficFormat;
    this._daemonLog = config.daemonLog;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._expolicyImplicitLog = config.expolicyImplicitLog;
    this._extendedLog = config.extendedLog;
    this._extendedUtmLog = config.extendedUtmLog;
    this._fazOverride = config.fazOverride;
    this._fwpolicy6ImplicitLog = config.fwpolicy6ImplicitLog;
    this._fwpolicyImplicitLog = config.fwpolicyImplicitLog;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._localInAllow = config.localInAllow;
    this._localInDenyBroadcast = config.localInDenyBroadcast;
    this._localInDenyUnicast = config.localInDenyUnicast;
    this._localInPolicyLog = config.localInPolicyLog;
    this._localOut = config.localOut;
    this._localOutIocDetection = config.localOutIocDetection;
    this._logInvalidPacket = config.logInvalidPacket;
    this._logPolicyComment = config.logPolicyComment;
    this._logPolicyName = config.logPolicyName;
    this._logUserInUpper = config.logUserInUpper;
    this._longLiveSessionStat = config.longLiveSessionStat;
    this._neighborEvent = config.neighborEvent;
    this._resolveIp = config.resolveIp;
    this._resolvePort = config.resolvePort;
    this._restApiGet = config.restApiGet;
    this._restApiSet = config.restApiSet;
    this._syslogOverride = config.syslogOverride;
    this._userAnonymize = config.userAnonymize;
    this._vdomparam = config.vdomparam;
    this._zoneName = config.zoneName;
    this._customLogFields.internalValue = config.customLogFields;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anonymization_hash - computed: false, optional: true, required: false
  private _anonymizationHash?: string; 
  public get anonymizationHash() {
    return this.getStringAttribute('anonymization_hash');
  }
  public set anonymizationHash(value: string) {
    this._anonymizationHash = value;
  }
  public resetAnonymizationHash() {
    this._anonymizationHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymizationHashInput() {
    return this._anonymizationHash;
  }

  // brief_traffic_format - computed: true, optional: true, required: false
  private _briefTrafficFormat?: string; 
  public get briefTrafficFormat() {
    return this.getStringAttribute('brief_traffic_format');
  }
  public set briefTrafficFormat(value: string) {
    this._briefTrafficFormat = value;
  }
  public resetBriefTrafficFormat() {
    this._briefTrafficFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get briefTrafficFormatInput() {
    return this._briefTrafficFormat;
  }

  // daemon_log - computed: true, optional: true, required: false
  private _daemonLog?: string; 
  public get daemonLog() {
    return this.getStringAttribute('daemon_log');
  }
  public set daemonLog(value: string) {
    this._daemonLog = value;
  }
  public resetDaemonLog() {
    this._daemonLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daemonLogInput() {
    return this._daemonLog;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // expolicy_implicit_log - computed: true, optional: true, required: false
  private _expolicyImplicitLog?: string; 
  public get expolicyImplicitLog() {
    return this.getStringAttribute('expolicy_implicit_log');
  }
  public set expolicyImplicitLog(value: string) {
    this._expolicyImplicitLog = value;
  }
  public resetExpolicyImplicitLog() {
    this._expolicyImplicitLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expolicyImplicitLogInput() {
    return this._expolicyImplicitLog;
  }

  // extended_log - computed: true, optional: true, required: false
  private _extendedLog?: string; 
  public get extendedLog() {
    return this.getStringAttribute('extended_log');
  }
  public set extendedLog(value: string) {
    this._extendedLog = value;
  }
  public resetExtendedLog() {
    this._extendedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedLogInput() {
    return this._extendedLog;
  }

  // extended_utm_log - computed: true, optional: true, required: false
  private _extendedUtmLog?: string; 
  public get extendedUtmLog() {
    return this.getStringAttribute('extended_utm_log');
  }
  public set extendedUtmLog(value: string) {
    this._extendedUtmLog = value;
  }
  public resetExtendedUtmLog() {
    this._extendedUtmLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedUtmLogInput() {
    return this._extendedUtmLog;
  }

  // faz_override - computed: true, optional: true, required: false
  private _fazOverride?: string; 
  public get fazOverride() {
    return this.getStringAttribute('faz_override');
  }
  public set fazOverride(value: string) {
    this._fazOverride = value;
  }
  public resetFazOverride() {
    this._fazOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazOverrideInput() {
    return this._fazOverride;
  }

  // fwpolicy6_implicit_log - computed: true, optional: true, required: false
  private _fwpolicy6ImplicitLog?: string; 
  public get fwpolicy6ImplicitLog() {
    return this.getStringAttribute('fwpolicy6_implicit_log');
  }
  public set fwpolicy6ImplicitLog(value: string) {
    this._fwpolicy6ImplicitLog = value;
  }
  public resetFwpolicy6ImplicitLog() {
    this._fwpolicy6ImplicitLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwpolicy6ImplicitLogInput() {
    return this._fwpolicy6ImplicitLog;
  }

  // fwpolicy_implicit_log - computed: true, optional: true, required: false
  private _fwpolicyImplicitLog?: string; 
  public get fwpolicyImplicitLog() {
    return this.getStringAttribute('fwpolicy_implicit_log');
  }
  public set fwpolicyImplicitLog(value: string) {
    this._fwpolicyImplicitLog = value;
  }
  public resetFwpolicyImplicitLog() {
    this._fwpolicyImplicitLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwpolicyImplicitLogInput() {
    return this._fwpolicyImplicitLog;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // local_in_allow - computed: true, optional: true, required: false
  private _localInAllow?: string; 
  public get localInAllow() {
    return this.getStringAttribute('local_in_allow');
  }
  public set localInAllow(value: string) {
    this._localInAllow = value;
  }
  public resetLocalInAllow() {
    this._localInAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInAllowInput() {
    return this._localInAllow;
  }

  // local_in_deny_broadcast - computed: true, optional: true, required: false
  private _localInDenyBroadcast?: string; 
  public get localInDenyBroadcast() {
    return this.getStringAttribute('local_in_deny_broadcast');
  }
  public set localInDenyBroadcast(value: string) {
    this._localInDenyBroadcast = value;
  }
  public resetLocalInDenyBroadcast() {
    this._localInDenyBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInDenyBroadcastInput() {
    return this._localInDenyBroadcast;
  }

  // local_in_deny_unicast - computed: true, optional: true, required: false
  private _localInDenyUnicast?: string; 
  public get localInDenyUnicast() {
    return this.getStringAttribute('local_in_deny_unicast');
  }
  public set localInDenyUnicast(value: string) {
    this._localInDenyUnicast = value;
  }
  public resetLocalInDenyUnicast() {
    this._localInDenyUnicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInDenyUnicastInput() {
    return this._localInDenyUnicast;
  }

  // local_in_policy_log - computed: true, optional: true, required: false
  private _localInPolicyLog?: string; 
  public get localInPolicyLog() {
    return this.getStringAttribute('local_in_policy_log');
  }
  public set localInPolicyLog(value: string) {
    this._localInPolicyLog = value;
  }
  public resetLocalInPolicyLog() {
    this._localInPolicyLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInPolicyLogInput() {
    return this._localInPolicyLog;
  }

  // local_out - computed: true, optional: true, required: false
  private _localOut?: string; 
  public get localOut() {
    return this.getStringAttribute('local_out');
  }
  public set localOut(value: string) {
    this._localOut = value;
  }
  public resetLocalOut() {
    this._localOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOutInput() {
    return this._localOut;
  }

  // local_out_ioc_detection - computed: true, optional: true, required: false
  private _localOutIocDetection?: string; 
  public get localOutIocDetection() {
    return this.getStringAttribute('local_out_ioc_detection');
  }
  public set localOutIocDetection(value: string) {
    this._localOutIocDetection = value;
  }
  public resetLocalOutIocDetection() {
    this._localOutIocDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOutIocDetectionInput() {
    return this._localOutIocDetection;
  }

  // log_invalid_packet - computed: true, optional: true, required: false
  private _logInvalidPacket?: string; 
  public get logInvalidPacket() {
    return this.getStringAttribute('log_invalid_packet');
  }
  public set logInvalidPacket(value: string) {
    this._logInvalidPacket = value;
  }
  public resetLogInvalidPacket() {
    this._logInvalidPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInvalidPacketInput() {
    return this._logInvalidPacket;
  }

  // log_policy_comment - computed: true, optional: true, required: false
  private _logPolicyComment?: string; 
  public get logPolicyComment() {
    return this.getStringAttribute('log_policy_comment');
  }
  public set logPolicyComment(value: string) {
    this._logPolicyComment = value;
  }
  public resetLogPolicyComment() {
    this._logPolicyComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPolicyCommentInput() {
    return this._logPolicyComment;
  }

  // log_policy_name - computed: false, optional: true, required: false
  private _logPolicyName?: string; 
  public get logPolicyName() {
    return this.getStringAttribute('log_policy_name');
  }
  public set logPolicyName(value: string) {
    this._logPolicyName = value;
  }
  public resetLogPolicyName() {
    this._logPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPolicyNameInput() {
    return this._logPolicyName;
  }

  // log_user_in_upper - computed: true, optional: true, required: false
  private _logUserInUpper?: string; 
  public get logUserInUpper() {
    return this.getStringAttribute('log_user_in_upper');
  }
  public set logUserInUpper(value: string) {
    this._logUserInUpper = value;
  }
  public resetLogUserInUpper() {
    this._logUserInUpper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUserInUpperInput() {
    return this._logUserInUpper;
  }

  // long_live_session_stat - computed: true, optional: true, required: false
  private _longLiveSessionStat?: string; 
  public get longLiveSessionStat() {
    return this.getStringAttribute('long_live_session_stat');
  }
  public set longLiveSessionStat(value: string) {
    this._longLiveSessionStat = value;
  }
  public resetLongLiveSessionStat() {
    this._longLiveSessionStat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longLiveSessionStatInput() {
    return this._longLiveSessionStat;
  }

  // neighbor_event - computed: true, optional: true, required: false
  private _neighborEvent?: string; 
  public get neighborEvent() {
    return this.getStringAttribute('neighbor_event');
  }
  public set neighborEvent(value: string) {
    this._neighborEvent = value;
  }
  public resetNeighborEvent() {
    this._neighborEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborEventInput() {
    return this._neighborEvent;
  }

  // resolve_ip - computed: true, optional: true, required: false
  private _resolveIp?: string; 
  public get resolveIp() {
    return this.getStringAttribute('resolve_ip');
  }
  public set resolveIp(value: string) {
    this._resolveIp = value;
  }
  public resetResolveIp() {
    this._resolveIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolveIpInput() {
    return this._resolveIp;
  }

  // resolve_port - computed: true, optional: true, required: false
  private _resolvePort?: string; 
  public get resolvePort() {
    return this.getStringAttribute('resolve_port');
  }
  public set resolvePort(value: string) {
    this._resolvePort = value;
  }
  public resetResolvePort() {
    this._resolvePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvePortInput() {
    return this._resolvePort;
  }

  // rest_api_get - computed: true, optional: true, required: false
  private _restApiGet?: string; 
  public get restApiGet() {
    return this.getStringAttribute('rest_api_get');
  }
  public set restApiGet(value: string) {
    this._restApiGet = value;
  }
  public resetRestApiGet() {
    this._restApiGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiGetInput() {
    return this._restApiGet;
  }

  // rest_api_set - computed: true, optional: true, required: false
  private _restApiSet?: string; 
  public get restApiSet() {
    return this.getStringAttribute('rest_api_set');
  }
  public set restApiSet(value: string) {
    this._restApiSet = value;
  }
  public resetRestApiSet() {
    this._restApiSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restApiSetInput() {
    return this._restApiSet;
  }

  // syslog_override - computed: true, optional: true, required: false
  private _syslogOverride?: string; 
  public get syslogOverride() {
    return this.getStringAttribute('syslog_override');
  }
  public set syslogOverride(value: string) {
    this._syslogOverride = value;
  }
  public resetSyslogOverride() {
    this._syslogOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogOverrideInput() {
    return this._syslogOverride;
  }

  // user_anonymize - computed: true, optional: true, required: false
  private _userAnonymize?: string; 
  public get userAnonymize() {
    return this.getStringAttribute('user_anonymize');
  }
  public set userAnonymize(value: string) {
    this._userAnonymize = value;
  }
  public resetUserAnonymize() {
    this._userAnonymize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAnonymizeInput() {
    return this._userAnonymize;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // zone_name - computed: true, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // custom_log_fields - computed: false, optional: true, required: false
  private _customLogFields = new LogSettingCustomLogFieldsList(this, "custom_log_fields", true);
  public get customLogFields() {
    return this._customLogFields;
  }
  public putCustomLogFields(value: LogSettingCustomLogFields[] | cdktf.IResolvable) {
    this._customLogFields.internalValue = value;
  }
  public resetCustomLogFields() {
    this._customLogFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLogFieldsInput() {
    return this._customLogFields.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anonymization_hash: cdktf.stringToTerraform(this._anonymizationHash),
      brief_traffic_format: cdktf.stringToTerraform(this._briefTrafficFormat),
      daemon_log: cdktf.stringToTerraform(this._daemonLog),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      expolicy_implicit_log: cdktf.stringToTerraform(this._expolicyImplicitLog),
      extended_log: cdktf.stringToTerraform(this._extendedLog),
      extended_utm_log: cdktf.stringToTerraform(this._extendedUtmLog),
      faz_override: cdktf.stringToTerraform(this._fazOverride),
      fwpolicy6_implicit_log: cdktf.stringToTerraform(this._fwpolicy6ImplicitLog),
      fwpolicy_implicit_log: cdktf.stringToTerraform(this._fwpolicyImplicitLog),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      local_in_allow: cdktf.stringToTerraform(this._localInAllow),
      local_in_deny_broadcast: cdktf.stringToTerraform(this._localInDenyBroadcast),
      local_in_deny_unicast: cdktf.stringToTerraform(this._localInDenyUnicast),
      local_in_policy_log: cdktf.stringToTerraform(this._localInPolicyLog),
      local_out: cdktf.stringToTerraform(this._localOut),
      local_out_ioc_detection: cdktf.stringToTerraform(this._localOutIocDetection),
      log_invalid_packet: cdktf.stringToTerraform(this._logInvalidPacket),
      log_policy_comment: cdktf.stringToTerraform(this._logPolicyComment),
      log_policy_name: cdktf.stringToTerraform(this._logPolicyName),
      log_user_in_upper: cdktf.stringToTerraform(this._logUserInUpper),
      long_live_session_stat: cdktf.stringToTerraform(this._longLiveSessionStat),
      neighbor_event: cdktf.stringToTerraform(this._neighborEvent),
      resolve_ip: cdktf.stringToTerraform(this._resolveIp),
      resolve_port: cdktf.stringToTerraform(this._resolvePort),
      rest_api_get: cdktf.stringToTerraform(this._restApiGet),
      rest_api_set: cdktf.stringToTerraform(this._restApiSet),
      syslog_override: cdktf.stringToTerraform(this._syslogOverride),
      user_anonymize: cdktf.stringToTerraform(this._userAnonymize),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      custom_log_fields: cdktf.listMapper(logSettingCustomLogFieldsToTerraform, true)(this._customLogFields.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anonymization_hash: {
        value: cdktf.stringToHclTerraform(this._anonymizationHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      brief_traffic_format: {
        value: cdktf.stringToHclTerraform(this._briefTrafficFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      daemon_log: {
        value: cdktf.stringToHclTerraform(this._daemonLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expolicy_implicit_log: {
        value: cdktf.stringToHclTerraform(this._expolicyImplicitLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_log: {
        value: cdktf.stringToHclTerraform(this._extendedLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_utm_log: {
        value: cdktf.stringToHclTerraform(this._extendedUtmLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      faz_override: {
        value: cdktf.stringToHclTerraform(this._fazOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwpolicy6_implicit_log: {
        value: cdktf.stringToHclTerraform(this._fwpolicy6ImplicitLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwpolicy_implicit_log: {
        value: cdktf.stringToHclTerraform(this._fwpolicyImplicitLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      local_in_allow: {
        value: cdktf.stringToHclTerraform(this._localInAllow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_in_deny_broadcast: {
        value: cdktf.stringToHclTerraform(this._localInDenyBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_in_deny_unicast: {
        value: cdktf.stringToHclTerraform(this._localInDenyUnicast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_in_policy_log: {
        value: cdktf.stringToHclTerraform(this._localInPolicyLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_out: {
        value: cdktf.stringToHclTerraform(this._localOut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_out_ioc_detection: {
        value: cdktf.stringToHclTerraform(this._localOutIocDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_invalid_packet: {
        value: cdktf.stringToHclTerraform(this._logInvalidPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_policy_comment: {
        value: cdktf.stringToHclTerraform(this._logPolicyComment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_policy_name: {
        value: cdktf.stringToHclTerraform(this._logPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_user_in_upper: {
        value: cdktf.stringToHclTerraform(this._logUserInUpper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      long_live_session_stat: {
        value: cdktf.stringToHclTerraform(this._longLiveSessionStat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor_event: {
        value: cdktf.stringToHclTerraform(this._neighborEvent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_ip: {
        value: cdktf.stringToHclTerraform(this._resolveIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resolve_port: {
        value: cdktf.stringToHclTerraform(this._resolvePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_api_get: {
        value: cdktf.stringToHclTerraform(this._restApiGet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_api_set: {
        value: cdktf.stringToHclTerraform(this._restApiSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog_override: {
        value: cdktf.stringToHclTerraform(this._syslogOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_anonymize: {
        value: cdktf.stringToHclTerraform(this._userAnonymize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_log_fields: {
        value: cdktf.listMapperHcl(logSettingCustomLogFieldsToHclTerraform, true)(this._customLogFields.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogSettingCustomLogFieldsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
