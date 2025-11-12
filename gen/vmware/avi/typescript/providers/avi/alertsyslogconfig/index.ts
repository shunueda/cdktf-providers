// https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertsyslogconfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#description Alertsyslogconfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#id Alertsyslogconfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#name Alertsyslogconfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#sender_hostname Alertsyslogconfig#sender_hostname}
  */
  readonly senderHostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#tenant_ref Alertsyslogconfig#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#uuid Alertsyslogconfig#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#configpb_attributes Alertsyslogconfig#configpb_attributes}
  */
  readonly configpbAttributes?: AlertsyslogconfigConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * syslog_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#syslog_servers Alertsyslogconfig#syslog_servers}
  */
  readonly syslogServers?: AlertsyslogconfigSyslogServers[] | cdktf.IResolvable;
}
export interface AlertsyslogconfigConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#version Alertsyslogconfig#version}
  */
  readonly version?: string;
}

export function alertsyslogconfigConfigpbAttributesToTerraform(struct?: AlertsyslogconfigConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function alertsyslogconfigConfigpbAttributesToHclTerraform(struct?: AlertsyslogconfigConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsyslogconfigConfigpbAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AlertsyslogconfigConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsyslogconfigConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class AlertsyslogconfigConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : AlertsyslogconfigConfigpbAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AlertsyslogconfigConfigpbAttributesOutputReference {
    return new AlertsyslogconfigConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertsyslogconfigSyslogServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#anon_auth Alertsyslogconfig#anon_auth}
  */
  readonly anonAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#format Alertsyslogconfig#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#pkiprofile_ref Alertsyslogconfig#pkiprofile_ref}
  */
  readonly pkiprofileRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#ssl_key_and_certificate_ref Alertsyslogconfig#ssl_key_and_certificate_ref}
  */
  readonly sslKeyAndCertificateRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#strict_cert_verify Alertsyslogconfig#strict_cert_verify}
  */
  readonly strictCertVerify?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#syslog_server Alertsyslogconfig#syslog_server}
  */
  readonly syslogServer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#syslog_server_port Alertsyslogconfig#syslog_server_port}
  */
  readonly syslogServerPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#tls_enable Alertsyslogconfig#tls_enable}
  */
  readonly tlsEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#udp Alertsyslogconfig#udp}
  */
  readonly udp: string;
}

export function alertsyslogconfigSyslogServersToTerraform(struct?: AlertsyslogconfigSyslogServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anon_auth: cdktf.stringToTerraform(struct!.anonAuth),
    format: cdktf.stringToTerraform(struct!.format),
    pkiprofile_ref: cdktf.stringToTerraform(struct!.pkiprofileRef),
    ssl_key_and_certificate_ref: cdktf.stringToTerraform(struct!.sslKeyAndCertificateRef),
    strict_cert_verify: cdktf.stringToTerraform(struct!.strictCertVerify),
    syslog_server: cdktf.stringToTerraform(struct!.syslogServer),
    syslog_server_port: cdktf.stringToTerraform(struct!.syslogServerPort),
    tls_enable: cdktf.stringToTerraform(struct!.tlsEnable),
    udp: cdktf.stringToTerraform(struct!.udp),
  }
}


export function alertsyslogconfigSyslogServersToHclTerraform(struct?: AlertsyslogconfigSyslogServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anon_auth: {
      value: cdktf.stringToHclTerraform(struct!.anonAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pkiprofile_ref: {
      value: cdktf.stringToHclTerraform(struct!.pkiprofileRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_key_and_certificate_ref: {
      value: cdktf.stringToHclTerraform(struct!.sslKeyAndCertificateRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strict_cert_verify: {
      value: cdktf.stringToHclTerraform(struct!.strictCertVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog_server: {
      value: cdktf.stringToHclTerraform(struct!.syslogServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog_server_port: {
      value: cdktf.stringToHclTerraform(struct!.syslogServerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_enable: {
      value: cdktf.stringToHclTerraform(struct!.tlsEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp: {
      value: cdktf.stringToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertsyslogconfigSyslogServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AlertsyslogconfigSyslogServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anonAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonAuth = this._anonAuth;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._pkiprofileRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkiprofileRef = this._pkiprofileRef;
    }
    if (this._sslKeyAndCertificateRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslKeyAndCertificateRef = this._sslKeyAndCertificateRef;
    }
    if (this._strictCertVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictCertVerify = this._strictCertVerify;
    }
    if (this._syslogServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogServer = this._syslogServer;
    }
    if (this._syslogServerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogServerPort = this._syslogServerPort;
    }
    if (this._tlsEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEnable = this._tlsEnable;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertsyslogconfigSyslogServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anonAuth = undefined;
      this._format = undefined;
      this._pkiprofileRef = undefined;
      this._sslKeyAndCertificateRef = undefined;
      this._strictCertVerify = undefined;
      this._syslogServer = undefined;
      this._syslogServerPort = undefined;
      this._tlsEnable = undefined;
      this._udp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anonAuth = value.anonAuth;
      this._format = value.format;
      this._pkiprofileRef = value.pkiprofileRef;
      this._sslKeyAndCertificateRef = value.sslKeyAndCertificateRef;
      this._strictCertVerify = value.strictCertVerify;
      this._syslogServer = value.syslogServer;
      this._syslogServerPort = value.syslogServerPort;
      this._tlsEnable = value.tlsEnable;
      this._udp = value.udp;
    }
  }

  // anon_auth - computed: false, optional: true, required: false
  private _anonAuth?: string; 
  public get anonAuth() {
    return this.getStringAttribute('anon_auth');
  }
  public set anonAuth(value: string) {
    this._anonAuth = value;
  }
  public resetAnonAuth() {
    this._anonAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonAuthInput() {
    return this._anonAuth;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // pkiprofile_ref - computed: true, optional: true, required: false
  private _pkiprofileRef?: string; 
  public get pkiprofileRef() {
    return this.getStringAttribute('pkiprofile_ref');
  }
  public set pkiprofileRef(value: string) {
    this._pkiprofileRef = value;
  }
  public resetPkiprofileRef() {
    this._pkiprofileRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkiprofileRefInput() {
    return this._pkiprofileRef;
  }

  // ssl_key_and_certificate_ref - computed: true, optional: true, required: false
  private _sslKeyAndCertificateRef?: string; 
  public get sslKeyAndCertificateRef() {
    return this.getStringAttribute('ssl_key_and_certificate_ref');
  }
  public set sslKeyAndCertificateRef(value: string) {
    this._sslKeyAndCertificateRef = value;
  }
  public resetSslKeyAndCertificateRef() {
    this._sslKeyAndCertificateRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyAndCertificateRefInput() {
    return this._sslKeyAndCertificateRef;
  }

  // strict_cert_verify - computed: false, optional: true, required: false
  private _strictCertVerify?: string; 
  public get strictCertVerify() {
    return this.getStringAttribute('strict_cert_verify');
  }
  public set strictCertVerify(value: string) {
    this._strictCertVerify = value;
  }
  public resetStrictCertVerify() {
    this._strictCertVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictCertVerifyInput() {
    return this._strictCertVerify;
  }

  // syslog_server - computed: false, optional: false, required: true
  private _syslogServer?: string; 
  public get syslogServer() {
    return this.getStringAttribute('syslog_server');
  }
  public set syslogServer(value: string) {
    this._syslogServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogServerInput() {
    return this._syslogServer;
  }

  // syslog_server_port - computed: false, optional: true, required: false
  private _syslogServerPort?: string; 
  public get syslogServerPort() {
    return this.getStringAttribute('syslog_server_port');
  }
  public set syslogServerPort(value: string) {
    this._syslogServerPort = value;
  }
  public resetSyslogServerPort() {
    this._syslogServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogServerPortInput() {
    return this._syslogServerPort;
  }

  // tls_enable - computed: false, optional: true, required: false
  private _tlsEnable?: string; 
  public get tlsEnable() {
    return this.getStringAttribute('tls_enable');
  }
  public set tlsEnable(value: string) {
    this._tlsEnable = value;
  }
  public resetTlsEnable() {
    this._tlsEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnableInput() {
    return this._tlsEnable;
  }

  // udp - computed: false, optional: false, required: true
  private _udp?: string; 
  public get udp() {
    return this.getStringAttribute('udp');
  }
  public set udp(value: string) {
    this._udp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }
}

export class AlertsyslogconfigSyslogServersList extends cdktf.ComplexList {
  public internalValue? : AlertsyslogconfigSyslogServers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): AlertsyslogconfigSyslogServersOutputReference {
    return new AlertsyslogconfigSyslogServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig avi_alertsyslogconfig}
*/
export class Alertsyslogconfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_alertsyslogconfig";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Alertsyslogconfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Alertsyslogconfig to import
  * @param importFromId The id of the existing Alertsyslogconfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Alertsyslogconfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_alertsyslogconfig", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.5/docs/resources/alertsyslogconfig avi_alertsyslogconfig} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertsyslogconfigConfig
  */
  public constructor(scope: Construct, id: string, config: AlertsyslogconfigConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_alertsyslogconfig',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.5',
        providerVersionConstraint: '30.2.5'
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
    this._name = config.name;
    this._senderHostname = config.senderHostname;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._syslogServers.internalValue = config.syslogServers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // sender_hostname - computed: true, optional: true, required: false
  private _senderHostname?: string; 
  public get senderHostname() {
    return this.getStringAttribute('sender_hostname');
  }
  public set senderHostname(value: string) {
    this._senderHostname = value;
  }
  public resetSenderHostname() {
    this._senderHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get senderHostnameInput() {
    return this._senderHostname;
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
  private _configpbAttributes = new AlertsyslogconfigConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: AlertsyslogconfigConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // syslog_servers - computed: false, optional: true, required: false
  private _syslogServers = new AlertsyslogconfigSyslogServersList(this, "syslog_servers", false);
  public get syslogServers() {
    return this._syslogServers;
  }
  public putSyslogServers(value: AlertsyslogconfigSyslogServers[] | cdktf.IResolvable) {
    this._syslogServers.internalValue = value;
  }
  public resetSyslogServers() {
    this._syslogServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogServersInput() {
    return this._syslogServers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      sender_hostname: cdktf.stringToTerraform(this._senderHostname),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(alertsyslogconfigConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      syslog_servers: cdktf.listMapper(alertsyslogconfigSyslogServersToTerraform, true)(this._syslogServers.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sender_hostname: {
        value: cdktf.stringToHclTerraform(this._senderHostname),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(alertsyslogconfigConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AlertsyslogconfigConfigpbAttributesList",
      },
      syslog_servers: {
        value: cdktf.listMapperHcl(alertsyslogconfigSyslogServersToHclTerraform, true)(this._syslogServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertsyslogconfigSyslogServersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
