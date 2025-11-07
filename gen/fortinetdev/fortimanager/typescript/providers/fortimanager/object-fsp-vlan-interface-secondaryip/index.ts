// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFspVlanInterfaceSecondaryipAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip#adom ObjectFspVlanInterfaceSecondaryipA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip#allowaccess ObjectFspVlanInterfaceSecondaryipA#allowaccess}
  */
  readonly allowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip#detectprotocol ObjectFspVlanInterfaceSecondaryipA#detectprotocol}
  */
  readonly detectprotocol?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip#detectserver ObjectFspVlanInterfaceSecondaryipA#detectserver}
  */
  readonly detectserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip#fosid ObjectFspVlanInterfaceSecondaryipA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip#gwdetect ObjectFspVlanInterfaceSecondaryipA#gwdetect}
  */
  readonly gwdetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip#ha_priority ObjectFspVlanInterfaceSecondaryipA#ha_priority}
  */
  readonly haPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip#id ObjectFspVlanInterfaceSecondaryipA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip#ip ObjectFspVlanInterfaceSecondaryipA#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip#ping_serv_status ObjectFspVlanInterfaceSecondaryipA#ping_serv_status}
  */
  readonly pingServStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip#scopetype ObjectFspVlanInterfaceSecondaryipA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip#secip_relay_ip ObjectFspVlanInterfaceSecondaryipA#secip_relay_ip}
  */
  readonly secipRelayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip#seq ObjectFspVlanInterfaceSecondaryipA#seq}
  */
  readonly seq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip#vlan ObjectFspVlanInterfaceSecondaryipA#vlan}
  */
  readonly vlan: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip fortimanager_object_fsp_vlan_interface_secondaryip}
*/
export class ObjectFspVlanInterfaceSecondaryipA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_fsp_vlan_interface_secondaryip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFspVlanInterfaceSecondaryipA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFspVlanInterfaceSecondaryipA to import
  * @param importFromId The id of the existing ObjectFspVlanInterfaceSecondaryipA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFspVlanInterfaceSecondaryipA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_fsp_vlan_interface_secondaryip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_interface_secondaryip fortimanager_object_fsp_vlan_interface_secondaryip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFspVlanInterfaceSecondaryipAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFspVlanInterfaceSecondaryipAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_fsp_vlan_interface_secondaryip',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._allowaccess = config.allowaccess;
    this._detectprotocol = config.detectprotocol;
    this._detectserver = config.detectserver;
    this._fosid = config.fosid;
    this._gwdetect = config.gwdetect;
    this._haPriority = config.haPriority;
    this._id = config.id;
    this._ip = config.ip;
    this._pingServStatus = config.pingServStatus;
    this._scopetype = config.scopetype;
    this._secipRelayIp = config.secipRelayIp;
    this._seq = config.seq;
    this._vlan = config.vlan;
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

  // allowaccess - computed: true, optional: true, required: false
  private _allowaccess?: string[]; 
  public get allowaccess() {
    return cdktf.Fn.tolist(this.getListAttribute('allowaccess'));
  }
  public set allowaccess(value: string[]) {
    this._allowaccess = value;
  }
  public resetAllowaccess() {
    this._allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowaccessInput() {
    return this._allowaccess;
  }

  // detectprotocol - computed: true, optional: true, required: false
  private _detectprotocol?: string[]; 
  public get detectprotocol() {
    return cdktf.Fn.tolist(this.getListAttribute('detectprotocol'));
  }
  public set detectprotocol(value: string[]) {
    this._detectprotocol = value;
  }
  public resetDetectprotocol() {
    this._detectprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectprotocolInput() {
    return this._detectprotocol;
  }

  // detectserver - computed: false, optional: true, required: false
  private _detectserver?: string; 
  public get detectserver() {
    return this.getStringAttribute('detectserver');
  }
  public set detectserver(value: string) {
    this._detectserver = value;
  }
  public resetDetectserver() {
    this._detectserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectserverInput() {
    return this._detectserver;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // gwdetect - computed: false, optional: true, required: false
  private _gwdetect?: string; 
  public get gwdetect() {
    return this.getStringAttribute('gwdetect');
  }
  public set gwdetect(value: string) {
    this._gwdetect = value;
  }
  public resetGwdetect() {
    this._gwdetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwdetectInput() {
    return this._gwdetect;
  }

  // ha_priority - computed: false, optional: true, required: false
  private _haPriority?: number; 
  public get haPriority() {
    return this.getNumberAttribute('ha_priority');
  }
  public set haPriority(value: number) {
    this._haPriority = value;
  }
  public resetHaPriority() {
    this._haPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haPriorityInput() {
    return this._haPriority;
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

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ping_serv_status - computed: false, optional: true, required: false
  private _pingServStatus?: number; 
  public get pingServStatus() {
    return this.getNumberAttribute('ping_serv_status');
  }
  public set pingServStatus(value: number) {
    this._pingServStatus = value;
  }
  public resetPingServStatus() {
    this._pingServStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingServStatusInput() {
    return this._pingServStatus;
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

  // secip_relay_ip - computed: false, optional: true, required: false
  private _secipRelayIp?: string; 
  public get secipRelayIp() {
    return this.getStringAttribute('secip_relay_ip');
  }
  public set secipRelayIp(value: string) {
    this._secipRelayIp = value;
  }
  public resetSecipRelayIp() {
    this._secipRelayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secipRelayIpInput() {
    return this._secipRelayIp;
  }

  // seq - computed: false, optional: true, required: false
  private _seq?: number; 
  public get seq() {
    return this.getNumberAttribute('seq');
  }
  public set seq(value: number) {
    this._seq = value;
  }
  public resetSeq() {
    this._seq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqInput() {
    return this._seq;
  }

  // vlan - computed: false, optional: false, required: true
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowaccess),
      detectprotocol: cdktf.listMapper(cdktf.stringToTerraform, false)(this._detectprotocol),
      detectserver: cdktf.stringToTerraform(this._detectserver),
      fosid: cdktf.numberToTerraform(this._fosid),
      gwdetect: cdktf.stringToTerraform(this._gwdetect),
      ha_priority: cdktf.numberToTerraform(this._haPriority),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ping_serv_status: cdktf.numberToTerraform(this._pingServStatus),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      secip_relay_ip: cdktf.stringToTerraform(this._secipRelayIp),
      seq: cdktf.numberToTerraform(this._seq),
      vlan: cdktf.stringToTerraform(this._vlan),
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
      allowaccess: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowaccess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      detectprotocol: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._detectprotocol),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      detectserver: {
        value: cdktf.stringToHclTerraform(this._detectserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gwdetect: {
        value: cdktf.stringToHclTerraform(this._gwdetect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_priority: {
        value: cdktf.numberToHclTerraform(this._haPriority),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ping_serv_status: {
        value: cdktf.numberToHclTerraform(this._pingServStatus),
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
      secip_relay_ip: {
        value: cdktf.stringToHclTerraform(this._secipRelayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seq: {
        value: cdktf.numberToHclTerraform(this._seq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan: {
        value: cdktf.stringToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
