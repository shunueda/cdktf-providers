// https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/funding_source_permission_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FundingSourcePermissionMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application role ID for the permission mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/funding_source_permission_mapping#app_role_id FundingSourcePermissionMapping#app_role_id}
  */
  readonly appRoleId: number;
  /**
  * ID of the Funding Source to manage permission mappings for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/funding_source_permission_mapping#funding_source_id FundingSourcePermissionMapping#funding_source_id}
  */
  readonly fundingSourceId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/funding_source_permission_mapping#id FundingSourcePermissionMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of user group IDs for the permission mapping (must be provided in numerical order).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/funding_source_permission_mapping#user_groups_ids FundingSourcePermissionMapping#user_groups_ids}
  */
  readonly userGroupsIds: number[];
  /**
  * Set of user IDs for the permission mapping (must be provided in numerical order).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/funding_source_permission_mapping#user_ids FundingSourcePermissionMapping#user_ids}
  */
  readonly userIds: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/funding_source_permission_mapping kion_funding_source_permission_mapping}
*/
export class FundingSourcePermissionMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion_funding_source_permission_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FundingSourcePermissionMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FundingSourcePermissionMapping to import
  * @param importFromId The id of the existing FundingSourcePermissionMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/funding_source_permission_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FundingSourcePermissionMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion_funding_source_permission_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/funding_source_permission_mapping kion_funding_source_permission_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FundingSourcePermissionMappingConfig
  */
  public constructor(scope: Construct, id: string, config: FundingSourcePermissionMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'kion_funding_source_permission_mapping',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.30',
        providerVersionConstraint: '0.3.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appRoleId = config.appRoleId;
    this._fundingSourceId = config.fundingSourceId;
    this._id = config.id;
    this._userGroupsIds = config.userGroupsIds;
    this._userIds = config.userIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_role_id - computed: false, optional: false, required: true
  private _appRoleId?: number; 
  public get appRoleId() {
    return this.getNumberAttribute('app_role_id');
  }
  public set appRoleId(value: number) {
    this._appRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appRoleIdInput() {
    return this._appRoleId;
  }

  // funding_source_id - computed: false, optional: false, required: true
  private _fundingSourceId?: number; 
  public get fundingSourceId() {
    return this.getNumberAttribute('funding_source_id');
  }
  public set fundingSourceId(value: number) {
    this._fundingSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fundingSourceIdInput() {
    return this._fundingSourceId;
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

  // user_groups_ids - computed: false, optional: false, required: true
  private _userGroupsIds?: number[]; 
  public get userGroupsIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('user_groups_ids')));
  }
  public set userGroupsIds(value: number[]) {
    this._userGroupsIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsIdsInput() {
    return this._userGroupsIds;
  }

  // user_ids - computed: false, optional: false, required: true
  private _userIds?: number[]; 
  public get userIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('user_ids')));
  }
  public set userIds(value: number[]) {
    this._userIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_role_id: cdktf.numberToTerraform(this._appRoleId),
      funding_source_id: cdktf.numberToTerraform(this._fundingSourceId),
      id: cdktf.stringToTerraform(this._id),
      user_groups_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._userGroupsIds),
      user_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._userIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_role_id: {
        value: cdktf.numberToHclTerraform(this._appRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      funding_source_id: {
        value: cdktf.numberToHclTerraform(this._fundingSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_groups_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._userGroupsIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      user_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._userIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
