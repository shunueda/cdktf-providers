// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityMonitorSecondaryMonitorAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#id VisibilityMonitorSecondaryMonitorA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable topk for secondary entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#mon_entity_topk VisibilityMonitorSecondaryMonitorA#mon_entity_topk}
  */
  readonly monEntityTopk?: number;
  /**
  * 'service': Monitor traffic to any service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#secondary_monitoring_key VisibilityMonitorSecondaryMonitorA#secondary_monitoring_key}
  */
  readonly secondaryMonitoringKey: string;
  /**
  * Enable topk for sources to secondary-entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#source_entity_topk VisibilityMonitorSecondaryMonitorA#source_entity_topk}
  */
  readonly sourceEntityTopk?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#uuid VisibilityMonitorSecondaryMonitorA#uuid}
  */
  readonly uuid?: string;
  /**
  * debug_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#debug_list VisibilityMonitorSecondaryMonitorA#debug_list}
  */
  readonly debugList?: VisibilityMonitorSecondaryMonitorDebugListStructA[] | cdktf.IResolvable;
  /**
  * delete_debug_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#delete_debug_file VisibilityMonitorSecondaryMonitorA#delete_debug_file}
  */
  readonly deleteDebugFile?: VisibilityMonitorSecondaryMonitorDeleteDebugFileA;
  /**
  * replay_debug_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#replay_debug_file VisibilityMonitorSecondaryMonitorA#replay_debug_file}
  */
  readonly replayDebugFile?: VisibilityMonitorSecondaryMonitorReplayDebugFileA;
}
export interface VisibilityMonitorSecondaryMonitorDebugListStructA {
  /**
  * Specify source/dest ip addr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#debug_ip_addr VisibilityMonitorSecondaryMonitorA#debug_ip_addr}
  */
  readonly debugIpAddr: string;
  /**
  * Specify port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#debug_port VisibilityMonitorSecondaryMonitorA#debug_port}
  */
  readonly debugPort: number;
  /**
  * 'TCP': TCP; 'UDP': UDP; 'ICMP': ICMP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#debug_protocol VisibilityMonitorSecondaryMonitorA#debug_protocol}
  */
  readonly debugProtocol: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#uuid VisibilityMonitorSecondaryMonitorA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityMonitorSecondaryMonitorDebugListStructAToTerraform(struct?: VisibilityMonitorSecondaryMonitorDebugListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_ip_addr: cdktf.stringToTerraform(struct!.debugIpAddr),
    debug_port: cdktf.numberToTerraform(struct!.debugPort),
    debug_protocol: cdktf.stringToTerraform(struct!.debugProtocol),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityMonitorSecondaryMonitorDebugListStructAToHclTerraform(struct?: VisibilityMonitorSecondaryMonitorDebugListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.debugIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_port: {
      value: cdktf.numberToHclTerraform(struct!.debugPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_protocol: {
      value: cdktf.stringToHclTerraform(struct!.debugProtocol),
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

export class VisibilityMonitorSecondaryMonitorDebugListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisibilityMonitorSecondaryMonitorDebugListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugIpAddr = this._debugIpAddr;
    }
    if (this._debugPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugPort = this._debugPort;
    }
    if (this._debugProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugProtocol = this._debugProtocol;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitorSecondaryMonitorDebugListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debugIpAddr = undefined;
      this._debugPort = undefined;
      this._debugProtocol = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debugIpAddr = value.debugIpAddr;
      this._debugPort = value.debugPort;
      this._debugProtocol = value.debugProtocol;
      this._uuid = value.uuid;
    }
  }

  // debug_ip_addr - computed: false, optional: false, required: true
  private _debugIpAddr?: string; 
  public get debugIpAddr() {
    return this.getStringAttribute('debug_ip_addr');
  }
  public set debugIpAddr(value: string) {
    this._debugIpAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get debugIpAddrInput() {
    return this._debugIpAddr;
  }

  // debug_port - computed: false, optional: false, required: true
  private _debugPort?: number; 
  public get debugPort() {
    return this.getNumberAttribute('debug_port');
  }
  public set debugPort(value: number) {
    this._debugPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get debugPortInput() {
    return this._debugPort;
  }

  // debug_protocol - computed: false, optional: false, required: true
  private _debugProtocol?: string; 
  public get debugProtocol() {
    return this.getStringAttribute('debug_protocol');
  }
  public set debugProtocol(value: string) {
    this._debugProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get debugProtocolInput() {
    return this._debugProtocol;
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

export class VisibilityMonitorSecondaryMonitorDebugListStructAList extends cdktf.ComplexList {
  public internalValue? : VisibilityMonitorSecondaryMonitorDebugListStructA[] | cdktf.IResolvable

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
  public get(index: number): VisibilityMonitorSecondaryMonitorDebugListStructAOutputReference {
    return new VisibilityMonitorSecondaryMonitorDebugListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisibilityMonitorSecondaryMonitorDeleteDebugFileA {
  /**
  * Specify source/dest ip addr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#debug_ip_addr VisibilityMonitorSecondaryMonitorA#debug_ip_addr}
  */
  readonly debugIpAddr?: string;
  /**
  * Specify port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#debug_port VisibilityMonitorSecondaryMonitorA#debug_port}
  */
  readonly debugPort?: number;
  /**
  * 'TCP': TCP; 'UDP': UDP; 'ICMP': ICMP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#debug_protocol VisibilityMonitorSecondaryMonitorA#debug_protocol}
  */
  readonly debugProtocol?: string;
}

export function visibilityMonitorSecondaryMonitorDeleteDebugFileAToTerraform(struct?: VisibilityMonitorSecondaryMonitorDeleteDebugFileAOutputReference | VisibilityMonitorSecondaryMonitorDeleteDebugFileA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_ip_addr: cdktf.stringToTerraform(struct!.debugIpAddr),
    debug_port: cdktf.numberToTerraform(struct!.debugPort),
    debug_protocol: cdktf.stringToTerraform(struct!.debugProtocol),
  }
}


export function visibilityMonitorSecondaryMonitorDeleteDebugFileAToHclTerraform(struct?: VisibilityMonitorSecondaryMonitorDeleteDebugFileAOutputReference | VisibilityMonitorSecondaryMonitorDeleteDebugFileA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.debugIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_port: {
      value: cdktf.numberToHclTerraform(struct!.debugPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_protocol: {
      value: cdktf.stringToHclTerraform(struct!.debugProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitorSecondaryMonitorDeleteDebugFileAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitorSecondaryMonitorDeleteDebugFileA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugIpAddr = this._debugIpAddr;
    }
    if (this._debugPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugPort = this._debugPort;
    }
    if (this._debugProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugProtocol = this._debugProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitorSecondaryMonitorDeleteDebugFileA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._debugIpAddr = undefined;
      this._debugPort = undefined;
      this._debugProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._debugIpAddr = value.debugIpAddr;
      this._debugPort = value.debugPort;
      this._debugProtocol = value.debugProtocol;
    }
  }

  // debug_ip_addr - computed: false, optional: true, required: false
  private _debugIpAddr?: string; 
  public get debugIpAddr() {
    return this.getStringAttribute('debug_ip_addr');
  }
  public set debugIpAddr(value: string) {
    this._debugIpAddr = value;
  }
  public resetDebugIpAddr() {
    this._debugIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugIpAddrInput() {
    return this._debugIpAddr;
  }

  // debug_port - computed: false, optional: true, required: false
  private _debugPort?: number; 
  public get debugPort() {
    return this.getNumberAttribute('debug_port');
  }
  public set debugPort(value: number) {
    this._debugPort = value;
  }
  public resetDebugPort() {
    this._debugPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugPortInput() {
    return this._debugPort;
  }

  // debug_protocol - computed: false, optional: true, required: false
  private _debugProtocol?: string; 
  public get debugProtocol() {
    return this.getStringAttribute('debug_protocol');
  }
  public set debugProtocol(value: string) {
    this._debugProtocol = value;
  }
  public resetDebugProtocol() {
    this._debugProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugProtocolInput() {
    return this._debugProtocol;
  }
}
export interface VisibilityMonitorSecondaryMonitorReplayDebugFileA {
  /**
  * Specify source/dest ip addr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#debug_ip_addr VisibilityMonitorSecondaryMonitorA#debug_ip_addr}
  */
  readonly debugIpAddr?: string;
  /**
  * Specify port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#debug_port VisibilityMonitorSecondaryMonitorA#debug_port}
  */
  readonly debugPort?: number;
  /**
  * 'TCP': TCP; 'UDP': UDP; 'ICMP': ICMP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#debug_protocol VisibilityMonitorSecondaryMonitorA#debug_protocol}
  */
  readonly debugProtocol?: string;
}

export function visibilityMonitorSecondaryMonitorReplayDebugFileAToTerraform(struct?: VisibilityMonitorSecondaryMonitorReplayDebugFileAOutputReference | VisibilityMonitorSecondaryMonitorReplayDebugFileA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_ip_addr: cdktf.stringToTerraform(struct!.debugIpAddr),
    debug_port: cdktf.numberToTerraform(struct!.debugPort),
    debug_protocol: cdktf.stringToTerraform(struct!.debugProtocol),
  }
}


export function visibilityMonitorSecondaryMonitorReplayDebugFileAToHclTerraform(struct?: VisibilityMonitorSecondaryMonitorReplayDebugFileAOutputReference | VisibilityMonitorSecondaryMonitorReplayDebugFileA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.debugIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_port: {
      value: cdktf.numberToHclTerraform(struct!.debugPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_protocol: {
      value: cdktf.stringToHclTerraform(struct!.debugProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitorSecondaryMonitorReplayDebugFileAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitorSecondaryMonitorReplayDebugFileA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugIpAddr = this._debugIpAddr;
    }
    if (this._debugPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugPort = this._debugPort;
    }
    if (this._debugProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugProtocol = this._debugProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitorSecondaryMonitorReplayDebugFileA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._debugIpAddr = undefined;
      this._debugPort = undefined;
      this._debugProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._debugIpAddr = value.debugIpAddr;
      this._debugPort = value.debugPort;
      this._debugProtocol = value.debugProtocol;
    }
  }

  // debug_ip_addr - computed: false, optional: true, required: false
  private _debugIpAddr?: string; 
  public get debugIpAddr() {
    return this.getStringAttribute('debug_ip_addr');
  }
  public set debugIpAddr(value: string) {
    this._debugIpAddr = value;
  }
  public resetDebugIpAddr() {
    this._debugIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugIpAddrInput() {
    return this._debugIpAddr;
  }

  // debug_port - computed: false, optional: true, required: false
  private _debugPort?: number; 
  public get debugPort() {
    return this.getNumberAttribute('debug_port');
  }
  public set debugPort(value: number) {
    this._debugPort = value;
  }
  public resetDebugPort() {
    this._debugPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugPortInput() {
    return this._debugPort;
  }

  // debug_protocol - computed: false, optional: true, required: false
  private _debugProtocol?: string; 
  public get debugProtocol() {
    return this.getStringAttribute('debug_protocol');
  }
  public set debugProtocol(value: string) {
    this._debugProtocol = value;
  }
  public resetDebugProtocol() {
    this._debugProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugProtocolInput() {
    return this._debugProtocol;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor thunder_visibility_monitor_secondary_monitor}
*/
export class VisibilityMonitorSecondaryMonitorA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_monitor_secondary_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityMonitorSecondaryMonitorA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityMonitorSecondaryMonitorA to import
  * @param importFromId The id of the existing VisibilityMonitorSecondaryMonitorA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityMonitorSecondaryMonitorA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_monitor_secondary_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor_secondary_monitor thunder_visibility_monitor_secondary_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityMonitorSecondaryMonitorAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityMonitorSecondaryMonitorAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_monitor_secondary_monitor',
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
    this._monEntityTopk = config.monEntityTopk;
    this._secondaryMonitoringKey = config.secondaryMonitoringKey;
    this._sourceEntityTopk = config.sourceEntityTopk;
    this._uuid = config.uuid;
    this._debugList.internalValue = config.debugList;
    this._deleteDebugFile.internalValue = config.deleteDebugFile;
    this._replayDebugFile.internalValue = config.replayDebugFile;
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

  // mon_entity_topk - computed: false, optional: true, required: false
  private _monEntityTopk?: number; 
  public get monEntityTopk() {
    return this.getNumberAttribute('mon_entity_topk');
  }
  public set monEntityTopk(value: number) {
    this._monEntityTopk = value;
  }
  public resetMonEntityTopk() {
    this._monEntityTopk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monEntityTopkInput() {
    return this._monEntityTopk;
  }

  // secondary_monitoring_key - computed: false, optional: false, required: true
  private _secondaryMonitoringKey?: string; 
  public get secondaryMonitoringKey() {
    return this.getStringAttribute('secondary_monitoring_key');
  }
  public set secondaryMonitoringKey(value: string) {
    this._secondaryMonitoringKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryMonitoringKeyInput() {
    return this._secondaryMonitoringKey;
  }

  // source_entity_topk - computed: false, optional: true, required: false
  private _sourceEntityTopk?: number; 
  public get sourceEntityTopk() {
    return this.getNumberAttribute('source_entity_topk');
  }
  public set sourceEntityTopk(value: number) {
    this._sourceEntityTopk = value;
  }
  public resetSourceEntityTopk() {
    this._sourceEntityTopk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntityTopkInput() {
    return this._sourceEntityTopk;
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

  // debug_list - computed: false, optional: true, required: false
  private _debugList = new VisibilityMonitorSecondaryMonitorDebugListStructAList(this, "debug_list", false);
  public get debugList() {
    return this._debugList;
  }
  public putDebugList(value: VisibilityMonitorSecondaryMonitorDebugListStructA[] | cdktf.IResolvable) {
    this._debugList.internalValue = value;
  }
  public resetDebugList() {
    this._debugList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugListInput() {
    return this._debugList.internalValue;
  }

  // delete_debug_file - computed: false, optional: true, required: false
  private _deleteDebugFile = new VisibilityMonitorSecondaryMonitorDeleteDebugFileAOutputReference(this, "delete_debug_file");
  public get deleteDebugFile() {
    return this._deleteDebugFile;
  }
  public putDeleteDebugFile(value: VisibilityMonitorSecondaryMonitorDeleteDebugFileA) {
    this._deleteDebugFile.internalValue = value;
  }
  public resetDeleteDebugFile() {
    this._deleteDebugFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDebugFileInput() {
    return this._deleteDebugFile.internalValue;
  }

  // replay_debug_file - computed: false, optional: true, required: false
  private _replayDebugFile = new VisibilityMonitorSecondaryMonitorReplayDebugFileAOutputReference(this, "replay_debug_file");
  public get replayDebugFile() {
    return this._replayDebugFile;
  }
  public putReplayDebugFile(value: VisibilityMonitorSecondaryMonitorReplayDebugFileA) {
    this._replayDebugFile.internalValue = value;
  }
  public resetReplayDebugFile() {
    this._replayDebugFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayDebugFileInput() {
    return this._replayDebugFile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mon_entity_topk: cdktf.numberToTerraform(this._monEntityTopk),
      secondary_monitoring_key: cdktf.stringToTerraform(this._secondaryMonitoringKey),
      source_entity_topk: cdktf.numberToTerraform(this._sourceEntityTopk),
      uuid: cdktf.stringToTerraform(this._uuid),
      debug_list: cdktf.listMapper(visibilityMonitorSecondaryMonitorDebugListStructAToTerraform, true)(this._debugList.internalValue),
      delete_debug_file: visibilityMonitorSecondaryMonitorDeleteDebugFileAToTerraform(this._deleteDebugFile.internalValue),
      replay_debug_file: visibilityMonitorSecondaryMonitorReplayDebugFileAToTerraform(this._replayDebugFile.internalValue),
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
      mon_entity_topk: {
        value: cdktf.numberToHclTerraform(this._monEntityTopk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secondary_monitoring_key: {
        value: cdktf.stringToHclTerraform(this._secondaryMonitoringKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_entity_topk: {
        value: cdktf.numberToHclTerraform(this._sourceEntityTopk),
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
      debug_list: {
        value: cdktf.listMapperHcl(visibilityMonitorSecondaryMonitorDebugListStructAToHclTerraform, true)(this._debugList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitorSecondaryMonitorDebugListStructAList",
      },
      delete_debug_file: {
        value: visibilityMonitorSecondaryMonitorDeleteDebugFileAToHclTerraform(this._deleteDebugFile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitorSecondaryMonitorDeleteDebugFileAList",
      },
      replay_debug_file: {
        value: visibilityMonitorSecondaryMonitorReplayDebugFileAToHclTerraform(this._replayDebugFile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitorSecondaryMonitorReplayDebugFileAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
