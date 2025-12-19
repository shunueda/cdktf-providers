// https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/vpc#description Vpc#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/vpc#id Vpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/vpc#region Vpc#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/vpc#v4_subnet Vpc#v4_subnet}
  */
  readonly v4Subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/vpc#v4_subnet_mask Vpc#v4_subnet_mask}
  */
  readonly v4SubnetMask?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/vpc vultr_vpc}
*/
export class Vpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vultr_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vpc to import
  * @param importFromId The id of the existing Vpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vultr_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vultr/vultr/2.28.0/docs/resources/vpc vultr_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcConfig
  */
  public constructor(scope: Construct, id: string, config: VpcConfig) {
    super(scope, id, {
      terraformResourceType: 'vultr_vpc',
      terraformGeneratorMetadata: {
        providerName: 'vultr',
        providerVersion: '2.28.0',
        providerVersionConstraint: '2.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._region = config.region;
    this._v4Subnet = config.v4Subnet;
    this._v4SubnetMask = config.v4SubnetMask;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // v4_subnet - computed: true, optional: true, required: false
  private _v4Subnet?: string; 
  public get v4Subnet() {
    return this.getStringAttribute('v4_subnet');
  }
  public set v4Subnet(value: string) {
    this._v4Subnet = value;
  }
  public resetV4Subnet() {
    this._v4Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4SubnetInput() {
    return this._v4Subnet;
  }

  // v4_subnet_mask - computed: true, optional: true, required: false
  private _v4SubnetMask?: number; 
  public get v4SubnetMask() {
    return this.getNumberAttribute('v4_subnet_mask');
  }
  public set v4SubnetMask(value: number) {
    this._v4SubnetMask = value;
  }
  public resetV4SubnetMask() {
    this._v4SubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4SubnetMaskInput() {
    return this._v4SubnetMask;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      v4_subnet: cdktf.stringToTerraform(this._v4Subnet),
      v4_subnet_mask: cdktf.numberToTerraform(this._v4SubnetMask),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v4_subnet: {
        value: cdktf.stringToHclTerraform(this._v4Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v4_subnet_mask: {
        value: cdktf.numberToHclTerraform(this._v4SubnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
