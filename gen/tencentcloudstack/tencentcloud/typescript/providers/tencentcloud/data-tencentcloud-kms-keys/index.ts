// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/kms_keys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudKmsKeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * The HSM cluster ID corresponding to KMS Advanced Edition (only valid for KMS Exclusive/Managed Edition service instances).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/kms_keys#hsm_cluster_id DataTencentcloudKmsKeys#hsm_cluster_id}
  */
  readonly hsmClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/kms_keys#id DataTencentcloudKmsKeys#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Filter by state of CMK. `0` - all CMKs are queried, `1` - only Enabled CMKs are queried, `2` - only Disabled CMKs are queried, `3` - only PendingDelete CMKs are queried, `4` - only PendingImport CMKs are queried, `5` - only Archived CMKs are queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/kms_keys#key_state DataTencentcloudKmsKeys#key_state}
  */
  readonly keyState?: number;
  /**
  * Filter by usage of CMK. Available values include `ALL`, `ENCRYPT_DECRYPT`, `ASYMMETRIC_DECRYPT_RSA_2048`, `ASYMMETRIC_DECRYPT_SM2`, `ASYMMETRIC_SIGN_VERIFY_SM2`, `ASYMMETRIC_SIGN_VERIFY_RSA_2048`, `ASYMMETRIC_SIGN_VERIFY_ECC`. Default value is `ENCRYPT_DECRYPT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/kms_keys#key_usage DataTencentcloudKmsKeys#key_usage}
  */
  readonly keyUsage?: string;
  /**
  * Order to sort the CMK create time. `0` - desc, `1` - asc. Default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/kms_keys#order_type DataTencentcloudKmsKeys#order_type}
  */
  readonly orderType?: number;
  /**
  * Filter by origin of CMK. `TENCENT_KMS` - CMK created by KMS, `EXTERNAL` - CMK imported by user, `ALL` - all CMKs. Default value is `ALL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/kms_keys#origin DataTencentcloudKmsKeys#origin}
  */
  readonly origin?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/kms_keys#result_output_file DataTencentcloudKmsKeys#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Filter by role of the CMK creator. `0` - created by user, `1` - created by cloud product. Default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/kms_keys#role DataTencentcloudKmsKeys#role}
  */
  readonly role?: number;
  /**
  * Words used to match the results, and the words can be: key_id and alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/kms_keys#search_key_alias DataTencentcloudKmsKeys#search_key_alias}
  */
  readonly searchKeyAlias?: string;
  /**
  * Tags to filter CMK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/kms_keys#tags DataTencentcloudKmsKeys#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataTencentcloudKmsKeysKeyListStruct {
}

export function dataTencentcloudKmsKeysKeyListStructToTerraform(struct?: DataTencentcloudKmsKeysKeyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudKmsKeysKeyListStructToHclTerraform(struct?: DataTencentcloudKmsKeysKeyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudKmsKeysKeyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudKmsKeysKeyListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudKmsKeysKeyListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias - computed: true, optional: false, required: false
  public get alias() {
    return this.getStringAttribute('alias');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // creator_uin - computed: true, optional: false, required: false
  public get creatorUin() {
    return this.getNumberAttribute('creator_uin');
  }

  // deletion_date - computed: true, optional: false, required: false
  public get deletionDate() {
    return this.getNumberAttribute('deletion_date');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // hsm_cluster_id - computed: true, optional: false, required: false
  public get hsmClusterId() {
    return this.getStringAttribute('hsm_cluster_id');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_rotation_enabled - computed: true, optional: false, required: false
  public get keyRotationEnabled() {
    return this.getBooleanAttribute('key_rotation_enabled');
  }

  // key_state - computed: true, optional: false, required: false
  public get keyState() {
    return this.getStringAttribute('key_state');
  }

  // key_usage - computed: true, optional: false, required: false
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }

  // next_rotate_time - computed: true, optional: false, required: false
  public get nextRotateTime() {
    return this.getNumberAttribute('next_rotate_time');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // valid_to - computed: true, optional: false, required: false
  public get validTo() {
    return this.getNumberAttribute('valid_to');
  }
}

export class DataTencentcloudKmsKeysKeyListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudKmsKeysKeyListStructOutputReference {
    return new DataTencentcloudKmsKeysKeyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/kms_keys tencentcloud_kms_keys}
*/
export class DataTencentcloudKmsKeys extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_kms_keys";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudKmsKeys resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudKmsKeys to import
  * @param importFromId The id of the existing DataTencentcloudKmsKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/kms_keys#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudKmsKeys to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_kms_keys", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/data-sources/kms_keys tencentcloud_kms_keys} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudKmsKeysConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudKmsKeysConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_kms_keys',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hsmClusterId = config.hsmClusterId;
    this._id = config.id;
    this._keyState = config.keyState;
    this._keyUsage = config.keyUsage;
    this._orderType = config.orderType;
    this._origin = config.origin;
    this._resultOutputFile = config.resultOutputFile;
    this._role = config.role;
    this._searchKeyAlias = config.searchKeyAlias;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hsm_cluster_id - computed: false, optional: true, required: false
  private _hsmClusterId?: string; 
  public get hsmClusterId() {
    return this.getStringAttribute('hsm_cluster_id');
  }
  public set hsmClusterId(value: string) {
    this._hsmClusterId = value;
  }
  public resetHsmClusterId() {
    this._hsmClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmClusterIdInput() {
    return this._hsmClusterId;
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

  // key_list - computed: true, optional: false, required: false
  private _keyList = new DataTencentcloudKmsKeysKeyListStructList(this, "key_list", false);
  public get keyList() {
    return this._keyList;
  }

  // key_state - computed: false, optional: true, required: false
  private _keyState?: number; 
  public get keyState() {
    return this.getNumberAttribute('key_state');
  }
  public set keyState(value: number) {
    this._keyState = value;
  }
  public resetKeyState() {
    this._keyState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStateInput() {
    return this._keyState;
  }

  // key_usage - computed: false, optional: true, required: false
  private _keyUsage?: string; 
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }
  public set keyUsage(value: string) {
    this._keyUsage = value;
  }
  public resetKeyUsage() {
    this._keyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage;
  }

  // order_type - computed: false, optional: true, required: false
  private _orderType?: number; 
  public get orderType() {
    return this.getNumberAttribute('order_type');
  }
  public set orderType(value: number) {
    this._orderType = value;
  }
  public resetOrderType() {
    this._orderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderTypeInput() {
    return this._orderType;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // role - computed: false, optional: true, required: false
  private _role?: number; 
  public get role() {
    return this.getNumberAttribute('role');
  }
  public set role(value: number) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // search_key_alias - computed: false, optional: true, required: false
  private _searchKeyAlias?: string; 
  public get searchKeyAlias() {
    return this.getStringAttribute('search_key_alias');
  }
  public set searchKeyAlias(value: string) {
    this._searchKeyAlias = value;
  }
  public resetSearchKeyAlias() {
    this._searchKeyAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchKeyAliasInput() {
    return this._searchKeyAlias;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hsm_cluster_id: cdktf.stringToTerraform(this._hsmClusterId),
      id: cdktf.stringToTerraform(this._id),
      key_state: cdktf.numberToTerraform(this._keyState),
      key_usage: cdktf.stringToTerraform(this._keyUsage),
      order_type: cdktf.numberToTerraform(this._orderType),
      origin: cdktf.stringToTerraform(this._origin),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      role: cdktf.numberToTerraform(this._role),
      search_key_alias: cdktf.stringToTerraform(this._searchKeyAlias),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hsm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._hsmClusterId),
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
      key_state: {
        value: cdktf.numberToHclTerraform(this._keyState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_usage: {
        value: cdktf.stringToHclTerraform(this._keyUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_type: {
        value: cdktf.numberToHclTerraform(this._orderType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.numberToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_key_alias: {
        value: cdktf.stringToHclTerraform(this._searchKeyAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
