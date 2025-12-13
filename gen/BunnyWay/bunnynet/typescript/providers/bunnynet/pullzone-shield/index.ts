// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PullzoneShieldConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the linked pullzone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#pullzone PullzoneShield#pullzone}
  */
  readonly pullzone: number;
  /**
  * Options: `Advanced`, `Basic`, `Business`, `Enterprise`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#tier PullzoneShield#tier}
  */
  readonly tier?: string;
  /**
  * Replace our bunny.net branded block and challenge pages with a white-labelled experience.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#whitelabel PullzoneShield#whitelabel}
  */
  readonly whitelabel?: boolean | cdktf.IResolvable;
  /**
  * access_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#access_list PullzoneShield#access_list}
  */
  readonly accessList?: PullzoneShieldAccessListStruct[] | cdktf.IResolvable;
  /**
  * bot_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#bot_detection PullzoneShield#bot_detection}
  */
  readonly botDetection?: PullzoneShieldBotDetection;
  /**
  * ddos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#ddos PullzoneShield#ddos}
  */
  readonly ddos?: PullzoneShieldDdos;
  /**
  * waf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#waf PullzoneShield#waf}
  */
  readonly waf?: PullzoneShieldWaf;
}
export interface PullzoneShieldAccessListStruct {
  /**
  * Options: `Allow`, `Block`, `Challenge`, `Log`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#action PullzoneShield#action}
  */
  readonly action: string;
  /**
  * The ID of the Access List.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#id PullzoneShield#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

export function pullzoneShieldAccessListStructToTerraform(struct?: PullzoneShieldAccessListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function pullzoneShieldAccessListStructToHclTerraform(struct?: PullzoneShieldAccessListStruct | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PullzoneShieldAccessListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PullzoneShieldAccessListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PullzoneShieldAccessListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._id = value.id;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class PullzoneShieldAccessListStructList extends cdktf.ComplexList {
  public internalValue? : PullzoneShieldAccessListStruct[] | cdktf.IResolvable

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
  public get(index: number): PullzoneShieldAccessListStructOutputReference {
    return new PullzoneShieldAccessListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PullzoneShieldBotDetection {
  /**
  * Combines advanced entropy analysis and cross-session consistency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#complex_fingerprinting PullzoneShield#complex_fingerprinting}
  */
  readonly complexFingerprinting?: boolean | cdktf.IResolvable;
  /**
  * Controls how assertively unusual fingerprints are treated as bots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#fingerprint_aggression PullzoneShield#fingerprint_aggression}
  */
  readonly fingerprintAggression?: number;
  /**
  * Adjusts how precisely browsers are checked for signs of automation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#fingerprint_sensitivity PullzoneShield#fingerprint_sensitivity}
  */
  readonly fingerprintSensitivity?: number;
  /**
  * Monitors IP behaviour, reputation, and rate patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#ip_sensitivity PullzoneShield#ip_sensitivity}
  */
  readonly ipSensitivity?: number;
  /**
  * Indicates the mode the Bot Detection engine is running. Options: `Challenge`, `Log`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#mode PullzoneShield#mode}
  */
  readonly mode?: string;
  /**
  * Analyzes request headers, query structure, and protocol anomalies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#request_integrity PullzoneShield#request_integrity}
  */
  readonly requestIntegrity?: number;
}

export function pullzoneShieldBotDetectionToTerraform(struct?: PullzoneShieldBotDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    complex_fingerprinting: cdktf.booleanToTerraform(struct!.complexFingerprinting),
    fingerprint_aggression: cdktf.numberToTerraform(struct!.fingerprintAggression),
    fingerprint_sensitivity: cdktf.numberToTerraform(struct!.fingerprintSensitivity),
    ip_sensitivity: cdktf.numberToTerraform(struct!.ipSensitivity),
    mode: cdktf.stringToTerraform(struct!.mode),
    request_integrity: cdktf.numberToTerraform(struct!.requestIntegrity),
  }
}


export function pullzoneShieldBotDetectionToHclTerraform(struct?: PullzoneShieldBotDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    complex_fingerprinting: {
      value: cdktf.booleanToHclTerraform(struct!.complexFingerprinting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fingerprint_aggression: {
      value: cdktf.numberToHclTerraform(struct!.fingerprintAggression),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fingerprint_sensitivity: {
      value: cdktf.numberToHclTerraform(struct!.fingerprintSensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_sensitivity: {
      value: cdktf.numberToHclTerraform(struct!.ipSensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_integrity: {
      value: cdktf.numberToHclTerraform(struct!.requestIntegrity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PullzoneShieldBotDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PullzoneShieldBotDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complexFingerprinting !== undefined) {
      hasAnyValues = true;
      internalValueResult.complexFingerprinting = this._complexFingerprinting;
    }
    if (this._fingerprintAggression !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprintAggression = this._fingerprintAggression;
    }
    if (this._fingerprintSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprintSensitivity = this._fingerprintSensitivity;
    }
    if (this._ipSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSensitivity = this._ipSensitivity;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._requestIntegrity !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestIntegrity = this._requestIntegrity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PullzoneShieldBotDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._complexFingerprinting = undefined;
      this._fingerprintAggression = undefined;
      this._fingerprintSensitivity = undefined;
      this._ipSensitivity = undefined;
      this._mode = undefined;
      this._requestIntegrity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._complexFingerprinting = value.complexFingerprinting;
      this._fingerprintAggression = value.fingerprintAggression;
      this._fingerprintSensitivity = value.fingerprintSensitivity;
      this._ipSensitivity = value.ipSensitivity;
      this._mode = value.mode;
      this._requestIntegrity = value.requestIntegrity;
    }
  }

  // complex_fingerprinting - computed: true, optional: true, required: false
  private _complexFingerprinting?: boolean | cdktf.IResolvable; 
  public get complexFingerprinting() {
    return this.getBooleanAttribute('complex_fingerprinting');
  }
  public set complexFingerprinting(value: boolean | cdktf.IResolvable) {
    this._complexFingerprinting = value;
  }
  public resetComplexFingerprinting() {
    this._complexFingerprinting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complexFingerprintingInput() {
    return this._complexFingerprinting;
  }

  // fingerprint_aggression - computed: true, optional: true, required: false
  private _fingerprintAggression?: number; 
  public get fingerprintAggression() {
    return this.getNumberAttribute('fingerprint_aggression');
  }
  public set fingerprintAggression(value: number) {
    this._fingerprintAggression = value;
  }
  public resetFingerprintAggression() {
    this._fingerprintAggression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintAggressionInput() {
    return this._fingerprintAggression;
  }

  // fingerprint_sensitivity - computed: true, optional: true, required: false
  private _fingerprintSensitivity?: number; 
  public get fingerprintSensitivity() {
    return this.getNumberAttribute('fingerprint_sensitivity');
  }
  public set fingerprintSensitivity(value: number) {
    this._fingerprintSensitivity = value;
  }
  public resetFingerprintSensitivity() {
    this._fingerprintSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintSensitivityInput() {
    return this._fingerprintSensitivity;
  }

  // ip_sensitivity - computed: true, optional: true, required: false
  private _ipSensitivity?: number; 
  public get ipSensitivity() {
    return this.getNumberAttribute('ip_sensitivity');
  }
  public set ipSensitivity(value: number) {
    this._ipSensitivity = value;
  }
  public resetIpSensitivity() {
    this._ipSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSensitivityInput() {
    return this._ipSensitivity;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // request_integrity - computed: true, optional: true, required: false
  private _requestIntegrity?: number; 
  public get requestIntegrity() {
    return this.getNumberAttribute('request_integrity');
  }
  public set requestIntegrity(value: number) {
    this._requestIntegrity = value;
  }
  public resetRequestIntegrity() {
    this._requestIntegrity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIntegrityInput() {
    return this._requestIntegrity;
  }
}
export interface PullzoneShieldDdos {
  /**
  * The window of time a visitor can access your website after passing a challenge. Once the timeout expires, they'll face a new challenge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#challenge_window PullzoneShield#challenge_window}
  */
  readonly challengeWindow?: number;
  /**
  * Options: `Asleep`, `Extreme`, `High`, `Low`, `Medium`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#level PullzoneShield#level}
  */
  readonly level: string;
  /**
  * Indicates the mode the engine is running. Options: `Block`, `Log`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#mode PullzoneShield#mode}
  */
  readonly mode?: string;
}

export function pullzoneShieldDdosToTerraform(struct?: PullzoneShieldDdos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    challenge_window: cdktf.numberToTerraform(struct!.challengeWindow),
    level: cdktf.stringToTerraform(struct!.level),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function pullzoneShieldDdosToHclTerraform(struct?: PullzoneShieldDdos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    challenge_window: {
      value: cdktf.numberToHclTerraform(struct!.challengeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PullzoneShieldDdosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PullzoneShieldDdos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._challengeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeWindow = this._challengeWindow;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PullzoneShieldDdos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._challengeWindow = undefined;
      this._level = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._challengeWindow = value.challengeWindow;
      this._level = value.level;
      this._mode = value.mode;
    }
  }

  // challenge_window - computed: true, optional: true, required: false
  private _challengeWindow?: number; 
  public get challengeWindow() {
    return this.getNumberAttribute('challenge_window');
  }
  public set challengeWindow(value: number) {
    this._challengeWindow = value;
  }
  public resetChallengeWindow() {
    this._challengeWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeWindowInput() {
    return this._challengeWindow;
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface PullzoneShieldWaf {
  /**
  * Indicates allowed HTTP methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#allowed_http_methods PullzoneShield#allowed_http_methods}
  */
  readonly allowedHttpMethods?: string[];
  /**
  * Indicates allowed HTTP versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#allowed_http_versions PullzoneShield#allowed_http_versions}
  */
  readonly allowedHttpVersions?: string[];
  /**
  * Indicates allowed values for request Content-Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#allowed_request_content_types PullzoneShield#allowed_request_content_types}
  */
  readonly allowedRequestContentTypes?: string[];
  /**
  * Determines which severity level of rules will block requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#blocking_sensitivity PullzoneShield#blocking_sensitivity}
  */
  readonly blockingSensitivity?: number;
  /**
  * Determines the action to take when the request body length exceeds your plan limit. Options: `Block`, `Ignore`, `Log`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#body_limit_request PullzoneShield#body_limit_request}
  */
  readonly bodyLimitRequest?: string;
  /**
  * Determines the action to take when the response body length exceeds your plan limit. Options: `Block`, `Ignore`, `Log`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#body_limit_response PullzoneShield#body_limit_response}
  */
  readonly bodyLimitResponse?: string;
  /**
  * Determines which severity level of rules will trigger a detection log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#detection_sensitivity PullzoneShield#detection_sensitivity}
  */
  readonly detectionSensitivity?: number;
  /**
  * Indicates whether the WAF (Web Application Firewall) is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#enabled PullzoneShield#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Determines which severity level of rules will trigger the rules and their action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#execution_sensitivity PullzoneShield#execution_sensitivity}
  */
  readonly executionSensitivity?: number;
  /**
  * When enabled, detected WAF audit logs will contain the full list of request headers sent during the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#log_headers PullzoneShield#log_headers}
  */
  readonly logHeaders?: boolean | cdktf.IResolvable;
  /**
  * The list of headers excluded from the logs. They will still be used for processing WAF rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#log_headers_excluded PullzoneShield#log_headers_excluded}
  */
  readonly logHeadersExcluded?: string[];
  /**
  * Indicates the mode the engine is running. Options: `Block`, `Log`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#mode PullzoneShield#mode}
  */
  readonly mode?: string;
  /**
  * Real-time Threat Intelligence delivers zero-day protection by instantly detecting and blocking emerging threats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#realtime_threat_intelligence PullzoneShield#realtime_threat_intelligence}
  */
  readonly realtimeThreatIntelligence?: boolean | cdktf.IResolvable;
  /**
  * List of disabled WAF rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#rules_disabled PullzoneShield#rules_disabled}
  */
  readonly rulesDisabled?: string[];
  /**
  * List of WAF rules that will not be blocked, but will be logged when triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#rules_logonly PullzoneShield#rules_logonly}
  */
  readonly rulesLogonly?: string[];
}

export function pullzoneShieldWafToTerraform(struct?: PullzoneShieldWaf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_http_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHttpMethods),
    allowed_http_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHttpVersions),
    allowed_request_content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRequestContentTypes),
    blocking_sensitivity: cdktf.numberToTerraform(struct!.blockingSensitivity),
    body_limit_request: cdktf.stringToTerraform(struct!.bodyLimitRequest),
    body_limit_response: cdktf.stringToTerraform(struct!.bodyLimitResponse),
    detection_sensitivity: cdktf.numberToTerraform(struct!.detectionSensitivity),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    execution_sensitivity: cdktf.numberToTerraform(struct!.executionSensitivity),
    log_headers: cdktf.booleanToTerraform(struct!.logHeaders),
    log_headers_excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logHeadersExcluded),
    mode: cdktf.stringToTerraform(struct!.mode),
    realtime_threat_intelligence: cdktf.booleanToTerraform(struct!.realtimeThreatIntelligence),
    rules_disabled: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rulesDisabled),
    rules_logonly: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rulesLogonly),
  }
}


export function pullzoneShieldWafToHclTerraform(struct?: PullzoneShieldWaf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_http_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHttpMethods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_http_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHttpVersions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_request_content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedRequestContentTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    blocking_sensitivity: {
      value: cdktf.numberToHclTerraform(struct!.blockingSensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    body_limit_request: {
      value: cdktf.stringToHclTerraform(struct!.bodyLimitRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_limit_response: {
      value: cdktf.stringToHclTerraform(struct!.bodyLimitResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detection_sensitivity: {
      value: cdktf.numberToHclTerraform(struct!.detectionSensitivity),
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
    execution_sensitivity: {
      value: cdktf.numberToHclTerraform(struct!.executionSensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_headers: {
      value: cdktf.booleanToHclTerraform(struct!.logHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_headers_excluded: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logHeadersExcluded),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realtime_threat_intelligence: {
      value: cdktf.booleanToHclTerraform(struct!.realtimeThreatIntelligence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rules_disabled: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rulesDisabled),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rules_logonly: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rulesLogonly),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PullzoneShieldWafOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PullzoneShieldWaf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHttpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHttpMethods = this._allowedHttpMethods;
    }
    if (this._allowedHttpVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHttpVersions = this._allowedHttpVersions;
    }
    if (this._allowedRequestContentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRequestContentTypes = this._allowedRequestContentTypes;
    }
    if (this._blockingSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockingSensitivity = this._blockingSensitivity;
    }
    if (this._bodyLimitRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyLimitRequest = this._bodyLimitRequest;
    }
    if (this._bodyLimitResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyLimitResponse = this._bodyLimitResponse;
    }
    if (this._detectionSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionSensitivity = this._detectionSensitivity;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._executionSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionSensitivity = this._executionSensitivity;
    }
    if (this._logHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.logHeaders = this._logHeaders;
    }
    if (this._logHeadersExcluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.logHeadersExcluded = this._logHeadersExcluded;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._realtimeThreatIntelligence !== undefined) {
      hasAnyValues = true;
      internalValueResult.realtimeThreatIntelligence = this._realtimeThreatIntelligence;
    }
    if (this._rulesDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesDisabled = this._rulesDisabled;
    }
    if (this._rulesLogonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulesLogonly = this._rulesLogonly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PullzoneShieldWaf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHttpMethods = undefined;
      this._allowedHttpVersions = undefined;
      this._allowedRequestContentTypes = undefined;
      this._blockingSensitivity = undefined;
      this._bodyLimitRequest = undefined;
      this._bodyLimitResponse = undefined;
      this._detectionSensitivity = undefined;
      this._enabled = undefined;
      this._executionSensitivity = undefined;
      this._logHeaders = undefined;
      this._logHeadersExcluded = undefined;
      this._mode = undefined;
      this._realtimeThreatIntelligence = undefined;
      this._rulesDisabled = undefined;
      this._rulesLogonly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHttpMethods = value.allowedHttpMethods;
      this._allowedHttpVersions = value.allowedHttpVersions;
      this._allowedRequestContentTypes = value.allowedRequestContentTypes;
      this._blockingSensitivity = value.blockingSensitivity;
      this._bodyLimitRequest = value.bodyLimitRequest;
      this._bodyLimitResponse = value.bodyLimitResponse;
      this._detectionSensitivity = value.detectionSensitivity;
      this._enabled = value.enabled;
      this._executionSensitivity = value.executionSensitivity;
      this._logHeaders = value.logHeaders;
      this._logHeadersExcluded = value.logHeadersExcluded;
      this._mode = value.mode;
      this._realtimeThreatIntelligence = value.realtimeThreatIntelligence;
      this._rulesDisabled = value.rulesDisabled;
      this._rulesLogonly = value.rulesLogonly;
    }
  }

  // allowed_http_methods - computed: true, optional: true, required: false
  private _allowedHttpMethods?: string[]; 
  public get allowedHttpMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_http_methods'));
  }
  public set allowedHttpMethods(value: string[]) {
    this._allowedHttpMethods = value;
  }
  public resetAllowedHttpMethods() {
    this._allowedHttpMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHttpMethodsInput() {
    return this._allowedHttpMethods;
  }

  // allowed_http_versions - computed: true, optional: true, required: false
  private _allowedHttpVersions?: string[]; 
  public get allowedHttpVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_http_versions'));
  }
  public set allowedHttpVersions(value: string[]) {
    this._allowedHttpVersions = value;
  }
  public resetAllowedHttpVersions() {
    this._allowedHttpVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHttpVersionsInput() {
    return this._allowedHttpVersions;
  }

  // allowed_request_content_types - computed: true, optional: true, required: false
  private _allowedRequestContentTypes?: string[]; 
  public get allowedRequestContentTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_request_content_types'));
  }
  public set allowedRequestContentTypes(value: string[]) {
    this._allowedRequestContentTypes = value;
  }
  public resetAllowedRequestContentTypes() {
    this._allowedRequestContentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRequestContentTypesInput() {
    return this._allowedRequestContentTypes;
  }

  // blocking_sensitivity - computed: true, optional: true, required: false
  private _blockingSensitivity?: number; 
  public get blockingSensitivity() {
    return this.getNumberAttribute('blocking_sensitivity');
  }
  public set blockingSensitivity(value: number) {
    this._blockingSensitivity = value;
  }
  public resetBlockingSensitivity() {
    this._blockingSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockingSensitivityInput() {
    return this._blockingSensitivity;
  }

  // body_limit_request - computed: true, optional: true, required: false
  private _bodyLimitRequest?: string; 
  public get bodyLimitRequest() {
    return this.getStringAttribute('body_limit_request');
  }
  public set bodyLimitRequest(value: string) {
    this._bodyLimitRequest = value;
  }
  public resetBodyLimitRequest() {
    this._bodyLimitRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyLimitRequestInput() {
    return this._bodyLimitRequest;
  }

  // body_limit_response - computed: true, optional: true, required: false
  private _bodyLimitResponse?: string; 
  public get bodyLimitResponse() {
    return this.getStringAttribute('body_limit_response');
  }
  public set bodyLimitResponse(value: string) {
    this._bodyLimitResponse = value;
  }
  public resetBodyLimitResponse() {
    this._bodyLimitResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyLimitResponseInput() {
    return this._bodyLimitResponse;
  }

  // detection_sensitivity - computed: true, optional: true, required: false
  private _detectionSensitivity?: number; 
  public get detectionSensitivity() {
    return this.getNumberAttribute('detection_sensitivity');
  }
  public set detectionSensitivity(value: number) {
    this._detectionSensitivity = value;
  }
  public resetDetectionSensitivity() {
    this._detectionSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionSensitivityInput() {
    return this._detectionSensitivity;
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

  // execution_sensitivity - computed: true, optional: true, required: false
  private _executionSensitivity?: number; 
  public get executionSensitivity() {
    return this.getNumberAttribute('execution_sensitivity');
  }
  public set executionSensitivity(value: number) {
    this._executionSensitivity = value;
  }
  public resetExecutionSensitivity() {
    this._executionSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionSensitivityInput() {
    return this._executionSensitivity;
  }

  // log_headers - computed: true, optional: true, required: false
  private _logHeaders?: boolean | cdktf.IResolvable; 
  public get logHeaders() {
    return this.getBooleanAttribute('log_headers');
  }
  public set logHeaders(value: boolean | cdktf.IResolvable) {
    this._logHeaders = value;
  }
  public resetLogHeaders() {
    this._logHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logHeadersInput() {
    return this._logHeaders;
  }

  // log_headers_excluded - computed: true, optional: true, required: false
  private _logHeadersExcluded?: string[]; 
  public get logHeadersExcluded() {
    return cdktf.Fn.tolist(this.getListAttribute('log_headers_excluded'));
  }
  public set logHeadersExcluded(value: string[]) {
    this._logHeadersExcluded = value;
  }
  public resetLogHeadersExcluded() {
    this._logHeadersExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logHeadersExcludedInput() {
    return this._logHeadersExcluded;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // realtime_threat_intelligence - computed: true, optional: true, required: false
  private _realtimeThreatIntelligence?: boolean | cdktf.IResolvable; 
  public get realtimeThreatIntelligence() {
    return this.getBooleanAttribute('realtime_threat_intelligence');
  }
  public set realtimeThreatIntelligence(value: boolean | cdktf.IResolvable) {
    this._realtimeThreatIntelligence = value;
  }
  public resetRealtimeThreatIntelligence() {
    this._realtimeThreatIntelligence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realtimeThreatIntelligenceInput() {
    return this._realtimeThreatIntelligence;
  }

  // rules_disabled - computed: true, optional: true, required: false
  private _rulesDisabled?: string[]; 
  public get rulesDisabled() {
    return cdktf.Fn.tolist(this.getListAttribute('rules_disabled'));
  }
  public set rulesDisabled(value: string[]) {
    this._rulesDisabled = value;
  }
  public resetRulesDisabled() {
    this._rulesDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesDisabledInput() {
    return this._rulesDisabled;
  }

  // rules_logonly - computed: true, optional: true, required: false
  private _rulesLogonly?: string[]; 
  public get rulesLogonly() {
    return cdktf.Fn.tolist(this.getListAttribute('rules_logonly'));
  }
  public set rulesLogonly(value: string[]) {
    this._rulesLogonly = value;
  }
  public resetRulesLogonly() {
    this._rulesLogonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesLogonlyInput() {
    return this._rulesLogonly;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield bunnynet_pullzone_shield}
*/
export class PullzoneShield extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_pullzone_shield";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PullzoneShield resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PullzoneShield to import
  * @param importFromId The id of the existing PullzoneShield that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PullzoneShield to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_pullzone_shield", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/resources/pullzone_shield bunnynet_pullzone_shield} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PullzoneShieldConfig
  */
  public constructor(scope: Construct, id: string, config: PullzoneShieldConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_pullzone_shield',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.4',
        providerVersionConstraint: '0.11.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._pullzone = config.pullzone;
    this._tier = config.tier;
    this._whitelabel = config.whitelabel;
    this._accessList.internalValue = config.accessList;
    this._botDetection.internalValue = config.botDetection;
    this._ddos.internalValue = config.ddos;
    this._waf.internalValue = config.waf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // pullzone - computed: false, optional: false, required: true
  private _pullzone?: number; 
  public get pullzone() {
    return this.getNumberAttribute('pullzone');
  }
  public set pullzone(value: number) {
    this._pullzone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pullzoneInput() {
    return this._pullzone;
  }

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // whitelabel - computed: true, optional: true, required: false
  private _whitelabel?: boolean | cdktf.IResolvable; 
  public get whitelabel() {
    return this.getBooleanAttribute('whitelabel');
  }
  public set whitelabel(value: boolean | cdktf.IResolvable) {
    this._whitelabel = value;
  }
  public resetWhitelabel() {
    this._whitelabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelabelInput() {
    return this._whitelabel;
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList = new PullzoneShieldAccessListStructList(this, "access_list", true);
  public get accessList() {
    return this._accessList;
  }
  public putAccessList(value: PullzoneShieldAccessListStruct[] | cdktf.IResolvable) {
    this._accessList.internalValue = value;
  }
  public resetAccessList() {
    this._accessList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList.internalValue;
  }

  // bot_detection - computed: false, optional: true, required: false
  private _botDetection = new PullzoneShieldBotDetectionOutputReference(this, "bot_detection");
  public get botDetection() {
    return this._botDetection;
  }
  public putBotDetection(value: PullzoneShieldBotDetection) {
    this._botDetection.internalValue = value;
  }
  public resetBotDetection() {
    this._botDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botDetectionInput() {
    return this._botDetection.internalValue;
  }

  // ddos - computed: false, optional: true, required: false
  private _ddos = new PullzoneShieldDdosOutputReference(this, "ddos");
  public get ddos() {
    return this._ddos;
  }
  public putDdos(value: PullzoneShieldDdos) {
    this._ddos.internalValue = value;
  }
  public resetDdos() {
    this._ddos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosInput() {
    return this._ddos.internalValue;
  }

  // waf - computed: false, optional: true, required: false
  private _waf = new PullzoneShieldWafOutputReference(this, "waf");
  public get waf() {
    return this._waf;
  }
  public putWaf(value: PullzoneShieldWaf) {
    this._waf.internalValue = value;
  }
  public resetWaf() {
    this._waf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafInput() {
    return this._waf.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pullzone: cdktf.numberToTerraform(this._pullzone),
      tier: cdktf.stringToTerraform(this._tier),
      whitelabel: cdktf.booleanToTerraform(this._whitelabel),
      access_list: cdktf.listMapper(pullzoneShieldAccessListStructToTerraform, true)(this._accessList.internalValue),
      bot_detection: pullzoneShieldBotDetectionToTerraform(this._botDetection.internalValue),
      ddos: pullzoneShieldDdosToTerraform(this._ddos.internalValue),
      waf: pullzoneShieldWafToTerraform(this._waf.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      pullzone: {
        value: cdktf.numberToHclTerraform(this._pullzone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      whitelabel: {
        value: cdktf.booleanToHclTerraform(this._whitelabel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_list: {
        value: cdktf.listMapperHcl(pullzoneShieldAccessListStructToHclTerraform, true)(this._accessList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PullzoneShieldAccessListStructList",
      },
      bot_detection: {
        value: pullzoneShieldBotDetectionToHclTerraform(this._botDetection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PullzoneShieldBotDetection",
      },
      ddos: {
        value: pullzoneShieldDdosToHclTerraform(this._ddos.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PullzoneShieldDdos",
      },
      waf: {
        value: pullzoneShieldWafToHclTerraform(this._waf.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PullzoneShieldWaf",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
