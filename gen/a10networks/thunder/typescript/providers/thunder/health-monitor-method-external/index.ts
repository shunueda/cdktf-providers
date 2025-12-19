// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_external
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodExternalAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify external application's arguments (Application arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_external#ext_arguments HealthMonitorMethodExternalA#ext_arguments}
  */
  readonly extArguments?: string;
  /**
  * Specify the server port (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_external#ext_port HealthMonitorMethodExternalA#ext_port}
  */
  readonly extPort?: number;
  /**
  * Get server's perference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_external#ext_preference HealthMonitorMethodExternalA#ext_preference}
  */
  readonly extPreference?: number;
  /**
  * Specify external application (Program name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_external#ext_program HealthMonitorMethodExternalA#ext_program}
  */
  readonly extProgram?: string;
  /**
  * Specify external application (Program name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_external#ext_program_shared HealthMonitorMethodExternalA#ext_program_shared}
  */
  readonly extProgramShared?: string;
  /**
  * Enable root-shell environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_external#ext_root_shell HealthMonitorMethodExternalA#ext_root_shell}
  */
  readonly extRootShell?: number;
  /**
  * EXTERNAL type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_external#external HealthMonitorMethodExternalA#external}
  */
  readonly external?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_external#id HealthMonitorMethodExternalA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Monitor_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_external#monitor_name HealthMonitorMethodExternalA#monitor_name}
  */
  readonly monitorName: string;
  /**
  * external application from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_external#shared_partition_program HealthMonitorMethodExternalA#shared_partition_program}
  */
  readonly sharedPartitionProgram?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_external#uuid HealthMonitorMethodExternalA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_external thunder_health_monitor_method_external}
*/
export class HealthMonitorMethodExternalA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_external";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodExternalA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodExternalA to import
  * @param importFromId The id of the existing HealthMonitorMethodExternalA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_external#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodExternalA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_external", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor_method_external thunder_health_monitor_method_external} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodExternalAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodExternalAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_external',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extArguments = config.extArguments;
    this._extPort = config.extPort;
    this._extPreference = config.extPreference;
    this._extProgram = config.extProgram;
    this._extProgramShared = config.extProgramShared;
    this._extRootShell = config.extRootShell;
    this._external = config.external;
    this._id = config.id;
    this._monitorName = config.monitorName;
    this._sharedPartitionProgram = config.sharedPartitionProgram;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ext_arguments - computed: false, optional: true, required: false
  private _extArguments?: string; 
  public get extArguments() {
    return this.getStringAttribute('ext_arguments');
  }
  public set extArguments(value: string) {
    this._extArguments = value;
  }
  public resetExtArguments() {
    this._extArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extArgumentsInput() {
    return this._extArguments;
  }

  // ext_port - computed: false, optional: true, required: false
  private _extPort?: number; 
  public get extPort() {
    return this.getNumberAttribute('ext_port');
  }
  public set extPort(value: number) {
    this._extPort = value;
  }
  public resetExtPort() {
    this._extPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extPortInput() {
    return this._extPort;
  }

  // ext_preference - computed: false, optional: true, required: false
  private _extPreference?: number; 
  public get extPreference() {
    return this.getNumberAttribute('ext_preference');
  }
  public set extPreference(value: number) {
    this._extPreference = value;
  }
  public resetExtPreference() {
    this._extPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extPreferenceInput() {
    return this._extPreference;
  }

  // ext_program - computed: false, optional: true, required: false
  private _extProgram?: string; 
  public get extProgram() {
    return this.getStringAttribute('ext_program');
  }
  public set extProgram(value: string) {
    this._extProgram = value;
  }
  public resetExtProgram() {
    this._extProgram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extProgramInput() {
    return this._extProgram;
  }

  // ext_program_shared - computed: false, optional: true, required: false
  private _extProgramShared?: string; 
  public get extProgramShared() {
    return this.getStringAttribute('ext_program_shared');
  }
  public set extProgramShared(value: string) {
    this._extProgramShared = value;
  }
  public resetExtProgramShared() {
    this._extProgramShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extProgramSharedInput() {
    return this._extProgramShared;
  }

  // ext_root_shell - computed: false, optional: true, required: false
  private _extRootShell?: number; 
  public get extRootShell() {
    return this.getNumberAttribute('ext_root_shell');
  }
  public set extRootShell(value: number) {
    this._extRootShell = value;
  }
  public resetExtRootShell() {
    this._extRootShell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extRootShellInput() {
    return this._extRootShell;
  }

  // external - computed: false, optional: true, required: false
  private _external?: number; 
  public get external() {
    return this.getNumberAttribute('external');
  }
  public set external(value: number) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
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

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // shared_partition_program - computed: false, optional: true, required: false
  private _sharedPartitionProgram?: number; 
  public get sharedPartitionProgram() {
    return this.getNumberAttribute('shared_partition_program');
  }
  public set sharedPartitionProgram(value: number) {
    this._sharedPartitionProgram = value;
  }
  public resetSharedPartitionProgram() {
    this._sharedPartitionProgram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionProgramInput() {
    return this._sharedPartitionProgram;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ext_arguments: cdktf.stringToTerraform(this._extArguments),
      ext_port: cdktf.numberToTerraform(this._extPort),
      ext_preference: cdktf.numberToTerraform(this._extPreference),
      ext_program: cdktf.stringToTerraform(this._extProgram),
      ext_program_shared: cdktf.stringToTerraform(this._extProgramShared),
      ext_root_shell: cdktf.numberToTerraform(this._extRootShell),
      external: cdktf.numberToTerraform(this._external),
      id: cdktf.stringToTerraform(this._id),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      shared_partition_program: cdktf.numberToTerraform(this._sharedPartitionProgram),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ext_arguments: {
        value: cdktf.stringToHclTerraform(this._extArguments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_port: {
        value: cdktf.numberToHclTerraform(this._extPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ext_preference: {
        value: cdktf.numberToHclTerraform(this._extPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ext_program: {
        value: cdktf.stringToHclTerraform(this._extProgram),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_program_shared: {
        value: cdktf.stringToHclTerraform(this._extProgramShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ext_root_shell: {
        value: cdktf.numberToHclTerraform(this._extRootShell),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external: {
        value: cdktf.numberToHclTerraform(this._external),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_name: {
        value: cdktf.stringToHclTerraform(this._monitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_partition_program: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionProgram),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
