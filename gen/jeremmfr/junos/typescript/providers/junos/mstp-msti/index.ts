// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/mstp_msti
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MstpMstiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Priority of the bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/mstp_msti#backup_bridge_priority MstpMsti#backup_bridge_priority}
  */
  readonly backupBridgePriority?: string;
  /**
  * Priority of the bridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/mstp_msti#bridge_priority MstpMsti#bridge_priority}
  */
  readonly bridgePriority?: string;
  /**
  * MSTI identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/mstp_msti#msti_id MstpMsti#msti_id}
  */
  readonly mstiId: number;
  /**
  * Routing instance for mstp protocol if not root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/mstp_msti#routing_instance MstpMsti#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * VLAN ID or VLAN ID range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/mstp_msti#vlan MstpMsti#vlan}
  */
  readonly vlan: string[];
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/mstp_msti#interface MstpMsti#interface}
  */
  readonly interface?: MstpMstiInterface[] | cdktf.IResolvable;
}
export interface MstpMstiInterface {
  /**
  * Cost of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/mstp_msti#cost MstpMsti#cost}
  */
  readonly cost?: number;
  /**
  * Interface name or `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/mstp_msti#name MstpMsti#name}
  */
  readonly name: string;
  /**
  * Interface priority (in increments of 16).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/mstp_msti#priority MstpMsti#priority}
  */
  readonly priority?: number;
}

export function mstpMstiInterfaceToTerraform(struct?: MstpMstiInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost: cdktf.numberToTerraform(struct!.cost),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function mstpMstiInterfaceToHclTerraform(struct?: MstpMstiInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MstpMstiInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MstpMstiInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MstpMstiInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cost = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cost = value.cost;
      this._name = value.name;
      this._priority = value.priority;
    }
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class MstpMstiInterfaceList extends cdktf.ComplexList {
  public internalValue? : MstpMstiInterface[] | cdktf.IResolvable

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
  public get(index: number): MstpMstiInterfaceOutputReference {
    return new MstpMstiInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/mstp_msti junos_mstp_msti}
*/
export class MstpMsti extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_mstp_msti";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MstpMsti resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MstpMsti to import
  * @param importFromId The id of the existing MstpMsti that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/mstp_msti#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MstpMsti to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_mstp_msti", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/mstp_msti junos_mstp_msti} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MstpMstiConfig
  */
  public constructor(scope: Construct, id: string, config: MstpMstiConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_mstp_msti',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
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
    this._bridgePriority = config.bridgePriority;
    this._mstiId = config.mstiId;
    this._routingInstance = config.routingInstance;
    this._vlan = config.vlan;
    this._interface.internalValue = config.interface;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // msti_id - computed: false, optional: false, required: true
  private _mstiId?: number; 
  public get mstiId() {
    return this.getNumberAttribute('msti_id');
  }
  public set mstiId(value: number) {
    this._mstiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mstiIdInput() {
    return this._mstiId;
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

  // vlan - computed: false, optional: false, required: true
  private _vlan?: string[]; 
  public get vlan() {
    return cdktf.Fn.tolist(this.getListAttribute('vlan'));
  }
  public set vlan(value: string[]) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new MstpMstiInterfaceList(this, "interface", true);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: MstpMstiInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_bridge_priority: cdktf.stringToTerraform(this._backupBridgePriority),
      bridge_priority: cdktf.stringToTerraform(this._bridgePriority),
      msti_id: cdktf.numberToTerraform(this._mstiId),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      vlan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlan),
      interface: cdktf.listMapper(mstpMstiInterfaceToTerraform, true)(this._interface.internalValue),
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
      bridge_priority: {
        value: cdktf.stringToHclTerraform(this._bridgePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msti_id: {
        value: cdktf.numberToHclTerraform(this._mstiId),
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
      vlan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vlan),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      interface: {
        value: cdktf.listMapperHcl(mstpMstiInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MstpMstiInterfaceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
