// https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/host_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HostInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * 
  * - `transport.ssh` (Object) the ssh transport configuration
  * - `transport.ssh.user` (String) the ssh login user|string
  * - `transport.ssh.host` (String) the remote host to access
  * - `transport.ssh.private_key` (String) the private key as a string
  * - `transport.ssh.private_key_path` (String) the path to a private key file
  * - `transport.ssh.passphrase` (String) a passphrase if the private key requires one
  * - `transport.ssh.passphrase_path` (String) a path to a file with the passphrase for the private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/host_info#transport HostInfo#transport}
  */
  readonly transport?: { [key: string]: any };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/host_info enos_host_info}
*/
export class HostInfo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "enos_host_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HostInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HostInfo to import
  * @param importFromId The id of the existing HostInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/host_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HostInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "enos_host_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp-forge/enos/0.6.3/docs/resources/host_info enos_host_info} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HostInfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HostInfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'enos_host_info',
      terraformGeneratorMetadata: {
        providerName: 'enos',
        providerVersion: '0.6.3',
        providerVersionConstraint: '0.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._transport = config.transport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arch - computed: true, optional: false, required: false
  public get arch() {
    return this.getStringAttribute('arch');
  }

  // distro - computed: true, optional: false, required: false
  public get distro() {
    return this.getStringAttribute('distro');
  }

  // distro_version - computed: true, optional: false, required: false
  public get distroVersion() {
    return this.getStringAttribute('distro_version');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pid1 - computed: true, optional: false, required: false
  public get pid1() {
    return this.getStringAttribute('pid1');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // transport - computed: false, optional: true, required: false
  private _transport?: { [key: string]: any }; 
  public get transport() {
    return this.getAnyMapAttribute('transport');
  }
  public set transport(value: { [key: string]: any }) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      transport: cdktf.hashMapper(cdktf.anyToTerraform)(this._transport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      transport: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._transport),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
