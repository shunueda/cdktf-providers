// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/rds_class_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudRdsClassDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/rds_class_details#class_code DataAlicloudRdsClassDetails#class_code}
  */
  readonly classCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/rds_class_details#commodity_code DataAlicloudRdsClassDetails#commodity_code}
  */
  readonly commodityCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/rds_class_details#engine DataAlicloudRdsClassDetails#engine}
  */
  readonly engine: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/rds_class_details#engine_version DataAlicloudRdsClassDetails#engine_version}
  */
  readonly engineVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/rds_class_details#id DataAlicloudRdsClassDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/rds_class_details alicloud_rds_class_details}
*/
export class DataAlicloudRdsClassDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_rds_class_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudRdsClassDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudRdsClassDetails to import
  * @param importFromId The id of the existing DataAlicloudRdsClassDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/rds_class_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudRdsClassDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_rds_class_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/rds_class_details alicloud_rds_class_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudRdsClassDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudRdsClassDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_rds_class_details',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._classCode = config.classCode;
    this._commodityCode = config.commodityCode;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // class_code - computed: false, optional: false, required: true
  private _classCode?: string; 
  public get classCode() {
    return this.getStringAttribute('class_code');
  }
  public set classCode(value: string) {
    this._classCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classCodeInput() {
    return this._classCode;
  }

  // class_group - computed: true, optional: false, required: false
  public get classGroup() {
    return this.getStringAttribute('class_group');
  }

  // commodity_code - computed: false, optional: false, required: true
  private _commodityCode?: string; 
  public get commodityCode() {
    return this.getStringAttribute('commodity_code');
  }
  public set commodityCode(value: string) {
    this._commodityCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commodityCodeInput() {
    return this._commodityCode;
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // db_instance_storage_type - computed: true, optional: false, required: false
  public get dbInstanceStorageType() {
    return this.getStringAttribute('db_instance_storage_type');
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // engine_version - computed: false, optional: false, required: true
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // instruction_set_arch - computed: true, optional: false, required: false
  public get instructionSetArch() {
    return this.getStringAttribute('instruction_set_arch');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getStringAttribute('max_connections');
  }

  // max_iombps - computed: true, optional: false, required: false
  public get maxIombps() {
    return this.getStringAttribute('max_iombps');
  }

  // max_iops - computed: true, optional: false, required: false
  public get maxIops() {
    return this.getStringAttribute('max_iops');
  }

  // memory_class - computed: true, optional: false, required: false
  public get memoryClass() {
    return this.getStringAttribute('memory_class');
  }

  // reference_price - computed: true, optional: false, required: false
  public get referencePrice() {
    return this.getStringAttribute('reference_price');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      class_code: cdktf.stringToTerraform(this._classCode),
      commodity_code: cdktf.stringToTerraform(this._commodityCode),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      class_code: {
        value: cdktf.stringToHclTerraform(this._classCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commodity_code: {
        value: cdktf.stringToHclTerraform(this._commodityCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
