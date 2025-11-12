// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_basic_internet_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseNetworkBasicInternetServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_basic_internet_services#direction DataFortisaseNetworkBasicInternetServices#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_basic_internet_services#ftntid DataFortisaseNetworkBasicInternetServices#ftntid}
  */
  readonly ftntid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_basic_internet_services#icon_id DataFortisaseNetworkBasicInternetServices#icon_id}
  */
  readonly iconId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_basic_internet_services#ip_number DataFortisaseNetworkBasicInternetServices#ip_number}
  */
  readonly ipNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_basic_internet_services#ip_range_number DataFortisaseNetworkBasicInternetServices#ip_range_number}
  */
  readonly ipRangeNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_basic_internet_services#primary_key DataFortisaseNetworkBasicInternetServices#primary_key}
  */
  readonly primaryKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_basic_internet_services fortisase_network_basic_internet_services}
*/
export class DataFortisaseNetworkBasicInternetServices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_network_basic_internet_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseNetworkBasicInternetServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseNetworkBasicInternetServices to import
  * @param importFromId The id of the existing DataFortisaseNetworkBasicInternetServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_basic_internet_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseNetworkBasicInternetServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_network_basic_internet_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_basic_internet_services fortisase_network_basic_internet_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseNetworkBasicInternetServicesConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseNetworkBasicInternetServicesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_network_basic_internet_services',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._direction = config.direction;
    this._ftntid = config.ftntid;
    this._iconId = config.iconId;
    this._ipNumber = config.ipNumber;
    this._ipRangeNumber = config.ipRangeNumber;
    this._primaryKey = config.primaryKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // ftntid - computed: true, optional: true, required: false
  private _ftntid?: number; 
  public get ftntid() {
    return this.getNumberAttribute('ftntid');
  }
  public set ftntid(value: number) {
    this._ftntid = value;
  }
  public resetFtntid() {
    this._ftntid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftntidInput() {
    return this._ftntid;
  }

  // icon_id - computed: true, optional: true, required: false
  private _iconId?: number; 
  public get iconId() {
    return this.getNumberAttribute('icon_id');
  }
  public set iconId(value: number) {
    this._iconId = value;
  }
  public resetIconId() {
    this._iconId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconIdInput() {
    return this._iconId;
  }

  // ip_number - computed: true, optional: true, required: false
  private _ipNumber?: number; 
  public get ipNumber() {
    return this.getNumberAttribute('ip_number');
  }
  public set ipNumber(value: number) {
    this._ipNumber = value;
  }
  public resetIpNumber() {
    this._ipNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNumberInput() {
    return this._ipNumber;
  }

  // ip_range_number - computed: true, optional: true, required: false
  private _ipRangeNumber?: number; 
  public get ipRangeNumber() {
    return this.getNumberAttribute('ip_range_number');
  }
  public set ipRangeNumber(value: number) {
    this._ipRangeNumber = value;
  }
  public resetIpRangeNumber() {
    this._ipRangeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeNumberInput() {
    return this._ipRangeNumber;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      direction: cdktf.stringToTerraform(this._direction),
      ftntid: cdktf.numberToTerraform(this._ftntid),
      icon_id: cdktf.numberToTerraform(this._iconId),
      ip_number: cdktf.numberToTerraform(this._ipNumber),
      ip_range_number: cdktf.numberToTerraform(this._ipRangeNumber),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftntid: {
        value: cdktf.numberToHclTerraform(this._ftntid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icon_id: {
        value: cdktf.numberToHclTerraform(this._iconId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_number: {
        value: cdktf.numberToHclTerraform(this._ipNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_range_number: {
        value: cdktf.numberToHclTerraform(this._ipRangeNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
