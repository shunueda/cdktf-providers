// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance_transparent_data_encryption
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbInstanceTransparentDataEncryptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance_transparent_data_encryption#id MongodbInstanceTransparentDataEncryption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance ID, for example: cmgo-p8vn ***. Currently supported general versions include: 4.4 and 5.0, but the cloud disk version is not currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance_transparent_data_encryption#instance_id MongodbInstanceTransparentDataEncryption#instance_id}
  */
  readonly instanceId: string;
  /**
  * Key ID. If this parameter is not set and the specific key ID is not specified, Tencent Cloud will automatically generate the key and this key will be beyond the control of Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance_transparent_data_encryption#key_id MongodbInstanceTransparentDataEncryption#key_id}
  */
  readonly keyId?: string;
  /**
  * The region where the Key Management Service (KMS) serves, such as ap-shanghai.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance_transparent_data_encryption#kms_region MongodbInstanceTransparentDataEncryption#kms_region}
  */
  readonly kmsRegion: string;
}
export interface MongodbInstanceTransparentDataEncryptionKeyInfoListStruct {
}

export function mongodbInstanceTransparentDataEncryptionKeyInfoListStructToTerraform(struct?: MongodbInstanceTransparentDataEncryptionKeyInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mongodbInstanceTransparentDataEncryptionKeyInfoListStructToHclTerraform(struct?: MongodbInstanceTransparentDataEncryptionKeyInfoListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MongodbInstanceTransparentDataEncryptionKeyInfoListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MongodbInstanceTransparentDataEncryptionKeyInfoListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MongodbInstanceTransparentDataEncryptionKeyInfoListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // key_origin - computed: true, optional: false, required: false
  public get keyOrigin() {
    return this.getStringAttribute('key_origin');
  }

  // key_usage - computed: true, optional: false, required: false
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class MongodbInstanceTransparentDataEncryptionKeyInfoListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MongodbInstanceTransparentDataEncryptionKeyInfoListStructOutputReference {
    return new MongodbInstanceTransparentDataEncryptionKeyInfoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance_transparent_data_encryption tencentcloud_mongodb_instance_transparent_data_encryption}
*/
export class MongodbInstanceTransparentDataEncryption extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mongodb_instance_transparent_data_encryption";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbInstanceTransparentDataEncryption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbInstanceTransparentDataEncryption to import
  * @param importFromId The id of the existing MongodbInstanceTransparentDataEncryption that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance_transparent_data_encryption#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbInstanceTransparentDataEncryption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mongodb_instance_transparent_data_encryption", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mongodb_instance_transparent_data_encryption tencentcloud_mongodb_instance_transparent_data_encryption} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbInstanceTransparentDataEncryptionConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbInstanceTransparentDataEncryptionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mongodb_instance_transparent_data_encryption',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._instanceId = config.instanceId;
    this._keyId = config.keyId;
    this._kmsRegion = config.kmsRegion;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // key_info_list - computed: true, optional: false, required: false
  private _keyInfoList = new MongodbInstanceTransparentDataEncryptionKeyInfoListStructList(this, "key_info_list", false);
  public get keyInfoList() {
    return this._keyInfoList;
  }

  // kms_region - computed: false, optional: false, required: true
  private _kmsRegion?: string; 
  public get kmsRegion() {
    return this.getStringAttribute('kms_region');
  }
  public set kmsRegion(value: string) {
    this._kmsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsRegionInput() {
    return this._kmsRegion;
  }

  // transparent_data_encryption_status - computed: true, optional: false, required: false
  public get transparentDataEncryptionStatus() {
    return this.getStringAttribute('transparent_data_encryption_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      key_id: cdktf.stringToTerraform(this._keyId),
      kms_region: cdktf.stringToTerraform(this._kmsRegion),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_region: {
        value: cdktf.stringToHclTerraform(this._kmsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
