// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_reputation_profile_analysis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecReputationProfileAnalysisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_reputation_profile_analysis#config_id AppsecReputationProfileAnalysis#config_id}
  */
  readonly configId: number;
  /**
  * Whether to add a value indicating that shared IPs are included in HTTP header and SIEM integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_reputation_profile_analysis#forward_shared_ip_to_http_header_siem AppsecReputationProfileAnalysis#forward_shared_ip_to_http_header_siem}
  */
  readonly forwardSharedIpToHttpHeaderSiem: boolean | cdktf.IResolvable;
  /**
  * Whether to add client reputation details to requests forwarded to the origin server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_reputation_profile_analysis#forward_to_http_header AppsecReputationProfileAnalysis#forward_to_http_header}
  */
  readonly forwardToHttpHeader: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_reputation_profile_analysis#id AppsecReputationProfileAnalysis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_reputation_profile_analysis#security_policy_id AppsecReputationProfileAnalysis#security_policy_id}
  */
  readonly securityPolicyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_reputation_profile_analysis akamai_appsec_reputation_profile_analysis}
*/
export class AppsecReputationProfileAnalysis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_reputation_profile_analysis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecReputationProfileAnalysis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecReputationProfileAnalysis to import
  * @param importFromId The id of the existing AppsecReputationProfileAnalysis that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_reputation_profile_analysis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecReputationProfileAnalysis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_reputation_profile_analysis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_reputation_profile_analysis akamai_appsec_reputation_profile_analysis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecReputationProfileAnalysisConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecReputationProfileAnalysisConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_reputation_profile_analysis',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
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
    this._forwardSharedIpToHttpHeaderSiem = config.forwardSharedIpToHttpHeaderSiem;
    this._forwardToHttpHeader = config.forwardToHttpHeader;
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

  // forward_shared_ip_to_http_header_siem - computed: false, optional: false, required: true
  private _forwardSharedIpToHttpHeaderSiem?: boolean | cdktf.IResolvable; 
  public get forwardSharedIpToHttpHeaderSiem() {
    return this.getBooleanAttribute('forward_shared_ip_to_http_header_siem');
  }
  public set forwardSharedIpToHttpHeaderSiem(value: boolean | cdktf.IResolvable) {
    this._forwardSharedIpToHttpHeaderSiem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardSharedIpToHttpHeaderSiemInput() {
    return this._forwardSharedIpToHttpHeaderSiem;
  }

  // forward_to_http_header - computed: false, optional: false, required: true
  private _forwardToHttpHeader?: boolean | cdktf.IResolvable; 
  public get forwardToHttpHeader() {
    return this.getBooleanAttribute('forward_to_http_header');
  }
  public set forwardToHttpHeader(value: boolean | cdktf.IResolvable) {
    this._forwardToHttpHeader = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardToHttpHeaderInput() {
    return this._forwardToHttpHeader;
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
      forward_shared_ip_to_http_header_siem: cdktf.booleanToTerraform(this._forwardSharedIpToHttpHeaderSiem),
      forward_to_http_header: cdktf.booleanToTerraform(this._forwardToHttpHeader),
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
      forward_shared_ip_to_http_header_siem: {
        value: cdktf.booleanToHclTerraform(this._forwardSharedIpToHttpHeaderSiem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward_to_http_header: {
        value: cdktf.booleanToHclTerraform(this._forwardToHttpHeader),
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
