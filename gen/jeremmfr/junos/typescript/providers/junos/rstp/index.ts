// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RstpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Priority of the bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#backup_bridge_priority Rstp#backup_bridge_priority}
  */
  readonly backupBridgePriority?: string;
  /**
  * Block BPDU on all interfaces configured as edge (BPDU Protect).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#bpdu_block_on_edge Rstp#bpdu_block_on_edge}
  */
  readonly bpduBlockOnEdge?: boolean | cdktf.IResolvable;
  /**
  * Destination MAC address in the spanning tree BPDUs is 802.1ad provider bridge group address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#bpdu_destination_mac_address_provider_bridge_group Rstp#bpdu_destination_mac_address_provider_bridge_group}
  */
  readonly bpduDestinationMacAddressProviderBridgeGroup?: boolean | cdktf.IResolvable;
  /**
  * Priority of the bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#bridge_priority Rstp#bridge_priority}
  */
  readonly bridgePriority?: string;
  /**
  * Disable STP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#disable Rstp#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extended system identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#extended_system_id Rstp#extended_system_id}
  */
  readonly extendedSystemId?: number;
  /**
  * Force protocol version STP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#force_version_stp Rstp#force_version_stp}
  */
  readonly forceVersionStp?: boolean | cdktf.IResolvable;
  /**
  * Time spent in listening or learning state (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#forward_delay Rstp#forward_delay}
  */
  readonly forwardDelay?: number;
  /**
  * Time interval between configuration BPDUs (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#hello_time Rstp#hello_time}
  */
  readonly helloTime?: number;
  /**
  * Maximum age of received protocol bpdu (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#max_age Rstp#max_age}
  */
  readonly maxAge?: number;
  /**
  * Hold time before switching to primary priority when core domain becomes up (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#priority_hold_time Rstp#priority_hold_time}
  */
  readonly priorityHoldTime?: number;
  /**
  * Routing instance for rstp protocol if not root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#routing_instance Rstp#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * System identifier to represent this node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#system_identifier Rstp#system_identifier}
  */
  readonly systemIdentifier?: string;
  /**
  * Enable VPLS MAC flush on root protected CE interface receiving topology change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#vpls_flush_on_topology_change Rstp#vpls_flush_on_topology_change}
  */
  readonly vplsFlushOnTopologyChange?: boolean | cdktf.IResolvable;
  /**
  * system_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#system_id Rstp#system_id}
  */
  readonly systemId?: RstpSystemId[] | cdktf.IResolvable;
}
export interface RstpSystemId {
  /**
  * System ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#id Rstp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Peer ID (IP Address).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#ip_address Rstp#ip_address}
  */
  readonly ipAddress?: string;
}

export function rstpSystemIdToTerraform(struct?: RstpSystemId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function rstpSystemIdToHclTerraform(struct?: RstpSystemId | cdktf.IResolvable): any {
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

export class RstpSystemIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RstpSystemId | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RstpSystemId | cdktf.IResolvable | undefined) {
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

export class RstpSystemIdList extends cdktf.ComplexList {
  public internalValue? : RstpSystemId[] | cdktf.IResolvable

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
  public get(index: number): RstpSystemIdOutputReference {
    return new RstpSystemIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp junos_rstp}
*/
export class Rstp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_rstp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rstp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rstp to import
  * @param importFromId The id of the existing Rstp that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rstp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_rstp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/rstp junos_rstp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RstpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RstpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_rstp',
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
    this._backupBridgePriority = config.backupBridgePriority;
    this._bpduBlockOnEdge = config.bpduBlockOnEdge;
    this._bpduDestinationMacAddressProviderBridgeGroup = config.bpduDestinationMacAddressProviderBridgeGroup;
    this._bridgePriority = config.bridgePriority;
    this._disable = config.disable;
    this._extendedSystemId = config.extendedSystemId;
    this._forceVersionStp = config.forceVersionStp;
    this._forwardDelay = config.forwardDelay;
    this._helloTime = config.helloTime;
    this._maxAge = config.maxAge;
    this._priorityHoldTime = config.priorityHoldTime;
    this._routingInstance = config.routingInstance;
    this._systemIdentifier = config.systemIdentifier;
    this._vplsFlushOnTopologyChange = config.vplsFlushOnTopologyChange;
    this._systemId.internalValue = config.systemId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_bridge_priority - computed: false, optional: true, required: false
  private _backupBridgePriority?: string; 
  public get backupBridgePriority() {
    return this.getStringAttribute('backup_bridge_priority');
  }
  public set backupBridgePriority(value: string) {
    this._backupBridgePriority = value;
  }
  public resetBackupBridgePriority() {
    this._backupBridgePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupBridgePriorityInput() {
    return this._backupBridgePriority;
  }

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

  // bpdu_destination_mac_address_provider_bridge_group - computed: false, optional: true, required: false
  private _bpduDestinationMacAddressProviderBridgeGroup?: boolean | cdktf.IResolvable; 
  public get bpduDestinationMacAddressProviderBridgeGroup() {
    return this.getBooleanAttribute('bpdu_destination_mac_address_provider_bridge_group');
  }
  public set bpduDestinationMacAddressProviderBridgeGroup(value: boolean | cdktf.IResolvable) {
    this._bpduDestinationMacAddressProviderBridgeGroup = value;
  }
  public resetBpduDestinationMacAddressProviderBridgeGroup() {
    this._bpduDestinationMacAddressProviderBridgeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduDestinationMacAddressProviderBridgeGroupInput() {
    return this._bpduDestinationMacAddressProviderBridgeGroup;
  }

  // bridge_priority - computed: false, optional: true, required: false
  private _bridgePriority?: string; 
  public get bridgePriority() {
    return this.getStringAttribute('bridge_priority');
  }
  public set bridgePriority(value: string) {
    this._bridgePriority = value;
  }
  public resetBridgePriority() {
    this._bridgePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgePriorityInput() {
    return this._bridgePriority;
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

  // extended_system_id - computed: false, optional: true, required: false
  private _extendedSystemId?: number; 
  public get extendedSystemId() {
    return this.getNumberAttribute('extended_system_id');
  }
  public set extendedSystemId(value: number) {
    this._extendedSystemId = value;
  }
  public resetExtendedSystemId() {
    this._extendedSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedSystemIdInput() {
    return this._extendedSystemId;
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

  // forward_delay - computed: false, optional: true, required: false
  private _forwardDelay?: number; 
  public get forwardDelay() {
    return this.getNumberAttribute('forward_delay');
  }
  public set forwardDelay(value: number) {
    this._forwardDelay = value;
  }
  public resetForwardDelay() {
    this._forwardDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardDelayInput() {
    return this._forwardDelay;
  }

  // hello_time - computed: false, optional: true, required: false
  private _helloTime?: number; 
  public get helloTime() {
    return this.getNumberAttribute('hello_time');
  }
  public set helloTime(value: number) {
    this._helloTime = value;
  }
  public resetHelloTime() {
    this._helloTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloTimeInput() {
    return this._helloTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
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

  // system_identifier - computed: false, optional: true, required: false
  private _systemIdentifier?: string; 
  public get systemIdentifier() {
    return this.getStringAttribute('system_identifier');
  }
  public set systemIdentifier(value: string) {
    this._systemIdentifier = value;
  }
  public resetSystemIdentifier() {
    this._systemIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdentifierInput() {
    return this._systemIdentifier;
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
  private _systemId = new RstpSystemIdList(this, "system_id", true);
  public get systemId() {
    return this._systemId;
  }
  public putSystemId(value: RstpSystemId[] | cdktf.IResolvable) {
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
      backup_bridge_priority: cdktf.stringToTerraform(this._backupBridgePriority),
      bpdu_block_on_edge: cdktf.booleanToTerraform(this._bpduBlockOnEdge),
      bpdu_destination_mac_address_provider_bridge_group: cdktf.booleanToTerraform(this._bpduDestinationMacAddressProviderBridgeGroup),
      bridge_priority: cdktf.stringToTerraform(this._bridgePriority),
      disable: cdktf.booleanToTerraform(this._disable),
      extended_system_id: cdktf.numberToTerraform(this._extendedSystemId),
      force_version_stp: cdktf.booleanToTerraform(this._forceVersionStp),
      forward_delay: cdktf.numberToTerraform(this._forwardDelay),
      hello_time: cdktf.numberToTerraform(this._helloTime),
      max_age: cdktf.numberToTerraform(this._maxAge),
      priority_hold_time: cdktf.numberToTerraform(this._priorityHoldTime),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      system_identifier: cdktf.stringToTerraform(this._systemIdentifier),
      vpls_flush_on_topology_change: cdktf.booleanToTerraform(this._vplsFlushOnTopologyChange),
      system_id: cdktf.listMapper(rstpSystemIdToTerraform, true)(this._systemId.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_bridge_priority: {
        value: cdktf.stringToHclTerraform(this._backupBridgePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bpdu_block_on_edge: {
        value: cdktf.booleanToHclTerraform(this._bpduBlockOnEdge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bpdu_destination_mac_address_provider_bridge_group: {
        value: cdktf.booleanToHclTerraform(this._bpduDestinationMacAddressProviderBridgeGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bridge_priority: {
        value: cdktf.stringToHclTerraform(this._bridgePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extended_system_id: {
        value: cdktf.numberToHclTerraform(this._extendedSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_version_stp: {
        value: cdktf.booleanToHclTerraform(this._forceVersionStp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward_delay: {
        value: cdktf.numberToHclTerraform(this._forwardDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hello_time: {
        value: cdktf.numberToHclTerraform(this._helloTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_age: {
        value: cdktf.numberToHclTerraform(this._maxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      system_identifier: {
        value: cdktf.stringToHclTerraform(this._systemIdentifier),
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
        value: cdktf.listMapperHcl(rstpSystemIdToHclTerraform, true)(this._systemId.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RstpSystemIdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
