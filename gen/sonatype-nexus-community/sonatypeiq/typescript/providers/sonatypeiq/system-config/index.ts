// https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/system_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Base URL for Sonatype IQ Server. See https://help.sonatype.com/en/configuration-rest-api.html#base-url--required-
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/system_config#base_url SystemConfig#base_url}
  */
  readonly baseUrl: string;
  /**
  * Should the Base URL be forced? See https://help.sonatype.com/en/configuration-rest-api.html#force-the-base-url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/system_config#force_base_url SystemConfig#force_base_url}
  */
  readonly forceBaseUrl: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/system_config sonatypeiq_system_config}
*/
export class SystemConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonatypeiq_system_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemConfig to import
  * @param importFromId The id of the existing SystemConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/system_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonatypeiq_system_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/resources/system_config sonatypeiq_system_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SystemConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'sonatypeiq_system_config',
      terraformGeneratorMetadata: {
        providerName: 'sonatypeiq',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
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

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // force_base_url - computed: false, optional: false, required: true
  private _forceBaseUrl?: boolean | cdktf.IResolvable; 
  public get forceBaseUrl() {
    return this.getBooleanAttribute('force_base_url');
  }
  public set forceBaseUrl(value: boolean | cdktf.IResolvable) {
    this._forceBaseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forceBaseUrlInput() {
    return this._forceBaseUrl;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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
