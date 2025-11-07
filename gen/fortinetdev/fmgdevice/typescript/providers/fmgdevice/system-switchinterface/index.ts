// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_switchinterface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSwitchinterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_switchinterface#device_name SystemSwitchinterface#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_switchinterface#id SystemSwitchinterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_switchinterface#intra_switch_policy SystemSwitchinterface#intra_switch_policy}
  */
  readonly intraSwitchPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_switchinterface#mac_ttl SystemSwitchinterface#mac_ttl}
  */
  readonly macTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_switchinterface#member SystemSwitchinterface#member}
  */
  readonly member?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_switchinterface#name SystemSwitchinterface#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_switchinterface#span SystemSwitchinterface#span}
  */
  readonly span?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_switchinterface#span_dest_port SystemSwitchinterface#span_dest_port}
  */
  readonly spanDestPort?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_switchinterface#span_direction SystemSwitchinterface#span_direction}
  */
  readonly spanDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_switchinterface#span_source_port SystemSwitchinterface#span_source_port}
  */
  readonly spanSourcePort?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_switchinterface#type SystemSwitchinterface#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_switchinterface#vdom SystemSwitchinterface#vdom}
  */
  readonly vdom?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_switchinterface fmgdevice_system_switchinterface}
*/
export class SystemSwitchinterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_switchinterface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSwitchinterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSwitchinterface to import
  * @param importFromId The id of the existing SystemSwitchinterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_switchinterface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSwitchinterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_switchinterface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_switchinterface fmgdevice_system_switchinterface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSwitchinterfaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSwitchinterfaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_switchinterface',
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
    this._id = config.id;
    this._intraSwitchPolicy = config.intraSwitchPolicy;
    this._macTtl = config.macTtl;
    this._member = config.member;
    this._name = config.name;
    this._span = config.span;
    this._spanDestPort = config.spanDestPort;
    this._spanDirection = config.spanDirection;
    this._spanSourcePort = config.spanSourcePort;
    this._type = config.type;
    this._vdom = config.vdom;
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

  // intra_switch_policy - computed: true, optional: true, required: false
  private _intraSwitchPolicy?: string; 
  public get intraSwitchPolicy() {
    return this.getStringAttribute('intra_switch_policy');
  }
  public set intraSwitchPolicy(value: string) {
    this._intraSwitchPolicy = value;
  }
  public resetIntraSwitchPolicy() {
    this._intraSwitchPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intraSwitchPolicyInput() {
    return this._intraSwitchPolicy;
  }

  // mac_ttl - computed: true, optional: true, required: false
  private _macTtl?: number; 
  public get macTtl() {
    return this.getNumberAttribute('mac_ttl');
  }
  public set macTtl(value: number) {
    this._macTtl = value;
  }
  public resetMacTtl() {
    this._macTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTtlInput() {
    return this._macTtl;
  }

  // member - computed: true, optional: true, required: false
  private _member?: string[]; 
  public get member() {
    return cdktf.Fn.tolist(this.getListAttribute('member'));
  }
  public set member(value: string[]) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // name - computed: false, optional: true, required: false
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

  // span - computed: true, optional: true, required: false
  private _span?: string; 
  public get span() {
    return this.getStringAttribute('span');
  }
  public set span(value: string) {
    this._span = value;
  }
  public resetSpan() {
    this._span = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanInput() {
    return this._span;
  }

  // span_dest_port - computed: true, optional: true, required: false
  private _spanDestPort?: string[]; 
  public get spanDestPort() {
    return cdktf.Fn.tolist(this.getListAttribute('span_dest_port'));
  }
  public set spanDestPort(value: string[]) {
    this._spanDestPort = value;
  }
  public resetSpanDestPort() {
    this._spanDestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanDestPortInput() {
    return this._spanDestPort;
  }

  // span_direction - computed: true, optional: true, required: false
  private _spanDirection?: string; 
  public get spanDirection() {
    return this.getStringAttribute('span_direction');
  }
  public set spanDirection(value: string) {
    this._spanDirection = value;
  }
  public resetSpanDirection() {
    this._spanDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanDirectionInput() {
    return this._spanDirection;
  }

  // span_source_port - computed: true, optional: true, required: false
  private _spanSourcePort?: string[]; 
  public get spanSourcePort() {
    return cdktf.Fn.tolist(this.getListAttribute('span_source_port'));
  }
  public set spanSourcePort(value: string[]) {
    this._spanSourcePort = value;
  }
  public resetSpanSourcePort() {
    this._spanSourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanSourcePortInput() {
    return this._spanSourcePort;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vdom - computed: true, optional: true, required: false
  private _vdom?: string[]; 
  public get vdom() {
    return cdktf.Fn.tolist(this.getListAttribute('vdom'));
  }
  public set vdom(value: string[]) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      intra_switch_policy: cdktf.stringToTerraform(this._intraSwitchPolicy),
      mac_ttl: cdktf.numberToTerraform(this._macTtl),
      member: cdktf.listMapper(cdktf.stringToTerraform, false)(this._member),
      name: cdktf.stringToTerraform(this._name),
      span: cdktf.stringToTerraform(this._span),
      span_dest_port: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spanDestPort),
      span_direction: cdktf.stringToTerraform(this._spanDirection),
      span_source_port: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spanSourcePort),
      type: cdktf.stringToTerraform(this._type),
      vdom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vdom),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intra_switch_policy: {
        value: cdktf.stringToHclTerraform(this._intraSwitchPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_ttl: {
        value: cdktf.numberToHclTerraform(this._macTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      member: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._member),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      span: {
        value: cdktf.stringToHclTerraform(this._span),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      span_dest_port: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spanDestPort),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      span_direction: {
        value: cdktf.stringToHclTerraform(this._spanDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      span_source_port: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spanSourcePort),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vdom),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
