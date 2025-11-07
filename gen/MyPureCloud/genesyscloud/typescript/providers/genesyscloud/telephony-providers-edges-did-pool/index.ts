// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_did_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TelephonyProvidersEdgesDidPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comments for the DID Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_did_pool#comments TelephonyProvidersEdgesDidPool#comments}
  */
  readonly comments?: string;
  /**
  * DID Pool description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_did_pool#description TelephonyProvidersEdgesDidPool#description}
  */
  readonly description?: string;
  /**
  * Ending phone number of the DID Pool range.  Phone number must be in an E.164 number format. Changing the end_phone_number attribute will cause the did_pool object to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_did_pool#end_phone_number TelephonyProvidersEdgesDidPool#end_phone_number}
  */
  readonly endPhoneNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_did_pool#id TelephonyProvidersEdgesDidPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Provider (PURE_CLOUD | PURE_CLOUD_VOICE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_did_pool#pool_provider TelephonyProvidersEdgesDidPool#pool_provider}
  */
  readonly poolProvider?: string;
  /**
  * Starting phone number of the DID Pool range. Phone number must be in a E.164 number format. Changing the start_phone_number attribute will cause the did_pool object to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_did_pool#start_phone_number TelephonyProvidersEdgesDidPool#start_phone_number}
  */
  readonly startPhoneNumber: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_did_pool genesyscloud_telephony_providers_edges_did_pool}
*/
export class TelephonyProvidersEdgesDidPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_telephony_providers_edges_did_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TelephonyProvidersEdgesDidPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TelephonyProvidersEdgesDidPool to import
  * @param importFromId The id of the existing TelephonyProvidersEdgesDidPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_did_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TelephonyProvidersEdgesDidPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_telephony_providers_edges_did_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/telephony_providers_edges_did_pool genesyscloud_telephony_providers_edges_did_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TelephonyProvidersEdgesDidPoolConfig
  */
  public constructor(scope: Construct, id: string, config: TelephonyProvidersEdgesDidPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_telephony_providers_edges_did_pool',
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
    this._comments = config.comments;
    this._description = config.description;
    this._endPhoneNumber = config.endPhoneNumber;
    this._id = config.id;
    this._poolProvider = config.poolProvider;
    this._startPhoneNumber = config.startPhoneNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

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

  // pool_provider - computed: true, optional: true, required: false
  private _poolProvider?: string; 
  public get poolProvider() {
    return this.getStringAttribute('pool_provider');
  }
  public set poolProvider(value: string) {
    this._poolProvider = value;
  }
  public resetPoolProvider() {
    this._poolProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolProviderInput() {
    return this._poolProvider;
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
      comments: cdktf.stringToTerraform(this._comments),
      description: cdktf.stringToTerraform(this._description),
      end_phone_number: cdktf.stringToTerraform(this._endPhoneNumber),
      id: cdktf.stringToTerraform(this._id),
      pool_provider: cdktf.stringToTerraform(this._poolProvider),
      start_phone_number: cdktf.stringToTerraform(this._startPhoneNumber),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      pool_provider: {
        value: cdktf.stringToHclTerraform(this._poolProvider),
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
