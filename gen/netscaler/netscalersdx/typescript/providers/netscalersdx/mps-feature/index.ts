// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * This is Admin controllable. 0: Disable UI and Backend, 1: Disable UI and enable Backend, 2: Enable UI and disable Backend, 3: Enable UI and Backend.. Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps_feature#admin_toggle MpsFeature#admin_toggle}
  */
  readonly adminToggle?: number;
  /**
  * This is Ops controllable and will not be visible to the Admin to control. If true: Ops controllable feature, false: Admin controllable feature..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps_feature#built_in MpsFeature#built_in}
  */
  readonly builtIn?: boolean | cdktf.IResolvable;
  /**
  * Feature Description..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps_feature#description MpsFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps_feature#feature_name MpsFeature#feature_name}
  */
  readonly featureName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps_feature#id MpsFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * This is Ops controllable. 0: Disable UI and Backend, 1: Disable UI and enable Backend, 2: Enable UI and disable Backend, 3: Enable UI and Backend. Ops controlled takes higher precedence than Admin Controlled.. Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps_feature#ops_toggle MpsFeature#ops_toggle}
  */
  readonly opsToggle?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps_feature netscalersdx_mps_feature}
*/
export class MpsFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_mps_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsFeature to import
  * @param importFromId The id of the existing MpsFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_mps_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/mps_feature netscalersdx_mps_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: MpsFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_mps_feature',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminToggle = config.adminToggle;
    this._builtIn = config.builtIn;
    this._description = config.description;
    this._featureName = config.featureName;
    this._id = config.id;
    this._opsToggle = config.opsToggle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_toggle - computed: true, optional: true, required: false
  private _adminToggle?: number; 
  public get adminToggle() {
    return this.getNumberAttribute('admin_toggle');
  }
  public set adminToggle(value: number) {
    this._adminToggle = value;
  }
  public resetAdminToggle() {
    this._adminToggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminToggleInput() {
    return this._adminToggle;
  }

  // built_in - computed: true, optional: true, required: false
  private _builtIn?: boolean | cdktf.IResolvable; 
  public get builtIn() {
    return this.getBooleanAttribute('built_in');
  }
  public set builtIn(value: boolean | cdktf.IResolvable) {
    this._builtIn = value;
  }
  public resetBuiltIn() {
    this._builtIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtInInput() {
    return this._builtIn;
  }

  // description - computed: true, optional: true, required: false
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

  // feature_name - computed: false, optional: false, required: true
  private _featureName?: string; 
  public get featureName() {
    return this.getStringAttribute('feature_name');
  }
  public set featureName(value: string) {
    this._featureName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameInput() {
    return this._featureName;
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

  // ops_toggle - computed: true, optional: true, required: false
  private _opsToggle?: number; 
  public get opsToggle() {
    return this.getNumberAttribute('ops_toggle');
  }
  public set opsToggle(value: number) {
    this._opsToggle = value;
  }
  public resetOpsToggle() {
    this._opsToggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opsToggleInput() {
    return this._opsToggle;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_toggle: cdktf.numberToTerraform(this._adminToggle),
      built_in: cdktf.booleanToTerraform(this._builtIn),
      description: cdktf.stringToTerraform(this._description),
      feature_name: cdktf.stringToTerraform(this._featureName),
      id: cdktf.stringToTerraform(this._id),
      ops_toggle: cdktf.numberToTerraform(this._opsToggle),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_toggle: {
        value: cdktf.numberToHclTerraform(this._adminToggle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      built_in: {
        value: cdktf.booleanToHclTerraform(this._builtIn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_name: {
        value: cdktf.stringToHclTerraform(this._featureName),
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
      ops_toggle: {
        value: cdktf.numberToHclTerraform(this._opsToggle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
