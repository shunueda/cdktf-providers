// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/data-sources/telephony_providers_edges_extension_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGenesyscloudTelephonyProvidersEdgesExtensionPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ending number of the Extension Pool range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/data-sources/telephony_providers_edges_extension_pool#end_number DataGenesyscloudTelephonyProvidersEdgesExtensionPool#end_number}
  */
  readonly endNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/data-sources/telephony_providers_edges_extension_pool#id DataGenesyscloudTelephonyProvidersEdgesExtensionPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Starting number of the Extension Pool range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/data-sources/telephony_providers_edges_extension_pool#start_number DataGenesyscloudTelephonyProvidersEdgesExtensionPool#start_number}
  */
  readonly startNumber: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/data-sources/telephony_providers_edges_extension_pool genesyscloud_telephony_providers_edges_extension_pool}
*/
export class DataGenesyscloudTelephonyProvidersEdgesExtensionPool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_telephony_providers_edges_extension_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGenesyscloudTelephonyProvidersEdgesExtensionPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGenesyscloudTelephonyProvidersEdgesExtensionPool to import
  * @param importFromId The id of the existing DataGenesyscloudTelephonyProvidersEdgesExtensionPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/data-sources/telephony_providers_edges_extension_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGenesyscloudTelephonyProvidersEdgesExtensionPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_telephony_providers_edges_extension_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/data-sources/telephony_providers_edges_extension_pool genesyscloud_telephony_providers_edges_extension_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGenesyscloudTelephonyProvidersEdgesExtensionPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataGenesyscloudTelephonyProvidersEdgesExtensionPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_telephony_providers_edges_extension_pool',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endNumber = config.endNumber;
    this._id = config.id;
    this._startNumber = config.startNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_number - computed: false, optional: false, required: true
  private _endNumber?: string; 
  public get endNumber() {
    return this.getStringAttribute('end_number');
  }
  public set endNumber(value: string) {
    this._endNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endNumberInput() {
    return this._endNumber;
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

  // start_number - computed: false, optional: false, required: true
  private _startNumber?: string; 
  public get startNumber() {
    return this.getStringAttribute('start_number');
  }
  public set startNumber(value: string) {
    this._startNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startNumberInput() {
    return this._startNumber;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_number: cdktf.stringToTerraform(this._endNumber),
      id: cdktf.stringToTerraform(this._id),
      start_number: cdktf.stringToTerraform(this._startNumber),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_number: {
        value: cdktf.stringToHclTerraform(this._endNumber),
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
      start_number: {
        value: cdktf.stringToHclTerraform(this._startNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
