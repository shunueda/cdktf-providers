// https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/function_runtime_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAquasecFunctionRuntimePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/function_runtime_policy#id DataAquasecFunctionRuntimePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the function runtime policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/function_runtime_policy#name DataAquasecFunctionRuntimePolicy#name}
  */
  readonly name: string;
}
export interface DataAquasecFunctionRuntimePolicyAllowedExecutables {
}

export function dataAquasecFunctionRuntimePolicyAllowedExecutablesToTerraform(struct?: DataAquasecFunctionRuntimePolicyAllowedExecutables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecFunctionRuntimePolicyAllowedExecutablesToHclTerraform(struct?: DataAquasecFunctionRuntimePolicyAllowedExecutables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecFunctionRuntimePolicyAllowedExecutablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecFunctionRuntimePolicyAllowedExecutables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecFunctionRuntimePolicyAllowedExecutables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_executables - computed: true, optional: false, required: false
  public get allowExecutables() {
    return this.getListAttribute('allow_executables');
  }

  // allow_root_executables - computed: true, optional: false, required: false
  public get allowRootExecutables() {
    return this.getListAttribute('allow_root_executables');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // separate_executables - computed: true, optional: false, required: false
  public get separateExecutables() {
    return this.getBooleanAttribute('separate_executables');
  }
}

export class DataAquasecFunctionRuntimePolicyAllowedExecutablesList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecFunctionRuntimePolicyAllowedExecutablesOutputReference {
    return new DataAquasecFunctionRuntimePolicyAllowedExecutablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecFunctionRuntimePolicyDriftPrevention {
}

export function dataAquasecFunctionRuntimePolicyDriftPreventionToTerraform(struct?: DataAquasecFunctionRuntimePolicyDriftPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecFunctionRuntimePolicyDriftPreventionToHclTerraform(struct?: DataAquasecFunctionRuntimePolicyDriftPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecFunctionRuntimePolicyDriftPreventionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecFunctionRuntimePolicyDriftPrevention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecFunctionRuntimePolicyDriftPrevention | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exec_lockdown - computed: true, optional: false, required: false
  public get execLockdown() {
    return this.getBooleanAttribute('exec_lockdown');
  }

  // exec_lockdown_white_list - computed: true, optional: false, required: false
  public get execLockdownWhiteList() {
    return this.getListAttribute('exec_lockdown_white_list');
  }

  // image_lockdown - computed: true, optional: false, required: false
  public get imageLockdown() {
    return this.getBooleanAttribute('image_lockdown');
  }
}

export class DataAquasecFunctionRuntimePolicyDriftPreventionList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecFunctionRuntimePolicyDriftPreventionOutputReference {
    return new DataAquasecFunctionRuntimePolicyDriftPreventionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecFunctionRuntimePolicyExecutableBlacklistStruct {
}

export function dataAquasecFunctionRuntimePolicyExecutableBlacklistStructToTerraform(struct?: DataAquasecFunctionRuntimePolicyExecutableBlacklistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecFunctionRuntimePolicyExecutableBlacklistStructToHclTerraform(struct?: DataAquasecFunctionRuntimePolicyExecutableBlacklistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecFunctionRuntimePolicyExecutableBlacklistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecFunctionRuntimePolicyExecutableBlacklistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecFunctionRuntimePolicyExecutableBlacklistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // executables - computed: true, optional: false, required: false
  public get executables() {
    return this.getListAttribute('executables');
  }
}

export class DataAquasecFunctionRuntimePolicyExecutableBlacklistStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecFunctionRuntimePolicyExecutableBlacklistStructOutputReference {
    return new DataAquasecFunctionRuntimePolicyExecutableBlacklistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecFunctionRuntimePolicyFileIntegrityMonitoring {
}

export function dataAquasecFunctionRuntimePolicyFileIntegrityMonitoringToTerraform(struct?: DataAquasecFunctionRuntimePolicyFileIntegrityMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecFunctionRuntimePolicyFileIntegrityMonitoringToHclTerraform(struct?: DataAquasecFunctionRuntimePolicyFileIntegrityMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecFunctionRuntimePolicyFileIntegrityMonitoringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecFunctionRuntimePolicyFileIntegrityMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecFunctionRuntimePolicyFileIntegrityMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exceptional_monitored_files - computed: true, optional: false, required: false
  public get exceptionalMonitoredFiles() {
    return this.getListAttribute('exceptional_monitored_files');
  }

  // exceptional_monitored_files_processes - computed: true, optional: false, required: false
  public get exceptionalMonitoredFilesProcesses() {
    return this.getListAttribute('exceptional_monitored_files_processes');
  }

  // exceptional_monitored_files_users - computed: true, optional: false, required: false
  public get exceptionalMonitoredFilesUsers() {
    return this.getListAttribute('exceptional_monitored_files_users');
  }

  // monitored_files - computed: true, optional: false, required: false
  public get monitoredFiles() {
    return this.getListAttribute('monitored_files');
  }

  // monitored_files_attributes - computed: true, optional: false, required: false
  public get monitoredFilesAttributes() {
    return this.getBooleanAttribute('monitored_files_attributes');
  }

  // monitored_files_create - computed: true, optional: false, required: false
  public get monitoredFilesCreate() {
    return this.getBooleanAttribute('monitored_files_create');
  }

  // monitored_files_delete - computed: true, optional: false, required: false
  public get monitoredFilesDelete() {
    return this.getBooleanAttribute('monitored_files_delete');
  }

  // monitored_files_modify - computed: true, optional: false, required: false
  public get monitoredFilesModify() {
    return this.getBooleanAttribute('monitored_files_modify');
  }

  // monitored_files_processes - computed: true, optional: false, required: false
  public get monitoredFilesProcesses() {
    return this.getListAttribute('monitored_files_processes');
  }

  // monitored_files_read - computed: true, optional: false, required: false
  public get monitoredFilesRead() {
    return this.getBooleanAttribute('monitored_files_read');
  }

  // monitored_files_users - computed: true, optional: false, required: false
  public get monitoredFilesUsers() {
    return this.getListAttribute('monitored_files_users');
  }
}

export class DataAquasecFunctionRuntimePolicyFileIntegrityMonitoringList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecFunctionRuntimePolicyFileIntegrityMonitoringOutputReference {
    return new DataAquasecFunctionRuntimePolicyFileIntegrityMonitoringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecFunctionRuntimePolicyMalwareScanOptions {
}

export function dataAquasecFunctionRuntimePolicyMalwareScanOptionsToTerraform(struct?: DataAquasecFunctionRuntimePolicyMalwareScanOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecFunctionRuntimePolicyMalwareScanOptionsToHclTerraform(struct?: DataAquasecFunctionRuntimePolicyMalwareScanOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecFunctionRuntimePolicyMalwareScanOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecFunctionRuntimePolicyMalwareScanOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecFunctionRuntimePolicyMalwareScanOptions | undefined) {
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

export class DataAquasecFunctionRuntimePolicyMalwareScanOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecFunctionRuntimePolicyMalwareScanOptionsOutputReference {
    return new DataAquasecFunctionRuntimePolicyMalwareScanOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecFunctionRuntimePolicyScopeVariables {
}

export function dataAquasecFunctionRuntimePolicyScopeVariablesToTerraform(struct?: DataAquasecFunctionRuntimePolicyScopeVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecFunctionRuntimePolicyScopeVariablesToHclTerraform(struct?: DataAquasecFunctionRuntimePolicyScopeVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecFunctionRuntimePolicyScopeVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecFunctionRuntimePolicyScopeVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecFunctionRuntimePolicyScopeVariables | undefined) {
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

export class DataAquasecFunctionRuntimePolicyScopeVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecFunctionRuntimePolicyScopeVariablesOutputReference {
    return new DataAquasecFunctionRuntimePolicyScopeVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecFunctionRuntimePolicyTripwire {
}

export function dataAquasecFunctionRuntimePolicyTripwireToTerraform(struct?: DataAquasecFunctionRuntimePolicyTripwire): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecFunctionRuntimePolicyTripwireToHclTerraform(struct?: DataAquasecFunctionRuntimePolicyTripwire): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecFunctionRuntimePolicyTripwireOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecFunctionRuntimePolicyTripwire | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecFunctionRuntimePolicyTripwire | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_on - computed: true, optional: false, required: false
  public get applyOn() {
    return this.getListAttribute('apply_on');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // serverless_app - computed: true, optional: false, required: false
  public get serverlessApp() {
    return this.getStringAttribute('serverless_app');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // user_password - computed: true, optional: false, required: false
  public get userPassword() {
    return this.getStringAttribute('user_password');
  }
}

export class DataAquasecFunctionRuntimePolicyTripwireList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecFunctionRuntimePolicyTripwireOutputReference {
    return new DataAquasecFunctionRuntimePolicyTripwireOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/function_runtime_policy aquasec_function_runtime_policy}
*/
export class DataAquasecFunctionRuntimePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_function_runtime_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAquasecFunctionRuntimePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAquasecFunctionRuntimePolicy to import
  * @param importFromId The id of the existing DataAquasecFunctionRuntimePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/function_runtime_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAquasecFunctionRuntimePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_function_runtime_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.0/docs/data-sources/function_runtime_policy aquasec_function_runtime_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAquasecFunctionRuntimePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAquasecFunctionRuntimePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_function_runtime_policy',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_executables - computed: true, optional: false, required: false
  private _allowedExecutables = new DataAquasecFunctionRuntimePolicyAllowedExecutablesList(this, "allowed_executables", false);
  public get allowedExecutables() {
    return this._allowedExecutables;
  }

  // application_scopes - computed: true, optional: false, required: false
  public get applicationScopes() {
    return this.getListAttribute('application_scopes');
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // block_disallowed_images - computed: true, optional: false, required: false
  public get blockDisallowedImages() {
    return this.getBooleanAttribute('block_disallowed_images');
  }

  // block_fileless_exec - computed: true, optional: false, required: false
  public get blockFilelessExec() {
    return this.getBooleanAttribute('block_fileless_exec');
  }

  // block_non_compliant_workloads - computed: true, optional: false, required: false
  public get blockNonCompliantWorkloads() {
    return this.getBooleanAttribute('block_non_compliant_workloads');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // drift_prevention - computed: true, optional: false, required: false
  private _driftPrevention = new DataAquasecFunctionRuntimePolicyDriftPreventionList(this, "drift_prevention", false);
  public get driftPrevention() {
    return this._driftPrevention;
  }

  // enable_crypto_mining_dns - computed: true, optional: false, required: false
  public get enableCryptoMiningDns() {
    return this.getBooleanAttribute('enable_crypto_mining_dns');
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

  // exclude_application_scopes - computed: true, optional: false, required: false
  public get excludeApplicationScopes() {
    return this.getListAttribute('exclude_application_scopes');
  }

  // executable_blacklist - computed: true, optional: false, required: false
  private _executableBlacklist = new DataAquasecFunctionRuntimePolicyExecutableBlacklistStructList(this, "executable_blacklist", false);
  public get executableBlacklist() {
    return this._executableBlacklist;
  }

  // file_integrity_monitoring - computed: true, optional: false, required: false
  private _fileIntegrityMonitoring = new DataAquasecFunctionRuntimePolicyFileIntegrityMonitoringList(this, "file_integrity_monitoring", false);
  public get fileIntegrityMonitoring() {
    return this._fileIntegrityMonitoring;
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

  // is_audit_checked - computed: true, optional: false, required: false
  public get isAuditChecked() {
    return this.getBooleanAttribute('is_audit_checked');
  }

  // is_auto_generated - computed: true, optional: false, required: false
  public get isAutoGenerated() {
    return this.getBooleanAttribute('is_auto_generated');
  }

  // is_ootb_policy - computed: true, optional: false, required: false
  public get isOotbPolicy() {
    return this.getBooleanAttribute('is_ootb_policy');
  }

  // lastupdate - computed: true, optional: false, required: false
  public get lastupdate() {
    return this.getNumberAttribute('lastupdate');
  }

  // malware_scan_options - computed: true, optional: false, required: false
  private _malwareScanOptions = new DataAquasecFunctionRuntimePolicyMalwareScanOptionsList(this, "malware_scan_options", false);
  public get malwareScanOptions() {
    return this._malwareScanOptions;
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

  // runtime_type - computed: true, optional: false, required: false
  public get runtimeType() {
    return this.getStringAttribute('runtime_type');
  }

  // scope_expression - computed: true, optional: false, required: false
  public get scopeExpression() {
    return this.getStringAttribute('scope_expression');
  }

  // scope_variables - computed: true, optional: false, required: false
  private _scopeVariables = new DataAquasecFunctionRuntimePolicyScopeVariablesList(this, "scope_variables", false);
  public get scopeVariables() {
    return this._scopeVariables;
  }

  // tripwire - computed: true, optional: false, required: false
  private _tripwire = new DataAquasecFunctionRuntimePolicyTripwireList(this, "tripwire", false);
  public get tripwire() {
    return this._tripwire;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
