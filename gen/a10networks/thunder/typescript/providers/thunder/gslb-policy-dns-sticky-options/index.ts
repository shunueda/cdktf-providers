// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns_sticky_options
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbPolicyDnsStickyOptionsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Use ECS for sticky creation and lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns_sticky_options#edns_client_subnet GslbPolicyDnsStickyOptionsA#edns_client_subnet}
  */
  readonly ednsClientSubnet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns_sticky_options#id GslbPolicyDnsStickyOptionsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Only use ECS for session creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns_sticky_options#only_ecs GslbPolicyDnsStickyOptionsA#only_ecs}
  */
  readonly onlyEcs?: number;
  /**
  * Policy_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns_sticky_options#policy_name GslbPolicyDnsStickyOptionsA#policy_name}
  */
  readonly policyName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns_sticky_options#uuid GslbPolicyDnsStickyOptionsA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns_sticky_options thunder_gslb_policy_dns_sticky_options}
*/
export class GslbPolicyDnsStickyOptionsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_policy_dns_sticky_options";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbPolicyDnsStickyOptionsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbPolicyDnsStickyOptionsA to import
  * @param importFromId The id of the existing GslbPolicyDnsStickyOptionsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns_sticky_options#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbPolicyDnsStickyOptionsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_policy_dns_sticky_options", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/gslb_policy_dns_sticky_options thunder_gslb_policy_dns_sticky_options} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbPolicyDnsStickyOptionsAConfig
  */
  public constructor(scope: Construct, id: string, config: GslbPolicyDnsStickyOptionsAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_policy_dns_sticky_options',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ednsClientSubnet = config.ednsClientSubnet;
    this._id = config.id;
    this._onlyEcs = config.onlyEcs;
    this._policyName = config.policyName;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // edns_client_subnet - computed: false, optional: true, required: false
  private _ednsClientSubnet?: number; 
  public get ednsClientSubnet() {
    return this.getNumberAttribute('edns_client_subnet');
  }
  public set ednsClientSubnet(value: number) {
    this._ednsClientSubnet = value;
  }
  public resetEdnsClientSubnet() {
    this._ednsClientSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsClientSubnetInput() {
    return this._ednsClientSubnet;
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

  // only_ecs - computed: false, optional: true, required: false
  private _onlyEcs?: number; 
  public get onlyEcs() {
    return this.getNumberAttribute('only_ecs');
  }
  public set onlyEcs(value: number) {
    this._onlyEcs = value;
  }
  public resetOnlyEcs() {
    this._onlyEcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyEcsInput() {
    return this._onlyEcs;
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      edns_client_subnet: cdktf.numberToTerraform(this._ednsClientSubnet),
      id: cdktf.stringToTerraform(this._id),
      only_ecs: cdktf.numberToTerraform(this._onlyEcs),
      policy_name: cdktf.stringToTerraform(this._policyName),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      edns_client_subnet: {
        value: cdktf.numberToHclTerraform(this._ednsClientSubnet),
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
      only_ecs: {
        value: cdktf.numberToHclTerraform(this._onlyEcs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
