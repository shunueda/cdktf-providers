// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_aap_selected_hostnames
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecAapSelectedHostnamesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_aap_selected_hostnames#config_id AppsecAapSelectedHostnames#config_id}
  */
  readonly configId: number;
  /**
  * List of hostnames to be evaluated 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_aap_selected_hostnames#evaluated_hosts AppsecAapSelectedHostnames#evaluated_hosts}
  */
  readonly evaluatedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_aap_selected_hostnames#id AppsecAapSelectedHostnames#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of hostnames to be protected 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_aap_selected_hostnames#protected_hosts AppsecAapSelectedHostnames#protected_hosts}
  */
  readonly protectedHosts?: string[];
  /**
  * Unique identifier of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_aap_selected_hostnames#security_policy_id AppsecAapSelectedHostnames#security_policy_id}
  */
  readonly securityPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_aap_selected_hostnames akamai_appsec_aap_selected_hostnames}
*/
export class AppsecAapSelectedHostnames extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_aap_selected_hostnames";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecAapSelectedHostnames resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecAapSelectedHostnames to import
  * @param importFromId The id of the existing AppsecAapSelectedHostnames that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_aap_selected_hostnames#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecAapSelectedHostnames to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_aap_selected_hostnames", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_aap_selected_hostnames akamai_appsec_aap_selected_hostnames} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecAapSelectedHostnamesConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecAapSelectedHostnamesConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_aap_selected_hostnames',
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
    this._evaluatedHosts = config.evaluatedHosts;
    this._id = config.id;
    this._protectedHosts = config.protectedHosts;
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

  // evaluated_hosts - computed: false, optional: true, required: false
  private _evaluatedHosts?: string[]; 
  public get evaluatedHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('evaluated_hosts'));
  }
  public set evaluatedHosts(value: string[]) {
    this._evaluatedHosts = value;
  }
  public resetEvaluatedHosts() {
    this._evaluatedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluatedHostsInput() {
    return this._evaluatedHosts;
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

  // protected_hosts - computed: false, optional: true, required: false
  private _protectedHosts?: string[]; 
  public get protectedHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('protected_hosts'));
  }
  public set protectedHosts(value: string[]) {
    this._protectedHosts = value;
  }
  public resetProtectedHosts() {
    this._protectedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedHostsInput() {
    return this._protectedHosts;
  }

  // security_policy_id - computed: false, optional: false, required: true
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
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
      evaluated_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._evaluatedHosts),
      id: cdktf.stringToTerraform(this._id),
      protected_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protectedHosts),
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
      evaluated_hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._evaluatedHosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protected_hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protectedHosts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
