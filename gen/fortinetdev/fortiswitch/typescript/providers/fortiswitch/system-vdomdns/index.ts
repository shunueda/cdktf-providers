// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_vdomdns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemVdomdnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_vdomdns#id SystemVdomdns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_vdomdns#ip6_primary SystemVdomdns#ip6_primary}
  */
  readonly ip6Primary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_vdomdns#ip6_secondary SystemVdomdns#ip6_secondary}
  */
  readonly ip6Secondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_vdomdns#primary SystemVdomdns#primary}
  */
  readonly primary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_vdomdns#secondary SystemVdomdns#secondary}
  */
  readonly secondary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_vdomdns#source_ip SystemVdomdns#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_vdomdns#vdom_dns SystemVdomdns#vdom_dns}
  */
  readonly vdomDns?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_vdomdns fortiswitch_system_vdomdns}
*/
export class SystemVdomdns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_vdomdns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemVdomdns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemVdomdns to import
  * @param importFromId The id of the existing SystemVdomdns that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_vdomdns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemVdomdns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_vdomdns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/system_vdomdns fortiswitch_system_vdomdns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemVdomdnsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemVdomdnsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_vdomdns',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ip6Primary = config.ip6Primary;
    this._ip6Secondary = config.ip6Secondary;
    this._primary = config.primary;
    this._secondary = config.secondary;
    this._sourceIp = config.sourceIp;
    this._vdomDns = config.vdomDns;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip6_primary - computed: true, optional: true, required: false
  private _ip6Primary?: string; 
  public get ip6Primary() {
    return this.getStringAttribute('ip6_primary');
  }
  public set ip6Primary(value: string) {
    this._ip6Primary = value;
  }
  public resetIp6Primary() {
    this._ip6Primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6PrimaryInput() {
    return this._ip6Primary;
  }

  // ip6_secondary - computed: true, optional: true, required: false
  private _ip6Secondary?: string; 
  public get ip6Secondary() {
    return this.getStringAttribute('ip6_secondary');
  }
  public set ip6Secondary(value: string) {
    this._ip6Secondary = value;
  }
  public resetIp6Secondary() {
    this._ip6Secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6SecondaryInput() {
    return this._ip6Secondary;
  }

  // primary - computed: true, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // secondary - computed: true, optional: true, required: false
  private _secondary?: string; 
  public get secondary() {
    return this.getStringAttribute('secondary');
  }
  public set secondary(value: string) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // vdom_dns - computed: true, optional: true, required: false
  private _vdomDns?: string; 
  public get vdomDns() {
    return this.getStringAttribute('vdom_dns');
  }
  public set vdomDns(value: string) {
    this._vdomDns = value;
  }
  public resetVdomDns() {
    this._vdomDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomDnsInput() {
    return this._vdomDns;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip6_primary: cdktf.stringToTerraform(this._ip6Primary),
      ip6_secondary: cdktf.stringToTerraform(this._ip6Secondary),
      primary: cdktf.stringToTerraform(this._primary),
      secondary: cdktf.stringToTerraform(this._secondary),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      vdom_dns: cdktf.stringToTerraform(this._vdomDns),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_primary: {
        value: cdktf.stringToHclTerraform(this._ip6Primary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_secondary: {
        value: cdktf.stringToHclTerraform(this._ip6Secondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary: {
        value: cdktf.stringToHclTerraform(this._primary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary: {
        value: cdktf.stringToHclTerraform(this._secondary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom_dns: {
        value: cdktf.stringToHclTerraform(this._vdomDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
