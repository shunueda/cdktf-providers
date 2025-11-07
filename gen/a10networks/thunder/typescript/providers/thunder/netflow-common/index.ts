// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_common
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetflowCommonConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_common#id NetflowCommon#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure netflow packet queue time (Max packet queue time(*20ms). Default:50( *20ms = 1s)))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_common#max_packet_queue_time NetflowCommon#max_packet_queue_time}
  */
  readonly maxPacketQueueTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_common#nat44_tpl_1001 NetflowCommon#nat44_tpl_1001}
  */
  readonly nat44Tpl1001?: number;
  /**
  * Reset session start time to current time on each flow timeout export for long-lasting session (default: disabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_common#reset_time_on_flow_record NetflowCommon#reset_time_on_flow_record}
  */
  readonly resetTimeOnFlowRecord?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_common#uuid NetflowCommon#uuid}
  */
  readonly uuid?: string;
  /**
  * selector_algorithm_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_common#selector_algorithm_list NetflowCommon#selector_algorithm_list}
  */
  readonly selectorAlgorithmList?: NetflowCommonSelectorAlgorithmListStruct[] | cdktf.IResolvable;
}
export interface NetflowCommonSelectorAlgorithmListStruct {
  /**
  * 'random': random;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_common#algorithm_name NetflowCommon#algorithm_name}
  */
  readonly algorithmName: string;
  /**
  * Configure sampling population for random algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_common#sampling_population NetflowCommon#sampling_population}
  */
  readonly samplingPopulation?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_common#user_tag NetflowCommon#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_common#uuid NetflowCommon#uuid}
  */
  readonly uuid?: string;
}

export function netflowCommonSelectorAlgorithmListStructToTerraform(struct?: NetflowCommonSelectorAlgorithmListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm_name: cdktf.stringToTerraform(struct!.algorithmName),
    sampling_population: cdktf.numberToTerraform(struct!.samplingPopulation),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function netflowCommonSelectorAlgorithmListStructToHclTerraform(struct?: NetflowCommonSelectorAlgorithmListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm_name: {
      value: cdktf.stringToHclTerraform(struct!.algorithmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_population: {
      value: cdktf.numberToHclTerraform(struct!.samplingPopulation),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetflowCommonSelectorAlgorithmListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetflowCommonSelectorAlgorithmListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmName = this._algorithmName;
    }
    if (this._samplingPopulation !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingPopulation = this._samplingPopulation;
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

  public set internalValue(value: NetflowCommonSelectorAlgorithmListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmName = undefined;
      this._samplingPopulation = undefined;
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
      this._algorithmName = value.algorithmName;
      this._samplingPopulation = value.samplingPopulation;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // algorithm_name - computed: false, optional: false, required: true
  private _algorithmName?: string; 
  public get algorithmName() {
    return this.getStringAttribute('algorithm_name');
  }
  public set algorithmName(value: string) {
    this._algorithmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmNameInput() {
    return this._algorithmName;
  }

  // sampling_population - computed: false, optional: true, required: false
  private _samplingPopulation?: number; 
  public get samplingPopulation() {
    return this.getNumberAttribute('sampling_population');
  }
  public set samplingPopulation(value: number) {
    this._samplingPopulation = value;
  }
  public resetSamplingPopulation() {
    this._samplingPopulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPopulationInput() {
    return this._samplingPopulation;
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

export class NetflowCommonSelectorAlgorithmListStructList extends cdktf.ComplexList {
  public internalValue? : NetflowCommonSelectorAlgorithmListStruct[] | cdktf.IResolvable

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
  public get(index: number): NetflowCommonSelectorAlgorithmListStructOutputReference {
    return new NetflowCommonSelectorAlgorithmListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_common thunder_netflow_common}
*/
export class NetflowCommon extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_netflow_common";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetflowCommon resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetflowCommon to import
  * @param importFromId The id of the existing NetflowCommon that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_common#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetflowCommon to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_netflow_common", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/netflow_common thunder_netflow_common} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetflowCommonConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NetflowCommonConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_netflow_common',
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
    this._id = config.id;
    this._maxPacketQueueTime = config.maxPacketQueueTime;
    this._nat44Tpl1001 = config.nat44Tpl1001;
    this._resetTimeOnFlowRecord = config.resetTimeOnFlowRecord;
    this._uuid = config.uuid;
    this._selectorAlgorithmList.internalValue = config.selectorAlgorithmList;
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

  // max_packet_queue_time - computed: false, optional: true, required: false
  private _maxPacketQueueTime?: number; 
  public get maxPacketQueueTime() {
    return this.getNumberAttribute('max_packet_queue_time');
  }
  public set maxPacketQueueTime(value: number) {
    this._maxPacketQueueTime = value;
  }
  public resetMaxPacketQueueTime() {
    this._maxPacketQueueTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPacketQueueTimeInput() {
    return this._maxPacketQueueTime;
  }

  // nat44_tpl_1001 - computed: false, optional: true, required: false
  private _nat44Tpl1001?: number; 
  public get nat44Tpl1001() {
    return this.getNumberAttribute('nat44_tpl_1001');
  }
  public set nat44Tpl1001(value: number) {
    this._nat44Tpl1001 = value;
  }
  public resetNat44Tpl1001() {
    this._nat44Tpl1001 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44Tpl1001Input() {
    return this._nat44Tpl1001;
  }

  // reset_time_on_flow_record - computed: false, optional: true, required: false
  private _resetTimeOnFlowRecord?: number; 
  public get resetTimeOnFlowRecord() {
    return this.getNumberAttribute('reset_time_on_flow_record');
  }
  public set resetTimeOnFlowRecord(value: number) {
    this._resetTimeOnFlowRecord = value;
  }
  public resetResetTimeOnFlowRecord() {
    this._resetTimeOnFlowRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTimeOnFlowRecordInput() {
    return this._resetTimeOnFlowRecord;
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

  // selector_algorithm_list - computed: false, optional: true, required: false
  private _selectorAlgorithmList = new NetflowCommonSelectorAlgorithmListStructList(this, "selector_algorithm_list", false);
  public get selectorAlgorithmList() {
    return this._selectorAlgorithmList;
  }
  public putSelectorAlgorithmList(value: NetflowCommonSelectorAlgorithmListStruct[] | cdktf.IResolvable) {
    this._selectorAlgorithmList.internalValue = value;
  }
  public resetSelectorAlgorithmList() {
    this._selectorAlgorithmList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorAlgorithmListInput() {
    return this._selectorAlgorithmList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      max_packet_queue_time: cdktf.numberToTerraform(this._maxPacketQueueTime),
      nat44_tpl_1001: cdktf.numberToTerraform(this._nat44Tpl1001),
      reset_time_on_flow_record: cdktf.numberToTerraform(this._resetTimeOnFlowRecord),
      uuid: cdktf.stringToTerraform(this._uuid),
      selector_algorithm_list: cdktf.listMapper(netflowCommonSelectorAlgorithmListStructToTerraform, true)(this._selectorAlgorithmList.internalValue),
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
      max_packet_queue_time: {
        value: cdktf.numberToHclTerraform(this._maxPacketQueueTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat44_tpl_1001: {
        value: cdktf.numberToHclTerraform(this._nat44Tpl1001),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_time_on_flow_record: {
        value: cdktf.numberToHclTerraform(this._resetTimeOnFlowRecord),
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
      selector_algorithm_list: {
        value: cdktf.listMapperHcl(netflowCommonSelectorAlgorithmListStructToHclTerraform, true)(this._selectorAlgorithmList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetflowCommonSelectorAlgorithmListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
