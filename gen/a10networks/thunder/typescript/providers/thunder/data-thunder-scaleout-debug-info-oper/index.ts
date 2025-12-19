// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderScaleoutDebugInfoOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#id DataThunderScaleoutDebugInfoOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#oper DataThunderScaleoutDebugInfoOper#oper}
  */
  readonly oper?: DataThunderScaleoutDebugInfoOperOper;
}
export interface DataThunderScaleoutDebugInfoOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#active_device_count DataThunderScaleoutDebugInfoOper#active_device_count}
  */
  readonly activeDeviceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#cluster_disc_timer_running DataThunderScaleoutDebugInfoOper#cluster_disc_timer_running}
  */
  readonly clusterDiscTimerRunning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#cluster_discovery_start_timestamp DataThunderScaleoutDebugInfoOper#cluster_discovery_start_timestamp}
  */
  readonly clusterDiscoveryStartTimestamp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#cluster_discovery_timeout DataThunderScaleoutDebugInfoOper#cluster_discovery_timeout}
  */
  readonly clusterDiscoveryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#db_operation_max_retry DataThunderScaleoutDebugInfoOper#db_operation_max_retry}
  */
  readonly dbOperationMaxRetry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#db_process_running DataThunderScaleoutDebugInfoOper#db_process_running}
  */
  readonly dbProcessRunning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#explicitly_stop_service DataThunderScaleoutDebugInfoOper#explicitly_stop_service}
  */
  readonly explicitlyStopService?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#g_scaleout DataThunderScaleoutDebugInfoOper#g_scaleout}
  */
  readonly gScaleout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#node_disable_in_prog DataThunderScaleoutDebugInfoOper#node_disable_in_prog}
  */
  readonly nodeDisableInProg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#node_enable_in_prog DataThunderScaleoutDebugInfoOper#node_enable_in_prog}
  */
  readonly nodeEnableInProg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#pending_scaleout_exit DataThunderScaleoutDebugInfoOper#pending_scaleout_exit}
  */
  readonly pendingScaleoutExit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#perform_tracking_work DataThunderScaleoutDebugInfoOper#perform_tracking_work}
  */
  readonly performTrackingWork?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#scaleout_current_role DataThunderScaleoutDebugInfoOper#scaleout_current_role}
  */
  readonly scaleoutCurrentRole?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#scaleout_enabled DataThunderScaleoutDebugInfoOper#scaleout_enabled}
  */
  readonly scaleoutEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#so_device_count DataThunderScaleoutDebugInfoOper#so_device_count}
  */
  readonly soDeviceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#traffic_map_update DataThunderScaleoutDebugInfoOper#traffic_map_update}
  */
  readonly trafficMapUpdate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#trigger_cluster_exit DataThunderScaleoutDebugInfoOper#trigger_cluster_exit}
  */
  readonly triggerClusterExit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#trigger_disable DataThunderScaleoutDebugInfoOper#trigger_disable}
  */
  readonly triggerDisable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#trigger_enable DataThunderScaleoutDebugInfoOper#trigger_enable}
  */
  readonly triggerEnable?: number;
}

export function dataThunderScaleoutDebugInfoOperOperToTerraform(struct?: DataThunderScaleoutDebugInfoOperOperOutputReference | DataThunderScaleoutDebugInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_device_count: cdktf.numberToTerraform(struct!.activeDeviceCount),
    cluster_disc_timer_running: cdktf.numberToTerraform(struct!.clusterDiscTimerRunning),
    cluster_discovery_start_timestamp: cdktf.numberToTerraform(struct!.clusterDiscoveryStartTimestamp),
    cluster_discovery_timeout: cdktf.numberToTerraform(struct!.clusterDiscoveryTimeout),
    db_operation_max_retry: cdktf.numberToTerraform(struct!.dbOperationMaxRetry),
    db_process_running: cdktf.numberToTerraform(struct!.dbProcessRunning),
    explicitly_stop_service: cdktf.numberToTerraform(struct!.explicitlyStopService),
    g_scaleout: cdktf.numberToTerraform(struct!.gScaleout),
    node_disable_in_prog: cdktf.numberToTerraform(struct!.nodeDisableInProg),
    node_enable_in_prog: cdktf.numberToTerraform(struct!.nodeEnableInProg),
    pending_scaleout_exit: cdktf.numberToTerraform(struct!.pendingScaleoutExit),
    perform_tracking_work: cdktf.numberToTerraform(struct!.performTrackingWork),
    scaleout_current_role: cdktf.numberToTerraform(struct!.scaleoutCurrentRole),
    scaleout_enabled: cdktf.numberToTerraform(struct!.scaleoutEnabled),
    so_device_count: cdktf.numberToTerraform(struct!.soDeviceCount),
    traffic_map_update: cdktf.numberToTerraform(struct!.trafficMapUpdate),
    trigger_cluster_exit: cdktf.numberToTerraform(struct!.triggerClusterExit),
    trigger_disable: cdktf.numberToTerraform(struct!.triggerDisable),
    trigger_enable: cdktf.numberToTerraform(struct!.triggerEnable),
  }
}


export function dataThunderScaleoutDebugInfoOperOperToHclTerraform(struct?: DataThunderScaleoutDebugInfoOperOperOutputReference | DataThunderScaleoutDebugInfoOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_device_count: {
      value: cdktf.numberToHclTerraform(struct!.activeDeviceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_disc_timer_running: {
      value: cdktf.numberToHclTerraform(struct!.clusterDiscTimerRunning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_discovery_start_timestamp: {
      value: cdktf.numberToHclTerraform(struct!.clusterDiscoveryStartTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_discovery_timeout: {
      value: cdktf.numberToHclTerraform(struct!.clusterDiscoveryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_operation_max_retry: {
      value: cdktf.numberToHclTerraform(struct!.dbOperationMaxRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_process_running: {
      value: cdktf.numberToHclTerraform(struct!.dbProcessRunning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    explicitly_stop_service: {
      value: cdktf.numberToHclTerraform(struct!.explicitlyStopService),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    g_scaleout: {
      value: cdktf.numberToHclTerraform(struct!.gScaleout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_disable_in_prog: {
      value: cdktf.numberToHclTerraform(struct!.nodeDisableInProg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_enable_in_prog: {
      value: cdktf.numberToHclTerraform(struct!.nodeEnableInProg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pending_scaleout_exit: {
      value: cdktf.numberToHclTerraform(struct!.pendingScaleoutExit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    perform_tracking_work: {
      value: cdktf.numberToHclTerraform(struct!.performTrackingWork),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaleout_current_role: {
      value: cdktf.numberToHclTerraform(struct!.scaleoutCurrentRole),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaleout_enabled: {
      value: cdktf.numberToHclTerraform(struct!.scaleoutEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    so_device_count: {
      value: cdktf.numberToHclTerraform(struct!.soDeviceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_map_update: {
      value: cdktf.numberToHclTerraform(struct!.trafficMapUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger_cluster_exit: {
      value: cdktf.numberToHclTerraform(struct!.triggerClusterExit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger_disable: {
      value: cdktf.numberToHclTerraform(struct!.triggerDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger_enable: {
      value: cdktf.numberToHclTerraform(struct!.triggerEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderScaleoutDebugInfoOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderScaleoutDebugInfoOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeDeviceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDeviceCount = this._activeDeviceCount;
    }
    if (this._clusterDiscTimerRunning !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDiscTimerRunning = this._clusterDiscTimerRunning;
    }
    if (this._clusterDiscoveryStartTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDiscoveryStartTimestamp = this._clusterDiscoveryStartTimestamp;
    }
    if (this._clusterDiscoveryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDiscoveryTimeout = this._clusterDiscoveryTimeout;
    }
    if (this._dbOperationMaxRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbOperationMaxRetry = this._dbOperationMaxRetry;
    }
    if (this._dbProcessRunning !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbProcessRunning = this._dbProcessRunning;
    }
    if (this._explicitlyStopService !== undefined) {
      hasAnyValues = true;
      internalValueResult.explicitlyStopService = this._explicitlyStopService;
    }
    if (this._gScaleout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gScaleout = this._gScaleout;
    }
    if (this._nodeDisableInProg !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDisableInProg = this._nodeDisableInProg;
    }
    if (this._nodeEnableInProg !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeEnableInProg = this._nodeEnableInProg;
    }
    if (this._pendingScaleoutExit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingScaleoutExit = this._pendingScaleoutExit;
    }
    if (this._performTrackingWork !== undefined) {
      hasAnyValues = true;
      internalValueResult.performTrackingWork = this._performTrackingWork;
    }
    if (this._scaleoutCurrentRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleoutCurrentRole = this._scaleoutCurrentRole;
    }
    if (this._scaleoutEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleoutEnabled = this._scaleoutEnabled;
    }
    if (this._soDeviceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.soDeviceCount = this._soDeviceCount;
    }
    if (this._trafficMapUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficMapUpdate = this._trafficMapUpdate;
    }
    if (this._triggerClusterExit !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerClusterExit = this._triggerClusterExit;
    }
    if (this._triggerDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerDisable = this._triggerDisable;
    }
    if (this._triggerEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerEnable = this._triggerEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderScaleoutDebugInfoOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeDeviceCount = undefined;
      this._clusterDiscTimerRunning = undefined;
      this._clusterDiscoveryStartTimestamp = undefined;
      this._clusterDiscoveryTimeout = undefined;
      this._dbOperationMaxRetry = undefined;
      this._dbProcessRunning = undefined;
      this._explicitlyStopService = undefined;
      this._gScaleout = undefined;
      this._nodeDisableInProg = undefined;
      this._nodeEnableInProg = undefined;
      this._pendingScaleoutExit = undefined;
      this._performTrackingWork = undefined;
      this._scaleoutCurrentRole = undefined;
      this._scaleoutEnabled = undefined;
      this._soDeviceCount = undefined;
      this._trafficMapUpdate = undefined;
      this._triggerClusterExit = undefined;
      this._triggerDisable = undefined;
      this._triggerEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeDeviceCount = value.activeDeviceCount;
      this._clusterDiscTimerRunning = value.clusterDiscTimerRunning;
      this._clusterDiscoveryStartTimestamp = value.clusterDiscoveryStartTimestamp;
      this._clusterDiscoveryTimeout = value.clusterDiscoveryTimeout;
      this._dbOperationMaxRetry = value.dbOperationMaxRetry;
      this._dbProcessRunning = value.dbProcessRunning;
      this._explicitlyStopService = value.explicitlyStopService;
      this._gScaleout = value.gScaleout;
      this._nodeDisableInProg = value.nodeDisableInProg;
      this._nodeEnableInProg = value.nodeEnableInProg;
      this._pendingScaleoutExit = value.pendingScaleoutExit;
      this._performTrackingWork = value.performTrackingWork;
      this._scaleoutCurrentRole = value.scaleoutCurrentRole;
      this._scaleoutEnabled = value.scaleoutEnabled;
      this._soDeviceCount = value.soDeviceCount;
      this._trafficMapUpdate = value.trafficMapUpdate;
      this._triggerClusterExit = value.triggerClusterExit;
      this._triggerDisable = value.triggerDisable;
      this._triggerEnable = value.triggerEnable;
    }
  }

  // active_device_count - computed: false, optional: true, required: false
  private _activeDeviceCount?: number; 
  public get activeDeviceCount() {
    return this.getNumberAttribute('active_device_count');
  }
  public set activeDeviceCount(value: number) {
    this._activeDeviceCount = value;
  }
  public resetActiveDeviceCount() {
    this._activeDeviceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeviceCountInput() {
    return this._activeDeviceCount;
  }

  // cluster_disc_timer_running - computed: false, optional: true, required: false
  private _clusterDiscTimerRunning?: number; 
  public get clusterDiscTimerRunning() {
    return this.getNumberAttribute('cluster_disc_timer_running');
  }
  public set clusterDiscTimerRunning(value: number) {
    this._clusterDiscTimerRunning = value;
  }
  public resetClusterDiscTimerRunning() {
    this._clusterDiscTimerRunning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDiscTimerRunningInput() {
    return this._clusterDiscTimerRunning;
  }

  // cluster_discovery_start_timestamp - computed: false, optional: true, required: false
  private _clusterDiscoveryStartTimestamp?: number; 
  public get clusterDiscoveryStartTimestamp() {
    return this.getNumberAttribute('cluster_discovery_start_timestamp');
  }
  public set clusterDiscoveryStartTimestamp(value: number) {
    this._clusterDiscoveryStartTimestamp = value;
  }
  public resetClusterDiscoveryStartTimestamp() {
    this._clusterDiscoveryStartTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDiscoveryStartTimestampInput() {
    return this._clusterDiscoveryStartTimestamp;
  }

  // cluster_discovery_timeout - computed: false, optional: true, required: false
  private _clusterDiscoveryTimeout?: number; 
  public get clusterDiscoveryTimeout() {
    return this.getNumberAttribute('cluster_discovery_timeout');
  }
  public set clusterDiscoveryTimeout(value: number) {
    this._clusterDiscoveryTimeout = value;
  }
  public resetClusterDiscoveryTimeout() {
    this._clusterDiscoveryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDiscoveryTimeoutInput() {
    return this._clusterDiscoveryTimeout;
  }

  // db_operation_max_retry - computed: false, optional: true, required: false
  private _dbOperationMaxRetry?: number; 
  public get dbOperationMaxRetry() {
    return this.getNumberAttribute('db_operation_max_retry');
  }
  public set dbOperationMaxRetry(value: number) {
    this._dbOperationMaxRetry = value;
  }
  public resetDbOperationMaxRetry() {
    this._dbOperationMaxRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbOperationMaxRetryInput() {
    return this._dbOperationMaxRetry;
  }

  // db_process_running - computed: false, optional: true, required: false
  private _dbProcessRunning?: number; 
  public get dbProcessRunning() {
    return this.getNumberAttribute('db_process_running');
  }
  public set dbProcessRunning(value: number) {
    this._dbProcessRunning = value;
  }
  public resetDbProcessRunning() {
    this._dbProcessRunning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProcessRunningInput() {
    return this._dbProcessRunning;
  }

  // explicitly_stop_service - computed: false, optional: true, required: false
  private _explicitlyStopService?: number; 
  public get explicitlyStopService() {
    return this.getNumberAttribute('explicitly_stop_service');
  }
  public set explicitlyStopService(value: number) {
    this._explicitlyStopService = value;
  }
  public resetExplicitlyStopService() {
    this._explicitlyStopService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitlyStopServiceInput() {
    return this._explicitlyStopService;
  }

  // g_scaleout - computed: false, optional: true, required: false
  private _gScaleout?: number; 
  public get gScaleout() {
    return this.getNumberAttribute('g_scaleout');
  }
  public set gScaleout(value: number) {
    this._gScaleout = value;
  }
  public resetGScaleout() {
    this._gScaleout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gScaleoutInput() {
    return this._gScaleout;
  }

  // node_disable_in_prog - computed: false, optional: true, required: false
  private _nodeDisableInProg?: number; 
  public get nodeDisableInProg() {
    return this.getNumberAttribute('node_disable_in_prog');
  }
  public set nodeDisableInProg(value: number) {
    this._nodeDisableInProg = value;
  }
  public resetNodeDisableInProg() {
    this._nodeDisableInProg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDisableInProgInput() {
    return this._nodeDisableInProg;
  }

  // node_enable_in_prog - computed: false, optional: true, required: false
  private _nodeEnableInProg?: number; 
  public get nodeEnableInProg() {
    return this.getNumberAttribute('node_enable_in_prog');
  }
  public set nodeEnableInProg(value: number) {
    this._nodeEnableInProg = value;
  }
  public resetNodeEnableInProg() {
    this._nodeEnableInProg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeEnableInProgInput() {
    return this._nodeEnableInProg;
  }

  // pending_scaleout_exit - computed: false, optional: true, required: false
  private _pendingScaleoutExit?: number; 
  public get pendingScaleoutExit() {
    return this.getNumberAttribute('pending_scaleout_exit');
  }
  public set pendingScaleoutExit(value: number) {
    this._pendingScaleoutExit = value;
  }
  public resetPendingScaleoutExit() {
    this._pendingScaleoutExit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingScaleoutExitInput() {
    return this._pendingScaleoutExit;
  }

  // perform_tracking_work - computed: false, optional: true, required: false
  private _performTrackingWork?: number; 
  public get performTrackingWork() {
    return this.getNumberAttribute('perform_tracking_work');
  }
  public set performTrackingWork(value: number) {
    this._performTrackingWork = value;
  }
  public resetPerformTrackingWork() {
    this._performTrackingWork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performTrackingWorkInput() {
    return this._performTrackingWork;
  }

  // scaleout_current_role - computed: false, optional: true, required: false
  private _scaleoutCurrentRole?: number; 
  public get scaleoutCurrentRole() {
    return this.getNumberAttribute('scaleout_current_role');
  }
  public set scaleoutCurrentRole(value: number) {
    this._scaleoutCurrentRole = value;
  }
  public resetScaleoutCurrentRole() {
    this._scaleoutCurrentRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutCurrentRoleInput() {
    return this._scaleoutCurrentRole;
  }

  // scaleout_enabled - computed: false, optional: true, required: false
  private _scaleoutEnabled?: number; 
  public get scaleoutEnabled() {
    return this.getNumberAttribute('scaleout_enabled');
  }
  public set scaleoutEnabled(value: number) {
    this._scaleoutEnabled = value;
  }
  public resetScaleoutEnabled() {
    this._scaleoutEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutEnabledInput() {
    return this._scaleoutEnabled;
  }

  // so_device_count - computed: false, optional: true, required: false
  private _soDeviceCount?: number; 
  public get soDeviceCount() {
    return this.getNumberAttribute('so_device_count');
  }
  public set soDeviceCount(value: number) {
    this._soDeviceCount = value;
  }
  public resetSoDeviceCount() {
    this._soDeviceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soDeviceCountInput() {
    return this._soDeviceCount;
  }

  // traffic_map_update - computed: false, optional: true, required: false
  private _trafficMapUpdate?: number; 
  public get trafficMapUpdate() {
    return this.getNumberAttribute('traffic_map_update');
  }
  public set trafficMapUpdate(value: number) {
    this._trafficMapUpdate = value;
  }
  public resetTrafficMapUpdate() {
    this._trafficMapUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMapUpdateInput() {
    return this._trafficMapUpdate;
  }

  // trigger_cluster_exit - computed: false, optional: true, required: false
  private _triggerClusterExit?: number; 
  public get triggerClusterExit() {
    return this.getNumberAttribute('trigger_cluster_exit');
  }
  public set triggerClusterExit(value: number) {
    this._triggerClusterExit = value;
  }
  public resetTriggerClusterExit() {
    this._triggerClusterExit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerClusterExitInput() {
    return this._triggerClusterExit;
  }

  // trigger_disable - computed: false, optional: true, required: false
  private _triggerDisable?: number; 
  public get triggerDisable() {
    return this.getNumberAttribute('trigger_disable');
  }
  public set triggerDisable(value: number) {
    this._triggerDisable = value;
  }
  public resetTriggerDisable() {
    this._triggerDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerDisableInput() {
    return this._triggerDisable;
  }

  // trigger_enable - computed: false, optional: true, required: false
  private _triggerEnable?: number; 
  public get triggerEnable() {
    return this.getNumberAttribute('trigger_enable');
  }
  public set triggerEnable(value: number) {
    this._triggerEnable = value;
  }
  public resetTriggerEnable() {
    this._triggerEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerEnableInput() {
    return this._triggerEnable;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper thunder_scaleout_debug_info_oper}
*/
export class DataThunderScaleoutDebugInfoOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_debug_info_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderScaleoutDebugInfoOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderScaleoutDebugInfoOper to import
  * @param importFromId The id of the existing DataThunderScaleoutDebugInfoOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderScaleoutDebugInfoOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_debug_info_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/scaleout_debug_info_oper thunder_scaleout_debug_info_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderScaleoutDebugInfoOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderScaleoutDebugInfoOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_debug_info_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderScaleoutDebugInfoOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderScaleoutDebugInfoOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderScaleoutDebugInfoOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderScaleoutDebugInfoOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderScaleoutDebugInfoOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
