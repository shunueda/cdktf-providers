// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/data-sources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEnosEnvironmentConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/data-sources/environment enos_environment}
*/
export class DataEnosEnvironment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEnosEnvironment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEnosEnvironment to import
  * @param importFromId The id of the existing DataEnosEnvironment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/data-sources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEnosEnvironment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.2/docs/data-sources/environment enos_environment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEnosEnvironmentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataEnosEnvironmentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'enos_environment',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.2'
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return this.getListAttribute('public_ip_addresses');
  }

  // public_ipv4_addresses - computed: true, optional: false, required: false
  public get publicIpv4Addresses() {
    return this.getListAttribute('public_ipv4_addresses');
  }

  // public_ipv6_addresses - computed: true, optional: false, required: false
  public get publicIpv6Addresses() {
    return this.getListAttribute('public_ipv6_addresses');
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
