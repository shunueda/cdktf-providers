// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6NatPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Share NAT pool chunk across CPUs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool#chunk_sharing Ipv6NatPool#chunk_sharing}
  */
  readonly chunkSharing?: number;
  /**
  * Configure end IP address of NAT pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool#end_address Ipv6NatPool#end_address}
  */
  readonly endAddress?: string;
  /**
  * Configure gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool#gateway Ipv6NatPool#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool#id Ipv6NatPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Use IP address round-robin behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool#ip_rr Ipv6NatPool#ip_rr}
  */
  readonly ipRr?: number;
  /**
  * Configure mask for pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool#netmask Ipv6NatPool#netmask}
  */
  readonly netmask?: number;
  /**
  * Specify pool name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool#pool_name Ipv6NatPool#pool_name}
  */
  readonly poolName: string;
  /**
  * Nat Pool Port overload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool#port_overload Ipv6NatPool#port_overload}
  */
  readonly portOverload?: number;
  /**
  * Configure Scaleout device id to which this NAT pool is to be bound (Specify Scaleout device id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool#scaleout_device_id Ipv6NatPool#scaleout_device_id}
  */
  readonly scaleoutDeviceId?: number;
  /**
  * Configure start IP address of NAT pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool#start_address Ipv6NatPool#start_address}
  */
  readonly startAddress?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool#uuid Ipv6NatPool#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify VRRP-A vrid (Specify ha VRRP-A vrid)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool#vrid Ipv6NatPool#vrid}
  */
  readonly vrid?: number;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool#sampling_enable Ipv6NatPool#sampling_enable}
  */
  readonly samplingEnable?: Ipv6NatPoolSamplingEnable[] | cdktf.IResolvable;
}
export interface Ipv6NatPoolSamplingEnable {
  /**
  * 'all': all; 'Port-Usage': Port-Usage; 'Total-Used': Total-Used; 'Total-Freed': Total-Freed; 'Failed': Failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool#counters1 Ipv6NatPool#counters1}
  */
  readonly counters1?: string;
}

export function ipv6NatPoolSamplingEnableToTerraform(struct?: Ipv6NatPoolSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ipv6NatPoolSamplingEnableToHclTerraform(struct?: Ipv6NatPoolSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ipv6NatPoolSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ipv6NatPoolSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv6NatPoolSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class Ipv6NatPoolSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Ipv6NatPoolSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Ipv6NatPoolSamplingEnableOutputReference {
    return new Ipv6NatPoolSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool thunder_ipv6_nat_pool}
*/
export class Ipv6NatPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ipv6_nat_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6NatPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6NatPool to import
  * @param importFromId The id of the existing Ipv6NatPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6NatPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ipv6_nat_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_nat_pool thunder_ipv6_nat_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6NatPoolConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv6NatPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ipv6_nat_pool',
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
    this._chunkSharing = config.chunkSharing;
    this._endAddress = config.endAddress;
    this._gateway = config.gateway;
    this._id = config.id;
    this._ipRr = config.ipRr;
    this._netmask = config.netmask;
    this._poolName = config.poolName;
    this._portOverload = config.portOverload;
    this._scaleoutDeviceId = config.scaleoutDeviceId;
    this._startAddress = config.startAddress;
    this._uuid = config.uuid;
    this._vrid = config.vrid;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chunk_sharing - computed: false, optional: true, required: false
  private _chunkSharing?: number; 
  public get chunkSharing() {
    return this.getNumberAttribute('chunk_sharing');
  }
  public set chunkSharing(value: number) {
    this._chunkSharing = value;
  }
  public resetChunkSharing() {
    this._chunkSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSharingInput() {
    return this._chunkSharing;
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

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // ip_rr - computed: false, optional: true, required: false
  private _ipRr?: number; 
  public get ipRr() {
    return this.getNumberAttribute('ip_rr');
  }
  public set ipRr(value: number) {
    this._ipRr = value;
  }
  public resetIpRr() {
    this._ipRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRrInput() {
    return this._ipRr;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: number; 
  public get netmask() {
    return this.getNumberAttribute('netmask');
  }
  public set netmask(value: number) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
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

  // port_overload - computed: false, optional: true, required: false
  private _portOverload?: number; 
  public get portOverload() {
    return this.getNumberAttribute('port_overload');
  }
  public set portOverload(value: number) {
    this._portOverload = value;
  }
  public resetPortOverload() {
    this._portOverload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadInput() {
    return this._portOverload;
  }

  // scaleout_device_id - computed: false, optional: true, required: false
  private _scaleoutDeviceId?: number; 
  public get scaleoutDeviceId() {
    return this.getNumberAttribute('scaleout_device_id');
  }
  public set scaleoutDeviceId(value: number) {
    this._scaleoutDeviceId = value;
  }
  public resetScaleoutDeviceId() {
    this._scaleoutDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutDeviceIdInput() {
    return this._scaleoutDeviceId;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Ipv6NatPoolSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Ipv6NatPoolSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chunk_sharing: cdktf.numberToTerraform(this._chunkSharing),
      end_address: cdktf.stringToTerraform(this._endAddress),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      ip_rr: cdktf.numberToTerraform(this._ipRr),
      netmask: cdktf.numberToTerraform(this._netmask),
      pool_name: cdktf.stringToTerraform(this._poolName),
      port_overload: cdktf.numberToTerraform(this._portOverload),
      scaleout_device_id: cdktf.numberToTerraform(this._scaleoutDeviceId),
      start_address: cdktf.stringToTerraform(this._startAddress),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrid: cdktf.numberToTerraform(this._vrid),
      sampling_enable: cdktf.listMapper(ipv6NatPoolSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chunk_sharing: {
        value: cdktf.numberToHclTerraform(this._chunkSharing),
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
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      ip_rr: {
        value: cdktf.numberToHclTerraform(this._ipRr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      netmask: {
        value: cdktf.numberToHclTerraform(this._netmask),
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
      port_overload: {
        value: cdktf.numberToHclTerraform(this._portOverload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scaleout_device_id: {
        value: cdktf.numberToHclTerraform(this._scaleoutDeviceId),
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
      sampling_enable: {
        value: cdktf.listMapperHcl(ipv6NatPoolSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ipv6NatPoolSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
