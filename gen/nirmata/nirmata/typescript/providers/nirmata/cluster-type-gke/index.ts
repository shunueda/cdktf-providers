// https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterTypeGkeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#allow_override_credentials ClusterTypeGke#allow_override_credentials}
  */
  readonly allowOverrideCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#auto_sync_namespaces ClusterTypeGke#auto_sync_namespaces}
  */
  readonly autoSyncNamespaces?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#channel ClusterTypeGke#channel}
  */
  readonly channel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#cluster_field_override ClusterTypeGke#cluster_field_override}
  */
  readonly clusterFieldOverride?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#cluster_ipv4_cidr ClusterTypeGke#cluster_ipv4_cidr}
  */
  readonly clusterIpv4Cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#credentials ClusterTypeGke#credentials}
  */
  readonly credentials: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#enable_cloud_run ClusterTypeGke#enable_cloud_run}
  */
  readonly enableCloudRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#enable_horizontal_pod_autoscaling ClusterTypeGke#enable_horizontal_pod_autoscaling}
  */
  readonly enableHorizontalPodAutoscaling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#enable_http_load_balancing ClusterTypeGke#enable_http_load_balancing}
  */
  readonly enableHttpLoadBalancing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#enable_maintenance_policy ClusterTypeGke#enable_maintenance_policy}
  */
  readonly enableMaintenancePolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#enable_network_policy ClusterTypeGke#enable_network_policy}
  */
  readonly enableNetworkPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#enable_secrets_encryption ClusterTypeGke#enable_secrets_encryption}
  */
  readonly enableSecretsEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#enable_vertical_pod_autoscaling ClusterTypeGke#enable_vertical_pod_autoscaling}
  */
  readonly enableVerticalPodAutoscaling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#enable_workload_identity ClusterTypeGke#enable_workload_identity}
  */
  readonly enableWorkloadIdentity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#id ClusterTypeGke#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#location_type ClusterTypeGke#location_type}
  */
  readonly locationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#maintenance_duration ClusterTypeGke#maintenance_duration}
  */
  readonly maintenanceDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#maintenance_exclusion_timewindow ClusterTypeGke#maintenance_exclusion_timewindow}
  */
  readonly maintenanceExclusionTimewindow?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#maintenance_recurrence ClusterTypeGke#maintenance_recurrence}
  */
  readonly maintenanceRecurrence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#maintenance_start_time ClusterTypeGke#maintenance_start_time}
  */
  readonly maintenanceStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#name ClusterTypeGke#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#network ClusterTypeGke#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#node_locations ClusterTypeGke#node_locations}
  */
  readonly nodeLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#nodepool_field_override ClusterTypeGke#nodepool_field_override}
  */
  readonly nodepoolFieldOverride?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#project ClusterTypeGke#project}
  */
  readonly project: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#region ClusterTypeGke#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#secrets_encryption_key ClusterTypeGke#secrets_encryption_key}
  */
  readonly secretsEncryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#services_ipv4_cidr ClusterTypeGke#services_ipv4_cidr}
  */
  readonly servicesIpv4Cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#subnetwork ClusterTypeGke#subnetwork}
  */
  readonly subnetwork: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#system_metadata ClusterTypeGke#system_metadata}
  */
  readonly systemMetadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#version ClusterTypeGke#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#workload_pool ClusterTypeGke#workload_pool}
  */
  readonly workloadPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#zone ClusterTypeGke#zone}
  */
  readonly zone?: string;
  /**
  * addons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#addons ClusterTypeGke#addons}
  */
  readonly addons?: ClusterTypeGkeAddons[] | cdktf.IResolvable;
  /**
  * nodepools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#nodepools ClusterTypeGke#nodepools}
  */
  readonly nodepools: ClusterTypeGkeNodepools[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#timeouts ClusterTypeGke#timeouts}
  */
  readonly timeouts?: ClusterTypeGkeTimeouts;
  /**
  * vault_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#vault_auth ClusterTypeGke#vault_auth}
  */
  readonly vaultAuth?: ClusterTypeGkeVaultAuth;
}
export interface ClusterTypeGkeAddons {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#addon_selector ClusterTypeGke#addon_selector}
  */
  readonly addonSelector: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#catalog ClusterTypeGke#catalog}
  */
  readonly catalog: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#channel ClusterTypeGke#channel}
  */
  readonly channel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#name ClusterTypeGke#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#namespace ClusterTypeGke#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#sequence_number ClusterTypeGke#sequence_number}
  */
  readonly sequenceNumber: number;
}

export function clusterTypeGkeAddonsToTerraform(struct?: ClusterTypeGkeAddons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addon_selector: cdktf.stringToTerraform(struct!.addonSelector),
    catalog: cdktf.stringToTerraform(struct!.catalog),
    channel: cdktf.stringToTerraform(struct!.channel),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    sequence_number: cdktf.numberToTerraform(struct!.sequenceNumber),
  }
}


export function clusterTypeGkeAddonsToHclTerraform(struct?: ClusterTypeGkeAddons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addon_selector: {
      value: cdktf.stringToHclTerraform(struct!.addonSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_number: {
      value: cdktf.numberToHclTerraform(struct!.sequenceNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTypeGkeAddonsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTypeGkeAddons | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addonSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonSelector = this._addonSelector;
    }
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._sequenceNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceNumber = this._sequenceNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTypeGkeAddons | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addonSelector = undefined;
      this._catalog = undefined;
      this._channel = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._sequenceNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addonSelector = value.addonSelector;
      this._catalog = value.catalog;
      this._channel = value.channel;
      this._name = value.name;
      this._namespace = value.namespace;
      this._sequenceNumber = value.sequenceNumber;
    }
  }

  // addon_selector - computed: false, optional: false, required: true
  private _addonSelector?: string; 
  public get addonSelector() {
    return this.getStringAttribute('addon_selector');
  }
  public set addonSelector(value: string) {
    this._addonSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addonSelectorInput() {
    return this._addonSelector;
  }

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // sequence_number - computed: false, optional: false, required: true
  private _sequenceNumber?: number; 
  public get sequenceNumber() {
    return this.getNumberAttribute('sequence_number');
  }
  public set sequenceNumber(value: number) {
    this._sequenceNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumberInput() {
    return this._sequenceNumber;
  }
}

export class ClusterTypeGkeAddonsList extends cdktf.ComplexList {
  public internalValue? : ClusterTypeGkeAddons[] | cdktf.IResolvable

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
  public get(index: number): ClusterTypeGkeAddonsOutputReference {
    return new ClusterTypeGkeAddonsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTypeGkeNodepools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#auto_repair ClusterTypeGke#auto_repair}
  */
  readonly autoRepair: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#auto_upgrade ClusterTypeGke#auto_upgrade}
  */
  readonly autoUpgrade: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#disk_size ClusterTypeGke#disk_size}
  */
  readonly diskSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#enable_preemptible_nodes ClusterTypeGke#enable_preemptible_nodes}
  */
  readonly enablePreemptibleNodes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#machine_type ClusterTypeGke#machine_type}
  */
  readonly machineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#max_surge ClusterTypeGke#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#max_unavailable ClusterTypeGke#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#node_annotations ClusterTypeGke#node_annotations}
  */
  readonly nodeAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#node_labels ClusterTypeGke#node_labels}
  */
  readonly nodeLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#service_account ClusterTypeGke#service_account}
  */
  readonly serviceAccount?: string;
}

export function clusterTypeGkeNodepoolsToTerraform(struct?: ClusterTypeGkeNodepools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_repair: cdktf.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    enable_preemptible_nodes: cdktf.booleanToTerraform(struct!.enablePreemptibleNodes),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    node_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeAnnotations),
    node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeLabels),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function clusterTypeGkeNodepoolsToHclTerraform(struct?: ClusterTypeGkeNodepools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_repair: {
      value: cdktf.booleanToHclTerraform(struct!.autoRepair),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.autoUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_preemptible_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.enablePreemptibleNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_surge: {
      value: cdktf.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTypeGkeNodepoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTypeGkeNodepools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRepair !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRepair = this._autoRepair;
    }
    if (this._autoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._enablePreemptibleNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePreemptibleNodes = this._enablePreemptibleNodes;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._nodeAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAnnotations = this._nodeAnnotations;
    }
    if (this._nodeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLabels = this._nodeLabels;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTypeGkeNodepools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRepair = undefined;
      this._autoUpgrade = undefined;
      this._diskSize = undefined;
      this._enablePreemptibleNodes = undefined;
      this._machineType = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
      this._nodeAnnotations = undefined;
      this._nodeLabels = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRepair = value.autoRepair;
      this._autoUpgrade = value.autoUpgrade;
      this._diskSize = value.diskSize;
      this._enablePreemptibleNodes = value.enablePreemptibleNodes;
      this._machineType = value.machineType;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
      this._nodeAnnotations = value.nodeAnnotations;
      this._nodeLabels = value.nodeLabels;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // auto_repair - computed: false, optional: false, required: true
  private _autoRepair?: boolean | cdktf.IResolvable; 
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }
  public set autoRepair(value: boolean | cdktf.IResolvable) {
    this._autoRepair = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRepairInput() {
    return this._autoRepair;
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

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // enable_preemptible_nodes - computed: false, optional: true, required: false
  private _enablePreemptibleNodes?: boolean | cdktf.IResolvable; 
  public get enablePreemptibleNodes() {
    return this.getBooleanAttribute('enable_preemptible_nodes');
  }
  public set enablePreemptibleNodes(value: boolean | cdktf.IResolvable) {
    this._enablePreemptibleNodes = value;
  }
  public resetEnablePreemptibleNodes() {
    this._enablePreemptibleNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePreemptibleNodesInput() {
    return this._enablePreemptibleNodes;
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // node_annotations - computed: false, optional: true, required: false
  private _nodeAnnotations?: { [key: string]: string }; 
  public get nodeAnnotations() {
    return this.getStringMapAttribute('node_annotations');
  }
  public set nodeAnnotations(value: { [key: string]: string }) {
    this._nodeAnnotations = value;
  }
  public resetNodeAnnotations() {
    this._nodeAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAnnotationsInput() {
    return this._nodeAnnotations;
  }

  // node_labels - computed: false, optional: true, required: false
  private _nodeLabels?: { [key: string]: string }; 
  public get nodeLabels() {
    return this.getStringMapAttribute('node_labels');
  }
  public set nodeLabels(value: { [key: string]: string }) {
    this._nodeLabels = value;
  }
  public resetNodeLabels() {
    this._nodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}

export class ClusterTypeGkeNodepoolsList extends cdktf.ComplexList {
  public internalValue? : ClusterTypeGkeNodepools[] | cdktf.IResolvable

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
  public get(index: number): ClusterTypeGkeNodepoolsOutputReference {
    return new ClusterTypeGkeNodepoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTypeGkeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#create ClusterTypeGke#create}
  */
  readonly create?: string;
}

export function clusterTypeGkeTimeoutsToTerraform(struct?: ClusterTypeGkeTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function clusterTypeGkeTimeoutsToHclTerraform(struct?: ClusterTypeGkeTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTypeGkeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterTypeGkeTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTypeGkeTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}
export interface ClusterTypeGkeVaultAuthRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#name ClusterTypeGke#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#namespace ClusterTypeGke#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#policies ClusterTypeGke#policies}
  */
  readonly policies: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#service_account_name ClusterTypeGke#service_account_name}
  */
  readonly serviceAccountName: string;
}

export function clusterTypeGkeVaultAuthRolesToTerraform(struct?: ClusterTypeGkeVaultAuthRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    policies: cdktf.stringToTerraform(struct!.policies),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function clusterTypeGkeVaultAuthRolesToHclTerraform(struct?: ClusterTypeGkeVaultAuthRoles | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.stringToHclTerraform(struct!.policies),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTypeGkeVaultAuthRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTypeGkeVaultAuthRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTypeGkeVaultAuthRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._policies = undefined;
      this._serviceAccountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._policies = value.policies;
      this._serviceAccountName = value.serviceAccountName;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // policies - computed: false, optional: false, required: true
  private _policies?: string; 
  public get policies() {
    return this.getStringAttribute('policies');
  }
  public set policies(value: string) {
    this._policies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // service_account_name - computed: false, optional: false, required: true
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }
}

export class ClusterTypeGkeVaultAuthRolesList extends cdktf.ComplexList {
  public internalValue? : ClusterTypeGkeVaultAuthRoles[] | cdktf.IResolvable

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
  public get(index: number): ClusterTypeGkeVaultAuthRolesOutputReference {
    return new ClusterTypeGkeVaultAuthRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTypeGkeVaultAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#addon_name ClusterTypeGke#addon_name}
  */
  readonly addonName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#credentials_id ClusterTypeGke#credentials_id}
  */
  readonly credentialsId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#credentials_name ClusterTypeGke#credentials_name}
  */
  readonly credentialsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#delete_auth_path ClusterTypeGke#delete_auth_path}
  */
  readonly deleteAuthPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#name ClusterTypeGke#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#path ClusterTypeGke#path}
  */
  readonly path: string;
  /**
  * roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#roles ClusterTypeGke#roles}
  */
  readonly roles?: ClusterTypeGkeVaultAuthRoles[] | cdktf.IResolvable;
}

export function clusterTypeGkeVaultAuthToTerraform(struct?: ClusterTypeGkeVaultAuthOutputReference | ClusterTypeGkeVaultAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addon_name: cdktf.stringToTerraform(struct!.addonName),
    credentials_id: cdktf.stringToTerraform(struct!.credentialsId),
    credentials_name: cdktf.stringToTerraform(struct!.credentialsName),
    delete_auth_path: cdktf.booleanToTerraform(struct!.deleteAuthPath),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    roles: cdktf.listMapper(clusterTypeGkeVaultAuthRolesToTerraform, true)(struct!.roles),
  }
}


export function clusterTypeGkeVaultAuthToHclTerraform(struct?: ClusterTypeGkeVaultAuthOutputReference | ClusterTypeGkeVaultAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addon_name: {
      value: cdktf.stringToHclTerraform(struct!.addonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_id: {
      value: cdktf.stringToHclTerraform(struct!.credentialsId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_auth_path: {
      value: cdktf.booleanToHclTerraform(struct!.deleteAuthPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(clusterTypeGkeVaultAuthRolesToHclTerraform, true)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTypeGkeVaultAuthRolesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTypeGkeVaultAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTypeGkeVaultAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.addonName = this._addonName;
    }
    if (this._credentialsId !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsId = this._credentialsId;
    }
    if (this._credentialsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsName = this._credentialsName;
    }
    if (this._deleteAuthPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteAuthPath = this._deleteAuthPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTypeGkeVaultAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addonName = undefined;
      this._credentialsId = undefined;
      this._credentialsName = undefined;
      this._deleteAuthPath = undefined;
      this._name = undefined;
      this._path = undefined;
      this._roles.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addonName = value.addonName;
      this._credentialsId = value.credentialsId;
      this._credentialsName = value.credentialsName;
      this._deleteAuthPath = value.deleteAuthPath;
      this._name = value.name;
      this._path = value.path;
      this._roles.internalValue = value.roles;
    }
  }

  // addon_name - computed: false, optional: false, required: true
  private _addonName?: string; 
  public get addonName() {
    return this.getStringAttribute('addon_name');
  }
  public set addonName(value: string) {
    this._addonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addonNameInput() {
    return this._addonName;
  }

  // credentials_id - computed: false, optional: true, required: false
  private _credentialsId?: string; 
  public get credentialsId() {
    return this.getStringAttribute('credentials_id');
  }
  public set credentialsId(value: string) {
    this._credentialsId = value;
  }
  public resetCredentialsId() {
    this._credentialsId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsIdInput() {
    return this._credentialsId;
  }

  // credentials_name - computed: false, optional: true, required: false
  private _credentialsName?: string; 
  public get credentialsName() {
    return this.getStringAttribute('credentials_name');
  }
  public set credentialsName(value: string) {
    this._credentialsName = value;
  }
  public resetCredentialsName() {
    this._credentialsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsNameInput() {
    return this._credentialsName;
  }

  // delete_auth_path - computed: false, optional: true, required: false
  private _deleteAuthPath?: boolean | cdktf.IResolvable; 
  public get deleteAuthPath() {
    return this.getBooleanAttribute('delete_auth_path');
  }
  public set deleteAuthPath(value: boolean | cdktf.IResolvable) {
    this._deleteAuthPath = value;
  }
  public resetDeleteAuthPath() {
    this._deleteAuthPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAuthPathInput() {
    return this._deleteAuthPath;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new ClusterTypeGkeVaultAuthRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: ClusterTypeGkeVaultAuthRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke nirmata_cluster_type_gke}
*/
export class ClusterTypeGke extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nirmata_cluster_type_gke";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterTypeGke resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterTypeGke to import
  * @param importFromId The id of the existing ClusterTypeGke that should be imported. Refer to the {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterTypeGke to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nirmata_cluster_type_gke", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nirmata/nirmata/1.1.13/docs/resources/cluster_type_gke nirmata_cluster_type_gke} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterTypeGkeConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterTypeGkeConfig) {
    super(scope, id, {
      terraformResourceType: 'nirmata_cluster_type_gke',
      terraformGeneratorMetadata: {
        providerName: 'nirmata',
        providerVersion: '1.1.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowOverrideCredentials = config.allowOverrideCredentials;
    this._autoSyncNamespaces = config.autoSyncNamespaces;
    this._channel = config.channel;
    this._clusterFieldOverride = config.clusterFieldOverride;
    this._clusterIpv4Cidr = config.clusterIpv4Cidr;
    this._credentials = config.credentials;
    this._enableCloudRun = config.enableCloudRun;
    this._enableHorizontalPodAutoscaling = config.enableHorizontalPodAutoscaling;
    this._enableHttpLoadBalancing = config.enableHttpLoadBalancing;
    this._enableMaintenancePolicy = config.enableMaintenancePolicy;
    this._enableNetworkPolicy = config.enableNetworkPolicy;
    this._enableSecretsEncryption = config.enableSecretsEncryption;
    this._enableVerticalPodAutoscaling = config.enableVerticalPodAutoscaling;
    this._enableWorkloadIdentity = config.enableWorkloadIdentity;
    this._id = config.id;
    this._locationType = config.locationType;
    this._maintenanceDuration = config.maintenanceDuration;
    this._maintenanceExclusionTimewindow = config.maintenanceExclusionTimewindow;
    this._maintenanceRecurrence = config.maintenanceRecurrence;
    this._maintenanceStartTime = config.maintenanceStartTime;
    this._name = config.name;
    this._network = config.network;
    this._nodeLocations = config.nodeLocations;
    this._nodepoolFieldOverride = config.nodepoolFieldOverride;
    this._project = config.project;
    this._region = config.region;
    this._secretsEncryptionKey = config.secretsEncryptionKey;
    this._servicesIpv4Cidr = config.servicesIpv4Cidr;
    this._subnetwork = config.subnetwork;
    this._systemMetadata = config.systemMetadata;
    this._version = config.version;
    this._workloadPool = config.workloadPool;
    this._zone = config.zone;
    this._addons.internalValue = config.addons;
    this._nodepools.internalValue = config.nodepools;
    this._timeouts.internalValue = config.timeouts;
    this._vaultAuth.internalValue = config.vaultAuth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_override_credentials - computed: false, optional: true, required: false
  private _allowOverrideCredentials?: boolean | cdktf.IResolvable; 
  public get allowOverrideCredentials() {
    return this.getBooleanAttribute('allow_override_credentials');
  }
  public set allowOverrideCredentials(value: boolean | cdktf.IResolvable) {
    this._allowOverrideCredentials = value;
  }
  public resetAllowOverrideCredentials() {
    this._allowOverrideCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverrideCredentialsInput() {
    return this._allowOverrideCredentials;
  }

  // auto_sync_namespaces - computed: false, optional: true, required: false
  private _autoSyncNamespaces?: boolean | cdktf.IResolvable; 
  public get autoSyncNamespaces() {
    return this.getBooleanAttribute('auto_sync_namespaces');
  }
  public set autoSyncNamespaces(value: boolean | cdktf.IResolvable) {
    this._autoSyncNamespaces = value;
  }
  public resetAutoSyncNamespaces() {
    this._autoSyncNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSyncNamespacesInput() {
    return this._autoSyncNamespaces;
  }

  // channel - computed: false, optional: true, required: false
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  public resetChannel() {
    this._channel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // cluster_field_override - computed: false, optional: true, required: false
  private _clusterFieldOverride?: string[]; 
  public get clusterFieldOverride() {
    return this.getListAttribute('cluster_field_override');
  }
  public set clusterFieldOverride(value: string[]) {
    this._clusterFieldOverride = value;
  }
  public resetClusterFieldOverride() {
    this._clusterFieldOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterFieldOverrideInput() {
    return this._clusterFieldOverride;
  }

  // cluster_ipv4_cidr - computed: false, optional: true, required: false
  private _clusterIpv4Cidr?: string; 
  public get clusterIpv4Cidr() {
    return this.getStringAttribute('cluster_ipv4_cidr');
  }
  public set clusterIpv4Cidr(value: string) {
    this._clusterIpv4Cidr = value;
  }
  public resetClusterIpv4Cidr() {
    this._clusterIpv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpv4CidrInput() {
    return this._clusterIpv4Cidr;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // enable_cloud_run - computed: false, optional: true, required: false
  private _enableCloudRun?: boolean | cdktf.IResolvable; 
  public get enableCloudRun() {
    return this.getBooleanAttribute('enable_cloud_run');
  }
  public set enableCloudRun(value: boolean | cdktf.IResolvable) {
    this._enableCloudRun = value;
  }
  public resetEnableCloudRun() {
    this._enableCloudRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCloudRunInput() {
    return this._enableCloudRun;
  }

  // enable_horizontal_pod_autoscaling - computed: false, optional: true, required: false
  private _enableHorizontalPodAutoscaling?: boolean | cdktf.IResolvable; 
  public get enableHorizontalPodAutoscaling() {
    return this.getBooleanAttribute('enable_horizontal_pod_autoscaling');
  }
  public set enableHorizontalPodAutoscaling(value: boolean | cdktf.IResolvable) {
    this._enableHorizontalPodAutoscaling = value;
  }
  public resetEnableHorizontalPodAutoscaling() {
    this._enableHorizontalPodAutoscaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHorizontalPodAutoscalingInput() {
    return this._enableHorizontalPodAutoscaling;
  }

  // enable_http_load_balancing - computed: false, optional: true, required: false
  private _enableHttpLoadBalancing?: boolean | cdktf.IResolvable; 
  public get enableHttpLoadBalancing() {
    return this.getBooleanAttribute('enable_http_load_balancing');
  }
  public set enableHttpLoadBalancing(value: boolean | cdktf.IResolvable) {
    this._enableHttpLoadBalancing = value;
  }
  public resetEnableHttpLoadBalancing() {
    this._enableHttpLoadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttpLoadBalancingInput() {
    return this._enableHttpLoadBalancing;
  }

  // enable_maintenance_policy - computed: false, optional: true, required: false
  private _enableMaintenancePolicy?: boolean | cdktf.IResolvable; 
  public get enableMaintenancePolicy() {
    return this.getBooleanAttribute('enable_maintenance_policy');
  }
  public set enableMaintenancePolicy(value: boolean | cdktf.IResolvable) {
    this._enableMaintenancePolicy = value;
  }
  public resetEnableMaintenancePolicy() {
    this._enableMaintenancePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMaintenancePolicyInput() {
    return this._enableMaintenancePolicy;
  }

  // enable_network_policy - computed: false, optional: true, required: false
  private _enableNetworkPolicy?: boolean | cdktf.IResolvable; 
  public get enableNetworkPolicy() {
    return this.getBooleanAttribute('enable_network_policy');
  }
  public set enableNetworkPolicy(value: boolean | cdktf.IResolvable) {
    this._enableNetworkPolicy = value;
  }
  public resetEnableNetworkPolicy() {
    this._enableNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkPolicyInput() {
    return this._enableNetworkPolicy;
  }

  // enable_secrets_encryption - computed: false, optional: true, required: false
  private _enableSecretsEncryption?: boolean | cdktf.IResolvable; 
  public get enableSecretsEncryption() {
    return this.getBooleanAttribute('enable_secrets_encryption');
  }
  public set enableSecretsEncryption(value: boolean | cdktf.IResolvable) {
    this._enableSecretsEncryption = value;
  }
  public resetEnableSecretsEncryption() {
    this._enableSecretsEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecretsEncryptionInput() {
    return this._enableSecretsEncryption;
  }

  // enable_vertical_pod_autoscaling - computed: false, optional: true, required: false
  private _enableVerticalPodAutoscaling?: boolean | cdktf.IResolvable; 
  public get enableVerticalPodAutoscaling() {
    return this.getBooleanAttribute('enable_vertical_pod_autoscaling');
  }
  public set enableVerticalPodAutoscaling(value: boolean | cdktf.IResolvable) {
    this._enableVerticalPodAutoscaling = value;
  }
  public resetEnableVerticalPodAutoscaling() {
    this._enableVerticalPodAutoscaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVerticalPodAutoscalingInput() {
    return this._enableVerticalPodAutoscaling;
  }

  // enable_workload_identity - computed: false, optional: true, required: false
  private _enableWorkloadIdentity?: boolean | cdktf.IResolvable; 
  public get enableWorkloadIdentity() {
    return this.getBooleanAttribute('enable_workload_identity');
  }
  public set enableWorkloadIdentity(value: boolean | cdktf.IResolvable) {
    this._enableWorkloadIdentity = value;
  }
  public resetEnableWorkloadIdentity() {
    this._enableWorkloadIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWorkloadIdentityInput() {
    return this._enableWorkloadIdentity;
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

  // location_type - computed: false, optional: false, required: true
  private _locationType?: string; 
  public get locationType() {
    return this.getStringAttribute('location_type');
  }
  public set locationType(value: string) {
    this._locationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTypeInput() {
    return this._locationType;
  }

  // maintenance_duration - computed: false, optional: true, required: false
  private _maintenanceDuration?: string; 
  public get maintenanceDuration() {
    return this.getStringAttribute('maintenance_duration');
  }
  public set maintenanceDuration(value: string) {
    this._maintenanceDuration = value;
  }
  public resetMaintenanceDuration() {
    this._maintenanceDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceDurationInput() {
    return this._maintenanceDuration;
  }

  // maintenance_exclusion_timewindow - computed: false, optional: true, required: false
  private _maintenanceExclusionTimewindow?: { [key: string]: string }; 
  public get maintenanceExclusionTimewindow() {
    return this.getStringMapAttribute('maintenance_exclusion_timewindow');
  }
  public set maintenanceExclusionTimewindow(value: { [key: string]: string }) {
    this._maintenanceExclusionTimewindow = value;
  }
  public resetMaintenanceExclusionTimewindow() {
    this._maintenanceExclusionTimewindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceExclusionTimewindowInput() {
    return this._maintenanceExclusionTimewindow;
  }

  // maintenance_recurrence - computed: false, optional: true, required: false
  private _maintenanceRecurrence?: string; 
  public get maintenanceRecurrence() {
    return this.getStringAttribute('maintenance_recurrence');
  }
  public set maintenanceRecurrence(value: string) {
    this._maintenanceRecurrence = value;
  }
  public resetMaintenanceRecurrence() {
    this._maintenanceRecurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceRecurrenceInput() {
    return this._maintenanceRecurrence;
  }

  // maintenance_start_time - computed: false, optional: true, required: false
  private _maintenanceStartTime?: string; 
  public get maintenanceStartTime() {
    return this.getStringAttribute('maintenance_start_time');
  }
  public set maintenanceStartTime(value: string) {
    this._maintenanceStartTime = value;
  }
  public resetMaintenanceStartTime() {
    this._maintenanceStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceStartTimeInput() {
    return this._maintenanceStartTime;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // node_locations - computed: false, optional: true, required: false
  private _nodeLocations?: string[]; 
  public get nodeLocations() {
    return this.getListAttribute('node_locations');
  }
  public set nodeLocations(value: string[]) {
    this._nodeLocations = value;
  }
  public resetNodeLocations() {
    this._nodeLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLocationsInput() {
    return this._nodeLocations;
  }

  // nodepool_field_override - computed: false, optional: true, required: false
  private _nodepoolFieldOverride?: string[]; 
  public get nodepoolFieldOverride() {
    return this.getListAttribute('nodepool_field_override');
  }
  public set nodepoolFieldOverride(value: string[]) {
    this._nodepoolFieldOverride = value;
  }
  public resetNodepoolFieldOverride() {
    this._nodepoolFieldOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodepoolFieldOverrideInput() {
    return this._nodepoolFieldOverride;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secrets_encryption_key - computed: false, optional: true, required: false
  private _secretsEncryptionKey?: string; 
  public get secretsEncryptionKey() {
    return this.getStringAttribute('secrets_encryption_key');
  }
  public set secretsEncryptionKey(value: string) {
    this._secretsEncryptionKey = value;
  }
  public resetSecretsEncryptionKey() {
    this._secretsEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsEncryptionKeyInput() {
    return this._secretsEncryptionKey;
  }

  // services_ipv4_cidr - computed: false, optional: true, required: false
  private _servicesIpv4Cidr?: string; 
  public get servicesIpv4Cidr() {
    return this.getStringAttribute('services_ipv4_cidr');
  }
  public set servicesIpv4Cidr(value: string) {
    this._servicesIpv4Cidr = value;
  }
  public resetServicesIpv4Cidr() {
    this._servicesIpv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesIpv4CidrInput() {
    return this._servicesIpv4Cidr;
  }

  // subnetwork - computed: false, optional: false, required: true
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // system_metadata - computed: false, optional: true, required: false
  private _systemMetadata?: { [key: string]: string }; 
  public get systemMetadata() {
    return this.getStringMapAttribute('system_metadata');
  }
  public set systemMetadata(value: { [key: string]: string }) {
    this._systemMetadata = value;
  }
  public resetSystemMetadata() {
    this._systemMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemMetadataInput() {
    return this._systemMetadata;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // workload_pool - computed: false, optional: true, required: false
  private _workloadPool?: string; 
  public get workloadPool() {
    return this.getStringAttribute('workload_pool');
  }
  public set workloadPool(value: string) {
    this._workloadPool = value;
  }
  public resetWorkloadPool() {
    this._workloadPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadPoolInput() {
    return this._workloadPool;
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

  // addons - computed: false, optional: true, required: false
  private _addons = new ClusterTypeGkeAddonsList(this, "addons", false);
  public get addons() {
    return this._addons;
  }
  public putAddons(value: ClusterTypeGkeAddons[] | cdktf.IResolvable) {
    this._addons.internalValue = value;
  }
  public resetAddons() {
    this._addons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons.internalValue;
  }

  // nodepools - computed: false, optional: false, required: true
  private _nodepools = new ClusterTypeGkeNodepoolsList(this, "nodepools", false);
  public get nodepools() {
    return this._nodepools;
  }
  public putNodepools(value: ClusterTypeGkeNodepools[] | cdktf.IResolvable) {
    this._nodepools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodepoolsInput() {
    return this._nodepools.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterTypeGkeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterTypeGkeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vault_auth - computed: false, optional: true, required: false
  private _vaultAuth = new ClusterTypeGkeVaultAuthOutputReference(this, "vault_auth");
  public get vaultAuth() {
    return this._vaultAuth;
  }
  public putVaultAuth(value: ClusterTypeGkeVaultAuth) {
    this._vaultAuth.internalValue = value;
  }
  public resetVaultAuth() {
    this._vaultAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultAuthInput() {
    return this._vaultAuth.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_override_credentials: cdktf.booleanToTerraform(this._allowOverrideCredentials),
      auto_sync_namespaces: cdktf.booleanToTerraform(this._autoSyncNamespaces),
      channel: cdktf.stringToTerraform(this._channel),
      cluster_field_override: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterFieldOverride),
      cluster_ipv4_cidr: cdktf.stringToTerraform(this._clusterIpv4Cidr),
      credentials: cdktf.stringToTerraform(this._credentials),
      enable_cloud_run: cdktf.booleanToTerraform(this._enableCloudRun),
      enable_horizontal_pod_autoscaling: cdktf.booleanToTerraform(this._enableHorizontalPodAutoscaling),
      enable_http_load_balancing: cdktf.booleanToTerraform(this._enableHttpLoadBalancing),
      enable_maintenance_policy: cdktf.booleanToTerraform(this._enableMaintenancePolicy),
      enable_network_policy: cdktf.booleanToTerraform(this._enableNetworkPolicy),
      enable_secrets_encryption: cdktf.booleanToTerraform(this._enableSecretsEncryption),
      enable_vertical_pod_autoscaling: cdktf.booleanToTerraform(this._enableVerticalPodAutoscaling),
      enable_workload_identity: cdktf.booleanToTerraform(this._enableWorkloadIdentity),
      id: cdktf.stringToTerraform(this._id),
      location_type: cdktf.stringToTerraform(this._locationType),
      maintenance_duration: cdktf.stringToTerraform(this._maintenanceDuration),
      maintenance_exclusion_timewindow: cdktf.hashMapper(cdktf.stringToTerraform)(this._maintenanceExclusionTimewindow),
      maintenance_recurrence: cdktf.stringToTerraform(this._maintenanceRecurrence),
      maintenance_start_time: cdktf.stringToTerraform(this._maintenanceStartTime),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      node_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeLocations),
      nodepool_field_override: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodepoolFieldOverride),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      secrets_encryption_key: cdktf.stringToTerraform(this._secretsEncryptionKey),
      services_ipv4_cidr: cdktf.stringToTerraform(this._servicesIpv4Cidr),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      system_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._systemMetadata),
      version: cdktf.stringToTerraform(this._version),
      workload_pool: cdktf.stringToTerraform(this._workloadPool),
      zone: cdktf.stringToTerraform(this._zone),
      addons: cdktf.listMapper(clusterTypeGkeAddonsToTerraform, true)(this._addons.internalValue),
      nodepools: cdktf.listMapper(clusterTypeGkeNodepoolsToTerraform, true)(this._nodepools.internalValue),
      timeouts: clusterTypeGkeTimeoutsToTerraform(this._timeouts.internalValue),
      vault_auth: clusterTypeGkeVaultAuthToTerraform(this._vaultAuth.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_override_credentials: {
        value: cdktf.booleanToHclTerraform(this._allowOverrideCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_sync_namespaces: {
        value: cdktf.booleanToHclTerraform(this._autoSyncNamespaces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      channel: {
        value: cdktf.stringToHclTerraform(this._channel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_field_override: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusterFieldOverride),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cluster_ipv4_cidr: {
        value: cdktf.stringToHclTerraform(this._clusterIpv4Cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: cdktf.stringToHclTerraform(this._credentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_cloud_run: {
        value: cdktf.booleanToHclTerraform(this._enableCloudRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_horizontal_pod_autoscaling: {
        value: cdktf.booleanToHclTerraform(this._enableHorizontalPodAutoscaling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_http_load_balancing: {
        value: cdktf.booleanToHclTerraform(this._enableHttpLoadBalancing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_maintenance_policy: {
        value: cdktf.booleanToHclTerraform(this._enableMaintenancePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_network_policy: {
        value: cdktf.booleanToHclTerraform(this._enableNetworkPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_secrets_encryption: {
        value: cdktf.booleanToHclTerraform(this._enableSecretsEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_vertical_pod_autoscaling: {
        value: cdktf.booleanToHclTerraform(this._enableVerticalPodAutoscaling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_workload_identity: {
        value: cdktf.booleanToHclTerraform(this._enableWorkloadIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location_type: {
        value: cdktf.stringToHclTerraform(this._locationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_duration: {
        value: cdktf.stringToHclTerraform(this._maintenanceDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_exclusion_timewindow: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._maintenanceExclusionTimewindow),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      maintenance_recurrence: {
        value: cdktf.stringToHclTerraform(this._maintenanceRecurrence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_start_time: {
        value: cdktf.stringToHclTerraform(this._maintenanceStartTime),
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodeLocations),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      nodepool_field_override: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodepoolFieldOverride),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secrets_encryption_key: {
        value: cdktf.stringToHclTerraform(this._secretsEncryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services_ipv4_cidr: {
        value: cdktf.stringToHclTerraform(this._servicesIpv4Cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnetwork: {
        value: cdktf.stringToHclTerraform(this._subnetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._systemMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_pool: {
        value: cdktf.stringToHclTerraform(this._workloadPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      addons: {
        value: cdktf.listMapperHcl(clusterTypeGkeAddonsToHclTerraform, true)(this._addons.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterTypeGkeAddonsList",
      },
      nodepools: {
        value: cdktf.listMapperHcl(clusterTypeGkeNodepoolsToHclTerraform, true)(this._nodepools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterTypeGkeNodepoolsList",
      },
      timeouts: {
        value: clusterTypeGkeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterTypeGkeTimeouts",
      },
      vault_auth: {
        value: clusterTypeGkeVaultAuthToHclTerraform(this._vaultAuth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterTypeGkeVaultAuthList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
