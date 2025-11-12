// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the organization granted the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project_grant#granted_org_id ProjectGrant#granted_org_id}
  */
  readonly grantedOrgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project_grant#id ProjectGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project_grant#org_id ProjectGrant#org_id}
  */
  readonly orgId?: string;
  /**
  * ID of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project_grant#project_id ProjectGrant#project_id}
  */
  readonly projectId: string;
  /**
  * List of roles granted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project_grant#role_keys ProjectGrant#role_keys}
  */
  readonly roleKeys?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project_grant zitadel_project_grant}
*/
export class ProjectGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_project_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectGrant to import
  * @param importFromId The id of the existing ProjectGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_project_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/project_grant zitadel_project_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectGrantConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_project_grant',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._grantedOrgId = config.grantedOrgId;
    this._id = config.id;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._roleKeys = config.roleKeys;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // granted_org_id - computed: false, optional: false, required: true
  private _grantedOrgId?: string; 
  public get grantedOrgId() {
    return this.getStringAttribute('granted_org_id');
  }
  public set grantedOrgId(value: string) {
    this._grantedOrgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantedOrgIdInput() {
    return this._grantedOrgId;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // role_keys - computed: false, optional: true, required: false
  private _roleKeys?: string[]; 
  public get roleKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('role_keys'));
  }
  public set roleKeys(value: string[]) {
    this._roleKeys = value;
  }
  public resetRoleKeys() {
    this._roleKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleKeysInput() {
    return this._roleKeys;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      granted_org_id: cdktf.stringToTerraform(this._grantedOrgId),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      role_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleKeys),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      granted_org_id: {
        value: cdktf.stringToHclTerraform(this._grantedOrgId),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
