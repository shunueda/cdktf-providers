// https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/data-sources/static_ips
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataChecklyStaticIpsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify the IP families you want to get static IPs for. Only `IPv6` or `IPv4` are valid options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/data-sources/static_ips#ip_family DataChecklyStaticIps#ip_family}
  */
  readonly ipFamily?: string;
  /**
  * Specify the locations you want to get static IPs for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/data-sources/static_ips#locations DataChecklyStaticIps#locations}
  */
  readonly locations?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/data-sources/static_ips checkly_static_ips}
*/
export class DataChecklyStaticIps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkly_static_ips";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataChecklyStaticIps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataChecklyStaticIps to import
  * @param importFromId The id of the existing DataChecklyStaticIps that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/data-sources/static_ips#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataChecklyStaticIps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkly_static_ips", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkly/checkly/1.16.0/docs/data-sources/static_ips checkly_static_ips} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataChecklyStaticIpsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataChecklyStaticIpsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkly_static_ips',
      terraformGeneratorMetadata: {
        providerName: 'checkly',
        providerVersion: '1.16.0',
        providerVersionConstraint: '1.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ipFamily = config.ipFamily;
    this._locations = config.locations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: true, optional: false, required: false
  public get addresses() {
    return cdktf.Fn.tolist(this.getListAttribute('addresses'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_family - computed: false, optional: true, required: false
  private _ipFamily?: string; 
  public get ipFamily() {
    return this.getStringAttribute('ip_family');
  }
  public set ipFamily(value: string) {
    this._ipFamily = value;
  }
  public resetIpFamily() {
    this._ipFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamilyInput() {
    return this._ipFamily;
  }

  // locations - computed: false, optional: true, required: false
  private _locations?: string[]; 
  public get locations() {
    return cdktf.Fn.tolist(this.getListAttribute('locations'));
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  public resetLocations() {
    this._locations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ip_family: cdktf.stringToTerraform(this._ipFamily),
      locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._locations),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ip_family: {
        value: cdktf.stringToHclTerraform(this._ipFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._locations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
