// https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/logspipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogspipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * The YAML representation of the logs pipeline configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/logspipeline#value Logspipeline#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/logspipeline groundcover_logspipeline}
*/
export class Logspipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "groundcover_logspipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Logspipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Logspipeline to import
  * @param importFromId The id of the existing Logspipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/logspipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Logspipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "groundcover_logspipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/logspipeline groundcover_logspipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogspipelineConfig
  */
  public constructor(scope: Construct, id: string, config: LogspipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'groundcover_logspipeline',
      terraformGeneratorMetadata: {
        providerName: 'groundcover',
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
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
