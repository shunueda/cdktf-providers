// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EciOpenapiImageCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#eip_instance_id EciOpenapiImageCache#eip_instance_id}
  */
  readonly eipInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#id EciOpenapiImageCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#image_cache_name EciOpenapiImageCache#image_cache_name}
  */
  readonly imageCacheName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#image_cache_size EciOpenapiImageCache#image_cache_size}
  */
  readonly imageCacheSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#images EciOpenapiImageCache#images}
  */
  readonly images: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#resource_group_id EciOpenapiImageCache#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#retention_days EciOpenapiImageCache#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#security_group_id EciOpenapiImageCache#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#vswitch_id EciOpenapiImageCache#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#zone_id EciOpenapiImageCache#zone_id}
  */
  readonly zoneId?: string;
  /**
  * image_registry_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#image_registry_credential EciOpenapiImageCache#image_registry_credential}
  */
  readonly imageRegistryCredential?: EciOpenapiImageCacheImageRegistryCredential[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#timeouts EciOpenapiImageCache#timeouts}
  */
  readonly timeouts?: EciOpenapiImageCacheTimeouts;
}
export interface EciOpenapiImageCacheImageRegistryCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#password EciOpenapiImageCache#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#server EciOpenapiImageCache#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#user_name EciOpenapiImageCache#user_name}
  */
  readonly userName?: string;
}

export function eciOpenapiImageCacheImageRegistryCredentialToTerraform(struct?: EciOpenapiImageCacheImageRegistryCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    server: cdktf.stringToTerraform(struct!.server),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function eciOpenapiImageCacheImageRegistryCredentialToHclTerraform(struct?: EciOpenapiImageCacheImageRegistryCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EciOpenapiImageCacheImageRegistryCredentialOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EciOpenapiImageCacheImageRegistryCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EciOpenapiImageCacheImageRegistryCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._server = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._server = value.server;
      this._userName = value.userName;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class EciOpenapiImageCacheImageRegistryCredentialList extends cdktf.ComplexList {
  public internalValue? : EciOpenapiImageCacheImageRegistryCredential[] | cdktf.IResolvable

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
  public get(index: number): EciOpenapiImageCacheImageRegistryCredentialOutputReference {
    return new EciOpenapiImageCacheImageRegistryCredentialOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EciOpenapiImageCacheTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#create EciOpenapiImageCache#create}
  */
  readonly create?: string;
}

export function eciOpenapiImageCacheTimeoutsToTerraform(struct?: EciOpenapiImageCacheTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function eciOpenapiImageCacheTimeoutsToHclTerraform(struct?: EciOpenapiImageCacheTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EciOpenapiImageCacheTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EciOpenapiImageCacheTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EciOpenapiImageCacheTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache alicloud_eci_openapi_image_cache}
*/
export class EciOpenapiImageCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_eci_openapi_image_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EciOpenapiImageCache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EciOpenapiImageCache to import
  * @param importFromId The id of the existing EciOpenapiImageCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EciOpenapiImageCache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_eci_openapi_image_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/eci_openapi_image_cache alicloud_eci_openapi_image_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EciOpenapiImageCacheConfig
  */
  public constructor(scope: Construct, id: string, config: EciOpenapiImageCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_eci_openapi_image_cache',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eipInstanceId = config.eipInstanceId;
    this._id = config.id;
    this._imageCacheName = config.imageCacheName;
    this._imageCacheSize = config.imageCacheSize;
    this._images = config.images;
    this._resourceGroupId = config.resourceGroupId;
    this._retentionDays = config.retentionDays;
    this._securityGroupId = config.securityGroupId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._imageRegistryCredential.internalValue = config.imageRegistryCredential;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // container_group_id - computed: true, optional: false, required: false
  public get containerGroupId() {
    return this.getStringAttribute('container_group_id');
  }

  // eip_instance_id - computed: false, optional: true, required: false
  private _eipInstanceId?: string; 
  public get eipInstanceId() {
    return this.getStringAttribute('eip_instance_id');
  }
  public set eipInstanceId(value: string) {
    this._eipInstanceId = value;
  }
  public resetEipInstanceId() {
    this._eipInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eipInstanceIdInput() {
    return this._eipInstanceId;
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

  // image_cache_name - computed: false, optional: false, required: true
  private _imageCacheName?: string; 
  public get imageCacheName() {
    return this.getStringAttribute('image_cache_name');
  }
  public set imageCacheName(value: string) {
    this._imageCacheName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageCacheNameInput() {
    return this._imageCacheName;
  }

  // image_cache_size - computed: false, optional: true, required: false
  private _imageCacheSize?: number; 
  public get imageCacheSize() {
    return this.getNumberAttribute('image_cache_size');
  }
  public set imageCacheSize(value: number) {
    this._imageCacheSize = value;
  }
  public resetImageCacheSize() {
    this._imageCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageCacheSizeInput() {
    return this._imageCacheSize;
  }

  // images - computed: false, optional: false, required: true
  private _images?: string[]; 
  public get images() {
    return cdktf.Fn.tolist(this.getListAttribute('images'));
  }
  public set images(value: string[]) {
    this._images = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: false, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // image_registry_credential - computed: false, optional: true, required: false
  private _imageRegistryCredential = new EciOpenapiImageCacheImageRegistryCredentialList(this, "image_registry_credential", true);
  public get imageRegistryCredential() {
    return this._imageRegistryCredential;
  }
  public putImageRegistryCredential(value: EciOpenapiImageCacheImageRegistryCredential[] | cdktf.IResolvable) {
    this._imageRegistryCredential.internalValue = value;
  }
  public resetImageRegistryCredential() {
    this._imageRegistryCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRegistryCredentialInput() {
    return this._imageRegistryCredential.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EciOpenapiImageCacheTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EciOpenapiImageCacheTimeouts) {
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
      eip_instance_id: cdktf.stringToTerraform(this._eipInstanceId),
      id: cdktf.stringToTerraform(this._id),
      image_cache_name: cdktf.stringToTerraform(this._imageCacheName),
      image_cache_size: cdktf.numberToTerraform(this._imageCacheSize),
      images: cdktf.listMapper(cdktf.stringToTerraform, false)(this._images),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      image_registry_credential: cdktf.listMapper(eciOpenapiImageCacheImageRegistryCredentialToTerraform, true)(this._imageRegistryCredential.internalValue),
      timeouts: eciOpenapiImageCacheTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      eip_instance_id: {
        value: cdktf.stringToHclTerraform(this._eipInstanceId),
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
      image_cache_name: {
        value: cdktf.stringToHclTerraform(this._imageCacheName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_cache_size: {
        value: cdktf.numberToHclTerraform(this._imageCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      images: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._images),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_days: {
        value: cdktf.numberToHclTerraform(this._retentionDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
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
      image_registry_credential: {
        value: cdktf.listMapperHcl(eciOpenapiImageCacheImageRegistryCredentialToHclTerraform, true)(this._imageRegistryCredential.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EciOpenapiImageCacheImageRegistryCredentialList",
      },
      timeouts: {
        value: eciOpenapiImageCacheTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EciOpenapiImageCacheTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
