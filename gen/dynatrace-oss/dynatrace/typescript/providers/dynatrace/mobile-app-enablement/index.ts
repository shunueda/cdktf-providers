// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_enablement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MobileAppEnablementConfig extends cdktf.TerraformMetaArguments {
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_enablement#application_id MobileAppEnablement#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_enablement#id MobileAppEnablement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * rum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_enablement#rum MobileAppEnablement#rum}
  */
  readonly rum: MobileAppEnablementRum;
  /**
  * session_replay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_enablement#session_replay MobileAppEnablement#session_replay}
  */
  readonly sessionReplay: MobileAppEnablementSessionReplay;
}
export interface MobileAppEnablementRum {
  /**
  * Percentage of user sessions captured and analyzed. By default, Dynatrace captures all user actions and user sessions for analysis. This approach ensures complete insight into your application’s performance and customer experience. You can optionally reduce the granularity of user-action and user-session analysis by capturing a lower percentage of user sessions. While this approach can reduce monitoring costs, it also results in lower visibility into how your customers are using your applications. For example, a setting of 10% results in Dynatrace analyzing only every tenth user session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_enablement#cost_and_traffic_control MobileAppEnablement#cost_and_traffic_control}
  */
  readonly costAndTrafficControl: number;
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_enablement#enabled MobileAppEnablement#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Please be aware that only mobile agents with version **8.303 or higher** can ingest Grail events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_enablement#enabled_on_grail MobileAppEnablement#enabled_on_grail}
  */
  readonly enabledOnGrail?: boolean | cdktf.IResolvable;
}

export function mobileAppEnablementRumToTerraform(struct?: MobileAppEnablementRumOutputReference | MobileAppEnablementRum): any {
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


export function mobileAppEnablementRumToHclTerraform(struct?: MobileAppEnablementRumOutputReference | MobileAppEnablementRum): any {
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

export class MobileAppEnablementRumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileAppEnablementRum | undefined {
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

  public set internalValue(value: MobileAppEnablementRum | undefined) {
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
export interface MobileAppEnablementSessionReplay {
  /**
  * Before enabling, Dynatrace checks your system against the [prerequisites for Session Replay](https://dt-url.net/t23s0ppi).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_enablement#on_crash MobileAppEnablement#on_crash}
  */
  readonly onCrash: boolean | cdktf.IResolvable;
}

export function mobileAppEnablementSessionReplayToTerraform(struct?: MobileAppEnablementSessionReplayOutputReference | MobileAppEnablementSessionReplay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_crash: cdktf.booleanToTerraform(struct!.onCrash),
  }
}


export function mobileAppEnablementSessionReplayToHclTerraform(struct?: MobileAppEnablementSessionReplayOutputReference | MobileAppEnablementSessionReplay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_crash: {
      value: cdktf.booleanToHclTerraform(struct!.onCrash),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MobileAppEnablementSessionReplayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MobileAppEnablementSessionReplay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onCrash !== undefined) {
      hasAnyValues = true;
      internalValueResult.onCrash = this._onCrash;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MobileAppEnablementSessionReplay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onCrash = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onCrash = value.onCrash;
    }
  }

  // on_crash - computed: false, optional: false, required: true
  private _onCrash?: boolean | cdktf.IResolvable; 
  public get onCrash() {
    return this.getBooleanAttribute('on_crash');
  }
  public set onCrash(value: boolean | cdktf.IResolvable) {
    this._onCrash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onCrashInput() {
    return this._onCrash;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_enablement dynatrace_mobile_app_enablement}
*/
export class MobileAppEnablement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_mobile_app_enablement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MobileAppEnablement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MobileAppEnablement to import
  * @param importFromId The id of the existing MobileAppEnablement that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_enablement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MobileAppEnablement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_mobile_app_enablement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/mobile_app_enablement dynatrace_mobile_app_enablement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MobileAppEnablementConfig
  */
  public constructor(scope: Construct, id: string, config: MobileAppEnablementConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_mobile_app_enablement',
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

  // rum - computed: false, optional: false, required: true
  private _rum = new MobileAppEnablementRumOutputReference(this, "rum");
  public get rum() {
    return this._rum;
  }
  public putRum(value: MobileAppEnablementRum) {
    this._rum.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rumInput() {
    return this._rum.internalValue;
  }

  // session_replay - computed: false, optional: false, required: true
  private _sessionReplay = new MobileAppEnablementSessionReplayOutputReference(this, "session_replay");
  public get sessionReplay() {
    return this._sessionReplay;
  }
  public putSessionReplay(value: MobileAppEnablementSessionReplay) {
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
      rum: mobileAppEnablementRumToTerraform(this._rum.internalValue),
      session_replay: mobileAppEnablementSessionReplayToTerraform(this._sessionReplay.internalValue),
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
      rum: {
        value: mobileAppEnablementRumToHclTerraform(this._rum.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MobileAppEnablementRumList",
      },
      session_replay: {
        value: mobileAppEnablementSessionReplayToHclTerraform(this._sessionReplay.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MobileAppEnablementSessionReplayList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
