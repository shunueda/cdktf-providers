// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerEnableTrapsScaleoutInfrastructureAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable all infra traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#all SnmpServerEnableTrapsScaleoutInfrastructureA#all}
  */
  readonly all?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#id SnmpServerEnableTrapsScaleoutInfrastructureA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Send all infra traps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#test_send_all_traps SnmpServerEnableTrapsScaleoutInfrastructureA#test_send_all_traps}
  */
  readonly testSendAllTraps?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#uuid SnmpServerEnableTrapsScaleoutInfrastructureA#uuid}
  */
  readonly uuid?: string;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#cluster SnmpServerEnableTrapsScaleoutInfrastructureA#cluster}
  */
  readonly cluster?: SnmpServerEnableTrapsScaleoutInfrastructureClusterA;
  /**
  * master_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#master_node SnmpServerEnableTrapsScaleoutInfrastructureA#master_node}
  */
  readonly masterNode?: SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeA;
  /**
  * service_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#service_node SnmpServerEnableTrapsScaleoutInfrastructureA#service_node}
  */
  readonly serviceNode?: SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA;
}
export interface SnmpServerEnableTrapsScaleoutInfrastructureClusterA {
  /**
  * Enable election status trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#election SnmpServerEnableTrapsScaleoutInfrastructureA#election}
  */
  readonly election?: number;
  /**
  * Enable re-election trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#master_calling_re_election SnmpServerEnableTrapsScaleoutInfrastructureA#master_calling_re_election}
  */
  readonly masterCallingReElection?: number;
  /**
  * Enable active node status trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#node_status SnmpServerEnableTrapsScaleoutInfrastructureA#node_status}
  */
  readonly nodeStatus?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#uuid SnmpServerEnableTrapsScaleoutInfrastructureA#uuid}
  */
  readonly uuid?: string;
}

export function snmpServerEnableTrapsScaleoutInfrastructureClusterAToTerraform(struct?: SnmpServerEnableTrapsScaleoutInfrastructureClusterAOutputReference | SnmpServerEnableTrapsScaleoutInfrastructureClusterA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    election: cdktf.numberToTerraform(struct!.election),
    master_calling_re_election: cdktf.numberToTerraform(struct!.masterCallingReElection),
    node_status: cdktf.numberToTerraform(struct!.nodeStatus),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function snmpServerEnableTrapsScaleoutInfrastructureClusterAToHclTerraform(struct?: SnmpServerEnableTrapsScaleoutInfrastructureClusterAOutputReference | SnmpServerEnableTrapsScaleoutInfrastructureClusterA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    election: {
      value: cdktf.numberToHclTerraform(struct!.election),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_calling_re_election: {
      value: cdktf.numberToHclTerraform(struct!.masterCallingReElection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_status: {
      value: cdktf.numberToHclTerraform(struct!.nodeStatus),
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

export class SnmpServerEnableTrapsScaleoutInfrastructureClusterAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsScaleoutInfrastructureClusterA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._election !== undefined) {
      hasAnyValues = true;
      internalValueResult.election = this._election;
    }
    if (this._masterCallingReElection !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterCallingReElection = this._masterCallingReElection;
    }
    if (this._nodeStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStatus = this._nodeStatus;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsScaleoutInfrastructureClusterA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._election = undefined;
      this._masterCallingReElection = undefined;
      this._nodeStatus = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._election = value.election;
      this._masterCallingReElection = value.masterCallingReElection;
      this._nodeStatus = value.nodeStatus;
      this._uuid = value.uuid;
    }
  }

  // election - computed: false, optional: true, required: false
  private _election?: number; 
  public get election() {
    return this.getNumberAttribute('election');
  }
  public set election(value: number) {
    this._election = value;
  }
  public resetElection() {
    this._election = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electionInput() {
    return this._election;
  }

  // master_calling_re_election - computed: false, optional: true, required: false
  private _masterCallingReElection?: number; 
  public get masterCallingReElection() {
    return this.getNumberAttribute('master_calling_re_election');
  }
  public set masterCallingReElection(value: number) {
    this._masterCallingReElection = value;
  }
  public resetMasterCallingReElection() {
    this._masterCallingReElection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterCallingReElectionInput() {
    return this._masterCallingReElection;
  }

  // node_status - computed: false, optional: true, required: false
  private _nodeStatus?: number; 
  public get nodeStatus() {
    return this.getNumberAttribute('node_status');
  }
  public set nodeStatus(value: number) {
    this._nodeStatus = value;
  }
  public resetNodeStatus() {
    this._nodeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStatusInput() {
    return this._nodeStatus;
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
export interface SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeA {
  /**
  * Enable Traffic-map distribution trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#traffic_map_distribution SnmpServerEnableTrapsScaleoutInfrastructureA#traffic_map_distribution}
  */
  readonly trafficMapDistribution?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#uuid SnmpServerEnableTrapsScaleoutInfrastructureA#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable VServer Traffic-map trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#vserver_traffic_map_update SnmpServerEnableTrapsScaleoutInfrastructureA#vserver_traffic_map_update}
  */
  readonly vserverTrafficMapUpdate?: number;
}

export function snmpServerEnableTrapsScaleoutInfrastructureMasterNodeAToTerraform(struct?: SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeAOutputReference | SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    traffic_map_distribution: cdktf.numberToTerraform(struct!.trafficMapDistribution),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vserver_traffic_map_update: cdktf.numberToTerraform(struct!.vserverTrafficMapUpdate),
  }
}


export function snmpServerEnableTrapsScaleoutInfrastructureMasterNodeAToHclTerraform(struct?: SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeAOutputReference | SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    traffic_map_distribution: {
      value: cdktf.numberToHclTerraform(struct!.trafficMapDistribution),
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
    vserver_traffic_map_update: {
      value: cdktf.numberToHclTerraform(struct!.vserverTrafficMapUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trafficMapDistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficMapDistribution = this._trafficMapDistribution;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vserverTrafficMapUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.vserverTrafficMapUpdate = this._vserverTrafficMapUpdate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trafficMapDistribution = undefined;
      this._uuid = undefined;
      this._vserverTrafficMapUpdate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trafficMapDistribution = value.trafficMapDistribution;
      this._uuid = value.uuid;
      this._vserverTrafficMapUpdate = value.vserverTrafficMapUpdate;
    }
  }

  // traffic_map_distribution - computed: false, optional: true, required: false
  private _trafficMapDistribution?: number; 
  public get trafficMapDistribution() {
    return this.getNumberAttribute('traffic_map_distribution');
  }
  public set trafficMapDistribution(value: number) {
    this._trafficMapDistribution = value;
  }
  public resetTrafficMapDistribution() {
    this._trafficMapDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMapDistributionInput() {
    return this._trafficMapDistribution;
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

  // vserver_traffic_map_update - computed: false, optional: true, required: false
  private _vserverTrafficMapUpdate?: number; 
  public get vserverTrafficMapUpdate() {
    return this.getNumberAttribute('vserver_traffic_map_update');
  }
  public set vserverTrafficMapUpdate(value: number) {
    this._vserverTrafficMapUpdate = value;
  }
  public resetVserverTrafficMapUpdate() {
    this._vserverTrafficMapUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverTrafficMapUpdateInput() {
    return this._vserverTrafficMapUpdate;
  }
}
export interface SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA {
  /**
  * Enable local device disabled trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#local_device_disabled SnmpServerEnableTrapsScaleoutInfrastructureA#local_device_disabled}
  */
  readonly localDeviceDisabled?: number;
  /**
  * Enable service-master trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#service_master SnmpServerEnableTrapsScaleoutInfrastructureA#service_master}
  */
  readonly serviceMaster?: number;
  /**
  * Enable traffic map update trap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#traffic_map_update SnmpServerEnableTrapsScaleoutInfrastructureA#traffic_map_update}
  */
  readonly trafficMapUpdate?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#uuid SnmpServerEnableTrapsScaleoutInfrastructureA#uuid}
  */
  readonly uuid?: string;
}

export function snmpServerEnableTrapsScaleoutInfrastructureServiceNodeAToTerraform(struct?: SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeAOutputReference | SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_device_disabled: cdktf.numberToTerraform(struct!.localDeviceDisabled),
    service_master: cdktf.numberToTerraform(struct!.serviceMaster),
    traffic_map_update: cdktf.numberToTerraform(struct!.trafficMapUpdate),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function snmpServerEnableTrapsScaleoutInfrastructureServiceNodeAToHclTerraform(struct?: SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeAOutputReference | SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_device_disabled: {
      value: cdktf.numberToHclTerraform(struct!.localDeviceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_master: {
      value: cdktf.numberToHclTerraform(struct!.serviceMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_map_update: {
      value: cdktf.numberToHclTerraform(struct!.trafficMapUpdate),
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

export class SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localDeviceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDeviceDisabled = this._localDeviceDisabled;
    }
    if (this._serviceMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMaster = this._serviceMaster;
    }
    if (this._trafficMapUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficMapUpdate = this._trafficMapUpdate;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localDeviceDisabled = undefined;
      this._serviceMaster = undefined;
      this._trafficMapUpdate = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localDeviceDisabled = value.localDeviceDisabled;
      this._serviceMaster = value.serviceMaster;
      this._trafficMapUpdate = value.trafficMapUpdate;
      this._uuid = value.uuid;
    }
  }

  // local_device_disabled - computed: false, optional: true, required: false
  private _localDeviceDisabled?: number; 
  public get localDeviceDisabled() {
    return this.getNumberAttribute('local_device_disabled');
  }
  public set localDeviceDisabled(value: number) {
    this._localDeviceDisabled = value;
  }
  public resetLocalDeviceDisabled() {
    this._localDeviceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDeviceDisabledInput() {
    return this._localDeviceDisabled;
  }

  // service_master - computed: false, optional: true, required: false
  private _serviceMaster?: number; 
  public get serviceMaster() {
    return this.getNumberAttribute('service_master');
  }
  public set serviceMaster(value: number) {
    this._serviceMaster = value;
  }
  public resetServiceMaster() {
    this._serviceMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMasterInput() {
    return this._serviceMaster;
  }

  // traffic_map_update - computed: false, optional: true, required: false
  private _trafficMapUpdate?: number; 
  public get trafficMapUpdate() {
    return this.getNumberAttribute('traffic_map_update');
  }
  public set trafficMapUpdate(value: number) {
    this._trafficMapUpdate = value;
  }
  public resetTrafficMapUpdate() {
    this._trafficMapUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMapUpdateInput() {
    return this._trafficMapUpdate;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure thunder_snmp_server_enable_traps_scaleout_infrastructure}
*/
export class SnmpServerEnableTrapsScaleoutInfrastructureA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_snmp_server_enable_traps_scaleout_infrastructure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerEnableTrapsScaleoutInfrastructureA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerEnableTrapsScaleoutInfrastructureA to import
  * @param importFromId The id of the existing SnmpServerEnableTrapsScaleoutInfrastructureA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerEnableTrapsScaleoutInfrastructureA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_snmp_server_enable_traps_scaleout_infrastructure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/snmp_server_enable_traps_scaleout_infrastructure thunder_snmp_server_enable_traps_scaleout_infrastructure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerEnableTrapsScaleoutInfrastructureAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerEnableTrapsScaleoutInfrastructureAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_snmp_server_enable_traps_scaleout_infrastructure',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._all = config.all;
    this._id = config.id;
    this._testSendAllTraps = config.testSendAllTraps;
    this._uuid = config.uuid;
    this._cluster.internalValue = config.cluster;
    this._masterNode.internalValue = config.masterNode;
    this._serviceNode.internalValue = config.serviceNode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
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

  // test_send_all_traps - computed: false, optional: true, required: false
  private _testSendAllTraps?: number; 
  public get testSendAllTraps() {
    return this.getNumberAttribute('test_send_all_traps');
  }
  public set testSendAllTraps(value: number) {
    this._testSendAllTraps = value;
  }
  public resetTestSendAllTraps() {
    this._testSendAllTraps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testSendAllTrapsInput() {
    return this._testSendAllTraps;
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

  // cluster - computed: false, optional: true, required: false
  private _cluster = new SnmpServerEnableTrapsScaleoutInfrastructureClusterAOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: SnmpServerEnableTrapsScaleoutInfrastructureClusterA) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // master_node - computed: false, optional: true, required: false
  private _masterNode = new SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeAOutputReference(this, "master_node");
  public get masterNode() {
    return this._masterNode;
  }
  public putMasterNode(value: SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeA) {
    this._masterNode.internalValue = value;
  }
  public resetMasterNode() {
    this._masterNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodeInput() {
    return this._masterNode.internalValue;
  }

  // service_node - computed: false, optional: true, required: false
  private _serviceNode = new SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeAOutputReference(this, "service_node");
  public get serviceNode() {
    return this._serviceNode;
  }
  public putServiceNode(value: SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeA) {
    this._serviceNode.internalValue = value;
  }
  public resetServiceNode() {
    this._serviceNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNodeInput() {
    return this._serviceNode.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.numberToTerraform(this._all),
      id: cdktf.stringToTerraform(this._id),
      test_send_all_traps: cdktf.numberToTerraform(this._testSendAllTraps),
      uuid: cdktf.stringToTerraform(this._uuid),
      cluster: snmpServerEnableTrapsScaleoutInfrastructureClusterAToTerraform(this._cluster.internalValue),
      master_node: snmpServerEnableTrapsScaleoutInfrastructureMasterNodeAToTerraform(this._masterNode.internalValue),
      service_node: snmpServerEnableTrapsScaleoutInfrastructureServiceNodeAToTerraform(this._serviceNode.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all: {
        value: cdktf.numberToHclTerraform(this._all),
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
      test_send_all_traps: {
        value: cdktf.numberToHclTerraform(this._testSendAllTraps),
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
      cluster: {
        value: snmpServerEnableTrapsScaleoutInfrastructureClusterAToHclTerraform(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerEnableTrapsScaleoutInfrastructureClusterAList",
      },
      master_node: {
        value: snmpServerEnableTrapsScaleoutInfrastructureMasterNodeAToHclTerraform(this._masterNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerEnableTrapsScaleoutInfrastructureMasterNodeAList",
      },
      service_node: {
        value: snmpServerEnableTrapsScaleoutInfrastructureServiceNodeAToHclTerraform(this._serviceNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnmpServerEnableTrapsScaleoutInfrastructureServiceNodeAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
