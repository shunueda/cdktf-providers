// https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs/resources/alertmanager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertmanagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Alertmanager configuration to load in Grafana Mimir as YAML. This should be a valid Alertmanager YAML config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs/resources/alertmanager#config_yaml Alertmanager#config_yaml}
  */
  readonly configYaml: string;
  /**
  * A map of template names to template YAML content to load along with the Alertmanager configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs/resources/alertmanager#templates_config_yaml Alertmanager#templates_config_yaml}
  */
  readonly templatesConfigYaml?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs/resources/alertmanager mimirtool_alertmanager}
*/
export class Alertmanager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mimirtool_alertmanager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alertmanager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alertmanager to import
  * @param importFromId The id of the existing Alertmanager that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs/resources/alertmanager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alertmanager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mimirtool_alertmanager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/mimirtool/1.0.0/docs/resources/alertmanager mimirtool_alertmanager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertmanagerConfig
  */
  public constructor(scope: Construct, id: string, config: AlertmanagerConfig) {
    super(scope, id, {
      terraformResourceType: 'mimirtool_alertmanager',
      terraformGeneratorMetadata: {
        providerName: 'mimirtool',
        providerVersion: '1.0.0'
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
    this._templatesConfigYaml = config.templatesConfigYaml;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_yaml - computed: false, optional: false, required: true
  private _configYaml?: string; 
  public get configYaml() {
    return this.getStringAttribute('config_yaml');
  }
  public set configYaml(value: string) {
    this._configYaml = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configYamlInput() {
    return this._configYaml;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // templates_config_yaml - computed: false, optional: true, required: false
  private _templatesConfigYaml?: { [key: string]: string }; 
  public get templatesConfigYaml() {
    return this.getStringMapAttribute('templates_config_yaml');
  }
  public set templatesConfigYaml(value: { [key: string]: string }) {
    this._templatesConfigYaml = value;
  }
  public resetTemplatesConfigYaml() {
    this._templatesConfigYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesConfigYamlInput() {
    return this._templatesConfigYaml;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_yaml: cdktf.stringToTerraform(this._configYaml),
      templates_config_yaml: cdktf.hashMapper(cdktf.stringToTerraform)(this._templatesConfigYaml),
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
      templates_config_yaml: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._templatesConfigYaml),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
