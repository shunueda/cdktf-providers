// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy_default_protections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecSecurityPolicyDefaultProtectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy_default_protections#config_id AppsecSecurityPolicyDefaultProtections#config_id}
  */
  readonly configId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy_default_protections#id AppsecSecurityPolicyDefaultProtections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the new security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy_default_protections#security_policy_name AppsecSecurityPolicyDefaultProtections#security_policy_name}
  */
  readonly securityPolicyName: string;
  /**
  * Four-character alphanumeric string prefix used in creating the security policy ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy_default_protections#security_policy_prefix AppsecSecurityPolicyDefaultProtections#security_policy_prefix}
  */
  readonly securityPolicyPrefix: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy_default_protections akamai_appsec_security_policy_default_protections}
*/
export class AppsecSecurityPolicyDefaultProtections extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_security_policy_default_protections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecSecurityPolicyDefaultProtections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecSecurityPolicyDefaultProtections to import
  * @param importFromId The id of the existing AppsecSecurityPolicyDefaultProtections that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy_default_protections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecSecurityPolicyDefaultProtections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_security_policy_default_protections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_security_policy_default_protections akamai_appsec_security_policy_default_protections} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecSecurityPolicyDefaultProtectionsConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecSecurityPolicyDefaultProtectionsConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_security_policy_default_protections',
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
