// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_public_endpoints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedPublicEndpointsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional web UI addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_public_endpoints#additional_web_ui_addresses ManagedPublicEndpoints#additional_web_ui_addresses}
  */
  readonly additionalWebUiAddresses?: string[];
  /**
  * Beacon forwarder address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_public_endpoints#beacon_forwarder_address ManagedPublicEndpoints#beacon_forwarder_address}
  */
  readonly beaconForwarderAddress?: string;
  /**
  * CDN address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_public_endpoints#cdn_address ManagedPublicEndpoints#cdn_address}
  */
  readonly cdnAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_public_endpoints#id ManagedPublicEndpoints#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Web UI address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_public_endpoints#web_ui_address ManagedPublicEndpoints#web_ui_address}
  */
  readonly webUiAddress?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_public_endpoints dynatrace_managed_public_endpoints}
*/
export class ManagedPublicEndpoints extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_managed_public_endpoints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedPublicEndpoints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedPublicEndpoints to import
  * @param importFromId The id of the existing ManagedPublicEndpoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_public_endpoints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedPublicEndpoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_managed_public_endpoints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/managed_public_endpoints dynatrace_managed_public_endpoints} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedPublicEndpointsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagedPublicEndpointsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_managed_public_endpoints',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalWebUiAddresses = config.additionalWebUiAddresses;
    this._beaconForwarderAddress = config.beaconForwarderAddress;
    this._cdnAddress = config.cdnAddress;
    this._id = config.id;
    this._webUiAddress = config.webUiAddress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_web_ui_addresses - computed: false, optional: true, required: false
  private _additionalWebUiAddresses?: string[]; 
  public get additionalWebUiAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_web_ui_addresses'));
  }
  public set additionalWebUiAddresses(value: string[]) {
    this._additionalWebUiAddresses = value;
  }
  public resetAdditionalWebUiAddresses() {
    this._additionalWebUiAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalWebUiAddressesInput() {
    return this._additionalWebUiAddresses;
  }

  // beacon_forwarder_address - computed: false, optional: true, required: false
  private _beaconForwarderAddress?: string; 
  public get beaconForwarderAddress() {
    return this.getStringAttribute('beacon_forwarder_address');
  }
  public set beaconForwarderAddress(value: string) {
    this._beaconForwarderAddress = value;
  }
  public resetBeaconForwarderAddress() {
    this._beaconForwarderAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beaconForwarderAddressInput() {
    return this._beaconForwarderAddress;
  }

  // cdn_address - computed: false, optional: true, required: false
  private _cdnAddress?: string; 
  public get cdnAddress() {
    return this.getStringAttribute('cdn_address');
  }
  public set cdnAddress(value: string) {
    this._cdnAddress = value;
  }
  public resetCdnAddress() {
    this._cdnAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnAddressInput() {
    return this._cdnAddress;
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

  // web_ui_address - computed: false, optional: true, required: false
  private _webUiAddress?: string; 
  public get webUiAddress() {
    return this.getStringAttribute('web_ui_address');
  }
  public set webUiAddress(value: string) {
    this._webUiAddress = value;
  }
  public resetWebUiAddress() {
    this._webUiAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webUiAddressInput() {
    return this._webUiAddress;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_web_ui_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalWebUiAddresses),
      beacon_forwarder_address: cdktf.stringToTerraform(this._beaconForwarderAddress),
      cdn_address: cdktf.stringToTerraform(this._cdnAddress),
      id: cdktf.stringToTerraform(this._id),
      web_ui_address: cdktf.stringToTerraform(this._webUiAddress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_web_ui_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalWebUiAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      beacon_forwarder_address: {
        value: cdktf.stringToHclTerraform(this._beaconForwarderAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdn_address: {
        value: cdktf.stringToHclTerraform(this._cdnAddress),
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
      web_ui_address: {
        value: cdktf.stringToHclTerraform(this._webUiAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
