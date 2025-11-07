// https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * The allocated id of the next available network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6network#allocated_id Ipv6Network#allocated_id}
  */
  readonly allocatedId?: string;
  /**
  * The network address in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6network#cidr Ipv6Network#cidr}
  */
  readonly cidr?: string;
  /**
  * The Configuration. Creating the Network in the default Configuration if doesn't specify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6network#configuration Ipv6Network#configuration}
  */
  readonly configuration?: string;
  /**
  * Give the IP you want to reserve for gateway, by default the first IP gets reserved for gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6network#gateway Ipv6Network#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6network#id Ipv6Network#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Network IP version: ipv4 or ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6network#ip_version Ipv6Network#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * The Network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6network#name Ipv6Network#name}
  */
  readonly name?: string;
  /**
  * The parent block of the network in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6network#parent_block Ipv6Network#parent_block}
  */
  readonly parentBlock?: string;
  /**
  * IPv4 Network's properties. Example: attribute=value|
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6network#properties Ipv6Network#properties}
  */
  readonly properties?: string;
  /**
  * Reserves the number of IP's for later use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6network#reserve_ip Ipv6Network#reserve_ip}
  */
  readonly reserveIp?: number;
  /**
  * The size of the network expressed in the power of 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6network#size Ipv6Network#size}
  */
  readonly size?: string;
  /**
  * IPv4 Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6network#template Ipv6Network#template}
  */
  readonly template?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6network bluecat_ipv6network}
*/
export class Ipv6Network extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bluecat_ipv6network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6Network resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6Network to import
  * @param importFromId The id of the existing Ipv6Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6Network to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bluecat_ipv6network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6network bluecat_ipv6network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6NetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ipv6NetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bluecat_ipv6network',
      terraformGeneratorMetadata: {
        providerName: 'bluecat',
        providerVersion: '2.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocatedId = config.allocatedId;
    this._cidr = config.cidr;
    this._configuration = config.configuration;
    this._gateway = config.gateway;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._name = config.name;
    this._parentBlock = config.parentBlock;
    this._properties = config.properties;
    this._reserveIp = config.reserveIp;
    this._size = config.size;
    this._template = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_id - computed: false, optional: true, required: false
  private _allocatedId?: string; 
  public get allocatedId() {
    return this.getStringAttribute('allocated_id');
  }
  public set allocatedId(value: string) {
    this._allocatedId = value;
  }
  public resetAllocatedId() {
    this._allocatedId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedIdInput() {
    return this._allocatedId;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_block - computed: false, optional: true, required: false
  private _parentBlock?: string; 
  public get parentBlock() {
    return this.getStringAttribute('parent_block');
  }
  public set parentBlock(value: string) {
    this._parentBlock = value;
  }
  public resetParentBlock() {
    this._parentBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentBlockInput() {
    return this._parentBlock;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // reserve_ip - computed: false, optional: true, required: false
  private _reserveIp?: number; 
  public get reserveIp() {
    return this.getNumberAttribute('reserve_ip');
  }
  public set reserveIp(value: number) {
    this._reserveIp = value;
  }
  public resetReserveIp() {
    this._reserveIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveIpInput() {
    return this._reserveIp;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocated_id: cdktf.stringToTerraform(this._allocatedId),
      cidr: cdktf.stringToTerraform(this._cidr),
      configuration: cdktf.stringToTerraform(this._configuration),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      name: cdktf.stringToTerraform(this._name),
      parent_block: cdktf.stringToTerraform(this._parentBlock),
      properties: cdktf.stringToTerraform(this._properties),
      reserve_ip: cdktf.numberToTerraform(this._reserveIp),
      size: cdktf.stringToTerraform(this._size),
      template: cdktf.stringToTerraform(this._template),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocated_id: {
        value: cdktf.stringToHclTerraform(this._allocatedId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_block: {
        value: cdktf.stringToHclTerraform(this._parentBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      properties: {
        value: cdktf.stringToHclTerraform(this._properties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserve_ip: {
        value: cdktf.numberToHclTerraform(this._reserveIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
