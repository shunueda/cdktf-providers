// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/resource_group_server_enrollment_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceGroupServerEnrollmentTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The human-readable description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/resource_group_server_enrollment_token#description ResourceGroupServerEnrollmentToken#description}
  */
  readonly description: string;
  /**
  * The UUID of a Project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/resource_group_server_enrollment_token#project ResourceGroupServerEnrollmentToken#project}
  */
  readonly project: string;
  /**
  * The UUID of a OktaPA Resource Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/resource_group_server_enrollment_token#resource_group ResourceGroupServerEnrollmentToken#resource_group}
  */
  readonly resourceGroup: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/resource_group_server_enrollment_token oktapam_resource_group_server_enrollment_token}
*/
export class ResourceGroupServerEnrollmentToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_resource_group_server_enrollment_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceGroupServerEnrollmentToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceGroupServerEnrollmentToken to import
  * @param importFromId The id of the existing ResourceGroupServerEnrollmentToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/resource_group_server_enrollment_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceGroupServerEnrollmentToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_resource_group_server_enrollment_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/resources/resource_group_server_enrollment_token oktapam_resource_group_server_enrollment_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceGroupServerEnrollmentTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceGroupServerEnrollmentTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_resource_group_server_enrollment_token',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._project = config.project;
    this._resourceGroup = config.resourceGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by_user - computed: true, optional: false, required: false
  public get createdByUser() {
    return this.getStringAttribute('created_by_user');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_at - computed: true, optional: false, required: false
  public get issuedAt() {
    return this.getStringAttribute('issued_at');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      project: cdktf.stringToTerraform(this._project),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
