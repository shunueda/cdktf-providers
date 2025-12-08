// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#access_type EsaSite#access_type}
  */
  readonly accessType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#add_client_geolocation_header EsaSite#add_client_geolocation_header}
  */
  readonly addClientGeolocationHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#add_real_client_ip_header EsaSite#add_real_client_ip_header}
  */
  readonly addRealClientIpHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#cache_architecture_mode EsaSite#cache_architecture_mode}
  */
  readonly cacheArchitectureMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#cache_reserve_enable EsaSite#cache_reserve_enable}
  */
  readonly cacheReserveEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#cache_reserve_instance_id EsaSite#cache_reserve_instance_id}
  */
  readonly cacheReserveInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#case_insensitive EsaSite#case_insensitive}
  */
  readonly caseInsensitive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#coverage EsaSite#coverage}
  */
  readonly coverage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#cross_border_optimization EsaSite#cross_border_optimization}
  */
  readonly crossBorderOptimization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#development_mode EsaSite#development_mode}
  */
  readonly developmentMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#flatten_mode EsaSite#flatten_mode}
  */
  readonly flattenMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#id EsaSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#instance_id EsaSite#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#ipv6_enable EsaSite#ipv6_enable}
  */
  readonly ipv6Enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#ipv6_region EsaSite#ipv6_region}
  */
  readonly ipv6Region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#resource_group_id EsaSite#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#seo_bypass EsaSite#seo_bypass}
  */
  readonly seoBypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#site_name EsaSite#site_name}
  */
  readonly siteName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#site_name_exclusive EsaSite#site_name_exclusive}
  */
  readonly siteNameExclusive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#site_version EsaSite#site_version}
  */
  readonly siteVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#tag_name EsaSite#tag_name}
  */
  readonly tagName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#tags EsaSite#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#version_management EsaSite#version_management}
  */
  readonly versionManagement?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#timeouts EsaSite#timeouts}
  */
  readonly timeouts?: EsaSiteTimeouts;
}
export interface EsaSiteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#create EsaSite#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#delete EsaSite#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#update EsaSite#update}
  */
  readonly update?: string;
}

export function esaSiteTimeoutsToTerraform(struct?: EsaSiteTimeouts | cdktf.IResolvable): any {
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


export function esaSiteTimeoutsToHclTerraform(struct?: EsaSiteTimeouts | cdktf.IResolvable): any {
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

export class EsaSiteTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaSiteTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EsaSiteTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site alicloud_esa_site}
*/
export class EsaSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaSite to import
  * @param importFromId The id of the existing EsaSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/esa_site alicloud_esa_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaSiteConfig
  */
  public constructor(scope: Construct, id: string, config: EsaSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_site',
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
    this._accessType = config.accessType;
    this._addClientGeolocationHeader = config.addClientGeolocationHeader;
    this._addRealClientIpHeader = config.addRealClientIpHeader;
    this._cacheArchitectureMode = config.cacheArchitectureMode;
    this._cacheReserveEnable = config.cacheReserveEnable;
    this._cacheReserveInstanceId = config.cacheReserveInstanceId;
    this._caseInsensitive = config.caseInsensitive;
    this._coverage = config.coverage;
    this._crossBorderOptimization = config.crossBorderOptimization;
    this._developmentMode = config.developmentMode;
    this._flattenMode = config.flattenMode;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._ipv6Enable = config.ipv6Enable;
    this._ipv6Region = config.ipv6Region;
    this._resourceGroupId = config.resourceGroupId;
    this._seoBypass = config.seoBypass;
    this._siteName = config.siteName;
    this._siteNameExclusive = config.siteNameExclusive;
    this._siteVersion = config.siteVersion;
    this._tagName = config.tagName;
    this._tags = config.tags;
    this._versionManagement = config.versionManagement;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // add_client_geolocation_header - computed: false, optional: true, required: false
  private _addClientGeolocationHeader?: string; 
  public get addClientGeolocationHeader() {
    return this.getStringAttribute('add_client_geolocation_header');
  }
  public set addClientGeolocationHeader(value: string) {
    this._addClientGeolocationHeader = value;
  }
  public resetAddClientGeolocationHeader() {
    this._addClientGeolocationHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addClientGeolocationHeaderInput() {
    return this._addClientGeolocationHeader;
  }

  // add_real_client_ip_header - computed: false, optional: true, required: false
  private _addRealClientIpHeader?: string; 
  public get addRealClientIpHeader() {
    return this.getStringAttribute('add_real_client_ip_header');
  }
  public set addRealClientIpHeader(value: string) {
    this._addRealClientIpHeader = value;
  }
  public resetAddRealClientIpHeader() {
    this._addRealClientIpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addRealClientIpHeaderInput() {
    return this._addRealClientIpHeader;
  }

  // cache_architecture_mode - computed: true, optional: true, required: false
  private _cacheArchitectureMode?: string; 
  public get cacheArchitectureMode() {
    return this.getStringAttribute('cache_architecture_mode');
  }
  public set cacheArchitectureMode(value: string) {
    this._cacheArchitectureMode = value;
  }
  public resetCacheArchitectureMode() {
    this._cacheArchitectureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheArchitectureModeInput() {
    return this._cacheArchitectureMode;
  }

  // cache_reserve_enable - computed: false, optional: true, required: false
  private _cacheReserveEnable?: string; 
  public get cacheReserveEnable() {
    return this.getStringAttribute('cache_reserve_enable');
  }
  public set cacheReserveEnable(value: string) {
    this._cacheReserveEnable = value;
  }
  public resetCacheReserveEnable() {
    this._cacheReserveEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheReserveEnableInput() {
    return this._cacheReserveEnable;
  }

  // cache_reserve_instance_id - computed: false, optional: true, required: false
  private _cacheReserveInstanceId?: string; 
  public get cacheReserveInstanceId() {
    return this.getStringAttribute('cache_reserve_instance_id');
  }
  public set cacheReserveInstanceId(value: string) {
    this._cacheReserveInstanceId = value;
  }
  public resetCacheReserveInstanceId() {
    this._cacheReserveInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheReserveInstanceIdInput() {
    return this._cacheReserveInstanceId;
  }

  // case_insensitive - computed: false, optional: true, required: false
  private _caseInsensitive?: string; 
  public get caseInsensitive() {
    return this.getStringAttribute('case_insensitive');
  }
  public set caseInsensitive(value: string) {
    this._caseInsensitive = value;
  }
  public resetCaseInsensitive() {
    this._caseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInsensitiveInput() {
    return this._caseInsensitive;
  }

  // coverage - computed: false, optional: true, required: false
  private _coverage?: string; 
  public get coverage() {
    return this.getStringAttribute('coverage');
  }
  public set coverage(value: string) {
    this._coverage = value;
  }
  public resetCoverage() {
    this._coverage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coverageInput() {
    return this._coverage;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cross_border_optimization - computed: false, optional: true, required: false
  private _crossBorderOptimization?: string; 
  public get crossBorderOptimization() {
    return this.getStringAttribute('cross_border_optimization');
  }
  public set crossBorderOptimization(value: string) {
    this._crossBorderOptimization = value;
  }
  public resetCrossBorderOptimization() {
    this._crossBorderOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossBorderOptimizationInput() {
    return this._crossBorderOptimization;
  }

  // development_mode - computed: false, optional: true, required: false
  private _developmentMode?: string; 
  public get developmentMode() {
    return this.getStringAttribute('development_mode');
  }
  public set developmentMode(value: string) {
    this._developmentMode = value;
  }
  public resetDevelopmentMode() {
    this._developmentMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developmentModeInput() {
    return this._developmentMode;
  }

  // flatten_mode - computed: false, optional: true, required: false
  private _flattenMode?: string; 
  public get flattenMode() {
    return this.getStringAttribute('flatten_mode');
  }
  public set flattenMode(value: string) {
    this._flattenMode = value;
  }
  public resetFlattenMode() {
    this._flattenMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flattenModeInput() {
    return this._flattenMode;
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

  // ipv6_enable - computed: true, optional: true, required: false
  private _ipv6Enable?: string; 
  public get ipv6Enable() {
    return this.getStringAttribute('ipv6_enable');
  }
  public set ipv6Enable(value: string) {
    this._ipv6Enable = value;
  }
  public resetIpv6Enable() {
    this._ipv6Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnableInput() {
    return this._ipv6Enable;
  }

  // ipv6_region - computed: true, optional: true, required: false
  private _ipv6Region?: string; 
  public get ipv6Region() {
    return this.getStringAttribute('ipv6_region');
  }
  public set ipv6Region(value: string) {
    this._ipv6Region = value;
  }
  public resetIpv6Region() {
    this._ipv6Region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RegionInput() {
    return this._ipv6Region;
  }

  // resource_group_id - computed: true, optional: true, required: false
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

  // seo_bypass - computed: false, optional: true, required: false
  private _seoBypass?: string; 
  public get seoBypass() {
    return this.getStringAttribute('seo_bypass');
  }
  public set seoBypass(value: string) {
    this._seoBypass = value;
  }
  public resetSeoBypass() {
    this._seoBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seoBypassInput() {
    return this._seoBypass;
  }

  // site_name - computed: false, optional: false, required: true
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // site_name_exclusive - computed: false, optional: true, required: false
  private _siteNameExclusive?: string; 
  public get siteNameExclusive() {
    return this.getStringAttribute('site_name_exclusive');
  }
  public set siteNameExclusive(value: string) {
    this._siteNameExclusive = value;
  }
  public resetSiteNameExclusive() {
    this._siteNameExclusive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameExclusiveInput() {
    return this._siteNameExclusive;
  }

  // site_version - computed: false, optional: true, required: false
  private _siteVersion?: number; 
  public get siteVersion() {
    return this.getNumberAttribute('site_version');
  }
  public set siteVersion(value: number) {
    this._siteVersion = value;
  }
  public resetSiteVersion() {
    this._siteVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteVersionInput() {
    return this._siteVersion;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag_name - computed: false, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
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

  // version_management - computed: false, optional: true, required: false
  private _versionManagement?: boolean | cdktf.IResolvable; 
  public get versionManagement() {
    return this.getBooleanAttribute('version_management');
  }
  public set versionManagement(value: boolean | cdktf.IResolvable) {
    this._versionManagement = value;
  }
  public resetVersionManagement() {
    this._versionManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionManagementInput() {
    return this._versionManagement;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EsaSiteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaSiteTimeouts) {
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
      access_type: cdktf.stringToTerraform(this._accessType),
      add_client_geolocation_header: cdktf.stringToTerraform(this._addClientGeolocationHeader),
      add_real_client_ip_header: cdktf.stringToTerraform(this._addRealClientIpHeader),
      cache_architecture_mode: cdktf.stringToTerraform(this._cacheArchitectureMode),
      cache_reserve_enable: cdktf.stringToTerraform(this._cacheReserveEnable),
      cache_reserve_instance_id: cdktf.stringToTerraform(this._cacheReserveInstanceId),
      case_insensitive: cdktf.stringToTerraform(this._caseInsensitive),
      coverage: cdktf.stringToTerraform(this._coverage),
      cross_border_optimization: cdktf.stringToTerraform(this._crossBorderOptimization),
      development_mode: cdktf.stringToTerraform(this._developmentMode),
      flatten_mode: cdktf.stringToTerraform(this._flattenMode),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ipv6_enable: cdktf.stringToTerraform(this._ipv6Enable),
      ipv6_region: cdktf.stringToTerraform(this._ipv6Region),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      seo_bypass: cdktf.stringToTerraform(this._seoBypass),
      site_name: cdktf.stringToTerraform(this._siteName),
      site_name_exclusive: cdktf.stringToTerraform(this._siteNameExclusive),
      site_version: cdktf.numberToTerraform(this._siteVersion),
      tag_name: cdktf.stringToTerraform(this._tagName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      version_management: cdktf.booleanToTerraform(this._versionManagement),
      timeouts: esaSiteTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_type: {
        value: cdktf.stringToHclTerraform(this._accessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_client_geolocation_header: {
        value: cdktf.stringToHclTerraform(this._addClientGeolocationHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_real_client_ip_header: {
        value: cdktf.stringToHclTerraform(this._addRealClientIpHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_architecture_mode: {
        value: cdktf.stringToHclTerraform(this._cacheArchitectureMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_reserve_enable: {
        value: cdktf.stringToHclTerraform(this._cacheReserveEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_reserve_instance_id: {
        value: cdktf.stringToHclTerraform(this._cacheReserveInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      case_insensitive: {
        value: cdktf.stringToHclTerraform(this._caseInsensitive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      coverage: {
        value: cdktf.stringToHclTerraform(this._coverage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_border_optimization: {
        value: cdktf.stringToHclTerraform(this._crossBorderOptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      development_mode: {
        value: cdktf.stringToHclTerraform(this._developmentMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flatten_mode: {
        value: cdktf.stringToHclTerraform(this._flattenMode),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_enable: {
        value: cdktf.stringToHclTerraform(this._ipv6Enable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_region: {
        value: cdktf.stringToHclTerraform(this._ipv6Region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seo_bypass: {
        value: cdktf.stringToHclTerraform(this._seoBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_name: {
        value: cdktf.stringToHclTerraform(this._siteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_name_exclusive: {
        value: cdktf.stringToHclTerraform(this._siteNameExclusive),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_version: {
        value: cdktf.numberToHclTerraform(this._siteVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag_name: {
        value: cdktf.stringToHclTerraform(this._tagName),
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
      version_management: {
        value: cdktf.booleanToHclTerraform(this._versionManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: esaSiteTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaSiteTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
