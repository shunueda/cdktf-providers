// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_dhcp_server_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpDhcpServerConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_dhcp_server_config#___path___ IpDhcpServerConfigA#___path___}
  */
  readonly path?: string;
  /**
  * An option that enables accounting for DHCP leases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_dhcp_server_config#accounting IpDhcpServerConfigA#accounting}
  */
  readonly accounting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_dhcp_server_config#id IpDhcpServerConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An option determining whether the DHCP server sends periodic updates to the accounting server during a lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_dhcp_server_config#interim_update IpDhcpServerConfigA#interim_update}
  */
  readonly interimUpdate?: string;
  /**
  * An option to set the password parameter for the RADIUS server. This option is available in RouterOS starting from version 7.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_dhcp_server_config#radius_password IpDhcpServerConfigA#radius_password}
  */
  readonly radiusPassword?: string;
  /**
  * An option of how often the DHCP leases will be stored on disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_dhcp_server_config#store_leases_disk IpDhcpServerConfigA#store_leases_disk}
  */
  readonly storeLeasesDisk?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_dhcp_server_config routeros_ip_dhcp_server_config}
*/
export class IpDhcpServerConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_dhcp_server_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpDhcpServerConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpDhcpServerConfigA to import
  * @param importFromId The id of the existing IpDhcpServerConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_dhcp_server_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpDhcpServerConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_dhcp_server_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_dhcp_server_config routeros_ip_dhcp_server_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpDhcpServerConfigAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpDhcpServerConfigAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_dhcp_server_config',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._accounting = config.accounting;
    this._id = config.id;
    this._interimUpdate = config.interimUpdate;
    this._radiusPassword = config.radiusPassword;
    this._storeLeasesDisk = config.storeLeasesDisk;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // accounting - computed: false, optional: true, required: false
  private _accounting?: boolean | cdktf.IResolvable; 
  public get accounting() {
    return this.getBooleanAttribute('accounting');
  }
  public set accounting(value: boolean | cdktf.IResolvable) {
    this._accounting = value;
  }
  public resetAccounting() {
    this._accounting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingInput() {
    return this._accounting;
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

  // interim_update - computed: false, optional: true, required: false
  private _interimUpdate?: string; 
  public get interimUpdate() {
    return this.getStringAttribute('interim_update');
  }
  public set interimUpdate(value: string) {
    this._interimUpdate = value;
  }
  public resetInterimUpdate() {
    this._interimUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interimUpdateInput() {
    return this._interimUpdate;
  }

  // radius_password - computed: false, optional: true, required: false
  private _radiusPassword?: string; 
  public get radiusPassword() {
    return this.getStringAttribute('radius_password');
  }
  public set radiusPassword(value: string) {
    this._radiusPassword = value;
  }
  public resetRadiusPassword() {
    this._radiusPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusPasswordInput() {
    return this._radiusPassword;
  }

  // store_leases_disk - computed: false, optional: true, required: false
  private _storeLeasesDisk?: string; 
  public get storeLeasesDisk() {
    return this.getStringAttribute('store_leases_disk');
  }
  public set storeLeasesDisk(value: string) {
    this._storeLeasesDisk = value;
  }
  public resetStoreLeasesDisk() {
    this._storeLeasesDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeLeasesDiskInput() {
    return this._storeLeasesDisk;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      accounting: cdktf.booleanToTerraform(this._accounting),
      id: cdktf.stringToTerraform(this._id),
      interim_update: cdktf.stringToTerraform(this._interimUpdate),
      radius_password: cdktf.stringToTerraform(this._radiusPassword),
      store_leases_disk: cdktf.stringToTerraform(this._storeLeasesDisk),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accounting: {
        value: cdktf.booleanToHclTerraform(this._accounting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interim_update: {
        value: cdktf.stringToHclTerraform(this._interimUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_password: {
        value: cdktf.stringToHclTerraform(this._radiusPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_leases_disk: {
        value: cdktf.stringToHclTerraform(this._storeLeasesDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
