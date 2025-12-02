// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/telephony_providers_edges_did_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGenesyscloudTelephonyProvidersEdgesDidPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ending phone number of the DID Pool range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/telephony_providers_edges_did_pool#end_phone_number DataGenesyscloudTelephonyProvidersEdgesDidPool#end_phone_number}
  */
  readonly endPhoneNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/telephony_providers_edges_did_pool#id DataGenesyscloudTelephonyProvidersEdgesDidPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Starting phone number of the DID Pool range. Must be in an E.164 number format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/telephony_providers_edges_did_pool#start_phone_number DataGenesyscloudTelephonyProvidersEdgesDidPool#start_phone_number}
  */
  readonly startPhoneNumber: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/telephony_providers_edges_did_pool genesyscloud_telephony_providers_edges_did_pool}
*/
export class DataGenesyscloudTelephonyProvidersEdgesDidPool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_telephony_providers_edges_did_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGenesyscloudTelephonyProvidersEdgesDidPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGenesyscloudTelephonyProvidersEdgesDidPool to import
  * @param importFromId The id of the existing DataGenesyscloudTelephonyProvidersEdgesDidPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/telephony_providers_edges_did_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGenesyscloudTelephonyProvidersEdgesDidPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_telephony_providers_edges_did_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/data-sources/telephony_providers_edges_did_pool genesyscloud_telephony_providers_edges_did_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGenesyscloudTelephonyProvidersEdgesDidPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataGenesyscloudTelephonyProvidersEdgesDidPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_telephony_providers_edges_did_pool',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endPhoneNumber = config.endPhoneNumber;
    this._id = config.id;
    this._startPhoneNumber = config.startPhoneNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_phone_number - computed: false, optional: false, required: true
  private _endPhoneNumber?: string; 
  public get endPhoneNumber() {
    return this.getStringAttribute('end_phone_number');
  }
  public set endPhoneNumber(value: string) {
    this._endPhoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPhoneNumberInput() {
    return this._endPhoneNumber;
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

  // start_phone_number - computed: false, optional: false, required: true
  private _startPhoneNumber?: string; 
  public get startPhoneNumber() {
    return this.getStringAttribute('start_phone_number');
  }
  public set startPhoneNumber(value: string) {
    this._startPhoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startPhoneNumberInput() {
    return this._startPhoneNumber;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_phone_number: cdktf.stringToTerraform(this._endPhoneNumber),
      id: cdktf.stringToTerraform(this._id),
      start_phone_number: cdktf.stringToTerraform(this._startPhoneNumber),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_phone_number: {
        value: cdktf.stringToHclTerraform(this._endPhoneNumber),
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
      start_phone_number: {
        value: cdktf.stringToHclTerraform(this._startPhoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
