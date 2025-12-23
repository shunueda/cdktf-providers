// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControllerConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Scanning Interval for AWS Guard Duty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#aws_guard_duty_scanning_interval ControllerConfig#aws_guard_duty_scanning_interval}
  */
  readonly awsGuardDutyScanningInterval?: number;
  /**
  * This parameter represents the name of a Cloud-Account in Aviatrix controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#backup_account_name ControllerConfig#backup_account_name}
  */
  readonly backupAccountName?: string;
  /**
  * Bucket name. Required for AWS, AWSGov, GCP and OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#backup_bucket_name ControllerConfig#backup_bucket_name}
  */
  readonly backupBucketName?: string;
  /**
  * Type of cloud service provider, requires an integer value. Use 1 for AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#backup_cloud_type ControllerConfig#backup_cloud_type}
  */
  readonly backupCloudType?: number;
  /**
  * Switch to enable/disable controller cloudn backup config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#backup_configuration ControllerConfig#backup_configuration}
  */
  readonly backupConfiguration?: boolean | cdktf.IResolvable;
  /**
  * Container name. Required for Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#backup_container_name ControllerConfig#backup_container_name}
  */
  readonly backupContainerName?: string;
  /**
  * Name of region. Required for Azure and OCI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#backup_region ControllerConfig#backup_region}
  */
  readonly backupRegion?: string;
  /**
  * Storage name. Required for Azure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#backup_storage_name ControllerConfig#backup_storage_name}
  */
  readonly backupStorageName?: string;
  /**
  * CA certificate file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#ca_certificate_file ControllerConfig#ca_certificate_file}
  */
  readonly caCertificateFile?: string;
  /**
  * File path to the CA certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#ca_certificate_file_path ControllerConfig#ca_certificate_file_path}
  */
  readonly caCertificateFilePath?: string;
  /**
  * Enable VPC/VNET DNS Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#enable_vpc_dns_server ControllerConfig#enable_vpc_dns_server}
  */
  readonly enableVpcDnsServer?: boolean | cdktf.IResolvable;
  /**
  * A system-wide mode. Default: true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#fqdn_exception_rule ControllerConfig#fqdn_exception_rule}
  */
  readonly fqdnExceptionRule?: boolean | cdktf.IResolvable;
  /**
  * Switch for HTTP access. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#http_access ControllerConfig#http_access}
  */
  readonly httpAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#id ControllerConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, aviatrix_controller_config will upgrade all gateways when target_version is set. If false, only the controller will be upgraded when target_version is set. In that case gateway upgrades should be handled in each gateway resource individually using the software_version and image_version attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#manage_gateway_upgrades ControllerConfig#manage_gateway_upgrades}
  */
  readonly manageGatewayUpgrades?: boolean | cdktf.IResolvable;
  /**
  * Switch to enable the controller to backup up to a maximum of 3 rotating backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#multiple_backups ControllerConfig#multiple_backups}
  */
  readonly multipleBackups?: boolean | cdktf.IResolvable;
  /**
  * Server private key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#server_private_key_file ControllerConfig#server_private_key_file}
  */
  readonly serverPrivateKeyFile?: string;
  /**
  * File path to the server private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#server_private_key_file_path ControllerConfig#server_private_key_file_path}
  */
  readonly serverPrivateKeyFilePath?: string;
  /**
  * Server public certificate file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#server_public_certificate_file ControllerConfig#server_public_certificate_file}
  */
  readonly serverPublicCertificateFile?: string;
  /**
  * File path to the server public certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#server_public_certificate_file_path ControllerConfig#server_public_certificate_file_path}
  */
  readonly serverPublicCertificateFilePath?: string;
  /**
  * The release version number to which the controller will be upgraded to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#target_version ControllerConfig#target_version}
  */
  readonly targetVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config aviatrix_controller_config}
*/
export class ControllerConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_controller_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControllerConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControllerConfig to import
  * @param importFromId The id of the existing ControllerConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControllerConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_controller_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_config aviatrix_controller_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControllerConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ControllerConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_controller_config',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsGuardDutyScanningInterval = config.awsGuardDutyScanningInterval;
    this._backupAccountName = config.backupAccountName;
    this._backupBucketName = config.backupBucketName;
    this._backupCloudType = config.backupCloudType;
    this._backupConfiguration = config.backupConfiguration;
    this._backupContainerName = config.backupContainerName;
    this._backupRegion = config.backupRegion;
    this._backupStorageName = config.backupStorageName;
    this._caCertificateFile = config.caCertificateFile;
    this._caCertificateFilePath = config.caCertificateFilePath;
    this._enableVpcDnsServer = config.enableVpcDnsServer;
    this._fqdnExceptionRule = config.fqdnExceptionRule;
    this._httpAccess = config.httpAccess;
    this._id = config.id;
    this._manageGatewayUpgrades = config.manageGatewayUpgrades;
    this._multipleBackups = config.multipleBackups;
    this._serverPrivateKeyFile = config.serverPrivateKeyFile;
    this._serverPrivateKeyFilePath = config.serverPrivateKeyFilePath;
    this._serverPublicCertificateFile = config.serverPublicCertificateFile;
    this._serverPublicCertificateFilePath = config.serverPublicCertificateFilePath;
    this._targetVersion = config.targetVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_guard_duty_scanning_interval - computed: false, optional: true, required: false
  private _awsGuardDutyScanningInterval?: number; 
  public get awsGuardDutyScanningInterval() {
    return this.getNumberAttribute('aws_guard_duty_scanning_interval');
  }
  public set awsGuardDutyScanningInterval(value: number) {
    this._awsGuardDutyScanningInterval = value;
  }
  public resetAwsGuardDutyScanningInterval() {
    this._awsGuardDutyScanningInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsGuardDutyScanningIntervalInput() {
    return this._awsGuardDutyScanningInterval;
  }

  // backup_account_name - computed: false, optional: true, required: false
  private _backupAccountName?: string; 
  public get backupAccountName() {
    return this.getStringAttribute('backup_account_name');
  }
  public set backupAccountName(value: string) {
    this._backupAccountName = value;
  }
  public resetBackupAccountName() {
    this._backupAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupAccountNameInput() {
    return this._backupAccountName;
  }

  // backup_bucket_name - computed: false, optional: true, required: false
  private _backupBucketName?: string; 
  public get backupBucketName() {
    return this.getStringAttribute('backup_bucket_name');
  }
  public set backupBucketName(value: string) {
    this._backupBucketName = value;
  }
  public resetBackupBucketName() {
    this._backupBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupBucketNameInput() {
    return this._backupBucketName;
  }

  // backup_cloud_type - computed: false, optional: true, required: false
  private _backupCloudType?: number; 
  public get backupCloudType() {
    return this.getNumberAttribute('backup_cloud_type');
  }
  public set backupCloudType(value: number) {
    this._backupCloudType = value;
  }
  public resetBackupCloudType() {
    this._backupCloudType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupCloudTypeInput() {
    return this._backupCloudType;
  }

  // backup_configuration - computed: false, optional: true, required: false
  private _backupConfiguration?: boolean | cdktf.IResolvable; 
  public get backupConfiguration() {
    return this.getBooleanAttribute('backup_configuration');
  }
  public set backupConfiguration(value: boolean | cdktf.IResolvable) {
    this._backupConfiguration = value;
  }
  public resetBackupConfiguration() {
    this._backupConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigurationInput() {
    return this._backupConfiguration;
  }

  // backup_container_name - computed: false, optional: true, required: false
  private _backupContainerName?: string; 
  public get backupContainerName() {
    return this.getStringAttribute('backup_container_name');
  }
  public set backupContainerName(value: string) {
    this._backupContainerName = value;
  }
  public resetBackupContainerName() {
    this._backupContainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupContainerNameInput() {
    return this._backupContainerName;
  }

  // backup_region - computed: false, optional: true, required: false
  private _backupRegion?: string; 
  public get backupRegion() {
    return this.getStringAttribute('backup_region');
  }
  public set backupRegion(value: string) {
    this._backupRegion = value;
  }
  public resetBackupRegion() {
    this._backupRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRegionInput() {
    return this._backupRegion;
  }

  // backup_storage_name - computed: false, optional: true, required: false
  private _backupStorageName?: string; 
  public get backupStorageName() {
    return this.getStringAttribute('backup_storage_name');
  }
  public set backupStorageName(value: string) {
    this._backupStorageName = value;
  }
  public resetBackupStorageName() {
    this._backupStorageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupStorageNameInput() {
    return this._backupStorageName;
  }

  // ca_certificate_file - computed: false, optional: true, required: false
  private _caCertificateFile?: string; 
  public get caCertificateFile() {
    return this.getStringAttribute('ca_certificate_file');
  }
  public set caCertificateFile(value: string) {
    this._caCertificateFile = value;
  }
  public resetCaCertificateFile() {
    this._caCertificateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateFileInput() {
    return this._caCertificateFile;
  }

  // ca_certificate_file_path - computed: false, optional: true, required: false
  private _caCertificateFilePath?: string; 
  public get caCertificateFilePath() {
    return this.getStringAttribute('ca_certificate_file_path');
  }
  public set caCertificateFilePath(value: string) {
    this._caCertificateFilePath = value;
  }
  public resetCaCertificateFilePath() {
    this._caCertificateFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateFilePathInput() {
    return this._caCertificateFilePath;
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // enable_vpc_dns_server - computed: false, optional: true, required: false
  private _enableVpcDnsServer?: boolean | cdktf.IResolvable; 
  public get enableVpcDnsServer() {
    return this.getBooleanAttribute('enable_vpc_dns_server');
  }
  public set enableVpcDnsServer(value: boolean | cdktf.IResolvable) {
    this._enableVpcDnsServer = value;
  }
  public resetEnableVpcDnsServer() {
    this._enableVpcDnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVpcDnsServerInput() {
    return this._enableVpcDnsServer;
  }

  // fqdn_exception_rule - computed: false, optional: true, required: false
  private _fqdnExceptionRule?: boolean | cdktf.IResolvable; 
  public get fqdnExceptionRule() {
    return this.getBooleanAttribute('fqdn_exception_rule');
  }
  public set fqdnExceptionRule(value: boolean | cdktf.IResolvable) {
    this._fqdnExceptionRule = value;
  }
  public resetFqdnExceptionRule() {
    this._fqdnExceptionRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnExceptionRuleInput() {
    return this._fqdnExceptionRule;
  }

  // http_access - computed: false, optional: true, required: false
  private _httpAccess?: boolean | cdktf.IResolvable; 
  public get httpAccess() {
    return this.getBooleanAttribute('http_access');
  }
  public set httpAccess(value: boolean | cdktf.IResolvable) {
    this._httpAccess = value;
  }
  public resetHttpAccess() {
    this._httpAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAccessInput() {
    return this._httpAccess;
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

  // manage_gateway_upgrades - computed: false, optional: true, required: false
  private _manageGatewayUpgrades?: boolean | cdktf.IResolvable; 
  public get manageGatewayUpgrades() {
    return this.getBooleanAttribute('manage_gateway_upgrades');
  }
  public set manageGatewayUpgrades(value: boolean | cdktf.IResolvable) {
    this._manageGatewayUpgrades = value;
  }
  public resetManageGatewayUpgrades() {
    this._manageGatewayUpgrades = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageGatewayUpgradesInput() {
    return this._manageGatewayUpgrades;
  }

  // multiple_backups - computed: false, optional: true, required: false
  private _multipleBackups?: boolean | cdktf.IResolvable; 
  public get multipleBackups() {
    return this.getBooleanAttribute('multiple_backups');
  }
  public set multipleBackups(value: boolean | cdktf.IResolvable) {
    this._multipleBackups = value;
  }
  public resetMultipleBackups() {
    this._multipleBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleBackupsInput() {
    return this._multipleBackups;
  }

  // previous_version - computed: true, optional: false, required: false
  public get previousVersion() {
    return this.getStringAttribute('previous_version');
  }

  // server_private_key_file - computed: false, optional: true, required: false
  private _serverPrivateKeyFile?: string; 
  public get serverPrivateKeyFile() {
    return this.getStringAttribute('server_private_key_file');
  }
  public set serverPrivateKeyFile(value: string) {
    this._serverPrivateKeyFile = value;
  }
  public resetServerPrivateKeyFile() {
    this._serverPrivateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPrivateKeyFileInput() {
    return this._serverPrivateKeyFile;
  }

  // server_private_key_file_path - computed: false, optional: true, required: false
  private _serverPrivateKeyFilePath?: string; 
  public get serverPrivateKeyFilePath() {
    return this.getStringAttribute('server_private_key_file_path');
  }
  public set serverPrivateKeyFilePath(value: string) {
    this._serverPrivateKeyFilePath = value;
  }
  public resetServerPrivateKeyFilePath() {
    this._serverPrivateKeyFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPrivateKeyFilePathInput() {
    return this._serverPrivateKeyFilePath;
  }

  // server_public_certificate_file - computed: false, optional: true, required: false
  private _serverPublicCertificateFile?: string; 
  public get serverPublicCertificateFile() {
    return this.getStringAttribute('server_public_certificate_file');
  }
  public set serverPublicCertificateFile(value: string) {
    this._serverPublicCertificateFile = value;
  }
  public resetServerPublicCertificateFile() {
    this._serverPublicCertificateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPublicCertificateFileInput() {
    return this._serverPublicCertificateFile;
  }

  // server_public_certificate_file_path - computed: false, optional: true, required: false
  private _serverPublicCertificateFilePath?: string; 
  public get serverPublicCertificateFilePath() {
    return this.getStringAttribute('server_public_certificate_file_path');
  }
  public set serverPublicCertificateFilePath(value: string) {
    this._serverPublicCertificateFilePath = value;
  }
  public resetServerPublicCertificateFilePath() {
    this._serverPublicCertificateFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPublicCertificateFilePathInput() {
    return this._serverPublicCertificateFilePath;
  }

  // target_version - computed: false, optional: true, required: false
  private _targetVersion?: string; 
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }
  public set targetVersion(value: string) {
    this._targetVersion = value;
  }
  public resetTargetVersion() {
    this._targetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVersionInput() {
    return this._targetVersion;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_guard_duty_scanning_interval: cdktf.numberToTerraform(this._awsGuardDutyScanningInterval),
      backup_account_name: cdktf.stringToTerraform(this._backupAccountName),
      backup_bucket_name: cdktf.stringToTerraform(this._backupBucketName),
      backup_cloud_type: cdktf.numberToTerraform(this._backupCloudType),
      backup_configuration: cdktf.booleanToTerraform(this._backupConfiguration),
      backup_container_name: cdktf.stringToTerraform(this._backupContainerName),
      backup_region: cdktf.stringToTerraform(this._backupRegion),
      backup_storage_name: cdktf.stringToTerraform(this._backupStorageName),
      ca_certificate_file: cdktf.stringToTerraform(this._caCertificateFile),
      ca_certificate_file_path: cdktf.stringToTerraform(this._caCertificateFilePath),
      enable_vpc_dns_server: cdktf.booleanToTerraform(this._enableVpcDnsServer),
      fqdn_exception_rule: cdktf.booleanToTerraform(this._fqdnExceptionRule),
      http_access: cdktf.booleanToTerraform(this._httpAccess),
      id: cdktf.stringToTerraform(this._id),
      manage_gateway_upgrades: cdktf.booleanToTerraform(this._manageGatewayUpgrades),
      multiple_backups: cdktf.booleanToTerraform(this._multipleBackups),
      server_private_key_file: cdktf.stringToTerraform(this._serverPrivateKeyFile),
      server_private_key_file_path: cdktf.stringToTerraform(this._serverPrivateKeyFilePath),
      server_public_certificate_file: cdktf.stringToTerraform(this._serverPublicCertificateFile),
      server_public_certificate_file_path: cdktf.stringToTerraform(this._serverPublicCertificateFilePath),
      target_version: cdktf.stringToTerraform(this._targetVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_guard_duty_scanning_interval: {
        value: cdktf.numberToHclTerraform(this._awsGuardDutyScanningInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_account_name: {
        value: cdktf.stringToHclTerraform(this._backupAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_bucket_name: {
        value: cdktf.stringToHclTerraform(this._backupBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_cloud_type: {
        value: cdktf.numberToHclTerraform(this._backupCloudType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_configuration: {
        value: cdktf.booleanToHclTerraform(this._backupConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup_container_name: {
        value: cdktf.stringToHclTerraform(this._backupContainerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_region: {
        value: cdktf.stringToHclTerraform(this._backupRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_storage_name: {
        value: cdktf.stringToHclTerraform(this._backupStorageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_certificate_file: {
        value: cdktf.stringToHclTerraform(this._caCertificateFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_certificate_file_path: {
        value: cdktf.stringToHclTerraform(this._caCertificateFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_vpc_dns_server: {
        value: cdktf.booleanToHclTerraform(this._enableVpcDnsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fqdn_exception_rule: {
        value: cdktf.booleanToHclTerraform(this._fqdnExceptionRule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_access: {
        value: cdktf.booleanToHclTerraform(this._httpAccess),
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
      manage_gateway_upgrades: {
        value: cdktf.booleanToHclTerraform(this._manageGatewayUpgrades),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multiple_backups: {
        value: cdktf.booleanToHclTerraform(this._multipleBackups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server_private_key_file: {
        value: cdktf.stringToHclTerraform(this._serverPrivateKeyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_private_key_file_path: {
        value: cdktf.stringToHclTerraform(this._serverPrivateKeyFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_public_certificate_file: {
        value: cdktf.stringToHclTerraform(this._serverPublicCertificateFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_public_certificate_file_path: {
        value: cdktf.stringToHclTerraform(this._serverPublicCertificateFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_version: {
        value: cdktf.stringToHclTerraform(this._targetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
