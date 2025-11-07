// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_monitoring_advanced
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostMonitoringAdvancedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Inject CodeModules in Discovery mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_monitoring_advanced#code_module_injection HostMonitoringAdvanced#code_module_injection}
  */
  readonly codeModuleInjection?: boolean | cdktf.IResolvable;
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_monitoring_advanced#host_id HostMonitoringAdvanced#host_id}
  */
  readonly hostId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_monitoring_advanced#id HostMonitoringAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Disabling this via [oneagentctl](https://dt-url.net/oneagentctl) takes precedence over this setting and cannot be changed from the Dynatrace web UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_monitoring_advanced#process_agent_injection HostMonitoringAdvanced#process_agent_injection}
  */
  readonly processAgentInjection: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_monitoring_advanced dynatrace_host_monitoring_advanced}
*/
export class HostMonitoringAdvanced extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_host_monitoring_advanced";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostMonitoringAdvanced resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostMonitoringAdvanced to import
  * @param importFromId The id of the existing HostMonitoringAdvanced that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_monitoring_advanced#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostMonitoringAdvanced to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_host_monitoring_advanced", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/host_monitoring_advanced dynatrace_host_monitoring_advanced} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostMonitoringAdvancedConfig
  */
  public constructor(scope: Construct, id: string, config: HostMonitoringAdvancedConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_host_monitoring_advanced',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._codeModuleInjection = config.codeModuleInjection;
    this._hostId = config.hostId;
    this._id = config.id;
    this._processAgentInjection = config.processAgentInjection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // code_module_injection - computed: false, optional: true, required: false
  private _codeModuleInjection?: boolean | cdktf.IResolvable; 
  public get codeModuleInjection() {
    return this.getBooleanAttribute('code_module_injection');
  }
  public set codeModuleInjection(value: boolean | cdktf.IResolvable) {
    this._codeModuleInjection = value;
  }
  public resetCodeModuleInjection() {
    this._codeModuleInjection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeModuleInjectionInput() {
    return this._codeModuleInjection;
  }

  // host_id - computed: false, optional: false, required: true
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
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

  // process_agent_injection - computed: false, optional: false, required: true
  private _processAgentInjection?: boolean | cdktf.IResolvable; 
  public get processAgentInjection() {
    return this.getBooleanAttribute('process_agent_injection');
  }
  public set processAgentInjection(value: boolean | cdktf.IResolvable) {
    this._processAgentInjection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processAgentInjectionInput() {
    return this._processAgentInjection;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      code_module_injection: cdktf.booleanToTerraform(this._codeModuleInjection),
      host_id: cdktf.stringToTerraform(this._hostId),
      id: cdktf.stringToTerraform(this._id),
      process_agent_injection: cdktf.booleanToTerraform(this._processAgentInjection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      code_module_injection: {
        value: cdktf.booleanToHclTerraform(this._codeModuleInjection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
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
      process_agent_injection: {
        value: cdktf.booleanToHclTerraform(this._processAgentInjection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
