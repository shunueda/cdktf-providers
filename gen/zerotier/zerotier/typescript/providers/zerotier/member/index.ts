// https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Is this member allowed to activate ethernet bridging over the ZeroTier network?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#allow_ethernet_bridging Member#allow_ethernet_bridging}
  */
  readonly allowEthernetBridging?: boolean | cdktf.IResolvable;
  /**
  * Is the member authorized on the network?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#authorized Member#authorized}
  */
  readonly authorized?: boolean | cdktf.IResolvable;
  /**
  * List of network capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#capabilities Member#capabilities}
  */
  readonly capabilities?: number[];
  /**
  * Text description of this member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#description Member#description}
  */
  readonly description?: string;
  /**
  * Is this member visible?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#hidden Member#hidden}
  */
  readonly hidden?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#id Member#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of IP address assignments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#ip_assignments Member#ip_assignments}
  */
  readonly ipAssignments?: string[];
  /**
  * ZeroTier managed IPv4 addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#ipv4_assignments Member#ipv4_assignments}
  */
  readonly ipv4Assignments?: string[];
  /**
  * ZeroTier managed IPv6 addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#ipv6_assignments Member#ipv6_assignments}
  */
  readonly ipv6Assignments?: string[];
  /**
  * ID of this member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#member_id Member#member_id}
  */
  readonly memberId: string;
  /**
  * Descriptive name of this member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#name Member#name}
  */
  readonly name?: string;
  /**
  * ID of the network this member belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#network_id Member#network_id}
  */
  readonly networkId: string;
  /**
  * Exempt this member from the IP auto assignment pool on a Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#no_auto_assign_ips Member#no_auto_assign_ips}
  */
  readonly noAutoAssignIps?: boolean | cdktf.IResolvable;
  /**
  * Computed RFC4193 address. assign_ipv6.rfc4193 must be enabled on the network resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#rfc4193 Member#rfc4193}
  */
  readonly rfc4193?: string;
  /**
  * Computed 6PLANE address. assign_ipv6.sixplane must be enabled on the network resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#sixplane Member#sixplane}
  */
  readonly sixplane?: string;
  /**
  * Is the member exempt from SSO?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#sso_exempt Member#sso_exempt}
  */
  readonly ssoExempt?: boolean | cdktf.IResolvable;
  /**
  * List of network tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#tags Member#tags}
  */
  readonly tags?: number[][] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member zerotier_member}
*/
export class Member extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zerotier_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Member resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Member to import
  * @param importFromId The id of the existing Member that should be imported. Refer to the {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Member to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zerotier_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zerotier/zerotier/1.6.0/docs/resources/member zerotier_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MemberConfig
  */
  public constructor(scope: Construct, id: string, config: MemberConfig) {
    super(scope, id, {
      terraformResourceType: 'zerotier_member',
      terraformGeneratorMetadata: {
        providerName: 'zerotier',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowEthernetBridging = config.allowEthernetBridging;
    this._authorized = config.authorized;
    this._capabilities = config.capabilities;
    this._description = config.description;
    this._hidden = config.hidden;
    this._id = config.id;
    this._ipAssignments = config.ipAssignments;
    this._ipv4Assignments = config.ipv4Assignments;
    this._ipv6Assignments = config.ipv6Assignments;
    this._memberId = config.memberId;
    this._name = config.name;
    this._networkId = config.networkId;
    this._noAutoAssignIps = config.noAutoAssignIps;
    this._rfc4193 = config.rfc4193;
    this._sixplane = config.sixplane;
    this._ssoExempt = config.ssoExempt;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_ethernet_bridging - computed: false, optional: true, required: false
  private _allowEthernetBridging?: boolean | cdktf.IResolvable; 
  public get allowEthernetBridging() {
    return this.getBooleanAttribute('allow_ethernet_bridging');
  }
  public set allowEthernetBridging(value: boolean | cdktf.IResolvable) {
    this._allowEthernetBridging = value;
  }
  public resetAllowEthernetBridging() {
    this._allowEthernetBridging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEthernetBridgingInput() {
    return this._allowEthernetBridging;
  }

  // authorized - computed: false, optional: true, required: false
  private _authorized?: boolean | cdktf.IResolvable; 
  public get authorized() {
    return this.getBooleanAttribute('authorized');
  }
  public set authorized(value: boolean | cdktf.IResolvable) {
    this._authorized = value;
  }
  public resetAuthorized() {
    this._authorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedInput() {
    return this._authorized;
  }

  // capabilities - computed: true, optional: true, required: false
  private _capabilities?: number[]; 
  public get capabilities() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('capabilities')));
  }
  public set capabilities(value: number[]) {
    this._capabilities = value;
  }
  public resetCapabilities() {
    this._capabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities;
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

  // hidden - computed: false, optional: true, required: false
  private _hidden?: boolean | cdktf.IResolvable; 
  public get hidden() {
    return this.getBooleanAttribute('hidden');
  }
  public set hidden(value: boolean | cdktf.IResolvable) {
    this._hidden = value;
  }
  public resetHidden() {
    this._hidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenInput() {
    return this._hidden;
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

  // ip_assignments - computed: true, optional: true, required: false
  private _ipAssignments?: string[]; 
  public get ipAssignments() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_assignments'));
  }
  public set ipAssignments(value: string[]) {
    this._ipAssignments = value;
  }
  public resetIpAssignments() {
    this._ipAssignments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAssignmentsInput() {
    return this._ipAssignments;
  }

  // ipv4_assignments - computed: true, optional: true, required: false
  private _ipv4Assignments?: string[]; 
  public get ipv4Assignments() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_assignments'));
  }
  public set ipv4Assignments(value: string[]) {
    this._ipv4Assignments = value;
  }
  public resetIpv4Assignments() {
    this._ipv4Assignments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AssignmentsInput() {
    return this._ipv4Assignments;
  }

  // ipv6_assignments - computed: true, optional: true, required: false
  private _ipv6Assignments?: string[]; 
  public get ipv6Assignments() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_assignments'));
  }
  public set ipv6Assignments(value: string[]) {
    this._ipv6Assignments = value;
  }
  public resetIpv6Assignments() {
    this._ipv6Assignments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AssignmentsInput() {
    return this._ipv6Assignments;
  }

  // member_id - computed: false, optional: false, required: true
  private _memberId?: string; 
  public get memberId() {
    return this.getStringAttribute('member_id');
  }
  public set memberId(value: string) {
    this._memberId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdInput() {
    return this._memberId;
  }

  // name - computed: true, optional: true, required: false
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // no_auto_assign_ips - computed: false, optional: true, required: false
  private _noAutoAssignIps?: boolean | cdktf.IResolvable; 
  public get noAutoAssignIps() {
    return this.getBooleanAttribute('no_auto_assign_ips');
  }
  public set noAutoAssignIps(value: boolean | cdktf.IResolvable) {
    this._noAutoAssignIps = value;
  }
  public resetNoAutoAssignIps() {
    this._noAutoAssignIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAutoAssignIpsInput() {
    return this._noAutoAssignIps;
  }

  // rfc4193 - computed: true, optional: true, required: false
  private _rfc4193?: string; 
  public get rfc4193() {
    return this.getStringAttribute('rfc4193');
  }
  public set rfc4193(value: string) {
    this._rfc4193 = value;
  }
  public resetRfc4193() {
    this._rfc4193 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc4193Input() {
    return this._rfc4193;
  }

  // sixplane - computed: true, optional: true, required: false
  private _sixplane?: string; 
  public get sixplane() {
    return this.getStringAttribute('sixplane');
  }
  public set sixplane(value: string) {
    this._sixplane = value;
  }
  public resetSixplane() {
    this._sixplane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sixplaneInput() {
    return this._sixplane;
  }

  // sso_exempt - computed: false, optional: true, required: false
  private _ssoExempt?: boolean | cdktf.IResolvable; 
  public get ssoExempt() {
    return this.getBooleanAttribute('sso_exempt');
  }
  public set ssoExempt(value: boolean | cdktf.IResolvable) {
    this._ssoExempt = value;
  }
  public resetSsoExempt() {
    this._ssoExempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoExemptInput() {
    return this._ssoExempt;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: number[][] | cdktf.IResolvable; 
  public get tags() {
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('tags')));
  }
  public set tags(value: number[][] | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_ethernet_bridging: cdktf.booleanToTerraform(this._allowEthernetBridging),
      authorized: cdktf.booleanToTerraform(this._authorized),
      capabilities: cdktf.listMapper(cdktf.numberToTerraform, false)(this._capabilities),
      description: cdktf.stringToTerraform(this._description),
      hidden: cdktf.booleanToTerraform(this._hidden),
      id: cdktf.stringToTerraform(this._id),
      ip_assignments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAssignments),
      ipv4_assignments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4Assignments),
      ipv6_assignments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6Assignments),
      member_id: cdktf.stringToTerraform(this._memberId),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      no_auto_assign_ips: cdktf.booleanToTerraform(this._noAutoAssignIps),
      rfc4193: cdktf.stringToTerraform(this._rfc4193),
      sixplane: cdktf.stringToTerraform(this._sixplane),
      sso_exempt: cdktf.booleanToTerraform(this._ssoExempt),
      tags: cdktf.listMapper(cdktf.listMapper(cdktf.numberToTerraform, false), false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_ethernet_bridging: {
        value: cdktf.booleanToHclTerraform(this._allowEthernetBridging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authorized: {
        value: cdktf.booleanToHclTerraform(this._authorized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      capabilities: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._capabilities),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hidden: {
        value: cdktf.booleanToHclTerraform(this._hidden),
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
      ip_assignments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAssignments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv4_assignments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4Assignments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ipv6_assignments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6Assignments),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      member_id: {
        value: cdktf.stringToHclTerraform(this._memberId),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_auto_assign_ips: {
        value: cdktf.booleanToHclTerraform(this._noAutoAssignIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rfc4193: {
        value: cdktf.stringToHclTerraform(this._rfc4193),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sixplane: {
        value: cdktf.stringToHclTerraform(this._sixplane),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_exempt: {
        value: cdktf.booleanToHclTerraform(this._ssoExempt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.numberToHclTerraform, false), false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "numberListList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
