// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_application_file_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfApplicationFileConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Config file associated application ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_application_file_config#application_id TsfApplicationFileConfig#application_id}
  */
  readonly applicationId: string;
  /**
  * Configuration file encoding, utf-8 or gbk. Note: If you choose gbk, you need the support of a new version of tsf-consul-template (public cloud virtual machines need to use 1.32 tsf-agent, and containers need to obtain the latest tsf-consul-template-docker.tar.gz from the documentation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_application_file_config#config_file_code TsfApplicationFileConfig#config_file_code}
  */
  readonly configFileCode?: string;
  /**
  * Config file name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_application_file_config#config_file_name TsfApplicationFileConfig#config_file_name}
  */
  readonly configFileName: string;
  /**
  * config release path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_application_file_config#config_file_path TsfApplicationFileConfig#config_file_path}
  */
  readonly configFilePath: string;
  /**
  * Configuration file content (the original content encoding needs to be in utf-8 format, if the ConfigFileCode is gbk, it will be converted in the background).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_application_file_config#config_file_value TsfApplicationFileConfig#config_file_value}
  */
  readonly configFileValue: string;
  /**
  * Config Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_application_file_config#config_name TsfApplicationFileConfig#config_name}
  */
  readonly configName: string;
  /**
  * post command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_application_file_config#config_post_cmd TsfApplicationFileConfig#config_post_cmd}
  */
  readonly configPostCmd?: string;
  /**
  * Config version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_application_file_config#config_version TsfApplicationFileConfig#config_version}
  */
  readonly configVersion: string;
  /**
  * config version description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_application_file_config#config_version_desc TsfApplicationFileConfig#config_version_desc}
  */
  readonly configVersionDesc?: string;
  /**
  * the config value is encoded with base64 or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_application_file_config#encode_with_base64 TsfApplicationFileConfig#encode_with_base64}
  */
  readonly encodeWithBase64?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_application_file_config#id TsfApplicationFileConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * datasource for auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_application_file_config#program_id_list TsfApplicationFileConfig#program_id_list}
  */
  readonly programIdList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_application_file_config tencentcloud_tsf_application_file_config}
*/
export class TsfApplicationFileConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_application_file_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfApplicationFileConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfApplicationFileConfig to import
  * @param importFromId The id of the existing TsfApplicationFileConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_application_file_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfApplicationFileConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_application_file_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_application_file_config tencentcloud_tsf_application_file_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfApplicationFileConfigConfig
  */
  public constructor(scope: Construct, id: string, config: TsfApplicationFileConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_application_file_config',
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
    this._applicationId = config.applicationId;
    this._configFileCode = config.configFileCode;
    this._configFileName = config.configFileName;
    this._configFilePath = config.configFilePath;
    this._configFileValue = config.configFileValue;
    this._configName = config.configName;
    this._configPostCmd = config.configPostCmd;
    this._configVersion = config.configVersion;
    this._configVersionDesc = config.configVersionDesc;
    this._encodeWithBase64 = config.encodeWithBase64;
    this._id = config.id;
    this._programIdList = config.programIdList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // config_file_code - computed: false, optional: true, required: false
  private _configFileCode?: string; 
  public get configFileCode() {
    return this.getStringAttribute('config_file_code');
  }
  public set configFileCode(value: string) {
    this._configFileCode = value;
  }
  public resetConfigFileCode() {
    this._configFileCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileCodeInput() {
    return this._configFileCode;
  }

  // config_file_name - computed: false, optional: false, required: true
  private _configFileName?: string; 
  public get configFileName() {
    return this.getStringAttribute('config_file_name');
  }
  public set configFileName(value: string) {
    this._configFileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileNameInput() {
    return this._configFileName;
  }

  // config_file_path - computed: false, optional: false, required: true
  private _configFilePath?: string; 
  public get configFilePath() {
    return this.getStringAttribute('config_file_path');
  }
  public set configFilePath(value: string) {
    this._configFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configFilePathInput() {
    return this._configFilePath;
  }

  // config_file_value - computed: false, optional: false, required: true
  private _configFileValue?: string; 
  public get configFileValue() {
    return this.getStringAttribute('config_file_value');
  }
  public set configFileValue(value: string) {
    this._configFileValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileValueInput() {
    return this._configFileValue;
  }

  // config_name - computed: false, optional: false, required: true
  private _configName?: string; 
  public get configName() {
    return this.getStringAttribute('config_name');
  }
  public set configName(value: string) {
    this._configName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configNameInput() {
    return this._configName;
  }

  // config_post_cmd - computed: false, optional: true, required: false
  private _configPostCmd?: string; 
  public get configPostCmd() {
    return this.getStringAttribute('config_post_cmd');
  }
  public set configPostCmd(value: string) {
    this._configPostCmd = value;
  }
  public resetConfigPostCmd() {
    this._configPostCmd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPostCmdInput() {
    return this._configPostCmd;
  }

  // config_version - computed: false, optional: false, required: true
  private _configVersion?: string; 
  public get configVersion() {
    return this.getStringAttribute('config_version');
  }
  public set configVersion(value: string) {
    this._configVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configVersionInput() {
    return this._configVersion;
  }

  // config_version_desc - computed: false, optional: true, required: false
  private _configVersionDesc?: string; 
  public get configVersionDesc() {
    return this.getStringAttribute('config_version_desc');
  }
  public set configVersionDesc(value: string) {
    this._configVersionDesc = value;
  }
  public resetConfigVersionDesc() {
    this._configVersionDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configVersionDescInput() {
    return this._configVersionDesc;
  }

  // encode_with_base64 - computed: false, optional: true, required: false
  private _encodeWithBase64?: boolean | cdktf.IResolvable; 
  public get encodeWithBase64() {
    return this.getBooleanAttribute('encode_with_base64');
  }
  public set encodeWithBase64(value: boolean | cdktf.IResolvable) {
    this._encodeWithBase64 = value;
  }
  public resetEncodeWithBase64() {
    this._encodeWithBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeWithBase64Input() {
    return this._encodeWithBase64;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      config_file_code: cdktf.stringToTerraform(this._configFileCode),
      config_file_name: cdktf.stringToTerraform(this._configFileName),
      config_file_path: cdktf.stringToTerraform(this._configFilePath),
      config_file_value: cdktf.stringToTerraform(this._configFileValue),
      config_name: cdktf.stringToTerraform(this._configName),
      config_post_cmd: cdktf.stringToTerraform(this._configPostCmd),
      config_version: cdktf.stringToTerraform(this._configVersion),
      config_version_desc: cdktf.stringToTerraform(this._configVersionDesc),
      encode_with_base64: cdktf.booleanToTerraform(this._encodeWithBase64),
      id: cdktf.stringToTerraform(this._id),
      program_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._programIdList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_file_code: {
        value: cdktf.stringToHclTerraform(this._configFileCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_file_name: {
        value: cdktf.stringToHclTerraform(this._configFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_file_path: {
        value: cdktf.stringToHclTerraform(this._configFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_file_value: {
        value: cdktf.stringToHclTerraform(this._configFileValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_name: {
        value: cdktf.stringToHclTerraform(this._configName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_post_cmd: {
        value: cdktf.stringToHclTerraform(this._configPostCmd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_version: {
        value: cdktf.stringToHclTerraform(this._configVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_version_desc: {
        value: cdktf.stringToHclTerraform(this._configVersionDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encode_with_base64: {
        value: cdktf.booleanToHclTerraform(this._encodeWithBase64),
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
