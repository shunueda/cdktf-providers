// https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataServerspaceServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#boot_volume_size DataServerspaceServer#boot_volume_size}
  */
  readonly bootVolumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#cpu DataServerspaceServer#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#id DataServerspaceServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#location DataServerspaceServer#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#name DataServerspaceServer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#ram DataServerspaceServer#ram}
  */
  readonly ram?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#ssh_keys DataServerspaceServer#ssh_keys}
  */
  readonly sshKeys?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#state DataServerspaceServer#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#tags DataServerspaceServer#tags}
  */
  readonly tags?: string[];
  /**
  * nics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#nics DataServerspaceServer#nics}
  */
  readonly nics?: DataServerspaceServerNics[] | cdktf.IResolvable;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#volumes DataServerspaceServer#volumes}
  */
  readonly volumes?: DataServerspaceServerVolumes[] | cdktf.IResolvable;
}
export interface DataServerspaceServerNics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#bandwidth DataServerspaceServer#bandwidth}
  */
  readonly bandwidth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#network DataServerspaceServer#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#network_type DataServerspaceServer#network_type}
  */
  readonly networkType: string;
}

export function dataServerspaceServerNicsToTerraform(struct?: DataServerspaceServerNics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.numberToTerraform(struct!.bandwidth),
    network: cdktf.stringToTerraform(struct!.network),
    network_type: cdktf.stringToTerraform(struct!.networkType),
  }
}


export function dataServerspaceServerNicsToHclTerraform(struct?: DataServerspaceServerNics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: cdktf.numberToHclTerraform(struct!.bandwidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataServerspaceServerNicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataServerspaceServerNics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataServerspaceServerNics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidth = undefined;
      this._network = undefined;
      this._networkType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidth = value.bandwidth;
      this._network = value.network;
      this._networkType = value.networkType;
    }
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // network_type - computed: false, optional: false, required: true
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }
}

export class DataServerspaceServerNicsList extends cdktf.ComplexList {
  public internalValue? : DataServerspaceServerNics[] | cdktf.IResolvable

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
  public get(index: number): DataServerspaceServerNicsOutputReference {
    return new DataServerspaceServerNicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataServerspaceServerVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#id DataServerspaceServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#name DataServerspaceServer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#size DataServerspaceServer#size}
  */
  readonly size?: number;
}

export function dataServerspaceServerVolumesToTerraform(struct?: DataServerspaceServerVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function dataServerspaceServerVolumesToHclTerraform(struct?: DataServerspaceServerVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataServerspaceServerVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataServerspaceServerVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataServerspaceServerVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._size = value.size;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class DataServerspaceServerVolumesList extends cdktf.ComplexList {
  public internalValue? : DataServerspaceServerVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataServerspaceServerVolumesOutputReference {
    return new DataServerspaceServerVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server serverspace_server}
*/
export class DataServerspaceServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "serverspace_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataServerspaceServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataServerspaceServer to import
  * @param importFromId The id of the existing DataServerspaceServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataServerspaceServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "serverspace_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/itglobalcom/serverspace/0.3.2/docs/data-sources/server serverspace_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataServerspaceServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataServerspaceServerConfig) {
    super(scope, id, {
      terraformResourceType: 'serverspace_server',
      terraformGeneratorMetadata: {
        providerName: 'serverspace',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bootVolumeSize = config.bootVolumeSize;
    this._cpu = config.cpu;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._ram = config.ram;
    this._sshKeys = config.sshKeys;
    this._state = config.state;
    this._tags = config.tags;
    this._nics.internalValue = config.nics;
    this._volumes.internalValue = config.volumes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_volume_id - computed: true, optional: false, required: false
  public get bootVolumeId() {
    return this.getNumberAttribute('boot_volume_id');
  }

  // boot_volume_size - computed: false, optional: true, required: false
  private _bootVolumeSize?: number; 
  public get bootVolumeSize() {
    return this.getNumberAttribute('boot_volume_size');
  }
  public set bootVolumeSize(value: number) {
    this._bootVolumeSize = value;
  }
  public resetBootVolumeSize() {
    this._bootVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeSizeInput() {
    return this._bootVolumeSize;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return this.getListAttribute('public_ip_addresses');
  }

  // ram - computed: false, optional: true, required: false
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

  // ssh_keys - computed: true, optional: true, required: false
  private _sshKeys?: number[]; 
  public get sshKeys() {
    return this.getNumberListAttribute('ssh_keys');
  }
  public set sshKeys(value: number[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // state - computed: false, optional: true, required: false
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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

  // nics - computed: false, optional: true, required: false
  private _nics = new DataServerspaceServerNicsList(this, "nics", true);
  public get nics() {
    return this._nics;
  }
  public putNics(value: DataServerspaceServerNics[] | cdktf.IResolvable) {
    this._nics.internalValue = value;
  }
  public resetNics() {
    this._nics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicsInput() {
    return this._nics.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataServerspaceServerVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataServerspaceServerVolumes[] | cdktf.IResolvable) {
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
      boot_volume_size: cdktf.numberToTerraform(this._bootVolumeSize),
      cpu: cdktf.numberToTerraform(this._cpu),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      ram: cdktf.numberToTerraform(this._ram),
      ssh_keys: cdktf.listMapper(cdktf.numberToTerraform, false)(this._sshKeys),
      state: cdktf.stringToTerraform(this._state),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      nics: cdktf.listMapper(dataServerspaceServerNicsToTerraform, true)(this._nics.internalValue),
      volumes: cdktf.listMapper(dataServerspaceServerVolumesToTerraform, true)(this._volumes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      boot_volume_size: {
        value: cdktf.numberToHclTerraform(this._bootVolumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      ram: {
        value: cdktf.numberToHclTerraform(this._ram),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_keys: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._sshKeys),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      nics: {
        value: cdktf.listMapperHcl(dataServerspaceServerNicsToHclTerraform, true)(this._nics.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataServerspaceServerNicsList",
      },
      volumes: {
        value: cdktf.listMapperHcl(dataServerspaceServerVolumesToHclTerraform, true)(this._volumes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataServerspaceServerVolumesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
