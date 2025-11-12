// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/membership#consortium_id Membership#consortium_id}
  */
  readonly consortiumId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/membership#org_name Membership#org_name}
  */
  readonly orgName: string;
  /**
  * In a decentalized consortium memberships are driven by invitation, and will be pre-existing at the point of deploying infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/membership#pre_existing Membership#pre_existing}
  */
  readonly preExisting?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/membership kaleido_membership}
*/
export class Membership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Membership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Membership to import
  * @param importFromId The id of the existing Membership that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Membership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/membership kaleido_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MembershipConfig
  */
  public constructor(scope: Construct, id: string, config: MembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_membership',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consortiumId = config.consortiumId;
    this._orgName = config.orgName;
    this._preExisting = config.preExisting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consortium_id - computed: false, optional: false, required: true
  private _consortiumId?: string; 
  public get consortiumId() {
    return this.getStringAttribute('consortium_id');
  }
  public set consortiumId(value: string) {
    this._consortiumId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consortiumIdInput() {
    return this._consortiumId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // org_name - computed: false, optional: false, required: true
  private _orgName?: string; 
  public get orgName() {
    return this.getStringAttribute('org_name');
  }
  public set orgName(value: string) {
    this._orgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNameInput() {
    return this._orgName;
  }

  // pre_existing - computed: true, optional: true, required: false
  private _preExisting?: boolean | cdktf.IResolvable; 
  public get preExisting() {
    return this.getBooleanAttribute('pre_existing');
  }
  public set preExisting(value: boolean | cdktf.IResolvable) {
    this._preExisting = value;
  }
  public resetPreExisting() {
    this._preExisting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preExistingInput() {
    return this._preExisting;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consortium_id: cdktf.stringToTerraform(this._consortiumId),
      org_name: cdktf.stringToTerraform(this._orgName),
      pre_existing: cdktf.booleanToTerraform(this._preExisting),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consortium_id: {
        value: cdktf.stringToHclTerraform(this._consortiumId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_name: {
        value: cdktf.stringToHclTerraform(this._orgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_existing: {
        value: cdktf.booleanToHclTerraform(this._preExisting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
