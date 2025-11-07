// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAlarmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#audible SystemAlarm#audible}
  */
  readonly audible?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#dynamic_sort_subtable SystemAlarm#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#get_all_tables SystemAlarm#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#id SystemAlarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#status SystemAlarm#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#vdomparam SystemAlarm#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#groups SystemAlarm#groups}
  */
  readonly groups?: SystemAlarmGroups[] | cdktf.IResolvable;
}
export interface SystemAlarmGroupsFwPolicyViolations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#dst_ip SystemAlarm#dst_ip}
  */
  readonly dstIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#dst_port SystemAlarm#dst_port}
  */
  readonly dstPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#id SystemAlarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#src_ip SystemAlarm#src_ip}
  */
  readonly srcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#src_port SystemAlarm#src_port}
  */
  readonly srcPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#threshold SystemAlarm#threshold}
  */
  readonly threshold?: number;
}

export function systemAlarmGroupsFwPolicyViolationsToTerraform(struct?: SystemAlarmGroupsFwPolicyViolations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_ip: cdktf.stringToTerraform(struct!.dstIp),
    dst_port: cdktf.numberToTerraform(struct!.dstPort),
    id: cdktf.numberToTerraform(struct!.id),
    src_ip: cdktf.stringToTerraform(struct!.srcIp),
    src_port: cdktf.numberToTerraform(struct!.srcPort),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function systemAlarmGroupsFwPolicyViolationsToHclTerraform(struct?: SystemAlarmGroupsFwPolicyViolations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_ip: {
      value: cdktf.stringToHclTerraform(struct!.dstIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.numberToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip: {
      value: cdktf.stringToHclTerraform(struct!.srcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.numberToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAlarmGroupsFwPolicyViolationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAlarmGroupsFwPolicyViolations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIp = this._dstIp;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._srcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIp = this._srcIp;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAlarmGroupsFwPolicyViolations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstIp = undefined;
      this._dstPort = undefined;
      this._id = undefined;
      this._srcIp = undefined;
      this._srcPort = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstIp = value.dstIp;
      this._dstPort = value.dstPort;
      this._id = value.id;
      this._srcIp = value.srcIp;
      this._srcPort = value.srcPort;
      this._threshold = value.threshold;
    }
  }

  // dst_ip - computed: true, optional: true, required: false
  private _dstIp?: string; 
  public get dstIp() {
    return this.getStringAttribute('dst_ip');
  }
  public set dstIp(value: string) {
    this._dstIp = value;
  }
  public resetDstIp() {
    this._dstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpInput() {
    return this._dstIp;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: number; 
  public get dstPort() {
    return this.getNumberAttribute('dst_port');
  }
  public set dstPort(value: number) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // src_ip - computed: true, optional: true, required: false
  private _srcIp?: string; 
  public get srcIp() {
    return this.getStringAttribute('src_ip');
  }
  public set srcIp(value: string) {
    this._srcIp = value;
  }
  public resetSrcIp() {
    this._srcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: number; 
  public get srcPort() {
    return this.getNumberAttribute('src_port');
  }
  public set srcPort(value: number) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class SystemAlarmGroupsFwPolicyViolationsList extends cdktf.ComplexList {
  public internalValue? : SystemAlarmGroupsFwPolicyViolations[] | cdktf.IResolvable

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
  public get(index: number): SystemAlarmGroupsFwPolicyViolationsOutputReference {
    return new SystemAlarmGroupsFwPolicyViolationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemAlarmGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#admin_auth_failure_threshold SystemAlarm#admin_auth_failure_threshold}
  */
  readonly adminAuthFailureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#admin_auth_lockout_threshold SystemAlarm#admin_auth_lockout_threshold}
  */
  readonly adminAuthLockoutThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#decryption_failure_threshold SystemAlarm#decryption_failure_threshold}
  */
  readonly decryptionFailureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#encryption_failure_threshold SystemAlarm#encryption_failure_threshold}
  */
  readonly encryptionFailureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#fw_policy_id SystemAlarm#fw_policy_id}
  */
  readonly fwPolicyId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#fw_policy_id_threshold SystemAlarm#fw_policy_id_threshold}
  */
  readonly fwPolicyIdThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#id SystemAlarm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#log_full_warning_threshold SystemAlarm#log_full_warning_threshold}
  */
  readonly logFullWarningThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#period SystemAlarm#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#replay_attempt_threshold SystemAlarm#replay_attempt_threshold}
  */
  readonly replayAttemptThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#self_test_failure_threshold SystemAlarm#self_test_failure_threshold}
  */
  readonly selfTestFailureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#user_auth_failure_threshold SystemAlarm#user_auth_failure_threshold}
  */
  readonly userAuthFailureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#user_auth_lockout_threshold SystemAlarm#user_auth_lockout_threshold}
  */
  readonly userAuthLockoutThreshold?: number;
  /**
  * fw_policy_violations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#fw_policy_violations SystemAlarm#fw_policy_violations}
  */
  readonly fwPolicyViolations?: SystemAlarmGroupsFwPolicyViolations[] | cdktf.IResolvable;
}

export function systemAlarmGroupsToTerraform(struct?: SystemAlarmGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_auth_failure_threshold: cdktf.numberToTerraform(struct!.adminAuthFailureThreshold),
    admin_auth_lockout_threshold: cdktf.numberToTerraform(struct!.adminAuthLockoutThreshold),
    decryption_failure_threshold: cdktf.numberToTerraform(struct!.decryptionFailureThreshold),
    encryption_failure_threshold: cdktf.numberToTerraform(struct!.encryptionFailureThreshold),
    fw_policy_id: cdktf.numberToTerraform(struct!.fwPolicyId),
    fw_policy_id_threshold: cdktf.numberToTerraform(struct!.fwPolicyIdThreshold),
    id: cdktf.numberToTerraform(struct!.id),
    log_full_warning_threshold: cdktf.numberToTerraform(struct!.logFullWarningThreshold),
    period: cdktf.numberToTerraform(struct!.period),
    replay_attempt_threshold: cdktf.numberToTerraform(struct!.replayAttemptThreshold),
    self_test_failure_threshold: cdktf.numberToTerraform(struct!.selfTestFailureThreshold),
    user_auth_failure_threshold: cdktf.numberToTerraform(struct!.userAuthFailureThreshold),
    user_auth_lockout_threshold: cdktf.numberToTerraform(struct!.userAuthLockoutThreshold),
    fw_policy_violations: cdktf.listMapper(systemAlarmGroupsFwPolicyViolationsToTerraform, true)(struct!.fwPolicyViolations),
  }
}


export function systemAlarmGroupsToHclTerraform(struct?: SystemAlarmGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_auth_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.adminAuthFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    admin_auth_lockout_threshold: {
      value: cdktf.numberToHclTerraform(struct!.adminAuthLockoutThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decryption_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.decryptionFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encryption_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.encryptionFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_policy_id: {
      value: cdktf.numberToHclTerraform(struct!.fwPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_policy_id_threshold: {
      value: cdktf.numberToHclTerraform(struct!.fwPolicyIdThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_full_warning_threshold: {
      value: cdktf.numberToHclTerraform(struct!.logFullWarningThreshold),
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
    replay_attempt_threshold: {
      value: cdktf.numberToHclTerraform(struct!.replayAttemptThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    self_test_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.selfTestFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_auth_failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.userAuthFailureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_auth_lockout_threshold: {
      value: cdktf.numberToHclTerraform(struct!.userAuthLockoutThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_policy_violations: {
      value: cdktf.listMapperHcl(systemAlarmGroupsFwPolicyViolationsToHclTerraform, true)(struct!.fwPolicyViolations),
      isBlock: true,
      type: "list",
      storageClassType: "SystemAlarmGroupsFwPolicyViolationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAlarmGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemAlarmGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminAuthFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminAuthFailureThreshold = this._adminAuthFailureThreshold;
    }
    if (this._adminAuthLockoutThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminAuthLockoutThreshold = this._adminAuthLockoutThreshold;
    }
    if (this._decryptionFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionFailureThreshold = this._decryptionFailureThreshold;
    }
    if (this._encryptionFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionFailureThreshold = this._encryptionFailureThreshold;
    }
    if (this._fwPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwPolicyId = this._fwPolicyId;
    }
    if (this._fwPolicyIdThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwPolicyIdThreshold = this._fwPolicyIdThreshold;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._logFullWarningThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFullWarningThreshold = this._logFullWarningThreshold;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._replayAttemptThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.replayAttemptThreshold = this._replayAttemptThreshold;
    }
    if (this._selfTestFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfTestFailureThreshold = this._selfTestFailureThreshold;
    }
    if (this._userAuthFailureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAuthFailureThreshold = this._userAuthFailureThreshold;
    }
    if (this._userAuthLockoutThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAuthLockoutThreshold = this._userAuthLockoutThreshold;
    }
    if (this._fwPolicyViolations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwPolicyViolations = this._fwPolicyViolations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAlarmGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminAuthFailureThreshold = undefined;
      this._adminAuthLockoutThreshold = undefined;
      this._decryptionFailureThreshold = undefined;
      this._encryptionFailureThreshold = undefined;
      this._fwPolicyId = undefined;
      this._fwPolicyIdThreshold = undefined;
      this._id = undefined;
      this._logFullWarningThreshold = undefined;
      this._period = undefined;
      this._replayAttemptThreshold = undefined;
      this._selfTestFailureThreshold = undefined;
      this._userAuthFailureThreshold = undefined;
      this._userAuthLockoutThreshold = undefined;
      this._fwPolicyViolations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminAuthFailureThreshold = value.adminAuthFailureThreshold;
      this._adminAuthLockoutThreshold = value.adminAuthLockoutThreshold;
      this._decryptionFailureThreshold = value.decryptionFailureThreshold;
      this._encryptionFailureThreshold = value.encryptionFailureThreshold;
      this._fwPolicyId = value.fwPolicyId;
      this._fwPolicyIdThreshold = value.fwPolicyIdThreshold;
      this._id = value.id;
      this._logFullWarningThreshold = value.logFullWarningThreshold;
      this._period = value.period;
      this._replayAttemptThreshold = value.replayAttemptThreshold;
      this._selfTestFailureThreshold = value.selfTestFailureThreshold;
      this._userAuthFailureThreshold = value.userAuthFailureThreshold;
      this._userAuthLockoutThreshold = value.userAuthLockoutThreshold;
      this._fwPolicyViolations.internalValue = value.fwPolicyViolations;
    }
  }

  // admin_auth_failure_threshold - computed: false, optional: true, required: false
  private _adminAuthFailureThreshold?: number; 
  public get adminAuthFailureThreshold() {
    return this.getNumberAttribute('admin_auth_failure_threshold');
  }
  public set adminAuthFailureThreshold(value: number) {
    this._adminAuthFailureThreshold = value;
  }
  public resetAdminAuthFailureThreshold() {
    this._adminAuthFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminAuthFailureThresholdInput() {
    return this._adminAuthFailureThreshold;
  }

  // admin_auth_lockout_threshold - computed: false, optional: true, required: false
  private _adminAuthLockoutThreshold?: number; 
  public get adminAuthLockoutThreshold() {
    return this.getNumberAttribute('admin_auth_lockout_threshold');
  }
  public set adminAuthLockoutThreshold(value: number) {
    this._adminAuthLockoutThreshold = value;
  }
  public resetAdminAuthLockoutThreshold() {
    this._adminAuthLockoutThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminAuthLockoutThresholdInput() {
    return this._adminAuthLockoutThreshold;
  }

  // decryption_failure_threshold - computed: false, optional: true, required: false
  private _decryptionFailureThreshold?: number; 
  public get decryptionFailureThreshold() {
    return this.getNumberAttribute('decryption_failure_threshold');
  }
  public set decryptionFailureThreshold(value: number) {
    this._decryptionFailureThreshold = value;
  }
  public resetDecryptionFailureThreshold() {
    this._decryptionFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionFailureThresholdInput() {
    return this._decryptionFailureThreshold;
  }

  // encryption_failure_threshold - computed: false, optional: true, required: false
  private _encryptionFailureThreshold?: number; 
  public get encryptionFailureThreshold() {
    return this.getNumberAttribute('encryption_failure_threshold');
  }
  public set encryptionFailureThreshold(value: number) {
    this._encryptionFailureThreshold = value;
  }
  public resetEncryptionFailureThreshold() {
    this._encryptionFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionFailureThresholdInput() {
    return this._encryptionFailureThreshold;
  }

  // fw_policy_id - computed: false, optional: true, required: false
  private _fwPolicyId?: number; 
  public get fwPolicyId() {
    return this.getNumberAttribute('fw_policy_id');
  }
  public set fwPolicyId(value: number) {
    this._fwPolicyId = value;
  }
  public resetFwPolicyId() {
    this._fwPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwPolicyIdInput() {
    return this._fwPolicyId;
  }

  // fw_policy_id_threshold - computed: false, optional: true, required: false
  private _fwPolicyIdThreshold?: number; 
  public get fwPolicyIdThreshold() {
    return this.getNumberAttribute('fw_policy_id_threshold');
  }
  public set fwPolicyIdThreshold(value: number) {
    this._fwPolicyIdThreshold = value;
  }
  public resetFwPolicyIdThreshold() {
    this._fwPolicyIdThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwPolicyIdThresholdInput() {
    return this._fwPolicyIdThreshold;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // log_full_warning_threshold - computed: false, optional: true, required: false
  private _logFullWarningThreshold?: number; 
  public get logFullWarningThreshold() {
    return this.getNumberAttribute('log_full_warning_threshold');
  }
  public set logFullWarningThreshold(value: number) {
    this._logFullWarningThreshold = value;
  }
  public resetLogFullWarningThreshold() {
    this._logFullWarningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFullWarningThresholdInput() {
    return this._logFullWarningThreshold;
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

  // replay_attempt_threshold - computed: false, optional: true, required: false
  private _replayAttemptThreshold?: number; 
  public get replayAttemptThreshold() {
    return this.getNumberAttribute('replay_attempt_threshold');
  }
  public set replayAttemptThreshold(value: number) {
    this._replayAttemptThreshold = value;
  }
  public resetReplayAttemptThreshold() {
    this._replayAttemptThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayAttemptThresholdInput() {
    return this._replayAttemptThreshold;
  }

  // self_test_failure_threshold - computed: false, optional: true, required: false
  private _selfTestFailureThreshold?: number; 
  public get selfTestFailureThreshold() {
    return this.getNumberAttribute('self_test_failure_threshold');
  }
  public set selfTestFailureThreshold(value: number) {
    this._selfTestFailureThreshold = value;
  }
  public resetSelfTestFailureThreshold() {
    this._selfTestFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfTestFailureThresholdInput() {
    return this._selfTestFailureThreshold;
  }

  // user_auth_failure_threshold - computed: false, optional: true, required: false
  private _userAuthFailureThreshold?: number; 
  public get userAuthFailureThreshold() {
    return this.getNumberAttribute('user_auth_failure_threshold');
  }
  public set userAuthFailureThreshold(value: number) {
    this._userAuthFailureThreshold = value;
  }
  public resetUserAuthFailureThreshold() {
    this._userAuthFailureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthFailureThresholdInput() {
    return this._userAuthFailureThreshold;
  }

  // user_auth_lockout_threshold - computed: false, optional: true, required: false
  private _userAuthLockoutThreshold?: number; 
  public get userAuthLockoutThreshold() {
    return this.getNumberAttribute('user_auth_lockout_threshold');
  }
  public set userAuthLockoutThreshold(value: number) {
    this._userAuthLockoutThreshold = value;
  }
  public resetUserAuthLockoutThreshold() {
    this._userAuthLockoutThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthLockoutThresholdInput() {
    return this._userAuthLockoutThreshold;
  }

  // fw_policy_violations - computed: false, optional: true, required: false
  private _fwPolicyViolations = new SystemAlarmGroupsFwPolicyViolationsList(this, "fw_policy_violations", false);
  public get fwPolicyViolations() {
    return this._fwPolicyViolations;
  }
  public putFwPolicyViolations(value: SystemAlarmGroupsFwPolicyViolations[] | cdktf.IResolvable) {
    this._fwPolicyViolations.internalValue = value;
  }
  public resetFwPolicyViolations() {
    this._fwPolicyViolations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwPolicyViolationsInput() {
    return this._fwPolicyViolations.internalValue;
  }
}

export class SystemAlarmGroupsList extends cdktf.ComplexList {
  public internalValue? : SystemAlarmGroups[] | cdktf.IResolvable

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
  public get(index: number): SystemAlarmGroupsOutputReference {
    return new SystemAlarmGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm fortios_system_alarm}
*/
export class SystemAlarm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_alarm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAlarm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAlarm to import
  * @param importFromId The id of the existing SystemAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAlarm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_alarm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_alarm fortios_system_alarm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAlarmConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAlarmConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_alarm',
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
    this._audible = config.audible;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._status = config.status;
    this._vdomparam = config.vdomparam;
    this._groups.internalValue = config.groups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audible - computed: true, optional: true, required: false
  private _audible?: string; 
  public get audible() {
    return this.getStringAttribute('audible');
  }
  public set audible(value: string) {
    this._audible = value;
  }
  public resetAudible() {
    this._audible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audibleInput() {
    return this._audible;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // groups - computed: false, optional: true, required: false
  private _groups = new SystemAlarmGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: SystemAlarmGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audible: cdktf.stringToTerraform(this._audible),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.stringToTerraform(this._status),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      groups: cdktf.listMapper(systemAlarmGroupsToTerraform, true)(this._groups.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audible: {
        value: cdktf.stringToHclTerraform(this._audible),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      groups: {
        value: cdktf.listMapperHcl(systemAlarmGroupsToHclTerraform, true)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAlarmGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
