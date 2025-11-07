// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IcapprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#allow_204 Icapprofile#allow_204}
  */
  readonly allow204?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#buffer_size Icapprofile#buffer_size}
  */
  readonly bufferSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#buffer_size_exceed_action Icapprofile#buffer_size_exceed_action}
  */
  readonly bufferSizeExceedAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#cloud_ref Icapprofile#cloud_ref}
  */
  readonly cloudRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#description Icapprofile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#enable_preview Icapprofile#enable_preview}
  */
  readonly enablePreview?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#fail_action Icapprofile#fail_action}
  */
  readonly failAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#id Icapprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#name Icapprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#pool_group_ref Icapprofile#pool_group_ref}
  */
  readonly poolGroupRef: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#preview_size Icapprofile#preview_size}
  */
  readonly previewSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#response_timeout Icapprofile#response_timeout}
  */
  readonly responseTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#service_uri Icapprofile#service_uri}
  */
  readonly serviceUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#slow_response_warning_threshold Icapprofile#slow_response_warning_threshold}
  */
  readonly slowResponseWarningThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#tenant_ref Icapprofile#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#uuid Icapprofile#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#vendor Icapprofile#vendor}
  */
  readonly vendor?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#configpb_attributes Icapprofile#configpb_attributes}
  */
  readonly configpbAttributes?: IcapprofileConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * nsx_defender_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#nsx_defender_config Icapprofile#nsx_defender_config}
  */
  readonly nsxDefenderConfig?: IcapprofileNsxDefenderConfig[] | cdktf.IResolvable;
}
export interface IcapprofileConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#version Icapprofile#version}
  */
  readonly version?: string;
}

export function icapprofileConfigpbAttributesToTerraform(struct?: IcapprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function icapprofileConfigpbAttributesToHclTerraform(struct?: IcapprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcapprofileConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IcapprofileConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcapprofileConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class IcapprofileConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : IcapprofileConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): IcapprofileConfigpbAttributesOutputReference {
    return new IcapprofileConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IcapprofileNsxDefenderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#status_url Icapprofile#status_url}
  */
  readonly statusUrl?: string;
}

export function icapprofileNsxDefenderConfigToTerraform(struct?: IcapprofileNsxDefenderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_url: cdktf.stringToTerraform(struct!.statusUrl),
  }
}


export function icapprofileNsxDefenderConfigToHclTerraform(struct?: IcapprofileNsxDefenderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_url: {
      value: cdktf.stringToHclTerraform(struct!.statusUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IcapprofileNsxDefenderConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IcapprofileNsxDefenderConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statusUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusUrl = this._statusUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IcapprofileNsxDefenderConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._statusUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._statusUrl = value.statusUrl;
    }
  }

  // status_url - computed: false, optional: true, required: false
  private _statusUrl?: string; 
  public get statusUrl() {
    return this.getStringAttribute('status_url');
  }
  public set statusUrl(value: string) {
    this._statusUrl = value;
  }
  public resetStatusUrl() {
    this._statusUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusUrlInput() {
    return this._statusUrl;
  }
}

export class IcapprofileNsxDefenderConfigList extends cdktf.ComplexList {
  public internalValue? : IcapprofileNsxDefenderConfig[] | cdktf.IResolvable

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
  public get(index: number): IcapprofileNsxDefenderConfigOutputReference {
    return new IcapprofileNsxDefenderConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile avi_icapprofile}
*/
export class Icapprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_icapprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Icapprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Icapprofile to import
  * @param importFromId The id of the existing Icapprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Icapprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_icapprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/icapprofile avi_icapprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IcapprofileConfig
  */
  public constructor(scope: Construct, id: string, config: IcapprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_icapprofile',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allow204 = config.allow204;
    this._bufferSize = config.bufferSize;
    this._bufferSizeExceedAction = config.bufferSizeExceedAction;
    this._cloudRef = config.cloudRef;
    this._description = config.description;
    this._enablePreview = config.enablePreview;
    this._failAction = config.failAction;
    this._id = config.id;
    this._name = config.name;
    this._poolGroupRef = config.poolGroupRef;
    this._previewSize = config.previewSize;
    this._responseTimeout = config.responseTimeout;
    this._serviceUri = config.serviceUri;
    this._slowResponseWarningThreshold = config.slowResponseWarningThreshold;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._vendor = config.vendor;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._nsxDefenderConfig.internalValue = config.nsxDefenderConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_204 - computed: false, optional: true, required: false
  private _allow204?: string; 
  public get allow204() {
    return this.getStringAttribute('allow_204');
  }
  public set allow204(value: string) {
    this._allow204 = value;
  }
  public resetAllow204() {
    this._allow204 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allow204Input() {
    return this._allow204;
  }

  // buffer_size - computed: false, optional: true, required: false
  private _bufferSize?: string; 
  public get bufferSize() {
    return this.getStringAttribute('buffer_size');
  }
  public set bufferSize(value: string) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize;
  }

  // buffer_size_exceed_action - computed: false, optional: true, required: false
  private _bufferSizeExceedAction?: string; 
  public get bufferSizeExceedAction() {
    return this.getStringAttribute('buffer_size_exceed_action');
  }
  public set bufferSizeExceedAction(value: string) {
    this._bufferSizeExceedAction = value;
  }
  public resetBufferSizeExceedAction() {
    this._bufferSizeExceedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeExceedActionInput() {
    return this._bufferSizeExceedAction;
  }

  // cloud_ref - computed: true, optional: true, required: false
  private _cloudRef?: string; 
  public get cloudRef() {
    return this.getStringAttribute('cloud_ref');
  }
  public set cloudRef(value: string) {
    this._cloudRef = value;
  }
  public resetCloudRef() {
    this._cloudRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRefInput() {
    return this._cloudRef;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_preview - computed: false, optional: true, required: false
  private _enablePreview?: string; 
  public get enablePreview() {
    return this.getStringAttribute('enable_preview');
  }
  public set enablePreview(value: string) {
    this._enablePreview = value;
  }
  public resetEnablePreview() {
    this._enablePreview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePreviewInput() {
    return this._enablePreview;
  }

  // fail_action - computed: false, optional: true, required: false
  private _failAction?: string; 
  public get failAction() {
    return this.getStringAttribute('fail_action');
  }
  public set failAction(value: string) {
    this._failAction = value;
  }
  public resetFailAction() {
    this._failAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failActionInput() {
    return this._failAction;
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

  // pool_group_ref - computed: false, optional: false, required: true
  private _poolGroupRef?: string; 
  public get poolGroupRef() {
    return this.getStringAttribute('pool_group_ref');
  }
  public set poolGroupRef(value: string) {
    this._poolGroupRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolGroupRefInput() {
    return this._poolGroupRef;
  }

  // preview_size - computed: false, optional: true, required: false
  private _previewSize?: string; 
  public get previewSize() {
    return this.getStringAttribute('preview_size');
  }
  public set previewSize(value: string) {
    this._previewSize = value;
  }
  public resetPreviewSize() {
    this._previewSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewSizeInput() {
    return this._previewSize;
  }

  // response_timeout - computed: false, optional: true, required: false
  private _responseTimeout?: string; 
  public get responseTimeout() {
    return this.getStringAttribute('response_timeout');
  }
  public set responseTimeout(value: string) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
  }

  // service_uri - computed: false, optional: false, required: true
  private _serviceUri?: string; 
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }
  public set serviceUri(value: string) {
    this._serviceUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUriInput() {
    return this._serviceUri;
  }

  // slow_response_warning_threshold - computed: false, optional: true, required: false
  private _slowResponseWarningThreshold?: string; 
  public get slowResponseWarningThreshold() {
    return this.getStringAttribute('slow_response_warning_threshold');
  }
  public set slowResponseWarningThreshold(value: string) {
    this._slowResponseWarningThreshold = value;
  }
  public resetSlowResponseWarningThreshold() {
    this._slowResponseWarningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowResponseWarningThresholdInput() {
    return this._slowResponseWarningThreshold;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new IcapprofileConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: IcapprofileConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // nsx_defender_config - computed: false, optional: true, required: false
  private _nsxDefenderConfig = new IcapprofileNsxDefenderConfigList(this, "nsx_defender_config", true);
  public get nsxDefenderConfig() {
    return this._nsxDefenderConfig;
  }
  public putNsxDefenderConfig(value: IcapprofileNsxDefenderConfig[] | cdktf.IResolvable) {
    this._nsxDefenderConfig.internalValue = value;
  }
  public resetNsxDefenderConfig() {
    this._nsxDefenderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxDefenderConfigInput() {
    return this._nsxDefenderConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_204: cdktf.stringToTerraform(this._allow204),
      buffer_size: cdktf.stringToTerraform(this._bufferSize),
      buffer_size_exceed_action: cdktf.stringToTerraform(this._bufferSizeExceedAction),
      cloud_ref: cdktf.stringToTerraform(this._cloudRef),
      description: cdktf.stringToTerraform(this._description),
      enable_preview: cdktf.stringToTerraform(this._enablePreview),
      fail_action: cdktf.stringToTerraform(this._failAction),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pool_group_ref: cdktf.stringToTerraform(this._poolGroupRef),
      preview_size: cdktf.stringToTerraform(this._previewSize),
      response_timeout: cdktf.stringToTerraform(this._responseTimeout),
      service_uri: cdktf.stringToTerraform(this._serviceUri),
      slow_response_warning_threshold: cdktf.stringToTerraform(this._slowResponseWarningThreshold),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      vendor: cdktf.stringToTerraform(this._vendor),
      configpb_attributes: cdktf.listMapper(icapprofileConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      nsx_defender_config: cdktf.listMapper(icapprofileNsxDefenderConfigToTerraform, true)(this._nsxDefenderConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_204: {
        value: cdktf.stringToHclTerraform(this._allow204),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      buffer_size: {
        value: cdktf.stringToHclTerraform(this._bufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      buffer_size_exceed_action: {
        value: cdktf.stringToHclTerraform(this._bufferSizeExceedAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_ref: {
        value: cdktf.stringToHclTerraform(this._cloudRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_preview: {
        value: cdktf.stringToHclTerraform(this._enablePreview),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_action: {
        value: cdktf.stringToHclTerraform(this._failAction),
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
      pool_group_ref: {
        value: cdktf.stringToHclTerraform(this._poolGroupRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preview_size: {
        value: cdktf.stringToHclTerraform(this._previewSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_timeout: {
        value: cdktf.stringToHclTerraform(this._responseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_uri: {
        value: cdktf.stringToHclTerraform(this._serviceUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slow_response_warning_threshold: {
        value: cdktf.stringToHclTerraform(this._slowResponseWarningThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor: {
        value: cdktf.stringToHclTerraform(this._vendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(icapprofileConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IcapprofileConfigpbAttributesList",
      },
      nsx_defender_config: {
        value: cdktf.listMapperHcl(icapprofileNsxDefenderConfigToHclTerraform, true)(this._nsxDefenderConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IcapprofileNsxDefenderConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
