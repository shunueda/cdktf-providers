// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OciExternalKeyVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * CipherTrust Manager Key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key_version#cckm_key_id OciExternalKeyVersion#cckm_key_id}
  */
  readonly cckmKeyId: string;
  /**
  * Source key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key_version#source_key_id OciExternalKeyVersion#source_key_id}
  */
  readonly sourceKeyId: string;
  /**
  * Source of the key. Options: local, hsm-luna. Default is local.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key_version#source_key_tier OciExternalKeyVersion#source_key_tier}
  */
  readonly sourceKeyTier?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key_version ciphertrust_oci_external_key_version}
*/
export class OciExternalKeyVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_oci_external_key_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OciExternalKeyVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OciExternalKeyVersion to import
  * @param importFromId The id of the existing OciExternalKeyVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OciExternalKeyVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_oci_external_key_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/oci_external_key_version ciphertrust_oci_external_key_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OciExternalKeyVersionConfig
  */
  public constructor(scope: Construct, id: string, config: OciExternalKeyVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_oci_external_key_version',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cckmKeyId = config.cckmKeyId;
    this._sourceKeyId = config.sourceKeyId;
    this._sourceKeyTier = config.sourceKeyTier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cckm_key_id - computed: false, optional: false, required: true
  private _cckmKeyId?: string; 
  public get cckmKeyId() {
    return this.getStringAttribute('cckm_key_id');
  }
  public set cckmKeyId(value: string) {
    this._cckmKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cckmKeyIdInput() {
    return this._cckmKeyId;
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_material_origin - computed: true, optional: false, required: false
  public get keyMaterialOrigin() {
    return this.getStringAttribute('key_material_origin');
  }

  // oci_key_id - computed: true, optional: false, required: false
  public get ociKeyId() {
    return this.getStringAttribute('oci_key_id');
  }

  // partition_id - computed: true, optional: false, required: false
  public get partitionId() {
    return this.getStringAttribute('partition_id');
  }

  // partition_label - computed: true, optional: false, required: false
  public get partitionLabel() {
    return this.getStringAttribute('partition_label');
  }

  // source_key_id - computed: false, optional: false, required: true
  private _sourceKeyId?: string; 
  public get sourceKeyId() {
    return this.getStringAttribute('source_key_id');
  }
  public set sourceKeyId(value: string) {
    this._sourceKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeyIdInput() {
    return this._sourceKeyId;
  }

  // source_key_name - computed: true, optional: false, required: false
  public get sourceKeyName() {
    return this.getStringAttribute('source_key_name');
  }

  // source_key_tier - computed: false, optional: true, required: false
  private _sourceKeyTier?: string; 
  public get sourceKeyTier() {
    return this.getStringAttribute('source_key_tier');
  }
  public set sourceKeyTier(value: string) {
    this._sourceKeyTier = value;
  }
  public resetSourceKeyTier() {
    this._sourceKeyTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceKeyTierInput() {
    return this._sourceKeyTier;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cckm_key_id: cdktf.stringToTerraform(this._cckmKeyId),
      source_key_id: cdktf.stringToTerraform(this._sourceKeyId),
      source_key_tier: cdktf.stringToTerraform(this._sourceKeyTier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cckm_key_id: {
        value: cdktf.stringToHclTerraform(this._cckmKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_key_id: {
        value: cdktf.stringToHclTerraform(this._sourceKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_key_tier: {
        value: cdktf.stringToHclTerraform(this._sourceKeyTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
