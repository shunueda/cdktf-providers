// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_proxy_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsEnterpriseProxyAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_proxy_access#id DmsEnterpriseProxyAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_proxy_access#indep_account DmsEnterpriseProxyAccess#indep_account}
  */
  readonly indepAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_proxy_access#indep_password DmsEnterpriseProxyAccess#indep_password}
  */
  readonly indepPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_proxy_access#proxy_access_id DmsEnterpriseProxyAccess#proxy_access_id}
  */
  readonly proxyAccessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_proxy_access#proxy_id DmsEnterpriseProxyAccess#proxy_id}
  */
  readonly proxyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_proxy_access#user_id DmsEnterpriseProxyAccess#user_id}
  */
  readonly userId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_proxy_access alicloud_dms_enterprise_proxy_access}
*/
export class DmsEnterpriseProxyAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dms_enterprise_proxy_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DmsEnterpriseProxyAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsEnterpriseProxyAccess to import
  * @param importFromId The id of the existing DmsEnterpriseProxyAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_proxy_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsEnterpriseProxyAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dms_enterprise_proxy_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/dms_enterprise_proxy_access alicloud_dms_enterprise_proxy_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsEnterpriseProxyAccessConfig
  */
  public constructor(scope: Construct, id: string, config: DmsEnterpriseProxyAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dms_enterprise_proxy_access',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
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
    this._indepAccount = config.indepAccount;
    this._indepPassword = config.indepPassword;
    this._proxyAccessId = config.proxyAccessId;
    this._proxyId = config.proxyId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_id - computed: true, optional: false, required: false
  public get accessId() {
    return this.getStringAttribute('access_id');
  }

  // access_secret - computed: true, optional: false, required: false
  public get accessSecret() {
    return this.getStringAttribute('access_secret');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // indep_account - computed: false, optional: true, required: false
  private _indepAccount?: string; 
  public get indepAccount() {
    return this.getStringAttribute('indep_account');
  }
  public set indepAccount(value: string) {
    this._indepAccount = value;
  }
  public resetIndepAccount() {
    this._indepAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indepAccountInput() {
    return this._indepAccount;
  }

  // indep_password - computed: false, optional: true, required: false
  private _indepPassword?: string; 
  public get indepPassword() {
    return this.getStringAttribute('indep_password');
  }
  public set indepPassword(value: string) {
    this._indepPassword = value;
  }
  public resetIndepPassword() {
    this._indepPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indepPasswordInput() {
    return this._indepPassword;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // origin_info - computed: true, optional: false, required: false
  public get originInfo() {
    return this.getStringAttribute('origin_info');
  }

  // proxy_access_id - computed: true, optional: true, required: false
  private _proxyAccessId?: string; 
  public get proxyAccessId() {
    return this.getStringAttribute('proxy_access_id');
  }
  public set proxyAccessId(value: string) {
    this._proxyAccessId = value;
  }
  public resetProxyAccessId() {
    this._proxyAccessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAccessIdInput() {
    return this._proxyAccessId;
  }

  // proxy_id - computed: false, optional: false, required: true
  private _proxyId?: string; 
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }
  public set proxyId(value: string) {
    this._proxyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId;
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

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // user_uid - computed: true, optional: false, required: false
  public get userUid() {
    return this.getStringAttribute('user_uid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      indep_account: cdktf.stringToTerraform(this._indepAccount),
      indep_password: cdktf.stringToTerraform(this._indepPassword),
      proxy_access_id: cdktf.stringToTerraform(this._proxyAccessId),
      proxy_id: cdktf.stringToTerraform(this._proxyId),
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
      indep_account: {
        value: cdktf.stringToHclTerraform(this._indepAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indep_password: {
        value: cdktf.stringToHclTerraform(this._indepPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_access_id: {
        value: cdktf.stringToHclTerraform(this._proxyAccessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_id: {
        value: cdktf.stringToHclTerraform(this._proxyId),
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
