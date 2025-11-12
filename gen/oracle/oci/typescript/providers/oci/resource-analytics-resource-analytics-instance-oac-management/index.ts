// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceAnalyticsResourceAnalyticsInstanceOacManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#attachment_type ResourceAnalyticsResourceAnalyticsInstanceOacManagement#attachment_type}
  */
  readonly attachmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#enable_oac ResourceAnalyticsResourceAnalyticsInstanceOacManagement#enable_oac}
  */
  readonly enableOac: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#id ResourceAnalyticsResourceAnalyticsInstanceOacManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#resource_analytics_instance_id ResourceAnalyticsResourceAnalyticsInstanceOacManagement#resource_analytics_instance_id}
  */
  readonly resourceAnalyticsInstanceId: string;
  /**
  * attachment_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#attachment_details ResourceAnalyticsResourceAnalyticsInstanceOacManagement#attachment_details}
  */
  readonly attachmentDetails?: ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#timeouts ResourceAnalyticsResourceAnalyticsInstanceOacManagement#timeouts}
  */
  readonly timeouts?: ResourceAnalyticsResourceAnalyticsInstanceOacManagementTimeouts;
}
export interface ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsNetworkDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#nsg_ids ResourceAnalyticsResourceAnalyticsInstanceOacManagement#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#subnet_id ResourceAnalyticsResourceAnalyticsInstanceOacManagement#subnet_id}
  */
  readonly subnetId?: string;
}

export function resourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsNetworkDetailsToTerraform(struct?: ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsNetworkDetailsOutputReference | ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsNetworkDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function resourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsNetworkDetailsToHclTerraform(struct?: ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsNetworkDetailsOutputReference | ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsNetworkDetails): any {
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

export class ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsNetworkDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsNetworkDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsNetworkDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nsgIds = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nsgIds = value.nsgIds;
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
export interface ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#idcs_domain_id ResourceAnalyticsResourceAnalyticsInstanceOacManagement#idcs_domain_id}
  */
  readonly idcsDomainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#license_model ResourceAnalyticsResourceAnalyticsInstanceOacManagement#license_model}
  */
  readonly licenseModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#nsg_ids ResourceAnalyticsResourceAnalyticsInstanceOacManagement#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#subnet_id ResourceAnalyticsResourceAnalyticsInstanceOacManagement#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * network_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#network_details ResourceAnalyticsResourceAnalyticsInstanceOacManagement#network_details}
  */
  readonly networkDetails?: ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsNetworkDetails;
}

export function resourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsToTerraform(struct?: ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsOutputReference | ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idcs_domain_id: cdktf.stringToTerraform(struct!.idcsDomainId),
    license_model: cdktf.stringToTerraform(struct!.licenseModel),
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    network_details: resourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsNetworkDetailsToTerraform(struct!.networkDetails),
  }
}


export function resourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsToHclTerraform(struct?: ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsOutputReference | ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idcs_domain_id: {
      value: cdktf.stringToHclTerraform(struct!.idcsDomainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_model: {
      value: cdktf.stringToHclTerraform(struct!.licenseModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_details: {
      value: resourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsNetworkDetailsToHclTerraform(struct!.networkDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsNetworkDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idcsDomainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idcsDomainId = this._idcsDomainId;
    }
    if (this._licenseModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseModel = this._licenseModel;
    }
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._networkDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDetails = this._networkDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idcsDomainId = undefined;
      this._licenseModel = undefined;
      this._nsgIds = undefined;
      this._subnetId = undefined;
      this._networkDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idcsDomainId = value.idcsDomainId;
      this._licenseModel = value.licenseModel;
      this._nsgIds = value.nsgIds;
      this._subnetId = value.subnetId;
      this._networkDetails.internalValue = value.networkDetails;
    }
  }

  // idcs_domain_id - computed: true, optional: true, required: false
  private _idcsDomainId?: string; 
  public get idcsDomainId() {
    return this.getStringAttribute('idcs_domain_id');
  }
  public set idcsDomainId(value: string) {
    this._idcsDomainId = value;
  }
  public resetIdcsDomainId() {
    this._idcsDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsDomainIdInput() {
    return this._idcsDomainId;
  }

  // license_model - computed: true, optional: true, required: false
  private _licenseModel?: string; 
  public get licenseModel() {
    return this.getStringAttribute('license_model');
  }
  public set licenseModel(value: string) {
    this._licenseModel = value;
  }
  public resetLicenseModel() {
    this._licenseModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseModelInput() {
    return this._licenseModel;
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

  // network_details - computed: false, optional: true, required: false
  private _networkDetails = new ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsNetworkDetailsOutputReference(this, "network_details");
  public get networkDetails() {
    return this._networkDetails;
  }
  public putNetworkDetails(value: ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsNetworkDetails) {
    this._networkDetails.internalValue = value;
  }
  public resetNetworkDetails() {
    this._networkDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDetailsInput() {
    return this._networkDetails.internalValue;
  }
}
export interface ResourceAnalyticsResourceAnalyticsInstanceOacManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#create ResourceAnalyticsResourceAnalyticsInstanceOacManagement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#delete ResourceAnalyticsResourceAnalyticsInstanceOacManagement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#read ResourceAnalyticsResourceAnalyticsInstanceOacManagement#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#update ResourceAnalyticsResourceAnalyticsInstanceOacManagement#update}
  */
  readonly update?: string;
}

export function resourceAnalyticsResourceAnalyticsInstanceOacManagementTimeoutsToTerraform(struct?: ResourceAnalyticsResourceAnalyticsInstanceOacManagementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function resourceAnalyticsResourceAnalyticsInstanceOacManagementTimeoutsToHclTerraform(struct?: ResourceAnalyticsResourceAnalyticsInstanceOacManagementTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class ResourceAnalyticsResourceAnalyticsInstanceOacManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceAnalyticsResourceAnalyticsInstanceOacManagementTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceAnalyticsResourceAnalyticsInstanceOacManagementTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management oci_resource_analytics_resource_analytics_instance_oac_management}
*/
export class ResourceAnalyticsResourceAnalyticsInstanceOacManagement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_resource_analytics_resource_analytics_instance_oac_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceAnalyticsResourceAnalyticsInstanceOacManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceAnalyticsResourceAnalyticsInstanceOacManagement to import
  * @param importFromId The id of the existing ResourceAnalyticsResourceAnalyticsInstanceOacManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceAnalyticsResourceAnalyticsInstanceOacManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_resource_analytics_resource_analytics_instance_oac_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/resource_analytics_resource_analytics_instance_oac_management oci_resource_analytics_resource_analytics_instance_oac_management} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceAnalyticsResourceAnalyticsInstanceOacManagementConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceAnalyticsResourceAnalyticsInstanceOacManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_resource_analytics_resource_analytics_instance_oac_management',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attachmentType = config.attachmentType;
    this._enableOac = config.enableOac;
    this._id = config.id;
    this._resourceAnalyticsInstanceId = config.resourceAnalyticsInstanceId;
    this._attachmentDetails.internalValue = config.attachmentDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_type - computed: true, optional: true, required: false
  private _attachmentType?: string; 
  public get attachmentType() {
    return this.getStringAttribute('attachment_type');
  }
  public set attachmentType(value: string) {
    this._attachmentType = value;
  }
  public resetAttachmentType() {
    this._attachmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentTypeInput() {
    return this._attachmentType;
  }

  // enable_oac - computed: false, optional: false, required: true
  private _enableOac?: boolean | cdktf.IResolvable; 
  public get enableOac() {
    return this.getBooleanAttribute('enable_oac');
  }
  public set enableOac(value: boolean | cdktf.IResolvable) {
    this._enableOac = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOacInput() {
    return this._enableOac;
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

  // resource_analytics_instance_id - computed: false, optional: false, required: true
  private _resourceAnalyticsInstanceId?: string; 
  public get resourceAnalyticsInstanceId() {
    return this.getStringAttribute('resource_analytics_instance_id');
  }
  public set resourceAnalyticsInstanceId(value: string) {
    this._resourceAnalyticsInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAnalyticsInstanceIdInput() {
    return this._resourceAnalyticsInstanceId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // attachment_details - computed: false, optional: true, required: false
  private _attachmentDetails = new ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsOutputReference(this, "attachment_details");
  public get attachmentDetails() {
    return this._attachmentDetails;
  }
  public putAttachmentDetails(value: ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetails) {
    this._attachmentDetails.internalValue = value;
  }
  public resetAttachmentDetails() {
    this._attachmentDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentDetailsInput() {
    return this._attachmentDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ResourceAnalyticsResourceAnalyticsInstanceOacManagementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceAnalyticsResourceAnalyticsInstanceOacManagementTimeouts) {
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
      attachment_type: cdktf.stringToTerraform(this._attachmentType),
      enable_oac: cdktf.booleanToTerraform(this._enableOac),
      id: cdktf.stringToTerraform(this._id),
      resource_analytics_instance_id: cdktf.stringToTerraform(this._resourceAnalyticsInstanceId),
      attachment_details: resourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsToTerraform(this._attachmentDetails.internalValue),
      timeouts: resourceAnalyticsResourceAnalyticsInstanceOacManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attachment_type: {
        value: cdktf.stringToHclTerraform(this._attachmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_oac: {
        value: cdktf.booleanToHclTerraform(this._enableOac),
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
      resource_analytics_instance_id: {
        value: cdktf.stringToHclTerraform(this._resourceAnalyticsInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attachment_details: {
        value: resourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsToHclTerraform(this._attachmentDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceAnalyticsResourceAnalyticsInstanceOacManagementAttachmentDetailsList",
      },
      timeouts: {
        value: resourceAnalyticsResourceAnalyticsInstanceOacManagementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceAnalyticsResourceAnalyticsInstanceOacManagementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
