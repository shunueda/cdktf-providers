// https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/system_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonatypeiqSystemConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Base URL for Sonatype IQ Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/system_config#base_url DataSonatypeiqSystemConfig#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Should the Base URL be forced?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/system_config#force_base_url DataSonatypeiqSystemConfig#force_base_url}
  */
  readonly forceBaseUrl?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/system_config sonatypeiq_system_config}
*/
export class DataSonatypeiqSystemConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonatypeiq_system_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonatypeiqSystemConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonatypeiqSystemConfig to import
  * @param importFromId The id of the existing DataSonatypeiqSystemConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/system_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonatypeiqSystemConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonatypeiq_system_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/system_config sonatypeiq_system_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonatypeiqSystemConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSonatypeiqSystemConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sonatypeiq_system_config',
      terraformGeneratorMetadata: {
        providerName: 'sonatypeiq',
        providerVersion: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseUrl = config.baseUrl;
    this._forceBaseUrl = config.forceBaseUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_url - computed: true, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // force_base_url - computed: true, optional: true, required: false
  private _forceBaseUrl?: boolean | cdktf.IResolvable; 
  public get forceBaseUrl() {
    return this.getBooleanAttribute('force_base_url');
  }
  public set forceBaseUrl(value: boolean | cdktf.IResolvable) {
    this._forceBaseUrl = value;
  }
  public resetForceBaseUrl() {
    this._forceBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceBaseUrlInput() {
    return this._forceBaseUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_url: cdktf.stringToTerraform(this._baseUrl),
      force_base_url: cdktf.booleanToTerraform(this._forceBaseUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_base_url: {
        value: cdktf.booleanToHclTerraform(this._forceBaseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
