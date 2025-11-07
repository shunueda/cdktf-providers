// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_evasive_path_match
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecAdvancedSettingsEvasivePathMatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_evasive_path_match#config_id AppsecAdvancedSettingsEvasivePathMatch#config_id}
  */
  readonly configId: number;
  /**
  * Whether to enable the evasive path match setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_evasive_path_match#enable_path_match AppsecAdvancedSettingsEvasivePathMatch#enable_path_match}
  */
  readonly enablePathMatch: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_evasive_path_match#id AppsecAdvancedSettingsEvasivePathMatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_evasive_path_match#security_policy_id AppsecAdvancedSettingsEvasivePathMatch#security_policy_id}
  */
  readonly securityPolicyId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_evasive_path_match akamai_appsec_advanced_settings_evasive_path_match}
*/
export class AppsecAdvancedSettingsEvasivePathMatch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_advanced_settings_evasive_path_match";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecAdvancedSettingsEvasivePathMatch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecAdvancedSettingsEvasivePathMatch to import
  * @param importFromId The id of the existing AppsecAdvancedSettingsEvasivePathMatch that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_evasive_path_match#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecAdvancedSettingsEvasivePathMatch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_advanced_settings_evasive_path_match", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_advanced_settings_evasive_path_match akamai_appsec_advanced_settings_evasive_path_match} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecAdvancedSettingsEvasivePathMatchConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecAdvancedSettingsEvasivePathMatchConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_advanced_settings_evasive_path_match',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configId = config.configId;
    this._enablePathMatch = config.enablePathMatch;
    this._id = config.id;
    this._securityPolicyId = config.securityPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // enable_path_match - computed: false, optional: false, required: true
  private _enablePathMatch?: boolean | cdktf.IResolvable; 
  public get enablePathMatch() {
    return this.getBooleanAttribute('enable_path_match');
  }
  public set enablePathMatch(value: boolean | cdktf.IResolvable) {
    this._enablePathMatch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePathMatchInput() {
    return this._enablePathMatch;
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

  // security_policy_id - computed: false, optional: true, required: false
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  public resetSecurityPolicyId() {
    this._securityPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.numberToTerraform(this._configId),
      enable_path_match: cdktf.booleanToTerraform(this._enablePathMatch),
      id: cdktf.stringToTerraform(this._id),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_path_match: {
        value: cdktf.booleanToHclTerraform(this._enablePathMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
