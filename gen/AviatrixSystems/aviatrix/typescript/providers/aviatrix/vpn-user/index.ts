// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * FQDN of a DNS based VPN service such as GeoVPN or UDP load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user#dns_name VpnUser#dns_name}
  */
  readonly dnsName?: string;
  /**
  * If ELB is enabled, this will be the name of the ELB, else it will be the name of the Aviatrix VPN gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user#gw_name VpnUser#gw_name}
  */
  readonly gwName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user#id VpnUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user#manage_user_attachment VpnUser#manage_user_attachment}
  */
  readonly manageUserAttachment?: boolean | cdktf.IResolvable;
  /**
  * List of profiles for user to attach to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user#profiles VpnUser#profiles}
  */
  readonly profiles?: string[];
  /**
  * This is the name of the SAML endpoint to which the user will be associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user#saml_endpoint VpnUser#saml_endpoint}
  */
  readonly samlEndpoint?: string;
  /**
  * VPN User's email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user#user_email VpnUser#user_email}
  */
  readonly userEmail?: string;
  /**
  * VPN user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user#user_name VpnUser#user_name}
  */
  readonly userName: string;
  /**
  * VPC Id of Aviatrix VPN gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user#vpc_id VpnUser#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user aviatrix_vpn_user}
*/
export class VpnUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_vpn_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnUser to import
  * @param importFromId The id of the existing VpnUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_vpn_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/vpn_user aviatrix_vpn_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnUserConfig
  */
  public constructor(scope: Construct, id: string, config: VpnUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_vpn_user',
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
    this._dnsName = config.dnsName;
    this._gwName = config.gwName;
    this._id = config.id;
    this._manageUserAttachment = config.manageUserAttachment;
    this._profiles = config.profiles;
    this._samlEndpoint = config.samlEndpoint;
    this._userEmail = config.userEmail;
    this._userName = config.userName;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_name - computed: false, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // gw_name - computed: false, optional: true, required: false
  private _gwName?: string; 
  public get gwName() {
    return this.getStringAttribute('gw_name');
  }
  public set gwName(value: string) {
    this._gwName = value;
  }
  public resetGwName() {
    this._gwName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwNameInput() {
    return this._gwName;
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

  // manage_user_attachment - computed: false, optional: true, required: false
  private _manageUserAttachment?: boolean | cdktf.IResolvable; 
  public get manageUserAttachment() {
    return this.getBooleanAttribute('manage_user_attachment');
  }
  public set manageUserAttachment(value: boolean | cdktf.IResolvable) {
    this._manageUserAttachment = value;
  }
  public resetManageUserAttachment() {
    this._manageUserAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageUserAttachmentInput() {
    return this._manageUserAttachment;
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // saml_endpoint - computed: false, optional: true, required: false
  private _samlEndpoint?: string; 
  public get samlEndpoint() {
    return this.getStringAttribute('saml_endpoint');
  }
  public set samlEndpoint(value: string) {
    this._samlEndpoint = value;
  }
  public resetSamlEndpoint() {
    this._samlEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlEndpointInput() {
    return this._samlEndpoint;
  }

  // user_email - computed: false, optional: true, required: false
  private _userEmail?: string; 
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }
  public set userEmail(value: string) {
    this._userEmail = value;
  }
  public resetUserEmail() {
    this._userEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailInput() {
    return this._userEmail;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
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
      dns_name: cdktf.stringToTerraform(this._dnsName),
      gw_name: cdktf.stringToTerraform(this._gwName),
      id: cdktf.stringToTerraform(this._id),
      manage_user_attachment: cdktf.booleanToTerraform(this._manageUserAttachment),
      profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._profiles),
      saml_endpoint: cdktf.stringToTerraform(this._samlEndpoint),
      user_email: cdktf.stringToTerraform(this._userEmail),
      user_name: cdktf.stringToTerraform(this._userName),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_name: {
        value: cdktf.stringToHclTerraform(this._dnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gw_name: {
        value: cdktf.stringToHclTerraform(this._gwName),
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
      manage_user_attachment: {
        value: cdktf.booleanToHclTerraform(this._manageUserAttachment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._profiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      saml_endpoint: {
        value: cdktf.stringToHclTerraform(this._samlEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_email: {
        value: cdktf.stringToHclTerraform(this._userEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
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
