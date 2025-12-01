// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_forward_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackForwardEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_forward_entry#external_ip ApsarastackForwardEntry#external_ip}
  */
  readonly externalIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_forward_entry#external_port ApsarastackForwardEntry#external_port}
  */
  readonly externalPort: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_forward_entry#forward_entry_name ApsarastackForwardEntry#forward_entry_name}
  */
  readonly forwardEntryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_forward_entry#forward_table_id ApsarastackForwardEntry#forward_table_id}
  */
  readonly forwardTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_forward_entry#id ApsarastackForwardEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_forward_entry#internal_ip ApsarastackForwardEntry#internal_ip}
  */
  readonly internalIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_forward_entry#internal_port ApsarastackForwardEntry#internal_port}
  */
  readonly internalPort: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_forward_entry#ip_protocol ApsarastackForwardEntry#ip_protocol}
  */
  readonly ipProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_forward_entry#name ApsarastackForwardEntry#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_forward_entry apsarastack_forward_entry}
*/
export class ApsarastackForwardEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_forward_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackForwardEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackForwardEntry to import
  * @param importFromId The id of the existing ApsarastackForwardEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_forward_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackForwardEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_forward_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_forward_entry apsarastack_forward_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackForwardEntryConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackForwardEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_forward_entry',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._externalIp = config.externalIp;
    this._externalPort = config.externalPort;
    this._forwardEntryName = config.forwardEntryName;
    this._forwardTableId = config.forwardTableId;
    this._id = config.id;
    this._internalIp = config.internalIp;
    this._internalPort = config.internalPort;
    this._ipProtocol = config.ipProtocol;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // external_ip - computed: false, optional: false, required: true
  private _externalIp?: string; 
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }
  public set externalIp(value: string) {
    this._externalIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp;
  }

  // external_port - computed: false, optional: false, required: true
  private _externalPort?: string; 
  public get externalPort() {
    return this.getStringAttribute('external_port');
  }
  public set externalPort(value: string) {
    this._externalPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPortInput() {
    return this._externalPort;
  }

  // forward_entry_id - computed: true, optional: false, required: false
  public get forwardEntryId() {
    return this.getStringAttribute('forward_entry_id');
  }

  // forward_entry_name - computed: true, optional: true, required: false
  private _forwardEntryName?: string; 
  public get forwardEntryName() {
    return this.getStringAttribute('forward_entry_name');
  }
  public set forwardEntryName(value: string) {
    this._forwardEntryName = value;
  }
  public resetForwardEntryName() {
    this._forwardEntryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardEntryNameInput() {
    return this._forwardEntryName;
  }

  // forward_table_id - computed: false, optional: false, required: true
  private _forwardTableId?: string; 
  public get forwardTableId() {
    return this.getStringAttribute('forward_table_id');
  }
  public set forwardTableId(value: string) {
    this._forwardTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTableIdInput() {
    return this._forwardTableId;
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

  // internal_ip - computed: false, optional: false, required: true
  private _internalIp?: string; 
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }
  public set internalIp(value: string) {
    this._internalIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
  }

  // internal_port - computed: false, optional: false, required: true
  private _internalPort?: string; 
  public get internalPort() {
    return this.getStringAttribute('internal_port');
  }
  public set internalPort(value: string) {
    this._internalPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalPortInput() {
    return this._internalPort;
  }

  // ip_protocol - computed: false, optional: false, required: true
  private _ipProtocol?: string; 
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }
  public set ipProtocol(value: string) {
    this._ipProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtocolInput() {
    return this._ipProtocol;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      external_ip: cdktf.stringToTerraform(this._externalIp),
      external_port: cdktf.stringToTerraform(this._externalPort),
      forward_entry_name: cdktf.stringToTerraform(this._forwardEntryName),
      forward_table_id: cdktf.stringToTerraform(this._forwardTableId),
      id: cdktf.stringToTerraform(this._id),
      internal_ip: cdktf.stringToTerraform(this._internalIp),
      internal_port: cdktf.stringToTerraform(this._internalPort),
      ip_protocol: cdktf.stringToTerraform(this._ipProtocol),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_ip: {
        value: cdktf.stringToHclTerraform(this._externalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_port: {
        value: cdktf.stringToHclTerraform(this._externalPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_entry_name: {
        value: cdktf.stringToHclTerraform(this._forwardEntryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_table_id: {
        value: cdktf.stringToHclTerraform(this._forwardTableId),
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
      internal_ip: {
        value: cdktf.stringToHclTerraform(this._internalIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_port: {
        value: cdktf.stringToHclTerraform(this._internalPort),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
