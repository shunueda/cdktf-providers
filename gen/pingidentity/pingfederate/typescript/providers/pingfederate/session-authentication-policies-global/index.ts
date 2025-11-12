// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policies_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SessionAuthenticationPoliciesGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines whether authentication sessions are enabled globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policies_global#enable_sessions SessionAuthenticationPoliciesGlobal#enable_sessions}
  */
  readonly enableSessions: boolean | cdktf.IResolvable;
  /**
  * Determines whether to hash the value of the unique user key attribute. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policies_global#hash_unique_user_key_attribute SessionAuthenticationPoliciesGlobal#hash_unique_user_key_attribute}
  */
  readonly hashUniqueUserKeyAttribute?: boolean | cdktf.IResolvable;
  /**
  * The display unit for the idle timeout period in the PingFederate administrative console. When the display unit is `HOURS` or `DAYS`, the timeout value in minutes must correspond to a whole number value for the specified unit. Supported values are `MINUTES`, `HOURS`, and `DAYS`. Default value is `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policies_global#idle_timeout_display_unit SessionAuthenticationPoliciesGlobal#idle_timeout_display_unit}
  */
  readonly idleTimeoutDisplayUnit?: string;
  /**
  * The idle timeout period, in minutes. If set to `-1`, the idle timeout will be set to the maximum timeout. The default is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policies_global#idle_timeout_mins SessionAuthenticationPoliciesGlobal#idle_timeout_mins}
  */
  readonly idleTimeoutMins?: number;
  /**
  * The display unit for the maximum timeout period in the PingFederate administrative console. When the display unit is `HOURS` or `DAYS`, the timeout value in minutes must correspond to a whole number value for the specified unit. Supported values are `MINUTES`, `HOURS`, and `DAYS`. Default value is `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policies_global#max_timeout_display_unit SessionAuthenticationPoliciesGlobal#max_timeout_display_unit}
  */
  readonly maxTimeoutDisplayUnit?: string;
  /**
  * The maximum timeout period, in minutes. If set to `-1`, sessions do not expire. The default is `480`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policies_global#max_timeout_mins SessionAuthenticationPoliciesGlobal#max_timeout_mins}
  */
  readonly maxTimeoutMins?: number;
  /**
  * Determines whether authentication sessions are persistent by default. Persistent sessions are linked to a persistent cookie and stored in a data store. This field is ignored if `enable_sessions` is `false`. Default values is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policies_global#persistent_sessions SessionAuthenticationPoliciesGlobal#persistent_sessions}
  */
  readonly persistentSessions?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policies_global pingfederate_session_authentication_policies_global}
*/
export class SessionAuthenticationPoliciesGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_session_authentication_policies_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SessionAuthenticationPoliciesGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SessionAuthenticationPoliciesGlobal to import
  * @param importFromId The id of the existing SessionAuthenticationPoliciesGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policies_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SessionAuthenticationPoliciesGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_session_authentication_policies_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/session_authentication_policies_global pingfederate_session_authentication_policies_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SessionAuthenticationPoliciesGlobalConfig
  */
  public constructor(scope: Construct, id: string, config: SessionAuthenticationPoliciesGlobalConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_session_authentication_policies_global',
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
    this._enableSessions = config.enableSessions;
    this._hashUniqueUserKeyAttribute = config.hashUniqueUserKeyAttribute;
    this._idleTimeoutDisplayUnit = config.idleTimeoutDisplayUnit;
    this._idleTimeoutMins = config.idleTimeoutMins;
    this._maxTimeoutDisplayUnit = config.maxTimeoutDisplayUnit;
    this._maxTimeoutMins = config.maxTimeoutMins;
    this._persistentSessions = config.persistentSessions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // hash_unique_user_key_attribute - computed: true, optional: true, required: false
  private _hashUniqueUserKeyAttribute?: boolean | cdktf.IResolvable; 
  public get hashUniqueUserKeyAttribute() {
    return this.getBooleanAttribute('hash_unique_user_key_attribute');
  }
  public set hashUniqueUserKeyAttribute(value: boolean | cdktf.IResolvable) {
    this._hashUniqueUserKeyAttribute = value;
  }
  public resetHashUniqueUserKeyAttribute() {
    this._hashUniqueUserKeyAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashUniqueUserKeyAttributeInput() {
    return this._hashUniqueUserKeyAttribute;
  }

  // idle_timeout_display_unit - computed: true, optional: true, required: false
  private _idleTimeoutDisplayUnit?: string; 
  public get idleTimeoutDisplayUnit() {
    return this.getStringAttribute('idle_timeout_display_unit');
  }
  public set idleTimeoutDisplayUnit(value: string) {
    this._idleTimeoutDisplayUnit = value;
  }
  public resetIdleTimeoutDisplayUnit() {
    this._idleTimeoutDisplayUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutDisplayUnitInput() {
    return this._idleTimeoutDisplayUnit;
  }

  // idle_timeout_mins - computed: true, optional: true, required: false
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

  // max_timeout_display_unit - computed: true, optional: true, required: false
  private _maxTimeoutDisplayUnit?: string; 
  public get maxTimeoutDisplayUnit() {
    return this.getStringAttribute('max_timeout_display_unit');
  }
  public set maxTimeoutDisplayUnit(value: string) {
    this._maxTimeoutDisplayUnit = value;
  }
  public resetMaxTimeoutDisplayUnit() {
    this._maxTimeoutDisplayUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeoutDisplayUnitInput() {
    return this._maxTimeoutDisplayUnit;
  }

  // max_timeout_mins - computed: true, optional: true, required: false
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

  // persistent_sessions - computed: true, optional: true, required: false
  private _persistentSessions?: boolean | cdktf.IResolvable; 
  public get persistentSessions() {
    return this.getBooleanAttribute('persistent_sessions');
  }
  public set persistentSessions(value: boolean | cdktf.IResolvable) {
    this._persistentSessions = value;
  }
  public resetPersistentSessions() {
    this._persistentSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentSessionsInput() {
    return this._persistentSessions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_sessions: cdktf.booleanToTerraform(this._enableSessions),
      hash_unique_user_key_attribute: cdktf.booleanToTerraform(this._hashUniqueUserKeyAttribute),
      idle_timeout_display_unit: cdktf.stringToTerraform(this._idleTimeoutDisplayUnit),
      idle_timeout_mins: cdktf.numberToTerraform(this._idleTimeoutMins),
      max_timeout_display_unit: cdktf.stringToTerraform(this._maxTimeoutDisplayUnit),
      max_timeout_mins: cdktf.numberToTerraform(this._maxTimeoutMins),
      persistent_sessions: cdktf.booleanToTerraform(this._persistentSessions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_sessions: {
        value: cdktf.booleanToHclTerraform(this._enableSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hash_unique_user_key_attribute: {
        value: cdktf.booleanToHclTerraform(this._hashUniqueUserKeyAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      idle_timeout_display_unit: {
        value: cdktf.stringToHclTerraform(this._idleTimeoutDisplayUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout_mins: {
        value: cdktf.numberToHclTerraform(this._idleTimeoutMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_timeout_display_unit: {
        value: cdktf.stringToHclTerraform(this._maxTimeoutDisplayUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_timeout_mins: {
        value: cdktf.numberToHclTerraform(this._maxTimeoutMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistent_sessions: {
        value: cdktf.booleanToHclTerraform(this._persistentSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
