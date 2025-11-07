// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/user_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/user_grant#id UserGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/user_grant#org_id UserGrant#org_id}
  */
  readonly orgId?: string;
  /**
  * ID of the granted project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/user_grant#project_grant_id UserGrant#project_grant_id}
  */
  readonly projectGrantId?: string;
  /**
  * ID of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/user_grant#project_id UserGrant#project_id}
  */
  readonly projectId?: string;
  /**
  * List of roles granted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/user_grant#role_keys UserGrant#role_keys}
  */
  readonly roleKeys?: string[];
  /**
  * ID of the user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/user_grant#user_id UserGrant#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/user_grant zitadel_user_grant}
*/
export class UserGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_user_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserGrant to import
  * @param importFromId The id of the existing UserGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/user_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_user_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/user_grant zitadel_user_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserGrantConfig
  */
  public constructor(scope: Construct, id: string, config: UserGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_user_grant',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._orgId = config.orgId;
    this._projectGrantId = config.projectGrantId;
    this._projectId = config.projectId;
    this._roleKeys = config.roleKeys;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // project_grant_id - computed: false, optional: true, required: false
  private _projectGrantId?: string; 
  public get projectGrantId() {
    return this.getStringAttribute('project_grant_id');
  }
  public set projectGrantId(value: string) {
    this._projectGrantId = value;
  }
  public resetProjectGrantId() {
    this._projectGrantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectGrantIdInput() {
    return this._projectGrantId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
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

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_grant_id: cdktf.stringToTerraform(this._projectGrantId),
      project_id: cdktf.stringToTerraform(this._projectId),
      role_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleKeys),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      project_grant_id: {
        value: cdktf.stringToHclTerraform(this._projectGrantId),
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
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
