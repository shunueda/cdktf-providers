// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfInstancesAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment#cluster_id TsfInstancesAttachment#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Image feature ID list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment#feature_id_list TsfInstancesAttachment#feature_id_list}
  */
  readonly featureIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment#id TsfInstancesAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Operating system image ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment#image_id TsfInstancesAttachment#image_id}
  */
  readonly imageId?: string;
  /**
  * Cloud server ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment#instance_id TsfInstancesAttachment#instance_id}
  */
  readonly instanceId: string;
  /**
  * Cloud server import mode, required for virtual machine clusters, not required for container clusters. R: Reinstall TSF system image, M: Manual installation of agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment#instance_import_mode TsfInstancesAttachment#instance_import_mode}
  */
  readonly instanceImportMode?: string;
  /**
  * Associated key for system reinstallation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment#key_id TsfInstancesAttachment#key_id}
  */
  readonly keyId?: string;
  /**
  * Image customization type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment#os_customize_type TsfInstancesAttachment#os_customize_type}
  */
  readonly osCustomizeType?: string;
  /**
  * Operating system name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment#os_name TsfInstancesAttachment#os_name}
  */
  readonly osName?: string;
  /**
  * Reset system password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment#password TsfInstancesAttachment#password}
  */
  readonly password?: string;
  /**
  * Security group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment#security_group_ids TsfInstancesAttachment#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Security group setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment#sg_id TsfInstancesAttachment#sg_id}
  */
  readonly sgId?: string;
  /**
  * instance_advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment#instance_advanced_settings TsfInstancesAttachment#instance_advanced_settings}
  */
  readonly instanceAdvancedSettings?: TsfInstancesAttachmentInstanceAdvancedSettings;
}
export interface TsfInstancesAttachmentInstanceAdvancedSettings {
  /**
  * Dockerd --graph specifies the value, default is /var/lib/docker Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment#docker_graph_path TsfInstancesAttachment#docker_graph_path}
  */
  readonly dockerGraphPath: string;
  /**
  * Data disk mount point, data disks are not mounted by default. Data disks with formatted ext3, ext4, xfs file systems will be mounted directly, other file systems or unformatted data disks will be automatically formatted as ext4 and mounted. Please back up your data! This setting does not take effect for cloud servers with no data disks or multiple data disks. Note: This field may return null, indicating that no valid values can be obtained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment#mount_target TsfInstancesAttachment#mount_target}
  */
  readonly mountTarget: string;
}

export function tsfInstancesAttachmentInstanceAdvancedSettingsToTerraform(struct?: TsfInstancesAttachmentInstanceAdvancedSettingsOutputReference | TsfInstancesAttachmentInstanceAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_graph_path: cdktf.stringToTerraform(struct!.dockerGraphPath),
    mount_target: cdktf.stringToTerraform(struct!.mountTarget),
  }
}


export function tsfInstancesAttachmentInstanceAdvancedSettingsToHclTerraform(struct?: TsfInstancesAttachmentInstanceAdvancedSettingsOutputReference | TsfInstancesAttachmentInstanceAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker_graph_path: {
      value: cdktf.stringToHclTerraform(struct!.dockerGraphPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_target: {
      value: cdktf.stringToHclTerraform(struct!.mountTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfInstancesAttachmentInstanceAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfInstancesAttachmentInstanceAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerGraphPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerGraphPath = this._dockerGraphPath;
    }
    if (this._mountTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTarget = this._mountTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfInstancesAttachmentInstanceAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dockerGraphPath = undefined;
      this._mountTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dockerGraphPath = value.dockerGraphPath;
      this._mountTarget = value.mountTarget;
    }
  }

  // docker_graph_path - computed: false, optional: false, required: true
  private _dockerGraphPath?: string; 
  public get dockerGraphPath() {
    return this.getStringAttribute('docker_graph_path');
  }
  public set dockerGraphPath(value: string) {
    this._dockerGraphPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerGraphPathInput() {
    return this._dockerGraphPath;
  }

  // mount_target - computed: false, optional: false, required: true
  private _mountTarget?: string; 
  public get mountTarget() {
    return this.getStringAttribute('mount_target');
  }
  public set mountTarget(value: string) {
    this._mountTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTargetInput() {
    return this._mountTarget;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment tencentcloud_tsf_instances_attachment}
*/
export class TsfInstancesAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_instances_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfInstancesAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfInstancesAttachment to import
  * @param importFromId The id of the existing TsfInstancesAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfInstancesAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_instances_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/tsf_instances_attachment tencentcloud_tsf_instances_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfInstancesAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: TsfInstancesAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_instances_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._featureIdList = config.featureIdList;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceId = config.instanceId;
    this._instanceImportMode = config.instanceImportMode;
    this._keyId = config.keyId;
    this._osCustomizeType = config.osCustomizeType;
    this._osName = config.osName;
    this._password = config.password;
    this._securityGroupIds = config.securityGroupIds;
    this._sgId = config.sgId;
    this._instanceAdvancedSettings.internalValue = config.instanceAdvancedSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // feature_id_list - computed: false, optional: true, required: false
  private _featureIdList?: string[]; 
  public get featureIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('feature_id_list'));
  }
  public set featureIdList(value: string[]) {
    this._featureIdList = value;
  }
  public resetFeatureIdList() {
    this._featureIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureIdListInput() {
    return this._featureIdList;
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

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
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

  // instance_import_mode - computed: false, optional: true, required: false
  private _instanceImportMode?: string; 
  public get instanceImportMode() {
    return this.getStringAttribute('instance_import_mode');
  }
  public set instanceImportMode(value: string) {
    this._instanceImportMode = value;
  }
  public resetInstanceImportMode() {
    this._instanceImportMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceImportModeInput() {
    return this._instanceImportMode;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // os_customize_type - computed: false, optional: true, required: false
  private _osCustomizeType?: string; 
  public get osCustomizeType() {
    return this.getStringAttribute('os_customize_type');
  }
  public set osCustomizeType(value: string) {
    this._osCustomizeType = value;
  }
  public resetOsCustomizeType() {
    this._osCustomizeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osCustomizeTypeInput() {
    return this._osCustomizeType;
  }

  // os_name - computed: false, optional: true, required: false
  private _osName?: string; 
  public get osName() {
    return this.getStringAttribute('os_name');
  }
  public set osName(value: string) {
    this._osName = value;
  }
  public resetOsName() {
    this._osName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osNameInput() {
    return this._osName;
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

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // sg_id - computed: false, optional: true, required: false
  private _sgId?: string; 
  public get sgId() {
    return this.getStringAttribute('sg_id');
  }
  public set sgId(value: string) {
    this._sgId = value;
  }
  public resetSgId() {
    this._sgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgIdInput() {
    return this._sgId;
  }

  // instance_advanced_settings - computed: false, optional: true, required: false
  private _instanceAdvancedSettings = new TsfInstancesAttachmentInstanceAdvancedSettingsOutputReference(this, "instance_advanced_settings");
  public get instanceAdvancedSettings() {
    return this._instanceAdvancedSettings;
  }
  public putInstanceAdvancedSettings(value: TsfInstancesAttachmentInstanceAdvancedSettings) {
    this._instanceAdvancedSettings.internalValue = value;
  }
  public resetInstanceAdvancedSettings() {
    this._instanceAdvancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAdvancedSettingsInput() {
    return this._instanceAdvancedSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      feature_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._featureIdList),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_import_mode: cdktf.stringToTerraform(this._instanceImportMode),
      key_id: cdktf.stringToTerraform(this._keyId),
      os_customize_type: cdktf.stringToTerraform(this._osCustomizeType),
      os_name: cdktf.stringToTerraform(this._osName),
      password: cdktf.stringToTerraform(this._password),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      sg_id: cdktf.stringToTerraform(this._sgId),
      instance_advanced_settings: tsfInstancesAttachmentInstanceAdvancedSettingsToTerraform(this._instanceAdvancedSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._featureIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
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
      instance_import_mode: {
        value: cdktf.stringToHclTerraform(this._instanceImportMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_id: {
        value: cdktf.stringToHclTerraform(this._keyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_customize_type: {
        value: cdktf.stringToHclTerraform(this._osCustomizeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_name: {
        value: cdktf.stringToHclTerraform(this._osName),
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
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sg_id: {
        value: cdktf.stringToHclTerraform(this._sgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_advanced_settings: {
        value: tsfInstancesAttachmentInstanceAdvancedSettingsToHclTerraform(this._instanceAdvancedSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfInstancesAttachmentInstanceAdvancedSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
