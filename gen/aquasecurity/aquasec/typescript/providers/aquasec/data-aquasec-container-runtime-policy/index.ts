// https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAquasecContainerRuntimePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#id DataAquasecContainerRuntimePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the container runtime policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#name DataAquasecContainerRuntimePolicy#name}
  */
  readonly name: string;
  /**
  * allowed_executables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#allowed_executables DataAquasecContainerRuntimePolicy#allowed_executables}
  */
  readonly allowedExecutables?: DataAquasecContainerRuntimePolicyAllowedExecutables[] | cdktf.IResolvable;
  /**
  * allowed_registries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#allowed_registries DataAquasecContainerRuntimePolicy#allowed_registries}
  */
  readonly allowedRegistries?: DataAquasecContainerRuntimePolicyAllowedRegistries[] | cdktf.IResolvable;
  /**
  * auditing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#auditing DataAquasecContainerRuntimePolicy#auditing}
  */
  readonly auditing?: DataAquasecContainerRuntimePolicyAuditing;
  /**
  * container_exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#container_exec DataAquasecContainerRuntimePolicy#container_exec}
  */
  readonly containerExec?: DataAquasecContainerRuntimePolicyContainerExec;
  /**
  * file_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#file_block DataAquasecContainerRuntimePolicy#file_block}
  */
  readonly fileBlock?: DataAquasecContainerRuntimePolicyFileBlock;
  /**
  * file_integrity_monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#file_integrity_monitoring DataAquasecContainerRuntimePolicy#file_integrity_monitoring}
  */
  readonly fileIntegrityMonitoring?: DataAquasecContainerRuntimePolicyFileIntegrityMonitoring[] | cdktf.IResolvable;
  /**
  * limit_container_privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#limit_container_privileges DataAquasecContainerRuntimePolicy#limit_container_privileges}
  */
  readonly limitContainerPrivileges?: DataAquasecContainerRuntimePolicyLimitContainerPrivileges[] | cdktf.IResolvable;
  /**
  * port_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#port_block DataAquasecContainerRuntimePolicy#port_block}
  */
  readonly portBlock?: DataAquasecContainerRuntimePolicyPortBlock;
  /**
  * readonly_files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#readonly_files DataAquasecContainerRuntimePolicy#readonly_files}
  */
  readonly readonlyFiles?: DataAquasecContainerRuntimePolicyReadonlyFiles;
  /**
  * restricted_volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#restricted_volumes DataAquasecContainerRuntimePolicy#restricted_volumes}
  */
  readonly restrictedVolumes?: DataAquasecContainerRuntimePolicyRestrictedVolumes[] | cdktf.IResolvable;
}
export interface DataAquasecContainerRuntimePolicyDriftPrevention {
}

export function dataAquasecContainerRuntimePolicyDriftPreventionToTerraform(struct?: DataAquasecContainerRuntimePolicyDriftPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecContainerRuntimePolicyDriftPreventionToHclTerraform(struct?: DataAquasecContainerRuntimePolicyDriftPrevention): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecContainerRuntimePolicyDriftPreventionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecContainerRuntimePolicyDriftPrevention | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecContainerRuntimePolicyDriftPrevention | undefined) {
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

export class DataAquasecContainerRuntimePolicyDriftPreventionList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecContainerRuntimePolicyDriftPreventionOutputReference {
    return new DataAquasecContainerRuntimePolicyDriftPreventionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecContainerRuntimePolicyFailedKubernetesChecks {
}

export function dataAquasecContainerRuntimePolicyFailedKubernetesChecksToTerraform(struct?: DataAquasecContainerRuntimePolicyFailedKubernetesChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecContainerRuntimePolicyFailedKubernetesChecksToHclTerraform(struct?: DataAquasecContainerRuntimePolicyFailedKubernetesChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecContainerRuntimePolicyFailedKubernetesChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecContainerRuntimePolicyFailedKubernetesChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecContainerRuntimePolicyFailedKubernetesChecks | undefined) {
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

  // failed_checks - computed: true, optional: false, required: false
  public get failedChecks() {
    return this.getListAttribute('failed_checks');
  }
}

export class DataAquasecContainerRuntimePolicyFailedKubernetesChecksList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecContainerRuntimePolicyFailedKubernetesChecksOutputReference {
    return new DataAquasecContainerRuntimePolicyFailedKubernetesChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecContainerRuntimePolicyMalwareScanOptions {
}

export function dataAquasecContainerRuntimePolicyMalwareScanOptionsToTerraform(struct?: DataAquasecContainerRuntimePolicyMalwareScanOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecContainerRuntimePolicyMalwareScanOptionsToHclTerraform(struct?: DataAquasecContainerRuntimePolicyMalwareScanOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecContainerRuntimePolicyMalwareScanOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecContainerRuntimePolicyMalwareScanOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecContainerRuntimePolicyMalwareScanOptions | undefined) {
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

export class DataAquasecContainerRuntimePolicyMalwareScanOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecContainerRuntimePolicyMalwareScanOptionsOutputReference {
    return new DataAquasecContainerRuntimePolicyMalwareScanOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecContainerRuntimePolicyScopeVariables {
}

export function dataAquasecContainerRuntimePolicyScopeVariablesToTerraform(struct?: DataAquasecContainerRuntimePolicyScopeVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAquasecContainerRuntimePolicyScopeVariablesToHclTerraform(struct?: DataAquasecContainerRuntimePolicyScopeVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAquasecContainerRuntimePolicyScopeVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecContainerRuntimePolicyScopeVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecContainerRuntimePolicyScopeVariables | undefined) {
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

export class DataAquasecContainerRuntimePolicyScopeVariablesList extends cdktf.ComplexList {

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
  public get(index: number): DataAquasecContainerRuntimePolicyScopeVariablesOutputReference {
    return new DataAquasecContainerRuntimePolicyScopeVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecContainerRuntimePolicyAllowedExecutables {
  /**
  * List of allowed executables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#allow_executables DataAquasecContainerRuntimePolicy#allow_executables}
  */
  readonly allowExecutables?: string[];
  /**
  * List of allowed root executables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#allow_root_executables DataAquasecContainerRuntimePolicy#allow_root_executables}
  */
  readonly allowRootExecutables?: string[];
  /**
  * Whether allowed executables configuration is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#enabled DataAquasecContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to treat executables separately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#separate_executables DataAquasecContainerRuntimePolicy#separate_executables}
  */
  readonly separateExecutables?: boolean | cdktf.IResolvable;
}

export function dataAquasecContainerRuntimePolicyAllowedExecutablesToTerraform(struct?: DataAquasecContainerRuntimePolicyAllowedExecutables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_executables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowExecutables),
    allow_root_executables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowRootExecutables),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    separate_executables: cdktf.booleanToTerraform(struct!.separateExecutables),
  }
}


export function dataAquasecContainerRuntimePolicyAllowedExecutablesToHclTerraform(struct?: DataAquasecContainerRuntimePolicyAllowedExecutables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_executables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowExecutables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_root_executables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowRootExecutables),
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
    separate_executables: {
      value: cdktf.booleanToHclTerraform(struct!.separateExecutables),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAquasecContainerRuntimePolicyAllowedExecutablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecContainerRuntimePolicyAllowedExecutables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowExecutables !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowExecutables = this._allowExecutables;
    }
    if (this._allowRootExecutables !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRootExecutables = this._allowRootExecutables;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._separateExecutables !== undefined) {
      hasAnyValues = true;
      internalValueResult.separateExecutables = this._separateExecutables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecContainerRuntimePolicyAllowedExecutables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowExecutables = undefined;
      this._allowRootExecutables = undefined;
      this._enabled = undefined;
      this._separateExecutables = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowExecutables = value.allowExecutables;
      this._allowRootExecutables = value.allowRootExecutables;
      this._enabled = value.enabled;
      this._separateExecutables = value.separateExecutables;
    }
  }

  // allow_executables - computed: false, optional: true, required: false
  private _allowExecutables?: string[]; 
  public get allowExecutables() {
    return this.getListAttribute('allow_executables');
  }
  public set allowExecutables(value: string[]) {
    this._allowExecutables = value;
  }
  public resetAllowExecutables() {
    this._allowExecutables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExecutablesInput() {
    return this._allowExecutables;
  }

  // allow_root_executables - computed: false, optional: true, required: false
  private _allowRootExecutables?: string[]; 
  public get allowRootExecutables() {
    return this.getListAttribute('allow_root_executables');
  }
  public set allowRootExecutables(value: string[]) {
    this._allowRootExecutables = value;
  }
  public resetAllowRootExecutables() {
    this._allowRootExecutables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRootExecutablesInput() {
    return this._allowRootExecutables;
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

  // separate_executables - computed: false, optional: true, required: false
  private _separateExecutables?: boolean | cdktf.IResolvable; 
  public get separateExecutables() {
    return this.getBooleanAttribute('separate_executables');
  }
  public set separateExecutables(value: boolean | cdktf.IResolvable) {
    this._separateExecutables = value;
  }
  public resetSeparateExecutables() {
    this._separateExecutables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separateExecutablesInput() {
    return this._separateExecutables;
  }
}

export class DataAquasecContainerRuntimePolicyAllowedExecutablesList extends cdktf.ComplexList {
  public internalValue? : DataAquasecContainerRuntimePolicyAllowedExecutables[] | cdktf.IResolvable

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
  public get(index: number): DataAquasecContainerRuntimePolicyAllowedExecutablesOutputReference {
    return new DataAquasecContainerRuntimePolicyAllowedExecutablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecContainerRuntimePolicyAllowedRegistries {
  /**
  * List of allowed registries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#allowed_registries DataAquasecContainerRuntimePolicy#allowed_registries}
  */
  readonly allowedRegistries?: string[];
  /**
  * Whether allowed registries are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#enabled DataAquasecContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataAquasecContainerRuntimePolicyAllowedRegistriesToTerraform(struct?: DataAquasecContainerRuntimePolicyAllowedRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_registries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRegistries),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataAquasecContainerRuntimePolicyAllowedRegistriesToHclTerraform(struct?: DataAquasecContainerRuntimePolicyAllowedRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_registries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedRegistries),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAquasecContainerRuntimePolicyAllowedRegistriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecContainerRuntimePolicyAllowedRegistries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedRegistries !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRegistries = this._allowedRegistries;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecContainerRuntimePolicyAllowedRegistries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedRegistries = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedRegistries = value.allowedRegistries;
      this._enabled = value.enabled;
    }
  }

  // allowed_registries - computed: false, optional: true, required: false
  private _allowedRegistries?: string[]; 
  public get allowedRegistries() {
    return this.getListAttribute('allowed_registries');
  }
  public set allowedRegistries(value: string[]) {
    this._allowedRegistries = value;
  }
  public resetAllowedRegistries() {
    this._allowedRegistries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRegistriesInput() {
    return this._allowedRegistries;
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

export class DataAquasecContainerRuntimePolicyAllowedRegistriesList extends cdktf.ComplexList {
  public internalValue? : DataAquasecContainerRuntimePolicyAllowedRegistries[] | cdktf.IResolvable

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
  public get(index: number): DataAquasecContainerRuntimePolicyAllowedRegistriesOutputReference {
    return new DataAquasecContainerRuntimePolicyAllowedRegistriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecContainerRuntimePolicyAuditing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#audit_all_network DataAquasecContainerRuntimePolicy#audit_all_network}
  */
  readonly auditAllNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#audit_all_processes DataAquasecContainerRuntimePolicy#audit_all_processes}
  */
  readonly auditAllProcesses?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#audit_failed_login DataAquasecContainerRuntimePolicy#audit_failed_login}
  */
  readonly auditFailedLogin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#audit_os_user_activity DataAquasecContainerRuntimePolicy#audit_os_user_activity}
  */
  readonly auditOsUserActivity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#audit_process_cmdline DataAquasecContainerRuntimePolicy#audit_process_cmdline}
  */
  readonly auditProcessCmdline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#audit_success_login DataAquasecContainerRuntimePolicy#audit_success_login}
  */
  readonly auditSuccessLogin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#audit_user_account_management DataAquasecContainerRuntimePolicy#audit_user_account_management}
  */
  readonly auditUserAccountManagement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#enabled DataAquasecContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataAquasecContainerRuntimePolicyAuditingToTerraform(struct?: DataAquasecContainerRuntimePolicyAuditingOutputReference | DataAquasecContainerRuntimePolicyAuditing): any {
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


export function dataAquasecContainerRuntimePolicyAuditingToHclTerraform(struct?: DataAquasecContainerRuntimePolicyAuditingOutputReference | DataAquasecContainerRuntimePolicyAuditing): any {
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

export class DataAquasecContainerRuntimePolicyAuditingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAquasecContainerRuntimePolicyAuditing | undefined {
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

  public set internalValue(value: DataAquasecContainerRuntimePolicyAuditing | undefined) {
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
export interface DataAquasecContainerRuntimePolicyContainerExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#block_container_exec DataAquasecContainerRuntimePolicy#block_container_exec}
  */
  readonly blockContainerExec?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#container_exec_proc_white_list DataAquasecContainerRuntimePolicy#container_exec_proc_white_list}
  */
  readonly containerExecProcWhiteList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#enabled DataAquasecContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#reverse_shell_ip_white_list DataAquasecContainerRuntimePolicy#reverse_shell_ip_white_list}
  */
  readonly reverseShellIpWhiteList?: string[];
}

export function dataAquasecContainerRuntimePolicyContainerExecToTerraform(struct?: DataAquasecContainerRuntimePolicyContainerExecOutputReference | DataAquasecContainerRuntimePolicyContainerExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_container_exec: cdktf.booleanToTerraform(struct!.blockContainerExec),
    container_exec_proc_white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containerExecProcWhiteList),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    reverse_shell_ip_white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reverseShellIpWhiteList),
  }
}


export function dataAquasecContainerRuntimePolicyContainerExecToHclTerraform(struct?: DataAquasecContainerRuntimePolicyContainerExecOutputReference | DataAquasecContainerRuntimePolicyContainerExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_container_exec: {
      value: cdktf.booleanToHclTerraform(struct!.blockContainerExec),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    container_exec_proc_white_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containerExecProcWhiteList),
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
    reverse_shell_ip_white_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reverseShellIpWhiteList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAquasecContainerRuntimePolicyContainerExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAquasecContainerRuntimePolicyContainerExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockContainerExec !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockContainerExec = this._blockContainerExec;
    }
    if (this._containerExecProcWhiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerExecProcWhiteList = this._containerExecProcWhiteList;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._reverseShellIpWhiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseShellIpWhiteList = this._reverseShellIpWhiteList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecContainerRuntimePolicyContainerExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockContainerExec = undefined;
      this._containerExecProcWhiteList = undefined;
      this._enabled = undefined;
      this._reverseShellIpWhiteList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockContainerExec = value.blockContainerExec;
      this._containerExecProcWhiteList = value.containerExecProcWhiteList;
      this._enabled = value.enabled;
      this._reverseShellIpWhiteList = value.reverseShellIpWhiteList;
    }
  }

  // block_container_exec - computed: false, optional: true, required: false
  private _blockContainerExec?: boolean | cdktf.IResolvable; 
  public get blockContainerExec() {
    return this.getBooleanAttribute('block_container_exec');
  }
  public set blockContainerExec(value: boolean | cdktf.IResolvable) {
    this._blockContainerExec = value;
  }
  public resetBlockContainerExec() {
    this._blockContainerExec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockContainerExecInput() {
    return this._blockContainerExec;
  }

  // container_exec_proc_white_list - computed: false, optional: true, required: false
  private _containerExecProcWhiteList?: string[]; 
  public get containerExecProcWhiteList() {
    return this.getListAttribute('container_exec_proc_white_list');
  }
  public set containerExecProcWhiteList(value: string[]) {
    this._containerExecProcWhiteList = value;
  }
  public resetContainerExecProcWhiteList() {
    this._containerExecProcWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerExecProcWhiteListInput() {
    return this._containerExecProcWhiteList;
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

  // reverse_shell_ip_white_list - computed: false, optional: true, required: false
  private _reverseShellIpWhiteList?: string[]; 
  public get reverseShellIpWhiteList() {
    return this.getListAttribute('reverse_shell_ip_white_list');
  }
  public set reverseShellIpWhiteList(value: string[]) {
    this._reverseShellIpWhiteList = value;
  }
  public resetReverseShellIpWhiteList() {
    this._reverseShellIpWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseShellIpWhiteListInput() {
    return this._reverseShellIpWhiteList;
  }
}
export interface DataAquasecContainerRuntimePolicyFileBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#block_files_processes DataAquasecContainerRuntimePolicy#block_files_processes}
  */
  readonly blockFilesProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#block_files_users DataAquasecContainerRuntimePolicy#block_files_users}
  */
  readonly blockFilesUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#enabled DataAquasecContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#exceptional_block_files DataAquasecContainerRuntimePolicy#exceptional_block_files}
  */
  readonly exceptionalBlockFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#exceptional_block_files_processes DataAquasecContainerRuntimePolicy#exceptional_block_files_processes}
  */
  readonly exceptionalBlockFilesProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#exceptional_block_files_users DataAquasecContainerRuntimePolicy#exceptional_block_files_users}
  */
  readonly exceptionalBlockFilesUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#filename_block_list DataAquasecContainerRuntimePolicy#filename_block_list}
  */
  readonly filenameBlockList?: string[];
}

export function dataAquasecContainerRuntimePolicyFileBlockToTerraform(struct?: DataAquasecContainerRuntimePolicyFileBlockOutputReference | DataAquasecContainerRuntimePolicyFileBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_files_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockFilesProcesses),
    block_files_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockFilesUsers),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exceptional_block_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalBlockFiles),
    exceptional_block_files_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalBlockFilesProcesses),
    exceptional_block_files_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalBlockFilesUsers),
    filename_block_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filenameBlockList),
  }
}


export function dataAquasecContainerRuntimePolicyFileBlockToHclTerraform(struct?: DataAquasecContainerRuntimePolicyFileBlockOutputReference | DataAquasecContainerRuntimePolicyFileBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_files_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockFilesProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    block_files_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockFilesUsers),
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
    exceptional_block_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalBlockFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_block_files_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalBlockFilesProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_block_files_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalBlockFilesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filename_block_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filenameBlockList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAquasecContainerRuntimePolicyFileBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAquasecContainerRuntimePolicyFileBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockFilesProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockFilesProcesses = this._blockFilesProcesses;
    }
    if (this._blockFilesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockFilesUsers = this._blockFilesUsers;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exceptionalBlockFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalBlockFiles = this._exceptionalBlockFiles;
    }
    if (this._exceptionalBlockFilesProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalBlockFilesProcesses = this._exceptionalBlockFilesProcesses;
    }
    if (this._exceptionalBlockFilesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalBlockFilesUsers = this._exceptionalBlockFilesUsers;
    }
    if (this._filenameBlockList !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenameBlockList = this._filenameBlockList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecContainerRuntimePolicyFileBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockFilesProcesses = undefined;
      this._blockFilesUsers = undefined;
      this._enabled = undefined;
      this._exceptionalBlockFiles = undefined;
      this._exceptionalBlockFilesProcesses = undefined;
      this._exceptionalBlockFilesUsers = undefined;
      this._filenameBlockList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockFilesProcesses = value.blockFilesProcesses;
      this._blockFilesUsers = value.blockFilesUsers;
      this._enabled = value.enabled;
      this._exceptionalBlockFiles = value.exceptionalBlockFiles;
      this._exceptionalBlockFilesProcesses = value.exceptionalBlockFilesProcesses;
      this._exceptionalBlockFilesUsers = value.exceptionalBlockFilesUsers;
      this._filenameBlockList = value.filenameBlockList;
    }
  }

  // block_files_processes - computed: false, optional: true, required: false
  private _blockFilesProcesses?: string[]; 
  public get blockFilesProcesses() {
    return this.getListAttribute('block_files_processes');
  }
  public set blockFilesProcesses(value: string[]) {
    this._blockFilesProcesses = value;
  }
  public resetBlockFilesProcesses() {
    this._blockFilesProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockFilesProcessesInput() {
    return this._blockFilesProcesses;
  }

  // block_files_users - computed: false, optional: true, required: false
  private _blockFilesUsers?: string[]; 
  public get blockFilesUsers() {
    return this.getListAttribute('block_files_users');
  }
  public set blockFilesUsers(value: string[]) {
    this._blockFilesUsers = value;
  }
  public resetBlockFilesUsers() {
    this._blockFilesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockFilesUsersInput() {
    return this._blockFilesUsers;
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

  // exceptional_block_files - computed: false, optional: true, required: false
  private _exceptionalBlockFiles?: string[]; 
  public get exceptionalBlockFiles() {
    return this.getListAttribute('exceptional_block_files');
  }
  public set exceptionalBlockFiles(value: string[]) {
    this._exceptionalBlockFiles = value;
  }
  public resetExceptionalBlockFiles() {
    this._exceptionalBlockFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalBlockFilesInput() {
    return this._exceptionalBlockFiles;
  }

  // exceptional_block_files_processes - computed: false, optional: true, required: false
  private _exceptionalBlockFilesProcesses?: string[]; 
  public get exceptionalBlockFilesProcesses() {
    return this.getListAttribute('exceptional_block_files_processes');
  }
  public set exceptionalBlockFilesProcesses(value: string[]) {
    this._exceptionalBlockFilesProcesses = value;
  }
  public resetExceptionalBlockFilesProcesses() {
    this._exceptionalBlockFilesProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalBlockFilesProcessesInput() {
    return this._exceptionalBlockFilesProcesses;
  }

  // exceptional_block_files_users - computed: false, optional: true, required: false
  private _exceptionalBlockFilesUsers?: string[]; 
  public get exceptionalBlockFilesUsers() {
    return this.getListAttribute('exceptional_block_files_users');
  }
  public set exceptionalBlockFilesUsers(value: string[]) {
    this._exceptionalBlockFilesUsers = value;
  }
  public resetExceptionalBlockFilesUsers() {
    this._exceptionalBlockFilesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalBlockFilesUsersInput() {
    return this._exceptionalBlockFilesUsers;
  }

  // filename_block_list - computed: false, optional: true, required: false
  private _filenameBlockList?: string[]; 
  public get filenameBlockList() {
    return this.getListAttribute('filename_block_list');
  }
  public set filenameBlockList(value: string[]) {
    this._filenameBlockList = value;
  }
  public resetFilenameBlockList() {
    this._filenameBlockList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameBlockListInput() {
    return this._filenameBlockList;
  }
}
export interface DataAquasecContainerRuntimePolicyFileIntegrityMonitoring {
  /**
  * If true, file integrity monitoring is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#enabled DataAquasecContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of paths to be excluded from monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#exceptional_monitored_files DataAquasecContainerRuntimePolicy#exceptional_monitored_files}
  */
  readonly exceptionalMonitoredFiles?: string[];
  /**
  * List of processes to be excluded from monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#exceptional_monitored_files_processes DataAquasecContainerRuntimePolicy#exceptional_monitored_files_processes}
  */
  readonly exceptionalMonitoredFilesProcesses?: string[];
  /**
  * List of users to be excluded from monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#exceptional_monitored_files_users DataAquasecContainerRuntimePolicy#exceptional_monitored_files_users}
  */
  readonly exceptionalMonitoredFilesUsers?: string[];
  /**
  * List of paths to be monitored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#monitored_files DataAquasecContainerRuntimePolicy#monitored_files}
  */
  readonly monitoredFiles?: string[];
  /**
  * Whether to monitor file attribute operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#monitored_files_attributes DataAquasecContainerRuntimePolicy#monitored_files_attributes}
  */
  readonly monitoredFilesAttributes?: boolean | cdktf.IResolvable;
  /**
  * Whether to monitor file create operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#monitored_files_create DataAquasecContainerRuntimePolicy#monitored_files_create}
  */
  readonly monitoredFilesCreate?: boolean | cdktf.IResolvable;
  /**
  * Whether to monitor file delete operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#monitored_files_delete DataAquasecContainerRuntimePolicy#monitored_files_delete}
  */
  readonly monitoredFilesDelete?: boolean | cdktf.IResolvable;
  /**
  * Whether to monitor file modify operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#monitored_files_modify DataAquasecContainerRuntimePolicy#monitored_files_modify}
  */
  readonly monitoredFilesModify?: boolean | cdktf.IResolvable;
  /**
  * List of processes associated with monitored files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#monitored_files_processes DataAquasecContainerRuntimePolicy#monitored_files_processes}
  */
  readonly monitoredFilesProcesses?: string[];
  /**
  * Whether to monitor file read operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#monitored_files_read DataAquasecContainerRuntimePolicy#monitored_files_read}
  */
  readonly monitoredFilesRead?: boolean | cdktf.IResolvable;
  /**
  * List of users associated with monitored files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#monitored_files_users DataAquasecContainerRuntimePolicy#monitored_files_users}
  */
  readonly monitoredFilesUsers?: string[];
}

export function dataAquasecContainerRuntimePolicyFileIntegrityMonitoringToTerraform(struct?: DataAquasecContainerRuntimePolicyFileIntegrityMonitoring | cdktf.IResolvable): any {
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


export function dataAquasecContainerRuntimePolicyFileIntegrityMonitoringToHclTerraform(struct?: DataAquasecContainerRuntimePolicyFileIntegrityMonitoring | cdktf.IResolvable): any {
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

export class DataAquasecContainerRuntimePolicyFileIntegrityMonitoringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecContainerRuntimePolicyFileIntegrityMonitoring | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAquasecContainerRuntimePolicyFileIntegrityMonitoring | cdktf.IResolvable | undefined) {
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

export class DataAquasecContainerRuntimePolicyFileIntegrityMonitoringList extends cdktf.ComplexList {
  public internalValue? : DataAquasecContainerRuntimePolicyFileIntegrityMonitoring[] | cdktf.IResolvable

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
  public get(index: number): DataAquasecContainerRuntimePolicyFileIntegrityMonitoringOutputReference {
    return new DataAquasecContainerRuntimePolicyFileIntegrityMonitoringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecContainerRuntimePolicyLimitContainerPrivileges {
  /**
  * Whether to block adding capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#block_add_capabilities DataAquasecContainerRuntimePolicy#block_add_capabilities}
  */
  readonly blockAddCapabilities?: boolean | cdktf.IResolvable;
  /**
  * Whether container privilege limitations are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#enabled DataAquasecContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to limit IPC-related capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#ipcmode DataAquasecContainerRuntimePolicy#ipcmode}
  */
  readonly ipcmode?: boolean | cdktf.IResolvable;
  /**
  * Whether to limit network-related capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#netmode DataAquasecContainerRuntimePolicy#netmode}
  */
  readonly netmode?: boolean | cdktf.IResolvable;
  /**
  * Whether to limit process-related capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#pidmode DataAquasecContainerRuntimePolicy#pidmode}
  */
  readonly pidmode?: boolean | cdktf.IResolvable;
  /**
  * Whether to prevent low port binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#prevent_low_port_binding DataAquasecContainerRuntimePolicy#prevent_low_port_binding}
  */
  readonly preventLowPortBinding?: boolean | cdktf.IResolvable;
  /**
  * Whether to prevent the use of the root user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#prevent_root_user DataAquasecContainerRuntimePolicy#prevent_root_user}
  */
  readonly preventRootUser?: boolean | cdktf.IResolvable;
  /**
  * Whether the container is run in privileged mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#privileged DataAquasecContainerRuntimePolicy#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Whether to use the host user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#use_host_user DataAquasecContainerRuntimePolicy#use_host_user}
  */
  readonly useHostUser?: boolean | cdktf.IResolvable;
  /**
  * Whether to limit user-related capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#usermode DataAquasecContainerRuntimePolicy#usermode}
  */
  readonly usermode?: boolean | cdktf.IResolvable;
  /**
  * Whether to limit UTS-related capabilities.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#utsmode DataAquasecContainerRuntimePolicy#utsmode}
  */
  readonly utsmode?: boolean | cdktf.IResolvable;
}

export function dataAquasecContainerRuntimePolicyLimitContainerPrivilegesToTerraform(struct?: DataAquasecContainerRuntimePolicyLimitContainerPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_add_capabilities: cdktf.booleanToTerraform(struct!.blockAddCapabilities),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ipcmode: cdktf.booleanToTerraform(struct!.ipcmode),
    netmode: cdktf.booleanToTerraform(struct!.netmode),
    pidmode: cdktf.booleanToTerraform(struct!.pidmode),
    prevent_low_port_binding: cdktf.booleanToTerraform(struct!.preventLowPortBinding),
    prevent_root_user: cdktf.booleanToTerraform(struct!.preventRootUser),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    use_host_user: cdktf.booleanToTerraform(struct!.useHostUser),
    usermode: cdktf.booleanToTerraform(struct!.usermode),
    utsmode: cdktf.booleanToTerraform(struct!.utsmode),
  }
}


export function dataAquasecContainerRuntimePolicyLimitContainerPrivilegesToHclTerraform(struct?: DataAquasecContainerRuntimePolicyLimitContainerPrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_add_capabilities: {
      value: cdktf.booleanToHclTerraform(struct!.blockAddCapabilities),
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
    ipcmode: {
      value: cdktf.booleanToHclTerraform(struct!.ipcmode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    netmode: {
      value: cdktf.booleanToHclTerraform(struct!.netmode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pidmode: {
      value: cdktf.booleanToHclTerraform(struct!.pidmode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prevent_low_port_binding: {
      value: cdktf.booleanToHclTerraform(struct!.preventLowPortBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prevent_root_user: {
      value: cdktf.booleanToHclTerraform(struct!.preventRootUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_host_user: {
      value: cdktf.booleanToHclTerraform(struct!.useHostUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    usermode: {
      value: cdktf.booleanToHclTerraform(struct!.usermode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    utsmode: {
      value: cdktf.booleanToHclTerraform(struct!.utsmode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAquasecContainerRuntimePolicyLimitContainerPrivilegesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecContainerRuntimePolicyLimitContainerPrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockAddCapabilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockAddCapabilities = this._blockAddCapabilities;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ipcmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipcmode = this._ipcmode;
    }
    if (this._netmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmode = this._netmode;
    }
    if (this._pidmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pidmode = this._pidmode;
    }
    if (this._preventLowPortBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.preventLowPortBinding = this._preventLowPortBinding;
    }
    if (this._preventRootUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.preventRootUser = this._preventRootUser;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._useHostUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHostUser = this._useHostUser;
    }
    if (this._usermode !== undefined) {
      hasAnyValues = true;
      internalValueResult.usermode = this._usermode;
    }
    if (this._utsmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.utsmode = this._utsmode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecContainerRuntimePolicyLimitContainerPrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockAddCapabilities = undefined;
      this._enabled = undefined;
      this._ipcmode = undefined;
      this._netmode = undefined;
      this._pidmode = undefined;
      this._preventLowPortBinding = undefined;
      this._preventRootUser = undefined;
      this._privileged = undefined;
      this._useHostUser = undefined;
      this._usermode = undefined;
      this._utsmode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockAddCapabilities = value.blockAddCapabilities;
      this._enabled = value.enabled;
      this._ipcmode = value.ipcmode;
      this._netmode = value.netmode;
      this._pidmode = value.pidmode;
      this._preventLowPortBinding = value.preventLowPortBinding;
      this._preventRootUser = value.preventRootUser;
      this._privileged = value.privileged;
      this._useHostUser = value.useHostUser;
      this._usermode = value.usermode;
      this._utsmode = value.utsmode;
    }
  }

  // block_add_capabilities - computed: false, optional: true, required: false
  private _blockAddCapabilities?: boolean | cdktf.IResolvable; 
  public get blockAddCapabilities() {
    return this.getBooleanAttribute('block_add_capabilities');
  }
  public set blockAddCapabilities(value: boolean | cdktf.IResolvable) {
    this._blockAddCapabilities = value;
  }
  public resetBlockAddCapabilities() {
    this._blockAddCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAddCapabilitiesInput() {
    return this._blockAddCapabilities;
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

  // ipcmode - computed: false, optional: true, required: false
  private _ipcmode?: boolean | cdktf.IResolvable; 
  public get ipcmode() {
    return this.getBooleanAttribute('ipcmode');
  }
  public set ipcmode(value: boolean | cdktf.IResolvable) {
    this._ipcmode = value;
  }
  public resetIpcmode() {
    this._ipcmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipcmodeInput() {
    return this._ipcmode;
  }

  // netmode - computed: false, optional: true, required: false
  private _netmode?: boolean | cdktf.IResolvable; 
  public get netmode() {
    return this.getBooleanAttribute('netmode');
  }
  public set netmode(value: boolean | cdktf.IResolvable) {
    this._netmode = value;
  }
  public resetNetmode() {
    this._netmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmodeInput() {
    return this._netmode;
  }

  // pidmode - computed: false, optional: true, required: false
  private _pidmode?: boolean | cdktf.IResolvable; 
  public get pidmode() {
    return this.getBooleanAttribute('pidmode');
  }
  public set pidmode(value: boolean | cdktf.IResolvable) {
    this._pidmode = value;
  }
  public resetPidmode() {
    this._pidmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pidmodeInput() {
    return this._pidmode;
  }

  // prevent_low_port_binding - computed: false, optional: true, required: false
  private _preventLowPortBinding?: boolean | cdktf.IResolvable; 
  public get preventLowPortBinding() {
    return this.getBooleanAttribute('prevent_low_port_binding');
  }
  public set preventLowPortBinding(value: boolean | cdktf.IResolvable) {
    this._preventLowPortBinding = value;
  }
  public resetPreventLowPortBinding() {
    this._preventLowPortBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventLowPortBindingInput() {
    return this._preventLowPortBinding;
  }

  // prevent_root_user - computed: false, optional: true, required: false
  private _preventRootUser?: boolean | cdktf.IResolvable; 
  public get preventRootUser() {
    return this.getBooleanAttribute('prevent_root_user');
  }
  public set preventRootUser(value: boolean | cdktf.IResolvable) {
    this._preventRootUser = value;
  }
  public resetPreventRootUser() {
    this._preventRootUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventRootUserInput() {
    return this._preventRootUser;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // use_host_user - computed: false, optional: true, required: false
  private _useHostUser?: boolean | cdktf.IResolvable; 
  public get useHostUser() {
    return this.getBooleanAttribute('use_host_user');
  }
  public set useHostUser(value: boolean | cdktf.IResolvable) {
    this._useHostUser = value;
  }
  public resetUseHostUser() {
    this._useHostUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHostUserInput() {
    return this._useHostUser;
  }

  // usermode - computed: false, optional: true, required: false
  private _usermode?: boolean | cdktf.IResolvable; 
  public get usermode() {
    return this.getBooleanAttribute('usermode');
  }
  public set usermode(value: boolean | cdktf.IResolvable) {
    this._usermode = value;
  }
  public resetUsermode() {
    this._usermode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usermodeInput() {
    return this._usermode;
  }

  // utsmode - computed: false, optional: true, required: false
  private _utsmode?: boolean | cdktf.IResolvable; 
  public get utsmode() {
    return this.getBooleanAttribute('utsmode');
  }
  public set utsmode(value: boolean | cdktf.IResolvable) {
    this._utsmode = value;
  }
  public resetUtsmode() {
    this._utsmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utsmodeInput() {
    return this._utsmode;
  }
}

export class DataAquasecContainerRuntimePolicyLimitContainerPrivilegesList extends cdktf.ComplexList {
  public internalValue? : DataAquasecContainerRuntimePolicyLimitContainerPrivileges[] | cdktf.IResolvable

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
  public get(index: number): DataAquasecContainerRuntimePolicyLimitContainerPrivilegesOutputReference {
    return new DataAquasecContainerRuntimePolicyLimitContainerPrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAquasecContainerRuntimePolicyPortBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#block_inbound_ports DataAquasecContainerRuntimePolicy#block_inbound_ports}
  */
  readonly blockInboundPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#block_outbound_ports DataAquasecContainerRuntimePolicy#block_outbound_ports}
  */
  readonly blockOutboundPorts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#enabled DataAquasecContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataAquasecContainerRuntimePolicyPortBlockToTerraform(struct?: DataAquasecContainerRuntimePolicyPortBlockOutputReference | DataAquasecContainerRuntimePolicyPortBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_inbound_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockInboundPorts),
    block_outbound_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockOutboundPorts),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataAquasecContainerRuntimePolicyPortBlockToHclTerraform(struct?: DataAquasecContainerRuntimePolicyPortBlockOutputReference | DataAquasecContainerRuntimePolicyPortBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_inbound_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockInboundPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    block_outbound_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockOutboundPorts),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAquasecContainerRuntimePolicyPortBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAquasecContainerRuntimePolicyPortBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockInboundPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockInboundPorts = this._blockInboundPorts;
    }
    if (this._blockOutboundPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockOutboundPorts = this._blockOutboundPorts;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecContainerRuntimePolicyPortBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockInboundPorts = undefined;
      this._blockOutboundPorts = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockInboundPorts = value.blockInboundPorts;
      this._blockOutboundPorts = value.blockOutboundPorts;
      this._enabled = value.enabled;
    }
  }

  // block_inbound_ports - computed: false, optional: true, required: false
  private _blockInboundPorts?: string[]; 
  public get blockInboundPorts() {
    return this.getListAttribute('block_inbound_ports');
  }
  public set blockInboundPorts(value: string[]) {
    this._blockInboundPorts = value;
  }
  public resetBlockInboundPorts() {
    this._blockInboundPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInboundPortsInput() {
    return this._blockInboundPorts;
  }

  // block_outbound_ports - computed: false, optional: true, required: false
  private _blockOutboundPorts?: string[]; 
  public get blockOutboundPorts() {
    return this.getListAttribute('block_outbound_ports');
  }
  public set blockOutboundPorts(value: string[]) {
    this._blockOutboundPorts = value;
  }
  public resetBlockOutboundPorts() {
    this._blockOutboundPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockOutboundPortsInput() {
    return this._blockOutboundPorts;
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
export interface DataAquasecContainerRuntimePolicyReadonlyFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#enabled DataAquasecContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#exceptional_readonly_files DataAquasecContainerRuntimePolicy#exceptional_readonly_files}
  */
  readonly exceptionalReadonlyFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#exceptional_readonly_files_processes DataAquasecContainerRuntimePolicy#exceptional_readonly_files_processes}
  */
  readonly exceptionalReadonlyFilesProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#exceptional_readonly_files_users DataAquasecContainerRuntimePolicy#exceptional_readonly_files_users}
  */
  readonly exceptionalReadonlyFilesUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#readonly_files DataAquasecContainerRuntimePolicy#readonly_files}
  */
  readonly readonlyFiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#readonly_files_processes DataAquasecContainerRuntimePolicy#readonly_files_processes}
  */
  readonly readonlyFilesProcesses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#readonly_files_users DataAquasecContainerRuntimePolicy#readonly_files_users}
  */
  readonly readonlyFilesUsers?: string[];
}

export function dataAquasecContainerRuntimePolicyReadonlyFilesToTerraform(struct?: DataAquasecContainerRuntimePolicyReadonlyFilesOutputReference | DataAquasecContainerRuntimePolicyReadonlyFiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exceptional_readonly_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalReadonlyFiles),
    exceptional_readonly_files_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalReadonlyFilesProcesses),
    exceptional_readonly_files_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionalReadonlyFilesUsers),
    readonly_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.readonlyFiles),
    readonly_files_processes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.readonlyFilesProcesses),
    readonly_files_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.readonlyFilesUsers),
  }
}


export function dataAquasecContainerRuntimePolicyReadonlyFilesToHclTerraform(struct?: DataAquasecContainerRuntimePolicyReadonlyFilesOutputReference | DataAquasecContainerRuntimePolicyReadonlyFiles): any {
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
    exceptional_readonly_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalReadonlyFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_readonly_files_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalReadonlyFilesProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exceptional_readonly_files_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionalReadonlyFilesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    readonly_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.readonlyFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    readonly_files_processes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.readonlyFilesProcesses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    readonly_files_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.readonlyFilesUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAquasecContainerRuntimePolicyReadonlyFilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAquasecContainerRuntimePolicyReadonlyFiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exceptionalReadonlyFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalReadonlyFiles = this._exceptionalReadonlyFiles;
    }
    if (this._exceptionalReadonlyFilesProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalReadonlyFilesProcesses = this._exceptionalReadonlyFilesProcesses;
    }
    if (this._exceptionalReadonlyFilesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionalReadonlyFilesUsers = this._exceptionalReadonlyFilesUsers;
    }
    if (this._readonlyFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonlyFiles = this._readonlyFiles;
    }
    if (this._readonlyFilesProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonlyFilesProcesses = this._readonlyFilesProcesses;
    }
    if (this._readonlyFilesUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonlyFilesUsers = this._readonlyFilesUsers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecContainerRuntimePolicyReadonlyFiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._exceptionalReadonlyFiles = undefined;
      this._exceptionalReadonlyFilesProcesses = undefined;
      this._exceptionalReadonlyFilesUsers = undefined;
      this._readonlyFiles = undefined;
      this._readonlyFilesProcesses = undefined;
      this._readonlyFilesUsers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._exceptionalReadonlyFiles = value.exceptionalReadonlyFiles;
      this._exceptionalReadonlyFilesProcesses = value.exceptionalReadonlyFilesProcesses;
      this._exceptionalReadonlyFilesUsers = value.exceptionalReadonlyFilesUsers;
      this._readonlyFiles = value.readonlyFiles;
      this._readonlyFilesProcesses = value.readonlyFilesProcesses;
      this._readonlyFilesUsers = value.readonlyFilesUsers;
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

  // exceptional_readonly_files - computed: false, optional: true, required: false
  private _exceptionalReadonlyFiles?: string[]; 
  public get exceptionalReadonlyFiles() {
    return this.getListAttribute('exceptional_readonly_files');
  }
  public set exceptionalReadonlyFiles(value: string[]) {
    this._exceptionalReadonlyFiles = value;
  }
  public resetExceptionalReadonlyFiles() {
    this._exceptionalReadonlyFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalReadonlyFilesInput() {
    return this._exceptionalReadonlyFiles;
  }

  // exceptional_readonly_files_processes - computed: false, optional: true, required: false
  private _exceptionalReadonlyFilesProcesses?: string[]; 
  public get exceptionalReadonlyFilesProcesses() {
    return this.getListAttribute('exceptional_readonly_files_processes');
  }
  public set exceptionalReadonlyFilesProcesses(value: string[]) {
    this._exceptionalReadonlyFilesProcesses = value;
  }
  public resetExceptionalReadonlyFilesProcesses() {
    this._exceptionalReadonlyFilesProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalReadonlyFilesProcessesInput() {
    return this._exceptionalReadonlyFilesProcesses;
  }

  // exceptional_readonly_files_users - computed: false, optional: true, required: false
  private _exceptionalReadonlyFilesUsers?: string[]; 
  public get exceptionalReadonlyFilesUsers() {
    return this.getListAttribute('exceptional_readonly_files_users');
  }
  public set exceptionalReadonlyFilesUsers(value: string[]) {
    this._exceptionalReadonlyFilesUsers = value;
  }
  public resetExceptionalReadonlyFilesUsers() {
    this._exceptionalReadonlyFilesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionalReadonlyFilesUsersInput() {
    return this._exceptionalReadonlyFilesUsers;
  }

  // readonly_files - computed: false, optional: true, required: false
  private _readonlyFiles?: string[]; 
  public get readonlyFiles() {
    return this.getListAttribute('readonly_files');
  }
  public set readonlyFiles(value: string[]) {
    this._readonlyFiles = value;
  }
  public resetReadonlyFiles() {
    this._readonlyFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyFilesInput() {
    return this._readonlyFiles;
  }

  // readonly_files_processes - computed: false, optional: true, required: false
  private _readonlyFilesProcesses?: string[]; 
  public get readonlyFilesProcesses() {
    return this.getListAttribute('readonly_files_processes');
  }
  public set readonlyFilesProcesses(value: string[]) {
    this._readonlyFilesProcesses = value;
  }
  public resetReadonlyFilesProcesses() {
    this._readonlyFilesProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyFilesProcessesInput() {
    return this._readonlyFilesProcesses;
  }

  // readonly_files_users - computed: false, optional: true, required: false
  private _readonlyFilesUsers?: string[]; 
  public get readonlyFilesUsers() {
    return this.getListAttribute('readonly_files_users');
  }
  public set readonlyFilesUsers(value: string[]) {
    this._readonlyFilesUsers = value;
  }
  public resetReadonlyFilesUsers() {
    this._readonlyFilesUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyFilesUsersInput() {
    return this._readonlyFilesUsers;
  }
}
export interface DataAquasecContainerRuntimePolicyRestrictedVolumes {
  /**
  * Whether restricted volumes are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#enabled DataAquasecContainerRuntimePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of restricted volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#volumes DataAquasecContainerRuntimePolicy#volumes}
  */
  readonly volumes?: string[];
}

export function dataAquasecContainerRuntimePolicyRestrictedVolumesToTerraform(struct?: DataAquasecContainerRuntimePolicyRestrictedVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumes),
  }
}


export function dataAquasecContainerRuntimePolicyRestrictedVolumesToHclTerraform(struct?: DataAquasecContainerRuntimePolicyRestrictedVolumes | cdktf.IResolvable): any {
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
    volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAquasecContainerRuntimePolicyRestrictedVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAquasecContainerRuntimePolicyRestrictedVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAquasecContainerRuntimePolicyRestrictedVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._volumes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._volumes = value.volumes;
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

  // volumes - computed: false, optional: true, required: false
  private _volumes?: string[]; 
  public get volumes() {
    return this.getListAttribute('volumes');
  }
  public set volumes(value: string[]) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }
}

export class DataAquasecContainerRuntimePolicyRestrictedVolumesList extends cdktf.ComplexList {
  public internalValue? : DataAquasecContainerRuntimePolicyRestrictedVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataAquasecContainerRuntimePolicyRestrictedVolumesOutputReference {
    return new DataAquasecContainerRuntimePolicyRestrictedVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy aquasec_container_runtime_policy}
*/
export class DataAquasecContainerRuntimePolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_container_runtime_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAquasecContainerRuntimePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAquasecContainerRuntimePolicy to import
  * @param importFromId The id of the existing DataAquasecContainerRuntimePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAquasecContainerRuntimePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_container_runtime_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/data-sources/container_runtime_policy aquasec_container_runtime_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAquasecContainerRuntimePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataAquasecContainerRuntimePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_container_runtime_policy',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
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
    this._allowedExecutables.internalValue = config.allowedExecutables;
    this._allowedRegistries.internalValue = config.allowedRegistries;
    this._auditing.internalValue = config.auditing;
    this._containerExec.internalValue = config.containerExec;
    this._fileBlock.internalValue = config.fileBlock;
    this._fileIntegrityMonitoring.internalValue = config.fileIntegrityMonitoring;
    this._limitContainerPrivileges.internalValue = config.limitContainerPrivileges;
    this._portBlock.internalValue = config.portBlock;
    this._readonlyFiles.internalValue = config.readonlyFiles;
    this._restrictedVolumes.internalValue = config.restrictedVolumes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_scopes - computed: true, optional: false, required: false
  public get applicationScopes() {
    return this.getListAttribute('application_scopes');
  }

  // audit_all_network_activity - computed: true, optional: false, required: false
  public get auditAllNetworkActivity() {
    return this.getBooleanAttribute('audit_all_network_activity');
  }

  // audit_all_processes_activity - computed: true, optional: false, required: false
  public get auditAllProcessesActivity() {
    return this.getBooleanAttribute('audit_all_processes_activity');
  }

  // audit_brute_force_login - computed: true, optional: false, required: false
  public get auditBruteForceLogin() {
    return this.getBooleanAttribute('audit_brute_force_login');
  }

  // audit_full_command_arguments - computed: true, optional: false, required: false
  public get auditFullCommandArguments() {
    return this.getBooleanAttribute('audit_full_command_arguments');
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // block_access_host_network - computed: true, optional: false, required: false
  public get blockAccessHostNetwork() {
    return this.getBooleanAttribute('block_access_host_network');
  }

  // block_adding_capabilities - computed: true, optional: false, required: false
  public get blockAddingCapabilities() {
    return this.getBooleanAttribute('block_adding_capabilities');
  }

  // block_container_exec - computed: true, optional: false, required: false
  public get blockContainerExec() {
    return this.getBooleanAttribute('block_container_exec');
  }

  // block_cryptocurrency_mining - computed: true, optional: false, required: false
  public get blockCryptocurrencyMining() {
    return this.getBooleanAttribute('block_cryptocurrency_mining');
  }

  // block_fileless_exec - computed: true, optional: false, required: false
  public get blockFilelessExec() {
    return this.getBooleanAttribute('block_fileless_exec');
  }

  // block_low_port_binding - computed: true, optional: false, required: false
  public get blockLowPortBinding() {
    return this.getBooleanAttribute('block_low_port_binding');
  }

  // block_non_compliant_images - computed: true, optional: false, required: false
  public get blockNonCompliantImages() {
    return this.getBooleanAttribute('block_non_compliant_images');
  }

  // block_non_compliant_workloads - computed: true, optional: false, required: false
  public get blockNonCompliantWorkloads() {
    return this.getBooleanAttribute('block_non_compliant_workloads');
  }

  // block_non_k8s_containers - computed: true, optional: false, required: false
  public get blockNonK8SContainers() {
    return this.getBooleanAttribute('block_non_k8s_containers');
  }

  // block_privileged_containers - computed: true, optional: false, required: false
  public get blockPrivilegedContainers() {
    return this.getBooleanAttribute('block_privileged_containers');
  }

  // block_reverse_shell - computed: true, optional: false, required: false
  public get blockReverseShell() {
    return this.getBooleanAttribute('block_reverse_shell');
  }

  // block_root_user - computed: true, optional: false, required: false
  public get blockRootUser() {
    return this.getBooleanAttribute('block_root_user');
  }

  // block_unregistered_images - computed: true, optional: false, required: false
  public get blockUnregisteredImages() {
    return this.getBooleanAttribute('block_unregistered_images');
  }

  // block_use_ipc_namespace - computed: true, optional: false, required: false
  public get blockUseIpcNamespace() {
    return this.getBooleanAttribute('block_use_ipc_namespace');
  }

  // block_use_pid_namespace - computed: true, optional: false, required: false
  public get blockUsePidNamespace() {
    return this.getBooleanAttribute('block_use_pid_namespace');
  }

  // block_use_user_namespace - computed: true, optional: false, required: false
  public get blockUseUserNamespace() {
    return this.getBooleanAttribute('block_use_user_namespace');
  }

  // block_use_uts_namespace - computed: true, optional: false, required: false
  public get blockUseUtsNamespace() {
    return this.getBooleanAttribute('block_use_uts_namespace');
  }

  // blocked_capabilities - computed: true, optional: false, required: false
  public get blockedCapabilities() {
    return this.getListAttribute('blocked_capabilities');
  }

  // blocked_executables - computed: true, optional: false, required: false
  public get blockedExecutables() {
    return this.getListAttribute('blocked_executables');
  }

  // blocked_files - computed: true, optional: false, required: false
  public get blockedFiles() {
    return this.getListAttribute('blocked_files');
  }

  // blocked_inbound_ports - computed: true, optional: false, required: false
  public get blockedInboundPorts() {
    return this.getListAttribute('blocked_inbound_ports');
  }

  // blocked_outbound_ports - computed: true, optional: false, required: false
  public get blockedOutboundPorts() {
    return this.getListAttribute('blocked_outbound_ports');
  }

  // blocked_packages - computed: true, optional: false, required: false
  public get blockedPackages() {
    return this.getListAttribute('blocked_packages');
  }

  // blocked_volumes - computed: true, optional: false, required: false
  public get blockedVolumes() {
    return this.getListAttribute('blocked_volumes');
  }

  // container_exec_allowed_processes - computed: true, optional: false, required: false
  public get containerExecAllowedProcesses() {
    return this.getListAttribute('container_exec_allowed_processes');
  }

  // cve - computed: true, optional: false, required: false
  public get cve() {
    return this.getStringAttribute('cve');
  }

  // default_security_profile - computed: true, optional: false, required: false
  public get defaultSecurityProfile() {
    return this.getStringAttribute('default_security_profile');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // drift_prevention - computed: true, optional: false, required: false
  private _driftPrevention = new DataAquasecContainerRuntimePolicyDriftPreventionList(this, "drift_prevention", false);
  public get driftPrevention() {
    return this._driftPrevention;
  }

  // enable_crypto_mining_dns - computed: true, optional: false, required: false
  public get enableCryptoMiningDns() {
    return this.getBooleanAttribute('enable_crypto_mining_dns');
  }

  // enable_drift_prevention - computed: true, optional: false, required: false
  public get enableDriftPrevention() {
    return this.getBooleanAttribute('enable_drift_prevention');
  }

  // enable_fork_guard - computed: true, optional: false, required: false
  public get enableForkGuard() {
    return this.getBooleanAttribute('enable_fork_guard');
  }

  // enable_ip_reputation - computed: true, optional: false, required: false
  public get enableIpReputation() {
    return this.getBooleanAttribute('enable_ip_reputation');
  }

  // enable_ip_reputation_security - computed: true, optional: false, required: false
  public get enableIpReputationSecurity() {
    return this.getBooleanAttribute('enable_ip_reputation_security');
  }

  // enable_port_scan_detection - computed: true, optional: false, required: false
  public get enablePortScanDetection() {
    return this.getBooleanAttribute('enable_port_scan_detection');
  }

  // enable_port_scan_protection - computed: true, optional: false, required: false
  public get enablePortScanProtection() {
    return this.getBooleanAttribute('enable_port_scan_protection');
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

  // enforce_scheduler_added_on - computed: true, optional: false, required: false
  public get enforceSchedulerAddedOn() {
    return this.getNumberAttribute('enforce_scheduler_added_on');
  }

  // exceptional_readonly_files_and_directories - computed: true, optional: false, required: false
  public get exceptionalReadonlyFilesAndDirectories() {
    return this.getListAttribute('exceptional_readonly_files_and_directories');
  }

  // exclude_application_scopes - computed: true, optional: false, required: false
  public get excludeApplicationScopes() {
    return this.getListAttribute('exclude_application_scopes');
  }

  // exec_lockdown_white_list - computed: true, optional: false, required: false
  public get execLockdownWhiteList() {
    return this.getListAttribute('exec_lockdown_white_list');
  }

  // failed_kubernetes_checks - computed: true, optional: false, required: false
  private _failedKubernetesChecks = new DataAquasecContainerRuntimePolicyFailedKubernetesChecksList(this, "failed_kubernetes_checks", false);
  public get failedKubernetesChecks() {
    return this._failedKubernetesChecks;
  }

  // fork_guard_process_limit - computed: true, optional: false, required: false
  public get forkGuardProcessLimit() {
    return this.getNumberAttribute('fork_guard_process_limit');
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

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
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

  // limit_new_privileges - computed: true, optional: false, required: false
  public get limitNewPrivileges() {
    return this.getBooleanAttribute('limit_new_privileges');
  }

  // malware_scan_options - computed: true, optional: false, required: false
  private _malwareScanOptions = new DataAquasecContainerRuntimePolicyMalwareScanOptionsList(this, "malware_scan_options", false);
  public get malwareScanOptions() {
    return this._malwareScanOptions;
  }

  // monitor_system_time_changes - computed: true, optional: false, required: false
  public get monitorSystemTimeChanges() {
    return this.getBooleanAttribute('monitor_system_time_changes');
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

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // readonly_files_and_directories - computed: true, optional: false, required: false
  public get readonlyFilesAndDirectories() {
    return this.getListAttribute('readonly_files_and_directories');
  }

  // registry - computed: true, optional: false, required: false
  public get registry() {
    return this.getStringAttribute('registry');
  }

  // repo_name - computed: true, optional: false, required: false
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // reverse_shell_allowed_ips - computed: true, optional: false, required: false
  public get reverseShellAllowedIps() {
    return this.getListAttribute('reverse_shell_allowed_ips');
  }

  // reverse_shell_allowed_processes - computed: true, optional: false, required: false
  public get reverseShellAllowedProcesses() {
    return this.getListAttribute('reverse_shell_allowed_processes');
  }

  // runtime_mode - computed: true, optional: false, required: false
  public get runtimeMode() {
    return this.getNumberAttribute('runtime_mode');
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
  private _scopeVariables = new DataAquasecContainerRuntimePolicyScopeVariablesList(this, "scope_variables", false);
  public get scopeVariables() {
    return this._scopeVariables;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vpatch_version - computed: true, optional: false, required: false
  public get vpatchVersion() {
    return this.getStringAttribute('vpatch_version');
  }

  // allowed_executables - computed: false, optional: true, required: false
  private _allowedExecutables = new DataAquasecContainerRuntimePolicyAllowedExecutablesList(this, "allowed_executables", false);
  public get allowedExecutables() {
    return this._allowedExecutables;
  }
  public putAllowedExecutables(value: DataAquasecContainerRuntimePolicyAllowedExecutables[] | cdktf.IResolvable) {
    this._allowedExecutables.internalValue = value;
  }
  public resetAllowedExecutables() {
    this._allowedExecutables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExecutablesInput() {
    return this._allowedExecutables.internalValue;
  }

  // allowed_registries - computed: false, optional: true, required: false
  private _allowedRegistries = new DataAquasecContainerRuntimePolicyAllowedRegistriesList(this, "allowed_registries", false);
  public get allowedRegistries() {
    return this._allowedRegistries;
  }
  public putAllowedRegistries(value: DataAquasecContainerRuntimePolicyAllowedRegistries[] | cdktf.IResolvable) {
    this._allowedRegistries.internalValue = value;
  }
  public resetAllowedRegistries() {
    this._allowedRegistries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRegistriesInput() {
    return this._allowedRegistries.internalValue;
  }

  // auditing - computed: false, optional: true, required: false
  private _auditing = new DataAquasecContainerRuntimePolicyAuditingOutputReference(this, "auditing");
  public get auditing() {
    return this._auditing;
  }
  public putAuditing(value: DataAquasecContainerRuntimePolicyAuditing) {
    this._auditing.internalValue = value;
  }
  public resetAuditing() {
    this._auditing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditingInput() {
    return this._auditing.internalValue;
  }

  // container_exec - computed: false, optional: true, required: false
  private _containerExec = new DataAquasecContainerRuntimePolicyContainerExecOutputReference(this, "container_exec");
  public get containerExec() {
    return this._containerExec;
  }
  public putContainerExec(value: DataAquasecContainerRuntimePolicyContainerExec) {
    this._containerExec.internalValue = value;
  }
  public resetContainerExec() {
    this._containerExec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerExecInput() {
    return this._containerExec.internalValue;
  }

  // file_block - computed: false, optional: true, required: false
  private _fileBlock = new DataAquasecContainerRuntimePolicyFileBlockOutputReference(this, "file_block");
  public get fileBlock() {
    return this._fileBlock;
  }
  public putFileBlock(value: DataAquasecContainerRuntimePolicyFileBlock) {
    this._fileBlock.internalValue = value;
  }
  public resetFileBlock() {
    this._fileBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileBlockInput() {
    return this._fileBlock.internalValue;
  }

  // file_integrity_monitoring - computed: false, optional: true, required: false
  private _fileIntegrityMonitoring = new DataAquasecContainerRuntimePolicyFileIntegrityMonitoringList(this, "file_integrity_monitoring", false);
  public get fileIntegrityMonitoring() {
    return this._fileIntegrityMonitoring;
  }
  public putFileIntegrityMonitoring(value: DataAquasecContainerRuntimePolicyFileIntegrityMonitoring[] | cdktf.IResolvable) {
    this._fileIntegrityMonitoring.internalValue = value;
  }
  public resetFileIntegrityMonitoring() {
    this._fileIntegrityMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileIntegrityMonitoringInput() {
    return this._fileIntegrityMonitoring.internalValue;
  }

  // limit_container_privileges - computed: false, optional: true, required: false
  private _limitContainerPrivileges = new DataAquasecContainerRuntimePolicyLimitContainerPrivilegesList(this, "limit_container_privileges", false);
  public get limitContainerPrivileges() {
    return this._limitContainerPrivileges;
  }
  public putLimitContainerPrivileges(value: DataAquasecContainerRuntimePolicyLimitContainerPrivileges[] | cdktf.IResolvable) {
    this._limitContainerPrivileges.internalValue = value;
  }
  public resetLimitContainerPrivileges() {
    this._limitContainerPrivileges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitContainerPrivilegesInput() {
    return this._limitContainerPrivileges.internalValue;
  }

  // port_block - computed: false, optional: true, required: false
  private _portBlock = new DataAquasecContainerRuntimePolicyPortBlockOutputReference(this, "port_block");
  public get portBlock() {
    return this._portBlock;
  }
  public putPortBlock(value: DataAquasecContainerRuntimePolicyPortBlock) {
    this._portBlock.internalValue = value;
  }
  public resetPortBlock() {
    this._portBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBlockInput() {
    return this._portBlock.internalValue;
  }

  // readonly_files - computed: false, optional: true, required: false
  private _readonlyFiles = new DataAquasecContainerRuntimePolicyReadonlyFilesOutputReference(this, "readonly_files");
  public get readonlyFiles() {
    return this._readonlyFiles;
  }
  public putReadonlyFiles(value: DataAquasecContainerRuntimePolicyReadonlyFiles) {
    this._readonlyFiles.internalValue = value;
  }
  public resetReadonlyFiles() {
    this._readonlyFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyFilesInput() {
    return this._readonlyFiles.internalValue;
  }

  // restricted_volumes - computed: false, optional: true, required: false
  private _restrictedVolumes = new DataAquasecContainerRuntimePolicyRestrictedVolumesList(this, "restricted_volumes", false);
  public get restrictedVolumes() {
    return this._restrictedVolumes;
  }
  public putRestrictedVolumes(value: DataAquasecContainerRuntimePolicyRestrictedVolumes[] | cdktf.IResolvable) {
    this._restrictedVolumes.internalValue = value;
  }
  public resetRestrictedVolumes() {
    this._restrictedVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedVolumesInput() {
    return this._restrictedVolumes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      allowed_executables: cdktf.listMapper(dataAquasecContainerRuntimePolicyAllowedExecutablesToTerraform, true)(this._allowedExecutables.internalValue),
      allowed_registries: cdktf.listMapper(dataAquasecContainerRuntimePolicyAllowedRegistriesToTerraform, true)(this._allowedRegistries.internalValue),
      auditing: dataAquasecContainerRuntimePolicyAuditingToTerraform(this._auditing.internalValue),
      container_exec: dataAquasecContainerRuntimePolicyContainerExecToTerraform(this._containerExec.internalValue),
      file_block: dataAquasecContainerRuntimePolicyFileBlockToTerraform(this._fileBlock.internalValue),
      file_integrity_monitoring: cdktf.listMapper(dataAquasecContainerRuntimePolicyFileIntegrityMonitoringToTerraform, true)(this._fileIntegrityMonitoring.internalValue),
      limit_container_privileges: cdktf.listMapper(dataAquasecContainerRuntimePolicyLimitContainerPrivilegesToTerraform, true)(this._limitContainerPrivileges.internalValue),
      port_block: dataAquasecContainerRuntimePolicyPortBlockToTerraform(this._portBlock.internalValue),
      readonly_files: dataAquasecContainerRuntimePolicyReadonlyFilesToTerraform(this._readonlyFiles.internalValue),
      restricted_volumes: cdktf.listMapper(dataAquasecContainerRuntimePolicyRestrictedVolumesToTerraform, true)(this._restrictedVolumes.internalValue),
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
      allowed_executables: {
        value: cdktf.listMapperHcl(dataAquasecContainerRuntimePolicyAllowedExecutablesToHclTerraform, true)(this._allowedExecutables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAquasecContainerRuntimePolicyAllowedExecutablesList",
      },
      allowed_registries: {
        value: cdktf.listMapperHcl(dataAquasecContainerRuntimePolicyAllowedRegistriesToHclTerraform, true)(this._allowedRegistries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAquasecContainerRuntimePolicyAllowedRegistriesList",
      },
      auditing: {
        value: dataAquasecContainerRuntimePolicyAuditingToHclTerraform(this._auditing.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAquasecContainerRuntimePolicyAuditingList",
      },
      container_exec: {
        value: dataAquasecContainerRuntimePolicyContainerExecToHclTerraform(this._containerExec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAquasecContainerRuntimePolicyContainerExecList",
      },
      file_block: {
        value: dataAquasecContainerRuntimePolicyFileBlockToHclTerraform(this._fileBlock.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAquasecContainerRuntimePolicyFileBlockList",
      },
      file_integrity_monitoring: {
        value: cdktf.listMapperHcl(dataAquasecContainerRuntimePolicyFileIntegrityMonitoringToHclTerraform, true)(this._fileIntegrityMonitoring.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAquasecContainerRuntimePolicyFileIntegrityMonitoringList",
      },
      limit_container_privileges: {
        value: cdktf.listMapperHcl(dataAquasecContainerRuntimePolicyLimitContainerPrivilegesToHclTerraform, true)(this._limitContainerPrivileges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAquasecContainerRuntimePolicyLimitContainerPrivilegesList",
      },
      port_block: {
        value: dataAquasecContainerRuntimePolicyPortBlockToHclTerraform(this._portBlock.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAquasecContainerRuntimePolicyPortBlockList",
      },
      readonly_files: {
        value: dataAquasecContainerRuntimePolicyReadonlyFilesToHclTerraform(this._readonlyFiles.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAquasecContainerRuntimePolicyReadonlyFilesList",
      },
      restricted_volumes: {
        value: cdktf.listMapperHcl(dataAquasecContainerRuntimePolicyRestrictedVolumesToHclTerraform, true)(this._restrictedVolumes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAquasecContainerRuntimePolicyRestrictedVolumesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
