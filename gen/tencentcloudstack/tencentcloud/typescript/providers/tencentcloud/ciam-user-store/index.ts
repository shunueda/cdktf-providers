// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ciam_user_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiamUserStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ciam_user_store#id CiamUserStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User Store Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ciam_user_store#user_pool_desc CiamUserStore#user_pool_desc}
  */
  readonly userPoolDesc?: string;
  /**
  * User Store Logo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ciam_user_store#user_pool_logo CiamUserStore#user_pool_logo}
  */
  readonly userPoolLogo?: string;
  /**
  * User Store Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ciam_user_store#user_pool_name CiamUserStore#user_pool_name}
  */
  readonly userPoolName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ciam_user_store tencentcloud_ciam_user_store}
*/
export class CiamUserStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ciam_user_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiamUserStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiamUserStore to import
  * @param importFromId The id of the existing CiamUserStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ciam_user_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiamUserStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ciam_user_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/ciam_user_store tencentcloud_ciam_user_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiamUserStoreConfig
  */
  public constructor(scope: Construct, id: string, config: CiamUserStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ciam_user_store',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
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
    this._userPoolDesc = config.userPoolDesc;
    this._userPoolLogo = config.userPoolLogo;
    this._userPoolName = config.userPoolName;
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

  // user_pool_desc - computed: false, optional: true, required: false
  private _userPoolDesc?: string; 
  public get userPoolDesc() {
    return this.getStringAttribute('user_pool_desc');
  }
  public set userPoolDesc(value: string) {
    this._userPoolDesc = value;
  }
  public resetUserPoolDesc() {
    this._userPoolDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolDescInput() {
    return this._userPoolDesc;
  }

  // user_pool_logo - computed: false, optional: true, required: false
  private _userPoolLogo?: string; 
  public get userPoolLogo() {
    return this.getStringAttribute('user_pool_logo');
  }
  public set userPoolLogo(value: string) {
    this._userPoolLogo = value;
  }
  public resetUserPoolLogo() {
    this._userPoolLogo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolLogoInput() {
    return this._userPoolLogo;
  }

  // user_pool_name - computed: false, optional: false, required: true
  private _userPoolName?: string; 
  public get userPoolName() {
    return this.getStringAttribute('user_pool_name');
  }
  public set userPoolName(value: string) {
    this._userPoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolNameInput() {
    return this._userPoolName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      user_pool_desc: cdktf.stringToTerraform(this._userPoolDesc),
      user_pool_logo: cdktf.stringToTerraform(this._userPoolLogo),
      user_pool_name: cdktf.stringToTerraform(this._userPoolName),
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
      user_pool_desc: {
        value: cdktf.stringToHclTerraform(this._userPoolDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_pool_logo: {
        value: cdktf.stringToHclTerraform(this._userPoolLogo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_pool_name: {
        value: cdktf.stringToHclTerraform(this._userPoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
