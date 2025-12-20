// https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_organization_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetalOrganizationMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The email address of the user to invite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_organization_member#invitee MetalOrganizationMember#invitee}
  */
  readonly invitee: string;
  /**
  * A message to the invitee (only used during the invitation stage)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_organization_member#message MetalOrganizationMember#message}
  */
  readonly message?: string;
  /**
  * The organization to invite the user to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_organization_member#organization_id MetalOrganizationMember#organization_id}
  */
  readonly organizationId: string;
  /**
  * Project IDs the member has access to within the organization. If the member is an 'owner', the projects list should be empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_organization_member#projects_ids MetalOrganizationMember#projects_ids}
  */
  readonly projectsIds: string[];
  /**
  * Organization roles (owner, collaborator, limited_collaborator, billing)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_organization_member#roles MetalOrganizationMember#roles}
  */
  readonly roles: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_organization_member equinix_metal_organization_member}
*/
export class MetalOrganizationMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_metal_organization_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetalOrganizationMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetalOrganizationMember to import
  * @param importFromId The id of the existing MetalOrganizationMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_organization_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetalOrganizationMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_metal_organization_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.12.0/docs/resources/metal_organization_member equinix_metal_organization_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetalOrganizationMemberConfig
  */
  public constructor(scope: Construct, id: string, config: MetalOrganizationMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_metal_organization_member',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.12.0',
        providerVersionConstraint: '4.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._invitee = config.invitee;
    this._message = config.message;
    this._organizationId = config.organizationId;
    this._projectsIds = config.projectsIds;
    this._roles = config.roles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invited_by - computed: true, optional: false, required: false
  public get invitedBy() {
    return this.getStringAttribute('invited_by');
  }

  // invitee - computed: false, optional: false, required: true
  private _invitee?: string; 
  public get invitee() {
    return this.getStringAttribute('invitee');
  }
  public set invitee(value: string) {
    this._invitee = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteeInput() {
    return this._invitee;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // nonce - computed: true, optional: false, required: false
  public get nonce() {
    return this.getStringAttribute('nonce');
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // projects_ids - computed: false, optional: false, required: true
  private _projectsIds?: string[]; 
  public get projectsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('projects_ids'));
  }
  public set projectsIds(value: string[]) {
    this._projectsIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsIdsInput() {
    return this._projectsIds;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      invitee: cdktf.stringToTerraform(this._invitee),
      message: cdktf.stringToTerraform(this._message),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      projects_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectsIds),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      invitee: {
        value: cdktf.stringToHclTerraform(this._invitee),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message: {
        value: cdktf.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      projects_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectsIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
