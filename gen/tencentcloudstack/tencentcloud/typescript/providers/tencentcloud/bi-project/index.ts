// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/bi_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BiProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Logo background color.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/bi_project#color_code BiProject#color_code}
  */
  readonly colorCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/bi_project#id BiProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project logo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/bi_project#logo BiProject#logo}
  */
  readonly logo?: string;
  /**
  * Remark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/bi_project#mark BiProject#mark}
  */
  readonly mark?: string;
  /**
  * Project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/bi_project#name BiProject#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/bi_project tencentcloud_bi_project}
*/
export class BiProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_bi_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BiProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BiProject to import
  * @param importFromId The id of the existing BiProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/bi_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BiProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_bi_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/bi_project tencentcloud_bi_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BiProjectConfig
  */
  public constructor(scope: Construct, id: string, config: BiProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_bi_project',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._colorCode = config.colorCode;
    this._id = config.id;
    this._logo = config.logo;
    this._mark = config.mark;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color_code - computed: false, optional: false, required: true
  private _colorCode?: string; 
  public get colorCode() {
    return this.getStringAttribute('color_code');
  }
  public set colorCode(value: string) {
    this._colorCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorCodeInput() {
    return this._colorCode;
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

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // mark - computed: false, optional: true, required: false
  private _mark?: string; 
  public get mark() {
    return this.getStringAttribute('mark');
  }
  public set mark(value: string) {
    this._mark = value;
  }
  public resetMark() {
    this._mark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markInput() {
    return this._mark;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color_code: cdktf.stringToTerraform(this._colorCode),
      id: cdktf.stringToTerraform(this._id),
      logo: cdktf.stringToTerraform(this._logo),
      mark: cdktf.stringToTerraform(this._mark),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color_code: {
        value: cdktf.stringToHclTerraform(this._colorCode),
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
      logo: {
        value: cdktf.stringToHclTerraform(this._logo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mark: {
        value: cdktf.stringToHclTerraform(this._mark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
