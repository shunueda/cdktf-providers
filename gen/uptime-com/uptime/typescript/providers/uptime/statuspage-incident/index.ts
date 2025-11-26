// https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatuspageIncidentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#affected_components StatuspageIncident#affected_components}
  */
  readonly affectedComponents?: StatuspageIncidentAffectedComponents[] | cdktf.IResolvable;
  /**
  * When this incident ended in GMT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#ends_at StatuspageIncident#ends_at}
  */
  readonly endsAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#incident_type StatuspageIncident#incident_type}
  */
  readonly incidentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#include_in_global_metrics StatuspageIncident#include_in_global_metrics}
  */
  readonly includeInGlobalMetrics?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#name StatuspageIncident#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#notify_subscribers StatuspageIncident#notify_subscribers}
  */
  readonly notifySubscribers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#send_maintenance_start_notification StatuspageIncident#send_maintenance_start_notification}
  */
  readonly sendMaintenanceStartNotification?: boolean | cdktf.IResolvable;
  /**
  * When this incident occurred in GMT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#starts_at StatuspageIncident#starts_at}
  */
  readonly startsAt: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#statuspage_id StatuspageIncident#statuspage_id}
  */
  readonly statuspageId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#update_component_status StatuspageIncident#update_component_status}
  */
  readonly updateComponentStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#updates StatuspageIncident#updates}
  */
  readonly updates: StatuspageIncidentUpdates[] | cdktf.IResolvable;
}
export interface StatuspageIncidentAffectedComponents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#component_id StatuspageIncident#component_id}
  */
  readonly componentId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#status StatuspageIncident#status}
  */
  readonly status?: string;
}

export function statuspageIncidentAffectedComponentsToTerraform(struct?: StatuspageIncidentAffectedComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_id: cdktf.numberToTerraform(struct!.componentId),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function statuspageIncidentAffectedComponentsToHclTerraform(struct?: StatuspageIncidentAffectedComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_id: {
      value: cdktf.numberToHclTerraform(struct!.componentId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatuspageIncidentAffectedComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatuspageIncidentAffectedComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentId = this._componentId;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatuspageIncidentAffectedComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentId = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentId = value.componentId;
      this._status = value.status;
    }
  }

  // component_id - computed: true, optional: false, required: true
  private _componentId?: number; 
  public get componentId() {
    return this.getNumberAttribute('component_id');
  }
  public set componentId(value: number) {
    this._componentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentIdInput() {
    return this._componentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class StatuspageIncidentAffectedComponentsList extends cdktf.ComplexList {
  public internalValue? : StatuspageIncidentAffectedComponents[] | cdktf.IResolvable

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
  public get(index: number): StatuspageIncidentAffectedComponentsOutputReference {
    return new StatuspageIncidentAffectedComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatuspageIncidentUpdates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#description StatuspageIncident#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#incident_state StatuspageIncident#incident_state}
  */
  readonly incidentState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#updated_at StatuspageIncident#updated_at}
  */
  readonly updatedAt: string;
}

export function statuspageIncidentUpdatesToTerraform(struct?: StatuspageIncidentUpdates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    incident_state: cdktf.stringToTerraform(struct!.incidentState),
    updated_at: cdktf.stringToTerraform(struct!.updatedAt),
  }
}


export function statuspageIncidentUpdatesToHclTerraform(struct?: StatuspageIncidentUpdates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_state: {
      value: cdktf.stringToHclTerraform(struct!.incidentState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    updated_at: {
      value: cdktf.stringToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatuspageIncidentUpdatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatuspageIncidentUpdates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._incidentState !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentState = this._incidentState;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatuspageIncidentUpdates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._incidentState = undefined;
      this._updatedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._incidentState = value.incidentState;
      this._updatedAt = value.updatedAt;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // incident_state - computed: true, optional: true, required: false
  private _incidentState?: string; 
  public get incidentState() {
    return this.getStringAttribute('incident_state');
  }
  public set incidentState(value: string) {
    this._incidentState = value;
  }
  public resetIncidentState() {
    this._incidentState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentStateInput() {
    return this._incidentState;
  }

  // updated_at - computed: false, optional: false, required: true
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }
}

export class StatuspageIncidentUpdatesList extends cdktf.ComplexList {
  public internalValue? : StatuspageIncidentUpdates[] | cdktf.IResolvable

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
  public get(index: number): StatuspageIncidentUpdatesOutputReference {
    return new StatuspageIncidentUpdatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident uptime_statuspage_incident}
*/
export class StatuspageIncident extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_statuspage_incident";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StatuspageIncident resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StatuspageIncident to import
  * @param importFromId The id of the existing StatuspageIncident that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StatuspageIncident to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_statuspage_incident", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.0/docs/resources/statuspage_incident uptime_statuspage_incident} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatuspageIncidentConfig
  */
  public constructor(scope: Construct, id: string, config: StatuspageIncidentConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_statuspage_incident',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._affectedComponents.internalValue = config.affectedComponents;
    this._endsAt = config.endsAt;
    this._incidentType = config.incidentType;
    this._includeInGlobalMetrics = config.includeInGlobalMetrics;
    this._name = config.name;
    this._notifySubscribers = config.notifySubscribers;
    this._sendMaintenanceStartNotification = config.sendMaintenanceStartNotification;
    this._startsAt = config.startsAt;
    this._statuspageId = config.statuspageId;
    this._updateComponentStatus = config.updateComponentStatus;
    this._updates.internalValue = config.updates;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affected_components - computed: true, optional: true, required: false
  private _affectedComponents = new StatuspageIncidentAffectedComponentsList(this, "affected_components", true);
  public get affectedComponents() {
    return this._affectedComponents;
  }
  public putAffectedComponents(value: StatuspageIncidentAffectedComponents[] | cdktf.IResolvable) {
    this._affectedComponents.internalValue = value;
  }
  public resetAffectedComponents() {
    this._affectedComponents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affectedComponentsInput() {
    return this._affectedComponents.internalValue;
  }

  // ends_at - computed: true, optional: true, required: false
  private _endsAt?: string; 
  public get endsAt() {
    return this.getStringAttribute('ends_at');
  }
  public set endsAt(value: string) {
    this._endsAt = value;
  }
  public resetEndsAt() {
    this._endsAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endsAtInput() {
    return this._endsAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // incident_type - computed: true, optional: true, required: false
  private _incidentType?: string; 
  public get incidentType() {
    return this.getStringAttribute('incident_type');
  }
  public set incidentType(value: string) {
    this._incidentType = value;
  }
  public resetIncidentType() {
    this._incidentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTypeInput() {
    return this._incidentType;
  }

  // include_in_global_metrics - computed: true, optional: true, required: false
  private _includeInGlobalMetrics?: boolean | cdktf.IResolvable; 
  public get includeInGlobalMetrics() {
    return this.getBooleanAttribute('include_in_global_metrics');
  }
  public set includeInGlobalMetrics(value: boolean | cdktf.IResolvable) {
    this._includeInGlobalMetrics = value;
  }
  public resetIncludeInGlobalMetrics() {
    this._includeInGlobalMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInGlobalMetricsInput() {
    return this._includeInGlobalMetrics;
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

  // notify_subscribers - computed: true, optional: true, required: false
  private _notifySubscribers?: boolean | cdktf.IResolvable; 
  public get notifySubscribers() {
    return this.getBooleanAttribute('notify_subscribers');
  }
  public set notifySubscribers(value: boolean | cdktf.IResolvable) {
    this._notifySubscribers = value;
  }
  public resetNotifySubscribers() {
    this._notifySubscribers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifySubscribersInput() {
    return this._notifySubscribers;
  }

  // send_maintenance_start_notification - computed: true, optional: true, required: false
  private _sendMaintenanceStartNotification?: boolean | cdktf.IResolvable; 
  public get sendMaintenanceStartNotification() {
    return this.getBooleanAttribute('send_maintenance_start_notification');
  }
  public set sendMaintenanceStartNotification(value: boolean | cdktf.IResolvable) {
    this._sendMaintenanceStartNotification = value;
  }
  public resetSendMaintenanceStartNotification() {
    this._sendMaintenanceStartNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendMaintenanceStartNotificationInput() {
    return this._sendMaintenanceStartNotification;
  }

  // starts_at - computed: false, optional: false, required: true
  private _startsAt?: string; 
  public get startsAt() {
    return this.getStringAttribute('starts_at');
  }
  public set startsAt(value: string) {
    this._startsAt = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startsAtInput() {
    return this._startsAt;
  }

  // statuspage_id - computed: false, optional: false, required: true
  private _statuspageId?: number; 
  public get statuspageId() {
    return this.getNumberAttribute('statuspage_id');
  }
  public set statuspageId(value: number) {
    this._statuspageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statuspageIdInput() {
    return this._statuspageId;
  }

  // update_component_status - computed: true, optional: true, required: false
  private _updateComponentStatus?: boolean | cdktf.IResolvable; 
  public get updateComponentStatus() {
    return this.getBooleanAttribute('update_component_status');
  }
  public set updateComponentStatus(value: boolean | cdktf.IResolvable) {
    this._updateComponentStatus = value;
  }
  public resetUpdateComponentStatus() {
    this._updateComponentStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateComponentStatusInput() {
    return this._updateComponentStatus;
  }

  // updates - computed: false, optional: false, required: true
  private _updates = new StatuspageIncidentUpdatesList(this, "updates", true);
  public get updates() {
    return this._updates;
  }
  public putUpdates(value: StatuspageIncidentUpdates[] | cdktf.IResolvable) {
    this._updates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updatesInput() {
    return this._updates.internalValue;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      affected_components: cdktf.listMapper(statuspageIncidentAffectedComponentsToTerraform, false)(this._affectedComponents.internalValue),
      ends_at: cdktf.stringToTerraform(this._endsAt),
      incident_type: cdktf.stringToTerraform(this._incidentType),
      include_in_global_metrics: cdktf.booleanToTerraform(this._includeInGlobalMetrics),
      name: cdktf.stringToTerraform(this._name),
      notify_subscribers: cdktf.booleanToTerraform(this._notifySubscribers),
      send_maintenance_start_notification: cdktf.booleanToTerraform(this._sendMaintenanceStartNotification),
      starts_at: cdktf.stringToTerraform(this._startsAt),
      statuspage_id: cdktf.numberToTerraform(this._statuspageId),
      update_component_status: cdktf.booleanToTerraform(this._updateComponentStatus),
      updates: cdktf.listMapper(statuspageIncidentUpdatesToTerraform, false)(this._updates.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      affected_components: {
        value: cdktf.listMapperHcl(statuspageIncidentAffectedComponentsToHclTerraform, false)(this._affectedComponents.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StatuspageIncidentAffectedComponentsList",
      },
      ends_at: {
        value: cdktf.stringToHclTerraform(this._endsAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incident_type: {
        value: cdktf.stringToHclTerraform(this._incidentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_in_global_metrics: {
        value: cdktf.booleanToHclTerraform(this._includeInGlobalMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_subscribers: {
        value: cdktf.booleanToHclTerraform(this._notifySubscribers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      send_maintenance_start_notification: {
        value: cdktf.booleanToHclTerraform(this._sendMaintenanceStartNotification),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      starts_at: {
        value: cdktf.stringToHclTerraform(this._startsAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statuspage_id: {
        value: cdktf.numberToHclTerraform(this._statuspageId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update_component_status: {
        value: cdktf.booleanToHclTerraform(this._updateComponentStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      updates: {
        value: cdktf.listMapperHcl(statuspageIncidentUpdatesToHclTerraform, false)(this._updates.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StatuspageIncidentUpdatesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
