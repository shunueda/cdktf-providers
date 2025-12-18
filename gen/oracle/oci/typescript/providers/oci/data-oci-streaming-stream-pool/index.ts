// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/streaming_stream_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciStreamingStreamPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/streaming_stream_pool#stream_pool_id DataOciStreamingStreamPool#stream_pool_id}
  */
  readonly streamPoolId: string;
}
export interface DataOciStreamingStreamPoolCustomEncryptionKey {
}

export function dataOciStreamingStreamPoolCustomEncryptionKeyToTerraform(struct?: DataOciStreamingStreamPoolCustomEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStreamingStreamPoolCustomEncryptionKeyToHclTerraform(struct?: DataOciStreamingStreamPoolCustomEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStreamingStreamPoolCustomEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStreamingStreamPoolCustomEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_state - computed: true, optional: false, required: false
  public get keyState() {
    return this.getStringAttribute('key_state');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
}

export class DataOciStreamingStreamPoolCustomEncryptionKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference {
    return new DataOciStreamingStreamPoolCustomEncryptionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStreamingStreamPoolKafkaSettings {
}

export function dataOciStreamingStreamPoolKafkaSettingsToTerraform(struct?: DataOciStreamingStreamPoolKafkaSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStreamingStreamPoolKafkaSettingsToHclTerraform(struct?: DataOciStreamingStreamPoolKafkaSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStreamingStreamPoolKafkaSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStreamingStreamPoolKafkaSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStreamingStreamPoolKafkaSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_create_topics_enable - computed: true, optional: false, required: false
  public get autoCreateTopicsEnable() {
    return this.getBooleanAttribute('auto_create_topics_enable');
  }

  // bootstrap_servers - computed: true, optional: false, required: false
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }

  // log_retention_hours - computed: true, optional: false, required: false
  public get logRetentionHours() {
    return this.getNumberAttribute('log_retention_hours');
  }

  // num_partitions - computed: true, optional: false, required: false
  public get numPartitions() {
    return this.getNumberAttribute('num_partitions');
  }
}

export class DataOciStreamingStreamPoolKafkaSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStreamingStreamPoolKafkaSettingsOutputReference {
    return new DataOciStreamingStreamPoolKafkaSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStreamingStreamPoolPrivateEndpointSettings {
}

export function dataOciStreamingStreamPoolPrivateEndpointSettingsToTerraform(struct?: DataOciStreamingStreamPoolPrivateEndpointSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStreamingStreamPoolPrivateEndpointSettingsToHclTerraform(struct?: DataOciStreamingStreamPoolPrivateEndpointSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStreamingStreamPoolPrivateEndpointSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStreamingStreamPoolPrivateEndpointSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_endpoint_ip - computed: true, optional: false, required: false
  public get privateEndpointIp() {
    return this.getStringAttribute('private_endpoint_ip');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciStreamingStreamPoolPrivateEndpointSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference {
    return new DataOciStreamingStreamPoolPrivateEndpointSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/streaming_stream_pool oci_streaming_stream_pool}
*/
export class DataOciStreamingStreamPool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_streaming_stream_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciStreamingStreamPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciStreamingStreamPool to import
  * @param importFromId The id of the existing DataOciStreamingStreamPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/streaming_stream_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciStreamingStreamPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_streaming_stream_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/streaming_stream_pool oci_streaming_stream_pool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciStreamingStreamPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciStreamingStreamPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_streaming_stream_pool',
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
    this._streamPoolId = config.streamPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // custom_encryption_key - computed: true, optional: false, required: false
  private _customEncryptionKey = new DataOciStreamingStreamPoolCustomEncryptionKeyList(this, "custom_encryption_key", false);
  public get customEncryptionKey() {
    return this._customEncryptionKey;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // endpoint_fqdn - computed: true, optional: false, required: false
  public get endpointFqdn() {
    return this.getStringAttribute('endpoint_fqdn');
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

  // is_private - computed: true, optional: false, required: false
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }

  // kafka_settings - computed: true, optional: false, required: false
  private _kafkaSettings = new DataOciStreamingStreamPoolKafkaSettingsList(this, "kafka_settings", false);
  public get kafkaSettings() {
    return this._kafkaSettings;
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_endpoint_settings - computed: true, optional: false, required: false
  private _privateEndpointSettings = new DataOciStreamingStreamPoolPrivateEndpointSettingsList(this, "private_endpoint_settings", false);
  public get privateEndpointSettings() {
    return this._privateEndpointSettings;
  }

  // security_attributes - computed: true, optional: false, required: false
  private _securityAttributes = new cdktf.StringMap(this, "security_attributes");
  public get securityAttributes() {
    return this._securityAttributes;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_pool_id - computed: false, optional: false, required: true
  private _streamPoolId?: string; 
  public get streamPoolId() {
    return this.getStringAttribute('stream_pool_id');
  }
  public set streamPoolId(value: string) {
    this._streamPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamPoolIdInput() {
    return this._streamPoolId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      stream_pool_id: cdktf.stringToTerraform(this._streamPoolId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      stream_pool_id: {
        value: cdktf.stringToHclTerraform(this._streamPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
