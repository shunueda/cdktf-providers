// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_dmupsert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformAmsDmupsertConfig extends cdktf.TerraformMetaArguments {
  /**
  * This is a bulk upsert input payload in YAML/JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_dmupsert#bulk_upsert_yaml PlatformAmsDmupsert#bulk_upsert_yaml}
  */
  readonly bulkUpsertYaml: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_dmupsert#environment PlatformAmsDmupsert#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_dmupsert#service PlatformAmsDmupsert#service}
  */
  readonly service: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_dmupsert kaleido_platform_ams_dmupsert}
*/
export class PlatformAmsDmupsert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_ams_dmupsert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformAmsDmupsert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformAmsDmupsert to import
  * @param importFromId The id of the existing PlatformAmsDmupsert that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_dmupsert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformAmsDmupsert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_ams_dmupsert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_ams_dmupsert kaleido_platform_ams_dmupsert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformAmsDmupsertConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformAmsDmupsertConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_ams_dmupsert',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bulkUpsertYaml = config.bulkUpsertYaml;
    this._environment = config.environment;
    this._service = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bulk_upsert_yaml - computed: false, optional: false, required: true
  private _bulkUpsertYaml?: string; 
  public get bulkUpsertYaml() {
    return this.getStringAttribute('bulk_upsert_yaml');
  }
  public set bulkUpsertYaml(value: string) {
    this._bulkUpsertYaml = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkUpsertYamlInput() {
    return this._bulkUpsertYaml;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bulk_upsert_yaml: cdktf.stringToTerraform(this._bulkUpsertYaml),
      environment: cdktf.stringToTerraform(this._environment),
      service: cdktf.stringToTerraform(this._service),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bulk_upsert_yaml: {
        value: cdktf.stringToHclTerraform(this._bulkUpsertYaml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
