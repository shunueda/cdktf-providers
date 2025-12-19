// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_common_selector_algorithm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetflowCommonSelectorAlgorithmConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'random': random;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_common_selector_algorithm#algorithm_name NetflowCommonSelectorAlgorithm#algorithm_name}
  */
  readonly algorithmName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_common_selector_algorithm#id NetflowCommonSelectorAlgorithm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure sampling population for random algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_common_selector_algorithm#sampling_population NetflowCommonSelectorAlgorithm#sampling_population}
  */
  readonly samplingPopulation?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_common_selector_algorithm#user_tag NetflowCommonSelectorAlgorithm#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_common_selector_algorithm#uuid NetflowCommonSelectorAlgorithm#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_common_selector_algorithm thunder_netflow_common_selector_algorithm}
*/
export class NetflowCommonSelectorAlgorithm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_netflow_common_selector_algorithm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetflowCommonSelectorAlgorithm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetflowCommonSelectorAlgorithm to import
  * @param importFromId The id of the existing NetflowCommonSelectorAlgorithm that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_common_selector_algorithm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetflowCommonSelectorAlgorithm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_netflow_common_selector_algorithm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/netflow_common_selector_algorithm thunder_netflow_common_selector_algorithm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetflowCommonSelectorAlgorithmConfig
  */
  public constructor(scope: Construct, id: string, config: NetflowCommonSelectorAlgorithmConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_netflow_common_selector_algorithm',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithmName = config.algorithmName;
    this._id = config.id;
    this._samplingPopulation = config.samplingPopulation;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm_name - computed: false, optional: false, required: true
  private _algorithmName?: string; 
  public get algorithmName() {
    return this.getStringAttribute('algorithm_name');
  }
  public set algorithmName(value: string) {
    this._algorithmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmNameInput() {
    return this._algorithmName;
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

  // sampling_population - computed: false, optional: true, required: false
  private _samplingPopulation?: number; 
  public get samplingPopulation() {
    return this.getNumberAttribute('sampling_population');
  }
  public set samplingPopulation(value: number) {
    this._samplingPopulation = value;
  }
  public resetSamplingPopulation() {
    this._samplingPopulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingPopulationInput() {
    return this._samplingPopulation;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm_name: cdktf.stringToTerraform(this._algorithmName),
      id: cdktf.stringToTerraform(this._id),
      sampling_population: cdktf.numberToTerraform(this._samplingPopulation),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm_name: {
        value: cdktf.stringToHclTerraform(this._algorithmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sampling_population: {
        value: cdktf.numberToHclTerraform(this._samplingPopulation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
