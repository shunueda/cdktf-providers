// https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * CIDR block. IP range for allocating pod addresses. It should not overlap with any subnet in the network the Kubernetes cluster located in. Static routes will be set up for this CIDR blocks in node subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#cluster_ipv4_range KubernetesCluster#cluster_ipv4_range}
  */
  readonly clusterIpv4Range?: string;
  /**
  * Identical to `cluster_ipv4_range` but for IPv6 protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#cluster_ipv6_range KubernetesCluster#cluster_ipv6_range}
  */
  readonly clusterIpv6Range?: string;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#description KubernetesCluster#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#folder_id KubernetesCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#id KubernetesCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#labels KubernetesCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#name KubernetesCluster#name}
  */
  readonly name?: string;
  /**
  * The ID of the cluster network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#network_id KubernetesCluster#network_id}
  */
  readonly networkId: string;
  /**
  * Network policy provider for the cluster. Possible values: `CALICO`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#network_policy_provider KubernetesCluster#network_policy_provider}
  */
  readonly networkPolicyProvider?: string;
  /**
  * Size of the masks that are assigned to each node in the cluster. Effectively limits maximum number of pods for each node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#node_ipv4_cidr_mask_size KubernetesCluster#node_ipv4_cidr_mask_size}
  */
  readonly nodeIpv4CidrMaskSize?: number;
  /**
  * Service account to be used by the worker nodes of the Kubernetes cluster to access Container Registry or to push node logs and metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#node_service_account_id KubernetesCluster#node_service_account_id}
  */
  readonly nodeServiceAccountId: string;
  /**
  * Cluster release channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#release_channel KubernetesCluster#release_channel}
  */
  readonly releaseChannel?: string;
  /**
  * Service account to be used for provisioning Compute Cloud and VPC resources for Kubernetes cluster. Selected service account should have `edit` role on the folder where the Kubernetes cluster will be located and on the folder where selected network resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#service_account_id KubernetesCluster#service_account_id}
  */
  readonly serviceAccountId: string;
  /**
  * CIDR block. IP range Kubernetes service Kubernetes cluster IP addresses will be allocated from. It should not overlap with any subnet in the network the Kubernetes cluster located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#service_ipv4_range KubernetesCluster#service_ipv4_range}
  */
  readonly serviceIpv4Range?: string;
  /**
  * Identical to service_ipv4_range but for IPv6 protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#service_ipv6_range KubernetesCluster#service_ipv6_range}
  */
  readonly serviceIpv6Range?: string;
  /**
  * kms_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#kms_provider KubernetesCluster#kms_provider}
  */
  readonly kmsProvider?: KubernetesClusterKmsProvider;
  /**
  * master block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#master KubernetesCluster#master}
  */
  readonly master: KubernetesClusterMaster;
  /**
  * network_implementation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#network_implementation KubernetesCluster#network_implementation}
  */
  readonly networkImplementation?: KubernetesClusterNetworkImplementation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#timeouts KubernetesCluster#timeouts}
  */
  readonly timeouts?: KubernetesClusterTimeouts;
  /**
  * workload_identity_federation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#workload_identity_federation KubernetesCluster#workload_identity_federation}
  */
  readonly workloadIdentityFederation?: KubernetesClusterWorkloadIdentityFederation;
}
export interface KubernetesClusterKmsProvider {
  /**
  * KMS key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#key_id KubernetesCluster#key_id}
  */
  readonly keyId?: string;
}

export function kubernetesClusterKmsProviderToTerraform(struct?: KubernetesClusterKmsProviderOutputReference | KubernetesClusterKmsProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}


export function kubernetesClusterKmsProviderToHclTerraform(struct?: KubernetesClusterKmsProviderOutputReference | KubernetesClusterKmsProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterKmsProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterKmsProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterKmsProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface KubernetesClusterMasterVersionInfo {
}

export function kubernetesClusterMasterVersionInfoToTerraform(struct?: KubernetesClusterMasterVersionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kubernetesClusterMasterVersionInfoToHclTerraform(struct?: KubernetesClusterMasterVersionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesClusterMasterVersionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterMasterVersionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterVersionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // new_revision_available - computed: true, optional: false, required: false
  public get newRevisionAvailable() {
    return this.getBooleanAttribute('new_revision_available');
  }

  // new_revision_summary - computed: true, optional: false, required: false
  public get newRevisionSummary() {
    return this.getStringAttribute('new_revision_summary');
  }

  // version_deprecated - computed: true, optional: false, required: false
  public get versionDeprecated() {
    return this.getBooleanAttribute('version_deprecated');
  }
}

export class KubernetesClusterMasterVersionInfoList extends cdktf.ComplexList {

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
  public get(index: number): KubernetesClusterMasterVersionInfoOutputReference {
    return new KubernetesClusterMasterVersionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterMasterMaintenancePolicyMaintenanceWindow {
  /**
  * The day of the week which you want to update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#day KubernetesCluster#day}
  */
  readonly day?: string;
  /**
  * The duration of the day of week you want to update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#duration KubernetesCluster#duration}
  */
  readonly duration: string;
  /**
  * The start time of the day of week you want to update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#start_time KubernetesCluster#start_time}
  */
  readonly startTime: string;
}

export function kubernetesClusterMasterMaintenancePolicyMaintenanceWindowToTerraform(struct?: KubernetesClusterMasterMaintenancePolicyMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.stringToTerraform(struct!.day),
    duration: cdktf.stringToTerraform(struct!.duration),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function kubernetesClusterMasterMaintenancePolicyMaintenanceWindowToHclTerraform(struct?: KubernetesClusterMasterMaintenancePolicyMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.stringToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMasterMaintenancePolicyMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterMasterMaintenancePolicyMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterMaintenancePolicyMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._day = undefined;
      this._duration = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._day = value.day;
      this._duration = value.duration;
      this._startTime = value.startTime;
    }
  }

  // day - computed: true, optional: true, required: false
  private _day?: string; 
  public get day() {
    return this.getStringAttribute('day');
  }
  public set day(value: string) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class KubernetesClusterMasterMaintenancePolicyMaintenanceWindowList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterMasterMaintenancePolicyMaintenanceWindow[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterMasterMaintenancePolicyMaintenanceWindowOutputReference {
    return new KubernetesClusterMasterMaintenancePolicyMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterMasterMaintenancePolicy {
  /**
  * Boolean flag that specifies if master can be upgraded automatically. When omitted, default value is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#auto_upgrade KubernetesCluster#auto_upgrade}
  */
  readonly autoUpgrade: boolean | cdktf.IResolvable;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#maintenance_window KubernetesCluster#maintenance_window}
  */
  readonly maintenanceWindow?: KubernetesClusterMasterMaintenancePolicyMaintenanceWindow[] | cdktf.IResolvable;
}

export function kubernetesClusterMasterMaintenancePolicyToTerraform(struct?: KubernetesClusterMasterMaintenancePolicyOutputReference | KubernetesClusterMasterMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
    maintenance_window: cdktf.listMapper(kubernetesClusterMasterMaintenancePolicyMaintenanceWindowToTerraform, true)(struct!.maintenanceWindow),
  }
}


export function kubernetesClusterMasterMaintenancePolicyToHclTerraform(struct?: KubernetesClusterMasterMaintenancePolicyOutputReference | KubernetesClusterMasterMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.autoUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maintenance_window: {
      value: cdktf.listMapperHcl(kubernetesClusterMasterMaintenancePolicyMaintenanceWindowToHclTerraform, true)(struct!.maintenanceWindow),
      isBlock: true,
      type: "set",
      storageClassType: "KubernetesClusterMasterMaintenancePolicyMaintenanceWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMasterMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMasterMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoUpgrade = undefined;
      this._maintenanceWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoUpgrade = value.autoUpgrade;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
    }
  }

  // auto_upgrade - computed: false, optional: false, required: true
  private _autoUpgrade?: boolean | cdktf.IResolvable; 
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
  public set autoUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoUpgrade = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new KubernetesClusterMasterMaintenancePolicyMaintenanceWindowList(this, "maintenance_window", true);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: KubernetesClusterMasterMaintenancePolicyMaintenanceWindow[] | cdktf.IResolvable) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }
}
export interface KubernetesClusterMasterMasterLocation {
  /**
  * ID of the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#subnet_id KubernetesCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * ID of the availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#zone KubernetesCluster#zone}
  */
  readonly zone?: string;
}

export function kubernetesClusterMasterMasterLocationToTerraform(struct?: KubernetesClusterMasterMasterLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function kubernetesClusterMasterMasterLocationToHclTerraform(struct?: KubernetesClusterMasterMasterLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMasterMasterLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterMasterMasterLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterMasterLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetId = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetId = value.subnetId;
      this._zone = value.zone;
    }
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class KubernetesClusterMasterMasterLocationList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterMasterMasterLocation[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterMasterMasterLocationOutputReference {
    return new KubernetesClusterMasterMasterLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterMasterMasterLogging {
  /**
  * Boolean flag that specifies if kube-apiserver audit logs should be sent to Yandex Cloud Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#audit_enabled KubernetesCluster#audit_enabled}
  */
  readonly auditEnabled?: boolean | cdktf.IResolvable;
  /**
  * Boolean flag that specifies if cluster-autoscaler logs should be sent to Yandex Cloud Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#cluster_autoscaler_enabled KubernetesCluster#cluster_autoscaler_enabled}
  */
  readonly clusterAutoscalerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Boolean flag that specifies if master components logs should be sent to [Yandex Cloud Logging](https://yandex.cloud/docs/logging/). The exact components that will send their logs must be configured via the options described below.
  * 
  * ~> Only one of `log_group_id` or `folder_id` (or none) may be specified. If `log_group_id` is specified, logs will be sent to this specific Log group. If `folder_id` is specified, logs will be sent to **default** Log group of this folder. If none of two is specified, logs will be sent to **default** Log group of the **same** folder as Kubernetes cluster.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Boolean flag that specifies if kubernetes cluster events should be sent to Yandex Cloud Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#events_enabled KubernetesCluster#events_enabled}
  */
  readonly eventsEnabled?: boolean | cdktf.IResolvable;
  /**
  * ID of the folder default Log group of which should be used to collect logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#folder_id KubernetesCluster#folder_id}
  */
  readonly folderId?: string;
  /**
  * Boolean flag that specifies if kube-apiserver logs should be sent to Yandex Cloud Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#kube_apiserver_enabled KubernetesCluster#kube_apiserver_enabled}
  */
  readonly kubeApiserverEnabled?: boolean | cdktf.IResolvable;
  /**
  * ID of the Yandex Cloud Logging [Log group](https://yandex.cloud/docs/logging/concepts/log-group).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#log_group_id KubernetesCluster#log_group_id}
  */
  readonly logGroupId?: string;
}

export function kubernetesClusterMasterMasterLoggingToTerraform(struct?: KubernetesClusterMasterMasterLoggingOutputReference | KubernetesClusterMasterMasterLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_enabled: cdktf.booleanToTerraform(struct!.auditEnabled),
    cluster_autoscaler_enabled: cdktf.booleanToTerraform(struct!.clusterAutoscalerEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    events_enabled: cdktf.booleanToTerraform(struct!.eventsEnabled),
    folder_id: cdktf.stringToTerraform(struct!.folderId),
    kube_apiserver_enabled: cdktf.booleanToTerraform(struct!.kubeApiserverEnabled),
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
  }
}


export function kubernetesClusterMasterMasterLoggingToHclTerraform(struct?: KubernetesClusterMasterMasterLoggingOutputReference | KubernetesClusterMasterMasterLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.auditEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_autoscaler_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.clusterAutoscalerEnabled),
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
    events_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.eventsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    folder_id: {
      value: cdktf.stringToHclTerraform(struct!.folderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kube_apiserver_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.kubeApiserverEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMasterMasterLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMasterMasterLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditEnabled = this._auditEnabled;
    }
    if (this._clusterAutoscalerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterAutoscalerEnabled = this._clusterAutoscalerEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._eventsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventsEnabled = this._eventsEnabled;
    }
    if (this._folderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderId = this._folderId;
    }
    if (this._kubeApiserverEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeApiserverEnabled = this._kubeApiserverEnabled;
    }
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterMasterLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditEnabled = undefined;
      this._clusterAutoscalerEnabled = undefined;
      this._enabled = undefined;
      this._eventsEnabled = undefined;
      this._folderId = undefined;
      this._kubeApiserverEnabled = undefined;
      this._logGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditEnabled = value.auditEnabled;
      this._clusterAutoscalerEnabled = value.clusterAutoscalerEnabled;
      this._enabled = value.enabled;
      this._eventsEnabled = value.eventsEnabled;
      this._folderId = value.folderId;
      this._kubeApiserverEnabled = value.kubeApiserverEnabled;
      this._logGroupId = value.logGroupId;
    }
  }

  // audit_enabled - computed: false, optional: true, required: false
  private _auditEnabled?: boolean | cdktf.IResolvable; 
  public get auditEnabled() {
    return this.getBooleanAttribute('audit_enabled');
  }
  public set auditEnabled(value: boolean | cdktf.IResolvable) {
    this._auditEnabled = value;
  }
  public resetAuditEnabled() {
    this._auditEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditEnabledInput() {
    return this._auditEnabled;
  }

  // cluster_autoscaler_enabled - computed: false, optional: true, required: false
  private _clusterAutoscalerEnabled?: boolean | cdktf.IResolvable; 
  public get clusterAutoscalerEnabled() {
    return this.getBooleanAttribute('cluster_autoscaler_enabled');
  }
  public set clusterAutoscalerEnabled(value: boolean | cdktf.IResolvable) {
    this._clusterAutoscalerEnabled = value;
  }
  public resetClusterAutoscalerEnabled() {
    this._clusterAutoscalerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAutoscalerEnabledInput() {
    return this._clusterAutoscalerEnabled;
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

  // events_enabled - computed: false, optional: true, required: false
  private _eventsEnabled?: boolean | cdktf.IResolvable; 
  public get eventsEnabled() {
    return this.getBooleanAttribute('events_enabled');
  }
  public set eventsEnabled(value: boolean | cdktf.IResolvable) {
    this._eventsEnabled = value;
  }
  public resetEventsEnabled() {
    this._eventsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsEnabledInput() {
    return this._eventsEnabled;
  }

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // kube_apiserver_enabled - computed: false, optional: true, required: false
  private _kubeApiserverEnabled?: boolean | cdktf.IResolvable; 
  public get kubeApiserverEnabled() {
    return this.getBooleanAttribute('kube_apiserver_enabled');
  }
  public set kubeApiserverEnabled(value: boolean | cdktf.IResolvable) {
    this._kubeApiserverEnabled = value;
  }
  public resetKubeApiserverEnabled() {
    this._kubeApiserverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeApiserverEnabledInput() {
    return this._kubeApiserverEnabled;
  }

  // log_group_id - computed: false, optional: true, required: false
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  public resetLogGroupId() {
    this._logGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }
}
export interface KubernetesClusterMasterRegionalLocation {
  /**
  * ID of the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#subnet_id KubernetesCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * ID of the availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#zone KubernetesCluster#zone}
  */
  readonly zone?: string;
}

export function kubernetesClusterMasterRegionalLocationToTerraform(struct?: KubernetesClusterMasterRegionalLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function kubernetesClusterMasterRegionalLocationToHclTerraform(struct?: KubernetesClusterMasterRegionalLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMasterRegionalLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KubernetesClusterMasterRegionalLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterRegionalLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetId = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetId = value.subnetId;
      this._zone = value.zone;
    }
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

export class KubernetesClusterMasterRegionalLocationList extends cdktf.ComplexList {
  public internalValue? : KubernetesClusterMasterRegionalLocation[] | cdktf.IResolvable

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
  public get(index: number): KubernetesClusterMasterRegionalLocationOutputReference {
    return new KubernetesClusterMasterRegionalLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KubernetesClusterMasterRegional {
  /**
  * Name of availability region (e.g. `ru-central1`), where master instances will be allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#region KubernetesCluster#region}
  */
  readonly region: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#location KubernetesCluster#location}
  */
  readonly location?: KubernetesClusterMasterRegionalLocation[] | cdktf.IResolvable;
}

export function kubernetesClusterMasterRegionalToTerraform(struct?: KubernetesClusterMasterRegionalOutputReference | KubernetesClusterMasterRegional): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    location: cdktf.listMapper(kubernetesClusterMasterRegionalLocationToTerraform, true)(struct!.location),
  }
}


export function kubernetesClusterMasterRegionalToHclTerraform(struct?: KubernetesClusterMasterRegionalOutputReference | KubernetesClusterMasterRegional): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.listMapperHcl(kubernetesClusterMasterRegionalLocationToHclTerraform, true)(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterMasterRegionalLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMasterRegionalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMasterRegional | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterRegional | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._region = undefined;
      this._location.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._region = value.region;
      this._location.internalValue = value.location;
    }
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // location - computed: false, optional: true, required: false
  private _location = new KubernetesClusterMasterRegionalLocationList(this, "location", false);
  public get location() {
    return this._location;
  }
  public putLocation(value: KubernetesClusterMasterRegionalLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }
}
export interface KubernetesClusterMasterScalePolicyAutoScale {
  /**
  * Minimal resource preset ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#min_resource_preset_id KubernetesCluster#min_resource_preset_id}
  */
  readonly minResourcePresetId: string;
}

export function kubernetesClusterMasterScalePolicyAutoScaleToTerraform(struct?: KubernetesClusterMasterScalePolicyAutoScaleOutputReference | KubernetesClusterMasterScalePolicyAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_resource_preset_id: cdktf.stringToTerraform(struct!.minResourcePresetId),
  }
}


export function kubernetesClusterMasterScalePolicyAutoScaleToHclTerraform(struct?: KubernetesClusterMasterScalePolicyAutoScaleOutputReference | KubernetesClusterMasterScalePolicyAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_resource_preset_id: {
      value: cdktf.stringToHclTerraform(struct!.minResourcePresetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMasterScalePolicyAutoScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMasterScalePolicyAutoScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minResourcePresetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.minResourcePresetId = this._minResourcePresetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterScalePolicyAutoScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minResourcePresetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minResourcePresetId = value.minResourcePresetId;
    }
  }

  // min_resource_preset_id - computed: false, optional: false, required: true
  private _minResourcePresetId?: string; 
  public get minResourcePresetId() {
    return this.getStringAttribute('min_resource_preset_id');
  }
  public set minResourcePresetId(value: string) {
    this._minResourcePresetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minResourcePresetIdInput() {
    return this._minResourcePresetId;
  }
}
export interface KubernetesClusterMasterScalePolicy {
  /**
  * auto_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#auto_scale KubernetesCluster#auto_scale}
  */
  readonly autoScale?: KubernetesClusterMasterScalePolicyAutoScale;
}

export function kubernetesClusterMasterScalePolicyToTerraform(struct?: KubernetesClusterMasterScalePolicyOutputReference | KubernetesClusterMasterScalePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_scale: kubernetesClusterMasterScalePolicyAutoScaleToTerraform(struct!.autoScale),
  }
}


export function kubernetesClusterMasterScalePolicyToHclTerraform(struct?: KubernetesClusterMasterScalePolicyOutputReference | KubernetesClusterMasterScalePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_scale: {
      value: kubernetesClusterMasterScalePolicyAutoScaleToHclTerraform(struct!.autoScale),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterMasterScalePolicyAutoScaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMasterScalePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMasterScalePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoScale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScale = this._autoScale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterScalePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoScale.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoScale.internalValue = value.autoScale;
    }
  }

  // auto_scale - computed: false, optional: true, required: false
  private _autoScale = new KubernetesClusterMasterScalePolicyAutoScaleOutputReference(this, "auto_scale");
  public get autoScale() {
    return this._autoScale;
  }
  public putAutoScale(value: KubernetesClusterMasterScalePolicyAutoScale) {
    this._autoScale.internalValue = value;
  }
  public resetAutoScale() {
    this._autoScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale.internalValue;
  }
}
export interface KubernetesClusterMasterZonal {
  /**
  * ID of the subnet. If no ID is specified, and there only one subnet in specified zone, an address in this subnet will be allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#subnet_id KubernetesCluster#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * ID of the availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#zone KubernetesCluster#zone}
  */
  readonly zone?: string;
}

export function kubernetesClusterMasterZonalToTerraform(struct?: KubernetesClusterMasterZonalOutputReference | KubernetesClusterMasterZonal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function kubernetesClusterMasterZonalToHclTerraform(struct?: KubernetesClusterMasterZonalOutputReference | KubernetesClusterMasterZonal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMasterZonalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMasterZonal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMasterZonal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetId = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetId = value.subnetId;
      this._zone = value.zone;
    }
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface KubernetesClusterMaster {
  /**
  * Number of etcd clusters that will be used for the Kubernetes master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#etcd_cluster_size KubernetesCluster#etcd_cluster_size}
  */
  readonly etcdClusterSize?: number;
  /**
  * An IPv6 external network address that is assigned to the master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#external_v6_address KubernetesCluster#external_v6_address}
  */
  readonly externalV6Address?: string;
  /**
  * When `true`, Kubernetes master will have visible ipv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#public_ip KubernetesCluster#public_ip}
  */
  readonly publicIp?: boolean | cdktf.IResolvable;
  /**
  * The list of security groups applied to resource or their components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#security_group_ids KubernetesCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Version of Kubernetes that will be used for master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#version KubernetesCluster#version}
  */
  readonly version?: string;
  /**
  * maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#maintenance_policy KubernetesCluster#maintenance_policy}
  */
  readonly maintenancePolicy?: KubernetesClusterMasterMaintenancePolicy;
  /**
  * master_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#master_location KubernetesCluster#master_location}
  */
  readonly masterLocation?: KubernetesClusterMasterMasterLocation[] | cdktf.IResolvable;
  /**
  * master_logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#master_logging KubernetesCluster#master_logging}
  */
  readonly masterLogging?: KubernetesClusterMasterMasterLogging;
  /**
  * regional block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#regional KubernetesCluster#regional}
  */
  readonly regional?: KubernetesClusterMasterRegional;
  /**
  * scale_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#scale_policy KubernetesCluster#scale_policy}
  */
  readonly scalePolicy?: KubernetesClusterMasterScalePolicy;
  /**
  * zonal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#zonal KubernetesCluster#zonal}
  */
  readonly zonal?: KubernetesClusterMasterZonal;
}

export function kubernetesClusterMasterToTerraform(struct?: KubernetesClusterMasterOutputReference | KubernetesClusterMaster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    etcd_cluster_size: cdktf.numberToTerraform(struct!.etcdClusterSize),
    external_v6_address: cdktf.stringToTerraform(struct!.externalV6Address),
    public_ip: cdktf.booleanToTerraform(struct!.publicIp),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    version: cdktf.stringToTerraform(struct!.version),
    maintenance_policy: kubernetesClusterMasterMaintenancePolicyToTerraform(struct!.maintenancePolicy),
    master_location: cdktf.listMapper(kubernetesClusterMasterMasterLocationToTerraform, true)(struct!.masterLocation),
    master_logging: kubernetesClusterMasterMasterLoggingToTerraform(struct!.masterLogging),
    regional: kubernetesClusterMasterRegionalToTerraform(struct!.regional),
    scale_policy: kubernetesClusterMasterScalePolicyToTerraform(struct!.scalePolicy),
    zonal: kubernetesClusterMasterZonalToTerraform(struct!.zonal),
  }
}


export function kubernetesClusterMasterToHclTerraform(struct?: KubernetesClusterMasterOutputReference | KubernetesClusterMaster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    etcd_cluster_size: {
      value: cdktf.numberToHclTerraform(struct!.etcdClusterSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    external_v6_address: {
      value: cdktf.stringToHclTerraform(struct!.externalV6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.publicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_policy: {
      value: kubernetesClusterMasterMaintenancePolicyToHclTerraform(struct!.maintenancePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterMasterMaintenancePolicyList",
    },
    master_location: {
      value: cdktf.listMapperHcl(kubernetesClusterMasterMasterLocationToHclTerraform, true)(struct!.masterLocation),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterMasterMasterLocationList",
    },
    master_logging: {
      value: kubernetesClusterMasterMasterLoggingToHclTerraform(struct!.masterLogging),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterMasterMasterLoggingList",
    },
    regional: {
      value: kubernetesClusterMasterRegionalToHclTerraform(struct!.regional),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterMasterRegionalList",
    },
    scale_policy: {
      value: kubernetesClusterMasterScalePolicyToHclTerraform(struct!.scalePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterMasterScalePolicyList",
    },
    zonal: {
      value: kubernetesClusterMasterZonalToHclTerraform(struct!.zonal),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterMasterZonalList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterMasterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterMaster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._etcdClusterSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdClusterSize = this._etcdClusterSize;
    }
    if (this._externalV6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalV6Address = this._externalV6Address;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._maintenancePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenancePolicy = this._maintenancePolicy?.internalValue;
    }
    if (this._masterLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterLocation = this._masterLocation?.internalValue;
    }
    if (this._masterLogging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterLogging = this._masterLogging?.internalValue;
    }
    if (this._regional?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regional = this._regional?.internalValue;
    }
    if (this._scalePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalePolicy = this._scalePolicy?.internalValue;
    }
    if (this._zonal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zonal = this._zonal?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterMaster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._etcdClusterSize = undefined;
      this._externalV6Address = undefined;
      this._publicIp = undefined;
      this._securityGroupIds = undefined;
      this._version = undefined;
      this._maintenancePolicy.internalValue = undefined;
      this._masterLocation.internalValue = undefined;
      this._masterLogging.internalValue = undefined;
      this._regional.internalValue = undefined;
      this._scalePolicy.internalValue = undefined;
      this._zonal.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._etcdClusterSize = value.etcdClusterSize;
      this._externalV6Address = value.externalV6Address;
      this._publicIp = value.publicIp;
      this._securityGroupIds = value.securityGroupIds;
      this._version = value.version;
      this._maintenancePolicy.internalValue = value.maintenancePolicy;
      this._masterLocation.internalValue = value.masterLocation;
      this._masterLogging.internalValue = value.masterLogging;
      this._regional.internalValue = value.regional;
      this._scalePolicy.internalValue = value.scalePolicy;
      this._zonal.internalValue = value.zonal;
    }
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // etcd_cluster_size - computed: true, optional: true, required: false
  private _etcdClusterSize?: number; 
  public get etcdClusterSize() {
    return this.getNumberAttribute('etcd_cluster_size');
  }
  public set etcdClusterSize(value: number) {
    this._etcdClusterSize = value;
  }
  public resetEtcdClusterSize() {
    this._etcdClusterSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdClusterSizeInput() {
    return this._etcdClusterSize;
  }

  // external_v4_address - computed: true, optional: false, required: false
  public get externalV4Address() {
    return this.getStringAttribute('external_v4_address');
  }

  // external_v4_endpoint - computed: true, optional: false, required: false
  public get externalV4Endpoint() {
    return this.getStringAttribute('external_v4_endpoint');
  }

  // external_v6_address - computed: false, optional: true, required: false
  private _externalV6Address?: string; 
  public get externalV6Address() {
    return this.getStringAttribute('external_v6_address');
  }
  public set externalV6Address(value: string) {
    this._externalV6Address = value;
  }
  public resetExternalV6Address() {
    this._externalV6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalV6AddressInput() {
    return this._externalV6Address;
  }

  // external_v6_endpoint - computed: true, optional: false, required: false
  public get externalV6Endpoint() {
    return this.getStringAttribute('external_v6_endpoint');
  }

  // internal_v4_address - computed: true, optional: false, required: false
  public get internalV4Address() {
    return this.getStringAttribute('internal_v4_address');
  }

  // internal_v4_endpoint - computed: true, optional: false, required: false
  public get internalV4Endpoint() {
    return this.getStringAttribute('internal_v4_endpoint');
  }

  // public_ip - computed: true, optional: true, required: false
  private _publicIp?: boolean | cdktf.IResolvable; 
  public get publicIp() {
    return this.getBooleanAttribute('public_ip');
  }
  public set publicIp(value: boolean | cdktf.IResolvable) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_info - computed: true, optional: false, required: false
  private _versionInfo = new KubernetesClusterMasterVersionInfoList(this, "version_info", false);
  public get versionInfo() {
    return this._versionInfo;
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy = new KubernetesClusterMasterMaintenancePolicyOutputReference(this, "maintenance_policy");
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public putMaintenancePolicy(value: KubernetesClusterMasterMaintenancePolicy) {
    this._maintenancePolicy.internalValue = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy.internalValue;
  }

  // master_location - computed: false, optional: true, required: false
  private _masterLocation = new KubernetesClusterMasterMasterLocationList(this, "master_location", false);
  public get masterLocation() {
    return this._masterLocation;
  }
  public putMasterLocation(value: KubernetesClusterMasterMasterLocation[] | cdktf.IResolvable) {
    this._masterLocation.internalValue = value;
  }
  public resetMasterLocation() {
    this._masterLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterLocationInput() {
    return this._masterLocation.internalValue;
  }

  // master_logging - computed: false, optional: true, required: false
  private _masterLogging = new KubernetesClusterMasterMasterLoggingOutputReference(this, "master_logging");
  public get masterLogging() {
    return this._masterLogging;
  }
  public putMasterLogging(value: KubernetesClusterMasterMasterLogging) {
    this._masterLogging.internalValue = value;
  }
  public resetMasterLogging() {
    this._masterLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterLoggingInput() {
    return this._masterLogging.internalValue;
  }

  // regional - computed: false, optional: true, required: false
  private _regional = new KubernetesClusterMasterRegionalOutputReference(this, "regional");
  public get regional() {
    return this._regional;
  }
  public putRegional(value: KubernetesClusterMasterRegional) {
    this._regional.internalValue = value;
  }
  public resetRegional() {
    this._regional.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalInput() {
    return this._regional.internalValue;
  }

  // scale_policy - computed: false, optional: true, required: false
  private _scalePolicy = new KubernetesClusterMasterScalePolicyOutputReference(this, "scale_policy");
  public get scalePolicy() {
    return this._scalePolicy;
  }
  public putScalePolicy(value: KubernetesClusterMasterScalePolicy) {
    this._scalePolicy.internalValue = value;
  }
  public resetScalePolicy() {
    this._scalePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalePolicyInput() {
    return this._scalePolicy.internalValue;
  }

  // zonal - computed: false, optional: true, required: false
  private _zonal = new KubernetesClusterMasterZonalOutputReference(this, "zonal");
  public get zonal() {
    return this._zonal;
  }
  public putZonal(value: KubernetesClusterMasterZonal) {
    this._zonal.internalValue = value;
  }
  public resetZonal() {
    this._zonal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonalInput() {
    return this._zonal.internalValue;
  }
}
export interface KubernetesClusterNetworkImplementationCilium {
}

export function kubernetesClusterNetworkImplementationCiliumToTerraform(struct?: KubernetesClusterNetworkImplementationCiliumOutputReference | KubernetesClusterNetworkImplementationCilium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kubernetesClusterNetworkImplementationCiliumToHclTerraform(struct?: KubernetesClusterNetworkImplementationCiliumOutputReference | KubernetesClusterNetworkImplementationCilium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesClusterNetworkImplementationCiliumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterNetworkImplementationCilium | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNetworkImplementationCilium | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface KubernetesClusterNetworkImplementation {
  /**
  * cilium block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#cilium KubernetesCluster#cilium}
  */
  readonly cilium?: KubernetesClusterNetworkImplementationCilium;
}

export function kubernetesClusterNetworkImplementationToTerraform(struct?: KubernetesClusterNetworkImplementationOutputReference | KubernetesClusterNetworkImplementation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cilium: kubernetesClusterNetworkImplementationCiliumToTerraform(struct!.cilium),
  }
}


export function kubernetesClusterNetworkImplementationToHclTerraform(struct?: KubernetesClusterNetworkImplementationOutputReference | KubernetesClusterNetworkImplementation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cilium: {
      value: kubernetesClusterNetworkImplementationCiliumToHclTerraform(struct!.cilium),
      isBlock: true,
      type: "list",
      storageClassType: "KubernetesClusterNetworkImplementationCiliumList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterNetworkImplementationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterNetworkImplementation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cilium?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cilium = this._cilium?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterNetworkImplementation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cilium.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cilium.internalValue = value.cilium;
    }
  }

  // cilium - computed: false, optional: true, required: false
  private _cilium = new KubernetesClusterNetworkImplementationCiliumOutputReference(this, "cilium");
  public get cilium() {
    return this._cilium;
  }
  public putCilium(value: KubernetesClusterNetworkImplementationCilium) {
    this._cilium.internalValue = value;
  }
  public resetCilium() {
    this._cilium.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciliumInput() {
    return this._cilium.internalValue;
  }
}
export interface KubernetesClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#create KubernetesCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#delete KubernetesCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#read KubernetesCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#update KubernetesCluster#update}
  */
  readonly update?: string;
}

export function kubernetesClusterTimeoutsToTerraform(struct?: KubernetesClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function kubernetesClusterTimeoutsToHclTerraform(struct?: KubernetesClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface KubernetesClusterWorkloadIdentityFederation {
  /**
  * Identifies whether Workload Identity Federation is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#enabled KubernetesCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function kubernetesClusterWorkloadIdentityFederationToTerraform(struct?: KubernetesClusterWorkloadIdentityFederationOutputReference | KubernetesClusterWorkloadIdentityFederation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function kubernetesClusterWorkloadIdentityFederationToHclTerraform(struct?: KubernetesClusterWorkloadIdentityFederationOutputReference | KubernetesClusterWorkloadIdentityFederation): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesClusterWorkloadIdentityFederationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KubernetesClusterWorkloadIdentityFederation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesClusterWorkloadIdentityFederation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // jwks_uri - computed: true, optional: false, required: false
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster yandex_kubernetes_cluster}
*/
export class KubernetesCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_kubernetes_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesCluster to import
  * @param importFromId The id of the existing KubernetesCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_kubernetes_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.175.0/docs/resources/kubernetes_cluster yandex_kubernetes_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_kubernetes_cluster',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.175.0',
        providerVersionConstraint: '0.175.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterIpv4Range = config.clusterIpv4Range;
    this._clusterIpv6Range = config.clusterIpv6Range;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._networkId = config.networkId;
    this._networkPolicyProvider = config.networkPolicyProvider;
    this._nodeIpv4CidrMaskSize = config.nodeIpv4CidrMaskSize;
    this._nodeServiceAccountId = config.nodeServiceAccountId;
    this._releaseChannel = config.releaseChannel;
    this._serviceAccountId = config.serviceAccountId;
    this._serviceIpv4Range = config.serviceIpv4Range;
    this._serviceIpv6Range = config.serviceIpv6Range;
    this._kmsProvider.internalValue = config.kmsProvider;
    this._master.internalValue = config.master;
    this._networkImplementation.internalValue = config.networkImplementation;
    this._timeouts.internalValue = config.timeouts;
    this._workloadIdentityFederation.internalValue = config.workloadIdentityFederation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_ipv4_range - computed: true, optional: true, required: false
  private _clusterIpv4Range?: string; 
  public get clusterIpv4Range() {
    return this.getStringAttribute('cluster_ipv4_range');
  }
  public set clusterIpv4Range(value: string) {
    this._clusterIpv4Range = value;
  }
  public resetClusterIpv4Range() {
    this._clusterIpv4Range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpv4RangeInput() {
    return this._clusterIpv4Range;
  }

  // cluster_ipv6_range - computed: true, optional: true, required: false
  private _clusterIpv6Range?: string; 
  public get clusterIpv6Range() {
    return this.getStringAttribute('cluster_ipv6_range');
  }
  public set clusterIpv6Range(value: string) {
    this._clusterIpv6Range = value;
  }
  public resetClusterIpv6Range() {
    this._clusterIpv6Range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpv6RangeInput() {
    return this._clusterIpv6Range;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
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

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
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

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // log_group_id - computed: true, optional: false, required: false
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // network_policy_provider - computed: false, optional: true, required: false
  private _networkPolicyProvider?: string; 
  public get networkPolicyProvider() {
    return this.getStringAttribute('network_policy_provider');
  }
  public set networkPolicyProvider(value: string) {
    this._networkPolicyProvider = value;
  }
  public resetNetworkPolicyProvider() {
    this._networkPolicyProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyProviderInput() {
    return this._networkPolicyProvider;
  }

  // node_ipv4_cidr_mask_size - computed: false, optional: true, required: false
  private _nodeIpv4CidrMaskSize?: number; 
  public get nodeIpv4CidrMaskSize() {
    return this.getNumberAttribute('node_ipv4_cidr_mask_size');
  }
  public set nodeIpv4CidrMaskSize(value: number) {
    this._nodeIpv4CidrMaskSize = value;
  }
  public resetNodeIpv4CidrMaskSize() {
    this._nodeIpv4CidrMaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIpv4CidrMaskSizeInput() {
    return this._nodeIpv4CidrMaskSize;
  }

  // node_service_account_id - computed: false, optional: false, required: true
  private _nodeServiceAccountId?: string; 
  public get nodeServiceAccountId() {
    return this.getStringAttribute('node_service_account_id');
  }
  public set nodeServiceAccountId(value: string) {
    this._nodeServiceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeServiceAccountIdInput() {
    return this._nodeServiceAccountId;
  }

  // release_channel - computed: true, optional: true, required: false
  private _releaseChannel?: string; 
  public get releaseChannel() {
    return this.getStringAttribute('release_channel');
  }
  public set releaseChannel(value: string) {
    this._releaseChannel = value;
  }
  public resetReleaseChannel() {
    this._releaseChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseChannelInput() {
    return this._releaseChannel;
  }

  // service_account_id - computed: false, optional: false, required: true
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // service_ipv4_range - computed: true, optional: true, required: false
  private _serviceIpv4Range?: string; 
  public get serviceIpv4Range() {
    return this.getStringAttribute('service_ipv4_range');
  }
  public set serviceIpv4Range(value: string) {
    this._serviceIpv4Range = value;
  }
  public resetServiceIpv4Range() {
    this._serviceIpv4Range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpv4RangeInput() {
    return this._serviceIpv4Range;
  }

  // service_ipv6_range - computed: true, optional: true, required: false
  private _serviceIpv6Range?: string; 
  public get serviceIpv6Range() {
    return this.getStringAttribute('service_ipv6_range');
  }
  public set serviceIpv6Range(value: string) {
    this._serviceIpv6Range = value;
  }
  public resetServiceIpv6Range() {
    this._serviceIpv6Range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpv6RangeInput() {
    return this._serviceIpv6Range;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // kms_provider - computed: false, optional: true, required: false
  private _kmsProvider = new KubernetesClusterKmsProviderOutputReference(this, "kms_provider");
  public get kmsProvider() {
    return this._kmsProvider;
  }
  public putKmsProvider(value: KubernetesClusterKmsProvider) {
    this._kmsProvider.internalValue = value;
  }
  public resetKmsProvider() {
    this._kmsProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsProviderInput() {
    return this._kmsProvider.internalValue;
  }

  // master - computed: false, optional: false, required: true
  private _master = new KubernetesClusterMasterOutputReference(this, "master");
  public get master() {
    return this._master;
  }
  public putMaster(value: KubernetesClusterMaster) {
    this._master.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInput() {
    return this._master.internalValue;
  }

  // network_implementation - computed: false, optional: true, required: false
  private _networkImplementation = new KubernetesClusterNetworkImplementationOutputReference(this, "network_implementation");
  public get networkImplementation() {
    return this._networkImplementation;
  }
  public putNetworkImplementation(value: KubernetesClusterNetworkImplementation) {
    this._networkImplementation.internalValue = value;
  }
  public resetNetworkImplementation() {
    this._networkImplementation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkImplementationInput() {
    return this._networkImplementation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KubernetesClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KubernetesClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workload_identity_federation - computed: false, optional: true, required: false
  private _workloadIdentityFederation = new KubernetesClusterWorkloadIdentityFederationOutputReference(this, "workload_identity_federation");
  public get workloadIdentityFederation() {
    return this._workloadIdentityFederation;
  }
  public putWorkloadIdentityFederation(value: KubernetesClusterWorkloadIdentityFederation) {
    this._workloadIdentityFederation.internalValue = value;
  }
  public resetWorkloadIdentityFederation() {
    this._workloadIdentityFederation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityFederationInput() {
    return this._workloadIdentityFederation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_ipv4_range: cdktf.stringToTerraform(this._clusterIpv4Range),
      cluster_ipv6_range: cdktf.stringToTerraform(this._clusterIpv6Range),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      network_policy_provider: cdktf.stringToTerraform(this._networkPolicyProvider),
      node_ipv4_cidr_mask_size: cdktf.numberToTerraform(this._nodeIpv4CidrMaskSize),
      node_service_account_id: cdktf.stringToTerraform(this._nodeServiceAccountId),
      release_channel: cdktf.stringToTerraform(this._releaseChannel),
      service_account_id: cdktf.stringToTerraform(this._serviceAccountId),
      service_ipv4_range: cdktf.stringToTerraform(this._serviceIpv4Range),
      service_ipv6_range: cdktf.stringToTerraform(this._serviceIpv6Range),
      kms_provider: kubernetesClusterKmsProviderToTerraform(this._kmsProvider.internalValue),
      master: kubernetesClusterMasterToTerraform(this._master.internalValue),
      network_implementation: kubernetesClusterNetworkImplementationToTerraform(this._networkImplementation.internalValue),
      timeouts: kubernetesClusterTimeoutsToTerraform(this._timeouts.internalValue),
      workload_identity_federation: kubernetesClusterWorkloadIdentityFederationToTerraform(this._workloadIdentityFederation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_ipv4_range: {
        value: cdktf.stringToHclTerraform(this._clusterIpv4Range),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_ipv6_range: {
        value: cdktf.stringToHclTerraform(this._clusterIpv6Range),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_policy_provider: {
        value: cdktf.stringToHclTerraform(this._networkPolicyProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_ipv4_cidr_mask_size: {
        value: cdktf.numberToHclTerraform(this._nodeIpv4CidrMaskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_service_account_id: {
        value: cdktf.stringToHclTerraform(this._nodeServiceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_channel: {
        value: cdktf.stringToHclTerraform(this._releaseChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_id: {
        value: cdktf.stringToHclTerraform(this._serviceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_ipv4_range: {
        value: cdktf.stringToHclTerraform(this._serviceIpv4Range),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_ipv6_range: {
        value: cdktf.stringToHclTerraform(this._serviceIpv6Range),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_provider: {
        value: kubernetesClusterKmsProviderToHclTerraform(this._kmsProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterKmsProviderList",
      },
      master: {
        value: kubernetesClusterMasterToHclTerraform(this._master.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterMasterList",
      },
      network_implementation: {
        value: kubernetesClusterNetworkImplementationToHclTerraform(this._networkImplementation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterNetworkImplementationList",
      },
      timeouts: {
        value: kubernetesClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesClusterTimeouts",
      },
      workload_identity_federation: {
        value: kubernetesClusterWorkloadIdentityFederationToHclTerraform(this._workloadIdentityFederation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KubernetesClusterWorkloadIdentityFederationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
