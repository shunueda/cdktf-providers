// https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Size of boot disk volume, in GB. Can be changed until the node is started once. Will require a replace in that case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#boot_disk_size Node#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Node configuration. Can be changed until the node is started once. Will require a replace in that case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#configuration Node#configuration}
  */
  readonly configuration?: string;
  /**
  * List of node configurations. Can be changed until the node is started once. Will require a replace in that case. Note that this requires the `named_configs` provider setting and also at least CML 2.7.0. Using `configuration` and `configurations` is mutually exclusive!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#configurations Node#configurations}
  */
  readonly configurations?: NodeConfigurations[] | cdktf.IResolvable;
  /**
  * CPU limit in %, 20-100. Can be changed until the node is started once. Will require a replace in that case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#cpu_limit Node#cpu_limit}
  */
  readonly cpuLimit?: number;
  /**
  * Number of CPUs. Can be changed until the node is started once. Will require a replace in that case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#cpus Node#cpus}
  */
  readonly cpus?: number;
  /**
  * Size of data volume, in GB. Can be changed until the node is started once. Will require a replace in that case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#data_volume Node#data_volume}
  */
  readonly dataVolume?: number;
  /**
  * If true, links are not shown in the topology. This is a visual cue and does not influence any simulation function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#hide_links Node#hide_links}
  */
  readonly hideLinks?: boolean | cdktf.IResolvable;
  /**
  * Image definition, must match the node type. Can be changed until the node is started once. Will require a replace in that case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#imagedefinition Node#imagedefinition}
  */
  readonly imagedefinition?: string;
  /**
  * Lab ID containing the node (UUID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#lab_id Node#lab_id}
  */
  readonly labId: string;
  /**
  * Node label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#label Node#label}
  */
  readonly label: string;
  /**
  * Node definition / type. This can only be set at create time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#nodedefinition Node#nodedefinition}
  */
  readonly nodedefinition: string;
  /**
  * Amount of RAM, megabytes. Can be changed until the node is started once. Will require a replace in that case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#ram Node#ram}
  */
  readonly ram?: number;
  /**
  * Set of tags of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#tags Node#tags}
  */
  readonly tags?: string[];
  /**
  * X coordinate on the topology canvas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#x Node#x}
  */
  readonly x?: number;
  /**
  * Y coordinate on the topology canvas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#y Node#y}
  */
  readonly y?: number;
}
export interface NodeConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#content Node#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#name Node#name}
  */
  readonly name?: string;
}

export function nodeConfigurationsToTerraform(struct?: NodeConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function nodeConfigurationsToHclTerraform(struct?: NodeConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodeConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._name = value.name;
    }
  }

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class NodeConfigurationsList extends cdktf.ComplexList {
  public internalValue? : NodeConfigurations[] | cdktf.IResolvable

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
  public get(index: number): NodeConfigurationsOutputReference {
    return new NodeConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeInterfaces {
}

export function nodeInterfacesToTerraform(struct?: NodeInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nodeInterfacesToHclTerraform(struct?: NodeInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NodeInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NodeInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip4 - computed: true, optional: false, required: false
  public get ip4() {
    return this.getListAttribute('ip4');
  }

  // ip6 - computed: true, optional: false, required: false
  public get ip6() {
    return this.getListAttribute('ip6');
  }

  // is_connected - computed: true, optional: false, required: false
  public get isConnected() {
    return this.getBooleanAttribute('is_connected');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class NodeInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): NodeInterfacesOutputReference {
    return new NodeInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeSerialDevices {
}

export function nodeSerialDevicesToTerraform(struct?: NodeSerialDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nodeSerialDevicesToHclTerraform(struct?: NodeSerialDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NodeSerialDevicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NodeSerialDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeSerialDevices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // console_key - computed: true, optional: false, required: false
  public get consoleKey() {
    return this.getStringAttribute('console_key');
  }

  // device_number - computed: true, optional: false, required: false
  public get deviceNumber() {
    return this.getNumberAttribute('device_number');
  }
}

export class NodeSerialDevicesList extends cdktf.ComplexList {

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
  public get(index: number): NodeSerialDevicesOutputReference {
    return new NodeSerialDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node cml2_node}
*/
export class Node extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cml2_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Node resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Node to import
  * @param importFromId The id of the existing Node that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Node to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cml2_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/node cml2_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodeConfig
  */
  public constructor(scope: Construct, id: string, config: NodeConfig) {
    super(scope, id, {
      terraformResourceType: 'cml2_node',
      terraformGeneratorMetadata: {
        providerName: 'cml2',
        providerVersion: '0.8.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bootDiskSize = config.bootDiskSize;
    this._configuration = config.configuration;
    this._configurations.internalValue = config.configurations;
    this._cpuLimit = config.cpuLimit;
    this._cpus = config.cpus;
    this._dataVolume = config.dataVolume;
    this._hideLinks = config.hideLinks;
    this._imagedefinition = config.imagedefinition;
    this._labId = config.labId;
    this._label = config.label;
    this._nodedefinition = config.nodedefinition;
    this._ram = config.ram;
    this._tags = config.tags;
    this._x = config.x;
    this._y = config.y;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_disk_size - computed: true, optional: true, required: false
  private _bootDiskSize?: number; 
  public get bootDiskSize() {
    return this.getNumberAttribute('boot_disk_size');
  }
  public set bootDiskSize(value: number) {
    this._bootDiskSize = value;
  }
  public resetBootDiskSize() {
    this._bootDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeInput() {
    return this._bootDiskSize;
  }

  // compute_id - computed: true, optional: false, required: false
  public get computeId() {
    return this.getStringAttribute('compute_id');
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // configurations - computed: true, optional: true, required: false
  private _configurations = new NodeConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }
  public putConfigurations(value: NodeConfigurations[] | cdktf.IResolvable) {
    this._configurations.internalValue = value;
  }
  public resetConfigurations() {
    this._configurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations.internalValue;
  }

  // cpu_limit - computed: true, optional: true, required: false
  private _cpuLimit?: number; 
  public get cpuLimit() {
    return this.getNumberAttribute('cpu_limit');
  }
  public set cpuLimit(value: number) {
    this._cpuLimit = value;
  }
  public resetCpuLimit() {
    this._cpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitInput() {
    return this._cpuLimit;
  }

  // cpus - computed: true, optional: true, required: false
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  public resetCpus() {
    this._cpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // data_volume - computed: true, optional: true, required: false
  private _dataVolume?: number; 
  public get dataVolume() {
    return this.getNumberAttribute('data_volume');
  }
  public set dataVolume(value: number) {
    this._dataVolume = value;
  }
  public resetDataVolume() {
    this._dataVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVolumeInput() {
    return this._dataVolume;
  }

  // hide_links - computed: true, optional: true, required: false
  private _hideLinks?: boolean | cdktf.IResolvable; 
  public get hideLinks() {
    return this.getBooleanAttribute('hide_links');
  }
  public set hideLinks(value: boolean | cdktf.IResolvable) {
    this._hideLinks = value;
  }
  public resetHideLinks() {
    this._hideLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideLinksInput() {
    return this._hideLinks;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // imagedefinition - computed: true, optional: true, required: false
  private _imagedefinition?: string; 
  public get imagedefinition() {
    return this.getStringAttribute('imagedefinition');
  }
  public set imagedefinition(value: string) {
    this._imagedefinition = value;
  }
  public resetImagedefinition() {
    this._imagedefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagedefinitionInput() {
    return this._imagedefinition;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new NodeInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // lab_id - computed: false, optional: false, required: true
  private _labId?: string; 
  public get labId() {
    return this.getStringAttribute('lab_id');
  }
  public set labId(value: string) {
    this._labId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labIdInput() {
    return this._labId;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // nodedefinition - computed: false, optional: false, required: true
  private _nodedefinition?: string; 
  public get nodedefinition() {
    return this.getStringAttribute('nodedefinition');
  }
  public set nodedefinition(value: string) {
    this._nodedefinition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodedefinitionInput() {
    return this._nodedefinition;
  }

  // ram - computed: true, optional: true, required: false
  private _ram?: number; 
  public get ram() {
    return this.getNumberAttribute('ram');
  }
  public set ram(value: number) {
    this._ram = value;
  }
  public resetRam() {
    this._ram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramInput() {
    return this._ram;
  }

  // serial_devices - computed: true, optional: false, required: false
  private _serialDevices = new NodeSerialDevicesList(this, "serial_devices", false);
  public get serialDevices() {
    return this._serialDevices;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vnc_key - computed: true, optional: false, required: false
  public get vncKey() {
    return this.getStringAttribute('vnc_key');
  }

  // x - computed: true, optional: true, required: false
  private _x?: number; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x;
  }

  // y - computed: true, optional: true, required: false
  private _y?: number; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      boot_disk_size: cdktf.numberToTerraform(this._bootDiskSize),
      configuration: cdktf.stringToTerraform(this._configuration),
      configurations: cdktf.listMapper(nodeConfigurationsToTerraform, false)(this._configurations.internalValue),
      cpu_limit: cdktf.numberToTerraform(this._cpuLimit),
      cpus: cdktf.numberToTerraform(this._cpus),
      data_volume: cdktf.numberToTerraform(this._dataVolume),
      hide_links: cdktf.booleanToTerraform(this._hideLinks),
      imagedefinition: cdktf.stringToTerraform(this._imagedefinition),
      lab_id: cdktf.stringToTerraform(this._labId),
      label: cdktf.stringToTerraform(this._label),
      nodedefinition: cdktf.stringToTerraform(this._nodedefinition),
      ram: cdktf.numberToTerraform(this._ram),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      x: cdktf.numberToTerraform(this._x),
      y: cdktf.numberToTerraform(this._y),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      boot_disk_size: {
        value: cdktf.numberToHclTerraform(this._bootDiskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configurations: {
        value: cdktf.listMapperHcl(nodeConfigurationsToHclTerraform, false)(this._configurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeConfigurationsList",
      },
      cpu_limit: {
        value: cdktf.numberToHclTerraform(this._cpuLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpus: {
        value: cdktf.numberToHclTerraform(this._cpus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_volume: {
        value: cdktf.numberToHclTerraform(this._dataVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hide_links: {
        value: cdktf.booleanToHclTerraform(this._hideLinks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      imagedefinition: {
        value: cdktf.stringToHclTerraform(this._imagedefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lab_id: {
        value: cdktf.stringToHclTerraform(this._labId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodedefinition: {
        value: cdktf.stringToHclTerraform(this._nodedefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ram: {
        value: cdktf.numberToHclTerraform(this._ram),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      x: {
        value: cdktf.numberToHclTerraform(this._x),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      y: {
        value: cdktf.numberToHclTerraform(this._y),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
