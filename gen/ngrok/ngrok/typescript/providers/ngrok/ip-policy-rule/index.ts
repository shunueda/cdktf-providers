// https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/ip_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpPolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * the action to apply to the policy rule, either `allow` or `deny`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/ip_policy_rule#action IpPolicyRule#action}
  */
  readonly action: string;
  /**
  * an IP or IP range specified in CIDR notation. IPv4 and IPv6 are both supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/ip_policy_rule#cidr IpPolicyRule#cidr}
  */
  readonly cidr: string;
  /**
  * human-readable description of the source IPs of this IP rule. optional, max 255 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/ip_policy_rule#description IpPolicyRule#description}
  */
  readonly description?: string;
  /**
  * ID of the IP policy this IP policy rule will be attached to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/ip_policy_rule#ip_policy_id IpPolicyRule#ip_policy_id}
  */
  readonly ipPolicyId: string;
  /**
  * arbitrary user-defined machine-readable data of this IP policy rule. optional, max 4096 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/ip_policy_rule#metadata IpPolicyRule#metadata}
  */
  readonly metadata?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/ip_policy_rule ngrok_ip_policy_rule}
*/
export class IpPolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ngrok_ip_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpPolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpPolicyRule to import
  * @param importFromId The id of the existing IpPolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/ip_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpPolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ngrok_ip_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ngrok/ngrok/0.5.0/docs/resources/ip_policy_rule ngrok_ip_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpPolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: IpPolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'ngrok_ip_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'ngrok',
        providerVersion: '0.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._cidr = config.cidr;
    this._description = config.description;
    this._ipPolicyId = config.ipPolicyId;
    this._metadata = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_policy_id - computed: false, optional: false, required: true
  private _ipPolicyId?: string; 
  public get ipPolicyId() {
    return this.getStringAttribute('ip_policy_id');
  }
  public set ipPolicyId(value: string) {
    this._ipPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPolicyIdInput() {
    return this._ipPolicyId;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      cidr: cdktf.stringToTerraform(this._cidr),
      description: cdktf.stringToTerraform(this._description),
      ip_policy_id: cdktf.stringToTerraform(this._ipPolicyId),
      metadata: cdktf.stringToTerraform(this._metadata),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_policy_id: {
        value: cdktf.stringToHclTerraform(this._ipPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
