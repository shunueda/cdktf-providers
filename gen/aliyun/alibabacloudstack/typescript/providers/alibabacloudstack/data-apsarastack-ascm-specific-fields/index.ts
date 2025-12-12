// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_ascm_specific_fields
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApsarastackAscmSpecificFieldsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_ascm_specific_fields#group_filed DataApsarastackAscmSpecificFields#group_filed}
  */
  readonly groupFiled: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_ascm_specific_fields#id DataApsarastackAscmSpecificFields#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_ascm_specific_fields#ids DataApsarastackAscmSpecificFields#ids}
  */
  readonly ids?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_ascm_specific_fields#label DataApsarastackAscmSpecificFields#label}
  */
  readonly label?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_ascm_specific_fields#output_file DataApsarastackAscmSpecificFields#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_ascm_specific_fields#resource_type DataApsarastackAscmSpecificFields#resource_type}
  */
  readonly resourceType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_ascm_specific_fields apsarastack_ascm_specific_fields}
*/
export class DataApsarastackAscmSpecificFields extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_ascm_specific_fields";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApsarastackAscmSpecificFields resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApsarastackAscmSpecificFields to import
  * @param importFromId The id of the existing DataApsarastackAscmSpecificFields that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_ascm_specific_fields#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApsarastackAscmSpecificFields to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_ascm_specific_fields", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/data-sources/apsarastack_ascm_specific_fields apsarastack_ascm_specific_fields} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApsarastackAscmSpecificFieldsConfig
  */
  public constructor(scope: Construct, id: string, config: DataApsarastackAscmSpecificFieldsConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_ascm_specific_fields',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupFiled = config.groupFiled;
    this._id = config.id;
    this._ids = config.ids;
    this._label = config.label;
    this._outputFile = config.outputFile;
    this._resourceType = config.resourceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_filed - computed: false, optional: false, required: true
  private _groupFiled?: string; 
  public get groupFiled() {
    return this.getStringAttribute('group_filed');
  }
  public set groupFiled(value: string) {
    this._groupFiled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFiledInput() {
    return this._groupFiled;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: number[]; 
  public get ids() {
    return this.getNumberListAttribute('ids');
  }
  public set ids(value: number[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // label - computed: false, optional: true, required: false
  private _label?: boolean | cdktf.IResolvable; 
  public get label() {
    return this.getBooleanAttribute('label');
  }
  public set label(value: boolean | cdktf.IResolvable) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // specific_fields - computed: true, optional: false, required: false
  public get specificFields() {
    return cdktf.Fn.tolist(this.getListAttribute('specific_fields'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_filed: cdktf.stringToTerraform(this._groupFiled),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ids),
      label: cdktf.booleanToTerraform(this._label),
      output_file: cdktf.stringToTerraform(this._outputFile),
      resource_type: cdktf.stringToTerraform(this._resourceType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_filed: {
        value: cdktf.stringToHclTerraform(this._groupFiled),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      label: {
        value: cdktf.booleanToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
