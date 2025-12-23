// https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/iam_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * MRN of the identity principal (team, user, or service account) to grant roles to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/iam_binding#identity_mrn IamBinding#identity_mrn}
  */
  readonly identityMrn: string;
  /**
  * MRN of the resource (organization, space, workspace, etc.) to grant access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/iam_binding#resource_mrn IamBinding#resource_mrn}
  */
  readonly resourceMrn: string;
  /**
  * List of role names to assign to the identity on the resource. Can be specified as short names (e.g. "editor") or full MRNs (e.g. "//iam.api.mondoo.app/roles/editor"). Available roles: integrations-manager, sla-manager, policy-manager, policy-editor, ticket-manager, ticket-creator, exceptions-requester, query-pack-manager, query-pack-editor, viewer, editor, owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/iam_binding#roles IamBinding#roles}
  */
  readonly roles: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/iam_binding mondoo_iam_binding}
*/
export class IamBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_iam_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamBinding to import
  * @param importFromId The id of the existing IamBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/iam_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_iam_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.3/docs/resources/iam_binding mondoo_iam_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamBindingConfig
  */
  public constructor(scope: Construct, id: string, config: IamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'mondoo_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.35.3',
        providerVersionConstraint: '0.35.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._identityMrn = config.identityMrn;
    this._resourceMrn = config.resourceMrn;
    this._roles = config.roles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // identity_mrn - computed: false, optional: false, required: true
  private _identityMrn?: string; 
  public get identityMrn() {
    return this.getStringAttribute('identity_mrn');
  }
  public set identityMrn(value: string) {
    this._identityMrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityMrnInput() {
    return this._identityMrn;
  }

  // resource_mrn - computed: false, optional: false, required: true
  private _resourceMrn?: string; 
  public get resourceMrn() {
    return this.getStringAttribute('resource_mrn');
  }
  public set resourceMrn(value: string) {
    this._resourceMrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceMrnInput() {
    return this._resourceMrn;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identity_mrn: cdktf.stringToTerraform(this._identityMrn),
      resource_mrn: cdktf.stringToTerraform(this._resourceMrn),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      identity_mrn: {
        value: cdktf.stringToHclTerraform(this._identityMrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_mrn: {
        value: cdktf.stringToHclTerraform(this._resourceMrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
