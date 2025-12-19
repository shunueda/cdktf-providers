// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mps_person_sample
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsPersonSampleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Material description, length limit: 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mps_person_sample#description MpsPersonSample#description}
  */
  readonly description?: string;
  /**
  * Material image [Base64](https://tools.ietf.org/html/rfc4648) encoded string only supports jpeg and png image formats. Array length limit: 5 images.Note: The picture must be a single portrait with clearer facial features, with a pixel size of not less than 200*200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mps_person_sample#face_contents MpsPersonSample#face_contents}
  */
  readonly faceContents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mps_person_sample#id MpsPersonSample#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Material name, length limit: 20 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mps_person_sample#name MpsPersonSample#name}
  */
  readonly name: string;
  /**
  * Material application scene, optional value:1. Recognition.Face: used for content recognition 2. Review.Face: used for inappropriate content identification 3. All: contains all of the above, equivalent to 1+2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mps_person_sample#usages MpsPersonSample#usages}
  */
  readonly usages: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mps_person_sample tencentcloud_mps_person_sample}
*/
export class MpsPersonSample extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_person_sample";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsPersonSample resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsPersonSample to import
  * @param importFromId The id of the existing MpsPersonSample that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mps_person_sample#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsPersonSample to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_person_sample", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/mps_person_sample tencentcloud_mps_person_sample} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsPersonSampleConfig
  */
  public constructor(scope: Construct, id: string, config: MpsPersonSampleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_person_sample',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._faceContents = config.faceContents;
    this._id = config.id;
    this._name = config.name;
    this._usages = config.usages;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // face_contents - computed: false, optional: true, required: false
  private _faceContents?: string[]; 
  public get faceContents() {
    return cdktf.Fn.tolist(this.getListAttribute('face_contents'));
  }
  public set faceContents(value: string[]) {
    this._faceContents = value;
  }
  public resetFaceContents() {
    this._faceContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faceContentsInput() {
    return this._faceContents;
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

  // usages - computed: false, optional: false, required: true
  private _usages?: string[]; 
  public get usages() {
    return cdktf.Fn.tolist(this.getListAttribute('usages'));
  }
  public set usages(value: string[]) {
    this._usages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usagesInput() {
    return this._usages;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      face_contents: cdktf.listMapper(cdktf.stringToTerraform, false)(this._faceContents),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      usages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usages),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      face_contents: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._faceContents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      usages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._usages),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
