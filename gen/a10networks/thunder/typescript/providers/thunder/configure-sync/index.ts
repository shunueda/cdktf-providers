// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/configure_sync
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigureSyncConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the destination ip address to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/configure_sync#address ConfigureSync#address}
  */
  readonly address?: string;
  /**
  * All partition configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/configure_sync#all_partitions ConfigureSync#all_partitions}
  */
  readonly allPartitions?: number;
  /**
  * Authenticate with local username and password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/configure_sync#auto_authentication ConfigureSync#auto_authentication}
  */
  readonly autoAuthentication?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/configure_sync#id ConfigureSync#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Partition name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/configure_sync#partition_name ConfigureSync#partition_name}
  */
  readonly partitionName?: string;
  /**
  * Use private key for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/configure_sync#private_key ConfigureSync#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/configure_sync#pwd ConfigureSync#pwd}
  */
  readonly pwd?: string;
  /**
  * Shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/configure_sync#shared ConfigureSync#shared}
  */
  readonly shared?: number;
  /**
  * 'running': Sync local running to peer's running configuration; 'all': Sync local running to peer's running configuration, and local startup to peer's startup configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/configure_sync#type ConfigureSync#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/configure_sync#usr ConfigureSync#usr}
  */
  readonly usr?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/configure_sync thunder_configure_sync}
*/
export class ConfigureSync extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_configure_sync";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigureSync resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigureSync to import
  * @param importFromId The id of the existing ConfigureSync that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/configure_sync#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigureSync to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_configure_sync", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/configure_sync thunder_configure_sync} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigureSyncConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConfigureSyncConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_configure_sync',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._allPartitions = config.allPartitions;
    this._autoAuthentication = config.autoAuthentication;
    this._id = config.id;
    this._partitionName = config.partitionName;
    this._privateKey = config.privateKey;
    this._pwd = config.pwd;
    this._shared = config.shared;
    this._type = config.type;
    this._usr = config.usr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // all_partitions - computed: false, optional: true, required: false
  private _allPartitions?: number; 
  public get allPartitions() {
    return this.getNumberAttribute('all_partitions');
  }
  public set allPartitions(value: number) {
    this._allPartitions = value;
  }
  public resetAllPartitions() {
    this._allPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allPartitionsInput() {
    return this._allPartitions;
  }

  // auto_authentication - computed: false, optional: true, required: false
  private _autoAuthentication?: number; 
  public get autoAuthentication() {
    return this.getNumberAttribute('auto_authentication');
  }
  public set autoAuthentication(value: number) {
    this._autoAuthentication = value;
  }
  public resetAutoAuthentication() {
    this._autoAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAuthenticationInput() {
    return this._autoAuthentication;
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

  // partition_name - computed: false, optional: true, required: false
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  public resetPartitionName() {
    this._partitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // pwd - computed: false, optional: true, required: false
  private _pwd?: string; 
  public get pwd() {
    return this.getStringAttribute('pwd');
  }
  public set pwd(value: string) {
    this._pwd = value;
  }
  public resetPwd() {
    this._pwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdInput() {
    return this._pwd;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // usr - computed: false, optional: true, required: false
  private _usr?: string; 
  public get usr() {
    return this.getStringAttribute('usr');
  }
  public set usr(value: string) {
    this._usr = value;
  }
  public resetUsr() {
    this._usr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usrInput() {
    return this._usr;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      all_partitions: cdktf.numberToTerraform(this._allPartitions),
      auto_authentication: cdktf.numberToTerraform(this._autoAuthentication),
      id: cdktf.stringToTerraform(this._id),
      partition_name: cdktf.stringToTerraform(this._partitionName),
      private_key: cdktf.stringToTerraform(this._privateKey),
      pwd: cdktf.stringToTerraform(this._pwd),
      shared: cdktf.numberToTerraform(this._shared),
      type: cdktf.stringToTerraform(this._type),
      usr: cdktf.stringToTerraform(this._usr),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      all_partitions: {
        value: cdktf.numberToHclTerraform(this._allPartitions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_authentication: {
        value: cdktf.numberToHclTerraform(this._autoAuthentication),
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
      partition_name: {
        value: cdktf.stringToHclTerraform(this._partitionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pwd: {
        value: cdktf.stringToHclTerraform(this._pwd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared: {
        value: cdktf.numberToHclTerraform(this._shared),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usr: {
        value: cdktf.stringToHclTerraform(this._usr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
