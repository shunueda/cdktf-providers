// https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/plugin#config_json Plugin#config_json}
  */
  readonly configJson: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/plugin#consumer_id Plugin#consumer_id}
  */
  readonly consumerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/plugin#enabled Plugin#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/plugin#name Plugin#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/plugin#route_id Plugin#route_id}
  */
  readonly routeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/plugin#service_id Plugin#service_id}
  */
  readonly serviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/plugin#strict_match Plugin#strict_match}
  */
  readonly strictMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/plugin#tags Plugin#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/plugin kong_plugin}
*/
export class Plugin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kong_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Plugin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Plugin to import
  * @param importFromId The id of the existing Plugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Plugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kong_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/resources/plugin kong_plugin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PluginConfig
  */
  public constructor(scope: Construct, id: string, config: PluginConfig) {
    super(scope, id, {
      terraformResourceType: 'kong_plugin',
      terraformGeneratorMetadata: {
        providerName: 'kong',
        providerVersion: '8.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configJson = config.configJson;
    this._consumerId = config.consumerId;
    this._enabled = config.enabled;
    this._name = config.name;
    this._routeId = config.routeId;
    this._serviceId = config.serviceId;
    this._strictMatch = config.strictMatch;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // computed_config - computed: true, optional: false, required: false
  public get computedConfig() {
    return this.getStringAttribute('computed_config');
  }

  // config_json - computed: false, optional: false, required: true
  private _configJson?: string; 
  public get configJson() {
    return this.getStringAttribute('config_json');
  }
  public set configJson(value: string) {
    this._configJson = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configJsonInput() {
    return this._configJson;
  }

  // consumer_id - computed: false, optional: true, required: false
  private _consumerId?: string; 
  public get consumerId() {
    return this.getStringAttribute('consumer_id');
  }
  public set consumerId(value: string) {
    this._consumerId = value;
  }
  public resetConsumerId() {
    this._consumerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerIdInput() {
    return this._consumerId;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

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

  // route_id - computed: false, optional: true, required: false
  private _routeId?: string; 
  public get routeId() {
    return this.getStringAttribute('route_id');
  }
  public set routeId(value: string) {
    this._routeId = value;
  }
  public resetRouteId() {
    this._routeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeIdInput() {
    return this._routeId;
  }

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // strict_match - computed: true, optional: true, required: false
  private _strictMatch?: boolean | cdktf.IResolvable; 
  public get strictMatch() {
    return this.getBooleanAttribute('strict_match');
  }
  public set strictMatch(value: boolean | cdktf.IResolvable) {
    this._strictMatch = value;
  }
  public resetStrictMatch() {
    this._strictMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictMatchInput() {
    return this._strictMatch;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_json: cdktf.stringToTerraform(this._configJson),
      consumer_id: cdktf.stringToTerraform(this._consumerId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      route_id: cdktf.stringToTerraform(this._routeId),
      service_id: cdktf.stringToTerraform(this._serviceId),
      strict_match: cdktf.booleanToTerraform(this._strictMatch),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_json: {
        value: cdktf.stringToHclTerraform(this._configJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_id: {
        value: cdktf.stringToHclTerraform(this._consumerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_id: {
        value: cdktf.stringToHclTerraform(this._routeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_match: {
        value: cdktf.booleanToHclTerraform(this._strictMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
