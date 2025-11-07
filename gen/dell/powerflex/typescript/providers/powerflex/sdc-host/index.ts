// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdcHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of MDM IPs (primary,secondary or list of virtual IPs) seperated by cluster, to be assigned to the SDC.Each string in the list is a set of Mdm Ips related to a specific cluster. These Ips should be seperated by comma I.E. ['x.x.x.x,y.y.y.y', 'z.z.z.z,a.a.a.a']. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#clusters_mdm_ips SdcHost#clusters_mdm_ips}
  */
  readonly clustersMdmIps?: string[];
  /**
  * Details of the SDC host if the `os_family` is `esxi`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#esxi SdcHost#esxi}
  */
  readonly esxi?: SdcHostEsxi;
  /**
  * IP address of the server to be configured as SDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#ip SdcHost#ip}
  */
  readonly ip: string;
  /**
  * Path to the drv_cfg for linux, defaults to /opt/emc/scaleio/sdc/bin/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#linux_drv_cfg SdcHost#linux_drv_cfg}
  */
  readonly linuxDrvCfg?: string;
  /**
  * Name of SDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#name SdcHost#name}
  */
  readonly name?: string;
  /**
  * Operating System family of the SDC. Accepted values are 'linux', 'windows' and 'esxi'. Cannot be changed once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#os_family SdcHost#os_family}
  */
  readonly osFamily: string;
  /**
  * Full path (on local machine) of the package to be installed on the SDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#package_path SdcHost#package_path}
  */
  readonly packagePath: string;
  /**
  * Performance profile of the SDC. Accepted values are 'HighPerformance' and 'Compact'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#performance_profile SdcHost#performance_profile}
  */
  readonly performanceProfile?: string;
  /**
  * Remote login details of the SDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#remote SdcHost#remote}
  */
  readonly remote: SdcHostRemote;
  /**
  * Use path on remote server where SDC is installed. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#use_remote_path SdcHost#use_remote_path}
  */
  readonly useRemotePath?: boolean | cdktf.IResolvable;
  /**
  * Path to the drv_cfg.exe config for windows, defaults to C:\Program Files\EMC\scaleio\sdc\bin\
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#windows_drv_cfg SdcHost#windows_drv_cfg}
  */
  readonly windowsDrvCfg?: string;
}
export interface SdcHostEsxi {
  /**
  * GUID of the SDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#guid SdcHost#guid}
  */
  readonly guid: string;
  /**
  * Whether to verify the VIB signature or not. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#verify_vib_signature SdcHost#verify_vib_signature}
  */
  readonly verifyVibSignature?: boolean | cdktf.IResolvable;
}

export function sdcHostEsxiToTerraform(struct?: SdcHostEsxi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    guid: cdktf.stringToTerraform(struct!.guid),
    verify_vib_signature: cdktf.booleanToTerraform(struct!.verifyVibSignature),
  }
}


export function sdcHostEsxiToHclTerraform(struct?: SdcHostEsxi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    guid: {
      value: cdktf.stringToHclTerraform(struct!.guid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_vib_signature: {
      value: cdktf.booleanToHclTerraform(struct!.verifyVibSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdcHostEsxiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SdcHostEsxi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._guid !== undefined) {
      hasAnyValues = true;
      internalValueResult.guid = this._guid;
    }
    if (this._verifyVibSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyVibSignature = this._verifyVibSignature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdcHostEsxi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._guid = undefined;
      this._verifyVibSignature = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._guid = value.guid;
      this._verifyVibSignature = value.verifyVibSignature;
    }
  }

  // guid - computed: false, optional: false, required: true
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
  }

  // verify_vib_signature - computed: true, optional: true, required: false
  private _verifyVibSignature?: boolean | cdktf.IResolvable; 
  public get verifyVibSignature() {
    return this.getBooleanAttribute('verify_vib_signature');
  }
  public set verifyVibSignature(value: boolean | cdktf.IResolvable) {
    this._verifyVibSignature = value;
  }
  public resetVerifyVibSignature() {
    this._verifyVibSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyVibSignatureInput() {
    return this._verifyVibSignature;
  }
}
export interface SdcHostRemote {
  /**
  * Remote Login certificate issued by a CA to the remote login user. Must be used with `private_key` and the private key must match the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#certificate SdcHost#certificate}
  */
  readonly certificate?: string;
  /**
  * Directory on the SDC server to upload packages to for Unix. Defaults to `/tmp` on Unix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#dir SdcHost#dir}
  */
  readonly dir?: string;
  /**
  * Remote Login host key of the SDC server. Corresponds to the UserKnownHostsFile field of OpenSSH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#host_key SdcHost#host_key}
  */
  readonly hostKey?: string;
  /**
  * Remote Login password of the SDC server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#password SdcHost#password}
  */
  readonly password?: string;
  /**
  * Remote Login port of the SDC server. Defaults to `22`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#port SdcHost#port}
  */
  readonly port?: string;
  /**
  * Remote Login private key of the SDC server. Corresponds to the IdentityFile field of OpenSSH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#private_key SdcHost#private_key}
  */
  readonly privateKey?: string;
  /**
  * Remote Login username of the SDC server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#user SdcHost#user}
  */
  readonly user: string;
}

export function sdcHostRemoteToTerraform(struct?: SdcHostRemote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    dir: cdktf.stringToTerraform(struct!.dir),
    host_key: cdktf.stringToTerraform(struct!.hostKey),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.stringToTerraform(struct!.port),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function sdcHostRemoteToHclTerraform(struct?: SdcHostRemote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_key: {
      value: cdktf.stringToHclTerraform(struct!.hostKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdcHostRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SdcHostRemote | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._hostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKey = this._hostKey;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdcHostRemote | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._dir = undefined;
      this._hostKey = undefined;
      this._password = undefined;
      this._port = undefined;
      this._privateKey = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._dir = value.dir;
      this._hostKey = value.hostKey;
      this._password = value.password;
      this._port = value.port;
      this._privateKey = value.privateKey;
      this._user = value.user;
    }
  }

  // certificate - computed: false, optional: true, required: false
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

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string; 
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }
  public set hostKey(value: string) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host powerflex_sdc_host}
*/
export class SdcHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_sdc_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdcHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdcHost to import
  * @param importFromId The id of the existing SdcHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdcHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_sdc_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/resources/sdc_host powerflex_sdc_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdcHostConfig
  */
  public constructor(scope: Construct, id: string, config: SdcHostConfig) {
    super(scope, id, {
      terraformResourceType: 'powerflex_sdc_host',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clustersMdmIps = config.clustersMdmIps;
    this._esxi.internalValue = config.esxi;
    this._ip = config.ip;
    this._linuxDrvCfg = config.linuxDrvCfg;
    this._name = config.name;
    this._osFamily = config.osFamily;
    this._packagePath = config.packagePath;
    this._performanceProfile = config.performanceProfile;
    this._remote.internalValue = config.remote;
    this._useRemotePath = config.useRemotePath;
    this._windowsDrvCfg = config.windowsDrvCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clusters_mdm_ips - computed: true, optional: true, required: false
  private _clustersMdmIps?: string[]; 
  public get clustersMdmIps() {
    return this.getListAttribute('clusters_mdm_ips');
  }
  public set clustersMdmIps(value: string[]) {
    this._clustersMdmIps = value;
  }
  public resetClustersMdmIps() {
    this._clustersMdmIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersMdmIpsInput() {
    return this._clustersMdmIps;
  }

  // esxi - computed: false, optional: true, required: false
  private _esxi = new SdcHostEsxiOutputReference(this, "esxi");
  public get esxi() {
    return this._esxi;
  }
  public putEsxi(value: SdcHostEsxi) {
    this._esxi.internalValue = value;
  }
  public resetEsxi() {
    this._esxi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esxiInput() {
    return this._esxi.internalValue;
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // is_approved - computed: true, optional: false, required: false
  public get isApproved() {
    return this.getBooleanAttribute('is_approved');
  }

  // linux_drv_cfg - computed: true, optional: true, required: false
  private _linuxDrvCfg?: string; 
  public get linuxDrvCfg() {
    return this.getStringAttribute('linux_drv_cfg');
  }
  public set linuxDrvCfg(value: string) {
    this._linuxDrvCfg = value;
  }
  public resetLinuxDrvCfg() {
    this._linuxDrvCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxDrvCfgInput() {
    return this._linuxDrvCfg;
  }

  // mdm_connection_state - computed: true, optional: false, required: false
  public get mdmConnectionState() {
    return this.getStringAttribute('mdm_connection_state');
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

  // on_vmware - computed: true, optional: false, required: false
  public get onVmware() {
    return this.getBooleanAttribute('on_vmware');
  }

  // os_family - computed: false, optional: false, required: true
  private _osFamily?: string; 
  public get osFamily() {
    return this.getStringAttribute('os_family');
  }
  public set osFamily(value: string) {
    this._osFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osFamilyInput() {
    return this._osFamily;
  }

  // package_path - computed: false, optional: false, required: true
  private _packagePath?: string; 
  public get packagePath() {
    return this.getStringAttribute('package_path');
  }
  public set packagePath(value: string) {
    this._packagePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packagePathInput() {
    return this._packagePath;
  }

  // performance_profile - computed: true, optional: true, required: false
  private _performanceProfile?: string; 
  public get performanceProfile() {
    return this.getStringAttribute('performance_profile');
  }
  public set performanceProfile(value: string) {
    this._performanceProfile = value;
  }
  public resetPerformanceProfile() {
    this._performanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceProfileInput() {
    return this._performanceProfile;
  }

  // remote - computed: false, optional: false, required: true
  private _remote = new SdcHostRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: SdcHostRemote) {
    this._remote.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }

  // use_remote_path - computed: true, optional: true, required: false
  private _useRemotePath?: boolean | cdktf.IResolvable; 
  public get useRemotePath() {
    return this.getBooleanAttribute('use_remote_path');
  }
  public set useRemotePath(value: boolean | cdktf.IResolvable) {
    this._useRemotePath = value;
  }
  public resetUseRemotePath() {
    this._useRemotePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRemotePathInput() {
    return this._useRemotePath;
  }

  // windows_drv_cfg - computed: true, optional: true, required: false
  private _windowsDrvCfg?: string; 
  public get windowsDrvCfg() {
    return this.getStringAttribute('windows_drv_cfg');
  }
  public set windowsDrvCfg(value: string) {
    this._windowsDrvCfg = value;
  }
  public resetWindowsDrvCfg() {
    this._windowsDrvCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsDrvCfgInput() {
    return this._windowsDrvCfg;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clusters_mdm_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clustersMdmIps),
      esxi: sdcHostEsxiToTerraform(this._esxi.internalValue),
      ip: cdktf.stringToTerraform(this._ip),
      linux_drv_cfg: cdktf.stringToTerraform(this._linuxDrvCfg),
      name: cdktf.stringToTerraform(this._name),
      os_family: cdktf.stringToTerraform(this._osFamily),
      package_path: cdktf.stringToTerraform(this._packagePath),
      performance_profile: cdktf.stringToTerraform(this._performanceProfile),
      remote: sdcHostRemoteToTerraform(this._remote.internalValue),
      use_remote_path: cdktf.booleanToTerraform(this._useRemotePath),
      windows_drv_cfg: cdktf.stringToTerraform(this._windowsDrvCfg),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clusters_mdm_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clustersMdmIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      esxi: {
        value: sdcHostEsxiToHclTerraform(this._esxi.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SdcHostEsxi",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linux_drv_cfg: {
        value: cdktf.stringToHclTerraform(this._linuxDrvCfg),
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
      os_family: {
        value: cdktf.stringToHclTerraform(this._osFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_path: {
        value: cdktf.stringToHclTerraform(this._packagePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance_profile: {
        value: cdktf.stringToHclTerraform(this._performanceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote: {
        value: sdcHostRemoteToHclTerraform(this._remote.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SdcHostRemote",
      },
      use_remote_path: {
        value: cdktf.booleanToHclTerraform(this._useRemotePath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      windows_drv_cfg: {
        value: cdktf.stringToHclTerraform(this._windowsDrvCfg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
