// https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service_transparent_data_encryption_key_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceTransparentDataEncryptionKeyAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Encryption key to use for data encryption. Must be an ARN for AWS services or a Key Resource Path for GCP services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service_transparent_data_encryption_key_association#key_id ServiceTransparentDataEncryptionKeyAssociation#key_id}
  */
  readonly keyId: string;
  /**
  * ClickHouse Service ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service_transparent_data_encryption_key_association#service_id ServiceTransparentDataEncryptionKeyAssociation#service_id}
  */
  readonly serviceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service_transparent_data_encryption_key_association clickhouse_service_transparent_data_encryption_key_association}
*/
export class ServiceTransparentDataEncryptionKeyAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clickhouse_service_transparent_data_encryption_key_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceTransparentDataEncryptionKeyAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceTransparentDataEncryptionKeyAssociation to import
  * @param importFromId The id of the existing ServiceTransparentDataEncryptionKeyAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service_transparent_data_encryption_key_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceTransparentDataEncryptionKeyAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clickhouse_service_transparent_data_encryption_key_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clickhouse/clickhouse/3.5.4/docs/resources/service_transparent_data_encryption_key_association clickhouse_service_transparent_data_encryption_key_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceTransparentDataEncryptionKeyAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceTransparentDataEncryptionKeyAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'clickhouse_service_transparent_data_encryption_key_association',
      terraformGeneratorMetadata: {
        providerName: 'clickhouse',
        providerVersion: '3.5.4',
        providerVersionConstraint: '3.5.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._keyId = config.keyId;
    this._serviceId = config.serviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key_id: cdktf.stringToTerraform(this._keyId),
      service_id: cdktf.stringToTerraform(this._serviceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
