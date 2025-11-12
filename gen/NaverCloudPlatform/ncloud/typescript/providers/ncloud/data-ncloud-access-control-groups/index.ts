// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/access_control_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNcloudAccessControlGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A List of access control group configuration no
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/access_control_groups#access_control_groups DataNcloudAccessControlGroups#access_control_groups}
  */
  readonly accessControlGroups?: string[];
  /**
  * List of ACG configuration numbers you want to get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/access_control_groups#configuration_no_list DataNcloudAccessControlGroups#configuration_no_list}
  */
  readonly configurationNoList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/access_control_groups#id DataNcloudAccessControlGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/access_control_groups#is_default DataNcloudAccessControlGroups#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/access_control_groups#is_default_group DataNcloudAccessControlGroups#is_default_group}
  */
  readonly isDefaultGroup?: boolean | cdktf.IResolvable;
  /**
  * Name of the ACG you want to get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/access_control_groups#name DataNcloudAccessControlGroups#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/access_control_groups#output_file DataNcloudAccessControlGroups#output_file}
  */
  readonly outputFile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/access_control_groups ncloud_access_control_groups}
*/
export class DataNcloudAccessControlGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_access_control_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNcloudAccessControlGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNcloudAccessControlGroups to import
  * @param importFromId The id of the existing DataNcloudAccessControlGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/access_control_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNcloudAccessControlGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_access_control_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/data-sources/access_control_groups ncloud_access_control_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNcloudAccessControlGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNcloudAccessControlGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ncloud_access_control_groups',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4',
        providerVersionConstraint: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessControlGroups = config.accessControlGroups;
    this._configurationNoList = config.configurationNoList;
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._isDefaultGroup = config.isDefaultGroup;
    this._name = config.name;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_groups - computed: false, optional: true, required: false
  private _accessControlGroups?: string[]; 
  public get accessControlGroups() {
    return this.getListAttribute('access_control_groups');
  }
  public set accessControlGroups(value: string[]) {
    this._accessControlGroups = value;
  }
  public resetAccessControlGroups() {
    this._accessControlGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlGroupsInput() {
    return this._accessControlGroups;
  }

  // configuration_no_list - computed: false, optional: true, required: false
  private _configurationNoList?: string[]; 
  public get configurationNoList() {
    return this.getListAttribute('configuration_no_list');
  }
  public set configurationNoList(value: string[]) {
    this._configurationNoList = value;
  }
  public resetConfigurationNoList() {
    this._configurationNoList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationNoListInput() {
    return this._configurationNoList;
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

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // is_default_group - computed: false, optional: true, required: false
  private _isDefaultGroup?: boolean | cdktf.IResolvable; 
  public get isDefaultGroup() {
    return this.getBooleanAttribute('is_default_group');
  }
  public set isDefaultGroup(value: boolean | cdktf.IResolvable) {
    this._isDefaultGroup = value;
  }
  public resetIsDefaultGroup() {
    this._isDefaultGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultGroupInput() {
    return this._isDefaultGroup;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
      access_control_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessControlGroups),
      configuration_no_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configurationNoList),
      id: cdktf.stringToTerraform(this._id),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      is_default_group: cdktf.booleanToTerraform(this._isDefaultGroup),
      name: cdktf.stringToTerraform(this._name),
      output_file: cdktf.stringToTerraform(this._outputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accessControlGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      configuration_no_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configurationNoList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_default_group: {
        value: cdktf.booleanToHclTerraform(this._isDefaultGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
