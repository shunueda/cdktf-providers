// https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LifecycleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Map of node configurations to store into nodes, the key is the label of the node, the value is the node configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#configs Lifecycle#configs}
  */
  readonly configs?: { [key: string]: string };
  /**
  * List of node and link IDs the lab consists of. Works only when a (lab) ID is provided and no topology is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#elements Lifecycle#elements}
  */
  readonly elements?: string[];
  /**
  * Lab identifier, a UUID. If set, `elements` must be configured as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#lab_id Lifecycle#lab_id}
  */
  readonly labId?: string;
  /**
  * Map of named node configurations to store into nodes, the key is the label of the node, the value is the node configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#named_configs Lifecycle#named_configs}
  */
  readonly namedConfigs?: { [key: string]: LifecycleNamedConfigsList } | cdktf.IResolvable;
  /**
  * Defines in what sequence nodes are launched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#staging Lifecycle#staging}
  */
  readonly staging?: LifecycleStaging;
  /**
  * Lab state, one of `DEFINED_ON_CORE`, `STARTED` or `STOPPED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#state Lifecycle#state}
  */
  readonly state?: string;
  /**
  * Timeouts for operations, given as a parsable string as in `60m` or `2h`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#timeouts Lifecycle#timeouts}
  */
  readonly timeouts?: LifecycleTimeouts;
  /**
  * The topology to start, must be valid YAML. Can't be configured if the lab `id` is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#topology Lifecycle#topology}
  */
  readonly topology?: string;
  /**
  * If set to `true` then wait until the lab has completely `BOOTED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#wait Lifecycle#wait}
  */
  readonly wait?: boolean | cdktf.IResolvable;
}
export interface LifecycleNamedConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#content Lifecycle#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#name Lifecycle#name}
  */
  readonly name?: string;
}

export function lifecycleNamedConfigsToTerraform(struct?: LifecycleNamedConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function lifecycleNamedConfigsToHclTerraform(struct?: LifecycleNamedConfigs | cdktf.IResolvable): any {
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

export class LifecycleNamedConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LifecycleNamedConfigs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LifecycleNamedConfigs | cdktf.IResolvable | undefined) {
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

  // content - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
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

export class LifecycleNamedConfigsListMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: LifecycleNamedConfigs[] } | cdktf.IResolvable

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
  public get(key: string): LifecycleNamedConfigsList {
    return new LifecycleNamedConfigsList(this, `[${key}]`, false);
  }
}

export class LifecycleNamedConfigsList extends cdktf.ComplexList {
  public internalValue? : LifecycleNamedConfigs[] | cdktf.IResolvable

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
  public get(index: number): LifecycleNamedConfigsOutputReference {
    return new LifecycleNamedConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LifecycleNodesConfigurations {
}

export function lifecycleNodesConfigurationsToTerraform(struct?: LifecycleNodesConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function lifecycleNodesConfigurationsToHclTerraform(struct?: LifecycleNodesConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LifecycleNodesConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LifecycleNodesConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecycleNodesConfigurations | cdktf.IResolvable | undefined) {
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

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class LifecycleNodesConfigurationsList extends cdktf.ComplexList {
  public internalValue? : LifecycleNodesConfigurations[] | cdktf.IResolvable

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
  public get(index: number): LifecycleNodesConfigurationsOutputReference {
    return new LifecycleNodesConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LifecycleNodesInterfaces {
}

export function lifecycleNodesInterfacesToTerraform(struct?: LifecycleNodesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function lifecycleNodesInterfacesToHclTerraform(struct?: LifecycleNodesInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LifecycleNodesInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LifecycleNodesInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecycleNodesInterfaces | undefined) {
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

export class LifecycleNodesInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): LifecycleNodesInterfacesOutputReference {
    return new LifecycleNodesInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LifecycleNodesSerialDevices {
}

export function lifecycleNodesSerialDevicesToTerraform(struct?: LifecycleNodesSerialDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function lifecycleNodesSerialDevicesToHclTerraform(struct?: LifecycleNodesSerialDevices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LifecycleNodesSerialDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LifecycleNodesSerialDevices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecycleNodesSerialDevices | undefined) {
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

export class LifecycleNodesSerialDevicesList extends cdktf.ComplexList {

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
  public get(index: number): LifecycleNodesSerialDevicesOutputReference {
    return new LifecycleNodesSerialDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LifecycleNodes {
  /**
  * Size of boot disk volume, in GB. Can be changed until the node is started once. Will require a replace in that case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#boot_disk_size Lifecycle#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Node configuration. Can be changed until the node is started once. Will require a replace in that case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#configuration Lifecycle#configuration}
  */
  readonly configuration?: string;
  /**
  * List of node configurations. Can be changed until the node is started once. Will require a replace in that case. Note that this requires the `named_configs` provider setting and also at least CML 2.7.0. Using `configuration` and `configurations` is mutually exclusive!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#configurations Lifecycle#configurations}
  */
  readonly configurations?: LifecycleNodesConfigurations[] | cdktf.IResolvable;
  /**
  * CPU limit in %, 20-100. Can be changed until the node is started once. Will require a replace in that case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#cpu_limit Lifecycle#cpu_limit}
  */
  readonly cpuLimit?: number;
  /**
  * Number of CPUs. Can be changed until the node is started once. Will require a replace in that case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#cpus Lifecycle#cpus}
  */
  readonly cpus?: number;
  /**
  * Size of data volume, in GB. Can be changed until the node is started once. Will require a replace in that case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#data_volume Lifecycle#data_volume}
  */
  readonly dataVolume?: number;
  /**
  * If true, links are not shown in the topology. This is a visual cue and does not influence any simulation function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#hide_links Lifecycle#hide_links}
  */
  readonly hideLinks?: boolean | cdktf.IResolvable;
  /**
  * Image definition, must match the node type. Can be changed until the node is started once. Will require a replace in that case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#imagedefinition Lifecycle#imagedefinition}
  */
  readonly imagedefinition?: string;
  /**
  * Lab ID containing the node (UUID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#lab_id Lifecycle#lab_id}
  */
  readonly labId: string;
  /**
  * Node label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#label Lifecycle#label}
  */
  readonly label: string;
  /**
  * Node definition / type. This can only be set at create time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#nodedefinition Lifecycle#nodedefinition}
  */
  readonly nodedefinition: string;
  /**
  * Amount of RAM, megabytes. Can be changed until the node is started once. Will require a replace in that case.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#ram Lifecycle#ram}
  */
  readonly ram?: number;
  /**
  * Set of tags of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#tags Lifecycle#tags}
  */
  readonly tags?: string[];
  /**
  * X coordinate on the topology canvas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#x Lifecycle#x}
  */
  readonly x?: number;
  /**
  * Y coordinate on the topology canvas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#y Lifecycle#y}
  */
  readonly y?: number;
}

export function lifecycleNodesToTerraform(struct?: LifecycleNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size: cdktf.numberToTerraform(struct!.bootDiskSize),
    configuration: cdktf.stringToTerraform(struct!.configuration),
    configurations: cdktf.listMapper(lifecycleNodesConfigurationsToTerraform, false)(struct!.configurations),
    cpu_limit: cdktf.numberToTerraform(struct!.cpuLimit),
    cpus: cdktf.numberToTerraform(struct!.cpus),
    data_volume: cdktf.numberToTerraform(struct!.dataVolume),
    hide_links: cdktf.booleanToTerraform(struct!.hideLinks),
    imagedefinition: cdktf.stringToTerraform(struct!.imagedefinition),
    lab_id: cdktf.stringToTerraform(struct!.labId),
    label: cdktf.stringToTerraform(struct!.label),
    nodedefinition: cdktf.stringToTerraform(struct!.nodedefinition),
    ram: cdktf.numberToTerraform(struct!.ram),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    x: cdktf.numberToTerraform(struct!.x),
    y: cdktf.numberToTerraform(struct!.y),
  }
}


export function lifecycleNodesToHclTerraform(struct?: LifecycleNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.bootDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configurations: {
      value: cdktf.listMapperHcl(lifecycleNodesConfigurationsToHclTerraform, false)(struct!.configurations),
      isBlock: true,
      type: "list",
      storageClassType: "LifecycleNodesConfigurationsList",
    },
    cpu_limit: {
      value: cdktf.numberToHclTerraform(struct!.cpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpus: {
      value: cdktf.numberToHclTerraform(struct!.cpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_volume: {
      value: cdktf.numberToHclTerraform(struct!.dataVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hide_links: {
      value: cdktf.booleanToHclTerraform(struct!.hideLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    imagedefinition: {
      value: cdktf.stringToHclTerraform(struct!.imagedefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lab_id: {
      value: cdktf.stringToHclTerraform(struct!.labId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodedefinition: {
      value: cdktf.stringToHclTerraform(struct!.nodedefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ram: {
      value: cdktf.numberToHclTerraform(struct!.ram),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    x: {
      value: cdktf.numberToHclTerraform(struct!.x),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    y: {
      value: cdktf.numberToHclTerraform(struct!.y),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LifecycleNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): LifecycleNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSize = this._bootDiskSize;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._configurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurations = this._configurations?.internalValue;
    }
    if (this._cpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimit = this._cpuLimit;
    }
    if (this._cpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpus = this._cpus;
    }
    if (this._dataVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVolume = this._dataVolume;
    }
    if (this._hideLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideLinks = this._hideLinks;
    }
    if (this._imagedefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagedefinition = this._imagedefinition;
    }
    if (this._labId !== undefined) {
      hasAnyValues = true;
      internalValueResult.labId = this._labId;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._nodedefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodedefinition = this._nodedefinition;
    }
    if (this._ram !== undefined) {
      hasAnyValues = true;
      internalValueResult.ram = this._ram;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._x !== undefined) {
      hasAnyValues = true;
      internalValueResult.x = this._x;
    }
    if (this._y !== undefined) {
      hasAnyValues = true;
      internalValueResult.y = this._y;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecycleNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskSize = undefined;
      this._configuration = undefined;
      this._configurations.internalValue = undefined;
      this._cpuLimit = undefined;
      this._cpus = undefined;
      this._dataVolume = undefined;
      this._hideLinks = undefined;
      this._imagedefinition = undefined;
      this._labId = undefined;
      this._label = undefined;
      this._nodedefinition = undefined;
      this._ram = undefined;
      this._tags = undefined;
      this._x = undefined;
      this._y = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskSize = value.bootDiskSize;
      this._configuration = value.configuration;
      this._configurations.internalValue = value.configurations;
      this._cpuLimit = value.cpuLimit;
      this._cpus = value.cpus;
      this._dataVolume = value.dataVolume;
      this._hideLinks = value.hideLinks;
      this._imagedefinition = value.imagedefinition;
      this._labId = value.labId;
      this._label = value.label;
      this._nodedefinition = value.nodedefinition;
      this._ram = value.ram;
      this._tags = value.tags;
      this._x = value.x;
      this._y = value.y;
    }
  }

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
  private _configurations = new LifecycleNodesConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }
  public putConfigurations(value: LifecycleNodesConfigurations[] | cdktf.IResolvable) {
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
  private _interfaces = new LifecycleNodesInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // lab_id - computed: true, optional: false, required: true
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

  // label - computed: true, optional: false, required: true
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

  // nodedefinition - computed: true, optional: false, required: true
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
  private _serialDevices = new LifecycleNodesSerialDevicesList(this, "serial_devices", false);
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
}

export class LifecycleNodesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: LifecycleNodes } | cdktf.IResolvable

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
  public get(key: string): LifecycleNodesOutputReference {
    return new LifecycleNodesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface LifecycleStaging {
  /**
  * Ordered list of node tags, controls node launch. Nodes currently not launched will be launched in the stage with the matching tag. Tags must match exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#stages Lifecycle#stages}
  */
  readonly stages: string[];
  /**
  * If set to `true` (which is the default) then all nodes which are not matched by the stages list and which are still unstarted after running all stages will be started.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#start_remaining Lifecycle#start_remaining}
  */
  readonly startRemaining?: boolean | cdktf.IResolvable;
}

export function lifecycleStagingToTerraform(struct?: LifecycleStaging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.stages),
    start_remaining: cdktf.booleanToTerraform(struct!.startRemaining),
  }
}


export function lifecycleStagingToHclTerraform(struct?: LifecycleStaging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.stages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    start_remaining: {
      value: cdktf.booleanToHclTerraform(struct!.startRemaining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LifecycleStagingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LifecycleStaging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stages !== undefined) {
      hasAnyValues = true;
      internalValueResult.stages = this._stages;
    }
    if (this._startRemaining !== undefined) {
      hasAnyValues = true;
      internalValueResult.startRemaining = this._startRemaining;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecycleStaging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stages = undefined;
      this._startRemaining = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stages = value.stages;
      this._startRemaining = value.startRemaining;
    }
  }

  // stages - computed: false, optional: false, required: true
  private _stages?: string[]; 
  public get stages() {
    return this.getListAttribute('stages');
  }
  public set stages(value: string[]) {
    this._stages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages;
  }

  // start_remaining - computed: false, optional: true, required: false
  private _startRemaining?: boolean | cdktf.IResolvable; 
  public get startRemaining() {
    return this.getBooleanAttribute('start_remaining');
  }
  public set startRemaining(value: boolean | cdktf.IResolvable) {
    this._startRemaining = value;
  }
  public resetStartRemaining() {
    this._startRemaining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startRemainingInput() {
    return this._startRemaining;
  }
}
export interface LifecycleTimeouts {
  /**
  * Create timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#create Lifecycle#create}
  */
  readonly create: string;
  /**
  * Delete timeout (currently unused).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#delete Lifecycle#delete}
  */
  readonly delete?: string;
  /**
  * Update timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#update Lifecycle#update}
  */
  readonly update: string;
}

export function lifecycleTimeoutsToTerraform(struct?: LifecycleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function lifecycleTimeoutsToHclTerraform(struct?: LifecycleTimeouts | cdktf.IResolvable): any {
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

export class LifecycleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LifecycleTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LifecycleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._update = value.update;
    }
  }

  // create - computed: false, optional: false, required: true
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
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

  // update - computed: false, optional: false, required: true
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle cml2_lifecycle}
*/
export class Lifecycle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cml2_lifecycle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lifecycle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lifecycle to import
  * @param importFromId The id of the existing Lifecycle that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lifecycle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cml2_lifecycle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/cml2/0.8.5/docs/resources/lifecycle cml2_lifecycle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LifecycleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LifecycleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cml2_lifecycle',
      terraformGeneratorMetadata: {
        providerName: 'cml2',
        providerVersion: '0.8.5',
        providerVersionConstraint: '0.8.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configs = config.configs;
    this._elements = config.elements;
    this._labId = config.labId;
    this._namedConfigs.internalValue = config.namedConfigs;
    this._staging.internalValue = config.staging;
    this._state = config.state;
    this._timeouts.internalValue = config.timeouts;
    this._topology = config.topology;
    this._wait = config.wait;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // booted - computed: true, optional: false, required: false
  public get booted() {
    return this.getBooleanAttribute('booted');
  }

  // configs - computed: false, optional: true, required: false
  private _configs?: { [key: string]: string }; 
  public get configs() {
    return this.getStringMapAttribute('configs');
  }
  public set configs(value: { [key: string]: string }) {
    this._configs = value;
  }
  public resetConfigs() {
    this._configs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configsInput() {
    return this._configs;
  }

  // elements - computed: false, optional: true, required: false
  private _elements?: string[]; 
  public get elements() {
    return this.getListAttribute('elements');
  }
  public set elements(value: string[]) {
    this._elements = value;
  }
  public resetElements() {
    this._elements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lab_id - computed: true, optional: true, required: false
  private _labId?: string; 
  public get labId() {
    return this.getStringAttribute('lab_id');
  }
  public set labId(value: string) {
    this._labId = value;
  }
  public resetLabId() {
    this._labId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labIdInput() {
    return this._labId;
  }

  // named_configs - computed: false, optional: true, required: false
  private _namedConfigs = new LifecycleNamedConfigsListMap(this, "named_configs");
  public get namedConfigs() {
    return this._namedConfigs;
  }
  public putNamedConfigs(value: { [key: string]: LifecycleNamedConfigsList } | cdktf.IResolvable) {
    this._namedConfigs.internalValue = value;
  }
  public resetNamedConfigs() {
    this._namedConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedConfigsInput() {
    return this._namedConfigs.internalValue;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new LifecycleNodesMap(this, "nodes");
  public get nodes() {
    return this._nodes;
  }

  // staging - computed: false, optional: true, required: false
  private _staging = new LifecycleStagingOutputReference(this, "staging");
  public get staging() {
    return this._staging;
  }
  public putStaging(value: LifecycleStaging) {
    this._staging.internalValue = value;
  }
  public resetStaging() {
    this._staging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingInput() {
    return this._staging.internalValue;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LifecycleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LifecycleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // topology - computed: false, optional: true, required: false
  private _topology?: string; 
  public get topology() {
    return this.getStringAttribute('topology');
  }
  public set topology(value: string) {
    this._topology = value;
  }
  public resetTopology() {
    this._topology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: boolean | cdktf.IResolvable; 
  public get wait() {
    return this.getBooleanAttribute('wait');
  }
  public set wait(value: boolean | cdktf.IResolvable) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configs: cdktf.hashMapper(cdktf.stringToTerraform)(this._configs),
      elements: cdktf.listMapper(cdktf.stringToTerraform, false)(this._elements),
      lab_id: cdktf.stringToTerraform(this._labId),
      named_configs: cdktf.hashMapper(cdktf.listMapper(lifecycleNamedConfigsToTerraform, false))(this._namedConfigs.internalValue),
      staging: lifecycleStagingToTerraform(this._staging.internalValue),
      state: cdktf.stringToTerraform(this._state),
      timeouts: lifecycleTimeoutsToTerraform(this._timeouts.internalValue),
      topology: cdktf.stringToTerraform(this._topology),
      wait: cdktf.booleanToTerraform(this._wait),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._configs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      elements: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._elements),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      lab_id: {
        value: cdktf.stringToHclTerraform(this._labId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      named_configs: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(lifecycleNamedConfigsToHclTerraform, false))(this._namedConfigs.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "LifecycleNamedConfigsListMap",
      },
      staging: {
        value: lifecycleStagingToHclTerraform(this._staging.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LifecycleStaging",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: lifecycleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LifecycleTimeouts",
      },
      topology: {
        value: cdktf.stringToHclTerraform(this._topology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait: {
        value: cdktf.booleanToHclTerraform(this._wait),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
