// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns64
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDns64Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns64#always_synthesize_aaaa_record SystemDns64#always_synthesize_aaaa_record}
  */
  readonly alwaysSynthesizeAaaaRecord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns64#dns64_prefix SystemDns64#dns64_prefix}
  */
  readonly dns64Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns64#id SystemDns64#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns64#status SystemDns64#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns64#vdomparam SystemDns64#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns64 fortios_system_dns64}
*/
export class SystemDns64 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_dns64";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDns64 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDns64 to import
  * @param importFromId The id of the existing SystemDns64 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns64#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDns64 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_dns64", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_dns64 fortios_system_dns64} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDns64Config = {}
  */
  public constructor(scope: Construct, id: string, config: SystemDns64Config = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_dns64',
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
    this._alwaysSynthesizeAaaaRecord = config.alwaysSynthesizeAaaaRecord;
    this._dns64Prefix = config.dns64Prefix;
    this._id = config.id;
    this._status = config.status;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_synthesize_aaaa_record - computed: true, optional: true, required: false
  private _alwaysSynthesizeAaaaRecord?: string; 
  public get alwaysSynthesizeAaaaRecord() {
    return this.getStringAttribute('always_synthesize_aaaa_record');
  }
  public set alwaysSynthesizeAaaaRecord(value: string) {
    this._alwaysSynthesizeAaaaRecord = value;
  }
  public resetAlwaysSynthesizeAaaaRecord() {
    this._alwaysSynthesizeAaaaRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysSynthesizeAaaaRecordInput() {
    return this._alwaysSynthesizeAaaaRecord;
  }

  // dns64_prefix - computed: true, optional: true, required: false
  private _dns64Prefix?: string; 
  public get dns64Prefix() {
    return this.getStringAttribute('dns64_prefix');
  }
  public set dns64Prefix(value: string) {
    this._dns64Prefix = value;
  }
  public resetDns64Prefix() {
    this._dns64Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns64PrefixInput() {
    return this._dns64Prefix;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vdomparam - computed: true, optional: true, required: false
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
      always_synthesize_aaaa_record: cdktf.stringToTerraform(this._alwaysSynthesizeAaaaRecord),
      dns64_prefix: cdktf.stringToTerraform(this._dns64Prefix),
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.stringToTerraform(this._status),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_synthesize_aaaa_record: {
        value: cdktf.stringToHclTerraform(this._alwaysSynthesizeAaaaRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns64_prefix: {
        value: cdktf.stringToHclTerraform(this._dns64Prefix),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
