// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/debug_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryDebugTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the fully-qualified Java package, class, or method affected by the settings in this target definition. Use the number character (#) to separate the class name and the method name (that is, com.unboundid.directory.server.core.DirectoryServer#startUp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/debug_target#debug_scope DataPingdirectoryDebugTarget#debug_scope}
  */
  readonly debugScope: string;
  /**
  * Name of the parent Log Publisher
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/debug_target#log_publisher_name DataPingdirectoryDebugTarget#log_publisher_name}
  */
  readonly logPublisherName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/debug_target pingdirectory_debug_target}
*/
export class DataPingdirectoryDebugTarget extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_debug_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryDebugTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryDebugTarget to import
  * @param importFromId The id of the existing DataPingdirectoryDebugTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/debug_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryDebugTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_debug_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/debug_target pingdirectory_debug_target} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryDebugTargetConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryDebugTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_debug_target',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._debugScope = config.debugScope;
    this._logPublisherName = config.logPublisherName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug_category - computed: true, optional: false, required: false
  public get debugCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('debug_category'));
  }

  // debug_level - computed: true, optional: false, required: false
  public get debugLevel() {
    return this.getStringAttribute('debug_level');
  }

  // debug_scope - computed: false, optional: false, required: true
  private _debugScope?: string; 
  public get debugScope() {
    return this.getStringAttribute('debug_scope');
  }
  public set debugScope(value: string) {
    this._debugScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get debugScopeInput() {
    return this._debugScope;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_throwable_cause - computed: true, optional: false, required: false
  public get includeThrowableCause() {
    return this.getBooleanAttribute('include_throwable_cause');
  }

  // log_publisher_name - computed: false, optional: false, required: true
  private _logPublisherName?: string; 
  public get logPublisherName() {
    return this.getStringAttribute('log_publisher_name');
  }
  public set logPublisherName(value: string) {
    this._logPublisherName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logPublisherNameInput() {
    return this._logPublisherName;
  }

  // omit_method_entry_arguments - computed: true, optional: false, required: false
  public get omitMethodEntryArguments() {
    return this.getBooleanAttribute('omit_method_entry_arguments');
  }

  // omit_method_return_value - computed: true, optional: false, required: false
  public get omitMethodReturnValue() {
    return this.getBooleanAttribute('omit_method_return_value');
  }

  // throwable_stack_frames - computed: true, optional: false, required: false
  public get throwableStackFrames() {
    return this.getNumberAttribute('throwable_stack_frames');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      debug_scope: cdktf.stringToTerraform(this._debugScope),
      log_publisher_name: cdktf.stringToTerraform(this._logPublisherName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      debug_scope: {
        value: cdktf.stringToHclTerraform(this._debugScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_publisher_name: {
        value: cdktf.stringToHclTerraform(this._logPublisherName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
