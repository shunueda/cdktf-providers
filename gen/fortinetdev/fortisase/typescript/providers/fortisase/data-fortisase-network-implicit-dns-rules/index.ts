// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_implicit_dns_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseNetworkImplicitDnsRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_implicit_dns_rules#dns_server DataFortisaseNetworkImplicitDnsRules#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_implicit_dns_rules#dns_server1 DataFortisaseNetworkImplicitDnsRules#dns_server1}
  */
  readonly dnsServer1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_implicit_dns_rules#dns_server2 DataFortisaseNetworkImplicitDnsRules#dns_server2}
  */
  readonly dnsServer2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_implicit_dns_rules#for_private DataFortisaseNetworkImplicitDnsRules#for_private}
  */
  readonly forPrivate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_implicit_dns_rules#primary_key DataFortisaseNetworkImplicitDnsRules#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_implicit_dns_rules#protocols DataFortisaseNetworkImplicitDnsRules#protocols}
  */
  readonly protocols?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_implicit_dns_rules fortisase_network_implicit_dns_rules}
*/
export class DataFortisaseNetworkImplicitDnsRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_network_implicit_dns_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseNetworkImplicitDnsRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseNetworkImplicitDnsRules to import
  * @param importFromId The id of the existing DataFortisaseNetworkImplicitDnsRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_implicit_dns_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseNetworkImplicitDnsRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_network_implicit_dns_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/network_implicit_dns_rules fortisase_network_implicit_dns_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseNetworkImplicitDnsRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseNetworkImplicitDnsRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_network_implicit_dns_rules',
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
    this._dnsServer = config.dnsServer;
    this._dnsServer1 = config.dnsServer1;
    this._dnsServer2 = config.dnsServer2;
    this._forPrivate = config.forPrivate;
    this._primaryKey = config.primaryKey;
    this._protocols = config.protocols;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_server - computed: true, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // dns_server1 - computed: true, optional: true, required: false
  private _dnsServer1?: string; 
  public get dnsServer1() {
    return this.getStringAttribute('dns_server1');
  }
  public set dnsServer1(value: string) {
    this._dnsServer1 = value;
  }
  public resetDnsServer1() {
    this._dnsServer1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer1Input() {
    return this._dnsServer1;
  }

  // dns_server2 - computed: true, optional: true, required: false
  private _dnsServer2?: string; 
  public get dnsServer2() {
    return this.getStringAttribute('dns_server2');
  }
  public set dnsServer2(value: string) {
    this._dnsServer2 = value;
  }
  public resetDnsServer2() {
    this._dnsServer2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServer2Input() {
    return this._dnsServer2;
  }

  // for_private - computed: true, optional: true, required: false
  private _forPrivate?: boolean | cdktf.IResolvable; 
  public get forPrivate() {
    return this.getBooleanAttribute('for_private');
  }
  public set forPrivate(value: boolean | cdktf.IResolvable) {
    this._forPrivate = value;
  }
  public resetForPrivate() {
    this._forPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forPrivateInput() {
    return this._forPrivate;
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

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_server: cdktf.stringToTerraform(this._dnsServer),
      dns_server1: cdktf.stringToTerraform(this._dnsServer1),
      dns_server2: cdktf.stringToTerraform(this._dnsServer2),
      for_private: cdktf.booleanToTerraform(this._forPrivate),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_server: {
        value: cdktf.stringToHclTerraform(this._dnsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server1: {
        value: cdktf.stringToHclTerraform(this._dnsServer1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server2: {
        value: cdktf.stringToHclTerraform(this._dnsServer2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      for_private: {
        value: cdktf.booleanToHclTerraform(this._forPrivate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
