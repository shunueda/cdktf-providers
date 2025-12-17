// https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BackupconfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#aws_access_key Backupconfiguration#aws_access_key}
  */
  readonly awsAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#aws_bucket_id Backupconfiguration#aws_bucket_id}
  */
  readonly awsBucketId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#aws_bucket_region Backupconfiguration#aws_bucket_region}
  */
  readonly awsBucketRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#aws_secret_access Backupconfiguration#aws_secret_access}
  */
  readonly awsSecretAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#backup_file_prefix Backupconfiguration#backup_file_prefix}
  */
  readonly backupFilePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#backup_passphrase Backupconfiguration#backup_passphrase}
  */
  readonly backupPassphrase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#id Backupconfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#maximum_backups_stored Backupconfiguration#maximum_backups_stored}
  */
  readonly maximumBackupsStored?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#name Backupconfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#remote_directory Backupconfiguration#remote_directory}
  */
  readonly remoteDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#remote_file_transfer_protocol Backupconfiguration#remote_file_transfer_protocol}
  */
  readonly remoteFileTransferProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#remote_hostname Backupconfiguration#remote_hostname}
  */
  readonly remoteHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#s3_bucket_folder Backupconfiguration#s3_bucket_folder}
  */
  readonly s3BucketFolder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#save_local Backupconfiguration#save_local}
  */
  readonly saveLocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#ssh_user_ref Backupconfiguration#ssh_user_ref}
  */
  readonly sshUserRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#tenant_ref Backupconfiguration#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#upload_to_remote_host Backupconfiguration#upload_to_remote_host}
  */
  readonly uploadToRemoteHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#upload_to_s3 Backupconfiguration#upload_to_s3}
  */
  readonly uploadToS3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#uuid Backupconfiguration#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#configpb_attributes Backupconfiguration#configpb_attributes}
  */
  readonly configpbAttributes?: BackupconfigurationConfigpbAttributes[] | cdktf.IResolvable;
}
export interface BackupconfigurationConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#version Backupconfiguration#version}
  */
  readonly version?: string;
}

export function backupconfigurationConfigpbAttributesToTerraform(struct?: BackupconfigurationConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function backupconfigurationConfigpbAttributesToHclTerraform(struct?: BackupconfigurationConfigpbAttributes | cdktf.IResolvable): any {
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

export class BackupconfigurationConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BackupconfigurationConfigpbAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BackupconfigurationConfigpbAttributes | cdktf.IResolvable | undefined) {
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

export class BackupconfigurationConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : BackupconfigurationConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): BackupconfigurationConfigpbAttributesOutputReference {
    return new BackupconfigurationConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration avi_backupconfiguration}
*/
export class Backupconfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_backupconfiguration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Backupconfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Backupconfiguration to import
  * @param importFromId The id of the existing Backupconfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Backupconfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_backupconfiguration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/backupconfiguration avi_backupconfiguration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupconfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: BackupconfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_backupconfiguration',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.6',
        providerVersionConstraint: '30.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccessKey = config.awsAccessKey;
    this._awsBucketId = config.awsBucketId;
    this._awsBucketRegion = config.awsBucketRegion;
    this._awsSecretAccess = config.awsSecretAccess;
    this._backupFilePrefix = config.backupFilePrefix;
    this._backupPassphrase = config.backupPassphrase;
    this._id = config.id;
    this._maximumBackupsStored = config.maximumBackupsStored;
    this._name = config.name;
    this._remoteDirectory = config.remoteDirectory;
    this._remoteFileTransferProtocol = config.remoteFileTransferProtocol;
    this._remoteHostname = config.remoteHostname;
    this._s3BucketFolder = config.s3BucketFolder;
    this._saveLocal = config.saveLocal;
    this._sshUserRef = config.sshUserRef;
    this._tenantRef = config.tenantRef;
    this._uploadToRemoteHost = config.uploadToRemoteHost;
    this._uploadToS3 = config.uploadToS3;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_key - computed: true, optional: true, required: false
  private _awsAccessKey?: string; 
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }
  public set awsAccessKey(value: string) {
    this._awsAccessKey = value;
  }
  public resetAwsAccessKey() {
    this._awsAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey;
  }

  // aws_bucket_id - computed: true, optional: true, required: false
  private _awsBucketId?: string; 
  public get awsBucketId() {
    return this.getStringAttribute('aws_bucket_id');
  }
  public set awsBucketId(value: string) {
    this._awsBucketId = value;
  }
  public resetAwsBucketId() {
    this._awsBucketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsBucketIdInput() {
    return this._awsBucketId;
  }

  // aws_bucket_region - computed: true, optional: true, required: false
  private _awsBucketRegion?: string; 
  public get awsBucketRegion() {
    return this.getStringAttribute('aws_bucket_region');
  }
  public set awsBucketRegion(value: string) {
    this._awsBucketRegion = value;
  }
  public resetAwsBucketRegion() {
    this._awsBucketRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsBucketRegionInput() {
    return this._awsBucketRegion;
  }

  // aws_secret_access - computed: true, optional: true, required: false
  private _awsSecretAccess?: string; 
  public get awsSecretAccess() {
    return this.getStringAttribute('aws_secret_access');
  }
  public set awsSecretAccess(value: string) {
    this._awsSecretAccess = value;
  }
  public resetAwsSecretAccess() {
    this._awsSecretAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessInput() {
    return this._awsSecretAccess;
  }

  // backup_file_prefix - computed: true, optional: true, required: false
  private _backupFilePrefix?: string; 
  public get backupFilePrefix() {
    return this.getStringAttribute('backup_file_prefix');
  }
  public set backupFilePrefix(value: string) {
    this._backupFilePrefix = value;
  }
  public resetBackupFilePrefix() {
    this._backupFilePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupFilePrefixInput() {
    return this._backupFilePrefix;
  }

  // backup_passphrase - computed: true, optional: true, required: false
  private _backupPassphrase?: string; 
  public get backupPassphrase() {
    return this.getStringAttribute('backup_passphrase');
  }
  public set backupPassphrase(value: string) {
    this._backupPassphrase = value;
  }
  public resetBackupPassphrase() {
    this._backupPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPassphraseInput() {
    return this._backupPassphrase;
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

  // maximum_backups_stored - computed: false, optional: true, required: false
  private _maximumBackupsStored?: string; 
  public get maximumBackupsStored() {
    return this.getStringAttribute('maximum_backups_stored');
  }
  public set maximumBackupsStored(value: string) {
    this._maximumBackupsStored = value;
  }
  public resetMaximumBackupsStored() {
    this._maximumBackupsStored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBackupsStoredInput() {
    return this._maximumBackupsStored;
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

  // remote_directory - computed: true, optional: true, required: false
  private _remoteDirectory?: string; 
  public get remoteDirectory() {
    return this.getStringAttribute('remote_directory');
  }
  public set remoteDirectory(value: string) {
    this._remoteDirectory = value;
  }
  public resetRemoteDirectory() {
    this._remoteDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDirectoryInput() {
    return this._remoteDirectory;
  }

  // remote_file_transfer_protocol - computed: false, optional: true, required: false
  private _remoteFileTransferProtocol?: string; 
  public get remoteFileTransferProtocol() {
    return this.getStringAttribute('remote_file_transfer_protocol');
  }
  public set remoteFileTransferProtocol(value: string) {
    this._remoteFileTransferProtocol = value;
  }
  public resetRemoteFileTransferProtocol() {
    this._remoteFileTransferProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteFileTransferProtocolInput() {
    return this._remoteFileTransferProtocol;
  }

  // remote_hostname - computed: true, optional: true, required: false
  private _remoteHostname?: string; 
  public get remoteHostname() {
    return this.getStringAttribute('remote_hostname');
  }
  public set remoteHostname(value: string) {
    this._remoteHostname = value;
  }
  public resetRemoteHostname() {
    this._remoteHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteHostnameInput() {
    return this._remoteHostname;
  }

  // s3_bucket_folder - computed: true, optional: true, required: false
  private _s3BucketFolder?: string; 
  public get s3BucketFolder() {
    return this.getStringAttribute('s3_bucket_folder');
  }
  public set s3BucketFolder(value: string) {
    this._s3BucketFolder = value;
  }
  public resetS3BucketFolder() {
    this._s3BucketFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketFolderInput() {
    return this._s3BucketFolder;
  }

  // save_local - computed: true, optional: true, required: false
  private _saveLocal?: string; 
  public get saveLocal() {
    return this.getStringAttribute('save_local');
  }
  public set saveLocal(value: string) {
    this._saveLocal = value;
  }
  public resetSaveLocal() {
    this._saveLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveLocalInput() {
    return this._saveLocal;
  }

  // ssh_user_ref - computed: true, optional: true, required: false
  private _sshUserRef?: string; 
  public get sshUserRef() {
    return this.getStringAttribute('ssh_user_ref');
  }
  public set sshUserRef(value: string) {
    this._sshUserRef = value;
  }
  public resetSshUserRef() {
    this._sshUserRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUserRefInput() {
    return this._sshUserRef;
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

  // upload_to_remote_host - computed: true, optional: true, required: false
  private _uploadToRemoteHost?: string; 
  public get uploadToRemoteHost() {
    return this.getStringAttribute('upload_to_remote_host');
  }
  public set uploadToRemoteHost(value: string) {
    this._uploadToRemoteHost = value;
  }
  public resetUploadToRemoteHost() {
    this._uploadToRemoteHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadToRemoteHostInput() {
    return this._uploadToRemoteHost;
  }

  // upload_to_s3 - computed: true, optional: true, required: false
  private _uploadToS3?: string; 
  public get uploadToS3() {
    return this.getStringAttribute('upload_to_s3');
  }
  public set uploadToS3(value: string) {
    this._uploadToS3 = value;
  }
  public resetUploadToS3() {
    this._uploadToS3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadToS3Input() {
    return this._uploadToS3;
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

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new BackupconfigurationConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: BackupconfigurationConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_access_key: cdktf.stringToTerraform(this._awsAccessKey),
      aws_bucket_id: cdktf.stringToTerraform(this._awsBucketId),
      aws_bucket_region: cdktf.stringToTerraform(this._awsBucketRegion),
      aws_secret_access: cdktf.stringToTerraform(this._awsSecretAccess),
      backup_file_prefix: cdktf.stringToTerraform(this._backupFilePrefix),
      backup_passphrase: cdktf.stringToTerraform(this._backupPassphrase),
      id: cdktf.stringToTerraform(this._id),
      maximum_backups_stored: cdktf.stringToTerraform(this._maximumBackupsStored),
      name: cdktf.stringToTerraform(this._name),
      remote_directory: cdktf.stringToTerraform(this._remoteDirectory),
      remote_file_transfer_protocol: cdktf.stringToTerraform(this._remoteFileTransferProtocol),
      remote_hostname: cdktf.stringToTerraform(this._remoteHostname),
      s3_bucket_folder: cdktf.stringToTerraform(this._s3BucketFolder),
      save_local: cdktf.stringToTerraform(this._saveLocal),
      ssh_user_ref: cdktf.stringToTerraform(this._sshUserRef),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      upload_to_remote_host: cdktf.stringToTerraform(this._uploadToRemoteHost),
      upload_to_s3: cdktf.stringToTerraform(this._uploadToS3),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(backupconfigurationConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_access_key: {
        value: cdktf.stringToHclTerraform(this._awsAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_bucket_id: {
        value: cdktf.stringToHclTerraform(this._awsBucketId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_bucket_region: {
        value: cdktf.stringToHclTerraform(this._awsBucketRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_secret_access: {
        value: cdktf.stringToHclTerraform(this._awsSecretAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_file_prefix: {
        value: cdktf.stringToHclTerraform(this._backupFilePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_passphrase: {
        value: cdktf.stringToHclTerraform(this._backupPassphrase),
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
      maximum_backups_stored: {
        value: cdktf.stringToHclTerraform(this._maximumBackupsStored),
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
      remote_directory: {
        value: cdktf.stringToHclTerraform(this._remoteDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_file_transfer_protocol: {
        value: cdktf.stringToHclTerraform(this._remoteFileTransferProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_hostname: {
        value: cdktf.stringToHclTerraform(this._remoteHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket_folder: {
        value: cdktf.stringToHclTerraform(this._s3BucketFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save_local: {
        value: cdktf.stringToHclTerraform(this._saveLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_user_ref: {
        value: cdktf.stringToHclTerraform(this._sshUserRef),
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
      upload_to_remote_host: {
        value: cdktf.stringToHclTerraform(this._uploadToRemoteHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upload_to_s3: {
        value: cdktf.stringToHclTerraform(this._uploadToS3),
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
      configpb_attributes: {
        value: cdktf.listMapperHcl(backupconfigurationConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BackupconfigurationConfigpbAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
