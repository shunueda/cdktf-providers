// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_cluster_transparent_encrypt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CynosdbClusterTransparentEncryptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_cluster_transparent_encrypt#cluster_id CynosdbClusterTransparentEncrypt#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_cluster_transparent_encrypt#id CynosdbClusterTransparentEncrypt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to enable global encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_cluster_transparent_encrypt#is_open_global_encryption CynosdbClusterTransparentEncrypt#is_open_global_encryption}
  */
  readonly isOpenGlobalEncryption?: boolean | cdktf.IResolvable;
  /**
  * Key Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_cluster_transparent_encrypt#key_id CynosdbClusterTransparentEncrypt#key_id}
  */
  readonly keyId?: string;
  /**
  * Key region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_cluster_transparent_encrypt#key_region CynosdbClusterTransparentEncrypt#key_region}
  */
  readonly keyRegion?: string;
  /**
  * Key type (cloud, custom).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_cluster_transparent_encrypt#key_type CynosdbClusterTransparentEncrypt#key_type}
  */
  readonly keyType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_cluster_transparent_encrypt tencentcloud_cynosdb_cluster_transparent_encrypt}
*/
export class CynosdbClusterTransparentEncrypt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_cluster_transparent_encrypt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CynosdbClusterTransparentEncrypt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CynosdbClusterTransparentEncrypt to import
  * @param importFromId The id of the existing CynosdbClusterTransparentEncrypt that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_cluster_transparent_encrypt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CynosdbClusterTransparentEncrypt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_cluster_transparent_encrypt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/cynosdb_cluster_transparent_encrypt tencentcloud_cynosdb_cluster_transparent_encrypt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CynosdbClusterTransparentEncryptConfig
  */
  public constructor(scope: Construct, id: string, config: CynosdbClusterTransparentEncryptConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_cluster_transparent_encrypt',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._isOpenGlobalEncryption = config.isOpenGlobalEncryption;
    this._keyId = config.keyId;
    this._keyRegion = config.keyRegion;
    this._keyType = config.keyType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // is_open_global_encryption - computed: false, optional: true, required: false
  private _isOpenGlobalEncryption?: boolean | cdktf.IResolvable; 
  public get isOpenGlobalEncryption() {
    return this.getBooleanAttribute('is_open_global_encryption');
  }
  public set isOpenGlobalEncryption(value: boolean | cdktf.IResolvable) {
    this._isOpenGlobalEncryption = value;
  }
  public resetIsOpenGlobalEncryption() {
    this._isOpenGlobalEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOpenGlobalEncryptionInput() {
    return this._isOpenGlobalEncryption;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_region - computed: false, optional: true, required: false
  private _keyRegion?: string; 
  public get keyRegion() {
    return this.getStringAttribute('key_region');
  }
  public set keyRegion(value: string) {
    this._keyRegion = value;
  }
  public resetKeyRegion() {
    this._keyRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRegionInput() {
    return this._keyRegion;
  }

  // key_type - computed: false, optional: false, required: true
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      is_open_global_encryption: cdktf.booleanToTerraform(this._isOpenGlobalEncryption),
      key_id: cdktf.stringToTerraform(this._keyId),
      key_region: cdktf.stringToTerraform(this._keyRegion),
      key_type: cdktf.stringToTerraform(this._keyType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      is_open_global_encryption: {
        value: cdktf.booleanToHclTerraform(this._isOpenGlobalEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_region: {
        value: cdktf.stringToHclTerraform(this._keyRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
