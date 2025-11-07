// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnOrigingroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Consistent load balancing (consistent hashing) for the source group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup#consistent_balancing CdnOrigingroup#consistent_balancing}
  */
  readonly consistentBalancing: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup#id CdnOrigingroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Add the source group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup#name CdnOrigingroup#name}
  */
  readonly name: string;
  /**
  * Specify whether or not the CDN will use the next source in the list if your source responds with an HTTP status code of 4XX or 5XX.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup#use_next CdnOrigingroup#use_next}
  */
  readonly useNext: boolean | cdktf.IResolvable;
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup#authorization CdnOrigingroup#authorization}
  */
  readonly authorization?: CdnOrigingroupAuthorization;
  /**
  * origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup#origin CdnOrigingroup#origin}
  */
  readonly origin: CdnOrigingroupOrigin[] | cdktf.IResolvable;
}
export interface CdnOrigingroupAuthorization {
  /**
  * Specify the access key ID in 20 alphanumeric characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup#access_key_id CdnOrigingroup#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * The addressing style for S3 requests. Supported values: path, virtual.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup#addressing_style CdnOrigingroup#addressing_style}
  */
  readonly addressingStyle?: string;
  /**
  * The type of authorization on the source. It can take two values - aws_signature_v2 or aws_signature_v4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup#auth_type CdnOrigingroup#auth_type}
  */
  readonly authType: string;
  /**
  * The AWS region name.The name is restricted to 255 symbols and can contain lowercase latin letters (a-z), digits (0-9), and hyphens. Region name cannot start or end with a hyphen and cannot contain double hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup#aws_region CdnOrigingroup#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Specify the bucket name. The name is restricted to 255 symbols and may include alphanumeric characters, slashes, pluses, hyphens, and underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup#bucket_name CdnOrigingroup#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Specify the secret access key. The value must be between 32 and 40 characters and may include alphanumeric characters, slashes, pluses, hyphens, and underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup#secret_key CdnOrigingroup#secret_key}
  */
  readonly secretKey: string;
}

export function cdnOrigingroupAuthorizationToTerraform(struct?: CdnOrigingroupAuthorizationOutputReference | CdnOrigingroupAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    addressing_style: cdktf.stringToTerraform(struct!.addressingStyle),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function cdnOrigingroupAuthorizationToHclTerraform(struct?: CdnOrigingroupAuthorizationOutputReference | CdnOrigingroupAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addressing_style: {
      value: cdktf.stringToHclTerraform(struct!.addressingStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnOrigingroupAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnOrigingroupAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._addressingStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressingStyle = this._addressingStyle;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnOrigingroupAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._addressingStyle = undefined;
      this._authType = undefined;
      this._awsRegion = undefined;
      this._bucketName = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._addressingStyle = value.addressingStyle;
      this._authType = value.authType;
      this._awsRegion = value.awsRegion;
      this._bucketName = value.bucketName;
      this._secretKey = value.secretKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // addressing_style - computed: false, optional: true, required: false
  private _addressingStyle?: string; 
  public get addressingStyle() {
    return this.getStringAttribute('addressing_style');
  }
  public set addressingStyle(value: string) {
    this._addressingStyle = value;
  }
  public resetAddressingStyle() {
    this._addressingStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressingStyleInput() {
    return this._addressingStyle;
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface CdnOrigingroupOrigin {
  /**
  * If set to "true", this source will not be used until one of the active sources becomes unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup#backup CdnOrigingroup#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable the source. The source group must contain at least one enabled source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup#enabled CdnOrigingroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Enter the source’s domain name or the IP address with a custom port (if any).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup#source CdnOrigingroup#source}
  */
  readonly source: string;
}

export function cdnOrigingroupOriginToTerraform(struct?: CdnOrigingroupOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup: cdktf.booleanToTerraform(struct!.backup),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function cdnOrigingroupOriginToHclTerraform(struct?: CdnOrigingroupOrigin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup: {
      value: cdktf.booleanToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnOrigingroupOriginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnOrigingroupOrigin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnOrigingroupOrigin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backup = undefined;
      this._enabled = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backup = value.backup;
      this._enabled = value.enabled;
      this._source = value.source;
    }
  }

  // backup - computed: true, optional: true, required: false
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class CdnOrigingroupOriginList extends cdktf.ComplexList {
  public internalValue? : CdnOrigingroupOrigin[] | cdktf.IResolvable

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
  public get(index: number): CdnOrigingroupOriginOutputReference {
    return new CdnOrigingroupOriginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup edgecenter_cdn_origingroup}
*/
export class CdnOrigingroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_cdn_origingroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnOrigingroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnOrigingroup to import
  * @param importFromId The id of the existing CdnOrigingroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnOrigingroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_cdn_origingroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.4/docs/resources/cdn_origingroup edgecenter_cdn_origingroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnOrigingroupConfig
  */
  public constructor(scope: Construct, id: string, config: CdnOrigingroupConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_cdn_origingroup',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consistentBalancing = config.consistentBalancing;
    this._id = config.id;
    this._name = config.name;
    this._useNext = config.useNext;
    this._authorization.internalValue = config.authorization;
    this._origin.internalValue = config.origin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consistent_balancing - computed: false, optional: false, required: true
  private _consistentBalancing?: boolean | cdktf.IResolvable; 
  public get consistentBalancing() {
    return this.getBooleanAttribute('consistent_balancing');
  }
  public set consistentBalancing(value: boolean | cdktf.IResolvable) {
    this._consistentBalancing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consistentBalancingInput() {
    return this._consistentBalancing;
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

  // use_next - computed: false, optional: false, required: true
  private _useNext?: boolean | cdktf.IResolvable; 
  public get useNext() {
    return this.getBooleanAttribute('use_next');
  }
  public set useNext(value: boolean | cdktf.IResolvable) {
    this._useNext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useNextInput() {
    return this._useNext;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new CdnOrigingroupAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: CdnOrigingroupAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // origin - computed: false, optional: false, required: true
  private _origin = new CdnOrigingroupOriginList(this, "origin", true);
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: CdnOrigingroupOrigin[] | cdktf.IResolvable) {
    this._origin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consistent_balancing: cdktf.booleanToTerraform(this._consistentBalancing),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      use_next: cdktf.booleanToTerraform(this._useNext),
      authorization: cdnOrigingroupAuthorizationToTerraform(this._authorization.internalValue),
      origin: cdktf.listMapper(cdnOrigingroupOriginToTerraform, true)(this._origin.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consistent_balancing: {
        value: cdktf.booleanToHclTerraform(this._consistentBalancing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      use_next: {
        value: cdktf.booleanToHclTerraform(this._useNext),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authorization: {
        value: cdnOrigingroupAuthorizationToHclTerraform(this._authorization.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CdnOrigingroupAuthorizationList",
      },
      origin: {
        value: cdktf.listMapperHcl(cdnOrigingroupOriginToHclTerraform, true)(this._origin.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CdnOrigingroupOriginList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
