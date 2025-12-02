// https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/plugin_community
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PluginCommunityConfig extends cdktf.TerraformMetaArguments {
  /**
  * If the plugin is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/plugin_community#enabled PluginCommunity#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/plugin_community#id PluginCommunity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/plugin_community#instance_id PluginCommunity#instance_id}
  */
  readonly instanceId: number;
  /**
  * The name of the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/plugin_community#name PluginCommunity#name}
  */
  readonly name: string;
  /**
  * Configurable sleep time in seconds between retries for plugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/plugin_community#sleep PluginCommunity#sleep}
  */
  readonly sleep?: number;
  /**
  * Configurable timeout time in seconds for plugins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/plugin_community#timeout PluginCommunity#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/plugin_community cloudamqp_plugin_community}
*/
export class PluginCommunity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudamqp_plugin_community";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PluginCommunity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PluginCommunity to import
  * @param importFromId The id of the existing PluginCommunity that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/plugin_community#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PluginCommunity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudamqp_plugin_community", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudamqp/cloudamqp/1.39.0/docs/resources/plugin_community cloudamqp_plugin_community} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PluginCommunityConfig
  */
  public constructor(scope: Construct, id: string, config: PluginCommunityConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudamqp_plugin_community',
      terraformGeneratorMetadata: {
        providerName: 'cloudamqp',
        providerVersion: '1.39.0',
        providerVersionConstraint: '1.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._sleep = config.sleep;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // require - computed: true, optional: false, required: false
  public get require() {
    return this.getStringAttribute('require');
  }

  // sleep - computed: false, optional: true, required: false
  private _sleep?: number; 
  public get sleep() {
    return this.getNumberAttribute('sleep');
  }
  public set sleep(value: number) {
    this._sleep = value;
  }
  public resetSleep() {
    this._sleep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepInput() {
    return this._sleep;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.numberToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      sleep: cdktf.numberToTerraform(this._sleep),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.numberToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sleep: {
        value: cdktf.numberToHclTerraform(this._sleep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
