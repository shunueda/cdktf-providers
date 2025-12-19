// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/oos_application_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OosApplicationGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/oos_application_group#application_group_name OosApplicationGroup#application_group_name}
  */
  readonly applicationGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/oos_application_group#application_name OosApplicationGroup#application_name}
  */
  readonly applicationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/oos_application_group#deploy_region_id OosApplicationGroup#deploy_region_id}
  */
  readonly deployRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/oos_application_group#description OosApplicationGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/oos_application_group#id OosApplicationGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/oos_application_group#import_tag_key OosApplicationGroup#import_tag_key}
  */
  readonly importTagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/oos_application_group#import_tag_value OosApplicationGroup#import_tag_value}
  */
  readonly importTagValue?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/oos_application_group alicloud_oos_application_group}
*/
export class OosApplicationGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_oos_application_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OosApplicationGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OosApplicationGroup to import
  * @param importFromId The id of the existing OosApplicationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/oos_application_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OosApplicationGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_oos_application_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/oos_application_group alicloud_oos_application_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OosApplicationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: OosApplicationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_oos_application_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationGroupName = config.applicationGroupName;
    this._applicationName = config.applicationName;
    this._deployRegionId = config.deployRegionId;
    this._description = config.description;
    this._id = config.id;
    this._importTagKey = config.importTagKey;
    this._importTagValue = config.importTagValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_group_name - computed: false, optional: false, required: true
  private _applicationGroupName?: string; 
  public get applicationGroupName() {
    return this.getStringAttribute('application_group_name');
  }
  public set applicationGroupName(value: string) {
    this._applicationGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationGroupNameInput() {
    return this._applicationGroupName;
  }

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // deploy_region_id - computed: false, optional: false, required: true
  private _deployRegionId?: string; 
  public get deployRegionId() {
    return this.getStringAttribute('deploy_region_id');
  }
  public set deployRegionId(value: string) {
    this._deployRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployRegionIdInput() {
    return this._deployRegionId;
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

  // import_tag_key - computed: true, optional: true, required: false
  private _importTagKey?: string; 
  public get importTagKey() {
    return this.getStringAttribute('import_tag_key');
  }
  public set importTagKey(value: string) {
    this._importTagKey = value;
  }
  public resetImportTagKey() {
    this._importTagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importTagKeyInput() {
    return this._importTagKey;
  }

  // import_tag_value - computed: true, optional: true, required: false
  private _importTagValue?: string; 
  public get importTagValue() {
    return this.getStringAttribute('import_tag_value');
  }
  public set importTagValue(value: string) {
    this._importTagValue = value;
  }
  public resetImportTagValue() {
    this._importTagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importTagValueInput() {
    return this._importTagValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_group_name: cdktf.stringToTerraform(this._applicationGroupName),
      application_name: cdktf.stringToTerraform(this._applicationName),
      deploy_region_id: cdktf.stringToTerraform(this._deployRegionId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      import_tag_key: cdktf.stringToTerraform(this._importTagKey),
      import_tag_value: cdktf.stringToTerraform(this._importTagValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_group_name: {
        value: cdktf.stringToHclTerraform(this._applicationGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_name: {
        value: cdktf.stringToHclTerraform(this._applicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_region_id: {
        value: cdktf.stringToHclTerraform(this._deployRegionId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_tag_key: {
        value: cdktf.stringToHclTerraform(this._importTagKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_tag_value: {
        value: cdktf.stringToHclTerraform(this._importTagValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
