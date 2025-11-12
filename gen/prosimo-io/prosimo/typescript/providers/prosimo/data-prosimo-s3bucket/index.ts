// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/s3bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProsimoS3BucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/s3bucket#id DataProsimoS3Bucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter based upon bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/s3bucket#input_cloud_cred_name DataProsimoS3Bucket#input_cloud_cred_name}
  */
  readonly inputCloudCredName: string;
  /**
  * Filter based upon cloud region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/s3bucket#input_region DataProsimoS3Bucket#input_region}
  */
  readonly inputRegion: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/s3bucket prosimo_s3bucket}
*/
export class DataProsimoS3Bucket extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_s3bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProsimoS3Bucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProsimoS3Bucket to import
  * @param importFromId The id of the existing DataProsimoS3Bucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/s3bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProsimoS3Bucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_s3bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/data-sources/s3bucket prosimo_s3bucket} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProsimoS3BucketConfig
  */
  public constructor(scope: Construct, id: string, config: DataProsimoS3BucketConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_s3bucket',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
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
    this._inputCloudCredName = config.inputCloudCredName;
    this._inputRegion = config.inputRegion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getListAttribute('data');
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

  // input_cloud_cred_name - computed: false, optional: false, required: true
  private _inputCloudCredName?: string; 
  public get inputCloudCredName() {
    return this.getStringAttribute('input_cloud_cred_name');
  }
  public set inputCloudCredName(value: string) {
    this._inputCloudCredName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputCloudCredNameInput() {
    return this._inputCloudCredName;
  }

  // input_region - computed: false, optional: false, required: true
  private _inputRegion?: string; 
  public get inputRegion() {
    return this.getStringAttribute('input_region');
  }
  public set inputRegion(value: string) {
    this._inputRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputRegionInput() {
    return this._inputRegion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      input_cloud_cred_name: cdktf.stringToTerraform(this._inputCloudCredName),
      input_region: cdktf.stringToTerraform(this._inputRegion),
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
      input_cloud_cred_name: {
        value: cdktf.stringToHclTerraform(this._inputCloudCredName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_region: {
        value: cdktf.stringToHclTerraform(this._inputRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
