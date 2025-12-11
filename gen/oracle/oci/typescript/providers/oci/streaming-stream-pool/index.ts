// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamingStreamPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#compartment_id StreamingStreamPool#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#defined_tags StreamingStreamPool#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#freeform_tags StreamingStreamPool#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#id StreamingStreamPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#name StreamingStreamPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#security_attributes StreamingStreamPool#security_attributes}
  */
  readonly securityAttributes?: { [key: string]: string };
  /**
  * custom_encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#custom_encryption_key StreamingStreamPool#custom_encryption_key}
  */
  readonly customEncryptionKey?: StreamingStreamPoolCustomEncryptionKey;
  /**
  * kafka_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#kafka_settings StreamingStreamPool#kafka_settings}
  */
  readonly kafkaSettings?: StreamingStreamPoolKafkaSettings;
  /**
  * private_endpoint_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#private_endpoint_settings StreamingStreamPool#private_endpoint_settings}
  */
  readonly privateEndpointSettings?: StreamingStreamPoolPrivateEndpointSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#timeouts StreamingStreamPool#timeouts}
  */
  readonly timeouts?: StreamingStreamPoolTimeouts;
}
export interface StreamingStreamPoolCustomEncryptionKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#kms_key_id StreamingStreamPool#kms_key_id}
  */
  readonly kmsKeyId: string;
}

export function streamingStreamPoolCustomEncryptionKeyToTerraform(struct?: StreamingStreamPoolCustomEncryptionKeyOutputReference | StreamingStreamPoolCustomEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}


export function streamingStreamPoolCustomEncryptionKeyToHclTerraform(struct?: StreamingStreamPoolCustomEncryptionKeyOutputReference | StreamingStreamPoolCustomEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamingStreamPoolCustomEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StreamingStreamPoolCustomEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamingStreamPoolCustomEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // key_state - computed: true, optional: false, required: false
  public get keyState() {
    return this.getStringAttribute('key_state');
  }

  // kms_key_id - computed: false, optional: false, required: true
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}
export interface StreamingStreamPoolKafkaSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#auto_create_topics_enable StreamingStreamPool#auto_create_topics_enable}
  */
  readonly autoCreateTopicsEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#log_retention_hours StreamingStreamPool#log_retention_hours}
  */
  readonly logRetentionHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#num_partitions StreamingStreamPool#num_partitions}
  */
  readonly numPartitions?: number;
}

export function streamingStreamPoolKafkaSettingsToTerraform(struct?: StreamingStreamPoolKafkaSettingsOutputReference | StreamingStreamPoolKafkaSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_create_topics_enable: cdktf.booleanToTerraform(struct!.autoCreateTopicsEnable),
    log_retention_hours: cdktf.numberToTerraform(struct!.logRetentionHours),
    num_partitions: cdktf.numberToTerraform(struct!.numPartitions),
  }
}


export function streamingStreamPoolKafkaSettingsToHclTerraform(struct?: StreamingStreamPoolKafkaSettingsOutputReference | StreamingStreamPoolKafkaSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_create_topics_enable: {
      value: cdktf.booleanToHclTerraform(struct!.autoCreateTopicsEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_retention_hours: {
      value: cdktf.numberToHclTerraform(struct!.logRetentionHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_partitions: {
      value: cdktf.numberToHclTerraform(struct!.numPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamingStreamPoolKafkaSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StreamingStreamPoolKafkaSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCreateTopicsEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateTopicsEnable = this._autoCreateTopicsEnable;
    }
    if (this._logRetentionHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRetentionHours = this._logRetentionHours;
    }
    if (this._numPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.numPartitions = this._numPartitions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamingStreamPoolKafkaSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoCreateTopicsEnable = undefined;
      this._logRetentionHours = undefined;
      this._numPartitions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoCreateTopicsEnable = value.autoCreateTopicsEnable;
      this._logRetentionHours = value.logRetentionHours;
      this._numPartitions = value.numPartitions;
    }
  }

  // auto_create_topics_enable - computed: true, optional: true, required: false
  private _autoCreateTopicsEnable?: boolean | cdktf.IResolvable; 
  public get autoCreateTopicsEnable() {
    return this.getBooleanAttribute('auto_create_topics_enable');
  }
  public set autoCreateTopicsEnable(value: boolean | cdktf.IResolvable) {
    this._autoCreateTopicsEnable = value;
  }
  public resetAutoCreateTopicsEnable() {
    this._autoCreateTopicsEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateTopicsEnableInput() {
    return this._autoCreateTopicsEnable;
  }

  // bootstrap_servers - computed: true, optional: false, required: false
  public get bootstrapServers() {
    return this.getStringAttribute('bootstrap_servers');
  }

  // log_retention_hours - computed: true, optional: true, required: false
  private _logRetentionHours?: number; 
  public get logRetentionHours() {
    return this.getNumberAttribute('log_retention_hours');
  }
  public set logRetentionHours(value: number) {
    this._logRetentionHours = value;
  }
  public resetLogRetentionHours() {
    this._logRetentionHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRetentionHoursInput() {
    return this._logRetentionHours;
  }

  // num_partitions - computed: true, optional: true, required: false
  private _numPartitions?: number; 
  public get numPartitions() {
    return this.getNumberAttribute('num_partitions');
  }
  public set numPartitions(value: number) {
    this._numPartitions = value;
  }
  public resetNumPartitions() {
    this._numPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPartitionsInput() {
    return this._numPartitions;
  }
}
export interface StreamingStreamPoolPrivateEndpointSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#nsg_ids StreamingStreamPool#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#private_endpoint_ip StreamingStreamPool#private_endpoint_ip}
  */
  readonly privateEndpointIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#subnet_id StreamingStreamPool#subnet_id}
  */
  readonly subnetId?: string;
}

export function streamingStreamPoolPrivateEndpointSettingsToTerraform(struct?: StreamingStreamPoolPrivateEndpointSettingsOutputReference | StreamingStreamPoolPrivateEndpointSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    private_endpoint_ip: cdktf.stringToTerraform(struct!.privateEndpointIp),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function streamingStreamPoolPrivateEndpointSettingsToHclTerraform(struct?: StreamingStreamPoolPrivateEndpointSettingsOutputReference | StreamingStreamPoolPrivateEndpointSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    private_endpoint_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamingStreamPoolPrivateEndpointSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StreamingStreamPoolPrivateEndpointSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._privateEndpointIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointIp = this._privateEndpointIp;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamingStreamPoolPrivateEndpointSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nsgIds = undefined;
      this._privateEndpointIp = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nsgIds = value.nsgIds;
      this._privateEndpointIp = value.privateEndpointIp;
      this._subnetId = value.subnetId;
    }
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // private_endpoint_ip - computed: true, optional: true, required: false
  private _privateEndpointIp?: string; 
  public get privateEndpointIp() {
    return this.getStringAttribute('private_endpoint_ip');
  }
  public set privateEndpointIp(value: string) {
    this._privateEndpointIp = value;
  }
  public resetPrivateEndpointIp() {
    this._privateEndpointIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIpInput() {
    return this._privateEndpointIp;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface StreamingStreamPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#create StreamingStreamPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#delete StreamingStreamPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#update StreamingStreamPool#update}
  */
  readonly update?: string;
}

export function streamingStreamPoolTimeoutsToTerraform(struct?: StreamingStreamPoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function streamingStreamPoolTimeoutsToHclTerraform(struct?: StreamingStreamPoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StreamingStreamPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StreamingStreamPoolTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamingStreamPoolTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool oci_streaming_stream_pool}
*/
export class StreamingStreamPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_streaming_stream_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamingStreamPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamingStreamPool to import
  * @param importFromId The id of the existing StreamingStreamPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamingStreamPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_streaming_stream_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/streaming_stream_pool oci_streaming_stream_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamingStreamPoolConfig
  */
  public constructor(scope: Construct, id: string, config: StreamingStreamPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_streaming_stream_pool',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._name = config.name;
    this._securityAttributes = config.securityAttributes;
    this._customEncryptionKey.internalValue = config.customEncryptionKey;
    this._kafkaSettings.internalValue = config.kafkaSettings;
    this._privateEndpointSettings.internalValue = config.privateEndpointSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // endpoint_fqdn - computed: true, optional: false, required: false
  public get endpointFqdn() {
    return this.getStringAttribute('endpoint_fqdn');
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_private - computed: true, optional: false, required: false
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // security_attributes - computed: true, optional: true, required: false
  private _securityAttributes?: { [key: string]: string }; 
  public get securityAttributes() {
    return this.getStringMapAttribute('security_attributes');
  }
  public set securityAttributes(value: { [key: string]: string }) {
    this._securityAttributes = value;
  }
  public resetSecurityAttributes() {
    this._securityAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAttributesInput() {
    return this._securityAttributes;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // custom_encryption_key - computed: false, optional: true, required: false
  private _customEncryptionKey = new StreamingStreamPoolCustomEncryptionKeyOutputReference(this, "custom_encryption_key");
  public get customEncryptionKey() {
    return this._customEncryptionKey;
  }
  public putCustomEncryptionKey(value: StreamingStreamPoolCustomEncryptionKey) {
    this._customEncryptionKey.internalValue = value;
  }
  public resetCustomEncryptionKey() {
    this._customEncryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEncryptionKeyInput() {
    return this._customEncryptionKey.internalValue;
  }

  // kafka_settings - computed: false, optional: true, required: false
  private _kafkaSettings = new StreamingStreamPoolKafkaSettingsOutputReference(this, "kafka_settings");
  public get kafkaSettings() {
    return this._kafkaSettings;
  }
  public putKafkaSettings(value: StreamingStreamPoolKafkaSettings) {
    this._kafkaSettings.internalValue = value;
  }
  public resetKafkaSettings() {
    this._kafkaSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaSettingsInput() {
    return this._kafkaSettings.internalValue;
  }

  // private_endpoint_settings - computed: false, optional: true, required: false
  private _privateEndpointSettings = new StreamingStreamPoolPrivateEndpointSettingsOutputReference(this, "private_endpoint_settings");
  public get privateEndpointSettings() {
    return this._privateEndpointSettings;
  }
  public putPrivateEndpointSettings(value: StreamingStreamPoolPrivateEndpointSettings) {
    this._privateEndpointSettings.internalValue = value;
  }
  public resetPrivateEndpointSettings() {
    this._privateEndpointSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointSettingsInput() {
    return this._privateEndpointSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StreamingStreamPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StreamingStreamPoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      security_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityAttributes),
      custom_encryption_key: streamingStreamPoolCustomEncryptionKeyToTerraform(this._customEncryptionKey.internalValue),
      kafka_settings: streamingStreamPoolKafkaSettingsToTerraform(this._kafkaSettings.internalValue),
      private_endpoint_settings: streamingStreamPoolPrivateEndpointSettingsToTerraform(this._privateEndpointSettings.internalValue),
      timeouts: streamingStreamPoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      custom_encryption_key: {
        value: streamingStreamPoolCustomEncryptionKeyToHclTerraform(this._customEncryptionKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StreamingStreamPoolCustomEncryptionKeyList",
      },
      kafka_settings: {
        value: streamingStreamPoolKafkaSettingsToHclTerraform(this._kafkaSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StreamingStreamPoolKafkaSettingsList",
      },
      private_endpoint_settings: {
        value: streamingStreamPoolPrivateEndpointSettingsToHclTerraform(this._privateEndpointSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StreamingStreamPoolPrivateEndpointSettingsList",
      },
      timeouts: {
        value: streamingStreamPoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StreamingStreamPoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
