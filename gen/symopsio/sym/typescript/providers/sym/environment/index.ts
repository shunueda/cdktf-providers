// https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Error Logger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/environment#error_logger_id Environment#error_logger_id}
  */
  readonly errorLoggerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/environment#id Environment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A map of Integrations available to this Environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/environment#integrations Environment#integrations}
  */
  readonly integrations?: { [key: string]: string };
  /**
  * An optional label for the Environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/environment#label Environment#label}
  */
  readonly label?: string;
  /**
  * IDs for each Log Destination to funnel logs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/environment#log_destination_ids Environment#log_destination_ids}
  */
  readonly logDestinationIds?: string[];
  /**
  * A unique identifier for the Environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/environment#name Environment#name}
  */
  readonly name: string;
  /**
  * The ID of the Runtime associated with this Environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/environment#runtime_id Environment#runtime_id}
  */
  readonly runtimeId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/environment sym_environment}
*/
export class Environment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sym_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Environment to import
  * @param importFromId The id of the existing Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Environment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sym_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/symopsio/sym/3.6.0/docs/resources/environment sym_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'sym_environment',
      terraformGeneratorMetadata: {
        providerName: 'sym',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._errorLoggerId = config.errorLoggerId;
    this._id = config.id;
    this._integrations = config.integrations;
    this._label = config.label;
    this._logDestinationIds = config.logDestinationIds;
    this._name = config.name;
    this._runtimeId = config.runtimeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // error_logger_id - computed: false, optional: true, required: false
  private _errorLoggerId?: string; 
  public get errorLoggerId() {
    return this.getStringAttribute('error_logger_id');
  }
  public set errorLoggerId(value: string) {
    this._errorLoggerId = value;
  }
  public resetErrorLoggerId() {
    this._errorLoggerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorLoggerIdInput() {
    return this._errorLoggerId;
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

  // integrations - computed: false, optional: true, required: false
  private _integrations?: { [key: string]: string }; 
  public get integrations() {
    return this.getStringMapAttribute('integrations');
  }
  public set integrations(value: { [key: string]: string }) {
    this._integrations = value;
  }
  public resetIntegrations() {
    this._integrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationsInput() {
    return this._integrations;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // log_destination_ids - computed: false, optional: true, required: false
  private _logDestinationIds?: string[]; 
  public get logDestinationIds() {
    return this.getListAttribute('log_destination_ids');
  }
  public set logDestinationIds(value: string[]) {
    this._logDestinationIds = value;
  }
  public resetLogDestinationIds() {
    this._logDestinationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDestinationIdsInput() {
    return this._logDestinationIds;
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

  // runtime_id - computed: false, optional: true, required: false
  private _runtimeId?: string; 
  public get runtimeId() {
    return this.getStringAttribute('runtime_id');
  }
  public set runtimeId(value: string) {
    this._runtimeId = value;
  }
  public resetRuntimeId() {
    this._runtimeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeIdInput() {
    return this._runtimeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      error_logger_id: cdktf.stringToTerraform(this._errorLoggerId),
      id: cdktf.stringToTerraform(this._id),
      integrations: cdktf.hashMapper(cdktf.stringToTerraform)(this._integrations),
      label: cdktf.stringToTerraform(this._label),
      log_destination_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logDestinationIds),
      name: cdktf.stringToTerraform(this._name),
      runtime_id: cdktf.stringToTerraform(this._runtimeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      error_logger_id: {
        value: cdktf.stringToHclTerraform(this._errorLoggerId),
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
      integrations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._integrations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_destination_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logDestinationIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime_id: {
        value: cdktf.stringToHclTerraform(this._runtimeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
