// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/cloud_app_control_rule_actions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaCloudAppControlRuleActionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of cloud applications to retrieve available actions for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/cloud_app_control_rule_actions#cloud_apps DataZiaCloudAppControlRuleActions#cloud_apps}
  */
  readonly cloudApps: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/cloud_app_control_rule_actions#id DataZiaCloudAppControlRuleActions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The rule type for the Cloud App Control policy (e.g., 'web', 'email').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/cloud_app_control_rule_actions#type DataZiaCloudAppControlRuleActions#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/cloud_app_control_rule_actions zia_cloud_app_control_rule_actions}
*/
export class DataZiaCloudAppControlRuleActions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_cloud_app_control_rule_actions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaCloudAppControlRuleActions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaCloudAppControlRuleActions to import
  * @param importFromId The id of the existing DataZiaCloudAppControlRuleActions that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/cloud_app_control_rule_actions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaCloudAppControlRuleActions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_cloud_app_control_rule_actions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/cloud_app_control_rule_actions zia_cloud_app_control_rule_actions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaCloudAppControlRuleActionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataZiaCloudAppControlRuleActionsConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_cloud_app_control_rule_actions',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudApps = config.cloudApps;
    this._id = config.id;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_actions - computed: true, optional: false, required: false
  public get availableActions() {
    return this.getListAttribute('available_actions');
  }

  // cloud_apps - computed: false, optional: false, required: true
  private _cloudApps?: string[]; 
  public get cloudApps() {
    return this.getListAttribute('cloud_apps');
  }
  public set cloudApps(value: string[]) {
    this._cloudApps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAppsInput() {
    return this._cloudApps;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cloudApps),
      id: cdktf.stringToTerraform(this._id),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cloudApps),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
