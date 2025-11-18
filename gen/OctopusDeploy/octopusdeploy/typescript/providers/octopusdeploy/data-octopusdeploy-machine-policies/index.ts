// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/data-sources/machine_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeployMachinePoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/data-sources/machine_policies#id DataOctopusdeployMachinePolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A filter to search by a list of IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/data-sources/machine_policies#ids DataOctopusdeployMachinePolicies#ids}
  */
  readonly ids?: string[];
  /**
  * A filter to search by the partial match of a name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/data-sources/machine_policies#partial_name DataOctopusdeployMachinePolicies#partial_name}
  */
  readonly partialName?: string;
  /**
  * A filter to specify the number of items to skip in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/data-sources/machine_policies#skip DataOctopusdeployMachinePolicies#skip}
  */
  readonly skip?: number;
  /**
  * The space ID associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/data-sources/machine_policies#space_id DataOctopusdeployMachinePolicies#space_id}
  */
  readonly spaceId?: string;
  /**
  * A filter to specify the number of items to take (or return) in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/data-sources/machine_policies#take DataOctopusdeployMachinePolicies#take}
  */
  readonly take?: number;
}
export interface DataOctopusdeployMachinePoliciesMachinePoliciesMachineCleanupPolicy {
}

export function dataOctopusdeployMachinePoliciesMachinePoliciesMachineCleanupPolicyToTerraform(struct?: DataOctopusdeployMachinePoliciesMachinePoliciesMachineCleanupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployMachinePoliciesMachinePoliciesMachineCleanupPolicyToHclTerraform(struct?: DataOctopusdeployMachinePoliciesMachinePoliciesMachineCleanupPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployMachinePoliciesMachinePoliciesMachineCleanupPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployMachinePoliciesMachinePoliciesMachineCleanupPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployMachinePoliciesMachinePoliciesMachineCleanupPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_machines_behavior - computed: true, optional: false, required: false
  public get deleteMachinesBehavior() {
    return this.getStringAttribute('delete_machines_behavior');
  }

  // delete_machines_elapsed_timespan - computed: true, optional: false, required: false
  public get deleteMachinesElapsedTimespan() {
    return this.getNumberAttribute('delete_machines_elapsed_timespan');
  }
}

export class DataOctopusdeployMachinePoliciesMachinePoliciesMachineCleanupPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployMachinePoliciesMachinePoliciesMachineCleanupPolicyOutputReference {
    return new DataOctopusdeployMachinePoliciesMachinePoliciesMachineCleanupPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployMachinePoliciesMachinePoliciesMachineConnectivityPolicy {
}

export function dataOctopusdeployMachinePoliciesMachinePoliciesMachineConnectivityPolicyToTerraform(struct?: DataOctopusdeployMachinePoliciesMachinePoliciesMachineConnectivityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployMachinePoliciesMachinePoliciesMachineConnectivityPolicyToHclTerraform(struct?: DataOctopusdeployMachinePoliciesMachinePoliciesMachineConnectivityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployMachinePoliciesMachinePoliciesMachineConnectivityPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployMachinePoliciesMachinePoliciesMachineConnectivityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployMachinePoliciesMachinePoliciesMachineConnectivityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // machine_connectivity_behavior - computed: true, optional: false, required: false
  public get machineConnectivityBehavior() {
    return this.getStringAttribute('machine_connectivity_behavior');
  }
}

export class DataOctopusdeployMachinePoliciesMachinePoliciesMachineConnectivityPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployMachinePoliciesMachinePoliciesMachineConnectivityPolicyOutputReference {
    return new DataOctopusdeployMachinePoliciesMachinePoliciesMachineConnectivityPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyBashHealthCheckPolicy {
}

export function dataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyBashHealthCheckPolicyToTerraform(struct?: DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyBashHealthCheckPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyBashHealthCheckPolicyToHclTerraform(struct?: DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyBashHealthCheckPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyBashHealthCheckPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyBashHealthCheckPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyBashHealthCheckPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // run_type - computed: true, optional: false, required: false
  public get runType() {
    return this.getStringAttribute('run_type');
  }

  // script_body - computed: true, optional: false, required: false
  public get scriptBody() {
    return this.getStringAttribute('script_body');
  }
}

export class DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyBashHealthCheckPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyBashHealthCheckPolicyOutputReference {
    return new DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyBashHealthCheckPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyPowershellHealthCheckPolicy {
}

export function dataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyPowershellHealthCheckPolicyToTerraform(struct?: DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyPowershellHealthCheckPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyPowershellHealthCheckPolicyToHclTerraform(struct?: DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyPowershellHealthCheckPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyPowershellHealthCheckPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyPowershellHealthCheckPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyPowershellHealthCheckPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // run_type - computed: true, optional: false, required: false
  public get runType() {
    return this.getStringAttribute('run_type');
  }

  // script_body - computed: true, optional: false, required: false
  public get scriptBody() {
    return this.getStringAttribute('script_body');
  }
}

export class DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyPowershellHealthCheckPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyPowershellHealthCheckPolicyOutputReference {
    return new DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyPowershellHealthCheckPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicy {
}

export function dataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyToTerraform(struct?: DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyToHclTerraform(struct?: DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bash_health_check_policy - computed: true, optional: false, required: false
  private _bashHealthCheckPolicy = new DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyBashHealthCheckPolicyList(this, "bash_health_check_policy", false);
  public get bashHealthCheckPolicy() {
    return this._bashHealthCheckPolicy;
  }

  // health_check_cron - computed: true, optional: false, required: false
  public get healthCheckCron() {
    return this.getStringAttribute('health_check_cron');
  }

  // health_check_cron_timezone - computed: true, optional: false, required: false
  public get healthCheckCronTimezone() {
    return this.getStringAttribute('health_check_cron_timezone');
  }

  // health_check_interval - computed: true, optional: false, required: false
  public get healthCheckInterval() {
    return this.getNumberAttribute('health_check_interval');
  }

  // health_check_type - computed: true, optional: false, required: false
  public get healthCheckType() {
    return this.getStringAttribute('health_check_type');
  }

  // powershell_health_check_policy - computed: true, optional: false, required: false
  private _powershellHealthCheckPolicy = new DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyPowershellHealthCheckPolicyList(this, "powershell_health_check_policy", false);
  public get powershellHealthCheckPolicy() {
    return this._powershellHealthCheckPolicy;
  }
}

export class DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyOutputReference {
    return new DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployMachinePoliciesMachinePoliciesMachinePackageCacheRetentionPolicy {
}

export function dataOctopusdeployMachinePoliciesMachinePoliciesMachinePackageCacheRetentionPolicyToTerraform(struct?: DataOctopusdeployMachinePoliciesMachinePoliciesMachinePackageCacheRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployMachinePoliciesMachinePoliciesMachinePackageCacheRetentionPolicyToHclTerraform(struct?: DataOctopusdeployMachinePoliciesMachinePoliciesMachinePackageCacheRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployMachinePoliciesMachinePoliciesMachinePackageCacheRetentionPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployMachinePoliciesMachinePoliciesMachinePackageCacheRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployMachinePoliciesMachinePoliciesMachinePackageCacheRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // package_unit - computed: true, optional: false, required: false
  public get packageUnit() {
    return this.getStringAttribute('package_unit');
  }

  // quantity_of_packages_to_keep - computed: true, optional: false, required: false
  public get quantityOfPackagesToKeep() {
    return this.getNumberAttribute('quantity_of_packages_to_keep');
  }

  // quantity_of_versions_to_keep - computed: true, optional: false, required: false
  public get quantityOfVersionsToKeep() {
    return this.getNumberAttribute('quantity_of_versions_to_keep');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }

  // version_unit - computed: true, optional: false, required: false
  public get versionUnit() {
    return this.getStringAttribute('version_unit');
  }
}

export class DataOctopusdeployMachinePoliciesMachinePoliciesMachinePackageCacheRetentionPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployMachinePoliciesMachinePoliciesMachinePackageCacheRetentionPolicyOutputReference {
    return new DataOctopusdeployMachinePoliciesMachinePoliciesMachinePackageCacheRetentionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployMachinePoliciesMachinePoliciesMachineUpdatePolicy {
}

export function dataOctopusdeployMachinePoliciesMachinePoliciesMachineUpdatePolicyToTerraform(struct?: DataOctopusdeployMachinePoliciesMachinePoliciesMachineUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployMachinePoliciesMachinePoliciesMachineUpdatePolicyToHclTerraform(struct?: DataOctopusdeployMachinePoliciesMachinePoliciesMachineUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployMachinePoliciesMachinePoliciesMachineUpdatePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployMachinePoliciesMachinePoliciesMachineUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployMachinePoliciesMachinePoliciesMachineUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // calamari_update_behavior - computed: true, optional: false, required: false
  public get calamariUpdateBehavior() {
    return this.getStringAttribute('calamari_update_behavior');
  }

  // kubernetes_agent_update_behavior - computed: true, optional: false, required: false
  public get kubernetesAgentUpdateBehavior() {
    return this.getStringAttribute('kubernetes_agent_update_behavior');
  }

  // tentacle_update_account_id - computed: true, optional: false, required: false
  public get tentacleUpdateAccountId() {
    return this.getStringAttribute('tentacle_update_account_id');
  }

  // tentacle_update_behavior - computed: true, optional: false, required: false
  public get tentacleUpdateBehavior() {
    return this.getStringAttribute('tentacle_update_behavior');
  }
}

export class DataOctopusdeployMachinePoliciesMachinePoliciesMachineUpdatePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployMachinePoliciesMachinePoliciesMachineUpdatePolicyOutputReference {
    return new DataOctopusdeployMachinePoliciesMachinePoliciesMachineUpdatePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOctopusdeployMachinePoliciesMachinePolicies {
}

export function dataOctopusdeployMachinePoliciesMachinePoliciesToTerraform(struct?: DataOctopusdeployMachinePoliciesMachinePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployMachinePoliciesMachinePoliciesToHclTerraform(struct?: DataOctopusdeployMachinePoliciesMachinePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployMachinePoliciesMachinePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployMachinePoliciesMachinePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployMachinePoliciesMachinePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_connect_timeout - computed: true, optional: false, required: false
  public get connectionConnectTimeout() {
    return this.getNumberAttribute('connection_connect_timeout');
  }

  // connection_retry_count_limit - computed: true, optional: false, required: false
  public get connectionRetryCountLimit() {
    return this.getNumberAttribute('connection_retry_count_limit');
  }

  // connection_retry_sleep_interval - computed: true, optional: false, required: false
  public get connectionRetrySleepInterval() {
    return this.getNumberAttribute('connection_retry_sleep_interval');
  }

  // connection_retry_time_limit - computed: true, optional: false, required: false
  public get connectionRetryTimeLimit() {
    return this.getNumberAttribute('connection_retry_time_limit');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // machine_cleanup_policy - computed: true, optional: false, required: false
  private _machineCleanupPolicy = new DataOctopusdeployMachinePoliciesMachinePoliciesMachineCleanupPolicyList(this, "machine_cleanup_policy", true);
  public get machineCleanupPolicy() {
    return this._machineCleanupPolicy;
  }

  // machine_connectivity_policy - computed: true, optional: false, required: false
  private _machineConnectivityPolicy = new DataOctopusdeployMachinePoliciesMachinePoliciesMachineConnectivityPolicyList(this, "machine_connectivity_policy", true);
  public get machineConnectivityPolicy() {
    return this._machineConnectivityPolicy;
  }

  // machine_health_check_policy - computed: true, optional: false, required: false
  private _machineHealthCheckPolicy = new DataOctopusdeployMachinePoliciesMachinePoliciesMachineHealthCheckPolicyList(this, "machine_health_check_policy", true);
  public get machineHealthCheckPolicy() {
    return this._machineHealthCheckPolicy;
  }

  // machine_package_cache_retention_policy - computed: true, optional: false, required: false
  private _machinePackageCacheRetentionPolicy = new DataOctopusdeployMachinePoliciesMachinePoliciesMachinePackageCacheRetentionPolicyList(this, "machine_package_cache_retention_policy", true);
  public get machinePackageCacheRetentionPolicy() {
    return this._machinePackageCacheRetentionPolicy;
  }

  // machine_update_policy - computed: true, optional: false, required: false
  private _machineUpdatePolicy = new DataOctopusdeployMachinePoliciesMachinePoliciesMachineUpdatePolicyList(this, "machine_update_policy", true);
  public get machineUpdatePolicy() {
    return this._machineUpdatePolicy;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // polling_request_queue_timeout - computed: true, optional: false, required: false
  public get pollingRequestQueueTimeout() {
    return this.getNumberAttribute('polling_request_queue_timeout');
  }

  // space_id - computed: true, optional: false, required: false
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
}

export class DataOctopusdeployMachinePoliciesMachinePoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployMachinePoliciesMachinePoliciesOutputReference {
    return new DataOctopusdeployMachinePoliciesMachinePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/data-sources/machine_policies octopusdeploy_machine_policies}
*/
export class DataOctopusdeployMachinePolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_machine_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeployMachinePolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeployMachinePolicies to import
  * @param importFromId The id of the existing DataOctopusdeployMachinePolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/data-sources/machine_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeployMachinePolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_machine_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/data-sources/machine_policies octopusdeploy_machine_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeployMachinePoliciesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeployMachinePoliciesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_machine_policies',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._ids = config.ids;
    this._partialName = config.partialName;
    this._skip = config.skip;
    this._spaceId = config.spaceId;
    this._take = config.take;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // machine_policies - computed: true, optional: false, required: false
  private _machinePolicies = new DataOctopusdeployMachinePoliciesMachinePoliciesList(this, "machine_policies", false);
  public get machinePolicies() {
    return this._machinePolicies;
  }

  // partial_name - computed: false, optional: true, required: false
  private _partialName?: string; 
  public get partialName() {
    return this.getStringAttribute('partial_name');
  }
  public set partialName(value: string) {
    this._partialName = value;
  }
  public resetPartialName() {
    this._partialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialNameInput() {
    return this._partialName;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: number; 
  public get skip() {
    return this.getNumberAttribute('skip');
  }
  public set skip(value: number) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // take - computed: false, optional: true, required: false
  private _take?: number; 
  public get take() {
    return this.getNumberAttribute('take');
  }
  public set take(value: number) {
    this._take = value;
  }
  public resetTake() {
    this._take = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get takeInput() {
    return this._take;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      partial_name: cdktf.stringToTerraform(this._partialName),
      skip: cdktf.numberToTerraform(this._skip),
      space_id: cdktf.stringToTerraform(this._spaceId),
      take: cdktf.numberToTerraform(this._take),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      partial_name: {
        value: cdktf.stringToHclTerraform(this._partialName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip: {
        value: cdktf.numberToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      take: {
        value: cdktf.numberToHclTerraform(this._take),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
