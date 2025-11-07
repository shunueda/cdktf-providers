// https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/runtime_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuntimeLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the runtime to wait for linking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/runtime_link#name RuntimeLink#name}
  */
  readonly name: string;
  /**
  * How long to wait for the runtime linking to complete. A valid Go duration string, e.g. `10m` or `1h`. Defaults to `10m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/runtime_link#timeout RuntimeLink#timeout}
  */
  readonly timeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/runtime_link prodvana_runtime_link}
*/
export class RuntimeLink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prodvana_runtime_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RuntimeLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RuntimeLink to import
  * @param importFromId The id of the existing RuntimeLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/runtime_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RuntimeLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prodvana_runtime_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prodvana/prodvana/0.1.25/docs/resources/runtime_link prodvana_runtime_link} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuntimeLinkConfig
  */
  public constructor(scope: Construct, id: string, config: RuntimeLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'prodvana_runtime_link',
      terraformGeneratorMetadata: {
        providerName: 'prodvana',
        providerVersion: '0.1.25'
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
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      timeout: cdktf.stringToTerraform(this._timeout),
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
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
