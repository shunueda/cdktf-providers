// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthSourceNatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Forward health check by active device only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat#enable_vrrp_a_mode HealthSourceNat#enable_vrrp_a_mode}
  */
  readonly enableVrrpAMode?: number;
  /**
  * Ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat#ethernet HealthSourceNat#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat#id HealthSourceNat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'ethernet': ethernet; 'trunk': trunk; 've': ve;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat#interface HealthSourceNat#interface}
  */
  readonly interface?: string;
  /**
  * Use smart nat when resourece is presented in virtual port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat#smart_nat_precedence HealthSourceNat#smart_nat_precedence}
  */
  readonly smartNatPrecedence?: number;
  /**
  * Smart nat VRID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat#smart_nat_vrid HealthSourceNat#smart_nat_vrid}
  */
  readonly smartNatVrid?: number;
  /**
  * Use source nat for all health check (nat pool)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat#source_nat_pool HealthSourceNat#source_nat_pool}
  */
  readonly sourceNatPool?: string;
  /**
  * Use ipv6 source nat for all health check (nat pool)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat#source_nat_pool_v6 HealthSourceNat#source_nat_pool_v6}
  */
  readonly sourceNatPoolV6?: string;
  /**
  * Trunk interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat#trunk HealthSourceNat#trunk}
  */
  readonly trunk?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat#uuid HealthSourceNat#uuid}
  */
  readonly uuid?: string;
  /**
  * Virtual ethernet interface number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat#ve HealthSourceNat#ve}
  */
  readonly ve?: number;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat#sampling_enable HealthSourceNat#sampling_enable}
  */
  readonly samplingEnable?: HealthSourceNatSamplingEnable[] | cdktf.IResolvable;
}
export interface HealthSourceNatSamplingEnable {
  /**
  * 'all': all; 'act_recv_from_sby': Packets received from standby; 'act_send_to_sby': Packets sent to standby; 'sby_recv_from_act': Packets received from active; 'sby_send_to_act': Packets sent to active; 'sby_recv_from_act_err': Packets received from active error; 'recv_from_kernel': Packets received from kernel; 'send_to_kernel': Packets sent to kernel; 'send_to_kernel_err': Packets sent to kernel error; 'sby_no_peer': Peer not found on standby; 'dcmsg_err': DCMSG error; 'no_slb_object': SLB object not found; 'smart_nat_init_port_err': Smart NAT port initialization error; 'smart_nat_init_inst_err': Smart NAT instance initialization error; 'smart_nat_rserver_route_err': Smart NAT rserver route update error; 'smart_nat_rserver_ip_err': Smart NAT rserver ip update error; 'nat_resource_err': NAT resource error; 'frag_err': Fragmentation error;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat#counters1 HealthSourceNat#counters1}
  */
  readonly counters1?: string;
}

export function healthSourceNatSamplingEnableToTerraform(struct?: HealthSourceNatSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function healthSourceNatSamplingEnableToHclTerraform(struct?: HealthSourceNatSamplingEnable | cdktf.IResolvable): any {
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

export class HealthSourceNatSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthSourceNatSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HealthSourceNatSamplingEnable | cdktf.IResolvable | undefined) {
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

export class HealthSourceNatSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : HealthSourceNatSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): HealthSourceNatSamplingEnableOutputReference {
    return new HealthSourceNatSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat thunder_health_source_nat}
*/
export class HealthSourceNat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_source_nat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthSourceNat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthSourceNat to import
  * @param importFromId The id of the existing HealthSourceNat that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthSourceNat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_source_nat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_source_nat thunder_health_source_nat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthSourceNatConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HealthSourceNatConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_source_nat',
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
    this._enableVrrpAMode = config.enableVrrpAMode;
    this._ethernet = config.ethernet;
    this._id = config.id;
    this._interface = config.interface;
    this._smartNatPrecedence = config.smartNatPrecedence;
    this._smartNatVrid = config.smartNatVrid;
    this._sourceNatPool = config.sourceNatPool;
    this._sourceNatPoolV6 = config.sourceNatPoolV6;
    this._trunk = config.trunk;
    this._uuid = config.uuid;
    this._ve = config.ve;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_vrrp_a_mode - computed: false, optional: true, required: false
  private _enableVrrpAMode?: number; 
  public get enableVrrpAMode() {
    return this.getNumberAttribute('enable_vrrp_a_mode');
  }
  public set enableVrrpAMode(value: number) {
    this._enableVrrpAMode = value;
  }
  public resetEnableVrrpAMode() {
    this._enableVrrpAMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVrrpAModeInput() {
    return this._enableVrrpAMode;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // smart_nat_precedence - computed: false, optional: true, required: false
  private _smartNatPrecedence?: number; 
  public get smartNatPrecedence() {
    return this.getNumberAttribute('smart_nat_precedence');
  }
  public set smartNatPrecedence(value: number) {
    this._smartNatPrecedence = value;
  }
  public resetSmartNatPrecedence() {
    this._smartNatPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartNatPrecedenceInput() {
    return this._smartNatPrecedence;
  }

  // smart_nat_vrid - computed: false, optional: true, required: false
  private _smartNatVrid?: number; 
  public get smartNatVrid() {
    return this.getNumberAttribute('smart_nat_vrid');
  }
  public set smartNatVrid(value: number) {
    this._smartNatVrid = value;
  }
  public resetSmartNatVrid() {
    this._smartNatVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartNatVridInput() {
    return this._smartNatVrid;
  }

  // source_nat_pool - computed: false, optional: true, required: false
  private _sourceNatPool?: string; 
  public get sourceNatPool() {
    return this.getStringAttribute('source_nat_pool');
  }
  public set sourceNatPool(value: string) {
    this._sourceNatPool = value;
  }
  public resetSourceNatPool() {
    this._sourceNatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatPoolInput() {
    return this._sourceNatPool;
  }

  // source_nat_pool_v6 - computed: false, optional: true, required: false
  private _sourceNatPoolV6?: string; 
  public get sourceNatPoolV6() {
    return this.getStringAttribute('source_nat_pool_v6');
  }
  public set sourceNatPoolV6(value: string) {
    this._sourceNatPoolV6 = value;
  }
  public resetSourceNatPoolV6() {
    this._sourceNatPoolV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatPoolV6Input() {
    return this._sourceNatPoolV6;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new HealthSourceNatSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: HealthSourceNatSamplingEnable[] | cdktf.IResolvable) {
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
      enable_vrrp_a_mode: cdktf.numberToTerraform(this._enableVrrpAMode),
      ethernet: cdktf.numberToTerraform(this._ethernet),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      smart_nat_precedence: cdktf.numberToTerraform(this._smartNatPrecedence),
      smart_nat_vrid: cdktf.numberToTerraform(this._smartNatVrid),
      source_nat_pool: cdktf.stringToTerraform(this._sourceNatPool),
      source_nat_pool_v6: cdktf.stringToTerraform(this._sourceNatPoolV6),
      trunk: cdktf.numberToTerraform(this._trunk),
      uuid: cdktf.stringToTerraform(this._uuid),
      ve: cdktf.numberToTerraform(this._ve),
      sampling_enable: cdktf.listMapper(healthSourceNatSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_vrrp_a_mode: {
        value: cdktf.numberToHclTerraform(this._enableVrrpAMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ethernet: {
        value: cdktf.numberToHclTerraform(this._ethernet),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smart_nat_precedence: {
        value: cdktf.numberToHclTerraform(this._smartNatPrecedence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smart_nat_vrid: {
        value: cdktf.numberToHclTerraform(this._smartNatVrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_nat_pool: {
        value: cdktf.stringToHclTerraform(this._sourceNatPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_nat_pool_v6: {
        value: cdktf.stringToHclTerraform(this._sourceNatPoolV6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk: {
        value: cdktf.numberToHclTerraform(this._trunk),
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
      ve: {
        value: cdktf.numberToHclTerraform(this._ve),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(healthSourceNatSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthSourceNatSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
