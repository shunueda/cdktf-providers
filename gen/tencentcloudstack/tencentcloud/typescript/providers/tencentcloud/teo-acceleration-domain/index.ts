// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeoAccelerationDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Accelerated domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#domain_name TeoAccelerationDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * HTTP back-to-origin port, the value is 1-65535, effective when OriginProtocol=FOLLOW/HTTP, if not filled in, the default value is 80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#http_origin_port TeoAccelerationDomain#http_origin_port}
  */
  readonly httpOriginPort?: number;
  /**
  * HTTPS back-to-origin port. The value range is 1-65535. It takes effect when OriginProtocol=FOLLOW/HTTPS. If it is not filled in, the default value is 443.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#https_origin_port TeoAccelerationDomain#https_origin_port}
  */
  readonly httpsOriginPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#id TeoAccelerationDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPv6 status, the value is: `follow`: follow the site IPv6 configuration; `on`: on; `off`: off. If not filled in, the default is: `follow`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#ipv6_status TeoAccelerationDomain#ipv6_status}
  */
  readonly ipv6Status?: string;
  /**
  * Origin return protocol, possible values are: `FOLLOW`: protocol follow; `HTTP`: HTTP protocol back to source; `HTTPS`: HTTPS protocol back to source. If not filled in, the default is: `FOLLOW`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#origin_protocol TeoAccelerationDomain#origin_protocol}
  */
  readonly originProtocol?: string;
  /**
  * Accelerated domain name status, the values are: `online`: enabled; `offline`: disabled. Default is `online`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#status TeoAccelerationDomain#status}
  */
  readonly status?: string;
  /**
  * ID of the site related with the accelerated domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#zone_id TeoAccelerationDomain#zone_id}
  */
  readonly zoneId: string;
  /**
  * origin_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#origin_info TeoAccelerationDomain#origin_info}
  */
  readonly originInfo: TeoAccelerationDomainOriginInfo;
}
export interface TeoAccelerationDomainOriginInfoPrivateParameters {
  /**
  * The parameter name. Valid values: `AccessKeyId`: Access Key ID; `SecretAccessKey`: Secret Access Key; `SignatureVersion`: authentication version, v2 or v4; `Region`: bucket region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#name TeoAccelerationDomain#name}
  */
  readonly name: string;
  /**
  * The parameter value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#value TeoAccelerationDomain#value}
  */
  readonly value: string;
}

export function teoAccelerationDomainOriginInfoPrivateParametersToTerraform(struct?: TeoAccelerationDomainOriginInfoPrivateParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function teoAccelerationDomainOriginInfoPrivateParametersToHclTerraform(struct?: TeoAccelerationDomainOriginInfoPrivateParameters | cdktf.IResolvable): any {
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

export class TeoAccelerationDomainOriginInfoPrivateParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TeoAccelerationDomainOriginInfoPrivateParameters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TeoAccelerationDomainOriginInfoPrivateParameters | cdktf.IResolvable | undefined) {
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

export class TeoAccelerationDomainOriginInfoPrivateParametersList extends cdktf.ComplexList {
  public internalValue? : TeoAccelerationDomainOriginInfoPrivateParameters[] | cdktf.IResolvable

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
  public get(index: number): TeoAccelerationDomainOriginInfoPrivateParametersOutputReference {
    return new TeoAccelerationDomainOriginInfoPrivateParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TeoAccelerationDomainOriginInfo {
  /**
  * The ID of the secondary origin group. This parameter is valid only when OriginType is ORIGIN_GROUP. This field indicates the old version capability, which cannot be configured or modified on the control panel after being called. Please submit a ticket if required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#backup_origin TeoAccelerationDomain#backup_origin}
  */
  readonly backupOrigin?: string;
  /**
  * Custom origin server HOST header. this parameter is valid only when OriginType=IP_DOMAIN.If the OriginType is another type of origin, this parameter does not need to be passed in, otherwise an error will be reported. If OriginType is COS or AWS_S3, the HOST header for origin-pull will remain consistent with the origin server domain name. If OriginType is ORIGIN_GROUP, the HOST header follows the ORIGIN site GROUP configuration. if not configured, it defaults to the acceleration domain name. If OriginType is VOD or SPACE, no configuration is required for this header, and the domain name takes effect based on the corresponding origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#host_header TeoAccelerationDomain#host_header}
  */
  readonly hostHeader?: string;
  /**
  * Origin server address, which varies according to the value of OriginType: When OriginType = IP_DOMAIN, fill in an IPv4 address, an IPv6 address, or a domain name; When OriginType = COS, fill in the access domain name of the COS bucket; When OriginType = AWS_S3, fill in the access domain name of the S3 bucket; When OriginType = ORIGIN_GROUP, fill in the origin server group ID; When OriginType = VOD, fill in the VOD application ID; When OriginType = LB, fill in the Cloud Load Balancer instance ID. This feature is currently only available to the allowlist; When OriginType = SPACE, fill in the origin server uninstallation space ID. This feature is currently only available to the allowlist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#origin TeoAccelerationDomain#origin}
  */
  readonly origin: string;
  /**
  * Origin server type, with values: IP_DOMAIN: IPv4, IPv6, or domain name type origin server; COS: Tencent Cloud COS origin server; AWS_S3: AWS S3 origin server; ORIGIN_GROUP: origin server group type origin server; VOD: Video on Demand; SPACE: origin server uninstallation. Currently only available to the allowlist; LB: load balancing. Currently only available to the allowlist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#origin_type TeoAccelerationDomain#origin_type}
  */
  readonly originType: string;
  /**
  * Whether access to the private Cloud Object Storage origin server is allowed. This parameter is valid only when OriginType is COS or AWS_S3. Valid values: on: Enable private authentication; off: Disable private authentication. If it is not specified, the default value is off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#private_access TeoAccelerationDomain#private_access}
  */
  readonly privateAccess?: string;
  /**
  * VOD bucket ID. This parameter is required when OriginType = VOD and VodOriginScope = bucket. Data source: the storage ID of the bucket in the Cloud VOD Professional Edition application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#vod_bucket_id TeoAccelerationDomain#vod_bucket_id}
  */
  readonly vodBucketId?: string;
  /**
  * The scope of cloud on-demand back-to-source. This parameter is effective when OriginType = VOD. The possible values are: all: all files in the cloud on-demand application corresponding to the current origin station. The default value is all; bucket: files in a specified bucket under the cloud on-demand application corresponding to the current origin station. The bucket is specified by the parameter VodBucketId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#vod_origin_scope TeoAccelerationDomain#vod_origin_scope}
  */
  readonly vodOriginScope?: string;
  /**
  * private_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#private_parameters TeoAccelerationDomain#private_parameters}
  */
  readonly privateParameters?: TeoAccelerationDomainOriginInfoPrivateParameters[] | cdktf.IResolvable;
}

export function teoAccelerationDomainOriginInfoToTerraform(struct?: TeoAccelerationDomainOriginInfoOutputReference | TeoAccelerationDomainOriginInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_origin: cdktf.stringToTerraform(struct!.backupOrigin),
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    origin: cdktf.stringToTerraform(struct!.origin),
    origin_type: cdktf.stringToTerraform(struct!.originType),
    private_access: cdktf.stringToTerraform(struct!.privateAccess),
    vod_bucket_id: cdktf.stringToTerraform(struct!.vodBucketId),
    vod_origin_scope: cdktf.stringToTerraform(struct!.vodOriginScope),
    private_parameters: cdktf.listMapper(teoAccelerationDomainOriginInfoPrivateParametersToTerraform, true)(struct!.privateParameters),
  }
}


export function teoAccelerationDomainOriginInfoToHclTerraform(struct?: TeoAccelerationDomainOriginInfoOutputReference | TeoAccelerationDomainOriginInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_origin: {
      value: cdktf.stringToHclTerraform(struct!.backupOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_header: {
      value: cdktf.stringToHclTerraform(struct!.hostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_type: {
      value: cdktf.stringToHclTerraform(struct!.originType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_access: {
      value: cdktf.stringToHclTerraform(struct!.privateAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vod_bucket_id: {
      value: cdktf.stringToHclTerraform(struct!.vodBucketId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vod_origin_scope: {
      value: cdktf.stringToHclTerraform(struct!.vodOriginScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_parameters: {
      value: cdktf.listMapperHcl(teoAccelerationDomainOriginInfoPrivateParametersToHclTerraform, true)(struct!.privateParameters),
      isBlock: true,
      type: "list",
      storageClassType: "TeoAccelerationDomainOriginInfoPrivateParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeoAccelerationDomainOriginInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeoAccelerationDomainOriginInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupOrigin = this._backupOrigin;
    }
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._originType !== undefined) {
      hasAnyValues = true;
      internalValueResult.originType = this._originType;
    }
    if (this._privateAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAccess = this._privateAccess;
    }
    if (this._vodBucketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vodBucketId = this._vodBucketId;
    }
    if (this._vodOriginScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.vodOriginScope = this._vodOriginScope;
    }
    if (this._privateParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateParameters = this._privateParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeoAccelerationDomainOriginInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupOrigin = undefined;
      this._hostHeader = undefined;
      this._origin = undefined;
      this._originType = undefined;
      this._privateAccess = undefined;
      this._vodBucketId = undefined;
      this._vodOriginScope = undefined;
      this._privateParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupOrigin = value.backupOrigin;
      this._hostHeader = value.hostHeader;
      this._origin = value.origin;
      this._originType = value.originType;
      this._privateAccess = value.privateAccess;
      this._vodBucketId = value.vodBucketId;
      this._vodOriginScope = value.vodOriginScope;
      this._privateParameters.internalValue = value.privateParameters;
    }
  }

  // backup_origin - computed: false, optional: true, required: false
  private _backupOrigin?: string; 
  public get backupOrigin() {
    return this.getStringAttribute('backup_origin');
  }
  public set backupOrigin(value: string) {
    this._backupOrigin = value;
  }
  public resetBackupOrigin() {
    this._backupOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupOriginInput() {
    return this._backupOrigin;
  }

  // host_header - computed: true, optional: true, required: false
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

  // origin - computed: false, optional: false, required: true
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // origin_type - computed: false, optional: false, required: true
  private _originType?: string; 
  public get originType() {
    return this.getStringAttribute('origin_type');
  }
  public set originType(value: string) {
    this._originType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originTypeInput() {
    return this._originType;
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess?: string; 
  public get privateAccess() {
    return this.getStringAttribute('private_access');
  }
  public set privateAccess(value: string) {
    this._privateAccess = value;
  }
  public resetPrivateAccess() {
    this._privateAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess;
  }

  // vod_bucket_id - computed: false, optional: true, required: false
  private _vodBucketId?: string; 
  public get vodBucketId() {
    return this.getStringAttribute('vod_bucket_id');
  }
  public set vodBucketId(value: string) {
    this._vodBucketId = value;
  }
  public resetVodBucketId() {
    this._vodBucketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodBucketIdInput() {
    return this._vodBucketId;
  }

  // vod_origin_scope - computed: false, optional: true, required: false
  private _vodOriginScope?: string; 
  public get vodOriginScope() {
    return this.getStringAttribute('vod_origin_scope');
  }
  public set vodOriginScope(value: string) {
    this._vodOriginScope = value;
  }
  public resetVodOriginScope() {
    this._vodOriginScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodOriginScopeInput() {
    return this._vodOriginScope;
  }

  // private_parameters - computed: false, optional: true, required: false
  private _privateParameters = new TeoAccelerationDomainOriginInfoPrivateParametersList(this, "private_parameters", false);
  public get privateParameters() {
    return this._privateParameters;
  }
  public putPrivateParameters(value: TeoAccelerationDomainOriginInfoPrivateParameters[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain tencentcloud_teo_acceleration_domain}
*/
export class TeoAccelerationDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_teo_acceleration_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeoAccelerationDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeoAccelerationDomain to import
  * @param importFromId The id of the existing TeoAccelerationDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeoAccelerationDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_teo_acceleration_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/teo_acceleration_domain tencentcloud_teo_acceleration_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeoAccelerationDomainConfig
  */
  public constructor(scope: Construct, id: string, config: TeoAccelerationDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_teo_acceleration_domain',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainName = config.domainName;
    this._httpOriginPort = config.httpOriginPort;
    this._httpsOriginPort = config.httpsOriginPort;
    this._id = config.id;
    this._ipv6Status = config.ipv6Status;
    this._originProtocol = config.originProtocol;
    this._status = config.status;
    this._zoneId = config.zoneId;
    this._originInfo.internalValue = config.originInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // http_origin_port - computed: true, optional: true, required: false
  private _httpOriginPort?: number; 
  public get httpOriginPort() {
    return this.getNumberAttribute('http_origin_port');
  }
  public set httpOriginPort(value: number) {
    this._httpOriginPort = value;
  }
  public resetHttpOriginPort() {
    this._httpOriginPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOriginPortInput() {
    return this._httpOriginPort;
  }

  // https_origin_port - computed: true, optional: true, required: false
  private _httpsOriginPort?: number; 
  public get httpsOriginPort() {
    return this.getNumberAttribute('https_origin_port');
  }
  public set httpsOriginPort(value: number) {
    this._httpsOriginPort = value;
  }
  public resetHttpsOriginPort() {
    this._httpsOriginPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsOriginPortInput() {
    return this._httpsOriginPort;
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

  // ipv6_status - computed: true, optional: true, required: false
  private _ipv6Status?: string; 
  public get ipv6Status() {
    return this.getStringAttribute('ipv6_status');
  }
  public set ipv6Status(value: string) {
    this._ipv6Status = value;
  }
  public resetIpv6Status() {
    this._ipv6Status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6StatusInput() {
    return this._ipv6Status;
  }

  // origin_protocol - computed: true, optional: true, required: false
  private _originProtocol?: string; 
  public get originProtocol() {
    return this.getStringAttribute('origin_protocol');
  }
  public set originProtocol(value: string) {
    this._originProtocol = value;
  }
  public resetOriginProtocol() {
    this._originProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originProtocolInput() {
    return this._originProtocol;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // origin_info - computed: false, optional: false, required: true
  private _originInfo = new TeoAccelerationDomainOriginInfoOutputReference(this, "origin_info");
  public get originInfo() {
    return this._originInfo;
  }
  public putOriginInfo(value: TeoAccelerationDomainOriginInfo) {
    this._originInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInfoInput() {
    return this._originInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      http_origin_port: cdktf.numberToTerraform(this._httpOriginPort),
      https_origin_port: cdktf.numberToTerraform(this._httpsOriginPort),
      id: cdktf.stringToTerraform(this._id),
      ipv6_status: cdktf.stringToTerraform(this._ipv6Status),
      origin_protocol: cdktf.stringToTerraform(this._originProtocol),
      status: cdktf.stringToTerraform(this._status),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      origin_info: teoAccelerationDomainOriginInfoToTerraform(this._originInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_origin_port: {
        value: cdktf.numberToHclTerraform(this._httpOriginPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      https_origin_port: {
        value: cdktf.numberToHclTerraform(this._httpsOriginPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_status: {
        value: cdktf.stringToHclTerraform(this._ipv6Status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_protocol: {
        value: cdktf.stringToHclTerraform(this._originProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      origin_info: {
        value: teoAccelerationDomainOriginInfoToHclTerraform(this._originInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeoAccelerationDomainOriginInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
