// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set this to True to enable the DHCP configuration for the IP association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_association#configure_for_dhcp IpAssociation#configure_for_dhcp}
  */
  readonly configureForDhcp?: boolean | cdktf.IResolvable;
  /**
  * The DUID of the IP association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_association#duid IpAssociation#duid}
  */
  readonly duid?: string;
  /**
  * The MAC address of the IP association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_association#mac IpAssociation#mac}
  */
  readonly mac?: string;
  /**
  * The match_client value for this IP association. Valid values are: "DUID": The host IP address is leased to the matching DUID. "MAC_ADDRESS": The host IP address is leased to the matching MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_association#match_client IpAssociation#match_client}
  */
  readonly matchClient?: string;
  /**
  * The reference to the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_association#ref IpAssociation#ref}
  */
  readonly ref: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_association nios_ip_association}
*/
export class IpAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_ip_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpAssociation to import
  * @param importFromId The id of the existing IpAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_ip_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/ip_association nios_ip_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: IpAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_ip_association',
      terraformGeneratorMetadata: {
        providerName: 'nios',
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
    this._configureForDhcp = config.configureForDhcp;
    this._duid = config.duid;
    this._mac = config.mac;
    this._matchClient = config.matchClient;
    this._ref = config.ref;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configure_for_dhcp - computed: true, optional: true, required: false
  private _configureForDhcp?: boolean | cdktf.IResolvable; 
  public get configureForDhcp() {
    return this.getBooleanAttribute('configure_for_dhcp');
  }
  public set configureForDhcp(value: boolean | cdktf.IResolvable) {
    this._configureForDhcp = value;
  }
  public resetConfigureForDhcp() {
    this._configureForDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureForDhcpInput() {
    return this._configureForDhcp;
  }

  // duid - computed: true, optional: true, required: false
  private _duid?: string; 
  public get duid() {
    return this.getStringAttribute('duid');
  }
  public set duid(value: string) {
    this._duid = value;
  }
  public resetDuid() {
    this._duid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duidInput() {
    return this._duid;
  }

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // match_client - computed: true, optional: true, required: false
  private _matchClient?: string; 
  public get matchClient() {
    return this.getStringAttribute('match_client');
  }
  public set matchClient(value: string) {
    this._matchClient = value;
  }
  public resetMatchClient() {
    this._matchClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchClientInput() {
    return this._matchClient;
  }

  // ref - computed: false, optional: false, required: true
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configure_for_dhcp: cdktf.booleanToTerraform(this._configureForDhcp),
      duid: cdktf.stringToTerraform(this._duid),
      mac: cdktf.stringToTerraform(this._mac),
      match_client: cdktf.stringToTerraform(this._matchClient),
      ref: cdktf.stringToTerraform(this._ref),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configure_for_dhcp: {
        value: cdktf.booleanToHclTerraform(this._configureForDhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      duid: {
        value: cdktf.stringToHclTerraform(this._duid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_client: {
        value: cdktf.stringToHclTerraform(this._matchClient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ref: {
        value: cdktf.stringToHclTerraform(this._ref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
