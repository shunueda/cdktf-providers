// https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/kms_wrapping_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsWrappingKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The access scope of the key. Default is `PUBLIC`. Possible values are: `PUBLIC`, `SNA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/kms_wrapping_key#access_scope KmsWrappingKey#access_scope}
  */
  readonly accessScope?: string;
  /**
  * The wrapping algorithm used to wrap the key to import. Possible values are: `rsa_2048_oaep_sha256`, `rsa_3072_oaep_sha256`, `rsa_4096_oaep_sha256`, `rsa_4096_oaep_sha512`, `rsa_2048_oaep_sha256_aes_256_key_wrap`, `rsa_3072_oaep_sha256_aes_256_key_wrap`, `rsa_4096_oaep_sha256_aes_256_key_wrap`, `rsa_4096_oaep_sha512_aes_256_key_wrap`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/kms_wrapping_key#algorithm KmsWrappingKey#algorithm}
  */
  readonly algorithm: string;
  /**
  * A user chosen description to distinguish multiple wrapping keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/kms_wrapping_key#description KmsWrappingKey#description}
  */
  readonly description?: string;
  /**
  * The display name to distinguish multiple wrapping keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/kms_wrapping_key#display_name KmsWrappingKey#display_name}
  */
  readonly displayName: string;
  /**
  * The ID of the associated keyring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/kms_wrapping_key#keyring_id KmsWrappingKey#keyring_id}
  */
  readonly keyringId: string;
  /**
  * STACKIT project ID to which the keyring is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/kms_wrapping_key#project_id KmsWrappingKey#project_id}
  */
  readonly projectId: string;
  /**
  * The underlying system that is responsible for protecting the key material. Possible values are: `software`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/kms_wrapping_key#protection KmsWrappingKey#protection}
  */
  readonly protection: string;
  /**
  * The purpose for which the key will be used. Possible values are: `wrap_symmetric_key`, `wrap_asymmetric_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/kms_wrapping_key#purpose KmsWrappingKey#purpose}
  */
  readonly purpose: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/kms_wrapping_key#region KmsWrappingKey#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/kms_wrapping_key stackit_kms_wrapping_key}
*/
export class KmsWrappingKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_kms_wrapping_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsWrappingKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsWrappingKey to import
  * @param importFromId The id of the existing KmsWrappingKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/kms_wrapping_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsWrappingKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_kms_wrapping_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.74.0/docs/resources/kms_wrapping_key stackit_kms_wrapping_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsWrappingKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KmsWrappingKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_kms_wrapping_key',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.74.0',
        providerVersionConstraint: '0.74.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessScope = config.accessScope;
    this._algorithm = config.algorithm;
    this._description = config.description;
    this._displayName = config.displayName;
    this._keyringId = config.keyringId;
    this._projectId = config.projectId;
    this._protection = config.protection;
    this._purpose = config.purpose;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_scope - computed: true, optional: true, required: false
  private _accessScope?: string; 
  public get accessScope() {
    return this.getStringAttribute('access_scope');
  }
  public set accessScope(value: string) {
    this._accessScope = value;
  }
  public resetAccessScope() {
    this._accessScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessScopeInput() {
    return this._accessScope;
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // protection - computed: false, optional: false, required: true
  private _protection?: string; 
  public get protection() {
    return this.getStringAttribute('protection');
  }
  public set protection(value: string) {
    this._protection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionInput() {
    return this._protection;
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // purpose - computed: false, optional: false, required: true
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
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

  // wrapping_key_id - computed: true, optional: false, required: false
  public get wrappingKeyId() {
    return this.getStringAttribute('wrapping_key_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_scope: cdktf.stringToTerraform(this._accessScope),
      algorithm: cdktf.stringToTerraform(this._algorithm),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      keyring_id: cdktf.stringToTerraform(this._keyringId),
      project_id: cdktf.stringToTerraform(this._projectId),
      protection: cdktf.stringToTerraform(this._protection),
      purpose: cdktf.stringToTerraform(this._purpose),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_scope: {
        value: cdktf.stringToHclTerraform(this._accessScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      protection: {
        value: cdktf.stringToHclTerraform(this._protection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose: {
        value: cdktf.stringToHclTerraform(this._purpose),
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
