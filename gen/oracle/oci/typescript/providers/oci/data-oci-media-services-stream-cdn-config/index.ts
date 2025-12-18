// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/media_services_stream_cdn_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciMediaServicesStreamCdnConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/media_services_stream_cdn_config#stream_cdn_config_id DataOciMediaServicesStreamCdnConfig#stream_cdn_config_id}
  */
  readonly streamCdnConfigId: string;
}
export interface DataOciMediaServicesStreamCdnConfigConfigA {
}

export function dataOciMediaServicesStreamCdnConfigConfigAToTerraform(struct?: DataOciMediaServicesStreamCdnConfigConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMediaServicesStreamCdnConfigConfigAToHclTerraform(struct?: DataOciMediaServicesStreamCdnConfigConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMediaServicesStreamCdnConfigConfigAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMediaServicesStreamCdnConfigConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMediaServicesStreamCdnConfigConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // edge_hostname - computed: true, optional: false, required: false
  public get edgeHostname() {
    return this.getStringAttribute('edge_hostname');
  }

  // edge_path_prefix - computed: true, optional: false, required: false
  public get edgePathPrefix() {
    return this.getStringAttribute('edge_path_prefix');
  }

  // edge_token_key - computed: true, optional: false, required: false
  public get edgeTokenKey() {
    return this.getStringAttribute('edge_token_key');
  }

  // edge_token_salt - computed: true, optional: false, required: false
  public get edgeTokenSalt() {
    return this.getStringAttribute('edge_token_salt');
  }

  // is_edge_token_auth - computed: true, optional: false, required: false
  public get isEdgeTokenAuth() {
    return this.getBooleanAttribute('is_edge_token_auth');
  }

  // origin_auth_secret_key_a - computed: true, optional: false, required: false
  public get originAuthSecretKeyA() {
    return this.getStringAttribute('origin_auth_secret_key_a');
  }

  // origin_auth_secret_key_b - computed: true, optional: false, required: false
  public get originAuthSecretKeyB() {
    return this.getStringAttribute('origin_auth_secret_key_b');
  }

  // origin_auth_secret_key_nonce_a - computed: true, optional: false, required: false
  public get originAuthSecretKeyNonceA() {
    return this.getStringAttribute('origin_auth_secret_key_nonce_a');
  }

  // origin_auth_secret_key_nonce_b - computed: true, optional: false, required: false
  public get originAuthSecretKeyNonceB() {
    return this.getStringAttribute('origin_auth_secret_key_nonce_b');
  }

  // origin_auth_sign_encryption - computed: true, optional: false, required: false
  public get originAuthSignEncryption() {
    return this.getStringAttribute('origin_auth_sign_encryption');
  }

  // origin_auth_sign_type - computed: true, optional: false, required: false
  public get originAuthSignType() {
    return this.getStringAttribute('origin_auth_sign_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciMediaServicesStreamCdnConfigConfigAList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMediaServicesStreamCdnConfigConfigAOutputReference {
    return new DataOciMediaServicesStreamCdnConfigConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciMediaServicesStreamCdnConfigLocks {
}

export function dataOciMediaServicesStreamCdnConfigLocksToTerraform(struct?: DataOciMediaServicesStreamCdnConfigLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciMediaServicesStreamCdnConfigLocksToHclTerraform(struct?: DataOciMediaServicesStreamCdnConfigLocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciMediaServicesStreamCdnConfigLocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciMediaServicesStreamCdnConfigLocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciMediaServicesStreamCdnConfigLocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // related_resource_id - computed: true, optional: false, required: false
  public get relatedResourceId() {
    return this.getStringAttribute('related_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciMediaServicesStreamCdnConfigLocksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciMediaServicesStreamCdnConfigLocksOutputReference {
    return new DataOciMediaServicesStreamCdnConfigLocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/media_services_stream_cdn_config oci_media_services_stream_cdn_config}
*/
export class DataOciMediaServicesStreamCdnConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_media_services_stream_cdn_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciMediaServicesStreamCdnConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciMediaServicesStreamCdnConfig to import
  * @param importFromId The id of the existing DataOciMediaServicesStreamCdnConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/media_services_stream_cdn_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciMediaServicesStreamCdnConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_media_services_stream_cdn_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/media_services_stream_cdn_config oci_media_services_stream_cdn_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciMediaServicesStreamCdnConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciMediaServicesStreamCdnConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_media_services_stream_cdn_config',
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
    this._streamCdnConfigId = config.streamCdnConfigId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOciMediaServicesStreamCdnConfigConfigAList(this, "config", false);
  public get config() {
    return this._config;
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

  // distribution_channel_id - computed: true, optional: false, required: false
  public get distributionChannelId() {
    return this.getStringAttribute('distribution_channel_id');
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

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_lock_override - computed: true, optional: false, required: false
  public get isLockOverride() {
    return this.getBooleanAttribute('is_lock_override');
  }

  // lifecyle_details - computed: true, optional: false, required: false
  public get lifecyleDetails() {
    return this.getStringAttribute('lifecyle_details');
  }

  // locks - computed: true, optional: false, required: false
  private _locks = new DataOciMediaServicesStreamCdnConfigLocksList(this, "locks", false);
  public get locks() {
    return this._locks;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_cdn_config_id - computed: false, optional: false, required: true
  private _streamCdnConfigId?: string; 
  public get streamCdnConfigId() {
    return this.getStringAttribute('stream_cdn_config_id');
  }
  public set streamCdnConfigId(value: string) {
    this._streamCdnConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamCdnConfigIdInput() {
    return this._streamCdnConfigId;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
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
      stream_cdn_config_id: cdktf.stringToTerraform(this._streamCdnConfigId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      stream_cdn_config_id: {
        value: cdktf.stringToHclTerraform(this._streamCdnConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
