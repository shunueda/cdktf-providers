// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy#config_id AppsecSecurityPolicy#config_id}
  */
  readonly configId: number;
  /**
  * Unique identifier of the existing security policy being cloned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy#create_from_security_policy_id AppsecSecurityPolicy#create_from_security_policy_id}
  */
  readonly createFromSecurityPolicyId?: string;
  /**
  * Whether to assign default settings to the new security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy#default_settings AppsecSecurityPolicy#default_settings}
  */
  readonly defaultSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy#id AppsecSecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the new security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy#security_policy_name AppsecSecurityPolicy#security_policy_name}
  */
  readonly securityPolicyName: string;
  /**
  * Four-character alphanumeric string prefix used in creating the security policy ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy#security_policy_prefix AppsecSecurityPolicy#security_policy_prefix}
  */
  readonly securityPolicyPrefix: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy akamai_appsec_security_policy}
*/
export class AppsecSecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecSecurityPolicy to import
  * @param importFromId The id of the existing AppsecSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy akamai_appsec_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_security_policy',
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
    this._createFromSecurityPolicyId = config.createFromSecurityPolicyId;
    this._defaultSettings = config.defaultSettings;
    this._id = config.id;
    this._securityPolicyName = config.securityPolicyName;
    this._securityPolicyPrefix = config.securityPolicyPrefix;
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

  // create_from_security_policy_id - computed: false, optional: true, required: false
  private _createFromSecurityPolicyId?: string; 
  public get createFromSecurityPolicyId() {
    return this.getStringAttribute('create_from_security_policy_id');
  }
  public set createFromSecurityPolicyId(value: string) {
    this._createFromSecurityPolicyId = value;
  }
  public resetCreateFromSecurityPolicyId() {
    this._createFromSecurityPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createFromSecurityPolicyIdInput() {
    return this._createFromSecurityPolicyId;
  }

  // default_settings - computed: false, optional: true, required: false
  private _defaultSettings?: boolean | cdktf.IResolvable; 
  public get defaultSettings() {
    return this.getBooleanAttribute('default_settings');
  }
  public set defaultSettings(value: boolean | cdktf.IResolvable) {
    this._defaultSettings = value;
  }
  public resetDefaultSettings() {
    this._defaultSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSettingsInput() {
    return this._defaultSettings;
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

  // security_policy_id - computed: true, optional: false, required: false
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }

  // security_policy_name - computed: false, optional: false, required: true
  private _securityPolicyName?: string; 
  public get securityPolicyName() {
    return this.getStringAttribute('security_policy_name');
  }
  public set securityPolicyName(value: string) {
    this._securityPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyNameInput() {
    return this._securityPolicyName;
  }

  // security_policy_prefix - computed: false, optional: false, required: true
  private _securityPolicyPrefix?: string; 
  public get securityPolicyPrefix() {
    return this.getStringAttribute('security_policy_prefix');
  }
  public set securityPolicyPrefix(value: string) {
    this._securityPolicyPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyPrefixInput() {
    return this._securityPolicyPrefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_id: cdktf.numberToTerraform(this._configId),
      create_from_security_policy_id: cdktf.stringToTerraform(this._createFromSecurityPolicyId),
      default_settings: cdktf.booleanToTerraform(this._defaultSettings),
      id: cdktf.stringToTerraform(this._id),
      security_policy_name: cdktf.stringToTerraform(this._securityPolicyName),
      security_policy_prefix: cdktf.stringToTerraform(this._securityPolicyPrefix),
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
      create_from_security_policy_id: {
        value: cdktf.stringToHclTerraform(this._createFromSecurityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_settings: {
        value: cdktf.booleanToHclTerraform(this._defaultSettings),
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
      security_policy_name: {
        value: cdktf.stringToHclTerraform(this._securityPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy_prefix: {
        value: cdktf.stringToHclTerraform(this._securityPolicyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
