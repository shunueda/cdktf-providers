// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScaleoutClusterClusterDevicesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * ClusterId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices#cluster_id ScaleoutClusterClusterDevicesA#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices#enable ScaleoutClusterClusterDevicesA#enable}
  */
  readonly enable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices#id ScaleoutClusterClusterDevicesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices#uuid ScaleoutClusterClusterDevicesA#uuid}
  */
  readonly uuid?: string;
  /**
  * cluster_discovery_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices#cluster_discovery_timeout ScaleoutClusterClusterDevicesA#cluster_discovery_timeout}
  */
  readonly clusterDiscoveryTimeout?: ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutA;
  /**
  * device_id_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices#device_id_list ScaleoutClusterClusterDevicesA#device_id_list}
  */
  readonly deviceIdList?: ScaleoutClusterClusterDevicesDeviceIdListStructA[] | cdktf.IResolvable;
  /**
  * minimum_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices#minimum_nodes ScaleoutClusterClusterDevicesA#minimum_nodes}
  */
  readonly minimumNodes?: ScaleoutClusterClusterDevicesMinimumNodesA;
}
export interface ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices#uuid ScaleoutClusterClusterDevicesA#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutClusterClusterDevicesClusterDiscoveryTimeoutAToTerraform(struct?: ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutAOutputReference | ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function scaleoutClusterClusterDevicesClusterDiscoveryTimeoutAToHclTerraform(struct?: ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutAOutputReference | ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutA): any {
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

export class ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutA | undefined) {
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
export interface ScaleoutClusterClusterDevicesDeviceIdListStructA {
  /**
  * 'enable': enable; 'disable': disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices#action ScaleoutClusterClusterDevicesA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices#ip ScaleoutClusterClusterDevicesA#ip}
  */
  readonly ip?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices#uuid ScaleoutClusterClusterDevicesA#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutClusterClusterDevicesDeviceIdListStructAToTerraform(struct?: ScaleoutClusterClusterDevicesDeviceIdListStructA | cdktf.IResolvable): any {
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


export function scaleoutClusterClusterDevicesDeviceIdListStructAToHclTerraform(struct?: ScaleoutClusterClusterDevicesDeviceIdListStructA | cdktf.IResolvable): any {
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

export class ScaleoutClusterClusterDevicesDeviceIdListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutClusterClusterDevicesDeviceIdListStructA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ScaleoutClusterClusterDevicesDeviceIdListStructA | cdktf.IResolvable | undefined) {
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

export class ScaleoutClusterClusterDevicesDeviceIdListStructAList extends cdktf.ComplexList {
  public internalValue? : ScaleoutClusterClusterDevicesDeviceIdListStructA[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutClusterClusterDevicesDeviceIdListStructAOutputReference {
    return new ScaleoutClusterClusterDevicesDeviceIdListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutClusterClusterDevicesMinimumNodesA {
  /**
  * Specify the minimum number of the node required to start service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices#minimum_nodes_num ScaleoutClusterClusterDevicesA#minimum_nodes_num}
  */
  readonly minimumNodesNum?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices#uuid ScaleoutClusterClusterDevicesA#uuid}
  */
  readonly uuid?: string;
}

export function scaleoutClusterClusterDevicesMinimumNodesAToTerraform(struct?: ScaleoutClusterClusterDevicesMinimumNodesAOutputReference | ScaleoutClusterClusterDevicesMinimumNodesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_nodes_num: cdktf.numberToTerraform(struct!.minimumNodesNum),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function scaleoutClusterClusterDevicesMinimumNodesAToHclTerraform(struct?: ScaleoutClusterClusterDevicesMinimumNodesAOutputReference | ScaleoutClusterClusterDevicesMinimumNodesA): any {
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

export class ScaleoutClusterClusterDevicesMinimumNodesAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutClusterClusterDevicesMinimumNodesA | undefined {
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

  public set internalValue(value: ScaleoutClusterClusterDevicesMinimumNodesA | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices thunder_scaleout_cluster_cluster_devices}
*/
export class ScaleoutClusterClusterDevicesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_cluster_cluster_devices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScaleoutClusterClusterDevicesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScaleoutClusterClusterDevicesA to import
  * @param importFromId The id of the existing ScaleoutClusterClusterDevicesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScaleoutClusterClusterDevicesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_cluster_cluster_devices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_cluster_devices thunder_scaleout_cluster_cluster_devices} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScaleoutClusterClusterDevicesAConfig
  */
  public constructor(scope: Construct, id: string, config: ScaleoutClusterClusterDevicesAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_cluster_cluster_devices',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
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
    this._clusterId = config.clusterId;
    this._enable = config.enable;
    this._id = config.id;
    this._uuid = config.uuid;
    this._clusterDiscoveryTimeout.internalValue = config.clusterDiscoveryTimeout;
    this._deviceIdList.internalValue = config.deviceIdList;
    this._minimumNodes.internalValue = config.minimumNodes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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
  private _clusterDiscoveryTimeout = new ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutAOutputReference(this, "cluster_discovery_timeout");
  public get clusterDiscoveryTimeout() {
    return this._clusterDiscoveryTimeout;
  }
  public putClusterDiscoveryTimeout(value: ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutA) {
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
  private _deviceIdList = new ScaleoutClusterClusterDevicesDeviceIdListStructAList(this, "device_id_list", false);
  public get deviceIdList() {
    return this._deviceIdList;
  }
  public putDeviceIdList(value: ScaleoutClusterClusterDevicesDeviceIdListStructA[] | cdktf.IResolvable) {
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
  private _minimumNodes = new ScaleoutClusterClusterDevicesMinimumNodesAOutputReference(this, "minimum_nodes");
  public get minimumNodes() {
    return this._minimumNodes;
  }
  public putMinimumNodes(value: ScaleoutClusterClusterDevicesMinimumNodesA) {
    this._minimumNodes.internalValue = value;
  }
  public resetMinimumNodes() {
    this._minimumNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumNodesInput() {
    return this._minimumNodes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      cluster_discovery_timeout: scaleoutClusterClusterDevicesClusterDiscoveryTimeoutAToTerraform(this._clusterDiscoveryTimeout.internalValue),
      device_id_list: cdktf.listMapper(scaleoutClusterClusterDevicesDeviceIdListStructAToTerraform, true)(this._deviceIdList.internalValue),
      minimum_nodes: scaleoutClusterClusterDevicesMinimumNodesAToTerraform(this._minimumNodes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_discovery_timeout: {
        value: scaleoutClusterClusterDevicesClusterDiscoveryTimeoutAToHclTerraform(this._clusterDiscoveryTimeout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterClusterDevicesClusterDiscoveryTimeoutAList",
      },
      device_id_list: {
        value: cdktf.listMapperHcl(scaleoutClusterClusterDevicesDeviceIdListStructAToHclTerraform, true)(this._deviceIdList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterClusterDevicesDeviceIdListStructAList",
      },
      minimum_nodes: {
        value: scaleoutClusterClusterDevicesMinimumNodesAToHclTerraform(this._minimumNodes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutClusterClusterDevicesMinimumNodesAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
