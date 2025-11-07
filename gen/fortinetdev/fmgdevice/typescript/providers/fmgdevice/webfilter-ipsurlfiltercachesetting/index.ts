// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_ipsurlfiltercachesetting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebfilterIpsurlfiltercachesettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_ipsurlfiltercachesetting#device_name WebfilterIpsurlfiltercachesetting#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_ipsurlfiltercachesetting#dns_retry_interval WebfilterIpsurlfiltercachesetting#dns_retry_interval}
  */
  readonly dnsRetryInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_ipsurlfiltercachesetting#extended_ttl WebfilterIpsurlfiltercachesetting#extended_ttl}
  */
  readonly extendedTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_ipsurlfiltercachesetting#id WebfilterIpsurlfiltercachesetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_ipsurlfiltercachesetting fmgdevice_webfilter_ipsurlfiltercachesetting}
*/
export class WebfilterIpsurlfiltercachesetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_webfilter_ipsurlfiltercachesetting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebfilterIpsurlfiltercachesetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebfilterIpsurlfiltercachesetting to import
  * @param importFromId The id of the existing WebfilterIpsurlfiltercachesetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_ipsurlfiltercachesetting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebfilterIpsurlfiltercachesetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_webfilter_ipsurlfiltercachesetting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/webfilter_ipsurlfiltercachesetting fmgdevice_webfilter_ipsurlfiltercachesetting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebfilterIpsurlfiltercachesettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WebfilterIpsurlfiltercachesettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_webfilter_ipsurlfiltercachesetting',
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
    this._deviceName = config.deviceName;
    this._dnsRetryInterval = config.dnsRetryInterval;
    this._extendedTtl = config.extendedTtl;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dns_retry_interval - computed: false, optional: true, required: false
  private _dnsRetryInterval?: number; 
  public get dnsRetryInterval() {
    return this.getNumberAttribute('dns_retry_interval');
  }
  public set dnsRetryInterval(value: number) {
    this._dnsRetryInterval = value;
  }
  public resetDnsRetryInterval() {
    this._dnsRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRetryIntervalInput() {
    return this._dnsRetryInterval;
  }

  // extended_ttl - computed: false, optional: true, required: false
  private _extendedTtl?: number; 
  public get extendedTtl() {
    return this.getNumberAttribute('extended_ttl');
  }
  public set extendedTtl(value: number) {
    this._extendedTtl = value;
  }
  public resetExtendedTtl() {
    this._extendedTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedTtlInput() {
    return this._extendedTtl;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      dns_retry_interval: cdktf.numberToTerraform(this._dnsRetryInterval),
      extended_ttl: cdktf.numberToTerraform(this._extendedTtl),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_retry_interval: {
        value: cdktf.numberToHclTerraform(this._dnsRetryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extended_ttl: {
        value: cdktf.numberToHclTerraform(this._extendedTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
