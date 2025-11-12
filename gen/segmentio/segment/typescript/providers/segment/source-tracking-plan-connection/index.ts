// https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceTrackingPlanConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The schema settings associated with the Source. Upon import, this field will be empty even if the settings have already been configured due to Terraform limitations, but will be populated on the first apply. Fields not present in the config will not be managed by Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#schema_settings SourceTrackingPlanConnection#schema_settings}
  */
  readonly schemaSettings?: SourceTrackingPlanConnectionSchemaSettings;
  /**
  * The id of the Source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#source_id SourceTrackingPlanConnection#source_id}
  */
  readonly sourceId: string;
  /**
  * The id of the Tracking Plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#tracking_plan_id SourceTrackingPlanConnection#tracking_plan_id}
  */
  readonly trackingPlanId: string;
}
export interface SourceTrackingPlanConnectionSchemaSettingsGroup {
  /**
  * Enable to allow group traits on violations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#allow_traits_on_violations SourceTrackingPlanConnection#allow_traits_on_violations}
  */
  readonly allowTraitsOnViolations?: boolean | cdktf.IResolvable;
  /**
  * Enable to allow unplanned group traits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#allow_unplanned_traits SourceTrackingPlanConnection#allow_unplanned_traits}
  */
  readonly allowUnplannedTraits?: boolean | cdktf.IResolvable;
  /**
  * The common group event on violations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#common_event_on_violations SourceTrackingPlanConnection#common_event_on_violations}
  */
  readonly commonEventOnViolations?: string;
}

export function sourceTrackingPlanConnectionSchemaSettingsGroupToTerraform(struct?: SourceTrackingPlanConnectionSchemaSettingsGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_traits_on_violations: cdktf.booleanToTerraform(struct!.allowTraitsOnViolations),
    allow_unplanned_traits: cdktf.booleanToTerraform(struct!.allowUnplannedTraits),
    common_event_on_violations: cdktf.stringToTerraform(struct!.commonEventOnViolations),
  }
}


export function sourceTrackingPlanConnectionSchemaSettingsGroupToHclTerraform(struct?: SourceTrackingPlanConnectionSchemaSettingsGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_traits_on_violations: {
      value: cdktf.booleanToHclTerraform(struct!.allowTraitsOnViolations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_unplanned_traits: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnplannedTraits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    common_event_on_violations: {
      value: cdktf.stringToHclTerraform(struct!.commonEventOnViolations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceTrackingPlanConnectionSchemaSettingsGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceTrackingPlanConnectionSchemaSettingsGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowTraitsOnViolations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTraitsOnViolations = this._allowTraitsOnViolations;
    }
    if (this._allowUnplannedTraits !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnplannedTraits = this._allowUnplannedTraits;
    }
    if (this._commonEventOnViolations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonEventOnViolations = this._commonEventOnViolations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceTrackingPlanConnectionSchemaSettingsGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowTraitsOnViolations = undefined;
      this._allowUnplannedTraits = undefined;
      this._commonEventOnViolations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowTraitsOnViolations = value.allowTraitsOnViolations;
      this._allowUnplannedTraits = value.allowUnplannedTraits;
      this._commonEventOnViolations = value.commonEventOnViolations;
    }
  }

  // allow_traits_on_violations - computed: false, optional: true, required: false
  private _allowTraitsOnViolations?: boolean | cdktf.IResolvable; 
  public get allowTraitsOnViolations() {
    return this.getBooleanAttribute('allow_traits_on_violations');
  }
  public set allowTraitsOnViolations(value: boolean | cdktf.IResolvable) {
    this._allowTraitsOnViolations = value;
  }
  public resetAllowTraitsOnViolations() {
    this._allowTraitsOnViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTraitsOnViolationsInput() {
    return this._allowTraitsOnViolations;
  }

  // allow_unplanned_traits - computed: false, optional: true, required: false
  private _allowUnplannedTraits?: boolean | cdktf.IResolvable; 
  public get allowUnplannedTraits() {
    return this.getBooleanAttribute('allow_unplanned_traits');
  }
  public set allowUnplannedTraits(value: boolean | cdktf.IResolvable) {
    this._allowUnplannedTraits = value;
  }
  public resetAllowUnplannedTraits() {
    this._allowUnplannedTraits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnplannedTraitsInput() {
    return this._allowUnplannedTraits;
  }

  // common_event_on_violations - computed: false, optional: true, required: false
  private _commonEventOnViolations?: string; 
  public get commonEventOnViolations() {
    return this.getStringAttribute('common_event_on_violations');
  }
  public set commonEventOnViolations(value: string) {
    this._commonEventOnViolations = value;
  }
  public resetCommonEventOnViolations() {
    this._commonEventOnViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonEventOnViolationsInput() {
    return this._commonEventOnViolations;
  }
}
export interface SourceTrackingPlanConnectionSchemaSettingsIdentify {
  /**
  * Enable to allow identify traits on violations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#allow_traits_on_violations SourceTrackingPlanConnection#allow_traits_on_violations}
  */
  readonly allowTraitsOnViolations?: boolean | cdktf.IResolvable;
  /**
  * Enable to allow unplanned identify traits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#allow_unplanned_traits SourceTrackingPlanConnection#allow_unplanned_traits}
  */
  readonly allowUnplannedTraits?: boolean | cdktf.IResolvable;
  /**
  * The common identify event on violations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#common_event_on_violations SourceTrackingPlanConnection#common_event_on_violations}
  */
  readonly commonEventOnViolations?: string;
}

export function sourceTrackingPlanConnectionSchemaSettingsIdentifyToTerraform(struct?: SourceTrackingPlanConnectionSchemaSettingsIdentify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_traits_on_violations: cdktf.booleanToTerraform(struct!.allowTraitsOnViolations),
    allow_unplanned_traits: cdktf.booleanToTerraform(struct!.allowUnplannedTraits),
    common_event_on_violations: cdktf.stringToTerraform(struct!.commonEventOnViolations),
  }
}


export function sourceTrackingPlanConnectionSchemaSettingsIdentifyToHclTerraform(struct?: SourceTrackingPlanConnectionSchemaSettingsIdentify | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_traits_on_violations: {
      value: cdktf.booleanToHclTerraform(struct!.allowTraitsOnViolations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_unplanned_traits: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnplannedTraits),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    common_event_on_violations: {
      value: cdktf.stringToHclTerraform(struct!.commonEventOnViolations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceTrackingPlanConnectionSchemaSettingsIdentifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceTrackingPlanConnectionSchemaSettingsIdentify | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowTraitsOnViolations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTraitsOnViolations = this._allowTraitsOnViolations;
    }
    if (this._allowUnplannedTraits !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnplannedTraits = this._allowUnplannedTraits;
    }
    if (this._commonEventOnViolations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonEventOnViolations = this._commonEventOnViolations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceTrackingPlanConnectionSchemaSettingsIdentify | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowTraitsOnViolations = undefined;
      this._allowUnplannedTraits = undefined;
      this._commonEventOnViolations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowTraitsOnViolations = value.allowTraitsOnViolations;
      this._allowUnplannedTraits = value.allowUnplannedTraits;
      this._commonEventOnViolations = value.commonEventOnViolations;
    }
  }

  // allow_traits_on_violations - computed: false, optional: true, required: false
  private _allowTraitsOnViolations?: boolean | cdktf.IResolvable; 
  public get allowTraitsOnViolations() {
    return this.getBooleanAttribute('allow_traits_on_violations');
  }
  public set allowTraitsOnViolations(value: boolean | cdktf.IResolvable) {
    this._allowTraitsOnViolations = value;
  }
  public resetAllowTraitsOnViolations() {
    this._allowTraitsOnViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTraitsOnViolationsInput() {
    return this._allowTraitsOnViolations;
  }

  // allow_unplanned_traits - computed: false, optional: true, required: false
  private _allowUnplannedTraits?: boolean | cdktf.IResolvable; 
  public get allowUnplannedTraits() {
    return this.getBooleanAttribute('allow_unplanned_traits');
  }
  public set allowUnplannedTraits(value: boolean | cdktf.IResolvable) {
    this._allowUnplannedTraits = value;
  }
  public resetAllowUnplannedTraits() {
    this._allowUnplannedTraits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnplannedTraitsInput() {
    return this._allowUnplannedTraits;
  }

  // common_event_on_violations - computed: false, optional: true, required: false
  private _commonEventOnViolations?: string; 
  public get commonEventOnViolations() {
    return this.getStringAttribute('common_event_on_violations');
  }
  public set commonEventOnViolations(value: string) {
    this._commonEventOnViolations = value;
  }
  public resetCommonEventOnViolations() {
    this._commonEventOnViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonEventOnViolationsInput() {
    return this._commonEventOnViolations;
  }
}
export interface SourceTrackingPlanConnectionSchemaSettingsTrack {
  /**
  * Allow track event on violations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#allow_event_on_violations SourceTrackingPlanConnection#allow_event_on_violations}
  */
  readonly allowEventOnViolations?: boolean | cdktf.IResolvable;
  /**
  * Enable to allow track properties on violations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#allow_properties_on_violations SourceTrackingPlanConnection#allow_properties_on_violations}
  */
  readonly allowPropertiesOnViolations?: boolean | cdktf.IResolvable;
  /**
  * Enable to allow unplanned track event properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#allow_unplanned_event_properties SourceTrackingPlanConnection#allow_unplanned_event_properties}
  */
  readonly allowUnplannedEventProperties?: boolean | cdktf.IResolvable;
  /**
  * Enable to allow unplanned track events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#allow_unplanned_events SourceTrackingPlanConnection#allow_unplanned_events}
  */
  readonly allowUnplannedEvents?: boolean | cdktf.IResolvable;
  /**
  * The common track event on violations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#common_event_on_violations SourceTrackingPlanConnection#common_event_on_violations}
  */
  readonly commonEventOnViolations?: string;
}

export function sourceTrackingPlanConnectionSchemaSettingsTrackToTerraform(struct?: SourceTrackingPlanConnectionSchemaSettingsTrack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_event_on_violations: cdktf.booleanToTerraform(struct!.allowEventOnViolations),
    allow_properties_on_violations: cdktf.booleanToTerraform(struct!.allowPropertiesOnViolations),
    allow_unplanned_event_properties: cdktf.booleanToTerraform(struct!.allowUnplannedEventProperties),
    allow_unplanned_events: cdktf.booleanToTerraform(struct!.allowUnplannedEvents),
    common_event_on_violations: cdktf.stringToTerraform(struct!.commonEventOnViolations),
  }
}


export function sourceTrackingPlanConnectionSchemaSettingsTrackToHclTerraform(struct?: SourceTrackingPlanConnectionSchemaSettingsTrack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_event_on_violations: {
      value: cdktf.booleanToHclTerraform(struct!.allowEventOnViolations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_properties_on_violations: {
      value: cdktf.booleanToHclTerraform(struct!.allowPropertiesOnViolations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_unplanned_event_properties: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnplannedEventProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_unplanned_events: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnplannedEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    common_event_on_violations: {
      value: cdktf.stringToHclTerraform(struct!.commonEventOnViolations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceTrackingPlanConnectionSchemaSettingsTrackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceTrackingPlanConnectionSchemaSettingsTrack | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEventOnViolations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEventOnViolations = this._allowEventOnViolations;
    }
    if (this._allowPropertiesOnViolations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPropertiesOnViolations = this._allowPropertiesOnViolations;
    }
    if (this._allowUnplannedEventProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnplannedEventProperties = this._allowUnplannedEventProperties;
    }
    if (this._allowUnplannedEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnplannedEvents = this._allowUnplannedEvents;
    }
    if (this._commonEventOnViolations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonEventOnViolations = this._commonEventOnViolations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceTrackingPlanConnectionSchemaSettingsTrack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowEventOnViolations = undefined;
      this._allowPropertiesOnViolations = undefined;
      this._allowUnplannedEventProperties = undefined;
      this._allowUnplannedEvents = undefined;
      this._commonEventOnViolations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowEventOnViolations = value.allowEventOnViolations;
      this._allowPropertiesOnViolations = value.allowPropertiesOnViolations;
      this._allowUnplannedEventProperties = value.allowUnplannedEventProperties;
      this._allowUnplannedEvents = value.allowUnplannedEvents;
      this._commonEventOnViolations = value.commonEventOnViolations;
    }
  }

  // allow_event_on_violations - computed: false, optional: true, required: false
  private _allowEventOnViolations?: boolean | cdktf.IResolvable; 
  public get allowEventOnViolations() {
    return this.getBooleanAttribute('allow_event_on_violations');
  }
  public set allowEventOnViolations(value: boolean | cdktf.IResolvable) {
    this._allowEventOnViolations = value;
  }
  public resetAllowEventOnViolations() {
    this._allowEventOnViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEventOnViolationsInput() {
    return this._allowEventOnViolations;
  }

  // allow_properties_on_violations - computed: false, optional: true, required: false
  private _allowPropertiesOnViolations?: boolean | cdktf.IResolvable; 
  public get allowPropertiesOnViolations() {
    return this.getBooleanAttribute('allow_properties_on_violations');
  }
  public set allowPropertiesOnViolations(value: boolean | cdktf.IResolvable) {
    this._allowPropertiesOnViolations = value;
  }
  public resetAllowPropertiesOnViolations() {
    this._allowPropertiesOnViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPropertiesOnViolationsInput() {
    return this._allowPropertiesOnViolations;
  }

  // allow_unplanned_event_properties - computed: false, optional: true, required: false
  private _allowUnplannedEventProperties?: boolean | cdktf.IResolvable; 
  public get allowUnplannedEventProperties() {
    return this.getBooleanAttribute('allow_unplanned_event_properties');
  }
  public set allowUnplannedEventProperties(value: boolean | cdktf.IResolvable) {
    this._allowUnplannedEventProperties = value;
  }
  public resetAllowUnplannedEventProperties() {
    this._allowUnplannedEventProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnplannedEventPropertiesInput() {
    return this._allowUnplannedEventProperties;
  }

  // allow_unplanned_events - computed: false, optional: true, required: false
  private _allowUnplannedEvents?: boolean | cdktf.IResolvable; 
  public get allowUnplannedEvents() {
    return this.getBooleanAttribute('allow_unplanned_events');
  }
  public set allowUnplannedEvents(value: boolean | cdktf.IResolvable) {
    this._allowUnplannedEvents = value;
  }
  public resetAllowUnplannedEvents() {
    this._allowUnplannedEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnplannedEventsInput() {
    return this._allowUnplannedEvents;
  }

  // common_event_on_violations - computed: false, optional: true, required: false
  private _commonEventOnViolations?: string; 
  public get commonEventOnViolations() {
    return this.getStringAttribute('common_event_on_violations');
  }
  public set commonEventOnViolations(value: string) {
    this._commonEventOnViolations = value;
  }
  public resetCommonEventOnViolations() {
    this._commonEventOnViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonEventOnViolationsInput() {
    return this._commonEventOnViolations;
  }
}
export interface SourceTrackingPlanConnectionSchemaSettings {
  /**
  * Source id to forward blocked events to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#forwarding_blocked_events_to SourceTrackingPlanConnection#forwarding_blocked_events_to}
  */
  readonly forwardingBlockedEventsTo?: string;
  /**
  * Source id to forward violations to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#forwarding_violations_to SourceTrackingPlanConnection#forwarding_violations_to}
  */
  readonly forwardingViolationsTo?: string;
  /**
  * Group settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#group SourceTrackingPlanConnection#group}
  */
  readonly group?: SourceTrackingPlanConnectionSchemaSettingsGroup;
  /**
  * Identify settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#identify SourceTrackingPlanConnection#identify}
  */
  readonly identify?: SourceTrackingPlanConnectionSchemaSettingsIdentify;
  /**
  * Track settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#track SourceTrackingPlanConnection#track}
  */
  readonly track?: SourceTrackingPlanConnectionSchemaSettingsTrack;
}

export function sourceTrackingPlanConnectionSchemaSettingsToTerraform(struct?: SourceTrackingPlanConnectionSchemaSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarding_blocked_events_to: cdktf.stringToTerraform(struct!.forwardingBlockedEventsTo),
    forwarding_violations_to: cdktf.stringToTerraform(struct!.forwardingViolationsTo),
    group: sourceTrackingPlanConnectionSchemaSettingsGroupToTerraform(struct!.group),
    identify: sourceTrackingPlanConnectionSchemaSettingsIdentifyToTerraform(struct!.identify),
    track: sourceTrackingPlanConnectionSchemaSettingsTrackToTerraform(struct!.track),
  }
}


export function sourceTrackingPlanConnectionSchemaSettingsToHclTerraform(struct?: SourceTrackingPlanConnectionSchemaSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forwarding_blocked_events_to: {
      value: cdktf.stringToHclTerraform(struct!.forwardingBlockedEventsTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarding_violations_to: {
      value: cdktf.stringToHclTerraform(struct!.forwardingViolationsTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: sourceTrackingPlanConnectionSchemaSettingsGroupToHclTerraform(struct!.group),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceTrackingPlanConnectionSchemaSettingsGroup",
    },
    identify: {
      value: sourceTrackingPlanConnectionSchemaSettingsIdentifyToHclTerraform(struct!.identify),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceTrackingPlanConnectionSchemaSettingsIdentify",
    },
    track: {
      value: sourceTrackingPlanConnectionSchemaSettingsTrackToHclTerraform(struct!.track),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceTrackingPlanConnectionSchemaSettingsTrack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceTrackingPlanConnectionSchemaSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceTrackingPlanConnectionSchemaSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardingBlockedEventsTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingBlockedEventsTo = this._forwardingBlockedEventsTo;
    }
    if (this._forwardingViolationsTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingViolationsTo = this._forwardingViolationsTo;
    }
    if (this._group?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group?.internalValue;
    }
    if (this._identify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identify = this._identify?.internalValue;
    }
    if (this._track?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.track = this._track?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceTrackingPlanConnectionSchemaSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardingBlockedEventsTo = undefined;
      this._forwardingViolationsTo = undefined;
      this._group.internalValue = undefined;
      this._identify.internalValue = undefined;
      this._track.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardingBlockedEventsTo = value.forwardingBlockedEventsTo;
      this._forwardingViolationsTo = value.forwardingViolationsTo;
      this._group.internalValue = value.group;
      this._identify.internalValue = value.identify;
      this._track.internalValue = value.track;
    }
  }

  // forwarding_blocked_events_to - computed: false, optional: true, required: false
  private _forwardingBlockedEventsTo?: string; 
  public get forwardingBlockedEventsTo() {
    return this.getStringAttribute('forwarding_blocked_events_to');
  }
  public set forwardingBlockedEventsTo(value: string) {
    this._forwardingBlockedEventsTo = value;
  }
  public resetForwardingBlockedEventsTo() {
    this._forwardingBlockedEventsTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingBlockedEventsToInput() {
    return this._forwardingBlockedEventsTo;
  }

  // forwarding_violations_to - computed: false, optional: true, required: false
  private _forwardingViolationsTo?: string; 
  public get forwardingViolationsTo() {
    return this.getStringAttribute('forwarding_violations_to');
  }
  public set forwardingViolationsTo(value: string) {
    this._forwardingViolationsTo = value;
  }
  public resetForwardingViolationsTo() {
    this._forwardingViolationsTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingViolationsToInput() {
    return this._forwardingViolationsTo;
  }

  // group - computed: false, optional: true, required: false
  private _group = new SourceTrackingPlanConnectionSchemaSettingsGroupOutputReference(this, "group");
  public get group() {
    return this._group;
  }
  public putGroup(value: SourceTrackingPlanConnectionSchemaSettingsGroup) {
    this._group.internalValue = value;
  }
  public resetGroup() {
    this._group.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group.internalValue;
  }

  // identify - computed: false, optional: true, required: false
  private _identify = new SourceTrackingPlanConnectionSchemaSettingsIdentifyOutputReference(this, "identify");
  public get identify() {
    return this._identify;
  }
  public putIdentify(value: SourceTrackingPlanConnectionSchemaSettingsIdentify) {
    this._identify.internalValue = value;
  }
  public resetIdentify() {
    this._identify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifyInput() {
    return this._identify.internalValue;
  }

  // track - computed: false, optional: true, required: false
  private _track = new SourceTrackingPlanConnectionSchemaSettingsTrackOutputReference(this, "track");
  public get track() {
    return this._track;
  }
  public putTrack(value: SourceTrackingPlanConnectionSchemaSettingsTrack) {
    this._track.internalValue = value;
  }
  public resetTrack() {
    this._track.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInput() {
    return this._track.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection segment_source_tracking_plan_connection}
*/
export class SourceTrackingPlanConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "segment_source_tracking_plan_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceTrackingPlanConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceTrackingPlanConnection to import
  * @param importFromId The id of the existing SourceTrackingPlanConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceTrackingPlanConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "segment_source_tracking_plan_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/source_tracking_plan_connection segment_source_tracking_plan_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceTrackingPlanConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: SourceTrackingPlanConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'segment_source_tracking_plan_connection',
      terraformGeneratorMetadata: {
        providerName: 'segment',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._schemaSettings.internalValue = config.schemaSettings;
    this._sourceId = config.sourceId;
    this._trackingPlanId = config.trackingPlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // schema_settings - computed: false, optional: true, required: false
  private _schemaSettings = new SourceTrackingPlanConnectionSchemaSettingsOutputReference(this, "schema_settings");
  public get schemaSettings() {
    return this._schemaSettings;
  }
  public putSchemaSettings(value: SourceTrackingPlanConnectionSchemaSettings) {
    this._schemaSettings.internalValue = value;
  }
  public resetSchemaSettings() {
    this._schemaSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaSettingsInput() {
    return this._schemaSettings.internalValue;
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // tracking_plan_id - computed: false, optional: false, required: true
  private _trackingPlanId?: string; 
  public get trackingPlanId() {
    return this.getStringAttribute('tracking_plan_id');
  }
  public set trackingPlanId(value: string) {
    this._trackingPlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingPlanIdInput() {
    return this._trackingPlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      schema_settings: sourceTrackingPlanConnectionSchemaSettingsToTerraform(this._schemaSettings.internalValue),
      source_id: cdktf.stringToTerraform(this._sourceId),
      tracking_plan_id: cdktf.stringToTerraform(this._trackingPlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      schema_settings: {
        value: sourceTrackingPlanConnectionSchemaSettingsToHclTerraform(this._schemaSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceTrackingPlanConnectionSchemaSettings",
      },
      source_id: {
        value: cdktf.stringToHclTerraform(this._sourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracking_plan_id: {
        value: cdktf.stringToHclTerraform(this._trackingPlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
