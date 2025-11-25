// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_user_permission_boundary_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CamUserPermissionBoundaryAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_user_permission_boundary_attachment#id CamUserPermissionBoundaryAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_user_permission_boundary_attachment#policy_id CamUserPermissionBoundaryAttachment#policy_id}
  */
  readonly policyId: number;
  /**
  * Sub account Uin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_user_permission_boundary_attachment#target_uin CamUserPermissionBoundaryAttachment#target_uin}
  */
  readonly targetUin: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_user_permission_boundary_attachment tencentcloud_cam_user_permission_boundary_attachment}
*/
export class CamUserPermissionBoundaryAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cam_user_permission_boundary_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CamUserPermissionBoundaryAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CamUserPermissionBoundaryAttachment to import
  * @param importFromId The id of the existing CamUserPermissionBoundaryAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_user_permission_boundary_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CamUserPermissionBoundaryAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cam_user_permission_boundary_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cam_user_permission_boundary_attachment tencentcloud_cam_user_permission_boundary_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CamUserPermissionBoundaryAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: CamUserPermissionBoundaryAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cam_user_permission_boundary_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._policyId = config.policyId;
    this._targetUin = config.targetUin;
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

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // target_uin - computed: false, optional: false, required: true
  private _targetUin?: number; 
  public get targetUin() {
    return this.getNumberAttribute('target_uin');
  }
  public set targetUin(value: number) {
    this._targetUin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUinInput() {
    return this._targetUin;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy_id: cdktf.numberToTerraform(this._policyId),
      target_uin: cdktf.numberToTerraform(this._targetUin),
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
      policy_id: {
        value: cdktf.numberToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_uin: {
        value: cdktf.numberToHclTerraform(this._targetUin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
