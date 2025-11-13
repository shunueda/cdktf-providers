// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_deploy_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlDeployGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of deploy group. the maximum length cannot exceed 60 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_deploy_group#deploy_group_name MysqlDeployGroup#deploy_group_name}
  */
  readonly deployGroupName: string;
  /**
  * The description of deploy group. the maximum length cannot exceed 200 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_deploy_group#description MysqlDeployGroup#description}
  */
  readonly description?: string;
  /**
  * The device class of deploy group. optional value is SH12+SH02, TS85, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_deploy_group#dev_class MysqlDeployGroup#dev_class}
  */
  readonly devClass?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_deploy_group#id MysqlDeployGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The limit on the number of instances on the same physical machine in deploy group affinity policy 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_deploy_group#limit_num MysqlDeployGroup#limit_num}
  */
  readonly limitNum?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_deploy_group tencentcloud_mysql_deploy_group}
*/
export class MysqlDeployGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_deploy_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlDeployGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlDeployGroup to import
  * @param importFromId The id of the existing MysqlDeployGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_deploy_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlDeployGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_deploy_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/resources/mysql_deploy_group tencentcloud_mysql_deploy_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlDeployGroupConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlDeployGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_deploy_group',
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
    this._deployGroupName = config.deployGroupName;
    this._description = config.description;
    this._devClass = config.devClass;
    this._id = config.id;
    this._limitNum = config.limitNum;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deploy_group_name - computed: false, optional: false, required: true
  private _deployGroupName?: string; 
  public get deployGroupName() {
    return this.getStringAttribute('deploy_group_name');
  }
  public set deployGroupName(value: string) {
    this._deployGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployGroupNameInput() {
    return this._deployGroupName;
  }

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

  // dev_class - computed: false, optional: true, required: false
  private _devClass?: string[]; 
  public get devClass() {
    return cdktf.Fn.tolist(this.getListAttribute('dev_class'));
  }
  public set devClass(value: string[]) {
    this._devClass = value;
  }
  public resetDevClass() {
    this._devClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devClassInput() {
    return this._devClass;
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

  // limit_num - computed: false, optional: true, required: false
  private _limitNum?: number; 
  public get limitNum() {
    return this.getNumberAttribute('limit_num');
  }
  public set limitNum(value: number) {
    this._limitNum = value;
  }
  public resetLimitNum() {
    this._limitNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitNumInput() {
    return this._limitNum;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deploy_group_name: cdktf.stringToTerraform(this._deployGroupName),
      description: cdktf.stringToTerraform(this._description),
      dev_class: cdktf.listMapper(cdktf.stringToTerraform, false)(this._devClass),
      id: cdktf.stringToTerraform(this._id),
      limit_num: cdktf.numberToTerraform(this._limitNum),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy_group_name: {
        value: cdktf.stringToHclTerraform(this._deployGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev_class: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._devClass),
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
      limit_num: {
        value: cdktf.numberToHclTerraform(this._limitNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
