// https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_acme_dns_plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentAcmeDnsPluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * API plugin name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_acme_dns_plugin#api VirtualEnvironmentAcmeDnsPlugin#api}
  */
  readonly api: string;
  /**
  * DNS plugin data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_acme_dns_plugin#data VirtualEnvironmentAcmeDnsPlugin#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * SHA1 digest of the current configuration. Prevent changes if current configuration file has a different digest. This can be used to prevent concurrent modifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_acme_dns_plugin#digest VirtualEnvironmentAcmeDnsPlugin#digest}
  */
  readonly digest?: string;
  /**
  * Flag to disable the config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_acme_dns_plugin#disable VirtualEnvironmentAcmeDnsPlugin#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * ACME Plugin ID name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_acme_dns_plugin#plugin VirtualEnvironmentAcmeDnsPlugin#plugin}
  */
  readonly plugin: string;
  /**
  * Extra delay in seconds to wait before requesting validation. Allows to cope with a long TTL of DNS records (0 - 172800).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_acme_dns_plugin#validation_delay VirtualEnvironmentAcmeDnsPlugin#validation_delay}
  */
  readonly validationDelay?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_acme_dns_plugin proxmox_virtual_environment_acme_dns_plugin}
*/
export class VirtualEnvironmentAcmeDnsPlugin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_acme_dns_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentAcmeDnsPlugin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentAcmeDnsPlugin to import
  * @param importFromId The id of the existing VirtualEnvironmentAcmeDnsPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_acme_dns_plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentAcmeDnsPlugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_acme_dns_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_acme_dns_plugin proxmox_virtual_environment_acme_dns_plugin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentAcmeDnsPluginConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentAcmeDnsPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_acme_dns_plugin',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.88.0',
        providerVersionConstraint: '0.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._api = config.api;
    this._data = config.data;
    this._digest = config.digest;
    this._disable = config.disable;
    this._plugin = config.plugin;
    this._validationDelay = config.validationDelay;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api - computed: false, optional: false, required: true
  private _api?: string; 
  public get api() {
    return this.getStringAttribute('api');
  }
  public set api(value: string) {
    this._api = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // digest - computed: true, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // plugin - computed: false, optional: false, required: true
  private _plugin?: string; 
  public get plugin() {
    return this.getStringAttribute('plugin');
  }
  public set plugin(value: string) {
    this._plugin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin;
  }

  // validation_delay - computed: true, optional: true, required: false
  private _validationDelay?: number; 
  public get validationDelay() {
    return this.getNumberAttribute('validation_delay');
  }
  public set validationDelay(value: number) {
    this._validationDelay = value;
  }
  public resetValidationDelay() {
    this._validationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationDelayInput() {
    return this._validationDelay;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api: cdktf.stringToTerraform(this._api),
      data: cdktf.hashMapper(cdktf.stringToTerraform)(this._data),
      digest: cdktf.stringToTerraform(this._digest),
      disable: cdktf.booleanToTerraform(this._disable),
      plugin: cdktf.stringToTerraform(this._plugin),
      validation_delay: cdktf.numberToTerraform(this._validationDelay),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api: {
        value: cdktf.stringToHclTerraform(this._api),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._data),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      digest: {
        value: cdktf.stringToHclTerraform(this._digest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      plugin: {
        value: cdktf.stringToHclTerraform(this._plugin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_delay: {
        value: cdktf.numberToHclTerraform(this._validationDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
