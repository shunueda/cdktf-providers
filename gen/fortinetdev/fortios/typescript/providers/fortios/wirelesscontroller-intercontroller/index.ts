// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerIntercontrollerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller#dynamic_sort_subtable WirelesscontrollerIntercontroller#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller#fast_failover_max WirelesscontrollerIntercontroller#fast_failover_max}
  */
  readonly fastFailoverMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller#fast_failover_wait WirelesscontrollerIntercontroller#fast_failover_wait}
  */
  readonly fastFailoverWait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller#get_all_tables WirelesscontrollerIntercontroller#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller#id WirelesscontrollerIntercontroller#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller#inter_controller_key WirelesscontrollerIntercontroller#inter_controller_key}
  */
  readonly interControllerKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller#inter_controller_mode WirelesscontrollerIntercontroller#inter_controller_mode}
  */
  readonly interControllerMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller#inter_controller_pri WirelesscontrollerIntercontroller#inter_controller_pri}
  */
  readonly interControllerPri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller#l3_roaming WirelesscontrollerIntercontroller#l3_roaming}
  */
  readonly l3Roaming?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller#vdomparam WirelesscontrollerIntercontroller#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * inter_controller_peer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller#inter_controller_peer WirelesscontrollerIntercontroller#inter_controller_peer}
  */
  readonly interControllerPeer?: WirelesscontrollerIntercontrollerInterControllerPeer[] | cdktf.IResolvable;
}
export interface WirelesscontrollerIntercontrollerInterControllerPeer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller#id WirelesscontrollerIntercontroller#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller#peer_ip WirelesscontrollerIntercontroller#peer_ip}
  */
  readonly peerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller#peer_port WirelesscontrollerIntercontroller#peer_port}
  */
  readonly peerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller#peer_priority WirelesscontrollerIntercontroller#peer_priority}
  */
  readonly peerPriority?: string;
}

export function wirelesscontrollerIntercontrollerInterControllerPeerToTerraform(struct?: WirelesscontrollerIntercontrollerInterControllerPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    peer_ip: cdktf.stringToTerraform(struct!.peerIp),
    peer_port: cdktf.numberToTerraform(struct!.peerPort),
    peer_priority: cdktf.stringToTerraform(struct!.peerPriority),
  }
}


export function wirelesscontrollerIntercontrollerInterControllerPeerToHclTerraform(struct?: WirelesscontrollerIntercontrollerInterControllerPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_ip: {
      value: cdktf.stringToHclTerraform(struct!.peerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_port: {
      value: cdktf.numberToHclTerraform(struct!.peerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peer_priority: {
      value: cdktf.stringToHclTerraform(struct!.peerPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerIntercontrollerInterControllerPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerIntercontrollerInterControllerPeer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._peerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIp = this._peerIp;
    }
    if (this._peerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerPort = this._peerPort;
    }
    if (this._peerPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerPriority = this._peerPriority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerIntercontrollerInterControllerPeer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._peerIp = undefined;
      this._peerPort = undefined;
      this._peerPriority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._peerIp = value.peerIp;
      this._peerPort = value.peerPort;
      this._peerPriority = value.peerPriority;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // peer_ip - computed: true, optional: true, required: false
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  public resetPeerIp() {
    this._peerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp;
  }

  // peer_port - computed: true, optional: true, required: false
  private _peerPort?: number; 
  public get peerPort() {
    return this.getNumberAttribute('peer_port');
  }
  public set peerPort(value: number) {
    this._peerPort = value;
  }
  public resetPeerPort() {
    this._peerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerPortInput() {
    return this._peerPort;
  }

  // peer_priority - computed: true, optional: true, required: false
  private _peerPriority?: string; 
  public get peerPriority() {
    return this.getStringAttribute('peer_priority');
  }
  public set peerPriority(value: string) {
    this._peerPriority = value;
  }
  public resetPeerPriority() {
    this._peerPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerPriorityInput() {
    return this._peerPriority;
  }
}

export class WirelesscontrollerIntercontrollerInterControllerPeerList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerIntercontrollerInterControllerPeer[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerIntercontrollerInterControllerPeerOutputReference {
    return new WirelesscontrollerIntercontrollerInterControllerPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller fortios_wirelesscontroller_intercontroller}
*/
export class WirelesscontrollerIntercontroller extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wirelesscontroller_intercontroller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerIntercontroller resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerIntercontroller to import
  * @param importFromId The id of the existing WirelesscontrollerIntercontroller that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerIntercontroller to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wirelesscontroller_intercontroller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_intercontroller fortios_wirelesscontroller_intercontroller} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerIntercontrollerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerIntercontrollerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wirelesscontroller_intercontroller',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fastFailoverMax = config.fastFailoverMax;
    this._fastFailoverWait = config.fastFailoverWait;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._interControllerKey = config.interControllerKey;
    this._interControllerMode = config.interControllerMode;
    this._interControllerPri = config.interControllerPri;
    this._l3Roaming = config.l3Roaming;
    this._vdomparam = config.vdomparam;
    this._interControllerPeer.internalValue = config.interControllerPeer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // fast_failover_max - computed: true, optional: true, required: false
  private _fastFailoverMax?: number; 
  public get fastFailoverMax() {
    return this.getNumberAttribute('fast_failover_max');
  }
  public set fastFailoverMax(value: number) {
    this._fastFailoverMax = value;
  }
  public resetFastFailoverMax() {
    this._fastFailoverMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastFailoverMaxInput() {
    return this._fastFailoverMax;
  }

  // fast_failover_wait - computed: true, optional: true, required: false
  private _fastFailoverWait?: number; 
  public get fastFailoverWait() {
    return this.getNumberAttribute('fast_failover_wait');
  }
  public set fastFailoverWait(value: number) {
    this._fastFailoverWait = value;
  }
  public resetFastFailoverWait() {
    this._fastFailoverWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastFailoverWaitInput() {
    return this._fastFailoverWait;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // inter_controller_key - computed: false, optional: true, required: false
  private _interControllerKey?: string; 
  public get interControllerKey() {
    return this.getStringAttribute('inter_controller_key');
  }
  public set interControllerKey(value: string) {
    this._interControllerKey = value;
  }
  public resetInterControllerKey() {
    this._interControllerKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interControllerKeyInput() {
    return this._interControllerKey;
  }

  // inter_controller_mode - computed: true, optional: true, required: false
  private _interControllerMode?: string; 
  public get interControllerMode() {
    return this.getStringAttribute('inter_controller_mode');
  }
  public set interControllerMode(value: string) {
    this._interControllerMode = value;
  }
  public resetInterControllerMode() {
    this._interControllerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interControllerModeInput() {
    return this._interControllerMode;
  }

  // inter_controller_pri - computed: true, optional: true, required: false
  private _interControllerPri?: string; 
  public get interControllerPri() {
    return this.getStringAttribute('inter_controller_pri');
  }
  public set interControllerPri(value: string) {
    this._interControllerPri = value;
  }
  public resetInterControllerPri() {
    this._interControllerPri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interControllerPriInput() {
    return this._interControllerPri;
  }

  // l3_roaming - computed: true, optional: true, required: false
  private _l3Roaming?: string; 
  public get l3Roaming() {
    return this.getStringAttribute('l3_roaming');
  }
  public set l3Roaming(value: string) {
    this._l3Roaming = value;
  }
  public resetL3Roaming() {
    this._l3Roaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3RoamingInput() {
    return this._l3Roaming;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // inter_controller_peer - computed: false, optional: true, required: false
  private _interControllerPeer = new WirelesscontrollerIntercontrollerInterControllerPeerList(this, "inter_controller_peer", false);
  public get interControllerPeer() {
    return this._interControllerPeer;
  }
  public putInterControllerPeer(value: WirelesscontrollerIntercontrollerInterControllerPeer[] | cdktf.IResolvable) {
    this._interControllerPeer.internalValue = value;
  }
  public resetInterControllerPeer() {
    this._interControllerPeer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interControllerPeerInput() {
    return this._interControllerPeer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fast_failover_max: cdktf.numberToTerraform(this._fastFailoverMax),
      fast_failover_wait: cdktf.numberToTerraform(this._fastFailoverWait),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      inter_controller_key: cdktf.stringToTerraform(this._interControllerKey),
      inter_controller_mode: cdktf.stringToTerraform(this._interControllerMode),
      inter_controller_pri: cdktf.stringToTerraform(this._interControllerPri),
      l3_roaming: cdktf.stringToTerraform(this._l3Roaming),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      inter_controller_peer: cdktf.listMapper(wirelesscontrollerIntercontrollerInterControllerPeerToTerraform, true)(this._interControllerPeer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fast_failover_max: {
        value: cdktf.numberToHclTerraform(this._fastFailoverMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fast_failover_wait: {
        value: cdktf.numberToHclTerraform(this._fastFailoverWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      inter_controller_key: {
        value: cdktf.stringToHclTerraform(this._interControllerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inter_controller_mode: {
        value: cdktf.stringToHclTerraform(this._interControllerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inter_controller_pri: {
        value: cdktf.stringToHclTerraform(this._interControllerPri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3_roaming: {
        value: cdktf.stringToHclTerraform(this._l3Roaming),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inter_controller_peer: {
        value: cdktf.listMapperHcl(wirelesscontrollerIntercontrollerInterControllerPeerToHclTerraform, true)(this._interControllerPeer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerIntercontrollerInterControllerPeerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
