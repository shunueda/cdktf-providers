// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host_group_account_user_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BastionhostHostGroupAccountUserAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host_group_account_user_attachment#host_account_names BastionhostHostGroupAccountUserAttachment#host_account_names}
  */
  readonly hostAccountNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host_group_account_user_attachment#host_group_id BastionhostHostGroupAccountUserAttachment#host_group_id}
  */
  readonly hostGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host_group_account_user_attachment#id BastionhostHostGroupAccountUserAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host_group_account_user_attachment#instance_id BastionhostHostGroupAccountUserAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host_group_account_user_attachment#user_id BastionhostHostGroupAccountUserAttachment#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host_group_account_user_attachment alicloud_bastionhost_host_group_account_user_attachment}
*/
export class BastionhostHostGroupAccountUserAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_bastionhost_host_group_account_user_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BastionhostHostGroupAccountUserAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BastionhostHostGroupAccountUserAttachment to import
  * @param importFromId The id of the existing BastionhostHostGroupAccountUserAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host_group_account_user_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BastionhostHostGroupAccountUserAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_bastionhost_host_group_account_user_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/bastionhost_host_group_account_user_attachment alicloud_bastionhost_host_group_account_user_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BastionhostHostGroupAccountUserAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: BastionhostHostGroupAccountUserAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_bastionhost_host_group_account_user_attachment',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostAccountNames = config.hostAccountNames;
    this._hostGroupId = config.hostGroupId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_account_names - computed: false, optional: false, required: true
  private _hostAccountNames?: string[]; 
  public get hostAccountNames() {
    return cdktf.Fn.tolist(this.getListAttribute('host_account_names'));
  }
  public set hostAccountNames(value: string[]) {
    this._hostAccountNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAccountNamesInput() {
    return this._hostAccountNames;
  }

  // host_group_id - computed: false, optional: false, required: true
  private _hostGroupId?: string; 
  public get hostGroupId() {
    return this.getStringAttribute('host_group_id');
  }
  public set hostGroupId(value: string) {
    this._hostGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdInput() {
    return this._hostGroupId;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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
      host_account_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostAccountNames),
      host_group_id: cdktf.stringToTerraform(this._hostGroupId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_account_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostAccountNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      host_group_id: {
        value: cdktf.stringToHclTerraform(this._hostGroupId),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
