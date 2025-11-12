// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_swehhash
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuSwehhashConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_swehhash#adom ObjectSystemNpuSwehhash#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_swehhash#computation ObjectSystemNpuSwehhash#computation}
  */
  readonly computation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_swehhash#destination_ip_lower_16 ObjectSystemNpuSwehhash#destination_ip_lower_16}
  */
  readonly destinationIpLower16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_swehhash#destination_ip_upper_16 ObjectSystemNpuSwehhash#destination_ip_upper_16}
  */
  readonly destinationIpUpper16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_swehhash#destination_port ObjectSystemNpuSwehhash#destination_port}
  */
  readonly destinationPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_swehhash#id ObjectSystemNpuSwehhash#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_swehhash#ip_protocol ObjectSystemNpuSwehhash#ip_protocol}
  */
  readonly ipProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_swehhash#netmask_length ObjectSystemNpuSwehhash#netmask_length}
  */
  readonly netmaskLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_swehhash#scopetype ObjectSystemNpuSwehhash#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_swehhash#source_ip_lower_16 ObjectSystemNpuSwehhash#source_ip_lower_16}
  */
  readonly sourceIpLower16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_swehhash#source_ip_upper_16 ObjectSystemNpuSwehhash#source_ip_upper_16}
  */
  readonly sourceIpUpper16?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_swehhash#source_port ObjectSystemNpuSwehhash#source_port}
  */
  readonly sourcePort?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_swehhash fortimanager_object_system_npu_swehhash}
*/
export class ObjectSystemNpuSwehhash extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_swehhash";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuSwehhash resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuSwehhash to import
  * @param importFromId The id of the existing ObjectSystemNpuSwehhash that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_swehhash#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuSwehhash to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_swehhash", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_swehhash fortimanager_object_system_npu_swehhash} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuSwehhashConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuSwehhashConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_swehhash',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._computation = config.computation;
    this._destinationIpLower16 = config.destinationIpLower16;
    this._destinationIpUpper16 = config.destinationIpUpper16;
    this._destinationPort = config.destinationPort;
    this._id = config.id;
    this._ipProtocol = config.ipProtocol;
    this._netmaskLength = config.netmaskLength;
    this._scopetype = config.scopetype;
    this._sourceIpLower16 = config.sourceIpLower16;
    this._sourceIpUpper16 = config.sourceIpUpper16;
    this._sourcePort = config.sourcePort;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // computation - computed: true, optional: true, required: false
  private _computation?: string; 
  public get computation() {
    return this.getStringAttribute('computation');
  }
  public set computation(value: string) {
    this._computation = value;
  }
  public resetComputation() {
    this._computation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computationInput() {
    return this._computation;
  }

  // destination_ip_lower_16 - computed: true, optional: true, required: false
  private _destinationIpLower16?: string; 
  public get destinationIpLower16() {
    return this.getStringAttribute('destination_ip_lower_16');
  }
  public set destinationIpLower16(value: string) {
    this._destinationIpLower16 = value;
  }
  public resetDestinationIpLower16() {
    this._destinationIpLower16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpLower16Input() {
    return this._destinationIpLower16;
  }

  // destination_ip_upper_16 - computed: true, optional: true, required: false
  private _destinationIpUpper16?: string; 
  public get destinationIpUpper16() {
    return this.getStringAttribute('destination_ip_upper_16');
  }
  public set destinationIpUpper16(value: string) {
    this._destinationIpUpper16 = value;
  }
  public resetDestinationIpUpper16() {
    this._destinationIpUpper16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpUpper16Input() {
    return this._destinationIpUpper16;
  }

  // destination_port - computed: true, optional: true, required: false
  private _destinationPort?: string; 
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }
  public set destinationPort(value: string) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
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

  // ip_protocol - computed: true, optional: true, required: false
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  public resetIpProtocol() {
    this._ipProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // netmask_length - computed: true, optional: true, required: false
  private _netmaskLength?: number; 
  public get netmaskLength() {
    return this.getNumberAttribute('netmask_length');
  }
  public set netmaskLength(value: number) {
    this._netmaskLength = value;
  }
  public resetNetmaskLength() {
    this._netmaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskLengthInput() {
    return this._netmaskLength;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // source_ip_lower_16 - computed: true, optional: true, required: false
  private _sourceIpLower16?: string; 
  public get sourceIpLower16() {
    return this.getStringAttribute('source_ip_lower_16');
  }
  public set sourceIpLower16(value: string) {
    this._sourceIpLower16 = value;
  }
  public resetSourceIpLower16() {
    this._sourceIpLower16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpLower16Input() {
    return this._sourceIpLower16;
  }

  // source_ip_upper_16 - computed: true, optional: true, required: false
  private _sourceIpUpper16?: string; 
  public get sourceIpUpper16() {
    return this.getStringAttribute('source_ip_upper_16');
  }
  public set sourceIpUpper16(value: string) {
    this._sourceIpUpper16 = value;
  }
  public resetSourceIpUpper16() {
    this._sourceIpUpper16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpUpper16Input() {
    return this._sourceIpUpper16;
  }

  // source_port - computed: true, optional: true, required: false
  private _sourcePort?: string; 
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }
  public set sourcePort(value: string) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      computation: cdktf.stringToTerraform(this._computation),
      destination_ip_lower_16: cdktf.stringToTerraform(this._destinationIpLower16),
      destination_ip_upper_16: cdktf.stringToTerraform(this._destinationIpUpper16),
      destination_port: cdktf.stringToTerraform(this._destinationPort),
      id: cdktf.stringToTerraform(this._id),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      netmask_length: cdktf.numberToTerraform(this._netmaskLength),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      source_ip_lower_16: cdktf.stringToTerraform(this._sourceIpLower16),
      source_ip_upper_16: cdktf.stringToTerraform(this._sourceIpUpper16),
      source_port: cdktf.stringToTerraform(this._sourcePort),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      computation: {
        value: cdktf.stringToHclTerraform(this._computation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_ip_lower_16: {
        value: cdktf.stringToHclTerraform(this._destinationIpLower16),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_ip_upper_16: {
        value: cdktf.stringToHclTerraform(this._destinationIpUpper16),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port: {
        value: cdktf.stringToHclTerraform(this._destinationPort),
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
      ip_protocol: {
        value: cdktf.stringToHclTerraform(this._ipProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netmask_length: {
        value: cdktf.numberToHclTerraform(this._netmaskLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip_lower_16: {
        value: cdktf.stringToHclTerraform(this._sourceIpLower16),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip_upper_16: {
        value: cdktf.stringToHclTerraform(this._sourceIpUpper16),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port: {
        value: cdktf.stringToHclTerraform(this._sourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
