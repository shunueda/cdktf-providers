// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6TemplatePcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow third party request coming from LAN (default is disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#allow_third_party_from_lan Cgnv6TemplatePcp#allow_third_party_from_lan}
  */
  readonly allowThirdPartyFromLan?: number;
  /**
  * Allow third party request coming from WAN (default is disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#allow_third_party_from_wan Cgnv6TemplatePcp#allow_third_party_from_wan}
  */
  readonly allowThirdPartyFromWan?: number;
  /**
  * PCP ANNOUNCE Opcode (default is enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#announce Cgnv6TemplatePcp#announce}
  */
  readonly announce?: number;
  /**
  * To validate NONCE value in PCP request (default: disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#check_client_nonce Cgnv6TemplatePcp#check_client_nonce}
  */
  readonly checkClientNonce?: number;
  /**
  * To disable processing of FILTER options in MAP request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#disable_map_filter Cgnv6TemplatePcp#disable_map_filter}
  */
  readonly disableMapFilter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#id Cgnv6TemplatePcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * PCP MAP Opcode (default is enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#map Cgnv6TemplatePcp#map}
  */
  readonly map?: number;
  /**
  * To set maximum lifetime of PCP mappings (default 1440 minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#maximum Cgnv6TemplatePcp#maximum}
  */
  readonly maximum?: number;
  /**
  * To set minimum lifetime of PCP mappings (default 2 minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#minimum Cgnv6TemplatePcp#minimum}
  */
  readonly minimum?: number;
  /**
  * PCP Template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#name Cgnv6TemplatePcp#name}
  */
  readonly name: string;
  /**
  * PCP server listening port (default 5351) (PCP UDP destination port)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#pcp_server_port Cgnv6TemplatePcp#pcp_server_port}
  */
  readonly pcpServerPort?: number;
  /**
  * PCP PEER Opcode (default is enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#peer Cgnv6TemplatePcp#peer}
  */
  readonly peer?: number;
  /**
  * Specify source IP address for IPv4 ANNOUNCE message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#source_ip Cgnv6TemplatePcp#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Specify source IPv6 address for IPv6 ANNOUNCE message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#source_ipv6 Cgnv6TemplatePcp#source_ipv6}
  */
  readonly sourceIpv6?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#user_tag Cgnv6TemplatePcp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#uuid Cgnv6TemplatePcp#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp thunder_cgnv6_template_pcp}
*/
export class Cgnv6TemplatePcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_template_pcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6TemplatePcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6TemplatePcp to import
  * @param importFromId The id of the existing Cgnv6TemplatePcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6TemplatePcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_template_pcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_template_pcp thunder_cgnv6_template_pcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6TemplatePcpConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6TemplatePcpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_template_pcp',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowThirdPartyFromLan = config.allowThirdPartyFromLan;
    this._allowThirdPartyFromWan = config.allowThirdPartyFromWan;
    this._announce = config.announce;
    this._checkClientNonce = config.checkClientNonce;
    this._disableMapFilter = config.disableMapFilter;
    this._id = config.id;
    this._map = config.map;
    this._maximum = config.maximum;
    this._minimum = config.minimum;
    this._name = config.name;
    this._pcpServerPort = config.pcpServerPort;
    this._peer = config.peer;
    this._sourceIp = config.sourceIp;
    this._sourceIpv6 = config.sourceIpv6;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_third_party_from_lan - computed: false, optional: true, required: false
  private _allowThirdPartyFromLan?: number; 
  public get allowThirdPartyFromLan() {
    return this.getNumberAttribute('allow_third_party_from_lan');
  }
  public set allowThirdPartyFromLan(value: number) {
    this._allowThirdPartyFromLan = value;
  }
  public resetAllowThirdPartyFromLan() {
    this._allowThirdPartyFromLan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowThirdPartyFromLanInput() {
    return this._allowThirdPartyFromLan;
  }

  // allow_third_party_from_wan - computed: false, optional: true, required: false
  private _allowThirdPartyFromWan?: number; 
  public get allowThirdPartyFromWan() {
    return this.getNumberAttribute('allow_third_party_from_wan');
  }
  public set allowThirdPartyFromWan(value: number) {
    this._allowThirdPartyFromWan = value;
  }
  public resetAllowThirdPartyFromWan() {
    this._allowThirdPartyFromWan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowThirdPartyFromWanInput() {
    return this._allowThirdPartyFromWan;
  }

  // announce - computed: false, optional: true, required: false
  private _announce?: number; 
  public get announce() {
    return this.getNumberAttribute('announce');
  }
  public set announce(value: number) {
    this._announce = value;
  }
  public resetAnnounce() {
    this._announce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announceInput() {
    return this._announce;
  }

  // check_client_nonce - computed: false, optional: true, required: false
  private _checkClientNonce?: number; 
  public get checkClientNonce() {
    return this.getNumberAttribute('check_client_nonce');
  }
  public set checkClientNonce(value: number) {
    this._checkClientNonce = value;
  }
  public resetCheckClientNonce() {
    this._checkClientNonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkClientNonceInput() {
    return this._checkClientNonce;
  }

  // disable_map_filter - computed: false, optional: true, required: false
  private _disableMapFilter?: number; 
  public get disableMapFilter() {
    return this.getNumberAttribute('disable_map_filter');
  }
  public set disableMapFilter(value: number) {
    this._disableMapFilter = value;
  }
  public resetDisableMapFilter() {
    this._disableMapFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMapFilterInput() {
    return this._disableMapFilter;
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

  // map - computed: false, optional: true, required: false
  private _map?: number; 
  public get map() {
    return this.getNumberAttribute('map');
  }
  public set map(value: number) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
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

  // pcp_server_port - computed: false, optional: true, required: false
  private _pcpServerPort?: number; 
  public get pcpServerPort() {
    return this.getNumberAttribute('pcp_server_port');
  }
  public set pcpServerPort(value: number) {
    this._pcpServerPort = value;
  }
  public resetPcpServerPort() {
    this._pcpServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcpServerPortInput() {
    return this._pcpServerPort;
  }

  // peer - computed: false, optional: true, required: false
  private _peer?: number; 
  public get peer() {
    return this.getNumberAttribute('peer');
  }
  public set peer(value: number) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ipv6 - computed: false, optional: true, required: false
  private _sourceIpv6?: string; 
  public get sourceIpv6() {
    return this.getStringAttribute('source_ipv6');
  }
  public set sourceIpv6(value: string) {
    this._sourceIpv6 = value;
  }
  public resetSourceIpv6() {
    this._sourceIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpv6Input() {
    return this._sourceIpv6;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_third_party_from_lan: cdktf.numberToTerraform(this._allowThirdPartyFromLan),
      allow_third_party_from_wan: cdktf.numberToTerraform(this._allowThirdPartyFromWan),
      announce: cdktf.numberToTerraform(this._announce),
      check_client_nonce: cdktf.numberToTerraform(this._checkClientNonce),
      disable_map_filter: cdktf.numberToTerraform(this._disableMapFilter),
      id: cdktf.stringToTerraform(this._id),
      map: cdktf.numberToTerraform(this._map),
      maximum: cdktf.numberToTerraform(this._maximum),
      minimum: cdktf.numberToTerraform(this._minimum),
      name: cdktf.stringToTerraform(this._name),
      pcp_server_port: cdktf.numberToTerraform(this._pcpServerPort),
      peer: cdktf.numberToTerraform(this._peer),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ipv6: cdktf.stringToTerraform(this._sourceIpv6),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_third_party_from_lan: {
        value: cdktf.numberToHclTerraform(this._allowThirdPartyFromLan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allow_third_party_from_wan: {
        value: cdktf.numberToHclTerraform(this._allowThirdPartyFromWan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      announce: {
        value: cdktf.numberToHclTerraform(this._announce),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      check_client_nonce: {
        value: cdktf.numberToHclTerraform(this._checkClientNonce),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_map_filter: {
        value: cdktf.numberToHclTerraform(this._disableMapFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      map: {
        value: cdktf.numberToHclTerraform(this._map),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum: {
        value: cdktf.numberToHclTerraform(this._maximum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minimum: {
        value: cdktf.numberToHclTerraform(this._minimum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcp_server_port: {
        value: cdktf.numberToHclTerraform(this._pcpServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      peer: {
        value: cdktf.numberToHclTerraform(this._peer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ipv6: {
        value: cdktf.stringToHclTerraform(this._sourceIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
