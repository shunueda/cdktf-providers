// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/scf_trigger_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScfTriggerConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * User Additional Information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/scf_trigger_config#custom_argument ScfTriggerConfig#custom_argument}
  */
  readonly customArgument?: string;
  /**
  * Trigger description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/scf_trigger_config#description ScfTriggerConfig#description}
  */
  readonly description?: string;
  /**
  * Status of trigger. Values: OPEN (enabled); CLOSE disabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/scf_trigger_config#enable ScfTriggerConfig#enable}
  */
  readonly enable?: string;
  /**
  * Function name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/scf_trigger_config#function_name ScfTriggerConfig#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/scf_trigger_config#id ScfTriggerConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Function namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/scf_trigger_config#namespace ScfTriggerConfig#namespace}
  */
  readonly namespace?: string;
  /**
  * Function version. It defaults to `$LATEST`. It's recommended to use `[$DEFAULT](https://intl.cloud.tencent.com/document/product/583/36149?from_cn_redirect=1#.E9.BB.98.E8.AE.A4.E5.88.AB.E5.90.8D)` for canary release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/scf_trigger_config#qualifier ScfTriggerConfig#qualifier}
  */
  readonly qualifier?: string;
  /**
  * TriggerDesc parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/scf_trigger_config#trigger_desc ScfTriggerConfig#trigger_desc}
  */
  readonly triggerDesc?: string;
  /**
  * Trigger Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/scf_trigger_config#trigger_name ScfTriggerConfig#trigger_name}
  */
  readonly triggerName: string;
  /**
  * Trigger type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/scf_trigger_config#type ScfTriggerConfig#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/scf_trigger_config tencentcloud_scf_trigger_config}
*/
export class ScfTriggerConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_scf_trigger_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScfTriggerConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScfTriggerConfig to import
  * @param importFromId The id of the existing ScfTriggerConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/scf_trigger_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScfTriggerConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_scf_trigger_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/scf_trigger_config tencentcloud_scf_trigger_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScfTriggerConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ScfTriggerConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_scf_trigger_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customArgument = config.customArgument;
    this._description = config.description;
    this._enable = config.enable;
    this._functionName = config.functionName;
    this._id = config.id;
    this._namespace = config.namespace;
    this._qualifier = config.qualifier;
    this._triggerDesc = config.triggerDesc;
    this._triggerName = config.triggerName;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_argument - computed: false, optional: true, required: false
  private _customArgument?: string; 
  public get customArgument() {
    return this.getStringAttribute('custom_argument');
  }
  public set customArgument(value: string) {
    this._customArgument = value;
  }
  public resetCustomArgument() {
    this._customArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customArgumentInput() {
    return this._customArgument;
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

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }

  // trigger_desc - computed: true, optional: true, required: false
  private _triggerDesc?: string; 
  public get triggerDesc() {
    return this.getStringAttribute('trigger_desc');
  }
  public set triggerDesc(value: string) {
    this._triggerDesc = value;
  }
  public resetTriggerDesc() {
    this._triggerDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerDescInput() {
    return this._triggerDesc;
  }

  // trigger_name - computed: false, optional: false, required: true
  private _triggerName?: string; 
  public get triggerName() {
    return this.getStringAttribute('trigger_name');
  }
  public set triggerName(value: string) {
    this._triggerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerNameInput() {
    return this._triggerName;
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
      custom_argument: cdktf.stringToTerraform(this._customArgument),
      description: cdktf.stringToTerraform(this._description),
      enable: cdktf.stringToTerraform(this._enable),
      function_name: cdktf.stringToTerraform(this._functionName),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      qualifier: cdktf.stringToTerraform(this._qualifier),
      trigger_desc: cdktf.stringToTerraform(this._triggerDesc),
      trigger_name: cdktf.stringToTerraform(this._triggerName),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_argument: {
        value: cdktf.stringToHclTerraform(this._customArgument),
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
      enable: {
        value: cdktf.stringToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qualifier: {
        value: cdktf.stringToHclTerraform(this._qualifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_desc: {
        value: cdktf.stringToHclTerraform(this._triggerDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_name: {
        value: cdktf.stringToHclTerraform(this._triggerName),
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
