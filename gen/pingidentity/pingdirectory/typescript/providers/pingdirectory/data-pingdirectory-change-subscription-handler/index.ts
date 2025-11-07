// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/change_subscription_handler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryChangeSubscriptionHandlerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/change_subscription_handler#name DataPingdirectoryChangeSubscriptionHandler#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/change_subscription_handler pingdirectory_change_subscription_handler}
*/
export class DataPingdirectoryChangeSubscriptionHandler extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_change_subscription_handler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryChangeSubscriptionHandler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryChangeSubscriptionHandler to import
  * @param importFromId The id of the existing DataPingdirectoryChangeSubscriptionHandler that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/change_subscription_handler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryChangeSubscriptionHandler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_change_subscription_handler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/change_subscription_handler pingdirectory_change_subscription_handler} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryChangeSubscriptionHandlerConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryChangeSubscriptionHandlerConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_change_subscription_handler',
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_subscription - computed: true, optional: false, required: false
  public get changeSubscription() {
    return cdktf.Fn.tolist(this.getListAttribute('change_subscription'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // extension_argument - computed: true, optional: false, required: false
  public get extensionArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('extension_argument'));
  }

  // extension_class - computed: true, optional: false, required: false
  public get extensionClass() {
    return this.getStringAttribute('extension_class');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_file - computed: true, optional: false, required: false
  public get logFile() {
    return this.getStringAttribute('log_file');
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

  // script_argument - computed: true, optional: false, required: false
  public get scriptArgument() {
    return cdktf.Fn.tolist(this.getListAttribute('script_argument'));
  }

  // script_class - computed: true, optional: false, required: false
  public get scriptClass() {
    return this.getStringAttribute('script_class');
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
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
