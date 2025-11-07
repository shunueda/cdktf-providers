// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/gcp_node_pools
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDuplocloudGcpNodePoolsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/gcp_node_pools#id DataDuplocloudGcpNodePools#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The GUID of the tenant that the node pool will be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/gcp_node_pools#tenant_id DataDuplocloudGcpNodePools#tenant_id}
  */
  readonly tenantId: string;
}
export interface DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuDriverInstallationConfig {
}

export function dataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuDriverInstallationConfigToTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuDriverInstallationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuDriverInstallationConfigToHclTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuDriverInstallationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuDriverInstallationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuDriverInstallationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuDriverInstallationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gpu_driver_version - computed: true, optional: false, required: false
  public get gpuDriverVersion() {
    return this.getStringAttribute('gpu_driver_version');
  }
}

export class DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuDriverInstallationConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuDriverInstallationConfigOutputReference {
    return new DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuDriverInstallationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuSharingConfig {
}

export function dataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuSharingConfigToTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuSharingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuSharingConfigToHclTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuSharingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuSharingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuSharingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuSharingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gpu_sharing_strategy - computed: true, optional: false, required: false
  public get gpuSharingStrategy() {
    return this.getStringAttribute('gpu_sharing_strategy');
  }

  // max_shared_clients_per_gpu - computed: true, optional: false, required: false
  public get maxSharedClientsPerGpu() {
    return this.getStringAttribute('max_shared_clients_per_gpu');
  }
}

export class DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuSharingConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuSharingConfigOutputReference {
    return new DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuSharingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudGcpNodePoolsNodePoolsAccelerator {
}

export function dataDuplocloudGcpNodePoolsNodePoolsAcceleratorToTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsAccelerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudGcpNodePoolsNodePoolsAcceleratorToHclTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsAccelerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudGcpNodePoolsNodePoolsAcceleratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudGcpNodePoolsNodePoolsAccelerator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudGcpNodePoolsNodePoolsAccelerator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator_count - computed: true, optional: false, required: false
  public get acceleratorCount() {
    return this.getStringAttribute('accelerator_count');
  }

  // accelerator_type - computed: true, optional: false, required: false
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }

  // gpu_driver_installation_config - computed: true, optional: false, required: false
  private _gpuDriverInstallationConfig = new DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuDriverInstallationConfigList(this, "gpu_driver_installation_config", false);
  public get gpuDriverInstallationConfig() {
    return this._gpuDriverInstallationConfig;
  }

  // gpu_partition_size - computed: true, optional: false, required: false
  public get gpuPartitionSize() {
    return this.getStringAttribute('gpu_partition_size');
  }

  // gpu_sharing_config - computed: true, optional: false, required: false
  private _gpuSharingConfig = new DataDuplocloudGcpNodePoolsNodePoolsAcceleratorGpuSharingConfigList(this, "gpu_sharing_config", false);
  public get gpuSharingConfig() {
    return this._gpuSharingConfig;
  }

  // max_time_shared_clients_per_gpu - computed: true, optional: false, required: false
  public get maxTimeSharedClientsPerGpu() {
    return this.getStringAttribute('max_time_shared_clients_per_gpu');
  }
}

export class DataDuplocloudGcpNodePoolsNodePoolsAcceleratorList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudGcpNodePoolsNodePoolsAcceleratorOutputReference {
    return new DataDuplocloudGcpNodePoolsNodePoolsAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudGcpNodePoolsNodePoolsLinuxNodeConfig {
}

export function dataDuplocloudGcpNodePoolsNodePoolsLinuxNodeConfigToTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudGcpNodePoolsNodePoolsLinuxNodeConfigToHclTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudGcpNodePoolsNodePoolsLinuxNodeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudGcpNodePoolsNodePoolsLinuxNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudGcpNodePoolsNodePoolsLinuxNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cgroup_mode - computed: true, optional: false, required: false
  public get cgroupMode() {
    return this.getListAttribute('cgroup_mode');
  }

  // sysctls - computed: true, optional: false, required: false
  private _sysctls = new cdktf.StringMap(this, "sysctls");
  public get sysctls() {
    return this._sysctls;
  }
}

export class DataDuplocloudGcpNodePoolsNodePoolsLinuxNodeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudGcpNodePoolsNodePoolsLinuxNodeConfigOutputReference {
    return new DataDuplocloudGcpNodePoolsNodePoolsLinuxNodeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudGcpNodePoolsNodePoolsNodePoolLoggingConfig {
}

export function dataDuplocloudGcpNodePoolsNodePoolsNodePoolLoggingConfigToTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsNodePoolLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudGcpNodePoolsNodePoolsNodePoolLoggingConfigToHclTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsNodePoolLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudGcpNodePoolsNodePoolsNodePoolLoggingConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudGcpNodePoolsNodePoolsNodePoolLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudGcpNodePoolsNodePoolsNodePoolLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // variant_config - computed: true, optional: false, required: false
  private _variantConfig = new cdktf.StringMap(this, "variant_config");
  public get variantConfig() {
    return this._variantConfig;
  }
}

export class DataDuplocloudGcpNodePoolsNodePoolsNodePoolLoggingConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudGcpNodePoolsNodePoolsNodePoolLoggingConfigOutputReference {
    return new DataDuplocloudGcpNodePoolsNodePoolsNodePoolLoggingConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudGcpNodePoolsNodePoolsTaints {
}

export function dataDuplocloudGcpNodePoolsNodePoolsTaintsToTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudGcpNodePoolsNodePoolsTaintsToHclTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudGcpNodePoolsNodePoolsTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudGcpNodePoolsNodePoolsTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudGcpNodePoolsNodePoolsTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataDuplocloudGcpNodePoolsNodePoolsTaintsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudGcpNodePoolsNodePoolsTaintsOutputReference {
    return new DataDuplocloudGcpNodePoolsNodePoolsTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
}

export function dataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch_node_count - computed: true, optional: false, required: false
  public get batchNodeCount() {
    return this.getNumberAttribute('batch_node_count');
  }

  // batch_percentage - computed: true, optional: false, required: false
  public get batchPercentage() {
    return this.getNumberAttribute('batch_percentage');
  }

  // batch_soak_duration - computed: true, optional: false, required: false
  public get batchSoakDuration() {
    return this.getStringAttribute('batch_soak_duration');
  }
}

export class DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference {
    return new DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettings {
}

export function dataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsToTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsToHclTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_pool_soak_duration - computed: true, optional: false, required: false
  public get nodePoolSoakDuration() {
    return this.getStringAttribute('node_pool_soak_duration');
  }

  // standard_rollout_policy - computed: true, optional: false, required: false
  private _standardRolloutPolicy = new DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyList(this, "standard_rollout_policy", false);
  public get standardRolloutPolicy() {
    return this._standardRolloutPolicy;
  }
}

export class DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsOutputReference {
    return new DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettings {
}

export function dataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsToTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsToHclTerraform(struct?: DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // blue_green_settings - computed: true, optional: false, required: false
  private _blueGreenSettings = new DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsBlueGreenSettingsList(this, "blue_green_settings", false);
  public get blueGreenSettings() {
    return this._blueGreenSettings;
  }

  // max_surge - computed: true, optional: false, required: false
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }

  // max_unavailable - computed: true, optional: false, required: false
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }

  // strategy - computed: true, optional: false, required: false
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
}

export class DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsOutputReference {
    return new DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDuplocloudGcpNodePoolsNodePools {
}

export function dataDuplocloudGcpNodePoolsNodePoolsToTerraform(struct?: DataDuplocloudGcpNodePoolsNodePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDuplocloudGcpNodePoolsNodePoolsToHclTerraform(struct?: DataDuplocloudGcpNodePoolsNodePools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDuplocloudGcpNodePoolsNodePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDuplocloudGcpNodePoolsNodePools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDuplocloudGcpNodePoolsNodePools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accelerator - computed: true, optional: false, required: false
  private _accelerator = new DataDuplocloudGcpNodePoolsNodePoolsAcceleratorList(this, "accelerator", false);
  public get accelerator() {
    return this._accelerator;
  }

  // auto_repair - computed: true, optional: false, required: false
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }

  // auto_upgrade - computed: true, optional: false, required: false
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }

  // disc_size_gb - computed: true, optional: false, required: false
  public get discSizeGb() {
    return this.getNumberAttribute('disc_size_gb');
  }

  // disc_type - computed: true, optional: false, required: false
  public get discType() {
    return this.getStringAttribute('disc_type');
  }

  // fullname - computed: true, optional: false, required: false
  public get fullname() {
    return this.getStringAttribute('fullname');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // initial_node_count - computed: true, optional: false, required: false
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }

  // is_autoscaling_enabled - computed: true, optional: false, required: false
  public get isAutoscalingEnabled() {
    return this.getBooleanAttribute('is_autoscaling_enabled');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // linux_node_config - computed: true, optional: false, required: false
  private _linuxNodeConfig = new DataDuplocloudGcpNodePoolsNodePoolsLinuxNodeConfigList(this, "linux_node_config", false);
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }

  // location_policy - computed: true, optional: false, required: false
  public get locationPolicy() {
    return this.getStringAttribute('location_policy');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // max_node_count - computed: true, optional: false, required: false
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // min_node_count - computed: true, optional: false, required: false
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_pool_logging_config - computed: true, optional: false, required: false
  private _nodePoolLoggingConfig = new DataDuplocloudGcpNodePoolsNodePoolsNodePoolLoggingConfigList(this, "node_pool_logging_config", false);
  public get nodePoolLoggingConfig() {
    return this._nodePoolLoggingConfig;
  }

  // oauth_scopes - computed: true, optional: false, required: false
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }

  // resource_labels - computed: true, optional: false, required: false
  private _resourceLabels = new cdktf.StringMap(this, "resource_labels");
  public get resourceLabels() {
    return this._resourceLabels;
  }

  // spot - computed: true, optional: false, required: false
  public get spot() {
    return this.getBooleanAttribute('spot');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // taints - computed: true, optional: false, required: false
  private _taints = new DataDuplocloudGcpNodePoolsNodePoolsTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }

  // total_max_node_count - computed: true, optional: false, required: false
  public get totalMaxNodeCount() {
    return this.getNumberAttribute('total_max_node_count');
  }

  // total_min_node_count - computed: true, optional: false, required: false
  public get totalMinNodeCount() {
    return this.getNumberAttribute('total_min_node_count');
  }

  // upgrade_settings - computed: true, optional: false, required: false
  private _upgradeSettings = new DataDuplocloudGcpNodePoolsNodePoolsUpgradeSettingsList(this, "upgrade_settings", false);
  public get upgradeSettings() {
    return this._upgradeSettings;
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return this.getListAttribute('zones');
  }
}

export class DataDuplocloudGcpNodePoolsNodePoolsList extends cdktf.ComplexList {

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
  public get(index: number): DataDuplocloudGcpNodePoolsNodePoolsOutputReference {
    return new DataDuplocloudGcpNodePoolsNodePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/gcp_node_pools duplocloud_gcp_node_pools}
*/
export class DataDuplocloudGcpNodePools extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_gcp_node_pools";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDuplocloudGcpNodePools resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDuplocloudGcpNodePools to import
  * @param importFromId The id of the existing DataDuplocloudGcpNodePools that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/gcp_node_pools#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDuplocloudGcpNodePools to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_gcp_node_pools", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/data-sources/gcp_node_pools duplocloud_gcp_node_pools} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDuplocloudGcpNodePoolsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDuplocloudGcpNodePoolsConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_gcp_node_pools',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28'
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
    this._tenantId = config.tenantId;
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

  // node_pools - computed: true, optional: false, required: false
  private _nodePools = new DataDuplocloudGcpNodePoolsNodePoolsList(this, "node_pools", false);
  public get nodePools() {
    return this._nodePools;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
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
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
