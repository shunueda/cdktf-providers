// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile_vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcfIpsProfileVpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of DCF IPS profile UUIDs to assign to the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile_vpc#dcf_ips_profiles DcfIpsProfileVpc#dcf_ips_profiles}
  */
  readonly dcfIpsProfiles: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile_vpc#id DcfIpsProfileVpc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The VPC ID to assign DCF IPS profiles to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile_vpc#vpc_id DcfIpsProfileVpc#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile_vpc aviatrix_dcf_ips_profile_vpc}
*/
export class DcfIpsProfileVpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_dcf_ips_profile_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcfIpsProfileVpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcfIpsProfileVpc to import
  * @param importFromId The id of the existing DcfIpsProfileVpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile_vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcfIpsProfileVpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_dcf_ips_profile_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/dcf_ips_profile_vpc aviatrix_dcf_ips_profile_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcfIpsProfileVpcConfig
  */
  public constructor(scope: Construct, id: string, config: DcfIpsProfileVpcConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_dcf_ips_profile_vpc',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dcfIpsProfiles = config.dcfIpsProfiles;
    this._id = config.id;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dcf_ips_profiles - computed: false, optional: false, required: true
  private _dcfIpsProfiles?: string[]; 
  public get dcfIpsProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('dcf_ips_profiles'));
  }
  public set dcfIpsProfiles(value: string[]) {
    this._dcfIpsProfiles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dcfIpsProfilesInput() {
    return this._dcfIpsProfiles;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dcf_ips_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dcfIpsProfiles),
      id: cdktf.stringToTerraform(this._id),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dcf_ips_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dcfIpsProfiles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
