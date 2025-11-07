// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmProfileFtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies, when selected (enabled), that the system allows FTP Active Transfer mode. The default value is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#allow_active_mode LtmProfileFtp#allow_active_mode}
  */
  readonly allowActiveMode?: string;
  /**
  * Allows explicit FTPS negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#allow_ftps LtmProfileFtp#allow_ftps}
  */
  readonly allowFtps?: string;
  /**
  * The application service to which the object belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#app_service LtmProfileFtp#app_service}
  */
  readonly appService?: string;
  /**
  * Use the parent ftp profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#defaults_from LtmProfileFtp#defaults_from}
  */
  readonly defaultsFrom?: string;
  /**
  * User defined description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#description LtmProfileFtp#description}
  */
  readonly description?: string;
  /**
  * Specifies, when selected (enabled), that the system enforces the data connection to reuse a TLS session. The default value is unchecked (disabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#enforce_tlssession_reuse LtmProfileFtp#enforce_tlssession_reuse}
  */
  readonly enforceTlssessionReuse?: string;
  /**
  * Allows explicit FTPS negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#ftps_mode LtmProfileFtp#ftps_mode}
  */
  readonly ftpsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#id LtmProfileFtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enables the FTP data channel to inherit the TCP profile used by the control channel.If disabled,the data channel uses FastL4 only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#inherit_parent_profile LtmProfileFtp#inherit_parent_profile}
  */
  readonly inheritParentProfile?: string;
  /**
  * inherent vlan list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#inherit_vlan_list LtmProfileFtp#inherit_vlan_list}
  */
  readonly inheritVlanList?: string;
  /**
  * Configures the ALG log profile that controls logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#log_profile LtmProfileFtp#log_profile}
  */
  readonly logProfile?: string;
  /**
  * Configures the log publisher that handles events logging for this profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#log_publisher LtmProfileFtp#log_publisher}
  */
  readonly logPublisher?: string;
  /**
  * Name of the FTP Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#name LtmProfileFtp#name}
  */
  readonly name: string;
  /**
  * name of partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#partition LtmProfileFtp#partition}
  */
  readonly partition?: string;
  /**
  * Specifies a service for the data channel port used for this FTP profile. The default port is ftp-data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#port LtmProfileFtp#port}
  */
  readonly port?: number;
  /**
  * Enables secure FTP traffic for the BIG-IP Application Security Manager. You can set the security option only if the system is licensed for the BIG-IP Application Security Manager. The default value is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#security LtmProfileFtp#security}
  */
  readonly security?: string;
  /**
  * This setting is enabled by default, and thus, automatically translates RFC 2428 extended requests EPSV and EPRT to PASV and PORT when communicating with IPv4 servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#translate_extended LtmProfileFtp#translate_extended}
  */
  readonly translateExtended?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp bigip_ltm_profile_ftp}
*/
export class LtmProfileFtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_profile_ftp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmProfileFtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmProfileFtp to import
  * @param importFromId The id of the existing LtmProfileFtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmProfileFtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_profile_ftp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_ftp bigip_ltm_profile_ftp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmProfileFtpConfig
  */
  public constructor(scope: Construct, id: string, config: LtmProfileFtpConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_profile_ftp',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowActiveMode = config.allowActiveMode;
    this._allowFtps = config.allowFtps;
    this._appService = config.appService;
    this._defaultsFrom = config.defaultsFrom;
    this._description = config.description;
    this._enforceTlssessionReuse = config.enforceTlssessionReuse;
    this._ftpsMode = config.ftpsMode;
    this._id = config.id;
    this._inheritParentProfile = config.inheritParentProfile;
    this._inheritVlanList = config.inheritVlanList;
    this._logProfile = config.logProfile;
    this._logPublisher = config.logPublisher;
    this._name = config.name;
    this._partition = config.partition;
    this._port = config.port;
    this._security = config.security;
    this._translateExtended = config.translateExtended;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_active_mode - computed: false, optional: true, required: false
  private _allowActiveMode?: string; 
  public get allowActiveMode() {
    return this.getStringAttribute('allow_active_mode');
  }
  public set allowActiveMode(value: string) {
    this._allowActiveMode = value;
  }
  public resetAllowActiveMode() {
    this._allowActiveMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowActiveModeInput() {
    return this._allowActiveMode;
  }

  // allow_ftps - computed: false, optional: true, required: false
  private _allowFtps?: string; 
  public get allowFtps() {
    return this.getStringAttribute('allow_ftps');
  }
  public set allowFtps(value: string) {
    this._allowFtps = value;
  }
  public resetAllowFtps() {
    this._allowFtps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFtpsInput() {
    return this._allowFtps;
  }

  // app_service - computed: false, optional: true, required: false
  private _appService?: string; 
  public get appService() {
    return this.getStringAttribute('app_service');
  }
  public set appService(value: string) {
    this._appService = value;
  }
  public resetAppService() {
    this._appService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceInput() {
    return this._appService;
  }

  // defaults_from - computed: true, optional: true, required: false
  private _defaultsFrom?: string; 
  public get defaultsFrom() {
    return this.getStringAttribute('defaults_from');
  }
  public set defaultsFrom(value: string) {
    this._defaultsFrom = value;
  }
  public resetDefaultsFrom() {
    this._defaultsFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsFromInput() {
    return this._defaultsFrom;
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

  // enforce_tlssession_reuse - computed: false, optional: true, required: false
  private _enforceTlssessionReuse?: string; 
  public get enforceTlssessionReuse() {
    return this.getStringAttribute('enforce_tlssession_reuse');
  }
  public set enforceTlssessionReuse(value: string) {
    this._enforceTlssessionReuse = value;
  }
  public resetEnforceTlssessionReuse() {
    this._enforceTlssessionReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTlssessionReuseInput() {
    return this._enforceTlssessionReuse;
  }

  // ftps_mode - computed: false, optional: true, required: false
  private _ftpsMode?: string; 
  public get ftpsMode() {
    return this.getStringAttribute('ftps_mode');
  }
  public set ftpsMode(value: string) {
    this._ftpsMode = value;
  }
  public resetFtpsMode() {
    this._ftpsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpsModeInput() {
    return this._ftpsMode;
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

  // inherit_parent_profile - computed: false, optional: true, required: false
  private _inheritParentProfile?: string; 
  public get inheritParentProfile() {
    return this.getStringAttribute('inherit_parent_profile');
  }
  public set inheritParentProfile(value: string) {
    this._inheritParentProfile = value;
  }
  public resetInheritParentProfile() {
    this._inheritParentProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritParentProfileInput() {
    return this._inheritParentProfile;
  }

  // inherit_vlan_list - computed: false, optional: true, required: false
  private _inheritVlanList?: string; 
  public get inheritVlanList() {
    return this.getStringAttribute('inherit_vlan_list');
  }
  public set inheritVlanList(value: string) {
    this._inheritVlanList = value;
  }
  public resetInheritVlanList() {
    this._inheritVlanList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritVlanListInput() {
    return this._inheritVlanList;
  }

  // log_profile - computed: true, optional: true, required: false
  private _logProfile?: string; 
  public get logProfile() {
    return this.getStringAttribute('log_profile');
  }
  public set logProfile(value: string) {
    this._logProfile = value;
  }
  public resetLogProfile() {
    this._logProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logProfileInput() {
    return this._logProfile;
  }

  // log_publisher - computed: true, optional: true, required: false
  private _logPublisher?: string; 
  public get logPublisher() {
    return this.getStringAttribute('log_publisher');
  }
  public set logPublisher(value: string) {
    this._logPublisher = value;
  }
  public resetLogPublisher() {
    this._logPublisher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPublisherInput() {
    return this._logPublisher;
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

  // partition - computed: true, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // security - computed: true, optional: true, required: false
  private _security?: string; 
  public get security() {
    return this.getStringAttribute('security');
  }
  public set security(value: string) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security;
  }

  // translate_extended - computed: false, optional: true, required: false
  private _translateExtended?: string; 
  public get translateExtended() {
    return this.getStringAttribute('translate_extended');
  }
  public set translateExtended(value: string) {
    this._translateExtended = value;
  }
  public resetTranslateExtended() {
    this._translateExtended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateExtendedInput() {
    return this._translateExtended;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_active_mode: cdktf.stringToTerraform(this._allowActiveMode),
      allow_ftps: cdktf.stringToTerraform(this._allowFtps),
      app_service: cdktf.stringToTerraform(this._appService),
      defaults_from: cdktf.stringToTerraform(this._defaultsFrom),
      description: cdktf.stringToTerraform(this._description),
      enforce_tlssession_reuse: cdktf.stringToTerraform(this._enforceTlssessionReuse),
      ftps_mode: cdktf.stringToTerraform(this._ftpsMode),
      id: cdktf.stringToTerraform(this._id),
      inherit_parent_profile: cdktf.stringToTerraform(this._inheritParentProfile),
      inherit_vlan_list: cdktf.stringToTerraform(this._inheritVlanList),
      log_profile: cdktf.stringToTerraform(this._logProfile),
      log_publisher: cdktf.stringToTerraform(this._logPublisher),
      name: cdktf.stringToTerraform(this._name),
      partition: cdktf.stringToTerraform(this._partition),
      port: cdktf.numberToTerraform(this._port),
      security: cdktf.stringToTerraform(this._security),
      translate_extended: cdktf.stringToTerraform(this._translateExtended),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_active_mode: {
        value: cdktf.stringToHclTerraform(this._allowActiveMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_ftps: {
        value: cdktf.stringToHclTerraform(this._allowFtps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_service: {
        value: cdktf.stringToHclTerraform(this._appService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaults_from: {
        value: cdktf.stringToHclTerraform(this._defaultsFrom),
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
      enforce_tlssession_reuse: {
        value: cdktf.stringToHclTerraform(this._enforceTlssessionReuse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftps_mode: {
        value: cdktf.stringToHclTerraform(this._ftpsMode),
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
      inherit_parent_profile: {
        value: cdktf.stringToHclTerraform(this._inheritParentProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inherit_vlan_list: {
        value: cdktf.stringToHclTerraform(this._inheritVlanList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_profile: {
        value: cdktf.stringToHclTerraform(this._logProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_publisher: {
        value: cdktf.stringToHclTerraform(this._logPublisher),
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
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security: {
        value: cdktf.stringToHclTerraform(this._security),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translate_extended: {
        value: cdktf.stringToHclTerraform(this._translateExtended),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
