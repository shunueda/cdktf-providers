// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/polling_subscription_id
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PollingSubscriptionIdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional map of dependencies that when modified will trigger a re-creation of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/polling_subscription_id#dependencies PollingSubscriptionId#dependencies}
  */
  readonly dependencies?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/polling_subscription_id octopusdeploy_polling_subscription_id}
*/
export class PollingSubscriptionId extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_polling_subscription_id";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PollingSubscriptionId resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PollingSubscriptionId to import
  * @param importFromId The id of the existing PollingSubscriptionId that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/polling_subscription_id#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PollingSubscriptionId to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_polling_subscription_id", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.2/docs/resources/polling_subscription_id octopusdeploy_polling_subscription_id} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PollingSubscriptionIdConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PollingSubscriptionIdConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_polling_subscription_id',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dependencies = config.dependencies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dependencies - computed: false, optional: true, required: false
  private _dependencies?: { [key: string]: string }; 
  public get dependencies() {
    return this.getStringMapAttribute('dependencies');
  }
  public set dependencies(value: { [key: string]: string }) {
    this._dependencies = value;
  }
  public resetDependencies() {
    this._dependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // polling_uri - computed: true, optional: false, required: false
  public get pollingUri() {
    return this.getStringAttribute('polling_uri');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dependencies: cdktf.hashMapper(cdktf.stringToTerraform)(this._dependencies),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dependencies: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dependencies),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
