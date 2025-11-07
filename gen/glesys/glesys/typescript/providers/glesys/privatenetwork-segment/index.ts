// https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/privatenetwork_segment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivatenetworkSegmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * PrivateNetworkSegment Datacenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/privatenetwork_segment#datacenter PrivatenetworkSegment#datacenter}
  */
  readonly datacenter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/privatenetwork_segment#id PrivatenetworkSegment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PrivateNetworkSegment IPv4 Subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/privatenetwork_segment#ipv4subnet PrivatenetworkSegment#ipv4subnet}
  */
  readonly ipv4Subnet: string;
  /**
  * PrivateNetworkSegment name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/privatenetwork_segment#name PrivatenetworkSegment#name}
  */
  readonly name: string;
  /**
  * PrivateNetworkSegment Platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/privatenetwork_segment#platform PrivatenetworkSegment#platform}
  */
  readonly platform: string;
  /**
  * PrivateNetwork ID for the Segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/privatenetwork_segment#privatenetworkid PrivatenetworkSegment#privatenetworkid}
  */
  readonly privatenetworkid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/privatenetwork_segment glesys_privatenetwork_segment}
*/
export class PrivatenetworkSegment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "glesys_privatenetwork_segment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivatenetworkSegment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivatenetworkSegment to import
  * @param importFromId The id of the existing PrivatenetworkSegment that should be imported. Refer to the {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/privatenetwork_segment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivatenetworkSegment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "glesys_privatenetwork_segment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/glesys/glesys/0.15.0/docs/resources/privatenetwork_segment glesys_privatenetwork_segment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivatenetworkSegmentConfig
  */
  public constructor(scope: Construct, id: string, config: PrivatenetworkSegmentConfig) {
    super(scope, id, {
      terraformResourceType: 'glesys_privatenetwork_segment',
      terraformGeneratorMetadata: {
        providerName: 'glesys',
        providerVersion: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datacenter = config.datacenter;
    this._id = config.id;
    this._ipv4Subnet = config.ipv4Subnet;
    this._name = config.name;
    this._platform = config.platform;
    this._privatenetworkid = config.privatenetworkid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datacenter - computed: false, optional: false, required: true
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
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

  // ipv4subnet - computed: false, optional: false, required: true
  private _ipv4Subnet?: string; 
  public get ipv4Subnet() {
    return this.getStringAttribute('ipv4subnet');
  }
  public set ipv4Subnet(value: string) {
    this._ipv4Subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetInput() {
    return this._ipv4Subnet;
  }

  // ipv6subnet - computed: true, optional: false, required: false
  public get ipv6Subnet() {
    return this.getStringAttribute('ipv6subnet');
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

  // platform - computed: false, optional: false, required: true
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // privatenetworkid - computed: false, optional: false, required: true
  private _privatenetworkid?: string; 
  public get privatenetworkid() {
    return this.getStringAttribute('privatenetworkid');
  }
  public set privatenetworkid(value: string) {
    this._privatenetworkid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privatenetworkidInput() {
    return this._privatenetworkid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      datacenter: cdktf.stringToTerraform(this._datacenter),
      id: cdktf.stringToTerraform(this._id),
      ipv4subnet: cdktf.stringToTerraform(this._ipv4Subnet),
      name: cdktf.stringToTerraform(this._name),
      platform: cdktf.stringToTerraform(this._platform),
      privatenetworkid: cdktf.stringToTerraform(this._privatenetworkid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datacenter: {
        value: cdktf.stringToHclTerraform(this._datacenter),
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
      ipv4subnet: {
        value: cdktf.stringToHclTerraform(this._ipv4Subnet),
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
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privatenetworkid: {
        value: cdktf.stringToHclTerraform(this._privatenetworkid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
