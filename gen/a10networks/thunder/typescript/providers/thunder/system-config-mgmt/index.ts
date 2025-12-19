// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemConfigMgmtAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Allow deletion of referenced tagged objects. Default option.; 'disable': Block deletion of referenced tagged objects;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt#delete_referenced_tagged_objects SystemConfigMgmtA#delete_referenced_tagged_objects}
  */
  readonly deleteReferencedTaggedObjects?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt#id SystemConfigMgmtA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt#uuid SystemConfigMgmtA#uuid}
  */
  readonly uuid?: string;
  /**
  * mpm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt#mpm SystemConfigMgmtA#mpm}
  */
  readonly mpm?: SystemConfigMgmtMpmA;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt#notification SystemConfigMgmtA#notification}
  */
  readonly notification?: SystemConfigMgmtNotificationA;
  /**
  * pu_sync_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt#pu_sync_detection SystemConfigMgmtA#pu_sync_detection}
  */
  readonly puSyncDetection?: SystemConfigMgmtPuSyncDetectionA;
}
export interface SystemConfigMgmtMpmA {
  /**
  * Set max workers count. Default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt#max_workers SystemConfigMgmtA#max_workers}
  */
  readonly maxWorkers?: number;
  /**
  * Set minimum idle workers count. Default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt#min_idle_workers SystemConfigMgmtA#min_idle_workers}
  */
  readonly minIdleWorkers?: number;
  /**
  * Set starting workers count. Default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt#start_workers SystemConfigMgmtA#start_workers}
  */
  readonly startWorkers?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt#uuid SystemConfigMgmtA#uuid}
  */
  readonly uuid?: string;
}

export function systemConfigMgmtMpmAToTerraform(struct?: SystemConfigMgmtMpmAOutputReference | SystemConfigMgmtMpmA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_workers: cdktf.numberToTerraform(struct!.maxWorkers),
    min_idle_workers: cdktf.numberToTerraform(struct!.minIdleWorkers),
    start_workers: cdktf.numberToTerraform(struct!.startWorkers),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemConfigMgmtMpmAToHclTerraform(struct?: SystemConfigMgmtMpmAOutputReference | SystemConfigMgmtMpmA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_workers: {
      value: cdktf.numberToHclTerraform(struct!.maxWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_idle_workers: {
      value: cdktf.numberToHclTerraform(struct!.minIdleWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_workers: {
      value: cdktf.numberToHclTerraform(struct!.startWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SystemConfigMgmtMpmAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemConfigMgmtMpmA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkers = this._maxWorkers;
    }
    if (this._minIdleWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIdleWorkers = this._minIdleWorkers;
    }
    if (this._startWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.startWorkers = this._startWorkers;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemConfigMgmtMpmA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxWorkers = undefined;
      this._minIdleWorkers = undefined;
      this._startWorkers = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxWorkers = value.maxWorkers;
      this._minIdleWorkers = value.minIdleWorkers;
      this._startWorkers = value.startWorkers;
      this._uuid = value.uuid;
    }
  }

  // max_workers - computed: false, optional: true, required: false
  private _maxWorkers?: number; 
  public get maxWorkers() {
    return this.getNumberAttribute('max_workers');
  }
  public set maxWorkers(value: number) {
    this._maxWorkers = value;
  }
  public resetMaxWorkers() {
    this._maxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkersInput() {
    return this._maxWorkers;
  }

  // min_idle_workers - computed: false, optional: true, required: false
  private _minIdleWorkers?: number; 
  public get minIdleWorkers() {
    return this.getNumberAttribute('min_idle_workers');
  }
  public set minIdleWorkers(value: number) {
    this._minIdleWorkers = value;
  }
  public resetMinIdleWorkers() {
    this._minIdleWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleWorkersInput() {
    return this._minIdleWorkers;
  }

  // start_workers - computed: false, optional: true, required: false
  private _startWorkers?: number; 
  public get startWorkers() {
    return this.getNumberAttribute('start_workers');
  }
  public set startWorkers(value: number) {
    this._startWorkers = value;
  }
  public resetStartWorkers() {
    this._startWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startWorkersInput() {
    return this._startWorkers;
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
export interface SystemConfigMgmtNotificationA {
  /**
  * Time interval (seconds) for kafka notification. Default is 15 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt#period SystemConfigMgmtA#period}
  */
  readonly period?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt#uuid SystemConfigMgmtA#uuid}
  */
  readonly uuid?: string;
}

export function systemConfigMgmtNotificationAToTerraform(struct?: SystemConfigMgmtNotificationAOutputReference | SystemConfigMgmtNotificationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period: cdktf.numberToTerraform(struct!.period),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemConfigMgmtNotificationAToHclTerraform(struct?: SystemConfigMgmtNotificationAOutputReference | SystemConfigMgmtNotificationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SystemConfigMgmtNotificationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemConfigMgmtNotificationA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemConfigMgmtNotificationA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._period = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._period = value.period;
      this._uuid = value.uuid;
    }
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
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
export interface SystemConfigMgmtPuSyncDetectionA {
  /**
  * 'enable': Enable pu-sync-detection feature; 'disable': Disable pu-sync-detection feature;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt#action SystemConfigMgmtA#action}
  */
  readonly action?: string;
  /**
  * Time interval (seconds) for detection. Default is 30 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt#interval SystemConfigMgmtA#interval}
  */
  readonly interval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt#uuid SystemConfigMgmtA#uuid}
  */
  readonly uuid?: string;
}

export function systemConfigMgmtPuSyncDetectionAToTerraform(struct?: SystemConfigMgmtPuSyncDetectionAOutputReference | SystemConfigMgmtPuSyncDetectionA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    interval: cdktf.numberToTerraform(struct!.interval),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function systemConfigMgmtPuSyncDetectionAToHclTerraform(struct?: SystemConfigMgmtPuSyncDetectionAOutputReference | SystemConfigMgmtPuSyncDetectionA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class SystemConfigMgmtPuSyncDetectionAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemConfigMgmtPuSyncDetectionA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemConfigMgmtPuSyncDetectionA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._interval = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._interval = value.interval;
      this._uuid = value.uuid;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt thunder_system_config_mgmt}
*/
export class SystemConfigMgmtA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_config_mgmt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemConfigMgmtA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemConfigMgmtA to import
  * @param importFromId The id of the existing SystemConfigMgmtA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemConfigMgmtA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_config_mgmt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_config_mgmt thunder_system_config_mgmt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemConfigMgmtAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemConfigMgmtAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_config_mgmt',
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
    this._deleteReferencedTaggedObjects = config.deleteReferencedTaggedObjects;
    this._id = config.id;
    this._uuid = config.uuid;
    this._mpm.internalValue = config.mpm;
    this._notification.internalValue = config.notification;
    this._puSyncDetection.internalValue = config.puSyncDetection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_referenced_tagged_objects - computed: false, optional: true, required: false
  private _deleteReferencedTaggedObjects?: string; 
  public get deleteReferencedTaggedObjects() {
    return this.getStringAttribute('delete_referenced_tagged_objects');
  }
  public set deleteReferencedTaggedObjects(value: string) {
    this._deleteReferencedTaggedObjects = value;
  }
  public resetDeleteReferencedTaggedObjects() {
    this._deleteReferencedTaggedObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteReferencedTaggedObjectsInput() {
    return this._deleteReferencedTaggedObjects;
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

  // mpm - computed: false, optional: true, required: false
  private _mpm = new SystemConfigMgmtMpmAOutputReference(this, "mpm");
  public get mpm() {
    return this._mpm;
  }
  public putMpm(value: SystemConfigMgmtMpmA) {
    this._mpm.internalValue = value;
  }
  public resetMpm() {
    this._mpm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpmInput() {
    return this._mpm.internalValue;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new SystemConfigMgmtNotificationAOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: SystemConfigMgmtNotificationA) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // pu_sync_detection - computed: false, optional: true, required: false
  private _puSyncDetection = new SystemConfigMgmtPuSyncDetectionAOutputReference(this, "pu_sync_detection");
  public get puSyncDetection() {
    return this._puSyncDetection;
  }
  public putPuSyncDetection(value: SystemConfigMgmtPuSyncDetectionA) {
    this._puSyncDetection.internalValue = value;
  }
  public resetPuSyncDetection() {
    this._puSyncDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get puSyncDetectionInput() {
    return this._puSyncDetection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_referenced_tagged_objects: cdktf.stringToTerraform(this._deleteReferencedTaggedObjects),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      mpm: systemConfigMgmtMpmAToTerraform(this._mpm.internalValue),
      notification: systemConfigMgmtNotificationAToTerraform(this._notification.internalValue),
      pu_sync_detection: systemConfigMgmtPuSyncDetectionAToTerraform(this._puSyncDetection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_referenced_tagged_objects: {
        value: cdktf.stringToHclTerraform(this._deleteReferencedTaggedObjects),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mpm: {
        value: systemConfigMgmtMpmAToHclTerraform(this._mpm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemConfigMgmtMpmAList",
      },
      notification: {
        value: systemConfigMgmtNotificationAToHclTerraform(this._notification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemConfigMgmtNotificationAList",
      },
      pu_sync_detection: {
        value: systemConfigMgmtPuSyncDetectionAToHclTerraform(this._puSyncDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemConfigMgmtPuSyncDetectionAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
