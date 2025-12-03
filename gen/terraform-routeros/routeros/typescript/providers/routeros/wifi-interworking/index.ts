// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WifiInterworkingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cellular network advertisement information - country and network codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#3gpp_info WifiInterworking#3gpp_info}
  */
  readonly 3GppInfo?: string[];
  /**
  * Cellular network advertisement information - country and network codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#3gpp_raw WifiInterworking#3gpp_raw}
  */
  readonly 3GppRaw?: string;
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#___path___ WifiInterworking#___path___}
  */
  readonly path?: string;
  /**
  * An option to enable Additional Steps Required for Access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#asra WifiInterworking#asra}
  */
  readonly asra?: boolean | cdktf.IResolvable;
  /**
  * A list of authentication types that is only effective when `asra` is set to yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#authentication_types WifiInterworking#authentication_types}
  */
  readonly authenticationTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#comment WifiInterworking#comment}
  */
  readonly comment?: string;
  /**
  * A list to provide information about the allowed IP protocols and ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#connection_capabilities WifiInterworking#connection_capabilities}
  */
  readonly connectionCapabilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#disabled WifiInterworking#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * A list of fully qualified domain names (FQDN) that indicate the entity operating the Hotspot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#domain_names WifiInterworking#domain_names}
  */
  readonly domainNames?: string[];
  /**
  * An option to enable Emergency Services Reachability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#esr WifiInterworking#esr}
  */
  readonly esr?: boolean | cdktf.IResolvable;
  /**
  * Homogenous extended service set identifier (HESSID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#hessid WifiInterworking#hessid}
  */
  readonly hessid?: string;
  /**
  * An option to indicate Hotspot 2.0 capability of the Access Point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#hotspot20 WifiInterworking#hotspot20}
  */
  readonly hotspot20?: boolean | cdktf.IResolvable;
  /**
  * An option to indicate Downstream Group-Addressed Forwarding (DGAF) capability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#hotspot20_dgaf WifiInterworking#hotspot20_dgaf}
  */
  readonly hotspot20Dgaf?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#id WifiInterworking#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An option to indicate Internet availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#internet WifiInterworking#internet}
  */
  readonly internet?: boolean | cdktf.IResolvable;
  /**
  * An option to indicate IPv4 availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#ipv4_availability WifiInterworking#ipv4_availability}
  */
  readonly ipv4Availability?: string;
  /**
  * An option to indicate IPv6 availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#ipv6_availability WifiInterworking#ipv6_availability}
  */
  readonly ipv6Availability?: string;
  /**
  * Name of the interworking profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#name WifiInterworking#name}
  */
  readonly name: string;
  /**
  * Information about network access type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#network_type WifiInterworking#network_type}
  */
  readonly networkType?: string;
  /**
  * A list with information about other available bands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#operational_classes WifiInterworking#operational_classes}
  */
  readonly operationalClasses?: number[];
  /**
  * A list of colon-separated operator names and language codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#operator_names WifiInterworking#operator_names}
  */
  readonly operatorNames?: string[];
  /**
  * A list of colon-separated realm names and EAP methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#realms WifiInterworking#realms}
  */
  readonly realms?: string[];
  /**
  * A list of 'NAI Realm Tuple' excluding 'NAI Realm Data Field Length' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#realms_raw WifiInterworking#realms_raw}
  */
  readonly realmsRaw?: string[];
  /**
  * A list of Organization Identifiers (OI).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#roaming_ois WifiInterworking#roaming_ois}
  */
  readonly roamingOis?: string[];
  /**
  * An option to enable Unauthenticated Emergency Service Accessibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#uesa WifiInterworking#uesa}
  */
  readonly uesa?: boolean | cdktf.IResolvable;
  /**
  * Information about the venue in which the Access Point is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#venue WifiInterworking#venue}
  */
  readonly venue?: string;
  /**
  * A list of colon-separated venue names and language codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#venue_names WifiInterworking#venue_names}
  */
  readonly venueNames?: string[];
  /**
  * An option to indicate that the Access Point or the network is at its max capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#wan_at_capacity WifiInterworking#wan_at_capacity}
  */
  readonly wanAtCapacity?: boolean | cdktf.IResolvable;
  /**
  * The downlink speed of the WAN connection set in kbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#wan_downlink WifiInterworking#wan_downlink}
  */
  readonly wanDownlink?: number;
  /**
  * The downlink load of the WAN connection measured over `wan_measurement_duration`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#wan_downlink_load WifiInterworking#wan_downlink_load}
  */
  readonly wanDownlinkLoad?: number;
  /**
  * The duration during which `wan_downlink_load` and `wan_uplink_load` are measured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#wan_measurement_duration WifiInterworking#wan_measurement_duration}
  */
  readonly wanMeasurementDuration?: number;
  /**
  * Information about the status of the Access Point's WAN connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#wan_status WifiInterworking#wan_status}
  */
  readonly wanStatus?: string;
  /**
  * An option to indicate that the WAN link is symmetric (upload and download speeds are the same).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#wan_symmetric WifiInterworking#wan_symmetric}
  */
  readonly wanSymmetric?: boolean | cdktf.IResolvable;
  /**
  * The uplink speed of the WAN connection set in kbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#wan_uplink WifiInterworking#wan_uplink}
  */
  readonly wanUplink?: number;
  /**
  * The uplink load of the WAN connection measured over `wan_measurement_duration`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#wan_uplink_load WifiInterworking#wan_uplink_load}
  */
  readonly wanUplinkLoad?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking routeros_wifi_interworking}
*/
export class WifiInterworking extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_wifi_interworking";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WifiInterworking resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WifiInterworking to import
  * @param importFromId The id of the existing WifiInterworking that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WifiInterworking to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_wifi_interworking", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/wifi_interworking routeros_wifi_interworking} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WifiInterworkingConfig
  */
  public constructor(scope: Construct, id: string, config: WifiInterworkingConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_wifi_interworking',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._3GppInfo = config.3GppInfo;
    this._3GppRaw = config.3GppRaw;
    this._path = config.path;
    this._asra = config.asra;
    this._authenticationTypes = config.authenticationTypes;
    this._comment = config.comment;
    this._connectionCapabilities = config.connectionCapabilities;
    this._disabled = config.disabled;
    this._domainNames = config.domainNames;
    this._esr = config.esr;
    this._hessid = config.hessid;
    this._hotspot20 = config.hotspot20;
    this._hotspot20Dgaf = config.hotspot20Dgaf;
    this._id = config.id;
    this._internet = config.internet;
    this._ipv4Availability = config.ipv4Availability;
    this._ipv6Availability = config.ipv6Availability;
    this._name = config.name;
    this._networkType = config.networkType;
    this._operationalClasses = config.operationalClasses;
    this._operatorNames = config.operatorNames;
    this._realms = config.realms;
    this._realmsRaw = config.realmsRaw;
    this._roamingOis = config.roamingOis;
    this._uesa = config.uesa;
    this._venue = config.venue;
    this._venueNames = config.venueNames;
    this._wanAtCapacity = config.wanAtCapacity;
    this._wanDownlink = config.wanDownlink;
    this._wanDownlinkLoad = config.wanDownlinkLoad;
    this._wanMeasurementDuration = config.wanMeasurementDuration;
    this._wanStatus = config.wanStatus;
    this._wanSymmetric = config.wanSymmetric;
    this._wanUplink = config.wanUplink;
    this._wanUplinkLoad = config.wanUplinkLoad;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // 3gpp_info - computed: false, optional: true, required: false
  private _3GppInfo?: string[]; 
  public get 3GppInfo() {
    return this.getListAttribute('3gpp_info');
  }
  public set 3GppInfo(value: string[]) {
    this._3GppInfo = value;
  }
  public reset3GppInfo() {
    this._3GppInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get 3GppInfoInput() {
    return this._3GppInfo;
  }

  // 3gpp_raw - computed: false, optional: true, required: false
  private _3GppRaw?: string; 
  public get 3GppRaw() {
    return this.getStringAttribute('3gpp_raw');
  }
  public set 3GppRaw(value: string) {
    this._3GppRaw = value;
  }
  public reset3GppRaw() {
    this._3GppRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get 3GppRawInput() {
    return this._3GppRaw;
  }

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // asra - computed: false, optional: true, required: false
  private _asra?: boolean | cdktf.IResolvable; 
  public get asra() {
    return this.getBooleanAttribute('asra');
  }
  public set asra(value: boolean | cdktf.IResolvable) {
    this._asra = value;
  }
  public resetAsra() {
    this._asra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asraInput() {
    return this._asra;
  }

  // authentication_types - computed: false, optional: true, required: false
  private _authenticationTypes?: string[]; 
  public get authenticationTypes() {
    return this.getListAttribute('authentication_types');
  }
  public set authenticationTypes(value: string[]) {
    this._authenticationTypes = value;
  }
  public resetAuthenticationTypes() {
    this._authenticationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypesInput() {
    return this._authenticationTypes;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // connection_capabilities - computed: false, optional: true, required: false
  private _connectionCapabilities?: string[]; 
  public get connectionCapabilities() {
    return this.getListAttribute('connection_capabilities');
  }
  public set connectionCapabilities(value: string[]) {
    this._connectionCapabilities = value;
  }
  public resetConnectionCapabilities() {
    this._connectionCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCapabilitiesInput() {
    return this._connectionCapabilities;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // domain_names - computed: false, optional: true, required: false
  private _domainNames?: string[]; 
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  public resetDomainNames() {
    this._domainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // esr - computed: false, optional: true, required: false
  private _esr?: boolean | cdktf.IResolvable; 
  public get esr() {
    return this.getBooleanAttribute('esr');
  }
  public set esr(value: boolean | cdktf.IResolvable) {
    this._esr = value;
  }
  public resetEsr() {
    this._esr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esrInput() {
    return this._esr;
  }

  // hessid - computed: false, optional: true, required: false
  private _hessid?: string; 
  public get hessid() {
    return this.getStringAttribute('hessid');
  }
  public set hessid(value: string) {
    this._hessid = value;
  }
  public resetHessid() {
    this._hessid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hessidInput() {
    return this._hessid;
  }

  // hotspot20 - computed: false, optional: true, required: false
  private _hotspot20?: boolean | cdktf.IResolvable; 
  public get hotspot20() {
    return this.getBooleanAttribute('hotspot20');
  }
  public set hotspot20(value: boolean | cdktf.IResolvable) {
    this._hotspot20 = value;
  }
  public resetHotspot20() {
    this._hotspot20 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotspot20Input() {
    return this._hotspot20;
  }

  // hotspot20_dgaf - computed: false, optional: true, required: false
  private _hotspot20Dgaf?: boolean | cdktf.IResolvable; 
  public get hotspot20Dgaf() {
    return this.getBooleanAttribute('hotspot20_dgaf');
  }
  public set hotspot20Dgaf(value: boolean | cdktf.IResolvable) {
    this._hotspot20Dgaf = value;
  }
  public resetHotspot20Dgaf() {
    this._hotspot20Dgaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotspot20DgafInput() {
    return this._hotspot20Dgaf;
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

  // internet - computed: false, optional: true, required: false
  private _internet?: boolean | cdktf.IResolvable; 
  public get internet() {
    return this.getBooleanAttribute('internet');
  }
  public set internet(value: boolean | cdktf.IResolvable) {
    this._internet = value;
  }
  public resetInternet() {
    this._internet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetInput() {
    return this._internet;
  }

  // ipv4_availability - computed: false, optional: true, required: false
  private _ipv4Availability?: string; 
  public get ipv4Availability() {
    return this.getStringAttribute('ipv4_availability');
  }
  public set ipv4Availability(value: string) {
    this._ipv4Availability = value;
  }
  public resetIpv4Availability() {
    this._ipv4Availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AvailabilityInput() {
    return this._ipv4Availability;
  }

  // ipv6_availability - computed: false, optional: true, required: false
  private _ipv6Availability?: string; 
  public get ipv6Availability() {
    return this.getStringAttribute('ipv6_availability');
  }
  public set ipv6Availability(value: string) {
    this._ipv6Availability = value;
  }
  public resetIpv6Availability() {
    this._ipv6Availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AvailabilityInput() {
    return this._ipv6Availability;
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

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // operational_classes - computed: false, optional: true, required: false
  private _operationalClasses?: number[]; 
  public get operationalClasses() {
    return this.getNumberListAttribute('operational_classes');
  }
  public set operationalClasses(value: number[]) {
    this._operationalClasses = value;
  }
  public resetOperationalClasses() {
    this._operationalClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalClassesInput() {
    return this._operationalClasses;
  }

  // operator_names - computed: false, optional: true, required: false
  private _operatorNames?: string[]; 
  public get operatorNames() {
    return this.getListAttribute('operator_names');
  }
  public set operatorNames(value: string[]) {
    this._operatorNames = value;
  }
  public resetOperatorNames() {
    this._operatorNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorNamesInput() {
    return this._operatorNames;
  }

  // realms - computed: false, optional: true, required: false
  private _realms?: string[]; 
  public get realms() {
    return this.getListAttribute('realms');
  }
  public set realms(value: string[]) {
    this._realms = value;
  }
  public resetRealms() {
    this._realms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmsInput() {
    return this._realms;
  }

  // realms_raw - computed: false, optional: true, required: false
  private _realmsRaw?: string[]; 
  public get realmsRaw() {
    return this.getListAttribute('realms_raw');
  }
  public set realmsRaw(value: string[]) {
    this._realmsRaw = value;
  }
  public resetRealmsRaw() {
    this._realmsRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmsRawInput() {
    return this._realmsRaw;
  }

  // roaming_ois - computed: false, optional: true, required: false
  private _roamingOis?: string[]; 
  public get roamingOis() {
    return this.getListAttribute('roaming_ois');
  }
  public set roamingOis(value: string[]) {
    this._roamingOis = value;
  }
  public resetRoamingOis() {
    this._roamingOis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roamingOisInput() {
    return this._roamingOis;
  }

  // uesa - computed: false, optional: true, required: false
  private _uesa?: boolean | cdktf.IResolvable; 
  public get uesa() {
    return this.getBooleanAttribute('uesa');
  }
  public set uesa(value: boolean | cdktf.IResolvable) {
    this._uesa = value;
  }
  public resetUesa() {
    this._uesa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uesaInput() {
    return this._uesa;
  }

  // venue - computed: false, optional: true, required: false
  private _venue?: string; 
  public get venue() {
    return this.getStringAttribute('venue');
  }
  public set venue(value: string) {
    this._venue = value;
  }
  public resetVenue() {
    this._venue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get venueInput() {
    return this._venue;
  }

  // venue_names - computed: false, optional: true, required: false
  private _venueNames?: string[]; 
  public get venueNames() {
    return this.getListAttribute('venue_names');
  }
  public set venueNames(value: string[]) {
    this._venueNames = value;
  }
  public resetVenueNames() {
    this._venueNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get venueNamesInput() {
    return this._venueNames;
  }

  // wan_at_capacity - computed: false, optional: true, required: false
  private _wanAtCapacity?: boolean | cdktf.IResolvable; 
  public get wanAtCapacity() {
    return this.getBooleanAttribute('wan_at_capacity');
  }
  public set wanAtCapacity(value: boolean | cdktf.IResolvable) {
    this._wanAtCapacity = value;
  }
  public resetWanAtCapacity() {
    this._wanAtCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanAtCapacityInput() {
    return this._wanAtCapacity;
  }

  // wan_downlink - computed: false, optional: true, required: false
  private _wanDownlink?: number; 
  public get wanDownlink() {
    return this.getNumberAttribute('wan_downlink');
  }
  public set wanDownlink(value: number) {
    this._wanDownlink = value;
  }
  public resetWanDownlink() {
    this._wanDownlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanDownlinkInput() {
    return this._wanDownlink;
  }

  // wan_downlink_load - computed: false, optional: true, required: false
  private _wanDownlinkLoad?: number; 
  public get wanDownlinkLoad() {
    return this.getNumberAttribute('wan_downlink_load');
  }
  public set wanDownlinkLoad(value: number) {
    this._wanDownlinkLoad = value;
  }
  public resetWanDownlinkLoad() {
    this._wanDownlinkLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanDownlinkLoadInput() {
    return this._wanDownlinkLoad;
  }

  // wan_measurement_duration - computed: false, optional: true, required: false
  private _wanMeasurementDuration?: number; 
  public get wanMeasurementDuration() {
    return this.getNumberAttribute('wan_measurement_duration');
  }
  public set wanMeasurementDuration(value: number) {
    this._wanMeasurementDuration = value;
  }
  public resetWanMeasurementDuration() {
    this._wanMeasurementDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanMeasurementDurationInput() {
    return this._wanMeasurementDuration;
  }

  // wan_status - computed: false, optional: true, required: false
  private _wanStatus?: string; 
  public get wanStatus() {
    return this.getStringAttribute('wan_status');
  }
  public set wanStatus(value: string) {
    this._wanStatus = value;
  }
  public resetWanStatus() {
    this._wanStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanStatusInput() {
    return this._wanStatus;
  }

  // wan_symmetric - computed: false, optional: true, required: false
  private _wanSymmetric?: boolean | cdktf.IResolvable; 
  public get wanSymmetric() {
    return this.getBooleanAttribute('wan_symmetric');
  }
  public set wanSymmetric(value: boolean | cdktf.IResolvable) {
    this._wanSymmetric = value;
  }
  public resetWanSymmetric() {
    this._wanSymmetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanSymmetricInput() {
    return this._wanSymmetric;
  }

  // wan_uplink - computed: false, optional: true, required: false
  private _wanUplink?: number; 
  public get wanUplink() {
    return this.getNumberAttribute('wan_uplink');
  }
  public set wanUplink(value: number) {
    this._wanUplink = value;
  }
  public resetWanUplink() {
    this._wanUplink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanUplinkInput() {
    return this._wanUplink;
  }

  // wan_uplink_load - computed: false, optional: true, required: false
  private _wanUplinkLoad?: number; 
  public get wanUplinkLoad() {
    return this.getNumberAttribute('wan_uplink_load');
  }
  public set wanUplinkLoad(value: number) {
    this._wanUplinkLoad = value;
  }
  public resetWanUplinkLoad() {
    this._wanUplinkLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanUplinkLoadInput() {
    return this._wanUplinkLoad;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      3gpp_info: cdktf.listMapper(cdktf.stringToTerraform, false)(this._3GppInfo),
      3gpp_raw: cdktf.stringToTerraform(this._3GppRaw),
      ___path___: cdktf.stringToTerraform(this._path),
      asra: cdktf.booleanToTerraform(this._asra),
      authentication_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authenticationTypes),
      comment: cdktf.stringToTerraform(this._comment),
      connection_capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectionCapabilities),
      disabled: cdktf.booleanToTerraform(this._disabled),
      domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNames),
      esr: cdktf.booleanToTerraform(this._esr),
      hessid: cdktf.stringToTerraform(this._hessid),
      hotspot20: cdktf.booleanToTerraform(this._hotspot20),
      hotspot20_dgaf: cdktf.booleanToTerraform(this._hotspot20Dgaf),
      id: cdktf.stringToTerraform(this._id),
      internet: cdktf.booleanToTerraform(this._internet),
      ipv4_availability: cdktf.stringToTerraform(this._ipv4Availability),
      ipv6_availability: cdktf.stringToTerraform(this._ipv6Availability),
      name: cdktf.stringToTerraform(this._name),
      network_type: cdktf.stringToTerraform(this._networkType),
      operational_classes: cdktf.listMapper(cdktf.numberToTerraform, false)(this._operationalClasses),
      operator_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._operatorNames),
      realms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._realms),
      realms_raw: cdktf.listMapper(cdktf.stringToTerraform, false)(this._realmsRaw),
      roaming_ois: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roamingOis),
      uesa: cdktf.booleanToTerraform(this._uesa),
      venue: cdktf.stringToTerraform(this._venue),
      venue_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._venueNames),
      wan_at_capacity: cdktf.booleanToTerraform(this._wanAtCapacity),
      wan_downlink: cdktf.numberToTerraform(this._wanDownlink),
      wan_downlink_load: cdktf.numberToTerraform(this._wanDownlinkLoad),
      wan_measurement_duration: cdktf.numberToTerraform(this._wanMeasurementDuration),
      wan_status: cdktf.stringToTerraform(this._wanStatus),
      wan_symmetric: cdktf.booleanToTerraform(this._wanSymmetric),
      wan_uplink: cdktf.numberToTerraform(this._wanUplink),
      wan_uplink_load: cdktf.numberToTerraform(this._wanUplinkLoad),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      3gpp_info: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._3GppInfo),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      3gpp_raw: {
        value: cdktf.stringToHclTerraform(this._3GppRaw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asra: {
        value: cdktf.booleanToHclTerraform(this._asra),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authenticationTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_capabilities: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectionCapabilities),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      esr: {
        value: cdktf.booleanToHclTerraform(this._esr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hessid: {
        value: cdktf.stringToHclTerraform(this._hessid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hotspot20: {
        value: cdktf.booleanToHclTerraform(this._hotspot20),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hotspot20_dgaf: {
        value: cdktf.booleanToHclTerraform(this._hotspot20Dgaf),
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
      internet: {
        value: cdktf.booleanToHclTerraform(this._internet),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_availability: {
        value: cdktf.stringToHclTerraform(this._ipv4Availability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_availability: {
        value: cdktf.stringToHclTerraform(this._ipv6Availability),
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
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operational_classes: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._operationalClasses),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      operator_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._operatorNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      realms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._realms),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      realms_raw: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._realmsRaw),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      roaming_ois: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roamingOis),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      uesa: {
        value: cdktf.booleanToHclTerraform(this._uesa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      venue: {
        value: cdktf.stringToHclTerraform(this._venue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      venue_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._venueNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      wan_at_capacity: {
        value: cdktf.booleanToHclTerraform(this._wanAtCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wan_downlink: {
        value: cdktf.numberToHclTerraform(this._wanDownlink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wan_downlink_load: {
        value: cdktf.numberToHclTerraform(this._wanDownlinkLoad),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wan_measurement_duration: {
        value: cdktf.numberToHclTerraform(this._wanMeasurementDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wan_status: {
        value: cdktf.stringToHclTerraform(this._wanStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_symmetric: {
        value: cdktf.booleanToHclTerraform(this._wanSymmetric),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wan_uplink: {
        value: cdktf.numberToHclTerraform(this._wanUplink),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wan_uplink_load: {
        value: cdktf.numberToHclTerraform(this._wanUplinkLoad),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
