// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/erase
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EraseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Wipe out all service config for all partitions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/erase#all_partitions Erase#all_partitions}
  */
  readonly allPartitions?: number;
  /**
  * Reset boot grub settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/erase#grubconfig Erase#grubconfig}
  */
  readonly grubconfig?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/erase#id Erase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * preserve admin accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/erase#preserve_accounts Erase#preserve_accounts}
  */
  readonly preserveAccounts?: number;
  /**
  * preserve managememt ip and default gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/erase#preserve_management Erase#preserve_management}
  */
  readonly preserveManagement?: number;
  /**
  * reload after erase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/erase#reload Erase#reload}
  */
  readonly reload?: number;
  /**
  * Wipe out all service config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/erase#service_config Erase#service_config}
  */
  readonly serviceConfig?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/erase thunder_erase}
*/
export class Erase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_erase";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Erase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Erase to import
  * @param importFromId The id of the existing Erase that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/erase#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Erase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_erase", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/erase thunder_erase} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EraseConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EraseConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_erase',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
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
    this._allPartitions = config.allPartitions;
    this._grubconfig = config.grubconfig;
    this._id = config.id;
    this._preserveAccounts = config.preserveAccounts;
    this._preserveManagement = config.preserveManagement;
    this._reload = config.reload;
    this._serviceConfig = config.serviceConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // grubconfig - computed: false, optional: true, required: false
  private _grubconfig?: number; 
  public get grubconfig() {
    return this.getNumberAttribute('grubconfig');
  }
  public set grubconfig(value: number) {
    this._grubconfig = value;
  }
  public resetGrubconfig() {
    this._grubconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grubconfigInput() {
    return this._grubconfig;
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

  // preserve_accounts - computed: false, optional: true, required: false
  private _preserveAccounts?: number; 
  public get preserveAccounts() {
    return this.getNumberAttribute('preserve_accounts');
  }
  public set preserveAccounts(value: number) {
    this._preserveAccounts = value;
  }
  public resetPreserveAccounts() {
    this._preserveAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveAccountsInput() {
    return this._preserveAccounts;
  }

  // preserve_management - computed: false, optional: true, required: false
  private _preserveManagement?: number; 
  public get preserveManagement() {
    return this.getNumberAttribute('preserve_management');
  }
  public set preserveManagement(value: number) {
    this._preserveManagement = value;
  }
  public resetPreserveManagement() {
    this._preserveManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveManagementInput() {
    return this._preserveManagement;
  }

  // reload - computed: false, optional: true, required: false
  private _reload?: number; 
  public get reload() {
    return this.getNumberAttribute('reload');
  }
  public set reload(value: number) {
    this._reload = value;
  }
  public resetReload() {
    this._reload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reloadInput() {
    return this._reload;
  }

  // service_config - computed: false, optional: true, required: false
  private _serviceConfig?: number; 
  public get serviceConfig() {
    return this.getNumberAttribute('service_config');
  }
  public set serviceConfig(value: number) {
    this._serviceConfig = value;
  }
  public resetServiceConfig() {
    this._serviceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigInput() {
    return this._serviceConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all_partitions: cdktf.numberToTerraform(this._allPartitions),
      grubconfig: cdktf.numberToTerraform(this._grubconfig),
      id: cdktf.stringToTerraform(this._id),
      preserve_accounts: cdktf.numberToTerraform(this._preserveAccounts),
      preserve_management: cdktf.numberToTerraform(this._preserveManagement),
      reload: cdktf.numberToTerraform(this._reload),
      service_config: cdktf.numberToTerraform(this._serviceConfig),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all_partitions: {
        value: cdktf.numberToHclTerraform(this._allPartitions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      grubconfig: {
        value: cdktf.numberToHclTerraform(this._grubconfig),
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
      preserve_accounts: {
        value: cdktf.numberToHclTerraform(this._preserveAccounts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preserve_management: {
        value: cdktf.numberToHclTerraform(this._preserveManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reload: {
        value: cdktf.numberToHclTerraform(this._reload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_config: {
        value: cdktf.numberToHclTerraform(this._serviceConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
