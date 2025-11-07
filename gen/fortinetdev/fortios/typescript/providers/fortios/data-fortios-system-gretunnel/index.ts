// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_gretunnel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemGretunnelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_gretunnel#id DataFortiosSystemGretunnel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_gretunnel#name DataFortiosSystemGretunnel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_gretunnel#vdomparam DataFortiosSystemGretunnel#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_gretunnel fortios_system_gretunnel}
*/
export class DataFortiosSystemGretunnel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_gretunnel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemGretunnel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemGretunnel to import
  * @param importFromId The id of the existing DataFortiosSystemGretunnel that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_gretunnel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemGretunnel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_gretunnel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_gretunnel fortios_system_gretunnel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemGretunnelConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemGretunnelConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_gretunnel',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum_reception - computed: true, optional: false, required: false
  public get checksumReception() {
    return this.getStringAttribute('checksum_reception');
  }

  // checksum_transmission - computed: true, optional: false, required: false
  public get checksumTransmission() {
    return this.getStringAttribute('checksum_transmission');
  }

  // diffservcode - computed: true, optional: false, required: false
  public get diffservcode() {
    return this.getStringAttribute('diffservcode');
  }

  // dscp_copying - computed: true, optional: false, required: false
  public get dscpCopying() {
    return this.getStringAttribute('dscp_copying');
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

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // keepalive_failtimes - computed: true, optional: false, required: false
  public get keepaliveFailtimes() {
    return this.getNumberAttribute('keepalive_failtimes');
  }

  // keepalive_interval - computed: true, optional: false, required: false
  public get keepaliveInterval() {
    return this.getNumberAttribute('keepalive_interval');
  }

  // key_inbound - computed: true, optional: false, required: false
  public get keyInbound() {
    return this.getNumberAttribute('key_inbound');
  }

  // key_outbound - computed: true, optional: false, required: false
  public get keyOutbound() {
    return this.getNumberAttribute('key_outbound');
  }

  // local_gw - computed: true, optional: false, required: false
  public get localGw() {
    return this.getStringAttribute('local_gw');
  }

  // local_gw6 - computed: true, optional: false, required: false
  public get localGw6() {
    return this.getStringAttribute('local_gw6');
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

  // remote_gw - computed: true, optional: false, required: false
  public get remoteGw() {
    return this.getStringAttribute('remote_gw');
  }

  // remote_gw6 - computed: true, optional: false, required: false
  public get remoteGw6() {
    return this.getStringAttribute('remote_gw6');
  }

  // sequence_number_reception - computed: true, optional: false, required: false
  public get sequenceNumberReception() {
    return this.getStringAttribute('sequence_number_reception');
  }

  // sequence_number_transmission - computed: true, optional: false, required: false
  public get sequenceNumberTransmission() {
    return this.getStringAttribute('sequence_number_transmission');
  }

  // use_sdwan - computed: true, optional: false, required: false
  public get useSdwan() {
    return this.getStringAttribute('use_sdwan');
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
