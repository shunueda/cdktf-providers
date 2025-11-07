// https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/organization_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Invite user by email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/organization_member#email OrganizationMember#email}
  */
  readonly email: string;
  /**
  * A member id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/organization_member#member_id OrganizationMember#member_id}
  */
  readonly memberId?: number;
  /**
  * A canonical of an organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/organization_member#organization_canonical OrganizationMember#organization_canonical}
  */
  readonly organizationCanonical?: string;
  /**
  * The canonical of an entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/organization_member#role_canonical OrganizationMember#role_canonical}
  */
  readonly roleCanonical: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/organization_member cycloid_organization_member}
*/
export class OrganizationMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cycloid_organization_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationMember to import
  * @param importFromId The id of the existing OrganizationMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/organization_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cycloid_organization_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cycloidio/cycloid/0.0.23/docs/resources/organization_member cycloid_organization_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationMemberConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'cycloid_organization_member',
      terraformGeneratorMetadata: {
        providerName: 'cycloid',
        providerVersion: '0.0.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._memberId = config.memberId;
    this._organizationCanonical = config.organizationCanonical;
    this._roleCanonical = config.roleCanonical;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // member_id - computed: true, optional: true, required: false
  private _memberId?: number; 
  public get memberId() {
    return this.getNumberAttribute('member_id');
  }
  public set memberId(value: number) {
    this._memberId = value;
  }
  public resetMemberId() {
    this._memberId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdInput() {
    return this._memberId;
  }

  // organization_canonical - computed: true, optional: true, required: false
  private _organizationCanonical?: string; 
  public get organizationCanonical() {
    return this.getStringAttribute('organization_canonical');
  }
  public set organizationCanonical(value: string) {
    this._organizationCanonical = value;
  }
  public resetOrganizationCanonical() {
    this._organizationCanonical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationCanonicalInput() {
    return this._organizationCanonical;
  }

  // role_canonical - computed: false, optional: false, required: true
  private _roleCanonical?: string; 
  public get roleCanonical() {
    return this.getStringAttribute('role_canonical');
  }
  public set roleCanonical(value: string) {
    this._roleCanonical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleCanonicalInput() {
    return this._roleCanonical;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      member_id: cdktf.numberToTerraform(this._memberId),
      organization_canonical: cdktf.stringToTerraform(this._organizationCanonical),
      role_canonical: cdktf.stringToTerraform(this._roleCanonical),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_id: {
        value: cdktf.numberToHclTerraform(this._memberId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      organization_canonical: {
        value: cdktf.stringToHclTerraform(this._organizationCanonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_canonical: {
        value: cdktf.stringToHclTerraform(this._roleCanonical),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
