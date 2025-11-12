// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SessionAuthenticationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * An authentication source (IdP adapter or IdP connection).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policy#authentication_source SessionAuthenticationPolicy#authentication_source}
  */
  readonly authenticationSource: SessionAuthenticationPolicyAuthenticationSource;
  /**
  * Determines whether the requested authentication context is considered when deciding whether an existing session is valid for a given request. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policy#authn_context_sensitive SessionAuthenticationPolicy#authn_context_sensitive}
  */
  readonly authnContextSensitive?: boolean | cdktf.IResolvable;
  /**
  * Determines whether sessions are enabled for the authentication source. This value overrides the `enable_sessions` value from the global authentication session policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policy#enable_sessions SessionAuthenticationPolicy#enable_sessions}
  */
  readonly enableSessions: boolean | cdktf.IResolvable;
  /**
  * The idle timeout period, in minutes. If omitted, the value from the global authentication session policy will be used. If set to `-1`, the idle timeout will be set to the maximum timeout. If a value is provided for this property, a value must also be provided for `max_timeout_mins`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policy#idle_timeout_mins SessionAuthenticationPolicy#idle_timeout_mins}
  */
  readonly idleTimeoutMins?: number;
  /**
  * The maximum timeout period, in minutes. If omitted, the value from the global authentication session policy will be used. If set to `-1`, sessions do not expire. If a value is provided for this property, a value must also be provided for `idle_timeout_mins`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policy#max_timeout_mins SessionAuthenticationPolicy#max_timeout_mins}
  */
  readonly maxTimeoutMins?: number;
  /**
  * Determines whether sessions for the authentication source are persistent. This value overrides the `persistent_sessions` value from the global authentication session policy. This field is ignored if `enable_sessions` is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policy#persistent SessionAuthenticationPolicy#persistent}
  */
  readonly persistent?: boolean | cdktf.IResolvable;
  /**
  * The persistent, unique ID for the session policy. It can be any combination of `[a-zA-Z0-9._-]`. This property is system-assigned if not specified. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policy#policy_id SessionAuthenticationPolicy#policy_id}
  */
  readonly policyId?: string;
  /**
  * The display unit for session timeout periods in the PingFederate administrative console. When the display unit is `HOURS` or `DAYS`, the timeout values in minutes must correspond to a whole number value for the specified unit. Options are `MINUTES`, `HOURS`, `DAYS`. If empty, the value will default to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policy#timeout_display_unit SessionAuthenticationPolicy#timeout_display_unit}
  */
  readonly timeoutDisplayUnit?: string;
  /**
  * Determines the type of user device that the authentication session can be created on. Options are `PRIVATE`, `SHARED`, `ANY`. If empty, the value will default to `PRIVATE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policy#user_device_type SessionAuthenticationPolicy#user_device_type}
  */
  readonly userDeviceType?: string;
}
export interface SessionAuthenticationPolicyAuthenticationSourceSourceRef {
  /**
  * The ID of the resource. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policy#id SessionAuthenticationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function sessionAuthenticationPolicyAuthenticationSourceSourceRefToTerraform(struct?: SessionAuthenticationPolicyAuthenticationSourceSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function sessionAuthenticationPolicyAuthenticationSourceSourceRefToHclTerraform(struct?: SessionAuthenticationPolicyAuthenticationSourceSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionAuthenticationPolicyAuthenticationSourceSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SessionAuthenticationPolicyAuthenticationSourceSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionAuthenticationPolicyAuthenticationSourceSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SessionAuthenticationPolicyAuthenticationSource {
  /**
  * A reference to the authentication source. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policy#source_ref SessionAuthenticationPolicy#source_ref}
  */
  readonly sourceRef: SessionAuthenticationPolicyAuthenticationSourceSourceRef;
  /**
  * The type of this authentication source. Options are `IDP_ADAPTER`, `IDP_CONNECTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policy#type SessionAuthenticationPolicy#type}
  */
  readonly type: string;
}

export function sessionAuthenticationPolicyAuthenticationSourceToTerraform(struct?: SessionAuthenticationPolicyAuthenticationSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_ref: sessionAuthenticationPolicyAuthenticationSourceSourceRefToTerraform(struct!.sourceRef),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function sessionAuthenticationPolicyAuthenticationSourceToHclTerraform(struct?: SessionAuthenticationPolicyAuthenticationSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_ref: {
      value: sessionAuthenticationPolicyAuthenticationSourceSourceRefToHclTerraform(struct!.sourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "SessionAuthenticationPolicyAuthenticationSourceSourceRef",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SessionAuthenticationPolicyAuthenticationSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SessionAuthenticationPolicyAuthenticationSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRef = this._sourceRef?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SessionAuthenticationPolicyAuthenticationSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceRef.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceRef.internalValue = value.sourceRef;
      this._type = value.type;
    }
  }

  // source_ref - computed: false, optional: false, required: true
  private _sourceRef = new SessionAuthenticationPolicyAuthenticationSourceSourceRefOutputReference(this, "source_ref");
  public get sourceRef() {
    return this._sourceRef;
  }
  public putSourceRef(value: SessionAuthenticationPolicyAuthenticationSourceSourceRef) {
    this._sourceRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRefInput() {
    return this._sourceRef.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policy pingfederate_session_authentication_policy}
*/
export class SessionAuthenticationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_session_authentication_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SessionAuthenticationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SessionAuthenticationPolicy to import
  * @param importFromId The id of the existing SessionAuthenticationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SessionAuthenticationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_session_authentication_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policy pingfederate_session_authentication_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SessionAuthenticationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SessionAuthenticationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_session_authentication_policy',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationSource.internalValue = config.authenticationSource;
    this._authnContextSensitive = config.authnContextSensitive;
    this._enableSessions = config.enableSessions;
    this._idleTimeoutMins = config.idleTimeoutMins;
    this._maxTimeoutMins = config.maxTimeoutMins;
    this._persistent = config.persistent;
    this._policyId = config.policyId;
    this._timeoutDisplayUnit = config.timeoutDisplayUnit;
    this._userDeviceType = config.userDeviceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_source - computed: false, optional: false, required: true
  private _authenticationSource = new SessionAuthenticationPolicyAuthenticationSourceOutputReference(this, "authentication_source");
  public get authenticationSource() {
    return this._authenticationSource;
  }
  public putAuthenticationSource(value: SessionAuthenticationPolicyAuthenticationSource) {
    this._authenticationSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSourceInput() {
    return this._authenticationSource.internalValue;
  }

  // authn_context_sensitive - computed: true, optional: true, required: false
  private _authnContextSensitive?: boolean | cdktf.IResolvable; 
  public get authnContextSensitive() {
    return this.getBooleanAttribute('authn_context_sensitive');
  }
  public set authnContextSensitive(value: boolean | cdktf.IResolvable) {
    this._authnContextSensitive = value;
  }
  public resetAuthnContextSensitive() {
    this._authnContextSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnContextSensitiveInput() {
    return this._authnContextSensitive;
  }

  // enable_sessions - computed: false, optional: false, required: true
  private _enableSessions?: boolean | cdktf.IResolvable; 
  public get enableSessions() {
    return this.getBooleanAttribute('enable_sessions');
  }
  public set enableSessions(value: boolean | cdktf.IResolvable) {
    this._enableSessions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSessionsInput() {
    return this._enableSessions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idle_timeout_mins - computed: false, optional: true, required: false
  private _idleTimeoutMins?: number; 
  public get idleTimeoutMins() {
    return this.getNumberAttribute('idle_timeout_mins');
  }
  public set idleTimeoutMins(value: number) {
    this._idleTimeoutMins = value;
  }
  public resetIdleTimeoutMins() {
    this._idleTimeoutMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutMinsInput() {
    return this._idleTimeoutMins;
  }

  // max_timeout_mins - computed: false, optional: true, required: false
  private _maxTimeoutMins?: number; 
  public get maxTimeoutMins() {
    return this.getNumberAttribute('max_timeout_mins');
  }
  public set maxTimeoutMins(value: number) {
    this._maxTimeoutMins = value;
  }
  public resetMaxTimeoutMins() {
    this._maxTimeoutMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeoutMinsInput() {
    return this._maxTimeoutMins;
  }

  // persistent - computed: true, optional: true, required: false
  private _persistent?: boolean | cdktf.IResolvable; 
  public get persistent() {
    return this.getBooleanAttribute('persistent');
  }
  public set persistent(value: boolean | cdktf.IResolvable) {
    this._persistent = value;
  }
  public resetPersistent() {
    this._persistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentInput() {
    return this._persistent;
  }

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // timeout_display_unit - computed: true, optional: true, required: false
  private _timeoutDisplayUnit?: string; 
  public get timeoutDisplayUnit() {
    return this.getStringAttribute('timeout_display_unit');
  }
  public set timeoutDisplayUnit(value: string) {
    this._timeoutDisplayUnit = value;
  }
  public resetTimeoutDisplayUnit() {
    this._timeoutDisplayUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutDisplayUnitInput() {
    return this._timeoutDisplayUnit;
  }

  // user_device_type - computed: true, optional: true, required: false
  private _userDeviceType?: string; 
  public get userDeviceType() {
    return this.getStringAttribute('user_device_type');
  }
  public set userDeviceType(value: string) {
    this._userDeviceType = value;
  }
  public resetUserDeviceType() {
    this._userDeviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDeviceTypeInput() {
    return this._userDeviceType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_source: sessionAuthenticationPolicyAuthenticationSourceToTerraform(this._authenticationSource.internalValue),
      authn_context_sensitive: cdktf.booleanToTerraform(this._authnContextSensitive),
      enable_sessions: cdktf.booleanToTerraform(this._enableSessions),
      idle_timeout_mins: cdktf.numberToTerraform(this._idleTimeoutMins),
      max_timeout_mins: cdktf.numberToTerraform(this._maxTimeoutMins),
      persistent: cdktf.booleanToTerraform(this._persistent),
      policy_id: cdktf.stringToTerraform(this._policyId),
      timeout_display_unit: cdktf.stringToTerraform(this._timeoutDisplayUnit),
      user_device_type: cdktf.stringToTerraform(this._userDeviceType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_source: {
        value: sessionAuthenticationPolicyAuthenticationSourceToHclTerraform(this._authenticationSource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SessionAuthenticationPolicyAuthenticationSource",
      },
      authn_context_sensitive: {
        value: cdktf.booleanToHclTerraform(this._authnContextSensitive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_sessions: {
        value: cdktf.booleanToHclTerraform(this._enableSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      idle_timeout_mins: {
        value: cdktf.numberToHclTerraform(this._idleTimeoutMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_timeout_mins: {
        value: cdktf.numberToHclTerraform(this._maxTimeoutMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistent: {
        value: cdktf.booleanToHclTerraform(this._persistent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_display_unit: {
        value: cdktf.stringToHclTerraform(this._timeoutDisplayUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_device_type: {
        value: cdktf.stringToHclTerraform(this._userDeviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
