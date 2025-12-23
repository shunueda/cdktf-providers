// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_access_white_list_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BhAccessWhiteListConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * true: allow all source IPs; false: do not allow all source IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_access_white_list_config#allow_any BhAccessWhiteListConfig#allow_any}
  */
  readonly allowAny?: boolean | cdktf.IResolvable;
  /**
  * true: allow automatically added IPs; false: do not allow automatically added IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_access_white_list_config#allow_auto BhAccessWhiteListConfig#allow_auto}
  */
  readonly allowAuto?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_access_white_list_config#id BhAccessWhiteListConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_access_white_list_config tencentcloud_bh_access_white_list_config}
*/
export class BhAccessWhiteListConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_bh_access_white_list_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BhAccessWhiteListConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BhAccessWhiteListConfig to import
  * @param importFromId The id of the existing BhAccessWhiteListConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_access_white_list_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BhAccessWhiteListConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_bh_access_white_list_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/bh_access_white_list_config tencentcloud_bh_access_white_list_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BhAccessWhiteListConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BhAccessWhiteListConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_bh_access_white_list_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAny = config.allowAny;
    this._allowAuto = config.allowAuto;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_any - computed: true, optional: true, required: false
  private _allowAny?: boolean | cdktf.IResolvable; 
  public get allowAny() {
    return this.getBooleanAttribute('allow_any');
  }
  public set allowAny(value: boolean | cdktf.IResolvable) {
    this._allowAny = value;
  }
  public resetAllowAny() {
    this._allowAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAnyInput() {
    return this._allowAny;
  }

  // allow_auto - computed: true, optional: true, required: false
  private _allowAuto?: boolean | cdktf.IResolvable; 
  public get allowAuto() {
    return this.getBooleanAttribute('allow_auto');
  }
  public set allowAuto(value: boolean | cdktf.IResolvable) {
    this._allowAuto = value;
  }
  public resetAllowAuto() {
    this._allowAuto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAutoInput() {
    return this._allowAuto;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_any: cdktf.booleanToTerraform(this._allowAny),
      allow_auto: cdktf.booleanToTerraform(this._allowAuto),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_any: {
        value: cdktf.booleanToHclTerraform(this._allowAny),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_auto: {
        value: cdktf.booleanToHclTerraform(this._allowAuto),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
