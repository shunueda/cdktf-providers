// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/geo_vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GeoVpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * This parameter represents the name of a Cloud-Account in Aviatrix controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/geo_vpn#account_name GeoVpn#account_name}
  */
  readonly accountName: string;
  /**
  * Type of cloud service provider, requires an integer value. Currently only AWS(1) is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/geo_vpn#cloud_type GeoVpn#cloud_type}
  */
  readonly cloudType: number;
  /**
  * The hosted domain name. It must be hosted by AWS Route53 or Azure DNS in the selected account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/geo_vpn#domain_name GeoVpn#domain_name}
  */
  readonly domainName: string;
  /**
  * List of ELB names to attach to this Geo VPN name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/geo_vpn#elb_dns_names GeoVpn#elb_dns_names}
  */
  readonly elbDnsNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/geo_vpn#id GeoVpn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The hostname that users will connect to. A DNS record will be created for this name in the specified domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/geo_vpn#service_name GeoVpn#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/geo_vpn aviatrix_geo_vpn}
*/
export class GeoVpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_geo_vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GeoVpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GeoVpn to import
  * @param importFromId The id of the existing GeoVpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/geo_vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GeoVpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_geo_vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/geo_vpn aviatrix_geo_vpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GeoVpnConfig
  */
  public constructor(scope: Construct, id: string, config: GeoVpnConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_geo_vpn',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._cloudType = config.cloudType;
    this._domainName = config.domainName;
    this._elbDnsNames = config.elbDnsNames;
    this._id = config.id;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // cloud_type - computed: false, optional: false, required: true
  private _cloudType?: number; 
  public get cloudType() {
    return this.getNumberAttribute('cloud_type');
  }
  public set cloudType(value: number) {
    this._cloudType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // elb_dns_names - computed: false, optional: false, required: true
  private _elbDnsNames?: string[]; 
  public get elbDnsNames() {
    return this.getListAttribute('elb_dns_names');
  }
  public set elbDnsNames(value: string[]) {
    this._elbDnsNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elbDnsNamesInput() {
    return this._elbDnsNames;
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

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      cloud_type: cdktf.numberToTerraform(this._cloudType),
      domain_name: cdktf.stringToTerraform(this._domainName),
      elb_dns_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._elbDnsNames),
      id: cdktf.stringToTerraform(this._id),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_type: {
        value: cdktf.numberToHclTerraform(this._cloudType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elb_dns_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._elbDnsNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
