// https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kbld
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KbldConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configuration as YAML
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kbld#config_yaml Kbld#config_yaml}
  */
  readonly configYaml?: string;
  /**
  * Enable debug logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kbld#debug_logs Kbld#debug_logs}
  */
  readonly debugLogs?: boolean | cdktf.IResolvable;
  /**
  * Files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kbld#files Kbld#files}
  */
  readonly files?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kbld#id Kbld#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kbld carvel_kbld}
*/
export class Kbld extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "carvel_kbld";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Kbld resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Kbld to import
  * @param importFromId The id of the existing Kbld that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kbld#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Kbld to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "carvel_kbld", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware-tanzu/carvel/0.11.0/docs/resources/kbld carvel_kbld} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KbldConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KbldConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'carvel_kbld',
      terraformGeneratorMetadata: {
        providerName: 'carvel',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configYaml = config.configYaml;
    this._debugLogs = config.debugLogs;
    this._files = config.files;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_yaml - computed: false, optional: true, required: false
  private _configYaml?: string; 
  public get configYaml() {
    return this.getStringAttribute('config_yaml');
  }
  public set configYaml(value: string) {
    this._configYaml = value;
  }
  public resetConfigYaml() {
    this._configYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configYamlInput() {
    return this._configYaml;
  }

  // debug_logs - computed: false, optional: true, required: false
  private _debugLogs?: boolean | cdktf.IResolvable; 
  public get debugLogs() {
    return this.getBooleanAttribute('debug_logs');
  }
  public set debugLogs(value: boolean | cdktf.IResolvable) {
    this._debugLogs = value;
  }
  public resetDebugLogs() {
    this._debugLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugLogsInput() {
    return this._debugLogs;
  }

  // files - computed: false, optional: true, required: false
  private _files?: string[]; 
  public get files() {
    return this.getListAttribute('files');
  }
  public set files(value: string[]) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
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

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_yaml: cdktf.stringToTerraform(this._configYaml),
      debug_logs: cdktf.booleanToTerraform(this._debugLogs),
      files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._files),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_yaml: {
        value: cdktf.stringToHclTerraform(this._configYaml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug_logs: {
        value: cdktf.booleanToHclTerraform(this._debugLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._files),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
