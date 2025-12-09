// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/lb_l7rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEdgecenterLbL7RuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The uuid of l7rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/lb_l7rule#id DataEdgecenterLbL7Rule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The ID of the L7 policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/lb_l7rule#l7policy_id DataEdgecenterLbL7Rule#l7policy_id}
  */
  readonly l7PolicyId?: string;
  /**
  * The name of the L7 policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/lb_l7rule#l7policy_name DataEdgecenterLbL7Rule#l7policy_name}
  */
  readonly l7PolicyName?: string;
  /**
  * The uuid of the project. Either 'project_id' or 'project_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/lb_l7rule#project_id DataEdgecenterLbL7Rule#project_id}
  */
  readonly projectId?: number;
  /**
  * The name of the project. Either 'project_id' or 'project_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/lb_l7rule#project_name DataEdgecenterLbL7Rule#project_name}
  */
  readonly projectName?: string;
  /**
  * The uuid of the region. Either 'region_id' or 'region_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/lb_l7rule#region_id DataEdgecenterLbL7Rule#region_id}
  */
  readonly regionId?: number;
  /**
  * The name of the region. Either 'region_id' or 'region_name' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/lb_l7rule#region_name DataEdgecenterLbL7Rule#region_name}
  */
  readonly regionName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/lb_l7rule edgecenter_lb_l7rule}
*/
export class DataEdgecenterLbL7Rule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_lb_l7rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEdgecenterLbL7Rule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEdgecenterLbL7Rule to import
  * @param importFromId The id of the existing DataEdgecenterLbL7Rule that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/lb_l7rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEdgecenterLbL7Rule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_lb_l7rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/lb_l7rule edgecenter_lb_l7rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEdgecenterLbL7RuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataEdgecenterLbL7RuleConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_lb_l7rule',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.6',
        providerVersionConstraint: '0.10.6'
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
    this._l7PolicyId = config.l7PolicyId;
    this._l7PolicyName = config.l7PolicyName;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compare_type - computed: true, optional: false, required: false
  public get compareType() {
    return this.getStringAttribute('compare_type');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // invert - computed: true, optional: false, required: false
  public get invert() {
    return this.getBooleanAttribute('invert');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // l7policy_id - computed: false, optional: true, required: false
  private _l7PolicyId?: string; 
  public get l7PolicyId() {
    return this.getStringAttribute('l7policy_id');
  }
  public set l7PolicyId(value: string) {
    this._l7PolicyId = value;
  }
  public resetL7PolicyId() {
    this._l7PolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7PolicyIdInput() {
    return this._l7PolicyId;
  }

  // l7policy_name - computed: false, optional: true, required: false
  private _l7PolicyName?: string; 
  public get l7PolicyName() {
    return this.getStringAttribute('l7policy_name');
  }
  public set l7PolicyName(value: string) {
    this._l7PolicyName = value;
  }
  public resetL7PolicyName() {
    this._l7PolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7PolicyNameInput() {
    return this._l7PolicyName;
  }

  // listener_id - computed: true, optional: false, required: false
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }

  // operating_status - computed: true, optional: false, required: false
  public get operatingStatus() {
    return this.getStringAttribute('operating_status');
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // provisioning_status - computed: true, optional: false, required: false
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
  }

  // region_id - computed: true, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: true, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      l7policy_id: cdktf.stringToTerraform(this._l7PolicyId),
      l7policy_name: cdktf.stringToTerraform(this._l7PolicyName),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
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
      l7policy_id: {
        value: cdktf.stringToHclTerraform(this._l7PolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l7policy_name: {
        value: cdktf.stringToHclTerraform(this._l7PolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
