// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ips_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the base policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ips_policies#basepolicy_id IpsPolicies#basepolicy_id}
  */
  readonly basepolicyId: string;
  /**
  * Name of the base policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ips_policies#basepolicy_name IpsPolicies#basepolicy_name}
  */
  readonly basepolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ips_policies#id IpsPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The inspection mode of this policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ips_policies#inspection_mode IpsPolicies#inspection_mode}
  */
  readonly inspectionMode: string;
  /**
  * The name of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ips_policies#name IpsPolicies#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ips_policies fmc_ips_policies}
*/
export class IpsPolicies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_ips_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpsPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpsPolicies to import
  * @param importFromId The id of the existing IpsPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ips_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpsPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_ips_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/ips_policies fmc_ips_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: IpsPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_ips_policies',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._basepolicyId = config.basepolicyId;
    this._basepolicyName = config.basepolicyName;
    this._id = config.id;
    this._inspectionMode = config.inspectionMode;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // basepolicy_id - computed: false, optional: false, required: true
  private _basepolicyId?: string; 
  public get basepolicyId() {
    return this.getStringAttribute('basepolicy_id');
  }
  public set basepolicyId(value: string) {
    this._basepolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basepolicyIdInput() {
    return this._basepolicyId;
  }

  // basepolicy_name - computed: false, optional: true, required: false
  private _basepolicyName?: string; 
  public get basepolicyName() {
    return this.getStringAttribute('basepolicy_name');
  }
  public set basepolicyName(value: string) {
    this._basepolicyName = value;
  }
  public resetBasepolicyName() {
    this._basepolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basepolicyNameInput() {
    return this._basepolicyName;
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

  // inspection_mode - computed: false, optional: false, required: true
  private _inspectionMode?: string; 
  public get inspectionMode() {
    return this.getStringAttribute('inspection_mode');
  }
  public set inspectionMode(value: string) {
    this._inspectionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionModeInput() {
    return this._inspectionMode;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      basepolicy_id: cdktf.stringToTerraform(this._basepolicyId),
      basepolicy_name: cdktf.stringToTerraform(this._basepolicyName),
      id: cdktf.stringToTerraform(this._id),
      inspection_mode: cdktf.stringToTerraform(this._inspectionMode),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      basepolicy_id: {
        value: cdktf.stringToHclTerraform(this._basepolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basepolicy_name: {
        value: cdktf.stringToHclTerraform(this._basepolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inspection_mode: {
        value: cdktf.stringToHclTerraform(this._inspectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
