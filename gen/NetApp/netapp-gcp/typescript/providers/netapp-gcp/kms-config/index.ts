// https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/kms_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/kms_config#id KmsConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/kms_config#key_name KmsConfig#key_name}
  */
  readonly keyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/kms_config#key_project_id KmsConfig#key_project_id}
  */
  readonly keyProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/kms_config#key_ring_location KmsConfig#key_ring_location}
  */
  readonly keyRingLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/kms_config#key_ring_name KmsConfig#key_ring_name}
  */
  readonly keyRingName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/kms_config#network KmsConfig#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/kms_config#region KmsConfig#region}
  */
  readonly region: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/kms_config netapp-gcp_kms_config}
*/
export class KmsConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-gcp_kms_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsConfig to import
  * @param importFromId The id of the existing KmsConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/kms_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-gcp_kms_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-gcp/24.6.0/docs/resources/kms_config netapp-gcp_kms_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsConfigConfig
  */
  public constructor(scope: Construct, id: string, config: KmsConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-gcp_kms_config',
      terraformGeneratorMetadata: {
        providerName: 'netapp-gcp',
        providerVersion: '24.6.0',
        providerVersionConstraint: '24.6.0'
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
    this._keyName = config.keyName;
    this._keyProjectId = config.keyProjectId;
    this._keyRingLocation = config.keyRingLocation;
    this._keyRingName = config.keyRingName;
    this._network = config.network;
    this._region = config.region;
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

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_project_id - computed: false, optional: true, required: false
  private _keyProjectId?: string; 
  public get keyProjectId() {
    return this.getStringAttribute('key_project_id');
  }
  public set keyProjectId(value: string) {
    this._keyProjectId = value;
  }
  public resetKeyProjectId() {
    this._keyProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyProjectIdInput() {
    return this._keyProjectId;
  }

  // key_ring_location - computed: false, optional: false, required: true
  private _keyRingLocation?: string; 
  public get keyRingLocation() {
    return this.getStringAttribute('key_ring_location');
  }
  public set keyRingLocation(value: string) {
    this._keyRingLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingLocationInput() {
    return this._keyRingLocation;
  }

  // key_ring_name - computed: false, optional: false, required: true
  private _keyRingName?: string; 
  public get keyRingName() {
    return this.getStringAttribute('key_ring_name');
  }
  public set keyRingName(value: string) {
    this._keyRingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingNameInput() {
    return this._keyRingName;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key_name: cdktf.stringToTerraform(this._keyName),
      key_project_id: cdktf.stringToTerraform(this._keyProjectId),
      key_ring_location: cdktf.stringToTerraform(this._keyRingLocation),
      key_ring_name: cdktf.stringToTerraform(this._keyRingName),
      network: cdktf.stringToTerraform(this._network),
      region: cdktf.stringToTerraform(this._region),
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
      key_name: {
        value: cdktf.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_project_id: {
        value: cdktf.stringToHclTerraform(this._keyProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_ring_location: {
        value: cdktf.stringToHclTerraform(this._keyRingLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_ring_name: {
        value: cdktf.stringToHclTerraform(this._keyRingName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
