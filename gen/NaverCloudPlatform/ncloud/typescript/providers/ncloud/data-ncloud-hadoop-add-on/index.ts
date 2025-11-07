// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/hadoop_add_on
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNcloudHadoopAddOnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/hadoop_add_on#cluster_type_code DataNcloudHadoopAddOn#cluster_type_code}
  */
  readonly clusterTypeCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/hadoop_add_on#image_product_code DataNcloudHadoopAddOn#image_product_code}
  */
  readonly imageProductCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/hadoop_add_on#output_file DataNcloudHadoopAddOn#output_file}
  */
  readonly outputFile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/hadoop_add_on ncloud_hadoop_add_on}
*/
export class DataNcloudHadoopAddOn extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_hadoop_add_on";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNcloudHadoopAddOn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNcloudHadoopAddOn to import
  * @param importFromId The id of the existing DataNcloudHadoopAddOn that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/hadoop_add_on#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNcloudHadoopAddOn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_hadoop_add_on", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/hadoop_add_on ncloud_hadoop_add_on} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNcloudHadoopAddOnConfig
  */
  public constructor(scope: Construct, id: string, config: DataNcloudHadoopAddOnConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_hadoop_add_on',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterTypeCode = config.clusterTypeCode;
    this._imageProductCode = config.imageProductCode;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_on_list - computed: true, optional: false, required: false
  public get addOnList() {
    return this.getListAttribute('add_on_list');
  }

  // cluster_type_code - computed: false, optional: false, required: true
  private _clusterTypeCode?: string; 
  public get clusterTypeCode() {
    return this.getStringAttribute('cluster_type_code');
  }
  public set clusterTypeCode(value: string) {
    this._clusterTypeCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeCodeInput() {
    return this._clusterTypeCode;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_product_code - computed: false, optional: false, required: true
  private _imageProductCode?: string; 
  public get imageProductCode() {
    return this.getStringAttribute('image_product_code');
  }
  public set imageProductCode(value: string) {
    this._imageProductCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageProductCodeInput() {
    return this._imageProductCode;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_type_code: cdktf.stringToTerraform(this._clusterTypeCode),
      image_product_code: cdktf.stringToTerraform(this._imageProductCode),
      output_file: cdktf.stringToTerraform(this._outputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_type_code: {
        value: cdktf.stringToHclTerraform(this._clusterTypeCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_product_code: {
        value: cdktf.stringToHclTerraform(this._imageProductCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
