// https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/data-sources/kms_wrapping_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitKmsWrappingKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the associated keyring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/data-sources/kms_wrapping_key#keyring_id DataStackitKmsWrappingKey#keyring_id}
  */
  readonly keyringId: string;
  /**
  * STACKIT project ID to which the keyring is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/data-sources/kms_wrapping_key#project_id DataStackitKmsWrappingKey#project_id}
  */
  readonly projectId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/data-sources/kms_wrapping_key#region DataStackitKmsWrappingKey#region}
  */
  readonly region?: string;
  /**
  * The ID of the wrapping key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/data-sources/kms_wrapping_key#wrapping_key_id DataStackitKmsWrappingKey#wrapping_key_id}
  */
  readonly wrappingKeyId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/data-sources/kms_wrapping_key stackit_kms_wrapping_key}
*/
export class DataStackitKmsWrappingKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_kms_wrapping_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitKmsWrappingKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitKmsWrappingKey to import
  * @param importFromId The id of the existing DataStackitKmsWrappingKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/data-sources/kms_wrapping_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitKmsWrappingKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_kms_wrapping_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.73.0/docs/data-sources/kms_wrapping_key stackit_kms_wrapping_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitKmsWrappingKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitKmsWrappingKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_kms_wrapping_key',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.73.0',
        providerVersionConstraint: '0.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._keyringId = config.keyringId;
    this._projectId = config.projectId;
    this._region = config.region;
    this._wrappingKeyId = config.wrappingKeyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_scope - computed: true, optional: false, required: false
  public get accessScope() {
    return this.getStringAttribute('access_scope');
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keyring_id - computed: false, optional: false, required: true
  private _keyringId?: string; 
  public get keyringId() {
    return this.getStringAttribute('keyring_id');
  }
  public set keyringId(value: string) {
    this._keyringId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringIdInput() {
    return this._keyringId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // protection - computed: true, optional: false, required: false
  public get protection() {
    return this.getStringAttribute('protection');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // purpose - computed: true, optional: false, required: false
  public get purpose() {
    return this.getStringAttribute('purpose');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // wrapping_key_id - computed: false, optional: false, required: true
  private _wrappingKeyId?: string; 
  public get wrappingKeyId() {
    return this.getStringAttribute('wrapping_key_id');
  }
  public set wrappingKeyId(value: string) {
    this._wrappingKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappingKeyIdInput() {
    return this._wrappingKeyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      keyring_id: cdktf.stringToTerraform(this._keyringId),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      wrapping_key_id: cdktf.stringToTerraform(this._wrappingKeyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      keyring_id: {
        value: cdktf.stringToHclTerraform(this._keyringId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
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
      wrapping_key_id: {
        value: cdktf.stringToHclTerraform(this._wrappingKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
