// https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#id Storageprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Default setting is true.
  * 				Set to false indicates this storage profile is not the default profile for the service domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#is_default Storageprofile#is_default}
  */
  readonly isDefault: boolean | cdktf.IResolvable;
  /**
  * Name of the service instance: Maximum length of 200 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#name Storageprofile#name}
  */
  readonly name: string;
  /**
  * ID of the Service Domain to which this Storage Profile belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#service_domain_id Storageprofile#service_domain_id}
  */
  readonly serviceDomainId: string;
  /**
  * Type of the Storage Profile, auto-computed. No input required for this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#type Storageprofile#type}
  */
  readonly type?: string;
  /**
  * ebs_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#ebs_storage_config Storageprofile#ebs_storage_config}
  */
  readonly ebsStorageConfig?: StorageprofileEbsStorageConfig;
  /**
  * nutanix_volumes_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#nutanix_volumes_config Storageprofile#nutanix_volumes_config}
  */
  readonly nutanixVolumesConfig?: StorageprofileNutanixVolumesConfig;
}
export interface StorageprofileEbsStorageConfig {
  /**
  * Set to true if the data in the volume should be encrypted. By default this value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#encrypted Storageprofile#encrypted}
  */
  readonly encrypted?: string;
  /**
  * Input / output operations per second, measured in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#iops_per_gb Storageprofile#iops_per_gb}
  */
  readonly iopsPerGb: string;
  /**
  * Type of the EBS volume. For example, gp2, gp3, io1, io2, st1, sc1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#type Storageprofile#type}
  */
  readonly type: string;
}

export function storageprofileEbsStorageConfigToTerraform(struct?: StorageprofileEbsStorageConfigOutputReference | StorageprofileEbsStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    iops_per_gb: cdktf.stringToTerraform(struct!.iopsPerGb),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function storageprofileEbsStorageConfigToHclTerraform(struct?: StorageprofileEbsStorageConfigOutputReference | StorageprofileEbsStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted: {
      value: cdktf.stringToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iops_per_gb: {
      value: cdktf.stringToHclTerraform(struct!.iopsPerGb),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageprofileEbsStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageprofileEbsStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._iopsPerGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.iopsPerGb = this._iopsPerGb;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageprofileEbsStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encrypted = undefined;
      this._iopsPerGb = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encrypted = value.encrypted;
      this._iopsPerGb = value.iopsPerGb;
      this._type = value.type;
    }
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // iops_per_gb - computed: false, optional: false, required: true
  private _iopsPerGb?: string; 
  public get iopsPerGb() {
    return this.getStringAttribute('iops_per_gb');
  }
  public set iopsPerGb(value: string) {
    this._iopsPerGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsPerGbInput() {
    return this._iopsPerGb;
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
}
export interface StorageprofileNutanixVolumesConfig {
  /**
  * IPv4 data services address used by Nutanix Volumes.
  * 							Nutanix Volumes is a load-balanced iSCSI target storage feature of AOS.
  * 							You can obtain this field value by logging in to the Nutanix Prism console.
  * 							In the Prism web console, see Cluster Details to get the cluster data services IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#data_services_ip Storageprofile#data_services_ip}
  */
  readonly dataServicesIp: string;
  /**
  * Data services default port 3260.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#data_services_port Storageprofile#data_services_port}
  */
  readonly dataServicesPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#flash_mode Storageprofile#flash_mode}
  */
  readonly flashMode?: boolean | cdktf.IResolvable;
  /**
  * Prism Element cluster default port 9440.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#prism_element_cluster_port Storageprofile#prism_element_cluster_port}
  */
  readonly prismElementClusterPort?: number;
  /**
  * This field sets a logical IP address for the cluster.
  * 							You can obtain this field value by logging in to the Nutanix Prism console. 
  * 							In the Prism web console, see Cluster Details to get the cluster virtual IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#prism_element_cluster_vip Storageprofile#prism_element_cluster_vip}
  */
  readonly prismElementClusterVip: string;
  /**
  * Password for the Prism element cluster.
  * 							You can obtain the credentials by contacting your Prism Element cluster administrator if you don't have them already.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#prism_element_password Storageprofile#prism_element_password}
  */
  readonly prismElementPassword: string;
  /**
  * Name of the storage container: The maximum length is 75 characters.
  * 							Allowed characters are uppercase and lowercase standard Latin letters (A-Z and a-z), Simplified Chinese, decimal digits (0-9), dots (.), hyphens (-), and underscores (_).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#prism_element_storage_container_name Storageprofile#prism_element_storage_container_name}
  */
  readonly prismElementStorageContainerName: string;
  /**
  * User name for the Prism element cluster.
  * 							You can obtain the credentials by contacting your Prism Element cluster administrator if you don't have them already.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#prism_element_username Storageprofile#prism_element_username}
  */
  readonly prismElementUsername: string;
}

export function storageprofileNutanixVolumesConfigToTerraform(struct?: StorageprofileNutanixVolumesConfigOutputReference | StorageprofileNutanixVolumesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_services_ip: cdktf.stringToTerraform(struct!.dataServicesIp),
    data_services_port: cdktf.numberToTerraform(struct!.dataServicesPort),
    flash_mode: cdktf.booleanToTerraform(struct!.flashMode),
    prism_element_cluster_port: cdktf.numberToTerraform(struct!.prismElementClusterPort),
    prism_element_cluster_vip: cdktf.stringToTerraform(struct!.prismElementClusterVip),
    prism_element_password: cdktf.stringToTerraform(struct!.prismElementPassword),
    prism_element_storage_container_name: cdktf.stringToTerraform(struct!.prismElementStorageContainerName),
    prism_element_username: cdktf.stringToTerraform(struct!.prismElementUsername),
  }
}


export function storageprofileNutanixVolumesConfigToHclTerraform(struct?: StorageprofileNutanixVolumesConfigOutputReference | StorageprofileNutanixVolumesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_services_ip: {
      value: cdktf.stringToHclTerraform(struct!.dataServicesIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_services_port: {
      value: cdktf.numberToHclTerraform(struct!.dataServicesPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flash_mode: {
      value: cdktf.booleanToHclTerraform(struct!.flashMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prism_element_cluster_port: {
      value: cdktf.numberToHclTerraform(struct!.prismElementClusterPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prism_element_cluster_vip: {
      value: cdktf.stringToHclTerraform(struct!.prismElementClusterVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prism_element_password: {
      value: cdktf.stringToHclTerraform(struct!.prismElementPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prism_element_storage_container_name: {
      value: cdktf.stringToHclTerraform(struct!.prismElementStorageContainerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prism_element_username: {
      value: cdktf.stringToHclTerraform(struct!.prismElementUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageprofileNutanixVolumesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageprofileNutanixVolumesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataServicesIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServicesIp = this._dataServicesIp;
    }
    if (this._dataServicesPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServicesPort = this._dataServicesPort;
    }
    if (this._flashMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.flashMode = this._flashMode;
    }
    if (this._prismElementClusterPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.prismElementClusterPort = this._prismElementClusterPort;
    }
    if (this._prismElementClusterVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.prismElementClusterVip = this._prismElementClusterVip;
    }
    if (this._prismElementPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.prismElementPassword = this._prismElementPassword;
    }
    if (this._prismElementStorageContainerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.prismElementStorageContainerName = this._prismElementStorageContainerName;
    }
    if (this._prismElementUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.prismElementUsername = this._prismElementUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageprofileNutanixVolumesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataServicesIp = undefined;
      this._dataServicesPort = undefined;
      this._flashMode = undefined;
      this._prismElementClusterPort = undefined;
      this._prismElementClusterVip = undefined;
      this._prismElementPassword = undefined;
      this._prismElementStorageContainerName = undefined;
      this._prismElementUsername = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataServicesIp = value.dataServicesIp;
      this._dataServicesPort = value.dataServicesPort;
      this._flashMode = value.flashMode;
      this._prismElementClusterPort = value.prismElementClusterPort;
      this._prismElementClusterVip = value.prismElementClusterVip;
      this._prismElementPassword = value.prismElementPassword;
      this._prismElementStorageContainerName = value.prismElementStorageContainerName;
      this._prismElementUsername = value.prismElementUsername;
    }
  }

  // data_services_ip - computed: false, optional: false, required: true
  private _dataServicesIp?: string; 
  public get dataServicesIp() {
    return this.getStringAttribute('data_services_ip');
  }
  public set dataServicesIp(value: string) {
    this._dataServicesIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataServicesIpInput() {
    return this._dataServicesIp;
  }

  // data_services_port - computed: false, optional: true, required: false
  private _dataServicesPort?: number; 
  public get dataServicesPort() {
    return this.getNumberAttribute('data_services_port');
  }
  public set dataServicesPort(value: number) {
    this._dataServicesPort = value;
  }
  public resetDataServicesPort() {
    this._dataServicesPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataServicesPortInput() {
    return this._dataServicesPort;
  }

  // flash_mode - computed: false, optional: true, required: false
  private _flashMode?: boolean | cdktf.IResolvable; 
  public get flashMode() {
    return this.getBooleanAttribute('flash_mode');
  }
  public set flashMode(value: boolean | cdktf.IResolvable) {
    this._flashMode = value;
  }
  public resetFlashMode() {
    this._flashMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flashModeInput() {
    return this._flashMode;
  }

  // prism_element_cluster_port - computed: false, optional: true, required: false
  private _prismElementClusterPort?: number; 
  public get prismElementClusterPort() {
    return this.getNumberAttribute('prism_element_cluster_port');
  }
  public set prismElementClusterPort(value: number) {
    this._prismElementClusterPort = value;
  }
  public resetPrismElementClusterPort() {
    this._prismElementClusterPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prismElementClusterPortInput() {
    return this._prismElementClusterPort;
  }

  // prism_element_cluster_vip - computed: false, optional: false, required: true
  private _prismElementClusterVip?: string; 
  public get prismElementClusterVip() {
    return this.getStringAttribute('prism_element_cluster_vip');
  }
  public set prismElementClusterVip(value: string) {
    this._prismElementClusterVip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prismElementClusterVipInput() {
    return this._prismElementClusterVip;
  }

  // prism_element_password - computed: false, optional: false, required: true
  private _prismElementPassword?: string; 
  public get prismElementPassword() {
    return this.getStringAttribute('prism_element_password');
  }
  public set prismElementPassword(value: string) {
    this._prismElementPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prismElementPasswordInput() {
    return this._prismElementPassword;
  }

  // prism_element_storage_container_name - computed: false, optional: false, required: true
  private _prismElementStorageContainerName?: string; 
  public get prismElementStorageContainerName() {
    return this.getStringAttribute('prism_element_storage_container_name');
  }
  public set prismElementStorageContainerName(value: string) {
    this._prismElementStorageContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prismElementStorageContainerNameInput() {
    return this._prismElementStorageContainerName;
  }

  // prism_element_username - computed: false, optional: false, required: true
  private _prismElementUsername?: string; 
  public get prismElementUsername() {
    return this.getStringAttribute('prism_element_username');
  }
  public set prismElementUsername(value: string) {
    this._prismElementUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prismElementUsernameInput() {
    return this._prismElementUsername;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile nutanixkps_storageprofile}
*/
export class Storageprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanixkps_storageprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Storageprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Storageprofile to import
  * @param importFromId The id of the existing Storageprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Storageprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanixkps_storageprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanixkps/1.1.9/docs/resources/storageprofile nutanixkps_storageprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageprofileConfig
  */
  public constructor(scope: Construct, id: string, config: StorageprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanixkps_storageprofile',
      terraformGeneratorMetadata: {
        providerName: 'nutanixkps',
        providerVersion: '1.1.9',
        providerVersionConstraint: '1.1.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._name = config.name;
    this._serviceDomainId = config.serviceDomainId;
    this._type = config.type;
    this._ebsStorageConfig.internalValue = config.ebsStorageConfig;
    this._nutanixVolumesConfig.internalValue = config.nutanixVolumesConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_default - computed: false, optional: false, required: true
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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

  // service_domain_id - computed: false, optional: false, required: true
  private _serviceDomainId?: string; 
  public get serviceDomainId() {
    return this.getStringAttribute('service_domain_id');
  }
  public set serviceDomainId(value: string) {
    this._serviceDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDomainIdInput() {
    return this._serviceDomainId;
  }

  // type - computed: true, optional: true, required: false
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

  // ebs_storage_config - computed: false, optional: true, required: false
  private _ebsStorageConfig = new StorageprofileEbsStorageConfigOutputReference(this, "ebs_storage_config");
  public get ebsStorageConfig() {
    return this._ebsStorageConfig;
  }
  public putEbsStorageConfig(value: StorageprofileEbsStorageConfig) {
    this._ebsStorageConfig.internalValue = value;
  }
  public resetEbsStorageConfig() {
    this._ebsStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsStorageConfigInput() {
    return this._ebsStorageConfig.internalValue;
  }

  // nutanix_volumes_config - computed: false, optional: true, required: false
  private _nutanixVolumesConfig = new StorageprofileNutanixVolumesConfigOutputReference(this, "nutanix_volumes_config");
  public get nutanixVolumesConfig() {
    return this._nutanixVolumesConfig;
  }
  public putNutanixVolumesConfig(value: StorageprofileNutanixVolumesConfig) {
    this._nutanixVolumesConfig.internalValue = value;
  }
  public resetNutanixVolumesConfig() {
    this._nutanixVolumesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nutanixVolumesConfigInput() {
    return this._nutanixVolumesConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      name: cdktf.stringToTerraform(this._name),
      service_domain_id: cdktf.stringToTerraform(this._serviceDomainId),
      type: cdktf.stringToTerraform(this._type),
      ebs_storage_config: storageprofileEbsStorageConfigToTerraform(this._ebsStorageConfig.internalValue),
      nutanix_volumes_config: storageprofileNutanixVolumesConfigToTerraform(this._nutanixVolumesConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_domain_id: {
        value: cdktf.stringToHclTerraform(this._serviceDomainId),
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
      ebs_storage_config: {
        value: storageprofileEbsStorageConfigToHclTerraform(this._ebsStorageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageprofileEbsStorageConfigList",
      },
      nutanix_volumes_config: {
        value: storageprofileNutanixVolumesConfigToHclTerraform(this._nutanixVolumesConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageprofileNutanixVolumesConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
