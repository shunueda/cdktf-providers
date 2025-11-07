// https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/partition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PartitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * select the desired configuration volume in increments of 1 GB.
  * The default value is 10 GB, with a minimum of 5 GB and a maximum of 15 GB.After volume sizes are configured, their sizes can be increased but not reduced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/partition#configuration_volume_size Partition#configuration_volume_size}
  */
  readonly configurationVolumeSize?: number;
  /**
  * Enables or disables partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/partition#enabled Partition#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * select the desired storage volume for all tenant images in increments of 1 GB.
  * The default value is 15 GB, with a minimum of 5 GB and a maximum of 50 GB.After volume sizes are configured, their sizes can be increased but not reduced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/partition#images_volume_size Partition#images_volume_size}
  */
  readonly imagesVolumeSize?: number;
  /**
  * Specifies the IPv4 address and subnet mask used to access the chassis partition.
  * The address must be specified in CIDR notation e.g. 192.168.1.1/24.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/partition#ipv4_mgmt_address Partition#ipv4_mgmt_address}
  */
  readonly ipv4MgmtAddress?: string;
  /**
  * Specifies the IPv4 chassis partition management gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/partition#ipv4_mgmt_gateway Partition#ipv4_mgmt_gateway}
  */
  readonly ipv4MgmtGateway?: string;
  /**
  * Specifies the IPv6 address and subnet mask used to access the chassis partition.
  * The address must be specified in CIDR notation e.g. 2002::1234:abcd:ffff:c0a8:101/64.
  * Required for create operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/partition#ipv6_mgmt_address Partition#ipv6_mgmt_address}
  */
  readonly ipv6MgmtAddress?: string;
  /**
  * Specifies the IPv6 chassis partition management gateway.
  * Required for create operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/partition#ipv6_mgmt_gateway Partition#ipv6_mgmt_gateway}
  */
  readonly ipv6MgmtGateway?: string;
  /**
  * Name of the chassis partition.
  * Partition names must consist only of alphanumerics (0-9, a-z, A-Z), must begin with a letter, and are limited to 31 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/partition#name Partition#name}
  */
  readonly name: string;
  /**
  * Specifies the partition F5OS-C OS Bundled version.(ISO image version)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/partition#os_version Partition#os_version}
  */
  readonly osVersion?: string;
  /**
  * select the desired user data (tcpdump captures, QKView data, etc.) volume in increments of 1 GB.
  * The default value is 10 GB, with a minimum of 5 GB and a maximum of 20 GBAfter volume sizes are configured, their sizes can be increased but not reduced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/partition#shared_volume_size Partition#shared_volume_size}
  */
  readonly sharedVolumeSize?: number;
  /**
  * List of integers.
  * Specifies which slots with which the chassis partition should associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/partition#slots Partition#slots}
  */
  readonly slots?: number[];
  /**
  * The number of seconds to wait for partition to transition to running state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/partition#timeout Partition#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/partition f5os_partition}
*/
export class Partition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "f5os_partition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Partition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Partition to import
  * @param importFromId The id of the existing Partition that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/partition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Partition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "f5os_partition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/f5os/1.10.0/docs/resources/partition f5os_partition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PartitionConfig
  */
  public constructor(scope: Construct, id: string, config: PartitionConfig) {
    super(scope, id, {
      terraformResourceType: 'f5os_partition',
      terraformGeneratorMetadata: {
        providerName: 'f5os',
        providerVersion: '1.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configurationVolumeSize = config.configurationVolumeSize;
    this._enabled = config.enabled;
    this._imagesVolumeSize = config.imagesVolumeSize;
    this._ipv4MgmtAddress = config.ipv4MgmtAddress;
    this._ipv4MgmtGateway = config.ipv4MgmtGateway;
    this._ipv6MgmtAddress = config.ipv6MgmtAddress;
    this._ipv6MgmtGateway = config.ipv6MgmtGateway;
    this._name = config.name;
    this._osVersion = config.osVersion;
    this._sharedVolumeSize = config.sharedVolumeSize;
    this._slots = config.slots;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_volume_size - computed: true, optional: true, required: false
  private _configurationVolumeSize?: number; 
  public get configurationVolumeSize() {
    return this.getNumberAttribute('configuration_volume_size');
  }
  public set configurationVolumeSize(value: number) {
    this._configurationVolumeSize = value;
  }
  public resetConfigurationVolumeSize() {
    this._configurationVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationVolumeSizeInput() {
    return this._configurationVolumeSize;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // images_volume_size - computed: true, optional: true, required: false
  private _imagesVolumeSize?: number; 
  public get imagesVolumeSize() {
    return this.getNumberAttribute('images_volume_size');
  }
  public set imagesVolumeSize(value: number) {
    this._imagesVolumeSize = value;
  }
  public resetImagesVolumeSize() {
    this._imagesVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesVolumeSizeInput() {
    return this._imagesVolumeSize;
  }

  // ipv4_mgmt_address - computed: false, optional: true, required: false
  private _ipv4MgmtAddress?: string; 
  public get ipv4MgmtAddress() {
    return this.getStringAttribute('ipv4_mgmt_address');
  }
  public set ipv4MgmtAddress(value: string) {
    this._ipv4MgmtAddress = value;
  }
  public resetIpv4MgmtAddress() {
    this._ipv4MgmtAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MgmtAddressInput() {
    return this._ipv4MgmtAddress;
  }

  // ipv4_mgmt_gateway - computed: false, optional: true, required: false
  private _ipv4MgmtGateway?: string; 
  public get ipv4MgmtGateway() {
    return this.getStringAttribute('ipv4_mgmt_gateway');
  }
  public set ipv4MgmtGateway(value: string) {
    this._ipv4MgmtGateway = value;
  }
  public resetIpv4MgmtGateway() {
    this._ipv4MgmtGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MgmtGatewayInput() {
    return this._ipv4MgmtGateway;
  }

  // ipv6_mgmt_address - computed: false, optional: true, required: false
  private _ipv6MgmtAddress?: string; 
  public get ipv6MgmtAddress() {
    return this.getStringAttribute('ipv6_mgmt_address');
  }
  public set ipv6MgmtAddress(value: string) {
    this._ipv6MgmtAddress = value;
  }
  public resetIpv6MgmtAddress() {
    this._ipv6MgmtAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MgmtAddressInput() {
    return this._ipv6MgmtAddress;
  }

  // ipv6_mgmt_gateway - computed: false, optional: true, required: false
  private _ipv6MgmtGateway?: string; 
  public get ipv6MgmtGateway() {
    return this.getStringAttribute('ipv6_mgmt_gateway');
  }
  public set ipv6MgmtGateway(value: string) {
    this._ipv6MgmtGateway = value;
  }
  public resetIpv6MgmtGateway() {
    this._ipv6MgmtGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MgmtGatewayInput() {
    return this._ipv6MgmtGateway;
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

  // os_version - computed: true, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }

  // shared_volume_size - computed: true, optional: true, required: false
  private _sharedVolumeSize?: number; 
  public get sharedVolumeSize() {
    return this.getNumberAttribute('shared_volume_size');
  }
  public set sharedVolumeSize(value: number) {
    this._sharedVolumeSize = value;
  }
  public resetSharedVolumeSize() {
    this._sharedVolumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedVolumeSizeInput() {
    return this._sharedVolumeSize;
  }

  // slots - computed: true, optional: true, required: false
  private _slots?: number[]; 
  public get slots() {
    return this.getNumberListAttribute('slots');
  }
  public set slots(value: number[]) {
    this._slots = value;
  }
  public resetSlots() {
    this._slots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotsInput() {
    return this._slots;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_volume_size: cdktf.numberToTerraform(this._configurationVolumeSize),
      enabled: cdktf.booleanToTerraform(this._enabled),
      images_volume_size: cdktf.numberToTerraform(this._imagesVolumeSize),
      ipv4_mgmt_address: cdktf.stringToTerraform(this._ipv4MgmtAddress),
      ipv4_mgmt_gateway: cdktf.stringToTerraform(this._ipv4MgmtGateway),
      ipv6_mgmt_address: cdktf.stringToTerraform(this._ipv6MgmtAddress),
      ipv6_mgmt_gateway: cdktf.stringToTerraform(this._ipv6MgmtGateway),
      name: cdktf.stringToTerraform(this._name),
      os_version: cdktf.stringToTerraform(this._osVersion),
      shared_volume_size: cdktf.numberToTerraform(this._sharedVolumeSize),
      slots: cdktf.listMapper(cdktf.numberToTerraform, false)(this._slots),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_volume_size: {
        value: cdktf.numberToHclTerraform(this._configurationVolumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      images_volume_size: {
        value: cdktf.numberToHclTerraform(this._imagesVolumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_mgmt_address: {
        value: cdktf.stringToHclTerraform(this._ipv4MgmtAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_mgmt_gateway: {
        value: cdktf.stringToHclTerraform(this._ipv4MgmtGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_mgmt_address: {
        value: cdktf.stringToHclTerraform(this._ipv6MgmtAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_mgmt_gateway: {
        value: cdktf.stringToHclTerraform(this._ipv6MgmtGateway),
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
      os_version: {
        value: cdktf.stringToHclTerraform(this._osVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_volume_size: {
        value: cdktf.numberToHclTerraform(this._sharedVolumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slots: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._slots),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
