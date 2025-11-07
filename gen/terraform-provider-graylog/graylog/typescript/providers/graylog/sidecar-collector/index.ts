// https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/sidecar_collector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SidecarCollectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/sidecar_collector#default_template SidecarCollector#default_template}
  */
  readonly defaultTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/sidecar_collector#executable_path SidecarCollector#executable_path}
  */
  readonly executablePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/sidecar_collector#execute_parameters SidecarCollector#execute_parameters}
  */
  readonly executeParameters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/sidecar_collector#id SidecarCollector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/sidecar_collector#name SidecarCollector#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/sidecar_collector#node_operating_system SidecarCollector#node_operating_system}
  */
  readonly nodeOperatingSystem: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/sidecar_collector#service_type SidecarCollector#service_type}
  */
  readonly serviceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/sidecar_collector#validation_parameters SidecarCollector#validation_parameters}
  */
  readonly validationParameters?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/sidecar_collector graylog_sidecar_collector}
*/
export class SidecarCollector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "graylog_sidecar_collector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SidecarCollector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SidecarCollector to import
  * @param importFromId The id of the existing SidecarCollector that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/sidecar_collector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SidecarCollector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "graylog_sidecar_collector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-provider-graylog/graylog/1.0.4/docs/resources/sidecar_collector graylog_sidecar_collector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SidecarCollectorConfig
  */
  public constructor(scope: Construct, id: string, config: SidecarCollectorConfig) {
    super(scope, id, {
      terraformResourceType: 'graylog_sidecar_collector',
      terraformGeneratorMetadata: {
        providerName: 'graylog',
        providerVersion: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultTemplate = config.defaultTemplate;
    this._executablePath = config.executablePath;
    this._executeParameters = config.executeParameters;
    this._id = config.id;
    this._name = config.name;
    this._nodeOperatingSystem = config.nodeOperatingSystem;
    this._serviceType = config.serviceType;
    this._validationParameters = config.validationParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_template - computed: false, optional: true, required: false
  private _defaultTemplate?: string; 
  public get defaultTemplate() {
    return this.getStringAttribute('default_template');
  }
  public set defaultTemplate(value: string) {
    this._defaultTemplate = value;
  }
  public resetDefaultTemplate() {
    this._defaultTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTemplateInput() {
    return this._defaultTemplate;
  }

  // executable_path - computed: false, optional: false, required: true
  private _executablePath?: string; 
  public get executablePath() {
    return this.getStringAttribute('executable_path');
  }
  public set executablePath(value: string) {
    this._executablePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executablePathInput() {
    return this._executablePath;
  }

  // execute_parameters - computed: false, optional: true, required: false
  private _executeParameters?: string; 
  public get executeParameters() {
    return this.getStringAttribute('execute_parameters');
  }
  public set executeParameters(value: string) {
    this._executeParameters = value;
  }
  public resetExecuteParameters() {
    this._executeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeParametersInput() {
    return this._executeParameters;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // node_operating_system - computed: false, optional: false, required: true
  private _nodeOperatingSystem?: string; 
  public get nodeOperatingSystem() {
    return this.getStringAttribute('node_operating_system');
  }
  public set nodeOperatingSystem(value: string) {
    this._nodeOperatingSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeOperatingSystemInput() {
    return this._nodeOperatingSystem;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // validation_parameters - computed: false, optional: true, required: false
  private _validationParameters?: string; 
  public get validationParameters() {
    return this.getStringAttribute('validation_parameters');
  }
  public set validationParameters(value: string) {
    this._validationParameters = value;
  }
  public resetValidationParameters() {
    this._validationParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationParametersInput() {
    return this._validationParameters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_template: cdktf.stringToTerraform(this._defaultTemplate),
      executable_path: cdktf.stringToTerraform(this._executablePath),
      execute_parameters: cdktf.stringToTerraform(this._executeParameters),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      node_operating_system: cdktf.stringToTerraform(this._nodeOperatingSystem),
      service_type: cdktf.stringToTerraform(this._serviceType),
      validation_parameters: cdktf.stringToTerraform(this._validationParameters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_template: {
        value: cdktf.stringToHclTerraform(this._defaultTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      executable_path: {
        value: cdktf.stringToHclTerraform(this._executablePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execute_parameters: {
        value: cdktf.stringToHclTerraform(this._executeParameters),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_operating_system: {
        value: cdktf.stringToHclTerraform(this._nodeOperatingSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_parameters: {
        value: cdktf.stringToHclTerraform(this._validationParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
