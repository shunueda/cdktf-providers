// https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The affinity group the server is assigned to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#affinity_group Server#affinity_group}
  */
  readonly affinityGroup?: string;
  /**
  * The availability zone of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#availability_zone Server#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The boot volume for the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#boot_volume Server#boot_volume}
  */
  readonly bootVolume?: ServerBootVolume;
  /**
  * The desired status of the server resource. Possible values are: `active`, `inactive`, `deallocated`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#desired_status Server#desired_status}
  */
  readonly desiredStatus?: string;
  /**
  * The image ID to be used for an ephemeral disk on the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#image_id Server#image_id}
  */
  readonly imageId?: string;
  /**
  * The name of the keypair used during server creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#keypair_name Server#keypair_name}
  */
  readonly keypairName?: string;
  /**
  * Labels are key-value string pairs which can be attached to a resource container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#labels Server#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the type of the machine for the server. Possible values are documented in [Virtual machine flavors](https://docs.stackit.cloud/stackit/en/virtual-machine-flavors-75137231.html)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#machine_type Server#machine_type}
  */
  readonly machineType: string;
  /**
  * The name of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#name Server#name}
  */
  readonly name: string;
  /**
  * The IDs of network interfaces which should be attached to the server. Updating it will recreate the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#network_interfaces Server#network_interfaces}
  */
  readonly networkInterfaces?: string[];
  /**
  * STACKIT project ID to which the server is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#project_id Server#project_id}
  */
  readonly projectId: string;
  /**
  * User data that is passed via cloud-init to the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#user_data Server#user_data}
  */
  readonly userData?: string;
}
export interface ServerBootVolume {
  /**
  * Delete the volume during the termination of the server. Only allowed when `source_type` is `image`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#delete_on_termination Server#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * The performance class of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#performance_class Server#performance_class}
  */
  readonly performanceClass?: string;
  /**
  * The size of the boot volume in GB. Must be provided when `source_type` is `image`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#size Server#size}
  */
  readonly size?: number;
  /**
  * The ID of the source, either image ID or volume ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#source_id Server#source_id}
  */
  readonly sourceId: string;
  /**
  * The type of the source. Possible values are: `volume`, `image`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#source_type Server#source_type}
  */
  readonly sourceType: string;
}

export function serverBootVolumeToTerraform(struct?: ServerBootVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    performance_class: cdktf.stringToTerraform(struct!.performanceClass),
    size: cdktf.numberToTerraform(struct!.size),
    source_id: cdktf.stringToTerraform(struct!.sourceId),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function serverBootVolumeToHclTerraform(struct?: ServerBootVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_on_termination: {
      value: cdktf.booleanToHclTerraform(struct!.deleteOnTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    performance_class: {
      value: cdktf.stringToHclTerraform(struct!.performanceClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerBootVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerBootVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._performanceClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceClass = this._performanceClass;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerBootVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteOnTermination = undefined;
      this._performanceClass = undefined;
      this._size = undefined;
      this._sourceId = undefined;
      this._sourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteOnTermination = value.deleteOnTermination;
      this._performanceClass = value.performanceClass;
      this._size = value.size;
      this._sourceId = value.sourceId;
      this._sourceType = value.sourceType;
    }
  }

  // delete_on_termination - computed: true, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // performance_class - computed: false, optional: true, required: false
  private _performanceClass?: string; 
  public get performanceClass() {
    return this.getStringAttribute('performance_class');
  }
  public set performanceClass(value: string) {
    this._performanceClass = value;
  }
  public resetPerformanceClass() {
    this._performanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceClassInput() {
    return this._performanceClass;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server stackit_server}
*/
export class Server extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Server to import
  * @param importFromId The id of the existing Server that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Server to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/server stackit_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerConfig
  */
  public constructor(scope: Construct, id: string, config: ServerConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_server',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.72.0',
        providerVersionConstraint: '0.72.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._affinityGroup = config.affinityGroup;
    this._availabilityZone = config.availabilityZone;
    this._bootVolume.internalValue = config.bootVolume;
    this._desiredStatus = config.desiredStatus;
    this._imageId = config.imageId;
    this._keypairName = config.keypairName;
    this._labels = config.labels;
    this._machineType = config.machineType;
    this._name = config.name;
    this._networkInterfaces = config.networkInterfaces;
    this._projectId = config.projectId;
    this._userData = config.userData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_group - computed: false, optional: true, required: false
  private _affinityGroup?: string; 
  public get affinityGroup() {
    return this.getStringAttribute('affinity_group');
  }
  public set affinityGroup(value: string) {
    this._affinityGroup = value;
  }
  public resetAffinityGroup() {
    this._affinityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityGroupInput() {
    return this._affinityGroup;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // boot_volume - computed: false, optional: true, required: false
  private _bootVolume = new ServerBootVolumeOutputReference(this, "boot_volume");
  public get bootVolume() {
    return this._bootVolume;
  }
  public putBootVolume(value: ServerBootVolume) {
    this._bootVolume.internalValue = value;
  }
  public resetBootVolume() {
    this._bootVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeInput() {
    return this._bootVolume.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // desired_status - computed: false, optional: true, required: false
  private _desiredStatus?: string; 
  public get desiredStatus() {
    return this.getStringAttribute('desired_status');
  }
  public set desiredStatus(value: string) {
    this._desiredStatus = value;
  }
  public resetDesiredStatus() {
    this._desiredStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStatusInput() {
    return this._desiredStatus;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // keypair_name - computed: false, optional: true, required: false
  private _keypairName?: string; 
  public get keypairName() {
    return this.getStringAttribute('keypair_name');
  }
  public set keypairName(value: string) {
    this._keypairName = value;
  }
  public resetKeypairName() {
    this._keypairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairNameInput() {
    return this._keypairName;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // launched_at - computed: true, optional: false, required: false
  public get launchedAt() {
    return this.getStringAttribute('launched_at');
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
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

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces?: string[]; 
  public get networkInterfaces() {
    return this.getListAttribute('network_interfaces');
  }
  public set networkInterfaces(value: string[]) {
    this._networkInterfaces = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getStringAttribute('server_id');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      affinity_group: cdktf.stringToTerraform(this._affinityGroup),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      boot_volume: serverBootVolumeToTerraform(this._bootVolume.internalValue),
      desired_status: cdktf.stringToTerraform(this._desiredStatus),
      image_id: cdktf.stringToTerraform(this._imageId),
      keypair_name: cdktf.stringToTerraform(this._keypairName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      machine_type: cdktf.stringToTerraform(this._machineType),
      name: cdktf.stringToTerraform(this._name),
      network_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkInterfaces),
      project_id: cdktf.stringToTerraform(this._projectId),
      user_data: cdktf.stringToTerraform(this._userData),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      affinity_group: {
        value: cdktf.stringToHclTerraform(this._affinityGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boot_volume: {
        value: serverBootVolumeToHclTerraform(this._bootVolume.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerBootVolume",
      },
      desired_status: {
        value: cdktf.stringToHclTerraform(this._desiredStatus),
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
      keypair_name: {
        value: cdktf.stringToHclTerraform(this._keypairName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
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
      network_interfaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkInterfaces),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
