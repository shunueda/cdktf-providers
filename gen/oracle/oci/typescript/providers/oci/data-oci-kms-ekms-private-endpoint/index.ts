// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/kms_ekms_private_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciKmsEkmsPrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/kms_ekms_private_endpoint#ekms_private_endpoint_id DataOciKmsEkmsPrivateEndpoint#ekms_private_endpoint_id}
  */
  readonly ekmsPrivateEndpointId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/kms_ekms_private_endpoint oci_kms_ekms_private_endpoint}
*/
export class DataOciKmsEkmsPrivateEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_kms_ekms_private_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciKmsEkmsPrivateEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciKmsEkmsPrivateEndpoint to import
  * @param importFromId The id of the existing DataOciKmsEkmsPrivateEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/kms_ekms_private_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciKmsEkmsPrivateEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_kms_ekms_private_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/kms_ekms_private_endpoint oci_kms_ekms_private_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciKmsEkmsPrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciKmsEkmsPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_kms_ekms_private_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ekmsPrivateEndpointId = config.ekmsPrivateEndpointId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_bundle - computed: true, optional: false, required: false
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // ekms_private_endpoint_id - computed: false, optional: false, required: true
  private _ekmsPrivateEndpointId?: string; 
  public get ekmsPrivateEndpointId() {
    return this.getStringAttribute('ekms_private_endpoint_id');
  }
  public set ekmsPrivateEndpointId(value: string) {
    this._ekmsPrivateEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ekmsPrivateEndpointIdInput() {
    return this._ekmsPrivateEndpointId;
  }

  // external_key_manager_ip - computed: true, optional: false, required: false
  public get externalKeyManagerIp() {
    return this.getStringAttribute('external_key_manager_ip');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // private_endpoint_ip - computed: true, optional: false, required: false
  public get privateEndpointIp() {
    return this.getStringAttribute('private_endpoint_ip');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ekms_private_endpoint_id: cdktf.stringToTerraform(this._ekmsPrivateEndpointId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ekms_private_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._ekmsPrivateEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
