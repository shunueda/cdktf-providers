// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Use when purpose is set to `management`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/subnet#defaultgateway Subnet#defaultgateway}
  */
  readonly defaultgateway?: string;
  /**
  * Subnets with `Global Routing` enabled will be advertised from guest VPCs to the System VPC, and if the System VPC has upstream (Internet) connection such subnets will be advertised further upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/subnet#globalrouting Subnet#globalrouting}
  */
  readonly globalrouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/subnet#id Subnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name for current subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/subnet#name Subnet#name}
  */
  readonly name: string;
  /**
  * Unique prefix for subnet, must not overlap with other subnets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/subnet#prefix Subnet#prefix}
  */
  readonly prefix: string;
  /**
  * Describes which kind of service will be able to use this subnet. Possible values: `common`, `loopback`, `management`, `load-balancer`, `nat`, `inactive`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/subnet#purpose Subnet#purpose}
  */
  readonly purpose: string;
  /**
  * List of sites IDs where this subnet is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/subnet#siteids Subnet#siteids}
  */
  readonly siteids?: number[];
  /**
  * ID of tenant. Users of this tenant will be permitted to manage the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/subnet#tenantid Subnet#tenantid}
  */
  readonly tenantid: number;
  /**
  * ID of VPC. If not specified, the subnet will be created in the VPC marked as a default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/subnet#vpcid Subnet#vpcid}
  */
  readonly vpcid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/subnet netris_subnet}
*/
export class Subnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subnet to import
  * @param importFromId The id of the existing Subnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/subnet netris_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubnetConfig
  */
  public constructor(scope: Construct, id: string, config: SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_subnet',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultgateway = config.defaultgateway;
    this._globalrouting = config.globalrouting;
    this._id = config.id;
    this._name = config.name;
    this._prefix = config.prefix;
    this._purpose = config.purpose;
    this._siteids = config.siteids;
    this._tenantid = config.tenantid;
    this._vpcid = config.vpcid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defaultgateway - computed: false, optional: true, required: false
  private _defaultgateway?: string; 
  public get defaultgateway() {
    return this.getStringAttribute('defaultgateway');
  }
  public set defaultgateway(value: string) {
    this._defaultgateway = value;
  }
  public resetDefaultgateway() {
    this._defaultgateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultgatewayInput() {
    return this._defaultgateway;
  }

  // globalrouting - computed: false, optional: true, required: false
  private _globalrouting?: boolean | cdktf.IResolvable; 
  public get globalrouting() {
    return this.getBooleanAttribute('globalrouting');
  }
  public set globalrouting(value: boolean | cdktf.IResolvable) {
    this._globalrouting = value;
  }
  public resetGlobalrouting() {
    this._globalrouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalroutingInput() {
    return this._globalrouting;
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

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // purpose - computed: false, optional: false, required: true
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // siteids - computed: false, optional: true, required: false
  private _siteids?: number[]; 
  public get siteids() {
    return this.getNumberListAttribute('siteids');
  }
  public set siteids(value: number[]) {
    this._siteids = value;
  }
  public resetSiteids() {
    this._siteids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteidsInput() {
    return this._siteids;
  }

  // tenantid - computed: false, optional: false, required: true
  private _tenantid?: number; 
  public get tenantid() {
    return this.getNumberAttribute('tenantid');
  }
  public set tenantid(value: number) {
    this._tenantid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantidInput() {
    return this._tenantid;
  }

  // vpcid - computed: false, optional: true, required: false
  private _vpcid?: number; 
  public get vpcid() {
    return this.getNumberAttribute('vpcid');
  }
  public set vpcid(value: number) {
    this._vpcid = value;
  }
  public resetVpcid() {
    this._vpcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcidInput() {
    return this._vpcid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      defaultgateway: cdktf.stringToTerraform(this._defaultgateway),
      globalrouting: cdktf.booleanToTerraform(this._globalrouting),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      prefix: cdktf.stringToTerraform(this._prefix),
      purpose: cdktf.stringToTerraform(this._purpose),
      siteids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._siteids),
      tenantid: cdktf.numberToTerraform(this._tenantid),
      vpcid: cdktf.numberToTerraform(this._vpcid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      defaultgateway: {
        value: cdktf.stringToHclTerraform(this._defaultgateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      globalrouting: {
        value: cdktf.booleanToHclTerraform(this._globalrouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose: {
        value: cdktf.stringToHclTerraform(this._purpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      siteids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._siteids),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      tenantid: {
        value: cdktf.numberToHclTerraform(this._tenantid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpcid: {
        value: cdktf.numberToHclTerraform(this._vpcid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
