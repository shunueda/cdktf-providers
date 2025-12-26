// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoOriginGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Back-to-origin Host Header, it only takes effect when type = HTTP is passed in. The rule engine modifies the Host Header configuration priority to be higher than the Host Header of the origin site group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group#host_header TeoOriginGroup#host_header}
  */
  readonly hostHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group#id TeoOriginGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * OriginGroup Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group#name TeoOriginGroup#name}
  */
  readonly name?: string;
  /**
  * Type of the origin site. Valid values:
  * - `GENERAL`: Universal origin site group, only supports adding IP/domain name origin sites, which can be referenced by domain name service, rule engine, four-layer proxy, general load balancing, and HTTP-specific load balancing.
  * - `HTTP`: The HTTP-specific origin site group, supports adding IP/domain name and object storage origin site as the origin site, it cannot be referenced by the four-layer proxy, it can only be added to the acceleration domain name, rule engine-modify origin site, and HTTP-specific load balancing reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group#type TeoOriginGroup#type}
  */
  readonly type: string;
  /**
  * Site ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group#zone_id TeoOriginGroup#zone_id}
  */
  readonly zoneId: string;
  /**
  * records block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group#records TeoOriginGroup#records}
  */
  readonly records: TeoOriginGroupRecords[] | cdktf.IResolvable;
}
export interface TeoOriginGroupReferences {
}

export function teoOriginGroupReferencesToTerraform(struct?: TeoOriginGroupReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function teoOriginGroupReferencesToHclTerraform(struct?: TeoOriginGroupReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TeoOriginGroupReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoOriginGroupReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoOriginGroupReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
}

export class TeoOriginGroupReferencesList extends cdktf.ComplexList {

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
  public get(index: number): TeoOriginGroupReferencesOutputReference {
    return new TeoOriginGroupReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoOriginGroupRecordsPrivateParameters {
  /**
  * Private authentication parameter name, the values are:
  *   - `AccessKeyId`: Authentication parameter Access Key ID.
  *   - `SecretAccessKey`: Authentication parameter Secret Access Key.
  *   - `SignatureVersion`: Authentication version, v2 or v4.
  *   - `Region`: Bucket region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group#name TeoOriginGroup#name}
  */
  readonly name: string;
  /**
  * Private authentication parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group#value TeoOriginGroup#value}
  */
  readonly value: string;
}

export function teoOriginGroupRecordsPrivateParametersToTerraform(struct?: TeoOriginGroupRecordsPrivateParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function teoOriginGroupRecordsPrivateParametersToHclTerraform(struct?: TeoOriginGroupRecordsPrivateParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class TeoOriginGroupRecordsPrivateParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoOriginGroupRecordsPrivateParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoOriginGroupRecordsPrivateParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TeoOriginGroupRecordsPrivateParametersList extends cdktf.ComplexList {
  public internalValue? : TeoOriginGroupRecordsPrivateParameters[] | cdktf.IResolvable

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
  public get(index: number): TeoOriginGroupRecordsPrivateParametersOutputReference {
    return new TeoOriginGroupRecordsPrivateParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoOriginGroupRecords {
  /**
  * Whether to use private authentication, it takes effect when the origin site type RecordType=COS/AWS_S3, the values are:
  *   - `true`: Use private authentication.
  *   - `false`: Do not use private authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group#private TeoOriginGroup#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
  /**
  * Origin site record value, does not include port information, can be: IPv4, IPv6, domain name format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group#record TeoOriginGroup#record}
  */
  readonly record: string;
  /**
  * Origin record ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group#record_id TeoOriginGroup#record_id}
  */
  readonly recordId?: string;
  /**
  * Origin site type, the values are:
  *   - `IP_DOMAIN`: IPV4, IPV6, domain name type origin site.
  *   - `COS`: COS source.
  *   - `AWS_S3`: AWS S3 object storage origin site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group#type TeoOriginGroup#type}
  */
  readonly type?: string;
  /**
  * The weight of the origin site, the value is 0-100. If it is not filled in, it means that the weight will not be set and the system will schedule it freely. If it is filled in with 0, it means that the weight is 0 and the traffic will not be scheduled to this origin site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group#weight TeoOriginGroup#weight}
  */
  readonly weight?: number;
  /**
  * private_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group#private_parameters TeoOriginGroup#private_parameters}
  */
  readonly privateParameters?: TeoOriginGroupRecordsPrivateParameters[] | cdktf.IResolvable;
}

export function teoOriginGroupRecordsToTerraform(struct?: TeoOriginGroupRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private: cdktf.booleanToTerraform(struct!.private),
    record: cdktf.stringToTerraform(struct!.record),
    record_id: cdktf.stringToTerraform(struct!.recordId),
    type: cdktf.stringToTerraform(struct!.type),
    weight: cdktf.numberToTerraform(struct!.weight),
    private_parameters: cdktf.listMapper(teoOriginGroupRecordsPrivateParametersToTerraform, true)(struct!.privateParameters),
  }
}


export function teoOriginGroupRecordsToHclTerraform(struct?: TeoOriginGroupRecords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private: {
      value: cdktf.booleanToHclTerraform(struct!.private),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    record: {
      value: cdktf.stringToHclTerraform(struct!.record),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_id: {
      value: cdktf.stringToHclTerraform(struct!.recordId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_parameters: {
      value: cdktf.listMapperHcl(teoOriginGroupRecordsPrivateParametersToHclTerraform, true)(struct!.privateParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoOriginGroupRecordsPrivateParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoOriginGroupRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoOriginGroupRecords | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._private !== undefined) {
      hasAnyValues = true;
      internalValueResult.private = this._private;
    }
    if (this._record !== undefined) {
      hasAnyValues = true;
      internalValueResult.record = this._record;
    }
    if (this._recordId !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordId = this._recordId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._privateParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateParameters = this._privateParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoOriginGroupRecords | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._private = undefined;
      this._record = undefined;
      this._recordId = undefined;
      this._type = undefined;
      this._weight = undefined;
      this._privateParameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._private = value.private;
      this._record = value.record;
      this._recordId = value.recordId;
      this._type = value.type;
      this._weight = value.weight;
      this._privateParameters.internalValue = value.privateParameters;
    }
  }

  // private - computed: false, optional: true, required: false
  private _private?: boolean | cdktf.IResolvable; 
  public get private() {
    return this.getBooleanAttribute('private');
  }
  public set private(value: boolean | cdktf.IResolvable) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // record - computed: false, optional: false, required: true
  private _record?: string; 
  public get record() {
    return this.getStringAttribute('record');
  }
  public set record(value: string) {
    this._record = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInput() {
    return this._record;
  }

  // record_id - computed: true, optional: true, required: false
  private _recordId?: string; 
  public get recordId() {
    return this.getStringAttribute('record_id');
  }
  public set recordId(value: string) {
    this._recordId = value;
  }
  public resetRecordId() {
    this._recordId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordIdInput() {
    return this._recordId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // private_parameters - computed: false, optional: true, required: false
  private _privateParameters = new TeoOriginGroupRecordsPrivateParametersList(this, "private_parameters", false);
  public get privateParameters() {
    return this._privateParameters;
  }
  public putPrivateParameters(value: TeoOriginGroupRecordsPrivateParameters[] | cdktf.IResolvable) {
    this._privateParameters.internalValue = value;
  }
  public resetPrivateParameters() {
    this._privateParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateParametersInput() {
    return this._privateParameters.internalValue;
  }
}

export class TeoOriginGroupRecordsList extends cdktf.ComplexList {
  public internalValue? : TeoOriginGroupRecords[] | cdktf.IResolvable

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
  public get(index: number): TeoOriginGroupRecordsOutputReference {
    return new TeoOriginGroupRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group tencentcloud_teo_origin_group}
*/
export class TeoOriginGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_origin_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoOriginGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoOriginGroup to import
  * @param importFromId The id of the existing TeoOriginGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoOriginGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_origin_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/teo_origin_group tencentcloud_teo_origin_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoOriginGroupConfig
  */
  public constructor(scope: Construct, id: string, config: TeoOriginGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_origin_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostHeader = config.hostHeader;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._zoneId = config.zoneId;
    this._records.internalValue = config.records;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // origin_group_id - computed: true, optional: false, required: false
  public get originGroupId() {
    return this.getStringAttribute('origin_group_id');
  }

  // references - computed: true, optional: false, required: false
  private _references = new TeoOriginGroupReferencesList(this, "references", false);
  public get references() {
    return this._references;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // records - computed: false, optional: false, required: true
  private _records = new TeoOriginGroupRecordsList(this, "records", true);
  public get records() {
    return this._records;
  }
  public putRecords(value: TeoOriginGroupRecords[] | cdktf.IResolvable) {
    this._records.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordsInput() {
    return this._records.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_header: cdktf.stringToTerraform(this._hostHeader),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      records: cdktf.listMapper(teoOriginGroupRecordsToTerraform, true)(this._records.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_header: {
        value: cdktf.stringToHclTerraform(this._hostHeader),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      records: {
        value: cdktf.listMapperHcl(teoOriginGroupRecordsToHclTerraform, true)(this._records.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TeoOriginGroupRecordsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
