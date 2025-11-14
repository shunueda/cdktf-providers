// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KarbonWorkerNodepoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#cluster_name KarbonWorkerNodepool#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#id KarbonWorkerNodepool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#labels KarbonWorkerNodepool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#name KarbonWorkerNodepool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#node_os_version KarbonWorkerNodepool#node_os_version}
  */
  readonly nodeOsVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#num_instances KarbonWorkerNodepool#num_instances}
  */
  readonly numInstances: number;
  /**
  * ahv_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#ahv_config KarbonWorkerNodepool#ahv_config}
  */
  readonly ahvConfig?: KarbonWorkerNodepoolAhvConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#timeouts KarbonWorkerNodepool#timeouts}
  */
  readonly timeouts?: KarbonWorkerNodepoolTimeouts;
}
export interface KarbonWorkerNodepoolNodes {
}

export function karbonWorkerNodepoolNodesToTerraform(struct?: KarbonWorkerNodepoolNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function karbonWorkerNodepoolNodesToHclTerraform(struct?: KarbonWorkerNodepoolNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KarbonWorkerNodepoolNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KarbonWorkerNodepoolNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonWorkerNodepoolNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
}

export class KarbonWorkerNodepoolNodesList extends cdktf.ComplexList {

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
  public get(index: number): KarbonWorkerNodepoolNodesOutputReference {
    return new KarbonWorkerNodepoolNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KarbonWorkerNodepoolAhvConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#cpu KarbonWorkerNodepool#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#disk_mib KarbonWorkerNodepool#disk_mib}
  */
  readonly diskMib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#iscsi_network_uuid KarbonWorkerNodepool#iscsi_network_uuid}
  */
  readonly iscsiNetworkUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#memory_mib KarbonWorkerNodepool#memory_mib}
  */
  readonly memoryMib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#network_uuid KarbonWorkerNodepool#network_uuid}
  */
  readonly networkUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#prism_element_cluster_uuid KarbonWorkerNodepool#prism_element_cluster_uuid}
  */
  readonly prismElementClusterUuid?: string;
}

export function karbonWorkerNodepoolAhvConfigToTerraform(struct?: KarbonWorkerNodepoolAhvConfigOutputReference | KarbonWorkerNodepoolAhvConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk_mib: cdktf.numberToTerraform(struct!.diskMib),
    iscsi_network_uuid: cdktf.stringToTerraform(struct!.iscsiNetworkUuid),
    memory_mib: cdktf.numberToTerraform(struct!.memoryMib),
    network_uuid: cdktf.stringToTerraform(struct!.networkUuid),
    prism_element_cluster_uuid: cdktf.stringToTerraform(struct!.prismElementClusterUuid),
  }
}


export function karbonWorkerNodepoolAhvConfigToHclTerraform(struct?: KarbonWorkerNodepoolAhvConfigOutputReference | KarbonWorkerNodepoolAhvConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_mib: {
      value: cdktf.numberToHclTerraform(struct!.diskMib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iscsi_network_uuid: {
      value: cdktf.stringToHclTerraform(struct!.iscsiNetworkUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_mib: {
      value: cdktf.numberToHclTerraform(struct!.memoryMib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_uuid: {
      value: cdktf.stringToHclTerraform(struct!.networkUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prism_element_cluster_uuid: {
      value: cdktf.stringToHclTerraform(struct!.prismElementClusterUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KarbonWorkerNodepoolAhvConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KarbonWorkerNodepoolAhvConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskMib !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskMib = this._diskMib;
    }
    if (this._iscsiNetworkUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiNetworkUuid = this._iscsiNetworkUuid;
    }
    if (this._memoryMib !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMib = this._memoryMib;
    }
    if (this._networkUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUuid = this._networkUuid;
    }
    if (this._prismElementClusterUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.prismElementClusterUuid = this._prismElementClusterUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonWorkerNodepoolAhvConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskMib = undefined;
      this._iscsiNetworkUuid = undefined;
      this._memoryMib = undefined;
      this._networkUuid = undefined;
      this._prismElementClusterUuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskMib = value.diskMib;
      this._iscsiNetworkUuid = value.iscsiNetworkUuid;
      this._memoryMib = value.memoryMib;
      this._networkUuid = value.networkUuid;
      this._prismElementClusterUuid = value.prismElementClusterUuid;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_mib - computed: false, optional: true, required: false
  private _diskMib?: number; 
  public get diskMib() {
    return this.getNumberAttribute('disk_mib');
  }
  public set diskMib(value: number) {
    this._diskMib = value;
  }
  public resetDiskMib() {
    this._diskMib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskMibInput() {
    return this._diskMib;
  }

  // iscsi_network_uuid - computed: true, optional: true, required: false
  private _iscsiNetworkUuid?: string; 
  public get iscsiNetworkUuid() {
    return this.getStringAttribute('iscsi_network_uuid');
  }
  public set iscsiNetworkUuid(value: string) {
    this._iscsiNetworkUuid = value;
  }
  public resetIscsiNetworkUuid() {
    this._iscsiNetworkUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiNetworkUuidInput() {
    return this._iscsiNetworkUuid;
  }

  // memory_mib - computed: false, optional: true, required: false
  private _memoryMib?: number; 
  public get memoryMib() {
    return this.getNumberAttribute('memory_mib');
  }
  public set memoryMib(value: number) {
    this._memoryMib = value;
  }
  public resetMemoryMib() {
    this._memoryMib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMibInput() {
    return this._memoryMib;
  }

  // network_uuid - computed: false, optional: false, required: true
  private _networkUuid?: string; 
  public get networkUuid() {
    return this.getStringAttribute('network_uuid');
  }
  public set networkUuid(value: string) {
    this._networkUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUuidInput() {
    return this._networkUuid;
  }

  // prism_element_cluster_uuid - computed: true, optional: true, required: false
  private _prismElementClusterUuid?: string; 
  public get prismElementClusterUuid() {
    return this.getStringAttribute('prism_element_cluster_uuid');
  }
  public set prismElementClusterUuid(value: string) {
    this._prismElementClusterUuid = value;
  }
  public resetPrismElementClusterUuid() {
    this._prismElementClusterUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prismElementClusterUuidInput() {
    return this._prismElementClusterUuid;
  }
}
export interface KarbonWorkerNodepoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#create KarbonWorkerNodepool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#delete KarbonWorkerNodepool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#update KarbonWorkerNodepool#update}
  */
  readonly update?: string;
}

export function karbonWorkerNodepoolTimeoutsToTerraform(struct?: KarbonWorkerNodepoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function karbonWorkerNodepoolTimeoutsToHclTerraform(struct?: KarbonWorkerNodepoolTimeouts | cdktf.IResolvable): any {
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

export class KarbonWorkerNodepoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KarbonWorkerNodepoolTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonWorkerNodepoolTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool nutanix_karbon_worker_nodepool}
*/
export class KarbonWorkerNodepool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_karbon_worker_nodepool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KarbonWorkerNodepool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KarbonWorkerNodepool to import
  * @param importFromId The id of the existing KarbonWorkerNodepool that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KarbonWorkerNodepool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_karbon_worker_nodepool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/karbon_worker_nodepool nutanix_karbon_worker_nodepool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KarbonWorkerNodepoolConfig
  */
  public constructor(scope: Construct, id: string, config: KarbonWorkerNodepoolConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_karbon_worker_nodepool',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._nodeOsVersion = config.nodeOsVersion;
    this._numInstances = config.numInstances;
    this._ahvConfig.internalValue = config.ahvConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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

  // node_os_version - computed: true, optional: true, required: false
  private _nodeOsVersion?: string; 
  public get nodeOsVersion() {
    return this.getStringAttribute('node_os_version');
  }
  public set nodeOsVersion(value: string) {
    this._nodeOsVersion = value;
  }
  public resetNodeOsVersion() {
    this._nodeOsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeOsVersionInput() {
    return this._nodeOsVersion;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new KarbonWorkerNodepoolNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // num_instances - computed: false, optional: false, required: true
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // ahv_config - computed: false, optional: true, required: false
  private _ahvConfig = new KarbonWorkerNodepoolAhvConfigOutputReference(this, "ahv_config");
  public get ahvConfig() {
    return this._ahvConfig;
  }
  public putAhvConfig(value: KarbonWorkerNodepoolAhvConfig) {
    this._ahvConfig.internalValue = value;
  }
  public resetAhvConfig() {
    this._ahvConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ahvConfigInput() {
    return this._ahvConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KarbonWorkerNodepoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KarbonWorkerNodepoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      node_os_version: cdktf.stringToTerraform(this._nodeOsVersion),
      num_instances: cdktf.numberToTerraform(this._numInstances),
      ahv_config: karbonWorkerNodepoolAhvConfigToTerraform(this._ahvConfig.internalValue),
      timeouts: karbonWorkerNodepoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
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
      node_os_version: {
        value: cdktf.stringToHclTerraform(this._nodeOsVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_instances: {
        value: cdktf.numberToHclTerraform(this._numInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ahv_config: {
        value: karbonWorkerNodepoolAhvConfigToHclTerraform(this._ahvConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KarbonWorkerNodepoolAhvConfigList",
      },
      timeouts: {
        value: karbonWorkerNodepoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KarbonWorkerNodepoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
