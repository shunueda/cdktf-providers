// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScaleoutClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Scaleout cluster-id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#cluster_id ScaleoutCluster#cluster_id}
  */
  readonly clusterId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#id ScaleoutCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set the level of slog for Scaleout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#slog_level ScaleoutCluster#slog_level}
  */
  readonly slogLevel?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
  /**
  * cluster_devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#cluster_devices ScaleoutCluster#cluster_devices}
  */
  readonly clusterDevices?: ScaleoutClusterClusterDevices;
  /**
  * db_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#db_config ScaleoutCluster#db_config}
  */
  readonly dbConfig?: ScaleoutClusterDbConfig;
  /**
  * device_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#device_groups ScaleoutCluster#device_groups}
  */
  readonly deviceGroups?: ScaleoutClusterDeviceGroups;
  /**
  * local_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#local_device ScaleoutCluster#local_device}
  */
  readonly localDevice?: ScaleoutClusterLocalDevice;
  /**
  * service_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#service_config ScaleoutCluster#service_config}
  */
  readonly serviceConfig?: ScaleoutClusterServiceConfig;
  /**
  * tracking_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#tracking_template ScaleoutCluster#tracking_template}
  */
  readonly trackingTemplate?: ScaleoutClusterTrackingTemplate;
}
export interface ScaleoutClusterClusterDevicesClusterDiscoveryTimeout {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutClusterClusterDevicesClusterDiscoveryTimeoutToTerraform(struct?: ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutOutputReference | ScaleoutClusterClusterDevicesClusterDiscoveryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function scaleoutClusterClusterDevicesClusterDiscoveryTimeoutToHclTerraform(struct?: ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutOutputReference | ScaleoutClusterClusterDevicesClusterDiscoveryTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterClusterDevicesClusterDiscoveryTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterClusterDevicesClusterDiscoveryTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface ScaleoutClusterClusterDevicesDeviceIdListStruct {
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#action ScaleoutCluster#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#ip ScaleoutCluster#ip}
  */
  readonly ip?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutClusterClusterDevicesDeviceIdListStructToTerraform(struct?: ScaleoutClusterClusterDevicesDeviceIdListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ip: cdktf.stringToTerraform(struct!.ip),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function scaleoutClusterClusterDevicesDeviceIdListStructToHclTerraform(struct?: ScaleoutClusterClusterDevicesDeviceIdListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterClusterDevicesDeviceIdListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterClusterDevicesDeviceIdListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterClusterDevicesDeviceIdListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._ip = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._ip = value.ip;
      this._uuid = value.uuid;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class ScaleoutClusterClusterDevicesDeviceIdListStructList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterClusterDevicesDeviceIdListStruct[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterClusterDevicesDeviceIdListStructOutputReference {
    return new ScaleoutClusterClusterDevicesDeviceIdListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterClusterDevicesMinimumNodes {
  /**
  * Specify the minimum number of the node required to start service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#minimum_nodes_num ScaleoutCluster#minimum_nodes_num}
  */
  readonly minimumNodesNum?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutClusterClusterDevicesMinimumNodesToTerraform(struct?: ScaleoutClusterClusterDevicesMinimumNodesOutputReference | ScaleoutClusterClusterDevicesMinimumNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_nodes_num: cdktf.numberToTerraform(struct!.minimumNodesNum),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function scaleoutClusterClusterDevicesMinimumNodesToHclTerraform(struct?: ScaleoutClusterClusterDevicesMinimumNodesOutputReference | ScaleoutClusterClusterDevicesMinimumNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_nodes_num: {
      value: cdktf.numberToHclTerraform(struct!.minimumNodesNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterClusterDevicesMinimumNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterClusterDevicesMinimumNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumNodesNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumNodesNum = this._minimumNodesNum;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterClusterDevicesMinimumNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minimumNodesNum = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minimumNodesNum = value.minimumNodesNum;
      this._uuid = value.uuid;
    }
  }

  // minimum_nodes_num - computed: false, optional: true, required: false
  private _minimumNodesNum?: number; 
  public get minimumNodesNum() {
    return this.getNumberAttribute('minimum_nodes_num');
  }
  public set minimumNodesNum(value: number) {
    this._minimumNodesNum = value;
  }
  public resetMinimumNodesNum() {
    this._minimumNodesNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumNodesNumInput() {
    return this._minimumNodesNum;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface ScaleoutClusterClusterDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#enable ScaleoutCluster#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
  /**
  * cluster_discovery_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#cluster_discovery_timeout ScaleoutCluster#cluster_discovery_timeout}
  */
  readonly clusterDiscoveryTimeout?: ScaleoutClusterClusterDevicesClusterDiscoveryTimeout;
  /**
  * device_id_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#device_id_list ScaleoutCluster#device_id_list}
  */
  readonly deviceIdList?: ScaleoutClusterClusterDevicesDeviceIdListStruct[] | cdktf.IResolvable;
  /**
  * minimum_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#minimum_nodes ScaleoutCluster#minimum_nodes}
  */
  readonly minimumNodes?: ScaleoutClusterClusterDevicesMinimumNodes;
}

export function scaleoutClusterClusterDevicesToTerraform(struct?: ScaleoutClusterClusterDevicesOutputReference | ScaleoutClusterClusterDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    cluster_discovery_timeout: scaleoutClusterClusterDevicesClusterDiscoveryTimeoutToTerraform(struct!.clusterDiscoveryTimeout),
    device_id_list: cdktf.listMapper(scaleoutClusterClusterDevicesDeviceIdListStructToTerraform, true)(struct!.deviceIdList),
    minimum_nodes: scaleoutClusterClusterDevicesMinimumNodesToTerraform(struct!.minimumNodes),
  }
}


export function scaleoutClusterClusterDevicesToHclTerraform(struct?: ScaleoutClusterClusterDevicesOutputReference | ScaleoutClusterClusterDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_discovery_timeout: {
      value: scaleoutClusterClusterDevicesClusterDiscoveryTimeoutToHclTerraform(struct!.clusterDiscoveryTimeout),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutList",
    },
    device_id_list: {
      value: cdktf.listMapperHcl(scaleoutClusterClusterDevicesDeviceIdListStructToHclTerraform, true)(struct!.deviceIdList),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterClusterDevicesDeviceIdListStructList",
    },
    minimum_nodes: {
      value: scaleoutClusterClusterDevicesMinimumNodesToHclTerraform(struct!.minimumNodes),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterClusterDevicesMinimumNodesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterClusterDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterClusterDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._clusterDiscoveryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDiscoveryTimeout = this._clusterDiscoveryTimeout?.internalValue;
    }
    if (this._deviceIdList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIdList = this._deviceIdList?.internalValue;
    }
    if (this._minimumNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumNodes = this._minimumNodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterClusterDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._uuid = undefined;
      this._clusterDiscoveryTimeout.internalValue = undefined;
      this._deviceIdList.internalValue = undefined;
      this._minimumNodes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._uuid = value.uuid;
      this._clusterDiscoveryTimeout.internalValue = value.clusterDiscoveryTimeout;
      this._deviceIdList.internalValue = value.deviceIdList;
      this._minimumNodes.internalValue = value.minimumNodes;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // cluster_discovery_timeout - computed: false, optional: true, required: false
  private _clusterDiscoveryTimeout = new ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutOutputReference(this, "cluster_discovery_timeout");
  public get clusterDiscoveryTimeout() {
    return this._clusterDiscoveryTimeout;
  }
  public putClusterDiscoveryTimeout(value: ScaleoutClusterClusterDevicesClusterDiscoveryTimeout) {
    this._clusterDiscoveryTimeout.internalValue = value;
  }
  public resetClusterDiscoveryTimeout() {
    this._clusterDiscoveryTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDiscoveryTimeoutInput() {
    return this._clusterDiscoveryTimeout.internalValue;
  }

  // device_id_list - computed: false, optional: true, required: false
  private _deviceIdList = new ScaleoutClusterClusterDevicesDeviceIdListStructList(this, "device_id_list", false);
  public get deviceIdList() {
    return this._deviceIdList;
  }
  public putDeviceIdList(value: ScaleoutClusterClusterDevicesDeviceIdListStruct[] | cdktf.IResolvable) {
    this._deviceIdList.internalValue = value;
  }
  public resetDeviceIdList() {
    this._deviceIdList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdListInput() {
    return this._deviceIdList.internalValue;
  }

  // minimum_nodes - computed: false, optional: true, required: false
  private _minimumNodes = new ScaleoutClusterClusterDevicesMinimumNodesOutputReference(this, "minimum_nodes");
  public get minimumNodes() {
    return this._minimumNodes;
  }
  public putMinimumNodes(value: ScaleoutClusterClusterDevicesMinimumNodes) {
    this._minimumNodes.internalValue = value;
  }
  public resetMinimumNodes() {
    this._minimumNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumNodesInput() {
    return this._minimumNodes.internalValue;
  }
}
export interface ScaleoutClusterDbConfig {
  /**
  * database connection broken detection timeout (mseconds) (12000 mseconds for default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#broken_detect_timeout ScaleoutCluster#broken_detect_timeout}
  */
  readonly brokenDetectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#client_recv_timeout ScaleoutCluster#client_recv_timeout}
  */
  readonly clientRecvTimeout?: number;
  /**
  * client session port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#clientport ScaleoutCluster#clientport}
  */
  readonly clientport?: number;
  /**
  * election connection timeout (mseconds) (1200 for default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#elect_conn_timeout ScaleoutCluster#elect_conn_timeout}
  */
  readonly electConnTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#initlimit ScaleoutCluster#initlimit}
  */
  readonly initlimit?: number;
  /**
  * support loopback interface for scaleout database (enabled by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#loopback_intf_support ScaleoutCluster#loopback_intf_support}
  */
  readonly loopbackIntfSupport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#maxsessiontimeout ScaleoutCluster#maxsessiontimeout}
  */
  readonly maxsessiontimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#minsessiontimeout ScaleoutCluster#minsessiontimeout}
  */
  readonly minsessiontimeout?: number;
  /**
  * send more election packet in election period (enabled by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#more_election_packet ScaleoutCluster#more_election_packet}
  */
  readonly moreElectionPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#synclimit ScaleoutCluster#synclimit}
  */
  readonly synclimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#ticktime ScaleoutCluster#ticktime}
  */
  readonly ticktime?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutClusterDbConfigToTerraform(struct?: ScaleoutClusterDbConfigOutputReference | ScaleoutClusterDbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broken_detect_timeout: cdktf.numberToTerraform(struct!.brokenDetectTimeout),
    client_recv_timeout: cdktf.numberToTerraform(struct!.clientRecvTimeout),
    clientport: cdktf.numberToTerraform(struct!.clientport),
    elect_conn_timeout: cdktf.numberToTerraform(struct!.electConnTimeout),
    initlimit: cdktf.numberToTerraform(struct!.initlimit),
    loopback_intf_support: cdktf.numberToTerraform(struct!.loopbackIntfSupport),
    maxsessiontimeout: cdktf.numberToTerraform(struct!.maxsessiontimeout),
    minsessiontimeout: cdktf.numberToTerraform(struct!.minsessiontimeout),
    more_election_packet: cdktf.numberToTerraform(struct!.moreElectionPacket),
    synclimit: cdktf.numberToTerraform(struct!.synclimit),
    ticktime: cdktf.numberToTerraform(struct!.ticktime),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function scaleoutClusterDbConfigToHclTerraform(struct?: ScaleoutClusterDbConfigOutputReference | ScaleoutClusterDbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broken_detect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.brokenDetectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_recv_timeout: {
      value: cdktf.numberToHclTerraform(struct!.clientRecvTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clientport: {
      value: cdktf.numberToHclTerraform(struct!.clientport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elect_conn_timeout: {
      value: cdktf.numberToHclTerraform(struct!.electConnTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initlimit: {
      value: cdktf.numberToHclTerraform(struct!.initlimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loopback_intf_support: {
      value: cdktf.numberToHclTerraform(struct!.loopbackIntfSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maxsessiontimeout: {
      value: cdktf.numberToHclTerraform(struct!.maxsessiontimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minsessiontimeout: {
      value: cdktf.numberToHclTerraform(struct!.minsessiontimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    more_election_packet: {
      value: cdktf.numberToHclTerraform(struct!.moreElectionPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    synclimit: {
      value: cdktf.numberToHclTerraform(struct!.synclimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ticktime: {
      value: cdktf.numberToHclTerraform(struct!.ticktime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterDbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterDbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokenDetectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokenDetectTimeout = this._brokenDetectTimeout;
    }
    if (this._clientRecvTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRecvTimeout = this._clientRecvTimeout;
    }
    if (this._clientport !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientport = this._clientport;
    }
    if (this._electConnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.electConnTimeout = this._electConnTimeout;
    }
    if (this._initlimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.initlimit = this._initlimit;
    }
    if (this._loopbackIntfSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackIntfSupport = this._loopbackIntfSupport;
    }
    if (this._maxsessiontimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxsessiontimeout = this._maxsessiontimeout;
    }
    if (this._minsessiontimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.minsessiontimeout = this._minsessiontimeout;
    }
    if (this._moreElectionPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.moreElectionPacket = this._moreElectionPacket;
    }
    if (this._synclimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.synclimit = this._synclimit;
    }
    if (this._ticktime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticktime = this._ticktime;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterDbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._brokenDetectTimeout = undefined;
      this._clientRecvTimeout = undefined;
      this._clientport = undefined;
      this._electConnTimeout = undefined;
      this._initlimit = undefined;
      this._loopbackIntfSupport = undefined;
      this._maxsessiontimeout = undefined;
      this._minsessiontimeout = undefined;
      this._moreElectionPacket = undefined;
      this._synclimit = undefined;
      this._ticktime = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._brokenDetectTimeout = value.brokenDetectTimeout;
      this._clientRecvTimeout = value.clientRecvTimeout;
      this._clientport = value.clientport;
      this._electConnTimeout = value.electConnTimeout;
      this._initlimit = value.initlimit;
      this._loopbackIntfSupport = value.loopbackIntfSupport;
      this._maxsessiontimeout = value.maxsessiontimeout;
      this._minsessiontimeout = value.minsessiontimeout;
      this._moreElectionPacket = value.moreElectionPacket;
      this._synclimit = value.synclimit;
      this._ticktime = value.ticktime;
      this._uuid = value.uuid;
    }
  }

  // broken_detect_timeout - computed: false, optional: true, required: false
  private _brokenDetectTimeout?: number; 
  public get brokenDetectTimeout() {
    return this.getNumberAttribute('broken_detect_timeout');
  }
  public set brokenDetectTimeout(value: number) {
    this._brokenDetectTimeout = value;
  }
  public resetBrokenDetectTimeout() {
    this._brokenDetectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokenDetectTimeoutInput() {
    return this._brokenDetectTimeout;
  }

  // client_recv_timeout - computed: false, optional: true, required: false
  private _clientRecvTimeout?: number; 
  public get clientRecvTimeout() {
    return this.getNumberAttribute('client_recv_timeout');
  }
  public set clientRecvTimeout(value: number) {
    this._clientRecvTimeout = value;
  }
  public resetClientRecvTimeout() {
    this._clientRecvTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRecvTimeoutInput() {
    return this._clientRecvTimeout;
  }

  // clientport - computed: false, optional: true, required: false
  private _clientport?: number; 
  public get clientport() {
    return this.getNumberAttribute('clientport');
  }
  public set clientport(value: number) {
    this._clientport = value;
  }
  public resetClientport() {
    this._clientport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientportInput() {
    return this._clientport;
  }

  // elect_conn_timeout - computed: false, optional: true, required: false
  private _electConnTimeout?: number; 
  public get electConnTimeout() {
    return this.getNumberAttribute('elect_conn_timeout');
  }
  public set electConnTimeout(value: number) {
    this._electConnTimeout = value;
  }
  public resetElectConnTimeout() {
    this._electConnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electConnTimeoutInput() {
    return this._electConnTimeout;
  }

  // initlimit - computed: false, optional: true, required: false
  private _initlimit?: number; 
  public get initlimit() {
    return this.getNumberAttribute('initlimit');
  }
  public set initlimit(value: number) {
    this._initlimit = value;
  }
  public resetInitlimit() {
    this._initlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initlimitInput() {
    return this._initlimit;
  }

  // loopback_intf_support - computed: false, optional: true, required: false
  private _loopbackIntfSupport?: number; 
  public get loopbackIntfSupport() {
    return this.getNumberAttribute('loopback_intf_support');
  }
  public set loopbackIntfSupport(value: number) {
    this._loopbackIntfSupport = value;
  }
  public resetLoopbackIntfSupport() {
    this._loopbackIntfSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackIntfSupportInput() {
    return this._loopbackIntfSupport;
  }

  // maxsessiontimeout - computed: false, optional: true, required: false
  private _maxsessiontimeout?: number; 
  public get maxsessiontimeout() {
    return this.getNumberAttribute('maxsessiontimeout');
  }
  public set maxsessiontimeout(value: number) {
    this._maxsessiontimeout = value;
  }
  public resetMaxsessiontimeout() {
    this._maxsessiontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxsessiontimeoutInput() {
    return this._maxsessiontimeout;
  }

  // minsessiontimeout - computed: false, optional: true, required: false
  private _minsessiontimeout?: number; 
  public get minsessiontimeout() {
    return this.getNumberAttribute('minsessiontimeout');
  }
  public set minsessiontimeout(value: number) {
    this._minsessiontimeout = value;
  }
  public resetMinsessiontimeout() {
    this._minsessiontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minsessiontimeoutInput() {
    return this._minsessiontimeout;
  }

  // more_election_packet - computed: false, optional: true, required: false
  private _moreElectionPacket?: number; 
  public get moreElectionPacket() {
    return this.getNumberAttribute('more_election_packet');
  }
  public set moreElectionPacket(value: number) {
    this._moreElectionPacket = value;
  }
  public resetMoreElectionPacket() {
    this._moreElectionPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moreElectionPacketInput() {
    return this._moreElectionPacket;
  }

  // synclimit - computed: false, optional: true, required: false
  private _synclimit?: number; 
  public get synclimit() {
    return this.getNumberAttribute('synclimit');
  }
  public set synclimit(value: number) {
    this._synclimit = value;
  }
  public resetSynclimit() {
    this._synclimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synclimitInput() {
    return this._synclimit;
  }

  // ticktime - computed: false, optional: true, required: false
  private _ticktime?: number; 
  public get ticktime() {
    return this.getNumberAttribute('ticktime');
  }
  public set ticktime(value: number) {
    this._ticktime = value;
  }
  public resetTicktime() {
    this._ticktime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticktimeInput() {
    return this._ticktime;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#device_id_end ScaleoutCluster#device_id_end}
  */
  readonly deviceIdEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#device_id_start ScaleoutCluster#device_id_start}
  */
  readonly deviceIdStart?: number;
}

export function scaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructToTerraform(struct?: ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_id_end: cdktf.numberToTerraform(struct!.deviceIdEnd),
    device_id_start: cdktf.numberToTerraform(struct!.deviceIdStart),
  }
}


export function scaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructToHclTerraform(struct?: ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_id_end: {
      value: cdktf.numberToHclTerraform(struct!.deviceIdEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_id_start: {
      value: cdktf.numberToHclTerraform(struct!.deviceIdStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceIdEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIdEnd = this._deviceIdEnd;
    }
    if (this._deviceIdStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIdStart = this._deviceIdStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceIdEnd = undefined;
      this._deviceIdStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceIdEnd = value.deviceIdEnd;
      this._deviceIdStart = value.deviceIdStart;
    }
  }

  // device_id_end - computed: false, optional: true, required: false
  private _deviceIdEnd?: number; 
  public get deviceIdEnd() {
    return this.getNumberAttribute('device_id_end');
  }
  public set deviceIdEnd(value: number) {
    this._deviceIdEnd = value;
  }
  public resetDeviceIdEnd() {
    this._deviceIdEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdEndInput() {
    return this._deviceIdEnd;
  }

  // device_id_start - computed: false, optional: true, required: false
  private _deviceIdStart?: number; 
  public get deviceIdStart() {
    return this.getNumberAttribute('device_id_start');
  }
  public set deviceIdStart(value: number) {
    this._deviceIdStart = value;
  }
  public resetDeviceIdStart() {
    this._deviceIdStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdStartInput() {
    return this._deviceIdStart;
  }
}

export class ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStruct[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructOutputReference {
    return new ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterDeviceGroupsDeviceGroupListStruct {
  /**
  * scaleout device group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#device_group ScaleoutCluster#device_group}
  */
  readonly deviceGroup: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#user_tag ScaleoutCluster#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
  /**
  * device_id_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#device_id_list ScaleoutCluster#device_id_list}
  */
  readonly deviceIdList?: ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStruct[] | cdktf.IResolvable;
}

export function scaleoutClusterDeviceGroupsDeviceGroupListStructToTerraform(struct?: ScaleoutClusterDeviceGroupsDeviceGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: cdktf.numberToTerraform(struct!.deviceGroup),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    device_id_list: cdktf.listMapper(scaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructToTerraform, true)(struct!.deviceIdList),
  }
}


export function scaleoutClusterDeviceGroupsDeviceGroupListStructToHclTerraform(struct?: ScaleoutClusterDeviceGroupsDeviceGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: cdktf.numberToHclTerraform(struct!.deviceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_id_list: {
      value: cdktf.listMapperHcl(scaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructToHclTerraform, true)(struct!.deviceIdList),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterDeviceGroupsDeviceGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterDeviceGroupsDeviceGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceGroup = this._deviceGroup;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._deviceIdList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIdList = this._deviceIdList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterDeviceGroupsDeviceGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceGroup = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._deviceIdList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceGroup = value.deviceGroup;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._deviceIdList.internalValue = value.deviceIdList;
    }
  }

  // device_group - computed: false, optional: false, required: true
  private _deviceGroup?: number; 
  public get deviceGroup() {
    return this.getNumberAttribute('device_group');
  }
  public set deviceGroup(value: number) {
    this._deviceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupInput() {
    return this._deviceGroup;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // device_id_list - computed: false, optional: true, required: false
  private _deviceIdList = new ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStructList(this, "device_id_list", false);
  public get deviceIdList() {
    return this._deviceIdList;
  }
  public putDeviceIdList(value: ScaleoutClusterDeviceGroupsDeviceGroupListDeviceIdListStruct[] | cdktf.IResolvable) {
    this._deviceIdList.internalValue = value;
  }
  public resetDeviceIdList() {
    this._deviceIdList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdListInput() {
    return this._deviceIdList.internalValue;
  }
}

export class ScaleoutClusterDeviceGroupsDeviceGroupListStructList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterDeviceGroupsDeviceGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterDeviceGroupsDeviceGroupListStructOutputReference {
    return new ScaleoutClusterDeviceGroupsDeviceGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterDeviceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#enable ScaleoutCluster#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
  /**
  * device_group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#device_group_list ScaleoutCluster#device_group_list}
  */
  readonly deviceGroupList?: ScaleoutClusterDeviceGroupsDeviceGroupListStruct[] | cdktf.IResolvable;
}

export function scaleoutClusterDeviceGroupsToTerraform(struct?: ScaleoutClusterDeviceGroupsOutputReference | ScaleoutClusterDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    device_group_list: cdktf.listMapper(scaleoutClusterDeviceGroupsDeviceGroupListStructToTerraform, true)(struct!.deviceGroupList),
  }
}


export function scaleoutClusterDeviceGroupsToHclTerraform(struct?: ScaleoutClusterDeviceGroupsOutputReference | ScaleoutClusterDeviceGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_group_list: {
      value: cdktf.listMapperHcl(scaleoutClusterDeviceGroupsDeviceGroupListStructToHclTerraform, true)(struct!.deviceGroupList),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterDeviceGroupsDeviceGroupListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterDeviceGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterDeviceGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._deviceGroupList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceGroupList = this._deviceGroupList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterDeviceGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._uuid = undefined;
      this._deviceGroupList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._uuid = value.uuid;
      this._deviceGroupList.internalValue = value.deviceGroupList;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // device_group_list - computed: false, optional: true, required: false
  private _deviceGroupList = new ScaleoutClusterDeviceGroupsDeviceGroupListStructList(this, "device_group_list", false);
  public get deviceGroupList() {
    return this._deviceGroupList;
  }
  public putDeviceGroupList(value: ScaleoutClusterDeviceGroupsDeviceGroupListStruct[] | cdktf.IResolvable) {
    this._deviceGroupList.internalValue = value;
  }
  public resetDeviceGroupList() {
    this._deviceGroupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupListInput() {
    return this._deviceGroupList.internalValue;
  }
}
export interface ScaleoutClusterLocalDeviceExcludeInterfacesEthCfg {
  /**
  * Ethernet Interface (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#ethernet ScaleoutCluster#ethernet}
  */
  readonly ethernet?: number;
}

export function scaleoutClusterLocalDeviceExcludeInterfacesEthCfgToTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
  }
}


export function scaleoutClusterLocalDeviceExcludeInterfacesEthCfgToHclTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceExcludeInterfacesEthCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceExcludeInterfacesEthCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
    }
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }
}

export class ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceExcludeInterfacesEthCfg[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgOutputReference {
    return new ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfg {
  /**
  * Loopback Interface (Loopback interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#loopback ScaleoutCluster#loopback}
  */
  readonly loopback?: number;
}

export function scaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgToTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    loopback: cdktf.numberToTerraform(struct!.loopback),
  }
}


export function scaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgToHclTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    loopback: {
      value: cdktf.numberToHclTerraform(struct!.loopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loopback = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loopback = value.loopback;
    }
  }

  // loopback - computed: false, optional: true, required: false
  private _loopback?: number; 
  public get loopback() {
    return this.getNumberAttribute('loopback');
  }
  public set loopback(value: number) {
    this._loopback = value;
  }
  public resetLoopback() {
    this._loopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInput() {
    return this._loopback;
  }
}

export class ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfg[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgOutputReference {
    return new ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfg {
  /**
  * Trunk Interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#trunk ScaleoutCluster#trunk}
  */
  readonly trunk?: number;
}

export function scaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgToTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trunk: cdktf.numberToTerraform(struct!.trunk),
  }
}


export function scaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgToHclTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trunk = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trunk = value.trunk;
    }
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }
}

export class ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfg[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgOutputReference {
    return new ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceExcludeInterfacesVeCfg {
  /**
  * Virtual ethernet Interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#ve ScaleoutCluster#ve}
  */
  readonly ve?: number;
}

export function scaleoutClusterLocalDeviceExcludeInterfacesVeCfgToTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function scaleoutClusterLocalDeviceExcludeInterfacesVeCfgToHclTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceExcludeInterfacesVeCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceExcludeInterfacesVeCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ve = value.ve;
    }
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }
}

export class ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceExcludeInterfacesVeCfg[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgOutputReference {
    return new ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceExcludeInterfaces {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#eth_cfg ScaleoutCluster#eth_cfg}
  */
  readonly ethCfg?: ScaleoutClusterLocalDeviceExcludeInterfacesEthCfg[] | cdktf.IResolvable;
  /**
  * loopback_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#loopback_cfg ScaleoutCluster#loopback_cfg}
  */
  readonly loopbackCfg?: ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfg[] | cdktf.IResolvable;
  /**
  * trunk_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#trunk_cfg ScaleoutCluster#trunk_cfg}
  */
  readonly trunkCfg?: ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfg[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#ve_cfg ScaleoutCluster#ve_cfg}
  */
  readonly veCfg?: ScaleoutClusterLocalDeviceExcludeInterfacesVeCfg[] | cdktf.IResolvable;
}

export function scaleoutClusterLocalDeviceExcludeInterfacesToTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesOutputReference | ScaleoutClusterLocalDeviceExcludeInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    eth_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceExcludeInterfacesEthCfgToTerraform, true)(struct!.ethCfg),
    loopback_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgToTerraform, true)(struct!.loopbackCfg),
    trunk_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgToTerraform, true)(struct!.trunkCfg),
    ve_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceExcludeInterfacesVeCfgToTerraform, true)(struct!.veCfg),
  }
}


export function scaleoutClusterLocalDeviceExcludeInterfacesToHclTerraform(struct?: ScaleoutClusterLocalDeviceExcludeInterfacesOutputReference | ScaleoutClusterLocalDeviceExcludeInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eth_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceExcludeInterfacesEthCfgToHclTerraform, true)(struct!.ethCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgList",
    },
    loopback_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgToHclTerraform, true)(struct!.loopbackCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgList",
    },
    trunk_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgToHclTerraform, true)(struct!.trunkCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgList",
    },
    ve_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceExcludeInterfacesVeCfgToHclTerraform, true)(struct!.veCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceExcludeInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceExcludeInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ethCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethCfg = this._ethCfg?.internalValue;
    }
    if (this._loopbackCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackCfg = this._loopbackCfg?.internalValue;
    }
    if (this._trunkCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkCfg = this._trunkCfg?.internalValue;
    }
    if (this._veCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veCfg = this._veCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceExcludeInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._ethCfg.internalValue = undefined;
      this._loopbackCfg.internalValue = undefined;
      this._trunkCfg.internalValue = undefined;
      this._veCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._ethCfg.internalValue = value.ethCfg;
      this._loopbackCfg.internalValue = value.loopbackCfg;
      this._trunkCfg.internalValue = value.trunkCfg;
      this._veCfg.internalValue = value.veCfg;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // eth_cfg - computed: false, optional: true, required: false
  private _ethCfg = new ScaleoutClusterLocalDeviceExcludeInterfacesEthCfgList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: ScaleoutClusterLocalDeviceExcludeInterfacesEthCfg[] | cdktf.IResolvable) {
    this._ethCfg.internalValue = value;
  }
  public resetEthCfg() {
    this._ethCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethCfgInput() {
    return this._ethCfg.internalValue;
  }

  // loopback_cfg - computed: false, optional: true, required: false
  private _loopbackCfg = new ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfgList(this, "loopback_cfg", false);
  public get loopbackCfg() {
    return this._loopbackCfg;
  }
  public putLoopbackCfg(value: ScaleoutClusterLocalDeviceExcludeInterfacesLoopbackCfg[] | cdktf.IResolvable) {
    this._loopbackCfg.internalValue = value;
  }
  public resetLoopbackCfg() {
    this._loopbackCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackCfgInput() {
    return this._loopbackCfg.internalValue;
  }

  // trunk_cfg - computed: false, optional: true, required: false
  private _trunkCfg = new ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfgList(this, "trunk_cfg", false);
  public get trunkCfg() {
    return this._trunkCfg;
  }
  public putTrunkCfg(value: ScaleoutClusterLocalDeviceExcludeInterfacesTrunkCfg[] | cdktf.IResolvable) {
    this._trunkCfg.internalValue = value;
  }
  public resetTrunkCfg() {
    this._trunkCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkCfgInput() {
    return this._trunkCfg.internalValue;
  }

  // ve_cfg - computed: false, optional: true, required: false
  private _veCfg = new ScaleoutClusterLocalDeviceExcludeInterfacesVeCfgList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: ScaleoutClusterLocalDeviceExcludeInterfacesVeCfg[] | cdktf.IResolvable) {
    this._veCfg.internalValue = value;
  }
  public resetVeCfg() {
    this._veCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veCfgInput() {
    return this._veCfg.internalValue;
  }
}
export interface ScaleoutClusterLocalDeviceL2Redirect {
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#ethernet_vlan ScaleoutCluster#ethernet_vlan}
  */
  readonly ethernetVlan?: number;
  /**
  * Ethernet port (Port Value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#redirect_eth ScaleoutCluster#redirect_eth}
  */
  readonly redirectEth?: number;
  /**
  * L2 Trunk group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#redirect_trunk ScaleoutCluster#redirect_trunk}
  */
  readonly redirectTrunk?: number;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#trunk_vlan ScaleoutCluster#trunk_vlan}
  */
  readonly trunkVlan?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutClusterLocalDeviceL2RedirectToTerraform(struct?: ScaleoutClusterLocalDeviceL2RedirectOutputReference | ScaleoutClusterLocalDeviceL2Redirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet_vlan: cdktf.numberToTerraform(struct!.ethernetVlan),
    redirect_eth: cdktf.numberToTerraform(struct!.redirectEth),
    redirect_trunk: cdktf.numberToTerraform(struct!.redirectTrunk),
    trunk_vlan: cdktf.numberToTerraform(struct!.trunkVlan),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function scaleoutClusterLocalDeviceL2RedirectToHclTerraform(struct?: ScaleoutClusterLocalDeviceL2RedirectOutputReference | ScaleoutClusterLocalDeviceL2Redirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet_vlan: {
      value: cdktf.numberToHclTerraform(struct!.ethernetVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_eth: {
      value: cdktf.numberToHclTerraform(struct!.redirectEth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_trunk: {
      value: cdktf.numberToHclTerraform(struct!.redirectTrunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trunk_vlan: {
      value: cdktf.numberToHclTerraform(struct!.trunkVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceL2RedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceL2Redirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernetVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetVlan = this._ethernetVlan;
    }
    if (this._redirectEth !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectEth = this._redirectEth;
    }
    if (this._redirectTrunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectTrunk = this._redirectTrunk;
    }
    if (this._trunkVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkVlan = this._trunkVlan;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceL2Redirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ethernetVlan = undefined;
      this._redirectEth = undefined;
      this._redirectTrunk = undefined;
      this._trunkVlan = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ethernetVlan = value.ethernetVlan;
      this._redirectEth = value.redirectEth;
      this._redirectTrunk = value.redirectTrunk;
      this._trunkVlan = value.trunkVlan;
      this._uuid = value.uuid;
    }
  }

  // ethernet_vlan - computed: false, optional: true, required: false
  private _ethernetVlan?: number; 
  public get ethernetVlan() {
    return this.getNumberAttribute('ethernet_vlan');
  }
  public set ethernetVlan(value: number) {
    this._ethernetVlan = value;
  }
  public resetEthernetVlan() {
    this._ethernetVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetVlanInput() {
    return this._ethernetVlan;
  }

  // redirect_eth - computed: false, optional: true, required: false
  private _redirectEth?: number; 
  public get redirectEth() {
    return this.getNumberAttribute('redirect_eth');
  }
  public set redirectEth(value: number) {
    this._redirectEth = value;
  }
  public resetRedirectEth() {
    this._redirectEth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectEthInput() {
    return this._redirectEth;
  }

  // redirect_trunk - computed: false, optional: true, required: false
  private _redirectTrunk?: number; 
  public get redirectTrunk() {
    return this.getNumberAttribute('redirect_trunk');
  }
  public set redirectTrunk(value: number) {
    this._redirectTrunk = value;
  }
  public resetRedirectTrunk() {
    this._redirectTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectTrunkInput() {
    return this._redirectTrunk;
  }

  // trunk_vlan - computed: false, optional: true, required: false
  private _trunkVlan?: number; 
  public get trunkVlan() {
    return this.getNumberAttribute('trunk_vlan');
  }
  public set trunkVlan(value: number) {
    this._trunkVlan = value;
  }
  public resetTrunkVlan() {
    this._trunkVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkVlanInput() {
    return this._trunkVlan;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfg {
  /**
  * Ethernet Interface (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#ethernet ScaleoutCluster#ethernet}
  */
  readonly ethernet?: number;
}

export function scaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgToTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
  }
}


export function scaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgToHclTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
    }
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }
}

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfg[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgOutputReference {
    return new ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfg {
  /**
  * Loopback Interface(Not applicable in 'layer-2' mode) (Loopback interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#loopback ScaleoutCluster#loopback}
  */
  readonly loopback?: number;
}

export function scaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgToTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    loopback: cdktf.numberToTerraform(struct!.loopback),
  }
}


export function scaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgToHclTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    loopback: {
      value: cdktf.numberToHclTerraform(struct!.loopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loopback = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loopback = value.loopback;
    }
  }

  // loopback - computed: false, optional: true, required: false
  private _loopback?: number; 
  public get loopback() {
    return this.getNumberAttribute('loopback');
  }
  public set loopback(value: number) {
    this._loopback = value;
  }
  public resetLoopback() {
    this._loopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInput() {
    return this._loopback;
  }
}

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfg[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgOutputReference {
    return new ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfg {
  /**
  * Trunk Interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#trunk ScaleoutCluster#trunk}
  */
  readonly trunk?: number;
}

export function scaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgToTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trunk: cdktf.numberToTerraform(struct!.trunk),
  }
}


export function scaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgToHclTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trunk = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trunk = value.trunk;
    }
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }
}

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfg[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgOutputReference {
    return new ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfg {
  /**
  * Virtual ethernet Interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#ve ScaleoutCluster#ve}
  */
  readonly ve?: number;
}

export function scaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgToTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function scaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgToHclTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ve = value.ve;
    }
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }
}

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfg[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgOutputReference {
    return new ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceSessionSyncInterfaces {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#eth_cfg ScaleoutCluster#eth_cfg}
  */
  readonly ethCfg?: ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfg[] | cdktf.IResolvable;
  /**
  * loopback_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#loopback_cfg ScaleoutCluster#loopback_cfg}
  */
  readonly loopbackCfg?: ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfg[] | cdktf.IResolvable;
  /**
  * trunk_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#trunk_cfg ScaleoutCluster#trunk_cfg}
  */
  readonly trunkCfg?: ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfg[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#ve_cfg ScaleoutCluster#ve_cfg}
  */
  readonly veCfg?: ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfg[] | cdktf.IResolvable;
}

export function scaleoutClusterLocalDeviceSessionSyncInterfacesToTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesOutputReference | ScaleoutClusterLocalDeviceSessionSyncInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    eth_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgToTerraform, true)(struct!.ethCfg),
    loopback_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgToTerraform, true)(struct!.loopbackCfg),
    trunk_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgToTerraform, true)(struct!.trunkCfg),
    ve_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgToTerraform, true)(struct!.veCfg),
  }
}


export function scaleoutClusterLocalDeviceSessionSyncInterfacesToHclTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncInterfacesOutputReference | ScaleoutClusterLocalDeviceSessionSyncInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eth_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgToHclTerraform, true)(struct!.ethCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgList",
    },
    loopback_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgToHclTerraform, true)(struct!.loopbackCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgList",
    },
    trunk_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgToHclTerraform, true)(struct!.trunkCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgList",
    },
    ve_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgToHclTerraform, true)(struct!.veCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceSessionSyncInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceSessionSyncInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ethCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethCfg = this._ethCfg?.internalValue;
    }
    if (this._loopbackCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackCfg = this._loopbackCfg?.internalValue;
    }
    if (this._trunkCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkCfg = this._trunkCfg?.internalValue;
    }
    if (this._veCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veCfg = this._veCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceSessionSyncInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._ethCfg.internalValue = undefined;
      this._loopbackCfg.internalValue = undefined;
      this._trunkCfg.internalValue = undefined;
      this._veCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._ethCfg.internalValue = value.ethCfg;
      this._loopbackCfg.internalValue = value.loopbackCfg;
      this._trunkCfg.internalValue = value.trunkCfg;
      this._veCfg.internalValue = value.veCfg;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // eth_cfg - computed: false, optional: true, required: false
  private _ethCfg = new ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfgList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesEthCfg[] | cdktf.IResolvable) {
    this._ethCfg.internalValue = value;
  }
  public resetEthCfg() {
    this._ethCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethCfgInput() {
    return this._ethCfg.internalValue;
  }

  // loopback_cfg - computed: false, optional: true, required: false
  private _loopbackCfg = new ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfgList(this, "loopback_cfg", false);
  public get loopbackCfg() {
    return this._loopbackCfg;
  }
  public putLoopbackCfg(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesLoopbackCfg[] | cdktf.IResolvable) {
    this._loopbackCfg.internalValue = value;
  }
  public resetLoopbackCfg() {
    this._loopbackCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackCfgInput() {
    return this._loopbackCfg.internalValue;
  }

  // trunk_cfg - computed: false, optional: true, required: false
  private _trunkCfg = new ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfgList(this, "trunk_cfg", false);
  public get trunkCfg() {
    return this._trunkCfg;
  }
  public putTrunkCfg(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesTrunkCfg[] | cdktf.IResolvable) {
    this._trunkCfg.internalValue = value;
  }
  public resetTrunkCfg() {
    this._trunkCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkCfgInput() {
    return this._trunkCfg.internalValue;
  }

  // ve_cfg - computed: false, optional: true, required: false
  private _veCfg = new ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfgList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: ScaleoutClusterLocalDeviceSessionSyncInterfacesVeCfg[] | cdktf.IResolvable) {
    this._veCfg.internalValue = value;
  }
  public resetVeCfg() {
    this._veCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veCfgInput() {
    return this._veCfg.internalValue;
  }
}
export interface ScaleoutClusterLocalDeviceSessionSyncReachabilityOptions {
  /**
  * Do not choose default route for redirection(Not applicable in 'layer-2' mode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#skip_default_route ScaleoutCluster#skip_default_route}
  */
  readonly skipDefaultRoute?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutClusterLocalDeviceSessionSyncReachabilityOptionsToTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsOutputReference | ScaleoutClusterLocalDeviceSessionSyncReachabilityOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_default_route: cdktf.numberToTerraform(struct!.skipDefaultRoute),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function scaleoutClusterLocalDeviceSessionSyncReachabilityOptionsToHclTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsOutputReference | ScaleoutClusterLocalDeviceSessionSyncReachabilityOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skip_default_route: {
      value: cdktf.numberToHclTerraform(struct!.skipDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceSessionSyncReachabilityOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDefaultRoute = this._skipDefaultRoute;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceSessionSyncReachabilityOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skipDefaultRoute = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skipDefaultRoute = value.skipDefaultRoute;
      this._uuid = value.uuid;
    }
  }

  // skip_default_route - computed: false, optional: true, required: false
  private _skipDefaultRoute?: number; 
  public get skipDefaultRoute() {
    return this.getNumberAttribute('skip_default_route');
  }
  public set skipDefaultRoute(value: number) {
    this._skipDefaultRoute = value;
  }
  public resetSkipDefaultRoute() {
    this._skipDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDefaultRouteInput() {
    return this._skipDefaultRoute;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface ScaleoutClusterLocalDeviceSessionSync {
  /**
  * Follow shared partition for session sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#follow_shared ScaleoutCluster#follow_shared}
  */
  readonly followShared?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#interfaces ScaleoutCluster#interfaces}
  */
  readonly interfaces?: ScaleoutClusterLocalDeviceSessionSyncInterfaces;
  /**
  * reachability_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#reachability_options ScaleoutCluster#reachability_options}
  */
  readonly reachabilityOptions?: ScaleoutClusterLocalDeviceSessionSyncReachabilityOptions;
}

export function scaleoutClusterLocalDeviceSessionSyncToTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncOutputReference | ScaleoutClusterLocalDeviceSessionSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_shared: cdktf.numberToTerraform(struct!.followShared),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    interfaces: scaleoutClusterLocalDeviceSessionSyncInterfacesToTerraform(struct!.interfaces),
    reachability_options: scaleoutClusterLocalDeviceSessionSyncReachabilityOptionsToTerraform(struct!.reachabilityOptions),
  }
}


export function scaleoutClusterLocalDeviceSessionSyncToHclTerraform(struct?: ScaleoutClusterLocalDeviceSessionSyncOutputReference | ScaleoutClusterLocalDeviceSessionSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_shared: {
      value: cdktf.numberToHclTerraform(struct!.followShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: scaleoutClusterLocalDeviceSessionSyncInterfacesToHclTerraform(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceSessionSyncInterfacesList",
    },
    reachability_options: {
      value: scaleoutClusterLocalDeviceSessionSyncReachabilityOptionsToHclTerraform(struct!.reachabilityOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceSessionSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceSessionSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.followShared = this._followShared;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._reachabilityOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachabilityOptions = this._reachabilityOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceSessionSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._followShared = undefined;
      this._uuid = undefined;
      this._interfaces.internalValue = undefined;
      this._reachabilityOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._followShared = value.followShared;
      this._uuid = value.uuid;
      this._interfaces.internalValue = value.interfaces;
      this._reachabilityOptions.internalValue = value.reachabilityOptions;
    }
  }

  // follow_shared - computed: false, optional: true, required: false
  private _followShared?: number; 
  public get followShared() {
    return this.getNumberAttribute('follow_shared');
  }
  public set followShared(value: number) {
    this._followShared = value;
  }
  public resetFollowShared() {
    this._followShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followSharedInput() {
    return this._followShared;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new ScaleoutClusterLocalDeviceSessionSyncInterfacesOutputReference(this, "interfaces");
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ScaleoutClusterLocalDeviceSessionSyncInterfaces) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // reachability_options - computed: false, optional: true, required: false
  private _reachabilityOptions = new ScaleoutClusterLocalDeviceSessionSyncReachabilityOptionsOutputReference(this, "reachability_options");
  public get reachabilityOptions() {
    return this._reachabilityOptions;
  }
  public putReachabilityOptions(value: ScaleoutClusterLocalDeviceSessionSyncReachabilityOptions) {
    this._reachabilityOptions.internalValue = value;
  }
  public resetReachabilityOptions() {
    this._reachabilityOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachabilityOptionsInput() {
    return this._reachabilityOptions.internalValue;
  }
}
export interface ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplate {
  /**
  * Partition name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#partition_name ScaleoutCluster#partition_name}
  */
  readonly partitionName?: string;
  /**
  * bind tracking template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#template_name ScaleoutCluster#template_name}
  */
  readonly templateName?: string;
}

export function scaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateToTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function scaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partition_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partitionName = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partitionName = value.partitionName;
      this._templateName = value.templateName;
    }
  }

  // partition_name - computed: false, optional: true, required: false
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  public resetPartitionName() {
    this._partitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}

export class ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplate[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateOutputReference {
    return new ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStruct {
  /**
  * 'down': node stops processing user traffic; 'exit-cluster': node exits scaleout cluster;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#action ScaleoutCluster#action}
  */
  readonly action?: string;
  /**
  * bind multi tracking template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#multi_template ScaleoutCluster#multi_template}
  */
  readonly multiTemplate: string;
  /**
  * action triggering threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#threshold ScaleoutCluster#threshold}
  */
  readonly threshold?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#user_tag ScaleoutCluster#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#template ScaleoutCluster#template}
  */
  readonly template?: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplate[] | cdktf.IResolvable;
}

export function scaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructToTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    multi_template: cdktf.stringToTerraform(struct!.multiTemplate),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template: cdktf.listMapper(scaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateToTerraform, true)(struct!.template),
  }
}


export function scaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_template: {
      value: cdktf.stringToHclTerraform(struct!.multiTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateToHclTerraform, true)(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._multiTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiTemplate = this._multiTemplate;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._multiTemplate = undefined;
      this._threshold = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._multiTemplate = value.multiTemplate;
      this._threshold = value.threshold;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._template.internalValue = value.template;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // multi_template - computed: false, optional: false, required: true
  private _multiTemplate?: string; 
  public get multiTemplate() {
    return this.getStringAttribute('multi_template');
  }
  public set multiTemplate(value: string) {
    this._multiTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTemplateInput() {
    return this._multiTemplate;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // template - computed: false, optional: true, required: false
  private _template = new ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplateList(this, "template", false);
  public get template() {
    return this._template;
  }
  public putTemplate(value: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListTemplate[] | cdktf.IResolvable) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStruct[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructOutputReference {
    return new ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfg {
  /**
  * 'down': node stops processing user traffic; 'exit-cluster': node exits scaleout cluster;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#action ScaleoutCluster#action}
  */
  readonly action?: string;
  /**
  * action triggering threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#threshold ScaleoutCluster#threshold}
  */
  readonly threshold?: number;
}

export function scaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgToTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function scaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._threshold = value.threshold;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

export class ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfg[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgOutputReference {
    return new ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStruct {
  /**
  * bind tracking template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#template ScaleoutCluster#template}
  */
  readonly template: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#user_tag ScaleoutCluster#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
  /**
  * threshold_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#threshold_cfg ScaleoutCluster#threshold_cfg}
  */
  readonly thresholdCfg?: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfg[] | cdktf.IResolvable;
}

export function scaleoutClusterLocalDeviceTrackingTemplateTemplateListStructToTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    threshold_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgToTerraform, true)(struct!.thresholdCfg),
  }
}


export function scaleoutClusterLocalDeviceTrackingTemplateTemplateListStructToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgToHclTerraform, true)(struct!.thresholdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._thresholdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdCfg = this._thresholdCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._thresholdCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._thresholdCfg.internalValue = value.thresholdCfg;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // threshold_cfg - computed: false, optional: true, required: false
  private _thresholdCfg = new ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfgList(this, "threshold_cfg", false);
  public get thresholdCfg() {
    return this._thresholdCfg;
  }
  public putThresholdCfg(value: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListThresholdCfg[] | cdktf.IResolvable) {
    this._thresholdCfg.internalValue = value;
  }
  public resetThresholdCfg() {
    this._thresholdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdCfgInput() {
    return this._thresholdCfg.internalValue;
  }
}

export class ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStruct[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructOutputReference {
    return new ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceTrackingTemplate {
  /**
  * multi_template_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#multi_template_list ScaleoutCluster#multi_template_list}
  */
  readonly multiTemplateList?: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStruct[] | cdktf.IResolvable;
  /**
  * template_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#template_list ScaleoutCluster#template_list}
  */
  readonly templateList?: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStruct[] | cdktf.IResolvable;
}

export function scaleoutClusterLocalDeviceTrackingTemplateToTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateOutputReference | ScaleoutClusterLocalDeviceTrackingTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multi_template_list: cdktf.listMapper(scaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructToTerraform, true)(struct!.multiTemplateList),
    template_list: cdktf.listMapper(scaleoutClusterLocalDeviceTrackingTemplateTemplateListStructToTerraform, true)(struct!.templateList),
  }
}


export function scaleoutClusterLocalDeviceTrackingTemplateToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrackingTemplateOutputReference | ScaleoutClusterLocalDeviceTrackingTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multi_template_list: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructToHclTerraform, true)(struct!.multiTemplateList),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructList",
    },
    template_list: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrackingTemplateTemplateListStructToHclTerraform, true)(struct!.templateList),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrackingTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceTrackingTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiTemplateList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiTemplateList = this._multiTemplateList?.internalValue;
    }
    if (this._templateList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateList = this._templateList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrackingTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._multiTemplateList.internalValue = undefined;
      this._templateList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._multiTemplateList.internalValue = value.multiTemplateList;
      this._templateList.internalValue = value.templateList;
    }
  }

  // multi_template_list - computed: false, optional: true, required: false
  private _multiTemplateList = new ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStructList(this, "multi_template_list", false);
  public get multiTemplateList() {
    return this._multiTemplateList;
  }
  public putMultiTemplateList(value: ScaleoutClusterLocalDeviceTrackingTemplateMultiTemplateListStruct[] | cdktf.IResolvable) {
    this._multiTemplateList.internalValue = value;
  }
  public resetMultiTemplateList() {
    this._multiTemplateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTemplateListInput() {
    return this._multiTemplateList.internalValue;
  }

  // template_list - computed: false, optional: true, required: false
  private _templateList = new ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStructList(this, "template_list", false);
  public get templateList() {
    return this._templateList;
  }
  public putTemplateList(value: ScaleoutClusterLocalDeviceTrackingTemplateTemplateListStruct[] | cdktf.IResolvable) {
    this._templateList.internalValue = value;
  }
  public resetTemplateList() {
    this._templateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateListInput() {
    return this._templateList.internalValue;
  }
}
export interface ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfg {
  /**
  * Ethernet Interface (Ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#ethernet ScaleoutCluster#ethernet}
  */
  readonly ethernet?: number;
}

export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgToTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ethernet: cdktf.numberToTerraform(struct!.ethernet),
  }
}


export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ethernet: {
      value: cdktf.numberToHclTerraform(struct!.ethernet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ethernet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernet = this._ethernet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ethernet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ethernet = value.ethernet;
    }
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfg[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgOutputReference {
    return new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfg {
  /**
  * Loopback Interface (Loopback interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#loopback ScaleoutCluster#loopback}
  */
  readonly loopback?: number;
}

export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgToTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    loopback: cdktf.numberToTerraform(struct!.loopback),
  }
}


export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    loopback: {
      value: cdktf.numberToHclTerraform(struct!.loopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loopback = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loopback = value.loopback;
    }
  }

  // loopback - computed: false, optional: true, required: false
  private _loopback?: number; 
  public get loopback() {
    return this.getNumberAttribute('loopback');
  }
  public set loopback(value: number) {
    this._loopback = value;
  }
  public resetLoopback() {
    this._loopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInput() {
    return this._loopback;
  }
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfg[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgOutputReference {
    return new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfg {
  /**
  * Trunk Interface (Trunk interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#trunk ScaleoutCluster#trunk}
  */
  readonly trunk?: number;
}

export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgToTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trunk: cdktf.numberToTerraform(struct!.trunk),
  }
}


export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trunk: {
      value: cdktf.numberToHclTerraform(struct!.trunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunk = this._trunk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trunk = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trunk = value.trunk;
    }
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfg[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgOutputReference {
    return new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfg {
  /**
  * Virtual ethernet Interface (Virtual ethernet interface number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#ve ScaleoutCluster#ve}
  */
  readonly ve?: number;
}

export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgToTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ve: cdktf.numberToTerraform(struct!.ve),
  }
}


export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ve: {
      value: cdktf.numberToHclTerraform(struct!.ve),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ve !== undefined) {
      hasAnyValues = true;
      internalValueResult.ve = this._ve;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ve = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ve = value.ve;
    }
  }

  // ve - computed: false, optional: true, required: false
  private _ve?: number; 
  public get ve() {
    return this.getNumberAttribute('ve');
  }
  public set ve(value: number) {
    this._ve = value;
  }
  public resetVe() {
    this._ve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veInput() {
    return this._ve;
  }
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfg[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgOutputReference {
    return new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterLocalDeviceTrafficRedirectionInterfaces {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
  /**
  * eth_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#eth_cfg ScaleoutCluster#eth_cfg}
  */
  readonly ethCfg?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfg[] | cdktf.IResolvable;
  /**
  * loopback_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#loopback_cfg ScaleoutCluster#loopback_cfg}
  */
  readonly loopbackCfg?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfg[] | cdktf.IResolvable;
  /**
  * trunk_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#trunk_cfg ScaleoutCluster#trunk_cfg}
  */
  readonly trunkCfg?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfg[] | cdktf.IResolvable;
  /**
  * ve_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#ve_cfg ScaleoutCluster#ve_cfg}
  */
  readonly veCfg?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfg[] | cdktf.IResolvable;
}

export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesToTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesOutputReference | ScaleoutClusterLocalDeviceTrafficRedirectionInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    eth_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgToTerraform, true)(struct!.ethCfg),
    loopback_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgToTerraform, true)(struct!.loopbackCfg),
    trunk_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgToTerraform, true)(struct!.trunkCfg),
    ve_cfg: cdktf.listMapper(scaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgToTerraform, true)(struct!.veCfg),
  }
}


export function scaleoutClusterLocalDeviceTrafficRedirectionInterfacesToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesOutputReference | ScaleoutClusterLocalDeviceTrafficRedirectionInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eth_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgToHclTerraform, true)(struct!.ethCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgList",
    },
    loopback_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgToHclTerraform, true)(struct!.loopbackCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgList",
    },
    trunk_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgToHclTerraform, true)(struct!.trunkCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgList",
    },
    ve_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgToHclTerraform, true)(struct!.veCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceTrafficRedirectionInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ethCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethCfg = this._ethCfg?.internalValue;
    }
    if (this._loopbackCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackCfg = this._loopbackCfg?.internalValue;
    }
    if (this._trunkCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkCfg = this._trunkCfg?.internalValue;
    }
    if (this._veCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.veCfg = this._veCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._ethCfg.internalValue = undefined;
      this._loopbackCfg.internalValue = undefined;
      this._trunkCfg.internalValue = undefined;
      this._veCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._ethCfg.internalValue = value.ethCfg;
      this._loopbackCfg.internalValue = value.loopbackCfg;
      this._trunkCfg.internalValue = value.trunkCfg;
      this._veCfg.internalValue = value.veCfg;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // eth_cfg - computed: false, optional: true, required: false
  private _ethCfg = new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfgList(this, "eth_cfg", false);
  public get ethCfg() {
    return this._ethCfg;
  }
  public putEthCfg(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesEthCfg[] | cdktf.IResolvable) {
    this._ethCfg.internalValue = value;
  }
  public resetEthCfg() {
    this._ethCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethCfgInput() {
    return this._ethCfg.internalValue;
  }

  // loopback_cfg - computed: false, optional: true, required: false
  private _loopbackCfg = new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfgList(this, "loopback_cfg", false);
  public get loopbackCfg() {
    return this._loopbackCfg;
  }
  public putLoopbackCfg(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesLoopbackCfg[] | cdktf.IResolvable) {
    this._loopbackCfg.internalValue = value;
  }
  public resetLoopbackCfg() {
    this._loopbackCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackCfgInput() {
    return this._loopbackCfg.internalValue;
  }

  // trunk_cfg - computed: false, optional: true, required: false
  private _trunkCfg = new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfgList(this, "trunk_cfg", false);
  public get trunkCfg() {
    return this._trunkCfg;
  }
  public putTrunkCfg(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesTrunkCfg[] | cdktf.IResolvable) {
    this._trunkCfg.internalValue = value;
  }
  public resetTrunkCfg() {
    this._trunkCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkCfgInput() {
    return this._trunkCfg.internalValue;
  }

  // ve_cfg - computed: false, optional: true, required: false
  private _veCfg = new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfgList(this, "ve_cfg", false);
  public get veCfg() {
    return this._veCfg;
  }
  public putVeCfg(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesVeCfg[] | cdktf.IResolvable) {
    this._veCfg.internalValue = value;
  }
  public resetVeCfg() {
    this._veCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get veCfgInput() {
    return this._veCfg.internalValue;
  }
}
export interface ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions {
  /**
  * Do not choose default route for redirection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#skip_default_route ScaleoutCluster#skip_default_route}
  */
  readonly skipDefaultRoute?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsToTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsOutputReference | ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_default_route: cdktf.numberToTerraform(struct!.skipDefaultRoute),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function scaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsOutputReference | ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skip_default_route: {
      value: cdktf.numberToHclTerraform(struct!.skipDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDefaultRoute = this._skipDefaultRoute;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skipDefaultRoute = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skipDefaultRoute = value.skipDefaultRoute;
      this._uuid = value.uuid;
    }
  }

  // skip_default_route - computed: false, optional: true, required: false
  private _skipDefaultRoute?: number; 
  public get skipDefaultRoute() {
    return this.getNumberAttribute('skip_default_route');
  }
  public set skipDefaultRoute(value: number) {
    this._skipDefaultRoute = value;
  }
  public resetSkipDefaultRoute() {
    this._skipDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDefaultRouteInput() {
    return this._skipDefaultRoute;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface ScaleoutClusterLocalDeviceTrafficRedirection {
  /**
  * Follow shared partition for redirection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#follow_shared ScaleoutCluster#follow_shared}
  */
  readonly followShared?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#interfaces ScaleoutCluster#interfaces}
  */
  readonly interfaces?: ScaleoutClusterLocalDeviceTrafficRedirectionInterfaces;
  /**
  * reachability_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#reachability_options ScaleoutCluster#reachability_options}
  */
  readonly reachabilityOptions?: ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions;
}

export function scaleoutClusterLocalDeviceTrafficRedirectionToTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionOutputReference | ScaleoutClusterLocalDeviceTrafficRedirection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_shared: cdktf.numberToTerraform(struct!.followShared),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    interfaces: scaleoutClusterLocalDeviceTrafficRedirectionInterfacesToTerraform(struct!.interfaces),
    reachability_options: scaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsToTerraform(struct!.reachabilityOptions),
  }
}


export function scaleoutClusterLocalDeviceTrafficRedirectionToHclTerraform(struct?: ScaleoutClusterLocalDeviceTrafficRedirectionOutputReference | ScaleoutClusterLocalDeviceTrafficRedirection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_shared: {
      value: cdktf.numberToHclTerraform(struct!.followShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: scaleoutClusterLocalDeviceTrafficRedirectionInterfacesToHclTerraform(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesList",
    },
    reachability_options: {
      value: scaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsToHclTerraform(struct!.reachabilityOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceTrafficRedirectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDeviceTrafficRedirection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.followShared = this._followShared;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._reachabilityOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachabilityOptions = this._reachabilityOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDeviceTrafficRedirection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._followShared = undefined;
      this._uuid = undefined;
      this._interfaces.internalValue = undefined;
      this._reachabilityOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._followShared = value.followShared;
      this._uuid = value.uuid;
      this._interfaces.internalValue = value.interfaces;
      this._reachabilityOptions.internalValue = value.reachabilityOptions;
    }
  }

  // follow_shared - computed: false, optional: true, required: false
  private _followShared?: number; 
  public get followShared() {
    return this.getNumberAttribute('follow_shared');
  }
  public set followShared(value: number) {
    this._followShared = value;
  }
  public resetFollowShared() {
    this._followShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followSharedInput() {
    return this._followShared;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new ScaleoutClusterLocalDeviceTrafficRedirectionInterfacesOutputReference(this, "interfaces");
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ScaleoutClusterLocalDeviceTrafficRedirectionInterfaces) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // reachability_options - computed: false, optional: true, required: false
  private _reachabilityOptions = new ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptionsOutputReference(this, "reachability_options");
  public get reachabilityOptions() {
    return this._reachabilityOptions;
  }
  public putReachabilityOptions(value: ScaleoutClusterLocalDeviceTrafficRedirectionReachabilityOptions) {
    this._reachabilityOptions.internalValue = value;
  }
  public resetReachabilityOptions() {
    this._reachabilityOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachabilityOptionsInput() {
    return this._reachabilityOptions.internalValue;
  }
}
export interface ScaleoutClusterLocalDevice {
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#action ScaleoutCluster#action}
  */
  readonly action?: string;
  /**
  * 'layer-2': Nodes in cluster are layer 2 connected (default mode); 'layer-3': Nodes in cluster are l3 connected;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#cluster_mode ScaleoutCluster#cluster_mode}
  */
  readonly clusterMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#id1 ScaleoutCluster#id1}
  */
  readonly id1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#priority ScaleoutCluster#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#start_delay ScaleoutCluster#start_delay}
  */
  readonly startDelay?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
  /**
  * exclude_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#exclude_interfaces ScaleoutCluster#exclude_interfaces}
  */
  readonly excludeInterfaces?: ScaleoutClusterLocalDeviceExcludeInterfaces;
  /**
  * l2_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#l2_redirect ScaleoutCluster#l2_redirect}
  */
  readonly l2Redirect?: ScaleoutClusterLocalDeviceL2Redirect;
  /**
  * session_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#session_sync ScaleoutCluster#session_sync}
  */
  readonly sessionSync?: ScaleoutClusterLocalDeviceSessionSync;
  /**
  * tracking_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#tracking_template ScaleoutCluster#tracking_template}
  */
  readonly trackingTemplate?: ScaleoutClusterLocalDeviceTrackingTemplate;
  /**
  * traffic_redirection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#traffic_redirection ScaleoutCluster#traffic_redirection}
  */
  readonly trafficRedirection?: ScaleoutClusterLocalDeviceTrafficRedirection;
}

export function scaleoutClusterLocalDeviceToTerraform(struct?: ScaleoutClusterLocalDeviceOutputReference | ScaleoutClusterLocalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    cluster_mode: cdktf.stringToTerraform(struct!.clusterMode),
    id1: cdktf.numberToTerraform(struct!.id1),
    priority: cdktf.numberToTerraform(struct!.priority),
    start_delay: cdktf.numberToTerraform(struct!.startDelay),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    exclude_interfaces: scaleoutClusterLocalDeviceExcludeInterfacesToTerraform(struct!.excludeInterfaces),
    l2_redirect: scaleoutClusterLocalDeviceL2RedirectToTerraform(struct!.l2Redirect),
    session_sync: scaleoutClusterLocalDeviceSessionSyncToTerraform(struct!.sessionSync),
    tracking_template: scaleoutClusterLocalDeviceTrackingTemplateToTerraform(struct!.trackingTemplate),
    traffic_redirection: scaleoutClusterLocalDeviceTrafficRedirectionToTerraform(struct!.trafficRedirection),
  }
}


export function scaleoutClusterLocalDeviceToHclTerraform(struct?: ScaleoutClusterLocalDeviceOutputReference | ScaleoutClusterLocalDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_mode: {
      value: cdktf.stringToHclTerraform(struct!.clusterMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id1: {
      value: cdktf.numberToHclTerraform(struct!.id1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_delay: {
      value: cdktf.numberToHclTerraform(struct!.startDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_interfaces: {
      value: scaleoutClusterLocalDeviceExcludeInterfacesToHclTerraform(struct!.excludeInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceExcludeInterfacesList",
    },
    l2_redirect: {
      value: scaleoutClusterLocalDeviceL2RedirectToHclTerraform(struct!.l2Redirect),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceL2RedirectList",
    },
    session_sync: {
      value: scaleoutClusterLocalDeviceSessionSyncToHclTerraform(struct!.sessionSync),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceSessionSyncList",
    },
    tracking_template: {
      value: scaleoutClusterLocalDeviceTrackingTemplateToHclTerraform(struct!.trackingTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrackingTemplateList",
    },
    traffic_redirection: {
      value: scaleoutClusterLocalDeviceTrafficRedirectionToHclTerraform(struct!.trafficRedirection),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterLocalDeviceTrafficRedirectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterLocalDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterLocalDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._clusterMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMode = this._clusterMode;
    }
    if (this._id1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.id1 = this._id1;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._startDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDelay = this._startDelay;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._excludeInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeInterfaces = this._excludeInterfaces?.internalValue;
    }
    if (this._l2Redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2Redirect = this._l2Redirect?.internalValue;
    }
    if (this._sessionSync?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionSync = this._sessionSync?.internalValue;
    }
    if (this._trackingTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingTemplate = this._trackingTemplate?.internalValue;
    }
    if (this._trafficRedirection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficRedirection = this._trafficRedirection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterLocalDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._clusterMode = undefined;
      this._id1 = undefined;
      this._priority = undefined;
      this._startDelay = undefined;
      this._uuid = undefined;
      this._excludeInterfaces.internalValue = undefined;
      this._l2Redirect.internalValue = undefined;
      this._sessionSync.internalValue = undefined;
      this._trackingTemplate.internalValue = undefined;
      this._trafficRedirection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._clusterMode = value.clusterMode;
      this._id1 = value.id1;
      this._priority = value.priority;
      this._startDelay = value.startDelay;
      this._uuid = value.uuid;
      this._excludeInterfaces.internalValue = value.excludeInterfaces;
      this._l2Redirect.internalValue = value.l2Redirect;
      this._sessionSync.internalValue = value.sessionSync;
      this._trackingTemplate.internalValue = value.trackingTemplate;
      this._trafficRedirection.internalValue = value.trafficRedirection;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cluster_mode - computed: false, optional: true, required: false
  private _clusterMode?: string; 
  public get clusterMode() {
    return this.getStringAttribute('cluster_mode');
  }
  public set clusterMode(value: string) {
    this._clusterMode = value;
  }
  public resetClusterMode() {
    this._clusterMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterModeInput() {
    return this._clusterMode;
  }

  // id1 - computed: false, optional: true, required: false
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  public resetId1() {
    this._id1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // start_delay - computed: false, optional: true, required: false
  private _startDelay?: number; 
  public get startDelay() {
    return this.getNumberAttribute('start_delay');
  }
  public set startDelay(value: number) {
    this._startDelay = value;
  }
  public resetStartDelay() {
    this._startDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDelayInput() {
    return this._startDelay;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // exclude_interfaces - computed: false, optional: true, required: false
  private _excludeInterfaces = new ScaleoutClusterLocalDeviceExcludeInterfacesOutputReference(this, "exclude_interfaces");
  public get excludeInterfaces() {
    return this._excludeInterfaces;
  }
  public putExcludeInterfaces(value: ScaleoutClusterLocalDeviceExcludeInterfaces) {
    this._excludeInterfaces.internalValue = value;
  }
  public resetExcludeInterfaces() {
    this._excludeInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInterfacesInput() {
    return this._excludeInterfaces.internalValue;
  }

  // l2_redirect - computed: false, optional: true, required: false
  private _l2Redirect = new ScaleoutClusterLocalDeviceL2RedirectOutputReference(this, "l2_redirect");
  public get l2Redirect() {
    return this._l2Redirect;
  }
  public putL2Redirect(value: ScaleoutClusterLocalDeviceL2Redirect) {
    this._l2Redirect.internalValue = value;
  }
  public resetL2Redirect() {
    this._l2Redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2RedirectInput() {
    return this._l2Redirect.internalValue;
  }

  // session_sync - computed: false, optional: true, required: false
  private _sessionSync = new ScaleoutClusterLocalDeviceSessionSyncOutputReference(this, "session_sync");
  public get sessionSync() {
    return this._sessionSync;
  }
  public putSessionSync(value: ScaleoutClusterLocalDeviceSessionSync) {
    this._sessionSync.internalValue = value;
  }
  public resetSessionSync() {
    this._sessionSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSyncInput() {
    return this._sessionSync.internalValue;
  }

  // tracking_template - computed: false, optional: true, required: false
  private _trackingTemplate = new ScaleoutClusterLocalDeviceTrackingTemplateOutputReference(this, "tracking_template");
  public get trackingTemplate() {
    return this._trackingTemplate;
  }
  public putTrackingTemplate(value: ScaleoutClusterLocalDeviceTrackingTemplate) {
    this._trackingTemplate.internalValue = value;
  }
  public resetTrackingTemplate() {
    this._trackingTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingTemplateInput() {
    return this._trackingTemplate.internalValue;
  }

  // traffic_redirection - computed: false, optional: true, required: false
  private _trafficRedirection = new ScaleoutClusterLocalDeviceTrafficRedirectionOutputReference(this, "traffic_redirection");
  public get trafficRedirection() {
    return this._trafficRedirection;
  }
  public putTrafficRedirection(value: ScaleoutClusterLocalDeviceTrafficRedirection) {
    this._trafficRedirection.internalValue = value;
  }
  public resetTrafficRedirection() {
    this._trafficRedirection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficRedirectionInput() {
    return this._trafficRedirection.internalValue;
  }
}
export interface ScaleoutClusterServiceConfigTemplateListStruct {
  /**
  * Number of traffic buckets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#bucket_count ScaleoutCluster#bucket_count}
  */
  readonly bucketCount?: number;
  /**
  * Device group id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#device_group ScaleoutCluster#device_group}
  */
  readonly deviceGroup?: number;
  /**
  * Scaleout template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#name ScaleoutCluster#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#user_tag ScaleoutCluster#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutClusterServiceConfigTemplateListStructToTerraform(struct?: ScaleoutClusterServiceConfigTemplateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_count: cdktf.numberToTerraform(struct!.bucketCount),
    device_group: cdktf.numberToTerraform(struct!.deviceGroup),
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function scaleoutClusterServiceConfigTemplateListStructToHclTerraform(struct?: ScaleoutClusterServiceConfigTemplateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_count: {
      value: cdktf.numberToHclTerraform(struct!.bucketCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_group: {
      value: cdktf.numberToHclTerraform(struct!.deviceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterServiceConfigTemplateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterServiceConfigTemplateListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketCount = this._bucketCount;
    }
    if (this._deviceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceGroup = this._deviceGroup;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterServiceConfigTemplateListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketCount = undefined;
      this._deviceGroup = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketCount = value.bucketCount;
      this._deviceGroup = value.deviceGroup;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // bucket_count - computed: false, optional: true, required: false
  private _bucketCount?: number; 
  public get bucketCount() {
    return this.getNumberAttribute('bucket_count');
  }
  public set bucketCount(value: number) {
    this._bucketCount = value;
  }
  public resetBucketCount() {
    this._bucketCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketCountInput() {
    return this._bucketCount;
  }

  // device_group - computed: false, optional: true, required: false
  private _deviceGroup?: number; 
  public get deviceGroup() {
    return this.getNumberAttribute('device_group');
  }
  public set deviceGroup(value: number) {
    this._deviceGroup = value;
  }
  public resetDeviceGroup() {
    this._deviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupInput() {
    return this._deviceGroup;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class ScaleoutClusterServiceConfigTemplateListStructList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterServiceConfigTemplateListStruct[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterServiceConfigTemplateListStructOutputReference {
    return new ScaleoutClusterServiceConfigTemplateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterServiceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#enable ScaleoutCluster#enable}
  */
  readonly enable?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
  /**
  * template_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#template_list ScaleoutCluster#template_list}
  */
  readonly templateList?: ScaleoutClusterServiceConfigTemplateListStruct[] | cdktf.IResolvable;
}

export function scaleoutClusterServiceConfigToTerraform(struct?: ScaleoutClusterServiceConfigOutputReference | ScaleoutClusterServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    template_list: cdktf.listMapper(scaleoutClusterServiceConfigTemplateListStructToTerraform, true)(struct!.templateList),
  }
}


export function scaleoutClusterServiceConfigToHclTerraform(struct?: ScaleoutClusterServiceConfigOutputReference | ScaleoutClusterServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_list: {
      value: cdktf.listMapperHcl(scaleoutClusterServiceConfigTemplateListStructToHclTerraform, true)(struct!.templateList),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterServiceConfigTemplateListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterServiceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._templateList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateList = this._templateList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterServiceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._uuid = undefined;
      this._templateList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._uuid = value.uuid;
      this._templateList.internalValue = value.templateList;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // template_list - computed: false, optional: true, required: false
  private _templateList = new ScaleoutClusterServiceConfigTemplateListStructList(this, "template_list", false);
  public get templateList() {
    return this._templateList;
  }
  public putTemplateList(value: ScaleoutClusterServiceConfigTemplateListStruct[] | cdktf.IResolvable) {
    this._templateList.internalValue = value;
  }
  public resetTemplateList() {
    this._templateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateListInput() {
    return this._templateList.internalValue;
  }
}
export interface ScaleoutClusterTrackingTemplateTemplateListThresholdCfg {
  /**
  * 'down': node stops processing user traffic; 'exit-cluster': node exits scaleout cluster;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#action ScaleoutCluster#action}
  */
  readonly action?: string;
  /**
  * action triggering threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#threshold ScaleoutCluster#threshold}
  */
  readonly threshold?: number;
}

export function scaleoutClusterTrackingTemplateTemplateListThresholdCfgToTerraform(struct?: ScaleoutClusterTrackingTemplateTemplateListThresholdCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function scaleoutClusterTrackingTemplateTemplateListThresholdCfgToHclTerraform(struct?: ScaleoutClusterTrackingTemplateTemplateListThresholdCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ScaleoutClusterTrackingTemplateTemplateListThresholdCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterTrackingTemplateTemplateListThresholdCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterTrackingTemplateTemplateListThresholdCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._threshold = value.threshold;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

export class ScaleoutClusterTrackingTemplateTemplateListThresholdCfgList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterTrackingTemplateTemplateListThresholdCfg[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterTrackingTemplateTemplateListThresholdCfgOutputReference {
    return new ScaleoutClusterTrackingTemplateTemplateListThresholdCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterTrackingTemplateTemplateListStruct {
  /**
  * bind tracking template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#template ScaleoutCluster#template}
  */
  readonly template: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#user_tag ScaleoutCluster#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#uuid ScaleoutCluster#uuid}
  */
  readonly uuid?: string;
  /**
  * threshold_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#threshold_cfg ScaleoutCluster#threshold_cfg}
  */
  readonly thresholdCfg?: ScaleoutClusterTrackingTemplateTemplateListThresholdCfg[] | cdktf.IResolvable;
}

export function scaleoutClusterTrackingTemplateTemplateListStructToTerraform(struct?: ScaleoutClusterTrackingTemplateTemplateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    threshold_cfg: cdktf.listMapper(scaleoutClusterTrackingTemplateTemplateListThresholdCfgToTerraform, true)(struct!.thresholdCfg),
  }
}


export function scaleoutClusterTrackingTemplateTemplateListStructToHclTerraform(struct?: ScaleoutClusterTrackingTemplateTemplateListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_cfg: {
      value: cdktf.listMapperHcl(scaleoutClusterTrackingTemplateTemplateListThresholdCfgToHclTerraform, true)(struct!.thresholdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterTrackingTemplateTemplateListThresholdCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterTrackingTemplateTemplateListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterTrackingTemplateTemplateListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._thresholdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdCfg = this._thresholdCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterTrackingTemplateTemplateListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._thresholdCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._thresholdCfg.internalValue = value.thresholdCfg;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // threshold_cfg - computed: false, optional: true, required: false
  private _thresholdCfg = new ScaleoutClusterTrackingTemplateTemplateListThresholdCfgList(this, "threshold_cfg", false);
  public get thresholdCfg() {
    return this._thresholdCfg;
  }
  public putThresholdCfg(value: ScaleoutClusterTrackingTemplateTemplateListThresholdCfg[] | cdktf.IResolvable) {
    this._thresholdCfg.internalValue = value;
  }
  public resetThresholdCfg() {
    this._thresholdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdCfgInput() {
    return this._thresholdCfg.internalValue;
  }
}

export class ScaleoutClusterTrackingTemplateTemplateListStructList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterTrackingTemplateTemplateListStruct[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterTrackingTemplateTemplateListStructOutputReference {
    return new ScaleoutClusterTrackingTemplateTemplateListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterTrackingTemplate {
  /**
  * template_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#template_list ScaleoutCluster#template_list}
  */
  readonly templateList?: ScaleoutClusterTrackingTemplateTemplateListStruct[] | cdktf.IResolvable;
}

export function scaleoutClusterTrackingTemplateToTerraform(struct?: ScaleoutClusterTrackingTemplateOutputReference | ScaleoutClusterTrackingTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_list: cdktf.listMapper(scaleoutClusterTrackingTemplateTemplateListStructToTerraform, true)(struct!.templateList),
  }
}


export function scaleoutClusterTrackingTemplateToHclTerraform(struct?: ScaleoutClusterTrackingTemplateOutputReference | ScaleoutClusterTrackingTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_list: {
      value: cdktf.listMapperHcl(scaleoutClusterTrackingTemplateTemplateListStructToHclTerraform, true)(struct!.templateList),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutClusterTrackingTemplateTemplateListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutClusterTrackingTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterTrackingTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateList = this._templateList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterTrackingTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateList.internalValue = value.templateList;
    }
  }

  // template_list - computed: false, optional: true, required: false
  private _templateList = new ScaleoutClusterTrackingTemplateTemplateListStructList(this, "template_list", false);
  public get templateList() {
    return this._templateList;
  }
  public putTemplateList(value: ScaleoutClusterTrackingTemplateTemplateListStruct[] | cdktf.IResolvable) {
    this._templateList.internalValue = value;
  }
  public resetTemplateList() {
    this._templateList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateListInput() {
    return this._templateList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster thunder_scaleout_cluster}
*/
export class ScaleoutCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScaleoutCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScaleoutCluster to import
  * @param importFromId The id of the existing ScaleoutCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScaleoutCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster thunder_scaleout_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScaleoutClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ScaleoutClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_cluster',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._slogLevel = config.slogLevel;
    this._uuid = config.uuid;
    this._clusterDevices.internalValue = config.clusterDevices;
    this._dbConfig.internalValue = config.dbConfig;
    this._deviceGroups.internalValue = config.deviceGroups;
    this._localDevice.internalValue = config.localDevice;
    this._serviceConfig.internalValue = config.serviceConfig;
    this._trackingTemplate.internalValue = config.trackingTemplate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: number; 
  public get clusterId() {
    return this.getNumberAttribute('cluster_id');
  }
  public set clusterId(value: number) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // slog_level - computed: false, optional: true, required: false
  private _slogLevel?: number; 
  public get slogLevel() {
    return this.getNumberAttribute('slog_level');
  }
  public set slogLevel(value: number) {
    this._slogLevel = value;
  }
  public resetSlogLevel() {
    this._slogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slogLevelInput() {
    return this._slogLevel;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // cluster_devices - computed: false, optional: true, required: false
  private _clusterDevices = new ScaleoutClusterClusterDevicesOutputReference(this, "cluster_devices");
  public get clusterDevices() {
    return this._clusterDevices;
  }
  public putClusterDevices(value: ScaleoutClusterClusterDevices) {
    this._clusterDevices.internalValue = value;
  }
  public resetClusterDevices() {
    this._clusterDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDevicesInput() {
    return this._clusterDevices.internalValue;
  }

  // db_config - computed: false, optional: true, required: false
  private _dbConfig = new ScaleoutClusterDbConfigOutputReference(this, "db_config");
  public get dbConfig() {
    return this._dbConfig;
  }
  public putDbConfig(value: ScaleoutClusterDbConfig) {
    this._dbConfig.internalValue = value;
  }
  public resetDbConfig() {
    this._dbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbConfigInput() {
    return this._dbConfig.internalValue;
  }

  // device_groups - computed: false, optional: true, required: false
  private _deviceGroups = new ScaleoutClusterDeviceGroupsOutputReference(this, "device_groups");
  public get deviceGroups() {
    return this._deviceGroups;
  }
  public putDeviceGroups(value: ScaleoutClusterDeviceGroups) {
    this._deviceGroups.internalValue = value;
  }
  public resetDeviceGroups() {
    this._deviceGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupsInput() {
    return this._deviceGroups.internalValue;
  }

  // local_device - computed: false, optional: true, required: false
  private _localDevice = new ScaleoutClusterLocalDeviceOutputReference(this, "local_device");
  public get localDevice() {
    return this._localDevice;
  }
  public putLocalDevice(value: ScaleoutClusterLocalDevice) {
    this._localDevice.internalValue = value;
  }
  public resetLocalDevice() {
    this._localDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDeviceInput() {
    return this._localDevice.internalValue;
  }

  // service_config - computed: false, optional: true, required: false
  private _serviceConfig = new ScaleoutClusterServiceConfigOutputReference(this, "service_config");
  public get serviceConfig() {
    return this._serviceConfig;
  }
  public putServiceConfig(value: ScaleoutClusterServiceConfig) {
    this._serviceConfig.internalValue = value;
  }
  public resetServiceConfig() {
    this._serviceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigInput() {
    return this._serviceConfig.internalValue;
  }

  // tracking_template - computed: false, optional: true, required: false
  private _trackingTemplate = new ScaleoutClusterTrackingTemplateOutputReference(this, "tracking_template");
  public get trackingTemplate() {
    return this._trackingTemplate;
  }
  public putTrackingTemplate(value: ScaleoutClusterTrackingTemplate) {
    this._trackingTemplate.internalValue = value;
  }
  public resetTrackingTemplate() {
    this._trackingTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingTemplateInput() {
    return this._trackingTemplate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.numberToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      slog_level: cdktf.numberToTerraform(this._slogLevel),
      uuid: cdktf.stringToTerraform(this._uuid),
      cluster_devices: scaleoutClusterClusterDevicesToTerraform(this._clusterDevices.internalValue),
      db_config: scaleoutClusterDbConfigToTerraform(this._dbConfig.internalValue),
      device_groups: scaleoutClusterDeviceGroupsToTerraform(this._deviceGroups.internalValue),
      local_device: scaleoutClusterLocalDeviceToTerraform(this._localDevice.internalValue),
      service_config: scaleoutClusterServiceConfigToTerraform(this._serviceConfig.internalValue),
      tracking_template: scaleoutClusterTrackingTemplateToTerraform(this._trackingTemplate.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.numberToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slog_level: {
        value: cdktf.numberToHclTerraform(this._slogLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_devices: {
        value: scaleoutClusterClusterDevicesToHclTerraform(this._clusterDevices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterClusterDevicesList",
      },
      db_config: {
        value: scaleoutClusterDbConfigToHclTerraform(this._dbConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterDbConfigList",
      },
      device_groups: {
        value: scaleoutClusterDeviceGroupsToHclTerraform(this._deviceGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterDeviceGroupsList",
      },
      local_device: {
        value: scaleoutClusterLocalDeviceToHclTerraform(this._localDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterLocalDeviceList",
      },
      service_config: {
        value: scaleoutClusterServiceConfigToHclTerraform(this._serviceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterServiceConfigList",
      },
      tracking_template: {
        value: scaleoutClusterTrackingTemplateToHclTerraform(this._trackingTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterTrackingTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
