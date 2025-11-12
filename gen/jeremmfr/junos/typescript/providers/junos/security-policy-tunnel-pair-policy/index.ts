// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_policy_tunnel_pair_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityPolicyTunnelPairPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of policy when from zone zone_a to zone zone_b.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_policy_tunnel_pair_policy#policy_a_to_b SecurityPolicyTunnelPairPolicy#policy_a_to_b}
  */
  readonly policyAToB: string;
  /**
  * The name of policy when from zone zone_b to zone zone_a.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_policy_tunnel_pair_policy#policy_b_to_a SecurityPolicyTunnelPairPolicy#policy_b_to_a}
  */
  readonly policyBToA: string;
  /**
  * The name of first zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_policy_tunnel_pair_policy#zone_a SecurityPolicyTunnelPairPolicy#zone_a}
  */
  readonly zoneA: string;
  /**
  * The name of second zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_policy_tunnel_pair_policy#zone_b SecurityPolicyTunnelPairPolicy#zone_b}
  */
  readonly zoneB: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_policy_tunnel_pair_policy junos_security_policy_tunnel_pair_policy}
*/
export class SecurityPolicyTunnelPairPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_policy_tunnel_pair_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityPolicyTunnelPairPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityPolicyTunnelPairPolicy to import
  * @param importFromId The id of the existing SecurityPolicyTunnelPairPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_policy_tunnel_pair_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityPolicyTunnelPairPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_policy_tunnel_pair_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_policy_tunnel_pair_policy junos_security_policy_tunnel_pair_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityPolicyTunnelPairPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityPolicyTunnelPairPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_policy_tunnel_pair_policy',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._policyAToB = config.policyAToB;
    this._policyBToA = config.policyBToA;
    this._zoneA = config.zoneA;
    this._zoneB = config.zoneB;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_a_to_b - computed: false, optional: false, required: true
  private _policyAToB?: string; 
  public get policyAToB() {
    return this.getStringAttribute('policy_a_to_b');
  }
  public set policyAToB(value: string) {
    this._policyAToB = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyAToBInput() {
    return this._policyAToB;
  }

  // policy_b_to_a - computed: false, optional: false, required: true
  private _policyBToA?: string; 
  public get policyBToA() {
    return this.getStringAttribute('policy_b_to_a');
  }
  public set policyBToA(value: string) {
    this._policyBToA = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyBToAInput() {
    return this._policyBToA;
  }

  // zone_a - computed: false, optional: false, required: true
  private _zoneA?: string; 
  public get zoneA() {
    return this.getStringAttribute('zone_a');
  }
  public set zoneA(value: string) {
    this._zoneA = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAInput() {
    return this._zoneA;
  }

  // zone_b - computed: false, optional: false, required: true
  private _zoneB?: string; 
  public get zoneB() {
    return this.getStringAttribute('zone_b');
  }
  public set zoneB(value: string) {
    this._zoneB = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneBInput() {
    return this._zoneB;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      policy_a_to_b: cdktf.stringToTerraform(this._policyAToB),
      policy_b_to_a: cdktf.stringToTerraform(this._policyBToA),
      zone_a: cdktf.stringToTerraform(this._zoneA),
      zone_b: cdktf.stringToTerraform(this._zoneB),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      policy_a_to_b: {
        value: cdktf.stringToHclTerraform(this._policyAToB),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_b_to_a: {
        value: cdktf.stringToHclTerraform(this._policyBToA),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_a: {
        value: cdktf.stringToHclTerraform(this._zoneA),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_b: {
        value: cdktf.stringToHclTerraform(this._zoneB),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
