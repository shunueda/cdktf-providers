// https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_license_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MissioncontrolLicenseBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * File path to the license bucket. Can't be set together with `url`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_license_bucket#file MissioncontrolLicenseBucket#file}
  */
  readonly file?: string;
  /**
  * License bucket key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_license_bucket#key MissioncontrolLicenseBucket#key}
  */
  readonly key: string;
  /**
  * Name of the license bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_license_bucket#name MissioncontrolLicenseBucket#name}
  */
  readonly name: string;
  /**
  * Signed URL of the license bucket. Can't be set together with `file`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_license_bucket#url MissioncontrolLicenseBucket#url}
  */
  readonly url?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_license_bucket missioncontrol_license_bucket}
*/
export class MissioncontrolLicenseBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "missioncontrol_license_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MissioncontrolLicenseBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MissioncontrolLicenseBucket to import
  * @param importFromId The id of the existing MissioncontrolLicenseBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_license_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MissioncontrolLicenseBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "missioncontrol_license_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_license_bucket missioncontrol_license_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MissioncontrolLicenseBucketConfig
  */
  public constructor(scope: Construct, id: string, config: MissioncontrolLicenseBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'missioncontrol_license_bucket',
      terraformGeneratorMetadata: {
        providerName: 'mission-control',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._file = config.file;
    this._key = config.key;
    this._name = config.name;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issued_date - computed: true, optional: false, required: false
  public get issuedDate() {
    return this.getStringAttribute('issued_date');
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
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

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getNumberAttribute('product_id');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // quantity - computed: true, optional: false, required: false
  public get quantity() {
    return this.getNumberAttribute('quantity');
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }

  // valid_date - computed: true, optional: false, required: false
  public get validDate() {
    return this.getStringAttribute('valid_date');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file: cdktf.stringToTerraform(this._file),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file: {
        value: cdktf.stringToHclTerraform(this._file),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
