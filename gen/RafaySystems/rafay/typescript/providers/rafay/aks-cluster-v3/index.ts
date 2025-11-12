// generated from terraform resource schema

import { AksClusterV3Metadata, 
aksClusterV3MetadataToTerraform, 
aksClusterV3MetadataToHclTerraform, 
AksClusterV3MetadataOutputReference, 
AksClusterV3Spec, 
aksClusterV3SpecToTerraform, 
aksClusterV3SpecToHclTerraform, 
AksClusterV3SpecOutputReference, 
AksClusterV3Timeouts, 
aksClusterV3TimeoutsToTerraform, 
aksClusterV3TimeoutsToHclTerraform, 
AksClusterV3TimeoutsOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AksClusterV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/aks_cluster_v3#id AksClusterV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/aks_cluster_v3#metadata AksClusterV3#metadata}
  */
  readonly metadata?: AksClusterV3Metadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/aks_cluster_v3#spec AksClusterV3#spec}
  */
  readonly spec?: AksClusterV3Spec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/aks_cluster_v3#timeouts AksClusterV3#timeouts}
  */
  readonly timeouts?: AksClusterV3Timeouts;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/aks_cluster_v3 rafay_aks_cluster_v3}
*/
export class AksClusterV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_aks_cluster_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AksClusterV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AksClusterV3 to import
  * @param importFromId The id of the existing AksClusterV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/aks_cluster_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AksClusterV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_aks_cluster_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/aks_cluster_v3 rafay_aks_cluster_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AksClusterV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: AksClusterV3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay_aks_cluster_v3',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.53',
        providerVersionConstraint: '1.1.53'
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
  private _metadata = new AksClusterV3MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AksClusterV3Metadata) {
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
  private _spec = new AksClusterV3SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: AksClusterV3Spec) {
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
  private _timeouts = new AksClusterV3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AksClusterV3Timeouts) {
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
      metadata: aksClusterV3MetadataToTerraform(this._metadata.internalValue),
      spec: aksClusterV3SpecToTerraform(this._spec.internalValue),
      timeouts: aksClusterV3TimeoutsToTerraform(this._timeouts.internalValue),
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
        value: aksClusterV3MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AksClusterV3MetadataList",
      },
      spec: {
        value: aksClusterV3SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AksClusterV3SpecList",
      },
      timeouts: {
        value: aksClusterV3TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AksClusterV3Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
