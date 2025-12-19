// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslUpdateCertificateInstanceOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to allow downloading, if you choose to upload the certificate, you can configure this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation#allow_download SslUpdateCertificateInstanceOperation#allow_download}
  */
  readonly allowDownload?: boolean | cdktf.IResolvable;
  /**
  * Update new certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation#certificate_id SslUpdateCertificateInstanceOperation#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Certificate private key. If you upload the certificate public key, CertificateId does not need to be passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation#certificate_private_key SslUpdateCertificateInstanceOperation#certificate_private_key}
  */
  readonly certificatePrivateKey?: string;
  /**
  * Certificate public key. If you upload the certificate public key, CertificateId does not need to be passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation#certificate_public_key SslUpdateCertificateInstanceOperation#certificate_public_key}
  */
  readonly certificatePublicKey?: string;
  /**
  * Whether to ignore expiration reminders for old certificates 0: Do not ignore notifications. 1: Ignore the notification and ignore the OldCertificateId expiration reminder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation#expiring_notification_switch SslUpdateCertificateInstanceOperation#expiring_notification_switch}
  */
  readonly expiringNotificationSwitch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation#id SslUpdateCertificateInstanceOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Update the original certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation#old_certificate_id SslUpdateCertificateInstanceOperation#old_certificate_id}
  */
  readonly oldCertificateId: string;
  /**
  * Project ID, if you choose to upload the certificate, you can configure this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation#project_id SslUpdateCertificateInstanceOperation#project_id}
  */
  readonly projectId?: number;
  /**
  * Whether the same certificate is allowed to be uploaded repeatedly. If you choose to upload the certificate, you can configure this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation#repeatable SslUpdateCertificateInstanceOperation#repeatable}
  */
  readonly repeatable?: boolean | cdktf.IResolvable;
  /**
  * The resource type that needs to be deployed. The parameter value is optional: clb, cdn, waf, live, ddos, teo, apigateway, vod, tke, tcb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation#resource_types SslUpdateCertificateInstanceOperation#resource_types}
  */
  readonly resourceTypes: string[];
  /**
  * resource_types_regions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation#resource_types_regions SslUpdateCertificateInstanceOperation#resource_types_regions}
  */
  readonly resourceTypesRegions?: SslUpdateCertificateInstanceOperationResourceTypesRegions[] | cdktf.IResolvable;
}
export interface SslUpdateCertificateInstanceOperationResourceTypesRegions {
  /**
  * Region list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation#regions SslUpdateCertificateInstanceOperation#regions}
  */
  readonly regions?: string[];
  /**
  * Cloud resource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation#resource_type SslUpdateCertificateInstanceOperation#resource_type}
  */
  readonly resourceType?: string;
}

export function sslUpdateCertificateInstanceOperationResourceTypesRegionsToTerraform(struct?: SslUpdateCertificateInstanceOperationResourceTypesRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function sslUpdateCertificateInstanceOperationResourceTypesRegionsToHclTerraform(struct?: SslUpdateCertificateInstanceOperationResourceTypesRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SslUpdateCertificateInstanceOperationResourceTypesRegionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SslUpdateCertificateInstanceOperationResourceTypesRegions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SslUpdateCertificateInstanceOperationResourceTypesRegions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regions = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regions = value.regions;
      this._resourceType = value.resourceType;
    }
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class SslUpdateCertificateInstanceOperationResourceTypesRegionsList extends cdktf.ComplexList {
  public internalValue? : SslUpdateCertificateInstanceOperationResourceTypesRegions[] | cdktf.IResolvable

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
  public get(index: number): SslUpdateCertificateInstanceOperationResourceTypesRegionsOutputReference {
    return new SslUpdateCertificateInstanceOperationResourceTypesRegionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation tencentcloud_ssl_update_certificate_instance_operation}
*/
export class SslUpdateCertificateInstanceOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ssl_update_certificate_instance_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslUpdateCertificateInstanceOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslUpdateCertificateInstanceOperation to import
  * @param importFromId The id of the existing SslUpdateCertificateInstanceOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslUpdateCertificateInstanceOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ssl_update_certificate_instance_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/ssl_update_certificate_instance_operation tencentcloud_ssl_update_certificate_instance_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslUpdateCertificateInstanceOperationConfig
  */
  public constructor(scope: Construct, id: string, config: SslUpdateCertificateInstanceOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ssl_update_certificate_instance_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDownload = config.allowDownload;
    this._certificateId = config.certificateId;
    this._certificatePrivateKey = config.certificatePrivateKey;
    this._certificatePublicKey = config.certificatePublicKey;
    this._expiringNotificationSwitch = config.expiringNotificationSwitch;
    this._id = config.id;
    this._oldCertificateId = config.oldCertificateId;
    this._projectId = config.projectId;
    this._repeatable = config.repeatable;
    this._resourceTypes = config.resourceTypes;
    this._resourceTypesRegions.internalValue = config.resourceTypesRegions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_download - computed: false, optional: true, required: false
  private _allowDownload?: boolean | cdktf.IResolvable; 
  public get allowDownload() {
    return this.getBooleanAttribute('allow_download');
  }
  public set allowDownload(value: boolean | cdktf.IResolvable) {
    this._allowDownload = value;
  }
  public resetAllowDownload() {
    this._allowDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDownloadInput() {
    return this._allowDownload;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // certificate_private_key - computed: false, optional: true, required: false
  private _certificatePrivateKey?: string; 
  public get certificatePrivateKey() {
    return this.getStringAttribute('certificate_private_key');
  }
  public set certificatePrivateKey(value: string) {
    this._certificatePrivateKey = value;
  }
  public resetCertificatePrivateKey() {
    this._certificatePrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePrivateKeyInput() {
    return this._certificatePrivateKey;
  }

  // certificate_public_key - computed: false, optional: true, required: false
  private _certificatePublicKey?: string; 
  public get certificatePublicKey() {
    return this.getStringAttribute('certificate_public_key');
  }
  public set certificatePublicKey(value: string) {
    this._certificatePublicKey = value;
  }
  public resetCertificatePublicKey() {
    this._certificatePublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePublicKeyInput() {
    return this._certificatePublicKey;
  }

  // expiring_notification_switch - computed: false, optional: true, required: false
  private _expiringNotificationSwitch?: number; 
  public get expiringNotificationSwitch() {
    return this.getNumberAttribute('expiring_notification_switch');
  }
  public set expiringNotificationSwitch(value: number) {
    this._expiringNotificationSwitch = value;
  }
  public resetExpiringNotificationSwitch() {
    this._expiringNotificationSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiringNotificationSwitchInput() {
    return this._expiringNotificationSwitch;
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

  // old_certificate_id - computed: false, optional: false, required: true
  private _oldCertificateId?: string; 
  public get oldCertificateId() {
    return this.getStringAttribute('old_certificate_id');
  }
  public set oldCertificateId(value: string) {
    this._oldCertificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oldCertificateIdInput() {
    return this._oldCertificateId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // repeatable - computed: false, optional: true, required: false
  private _repeatable?: boolean | cdktf.IResolvable; 
  public get repeatable() {
    return this.getBooleanAttribute('repeatable');
  }
  public set repeatable(value: boolean | cdktf.IResolvable) {
    this._repeatable = value;
  }
  public resetRepeatable() {
    this._repeatable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatableInput() {
    return this._repeatable;
  }

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('resource_types'));
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // resource_types_regions - computed: false, optional: true, required: false
  private _resourceTypesRegions = new SslUpdateCertificateInstanceOperationResourceTypesRegionsList(this, "resource_types_regions", false);
  public get resourceTypesRegions() {
    return this._resourceTypesRegions;
  }
  public putResourceTypesRegions(value: SslUpdateCertificateInstanceOperationResourceTypesRegions[] | cdktf.IResolvable) {
    this._resourceTypesRegions.internalValue = value;
  }
  public resetResourceTypesRegions() {
    this._resourceTypesRegions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesRegionsInput() {
    return this._resourceTypesRegions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_download: cdktf.booleanToTerraform(this._allowDownload),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      certificate_private_key: cdktf.stringToTerraform(this._certificatePrivateKey),
      certificate_public_key: cdktf.stringToTerraform(this._certificatePublicKey),
      expiring_notification_switch: cdktf.numberToTerraform(this._expiringNotificationSwitch),
      id: cdktf.stringToTerraform(this._id),
      old_certificate_id: cdktf.stringToTerraform(this._oldCertificateId),
      project_id: cdktf.numberToTerraform(this._projectId),
      repeatable: cdktf.booleanToTerraform(this._repeatable),
      resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceTypes),
      resource_types_regions: cdktf.listMapper(sslUpdateCertificateInstanceOperationResourceTypesRegionsToTerraform, true)(this._resourceTypesRegions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_download: {
        value: cdktf.booleanToHclTerraform(this._allowDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_private_key: {
        value: cdktf.stringToHclTerraform(this._certificatePrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_public_key: {
        value: cdktf.stringToHclTerraform(this._certificatePublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiring_notification_switch: {
        value: cdktf.numberToHclTerraform(this._expiringNotificationSwitch),
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
      old_certificate_id: {
        value: cdktf.stringToHclTerraform(this._oldCertificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      repeatable: {
        value: cdktf.booleanToHclTerraform(this._repeatable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resourceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      resource_types_regions: {
        value: cdktf.listMapperHcl(sslUpdateCertificateInstanceOperationResourceTypesRegionsToHclTerraform, true)(this._resourceTypesRegions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SslUpdateCertificateInstanceOperationResourceTypesRegionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
