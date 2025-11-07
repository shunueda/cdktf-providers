// https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEquinixFabricStreamAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Equinix defined asset category. Matches the product name the asset is a part of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_attachment#asset DataEquinixFabricStreamAttachment#asset}
  */
  readonly asset: string;
  /**
  * Equinix defined UUID of the asset being attached to the stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_attachment#asset_id DataEquinixFabricStreamAttachment#asset_id}
  */
  readonly assetId: string;
  /**
  * The uuid of the stream this data source should retrieve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_attachment#stream_id DataEquinixFabricStreamAttachment#stream_id}
  */
  readonly streamId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_attachment equinix_fabric_stream_attachment}
*/
export class DataEquinixFabricStreamAttachment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "equinix_fabric_stream_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEquinixFabricStreamAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEquinixFabricStreamAttachment to import
  * @param importFromId The id of the existing DataEquinixFabricStreamAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEquinixFabricStreamAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "equinix_fabric_stream_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/equinix/equinix/4.8.0/docs/data-sources/fabric_stream_attachment equinix_fabric_stream_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEquinixFabricStreamAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataEquinixFabricStreamAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'equinix_fabric_stream_attachment',
      terraformGeneratorMetadata: {
        providerName: 'equinix',
        providerVersion: '4.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asset = config.asset;
    this._assetId = config.assetId;
    this._streamId = config.streamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset - computed: false, optional: false, required: true
  private _asset?: string; 
  public get asset() {
    return this.getStringAttribute('asset');
  }
  public set asset(value: string) {
    this._asset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetInput() {
    return this._asset;
  }

  // asset_id - computed: false, optional: false, required: true
  private _assetId?: string; 
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }
  public set assetId(value: string) {
    this._assetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdInput() {
    return this._assetId;
  }

  // attachment_status - computed: true, optional: false, required: false
  public get attachmentStatus() {
    return this.getStringAttribute('attachment_status');
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metrics_enabled - computed: true, optional: false, required: false
  public get metricsEnabled() {
    return this.getBooleanAttribute('metrics_enabled');
  }

  // stream_id - computed: false, optional: false, required: true
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asset: cdktf.stringToTerraform(this._asset),
      asset_id: cdktf.stringToTerraform(this._assetId),
      stream_id: cdktf.stringToTerraform(this._streamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset: {
        value: cdktf.stringToHclTerraform(this._asset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset_id: {
        value: cdktf.stringToHclTerraform(this._assetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_id: {
        value: cdktf.stringToHclTerraform(this._streamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
