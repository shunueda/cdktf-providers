// https://registry.terraform.io/providers/azure/modtm/0.3.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ModtmProviderConfig {
  /**
  * Sending telemetry or not, set this argument to `false` would turn telemetry off. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs#enabled ModtmProvider#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Telemetry endpoint to send data to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs#endpoint ModtmProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * List of regex as allow list for module source. Only module source that match one of the regex will be collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs#module_source_regex ModtmProvider#module_source_regex}
  */
  readonly moduleSourceRegex?: string[];
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs#alias ModtmProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs modtm}
*/
export class ModtmProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "modtm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ModtmProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ModtmProvider to import
  * @param importFromId The id of the existing ModtmProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ModtmProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "modtm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/azure/modtm/0.3.5/docs modtm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ModtmProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ModtmProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'modtm',
      terraformGeneratorMetadata: {
        providerName: 'modtm',
        providerVersion: '0.3.5',
        providerVersionConstraint: '0.3.5'
      },
      terraformProviderSource: 'Azure/modtm'
    });
    this._enabled = config.enabled;
    this._endpoint = config.endpoint;
    this._moduleSourceRegex = config.moduleSourceRegex;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // module_source_regex - computed: false, optional: true, required: false
  private _moduleSourceRegex?: string[]; 
  public get moduleSourceRegex() {
    return this._moduleSourceRegex;
  }
  public set moduleSourceRegex(value: string[] | undefined) {
    this._moduleSourceRegex = value;
  }
  public resetModuleSourceRegex() {
    this._moduleSourceRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleSourceRegexInput() {
    return this._moduleSourceRegex;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      module_source_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(this._moduleSourceRegex),
      alias: cdktf.stringToTerraform(this._alias),
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
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      module_source_regex: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._moduleSourceRegex),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
