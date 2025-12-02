// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_extension_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TelephonyProvidersEdgesExtensionPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Extension Pool description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_extension_pool#description TelephonyProvidersEdgesExtensionPool#description}
  */
  readonly description?: string;
  /**
  * Ending phone number of the Extension Pool range. Changing the end_number attribute will cause the extension object to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_extension_pool#end_number TelephonyProvidersEdgesExtensionPool#end_number}
  */
  readonly endNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_extension_pool#id TelephonyProvidersEdgesExtensionPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Starting phone number of the Extension Pool range. Changing the start_number attribute will cause the extension object to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_extension_pool#start_number TelephonyProvidersEdgesExtensionPool#start_number}
  */
  readonly startNumber: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_extension_pool genesyscloud_telephony_providers_edges_extension_pool}
*/
export class TelephonyProvidersEdgesExtensionPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_telephony_providers_edges_extension_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TelephonyProvidersEdgesExtensionPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TelephonyProvidersEdgesExtensionPool to import
  * @param importFromId The id of the existing TelephonyProvidersEdgesExtensionPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_extension_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TelephonyProvidersEdgesExtensionPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_telephony_providers_edges_extension_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/telephony_providers_edges_extension_pool genesyscloud_telephony_providers_edges_extension_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TelephonyProvidersEdgesExtensionPoolConfig
  */
  public constructor(scope: Construct, id: string, config: TelephonyProvidersEdgesExtensionPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_telephony_providers_edges_extension_pool',
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
    this._description = config.description;
    this._endNumber = config.endNumber;
    this._id = config.id;
    this._startNumber = config.startNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      description: cdktf.stringToTerraform(this._description),
      end_number: cdktf.stringToTerraform(this._endNumber),
      id: cdktf.stringToTerraform(this._id),
      start_number: cdktf.stringToTerraform(this._startNumber),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
