// https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#containers ContainerStack#containers}
  */
  readonly containers: { [key: string]: ContainerStackContainers } | cdktf.IResolvable;
  /**
  * Set this flag to use the project's default stack. Otherwise, a new stack will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#default_stack ContainerStack#default_stack}
  */
  readonly defaultStack?: boolean | cdktf.IResolvable;
  /**
  * The ID of the project the container_stack belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#project_id ContainerStack#project_id}
  */
  readonly projectId: string;
  /**
  * A map of volumes that should be provisioned for this stack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#volumes ContainerStack#volumes}
  */
  readonly volumes?: { [key: string]: ContainerStackVolumes } | cdktf.IResolvable;
}
export interface ContainerStackContainersPorts {
  /**
  * The container port to expose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#container_port ContainerStack#container_port}
  */
  readonly containerPort: number;
  /**
  * The protocol to use for the port. Currently, the only supported value is `tcp`, which is also the default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#protocol ContainerStack#protocol}
  */
  readonly protocol?: string;
  /**
  * The public port to expose; when omitted, this will default to the same value as `container_port`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#public_port ContainerStack#public_port}
  */
  readonly publicPort?: number;
}

export function containerStackContainersPortsToTerraform(struct?: ContainerStackContainersPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    public_port: cdktf.numberToTerraform(struct!.publicPort),
  }
}


export function containerStackContainersPortsToHclTerraform(struct?: ContainerStackContainersPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_port: {
      value: cdktf.numberToHclTerraform(struct!.publicPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerStackContainersPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerStackContainersPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._publicPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicPort = this._publicPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerStackContainersPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
      this._protocol = undefined;
      this._publicPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
      this._protocol = value.protocol;
      this._publicPort = value.publicPort;
    }
  }

  // container_port - computed: false, optional: false, required: true
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // public_port - computed: true, optional: true, required: false
  private _publicPort?: number; 
  public get publicPort() {
    return this.getNumberAttribute('public_port');
  }
  public set publicPort(value: number) {
    this._publicPort = value;
  }
  public resetPublicPort() {
    this._publicPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPortInput() {
    return this._publicPort;
  }
}

export class ContainerStackContainersPortsList extends cdktf.ComplexList {
  public internalValue? : ContainerStackContainersPorts[] | cdktf.IResolvable

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
  public get(index: number): ContainerStackContainersPortsOutputReference {
    return new ContainerStackContainersPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerStackContainersVolumes {
  /**
  * The path to mount the volume to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#mount_path ContainerStack#mount_path}
  */
  readonly mountPath: string;
  /**
  * Path to a directory in the project filesystem.
  * 
  * Either this attribute, or `volume` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#project_path ContainerStack#project_path}
  */
  readonly projectPath?: string;
  /**
  * The name of the volume to mount. A volume of this name must be specified in the top-level `volumes` attribute.
  * 
  * Either this attribute, or `project_path` must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#volume ContainerStack#volume}
  */
  readonly volume?: string;
}

export function containerStackContainersVolumesToTerraform(struct?: ContainerStackContainersVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    project_path: cdktf.stringToTerraform(struct!.projectPath),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}


export function containerStackContainersVolumesToHclTerraform(struct?: ContainerStackContainersVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_path: {
      value: cdktf.stringToHclTerraform(struct!.projectPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.stringToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerStackContainersVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerStackContainersVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._projectPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectPath = this._projectPath;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerStackContainersVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._projectPath = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._projectPath = value.projectPath;
      this._volume = value.volume;
    }
  }

  // mount_path - computed: true, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // project_path - computed: true, optional: true, required: false
  private _projectPath?: string; 
  public get projectPath() {
    return this.getStringAttribute('project_path');
  }
  public set projectPath(value: string) {
    this._projectPath = value;
  }
  public resetProjectPath() {
    this._projectPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectPathInput() {
    return this._projectPath;
  }

  // volume - computed: true, optional: true, required: false
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}

export class ContainerStackContainersVolumesList extends cdktf.ComplexList {
  public internalValue? : ContainerStackContainersVolumes[] | cdktf.IResolvable

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
  public get(index: number): ContainerStackContainersVolumesOutputReference {
    return new ContainerStackContainersVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerStackContainers {
  /**
  * The command to run inside the container.
  * 
  * Note that this is a required value, even if the image already has a default command. To use the default command, use the `mittwald_container_image` data source to first determine the default command, and then use that value here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#command ContainerStack#command}
  */
  readonly command: string[];
  /**
  * A description for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#description ContainerStack#description}
  */
  readonly description?: string;
  /**
  * The entrypoint to use for the container.
  * 
  * Note that this is a required value, even if the image already has a default entrypoint. To use the default entrypoint, use the `mittwald_container_image` data source to first determine the default entrypoint, and then use that value here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#entrypoint ContainerStack#entrypoint}
  */
  readonly entrypoint: string[];
  /**
  * A map of environment variables to set inside the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#environment ContainerStack#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * The image to use for the container. Follows the usual Docker image format, e.g. `nginx:latest` or `registry.example.com/my-image:latest`.
  * 
  *   Note that when using a non-standard registry (or a standard registry with credentials), you will probably also need to add a `mittwald_container_registry` resource somewhere in your plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#image ContainerStack#image}
  */
  readonly image: string;
  /**
  * Set this flag to **not** recreate the container if any of the configuration changes. This includes changes to the image, command, entrypoint, environment variables, and ports. If this is set, you will need to manually recreate the container to apply any changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#no_recreate_on_change ContainerStack#no_recreate_on_change}
  */
  readonly noRecreateOnChange?: boolean | cdktf.IResolvable;
  /**
  * A port to expose from the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#ports ContainerStack#ports}
  */
  readonly ports?: ContainerStackContainersPorts[] | cdktf.IResolvable;
  /**
  * Volumes to mount into the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#volumes ContainerStack#volumes}
  */
  readonly volumes?: ContainerStackContainersVolumes[] | cdktf.IResolvable;
}

export function containerStackContainersToTerraform(struct?: ContainerStackContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    description: cdktf.stringToTerraform(struct!.description),
    entrypoint: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entrypoint),
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    image: cdktf.stringToTerraform(struct!.image),
    no_recreate_on_change: cdktf.booleanToTerraform(struct!.noRecreateOnChange),
    ports: cdktf.listMapper(containerStackContainersPortsToTerraform, false)(struct!.ports),
    volumes: cdktf.listMapper(containerStackContainersVolumesToTerraform, false)(struct!.volumes),
  }
}


export function containerStackContainersToHclTerraform(struct?: ContainerStackContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entrypoint: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entrypoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_recreate_on_change: {
      value: cdktf.booleanToHclTerraform(struct!.noRecreateOnChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ports: {
      value: cdktf.listMapperHcl(containerStackContainersPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "set",
      storageClassType: "ContainerStackContainersPortsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(containerStackContainersVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "set",
      storageClassType: "ContainerStackContainersVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerStackContainersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ContainerStackContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._entrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._noRecreateOnChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRecreateOnChange = this._noRecreateOnChange;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerStackContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._description = undefined;
      this._entrypoint = undefined;
      this._environment = undefined;
      this._image = undefined;
      this._noRecreateOnChange = undefined;
      this._ports.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._description = value.description;
      this._entrypoint = value.entrypoint;
      this._environment = value.environment;
      this._image = value.image;
      this._noRecreateOnChange = value.noRecreateOnChange;
      this._ports.internalValue = value.ports;
      this._volumes.internalValue = value.volumes;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // description - computed: false, optional: true, required: false
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

  // entrypoint - computed: false, optional: false, required: true
  private _entrypoint?: string[]; 
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }
  public set entrypoint(value: string[]) {
    this._entrypoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // environment - computed: true, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // no_recreate_on_change - computed: false, optional: true, required: false
  private _noRecreateOnChange?: boolean | cdktf.IResolvable; 
  public get noRecreateOnChange() {
    return this.getBooleanAttribute('no_recreate_on_change');
  }
  public set noRecreateOnChange(value: boolean | cdktf.IResolvable) {
    this._noRecreateOnChange = value;
  }
  public resetNoRecreateOnChange() {
    this._noRecreateOnChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRecreateOnChangeInput() {
    return this._noRecreateOnChange;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new ContainerStackContainersPortsList(this, "ports", true);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: ContainerStackContainersPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // volumes - computed: true, optional: true, required: false
  private _volumes = new ContainerStackContainersVolumesList(this, "volumes", true);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: ContainerStackContainersVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}

export class ContainerStackContainersMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ContainerStackContainers } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): ContainerStackContainersOutputReference {
    return new ContainerStackContainersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface ContainerStackVolumes {
}

export function containerStackVolumesToTerraform(struct?: ContainerStackVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function containerStackVolumesToHclTerraform(struct?: ContainerStackVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ContainerStackVolumesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ContainerStackVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerStackVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class ContainerStackVolumesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ContainerStackVolumes } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): ContainerStackVolumesOutputReference {
    return new ContainerStackVolumesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack mittwald_container_stack}
*/
export class ContainerStack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mittwald_container_stack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerStack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerStack to import
  * @param importFromId The id of the existing ContainerStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerStack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mittwald_container_stack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/container_stack mittwald_container_stack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerStackConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerStackConfig) {
    super(scope, id, {
      terraformResourceType: 'mittwald_container_stack',
      terraformGeneratorMetadata: {
        providerName: 'mittwald',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containers.internalValue = config.containers;
    this._defaultStack = config.defaultStack;
    this._projectId = config.projectId;
    this._volumes.internalValue = config.volumes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // containers - computed: false, optional: false, required: true
  private _containers = new ContainerStackContainersMap(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: { [key: string]: ContainerStackContainers } | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // default_stack - computed: false, optional: true, required: false
  private _defaultStack?: boolean | cdktf.IResolvable; 
  public get defaultStack() {
    return this.getBooleanAttribute('default_stack');
  }
  public set defaultStack(value: boolean | cdktf.IResolvable) {
    this._defaultStack = value;
  }
  public resetDefaultStack() {
    this._defaultStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStackInput() {
    return this._defaultStack;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // volumes - computed: true, optional: true, required: false
  private _volumes = new ContainerStackVolumesMap(this, "volumes");
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: { [key: string]: ContainerStackVolumes } | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      containers: cdktf.hashMapper(containerStackContainersToTerraform)(this._containers.internalValue),
      default_stack: cdktf.booleanToTerraform(this._defaultStack),
      project_id: cdktf.stringToTerraform(this._projectId),
      volumes: cdktf.hashMapper(containerStackVolumesToTerraform)(this._volumes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      containers: {
        value: cdktf.hashMapperHcl(containerStackContainersToHclTerraform)(this._containers.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "ContainerStackContainersMap",
      },
      default_stack: {
        value: cdktf.booleanToHclTerraform(this._defaultStack),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volumes: {
        value: cdktf.hashMapperHcl(containerStackVolumesToHclTerraform)(this._volumes.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "ContainerStackVolumesMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
