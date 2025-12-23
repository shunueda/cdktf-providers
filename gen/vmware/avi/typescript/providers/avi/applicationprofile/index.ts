// generated from terraform resource schema

import { ApplicationprofileConfigpbAttributes, 
applicationprofileConfigpbAttributesToTerraform, 
applicationprofileConfigpbAttributesToHclTerraform, 
ApplicationprofileConfigpbAttributesList, 
ApplicationprofileDiameterServiceProfile, 
applicationprofileDiameterServiceProfileToTerraform, 
applicationprofileDiameterServiceProfileToHclTerraform, 
ApplicationprofileDiameterServiceProfileList, 
ApplicationprofileDnsServiceProfile, 
applicationprofileDnsServiceProfileToTerraform, 
applicationprofileDnsServiceProfileToHclTerraform, 
ApplicationprofileDnsServiceProfileList, 
ApplicationprofileDosRlProfile, 
applicationprofileDosRlProfileToTerraform, 
applicationprofileDosRlProfileToHclTerraform, 
ApplicationprofileDosRlProfileList, 
ApplicationprofileHttpProfile, 
applicationprofileHttpProfileToTerraform, 
applicationprofileHttpProfileToHclTerraform, 
ApplicationprofileHttpProfileList, 
ApplicationprofileL4SslProfile, 
applicationprofileL4SslProfileToTerraform, 
applicationprofileL4SslProfileToHclTerraform, 
ApplicationprofileL4SslProfileList, 
ApplicationprofileMarkers, 
applicationprofileMarkersToTerraform, 
applicationprofileMarkersToHclTerraform, 
ApplicationprofileMarkersList, 
ApplicationprofileSipServiceProfile, 
applicationprofileSipServiceProfileToTerraform, 
applicationprofileSipServiceProfileToHclTerraform, 
ApplicationprofileSipServiceProfileList, 
ApplicationprofileTcpAppProfile, 
applicationprofileTcpAppProfileToTerraform, 
applicationprofileTcpAppProfileToHclTerraform, 
ApplicationprofileTcpAppProfileList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApplicationprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#app_service_type Applicationprofile#app_service_type}
  */
  readonly appServiceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#cloud_config_cksum Applicationprofile#cloud_config_cksum}
  */
  readonly cloudConfigCksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#created_by Applicationprofile#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#description Applicationprofile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#id Applicationprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#name Applicationprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#preserve_client_ip Applicationprofile#preserve_client_ip}
  */
  readonly preserveClientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#preserve_client_port Applicationprofile#preserve_client_port}
  */
  readonly preserveClientPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#preserve_dest_ip_port Applicationprofile#preserve_dest_ip_port}
  */
  readonly preserveDestIpPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#tenant_ref Applicationprofile#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#type Applicationprofile#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#uuid Applicationprofile#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#configpb_attributes Applicationprofile#configpb_attributes}
  */
  readonly configpbAttributes?: ApplicationprofileConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * diameter_service_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#diameter_service_profile Applicationprofile#diameter_service_profile}
  */
  readonly diameterServiceProfile?: ApplicationprofileDiameterServiceProfile[] | cdktf.IResolvable;
  /**
  * dns_service_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#dns_service_profile Applicationprofile#dns_service_profile}
  */
  readonly dnsServiceProfile?: ApplicationprofileDnsServiceProfile[] | cdktf.IResolvable;
  /**
  * dos_rl_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#dos_rl_profile Applicationprofile#dos_rl_profile}
  */
  readonly dosRlProfile?: ApplicationprofileDosRlProfile[] | cdktf.IResolvable;
  /**
  * http_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#http_profile Applicationprofile#http_profile}
  */
  readonly httpProfile?: ApplicationprofileHttpProfile[] | cdktf.IResolvable;
  /**
  * l4_ssl_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#l4_ssl_profile Applicationprofile#l4_ssl_profile}
  */
  readonly l4SslProfile?: ApplicationprofileL4SslProfile[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#markers Applicationprofile#markers}
  */
  readonly markers?: ApplicationprofileMarkers[] | cdktf.IResolvable;
  /**
  * sip_service_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#sip_service_profile Applicationprofile#sip_service_profile}
  */
  readonly sipServiceProfile?: ApplicationprofileSipServiceProfile[] | cdktf.IResolvable;
  /**
  * tcp_app_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#tcp_app_profile Applicationprofile#tcp_app_profile}
  */
  readonly tcpAppProfile?: ApplicationprofileTcpAppProfile[] | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile avi_applicationprofile}
*/
export class Applicationprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_applicationprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Applicationprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Applicationprofile to import
  * @param importFromId The id of the existing Applicationprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Applicationprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_applicationprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/applicationprofile avi_applicationprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationprofileConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_applicationprofile',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appServiceType = config.appServiceType;
    this._cloudConfigCksum = config.cloudConfigCksum;
    this._createdBy = config.createdBy;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._preserveClientIp = config.preserveClientIp;
    this._preserveClientPort = config.preserveClientPort;
    this._preserveDestIpPort = config.preserveDestIpPort;
    this._tenantRef = config.tenantRef;
    this._type = config.type;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._diameterServiceProfile.internalValue = config.diameterServiceProfile;
    this._dnsServiceProfile.internalValue = config.dnsServiceProfile;
    this._dosRlProfile.internalValue = config.dosRlProfile;
    this._httpProfile.internalValue = config.httpProfile;
    this._l4SslProfile.internalValue = config.l4SslProfile;
    this._markers.internalValue = config.markers;
    this._sipServiceProfile.internalValue = config.sipServiceProfile;
    this._tcpAppProfile.internalValue = config.tcpAppProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_service_type - computed: true, optional: true, required: false
  private _appServiceType?: string; 
  public get appServiceType() {
    return this.getStringAttribute('app_service_type');
  }
  public set appServiceType(value: string) {
    this._appServiceType = value;
  }
  public resetAppServiceType() {
    this._appServiceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceTypeInput() {
    return this._appServiceType;
  }

  // cloud_config_cksum - computed: true, optional: true, required: false
  private _cloudConfigCksum?: string; 
  public get cloudConfigCksum() {
    return this.getStringAttribute('cloud_config_cksum');
  }
  public set cloudConfigCksum(value: string) {
    this._cloudConfigCksum = value;
  }
  public resetCloudConfigCksum() {
    this._cloudConfigCksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigCksumInput() {
    return this._cloudConfigCksum;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // description - computed: true, optional: true, required: false
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

  // preserve_client_ip - computed: false, optional: true, required: false
  private _preserveClientIp?: string; 
  public get preserveClientIp() {
    return this.getStringAttribute('preserve_client_ip');
  }
  public set preserveClientIp(value: string) {
    this._preserveClientIp = value;
  }
  public resetPreserveClientIp() {
    this._preserveClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveClientIpInput() {
    return this._preserveClientIp;
  }

  // preserve_client_port - computed: true, optional: true, required: false
  private _preserveClientPort?: string; 
  public get preserveClientPort() {
    return this.getStringAttribute('preserve_client_port');
  }
  public set preserveClientPort(value: string) {
    this._preserveClientPort = value;
  }
  public resetPreserveClientPort() {
    this._preserveClientPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveClientPortInput() {
    return this._preserveClientPort;
  }

  // preserve_dest_ip_port - computed: false, optional: true, required: false
  private _preserveDestIpPort?: string; 
  public get preserveDestIpPort() {
    return this.getStringAttribute('preserve_dest_ip_port');
  }
  public set preserveDestIpPort(value: string) {
    this._preserveDestIpPort = value;
  }
  public resetPreserveDestIpPort() {
    this._preserveDestIpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveDestIpPortInput() {
    return this._preserveDestIpPort;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new ApplicationprofileConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: ApplicationprofileConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // diameter_service_profile - computed: false, optional: true, required: false
  private _diameterServiceProfile = new ApplicationprofileDiameterServiceProfileList(this, "diameter_service_profile", true);
  public get diameterServiceProfile() {
    return this._diameterServiceProfile;
  }
  public putDiameterServiceProfile(value: ApplicationprofileDiameterServiceProfile[] | cdktf.IResolvable) {
    this._diameterServiceProfile.internalValue = value;
  }
  public resetDiameterServiceProfile() {
    this._diameterServiceProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diameterServiceProfileInput() {
    return this._diameterServiceProfile.internalValue;
  }

  // dns_service_profile - computed: false, optional: true, required: false
  private _dnsServiceProfile = new ApplicationprofileDnsServiceProfileList(this, "dns_service_profile", true);
  public get dnsServiceProfile() {
    return this._dnsServiceProfile;
  }
  public putDnsServiceProfile(value: ApplicationprofileDnsServiceProfile[] | cdktf.IResolvable) {
    this._dnsServiceProfile.internalValue = value;
  }
  public resetDnsServiceProfile() {
    this._dnsServiceProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServiceProfileInput() {
    return this._dnsServiceProfile.internalValue;
  }

  // dos_rl_profile - computed: false, optional: true, required: false
  private _dosRlProfile = new ApplicationprofileDosRlProfileList(this, "dos_rl_profile", true);
  public get dosRlProfile() {
    return this._dosRlProfile;
  }
  public putDosRlProfile(value: ApplicationprofileDosRlProfile[] | cdktf.IResolvable) {
    this._dosRlProfile.internalValue = value;
  }
  public resetDosRlProfile() {
    this._dosRlProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosRlProfileInput() {
    return this._dosRlProfile.internalValue;
  }

  // http_profile - computed: false, optional: true, required: false
  private _httpProfile = new ApplicationprofileHttpProfileList(this, "http_profile", true);
  public get httpProfile() {
    return this._httpProfile;
  }
  public putHttpProfile(value: ApplicationprofileHttpProfile[] | cdktf.IResolvable) {
    this._httpProfile.internalValue = value;
  }
  public resetHttpProfile() {
    this._httpProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProfileInput() {
    return this._httpProfile.internalValue;
  }

  // l4_ssl_profile - computed: false, optional: true, required: false
  private _l4SslProfile = new ApplicationprofileL4SslProfileList(this, "l4_ssl_profile", true);
  public get l4SslProfile() {
    return this._l4SslProfile;
  }
  public putL4SslProfile(value: ApplicationprofileL4SslProfile[] | cdktf.IResolvable) {
    this._l4SslProfile.internalValue = value;
  }
  public resetL4SslProfile() {
    this._l4SslProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SslProfileInput() {
    return this._l4SslProfile.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new ApplicationprofileMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: ApplicationprofileMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // sip_service_profile - computed: false, optional: true, required: false
  private _sipServiceProfile = new ApplicationprofileSipServiceProfileList(this, "sip_service_profile", true);
  public get sipServiceProfile() {
    return this._sipServiceProfile;
  }
  public putSipServiceProfile(value: ApplicationprofileSipServiceProfile[] | cdktf.IResolvable) {
    this._sipServiceProfile.internalValue = value;
  }
  public resetSipServiceProfile() {
    this._sipServiceProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipServiceProfileInput() {
    return this._sipServiceProfile.internalValue;
  }

  // tcp_app_profile - computed: false, optional: true, required: false
  private _tcpAppProfile = new ApplicationprofileTcpAppProfileList(this, "tcp_app_profile", true);
  public get tcpAppProfile() {
    return this._tcpAppProfile;
  }
  public putTcpAppProfile(value: ApplicationprofileTcpAppProfile[] | cdktf.IResolvable) {
    this._tcpAppProfile.internalValue = value;
  }
  public resetTcpAppProfile() {
    this._tcpAppProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAppProfileInput() {
    return this._tcpAppProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_service_type: cdktf.stringToTerraform(this._appServiceType),
      cloud_config_cksum: cdktf.stringToTerraform(this._cloudConfigCksum),
      created_by: cdktf.stringToTerraform(this._createdBy),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      preserve_client_ip: cdktf.stringToTerraform(this._preserveClientIp),
      preserve_client_port: cdktf.stringToTerraform(this._preserveClientPort),
      preserve_dest_ip_port: cdktf.stringToTerraform(this._preserveDestIpPort),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(applicationprofileConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      diameter_service_profile: cdktf.listMapper(applicationprofileDiameterServiceProfileToTerraform, true)(this._diameterServiceProfile.internalValue),
      dns_service_profile: cdktf.listMapper(applicationprofileDnsServiceProfileToTerraform, true)(this._dnsServiceProfile.internalValue),
      dos_rl_profile: cdktf.listMapper(applicationprofileDosRlProfileToTerraform, true)(this._dosRlProfile.internalValue),
      http_profile: cdktf.listMapper(applicationprofileHttpProfileToTerraform, true)(this._httpProfile.internalValue),
      l4_ssl_profile: cdktf.listMapper(applicationprofileL4SslProfileToTerraform, true)(this._l4SslProfile.internalValue),
      markers: cdktf.listMapper(applicationprofileMarkersToTerraform, true)(this._markers.internalValue),
      sip_service_profile: cdktf.listMapper(applicationprofileSipServiceProfileToTerraform, true)(this._sipServiceProfile.internalValue),
      tcp_app_profile: cdktf.listMapper(applicationprofileTcpAppProfileToTerraform, true)(this._tcpAppProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_service_type: {
        value: cdktf.stringToHclTerraform(this._appServiceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_config_cksum: {
        value: cdktf.stringToHclTerraform(this._cloudConfigCksum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preserve_client_ip: {
        value: cdktf.stringToHclTerraform(this._preserveClientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preserve_client_port: {
        value: cdktf.stringToHclTerraform(this._preserveClientPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preserve_dest_ip_port: {
        value: cdktf.stringToHclTerraform(this._preserveDestIpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
      configpb_attributes: {
        value: cdktf.listMapperHcl(applicationprofileConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationprofileConfigpbAttributesList",
      },
      diameter_service_profile: {
        value: cdktf.listMapperHcl(applicationprofileDiameterServiceProfileToHclTerraform, true)(this._diameterServiceProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationprofileDiameterServiceProfileList",
      },
      dns_service_profile: {
        value: cdktf.listMapperHcl(applicationprofileDnsServiceProfileToHclTerraform, true)(this._dnsServiceProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationprofileDnsServiceProfileList",
      },
      dos_rl_profile: {
        value: cdktf.listMapperHcl(applicationprofileDosRlProfileToHclTerraform, true)(this._dosRlProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationprofileDosRlProfileList",
      },
      http_profile: {
        value: cdktf.listMapperHcl(applicationprofileHttpProfileToHclTerraform, true)(this._httpProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationprofileHttpProfileList",
      },
      l4_ssl_profile: {
        value: cdktf.listMapperHcl(applicationprofileL4SslProfileToHclTerraform, true)(this._l4SslProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationprofileL4SslProfileList",
      },
      markers: {
        value: cdktf.listMapperHcl(applicationprofileMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationprofileMarkersList",
      },
      sip_service_profile: {
        value: cdktf.listMapperHcl(applicationprofileSipServiceProfileToHclTerraform, true)(this._sipServiceProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationprofileSipServiceProfileList",
      },
      tcp_app_profile: {
        value: cdktf.listMapperHcl(applicationprofileTcpAppProfileToHclTerraform, true)(this._tcpAppProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationprofileTcpAppProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
