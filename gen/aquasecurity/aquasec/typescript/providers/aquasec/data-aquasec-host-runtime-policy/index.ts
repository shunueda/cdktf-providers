// https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAquasecHostRuntimePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#id DataAquasecHostRuntimePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the host runtime policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#name DataAquasecHostRuntimePolicy#name}
  */
  readonly name: string;
  /**
  * auditing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#auditing DataAquasecHostRuntimePolicy#auditing}
  */
  readonly auditing?: DataAquasecHostRuntimePolicyAuditing;
  /**
  * file_integrity_monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#file_integrity_monitoring DataAquasecHostRuntimePolicy#file_integrity_monitoring}
  */
  readonly fileIntegrityMonitoring?: DataAquasecHostRuntimePolicyFileIntegrityMonitoring[] | cdktf.IResolvable;
  /**
  * package_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#package_block DataAquasecHostRuntimePolicy#package_block}
  */
  readonly packageBlock?: DataAquasecHostRuntimePolicyPackageBlock;
}
export interface DataAquasecHostRuntimePolicyMalwareScanOptions {
}

export function dataAquasecHostRuntimePolicyMalwareScanOptionsToTerraform(struct?: DataAquasecHostRuntimePolicyMalwareScanOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecHostRuntimePolicyMalwareScanOptionsToHclTerraform(struct?: DataAquasecHostRuntimePolicyMalwareScanOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecHostRuntimePolicyMalwareScanOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecHostRuntimePolicyMalwareScanOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecHostRuntimePolicyMalwareScanOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exclude_directories - computed: true, optional: false, required: false
  public get excludeDirectories() {
    return this.getListAttribute('exclude_directories');
  }

  // exclude_processes - computed: true, optional: false, required: false
  public get excludeProcesses() {
    return this.getListAttribute('exclude_processes');
  }

  // file_forensic_collection - computed: true, optional: false, required: false
  public get fileForensicCollection() {
    return this.getBooleanAttribute('file_forensic_collection');
  }

  // include_directories - computed: true, optional: false, required: false
  public get includeDirectories() {
    return this.getListAttribute('include_directories');
  }
}

export class DataAquasecHostRuntimePolicyMalwareScanOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecHostRuntimePolicyMalwareScanOptionsOutputReference {
    return new DataAquasecHostRuntimePolicyMalwareScanOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecHostRuntimePolicyScopeVariables {
}

export function dataAquasecHostRuntimePolicyScopeVariablesToTerraform(struct?: DataAquasecHostRuntimePolicyScopeVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecHostRuntimePolicyScopeVariablesToHclTerraform(struct?: DataAquasecHostRuntimePolicyScopeVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecHostRuntimePolicyScopeVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecHostRuntimePolicyScopeVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecHostRuntimePolicyScopeVariables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute - computed: true, optional: false, required: false
  public get attribute() {
    return this.getStringAttribute('attribute');
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

export class DataAquasecHostRuntimePolicyScopeVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecHostRuntimePolicyScopeVariablesOutputReference {
    return new DataAquasecHostRuntimePolicyScopeVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecHostRuntimePolicyWindowsRegistryMonitoring {
}

export function dataAquasecHostRuntimePolicyWindowsRegistryMonitoringToTerraform(struct?: DataAquasecHostRuntimePolicyWindowsRegistryMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecHostRuntimePolicyWindowsRegistryMonitoringToHclTerraform(struct?: DataAquasecHostRuntimePolicyWindowsRegistryMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecHostRuntimePolicyWindowsRegistryMonitoringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecHostRuntimePolicyWindowsRegistryMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecHostRuntimePolicyWindowsRegistryMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_paths - computed: true, optional: false, required: false
  public get excludedPaths() {
    return this.getListAttribute('excluded_paths');
  }

  // excluded_processes - computed: true, optional: false, required: false
  public get excludedProcesses() {
    return this.getListAttribute('excluded_processes');
  }

  // excluded_users - computed: true, optional: false, required: false
  public get excludedUsers() {
    return this.getListAttribute('excluded_users');
  }

  // monitor_attributes - computed: true, optional: false, required: false
  public get monitorAttributes() {
    return this.getBooleanAttribute('monitor_attributes');
  }

  // monitor_create - computed: true, optional: false, required: false
  public get monitorCreate() {
    return this.getBooleanAttribute('monitor_create');
  }

  // monitor_delete - computed: true, optional: false, required: false
  public get monitorDelete() {
    return this.getBooleanAttribute('monitor_delete');
  }

  // monitor_modify - computed: true, optional: false, required: false
  public get monitorModify() {
    return this.getBooleanAttribute('monitor_modify');
  }

  // monitor_read - computed: true, optional: false, required: false
  public get monitorRead() {
    return this.getBooleanAttribute('monitor_read');
  }

  // monitored_paths - computed: true, optional: false, required: false
  public get monitoredPaths() {
    return this.getListAttribute('monitored_paths');
  }

  // monitored_processes - computed: true, optional: false, required: false
  public get monitoredProcesses() {
    return this.getListAttribute('monitored_processes');
  }

  // monitored_users - computed: true, optional: false, required: false
  public get monitoredUsers() {
    return this.getListAttribute('monitored_users');
  }
}

export class DataAquasecHostRuntimePolicyWindowsRegistryMonitoringList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecHostRuntimePolicyWindowsRegistryMonitoringOutputReference {
    return new DataAquasecHostRuntimePolicyWindowsRegistryMonitoringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecHostRuntimePolicyWindowsRegistryProtection {
}

export function dataAquasecHostRuntimePolicyWindowsRegistryProtectionToTerraform(struct?: DataAquasecHostRuntimePolicyWindowsRegistryProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecHostRuntimePolicyWindowsRegistryProtectionToHclTerraform(struct?: DataAquasecHostRuntimePolicyWindowsRegistryProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecHostRuntimePolicyWindowsRegistryProtectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecHostRuntimePolicyWindowsRegistryProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecHostRuntimePolicyWindowsRegistryProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // excluded_paths - computed: true, optional: false, required: false
  public get excludedPaths() {
    return this.getListAttribute('excluded_paths');
  }

  // excluded_processes - computed: true, optional: false, required: false
  public get excludedProcesses() {
    return this.getListAttribute('excluded_processes');
  }

  // excluded_users - computed: true, optional: false, required: false
  public get excludedUsers() {
    return this.getListAttribute('excluded_users');
  }

  // protected_paths - computed: true, optional: false, required: false
  public get protectedPaths() {
    return this.getListAttribute('protected_paths');
  }

  // protected_processes - computed: true, optional: false, required: false
  public get protectedProcesses() {
    return this.getListAttribute('protected_processes');
  }

  // protected_users - computed: true, optional: false, required: false
  public get protectedUsers() {
    return this.getListAttribute('protected_users');
  }
}

export class DataAquasecHostRuntimePolicyWindowsRegistryProtectionList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecHostRuntimePolicyWindowsRegistryProtectionOutputReference {
    return new DataAquasecHostRuntimePolicyWindowsRegistryProtectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecHostRuntimePolicyAuditing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#audit_all_network DataAquasecHostRuntimePolicy#audit_all_network}
  */
  readonly auditAllNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#audit_all_processes DataAquasecHostRuntimePolicy#audit_all_processes}
  */
  readonly auditAllProcesses?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#audit_failed_login DataAquasecHostRuntimePolicy#audit_failed_login}
  */
  readonly auditFailedLogin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#audit_os_user_activity DataAquasecHostRuntimePolicy#audit_os_user_activity}
  */
  readonly auditOsUserActivity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#audit_process_cmdline DataAquasecHostRuntimePolicy#audit_process_cmdline}
  */
  readonly auditProcessCmdline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#audit_success_login DataAquasecHostRuntimePolicy#audit_success_login}
  */
  readonly auditSuccessLogin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#audit_user_account_management DataAquasecHostRuntimePolicy#audit_user_account_management}
  */
  readonly auditUserAccountManagement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#enabled DataAquasecHostRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataAquasecHostRuntimePolicyAuditingToTerraform(struct?: DataAquasecHostRuntimePolicyAuditingOutputReference | DataAquasecHostRuntimePolicyAuditing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_all_network: cdktf.booleanToTerraform(struct!.auditAllNetwork),
    audit_all_processes: cdktf.booleanToTerraform(struct!.auditAllProcesses),
    audit_failed_login: cdktf.booleanToTerraform(struct!.auditFailedLogin),
    audit_os_user_activity: cdktf.booleanToTerraform(struct!.auditOsUserActivity),
    audit_process_cmdline: cdktf.booleanToTerraform(struct!.auditProcessCmdline),
    audit_success_login: cdktf.booleanToTerraform(struct!.auditSuccessLogin),
    audit_user_account_management: cdktf.booleanToTerraform(struct!.auditUserAccountManagement),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataAquasecHostRuntimePolicyAuditingToHclTerraform(struct?: DataAquasecHostRuntimePolicyAuditingOutputReference | DataAquasecHostRuntimePolicyAuditing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_all_network: {
      value: cdktf.booleanToHclTerraform(struct!.auditAllNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit_all_processes: {
      value: cdktf.booleanToHclTerraform(struct!.auditAllProcesses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit_failed_login: {
      value: cdktf.booleanToHclTerraform(struct!.auditFailedLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit_os_user_activity: {
      value: cdktf.booleanToHclTerraform(struct!.auditOsUserActivity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit_process_cmdline: {
      value: cdktf.booleanToHclTerraform(struct!.auditProcessCmdline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit_success_login: {
      value: cdktf.booleanToHclTerraform(struct!.auditSuccessLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audit_user_account_management: {
      value: cdktf.booleanToHclTerraform(struct!.auditUserAccountManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAquasecHostRuntimePolicyAuditingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAquasecHostRuntimePolicyAuditing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditAllNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditAllNetwork = this._auditAllNetwork;
    }
    if (this._auditAllProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditAllProcesses = this._auditAllProcesses;
    }
    if (this._auditFailedLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditFailedLogin = this._auditFailedLogin;
    }
    if (this._auditOsUserActivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditOsUserActivity = this._auditOsUserActivity;
    }
    if (this._auditProcessCmdline !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditProcessCmdline = this._auditProcessCmdline;
    }
    if (this._auditSuccessLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditSuccessLogin = this._auditSuccessLogin;
    }
    if (this._auditUserAccountManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditUserAccountManagement = this._auditUserAccountManagement;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecHostRuntimePolicyAuditing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditAllNetwork = undefined;
      this._auditAllProcesses = undefined;
      this._auditFailedLogin = undefined;
      this._auditOsUserActivity = undefined;
      this._auditProcessCmdline = undefined;
      this._auditSuccessLogin = undefined;
      this._auditUserAccountManagement = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditAllNetwork = value.auditAllNetwork;
      this._auditAllProcesses = value.auditAllProcesses;
      this._auditFailedLogin = value.auditFailedLogin;
      this._auditOsUserActivity = value.auditOsUserActivity;
      this._auditProcessCmdline = value.auditProcessCmdline;
      this._auditSuccessLogin = value.auditSuccessLogin;
      this._auditUserAccountManagement = value.auditUserAccountManagement;
      this._enabled = value.enabled;
    }
  }

  // audit_all_network - computed: false, optional: true, required: false
  private _auditAllNetwork?: boolean | cdktf.IResolvable; 
  public get auditAllNetwork() {
    return this.getBooleanAttribute('audit_all_network');
  }
  public set auditAllNetwork(value: boolean | cdktf.IResolvable) {
    this._auditAllNetwork = value;
  }
  public resetAuditAllNetwork() {
    this._auditAllNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAllNetworkInput() {
    return this._auditAllNetwork;
  }

  // audit_all_processes - computed: false, optional: true, required: false
  private _auditAllProcesses?: boolean | cdktf.IResolvable; 
  public get auditAllProcesses() {
    return this.getBooleanAttribute('audit_all_processes');
  }
  public set auditAllProcesses(value: boolean | cdktf.IResolvable) {
    this._auditAllProcesses = value;
  }
  public resetAuditAllProcesses() {
    this._auditAllProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditAllProcessesInput() {
    return this._auditAllProcesses;
  }

  // audit_failed_login - computed: false, optional: true, required: false
  private _auditFailedLogin?: boolean | cdktf.IResolvable; 
  public get auditFailedLogin() {
    return this.getBooleanAttribute('audit_failed_login');
  }
  public set auditFailedLogin(value: boolean | cdktf.IResolvable) {
    this._auditFailedLogin = value;
  }
  public resetAuditFailedLogin() {
    this._auditFailedLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditFailedLoginInput() {
    return this._auditFailedLogin;
  }

  // audit_os_user_activity - computed: false, optional: true, required: false
  private _auditOsUserActivity?: boolean | cdktf.IResolvable; 
  public get auditOsUserActivity() {
    return this.getBooleanAttribute('audit_os_user_activity');
  }
  public set auditOsUserActivity(value: boolean | cdktf.IResolvable) {
    this._auditOsUserActivity = value;
  }
  public resetAuditOsUserActivity() {
    this._auditOsUserActivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditOsUserActivityInput() {
    return this._auditOsUserActivity;
  }

  // audit_process_cmdline - computed: false, optional: true, required: false
  private _auditProcessCmdline?: boolean | cdktf.IResolvable; 
  public get auditProcessCmdline() {
    return this.getBooleanAttribute('audit_process_cmdline');
  }
  public set auditProcessCmdline(value: boolean | cdktf.IResolvable) {
    this._auditProcessCmdline = value;
  }
  public resetAuditProcessCmdline() {
    this._auditProcessCmdline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditProcessCmdlineInput() {
    return this._auditProcessCmdline;
  }

  // audit_success_login - computed: false, optional: true, required: false
  private _auditSuccessLogin?: boolean | cdktf.IResolvable; 
  public get auditSuccessLogin() {
    return this.getBooleanAttribute('audit_success_login');
  }
  public set auditSuccessLogin(value: boolean | cdktf.IResolvable) {
    this._auditSuccessLogin = value;
  }
  public resetAuditSuccessLogin() {
    this._auditSuccessLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditSuccessLoginInput() {
    return this._auditSuccessLogin;
  }

  // audit_user_account_management - computed: false, optional: true, required: false
  private _auditUserAccountManagement?: boolean | cdktf.IResolvable; 
  public get auditUserAccountManagement() {
    return this.getBooleanAttribute('audit_user_account_management');
  }
  public set auditUserAccountManagement(value: boolean | cdktf.IResolvable) {
    this._auditUserAccountManagement = value;
  }
  public resetAuditUserAccountManagement() {
    this._auditUserAccountManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditUserAccountManagementInput() {
    return this._auditUserAccountManagement;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DataAquasecHostRuntimePolicyFileIntegrityMonitoring {
  /**
  * If true, file integrity monitoring is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#enabled DataAquasecHostRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of paths to be excluded from monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#exceptional_monitored_files DataAquasecHostRuntimePolicy#exceptional_monitored_files}
  */
  readonly exceptionalMonitoredFiles?: string[];
  /**
  * List of processes to be excluded from monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#exceptional_monitored_files_processes DataAquasecHostRuntimePolicy#exceptional_monitored_files_processes}
  */
  readonly exceptionalMonitoredFilesProcesses?: string[];
  /**
  * List of users to be excluded from monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#exceptional_monitored_files_users DataAquasecHostRuntimePolicy#exceptional_monitored_files_users}
  */
  readonly exceptionalMonitoredFilesUsers?: string[];
  /**
  * List of paths to be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#monitored_files DataAquasecHostRuntimePolicy#monitored_files}
  */
  readonly monitoredFiles?: string[];
  /**
  * Whether to monitor file attribute operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#monitored_files_attributes DataAquasecHostRuntimePolicy#monitored_files_attributes}
  */
  readonly monitoredFilesAttributes?: boolean | cdktf.IResolvable;
  /**
  * Whether to monitor file create operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#monitored_files_create DataAquasecHostRuntimePolicy#monitored_files_create}
  */
  readonly monitoredFilesCreate?: boolean | cdktf.IResolvable;
  /**
  * Whether to monitor file delete operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#monitored_files_delete DataAquasecHostRuntimePolicy#monitored_files_delete}
  */
  readonly monitoredFilesDelete?: boolean | cdktf.IResolvable;
  /**
  * Whether to monitor file modify operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#monitored_files_modify DataAquasecHostRuntimePolicy#monitored_files_modify}
  */
  readonly monitoredFilesModify?: boolean | cdktf.IResolvable;
  /**
  * List of processes associated with monitored files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#monitored_files_processes DataAquasecHostRuntimePolicy#monitored_files_processes}
  */
  readonly monitoredFilesProcesses?: string[];
  /**
  * Whether to monitor file read operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#monitored_files_read DataAquasecHostRuntimePolicy#monitored_files_read}
  */
  readonly monitoredFilesRead?: boolean | cdktf.IResolvable;
  /**
  * List of users associated with monitored files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#monitored_files_users DataAquasecHostRuntimePolicy#monitored_files_users}
  */
  readonly monitoredFilesUsers?: string[];
}

export function dataAquasecHostRuntimePolicyFileIntegrityMonitoringToTerraform(struct?: DataAquasecHostRuntimePolicyFileIntegrityMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exceptional_monitored_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalMonitoredFiles),
    exceptional_monitored_files_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalMonitoredFilesProcesses),
    exceptional_monitored_files_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalMonitoredFilesUsers),
    monitored_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoredFiles),
    monitored_files_attributes: cdktf.booleanToTerraform(struct!.monitoredFilesAttributes),
    monitored_files_create: cdktf.booleanToTerraform(struct!.monitoredFilesCreate),
    monitored_files_delete: cdktf.booleanToTerraform(struct!.monitoredFilesDelete),
    monitored_files_modify: cdktf.booleanToTerraform(struct!.monitoredFilesModify),
    monitored_files_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoredFilesProcesses),
    monitored_files_read: cdktf.booleanToTerraform(struct!.monitoredFilesRead),
    monitored_files_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoredFilesUsers),
  }
}


export function dataAquasecHostRuntimePolicyFileIntegrityMonitoringToHclTerraform(struct?: DataAquasecHostRuntimePolicyFileIntegrityMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exceptional_monitored_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalMonitoredFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_monitored_files_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalMonitoredFilesProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_monitored_files_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalMonitoredFilesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    monitored_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoredFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    monitored_files_attributes: {
      value: cdktf.booleanToHclTerraform(struct!.monitoredFilesAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitored_files_create: {
      value: cdktf.booleanToHclTerraform(struct!.monitoredFilesCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitored_files_delete: {
      value: cdktf.booleanToHclTerraform(struct!.monitoredFilesDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitored_files_modify: {
      value: cdktf.booleanToHclTerraform(struct!.monitoredFilesModify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitored_files_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoredFilesProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    monitored_files_read: {
      value: cdktf.booleanToHclTerraform(struct!.monitoredFilesRead),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitored_files_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoredFilesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAquasecHostRuntimePolicyFileIntegrityMonitoringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecHostRuntimePolicyFileIntegrityMonitoring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exceptionalMonitoredFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalMonitoredFiles = this._exceptionalMonitoredFiles;
    }
    if (this._exceptionalMonitoredFilesProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalMonitoredFilesProcesses = this._exceptionalMonitoredFilesProcesses;
    }
    if (this._exceptionalMonitoredFilesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalMonitoredFilesUsers = this._exceptionalMonitoredFilesUsers;
    }
    if (this._monitoredFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredFiles = this._monitoredFiles;
    }
    if (this._monitoredFilesAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredFilesAttributes = this._monitoredFilesAttributes;
    }
    if (this._monitoredFilesCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredFilesCreate = this._monitoredFilesCreate;
    }
    if (this._monitoredFilesDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredFilesDelete = this._monitoredFilesDelete;
    }
    if (this._monitoredFilesModify !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredFilesModify = this._monitoredFilesModify;
    }
    if (this._monitoredFilesProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredFilesProcesses = this._monitoredFilesProcesses;
    }
    if (this._monitoredFilesRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredFilesRead = this._monitoredFilesRead;
    }
    if (this._monitoredFilesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoredFilesUsers = this._monitoredFilesUsers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecHostRuntimePolicyFileIntegrityMonitoring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._exceptionalMonitoredFiles = undefined;
      this._exceptionalMonitoredFilesProcesses = undefined;
      this._exceptionalMonitoredFilesUsers = undefined;
      this._monitoredFiles = undefined;
      this._monitoredFilesAttributes = undefined;
      this._monitoredFilesCreate = undefined;
      this._monitoredFilesDelete = undefined;
      this._monitoredFilesModify = undefined;
      this._monitoredFilesProcesses = undefined;
      this._monitoredFilesRead = undefined;
      this._monitoredFilesUsers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._exceptionalMonitoredFiles = value.exceptionalMonitoredFiles;
      this._exceptionalMonitoredFilesProcesses = value.exceptionalMonitoredFilesProcesses;
      this._exceptionalMonitoredFilesUsers = value.exceptionalMonitoredFilesUsers;
      this._monitoredFiles = value.monitoredFiles;
      this._monitoredFilesAttributes = value.monitoredFilesAttributes;
      this._monitoredFilesCreate = value.monitoredFilesCreate;
      this._monitoredFilesDelete = value.monitoredFilesDelete;
      this._monitoredFilesModify = value.monitoredFilesModify;
      this._monitoredFilesProcesses = value.monitoredFilesProcesses;
      this._monitoredFilesRead = value.monitoredFilesRead;
      this._monitoredFilesUsers = value.monitoredFilesUsers;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exceptional_monitored_files - computed: false, optional: true, required: false
  private _exceptionalMonitoredFiles?: string[]; 
  public get exceptionalMonitoredFiles() {
    return this.getListAttribute('exceptional_monitored_files');
  }
  public set exceptionalMonitoredFiles(value: string[]) {
    this._exceptionalMonitoredFiles = value;
  }
  public resetExceptionalMonitoredFiles() {
    this._exceptionalMonitoredFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalMonitoredFilesInput() {
    return this._exceptionalMonitoredFiles;
  }

  // exceptional_monitored_files_processes - computed: false, optional: true, required: false
  private _exceptionalMonitoredFilesProcesses?: string[]; 
  public get exceptionalMonitoredFilesProcesses() {
    return this.getListAttribute('exceptional_monitored_files_processes');
  }
  public set exceptionalMonitoredFilesProcesses(value: string[]) {
    this._exceptionalMonitoredFilesProcesses = value;
  }
  public resetExceptionalMonitoredFilesProcesses() {
    this._exceptionalMonitoredFilesProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalMonitoredFilesProcessesInput() {
    return this._exceptionalMonitoredFilesProcesses;
  }

  // exceptional_monitored_files_users - computed: false, optional: true, required: false
  private _exceptionalMonitoredFilesUsers?: string[]; 
  public get exceptionalMonitoredFilesUsers() {
    return this.getListAttribute('exceptional_monitored_files_users');
  }
  public set exceptionalMonitoredFilesUsers(value: string[]) {
    this._exceptionalMonitoredFilesUsers = value;
  }
  public resetExceptionalMonitoredFilesUsers() {
    this._exceptionalMonitoredFilesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalMonitoredFilesUsersInput() {
    return this._exceptionalMonitoredFilesUsers;
  }

  // monitored_files - computed: false, optional: true, required: false
  private _monitoredFiles?: string[]; 
  public get monitoredFiles() {
    return this.getListAttribute('monitored_files');
  }
  public set monitoredFiles(value: string[]) {
    this._monitoredFiles = value;
  }
  public resetMonitoredFiles() {
    this._monitoredFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredFilesInput() {
    return this._monitoredFiles;
  }

  // monitored_files_attributes - computed: false, optional: true, required: false
  private _monitoredFilesAttributes?: boolean | cdktf.IResolvable; 
  public get monitoredFilesAttributes() {
    return this.getBooleanAttribute('monitored_files_attributes');
  }
  public set monitoredFilesAttributes(value: boolean | cdktf.IResolvable) {
    this._monitoredFilesAttributes = value;
  }
  public resetMonitoredFilesAttributes() {
    this._monitoredFilesAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredFilesAttributesInput() {
    return this._monitoredFilesAttributes;
  }

  // monitored_files_create - computed: false, optional: true, required: false
  private _monitoredFilesCreate?: boolean | cdktf.IResolvable; 
  public get monitoredFilesCreate() {
    return this.getBooleanAttribute('monitored_files_create');
  }
  public set monitoredFilesCreate(value: boolean | cdktf.IResolvable) {
    this._monitoredFilesCreate = value;
  }
  public resetMonitoredFilesCreate() {
    this._monitoredFilesCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredFilesCreateInput() {
    return this._monitoredFilesCreate;
  }

  // monitored_files_delete - computed: false, optional: true, required: false
  private _monitoredFilesDelete?: boolean | cdktf.IResolvable; 
  public get monitoredFilesDelete() {
    return this.getBooleanAttribute('monitored_files_delete');
  }
  public set monitoredFilesDelete(value: boolean | cdktf.IResolvable) {
    this._monitoredFilesDelete = value;
  }
  public resetMonitoredFilesDelete() {
    this._monitoredFilesDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredFilesDeleteInput() {
    return this._monitoredFilesDelete;
  }

  // monitored_files_modify - computed: false, optional: true, required: false
  private _monitoredFilesModify?: boolean | cdktf.IResolvable; 
  public get monitoredFilesModify() {
    return this.getBooleanAttribute('monitored_files_modify');
  }
  public set monitoredFilesModify(value: boolean | cdktf.IResolvable) {
    this._monitoredFilesModify = value;
  }
  public resetMonitoredFilesModify() {
    this._monitoredFilesModify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredFilesModifyInput() {
    return this._monitoredFilesModify;
  }

  // monitored_files_processes - computed: false, optional: true, required: false
  private _monitoredFilesProcesses?: string[]; 
  public get monitoredFilesProcesses() {
    return this.getListAttribute('monitored_files_processes');
  }
  public set monitoredFilesProcesses(value: string[]) {
    this._monitoredFilesProcesses = value;
  }
  public resetMonitoredFilesProcesses() {
    this._monitoredFilesProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredFilesProcessesInput() {
    return this._monitoredFilesProcesses;
  }

  // monitored_files_read - computed: false, optional: true, required: false
  private _monitoredFilesRead?: boolean | cdktf.IResolvable; 
  public get monitoredFilesRead() {
    return this.getBooleanAttribute('monitored_files_read');
  }
  public set monitoredFilesRead(value: boolean | cdktf.IResolvable) {
    this._monitoredFilesRead = value;
  }
  public resetMonitoredFilesRead() {
    this._monitoredFilesRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredFilesReadInput() {
    return this._monitoredFilesRead;
  }

  // monitored_files_users - computed: false, optional: true, required: false
  private _monitoredFilesUsers?: string[]; 
  public get monitoredFilesUsers() {
    return this.getListAttribute('monitored_files_users');
  }
  public set monitoredFilesUsers(value: string[]) {
    this._monitoredFilesUsers = value;
  }
  public resetMonitoredFilesUsers() {
    this._monitoredFilesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredFilesUsersInput() {
    return this._monitoredFilesUsers;
  }
}

export class DataAquasecHostRuntimePolicyFileIntegrityMonitoringList extends cdktf.ComplexList {
  public internalValue? : DataAquasecHostRuntimePolicyFileIntegrityMonitoring[] | cdktf.IResolvable

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
  public get(index: number): DataAquasecHostRuntimePolicyFileIntegrityMonitoringOutputReference {
    return new DataAquasecHostRuntimePolicyFileIntegrityMonitoringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecHostRuntimePolicyPackageBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#block_packages_processes DataAquasecHostRuntimePolicy#block_packages_processes}
  */
  readonly blockPackagesProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#block_packages_users DataAquasecHostRuntimePolicy#block_packages_users}
  */
  readonly blockPackagesUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#enabled DataAquasecHostRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#exceptional_block_packages_files DataAquasecHostRuntimePolicy#exceptional_block_packages_files}
  */
  readonly exceptionalBlockPackagesFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#exceptional_block_packages_processes DataAquasecHostRuntimePolicy#exceptional_block_packages_processes}
  */
  readonly exceptionalBlockPackagesProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#exceptional_block_packages_users DataAquasecHostRuntimePolicy#exceptional_block_packages_users}
  */
  readonly exceptionalBlockPackagesUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#packages_black_list DataAquasecHostRuntimePolicy#packages_black_list}
  */
  readonly packagesBlackList?: string[];
}

export function dataAquasecHostRuntimePolicyPackageBlockToTerraform(struct?: DataAquasecHostRuntimePolicyPackageBlockOutputReference | DataAquasecHostRuntimePolicyPackageBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_packages_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockPackagesProcesses),
    block_packages_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockPackagesUsers),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exceptional_block_packages_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalBlockPackagesFiles),
    exceptional_block_packages_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalBlockPackagesProcesses),
    exceptional_block_packages_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalBlockPackagesUsers),
    packages_black_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packagesBlackList),
  }
}


export function dataAquasecHostRuntimePolicyPackageBlockToHclTerraform(struct?: DataAquasecHostRuntimePolicyPackageBlockOutputReference | DataAquasecHostRuntimePolicyPackageBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_packages_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockPackagesProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    block_packages_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockPackagesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exceptional_block_packages_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalBlockPackagesFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_block_packages_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalBlockPackagesProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_block_packages_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalBlockPackagesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    packages_black_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.packagesBlackList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAquasecHostRuntimePolicyPackageBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAquasecHostRuntimePolicyPackageBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockPackagesProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPackagesProcesses = this._blockPackagesProcesses;
    }
    if (this._blockPackagesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPackagesUsers = this._blockPackagesUsers;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exceptionalBlockPackagesFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalBlockPackagesFiles = this._exceptionalBlockPackagesFiles;
    }
    if (this._exceptionalBlockPackagesProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalBlockPackagesProcesses = this._exceptionalBlockPackagesProcesses;
    }
    if (this._exceptionalBlockPackagesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalBlockPackagesUsers = this._exceptionalBlockPackagesUsers;
    }
    if (this._packagesBlackList !== undefined) {
      hasAnyValues = true;
      internalValueResult.packagesBlackList = this._packagesBlackList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecHostRuntimePolicyPackageBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockPackagesProcesses = undefined;
      this._blockPackagesUsers = undefined;
      this._enabled = undefined;
      this._exceptionalBlockPackagesFiles = undefined;
      this._exceptionalBlockPackagesProcesses = undefined;
      this._exceptionalBlockPackagesUsers = undefined;
      this._packagesBlackList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockPackagesProcesses = value.blockPackagesProcesses;
      this._blockPackagesUsers = value.blockPackagesUsers;
      this._enabled = value.enabled;
      this._exceptionalBlockPackagesFiles = value.exceptionalBlockPackagesFiles;
      this._exceptionalBlockPackagesProcesses = value.exceptionalBlockPackagesProcesses;
      this._exceptionalBlockPackagesUsers = value.exceptionalBlockPackagesUsers;
      this._packagesBlackList = value.packagesBlackList;
    }
  }

  // block_packages_processes - computed: false, optional: true, required: false
  private _blockPackagesProcesses?: string[]; 
  public get blockPackagesProcesses() {
    return this.getListAttribute('block_packages_processes');
  }
  public set blockPackagesProcesses(value: string[]) {
    this._blockPackagesProcesses = value;
  }
  public resetBlockPackagesProcesses() {
    this._blockPackagesProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPackagesProcessesInput() {
    return this._blockPackagesProcesses;
  }

  // block_packages_users - computed: false, optional: true, required: false
  private _blockPackagesUsers?: string[]; 
  public get blockPackagesUsers() {
    return this.getListAttribute('block_packages_users');
  }
  public set blockPackagesUsers(value: string[]) {
    this._blockPackagesUsers = value;
  }
  public resetBlockPackagesUsers() {
    this._blockPackagesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPackagesUsersInput() {
    return this._blockPackagesUsers;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exceptional_block_packages_files - computed: false, optional: true, required: false
  private _exceptionalBlockPackagesFiles?: string[]; 
  public get exceptionalBlockPackagesFiles() {
    return this.getListAttribute('exceptional_block_packages_files');
  }
  public set exceptionalBlockPackagesFiles(value: string[]) {
    this._exceptionalBlockPackagesFiles = value;
  }
  public resetExceptionalBlockPackagesFiles() {
    this._exceptionalBlockPackagesFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalBlockPackagesFilesInput() {
    return this._exceptionalBlockPackagesFiles;
  }

  // exceptional_block_packages_processes - computed: false, optional: true, required: false
  private _exceptionalBlockPackagesProcesses?: string[]; 
  public get exceptionalBlockPackagesProcesses() {
    return this.getListAttribute('exceptional_block_packages_processes');
  }
  public set exceptionalBlockPackagesProcesses(value: string[]) {
    this._exceptionalBlockPackagesProcesses = value;
  }
  public resetExceptionalBlockPackagesProcesses() {
    this._exceptionalBlockPackagesProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalBlockPackagesProcessesInput() {
    return this._exceptionalBlockPackagesProcesses;
  }

  // exceptional_block_packages_users - computed: false, optional: true, required: false
  private _exceptionalBlockPackagesUsers?: string[]; 
  public get exceptionalBlockPackagesUsers() {
    return this.getListAttribute('exceptional_block_packages_users');
  }
  public set exceptionalBlockPackagesUsers(value: string[]) {
    this._exceptionalBlockPackagesUsers = value;
  }
  public resetExceptionalBlockPackagesUsers() {
    this._exceptionalBlockPackagesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalBlockPackagesUsersInput() {
    return this._exceptionalBlockPackagesUsers;
  }

  // packages_black_list - computed: false, optional: true, required: false
  private _packagesBlackList?: string[]; 
  public get packagesBlackList() {
    return this.getListAttribute('packages_black_list');
  }
  public set packagesBlackList(value: string[]) {
    this._packagesBlackList = value;
  }
  public resetPackagesBlackList() {
    this._packagesBlackList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesBlackListInput() {
    return this._packagesBlackList;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy aquasec_host_runtime_policy}
*/
export class DataAquasecHostRuntimePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_host_runtime_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAquasecHostRuntimePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAquasecHostRuntimePolicy to import
  * @param importFromId The id of the existing DataAquasecHostRuntimePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAquasecHostRuntimePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_host_runtime_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/data-sources/host_runtime_policy aquasec_host_runtime_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAquasecHostRuntimePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAquasecHostRuntimePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_host_runtime_policy',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.11.0'
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
    this._name = config.name;
    this._auditing.internalValue = config.auditing;
    this._fileIntegrityMonitoring.internalValue = config.fileIntegrityMonitoring;
    this._packageBlock.internalValue = config.packageBlock;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_scopes - computed: true, optional: false, required: false
  public get applicationScopes() {
    return this.getListAttribute('application_scopes');
  }

  // audit_all_os_user_activity - computed: true, optional: false, required: false
  public get auditAllOsUserActivity() {
    return this.getBooleanAttribute('audit_all_os_user_activity');
  }

  // audit_brute_force_login - computed: true, optional: false, required: false
  public get auditBruteForceLogin() {
    return this.getBooleanAttribute('audit_brute_force_login');
  }

  // audit_full_command_arguments - computed: true, optional: false, required: false
  public get auditFullCommandArguments() {
    return this.getBooleanAttribute('audit_full_command_arguments');
  }

  // audit_host_failed_login_events - computed: true, optional: false, required: false
  public get auditHostFailedLoginEvents() {
    return this.getBooleanAttribute('audit_host_failed_login_events');
  }

  // audit_host_successful_login_events - computed: true, optional: false, required: false
  public get auditHostSuccessfulLoginEvents() {
    return this.getBooleanAttribute('audit_host_successful_login_events');
  }

  // audit_user_account_management - computed: true, optional: false, required: false
  public get auditUserAccountManagement() {
    return this.getBooleanAttribute('audit_user_account_management');
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // block_cryptocurrency_mining - computed: true, optional: false, required: false
  public get blockCryptocurrencyMining() {
    return this.getBooleanAttribute('block_cryptocurrency_mining');
  }

  // blocked_files - computed: true, optional: false, required: false
  public get blockedFiles() {
    return this.getListAttribute('blocked_files');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_ip_reputation - computed: true, optional: false, required: false
  public get enableIpReputation() {
    return this.getBooleanAttribute('enable_ip_reputation');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }

  // enforce_after_days - computed: true, optional: false, required: false
  public get enforceAfterDays() {
    return this.getNumberAttribute('enforce_after_days');
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

  // malware_scan_options - computed: true, optional: false, required: false
  private _malwareScanOptions = new DataAquasecHostRuntimePolicyMalwareScanOptionsList(this, "malware_scan_options", false);
  public get malwareScanOptions() {
    return this._malwareScanOptions;
  }

  // monitor_system_log_integrity - computed: true, optional: false, required: false
  public get monitorSystemLogIntegrity() {
    return this.getBooleanAttribute('monitor_system_log_integrity');
  }

  // monitor_system_time_changes - computed: true, optional: false, required: false
  public get monitorSystemTimeChanges() {
    return this.getBooleanAttribute('monitor_system_time_changes');
  }

  // monitor_windows_services - computed: true, optional: false, required: false
  public get monitorWindowsServices() {
    return this.getBooleanAttribute('monitor_windows_services');
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

  // os_groups_allowed - computed: true, optional: false, required: false
  public get osGroupsAllowed() {
    return this.getListAttribute('os_groups_allowed');
  }

  // os_groups_blocked - computed: true, optional: false, required: false
  public get osGroupsBlocked() {
    return this.getListAttribute('os_groups_blocked');
  }

  // os_users_allowed - computed: true, optional: false, required: false
  public get osUsersAllowed() {
    return this.getListAttribute('os_users_allowed');
  }

  // os_users_blocked - computed: true, optional: false, required: false
  public get osUsersBlocked() {
    return this.getListAttribute('os_users_blocked');
  }

  // port_scanning_detection - computed: true, optional: false, required: false
  public get portScanningDetection() {
    return this.getBooleanAttribute('port_scanning_detection');
  }

  // scope_expression - computed: true, optional: false, required: false
  public get scopeExpression() {
    return this.getStringAttribute('scope_expression');
  }

  // scope_variables - computed: true, optional: false, required: false
  private _scopeVariables = new DataAquasecHostRuntimePolicyScopeVariablesList(this, "scope_variables", false);
  public get scopeVariables() {
    return this._scopeVariables;
  }

  // windows_registry_monitoring - computed: true, optional: false, required: false
  private _windowsRegistryMonitoring = new DataAquasecHostRuntimePolicyWindowsRegistryMonitoringList(this, "windows_registry_monitoring", false);
  public get windowsRegistryMonitoring() {
    return this._windowsRegistryMonitoring;
  }

  // windows_registry_protection - computed: true, optional: false, required: false
  private _windowsRegistryProtection = new DataAquasecHostRuntimePolicyWindowsRegistryProtectionList(this, "windows_registry_protection", false);
  public get windowsRegistryProtection() {
    return this._windowsRegistryProtection;
  }

  // auditing - computed: false, optional: true, required: false
  private _auditing = new DataAquasecHostRuntimePolicyAuditingOutputReference(this, "auditing");
  public get auditing() {
    return this._auditing;
  }
  public putAuditing(value: DataAquasecHostRuntimePolicyAuditing) {
    this._auditing.internalValue = value;
  }
  public resetAuditing() {
    this._auditing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditingInput() {
    return this._auditing.internalValue;
  }

  // file_integrity_monitoring - computed: false, optional: true, required: false
  private _fileIntegrityMonitoring = new DataAquasecHostRuntimePolicyFileIntegrityMonitoringList(this, "file_integrity_monitoring", false);
  public get fileIntegrityMonitoring() {
    return this._fileIntegrityMonitoring;
  }
  public putFileIntegrityMonitoring(value: DataAquasecHostRuntimePolicyFileIntegrityMonitoring[] | cdktf.IResolvable) {
    this._fileIntegrityMonitoring.internalValue = value;
  }
  public resetFileIntegrityMonitoring() {
    this._fileIntegrityMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIntegrityMonitoringInput() {
    return this._fileIntegrityMonitoring.internalValue;
  }

  // package_block - computed: false, optional: true, required: false
  private _packageBlock = new DataAquasecHostRuntimePolicyPackageBlockOutputReference(this, "package_block");
  public get packageBlock() {
    return this._packageBlock;
  }
  public putPackageBlock(value: DataAquasecHostRuntimePolicyPackageBlock) {
    this._packageBlock.internalValue = value;
  }
  public resetPackageBlock() {
    this._packageBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageBlockInput() {
    return this._packageBlock.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      auditing: dataAquasecHostRuntimePolicyAuditingToTerraform(this._auditing.internalValue),
      file_integrity_monitoring: cdktf.listMapper(dataAquasecHostRuntimePolicyFileIntegrityMonitoringToTerraform, true)(this._fileIntegrityMonitoring.internalValue),
      package_block: dataAquasecHostRuntimePolicyPackageBlockToTerraform(this._packageBlock.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auditing: {
        value: dataAquasecHostRuntimePolicyAuditingToHclTerraform(this._auditing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAquasecHostRuntimePolicyAuditingList",
      },
      file_integrity_monitoring: {
        value: cdktf.listMapperHcl(dataAquasecHostRuntimePolicyFileIntegrityMonitoringToHclTerraform, true)(this._fileIntegrityMonitoring.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAquasecHostRuntimePolicyFileIntegrityMonitoringList",
      },
      package_block: {
        value: dataAquasecHostRuntimePolicyPackageBlockToHclTerraform(this._packageBlock.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAquasecHostRuntimePolicyPackageBlockList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
