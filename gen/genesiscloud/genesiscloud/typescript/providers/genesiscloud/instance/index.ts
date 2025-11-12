// https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The disk size of the instance in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#disk_size Instance#disk_size}
  */
  readonly diskSize?: number;
  /**
  * The floating IP attached to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#floating_ip_id Instance#floating_ip_id}
  */
  readonly floatingIpId?: string;
  /**
  * The hostname of your instance. If not provided will be initially set to the `name` attribute.
  *   - If the value of this attribute is configured and changes, Terraform will destroy and recreate the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#hostname Instance#hostname}
  */
  readonly hostname?: string;
  /**
  * The source image id, image slug or snapshot id of the instance. The image version can also specified together with the image slug in this format `<image-slug>:<version>`. Learn more about images [here](https://developers.genesiscloud.com/images).
  *   - If the value of this attribute changes, the resource will be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#image Instance#image}
  */
  readonly image: string;
  /**
  * Option to provide metadata. Currently supported is `startup_script`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#metadata Instance#metadata}
  */
  readonly metadata?: InstanceMetadata;
  /**
  * The human-readable name for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#name Instance#name}
  */
  readonly name: string;
  /**
  * The password to access the instance. Your password must have upper and lower chars, digits and length between 8-72. **Please Note**: Only one of `ssh_keys` or `password` can be provided. Password is less secure - we recommend you use an SSH key-pair.
  *   - If the value of this attribute changes, the resource will be replaced.
  *   - The string length must be at least 16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#password Instance#password}
  */
  readonly password?: string;
  /**
  * The placement option identifier in which instances are physically located relative to each other within a zone. For example A or B.
  *   - If the value of this attribute changes, the resource will be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#placement_option Instance#placement_option}
  */
  readonly placementOption?: string;
  /**
  * The region identifier.
  *   - If the value of this attribute changes, the resource will be replaced.
  *   - The value must be one of: ["EUC-DE-MUC-1" "EUW-GB-MNC-1" "EUW-NL-AMS-1" "NA-CA-FTS-1" "NA-CA-MNZ-1" "NA-CA-PRG-1" "NORD-NO-KRS-1"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#region Instance#region}
  */
  readonly region: string;
  /**
  * The id of the reservation the instance is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#reservation_id Instance#reservation_id}
  */
  readonly reservationId?: string;
  /**
  * The security groups of the instance. If not provided will be set to the default security group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#security_group_ids Instance#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The ssh keys of the instance.
  *   - If the value of this attribute changes, the resource will be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#ssh_key_ids Instance#ssh_key_ids}
  */
  readonly sshKeyIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#timeouts Instance#timeouts}
  */
  readonly timeouts?: InstanceTimeouts;
  /**
  * The instance type identifier. Learn more about instance types [here](https://developers.genesiscloud.com/instances#instance-types).
  *   - If the value of this attribute changes, the resource will be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#type Instance#type}
  */
  readonly type: string;
  /**
  * The volumes of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#volume_ids Instance#volume_ids}
  */
  readonly volumeIds?: string[];
}
export interface InstanceMetadata {
  /**
  * A plain text bash script or "cloud-config" file that will be executed after the first instance boot. It is limited to 64 KiB in size. You can use it to configure your instance, e.g. installing the NVIDIA GPU driver. Learn more about [startup scripts and installing the GPU driver](https://support.genesiscloud.com/support/solutions/articles/47001122478).
  *   - If the value of this attribute changes, the resource will be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#startup_script Instance#startup_script}
  */
  readonly startupScript?: string;
}

export function instanceMetadataToTerraform(struct?: InstanceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    startup_script: cdktf.stringToTerraform(struct!.startupScript),
  }
}


export function instanceMetadataToHclTerraform(struct?: InstanceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    startup_script: {
      value: cdktf.stringToHclTerraform(struct!.startupScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InstanceMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startupScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupScript = this._startupScript;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startupScript = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startupScript = value.startupScript;
    }
  }

  // startup_script - computed: false, optional: true, required: false
  private _startupScript?: string; 
  public get startupScript() {
    return this.getStringAttribute('startup_script');
  }
  public set startupScript(value: string) {
    this._startupScript = value;
  }
  public resetStartupScript() {
    this._startupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupScriptInput() {
    return this._startupScript;
  }
}
export interface InstanceTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#create Instance#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#delete Instance#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#read Instance#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#update Instance#update}
  */
  readonly update?: string;
}

export function instanceTimeoutsToTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any {
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


export function instanceTimeoutsToHclTerraform(struct?: InstanceTimeouts | cdktf.IResolvable): any {
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

export class InstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: InstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance genesiscloud_instance}
*/
export class Instance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesiscloud_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Instance to import
  * @param importFromId The id of the existing Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesiscloud_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/genesiscloud/genesiscloud/1.1.14/docs/resources/instance genesiscloud_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'genesiscloud_instance',
      terraformGeneratorMetadata: {
        providerName: 'genesiscloud',
        providerVersion: '1.1.14',
        providerVersionConstraint: '1.1.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._diskSize = config.diskSize;
    this._floatingIpId = config.floatingIpId;
    this._hostname = config.hostname;
    this._image = config.image;
    this._metadata.internalValue = config.metadata;
    this._name = config.name;
    this._password = config.password;
    this._placementOption = config.placementOption;
    this._region = config.region;
    this._reservationId = config.reservationId;
    this._securityGroupIds = config.securityGroupIds;
    this._sshKeyIds = config.sshKeyIds;
    this._timeouts.internalValue = config.timeouts;
    this._type = config.type;
    this._volumeIds = config.volumeIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // floating_ip_id - computed: false, optional: true, required: false
  private _floatingIpId?: string; 
  public get floatingIpId() {
    return this.getStringAttribute('floating_ip_id');
  }
  public set floatingIpId(value: string) {
    this._floatingIpId = value;
  }
  public resetFloatingIpId() {
    this._floatingIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpIdInput() {
    return this._floatingIpId;
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new InstanceMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: InstanceMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // placement_option - computed: true, optional: true, required: false
  private _placementOption?: string; 
  public get placementOption() {
    return this.getStringAttribute('placement_option');
  }
  public set placementOption(value: string) {
    this._placementOption = value;
  }
  public resetPlacementOption() {
    this._placementOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementOptionInput() {
    return this._placementOption;
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // reservation_id - computed: false, optional: true, required: false
  private _reservationId?: string; 
  public get reservationId() {
    return this.getStringAttribute('reservation_id');
  }
  public set reservationId(value: string) {
    this._reservationId = value;
  }
  public resetReservationId() {
    this._reservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationIdInput() {
    return this._reservationId;
  }

  // security_group_ids - computed: true, optional: true, required: false
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

  // ssh_key_ids - computed: false, optional: true, required: false
  private _sshKeyIds?: string[]; 
  public get sshKeyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_key_ids'));
  }
  public set sshKeyIds(value: string[]) {
    this._sshKeyIds = value;
  }
  public resetSshKeyIds() {
    this._sshKeyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyIdsInput() {
    return this._sshKeyIds;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // volume_ids - computed: true, optional: true, required: false
  private _volumeIds?: string[]; 
  public get volumeIds() {
    return cdktf.Fn.tolist(this.getListAttribute('volume_ids'));
  }
  public set volumeIds(value: string[]) {
    this._volumeIds = value;
  }
  public resetVolumeIds() {
    this._volumeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdsInput() {
    return this._volumeIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disk_size: cdktf.numberToTerraform(this._diskSize),
      floating_ip_id: cdktf.stringToTerraform(this._floatingIpId),
      hostname: cdktf.stringToTerraform(this._hostname),
      image: cdktf.stringToTerraform(this._image),
      metadata: instanceMetadataToTerraform(this._metadata.internalValue),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      placement_option: cdktf.stringToTerraform(this._placementOption),
      region: cdktf.stringToTerraform(this._region),
      reservation_id: cdktf.stringToTerraform(this._reservationId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      ssh_key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeyIds),
      timeouts: instanceTimeoutsToTerraform(this._timeouts.internalValue),
      type: cdktf.stringToTerraform(this._type),
      volume_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._volumeIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      floating_ip_id: {
        value: cdktf.stringToHclTerraform(this._floatingIpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: instanceMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InstanceMetadata",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      placement_option: {
        value: cdktf.stringToHclTerraform(this._placementOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reservation_id: {
        value: cdktf.stringToHclTerraform(this._reservationId),
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
      ssh_key_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeyIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: instanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InstanceTimeouts",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._volumeIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
