// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkVirtualWireGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_global#id NetworkVirtualWireGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Update source mac information for all interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_global#src_mac_learning NetworkVirtualWireGlobal#src_mac_learning}
  */
  readonly srcMacLearning?: number;
  /**
  * 'all': all; 'l3-packet': l3-packet(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_global#update_active_vlan NetworkVirtualWireGlobal#update_active_vlan}
  */
  readonly updateActiveVlan?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_global#uuid NetworkVirtualWireGlobal#uuid}
  */
  readonly uuid?: string;
  /**
  * Update period in second (default is 30)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_global#vlan_update_period NetworkVirtualWireGlobal#vlan_update_period}
  */
  readonly vlanUpdatePeriod?: number;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_global#sampling_enable NetworkVirtualWireGlobal#sampling_enable}
  */
  readonly samplingEnable?: NetworkVirtualWireGlobalSamplingEnable[] | cdktf.IResolvable;
}
export interface NetworkVirtualWireGlobalSamplingEnable {
  /**
  * 'all': all; 'vlan-update': VLAN update; 'mac-update': MAC update; 'vlan-pair-update': VLAN pair update; 'hc-pkt-drop': Packet drop due to health check;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_global#counters1 NetworkVirtualWireGlobal#counters1}
  */
  readonly counters1?: string;
}

export function networkVirtualWireGlobalSamplingEnableToTerraform(struct?: NetworkVirtualWireGlobalSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function networkVirtualWireGlobalSamplingEnableToHclTerraform(struct?: NetworkVirtualWireGlobalSamplingEnable | cdktf.IResolvable): any {
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

export class NetworkVirtualWireGlobalSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkVirtualWireGlobalSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkVirtualWireGlobalSamplingEnable | cdktf.IResolvable | undefined) {
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

export class NetworkVirtualWireGlobalSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : NetworkVirtualWireGlobalSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): NetworkVirtualWireGlobalSamplingEnableOutputReference {
    return new NetworkVirtualWireGlobalSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_global thunder_network_virtual_wire_global}
*/
export class NetworkVirtualWireGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_virtual_wire_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkVirtualWireGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkVirtualWireGlobal to import
  * @param importFromId The id of the existing NetworkVirtualWireGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkVirtualWireGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_virtual_wire_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_global thunder_network_virtual_wire_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkVirtualWireGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkVirtualWireGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_virtual_wire_global',
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
    this._id = config.id;
    this._srcMacLearning = config.srcMacLearning;
    this._updateActiveVlan = config.updateActiveVlan;
    this._uuid = config.uuid;
    this._vlanUpdatePeriod = config.vlanUpdatePeriod;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // src_mac_learning - computed: false, optional: true, required: false
  private _srcMacLearning?: number; 
  public get srcMacLearning() {
    return this.getNumberAttribute('src_mac_learning');
  }
  public set srcMacLearning(value: number) {
    this._srcMacLearning = value;
  }
  public resetSrcMacLearning() {
    this._srcMacLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMacLearningInput() {
    return this._srcMacLearning;
  }

  // update_active_vlan - computed: false, optional: true, required: false
  private _updateActiveVlan?: string; 
  public get updateActiveVlan() {
    return this.getStringAttribute('update_active_vlan');
  }
  public set updateActiveVlan(value: string) {
    this._updateActiveVlan = value;
  }
  public resetUpdateActiveVlan() {
    this._updateActiveVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateActiveVlanInput() {
    return this._updateActiveVlan;
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

  // vlan_update_period - computed: false, optional: true, required: false
  private _vlanUpdatePeriod?: number; 
  public get vlanUpdatePeriod() {
    return this.getNumberAttribute('vlan_update_period');
  }
  public set vlanUpdatePeriod(value: number) {
    this._vlanUpdatePeriod = value;
  }
  public resetVlanUpdatePeriod() {
    this._vlanUpdatePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanUpdatePeriodInput() {
    return this._vlanUpdatePeriod;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new NetworkVirtualWireGlobalSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: NetworkVirtualWireGlobalSamplingEnable[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      src_mac_learning: cdktf.numberToTerraform(this._srcMacLearning),
      update_active_vlan: cdktf.stringToTerraform(this._updateActiveVlan),
      uuid: cdktf.stringToTerraform(this._uuid),
      vlan_update_period: cdktf.numberToTerraform(this._vlanUpdatePeriod),
      sampling_enable: cdktf.listMapper(networkVirtualWireGlobalSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_mac_learning: {
        value: cdktf.numberToHclTerraform(this._srcMacLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_active_vlan: {
        value: cdktf.stringToHclTerraform(this._updateActiveVlan),
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
      vlan_update_period: {
        value: cdktf.numberToHclTerraform(this._vlanUpdatePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(networkVirtualWireGlobalSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkVirtualWireGlobalSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
