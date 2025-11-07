// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_trafficforwardproxy_sslciphersuites
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZtnaTrafficforwardproxySslciphersuitesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_trafficforwardproxy_sslciphersuites#cipher ZtnaTrafficforwardproxySslciphersuites#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_trafficforwardproxy_sslciphersuites#device_name ZtnaTrafficforwardproxySslciphersuites#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_trafficforwardproxy_sslciphersuites#device_vdom ZtnaTrafficforwardproxySslciphersuites#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_trafficforwardproxy_sslciphersuites#id ZtnaTrafficforwardproxySslciphersuites#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_trafficforwardproxy_sslciphersuites#priority ZtnaTrafficforwardproxySslciphersuites#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_trafficforwardproxy_sslciphersuites#traffic_forward_proxy ZtnaTrafficforwardproxySslciphersuites#traffic_forward_proxy}
  */
  readonly trafficForwardProxy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_trafficforwardproxy_sslciphersuites#versions ZtnaTrafficforwardproxySslciphersuites#versions}
  */
  readonly versions?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_trafficforwardproxy_sslciphersuites fmgdevice_ztna_trafficforwardproxy_sslciphersuites}
*/
export class ZtnaTrafficforwardproxySslciphersuites extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_ztna_trafficforwardproxy_sslciphersuites";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZtnaTrafficforwardproxySslciphersuites resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZtnaTrafficforwardproxySslciphersuites to import
  * @param importFromId The id of the existing ZtnaTrafficforwardproxySslciphersuites that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_trafficforwardproxy_sslciphersuites#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZtnaTrafficforwardproxySslciphersuites to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_ztna_trafficforwardproxy_sslciphersuites", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_trafficforwardproxy_sslciphersuites fmgdevice_ztna_trafficforwardproxy_sslciphersuites} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZtnaTrafficforwardproxySslciphersuitesConfig
  */
  public constructor(scope: Construct, id: string, config: ZtnaTrafficforwardproxySslciphersuitesConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_ztna_trafficforwardproxy_sslciphersuites',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cipher = config.cipher;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._priority = config.priority;
    this._trafficForwardProxy = config.trafficForwardProxy;
    this._versions = config.versions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cipher - computed: false, optional: true, required: false
  private _cipher?: string; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // traffic_forward_proxy - computed: false, optional: false, required: true
  private _trafficForwardProxy?: string; 
  public get trafficForwardProxy() {
    return this.getStringAttribute('traffic_forward_proxy');
  }
  public set trafficForwardProxy(value: string) {
    this._trafficForwardProxy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficForwardProxyInput() {
    return this._trafficForwardProxy;
  }

  // versions - computed: true, optional: true, required: false
  private _versions?: string[]; 
  public get versions() {
    return cdktf.Fn.tolist(this.getListAttribute('versions'));
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  public resetVersions() {
    this._versions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cipher: cdktf.stringToTerraform(this._cipher),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      traffic_forward_proxy: cdktf.stringToTerraform(this._trafficForwardProxy),
      versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._versions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cipher: {
        value: cdktf.stringToHclTerraform(this._cipher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_forward_proxy: {
        value: cdktf.stringToHclTerraform(this._trafficForwardProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      versions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._versions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
