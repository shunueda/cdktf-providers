// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6NatPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Share with all partitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#all Cgnv6NatPool#all}
  */
  readonly all?: number;
  /**
  * Configure end IP address of NAT pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#end_address Cgnv6NatPool#end_address}
  */
  readonly endAddress?: string;
  /**
  * Share with a partition group (Partition Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#group Cgnv6NatPool#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#id Cgnv6NatPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of users that can be assigned to a NAT IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#max_users_per_ip Cgnv6NatPool#max_users_per_ip}
  */
  readonly maxUsersPerIp?: number;
  /**
  * Configure mask for pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#netmask Cgnv6NatPool#netmask}
  */
  readonly netmask?: string;
  /**
  * Share with a single partition (Partition Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#partition Cgnv6NatPool#partition}
  */
  readonly partition?: string;
  /**
  * Configure warning log threshold for per batch port usage (default: disabled) (Number of ports)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#per_batch_port_usage_warning_threshold Cgnv6NatPool#per_batch_port_usage_warning_threshold}
  */
  readonly perBatchPortUsageWarningThreshold?: number;
  /**
  * Specify pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#pool_name Cgnv6NatPool#pool_name}
  */
  readonly poolName: string;
  /**
  * '64': Allocate 64 ports at a time; '128': Allocate 128 ports at a time; '256': Allocate 256 ports at a time; '512': Allocate 512 ports at a time; '1024': Allocate 1024 ports at a time; '2048': Allocate 2048 ports at a time; '4096': Allocate 4096 ports at a time;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#port_batch_v2_size Cgnv6NatPool#port_batch_v2_size}
  */
  readonly portBatchV2Size?: string;
  /**
  * Share this pool with other partitions (default: not shared)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#shared Cgnv6NatPool#shared}
  */
  readonly shared?: number;
  /**
  * Allocate same TCP and UDP batches at once
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#simultaneous_batch_allocation Cgnv6NatPool#simultaneous_batch_allocation}
  */
  readonly simultaneousBatchAllocation?: number;
  /**
  * Configure start IP address of NAT pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#start_address Cgnv6NatPool#start_address}
  */
  readonly startAddress?: string;
  /**
  * Minutes before TCP NAT ports can be reused
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#tcp_time_wait_interval Cgnv6NatPool#tcp_time_wait_interval}
  */
  readonly tcpTimeWaitInterval?: number;
  /**
  * Configure usable NAT ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#usable_nat_ports Cgnv6NatPool#usable_nat_ports}
  */
  readonly usableNatPorts?: number;
  /**
  * End Port of Usable NAT Ports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#usable_nat_ports_end Cgnv6NatPool#usable_nat_ports_end}
  */
  readonly usableNatPortsEnd?: number;
  /**
  * Start Port of Usable NAT Ports (needs to be even)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#usable_nat_ports_start Cgnv6NatPool#usable_nat_ports_start}
  */
  readonly usableNatPortsStart?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#uuid Cgnv6NatPool#uuid}
  */
  readonly uuid?: string;
  /**
  * Configure VRRP-A vrid (Specify ha VRRP-A vrid)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#vrid Cgnv6NatPool#vrid}
  */
  readonly vrid?: number;
  /**
  * exclude_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#exclude_ip Cgnv6NatPool#exclude_ip}
  */
  readonly excludeIp?: Cgnv6NatPoolExcludeIp[] | cdktf.IResolvable;
}
export interface Cgnv6NatPoolExcludeIp {
  /**
  * Address range end
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#exclude_ip_end Cgnv6NatPool#exclude_ip_end}
  */
  readonly excludeIpEnd?: string;
  /**
  * Single IP address or IP address range start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#exclude_ip_start Cgnv6NatPool#exclude_ip_start}
  */
  readonly excludeIpStart?: string;
}

export function cgnv6NatPoolExcludeIpToTerraform(struct?: Cgnv6NatPoolExcludeIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_ip_end: cdktf.stringToTerraform(struct!.excludeIpEnd),
    exclude_ip_start: cdktf.stringToTerraform(struct!.excludeIpStart),
  }
}


export function cgnv6NatPoolExcludeIpToHclTerraform(struct?: Cgnv6NatPoolExcludeIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_ip_end: {
      value: cdktf.stringToHclTerraform(struct!.excludeIpEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_ip_start: {
      value: cdktf.stringToHclTerraform(struct!.excludeIpStart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6NatPoolExcludeIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6NatPoolExcludeIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeIpEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeIpEnd = this._excludeIpEnd;
    }
    if (this._excludeIpStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeIpStart = this._excludeIpStart;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6NatPoolExcludeIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeIpEnd = undefined;
      this._excludeIpStart = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeIpEnd = value.excludeIpEnd;
      this._excludeIpStart = value.excludeIpStart;
    }
  }

  // exclude_ip_end - computed: false, optional: true, required: false
  private _excludeIpEnd?: string; 
  public get excludeIpEnd() {
    return this.getStringAttribute('exclude_ip_end');
  }
  public set excludeIpEnd(value: string) {
    this._excludeIpEnd = value;
  }
  public resetExcludeIpEnd() {
    this._excludeIpEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeIpEndInput() {
    return this._excludeIpEnd;
  }

  // exclude_ip_start - computed: false, optional: true, required: false
  private _excludeIpStart?: string; 
  public get excludeIpStart() {
    return this.getStringAttribute('exclude_ip_start');
  }
  public set excludeIpStart(value: string) {
    this._excludeIpStart = value;
  }
  public resetExcludeIpStart() {
    this._excludeIpStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeIpStartInput() {
    return this._excludeIpStart;
  }
}

export class Cgnv6NatPoolExcludeIpList extends cdktf.ComplexList {
  public internalValue? : Cgnv6NatPoolExcludeIp[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6NatPoolExcludeIpOutputReference {
    return new Cgnv6NatPoolExcludeIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool thunder_cgnv6_nat_pool}
*/
export class Cgnv6NatPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6NatPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6NatPool to import
  * @param importFromId The id of the existing Cgnv6NatPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6NatPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_nat_pool thunder_cgnv6_nat_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6NatPoolConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6NatPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat_pool',
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
    this._endAddress = config.endAddress;
    this._group = config.group;
    this._id = config.id;
    this._maxUsersPerIp = config.maxUsersPerIp;
    this._netmask = config.netmask;
    this._partition = config.partition;
    this._perBatchPortUsageWarningThreshold = config.perBatchPortUsageWarningThreshold;
    this._poolName = config.poolName;
    this._portBatchV2Size = config.portBatchV2Size;
    this._shared = config.shared;
    this._simultaneousBatchAllocation = config.simultaneousBatchAllocation;
    this._startAddress = config.startAddress;
    this._tcpTimeWaitInterval = config.tcpTimeWaitInterval;
    this._usableNatPorts = config.usableNatPorts;
    this._usableNatPortsEnd = config.usableNatPortsEnd;
    this._usableNatPortsStart = config.usableNatPortsStart;
    this._uuid = config.uuid;
    this._vrid = config.vrid;
    this._excludeIp.internalValue = config.excludeIp;
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

  // end_address - computed: false, optional: true, required: false
  private _endAddress?: string; 
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }
  public set endAddress(value: string) {
    this._endAddress = value;
  }
  public resetEndAddress() {
    this._endAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // max_users_per_ip - computed: false, optional: true, required: false
  private _maxUsersPerIp?: number; 
  public get maxUsersPerIp() {
    return this.getNumberAttribute('max_users_per_ip');
  }
  public set maxUsersPerIp(value: number) {
    this._maxUsersPerIp = value;
  }
  public resetMaxUsersPerIp() {
    this._maxUsersPerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUsersPerIpInput() {
    return this._maxUsersPerIp;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // per_batch_port_usage_warning_threshold - computed: false, optional: true, required: false
  private _perBatchPortUsageWarningThreshold?: number; 
  public get perBatchPortUsageWarningThreshold() {
    return this.getNumberAttribute('per_batch_port_usage_warning_threshold');
  }
  public set perBatchPortUsageWarningThreshold(value: number) {
    this._perBatchPortUsageWarningThreshold = value;
  }
  public resetPerBatchPortUsageWarningThreshold() {
    this._perBatchPortUsageWarningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perBatchPortUsageWarningThresholdInput() {
    return this._perBatchPortUsageWarningThreshold;
  }

  // pool_name - computed: false, optional: false, required: true
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // port_batch_v2_size - computed: false, optional: true, required: false
  private _portBatchV2Size?: string; 
  public get portBatchV2Size() {
    return this.getStringAttribute('port_batch_v2_size');
  }
  public set portBatchV2Size(value: string) {
    this._portBatchV2Size = value;
  }
  public resetPortBatchV2Size() {
    this._portBatchV2Size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchV2SizeInput() {
    return this._portBatchV2Size;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // simultaneous_batch_allocation - computed: false, optional: true, required: false
  private _simultaneousBatchAllocation?: number; 
  public get simultaneousBatchAllocation() {
    return this.getNumberAttribute('simultaneous_batch_allocation');
  }
  public set simultaneousBatchAllocation(value: number) {
    this._simultaneousBatchAllocation = value;
  }
  public resetSimultaneousBatchAllocation() {
    this._simultaneousBatchAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simultaneousBatchAllocationInput() {
    return this._simultaneousBatchAllocation;
  }

  // start_address - computed: false, optional: true, required: false
  private _startAddress?: string; 
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
  public set startAddress(value: string) {
    this._startAddress = value;
  }
  public resetStartAddress() {
    this._startAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress;
  }

  // tcp_time_wait_interval - computed: false, optional: true, required: false
  private _tcpTimeWaitInterval?: number; 
  public get tcpTimeWaitInterval() {
    return this.getNumberAttribute('tcp_time_wait_interval');
  }
  public set tcpTimeWaitInterval(value: number) {
    this._tcpTimeWaitInterval = value;
  }
  public resetTcpTimeWaitInterval() {
    this._tcpTimeWaitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimeWaitIntervalInput() {
    return this._tcpTimeWaitInterval;
  }

  // usable_nat_ports - computed: false, optional: true, required: false
  private _usableNatPorts?: number; 
  public get usableNatPorts() {
    return this.getNumberAttribute('usable_nat_ports');
  }
  public set usableNatPorts(value: number) {
    this._usableNatPorts = value;
  }
  public resetUsableNatPorts() {
    this._usableNatPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableNatPortsInput() {
    return this._usableNatPorts;
  }

  // usable_nat_ports_end - computed: false, optional: true, required: false
  private _usableNatPortsEnd?: number; 
  public get usableNatPortsEnd() {
    return this.getNumberAttribute('usable_nat_ports_end');
  }
  public set usableNatPortsEnd(value: number) {
    this._usableNatPortsEnd = value;
  }
  public resetUsableNatPortsEnd() {
    this._usableNatPortsEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableNatPortsEndInput() {
    return this._usableNatPortsEnd;
  }

  // usable_nat_ports_start - computed: false, optional: true, required: false
  private _usableNatPortsStart?: number; 
  public get usableNatPortsStart() {
    return this.getNumberAttribute('usable_nat_ports_start');
  }
  public set usableNatPortsStart(value: number) {
    this._usableNatPortsStart = value;
  }
  public resetUsableNatPortsStart() {
    this._usableNatPortsStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usableNatPortsStartInput() {
    return this._usableNatPortsStart;
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

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // exclude_ip - computed: false, optional: true, required: false
  private _excludeIp = new Cgnv6NatPoolExcludeIpList(this, "exclude_ip", false);
  public get excludeIp() {
    return this._excludeIp;
  }
  public putExcludeIp(value: Cgnv6NatPoolExcludeIp[] | cdktf.IResolvable) {
    this._excludeIp.internalValue = value;
  }
  public resetExcludeIp() {
    this._excludeIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeIpInput() {
    return this._excludeIp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.numberToTerraform(this._all),
      end_address: cdktf.stringToTerraform(this._endAddress),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      max_users_per_ip: cdktf.numberToTerraform(this._maxUsersPerIp),
      netmask: cdktf.stringToTerraform(this._netmask),
      partition: cdktf.stringToTerraform(this._partition),
      per_batch_port_usage_warning_threshold: cdktf.numberToTerraform(this._perBatchPortUsageWarningThreshold),
      pool_name: cdktf.stringToTerraform(this._poolName),
      port_batch_v2_size: cdktf.stringToTerraform(this._portBatchV2Size),
      shared: cdktf.numberToTerraform(this._shared),
      simultaneous_batch_allocation: cdktf.numberToTerraform(this._simultaneousBatchAllocation),
      start_address: cdktf.stringToTerraform(this._startAddress),
      tcp_time_wait_interval: cdktf.numberToTerraform(this._tcpTimeWaitInterval),
      usable_nat_ports: cdktf.numberToTerraform(this._usableNatPorts),
      usable_nat_ports_end: cdktf.numberToTerraform(this._usableNatPortsEnd),
      usable_nat_ports_start: cdktf.numberToTerraform(this._usableNatPortsStart),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrid: cdktf.numberToTerraform(this._vrid),
      exclude_ip: cdktf.listMapper(cgnv6NatPoolExcludeIpToTerraform, true)(this._excludeIp.internalValue),
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
      end_address: {
        value: cdktf.stringToHclTerraform(this._endAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      max_users_per_ip: {
        value: cdktf.numberToHclTerraform(this._maxUsersPerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_batch_port_usage_warning_threshold: {
        value: cdktf.numberToHclTerraform(this._perBatchPortUsageWarningThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pool_name: {
        value: cdktf.stringToHclTerraform(this._poolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_batch_v2_size: {
        value: cdktf.stringToHclTerraform(this._portBatchV2Size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared: {
        value: cdktf.numberToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      simultaneous_batch_allocation: {
        value: cdktf.numberToHclTerraform(this._simultaneousBatchAllocation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_address: {
        value: cdktf.stringToHclTerraform(this._startAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_time_wait_interval: {
        value: cdktf.numberToHclTerraform(this._tcpTimeWaitInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      usable_nat_ports: {
        value: cdktf.numberToHclTerraform(this._usableNatPorts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      usable_nat_ports_end: {
        value: cdktf.numberToHclTerraform(this._usableNatPortsEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      usable_nat_ports_start: {
        value: cdktf.numberToHclTerraform(this._usableNatPortsStart),
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
      vrid: {
        value: cdktf.numberToHclTerraform(this._vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exclude_ip: {
        value: cdktf.listMapperHcl(cgnv6NatPoolExcludeIpToHclTerraform, true)(this._excludeIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6NatPoolExcludeIpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
