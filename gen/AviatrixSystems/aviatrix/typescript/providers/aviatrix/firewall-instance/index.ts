// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Availability domain for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#availability_domain FirewallInstance#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Advanced option. Bootstrap bucket name. Only available for AWS and GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#bootstrap_bucket_name FirewallInstance#bootstrap_bucket_name}
  */
  readonly bootstrapBucketName?: string;
  /**
  * Advanced option. Bootstrap storage name. Applicable to Azure and Palo Alto Networks VM-Series/Fortinet Series deployment only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#bootstrap_storage_name FirewallInstance#bootstrap_storage_name}
  */
  readonly bootstrapStorageName?: string;
  /**
  * Advanced option. Bootstrap storage name. Applicable to Azure and Fortinet Series deployment only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#container_folder FirewallInstance#container_folder}
  */
  readonly containerFolder?: string;
  /**
  * Egress Interface Subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#egress_subnet FirewallInstance#egress_subnet}
  */
  readonly egressSubnet: string;
  /**
  * Egress VPC ID. Required for GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#egress_vpc_id FirewallInstance#egress_vpc_id}
  */
  readonly egressVpcId?: string;
  /**
  * Fault domain for OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#fault_domain FirewallInstance#fault_domain}
  */
  readonly faultDomain?: string;
  /**
  * Advanced option. File share folder. Applicable to Azure and Palo Alto Networks VM-Series deployment only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#file_share_folder FirewallInstance#file_share_folder}
  */
  readonly fileShareFolder?: string;
  /**
  * Name of the primary FireNet gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#firenet_gw_name FirewallInstance#firenet_gw_name}
  */
  readonly firenetGwName?: string;
  /**
  * One of the AWS AMIs from Palo Alto Networks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#firewall_image FirewallInstance#firewall_image}
  */
  readonly firewallImage: string;
  /**
  * Firewall image ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#firewall_image_id FirewallInstance#firewall_image_id}
  */
  readonly firewallImageId?: string;
  /**
  * Version of firewall image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#firewall_image_version FirewallInstance#firewall_image_version}
  */
  readonly firewallImageVersion?: string;
  /**
  * Name of the firewall instance to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#firewall_name FirewallInstance#firewall_name}
  */
  readonly firewallName: string;
  /**
  * Instance size of the firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#firewall_size FirewallInstance#firewall_size}
  */
  readonly firewallSize: string;
  /**
  * Advanced option. IAM role. Only available for AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#iam_role FirewallInstance#iam_role}
  */
  readonly iamRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#id FirewallInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Applicable to AWS deployment only. AWS Key Pair name. If not provided, a Key Pair will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#key_name FirewallInstance#key_name}
  */
  readonly keyName?: string;
  /**
  * Management Interface Subnet. Required for Palo Alto Networks VM-Series, and required to be empty for Check Point or Fortinet series.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#management_subnet FirewallInstance#management_subnet}
  */
  readonly managementSubnet?: string;
  /**
  * Management VPC ID. Required for GCP Palo Alto Networks VM-Series. Required to be empty for GCP Check Point or Fortinet series.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#management_vpc_id FirewallInstance#management_vpc_id}
  */
  readonly managementVpcId?: string;
  /**
  * Authentication method. Applicable to Azure deployment only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#password FirewallInstance#password}
  */
  readonly password?: string;
  /**
  * Advanced option. Bootstrap storage name. Applicable to Azure and Fortinet Series deployment only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#sas_url_config FirewallInstance#sas_url_config}
  */
  readonly sasUrlConfig?: string;
  /**
  * Advanced option. Bootstrap storage name. Applicable to Azure and Fortinet Series deployment only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#sas_url_license FirewallInstance#sas_url_license}
  */
  readonly sasUrlLicense?: string;
  /**
  * Advanced option. Share directory. Applicable to Azure and Palo Alto Networks VM-Series deployment only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#share_directory FirewallInstance#share_directory}
  */
  readonly shareDirectory?: string;
  /**
  * Advanced option. Bic key. Applicable to Azure and Check Point Series deployment only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#sic_key FirewallInstance#sic_key}
  */
  readonly sicKey?: string;
  /**
  * Authentication method. Applicable to Azure deployment only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#ssh_public_key FirewallInstance#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Advanced option. Storage access key. Applicable to Azure and Palo Alto Networks VM-Series deployment only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#storage_access_key FirewallInstance#storage_access_key}
  */
  readonly storageAccessKey?: string;
  /**
  * A map of tags to assign to the firewall instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#tags FirewallInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Advanced option. Bootstrap storage name. Applicable to Check Point Series and Fortinet Series deployment only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#user_data FirewallInstance#user_data}
  */
  readonly userData?: string;
  /**
  * Applicable to Azure deployment only. 'admin' as a username is not accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#username FirewallInstance#username}
  */
  readonly username?: string;
  /**
  * ID of the Security VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#vpc_id FirewallInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Availability Zone. Only available for AWS, GCP and Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#zone FirewallInstance#zone}
  */
  readonly zone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance aviatrix_firewall_instance}
*/
export class FirewallInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_firewall_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallInstance to import
  * @param importFromId The id of the existing FirewallInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_firewall_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/firewall_instance aviatrix_firewall_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_firewall_instance',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityDomain = config.availabilityDomain;
    this._bootstrapBucketName = config.bootstrapBucketName;
    this._bootstrapStorageName = config.bootstrapStorageName;
    this._containerFolder = config.containerFolder;
    this._egressSubnet = config.egressSubnet;
    this._egressVpcId = config.egressVpcId;
    this._faultDomain = config.faultDomain;
    this._fileShareFolder = config.fileShareFolder;
    this._firenetGwName = config.firenetGwName;
    this._firewallImage = config.firewallImage;
    this._firewallImageId = config.firewallImageId;
    this._firewallImageVersion = config.firewallImageVersion;
    this._firewallName = config.firewallName;
    this._firewallSize = config.firewallSize;
    this._iamRole = config.iamRole;
    this._id = config.id;
    this._keyName = config.keyName;
    this._managementSubnet = config.managementSubnet;
    this._managementVpcId = config.managementVpcId;
    this._password = config.password;
    this._sasUrlConfig = config.sasUrlConfig;
    this._sasUrlLicense = config.sasUrlLicense;
    this._shareDirectory = config.shareDirectory;
    this._sicKey = config.sicKey;
    this._sshPublicKey = config.sshPublicKey;
    this._storageAccessKey = config.storageAccessKey;
    this._tags = config.tags;
    this._userData = config.userData;
    this._username = config.username;
    this._vpcId = config.vpcId;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: true, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // bootstrap_bucket_name - computed: false, optional: true, required: false
  private _bootstrapBucketName?: string; 
  public get bootstrapBucketName() {
    return this.getStringAttribute('bootstrap_bucket_name');
  }
  public set bootstrapBucketName(value: string) {
    this._bootstrapBucketName = value;
  }
  public resetBootstrapBucketName() {
    this._bootstrapBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapBucketNameInput() {
    return this._bootstrapBucketName;
  }

  // bootstrap_storage_name - computed: false, optional: true, required: false
  private _bootstrapStorageName?: string; 
  public get bootstrapStorageName() {
    return this.getStringAttribute('bootstrap_storage_name');
  }
  public set bootstrapStorageName(value: string) {
    this._bootstrapStorageName = value;
  }
  public resetBootstrapStorageName() {
    this._bootstrapStorageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapStorageNameInput() {
    return this._bootstrapStorageName;
  }

  // cloud_type - computed: true, optional: false, required: false
  public get cloudType() {
    return this.getNumberAttribute('cloud_type');
  }

  // container_folder - computed: false, optional: true, required: false
  private _containerFolder?: string; 
  public get containerFolder() {
    return this.getStringAttribute('container_folder');
  }
  public set containerFolder(value: string) {
    this._containerFolder = value;
  }
  public resetContainerFolder() {
    this._containerFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerFolderInput() {
    return this._containerFolder;
  }

  // egress_interface - computed: true, optional: false, required: false
  public get egressInterface() {
    return this.getStringAttribute('egress_interface');
  }

  // egress_subnet - computed: false, optional: false, required: true
  private _egressSubnet?: string; 
  public get egressSubnet() {
    return this.getStringAttribute('egress_subnet');
  }
  public set egressSubnet(value: string) {
    this._egressSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get egressSubnetInput() {
    return this._egressSubnet;
  }

  // egress_vpc_id - computed: false, optional: true, required: false
  private _egressVpcId?: string; 
  public get egressVpcId() {
    return this.getStringAttribute('egress_vpc_id');
  }
  public set egressVpcId(value: string) {
    this._egressVpcId = value;
  }
  public resetEgressVpcId() {
    this._egressVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressVpcIdInput() {
    return this._egressVpcId;
  }

  // fault_domain - computed: true, optional: true, required: false
  private _faultDomain?: string; 
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }
  public set faultDomain(value: string) {
    this._faultDomain = value;
  }
  public resetFaultDomain() {
    this._faultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainInput() {
    return this._faultDomain;
  }

  // file_share_folder - computed: false, optional: true, required: false
  private _fileShareFolder?: string; 
  public get fileShareFolder() {
    return this.getStringAttribute('file_share_folder');
  }
  public set fileShareFolder(value: string) {
    this._fileShareFolder = value;
  }
  public resetFileShareFolder() {
    this._fileShareFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileShareFolderInput() {
    return this._fileShareFolder;
  }

  // firenet_gw_name - computed: false, optional: true, required: false
  private _firenetGwName?: string; 
  public get firenetGwName() {
    return this.getStringAttribute('firenet_gw_name');
  }
  public set firenetGwName(value: string) {
    this._firenetGwName = value;
  }
  public resetFirenetGwName() {
    this._firenetGwName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firenetGwNameInput() {
    return this._firenetGwName;
  }

  // firewall_image - computed: false, optional: false, required: true
  private _firewallImage?: string; 
  public get firewallImage() {
    return this.getStringAttribute('firewall_image');
  }
  public set firewallImage(value: string) {
    this._firewallImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallImageInput() {
    return this._firewallImage;
  }

  // firewall_image_id - computed: true, optional: true, required: false
  private _firewallImageId?: string; 
  public get firewallImageId() {
    return this.getStringAttribute('firewall_image_id');
  }
  public set firewallImageId(value: string) {
    this._firewallImageId = value;
  }
  public resetFirewallImageId() {
    this._firewallImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallImageIdInput() {
    return this._firewallImageId;
  }

  // firewall_image_version - computed: true, optional: true, required: false
  private _firewallImageVersion?: string; 
  public get firewallImageVersion() {
    return this.getStringAttribute('firewall_image_version');
  }
  public set firewallImageVersion(value: string) {
    this._firewallImageVersion = value;
  }
  public resetFirewallImageVersion() {
    this._firewallImageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallImageVersionInput() {
    return this._firewallImageVersion;
  }

  // firewall_name - computed: false, optional: false, required: true
  private _firewallName?: string; 
  public get firewallName() {
    return this.getStringAttribute('firewall_name');
  }
  public set firewallName(value: string) {
    this._firewallName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallNameInput() {
    return this._firewallName;
  }

  // firewall_size - computed: false, optional: false, required: true
  private _firewallSize?: string; 
  public get firewallSize() {
    return this.getStringAttribute('firewall_size');
  }
  public set firewallSize(value: string) {
    this._firewallSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallSizeInput() {
    return this._firewallSize;
  }

  // gcp_vpc_id - computed: true, optional: false, required: false
  public get gcpVpcId() {
    return this.getStringAttribute('gcp_vpc_id');
  }

  // iam_role - computed: false, optional: true, required: false
  private _iamRole?: string; 
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  public resetIamRole() {
    this._iamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole;
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // lan_interface - computed: true, optional: false, required: false
  public get lanInterface() {
    return this.getStringAttribute('lan_interface');
  }

  // management_interface - computed: true, optional: false, required: false
  public get managementInterface() {
    return this.getStringAttribute('management_interface');
  }

  // management_subnet - computed: false, optional: true, required: false
  private _managementSubnet?: string; 
  public get managementSubnet() {
    return this.getStringAttribute('management_subnet');
  }
  public set managementSubnet(value: string) {
    this._managementSubnet = value;
  }
  public resetManagementSubnet() {
    this._managementSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementSubnetInput() {
    return this._managementSubnet;
  }

  // management_vpc_id - computed: false, optional: true, required: false
  private _managementVpcId?: string; 
  public get managementVpcId() {
    return this.getStringAttribute('management_vpc_id');
  }
  public set managementVpcId(value: string) {
    this._managementVpcId = value;
  }
  public resetManagementVpcId() {
    this._managementVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementVpcIdInput() {
    return this._managementVpcId;
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

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // sas_url_config - computed: false, optional: true, required: false
  private _sasUrlConfig?: string; 
  public get sasUrlConfig() {
    return this.getStringAttribute('sas_url_config');
  }
  public set sasUrlConfig(value: string) {
    this._sasUrlConfig = value;
  }
  public resetSasUrlConfig() {
    this._sasUrlConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasUrlConfigInput() {
    return this._sasUrlConfig;
  }

  // sas_url_license - computed: false, optional: true, required: false
  private _sasUrlLicense?: string; 
  public get sasUrlLicense() {
    return this.getStringAttribute('sas_url_license');
  }
  public set sasUrlLicense(value: string) {
    this._sasUrlLicense = value;
  }
  public resetSasUrlLicense() {
    this._sasUrlLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasUrlLicenseInput() {
    return this._sasUrlLicense;
  }

  // share_directory - computed: false, optional: true, required: false
  private _shareDirectory?: string; 
  public get shareDirectory() {
    return this.getStringAttribute('share_directory');
  }
  public set shareDirectory(value: string) {
    this._shareDirectory = value;
  }
  public resetShareDirectory() {
    this._shareDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareDirectoryInput() {
    return this._shareDirectory;
  }

  // sic_key - computed: false, optional: true, required: false
  private _sicKey?: string; 
  public get sicKey() {
    return this.getStringAttribute('sic_key');
  }
  public set sicKey(value: string) {
    this._sicKey = value;
  }
  public resetSicKey() {
    this._sicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sicKeyInput() {
    return this._sicKey;
  }

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // storage_access_key - computed: false, optional: true, required: false
  private _storageAccessKey?: string; 
  public get storageAccessKey() {
    return this.getStringAttribute('storage_access_key');
  }
  public set storageAccessKey(value: string) {
    this._storageAccessKey = value;
  }
  public resetStorageAccessKey() {
    this._storageAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccessKeyInput() {
    return this._storageAccessKey;
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

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      bootstrap_bucket_name: cdktf.stringToTerraform(this._bootstrapBucketName),
      bootstrap_storage_name: cdktf.stringToTerraform(this._bootstrapStorageName),
      container_folder: cdktf.stringToTerraform(this._containerFolder),
      egress_subnet: cdktf.stringToTerraform(this._egressSubnet),
      egress_vpc_id: cdktf.stringToTerraform(this._egressVpcId),
      fault_domain: cdktf.stringToTerraform(this._faultDomain),
      file_share_folder: cdktf.stringToTerraform(this._fileShareFolder),
      firenet_gw_name: cdktf.stringToTerraform(this._firenetGwName),
      firewall_image: cdktf.stringToTerraform(this._firewallImage),
      firewall_image_id: cdktf.stringToTerraform(this._firewallImageId),
      firewall_image_version: cdktf.stringToTerraform(this._firewallImageVersion),
      firewall_name: cdktf.stringToTerraform(this._firewallName),
      firewall_size: cdktf.stringToTerraform(this._firewallSize),
      iam_role: cdktf.stringToTerraform(this._iamRole),
      id: cdktf.stringToTerraform(this._id),
      key_name: cdktf.stringToTerraform(this._keyName),
      management_subnet: cdktf.stringToTerraform(this._managementSubnet),
      management_vpc_id: cdktf.stringToTerraform(this._managementVpcId),
      password: cdktf.stringToTerraform(this._password),
      sas_url_config: cdktf.stringToTerraform(this._sasUrlConfig),
      sas_url_license: cdktf.stringToTerraform(this._sasUrlLicense),
      share_directory: cdktf.stringToTerraform(this._shareDirectory),
      sic_key: cdktf.stringToTerraform(this._sicKey),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      storage_access_key: cdktf.stringToTerraform(this._storageAccessKey),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      username: cdktf.stringToTerraform(this._username),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_bucket_name: {
        value: cdktf.stringToHclTerraform(this._bootstrapBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap_storage_name: {
        value: cdktf.stringToHclTerraform(this._bootstrapStorageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_folder: {
        value: cdktf.stringToHclTerraform(this._containerFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_subnet: {
        value: cdktf.stringToHclTerraform(this._egressSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      egress_vpc_id: {
        value: cdktf.stringToHclTerraform(this._egressVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fault_domain: {
        value: cdktf.stringToHclTerraform(this._faultDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_share_folder: {
        value: cdktf.stringToHclTerraform(this._fileShareFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firenet_gw_name: {
        value: cdktf.stringToHclTerraform(this._firenetGwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_image: {
        value: cdktf.stringToHclTerraform(this._firewallImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_image_id: {
        value: cdktf.stringToHclTerraform(this._firewallImageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_image_version: {
        value: cdktf.stringToHclTerraform(this._firewallImageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_name: {
        value: cdktf.stringToHclTerraform(this._firewallName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_size: {
        value: cdktf.stringToHclTerraform(this._firewallSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_role: {
        value: cdktf.stringToHclTerraform(this._iamRole),
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
      key_name: {
        value: cdktf.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_subnet: {
        value: cdktf.stringToHclTerraform(this._managementSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_vpc_id: {
        value: cdktf.stringToHclTerraform(this._managementVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sas_url_config: {
        value: cdktf.stringToHclTerraform(this._sasUrlConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sas_url_license: {
        value: cdktf.stringToHclTerraform(this._sasUrlLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      share_directory: {
        value: cdktf.stringToHclTerraform(this._shareDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sic_key: {
        value: cdktf.stringToHclTerraform(this._sicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_key: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_access_key: {
        value: cdktf.stringToHclTerraform(this._storageAccessKey),
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
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
