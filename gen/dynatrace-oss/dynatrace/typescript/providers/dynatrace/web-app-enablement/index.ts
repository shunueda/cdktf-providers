// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_enablement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAppEnablementConfig extends cdktf.TerraformMetaArguments {
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_enablement#application_id WebAppEnablement#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_enablement#id WebAppEnablement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * experience_analytics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_enablement#experience_analytics WebAppEnablement#experience_analytics}
  */
  readonly experienceAnalytics?: WebAppEnablementExperienceAnalytics;
  /**
  * rum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_enablement#rum WebAppEnablement#rum}
  */
  readonly rum: WebAppEnablementRum;
  /**
  * session_replay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_enablement#session_replay WebAppEnablement#session_replay}
  */
  readonly sessionReplay: WebAppEnablementSessionReplay;
}
export interface WebAppEnablementExperienceAnalytics {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_enablement#enabled WebAppEnablement#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function webAppEnablementExperienceAnalyticsToTerraform(struct?: WebAppEnablementExperienceAnalyticsOutputReference | WebAppEnablementExperienceAnalytics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function webAppEnablementExperienceAnalyticsToHclTerraform(struct?: WebAppEnablementExperienceAnalyticsOutputReference | WebAppEnablementExperienceAnalytics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppEnablementExperienceAnalyticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppEnablementExperienceAnalytics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppEnablementExperienceAnalytics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface WebAppEnablementRum {
  /**
  * (Field has overlap with `dynatrace_web_application`) Percentage of user sessions captured and analyzed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_enablement#cost_and_traffic_control WebAppEnablement#cost_and_traffic_control}
  */
  readonly costAndTrafficControl: number;
  /**
  * (Field has overlap with `dynatrace_web_application`) This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_enablement#enabled WebAppEnablement#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Enable Real User Monitoring powered by Grail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_enablement#enabled_on_grail WebAppEnablement#enabled_on_grail}
  */
  readonly enabledOnGrail?: boolean | cdktf.IResolvable;
}

export function webAppEnablementRumToTerraform(struct?: WebAppEnablementRumOutputReference | WebAppEnablementRum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_and_traffic_control: cdktf.numberToTerraform(struct!.costAndTrafficControl),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    enabled_on_grail: cdktf.booleanToTerraform(struct!.enabledOnGrail),
  }
}


export function webAppEnablementRumToHclTerraform(struct?: WebAppEnablementRumOutputReference | WebAppEnablementRum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_and_traffic_control: {
      value: cdktf.numberToHclTerraform(struct!.costAndTrafficControl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled_on_grail: {
      value: cdktf.booleanToHclTerraform(struct!.enabledOnGrail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppEnablementRumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppEnablementRum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costAndTrafficControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.costAndTrafficControl = this._costAndTrafficControl;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._enabledOnGrail !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledOnGrail = this._enabledOnGrail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppEnablementRum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._costAndTrafficControl = undefined;
      this._enabled = undefined;
      this._enabledOnGrail = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._costAndTrafficControl = value.costAndTrafficControl;
      this._enabled = value.enabled;
      this._enabledOnGrail = value.enabledOnGrail;
    }
  }

  // cost_and_traffic_control - computed: false, optional: false, required: true
  private _costAndTrafficControl?: number; 
  public get costAndTrafficControl() {
    return this.getNumberAttribute('cost_and_traffic_control');
  }
  public set costAndTrafficControl(value: number) {
    this._costAndTrafficControl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costAndTrafficControlInput() {
    return this._costAndTrafficControl;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enabled_on_grail - computed: false, optional: true, required: false
  private _enabledOnGrail?: boolean | cdktf.IResolvable; 
  public get enabledOnGrail() {
    return this.getBooleanAttribute('enabled_on_grail');
  }
  public set enabledOnGrail(value: boolean | cdktf.IResolvable) {
    this._enabledOnGrail = value;
  }
  public resetEnabledOnGrail() {
    this._enabledOnGrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledOnGrailInput() {
    return this._enabledOnGrail;
  }
}
export interface WebAppEnablementSessionReplay {
  /**
  * (Field has overlap with `dynatrace_web_application`) [Percentage of user sessions recorded with Session Replay](https://dt-url.net/sr-cost-traffic-control). For example, if you have 50% for RUM and 50% for Session Replay, it results in 25% of sessions recorded with Session Replay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_enablement#cost_and_traffic_control WebAppEnablement#cost_and_traffic_control}
  */
  readonly costAndTrafficControl: number;
  /**
  * (Field has overlap with `dynatrace_web_application`) This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_enablement#enabled WebAppEnablement#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function webAppEnablementSessionReplayToTerraform(struct?: WebAppEnablementSessionReplayOutputReference | WebAppEnablementSessionReplay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cost_and_traffic_control: cdktf.numberToTerraform(struct!.costAndTrafficControl),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function webAppEnablementSessionReplayToHclTerraform(struct?: WebAppEnablementSessionReplayOutputReference | WebAppEnablementSessionReplay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cost_and_traffic_control: {
      value: cdktf.numberToHclTerraform(struct!.costAndTrafficControl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebAppEnablementSessionReplayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebAppEnablementSessionReplay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._costAndTrafficControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.costAndTrafficControl = this._costAndTrafficControl;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebAppEnablementSessionReplay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._costAndTrafficControl = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._costAndTrafficControl = value.costAndTrafficControl;
      this._enabled = value.enabled;
    }
  }

  // cost_and_traffic_control - computed: false, optional: false, required: true
  private _costAndTrafficControl?: number; 
  public get costAndTrafficControl() {
    return this.getNumberAttribute('cost_and_traffic_control');
  }
  public set costAndTrafficControl(value: number) {
    this._costAndTrafficControl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costAndTrafficControlInput() {
    return this._costAndTrafficControl;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_enablement dynatrace_web_app_enablement}
*/
export class WebAppEnablement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_web_app_enablement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAppEnablement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAppEnablement to import
  * @param importFromId The id of the existing WebAppEnablement that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_enablement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAppEnablement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_web_app_enablement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/web_app_enablement dynatrace_web_app_enablement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAppEnablementConfig
  */
  public constructor(scope: Construct, id: string, config: WebAppEnablementConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_web_app_enablement',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._id = config.id;
    this._experienceAnalytics.internalValue = config.experienceAnalytics;
    this._rum.internalValue = config.rum;
    this._sessionReplay.internalValue = config.sessionReplay;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

  // experience_analytics - computed: false, optional: true, required: false
  private _experienceAnalytics = new WebAppEnablementExperienceAnalyticsOutputReference(this, "experience_analytics");
  public get experienceAnalytics() {
    return this._experienceAnalytics;
  }
  public putExperienceAnalytics(value: WebAppEnablementExperienceAnalytics) {
    this._experienceAnalytics.internalValue = value;
  }
  public resetExperienceAnalytics() {
    this._experienceAnalytics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experienceAnalyticsInput() {
    return this._experienceAnalytics.internalValue;
  }

  // rum - computed: false, optional: false, required: true
  private _rum = new WebAppEnablementRumOutputReference(this, "rum");
  public get rum() {
    return this._rum;
  }
  public putRum(value: WebAppEnablementRum) {
    this._rum.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rumInput() {
    return this._rum.internalValue;
  }

  // session_replay - computed: false, optional: false, required: true
  private _sessionReplay = new WebAppEnablementSessionReplayOutputReference(this, "session_replay");
  public get sessionReplay() {
    return this._sessionReplay;
  }
  public putSessionReplay(value: WebAppEnablementSessionReplay) {
    this._sessionReplay.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionReplayInput() {
    return this._sessionReplay.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      id: cdktf.stringToTerraform(this._id),
      experience_analytics: webAppEnablementExperienceAnalyticsToTerraform(this._experienceAnalytics.internalValue),
      rum: webAppEnablementRumToTerraform(this._rum.internalValue),
      session_replay: webAppEnablementSessionReplayToTerraform(this._sessionReplay.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
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
      experience_analytics: {
        value: webAppEnablementExperienceAnalyticsToHclTerraform(this._experienceAnalytics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppEnablementExperienceAnalyticsList",
      },
      rum: {
        value: webAppEnablementRumToHclTerraform(this._rum.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppEnablementRumList",
      },
      session_replay: {
        value: webAppEnablementSessionReplayToHclTerraform(this._sessionReplay.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebAppEnablementSessionReplayList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
