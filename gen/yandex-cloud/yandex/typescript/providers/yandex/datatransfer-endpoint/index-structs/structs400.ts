import * as cdktf from 'cdktf';
import { DatatransferEndpointSettingsYdsSourceParser,
datatransferEndpointSettingsYdsSourceParserToTerraform,
datatransferEndpointSettingsYdsSourceParserToHclTerraform,
DatatransferEndpointSettingsYdsSourceParserOutputReference,
DatatransferEndpointSettingsClickhouseSource,
datatransferEndpointSettingsClickhouseSourceToTerraform,
datatransferEndpointSettingsClickhouseSourceToHclTerraform,
DatatransferEndpointSettingsClickhouseSourceOutputReference,
DatatransferEndpointSettingsClickhouseTarget,
datatransferEndpointSettingsClickhouseTargetToTerraform,
datatransferEndpointSettingsClickhouseTargetToHclTerraform,
DatatransferEndpointSettingsClickhouseTargetOutputReference,
DatatransferEndpointSettingsKafkaSource,
datatransferEndpointSettingsKafkaSourceToTerraform,
datatransferEndpointSettingsKafkaSourceToHclTerraform,
DatatransferEndpointSettingsKafkaSourceOutputReference,
DatatransferEndpointSettingsKafkaTarget,
datatransferEndpointSettingsKafkaTargetToTerraform,
datatransferEndpointSettingsKafkaTargetToHclTerraform,
DatatransferEndpointSettingsKafkaTargetOutputReference,
DatatransferEndpointSettingsMetrikaSource,
datatransferEndpointSettingsMetrikaSourceToTerraform,
datatransferEndpointSettingsMetrikaSourceToHclTerraform,
DatatransferEndpointSettingsMetrikaSourceOutputReference,
DatatransferEndpointSettingsMongoSource,
datatransferEndpointSettingsMongoSourceToTerraform,
datatransferEndpointSettingsMongoSourceToHclTerraform,
DatatransferEndpointSettingsMongoSourceOutputReference,
DatatransferEndpointSettingsMongoTarget,
datatransferEndpointSettingsMongoTargetToTerraform,
datatransferEndpointSettingsMongoTargetToHclTerraform,
DatatransferEndpointSettingsMongoTargetOutputReference,
DatatransferEndpointSettingsMysqlSource,
datatransferEndpointSettingsMysqlSourceToTerraform,
datatransferEndpointSettingsMysqlSourceToHclTerraform,
DatatransferEndpointSettingsMysqlSourceOutputReference,
DatatransferEndpointSettingsMysqlTarget,
datatransferEndpointSettingsMysqlTargetToTerraform,
datatransferEndpointSettingsMysqlTargetToHclTerraform,
DatatransferEndpointSettingsMysqlTargetOutputReference,
DatatransferEndpointSettingsPostgresSource,
datatransferEndpointSettingsPostgresSourceToTerraform,
datatransferEndpointSettingsPostgresSourceToHclTerraform,
DatatransferEndpointSettingsPostgresSourceOutputReference,
DatatransferEndpointSettingsPostgresTarget,
datatransferEndpointSettingsPostgresTargetToTerraform,
datatransferEndpointSettingsPostgresTargetToHclTerraform,
DatatransferEndpointSettingsPostgresTargetOutputReference,
DatatransferEndpointSettingsYdbSource,
datatransferEndpointSettingsYdbSourceToTerraform,
datatransferEndpointSettingsYdbSourceToHclTerraform,
DatatransferEndpointSettingsYdbSourceOutputReference,
DatatransferEndpointSettingsYdbTarget,
datatransferEndpointSettingsYdbTargetToTerraform,
datatransferEndpointSettingsYdbTargetToHclTerraform,
DatatransferEndpointSettingsYdbTargetOutputReference } from './structs0'
export interface DatatransferEndpointSettingsYdsSource {
  /**
  * Should continue working, if consumer read lag exceed TTL of topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#allow_ttl_rewind DatatransferEndpoint#allow_ttl_rewind}
  */
  readonly allowTtlRewind?: boolean | cdktf.IResolvable;
  /**
  * Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#consumer DatatransferEndpoint#consumer}
  */
  readonly consumer?: string;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * YDS Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#endpoint DatatransferEndpoint#endpoint}
  */
  readonly endpoint?: string;
  /**
  * List of security groups that the transfer associated with this endpoint should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Service account ID for interaction with database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#service_account_id DatatransferEndpoint#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * Stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#stream DatatransferEndpoint#stream}
  */
  readonly stream?: string;
  /**
  * Identifier of the Yandex Cloud VPC subnetwork to user for accessing the database. If omitted, the server has to be accessible via Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * List of supported compression codec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#supported_codecs DatatransferEndpoint#supported_codecs}
  */
  readonly supportedCodecs?: string[];
  /**
  * parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#parser DatatransferEndpoint#parser}
  */
  readonly parser?: DatatransferEndpointSettingsYdsSourceParser;
}

export function datatransferEndpointSettingsYdsSourceToTerraform(struct?: DatatransferEndpointSettingsYdsSourceOutputReference | DatatransferEndpointSettingsYdsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_ttl_rewind: cdktf.booleanToTerraform(struct!.allowTtlRewind),
    consumer: cdktf.stringToTerraform(struct!.consumer),
    database: cdktf.stringToTerraform(struct!.database),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    stream: cdktf.stringToTerraform(struct!.stream),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    supported_codecs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedCodecs),
    parser: datatransferEndpointSettingsYdsSourceParserToTerraform(struct!.parser),
  }
}


export function datatransferEndpointSettingsYdsSourceToHclTerraform(struct?: DatatransferEndpointSettingsYdsSourceOutputReference | DatatransferEndpointSettingsYdsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_ttl_rewind: {
      value: cdktf.booleanToHclTerraform(struct!.allowTtlRewind),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    consumer: {
      value: cdktf.stringToHclTerraform(struct!.consumer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream: {
      value: cdktf.stringToHclTerraform(struct!.stream),
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
    supported_codecs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedCodecs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    parser: {
      value: datatransferEndpointSettingsYdsSourceParserToHclTerraform(struct!.parser),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsSourceParserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsYdsSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowTtlRewind !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTtlRewind = this._allowTtlRewind;
    }
    if (this._consumer !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumer = this._consumer;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._stream !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream = this._stream;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._supportedCodecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedCodecs = this._supportedCodecs;
    }
    if (this._parser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowTtlRewind = undefined;
      this._consumer = undefined;
      this._database = undefined;
      this._endpoint = undefined;
      this._securityGroups = undefined;
      this._serviceAccountId = undefined;
      this._stream = undefined;
      this._subnetId = undefined;
      this._supportedCodecs = undefined;
      this._parser.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowTtlRewind = value.allowTtlRewind;
      this._consumer = value.consumer;
      this._database = value.database;
      this._endpoint = value.endpoint;
      this._securityGroups = value.securityGroups;
      this._serviceAccountId = value.serviceAccountId;
      this._stream = value.stream;
      this._subnetId = value.subnetId;
      this._supportedCodecs = value.supportedCodecs;
      this._parser.internalValue = value.parser;
    }
  }

  // allow_ttl_rewind - computed: true, optional: true, required: false
  private _allowTtlRewind?: boolean | cdktf.IResolvable; 
  public get allowTtlRewind() {
    return this.getBooleanAttribute('allow_ttl_rewind');
  }
  public set allowTtlRewind(value: boolean | cdktf.IResolvable) {
    this._allowTtlRewind = value;
  }
  public resetAllowTtlRewind() {
    this._allowTtlRewind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTtlRewindInput() {
    return this._allowTtlRewind;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer?: string; 
  public get consumer() {
    return this.getStringAttribute('consumer');
  }
  public set consumer(value: string) {
    this._consumer = value;
  }
  public resetConsumer() {
    this._consumer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // stream - computed: true, optional: true, required: false
  private _stream?: string; 
  public get stream() {
    return this.getStringAttribute('stream');
  }
  public set stream(value: string) {
    this._stream = value;
  }
  public resetStream() {
    this._stream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInput() {
    return this._stream;
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

  // supported_codecs - computed: true, optional: true, required: false
  private _supportedCodecs?: string[]; 
  public get supportedCodecs() {
    return this.getListAttribute('supported_codecs');
  }
  public set supportedCodecs(value: string[]) {
    this._supportedCodecs = value;
  }
  public resetSupportedCodecs() {
    this._supportedCodecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedCodecsInput() {
    return this._supportedCodecs;
  }

  // parser - computed: false, optional: true, required: false
  private _parser = new DatatransferEndpointSettingsYdsSourceParserOutputReference(this, "parser");
  public get parser() {
    return this._parser;
  }
  public putParser(value: DatatransferEndpointSettingsYdsSourceParser) {
    this._parser.internalValue = value;
  }
  public resetParser() {
    this._parser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser.internalValue;
  }
}
export interface DatatransferEndpointSettingsYdsTargetSerializerSerializerAuto {
}

export function datatransferEndpointSettingsYdsTargetSerializerSerializerAutoToTerraform(struct?: DatatransferEndpointSettingsYdsTargetSerializerSerializerAutoOutputReference | DatatransferEndpointSettingsYdsTargetSerializerSerializerAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsYdsTargetSerializerSerializerAutoToHclTerraform(struct?: DatatransferEndpointSettingsYdsTargetSerializerSerializerAutoOutputReference | DatatransferEndpointSettingsYdsTargetSerializerSerializerAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsYdsTargetSerializerSerializerAutoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdsTargetSerializerSerializerAuto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsTargetSerializerSerializerAuto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#key DatatransferEndpoint#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#value DatatransferEndpoint#value}
  */
  readonly value?: string;
}

export function datatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParametersToTerraform(struct?: DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function datatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParametersToHclTerraform(struct?: DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParametersList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParameters[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParametersOutputReference {
    return new DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsYdsTargetSerializerSerializerDebezium {
  /**
  * serializer_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#serializer_parameters DatatransferEndpoint#serializer_parameters}
  */
  readonly serializerParameters?: DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParameters[] | cdktf.IResolvable;
}

export function datatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumToTerraform(struct?: DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumOutputReference | DatatransferEndpointSettingsYdsTargetSerializerSerializerDebezium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    serializer_parameters: cdktf.listMapper(datatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParametersToTerraform, true)(struct!.serializerParameters),
  }
}


export function datatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumToHclTerraform(struct?: DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumOutputReference | DatatransferEndpointSettingsYdsTargetSerializerSerializerDebezium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    serializer_parameters: {
      value: cdktf.listMapperHcl(datatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParametersToHclTerraform, true)(struct!.serializerParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdsTargetSerializerSerializerDebezium | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serializerParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializerParameters = this._serializerParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsTargetSerializerSerializerDebezium | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serializerParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serializerParameters.internalValue = value.serializerParameters;
    }
  }

  // serializer_parameters - computed: false, optional: true, required: false
  private _serializerParameters = new DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParametersList(this, "serializer_parameters", false);
  public get serializerParameters() {
    return this._serializerParameters;
  }
  public putSerializerParameters(value: DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumSerializerParameters[] | cdktf.IResolvable) {
    this._serializerParameters.internalValue = value;
  }
  public resetSerializerParameters() {
    this._serializerParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializerParametersInput() {
    return this._serializerParameters.internalValue;
  }
}
export interface DatatransferEndpointSettingsYdsTargetSerializerSerializerJson {
}

export function datatransferEndpointSettingsYdsTargetSerializerSerializerJsonToTerraform(struct?: DatatransferEndpointSettingsYdsTargetSerializerSerializerJsonOutputReference | DatatransferEndpointSettingsYdsTargetSerializerSerializerJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsYdsTargetSerializerSerializerJsonToHclTerraform(struct?: DatatransferEndpointSettingsYdsTargetSerializerSerializerJsonOutputReference | DatatransferEndpointSettingsYdsTargetSerializerSerializerJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsYdsTargetSerializerSerializerJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdsTargetSerializerSerializerJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsTargetSerializerSerializerJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsYdsTargetSerializer {
  /**
  * serializer_auto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#serializer_auto DatatransferEndpoint#serializer_auto}
  */
  readonly serializerAuto?: DatatransferEndpointSettingsYdsTargetSerializerSerializerAuto;
  /**
  * serializer_debezium block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#serializer_debezium DatatransferEndpoint#serializer_debezium}
  */
  readonly serializerDebezium?: DatatransferEndpointSettingsYdsTargetSerializerSerializerDebezium;
  /**
  * serializer_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#serializer_json DatatransferEndpoint#serializer_json}
  */
  readonly serializerJson?: DatatransferEndpointSettingsYdsTargetSerializerSerializerJson;
}

export function datatransferEndpointSettingsYdsTargetSerializerToTerraform(struct?: DatatransferEndpointSettingsYdsTargetSerializerOutputReference | DatatransferEndpointSettingsYdsTargetSerializer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    serializer_auto: datatransferEndpointSettingsYdsTargetSerializerSerializerAutoToTerraform(struct!.serializerAuto),
    serializer_debezium: datatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumToTerraform(struct!.serializerDebezium),
    serializer_json: datatransferEndpointSettingsYdsTargetSerializerSerializerJsonToTerraform(struct!.serializerJson),
  }
}


export function datatransferEndpointSettingsYdsTargetSerializerToHclTerraform(struct?: DatatransferEndpointSettingsYdsTargetSerializerOutputReference | DatatransferEndpointSettingsYdsTargetSerializer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    serializer_auto: {
      value: datatransferEndpointSettingsYdsTargetSerializerSerializerAutoToHclTerraform(struct!.serializerAuto),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsTargetSerializerSerializerAutoList",
    },
    serializer_debezium: {
      value: datatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumToHclTerraform(struct!.serializerDebezium),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumList",
    },
    serializer_json: {
      value: datatransferEndpointSettingsYdsTargetSerializerSerializerJsonToHclTerraform(struct!.serializerJson),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsTargetSerializerSerializerJsonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsYdsTargetSerializerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdsTargetSerializer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serializerAuto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializerAuto = this._serializerAuto?.internalValue;
    }
    if (this._serializerDebezium?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializerDebezium = this._serializerDebezium?.internalValue;
    }
    if (this._serializerJson?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializerJson = this._serializerJson?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsTargetSerializer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serializerAuto.internalValue = undefined;
      this._serializerDebezium.internalValue = undefined;
      this._serializerJson.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serializerAuto.internalValue = value.serializerAuto;
      this._serializerDebezium.internalValue = value.serializerDebezium;
      this._serializerJson.internalValue = value.serializerJson;
    }
  }

  // serializer_auto - computed: false, optional: true, required: false
  private _serializerAuto = new DatatransferEndpointSettingsYdsTargetSerializerSerializerAutoOutputReference(this, "serializer_auto");
  public get serializerAuto() {
    return this._serializerAuto;
  }
  public putSerializerAuto(value: DatatransferEndpointSettingsYdsTargetSerializerSerializerAuto) {
    this._serializerAuto.internalValue = value;
  }
  public resetSerializerAuto() {
    this._serializerAuto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializerAutoInput() {
    return this._serializerAuto.internalValue;
  }

  // serializer_debezium - computed: false, optional: true, required: false
  private _serializerDebezium = new DatatransferEndpointSettingsYdsTargetSerializerSerializerDebeziumOutputReference(this, "serializer_debezium");
  public get serializerDebezium() {
    return this._serializerDebezium;
  }
  public putSerializerDebezium(value: DatatransferEndpointSettingsYdsTargetSerializerSerializerDebezium) {
    this._serializerDebezium.internalValue = value;
  }
  public resetSerializerDebezium() {
    this._serializerDebezium.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializerDebeziumInput() {
    return this._serializerDebezium.internalValue;
  }

  // serializer_json - computed: false, optional: true, required: false
  private _serializerJson = new DatatransferEndpointSettingsYdsTargetSerializerSerializerJsonOutputReference(this, "serializer_json");
  public get serializerJson() {
    return this._serializerJson;
  }
  public putSerializerJson(value: DatatransferEndpointSettingsYdsTargetSerializerSerializerJson) {
    this._serializerJson.internalValue = value;
  }
  public resetSerializerJson() {
    this._serializerJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializerJsonInput() {
    return this._serializerJson.internalValue;
  }
}
export interface DatatransferEndpointSettingsYdsTarget {
  /**
  * Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * YDS Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#endpoint DatatransferEndpoint#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Save transaction order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#save_tx_order DatatransferEndpoint#save_tx_order}
  */
  readonly saveTxOrder?: boolean | cdktf.IResolvable;
  /**
  * List of security groups that the transfer associated with this endpoint should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Service account ID for interaction with database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#service_account_id DatatransferEndpoint#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * Stream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#stream DatatransferEndpoint#stream}
  */
  readonly stream?: string;
  /**
  * Identifier of the Yandex Cloud VPC subnetwork to user for accessing the database. If omitted, the server has to be accessible via Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * serializer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#serializer DatatransferEndpoint#serializer}
  */
  readonly serializer?: DatatransferEndpointSettingsYdsTargetSerializer;
}

export function datatransferEndpointSettingsYdsTargetToTerraform(struct?: DatatransferEndpointSettingsYdsTargetOutputReference | DatatransferEndpointSettingsYdsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    save_tx_order: cdktf.booleanToTerraform(struct!.saveTxOrder),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    stream: cdktf.stringToTerraform(struct!.stream),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    serializer: datatransferEndpointSettingsYdsTargetSerializerToTerraform(struct!.serializer),
  }
}


export function datatransferEndpointSettingsYdsTargetToHclTerraform(struct?: DatatransferEndpointSettingsYdsTargetOutputReference | DatatransferEndpointSettingsYdsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    save_tx_order: {
      value: cdktf.booleanToHclTerraform(struct!.saveTxOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream: {
      value: cdktf.stringToHclTerraform(struct!.stream),
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
    serializer: {
      value: datatransferEndpointSettingsYdsTargetSerializerToHclTerraform(struct!.serializer),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsTargetSerializerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsYdsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._saveTxOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveTxOrder = this._saveTxOrder;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._stream !== undefined) {
      hasAnyValues = true;
      internalValueResult.stream = this._stream;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._serializer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializer = this._serializer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._endpoint = undefined;
      this._saveTxOrder = undefined;
      this._securityGroups = undefined;
      this._serviceAccountId = undefined;
      this._stream = undefined;
      this._subnetId = undefined;
      this._serializer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._endpoint = value.endpoint;
      this._saveTxOrder = value.saveTxOrder;
      this._securityGroups = value.securityGroups;
      this._serviceAccountId = value.serviceAccountId;
      this._stream = value.stream;
      this._subnetId = value.subnetId;
      this._serializer.internalValue = value.serializer;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // save_tx_order - computed: true, optional: true, required: false
  private _saveTxOrder?: boolean | cdktf.IResolvable; 
  public get saveTxOrder() {
    return this.getBooleanAttribute('save_tx_order');
  }
  public set saveTxOrder(value: boolean | cdktf.IResolvable) {
    this._saveTxOrder = value;
  }
  public resetSaveTxOrder() {
    this._saveTxOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveTxOrderInput() {
    return this._saveTxOrder;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // stream - computed: true, optional: true, required: false
  private _stream?: string; 
  public get stream() {
    return this.getStringAttribute('stream');
  }
  public set stream(value: string) {
    this._stream = value;
  }
  public resetStream() {
    this._stream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInput() {
    return this._stream;
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

  // serializer - computed: false, optional: true, required: false
  private _serializer = new DatatransferEndpointSettingsYdsTargetSerializerOutputReference(this, "serializer");
  public get serializer() {
    return this._serializer;
  }
  public putSerializer(value: DatatransferEndpointSettingsYdsTargetSerializer) {
    this._serializer.internalValue = value;
  }
  public resetSerializer() {
    this._serializer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializerInput() {
    return this._serializer.internalValue;
  }
}
export interface DatatransferEndpointSettings {
  /**
  * clickhouse_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#clickhouse_source DatatransferEndpoint#clickhouse_source}
  */
  readonly clickhouseSource?: DatatransferEndpointSettingsClickhouseSource;
  /**
  * clickhouse_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#clickhouse_target DatatransferEndpoint#clickhouse_target}
  */
  readonly clickhouseTarget?: DatatransferEndpointSettingsClickhouseTarget;
  /**
  * kafka_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#kafka_source DatatransferEndpoint#kafka_source}
  */
  readonly kafkaSource?: DatatransferEndpointSettingsKafkaSource;
  /**
  * kafka_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#kafka_target DatatransferEndpoint#kafka_target}
  */
  readonly kafkaTarget?: DatatransferEndpointSettingsKafkaTarget;
  /**
  * metrika_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#metrika_source DatatransferEndpoint#metrika_source}
  */
  readonly metrikaSource?: DatatransferEndpointSettingsMetrikaSource;
  /**
  * mongo_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#mongo_source DatatransferEndpoint#mongo_source}
  */
  readonly mongoSource?: DatatransferEndpointSettingsMongoSource;
  /**
  * mongo_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#mongo_target DatatransferEndpoint#mongo_target}
  */
  readonly mongoTarget?: DatatransferEndpointSettingsMongoTarget;
  /**
  * mysql_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#mysql_source DatatransferEndpoint#mysql_source}
  */
  readonly mysqlSource?: DatatransferEndpointSettingsMysqlSource;
  /**
  * mysql_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#mysql_target DatatransferEndpoint#mysql_target}
  */
  readonly mysqlTarget?: DatatransferEndpointSettingsMysqlTarget;
  /**
  * postgres_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#postgres_source DatatransferEndpoint#postgres_source}
  */
  readonly postgresSource?: DatatransferEndpointSettingsPostgresSource;
  /**
  * postgres_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#postgres_target DatatransferEndpoint#postgres_target}
  */
  readonly postgresTarget?: DatatransferEndpointSettingsPostgresTarget;
  /**
  * ydb_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#ydb_source DatatransferEndpoint#ydb_source}
  */
  readonly ydbSource?: DatatransferEndpointSettingsYdbSource;
  /**
  * ydb_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#ydb_target DatatransferEndpoint#ydb_target}
  */
  readonly ydbTarget?: DatatransferEndpointSettingsYdbTarget;
  /**
  * yds_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#yds_source DatatransferEndpoint#yds_source}
  */
  readonly ydsSource?: DatatransferEndpointSettingsYdsSource;
  /**
  * yds_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/resources/datatransfer_endpoint#yds_target DatatransferEndpoint#yds_target}
  */
  readonly ydsTarget?: DatatransferEndpointSettingsYdsTarget;
}

export function datatransferEndpointSettingsToTerraform(struct?: DatatransferEndpointSettingsOutputReference | DatatransferEndpointSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clickhouse_source: datatransferEndpointSettingsClickhouseSourceToTerraform(struct!.clickhouseSource),
    clickhouse_target: datatransferEndpointSettingsClickhouseTargetToTerraform(struct!.clickhouseTarget),
    kafka_source: datatransferEndpointSettingsKafkaSourceToTerraform(struct!.kafkaSource),
    kafka_target: datatransferEndpointSettingsKafkaTargetToTerraform(struct!.kafkaTarget),
    metrika_source: datatransferEndpointSettingsMetrikaSourceToTerraform(struct!.metrikaSource),
    mongo_source: datatransferEndpointSettingsMongoSourceToTerraform(struct!.mongoSource),
    mongo_target: datatransferEndpointSettingsMongoTargetToTerraform(struct!.mongoTarget),
    mysql_source: datatransferEndpointSettingsMysqlSourceToTerraform(struct!.mysqlSource),
    mysql_target: datatransferEndpointSettingsMysqlTargetToTerraform(struct!.mysqlTarget),
    postgres_source: datatransferEndpointSettingsPostgresSourceToTerraform(struct!.postgresSource),
    postgres_target: datatransferEndpointSettingsPostgresTargetToTerraform(struct!.postgresTarget),
    ydb_source: datatransferEndpointSettingsYdbSourceToTerraform(struct!.ydbSource),
    ydb_target: datatransferEndpointSettingsYdbTargetToTerraform(struct!.ydbTarget),
    yds_source: datatransferEndpointSettingsYdsSourceToTerraform(struct!.ydsSource),
    yds_target: datatransferEndpointSettingsYdsTargetToTerraform(struct!.ydsTarget),
  }
}


export function datatransferEndpointSettingsToHclTerraform(struct?: DatatransferEndpointSettingsOutputReference | DatatransferEndpointSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clickhouse_source: {
      value: datatransferEndpointSettingsClickhouseSourceToHclTerraform(struct!.clickhouseSource),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseSourceList",
    },
    clickhouse_target: {
      value: datatransferEndpointSettingsClickhouseTargetToHclTerraform(struct!.clickhouseTarget),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetList",
    },
    kafka_source: {
      value: datatransferEndpointSettingsKafkaSourceToHclTerraform(struct!.kafkaSource),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceList",
    },
    kafka_target: {
      value: datatransferEndpointSettingsKafkaTargetToHclTerraform(struct!.kafkaTarget),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetList",
    },
    metrika_source: {
      value: datatransferEndpointSettingsMetrikaSourceToHclTerraform(struct!.metrikaSource),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMetrikaSourceList",
    },
    mongo_source: {
      value: datatransferEndpointSettingsMongoSourceToHclTerraform(struct!.mongoSource),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoSourceList",
    },
    mongo_target: {
      value: datatransferEndpointSettingsMongoTargetToHclTerraform(struct!.mongoTarget),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoTargetList",
    },
    mysql_source: {
      value: datatransferEndpointSettingsMysqlSourceToHclTerraform(struct!.mysqlSource),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMysqlSourceList",
    },
    mysql_target: {
      value: datatransferEndpointSettingsMysqlTargetToHclTerraform(struct!.mysqlTarget),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMysqlTargetList",
    },
    postgres_source: {
      value: datatransferEndpointSettingsPostgresSourceToHclTerraform(struct!.postgresSource),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsPostgresSourceList",
    },
    postgres_target: {
      value: datatransferEndpointSettingsPostgresTargetToHclTerraform(struct!.postgresTarget),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsPostgresTargetList",
    },
    ydb_source: {
      value: datatransferEndpointSettingsYdbSourceToHclTerraform(struct!.ydbSource),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdbSourceList",
    },
    ydb_target: {
      value: datatransferEndpointSettingsYdbTargetToHclTerraform(struct!.ydbTarget),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdbTargetList",
    },
    yds_source: {
      value: datatransferEndpointSettingsYdsSourceToHclTerraform(struct!.ydsSource),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsSourceList",
    },
    yds_target: {
      value: datatransferEndpointSettingsYdsTargetToHclTerraform(struct!.ydsTarget),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clickhouseSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouseSource = this._clickhouseSource?.internalValue;
    }
    if (this._clickhouseTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouseTarget = this._clickhouseTarget?.internalValue;
    }
    if (this._kafkaSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaSource = this._kafkaSource?.internalValue;
    }
    if (this._kafkaTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kafkaTarget = this._kafkaTarget?.internalValue;
    }
    if (this._metrikaSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrikaSource = this._metrikaSource?.internalValue;
    }
    if (this._mongoSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongoSource = this._mongoSource?.internalValue;
    }
    if (this._mongoTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongoTarget = this._mongoTarget?.internalValue;
    }
    if (this._mysqlSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlSource = this._mysqlSource?.internalValue;
    }
    if (this._mysqlTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTarget = this._mysqlTarget?.internalValue;
    }
    if (this._postgresSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresSource = this._postgresSource?.internalValue;
    }
    if (this._postgresTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresTarget = this._postgresTarget?.internalValue;
    }
    if (this._ydbSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ydbSource = this._ydbSource?.internalValue;
    }
    if (this._ydbTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ydbTarget = this._ydbTarget?.internalValue;
    }
    if (this._ydsSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ydsSource = this._ydsSource?.internalValue;
    }
    if (this._ydsTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ydsTarget = this._ydsTarget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clickhouseSource.internalValue = undefined;
      this._clickhouseTarget.internalValue = undefined;
      this._kafkaSource.internalValue = undefined;
      this._kafkaTarget.internalValue = undefined;
      this._metrikaSource.internalValue = undefined;
      this._mongoSource.internalValue = undefined;
      this._mongoTarget.internalValue = undefined;
      this._mysqlSource.internalValue = undefined;
      this._mysqlTarget.internalValue = undefined;
      this._postgresSource.internalValue = undefined;
      this._postgresTarget.internalValue = undefined;
      this._ydbSource.internalValue = undefined;
      this._ydbTarget.internalValue = undefined;
      this._ydsSource.internalValue = undefined;
      this._ydsTarget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clickhouseSource.internalValue = value.clickhouseSource;
      this._clickhouseTarget.internalValue = value.clickhouseTarget;
      this._kafkaSource.internalValue = value.kafkaSource;
      this._kafkaTarget.internalValue = value.kafkaTarget;
      this._metrikaSource.internalValue = value.metrikaSource;
      this._mongoSource.internalValue = value.mongoSource;
      this._mongoTarget.internalValue = value.mongoTarget;
      this._mysqlSource.internalValue = value.mysqlSource;
      this._mysqlTarget.internalValue = value.mysqlTarget;
      this._postgresSource.internalValue = value.postgresSource;
      this._postgresTarget.internalValue = value.postgresTarget;
      this._ydbSource.internalValue = value.ydbSource;
      this._ydbTarget.internalValue = value.ydbTarget;
      this._ydsSource.internalValue = value.ydsSource;
      this._ydsTarget.internalValue = value.ydsTarget;
    }
  }

  // clickhouse_source - computed: false, optional: true, required: false
  private _clickhouseSource = new DatatransferEndpointSettingsClickhouseSourceOutputReference(this, "clickhouse_source");
  public get clickhouseSource() {
    return this._clickhouseSource;
  }
  public putClickhouseSource(value: DatatransferEndpointSettingsClickhouseSource) {
    this._clickhouseSource.internalValue = value;
  }
  public resetClickhouseSource() {
    this._clickhouseSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseSourceInput() {
    return this._clickhouseSource.internalValue;
  }

  // clickhouse_target - computed: false, optional: true, required: false
  private _clickhouseTarget = new DatatransferEndpointSettingsClickhouseTargetOutputReference(this, "clickhouse_target");
  public get clickhouseTarget() {
    return this._clickhouseTarget;
  }
  public putClickhouseTarget(value: DatatransferEndpointSettingsClickhouseTarget) {
    this._clickhouseTarget.internalValue = value;
  }
  public resetClickhouseTarget() {
    this._clickhouseTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseTargetInput() {
    return this._clickhouseTarget.internalValue;
  }

  // kafka_source - computed: false, optional: true, required: false
  private _kafkaSource = new DatatransferEndpointSettingsKafkaSourceOutputReference(this, "kafka_source");
  public get kafkaSource() {
    return this._kafkaSource;
  }
  public putKafkaSource(value: DatatransferEndpointSettingsKafkaSource) {
    this._kafkaSource.internalValue = value;
  }
  public resetKafkaSource() {
    this._kafkaSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaSourceInput() {
    return this._kafkaSource.internalValue;
  }

  // kafka_target - computed: false, optional: true, required: false
  private _kafkaTarget = new DatatransferEndpointSettingsKafkaTargetOutputReference(this, "kafka_target");
  public get kafkaTarget() {
    return this._kafkaTarget;
  }
  public putKafkaTarget(value: DatatransferEndpointSettingsKafkaTarget) {
    this._kafkaTarget.internalValue = value;
  }
  public resetKafkaTarget() {
    this._kafkaTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaTargetInput() {
    return this._kafkaTarget.internalValue;
  }

  // metrika_source - computed: false, optional: true, required: false
  private _metrikaSource = new DatatransferEndpointSettingsMetrikaSourceOutputReference(this, "metrika_source");
  public get metrikaSource() {
    return this._metrikaSource;
  }
  public putMetrikaSource(value: DatatransferEndpointSettingsMetrikaSource) {
    this._metrikaSource.internalValue = value;
  }
  public resetMetrikaSource() {
    this._metrikaSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metrikaSourceInput() {
    return this._metrikaSource.internalValue;
  }

  // mongo_source - computed: false, optional: true, required: false
  private _mongoSource = new DatatransferEndpointSettingsMongoSourceOutputReference(this, "mongo_source");
  public get mongoSource() {
    return this._mongoSource;
  }
  public putMongoSource(value: DatatransferEndpointSettingsMongoSource) {
    this._mongoSource.internalValue = value;
  }
  public resetMongoSource() {
    this._mongoSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoSourceInput() {
    return this._mongoSource.internalValue;
  }

  // mongo_target - computed: false, optional: true, required: false
  private _mongoTarget = new DatatransferEndpointSettingsMongoTargetOutputReference(this, "mongo_target");
  public get mongoTarget() {
    return this._mongoTarget;
  }
  public putMongoTarget(value: DatatransferEndpointSettingsMongoTarget) {
    this._mongoTarget.internalValue = value;
  }
  public resetMongoTarget() {
    this._mongoTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoTargetInput() {
    return this._mongoTarget.internalValue;
  }

  // mysql_source - computed: false, optional: true, required: false
  private _mysqlSource = new DatatransferEndpointSettingsMysqlSourceOutputReference(this, "mysql_source");
  public get mysqlSource() {
    return this._mysqlSource;
  }
  public putMysqlSource(value: DatatransferEndpointSettingsMysqlSource) {
    this._mysqlSource.internalValue = value;
  }
  public resetMysqlSource() {
    this._mysqlSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlSourceInput() {
    return this._mysqlSource.internalValue;
  }

  // mysql_target - computed: false, optional: true, required: false
  private _mysqlTarget = new DatatransferEndpointSettingsMysqlTargetOutputReference(this, "mysql_target");
  public get mysqlTarget() {
    return this._mysqlTarget;
  }
  public putMysqlTarget(value: DatatransferEndpointSettingsMysqlTarget) {
    this._mysqlTarget.internalValue = value;
  }
  public resetMysqlTarget() {
    this._mysqlTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTargetInput() {
    return this._mysqlTarget.internalValue;
  }

  // postgres_source - computed: false, optional: true, required: false
  private _postgresSource = new DatatransferEndpointSettingsPostgresSourceOutputReference(this, "postgres_source");
  public get postgresSource() {
    return this._postgresSource;
  }
  public putPostgresSource(value: DatatransferEndpointSettingsPostgresSource) {
    this._postgresSource.internalValue = value;
  }
  public resetPostgresSource() {
    this._postgresSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresSourceInput() {
    return this._postgresSource.internalValue;
  }

  // postgres_target - computed: false, optional: true, required: false
  private _postgresTarget = new DatatransferEndpointSettingsPostgresTargetOutputReference(this, "postgres_target");
  public get postgresTarget() {
    return this._postgresTarget;
  }
  public putPostgresTarget(value: DatatransferEndpointSettingsPostgresTarget) {
    this._postgresTarget.internalValue = value;
  }
  public resetPostgresTarget() {
    this._postgresTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresTargetInput() {
    return this._postgresTarget.internalValue;
  }

  // ydb_source - computed: false, optional: true, required: false
  private _ydbSource = new DatatransferEndpointSettingsYdbSourceOutputReference(this, "ydb_source");
  public get ydbSource() {
    return this._ydbSource;
  }
  public putYdbSource(value: DatatransferEndpointSettingsYdbSource) {
    this._ydbSource.internalValue = value;
  }
  public resetYdbSource() {
    this._ydbSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ydbSourceInput() {
    return this._ydbSource.internalValue;
  }

  // ydb_target - computed: false, optional: true, required: false
  private _ydbTarget = new DatatransferEndpointSettingsYdbTargetOutputReference(this, "ydb_target");
  public get ydbTarget() {
    return this._ydbTarget;
  }
  public putYdbTarget(value: DatatransferEndpointSettingsYdbTarget) {
    this._ydbTarget.internalValue = value;
  }
  public resetYdbTarget() {
    this._ydbTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ydbTargetInput() {
    return this._ydbTarget.internalValue;
  }

  // yds_source - computed: false, optional: true, required: false
  private _ydsSource = new DatatransferEndpointSettingsYdsSourceOutputReference(this, "yds_source");
  public get ydsSource() {
    return this._ydsSource;
  }
  public putYdsSource(value: DatatransferEndpointSettingsYdsSource) {
    this._ydsSource.internalValue = value;
  }
  public resetYdsSource() {
    this._ydsSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ydsSourceInput() {
    return this._ydsSource.internalValue;
  }

  // yds_target - computed: false, optional: true, required: false
  private _ydsTarget = new DatatransferEndpointSettingsYdsTargetOutputReference(this, "yds_target");
  public get ydsTarget() {
    return this._ydsTarget;
  }
  public putYdsTarget(value: DatatransferEndpointSettingsYdsTarget) {
    this._ydsTarget.internalValue = value;
  }
  public resetYdsTarget() {
    this._ydsTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ydsTargetInput() {
    return this._ydsTarget.internalValue;
  }
}
