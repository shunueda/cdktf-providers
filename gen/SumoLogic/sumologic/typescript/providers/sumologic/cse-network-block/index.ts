// https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_network_block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseNetworkBlockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_network_block#address_block CseNetworkBlock#address_block}
  */
  readonly addressBlock: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_network_block#id CseNetworkBlock#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_network_block#internal CseNetworkBlock#internal}
  */
  readonly internal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_network_block#label CseNetworkBlock#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_network_block#suppresses_signals CseNetworkBlock#suppresses_signals}
  */
  readonly suppressesSignals?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_network_block sumologic_cse_network_block}
*/
export class CseNetworkBlock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_network_block";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CseNetworkBlock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CseNetworkBlock to import
  * @param importFromId The id of the existing CseNetworkBlock that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_network_block#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CseNetworkBlock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_cse_network_block", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.7/docs/resources/cse_network_block sumologic_cse_network_block} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseNetworkBlockConfig
  */
  public constructor(scope: Construct, id: string, config: CseNetworkBlockConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_network_block',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressBlock = config.addressBlock;
    this._id = config.id;
    this._internal = config.internal;
    this._label = config.label;
    this._suppressesSignals = config.suppressesSignals;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_block - computed: false, optional: false, required: true
  private _addressBlock?: string; 
  public get addressBlock() {
    return this.getStringAttribute('address_block');
  }
  public set addressBlock(value: string) {
    this._addressBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressBlockInput() {
    return this._addressBlock;
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

  // internal - computed: false, optional: true, required: false
  private _internal?: boolean | cdktf.IResolvable; 
  public get internal() {
    return this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean | cdktf.IResolvable) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // suppresses_signals - computed: false, optional: true, required: false
  private _suppressesSignals?: boolean | cdktf.IResolvable; 
  public get suppressesSignals() {
    return this.getBooleanAttribute('suppresses_signals');
  }
  public set suppressesSignals(value: boolean | cdktf.IResolvable) {
    this._suppressesSignals = value;
  }
  public resetSuppressesSignals() {
    this._suppressesSignals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressesSignalsInput() {
    return this._suppressesSignals;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_block: cdktf.stringToTerraform(this._addressBlock),
      id: cdktf.stringToTerraform(this._id),
      internal: cdktf.booleanToTerraform(this._internal),
      label: cdktf.stringToTerraform(this._label),
      suppresses_signals: cdktf.booleanToTerraform(this._suppressesSignals),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_block: {
        value: cdktf.stringToHclTerraform(this._addressBlock),
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
      internal: {
        value: cdktf.booleanToHclTerraform(this._internal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppresses_signals: {
        value: cdktf.booleanToHclTerraform(this._suppressesSignals),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
