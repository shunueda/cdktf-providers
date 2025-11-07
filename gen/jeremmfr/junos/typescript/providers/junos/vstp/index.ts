// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VstpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Block BPDU on all interfaces configured as edge (BPDU Protect).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp#bpdu_block_on_edge Vstp#bpdu_block_on_edge}
  */
  readonly bpduBlockOnEdge?: boolean | cdktf.IResolvable;
  /**
  * Disable STP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp#disable Vstp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Force protocol version STP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp#force_version_stp Vstp#force_version_stp}
  */
  readonly forceVersionStp?: boolean | cdktf.IResolvable;
  /**
  * Hold time before switching to primary priority when core domain becomes up (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp#priority_hold_time Vstp#priority_hold_time}
  */
  readonly priorityHoldTime?: number;
  /**
  * Routing instance for vstp protocol if not root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp#routing_instance Vstp#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Enable VPLS MAC flush on root protected CE interface receiving topology change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp#vpls_flush_on_topology_change Vstp#vpls_flush_on_topology_change}
  */
  readonly vplsFlushOnTopologyChange?: boolean | cdktf.IResolvable;
  /**
  * system_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp#system_id Vstp#system_id}
  */
  readonly systemId?: VstpSystemId[] | cdktf.IResolvable;
}
export interface VstpSystemId {
  /**
  * System ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp#id Vstp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Peer ID (IP Address).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp#ip_address Vstp#ip_address}
  */
  readonly ipAddress?: string;
}

export function vstpSystemIdToTerraform(struct?: VstpSystemId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function vstpSystemIdToHclTerraform(struct?: VstpSystemId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VstpSystemIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VstpSystemId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VstpSystemId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ipAddress = value.ipAddress;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class VstpSystemIdList extends cdktf.ComplexList {
  public internalValue? : VstpSystemId[] | cdktf.IResolvable

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
  public get(index: number): VstpSystemIdOutputReference {
    return new VstpSystemIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp junos_vstp}
*/
export class Vstp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_vstp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vstp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vstp to import
  * @param importFromId The id of the existing Vstp that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vstp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_vstp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/vstp junos_vstp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VstpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VstpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_vstp',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bpduBlockOnEdge = config.bpduBlockOnEdge;
    this._disable = config.disable;
    this._forceVersionStp = config.forceVersionStp;
    this._priorityHoldTime = config.priorityHoldTime;
    this._routingInstance = config.routingInstance;
    this._vplsFlushOnTopologyChange = config.vplsFlushOnTopologyChange;
    this._systemId.internalValue = config.systemId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bpdu_block_on_edge - computed: false, optional: true, required: false
  private _bpduBlockOnEdge?: boolean | cdktf.IResolvable; 
  public get bpduBlockOnEdge() {
    return this.getBooleanAttribute('bpdu_block_on_edge');
  }
  public set bpduBlockOnEdge(value: boolean | cdktf.IResolvable) {
    this._bpduBlockOnEdge = value;
  }
  public resetBpduBlockOnEdge() {
    this._bpduBlockOnEdge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduBlockOnEdgeInput() {
    return this._bpduBlockOnEdge;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // force_version_stp - computed: false, optional: true, required: false
  private _forceVersionStp?: boolean | cdktf.IResolvable; 
  public get forceVersionStp() {
    return this.getBooleanAttribute('force_version_stp');
  }
  public set forceVersionStp(value: boolean | cdktf.IResolvable) {
    this._forceVersionStp = value;
  }
  public resetForceVersionStp() {
    this._forceVersionStp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceVersionStpInput() {
    return this._forceVersionStp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // priority_hold_time - computed: false, optional: true, required: false
  private _priorityHoldTime?: number; 
  public get priorityHoldTime() {
    return this.getNumberAttribute('priority_hold_time');
  }
  public set priorityHoldTime(value: number) {
    this._priorityHoldTime = value;
  }
  public resetPriorityHoldTime() {
    this._priorityHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityHoldTimeInput() {
    return this._priorityHoldTime;
  }

  // routing_instance - computed: true, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // vpls_flush_on_topology_change - computed: false, optional: true, required: false
  private _vplsFlushOnTopologyChange?: boolean | cdktf.IResolvable; 
  public get vplsFlushOnTopologyChange() {
    return this.getBooleanAttribute('vpls_flush_on_topology_change');
  }
  public set vplsFlushOnTopologyChange(value: boolean | cdktf.IResolvable) {
    this._vplsFlushOnTopologyChange = value;
  }
  public resetVplsFlushOnTopologyChange() {
    this._vplsFlushOnTopologyChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vplsFlushOnTopologyChangeInput() {
    return this._vplsFlushOnTopologyChange;
  }

  // system_id - computed: false, optional: true, required: false
  private _systemId = new VstpSystemIdList(this, "system_id", true);
  public get systemId() {
    return this._systemId;
  }
  public putSystemId(value: VstpSystemId[] | cdktf.IResolvable) {
    this._systemId.internalValue = value;
  }
  public resetSystemId() {
    this._systemId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bpdu_block_on_edge: cdktf.booleanToTerraform(this._bpduBlockOnEdge),
      disable: cdktf.booleanToTerraform(this._disable),
      force_version_stp: cdktf.booleanToTerraform(this._forceVersionStp),
      priority_hold_time: cdktf.numberToTerraform(this._priorityHoldTime),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      vpls_flush_on_topology_change: cdktf.booleanToTerraform(this._vplsFlushOnTopologyChange),
      system_id: cdktf.listMapper(vstpSystemIdToTerraform, true)(this._systemId.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bpdu_block_on_edge: {
        value: cdktf.booleanToHclTerraform(this._bpduBlockOnEdge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_version_stp: {
        value: cdktf.booleanToHclTerraform(this._forceVersionStp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority_hold_time: {
        value: cdktf.numberToHclTerraform(this._priorityHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpls_flush_on_topology_change: {
        value: cdktf.booleanToHclTerraform(this._vplsFlushOnTopologyChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      system_id: {
        value: cdktf.listMapperHcl(vstpSystemIdToHclTerraform, true)(this._systemId.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VstpSystemIdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
