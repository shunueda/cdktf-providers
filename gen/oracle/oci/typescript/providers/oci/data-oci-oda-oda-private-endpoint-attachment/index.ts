// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/oda_oda_private_endpoint_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOdaOdaPrivateEndpointAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/oda_oda_private_endpoint_attachment#oda_private_endpoint_attachment_id DataOciOdaOdaPrivateEndpointAttachment#oda_private_endpoint_attachment_id}
  */
  readonly odaPrivateEndpointAttachmentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/oda_oda_private_endpoint_attachment oci_oda_oda_private_endpoint_attachment}
*/
export class DataOciOdaOdaPrivateEndpointAttachment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_oda_oda_private_endpoint_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOdaOdaPrivateEndpointAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOdaOdaPrivateEndpointAttachment to import
  * @param importFromId The id of the existing DataOciOdaOdaPrivateEndpointAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/oda_oda_private_endpoint_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOdaOdaPrivateEndpointAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_oda_oda_private_endpoint_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/oda_oda_private_endpoint_attachment oci_oda_oda_private_endpoint_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOdaOdaPrivateEndpointAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOdaOdaPrivateEndpointAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_oda_oda_private_endpoint_attachment',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._odaPrivateEndpointAttachmentId = config.odaPrivateEndpointAttachmentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // oda_instance_id - computed: true, optional: false, required: false
  public get odaInstanceId() {
    return this.getStringAttribute('oda_instance_id');
  }

  // oda_private_endpoint_attachment_id - computed: false, optional: false, required: true
  private _odaPrivateEndpointAttachmentId?: string; 
  public get odaPrivateEndpointAttachmentId() {
    return this.getStringAttribute('oda_private_endpoint_attachment_id');
  }
  public set odaPrivateEndpointAttachmentId(value: string) {
    this._odaPrivateEndpointAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get odaPrivateEndpointAttachmentIdInput() {
    return this._odaPrivateEndpointAttachmentId;
  }

  // oda_private_endpoint_id - computed: true, optional: false, required: false
  public get odaPrivateEndpointId() {
    return this.getStringAttribute('oda_private_endpoint_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
      oda_private_endpoint_attachment_id: cdktf.stringToTerraform(this._odaPrivateEndpointAttachmentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      oda_private_endpoint_attachment_id: {
        value: cdktf.stringToHclTerraform(this._odaPrivateEndpointAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
