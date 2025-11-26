// generated from terraform resource schema

import { EnvironmentTemplateMetadata, 
environmentTemplateMetadataToTerraform, 
environmentTemplateMetadataToHclTerraform, 
EnvironmentTemplateMetadataOutputReference, 
EnvironmentTemplateSpec, 
environmentTemplateSpecToTerraform, 
environmentTemplateSpecToHclTerraform, 
EnvironmentTemplateSpecOutputReference, 
EnvironmentTemplateTimeouts, 
environmentTemplateTimeoutsToTerraform, 
environmentTemplateTimeoutsToHclTerraform, 
EnvironmentTemplateTimeoutsOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EnvironmentTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/environment_template#id EnvironmentTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/environment_template#metadata EnvironmentTemplate#metadata}
  */
  readonly metadata?: EnvironmentTemplateMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/environment_template#spec EnvironmentTemplate#spec}
  */
  readonly spec?: EnvironmentTemplateSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/environment_template#timeouts EnvironmentTemplate#timeouts}
  */
  readonly timeouts?: EnvironmentTemplateTimeouts;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/environment_template rafay_environment_template}
*/
export class EnvironmentTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_environment_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnvironmentTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnvironmentTemplate to import
  * @param importFromId The id of the existing EnvironmentTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/environment_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnvironmentTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_environment_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.54/docs/resources/environment_template rafay_environment_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EnvironmentTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay_environment_template',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.54',
        providerVersionConstraint: '1.1.54'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new EnvironmentTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: EnvironmentTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new EnvironmentTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: EnvironmentTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EnvironmentTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EnvironmentTemplateTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metadata: environmentTemplateMetadataToTerraform(this._metadata.internalValue),
      spec: environmentTemplateSpecToTerraform(this._spec.internalValue),
      timeouts: environmentTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: environmentTemplateMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnvironmentTemplateMetadataList",
      },
      spec: {
        value: environmentTemplateSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnvironmentTemplateSpecList",
      },
      timeouts: {
        value: environmentTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EnvironmentTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
