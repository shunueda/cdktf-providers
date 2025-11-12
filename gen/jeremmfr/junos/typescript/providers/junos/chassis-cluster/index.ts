// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChassisClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable auto configuration synchronize on secondary bootup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#config_sync_no_secondary_bootup_auto ChassisCluster#config_sync_no_secondary_bootup_auto}
  */
  readonly configSyncNoSecondaryBootupAuto?: boolean | cdktf.IResolvable;
  /**
  * Enable automatic control link recovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#control_link_recovery ChassisCluster#control_link_recovery}
  */
  readonly controlLinkRecovery?: boolean | cdktf.IResolvable;
  /**
  * Interval between successive heartbeats (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#heartbeat_interval ChassisCluster#heartbeat_interval}
  */
  readonly heartbeatInterval?: number;
  /**
  * Number of consecutive missed heartbeats to indicate device failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#heartbeat_threshold ChassisCluster#heartbeat_threshold}
  */
  readonly heartbeatThreshold?: number;
  /**
  * Number of redundant ethernet interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#reth_count ChassisCluster#reth_count}
  */
  readonly rethCount: number;
  /**
  * control_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#control_ports ChassisCluster#control_ports}
  */
  readonly controlPorts?: ChassisClusterControlPorts[] | cdktf.IResolvable;
  /**
  * fab0 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#fab0 ChassisCluster#fab0}
  */
  readonly fab0?: ChassisClusterFab0;
  /**
  * fab1 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#fab1 ChassisCluster#fab1}
  */
  readonly fab1?: ChassisClusterFab1;
  /**
  * redundancy_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#redundancy_group ChassisCluster#redundancy_group}
  */
  readonly redundancyGroup?: ChassisClusterRedundancyGroup[] | cdktf.IResolvable;
}
export interface ChassisClusterControlPorts {
  /**
  * Flexible PIC Concentrator (FPC) slot number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#fpc ChassisCluster#fpc}
  */
  readonly fpc: number;
  /**
  * Port number on which to configure the control port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#port ChassisCluster#port}
  */
  readonly port: number;
}

export function chassisClusterControlPortsToTerraform(struct?: ChassisClusterControlPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fpc: cdktf.numberToTerraform(struct!.fpc),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function chassisClusterControlPortsToHclTerraform(struct?: ChassisClusterControlPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fpc: {
      value: cdktf.numberToHclTerraform(struct!.fpc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChassisClusterControlPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ChassisClusterControlPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpc = this._fpc;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChassisClusterControlPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fpc = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fpc = value.fpc;
      this._port = value.port;
    }
  }

  // fpc - computed: false, optional: false, required: true
  private _fpc?: number; 
  public get fpc() {
    return this.getNumberAttribute('fpc');
  }
  public set fpc(value: number) {
    this._fpc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fpcInput() {
    return this._fpc;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class ChassisClusterControlPortsList extends cdktf.ComplexList {
  public internalValue? : ChassisClusterControlPorts[] | cdktf.IResolvable

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
  public get(index: number): ChassisClusterControlPortsOutputReference {
    return new ChassisClusterControlPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChassisClusterFab0 {
  /**
  * Text description of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#description ChassisCluster#description}
  */
  readonly description?: string;
  /**
  * Member interfaces for the fabric interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#member_interfaces ChassisCluster#member_interfaces}
  */
  readonly memberInterfaces: string[];
}

export function chassisClusterFab0ToTerraform(struct?: ChassisClusterFab0 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    member_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.memberInterfaces),
  }
}


export function chassisClusterFab0ToHclTerraform(struct?: ChassisClusterFab0 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.memberInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChassisClusterFab0OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChassisClusterFab0 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._memberInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberInterfaces = this._memberInterfaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChassisClusterFab0 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._memberInterfaces = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._memberInterfaces = value.memberInterfaces;
    }
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

  // member_interfaces - computed: false, optional: false, required: true
  private _memberInterfaces?: string[]; 
  public get memberInterfaces() {
    return this.getListAttribute('member_interfaces');
  }
  public set memberInterfaces(value: string[]) {
    this._memberInterfaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInterfacesInput() {
    return this._memberInterfaces;
  }
}
export interface ChassisClusterFab1 {
  /**
  * Text description of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#description ChassisCluster#description}
  */
  readonly description?: string;
  /**
  * Member interfaces for the fabric interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#member_interfaces ChassisCluster#member_interfaces}
  */
  readonly memberInterfaces?: string[];
}

export function chassisClusterFab1ToTerraform(struct?: ChassisClusterFab1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    member_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.memberInterfaces),
  }
}


export function chassisClusterFab1ToHclTerraform(struct?: ChassisClusterFab1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.memberInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChassisClusterFab1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChassisClusterFab1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._memberInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberInterfaces = this._memberInterfaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChassisClusterFab1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._memberInterfaces = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._memberInterfaces = value.memberInterfaces;
    }
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

  // member_interfaces - computed: false, optional: true, required: false
  private _memberInterfaces?: string[]; 
  public get memberInterfaces() {
    return this.getListAttribute('member_interfaces');
  }
  public set memberInterfaces(value: string[]) {
    this._memberInterfaces = value;
  }
  public resetMemberInterfaces() {
    this._memberInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInterfacesInput() {
    return this._memberInterfaces;
  }
}
export interface ChassisClusterRedundancyGroupInterfaceMonitor {
  /**
  * Name of the interface to monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#name ChassisCluster#name}
  */
  readonly name: string;
  /**
  * Weight assigned to this interface that influences failover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#weight ChassisCluster#weight}
  */
  readonly weight: number;
}

export function chassisClusterRedundancyGroupInterfaceMonitorToTerraform(struct?: ChassisClusterRedundancyGroupInterfaceMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function chassisClusterRedundancyGroupInterfaceMonitorToHclTerraform(struct?: ChassisClusterRedundancyGroupInterfaceMonitor | cdktf.IResolvable): any {
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
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChassisClusterRedundancyGroupInterfaceMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ChassisClusterRedundancyGroupInterfaceMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChassisClusterRedundancyGroupInterfaceMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._weight = value.weight;
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

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ChassisClusterRedundancyGroupInterfaceMonitorList extends cdktf.ComplexList {
  public internalValue? : ChassisClusterRedundancyGroupInterfaceMonitor[] | cdktf.IResolvable

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
  public get(index: number): ChassisClusterRedundancyGroupInterfaceMonitorOutputReference {
    return new ChassisClusterRedundancyGroupInterfaceMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChassisClusterRedundancyGroup {
  /**
  * Number of gratuitous ARPs to send on an active interface after failover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#gratuitous_arp_count ChassisCluster#gratuitous_arp_count}
  */
  readonly gratuitousArpCount?: number;
  /**
  * RG failover interval (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#hold_down_interval ChassisCluster#hold_down_interval}
  */
  readonly holdDownInterval?: number;
  /**
  * Priority of the node0 in the redundancy-group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#node0_priority ChassisCluster#node0_priority}
  */
  readonly node0Priority: number;
  /**
  * Priority of the node1 in the redundancy-group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#node1_priority ChassisCluster#node1_priority}
  */
  readonly node1Priority: number;
  /**
  * Allow preemption of primaryship based on priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#preempt ChassisCluster#preempt}
  */
  readonly preempt?: boolean | cdktf.IResolvable;
  /**
  * Time to wait before taking over mastership (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#preempt_delay ChassisCluster#preempt_delay}
  */
  readonly preemptDelay?: number;
  /**
  * Max number of preemptive failovers allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#preempt_limit ChassisCluster#preempt_limit}
  */
  readonly preemptLimit?: number;
  /**
  * Time period during which the limit is applied (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#preempt_period ChassisCluster#preempt_period}
  */
  readonly preemptPeriod?: number;
  /**
  * interface_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#interface_monitor ChassisCluster#interface_monitor}
  */
  readonly interfaceMonitor?: ChassisClusterRedundancyGroupInterfaceMonitor[] | cdktf.IResolvable;
}

export function chassisClusterRedundancyGroupToTerraform(struct?: ChassisClusterRedundancyGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gratuitous_arp_count: cdktf.numberToTerraform(struct!.gratuitousArpCount),
    hold_down_interval: cdktf.numberToTerraform(struct!.holdDownInterval),
    node0_priority: cdktf.numberToTerraform(struct!.node0Priority),
    node1_priority: cdktf.numberToTerraform(struct!.node1Priority),
    preempt: cdktf.booleanToTerraform(struct!.preempt),
    preempt_delay: cdktf.numberToTerraform(struct!.preemptDelay),
    preempt_limit: cdktf.numberToTerraform(struct!.preemptLimit),
    preempt_period: cdktf.numberToTerraform(struct!.preemptPeriod),
    interface_monitor: cdktf.listMapper(chassisClusterRedundancyGroupInterfaceMonitorToTerraform, true)(struct!.interfaceMonitor),
  }
}


export function chassisClusterRedundancyGroupToHclTerraform(struct?: ChassisClusterRedundancyGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gratuitous_arp_count: {
      value: cdktf.numberToHclTerraform(struct!.gratuitousArpCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hold_down_interval: {
      value: cdktf.numberToHclTerraform(struct!.holdDownInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node0_priority: {
      value: cdktf.numberToHclTerraform(struct!.node0Priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node1_priority: {
      value: cdktf.numberToHclTerraform(struct!.node1Priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preempt: {
      value: cdktf.booleanToHclTerraform(struct!.preempt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preempt_delay: {
      value: cdktf.numberToHclTerraform(struct!.preemptDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preempt_limit: {
      value: cdktf.numberToHclTerraform(struct!.preemptLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preempt_period: {
      value: cdktf.numberToHclTerraform(struct!.preemptPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_monitor: {
      value: cdktf.listMapperHcl(chassisClusterRedundancyGroupInterfaceMonitorToHclTerraform, true)(struct!.interfaceMonitor),
      isBlock: true,
      type: "list",
      storageClassType: "ChassisClusterRedundancyGroupInterfaceMonitorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChassisClusterRedundancyGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ChassisClusterRedundancyGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gratuitousArpCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.gratuitousArpCount = this._gratuitousArpCount;
    }
    if (this._holdDownInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdDownInterval = this._holdDownInterval;
    }
    if (this._node0Priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.node0Priority = this._node0Priority;
    }
    if (this._node1Priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.node1Priority = this._node1Priority;
    }
    if (this._preempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.preempt = this._preempt;
    }
    if (this._preemptDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptDelay = this._preemptDelay;
    }
    if (this._preemptLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptLimit = this._preemptLimit;
    }
    if (this._preemptPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptPeriod = this._preemptPeriod;
    }
    if (this._interfaceMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceMonitor = this._interfaceMonitor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChassisClusterRedundancyGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gratuitousArpCount = undefined;
      this._holdDownInterval = undefined;
      this._node0Priority = undefined;
      this._node1Priority = undefined;
      this._preempt = undefined;
      this._preemptDelay = undefined;
      this._preemptLimit = undefined;
      this._preemptPeriod = undefined;
      this._interfaceMonitor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gratuitousArpCount = value.gratuitousArpCount;
      this._holdDownInterval = value.holdDownInterval;
      this._node0Priority = value.node0Priority;
      this._node1Priority = value.node1Priority;
      this._preempt = value.preempt;
      this._preemptDelay = value.preemptDelay;
      this._preemptLimit = value.preemptLimit;
      this._preemptPeriod = value.preemptPeriod;
      this._interfaceMonitor.internalValue = value.interfaceMonitor;
    }
  }

  // gratuitous_arp_count - computed: false, optional: true, required: false
  private _gratuitousArpCount?: number; 
  public get gratuitousArpCount() {
    return this.getNumberAttribute('gratuitous_arp_count');
  }
  public set gratuitousArpCount(value: number) {
    this._gratuitousArpCount = value;
  }
  public resetGratuitousArpCount() {
    this._gratuitousArpCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gratuitousArpCountInput() {
    return this._gratuitousArpCount;
  }

  // hold_down_interval - computed: false, optional: true, required: false
  private _holdDownInterval?: number; 
  public get holdDownInterval() {
    return this.getNumberAttribute('hold_down_interval');
  }
  public set holdDownInterval(value: number) {
    this._holdDownInterval = value;
  }
  public resetHoldDownInterval() {
    this._holdDownInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdDownIntervalInput() {
    return this._holdDownInterval;
  }

  // node0_priority - computed: false, optional: false, required: true
  private _node0Priority?: number; 
  public get node0Priority() {
    return this.getNumberAttribute('node0_priority');
  }
  public set node0Priority(value: number) {
    this._node0Priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get node0PriorityInput() {
    return this._node0Priority;
  }

  // node1_priority - computed: false, optional: false, required: true
  private _node1Priority?: number; 
  public get node1Priority() {
    return this.getNumberAttribute('node1_priority');
  }
  public set node1Priority(value: number) {
    this._node1Priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get node1PriorityInput() {
    return this._node1Priority;
  }

  // preempt - computed: false, optional: true, required: false
  private _preempt?: boolean | cdktf.IResolvable; 
  public get preempt() {
    return this.getBooleanAttribute('preempt');
  }
  public set preempt(value: boolean | cdktf.IResolvable) {
    this._preempt = value;
  }
  public resetPreempt() {
    this._preempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptInput() {
    return this._preempt;
  }

  // preempt_delay - computed: false, optional: true, required: false
  private _preemptDelay?: number; 
  public get preemptDelay() {
    return this.getNumberAttribute('preempt_delay');
  }
  public set preemptDelay(value: number) {
    this._preemptDelay = value;
  }
  public resetPreemptDelay() {
    this._preemptDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptDelayInput() {
    return this._preemptDelay;
  }

  // preempt_limit - computed: false, optional: true, required: false
  private _preemptLimit?: number; 
  public get preemptLimit() {
    return this.getNumberAttribute('preempt_limit');
  }
  public set preemptLimit(value: number) {
    this._preemptLimit = value;
  }
  public resetPreemptLimit() {
    this._preemptLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptLimitInput() {
    return this._preemptLimit;
  }

  // preempt_period - computed: false, optional: true, required: false
  private _preemptPeriod?: number; 
  public get preemptPeriod() {
    return this.getNumberAttribute('preempt_period');
  }
  public set preemptPeriod(value: number) {
    this._preemptPeriod = value;
  }
  public resetPreemptPeriod() {
    this._preemptPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptPeriodInput() {
    return this._preemptPeriod;
  }

  // interface_monitor - computed: false, optional: true, required: false
  private _interfaceMonitor = new ChassisClusterRedundancyGroupInterfaceMonitorList(this, "interface_monitor", false);
  public get interfaceMonitor() {
    return this._interfaceMonitor;
  }
  public putInterfaceMonitor(value: ChassisClusterRedundancyGroupInterfaceMonitor[] | cdktf.IResolvable) {
    this._interfaceMonitor.internalValue = value;
  }
  public resetInterfaceMonitor() {
    this._interfaceMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceMonitorInput() {
    return this._interfaceMonitor.internalValue;
  }
}

export class ChassisClusterRedundancyGroupList extends cdktf.ComplexList {
  public internalValue? : ChassisClusterRedundancyGroup[] | cdktf.IResolvable

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
  public get(index: number): ChassisClusterRedundancyGroupOutputReference {
    return new ChassisClusterRedundancyGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster junos_chassis_cluster}
*/
export class ChassisCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_chassis_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChassisCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChassisCluster to import
  * @param importFromId The id of the existing ChassisCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChassisCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_chassis_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_cluster junos_chassis_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChassisClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ChassisClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_chassis_cluster',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configSyncNoSecondaryBootupAuto = config.configSyncNoSecondaryBootupAuto;
    this._controlLinkRecovery = config.controlLinkRecovery;
    this._heartbeatInterval = config.heartbeatInterval;
    this._heartbeatThreshold = config.heartbeatThreshold;
    this._rethCount = config.rethCount;
    this._controlPorts.internalValue = config.controlPorts;
    this._fab0.internalValue = config.fab0;
    this._fab1.internalValue = config.fab1;
    this._redundancyGroup.internalValue = config.redundancyGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_sync_no_secondary_bootup_auto - computed: false, optional: true, required: false
  private _configSyncNoSecondaryBootupAuto?: boolean | cdktf.IResolvable; 
  public get configSyncNoSecondaryBootupAuto() {
    return this.getBooleanAttribute('config_sync_no_secondary_bootup_auto');
  }
  public set configSyncNoSecondaryBootupAuto(value: boolean | cdktf.IResolvable) {
    this._configSyncNoSecondaryBootupAuto = value;
  }
  public resetConfigSyncNoSecondaryBootupAuto() {
    this._configSyncNoSecondaryBootupAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncNoSecondaryBootupAutoInput() {
    return this._configSyncNoSecondaryBootupAuto;
  }

  // control_link_recovery - computed: false, optional: true, required: false
  private _controlLinkRecovery?: boolean | cdktf.IResolvable; 
  public get controlLinkRecovery() {
    return this.getBooleanAttribute('control_link_recovery');
  }
  public set controlLinkRecovery(value: boolean | cdktf.IResolvable) {
    this._controlLinkRecovery = value;
  }
  public resetControlLinkRecovery() {
    this._controlLinkRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlLinkRecoveryInput() {
    return this._controlLinkRecovery;
  }

  // heartbeat_interval - computed: false, optional: true, required: false
  private _heartbeatInterval?: number; 
  public get heartbeatInterval() {
    return this.getNumberAttribute('heartbeat_interval');
  }
  public set heartbeatInterval(value: number) {
    this._heartbeatInterval = value;
  }
  public resetHeartbeatInterval() {
    this._heartbeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatIntervalInput() {
    return this._heartbeatInterval;
  }

  // heartbeat_threshold - computed: false, optional: true, required: false
  private _heartbeatThreshold?: number; 
  public get heartbeatThreshold() {
    return this.getNumberAttribute('heartbeat_threshold');
  }
  public set heartbeatThreshold(value: number) {
    this._heartbeatThreshold = value;
  }
  public resetHeartbeatThreshold() {
    this._heartbeatThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heartbeatThresholdInput() {
    return this._heartbeatThreshold;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // reth_count - computed: false, optional: false, required: true
  private _rethCount?: number; 
  public get rethCount() {
    return this.getNumberAttribute('reth_count');
  }
  public set rethCount(value: number) {
    this._rethCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rethCountInput() {
    return this._rethCount;
  }

  // control_ports - computed: false, optional: true, required: false
  private _controlPorts = new ChassisClusterControlPortsList(this, "control_ports", true);
  public get controlPorts() {
    return this._controlPorts;
  }
  public putControlPorts(value: ChassisClusterControlPorts[] | cdktf.IResolvable) {
    this._controlPorts.internalValue = value;
  }
  public resetControlPorts() {
    this._controlPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPortsInput() {
    return this._controlPorts.internalValue;
  }

  // fab0 - computed: false, optional: true, required: false
  private _fab0 = new ChassisClusterFab0OutputReference(this, "fab0");
  public get fab0() {
    return this._fab0;
  }
  public putFab0(value: ChassisClusterFab0) {
    this._fab0.internalValue = value;
  }
  public resetFab0() {
    this._fab0.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fab0Input() {
    return this._fab0.internalValue;
  }

  // fab1 - computed: false, optional: true, required: false
  private _fab1 = new ChassisClusterFab1OutputReference(this, "fab1");
  public get fab1() {
    return this._fab1;
  }
  public putFab1(value: ChassisClusterFab1) {
    this._fab1.internalValue = value;
  }
  public resetFab1() {
    this._fab1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fab1Input() {
    return this._fab1.internalValue;
  }

  // redundancy_group - computed: false, optional: true, required: false
  private _redundancyGroup = new ChassisClusterRedundancyGroupList(this, "redundancy_group", false);
  public get redundancyGroup() {
    return this._redundancyGroup;
  }
  public putRedundancyGroup(value: ChassisClusterRedundancyGroup[] | cdktf.IResolvable) {
    this._redundancyGroup.internalValue = value;
  }
  public resetRedundancyGroup() {
    this._redundancyGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyGroupInput() {
    return this._redundancyGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_sync_no_secondary_bootup_auto: cdktf.booleanToTerraform(this._configSyncNoSecondaryBootupAuto),
      control_link_recovery: cdktf.booleanToTerraform(this._controlLinkRecovery),
      heartbeat_interval: cdktf.numberToTerraform(this._heartbeatInterval),
      heartbeat_threshold: cdktf.numberToTerraform(this._heartbeatThreshold),
      reth_count: cdktf.numberToTerraform(this._rethCount),
      control_ports: cdktf.listMapper(chassisClusterControlPortsToTerraform, true)(this._controlPorts.internalValue),
      fab0: chassisClusterFab0ToTerraform(this._fab0.internalValue),
      fab1: chassisClusterFab1ToTerraform(this._fab1.internalValue),
      redundancy_group: cdktf.listMapper(chassisClusterRedundancyGroupToTerraform, true)(this._redundancyGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_sync_no_secondary_bootup_auto: {
        value: cdktf.booleanToHclTerraform(this._configSyncNoSecondaryBootupAuto),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      control_link_recovery: {
        value: cdktf.booleanToHclTerraform(this._controlLinkRecovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      heartbeat_interval: {
        value: cdktf.numberToHclTerraform(this._heartbeatInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      heartbeat_threshold: {
        value: cdktf.numberToHclTerraform(this._heartbeatThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reth_count: {
        value: cdktf.numberToHclTerraform(this._rethCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      control_ports: {
        value: cdktf.listMapperHcl(chassisClusterControlPortsToHclTerraform, true)(this._controlPorts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ChassisClusterControlPortsList",
      },
      fab0: {
        value: chassisClusterFab0ToHclTerraform(this._fab0.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChassisClusterFab0",
      },
      fab1: {
        value: chassisClusterFab1ToHclTerraform(this._fab1.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChassisClusterFab1",
      },
      redundancy_group: {
        value: cdktf.listMapperHcl(chassisClusterRedundancyGroupToHclTerraform, true)(this._redundancyGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChassisClusterRedundancyGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
