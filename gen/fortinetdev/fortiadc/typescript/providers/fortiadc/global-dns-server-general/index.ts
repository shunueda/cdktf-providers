// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalDnsServerGeneralConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#certificate GlobalDnsServerGeneral#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#dnssec_validate_status GlobalDnsServerGeneral#dnssec_validate_status}
  */
  readonly dnssecValidateStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#doh_interface_list GlobalDnsServerGeneral#doh_interface_list}
  */
  readonly dohInterfaceList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#doh_port GlobalDnsServerGeneral#doh_port}
  */
  readonly dohPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#doh_status GlobalDnsServerGeneral#doh_status}
  */
  readonly dohStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#dohs_interface_list GlobalDnsServerGeneral#dohs_interface_list}
  */
  readonly dohsInterfaceList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#dohs_port GlobalDnsServerGeneral#dohs_port}
  */
  readonly dohsPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#dohs_status GlobalDnsServerGeneral#dohs_status}
  */
  readonly dohsStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#dot_interface_list GlobalDnsServerGeneral#dot_interface_list}
  */
  readonly dotInterfaceList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#dot_port GlobalDnsServerGeneral#dot_port}
  */
  readonly dotPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#dot_status GlobalDnsServerGeneral#dot_status}
  */
  readonly dotStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#forward GlobalDnsServerGeneral#forward}
  */
  readonly forward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#forwarders GlobalDnsServerGeneral#forwarders}
  */
  readonly forwarders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#gds_status GlobalDnsServerGeneral#gds_status}
  */
  readonly gdsStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#id GlobalDnsServerGeneral#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#interface_list GlobalDnsServerGeneral#interface_list}
  */
  readonly interfaceList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#ipv4_accessed_status GlobalDnsServerGeneral#ipv4_accessed_status}
  */
  readonly ipv4AccessedStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#ipv6_accessed_status GlobalDnsServerGeneral#ipv6_accessed_status}
  */
  readonly ipv6AccessedStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#listen_on_all_interface GlobalDnsServerGeneral#listen_on_all_interface}
  */
  readonly listenOnAllInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#minimal_responses GlobalDnsServerGeneral#minimal_responses}
  */
  readonly minimalResponses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#recurision_status GlobalDnsServerGeneral#recurision_status}
  */
  readonly recurisionStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#response_ratelimit GlobalDnsServerGeneral#response_ratelimit}
  */
  readonly responseRatelimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#traffic_log GlobalDnsServerGeneral#traffic_log}
  */
  readonly trafficLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#use_system_dns_server GlobalDnsServerGeneral#use_system_dns_server}
  */
  readonly useSystemDnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#vdom GlobalDnsServerGeneral#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general fortiadc_global_dns_server_general}
*/
export class GlobalDnsServerGeneral extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_global_dns_server_general";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalDnsServerGeneral resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalDnsServerGeneral to import
  * @param importFromId The id of the existing GlobalDnsServerGeneral that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalDnsServerGeneral to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_global_dns_server_general", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_dns_server_general fortiadc_global_dns_server_general} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalDnsServerGeneralConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GlobalDnsServerGeneralConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_global_dns_server_general',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificate = config.certificate;
    this._dnssecValidateStatus = config.dnssecValidateStatus;
    this._dohInterfaceList = config.dohInterfaceList;
    this._dohPort = config.dohPort;
    this._dohStatus = config.dohStatus;
    this._dohsInterfaceList = config.dohsInterfaceList;
    this._dohsPort = config.dohsPort;
    this._dohsStatus = config.dohsStatus;
    this._dotInterfaceList = config.dotInterfaceList;
    this._dotPort = config.dotPort;
    this._dotStatus = config.dotStatus;
    this._forward = config.forward;
    this._forwarders = config.forwarders;
    this._gdsStatus = config.gdsStatus;
    this._id = config.id;
    this._interfaceList = config.interfaceList;
    this._ipv4AccessedStatus = config.ipv4AccessedStatus;
    this._ipv6AccessedStatus = config.ipv6AccessedStatus;
    this._listenOnAllInterface = config.listenOnAllInterface;
    this._minimalResponses = config.minimalResponses;
    this._recurisionStatus = config.recurisionStatus;
    this._responseRatelimit = config.responseRatelimit;
    this._trafficLog = config.trafficLog;
    this._useSystemDnsServer = config.useSystemDnsServer;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // dnssec_validate_status - computed: true, optional: true, required: false
  private _dnssecValidateStatus?: string; 
  public get dnssecValidateStatus() {
    return this.getStringAttribute('dnssec_validate_status');
  }
  public set dnssecValidateStatus(value: string) {
    this._dnssecValidateStatus = value;
  }
  public resetDnssecValidateStatus() {
    this._dnssecValidateStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecValidateStatusInput() {
    return this._dnssecValidateStatus;
  }

  // doh_interface_list - computed: true, optional: true, required: false
  private _dohInterfaceList?: string; 
  public get dohInterfaceList() {
    return this.getStringAttribute('doh_interface_list');
  }
  public set dohInterfaceList(value: string) {
    this._dohInterfaceList = value;
  }
  public resetDohInterfaceList() {
    this._dohInterfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohInterfaceListInput() {
    return this._dohInterfaceList;
  }

  // doh_port - computed: true, optional: true, required: false
  private _dohPort?: string; 
  public get dohPort() {
    return this.getStringAttribute('doh_port');
  }
  public set dohPort(value: string) {
    this._dohPort = value;
  }
  public resetDohPort() {
    this._dohPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohPortInput() {
    return this._dohPort;
  }

  // doh_status - computed: true, optional: true, required: false
  private _dohStatus?: string; 
  public get dohStatus() {
    return this.getStringAttribute('doh_status');
  }
  public set dohStatus(value: string) {
    this._dohStatus = value;
  }
  public resetDohStatus() {
    this._dohStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohStatusInput() {
    return this._dohStatus;
  }

  // dohs_interface_list - computed: true, optional: true, required: false
  private _dohsInterfaceList?: string; 
  public get dohsInterfaceList() {
    return this.getStringAttribute('dohs_interface_list');
  }
  public set dohsInterfaceList(value: string) {
    this._dohsInterfaceList = value;
  }
  public resetDohsInterfaceList() {
    this._dohsInterfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohsInterfaceListInput() {
    return this._dohsInterfaceList;
  }

  // dohs_port - computed: true, optional: true, required: false
  private _dohsPort?: string; 
  public get dohsPort() {
    return this.getStringAttribute('dohs_port');
  }
  public set dohsPort(value: string) {
    this._dohsPort = value;
  }
  public resetDohsPort() {
    this._dohsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohsPortInput() {
    return this._dohsPort;
  }

  // dohs_status - computed: true, optional: true, required: false
  private _dohsStatus?: string; 
  public get dohsStatus() {
    return this.getStringAttribute('dohs_status');
  }
  public set dohsStatus(value: string) {
    this._dohsStatus = value;
  }
  public resetDohsStatus() {
    this._dohsStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohsStatusInput() {
    return this._dohsStatus;
  }

  // dot_interface_list - computed: true, optional: true, required: false
  private _dotInterfaceList?: string; 
  public get dotInterfaceList() {
    return this.getStringAttribute('dot_interface_list');
  }
  public set dotInterfaceList(value: string) {
    this._dotInterfaceList = value;
  }
  public resetDotInterfaceList() {
    this._dotInterfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotInterfaceListInput() {
    return this._dotInterfaceList;
  }

  // dot_port - computed: true, optional: true, required: false
  private _dotPort?: string; 
  public get dotPort() {
    return this.getStringAttribute('dot_port');
  }
  public set dotPort(value: string) {
    this._dotPort = value;
  }
  public resetDotPort() {
    this._dotPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotPortInput() {
    return this._dotPort;
  }

  // dot_status - computed: true, optional: true, required: false
  private _dotStatus?: string; 
  public get dotStatus() {
    return this.getStringAttribute('dot_status');
  }
  public set dotStatus(value: string) {
    this._dotStatus = value;
  }
  public resetDotStatus() {
    this._dotStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotStatusInput() {
    return this._dotStatus;
  }

  // forward - computed: true, optional: true, required: false
  private _forward?: string; 
  public get forward() {
    return this.getStringAttribute('forward');
  }
  public set forward(value: string) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }

  // forwarders - computed: true, optional: true, required: false
  private _forwarders?: string; 
  public get forwarders() {
    return this.getStringAttribute('forwarders');
  }
  public set forwarders(value: string) {
    this._forwarders = value;
  }
  public resetForwarders() {
    this._forwarders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardersInput() {
    return this._forwarders;
  }

  // gds_status - computed: true, optional: true, required: false
  private _gdsStatus?: string; 
  public get gdsStatus() {
    return this.getStringAttribute('gds_status');
  }
  public set gdsStatus(value: string) {
    this._gdsStatus = value;
  }
  public resetGdsStatus() {
    this._gdsStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gdsStatusInput() {
    return this._gdsStatus;
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

  // interface_list - computed: true, optional: true, required: false
  private _interfaceList?: string; 
  public get interfaceList() {
    return this.getStringAttribute('interface_list');
  }
  public set interfaceList(value: string) {
    this._interfaceList = value;
  }
  public resetInterfaceList() {
    this._interfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList;
  }

  // ipv4_accessed_status - computed: true, optional: true, required: false
  private _ipv4AccessedStatus?: string; 
  public get ipv4AccessedStatus() {
    return this.getStringAttribute('ipv4_accessed_status');
  }
  public set ipv4AccessedStatus(value: string) {
    this._ipv4AccessedStatus = value;
  }
  public resetIpv4AccessedStatus() {
    this._ipv4AccessedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AccessedStatusInput() {
    return this._ipv4AccessedStatus;
  }

  // ipv6_accessed_status - computed: true, optional: true, required: false
  private _ipv6AccessedStatus?: string; 
  public get ipv6AccessedStatus() {
    return this.getStringAttribute('ipv6_accessed_status');
  }
  public set ipv6AccessedStatus(value: string) {
    this._ipv6AccessedStatus = value;
  }
  public resetIpv6AccessedStatus() {
    this._ipv6AccessedStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessedStatusInput() {
    return this._ipv6AccessedStatus;
  }

  // listen_on_all_interface - computed: true, optional: true, required: false
  private _listenOnAllInterface?: string; 
  public get listenOnAllInterface() {
    return this.getStringAttribute('listen_on_all_interface');
  }
  public set listenOnAllInterface(value: string) {
    this._listenOnAllInterface = value;
  }
  public resetListenOnAllInterface() {
    this._listenOnAllInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenOnAllInterfaceInput() {
    return this._listenOnAllInterface;
  }

  // minimal_responses - computed: true, optional: true, required: false
  private _minimalResponses?: string; 
  public get minimalResponses() {
    return this.getStringAttribute('minimal_responses');
  }
  public set minimalResponses(value: string) {
    this._minimalResponses = value;
  }
  public resetMinimalResponses() {
    this._minimalResponses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalResponsesInput() {
    return this._minimalResponses;
  }

  // recurision_status - computed: true, optional: true, required: false
  private _recurisionStatus?: string; 
  public get recurisionStatus() {
    return this.getStringAttribute('recurision_status');
  }
  public set recurisionStatus(value: string) {
    this._recurisionStatus = value;
  }
  public resetRecurisionStatus() {
    this._recurisionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurisionStatusInput() {
    return this._recurisionStatus;
  }

  // response_ratelimit - computed: true, optional: true, required: false
  private _responseRatelimit?: string; 
  public get responseRatelimit() {
    return this.getStringAttribute('response_ratelimit');
  }
  public set responseRatelimit(value: string) {
    this._responseRatelimit = value;
  }
  public resetResponseRatelimit() {
    this._responseRatelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseRatelimitInput() {
    return this._responseRatelimit;
  }

  // traffic_log - computed: true, optional: true, required: false
  private _trafficLog?: string; 
  public get trafficLog() {
    return this.getStringAttribute('traffic_log');
  }
  public set trafficLog(value: string) {
    this._trafficLog = value;
  }
  public resetTrafficLog() {
    this._trafficLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficLogInput() {
    return this._trafficLog;
  }

  // use_system_dns_server - computed: true, optional: true, required: false
  private _useSystemDnsServer?: string; 
  public get useSystemDnsServer() {
    return this.getStringAttribute('use_system_dns_server');
  }
  public set useSystemDnsServer(value: string) {
    this._useSystemDnsServer = value;
  }
  public resetUseSystemDnsServer() {
    this._useSystemDnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemDnsServerInput() {
    return this._useSystemDnsServer;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.stringToTerraform(this._certificate),
      dnssec_validate_status: cdktf.stringToTerraform(this._dnssecValidateStatus),
      doh_interface_list: cdktf.stringToTerraform(this._dohInterfaceList),
      doh_port: cdktf.stringToTerraform(this._dohPort),
      doh_status: cdktf.stringToTerraform(this._dohStatus),
      dohs_interface_list: cdktf.stringToTerraform(this._dohsInterfaceList),
      dohs_port: cdktf.stringToTerraform(this._dohsPort),
      dohs_status: cdktf.stringToTerraform(this._dohsStatus),
      dot_interface_list: cdktf.stringToTerraform(this._dotInterfaceList),
      dot_port: cdktf.stringToTerraform(this._dotPort),
      dot_status: cdktf.stringToTerraform(this._dotStatus),
      forward: cdktf.stringToTerraform(this._forward),
      forwarders: cdktf.stringToTerraform(this._forwarders),
      gds_status: cdktf.stringToTerraform(this._gdsStatus),
      id: cdktf.stringToTerraform(this._id),
      interface_list: cdktf.stringToTerraform(this._interfaceList),
      ipv4_accessed_status: cdktf.stringToTerraform(this._ipv4AccessedStatus),
      ipv6_accessed_status: cdktf.stringToTerraform(this._ipv6AccessedStatus),
      listen_on_all_interface: cdktf.stringToTerraform(this._listenOnAllInterface),
      minimal_responses: cdktf.stringToTerraform(this._minimalResponses),
      recurision_status: cdktf.stringToTerraform(this._recurisionStatus),
      response_ratelimit: cdktf.stringToTerraform(this._responseRatelimit),
      traffic_log: cdktf.stringToTerraform(this._trafficLog),
      use_system_dns_server: cdktf.stringToTerraform(this._useSystemDnsServer),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnssec_validate_status: {
        value: cdktf.stringToHclTerraform(this._dnssecValidateStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      doh_interface_list: {
        value: cdktf.stringToHclTerraform(this._dohInterfaceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      doh_port: {
        value: cdktf.stringToHclTerraform(this._dohPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      doh_status: {
        value: cdktf.stringToHclTerraform(this._dohStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dohs_interface_list: {
        value: cdktf.stringToHclTerraform(this._dohsInterfaceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dohs_port: {
        value: cdktf.stringToHclTerraform(this._dohsPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dohs_status: {
        value: cdktf.stringToHclTerraform(this._dohsStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot_interface_list: {
        value: cdktf.stringToHclTerraform(this._dotInterfaceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot_port: {
        value: cdktf.stringToHclTerraform(this._dotPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dot_status: {
        value: cdktf.stringToHclTerraform(this._dotStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward: {
        value: cdktf.stringToHclTerraform(this._forward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forwarders: {
        value: cdktf.stringToHclTerraform(this._forwarders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gds_status: {
        value: cdktf.stringToHclTerraform(this._gdsStatus),
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
      interface_list: {
        value: cdktf.stringToHclTerraform(this._interfaceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_accessed_status: {
        value: cdktf.stringToHclTerraform(this._ipv4AccessedStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_accessed_status: {
        value: cdktf.stringToHclTerraform(this._ipv6AccessedStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listen_on_all_interface: {
        value: cdktf.stringToHclTerraform(this._listenOnAllInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimal_responses: {
        value: cdktf.stringToHclTerraform(this._minimalResponses),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurision_status: {
        value: cdktf.stringToHclTerraform(this._recurisionStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_ratelimit: {
        value: cdktf.stringToHclTerraform(this._responseRatelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_log: {
        value: cdktf.stringToHclTerraform(this._trafficLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_system_dns_server: {
        value: cdktf.stringToHclTerraform(this._useSystemDnsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
