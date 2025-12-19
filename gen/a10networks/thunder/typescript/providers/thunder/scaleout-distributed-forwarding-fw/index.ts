// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_fw
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScaleoutDistributedForwardingFwConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable distributed-forwarding for Firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_fw#enable ScaleoutDistributedForwardingFw#enable}
  */
  readonly enable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_fw#id ScaleoutDistributedForwardingFw#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'uplink': Enable session offload only in uplink direction; 'downlink': Enable session offload in downlink direction; 'both': Enable session offload in both direction;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_fw#session_offload_direction ScaleoutDistributedForwardingFw#session_offload_direction}
  */
  readonly sessionOffloadDirection?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_fw#uuid ScaleoutDistributedForwardingFw#uuid}
  */
  readonly uuid?: string;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_fw#threshold ScaleoutDistributedForwardingFw#threshold}
  */
  readonly threshold?: ScaleoutDistributedForwardingFwThreshold;
}
export interface ScaleoutDistributedForwardingFwThresholdProtocolThreshold {
  /**
  * 'UDP': configure threshold for udp session offload; 'TCP': configure threshold for tcp session offload;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_fw#protocol_value ScaleoutDistributedForwardingFw#protocol_value}
  */
  readonly protocolValue?: string;
  /**
  * configure packet threshold value to offload sessions(default 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_fw#threshold_value ScaleoutDistributedForwardingFw#threshold_value}
  */
  readonly thresholdValue?: number;
}

export function scaleoutDistributedForwardingFwThresholdProtocolThresholdToTerraform(struct?: ScaleoutDistributedForwardingFwThresholdProtocolThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol_value: cdktf.stringToTerraform(struct!.protocolValue),
    threshold_value: cdktf.numberToTerraform(struct!.thresholdValue),
  }
}


export function scaleoutDistributedForwardingFwThresholdProtocolThresholdToHclTerraform(struct?: ScaleoutDistributedForwardingFwThresholdProtocolThreshold | cdktf.IResolvable): any {
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

export class ScaleoutDistributedForwardingFwThresholdProtocolThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScaleoutDistributedForwardingFwThresholdProtocolThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ScaleoutDistributedForwardingFwThresholdProtocolThreshold | cdktf.IResolvable | undefined) {
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

export class ScaleoutDistributedForwardingFwThresholdProtocolThresholdList extends cdktf.ComplexList {
  public internalValue? : ScaleoutDistributedForwardingFwThresholdProtocolThreshold[] | cdktf.IResolvable

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
  public get(index: number): ScaleoutDistributedForwardingFwThresholdProtocolThresholdOutputReference {
    return new ScaleoutDistributedForwardingFwThresholdProtocolThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScaleoutDistributedForwardingFwThreshold {
  /**
  * configure packet threshold value to offload sessions of any(TCP and UDP) protocol(default 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_fw#global_threshold ScaleoutDistributedForwardingFw#global_threshold}
  */
  readonly globalThreshold?: number;
  /**
  * protocol_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_fw#protocol_threshold ScaleoutDistributedForwardingFw#protocol_threshold}
  */
  readonly protocolThreshold?: ScaleoutDistributedForwardingFwThresholdProtocolThreshold[] | cdktf.IResolvable;
}

export function scaleoutDistributedForwardingFwThresholdToTerraform(struct?: ScaleoutDistributedForwardingFwThresholdOutputReference | ScaleoutDistributedForwardingFwThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_threshold: cdktf.numberToTerraform(struct!.globalThreshold),
    protocol_threshold: cdktf.listMapper(scaleoutDistributedForwardingFwThresholdProtocolThresholdToTerraform, true)(struct!.protocolThreshold),
  }
}


export function scaleoutDistributedForwardingFwThresholdToHclTerraform(struct?: ScaleoutDistributedForwardingFwThresholdOutputReference | ScaleoutDistributedForwardingFwThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_threshold: {
      value: cdktf.numberToHclTerraform(struct!.globalThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol_threshold: {
      value: cdktf.listMapperHcl(scaleoutDistributedForwardingFwThresholdProtocolThresholdToHclTerraform, true)(struct!.protocolThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "ScaleoutDistributedForwardingFwThresholdProtocolThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScaleoutDistributedForwardingFwThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScaleoutDistributedForwardingFwThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalThreshold = this._globalThreshold;
    }
    if (this._protocolThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolThreshold = this._protocolThreshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScaleoutDistributedForwardingFwThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalThreshold = undefined;
      this._protocolThreshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalThreshold = value.globalThreshold;
      this._protocolThreshold.internalValue = value.protocolThreshold;
    }
  }

  // global_threshold - computed: false, optional: true, required: false
  private _globalThreshold?: number; 
  public get globalThreshold() {
    return this.getNumberAttribute('global_threshold');
  }
  public set globalThreshold(value: number) {
    this._globalThreshold = value;
  }
  public resetGlobalThreshold() {
    this._globalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalThresholdInput() {
    return this._globalThreshold;
  }

  // protocol_threshold - computed: false, optional: true, required: false
  private _protocolThreshold = new ScaleoutDistributedForwardingFwThresholdProtocolThresholdList(this, "protocol_threshold", false);
  public get protocolThreshold() {
    return this._protocolThreshold;
  }
  public putProtocolThreshold(value: ScaleoutDistributedForwardingFwThresholdProtocolThreshold[] | cdktf.IResolvable) {
    this._protocolThreshold.internalValue = value;
  }
  public resetProtocolThreshold() {
    this._protocolThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolThresholdInput() {
    return this._protocolThreshold.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_fw thunder_scaleout_distributed_forwarding_fw}
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
  * @param importFromId The id of the existing ScaleoutDistributedForwardingFw that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_fw#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScaleoutDistributedForwardingFw to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_distributed_forwarding_fw", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_distributed_forwarding_fw thunder_scaleout_distributed_forwarding_fw} Resource
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
    this._enable = config.enable;
    this._id = config.id;
    this._sessionOffloadDirection = config.sessionOffloadDirection;
    this._uuid = config.uuid;
    this._threshold.internalValue = config.threshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _threshold = new ScaleoutDistributedForwardingFwThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: ScaleoutDistributedForwardingFwThreshold) {
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
      enable: cdktf.numberToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      session_offload_direction: cdktf.stringToTerraform(this._sessionOffloadDirection),
      uuid: cdktf.stringToTerraform(this._uuid),
      threshold: scaleoutDistributedForwardingFwThresholdToTerraform(this._threshold.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
        value: scaleoutDistributedForwardingFwThresholdToHclTerraform(this._threshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScaleoutDistributedForwardingFwThresholdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
