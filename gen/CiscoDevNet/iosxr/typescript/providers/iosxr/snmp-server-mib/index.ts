// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_mib
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpServerMibConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_mib#delete_mode SnmpServerMib#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_mib#device SnmpServerMib#device}
  */
  readonly device?: string;
  /**
  * Persist interface indices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_mib#ifindex_persist SnmpServerMib#ifindex_persist}
  */
  readonly ifindexPersist?: boolean | cdktf.IResolvable;
  /**
  * Enable support for ifAlias values longer than 64 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_mib#ifmib_ifalias_long SnmpServerMib#ifmib_ifalias_long}
  */
  readonly ifmibIfaliasLong?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_mib iosxr_snmp_server_mib}
*/
export class SnmpServerMib extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_snmp_server_mib";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpServerMib resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpServerMib to import
  * @param importFromId The id of the existing SnmpServerMib that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_mib#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpServerMib to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_snmp_server_mib", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/snmp_server_mib iosxr_snmp_server_mib} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpServerMibConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpServerMibConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_snmp_server_mib',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._ifindexPersist = config.ifindexPersist;
    this._ifmibIfaliasLong = config.ifmibIfaliasLong;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ifindex_persist - computed: false, optional: true, required: false
  private _ifindexPersist?: boolean | cdktf.IResolvable; 
  public get ifindexPersist() {
    return this.getBooleanAttribute('ifindex_persist');
  }
  public set ifindexPersist(value: boolean | cdktf.IResolvable) {
    this._ifindexPersist = value;
  }
  public resetIfindexPersist() {
    this._ifindexPersist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifindexPersistInput() {
    return this._ifindexPersist;
  }

  // ifmib_ifalias_long - computed: false, optional: true, required: false
  private _ifmibIfaliasLong?: boolean | cdktf.IResolvable; 
  public get ifmibIfaliasLong() {
    return this.getBooleanAttribute('ifmib_ifalias_long');
  }
  public set ifmibIfaliasLong(value: boolean | cdktf.IResolvable) {
    this._ifmibIfaliasLong = value;
  }
  public resetIfmibIfaliasLong() {
    this._ifmibIfaliasLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifmibIfaliasLongInput() {
    return this._ifmibIfaliasLong;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      ifindex_persist: cdktf.booleanToTerraform(this._ifindexPersist),
      ifmib_ifalias_long: cdktf.booleanToTerraform(this._ifmibIfaliasLong),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ifindex_persist: {
        value: cdktf.booleanToHclTerraform(this._ifindexPersist),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ifmib_ifalias_long: {
        value: cdktf.booleanToHclTerraform(this._ifmibIfaliasLong),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
