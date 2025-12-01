// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mhub_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MhubAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mhub_app#app_name MhubApp#app_name}
  */
  readonly appName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mhub_app#bundle_id MhubApp#bundle_id}
  */
  readonly bundleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mhub_app#encoded_icon MhubApp#encoded_icon}
  */
  readonly encodedIcon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mhub_app#id MhubApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mhub_app#industry_id MhubApp#industry_id}
  */
  readonly industryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mhub_app#package_name MhubApp#package_name}
  */
  readonly packageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mhub_app#product_id MhubApp#product_id}
  */
  readonly productId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mhub_app#type MhubApp#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mhub_app alicloud_mhub_app}
*/
export class MhubApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_mhub_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MhubApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MhubApp to import
  * @param importFromId The id of the existing MhubApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mhub_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MhubApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_mhub_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/mhub_app alicloud_mhub_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MhubAppConfig
  */
  public constructor(scope: Construct, id: string, config: MhubAppConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_mhub_app',
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
    this._appName = config.appName;
    this._bundleId = config.bundleId;
    this._encodedIcon = config.encodedIcon;
    this._id = config.id;
    this._industryId = config.industryId;
    this._packageName = config.packageName;
    this._productId = config.productId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // bundle_id - computed: false, optional: true, required: false
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  public resetBundleId() {
    this._bundleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // encoded_icon - computed: false, optional: true, required: false
  private _encodedIcon?: string; 
  public get encodedIcon() {
    return this.getStringAttribute('encoded_icon');
  }
  public set encodedIcon(value: string) {
    this._encodedIcon = value;
  }
  public resetEncodedIcon() {
    this._encodedIcon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodedIconInput() {
    return this._encodedIcon;
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

  // industry_id - computed: true, optional: true, required: false
  private _industryId?: string; 
  public get industryId() {
    return this.getStringAttribute('industry_id');
  }
  public set industryId(value: string) {
    this._industryId = value;
  }
  public resetIndustryId() {
    this._industryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get industryIdInput() {
    return this._industryId;
  }

  // package_name - computed: false, optional: true, required: false
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  public resetPackageName() {
    this._packageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      encoded_icon: cdktf.stringToTerraform(this._encodedIcon),
      id: cdktf.stringToTerraform(this._id),
      industry_id: cdktf.stringToTerraform(this._industryId),
      package_name: cdktf.stringToTerraform(this._packageName),
      product_id: cdktf.stringToTerraform(this._productId),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bundle_id: {
        value: cdktf.stringToHclTerraform(this._bundleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encoded_icon: {
        value: cdktf.stringToHclTerraform(this._encodedIcon),
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
      industry_id: {
        value: cdktf.stringToHclTerraform(this._industryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_name: {
        value: cdktf.stringToHclTerraform(this._packageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktf.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
