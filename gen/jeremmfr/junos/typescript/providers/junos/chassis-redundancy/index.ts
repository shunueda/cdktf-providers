// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_redundancy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChassisRedundancyConfig extends cdktf.TerraformMetaArguments {
  /**
  * To failover, read threshold (ms) on disk underperform monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_redundancy#failover_disk_read_threshold ChassisRedundancy#failover_disk_read_threshold}
  */
  readonly failoverDiskReadThreshold?: number;
  /**
  * To failover, write threshold (ms) on disk underperform monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_redundancy#failover_disk_write_threshold ChassisRedundancy#failover_disk_write_threshold}
  */
  readonly failoverDiskWriteThreshold?: number;
  /**
  * Prevent gstatd from initiating failovers in response to slow disks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_redundancy#failover_not_on_disk_underperform ChassisRedundancy#failover_not_on_disk_underperform}
  */
  readonly failoverNotOnDiskUnderperform?: boolean | cdktf.IResolvable;
  /**
  * Failover on disk failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_redundancy#failover_on_disk_failure ChassisRedundancy#failover_on_disk_failure}
  */
  readonly failoverOnDiskFailure?: boolean | cdktf.IResolvable;
  /**
  * Failover on loss of keepalives.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_redundancy#failover_on_loss_of_keepalives ChassisRedundancy#failover_on_loss_of_keepalives}
  */
  readonly failoverOnLossOfKeepalives?: boolean | cdktf.IResolvable;
  /**
  * Enable graceful switchover on supported hardware.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_redundancy#graceful_switchover ChassisRedundancy#graceful_switchover}
  */
  readonly gracefulSwitchover?: boolean | cdktf.IResolvable;
  /**
  * Time before Routing Engine failover (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_redundancy#keepalive_time ChassisRedundancy#keepalive_time}
  */
  readonly keepaliveTime?: number;
  /**
  * routing_engine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_redundancy#routing_engine ChassisRedundancy#routing_engine}
  */
  readonly routingEngine?: ChassisRedundancyRoutingEngine[] | cdktf.IResolvable;
}
export interface ChassisRedundancyRoutingEngine {
  /**
  * Define role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_redundancy#role ChassisRedundancy#role}
  */
  readonly role: string;
  /**
  * Routing Engine slot number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_redundancy#slot ChassisRedundancy#slot}
  */
  readonly slot: number;
}

export function chassisRedundancyRoutingEngineToTerraform(struct?: ChassisRedundancyRoutingEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role: cdktf.stringToTerraform(struct!.role),
    slot: cdktf.numberToTerraform(struct!.slot),
  }
}


export function chassisRedundancyRoutingEngineToHclTerraform(struct?: ChassisRedundancyRoutingEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot: {
      value: cdktf.numberToHclTerraform(struct!.slot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChassisRedundancyRoutingEngineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ChassisRedundancyRoutingEngine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._slot !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChassisRedundancyRoutingEngine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._role = undefined;
      this._slot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._role = value.role;
      this._slot = value.slot;
    }
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // slot - computed: false, optional: false, required: true
  private _slot?: number; 
  public get slot() {
    return this.getNumberAttribute('slot');
  }
  public set slot(value: number) {
    this._slot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot;
  }
}

export class ChassisRedundancyRoutingEngineList extends cdktf.ComplexList {
  public internalValue? : ChassisRedundancyRoutingEngine[] | cdktf.IResolvable

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
  public get(index: number): ChassisRedundancyRoutingEngineOutputReference {
    return new ChassisRedundancyRoutingEngineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_redundancy junos_chassis_redundancy}
*/
export class ChassisRedundancy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_chassis_redundancy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ChassisRedundancy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ChassisRedundancy to import
  * @param importFromId The id of the existing ChassisRedundancy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_redundancy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ChassisRedundancy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_chassis_redundancy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/chassis_redundancy junos_chassis_redundancy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChassisRedundancyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ChassisRedundancyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_chassis_redundancy',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._failoverDiskReadThreshold = config.failoverDiskReadThreshold;
    this._failoverDiskWriteThreshold = config.failoverDiskWriteThreshold;
    this._failoverNotOnDiskUnderperform = config.failoverNotOnDiskUnderperform;
    this._failoverOnDiskFailure = config.failoverOnDiskFailure;
    this._failoverOnLossOfKeepalives = config.failoverOnLossOfKeepalives;
    this._gracefulSwitchover = config.gracefulSwitchover;
    this._keepaliveTime = config.keepaliveTime;
    this._routingEngine.internalValue = config.routingEngine;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // failover_disk_read_threshold - computed: false, optional: true, required: false
  private _failoverDiskReadThreshold?: number; 
  public get failoverDiskReadThreshold() {
    return this.getNumberAttribute('failover_disk_read_threshold');
  }
  public set failoverDiskReadThreshold(value: number) {
    this._failoverDiskReadThreshold = value;
  }
  public resetFailoverDiskReadThreshold() {
    this._failoverDiskReadThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverDiskReadThresholdInput() {
    return this._failoverDiskReadThreshold;
  }

  // failover_disk_write_threshold - computed: false, optional: true, required: false
  private _failoverDiskWriteThreshold?: number; 
  public get failoverDiskWriteThreshold() {
    return this.getNumberAttribute('failover_disk_write_threshold');
  }
  public set failoverDiskWriteThreshold(value: number) {
    this._failoverDiskWriteThreshold = value;
  }
  public resetFailoverDiskWriteThreshold() {
    this._failoverDiskWriteThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverDiskWriteThresholdInput() {
    return this._failoverDiskWriteThreshold;
  }

  // failover_not_on_disk_underperform - computed: false, optional: true, required: false
  private _failoverNotOnDiskUnderperform?: boolean | cdktf.IResolvable; 
  public get failoverNotOnDiskUnderperform() {
    return this.getBooleanAttribute('failover_not_on_disk_underperform');
  }
  public set failoverNotOnDiskUnderperform(value: boolean | cdktf.IResolvable) {
    this._failoverNotOnDiskUnderperform = value;
  }
  public resetFailoverNotOnDiskUnderperform() {
    this._failoverNotOnDiskUnderperform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverNotOnDiskUnderperformInput() {
    return this._failoverNotOnDiskUnderperform;
  }

  // failover_on_disk_failure - computed: false, optional: true, required: false
  private _failoverOnDiskFailure?: boolean | cdktf.IResolvable; 
  public get failoverOnDiskFailure() {
    return this.getBooleanAttribute('failover_on_disk_failure');
  }
  public set failoverOnDiskFailure(value: boolean | cdktf.IResolvable) {
    this._failoverOnDiskFailure = value;
  }
  public resetFailoverOnDiskFailure() {
    this._failoverOnDiskFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverOnDiskFailureInput() {
    return this._failoverOnDiskFailure;
  }

  // failover_on_loss_of_keepalives - computed: false, optional: true, required: false
  private _failoverOnLossOfKeepalives?: boolean | cdktf.IResolvable; 
  public get failoverOnLossOfKeepalives() {
    return this.getBooleanAttribute('failover_on_loss_of_keepalives');
  }
  public set failoverOnLossOfKeepalives(value: boolean | cdktf.IResolvable) {
    this._failoverOnLossOfKeepalives = value;
  }
  public resetFailoverOnLossOfKeepalives() {
    this._failoverOnLossOfKeepalives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverOnLossOfKeepalivesInput() {
    return this._failoverOnLossOfKeepalives;
  }

  // graceful_switchover - computed: false, optional: true, required: false
  private _gracefulSwitchover?: boolean | cdktf.IResolvable; 
  public get gracefulSwitchover() {
    return this.getBooleanAttribute('graceful_switchover');
  }
  public set gracefulSwitchover(value: boolean | cdktf.IResolvable) {
    this._gracefulSwitchover = value;
  }
  public resetGracefulSwitchover() {
    this._gracefulSwitchover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulSwitchoverInput() {
    return this._gracefulSwitchover;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keepalive_time - computed: false, optional: true, required: false
  private _keepaliveTime?: number; 
  public get keepaliveTime() {
    return this.getNumberAttribute('keepalive_time');
  }
  public set keepaliveTime(value: number) {
    this._keepaliveTime = value;
  }
  public resetKeepaliveTime() {
    this._keepaliveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeInput() {
    return this._keepaliveTime;
  }

  // routing_engine - computed: false, optional: true, required: false
  private _routingEngine = new ChassisRedundancyRoutingEngineList(this, "routing_engine", true);
  public get routingEngine() {
    return this._routingEngine;
  }
  public putRoutingEngine(value: ChassisRedundancyRoutingEngine[] | cdktf.IResolvable) {
    this._routingEngine.internalValue = value;
  }
  public resetRoutingEngine() {
    this._routingEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingEngineInput() {
    return this._routingEngine.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      failover_disk_read_threshold: cdktf.numberToTerraform(this._failoverDiskReadThreshold),
      failover_disk_write_threshold: cdktf.numberToTerraform(this._failoverDiskWriteThreshold),
      failover_not_on_disk_underperform: cdktf.booleanToTerraform(this._failoverNotOnDiskUnderperform),
      failover_on_disk_failure: cdktf.booleanToTerraform(this._failoverOnDiskFailure),
      failover_on_loss_of_keepalives: cdktf.booleanToTerraform(this._failoverOnLossOfKeepalives),
      graceful_switchover: cdktf.booleanToTerraform(this._gracefulSwitchover),
      keepalive_time: cdktf.numberToTerraform(this._keepaliveTime),
      routing_engine: cdktf.listMapper(chassisRedundancyRoutingEngineToTerraform, true)(this._routingEngine.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      failover_disk_read_threshold: {
        value: cdktf.numberToHclTerraform(this._failoverDiskReadThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failover_disk_write_threshold: {
        value: cdktf.numberToHclTerraform(this._failoverDiskWriteThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failover_not_on_disk_underperform: {
        value: cdktf.booleanToHclTerraform(this._failoverNotOnDiskUnderperform),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      failover_on_disk_failure: {
        value: cdktf.booleanToHclTerraform(this._failoverOnDiskFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      failover_on_loss_of_keepalives: {
        value: cdktf.booleanToHclTerraform(this._failoverOnLossOfKeepalives),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      graceful_switchover: {
        value: cdktf.booleanToHclTerraform(this._gracefulSwitchover),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keepalive_time: {
        value: cdktf.numberToHclTerraform(this._keepaliveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routing_engine: {
        value: cdktf.listMapperHcl(chassisRedundancyRoutingEngineToHclTerraform, true)(this._routingEngine.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ChassisRedundancyRoutingEngineList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
