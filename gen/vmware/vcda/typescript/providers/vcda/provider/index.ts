// https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcdaProviderConfig {
  /**
  * The local password of the appliance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs#local_password VcdaProvider#local_password}
  */
  readonly localPassword: string;
  /**
  * The local user of the appliance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs#local_user VcdaProvider#local_user}
  */
  readonly localUser: string;
  /**
  * The IP address of either the Cloud Director Replication Management Appliance or the vCenter Replication Management Appliance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs#vcda_ip VcdaProvider#vcda_ip}
  */
  readonly vcdaIp: string;
  /**
  * When set, the vSphere client establishes an insecure TLS connection without performing certificate validations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs#vsphere_allow_unverified_ssl VcdaProvider#vsphere_allow_unverified_ssl}
  */
  readonly vsphereAllowUnverifiedSsl?: boolean | cdktf.IResolvable;
  /**
  * The password of the user for performing vSphere API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs#vsphere_password VcdaProvider#vsphere_password}
  */
  readonly vspherePassword: string;
  /**
  * The vSphere server name for performing vSphere API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs#vsphere_server VcdaProvider#vsphere_server}
  */
  readonly vsphereServer: string;
  /**
  * The user name for performing vSphere API operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs#vsphere_user VcdaProvider#vsphere_user}
  */
  readonly vsphereUser: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs#alias VcdaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs vcda}
*/
export class VcdaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcda";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcdaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcdaProvider to import
  * @param importFromId The id of the existing VcdaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcdaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcda", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcda/2.1.0/docs vcda} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcdaProviderConfig
  */
  public constructor(scope: Construct, id: string, config: VcdaProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'vcda',
      terraformGeneratorMetadata: {
        providerName: 'vcda',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      terraformProviderSource: 'vmware/vcda'
    });
    this._localPassword = config.localPassword;
    this._localUser = config.localUser;
    this._vcdaIp = config.vcdaIp;
    this._vsphereAllowUnverifiedSsl = config.vsphereAllowUnverifiedSsl;
    this._vspherePassword = config.vspherePassword;
    this._vsphereServer = config.vsphereServer;
    this._vsphereUser = config.vsphereUser;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // local_password - computed: false, optional: false, required: true
  private _localPassword?: string; 
  public get localPassword() {
    return this._localPassword;
  }
  public set localPassword(value: string | undefined) {
    this._localPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localPasswordInput() {
    return this._localPassword;
  }

  // local_user - computed: false, optional: false, required: true
  private _localUser?: string; 
  public get localUser() {
    return this._localUser;
  }
  public set localUser(value: string | undefined) {
    this._localUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localUserInput() {
    return this._localUser;
  }

  // vcda_ip - computed: false, optional: false, required: true
  private _vcdaIp?: string; 
  public get vcdaIp() {
    return this._vcdaIp;
  }
  public set vcdaIp(value: string | undefined) {
    this._vcdaIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcdaIpInput() {
    return this._vcdaIp;
  }

  // vsphere_allow_unverified_ssl - computed: false, optional: true, required: false
  private _vsphereAllowUnverifiedSsl?: boolean | cdktf.IResolvable; 
  public get vsphereAllowUnverifiedSsl() {
    return this._vsphereAllowUnverifiedSsl;
  }
  public set vsphereAllowUnverifiedSsl(value: boolean | cdktf.IResolvable | undefined) {
    this._vsphereAllowUnverifiedSsl = value;
  }
  public resetVsphereAllowUnverifiedSsl() {
    this._vsphereAllowUnverifiedSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereAllowUnverifiedSslInput() {
    return this._vsphereAllowUnverifiedSsl;
  }

  // vsphere_password - computed: false, optional: false, required: true
  private _vspherePassword?: string; 
  public get vspherePassword() {
    return this._vspherePassword;
  }
  public set vspherePassword(value: string | undefined) {
    this._vspherePassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vspherePasswordInput() {
    return this._vspherePassword;
  }

  // vsphere_server - computed: false, optional: false, required: true
  private _vsphereServer?: string; 
  public get vsphereServer() {
    return this._vsphereServer;
  }
  public set vsphereServer(value: string | undefined) {
    this._vsphereServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereServerInput() {
    return this._vsphereServer;
  }

  // vsphere_user - computed: false, optional: false, required: true
  private _vsphereUser?: string; 
  public get vsphereUser() {
    return this._vsphereUser;
  }
  public set vsphereUser(value: string | undefined) {
    this._vsphereUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereUserInput() {
    return this._vsphereUser;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      local_password: cdktf.stringToTerraform(this._localPassword),
      local_user: cdktf.stringToTerraform(this._localUser),
      vcda_ip: cdktf.stringToTerraform(this._vcdaIp),
      vsphere_allow_unverified_ssl: cdktf.booleanToTerraform(this._vsphereAllowUnverifiedSsl),
      vsphere_password: cdktf.stringToTerraform(this._vspherePassword),
      vsphere_server: cdktf.stringToTerraform(this._vsphereServer),
      vsphere_user: cdktf.stringToTerraform(this._vsphereUser),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      local_password: {
        value: cdktf.stringToHclTerraform(this._localPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_user: {
        value: cdktf.stringToHclTerraform(this._localUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcda_ip: {
        value: cdktf.stringToHclTerraform(this._vcdaIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vsphere_allow_unverified_ssl: {
        value: cdktf.booleanToHclTerraform(this._vsphereAllowUnverifiedSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vsphere_password: {
        value: cdktf.stringToHclTerraform(this._vspherePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vsphere_server: {
        value: cdktf.stringToHclTerraform(this._vsphereServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vsphere_user: {
        value: cdktf.stringToHclTerraform(this._vsphereUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
