// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFspVlanDynamicMappingDhcpserverExcluderangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange#adom ObjectFspVlanDynamicMappingDhcpserverExcluderange#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange#dynamic_mapping_name ObjectFspVlanDynamicMappingDhcpserverExcluderange#dynamic_mapping_name}
  */
  readonly dynamicMappingName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange#dynamic_mapping_vdom ObjectFspVlanDynamicMappingDhcpserverExcluderange#dynamic_mapping_vdom}
  */
  readonly dynamicMappingVdom: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange#end_ip ObjectFspVlanDynamicMappingDhcpserverExcluderange#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange#fosid ObjectFspVlanDynamicMappingDhcpserverExcluderange#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange#id ObjectFspVlanDynamicMappingDhcpserverExcluderange#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange#lease_time ObjectFspVlanDynamicMappingDhcpserverExcluderange#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange#scopetype ObjectFspVlanDynamicMappingDhcpserverExcluderange#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange#start_ip ObjectFspVlanDynamicMappingDhcpserverExcluderange#start_ip}
  */
  readonly startIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange#uci_match ObjectFspVlanDynamicMappingDhcpserverExcluderange#uci_match}
  */
  readonly uciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange#uci_string ObjectFspVlanDynamicMappingDhcpserverExcluderange#uci_string}
  */
  readonly uciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange#vci_match ObjectFspVlanDynamicMappingDhcpserverExcluderange#vci_match}
  */
  readonly vciMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange#vci_string ObjectFspVlanDynamicMappingDhcpserverExcluderange#vci_string}
  */
  readonly vciString?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange#vlan ObjectFspVlanDynamicMappingDhcpserverExcluderange#vlan}
  */
  readonly vlan: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange fortimanager_object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange}
*/
export class ObjectFspVlanDynamicMappingDhcpserverExcluderange extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFspVlanDynamicMappingDhcpserverExcluderange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFspVlanDynamicMappingDhcpserverExcluderange to import
  * @param importFromId The id of the existing ObjectFspVlanDynamicMappingDhcpserverExcluderange that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFspVlanDynamicMappingDhcpserverExcluderange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange fortimanager_object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFspVlanDynamicMappingDhcpserverExcluderangeConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFspVlanDynamicMappingDhcpserverExcluderangeConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_fsp_vlan_dynamic_mapping_dhcpserver_excluderange',
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
    this._dynamicMappingName = config.dynamicMappingName;
    this._dynamicMappingVdom = config.dynamicMappingVdom;
    this._endIp = config.endIp;
    this._fosid = config.fosid;
    this._id = config.id;
    this._leaseTime = config.leaseTime;
    this._scopetype = config.scopetype;
    this._startIp = config.startIp;
    this._uciMatch = config.uciMatch;
    this._uciString = config.uciString;
    this._vciMatch = config.vciMatch;
    this._vciString = config.vciString;
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

  // dynamic_mapping_name - computed: false, optional: false, required: true
  private _dynamicMappingName?: string; 
  public get dynamicMappingName() {
    return this.getStringAttribute('dynamic_mapping_name');
  }
  public set dynamicMappingName(value: string) {
    this._dynamicMappingName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMappingNameInput() {
    return this._dynamicMappingName;
  }

  // dynamic_mapping_vdom - computed: false, optional: false, required: true
  private _dynamicMappingVdom?: string; 
  public get dynamicMappingVdom() {
    return this.getStringAttribute('dynamic_mapping_vdom');
  }
  public set dynamicMappingVdom(value: string) {
    this._dynamicMappingVdom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMappingVdomInput() {
    return this._dynamicMappingVdom;
  }

  // end_ip - computed: true, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
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

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
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

  // start_ip - computed: true, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }

  // uci_match - computed: true, optional: true, required: false
  private _uciMatch?: string; 
  public get uciMatch() {
    return this.getStringAttribute('uci_match');
  }
  public set uciMatch(value: string) {
    this._uciMatch = value;
  }
  public resetUciMatch() {
    this._uciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciMatchInput() {
    return this._uciMatch;
  }

  // uci_string - computed: true, optional: true, required: false
  private _uciString?: string[]; 
  public get uciString() {
    return cdktf.Fn.tolist(this.getListAttribute('uci_string'));
  }
  public set uciString(value: string[]) {
    this._uciString = value;
  }
  public resetUciString() {
    this._uciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uciStringInput() {
    return this._uciString;
  }

  // vci_match - computed: true, optional: true, required: false
  private _vciMatch?: string; 
  public get vciMatch() {
    return this.getStringAttribute('vci_match');
  }
  public set vciMatch(value: string) {
    this._vciMatch = value;
  }
  public resetVciMatch() {
    this._vciMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciMatchInput() {
    return this._vciMatch;
  }

  // vci_string - computed: true, optional: true, required: false
  private _vciString?: string[]; 
  public get vciString() {
    return cdktf.Fn.tolist(this.getListAttribute('vci_string'));
  }
  public set vciString(value: string[]) {
    this._vciString = value;
  }
  public resetVciString() {
    this._vciString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vciStringInput() {
    return this._vciString;
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
      dynamic_mapping_name: cdktf.stringToTerraform(this._dynamicMappingName),
      dynamic_mapping_vdom: cdktf.stringToTerraform(this._dynamicMappingVdom),
      end_ip: cdktf.stringToTerraform(this._endIp),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      lease_time: cdktf.numberToTerraform(this._leaseTime),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      start_ip: cdktf.stringToTerraform(this._startIp),
      uci_match: cdktf.stringToTerraform(this._uciMatch),
      uci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uciString),
      vci_match: cdktf.stringToTerraform(this._vciMatch),
      vci_string: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vciString),
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
      dynamic_mapping_name: {
        value: cdktf.stringToHclTerraform(this._dynamicMappingName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_mapping_vdom: {
        value: cdktf.stringToHclTerraform(this._dynamicMappingVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_ip: {
        value: cdktf.stringToHclTerraform(this._endIp),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lease_time: {
        value: cdktf.numberToHclTerraform(this._leaseTime),
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
      start_ip: {
        value: cdktf.stringToHclTerraform(this._startIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uci_match: {
        value: cdktf.stringToHclTerraform(this._uciMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uci_string: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uciString),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vci_match: {
        value: cdktf.stringToHclTerraform(this._vciMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vci_string: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vciString),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
