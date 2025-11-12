// https://registry.terraform.io/providers/snyk-terraform-assets/snyk/0.0.5/docs/resources/organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The group ID. The API_KEY must have access to this group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snyk-terraform-assets/snyk/0.0.5/docs/resources/organization#group_id Organization#group_id}
  */
  readonly groupId?: string;
  /**
  * The name of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snyk-terraform-assets/snyk/0.0.5/docs/resources/organization#name Organization#name}
  */
  readonly name: string;
  /**
  * The id of an organization to copy settings from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snyk-terraform-assets/snyk/0.0.5/docs/resources/organization#source_organization_id Organization#source_organization_id}
  */
  readonly sourceOrganizationId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/snyk-terraform-assets/snyk/0.0.5/docs/resources/organization snyk_organization}
*/
export class Organization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snyk_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Organization to import
  * @param importFromId The id of the existing Organization that should be imported. Refer to the {@link https://registry.terraform.io/providers/snyk-terraform-assets/snyk/0.0.5/docs/resources/organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Organization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snyk_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snyk-terraform-assets/snyk/0.0.5/docs/resources/organization snyk_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'snyk_organization',
      terraformGeneratorMetadata: {
        providerName: 'snyk',
        providerVersion: '0.0.5',
        providerVersionConstraint: '0.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._name = config.name;
    this._sourceOrganizationId = config.sourceOrganizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // source_organization_id - computed: false, optional: true, required: false
  private _sourceOrganizationId?: string; 
  public get sourceOrganizationId() {
    return this.getStringAttribute('source_organization_id');
  }
  public set sourceOrganizationId(value: string) {
    this._sourceOrganizationId = value;
  }
  public resetSourceOrganizationId() {
    this._sourceOrganizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceOrganizationIdInput() {
    return this._sourceOrganizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      name: cdktf.stringToTerraform(this._name),
      source_organization_id: cdktf.stringToTerraform(this._sourceOrganizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      source_organization_id: {
        value: cdktf.stringToHclTerraform(this._sourceOrganizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
