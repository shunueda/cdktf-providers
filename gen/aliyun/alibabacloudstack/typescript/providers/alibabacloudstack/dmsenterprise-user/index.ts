// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dmsenterprise_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsenterpriseUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dmsenterprise_user#id DmsenterpriseUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dmsenterprise_user#max_execute_count DmsenterpriseUser#max_execute_count}
  */
  readonly maxExecuteCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dmsenterprise_user#max_result_count DmsenterpriseUser#max_result_count}
  */
  readonly maxResultCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dmsenterprise_user#mobile DmsenterpriseUser#mobile}
  */
  readonly mobile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dmsenterprise_user#nick_name DmsenterpriseUser#nick_name}
  */
  readonly nickName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dmsenterprise_user#role_names DmsenterpriseUser#role_names}
  */
  readonly roleNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dmsenterprise_user#status DmsenterpriseUser#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dmsenterprise_user#tid DmsenterpriseUser#tid}
  */
  readonly tid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dmsenterprise_user#uid DmsenterpriseUser#uid}
  */
  readonly uid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dmsenterprise_user#user_name DmsenterpriseUser#user_name}
  */
  readonly userName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dmsenterprise_user alibabacloudstack_dmsenterprise_user}
*/
export class DmsenterpriseUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_dmsenterprise_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DmsenterpriseUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsenterpriseUser to import
  * @param importFromId The id of the existing DmsenterpriseUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dmsenterprise_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsenterpriseUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_dmsenterprise_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/dmsenterprise_user alibabacloudstack_dmsenterprise_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsenterpriseUserConfig
  */
  public constructor(scope: Construct, id: string, config: DmsenterpriseUserConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_dmsenterprise_user',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
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
    this._maxExecuteCount = config.maxExecuteCount;
    this._maxResultCount = config.maxResultCount;
    this._mobile = config.mobile;
    this._nickName = config.nickName;
    this._roleNames = config.roleNames;
    this._status = config.status;
    this._tid = config.tid;
    this._uid = config.uid;
    this._userName = config.userName;
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

  // max_execute_count - computed: false, optional: true, required: false
  private _maxExecuteCount?: number; 
  public get maxExecuteCount() {
    return this.getNumberAttribute('max_execute_count');
  }
  public set maxExecuteCount(value: number) {
    this._maxExecuteCount = value;
  }
  public resetMaxExecuteCount() {
    this._maxExecuteCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExecuteCountInput() {
    return this._maxExecuteCount;
  }

  // max_result_count - computed: false, optional: true, required: false
  private _maxResultCount?: number; 
  public get maxResultCount() {
    return this.getNumberAttribute('max_result_count');
  }
  public set maxResultCount(value: number) {
    this._maxResultCount = value;
  }
  public resetMaxResultCount() {
    this._maxResultCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultCountInput() {
    return this._maxResultCount;
  }

  // mobile - computed: false, optional: true, required: false
  private _mobile?: string; 
  public get mobile() {
    return this.getStringAttribute('mobile');
  }
  public set mobile(value: string) {
    this._mobile = value;
  }
  public resetMobile() {
    this._mobile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileInput() {
    return this._mobile;
  }

  // nick_name - computed: true, optional: true, required: false
  private _nickName?: string; 
  public get nickName() {
    return this.getStringAttribute('nick_name');
  }
  public set nickName(value: string) {
    this._nickName = value;
  }
  public resetNickName() {
    this._nickName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nickNameInput() {
    return this._nickName;
  }

  // role_names - computed: false, optional: true, required: false
  private _roleNames?: string[]; 
  public get roleNames() {
    return cdktf.Fn.tolist(this.getListAttribute('role_names'));
  }
  public set roleNames(value: string[]) {
    this._roleNames = value;
  }
  public resetRoleNames() {
    this._roleNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNamesInput() {
    return this._roleNames;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tid - computed: false, optional: true, required: false
  private _tid?: number; 
  public get tid() {
    return this.getNumberAttribute('tid');
  }
  public set tid(value: number) {
    this._tid = value;
  }
  public resetTid() {
    this._tid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tidInput() {
    return this._tid;
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // user_name - computed: true, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      max_execute_count: cdktf.numberToTerraform(this._maxExecuteCount),
      max_result_count: cdktf.numberToTerraform(this._maxResultCount),
      mobile: cdktf.stringToTerraform(this._mobile),
      nick_name: cdktf.stringToTerraform(this._nickName),
      role_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roleNames),
      status: cdktf.stringToTerraform(this._status),
      tid: cdktf.numberToTerraform(this._tid),
      uid: cdktf.stringToTerraform(this._uid),
      user_name: cdktf.stringToTerraform(this._userName),
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
      max_execute_count: {
        value: cdktf.numberToHclTerraform(this._maxExecuteCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_result_count: {
        value: cdktf.numberToHclTerraform(this._maxResultCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mobile: {
        value: cdktf.stringToHclTerraform(this._mobile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nick_name: {
        value: cdktf.stringToHclTerraform(this._nickName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roleNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tid: {
        value: cdktf.numberToHclTerraform(this._tid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
