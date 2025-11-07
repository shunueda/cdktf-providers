// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRafayImportClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#blueprint DataRafayImportCluster#blueprint}
  */
  readonly blueprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#blueprint_sync DataRafayImportCluster#blueprint_sync}
  */
  readonly blueprintSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#blueprint_version DataRafayImportCluster#blueprint_version}
  */
  readonly blueprintVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#cluster_health DataRafayImportCluster#cluster_health}
  */
  readonly clusterHealth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#clustername DataRafayImportCluster#clustername}
  */
  readonly clustername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#description DataRafayImportCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#id DataRafayImportCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#kubernetes_provider DataRafayImportCluster#kubernetes_provider}
  */
  readonly kubernetesProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#labels DataRafayImportCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#location DataRafayImportCluster#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#operational_status DataRafayImportCluster#operational_status}
  */
  readonly operationalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#projectname DataRafayImportCluster#projectname}
  */
  readonly projectname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#provision_environment DataRafayImportCluster#provision_environment}
  */
  readonly provisionEnvironment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#provision_status DataRafayImportCluster#provision_status}
  */
  readonly provisionStatus?: string;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#nodes DataRafayImportCluster#nodes}
  */
  readonly nodes?: DataRafayImportClusterNodes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#timeouts DataRafayImportCluster#timeouts}
  */
  readonly timeouts?: DataRafayImportClusterTimeouts;
}
export interface DataRafayImportClusterNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#additional_storage_devices DataRafayImportCluster#additional_storage_devices}
  */
  readonly additionalStorageDevices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#approved DataRafayImportCluster#approved}
  */
  readonly approved?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#edge_id DataRafayImportCluster#edge_id}
  */
  readonly edgeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#ips DataRafayImportCluster#ips}
  */
  readonly ips?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#ipv4_interface DataRafayImportCluster#ipv4_interface}
  */
  readonly ipv4Interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#ipv4_interfaces_all DataRafayImportCluster#ipv4_interfaces_all}
  */
  readonly ipv4InterfacesAll?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#labels DataRafayImportCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#name DataRafayImportCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#node_id DataRafayImportCluster#node_id}
  */
  readonly nodeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#num_cores DataRafayImportCluster#num_cores}
  */
  readonly numCores?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#private_ip DataRafayImportCluster#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#roles DataRafayImportCluster#roles}
  */
  readonly roles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#storage_devices_all DataRafayImportCluster#storage_devices_all}
  */
  readonly storageDevicesAll?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#tags DataRafayImportCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#total_memory DataRafayImportCluster#total_memory}
  */
  readonly totalMemory?: number;
}

export function dataRafayImportClusterNodesToTerraform(struct?: DataRafayImportClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_storage_devices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalStorageDevices),
    approved: cdktf.booleanToTerraform(struct!.approved),
    edge_id: cdktf.stringToTerraform(struct!.edgeId),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    ipv4_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4Interface),
    ipv4_interfaces_all: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4InterfacesAll),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    num_cores: cdktf.numberToTerraform(struct!.numCores),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    storage_devices_all: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storageDevicesAll),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    total_memory: cdktf.numberToTerraform(struct!.totalMemory),
  }
}


export function dataRafayImportClusterNodesToHclTerraform(struct?: DataRafayImportClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_storage_devices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalStorageDevices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    approved: {
      value: cdktf.booleanToHclTerraform(struct!.approved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    edge_id: {
      value: cdktf.stringToHclTerraform(struct!.edgeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv4_interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4Interface),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv4_interfaces_all: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4InterfacesAll),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_cores: {
      value: cdktf.numberToHclTerraform(struct!.numCores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    storage_devices_all: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storageDevicesAll),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    total_memory: {
      value: cdktf.numberToHclTerraform(struct!.totalMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayImportClusterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRafayImportClusterNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalStorageDevices !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalStorageDevices = this._additionalStorageDevices;
    }
    if (this._approved !== undefined) {
      hasAnyValues = true;
      internalValueResult.approved = this._approved;
    }
    if (this._edgeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeId = this._edgeId;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._ipv4Interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Interface = this._ipv4Interface;
    }
    if (this._ipv4InterfacesAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4InterfacesAll = this._ipv4InterfacesAll;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._numCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCores = this._numCores;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._storageDevicesAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDevicesAll = this._storageDevicesAll;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._totalMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMemory = this._totalMemory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayImportClusterNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalStorageDevices = undefined;
      this._approved = undefined;
      this._edgeId = undefined;
      this._ips = undefined;
      this._ipv4Interface = undefined;
      this._ipv4InterfacesAll = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._nodeId = undefined;
      this._numCores = undefined;
      this._privateIp = undefined;
      this._roles = undefined;
      this._storageDevicesAll = undefined;
      this._tags = undefined;
      this._totalMemory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalStorageDevices = value.additionalStorageDevices;
      this._approved = value.approved;
      this._edgeId = value.edgeId;
      this._ips = value.ips;
      this._ipv4Interface = value.ipv4Interface;
      this._ipv4InterfacesAll = value.ipv4InterfacesAll;
      this._labels = value.labels;
      this._name = value.name;
      this._nodeId = value.nodeId;
      this._numCores = value.numCores;
      this._privateIp = value.privateIp;
      this._roles = value.roles;
      this._storageDevicesAll = value.storageDevicesAll;
      this._tags = value.tags;
      this._totalMemory = value.totalMemory;
    }
  }

  // additional_storage_devices - computed: false, optional: true, required: false
  private _additionalStorageDevices?: string[]; 
  public get additionalStorageDevices() {
    return this.getListAttribute('additional_storage_devices');
  }
  public set additionalStorageDevices(value: string[]) {
    this._additionalStorageDevices = value;
  }
  public resetAdditionalStorageDevices() {
    this._additionalStorageDevices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalStorageDevicesInput() {
    return this._additionalStorageDevices;
  }

  // approved - computed: false, optional: true, required: false
  private _approved?: boolean | cdktf.IResolvable; 
  public get approved() {
    return this.getBooleanAttribute('approved');
  }
  public set approved(value: boolean | cdktf.IResolvable) {
    this._approved = value;
  }
  public resetApproved() {
    this._approved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedInput() {
    return this._approved;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // edge_id - computed: false, optional: true, required: false
  private _edgeId?: string; 
  public get edgeId() {
    return this.getStringAttribute('edge_id');
  }
  public set edgeId(value: string) {
    this._edgeId = value;
  }
  public resetEdgeId() {
    this._edgeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeIdInput() {
    return this._edgeId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // ipv4_interface - computed: false, optional: true, required: false
  private _ipv4Interface?: string[]; 
  public get ipv4Interface() {
    return this.getListAttribute('ipv4_interface');
  }
  public set ipv4Interface(value: string[]) {
    this._ipv4Interface = value;
  }
  public resetIpv4Interface() {
    this._ipv4Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4InterfaceInput() {
    return this._ipv4Interface;
  }

  // ipv4_interfaces_all - computed: false, optional: true, required: false
  private _ipv4InterfacesAll?: string[]; 
  public get ipv4InterfacesAll() {
    return this.getListAttribute('ipv4_interfaces_all');
  }
  public set ipv4InterfacesAll(value: string[]) {
    this._ipv4InterfacesAll = value;
  }
  public resetIpv4InterfacesAll() {
    this._ipv4InterfacesAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4InterfacesAllInput() {
    return this._ipv4InterfacesAll;
  }

  // labels - computed: false, optional: true, required: false
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

  // modified_at - computed: true, optional: false, required: false
  public get modifiedAt() {
    return this.getStringAttribute('modified_at');
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

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // num_cores - computed: false, optional: true, required: false
  private _numCores?: number; 
  public get numCores() {
    return this.getNumberAttribute('num_cores');
  }
  public set numCores(value: number) {
    this._numCores = value;
  }
  public resetNumCores() {
    this._numCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCoresInput() {
    return this._numCores;
  }

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_devices_all - computed: false, optional: true, required: false
  private _storageDevicesAll?: string[]; 
  public get storageDevicesAll() {
    return this.getListAttribute('storage_devices_all');
  }
  public set storageDevicesAll(value: string[]) {
    this._storageDevicesAll = value;
  }
  public resetStorageDevicesAll() {
    this._storageDevicesAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDevicesAllInput() {
    return this._storageDevicesAll;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // total_memory - computed: false, optional: true, required: false
  private _totalMemory?: number; 
  public get totalMemory() {
    return this.getNumberAttribute('total_memory');
  }
  public set totalMemory(value: number) {
    this._totalMemory = value;
  }
  public resetTotalMemory() {
    this._totalMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMemoryInput() {
    return this._totalMemory;
  }
}

export class DataRafayImportClusterNodesList extends cdktf.ComplexList {
  public internalValue? : DataRafayImportClusterNodes[] | cdktf.IResolvable

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
  public get(index: number): DataRafayImportClusterNodesOutputReference {
    return new DataRafayImportClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRafayImportClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#read DataRafayImportCluster#read}
  */
  readonly read?: string;
}

export function dataRafayImportClusterTimeoutsToTerraform(struct?: DataRafayImportClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataRafayImportClusterTimeoutsToHclTerraform(struct?: DataRafayImportClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayImportClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRafayImportClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayImportClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster rafay_import_cluster}
*/
export class DataRafayImportCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_import_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRafayImportCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRafayImportCluster to import
  * @param importFromId The id of the existing DataRafayImportCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRafayImportCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_import_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/import_cluster rafay_import_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRafayImportClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataRafayImportClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'rafay_import_cluster',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.52'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprint = config.blueprint;
    this._blueprintSync = config.blueprintSync;
    this._blueprintVersion = config.blueprintVersion;
    this._clusterHealth = config.clusterHealth;
    this._clustername = config.clustername;
    this._description = config.description;
    this._id = config.id;
    this._kubernetesProvider = config.kubernetesProvider;
    this._labels = config.labels;
    this._location = config.location;
    this._operationalStatus = config.operationalStatus;
    this._projectname = config.projectname;
    this._provisionEnvironment = config.provisionEnvironment;
    this._provisionStatus = config.provisionStatus;
    this._nodes.internalValue = config.nodes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blueprint - computed: false, optional: true, required: false
  private _blueprint?: string; 
  public get blueprint() {
    return this.getStringAttribute('blueprint');
  }
  public set blueprint(value: string) {
    this._blueprint = value;
  }
  public resetBlueprint() {
    this._blueprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintInput() {
    return this._blueprint;
  }

  // blueprint_sync - computed: false, optional: true, required: false
  private _blueprintSync?: string; 
  public get blueprintSync() {
    return this.getStringAttribute('blueprint_sync');
  }
  public set blueprintSync(value: string) {
    this._blueprintSync = value;
  }
  public resetBlueprintSync() {
    this._blueprintSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintSyncInput() {
    return this._blueprintSync;
  }

  // blueprint_version - computed: false, optional: true, required: false
  private _blueprintVersion?: string; 
  public get blueprintVersion() {
    return this.getStringAttribute('blueprint_version');
  }
  public set blueprintVersion(value: string) {
    this._blueprintVersion = value;
  }
  public resetBlueprintVersion() {
    this._blueprintVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintVersionInput() {
    return this._blueprintVersion;
  }

  // cluster_health - computed: false, optional: true, required: false
  private _clusterHealth?: string; 
  public get clusterHealth() {
    return this.getStringAttribute('cluster_health');
  }
  public set clusterHealth(value: string) {
    this._clusterHealth = value;
  }
  public resetClusterHealth() {
    this._clusterHealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterHealthInput() {
    return this._clusterHealth;
  }

  // clustername - computed: false, optional: false, required: true
  private _clustername?: string; 
  public get clustername() {
    return this.getStringAttribute('clustername');
  }
  public set clustername(value: string) {
    this._clustername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusternameInput() {
    return this._clustername;
  }

  // description - computed: false, optional: true, required: false
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

  // kubernetes_provider - computed: false, optional: true, required: false
  private _kubernetesProvider?: string; 
  public get kubernetesProvider() {
    return this.getStringAttribute('kubernetes_provider');
  }
  public set kubernetesProvider(value: string) {
    this._kubernetesProvider = value;
  }
  public resetKubernetesProvider() {
    this._kubernetesProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesProviderInput() {
    return this._kubernetesProvider;
  }

  // labels - computed: false, optional: true, required: false
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // operational_status - computed: false, optional: true, required: false
  private _operationalStatus?: string; 
  public get operationalStatus() {
    return this.getStringAttribute('operational_status');
  }
  public set operationalStatus(value: string) {
    this._operationalStatus = value;
  }
  public resetOperationalStatus() {
    this._operationalStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalStatusInput() {
    return this._operationalStatus;
  }

  // projectname - computed: false, optional: false, required: true
  private _projectname?: string; 
  public get projectname() {
    return this.getStringAttribute('projectname');
  }
  public set projectname(value: string) {
    this._projectname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectnameInput() {
    return this._projectname;
  }

  // provision_environment - computed: false, optional: true, required: false
  private _provisionEnvironment?: string; 
  public get provisionEnvironment() {
    return this.getStringAttribute('provision_environment');
  }
  public set provisionEnvironment(value: string) {
    this._provisionEnvironment = value;
  }
  public resetProvisionEnvironment() {
    this._provisionEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionEnvironmentInput() {
    return this._provisionEnvironment;
  }

  // provision_status - computed: false, optional: true, required: false
  private _provisionStatus?: string; 
  public get provisionStatus() {
    return this.getStringAttribute('provision_status');
  }
  public set provisionStatus(value: string) {
    this._provisionStatus = value;
  }
  public resetProvisionStatus() {
    this._provisionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionStatusInput() {
    return this._provisionStatus;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new DataRafayImportClusterNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: DataRafayImportClusterNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataRafayImportClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataRafayImportClusterTimeouts) {
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
      blueprint: cdktf.stringToTerraform(this._blueprint),
      blueprint_sync: cdktf.stringToTerraform(this._blueprintSync),
      blueprint_version: cdktf.stringToTerraform(this._blueprintVersion),
      cluster_health: cdktf.stringToTerraform(this._clusterHealth),
      clustername: cdktf.stringToTerraform(this._clustername),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_provider: cdktf.stringToTerraform(this._kubernetesProvider),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      operational_status: cdktf.stringToTerraform(this._operationalStatus),
      projectname: cdktf.stringToTerraform(this._projectname),
      provision_environment: cdktf.stringToTerraform(this._provisionEnvironment),
      provision_status: cdktf.stringToTerraform(this._provisionStatus),
      nodes: cdktf.listMapper(dataRafayImportClusterNodesToTerraform, true)(this._nodes.internalValue),
      timeouts: dataRafayImportClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint: {
        value: cdktf.stringToHclTerraform(this._blueprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blueprint_sync: {
        value: cdktf.stringToHclTerraform(this._blueprintSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blueprint_version: {
        value: cdktf.stringToHclTerraform(this._blueprintVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_health: {
        value: cdktf.stringToHclTerraform(this._clusterHealth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clustername: {
        value: cdktf.stringToHclTerraform(this._clustername),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_provider: {
        value: cdktf.stringToHclTerraform(this._kubernetesProvider),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operational_status: {
        value: cdktf.stringToHclTerraform(this._operationalStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      projectname: {
        value: cdktf.stringToHclTerraform(this._projectname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provision_environment: {
        value: cdktf.stringToHclTerraform(this._provisionEnvironment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provision_status: {
        value: cdktf.stringToHclTerraform(this._provisionStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodes: {
        value: cdktf.listMapperHcl(dataRafayImportClusterNodesToHclTerraform, true)(this._nodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRafayImportClusterNodesList",
      },
      timeouts: {
        value: dataRafayImportClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataRafayImportClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
