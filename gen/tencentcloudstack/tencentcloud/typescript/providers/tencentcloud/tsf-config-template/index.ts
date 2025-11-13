// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tsf_config_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfConfigTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configuration template description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tsf_config_template#config_template_desc TsfConfigTemplate#config_template_desc}
  */
  readonly configTemplateDesc?: string;
  /**
  * Configuration template name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tsf_config_template#config_template_name TsfConfigTemplate#config_template_name}
  */
  readonly configTemplateName: string;
  /**
  * Configure the microservice framework corresponding to the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tsf_config_template#config_template_type TsfConfigTemplate#config_template_type}
  */
  readonly configTemplateType: string;
  /**
  * Configure template data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tsf_config_template#config_template_value TsfConfigTemplate#config_template_value}
  */
  readonly configTemplateValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tsf_config_template#id TsfConfigTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Program id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tsf_config_template#program_id_list TsfConfigTemplate#program_id_list}
  */
  readonly programIdList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tsf_config_template tencentcloud_tsf_config_template}
*/
export class TsfConfigTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_config_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfConfigTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfConfigTemplate to import
  * @param importFromId The id of the existing TsfConfigTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tsf_config_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfConfigTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_config_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/tsf_config_template tencentcloud_tsf_config_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfConfigTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: TsfConfigTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_config_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configTemplateDesc = config.configTemplateDesc;
    this._configTemplateName = config.configTemplateName;
    this._configTemplateType = config.configTemplateType;
    this._configTemplateValue = config.configTemplateValue;
    this._id = config.id;
    this._programIdList = config.programIdList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_template_desc - computed: false, optional: true, required: false
  private _configTemplateDesc?: string; 
  public get configTemplateDesc() {
    return this.getStringAttribute('config_template_desc');
  }
  public set configTemplateDesc(value: string) {
    this._configTemplateDesc = value;
  }
  public resetConfigTemplateDesc() {
    this._configTemplateDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTemplateDescInput() {
    return this._configTemplateDesc;
  }

  // config_template_id - computed: true, optional: false, required: false
  public get configTemplateId() {
    return this.getStringAttribute('config_template_id');
  }

  // config_template_name - computed: false, optional: false, required: true
  private _configTemplateName?: string; 
  public get configTemplateName() {
    return this.getStringAttribute('config_template_name');
  }
  public set configTemplateName(value: string) {
    this._configTemplateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configTemplateNameInput() {
    return this._configTemplateName;
  }

  // config_template_type - computed: false, optional: false, required: true
  private _configTemplateType?: string; 
  public get configTemplateType() {
    return this.getStringAttribute('config_template_type');
  }
  public set configTemplateType(value: string) {
    this._configTemplateType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configTemplateTypeInput() {
    return this._configTemplateType;
  }

  // config_template_value - computed: false, optional: false, required: true
  private _configTemplateValue?: string; 
  public get configTemplateValue() {
    return this.getStringAttribute('config_template_value');
  }
  public set configTemplateValue(value: string) {
    this._configTemplateValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configTemplateValueInput() {
    return this._configTemplateValue;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // program_id_list - computed: false, optional: true, required: false
  private _programIdList?: string[]; 
  public get programIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('program_id_list'));
  }
  public set programIdList(value: string[]) {
    this._programIdList = value;
  }
  public resetProgramIdList() {
    this._programIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programIdListInput() {
    return this._programIdList;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_template_desc: cdktf.stringToTerraform(this._configTemplateDesc),
      config_template_name: cdktf.stringToTerraform(this._configTemplateName),
      config_template_type: cdktf.stringToTerraform(this._configTemplateType),
      config_template_value: cdktf.stringToTerraform(this._configTemplateValue),
      id: cdktf.stringToTerraform(this._id),
      program_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._programIdList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_template_desc: {
        value: cdktf.stringToHclTerraform(this._configTemplateDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_template_name: {
        value: cdktf.stringToHclTerraform(this._configTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_template_type: {
        value: cdktf.stringToHclTerraform(this._configTemplateType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_template_value: {
        value: cdktf.stringToHclTerraform(this._configTemplateValue),
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
      program_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._programIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
