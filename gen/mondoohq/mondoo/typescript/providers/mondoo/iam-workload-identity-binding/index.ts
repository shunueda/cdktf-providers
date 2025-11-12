// https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/iam_workload_identity_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamWorkloadIdentityBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  *  List of allowed audiences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/iam_workload_identity_binding#allowed_audiences IamWorkloadIdentityBinding#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * Description of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/iam_workload_identity_binding#description IamWorkloadIdentityBinding#description}
  */
  readonly description?: string;
  /**
  * Expiration in seconds associated with the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/iam_workload_identity_binding#expiration IamWorkloadIdentityBinding#expiration}
  */
  readonly expiration?: number;
  /**
  * URI for the token issuer, e.g. https://accounts.google.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/iam_workload_identity_binding#issuer_uri IamWorkloadIdentityBinding#issuer_uri}
  */
  readonly issuerUri: string;
  /**
  * List of additional configurations to confirm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/iam_workload_identity_binding#mappings IamWorkloadIdentityBinding#mappings}
  */
  readonly mappings?: { [key: string]: string };
  /**
  * Name of the binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/iam_workload_identity_binding#name IamWorkloadIdentityBinding#name}
  */
  readonly name: string;
  /**
  * List of role names to assign to the binding. Can be specified as short names (e.g. "editor") or full MRNs (e.g. "//iam.api.mondoo.app/roles/editor"). Available roles: integrations-manager, sla-manager, policy-manager, policy-editor, ticket-manager, ticket-creator, exceptions-requester, query-pack-manager, query-pack-editor, viewer, editor, owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/iam_workload_identity_binding#roles IamWorkloadIdentityBinding#roles}
  */
  readonly roles?: string[];
  /**
  * The MRN of the scope (either space or organization). If there is no scope, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/iam_workload_identity_binding#scope_mrn IamWorkloadIdentityBinding#scope_mrn}
  */
  readonly scopeMrn?: string;
  /**
  * Unique identifier to confirm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/iam_workload_identity_binding#subject IamWorkloadIdentityBinding#subject}
  */
  readonly subject: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/iam_workload_identity_binding mondoo_iam_workload_identity_binding}
*/
export class IamWorkloadIdentityBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_iam_workload_identity_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamWorkloadIdentityBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamWorkloadIdentityBinding to import
  * @param importFromId The id of the existing IamWorkloadIdentityBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/iam_workload_identity_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamWorkloadIdentityBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_iam_workload_identity_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/iam_workload_identity_binding mondoo_iam_workload_identity_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamWorkloadIdentityBindingConfig
  */
  public constructor(scope: Construct, id: string, config: IamWorkloadIdentityBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'mondoo_iam_workload_identity_binding',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.34.0',
        providerVersionConstraint: '0.34.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedAudiences = config.allowedAudiences;
    this._description = config.description;
    this._expiration = config.expiration;
    this._issuerUri = config.issuerUri;
    this._mappings = config.mappings;
    this._name = config.name;
    this._roles = config.roles;
    this._scopeMrn = config.scopeMrn;
    this._subject = config.subject;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_audiences - computed: true, optional: true, required: false
  private _allowedAudiences?: string[]; 
  public get allowedAudiences() {
    return this.getListAttribute('allowed_audiences');
  }
  public set allowedAudiences(value: string[]) {
    this._allowedAudiences = value;
  }
  public resetAllowedAudiences() {
    this._allowedAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAudiencesInput() {
    return this._allowedAudiences;
  }

  // description - computed: true, optional: true, required: false
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

  // expiration - computed: true, optional: true, required: false
  private _expiration?: number; 
  public get expiration() {
    return this.getNumberAttribute('expiration');
  }
  public set expiration(value: number) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // issuer_uri - computed: false, optional: false, required: true
  private _issuerUri?: string; 
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }
  public set issuerUri(value: string) {
    this._issuerUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUriInput() {
    return this._issuerUri;
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings?: { [key: string]: string }; 
  public get mappings() {
    return this.getStringMapAttribute('mappings');
  }
  public set mappings(value: { [key: string]: string }) {
    this._mappings = value;
  }
  public resetMappings() {
    this._mappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings;
  }

  // mrn - computed: true, optional: false, required: false
  public get mrn() {
    return this.getStringAttribute('mrn');
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

  // roles - computed: true, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // scope_mrn - computed: true, optional: true, required: false
  private _scopeMrn?: string; 
  public get scopeMrn() {
    return this.getStringAttribute('scope_mrn');
  }
  public set scopeMrn(value: string) {
    this._scopeMrn = value;
  }
  public resetScopeMrn() {
    this._scopeMrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeMrnInput() {
    return this._scopeMrn;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedAudiences),
      description: cdktf.stringToTerraform(this._description),
      expiration: cdktf.numberToTerraform(this._expiration),
      issuer_uri: cdktf.stringToTerraform(this._issuerUri),
      mappings: cdktf.hashMapper(cdktf.stringToTerraform)(this._mappings),
      name: cdktf.stringToTerraform(this._name),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      scope_mrn: cdktf.stringToTerraform(this._scopeMrn),
      subject: cdktf.stringToTerraform(this._subject),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_audiences: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedAudiences),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration: {
        value: cdktf.numberToHclTerraform(this._expiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      issuer_uri: {
        value: cdktf.stringToHclTerraform(this._issuerUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._mappings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      scope_mrn: {
        value: cdktf.stringToHclTerraform(this._scopeMrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject: {
        value: cdktf.stringToHclTerraform(this._subject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
