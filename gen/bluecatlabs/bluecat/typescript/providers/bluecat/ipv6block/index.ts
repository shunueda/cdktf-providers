// https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6BlockConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPv4 Block's address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6block#address Ipv6Block#address}
  */
  readonly address: string;
  /**
  * The Block prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6block#cidr Ipv6Block#cidr}
  */
  readonly cidr: string;
  /**
  * The Configuration. Creating the Block in the default Configuration if doesn't specify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6block#configuration Ipv6Block#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6block#id Ipv6Block#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Block IP version: ipv4 or ipv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6block#ip_version Ipv6Block#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * The Block name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6block#name Ipv6Block#name}
  */
  readonly name: string;
  /**
  * The parent Block. Specified to creating the child Block. THe Block in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6block#parent_block Ipv6Block#parent_block}
  */
  readonly parentBlock?: string;
  /**
  * IPv4 Block's properties. Example: attribute=value|
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6block#properties Ipv6Block#properties}
  */
  readonly properties?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6block bluecat_ipv6block}
*/
export class Ipv6Block extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bluecat_ipv6block";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6Block resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6Block to import
  * @param importFromId The id of the existing Ipv6Block that should be imported. Refer to the {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6block#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6Block to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bluecat_ipv6block", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/resources/ipv6block bluecat_ipv6block} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6BlockConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv6BlockConfig) {
    super(scope, id, {
      terraformResourceType: 'bluecat_ipv6block',
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
    this._address = config.address;
    this._cidr = config.cidr;
    this._configuration = config.configuration;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._name = config.name;
    this._parentBlock = config.parentBlock;
    this._properties = config.properties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      cidr: cdktf.stringToTerraform(this._cidr),
      configuration: cdktf.stringToTerraform(this._configuration),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      name: cdktf.stringToTerraform(this._name),
      parent_block: cdktf.stringToTerraform(this._parentBlock),
      properties: cdktf.stringToTerraform(this._properties),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
