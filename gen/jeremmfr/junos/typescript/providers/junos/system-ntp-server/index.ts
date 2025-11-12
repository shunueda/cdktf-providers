// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_ntp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemNtpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Address of server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_ntp_server#address SystemNtpServer#address}
  */
  readonly address: string;
  /**
  * Authentication key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_ntp_server#key SystemNtpServer#key}
  */
  readonly key?: number;
  /**
  * Prefer this peer_serv.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_ntp_server#prefer SystemNtpServer#prefer}
  */
  readonly prefer?: boolean | cdktf.IResolvable;
  /**
  * Routing instance through which server is reachable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_ntp_server#routing_instance SystemNtpServer#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * NTP version to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_ntp_server#version SystemNtpServer#version}
  */
  readonly version?: number;
  /**
  * nts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_ntp_server#nts SystemNtpServer#nts}
  */
  readonly nts?: SystemNtpServerNts;
}
export interface SystemNtpServerNts {
  /**
  * Container string for distinguished name of server to remote identity of server for verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_ntp_server#remote_identity_distinguished_name_container SystemNtpServer#remote_identity_distinguished_name_container}
  */
  readonly remoteIdentityDistinguishedNameContainer?: string;
  /**
  * Wildcard string for distinguished name of server to remote identity of server for verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_ntp_server#remote_identity_distinguished_name_wildcard SystemNtpServer#remote_identity_distinguished_name_wildcard}
  */
  readonly remoteIdentityDistinguishedNameWildcard?: string;
  /**
  * Fully-qualified domain name to remote identity of server for verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_ntp_server#remote_identity_hostname SystemNtpServer#remote_identity_hostname}
  */
  readonly remoteIdentityHostname?: string;
}

export function systemNtpServerNtsToTerraform(struct?: SystemNtpServerNts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remote_identity_distinguished_name_container: cdktf.stringToTerraform(struct!.remoteIdentityDistinguishedNameContainer),
    remote_identity_distinguished_name_wildcard: cdktf.stringToTerraform(struct!.remoteIdentityDistinguishedNameWildcard),
    remote_identity_hostname: cdktf.stringToTerraform(struct!.remoteIdentityHostname),
  }
}


export function systemNtpServerNtsToHclTerraform(struct?: SystemNtpServerNts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remote_identity_distinguished_name_container: {
      value: cdktf.stringToHclTerraform(struct!.remoteIdentityDistinguishedNameContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_identity_distinguished_name_wildcard: {
      value: cdktf.stringToHclTerraform(struct!.remoteIdentityDistinguishedNameWildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_identity_hostname: {
      value: cdktf.stringToHclTerraform(struct!.remoteIdentityHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemNtpServerNtsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SystemNtpServerNts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remoteIdentityDistinguishedNameContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIdentityDistinguishedNameContainer = this._remoteIdentityDistinguishedNameContainer;
    }
    if (this._remoteIdentityDistinguishedNameWildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIdentityDistinguishedNameWildcard = this._remoteIdentityDistinguishedNameWildcard;
    }
    if (this._remoteIdentityHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIdentityHostname = this._remoteIdentityHostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemNtpServerNts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remoteIdentityDistinguishedNameContainer = undefined;
      this._remoteIdentityDistinguishedNameWildcard = undefined;
      this._remoteIdentityHostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remoteIdentityDistinguishedNameContainer = value.remoteIdentityDistinguishedNameContainer;
      this._remoteIdentityDistinguishedNameWildcard = value.remoteIdentityDistinguishedNameWildcard;
      this._remoteIdentityHostname = value.remoteIdentityHostname;
    }
  }

  // remote_identity_distinguished_name_container - computed: false, optional: true, required: false
  private _remoteIdentityDistinguishedNameContainer?: string; 
  public get remoteIdentityDistinguishedNameContainer() {
    return this.getStringAttribute('remote_identity_distinguished_name_container');
  }
  public set remoteIdentityDistinguishedNameContainer(value: string) {
    this._remoteIdentityDistinguishedNameContainer = value;
  }
  public resetRemoteIdentityDistinguishedNameContainer() {
    this._remoteIdentityDistinguishedNameContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdentityDistinguishedNameContainerInput() {
    return this._remoteIdentityDistinguishedNameContainer;
  }

  // remote_identity_distinguished_name_wildcard - computed: false, optional: true, required: false
  private _remoteIdentityDistinguishedNameWildcard?: string; 
  public get remoteIdentityDistinguishedNameWildcard() {
    return this.getStringAttribute('remote_identity_distinguished_name_wildcard');
  }
  public set remoteIdentityDistinguishedNameWildcard(value: string) {
    this._remoteIdentityDistinguishedNameWildcard = value;
  }
  public resetRemoteIdentityDistinguishedNameWildcard() {
    this._remoteIdentityDistinguishedNameWildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdentityDistinguishedNameWildcardInput() {
    return this._remoteIdentityDistinguishedNameWildcard;
  }

  // remote_identity_hostname - computed: false, optional: true, required: false
  private _remoteIdentityHostname?: string; 
  public get remoteIdentityHostname() {
    return this.getStringAttribute('remote_identity_hostname');
  }
  public set remoteIdentityHostname(value: string) {
    this._remoteIdentityHostname = value;
  }
  public resetRemoteIdentityHostname() {
    this._remoteIdentityHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdentityHostnameInput() {
    return this._remoteIdentityHostname;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_ntp_server junos_system_ntp_server}
*/
export class SystemNtpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_system_ntp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemNtpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemNtpServer to import
  * @param importFromId The id of the existing SystemNtpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_ntp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemNtpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_system_ntp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/system_ntp_server junos_system_ntp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemNtpServerConfig
  */
  public constructor(scope: Construct, id: string, config: SystemNtpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_system_ntp_server',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._key = config.key;
    this._prefer = config.prefer;
    this._routingInstance = config.routingInstance;
    this._version = config.version;
    this._nts.internalValue = config.nts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: false, optional: true, required: false
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // prefer - computed: false, optional: true, required: false
  private _prefer?: boolean | cdktf.IResolvable; 
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }
  public set prefer(value: boolean | cdktf.IResolvable) {
    this._prefer = value;
  }
  public resetPrefer() {
    this._prefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferInput() {
    return this._prefer;
  }

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // nts - computed: false, optional: true, required: false
  private _nts = new SystemNtpServerNtsOutputReference(this, "nts");
  public get nts() {
    return this._nts;
  }
  public putNts(value: SystemNtpServerNts) {
    this._nts.internalValue = value;
  }
  public resetNts() {
    this._nts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntsInput() {
    return this._nts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      key: cdktf.numberToTerraform(this._key),
      prefer: cdktf.booleanToTerraform(this._prefer),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      version: cdktf.numberToTerraform(this._version),
      nts: systemNtpServerNtsToTerraform(this._nts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.numberToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefer: {
        value: cdktf.booleanToHclTerraform(this._prefer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nts: {
        value: systemNtpServerNtsToHclTerraform(this._nts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SystemNtpServerNts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
