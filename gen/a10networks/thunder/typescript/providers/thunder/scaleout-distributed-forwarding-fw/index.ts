// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_fw
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScaleoutDistributedForwardingFwConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable FW; 'disable': Disable FW;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_fw#fw_value ScaleoutDistributedForwardingFw#fw_value}
  */
  readonly fwValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_fw#id ScaleoutDistributedForwardingFw#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'uplink': Enable session offload only in uplink direction; 'downlink': Enable session offload in downlink direction; 'both': Enable session offload in both direction;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_fw#session_offload_direction ScaleoutDistributedForwardingFw#session_offload_direction}
  */
  readonly sessionOffloadDirection?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_fw#uuid ScaleoutDistributedForwardingFw#uuid}
  */
  readonly uuid?: string;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_fw#threshold ScaleoutDistributedForwardingFw#threshold}
  */
  readonly threshold?: ScaleoutDistributedForwardingFwThreshold[] | cdktf.IResolvable;
}
export interface ScaleoutDistributedForwardingFwThreshold {
  /**
  * 'UDP': configure threshold for udp session offload; 'TCP': configure threshold for tcp session offload;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_fw#protocol_value ScaleoutDistributedForwardingFw#protocol_value}
  */
  readonly protocolValue?: string;
  /**
  * configure packet threshold value to offload sessions(default 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_fw#threshold_value ScaleoutDistributedForwardingFw#threshold_value}
  */
  readonly thresholdValue?: number;
}

export function scaleoutDistributedForwardingFwThresholdToTerraform(struct?: ScaleoutDistributedForwardingFwThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol_value: cdktf.stringToTerraform(struct!.protocolValue),
    threshold_value: cdktf.numberToTerraform(struct!.thresholdValue),
  }
}


export function scaleoutDistributedForwardingFwThresholdToHclTerraform(struct?: ScaleoutDistributedForwardingFwThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol_value: {
      value: cdktf.stringToHclTerraform(struct!.protocolValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_value: {
      value: cdktf.numberToHclTerraform(struct!.thresholdValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutDistributedForwardingFwThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutDistributedForwardingFwThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocolValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolValue = this._protocolValue;
    }
    if (this._thresholdValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdValue = this._thresholdValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutDistributedForwardingFwThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocolValue = undefined;
      this._thresholdValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocolValue = value.protocolValue;
      this._thresholdValue = value.thresholdValue;
    }
  }

  // protocol_value - computed: false, optional: true, required: false
  private _protocolValue?: string; 
  public get protocolValue() {
    return this.getStringAttribute('protocol_value');
  }
  public set protocolValue(value: string) {
    this._protocolValue = value;
  }
  public resetProtocolValue() {
    this._protocolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolValueInput() {
    return this._protocolValue;
  }

  // threshold_value - computed: false, optional: true, required: false
  private _thresholdValue?: number; 
  public get thresholdValue() {
    return this.getNumberAttribute('threshold_value');
  }
  public set thresholdValue(value: number) {
    this._thresholdValue = value;
  }
  public resetThresholdValue() {
    this._thresholdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdValueInput() {
    return this._thresholdValue;
  }
}

export class ScaleoutDistributedForwardingFwThresholdList extends cdktf.ComplexList {
  public internalValue? : ScaleoutDistributedForwardingFwThreshold[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutDistributedForwardingFwThresholdOutputReference {
    return new ScaleoutDistributedForwardingFwThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_fw thunder_scaleout_distributed_forwarding_fw}
*/
export class ScaleoutDistributedForwardingFw extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_distributed_forwarding_fw";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScaleoutDistributedForwardingFw resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScaleoutDistributedForwardingFw to import
  * @param importFromId The id of the existing ScaleoutDistributedForwardingFw that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_fw#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScaleoutDistributedForwardingFw to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_distributed_forwarding_fw", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_distributed_forwarding_fw thunder_scaleout_distributed_forwarding_fw} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScaleoutDistributedForwardingFwConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ScaleoutDistributedForwardingFwConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_distributed_forwarding_fw',
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
    this._fwValue = config.fwValue;
    this._id = config.id;
    this._sessionOffloadDirection = config.sessionOffloadDirection;
    this._uuid = config.uuid;
    this._threshold.internalValue = config.threshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fw_value - computed: false, optional: true, required: false
  private _fwValue?: string; 
  public get fwValue() {
    return this.getStringAttribute('fw_value');
  }
  public set fwValue(value: string) {
    this._fwValue = value;
  }
  public resetFwValue() {
    this._fwValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwValueInput() {
    return this._fwValue;
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

  // session_offload_direction - computed: false, optional: true, required: false
  private _sessionOffloadDirection?: string; 
  public get sessionOffloadDirection() {
    return this.getStringAttribute('session_offload_direction');
  }
  public set sessionOffloadDirection(value: string) {
    this._sessionOffloadDirection = value;
  }
  public resetSessionOffloadDirection() {
    this._sessionOffloadDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionOffloadDirectionInput() {
    return this._sessionOffloadDirection;
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

  // threshold - computed: false, optional: true, required: false
  private _threshold = new ScaleoutDistributedForwardingFwThresholdList(this, "threshold", false);
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: ScaleoutDistributedForwardingFwThreshold[] | cdktf.IResolvable) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fw_value: cdktf.stringToTerraform(this._fwValue),
      id: cdktf.stringToTerraform(this._id),
      session_offload_direction: cdktf.stringToTerraform(this._sessionOffloadDirection),
      uuid: cdktf.stringToTerraform(this._uuid),
      threshold: cdktf.listMapper(scaleoutDistributedForwardingFwThresholdToTerraform, true)(this._threshold.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fw_value: {
        value: cdktf.stringToHclTerraform(this._fwValue),
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
      session_offload_direction: {
        value: cdktf.stringToHclTerraform(this._sessionOffloadDirection),
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
      threshold: {
        value: cdktf.listMapperHcl(scaleoutDistributedForwardingFwThresholdToHclTerraform, true)(this._threshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutDistributedForwardingFwThresholdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
