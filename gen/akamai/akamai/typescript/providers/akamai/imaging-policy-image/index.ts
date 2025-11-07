// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/imaging_policy_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImagingPolicyImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * With this flag set to false, the user can perform modifications on staging without affecting the version already saved to production. With this flag set to true, the policy will be saved on the production network. It is possible to change it back to false only when there are any changes to the policy qualifying it for the new version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/imaging_policy_image#activate_on_production ImagingPolicyImage#activate_on_production}
  */
  readonly activateOnProduction?: boolean | cdktf.IResolvable;
  /**
  * Unique identifier for the Akamai Contract containing the Policy Set(s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/imaging_policy_image#contract_id ImagingPolicyImage#contract_id}
  */
  readonly contractId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/imaging_policy_image#id ImagingPolicyImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A JSON encoded policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/imaging_policy_image#json ImagingPolicyImage#json}
  */
  readonly json: string;
  /**
  * Unique identifier for a Policy. It is not possible to modify the id of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/imaging_policy_image#policy_id ImagingPolicyImage#policy_id}
  */
  readonly policyId: string;
  /**
  * Unique identifier for the Image & Video Manager Policy Set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/imaging_policy_image#policyset_id ImagingPolicyImage#policyset_id}
  */
  readonly policysetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/imaging_policy_image akamai_imaging_policy_image}
*/
export class ImagingPolicyImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_imaging_policy_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImagingPolicyImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImagingPolicyImage to import
  * @param importFromId The id of the existing ImagingPolicyImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/imaging_policy_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImagingPolicyImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_imaging_policy_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/imaging_policy_image akamai_imaging_policy_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImagingPolicyImageConfig
  */
  public constructor(scope: Construct, id: string, config: ImagingPolicyImageConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_imaging_policy_image',
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
    this._activateOnProduction = config.activateOnProduction;
    this._contractId = config.contractId;
    this._id = config.id;
    this._json = config.json;
    this._policyId = config.policyId;
    this._policysetId = config.policysetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate_on_production - computed: false, optional: true, required: false
  private _activateOnProduction?: boolean | cdktf.IResolvable; 
  public get activateOnProduction() {
    return this.getBooleanAttribute('activate_on_production');
  }
  public set activateOnProduction(value: boolean | cdktf.IResolvable) {
    this._activateOnProduction = value;
  }
  public resetActivateOnProduction() {
    this._activateOnProduction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateOnProductionInput() {
    return this._activateOnProduction;
  }

  // contract_id - computed: false, optional: false, required: true
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
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

  // json - computed: false, optional: false, required: true
  private _json?: string; 
  public get json() {
    return this.getStringAttribute('json');
  }
  public set json(value: string) {
    this._json = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // policyset_id - computed: false, optional: false, required: true
  private _policysetId?: string; 
  public get policysetId() {
    return this.getStringAttribute('policyset_id');
  }
  public set policysetId(value: string) {
    this._policysetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policysetIdInput() {
    return this._policysetId;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activate_on_production: cdktf.booleanToTerraform(this._activateOnProduction),
      contract_id: cdktf.stringToTerraform(this._contractId),
      id: cdktf.stringToTerraform(this._id),
      json: cdktf.stringToTerraform(this._json),
      policy_id: cdktf.stringToTerraform(this._policyId),
      policyset_id: cdktf.stringToTerraform(this._policysetId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activate_on_production: {
        value: cdktf.booleanToHclTerraform(this._activateOnProduction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
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
      json: {
        value: cdktf.stringToHclTerraform(this._json),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policyset_id: {
        value: cdktf.stringToHclTerraform(this._policysetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
