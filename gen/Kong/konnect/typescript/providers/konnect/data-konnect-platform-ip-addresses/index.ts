// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/platform_ip_addresses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKonnectPlatformIpAddressesConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/platform_ip_addresses konnect_platform_ip_addresses}
*/
export class DataKonnectPlatformIpAddresses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_platform_ip_addresses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKonnectPlatformIpAddresses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKonnectPlatformIpAddresses to import
  * @param importFromId The id of the existing DataKonnectPlatformIpAddresses that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/platform_ip_addresses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKonnectPlatformIpAddresses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_platform_ip_addresses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/data-sources/platform_ip_addresses konnect_platform_ip_addresses} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKonnectPlatformIpAddressesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKonnectPlatformIpAddressesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'konnect_platform_ip_addresses',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // egress_ips - computed: true, optional: false, required: false
  private _egressIps = new cdktf.StringListMap(this, "egress_ips");
  public get egressIps() {
    return this._egressIps;
  }

  // ingress_ips - computed: true, optional: false, required: false
  private _ingressIps = new cdktf.StringListMap(this, "ingress_ips");
  public get ingressIps() {
    return this._ingressIps;
  }

  // regions - computed: true, optional: false, required: false
  private _regions = new cdktf.StringListMapMap(this, "regions");
  public get regions() {
    return this._regions;
  }

  // update_date - computed: true, optional: false, required: false
  public get updateDate() {
    return this.getStringAttribute('update_date');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
