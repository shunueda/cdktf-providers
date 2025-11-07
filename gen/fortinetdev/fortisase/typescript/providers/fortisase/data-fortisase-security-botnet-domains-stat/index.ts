// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_botnet_domains_stat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseSecurityBotnetDomainsStatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_botnet_domains_stat#total_entries DataFortisaseSecurityBotnetDomainsStat#total_entries}
  */
  readonly totalEntries?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_botnet_domains_stat fortisase_security_botnet_domains_stat}
*/
export class DataFortisaseSecurityBotnetDomainsStat extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_botnet_domains_stat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseSecurityBotnetDomainsStat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseSecurityBotnetDomainsStat to import
  * @param importFromId The id of the existing DataFortisaseSecurityBotnetDomainsStat that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_botnet_domains_stat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseSecurityBotnetDomainsStat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_botnet_domains_stat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_botnet_domains_stat fortisase_security_botnet_domains_stat} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseSecurityBotnetDomainsStatConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseSecurityBotnetDomainsStatConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_botnet_domains_stat',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._totalEntries = config.totalEntries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // total_entries - computed: true, optional: true, required: false
  private _totalEntries?: number; 
  public get totalEntries() {
    return this.getNumberAttribute('total_entries');
  }
  public set totalEntries(value: number) {
    this._totalEntries = value;
  }
  public resetTotalEntries() {
    this._totalEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesInput() {
    return this._totalEntries;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      total_entries: cdktf.numberToTerraform(this._totalEntries),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      total_entries: {
        value: cdktf.numberToHclTerraform(this._totalEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
